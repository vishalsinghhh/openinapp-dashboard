import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar/NavBar";
import Sidebar from "../components/sidebar/Sidebar";
import Stats from "../components/stats/Stats";
import Chart from "../components/chart/Chart";
import Product from "../components/products/Product";
import Profile from "../components/profile/Profile";
import revenue from "../images/revenue.svg";
import like from "../images/like.svg";
import transactions from "../images/transactions.svg";
import user from "../images/user.svg";
import "../components/components.css";

const Dashboard = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fn = async () => {
      const res = await fetch("https://mychessgame.onrender.com/api/stats");
      const main = await res.json();
      setData(main.data);
    };
    fn();
  }, []);

  return (
    <div className="dashboard">
      <div className="checkWidth">
        <Sidebar />
      </div>

      <div className="main">
        <div className="NavBarMain">
          <NavBar />
        </div>
        <div className="gridContainer">
          
            <div>
            {data && (
              <Stats
                name="Revenues"
                data={data?.totalRevenue}
                inc="+2.5%"
                img={revenue}
                color="#7FCD93"
              />
            )}
            </div>
          

          <div>
            {data && (
              <Stats
                name="Transactions"
                data={data?.totalTransactions}
                inc="+1.7%"
                img={transactions}
                color="#DEBF85"
              />
            )}
          </div>
          <div>
          {data && <Stats
              name="Likes"
              data={data?.totalLikes}
              inc="+1.4%"
              img={like}
              color="#ECA4A4"
            />}
            
          </div>

          <div>
          {data && <Stats
              name="Users"
              data={data?.totalUsers}
              inc="+4.2%"
              img={user}
              color="#A9B0E5"
            />}
            
          </div>
        </div>
        <div className="gap1"></div>
        {data &&<Chart dataGuest={data?.dataGuest} dataUser={data?.dataUser}/>}
        
        <div className="gap1"></div>
        <div className="Product">
          <div className="Product1 Product11">
          {data &&<Product className="Product2" doughnut={data?.doughnut}/>}
            
          </div>
          <div className="Product1">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
