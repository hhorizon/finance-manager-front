import moment from "moment";

const monthsOptions = [
  { value: "01", label: "Jan" },
  { value: "02", label: "Feb" },
  { value: "03", label: "Mar" },
  { value: "04", label: "Apr" },
  { value: "05", label: "May" },
  { value: "06", label: "Jun" },
  { value: "07", label: "Jul" },
  { value: "08", label: "Aug" },
  { value: "09", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" },
];

const getDateOptions = (firstYear: number = 2000) => {
  const currentYear = Number(moment().format("YYYY"));
  const yearsOptions = [];

  for (let i = currentYear; i >= firstYear; i = i - 1) {
    yearsOptions.push({ value: String(i), label: String(i) });
  }

  return { monthsOptions, yearsOptions };
};

export default getDateOptions;
