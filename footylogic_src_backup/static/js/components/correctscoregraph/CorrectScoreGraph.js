import React, { Component } from "react";
import Highcharts from "../../sharedfiles/customhighcharts";

class CorrectScoreGraph extends Component {
  componentDidMount() {
    //this.loadGraph();
    if (this.props.data && Object.keys(this.props.data).length > 0) {
      this.loadGraph();
    }
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
    let drawColor = "#FFFFFF";
    let categories = [];
    let colors = [];
    let mainData = [];
    if (
      this.props.data &&
      this.props.data.homeTeam &&
      this.props.data.homeTeam.length > 0
    ) {
      for (var item of this.props.data.homeTeam) {
        colors.push(homeColor);
        categories.push(item.score);
        mainData.push(item.goals);
      }
    }
    if (
      this.props.data &&
      this.props.data.draw &&
      this.props.data.draw.length > 0
    ) {
      for (var item of this.props.data.draw) {
        colors.push(drawColor);
        categories.push(item.score);
        mainData.push(item.goals);
      }
    }
    if (
      this.props.data &&
      this.props.data.awayTeam &&
      this.props.data.awayTeam.length > 0
    ) {
      for (var item of this.props.data.awayTeam) {
        colors.push(awayColor);
        categories.push(item.score);
        mainData.push(item.goals);
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
        // for values on top of bar
        //          stackLabels: {
        //     enabled: true,
        //     align: 'center',

        // }
      },
      tooltip: {
        enable: false,
      },
      legend: {
        enabled: false,
      },
      colors: colors,
      tooltip: {
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
          enableMouseTracking: false,
          borderWidth: 0,
          borderRadiusTopLeft: "50%",
          borderRadiusTopRight: "50%",
        },
      },
      series: [
        {
          name: "",
          colorByPoint: true,
          data: mainData,
        },
      ],
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

export default CorrectScoreGraph;
