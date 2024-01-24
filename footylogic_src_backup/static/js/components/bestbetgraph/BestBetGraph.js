import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Highcharts from "../../sharedfiles/customhighcharts";

class BestBetGraph extends Component {
  componentDidMount() {
    if (Object.keys(this.props.data).length > 0) {
      this.loadGraph();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.data !== this.props.data &&
      Object.keys(this.props.data).length > 0
    ) {
      this.loadGraph();
    }
  }
  loadGraph() {
    //roundedCorner(Highcharts);
    var myChart = Highcharts.chart("bestbet", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: "rgba(255, 255, 255, 0.0)",
      },
      title: {
        text: "",
      },
      exporting: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        enable: false,
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            y: -5,
            format: "{y}%",
            style: {
              fontWeight: "bold",
              color: "black",
              fontSize: "14px",
            },
            filter: {
              property: "name",
              operator: "===",
              value: "bestbet",
            },
          },
          borderWidth: 0,
        },
        series: {
          animation: false,
          enableMouseTracking: false,
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: "pie",
          name: "Best Bet",
          innerSize: "65%",
          data: [
            {
              name: "bestbet",
              y: this.props.data.winPct,
              color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                  [0, "#d4c4ed"],
                  [1, "#9974cf"],
                ],
              },
            },
            { name: "", y: 100 - this.props.data.winPct, color: "#E6E6E6" },
          ],
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, "#003399"],
              [1, "#3366AA"],
            ],
          },
        },
      ],
    });
  }
  render() {
    return (
      <>
        {this.props.data && Object.keys(this.props.data).length > 0 ? (
          <div className="bestBet-verticaltext">
            {this.props.data.marketName}
            {this.props.data.subMarketName &&
            this.props.data.subMarketName.length > 0
              ? "[" + this.props.data.subMarketName + "]"
              : ""}
          </div>
        ) : (
          ""
        )}
        <div
          id="bestbet"
          className="bestBet-piechart"
          style={{ width: "150px", height: "150px" }}
        ></div>
        {this.props.data && Object.keys(this.props.data).length > 0 ? (
          <div className="bestBet-horizontaltext">
            {this.props.data.outComeName}
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default BestBetGraph;
