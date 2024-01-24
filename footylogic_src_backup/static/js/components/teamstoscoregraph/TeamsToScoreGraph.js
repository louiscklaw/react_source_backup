import React, { Component } from "react";

class TeamsToScore extends Component {
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  loadGraph() {}
  render() {
    return (
      <div class="teamToscore-container">
        {this.props.data.neitherTeams &&
        this.props.data.oneTeam &&
        this.props.data.bothTeams ? (
          <>
            <div class="mainTitle">{this.props.title}</div>
            <div class="teamToscore-circles">
              <div class="teamToscore-common">
                <div class="teamTo-score neither">
                  {this.props.data.neitherTeams}
                </div>
                <div>Neither</div>
              </div>
              <div class="teamToscore-common">
                <div class="teamTo-score one">{this.props.data.oneTeam}</div>
                <div>One</div>
              </div>
              <div class="teamToscore-common">
                <div class="teamTo-score both">{this.props.data.bothTeams}</div>
                <div>Both</div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TeamsToScore;
