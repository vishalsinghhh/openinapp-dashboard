import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = (props) => {
  console.log(props);
  const data = {
    labels: [
      `Week ${props?.dataUser[0]?.week}`,
      `Week ${props?.dataUser[1]?.week}`,
      `Week ${props?.dataUser[2]?.week}`,
      `Week ${props?.dataUser[3]?.week}`,
    ],
    datasets: [
      {
        label: "User",
        data: [
          props?.dataUser[0]?.activity,
          props?.dataUser[1]?.activity,
          props?.dataUser[2]?.activity,
          props?.dataUser[3]?.activity,
        ],
        backgroundColor: "#98D89E",
        borderRadius: 5,
        barPercentage: 0.8,
      },
      {
        label: "Guest",
        data: [
          props.dataGuest[0].activity,
          props.dataGuest[1].activity,
          props.dataGuest[2].activity,
          props.dataGuest[3].activity,
        ],
        backgroundColor: "#EE8484",
        borderRadius: 5,
        barPercentage: 0.8,
      },
    ],
  };
  const options = {
    categoryPercentage: 0.6,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="chartMain">
      <div className="chartMain1">
        <div className="act">Activities</div>
        <div className="date1">May - June 2021</div>
      </div>
      <div className="flexMain labels">
        <div className="flexMain">
          <div className="dot3"></div>
          Guest
        </div>
        <span className="gap1"></span>
        <div className="flexMain">
          <div className="dot1"></div>
          User
        </div>
      </div>

      <div>
        <Bar data={data} options={options} className="bar"></Bar>
      </div>
    </div>
  );
};

export default Chart;
