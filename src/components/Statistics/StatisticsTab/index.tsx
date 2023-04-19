import React from "react";

import StatisticsDiagram from "../StatisticsDiagram";

import { Statistics, Period } from "../../../types";

interface StatisticsTabProps {
  statistics: Statistics;
  onChangePeriod: (period: Period) => void;
}

const StatisticsTab: React.FC<StatisticsTabProps> = ({
  statistics,
  onChangePeriod,
}) => {
  return (
    <>
      <StatisticsDiagram statistics={statistics} />
    </>
  );
};

export default StatisticsTab;
