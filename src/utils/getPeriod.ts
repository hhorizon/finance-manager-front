import moment from "moment";

const getPeriod = (selectedMonth?: number, selectedYear?: number) => {
  let startMonth = 1;
  let startYear = 2000;

  let endDay = moment().format("DD");
  let endMonth = Number(moment().format("MM"));
  let endYear = Number(moment().format("YYYY"));

  if (selectedMonth) {
    startMonth = selectedMonth;
    endMonth = selectedMonth;
    endDay = moment(`${selectedYear}-${selectedMonth}`)
      .endOf("month")
      .format("DD");
  }

  if (selectedYear) {
    startYear = selectedYear;
    endYear = selectedYear;
  }

  if (selectedYear && !selectedMonth) {
    endMonth = 12;
    endDay = "31";
  }

  const startDate = moment(`${startYear}-${startMonth}`, "YYYY MM").format(
    "YYYY-MM-DD",
  );
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
