import "./ChatGpt.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import { sendPrompt } from "../../services/apiChatGpt";
import { get } from "../../services";

export const ChatGpt2 = ({ selectMonth, selectYear, accountId }) => {
  const { store, actions } = useContext(Context);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalFixedExpenses, setTotalFixedExpenses] = useState(0);
  const [totalVariableExpenses, setTotalVariableExpenses] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [adviceChatGpt, setAdviceChatGpt] = useState("Advice by Chat GPT...");
  const [movementData, setMovementData] = useState([]);

  const generateCacheKey = () => {
    return `${selectMonth}-${accountId}-${totalIncomes}-${totalFixedExpenses}-${totalVariableExpenses}-${totalSavings}`;
  };

  const getMovements = async (id) => {
    const { data, status, error } = await get(
      `/movement/${id}`,
      store.accessToken
    );
    if (status === 200) setMovementData(data.movement);
    if (error) console.log("an error has occurred: ", error);
  };

  const newAdvice = (
    fullname,
    selectMonth,
    incomes,
    fixed,
    variable,
    savings,
    cacheKey
  ) => {
    const instruction =
      "You are a financial advisor expert, specialized in providing concise and practical advice based on the user's financial data, specifically using the 50/30/20 budgeting rule.";

    const prompt = `The user is named ${fullname}, and has a financial history for month ${selectMonth}: incomes: ${incomes} CLP, fixed expenses: ${fixed} CLP, variable expenses: ${variable} CLP, savings: ${savings} CLP. Convert the numeric month to its name, and provide a brief, personalized financial advice based on this data, evaluating their budget according to the 50/30/20 rule, categorized as fixed expenses, variable expenses, and Savings & Investments for the month of ${selectMonth} (max 350 characters).`;

    setAdviceChatGpt("Loading...");

    sendPrompt(instruction, prompt).then((advice) => {
      if (advice) {
        setAdviceChatGpt(advice);
        localStorage.setItem(cacheKey, advice);
        actions.setIsNewData(false);
      }
    });
  };

  useEffect(() => {
    if (accountId) getMovements(accountId);
    else setAdviceChatGpt("No flows...");
  }, [selectMonth]);

  useEffect(() => {
    if (movementData) {
      let incomes = 0;
      let fixedExpenses = 0;
      let variableExpenses = 0;
      let savings = 0;

      movementData.forEach((movement) => {
        const movementDate = new Date(movement.transaction_date);
        const movementMonth = movementDate.getUTCMonth() + 1;
        const movementYear = movementDate.getUTCFullYear();

        if (movementMonth === selectMonth && movementYear === selectYear) {
          switch (movement.category) {
            case "Incomes":
              incomes += movement.amount;
              break;
            case "Fixed expenses":
              fixedExpenses += movement.amount;
              break;
            case "Variable expenses":
              variableExpenses += movement.amount;
              break;
            case "Savings":
              savings += movement.amount;
              break;
            default:
              break;
          }
        }
      });

      setTotalIncomes(incomes);
      setTotalFixedExpenses(fixedExpenses);
      setTotalVariableExpenses(variableExpenses);
      setTotalSavings(savings);
    }
  }, [movementData]);

  useEffect(() => {
    if (accountId) {
      const cacheKey = generateCacheKey();
      const cachedAdvice = localStorage.getItem(cacheKey);

      if (
        totalIncomes === 0 &&
        totalFixedExpenses === 0 &&
        totalVariableExpenses === 0 &&
        totalSavings === 0
      ) {
        setAdviceChatGpt("No flows...");
      } else if (cachedAdvice) {
        setAdviceChatGpt(cachedAdvice);
      } else if (
        totalIncomes ||
        totalFixedExpenses ||
        totalVariableExpenses ||
        totalSavings
      ) {
        newAdvice(
          store.userFullName,
          selectMonth,
          totalIncomes,
          totalFixedExpenses,
          totalVariableExpenses,
          totalSavings,
          cacheKey
        );
      }
    }
  }, [totalIncomes, totalFixedExpenses, totalVariableExpenses, totalSavings]);

  return (
    <div className="chatgpt-container">
      <div className="chatgpt-container-header">
        <div>
          <h5>50/30/20 Rule advice</h5>
        </div>
      </div>
      <hr></hr>
      <p>{adviceChatGpt}</p>
    </div>
  );
};
