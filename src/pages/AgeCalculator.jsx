import React, { useState } from "react";

function AgeCalculator() {
  const [selectedDate, setSelectedDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let fulldate = {
    day: d.getDate(),
    month: months[d.getMonth()],
    year: d.getFullYear(),
  };

  // Options for day
  let DayOption = [];
  for (let i = 1; i <= 31; i++) {
    DayOption.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  // Options for month
  let MonthOption = [];
  for (let m = 0; m < months.length; m++) {
    MonthOption.push(
      <option key={m} value={m + 1}>
        {months[m]}
      </option>
    );
  }

  // Options for year
  let YearOption = [];
  const currentYear = d.getFullYear();
  for (let y = 1980; y <= currentYear; y++) {
    YearOption.push(
      <option key={y} value={y}>
        {y}
      </option>
    );
  }

  // Handle change for select inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //calculate age
  const [myAge, setMyAge] = useState("");
  const calculateAge = () => {
    if (
      selectedDate.day == 0 &&
      selectedDate.month == 0 &&
      selectedDate.year == 0
    ) {
      alert("Please Select proper Birth Date");
    } else {
      let monthinnumbr = d.getMonth() + 1;
      let day = fulldate.day - selectedDate.day;
      let month = monthinnumbr - selectedDate.month;
      let year = fulldate.year - selectedDate.year;
      if (month == 0) {
        setMyAge(`${year} Years and ${day} Days old`);
      } else {
        setMyAge(`${year} Years ${month} Months and ${day} Days old`);
      }
    }
  };

  return (
    <>
      <div className="h-screen bg-white dark:bg-slate-800 dark:text-white">
        <div className="h-full pt-8 flex flex-col items-center">
          <div className="text-3xl flex justify-center">
            <h1>Age Calculator</h1>
          </div>
          <section className="w-full border w-10/12 mt-5 p-5 rounded">
            <div className="flex justify-end">
              <p className="flex gap-5">
                <span>Today is:</span> {fulldate.day}/{fulldate.month}/
                {fulldate.year}
              </p>
            </div>
            <div className="flex flex-col items-center mt-10">
              <div className="border dark:border-none flex flex-col justify-center items-center p-10 rounded">
                <div>
                  <h2>Select Your Birth Date</h2>
                </div>
                <div className="flex gap-2 mt-3">
                  <select
                    name="day"
                    id="day"
                    value={selectedDate.day}
                    onChange={handleChange}
                    className="text-black rounded outline-none py-2 px-1"
                  >
                    <option value="">Day</option>
                    {DayOption}
                  </select>
                  <select
                    name="month"
                    id="month"
                    value={selectedDate.month}
                    onChange={handleChange}
                    className="text-black rounded outline-none py-2 px-1"
                  >
                    <option value="">Month</option>
                    {MonthOption}
                  </select>
                  <select
                    name="year"
                    id="year"
                    value={selectedDate.year}
                    onChange={handleChange}
                    className="text-black rounded outline-none py-2 px-1"
                  >
                    <option value="">Year</option>
                    {YearOption}
                  </select>
                </div>
                <div>
                  <button
                    className="border border-1 border-red-500 px-2 py-1 mt-10 rounded bg-slate-800 text-white text-lg"
                    onClick={calculateAge}
                  >
                    Calculate
                  </button>
                </div>
                {myAge ? (
                  <div className="flex flex-col items-center border border-green-500 rounded mt-5 p-2">
                    <p>You are</p>

                    <span className="font-semibold text-green-400 text-lg">
                      {myAge}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AgeCalculator;
