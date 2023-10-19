import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Product = (props) => {

  const data = {
    // labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        label: "Poll",
        data: props.doughnut,
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
      },
    ],
  };
  const options = {
    cutout: 30,
  };

  return (
    <div>
      <div className="flexMain proTitle">
        <div className="top">Top products</div>
        <div className="time">May - June 2021</div>
      </div>
      <div className="DoughnutMain">
        <Doughnut data={data} options={options} className="Doughnut"></Doughnut>
        <div className="circleData">
          <div>
            <div className="flex">
              <div className="dot1"></div>
              <div className="titleMain">Basic Tees</div>
            </div>

            <div className="per">55%</div>
          </div>
          <div>
            <div className="flex">
              <div className="dot2"></div>
              <div className="titleMain">Custom Short Pants</div>
            </div>

            <div className="per">31%</div>
          </div>
          <div>
            <div className="flex">
              <div className="dot3"></div>
              <div className="titleMain">Super Hoodies</div>
            </div>

            <div className="per">14%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
