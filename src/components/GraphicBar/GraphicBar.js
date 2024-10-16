import { useState, useContext, useEffect } from "react";
import { Context } from "../../store/context";
import "./GraphicBar.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { get } from "../../services";

export const GraphicBar = () => {
  const [data, setData] = useState([]);
  const [year, setYear] = useState("Year");
  const { store } = useContext(Context);
  const [dataMovement, setDataMovement] = useState([]);

  const getMovements = async (id) => {
    const { data, status, error } = await get(
      `/movement/${id}`,
      store.accessToken
    );
    if (status === 200) setDataMovement(data.movement);
    if (error) console.log("an error has occurred: ", error);
  };

  const formattedAmount = (amount) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  useEffect(() => {
    if (store.flowSelected) {
      getMovements(store.flowSelected);
    } else {
      setData([]);
    }
  }, [store.flowSelected, store.isNewData, store.newMovement]);

  useEffect(() => {
    if (dataMovement) {
      let tempData = {};

      dataMovement.forEach((movement) => {
        const movementDate = new Date(movement.transaction_date);
        const movementMonth = movementDate.toLocaleString("default", {
          month: "long",
        });
        const movementYear = movementDate.getUTCFullYear();
        const monthYearKey = `${movementMonth} ${movementYear}`;

        if (!tempData[monthYearKey]) {
          tempData[monthYearKey] = {
            month: movementMonth,
            incomes: 0,
            expenses: 0,
            year: movementYear,
          };
        }

        switch (movement.category) {
          case "Incomes":
            tempData[monthYearKey].incomes += movement.amount;
            break;
          case "Fixed expenses":
          case "Variable expenses":
            tempData[monthYearKey].expenses += movement.amount;
            break;
          default:
            break;
        }
      });

      const formattedData = Object.values(tempData)
        .sort((a, b) => {
          const dateA = new Date(`${a.month} 1, ${a.year}`);
          const dateB = new Date(`${b.month} 1, ${b.year}`);
          return dateA - dateB;
        })
        .slice(-5);

      if (formattedData.length > 0) {
        setYear(formattedData[formattedData.length - 1].year);
      }

      setData(
        formattedData.map((item) => ({
          name: item.month,
          incomes: item.incomes,
          expenses: item.expenses,
          incomesF: formattedAmount(item.incomes),
          expensesF: formattedAmount(item.expenses),
        }))
      );
    }
  }, [dataMovement]);

  return (
    <div className="graphic-bar-container">
      {data.length > 0 ? (
        <>
          <h3>Year: {year}</h3>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 25,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="1" />
              <XAxis dataKey="name" stroke="#f7fbfe" />
              <YAxis stroke="#f7fbfe" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="incomes"
                fill="#2E86C1"
                activeBar={<Rectangle fill="#4682B4" stroke="blue" />}
              >
                <LabelList dataKey="incomesF" position="top" fill="#fff" />
              </Bar>
              <Bar
                dataKey="expenses"
                fill="#8E44AD"
                activeBar={<Rectangle fill="#9B59B6" stroke="purple" />}
              >
                <LabelList dataKey="expensesF" position="top" fill="#fff" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <h4>No flows...</h4>
      )}
    </div>
  );
};
