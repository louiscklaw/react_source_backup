import React, { Component } from "react";
import Highcharts from "../../sharedfiles/customhighcharts";

class HomeAwayDrawGraph extends Component {
  componentDidMount() {
    if (this.props.had && Object.keys(this.props.had).length > 0) {
      this.loadHADGraph();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // if(JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data) && Object.keys(this.props.data).length>0){
    //     this.loadGraph();
    // }
    if (
      prevProps.had &&
      JSON.stringify(prevProps.had) !== JSON.stringify(this.props.had) &&
      Object.keys(this.props.had).length > 0
    ) {
      this.loadHADGraph();
    }
  }
  loadHADGraph() {
    //roundedCorners(Highcharts);
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
        categories: [
          this.props.homeTeamName,
          this.props.draw ? this.props.draw : "Draw",
          this.props.awayTeamName,
        ],
        lineWidth: 0,

        labels: {
          colorByPoint: true,
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
      credits: {
        enabled: false,
      },
      colors: ["#29d6d4", "#FFFFFF", "#e57374"],
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            align: "center",
            inside: true,
            style: {
              textOutline: "0px",
              fontWeight: "normal",
              fontSize: "12px",
              // fontFamily: '"Montserrat", sans-serif;font-weight:normal',
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
      series: [
        {
          name: "Population",
          colorByPoint: true,
          data: [
            [this.props.homeTeamName, this.props.had.homeTeam],
            [this.props.draw ? this.props.draw : "Draw", this.props.had.draw],
            [this.props.awayTeamName, this.props.had.awayTeam],
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }
  render() {
    return (
      <>
        <div
          id={this.props.loadin}
          style={{
            width: this.props.graphWidth ? this.props.graphWidth : "100%",
            height: this.props.graphHeight ? this.props.graphHeight : "200px",
          }}
        ></div>
      </>
    );
  }
}

export default HomeAwayDrawGraph;
