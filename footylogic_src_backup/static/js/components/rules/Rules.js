import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getRulesInfo } from "./rulesSlice";

// const sanitizer = dompurify.sanitize;
class Rules extends Component {
  componentDidMount() {
    if (this.props.match && this.props.match.params) {
      this.props.dispatch(
        getRulesInfo(this.props.match.params.leagueId, this.props.languageId),
      );
    }
  }
  render() {
    const { rulesInfo } = this.props;
    return (
      <div id="leagueRules" className="tabContent">
        <div className="tournament-content league-rules">
          <div className="league-rules-content">
            {/* <div className="sectionHeading">
                            <div className="sectionTitle">FORMAT</div>
                        </div> */}
            {/* <div className="rules-label">Competition Type: </div> {rulesInfo.competitionType}
                        <br />
                        <div className="rules-label">Tier: </div> {rulesInfo.tier}
                        <br /> */}
            <div className="rules-label">
              {this.props.staticKeyWords.teams}:{" "}
            </div>{" "}
            {rulesInfo.teams}
            <br />
            <div className="rulesContent">
              <div className="rules-label">
                {this.props.staticKeyWords.structure}:
              </div>
              <span
                dangerouslySetInnerHTML={{ __html: rulesInfo.structure }}
              ></span>
            </div>
            {/* <br /> */}
            <div className="rules-label">
              {this.props.staticKeyWords.promotion}:{" "}
            </div>{" "}
            {rulesInfo.promotion}
            <br />
            <div className="rules-label">
              {this.props.staticKeyWords.relegation}:{" "}
            </div>{" "}
            {rulesInfo.relegation}
            <br />
            <div className="rulesContent">
              <div className="rules-label">
                {this.props.staticKeyWords.tieBreakRules}:{" "}
              </div>
              <span
                dangerouslySetInnerHTML={{ __html: rulesInfo.tieBreakRules }}
              ></span>
            </div>
            {/* 1) Points; 2) Goal difference; 3) Goals scored;
                            <br />
                            If the champions, relegated teams or qualified teams for UEFA competitions
                            cannot be determined by rules 1 to 3,
                            rules 4.1 to 4.3 are applied – 4.1) Points gained in head to head record
                            between such teams; 4.2) Away goals
                            scored in head to head record between such teams; 4.3) Play-offs */}
            {/* {this.props.rulesInfo['Tie-Break Rules']} */}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    rulesInfo: state.rules.rulesInfo,
    languageId: state.app.languageId,
    staticKeyWords: state.app.staticKeyWords,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(
      {
        getRulesInfo,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Rules);
