import React, { Component } from "react";
import Highcharts from "../../sharedfiles/customhighcharts";

class GoalTimeGraph extends Component {
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
    //roundedCorner(Highcharts);
    let categories = [];
    let homeGoals = [];
    let awayGoals = [];
    let lineData = [];
    for (var item of this.props.data) {
      categories.push(item.goalMinutes);
      homeGoals.push(item.homeTeamGoals);
      awayGoals.push(item.awayTeamGoals);
      if (this.props.showLine) {
        lineData.push(item.homeTeamGoals + item.awayTeamGoals);
      }
    }
    var myChart = Highcharts.chart(this.props.loadin, {
      chart: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
      },
      title: {
        text: this.props.title,
        style: {
          color: "#FFF",
        },
      },
      xAxis: {
        categories: categories,
        lineWidth: 0,
        labels: {
          style: {
            color: "#FFF",
            fontSize: "12px",
            // fontFamily: '"Montserrat", sans-serif;font-weight:normal',
            fontWeight: "normal",
          },
        },
        gridLineWidth: 0,
      },
      yAxis: {
        gridLineWidth: 0,
        labels: {
          enabled: false,
        },
        title: {
          text: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      colors: ["#28d0ce", "#e47273"],
      plotOptions: {
        column: {
          minPointLength: 3,
        },
        series: {
          dataLabels: {
            enabled: this.props.showLabels ? true : false,
            color: "#FFFFFF",
            textAlign: "left",
            fontSize: "12px",
            // fontFamily: '"Montserrat", sans-serif;font-weight:normal',
            fontWeight: "normal",
          },
          enableMouseTracking: false,
          pointPadding: 0,
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
          type: "column",
          name: "home",
          data: homeGoals,
        },
        {
          type: "column",
          name: "away",
          data: awayGoals,
        },
        {
          type: "line",
          name: "Total",
          data: lineData,
          marker: {
            lineWidth: 2,
            lineColor: "white",
            fillColor: "#f8a824",
          },
        },
      ],
    });
  }
  render() {
    return (
      <div
        className={[
          this.props.showTable ? "goalTimes" : "totalGoals-analysis",
          this.props.isSummaryGT ? "summary-goalTimes" : "",
        ].join(" ")}
      >
        <div
          className={[
            this.props.showTable ? "goalTimes-graph" : "",
            this.props.isSummaryGT ? "goalTimes-graph-m150" : "",
          ].join(" ")}
        >
          <div
            id={this.props.loadin}
            style={{ width: this.props.width, height: this.props.height }}
          ></div>
        </div>

        {this.props.showTable && this.props.data.length > 0 ? (
          <table className="tableDefault tableForGraph">
            <tbody>
              <tr className="home-bg">
                <td
                  className={
                    "white-bg " + (this.props.isSummaryGT ? "w-150" : "w-100px")
                  }
                >
                  <div className="home-text">
                    {this.props.homeTeamName}
                    <br />
                    <span>
                      {this.props.staticKeyWords
                        ? " (" +
                          this.props.staticKeyWords.last8HomeResults +
                          ")"
                        : ""}
                    </span>
                  </div>
                </td>
                {this.props.data.map((item, index) => {
                  return (
                    <td key={"gtt_td_" + index}>
                      <div>{item.homeTeamGoals}</div>
                    </td>
                  );
                })}
              </tr>

              <tr className="away-bg">
                <td className="white-bg w-100px">
                  <div className="away-text">
                    {this.props.awayTeamName}
                    <br />
                    <span>
                      {this.props.staticKeyWords
                        ? " (" +
                          this.props.staticKeyWords.last8AwayResults +
                          ")"
                        : ""}
                    </span>
                  </div>
                </td>
                {this.props.data.map((item, index) => {
                  return (
                    <td key={"gtt_td_" + index}>
                      <div>{item.awayTeamGoals}</div>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default GoalTimeGraph;
