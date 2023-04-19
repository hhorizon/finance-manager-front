import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { Statistics } from "../../../types";

interface StatisticsDiagramProps {
  statistics: Statistics;
}

// {
//   Food: 10000;
//   Home: 13;
// }

const StatisticsDiagram: React.FC<StatisticsDiagramProps> = ({
  statistics,
}) => {
  ChartJS.register(ArcElement, Tooltip);

  const { incomingStatistics, spendingStatistics } = statistics;

  //   const lables = incomingStatistics.categories;

  //   const labels = [
  //     ...Object.keys(incomingStatistics.categories),
  //     ...Object.keys(spendingStatistics.categories),
  //   ];

  console.log(statistics);
  //   console.log(labels);

  const doughnutData = {
    labels: ["--", "--"],
    datasets: [
      {
        label: "# of Votes",
        data: ["50", "50"],
        backgroundColor: ["#bdbdbd", "#e0e0e0"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  return (
    <div>
      {/* <div className={s.balance}>
        ₴ {totalBalance ? normalizeNum(totalBalance) : 0}
      </div> */}
      <Doughnut data={doughnutData} />
    </div>
  );
};

export default StatisticsDiagram;
