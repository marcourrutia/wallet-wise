import "./CalendarExpense.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CiCalendar } from "react-icons/ci";

export const CalendarExpense = ({ onMonthSelect = () => {} }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState(new Date());

  const today = new Date();
  const lastDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);


  const handleChange = (date) => {
    
    if (
      value.getMonth() !== date.getMonth() ||
      value.getFullYear() !== date.getFullYear()
    ) {
      setValue(date);
      const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
      setInputValue(monthYear);
      setShowCalendar(false);
      onMonthSelect(monthYear);
    }
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
          />
        </div>
      )}
    </div>
  );
};
