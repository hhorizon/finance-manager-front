import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { normalizeAmount } from "../../../utils";
import { StatisticsCategories } from "../../../types";
import "./styles.scss";

interface StatisticsDiagramProps {
  categories: StatisticsCategories;
  totalBalance: number | null;
}

const StatisticsDiagram: React.FC<StatisticsDiagramProps> = ({
  categories,
  totalBalance,
}) => {
  ChartJS.register(ArcElement, Tooltip);

  const doughnutData = categories.reduce<{
    labels: string[];
    sum: number[];
    colors: string[];
  }>(
    (acc, category) => {
      acc.labels.push(category.name);
      acc.sum.push(category.sum);
      acc.colors.push(category.color);

      return acc;
    },
    {
      labels: [],
      sum: [],
      colors: [],
    },
  );

  const data = {
    labels: doughnutData.labels,
    datasets: [
      {
        data: doughnutData.sum,
        backgroundColor: doughnutData.colors,
        borderWidth: 0,
      },
    ],
  };

  const emptyData = {
    labels: ["--", "--"],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["#bdbdbd", "#e0e0e0"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="statistics-diagram">
      {totalBalance && (
        <p className="statistics-diagram__balance">
          {normalizeAmount(totalBalance)}
        </p>
      )}

      <Doughnut
        data={categories.length === 0 ? emptyData : data}
        options={{ cutout: "70%" }}
      />
    </div>
  );
};

export default StatisticsDiagram;
