import React, { Component } from "react";
import Highcharts from "../../sharedfiles/customhighcharts";

class HaFuGraph extends Component {
  componentDidMount() {
    if (this.props.isDirect) {
      if (this.props.data && Object.keys(this.props.data).length > 0) {
        this.loadGraph();
      }
    } else {
      if (this.props.data && this.props.data.length > 0) {
        this.loadGraph();
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isDirect) {
      if (
        (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data) ||
          prevProps.loadin !== this.props.loadin) &&
        Object.keys(this.props.data).length > 0
      ) {
        this.loadGraph();
      }
    } else {
      if (
        (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data) ||
          prevProps.loadin !== this.props.loadin) &&
        this.props.data.length > 0
      ) {
        this.loadGraph();
      }
    }
  }
  loadGraph() {
    let categories = [];
    let homeGoals = [];
    let awayGoals = [];
    if (this.props.isDirect) {
      categories = this.props.data.labels;
      homeGoals = this.props.data.homeTeam;
      awayGoals = this.props.data.awayTeam;
    } else {
      if (this.props.data && this.props.data.length > 0) {
        for (var item of this.props.data) {
          categories.push(item.outcomeName);
          homeGoals.push(item.homeGoals);
          awayGoals.push(item.awayGoals);
        }
      }
    }

    var self = this;
    var myChart = Highcharts.chart(this.props.loadin, {
      chart: {
        type: this.props.iscolumn ? "column" : "bar",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
      },
      title: {
        text: this.props.title,
        style: {
          color: "#FFF",
        },
      },
      xAxis: {
        gridLineWidth: 0,
        categories: categories,
        lineWidth: 0,
        labels: {
          style: {
            color: "#FFF",
            fontSize: "14px",
            // fontFamily: '"Montserrat", sans-serif;font-weight:normal',
            textTransform: "uppercase",
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
        enabled: this.props.isLegend ? this.props.isLegend : false,
        verticalAlign: "top",
        itemStyle: {
          fontSize: "14px",
        },
        labelFormatter: function () {
          if (this.name === "home") {
            return (
              '<span style="color:#FFF;font-weight:normal">' +
              self.props.homeLegend +
              "</span>"
            );
          } else {
            return (
              '<span style="color:#FFF;font-weight:normal">' +
              self.props.awayLegend +
              "</span>"
            );
          }
        },
      },
      credits: {
        enabled: false,
      },
      colors: ["#28d0ce", "#e47273"],

      plotOptions: {
        bar: {
          minPointLength: 3,
        },
        column: {
          minPointLength: 3,
        },
        series: {
          dataLabels: {
            enabled: true,
            color: "#FFFFFF",
            textAlign: "left",
            crop: false,
            overflow: "none",
            allowOverlap: true,
            style: {
              fontSize: "12px",
              fontWeight: "normal",
              // fontFamily: '"Montserrat", sans-serif;font-weight:normal',
            },
          },
          enableMouseTracking: false,
          borderWidth: 0,
          borderRadiusTopLeft: this.props.noradious ? "0" : "50%",
          borderRadiusTopRight: this.props.noradious ? "0" : "50%",
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "home",
          data: homeGoals,
        },
        {
          name: "away",
          data: awayGoals,
        },
      ],
    });
  }
  render() {
    return (
      <div
        id={this.props.loadin}
        className={
          this.props.addClass && this.props.addClass.length > 0
            ? this.props.addClass
            : ""
        }
        style={{ width: this.props.graphWidth, height: this.props.graphHeight }}
      ></div>
    );
  }
}

export default HaFuGraph;
