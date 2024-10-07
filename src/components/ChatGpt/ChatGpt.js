import "./ChatGpt.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import { sendPrompt } from "../../services/apiChatGpt";

export const ChatGpt = () => {
  const { store, actions } = useContext(Context);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalFixedExpenses, setTotalFixedExpenses] = useState(0);
  const [totalVariableExpenses, setTotalVariableExpenses] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [adviceChatGpt, setAdviceChatGpt] = useState("Advice by Chat GPT...");

  const generateCacheKey = () => {
    return `advice-${store.flowSelected}-${totalIncomes}-${totalFixedExpenses}-${totalVariableExpenses}-${totalSavings}`;
  };

  useEffect(() => {
    if (store.flowSelected) actions.getMovementsFlow(store.flowSelected);
    else setAdviceChatGpt("No flows...");
  }, [store.flowSelected]);

  useEffect(() => {
    if (store.flowSelected) {
      let incomes = 0;
      let fixedExpenses = 0;
      let variableExpenses = 0;
      let savings = 0;

      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      store.movementByAccount.forEach((movement) => {
        const movementDate = new Date(movement.transaction_date);
        if (
          movementDate.getMonth() === currentMonth &&
          movementDate.getFullYear() === currentYear
        ) {
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
  }, [store.movementByAccount]);

  useEffect(() => {
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
      const prompt = `The user is named ${store.userFullName}, and has a financial history for the current month: incomes: ${totalIncomes} CLP, fixed expenses: ${totalFixedExpenses} CLP, variable expenses: ${totalVariableExpenses} CLP, savings: ${totalSavings} CLP. Provide a brief, personalized financial advice based on this historical data for the current month (max 350 characters).`;

      sendPrompt(prompt).then((advice) => {
        if (advice) {
          setAdviceChatGpt(advice);
          localStorage.setItem(cacheKey, advice);
        }
      });
    }
  }, [totalIncomes, totalFixedExpenses, totalVariableExpenses, totalSavings]);

  return (
    <div className="chatgpt-container">
      <p>{adviceChatGpt}</p>
    </div>
  );
};
