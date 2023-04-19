import React from "react";

import StatisticsDiagram from "../StatisticsDiagram";
import StatisticsList from "../StatisticsList";

import { Statistics, Period } from "../../../types";
import "./styles.scss";

interface StatisticsTabProps {
  statistics: Statistics;
  totalBalance: number | null;
  onChangePeriod: (period: Period) => void;
}

const StatisticsTab: React.FC<StatisticsTabProps> = ({
  statistics,
  totalBalance,
  onChangePeriod,
}) => {
  return (
    <div className="statistics-tab">
      <div className="statistics-tab__giagram-wrapper">
        <h2 className="statistics-tab__title">Statistics</h2>

        <StatisticsDiagram
          categories={statistics.spendingStatistics.categories}
          totalBalance={totalBalance}
        />
      </div>

      <StatisticsList statistics={statistics} onChangePeriod={onChangePeriod} />
    </div>
  );
};

export default StatisticsTab;
