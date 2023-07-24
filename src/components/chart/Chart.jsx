import React from "react";
import ChartBar from "./Chartbar";
import "./Chart.css";
function Chart(props) {
  const dataPointValues = props.dataPoints.map((datapoint) => {
    datapoint.value;
  });
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        <ChartBar
          value={datapoint.value}
          maxValue={totalMaximum}
          key={datapoint.label}
          label={datapoint.label}
        />;
      })}
    </div>
  );
}

export default Chart;
