import React, { Component } from "react";
import Highcharts from "../../sharedfiles/customhighcharts";

class WinPredictorGraph extends Component {
  componentDidMount() {
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
    //roundedCorner(Highcharts);
    var xAxisValues = [
      { name: "val1", y: this.props.data.homeTeamPct },
      { name: "val1", y: this.props.data.drawPct },
      { name: "val1", y: this.props.data.awayTeamPct },
    ];
    var myChart = new Highcharts.Chart({
      chart: {
        type: "bar",
        renderTo: "winpre",
        marginRight: 50,
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        events: {
          //load: loadRed
        },
      },
      title: {
        text: "",
        style: {
          color: "black",
          fontWeight: "600",
          // fontFamily: '"Montserrat", sans-serif',
          fontSize: 20,
        },
      },
      xAxis: [
        {
          categories: [
            this.props.data.homeTeamName,
            this.props.draw ? this.props.draw : "Draw",
            this.props.data.awayTeamName,
          ],
          title: {
            text: null,
          },
          gridLineWidth: 0,
          lineWidth: 0,
          minorGridLineWidth: 0,
          labels: {
            style: {
              color: "#FFF",
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "14px",
              width: 100,
            },
          },
        },
        {
          title: {
            text: null,
          },
          lineWidth: 0,
          tickInterval: 1,
          tickWidth: 0,
          labels: {
            style: {
              color: "#FFF",
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "13px",
              width: 90,
            },
            formatter: function () {
              return xAxisValues[this.pos]["y"] + "%";
            },
          },
          opposite: true,
        },
      ],
      yAxis: {
        min: 0,
        max: 100,
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        tickInterval: 20,
        labels: {
          enabled: true,
          style: {
            color: "#bbb",
          },
        },
        title: {
          text: null,
        },
      },
      tooltip: {
        enable: false,
      },
      plotOptions: {
        series: {
          stacking: "percent",
          enableMouseTracking: false,
          dataLabels: {
            enabled: false,
            textAlign: "right",
            align: "left",
            inside: false,
            position: "right",
          },
        },
        bar: {
          grouping: false,
        },
      },
      legend: {
        enabled: false,
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "null",
          data: [
            100 - this.props.data.homeTeamPct,
            100 - this.props.data.drawPct,
            100 - this.props.data.awayTeamPct,
          ],
          borderWidth: 0,
          color: "rgba(0,0,0,0)",
        },
        {
          name: "null",
          data: [
            { name: "val", y: 100 - this.props.data.homeTeamPct },
            { name: "val", y: 100 - this.props.data.drawPct },
            { name: "val", y: 100 - this.props.data.awayTeamPct },
          ],
          borderWidth: 0,
          stack: 1,
          animation: false,
          color: "#6677d6",
          borderRadiusTopLeft: "50%",
          borderRadiusTopRight: "50%",
        },
        {
          name: "Values",
          data: [
            { name: "val1", y: this.props.data.homeTeamPct },
            { name: "val1", y: this.props.data.drawPct },
            { name: "val1", y: this.props.data.awayTeamPct },
          ],
          xAxis: 0,
          color: "white",
          borderWidth: 0,
          borderRadiusTopLeft: "50%",
          borderRadiusTopRight: "50%",
        },
        {
          name: "Values",
          data: [
            { name: "val2", y: 0 },
            { name: "val2", y: 0 },
            { name: "val2", y: 0 },
          ],
          xAxis: 1,
          visiable: false,
          borderWidth: 0,
          borderRadiusTopLeft: "50%",
          borderRadiusTopRight: "50%",
        },
      ],
    });
  }
  render() {
    return <div id="winpre" style={{ width: "400px", height: "150px" }}></div>;
  }
}

export default WinPredictorGraph;
