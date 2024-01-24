import React, { Component } from "react";
import Highcharts from "../../sharedfiles/customhighcharts";

class RFCorrectScoreGraph extends Component {
  componentDidMount() {
    this.loadGraph();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data) &&
      Object.keys(this.props.data).length > 0
    ) {
      this.loadGraph();
    }
  }
  loadGraph() {
    let homeColor = "#28d0ce";
    let awayColor = "#e47273";
    let categories = [];
    let colors = [homeColor, awayColor];
    let homeGoals = [];
    let awayGoals = [];
    let mainData = [];
    if (this.props.data && this.props.data.length > 0) {
      for (var item of this.props.data) {
        categories.push(item.score);
        homeGoals.push(item.homeTeamGoals);
        awayGoals.push(item.awayTeamGoals);
      }
    }

    var myChart = Highcharts.chart(this.props.loadin, {
      chart: {
        type: "column",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
      },
      title: {
        text: this.props.title,
        style: {
          color: "#FFF",
        },
      },
      colors: ["#28d0ce", "#e47273"],
      xAxis: {
        gridLineWidth: 0,
        categories: categories,
        lineWidth: 0,
        labels: {
          useHTML: true,
          style: {
            color: "#000",
            backgroundColor: "#FFF",
            borderRadius: "50%",
            padding: "8px",
            fontSize: "12px",
            // fontFamily: '"Montserrat", sans-serif;font-weight:normal',
          },
        },
      },
      yAxis: {
        title: {
          text: "",
        },
        gridLineWidth: 0,
        min: 0,
        max: null, //this.props.maxValue && this.props.maxValue>0?this.props.maxValue:20,
        labels: {
          enabled: false,
        },
      },
      tooltip: {
        enable: false,
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        column: {
          minPointLength: 3,
        },
        series: {
          dataLabels: {
            enabled: true,
            crop: false,
            overflow: "none",

            colorByPoint: true,
            textAlign: "left",
            style: {
              textOutline: "0px",
              fontSize: "12px",
              fontWeight: "normal",
              // fontFamily: '"Montserrat", sans-serif;font-weight:normal',
            },
            formatter() {
              return (
                '<span style="color: ' +
                this.color +
                '";"-webkit-text-stroke:px black">' +
                this.y +
                "</span>"
              );
            },
          },
          borderWidth: 0,
          borderRadiusTopLeft: "50%",
          borderRadiusTopRight: "50%",
        },
      },
      series: [
        {
          name: "Home",
          data: homeGoals,
        },
        {
          name: "Away",
          data: awayGoals,
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }
  render() {
    return (
      <div
        id={this.props.loadin}
        style={{ width: this.props.graphWidth, height: this.props.graphHeight }}
      ></div>
    );
  }
}

export default RFCorrectScoreGraph;
