import React, { useEffect, useState } from "react";

import Container from "../../Unknown/Container";
import Header from "../../Unknown/Header";
import Sidebar from "../../Unknown/Sidebar";
import StatisticsTab from "../StatisticsTab";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchStatistics } from "../../../redux/actions/transactions-operations";
import { statisticsSelector } from "../../../redux/selectors/transactions-selectors";
import { userSelector } from "../../../redux/selectors/user-selectors";
import { isUserloggedInSelector } from "../../../redux/selectors/auth-selectors";
import "./styles.scss";

const StatisticsPage: React.FC = () => {
  const [period, setPeriod] = useState({
    startDate: "2023-04-17",
    endDate: "2023-04-19",
  });
  const dispatch = useAppDispatch();
  const isUserloggedIn = useAppSelector(isUserloggedInSelector);
  const statistics = useAppSelector(statisticsSelector);

  useEffect(() => {
    isUserloggedIn && dispatch(fetchStatistics(period));
  }, [dispatch, period, isUserloggedIn]);

  return (
    <>
      <Header />
      <Container withBlur>
        <div className="home-page">
          <div className="home-page__sidebar-wrapper">
            <Sidebar />
          </div>

          <div className="home-page__statistics-wrapper">
            <StatisticsTab statistics={statistics} onChangePeriod={setPeriod} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default StatisticsPage;
