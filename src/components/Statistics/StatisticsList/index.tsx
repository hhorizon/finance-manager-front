import React, { useState, useEffect } from "react";
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
  const [selectedMonth, setSelectedMonth] = useState<string>();
  const [selectedYear, setSelectedYear] = useState<string>();

  const { incomingStatistics, spendingStatistics } = statistics;
  const dateOptions = getDateOptions(2018);

  useEffect(() => {
    const period = getPeriod(selectedMonth, selectedYear);

    onChangePeriod(period);
  }, [onChangePeriod, selectedMonth, selectedYear]);

  return (
    <div className="statistics-list">
      <div className="statistics-list__input-wrapper">
        <Select
          isClearable
          options={dateOptions.monthsOptions}
          className="statistics-list__input"
          classNamePrefix="statistics-list__select"
          placeholder="Month"
          onChange={(option) => setSelectedMonth(option?.value)}
        />

        <Select
          isClearable
          options={dateOptions.yearsOptions}
          className="statistics-list__input"
          classNamePrefix="statistics-list__select"
          placeholder="Year"
          onChange={(option) => setSelectedYear(option?.value)}
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
