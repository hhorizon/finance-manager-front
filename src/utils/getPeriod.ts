import moment from "moment";

const getPeriod = (selectedMonth?: string, selectedYear?: string) => {
  const currentDay = moment().format("DD");
  const currentMonth = moment().format("MM");
  const currentYear = moment().format("YYYY");

  let startDay = "01";
  let startMonth = "01";
  let startYear = "2000";

  let endDay = currentDay;
  let endMonth = currentMonth;
  let endYear = currentYear;

  if (selectedMonth) {
    startYear = endYear;
    startMonth = selectedMonth;
    endMonth = selectedMonth;
    endDay = moment(`${endYear}-${selectedMonth}`, "YYYY-MM")
      .endOf("month")
      .format("DD");
  }

  if (selectedYear) {
    startYear = selectedYear;
    endYear = selectedYear;
  }

  if (selectedYear && !selectedMonth) {
    endMonth = "12";
    endDay = "31";
  }

  const startDate = moment(
    `${startYear}-${startMonth}-${startDay}`,
    "YYYY-MM-DD",
  ).format("YYYY-MM-DD");
  const endDate = moment(
    `${endYear}-${endMonth}-${endDay}`,
    "YYYY-MM-DD",
  ).format("YYYY-MM-DD");

  return {
    startDate,
    endDate,
  };
};

export default getPeriod;
