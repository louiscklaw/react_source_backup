import React, { Component } from "react";
import Highcharts from "../../sharedfiles/customhighcharts";

class TotalGoalsGraph extends Component {
  componentDidMount() {
    if (this.props.data && this.props.data.length > 0) {
      this.loadHADGraph();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("loadGraph==",prevProps.data !== this.props.data)
    // if(JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data) && Object.keys(this.props.data).length>0){
    //     this.loadGraph();
    // }
    if (
      JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data) &&
      this.props.data.length > 0
    ) {
      this.loadHADGraph();
    }
  }
  loadHADGraph() {
    var myChart = Highcharts.chart(this.props.loadin, {
      chart: {
        type: this.props.type,
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
        categories: this.props.categories,
        lineWidth: 0,
        labels: {
          style: {
            color: "#FFF",
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
        max: null, //this.props.maxValue && this.props.maxValue>0?this.props.maxValue:8,
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
        column: {
          minPointLength: 3,
        },
        series: {
          dataLabels: {
            enabled: true,
            align: "center",
            inside: false,
            crop: false,
            overflow: "none",
            style: {
              color: "#FFF",
              textOutline: "0px",
              fontSize: "12px",
              // fontFamily: '"Montserrat", sans-serif;font-weight:normal',
              fontWeight: "normal",
            },
            textAlign: "left",
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
          name: "Population",
          colorByPoint: true,
          data: this.props.data,
        },
      ],
    });
  }
  render() {
    return (
      <>
        <div
          id={this.props.loadin}
          style={{
            width: "80%",
            height: this.props.height ? this.props.height : "200px",
          }}
        ></div>
      </>
    );
  }
}

export default TotalGoalsGraph;
