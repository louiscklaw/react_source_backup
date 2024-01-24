import React, { Component } from "react";

class PerGameGraph extends Component {
  render() {
    if (Number(this.props.home) === 0 || Number(this.props.away) === 0) {
      return <div></div>;
    } else {
      return (
        <div className="goalsperGame-graph">
          <div className="goalsperGame-content">
            <div className="homeGoals-data">
              <div
                className="homeGoals-circle"
                style={{
                  width: 50 + (Number(this.props.home) - 0.1) * 20 + "px",
                  height: 50 + (Number(this.props.home) - 0.1) * 20 + "px",
                  fontSize: 1.25 + (Number(this.props.home) - 0.1) * 0.5 + "em",
                }}
              >
                {this.props.home}
              </div>
              <div className="home-text">{this.props.homeTeamName}</div>
            </div>
            <div
              className="graphTitle"
              dangerouslySetInnerHTML={{ __html: this.props.title }}
            ></div>
            <div className="awayGoals-data">
              <div
                className="awayGoals-circle"
                style={{
                  width: 50 + (Number(this.props.away) - 0.1) * 20 + "px",
                  height: 50 + (Number(this.props.away) - 0.1) * 20 + "px",
                  fontSize: 1.25 + (Number(this.props.away) - 0.1) * 0.5 + "em",
                }}
              >
                {this.props.away}
              </div>
              <div className="away-text">{this.props.awayTeamName}</div>
            </div>
          </div>
          <div className="goalsperGame-teamNames"></div>
        </div>
      );
    }
  }
}

export default PerGameGraph;
