import React, { Component } from "react";
import Highcharts from "../../sharedfiles/customhighcharts";
import { connect } from "react-redux";

class FirstTOScoreGraph extends Component {
  componentDidMount() {
    //this.loadGraph();
    if (this.props.isDirect) {
      if (this.props.data && Object.keys(this.props.data).length > 0) {
        this.loadGraph();
      }
    } else {
      if (
        this.props.mainData &&
        Object.keys(this.props.mainData).length > 0 &&
        this.props.data.length > 0
      ) {
        this.loadGraph();
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isDirect) {
      if (
        JSON.stringify(prevProps.mainData) !==
          JSON.stringify(this.props.mainData) &&
        Object.keys(this.props.data).length > 0
      ) {
        this.loadGraph();
      }
    } else {
      if (
        JSON.stringify(prevProps.mainData) !==
          JSON.stringify(this.props.mainData) &&
        this.props.data.length > 0
      ) {
        this.loadGraph();
      }
    }
  }
  loadGraph() {
    //roundedCorner(Highcharts);
    let categories = [];
    if (this.props.isDirect) {
      categories = Object.assign(
        [],
        [this.props.staticKeyWords.nogoals],
        this.props.data.labels,
      );
    } else {
      categories = [
        this.props.homeTeamName,
        this.props.awayTeamName,
        this.props.staticKeyWords.nogoals,
      ];
    }
    let data = [];
    if (this.props.isDirect) {
      data = this.props.data.data;
    } else {
      data = this.props.data;
    }
    var myChart = Highcharts.chart(this.props.loadin, {
      chart: {
        type: "bar",
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
            fontSize: "14px",
            // fontFamily: '"Montserrat", sans-serif;font-weight:normal',
            textTransform: "uppercase",
          },
          formatter() {
            return (
              '<span style="color: ' +
              this.chart.options.colors[this.pos] +
              '";"-webkit-text-stroke:px black">' +
              this.value +
              "</span>"
            );
          },
        },
      },
      yAxis: {
        title: {
          text: "",
        },
        gridLineWidth: 0,
        min: 0,
        max: null,
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
      colors: this.props.colors,
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            align: "center",
            inside: true,
            style: {
              textOutline: "0px",
              fontSize: "12px",
              // fontFamily: '"Montserrat", sans-serif;font-weight:normal',
              fontWeight: "normal",
            },
            textAlign: "left",
            formatter() {
              if (this.y === 0) {
                return (
                  '<span style="color: #FFF";"-webkit-text-stroke:px black">' +
                  this.y +
                  "</span>"
                );
              } else {
                return this.y;
              }
            },
          },
          enableMouseTracking: false,
          borderWidth: 0,
          borderRadiusTopLeft: "50%",
          borderRadiusTopRight: "50%",
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "",
          colorByPoint: true,
          data: data,
        },
      ],
    });
  }
  render() {
    return (
      <div
        id={this.props.loadin}
        style={{
          width: this.props.graphWidth ? this.props.graphWidth : "80%",
          height: this.props.graphHeight ? this.props.graphHeight : "200px",
        }}
      ></div>
    );
  }
}
function mapStateToProps(state) {
  return {
    staticKeyWords: state.app.staticKeyWords,
  };
}
//export default FirstTOScoreGraph;
export default connect(mapStateToProps)(FirstTOScoreGraph);
