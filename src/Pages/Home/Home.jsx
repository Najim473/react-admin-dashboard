import RevenueTable from "../../components/Table/Table";
import React from "react";
import Chart from "../../components/Chart/Chart";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
// import Navbar from '../../components/Navbar/Navbar'
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <Sidebar />
      {/* <Navbar/> */}
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaactions</div>
          <RevenueTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
