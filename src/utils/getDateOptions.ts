import moment from "moment";

const monthsOptions = [
  { value: 1, label: "Jan" },
  { value: 2, label: "Feb" },
  { value: 3, label: "Mar" },
  { value: 4, label: "Apr" },
  { value: 5, label: "May" },
  { value: 6, label: "Jun" },
  { value: 7, label: "Jul" },
  { value: 8, label: "Aug" },
  { value: 9, label: "Sep" },
  { value: 10, label: "Oct" },
  { value: 11, label: "Nov" },
  { value: 12, label: "Dec" },
];

const getDateOptions = (firstYear: number = 2000) => {
  const currentYear = Number(moment().format("YYYY"));
  const yearsOptions = [];

  for (let i = currentYear; i >= firstYear; i = i - 1) {
    yearsOptions.push({ value: i, label: i });
  }

  return { monthsOptions, yearsOptions };
};

export default getDateOptions;
