import "./CalendarExpense.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CiCalendar } from "react-icons/ci";

export const CalendarExpense = ({ onMonthSelect = () => {} }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState(new Date());

  const today = new Date();
  const lastDayOfCurrentMonth = new Date(
    today.getUTCFullYear(),
    today.getUTCMonth() + 1,
    0
  );

  const currentMonth = today.getUTCMonth() + 1;
  const currentYear = today.getUTCFullYear();

  useEffect(() => {
    const monthYear = `${currentMonth}-${currentYear}`;
    setInputValue(monthYear);
    onMonthSelect(currentMonth, currentYear);
  }, []);

  const handleChange = (date) => {
    const selectedMonth = date.getUTCMonth() + 1;
    const selectedYear = date.getUTCFullYear();
    setValue(date);
    const monthYear = `${selectedMonth}-${selectedYear}`;
    setInputValue(monthYear);
    setShowCalendar(false);
    onMonthSelect(selectedMonth, selectedYear);
  };

  return (
    <div className="input-group div-general-calendar">
      <input
        type="text"
        className="input-date-expense"
        aria-label="Text input with segmented dropdown button"
        readOnly
        value={inputValue}
      />
      <div
        type="button"
        className="btn btn-outline-secondary btn-icon-expense"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <CiCalendar />
      </div>
      {showCalendar && (
        <div className="div-calendar">
          <Calendar
            value={value}
            onChange={handleChange}
            view="year"
            minDetail="year"
            maxDetail="year"
            showNavigation={true}
            maxDate={lastDayOfCurrentMonth}
            className="calendar-style"
            locale="en-US"
          />
        </div>
      )}
    </div>
  );
};
