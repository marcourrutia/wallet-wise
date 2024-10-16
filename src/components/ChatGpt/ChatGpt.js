import "./ChatGpt.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import { sendPrompt } from "../../services/apiChatGpt";
import { get } from "../../services";
import { FiRefreshCw } from "react-icons/fi";

export const ChatGpt = () => {
  const { store, actions } = useContext(Context);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalFixedExpenses, setTotalFixedExpenses] = useState(0);
  const [totalVariableExpenses, setTotalVariableExpenses] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [adviceChatGpt, setAdviceChatGpt] = useState("Advice by Chat GPT...");
  const [newDataAccount, setNewDataAccount] = useState(false);
  const [movementData, setMovementData] = useState([]);

  const generateCacheKey = () => {
    return `advice-${store.flowSelected}-${totalIncomes}-${totalFixedExpenses}-${totalVariableExpenses}-${totalSavings}`;
  };

  const getMovements = async (id) => {
    const { data, status, error } = await get(
      `/movement/${id}`,
      store.accessToken
    );
    if (status === 200) setMovementData(data.movement);
    if (error) console.log("an error has occurred: ", error);
  };

  const newAdvice = (fullname, incomes, fixed, variable, savings, cacheKey) => {
    const instruction =
      "You are a financial advisor expert, specialized in providing concise and practical advice based on the user's financial data.";

    const prompt = `The user is named ${fullname}, and has a financial history for the previous month: incomes: ${incomes} CLP, fixed expenses: ${fixed} CLP, variable expenses: ${variable} CLP, savings: ${savings} CLP. Provide a brief, personalized financial advice based on this historical data for the previous month (max 350 characters).`;

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
    if (store.isNewData) {
      const aux = store.isNewData.includes(store.flowSelected);
      if (aux) {
        setNewDataAccount(true);
      } else {
        setNewDataAccount(false);
      }
    } else {
      setNewDataAccount(false);
    }
  }, [store.isNewData, store.flowSelected]);

  useEffect(() => {
    if (store.flowSelected) getMovements(store.flowSelected);
    else setAdviceChatGpt("No flows...");
  }, [store.flowSelected]);

  useEffect(() => {
    if (movementData) {
      let incomes = 0;
      let fixedExpenses = 0;
      let variableExpenses = 0;
      let savings = 0;

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

      movementData.forEach((movement) => {
        const movementDate = new Date(movement.transaction_date);
        const movementMonth = movementDate.getUTCMonth();
        const movementYear = movementDate.getUTCFullYear();

        if (movementMonth === previousMonth && movementYear === previousYear) {
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
    if (store.flowSelected) {
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
          <h5>Last Month's Financial Advice</h5>
          <p>Powered by ChatGPT</p>
        </div>
        <button
          onClick={() => {
            getMovements(store.flowSelected);
          }}
          className={newDataAccount ? "visible" : ""}
        >
          <FiRefreshCw />
        </button>
      </div>
      <hr></hr>
      <p>{adviceChatGpt}</p>
    </div>
  );
};
