import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";

import { normalizeAmount, getPeriod, getDateOptions } from "../../../utils";
import { Statistics, Period } from "../../../types";
import "./styles.scss";

interface StatisticsListProps {
  statistics: Statistics;
  onChangePeriod: (period: Period) => void;
}

const StatisticsList: React.FC<StatisticsListProps> = ({
  statistics,
  onChangePeriod,
}) => {
  const [selectedMonth, setSelectedMonth] = useState<number>();
  const [selectedYear, setSelectedYear] = useState<number>();

  const { incomingStatistics, spendingStatistics } = statistics;
  const dateOptions = getDateOptions(2018);

  const changeMonth = (month?: number) => {
    setSelectedMonth(month);

    if (!selectedYear) {
      setSelectedYear(dateOptions.yearsOptions[0].value);
    }
  };

  const changeYear = (year?: number) => {
    setSelectedYear(year);
  };

  const period = useMemo(
    () => getPeriod(selectedMonth, selectedYear),
    [selectedMonth, selectedYear],
  );

  useEffect(() => {
    onChangePeriod(period);
  }, [onChangePeriod, period]);

  return (
    <div className="statistics-list">
      <div className="statistics-list__input-wrapper">
        <Select
          options={dateOptions.monthsOptions}
          className="statistics-list__input"
          classNamePrefix="statistics-list__select"
          placeholder="Month"
          onChange={(option) => changeMonth(option?.value)}
        />

        <Select
          options={dateOptions.yearsOptions}
          className="statistics-list__input"
          classNamePrefix="statistics-list__select"
          placeholder="Year"
          onChange={(option) => changeYear(option?.value)}
        />
      </div>

      <div className="statistics-list__table">
        <div className="statistics-list__table__head">
          <p>Category</p>

          <p>Amount</p>
        </div>

        <ul className="statistics-list__table__body">
          {spendingStatistics.categories.map((category) => (
            <li key={category.name} className="statistics-list__table__item">
              <div
                style={{ backgroundColor: category.color }}
                className="statistics-list__table__item__color"
              ></div>

              <p>{category.name}</p>

              <p>{normalizeAmount(category.sum)}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="statistics-list__total">
        <div className="statistics-list__total__item">
          <p>Expense:</p>

          <p className="statistics-list__total__sum--spending">
            {normalizeAmount(spendingStatistics.totalSum)}
          </p>
        </div>
        <div className="statistics-list__total__item">
          <p>Income:</p>

          <p className="statistics-list__total__sum--incoming">
            {normalizeAmount(incomingStatistics.totalSum)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsList;
