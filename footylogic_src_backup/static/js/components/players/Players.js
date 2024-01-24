import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPleayersData, setTableHeaders } from "./PlayersSlice";
import StandingsTable from "../standingstable/StandingsTable";
import { setDisableLeagues } from "../../AppSlice";
class Players extends Component {
  componentWillMount() {
    if (this.props.match && this.props.match.params) {
      this.props.dispatch(
        getPleayersData({
          teamId: Number(this.props.match.params.teamId),
          languageId: this.props.languageId,
        }),
      );
    }
    if (this.props.staticKeyWords && Object.keys(this.props.staticKeyWords)) {
      this.props.dispatch(setTableHeaders(this.props.staticKeyWords));
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      JSON.stringify(this.props.staticKeyWords) !==
      JSON.stringify(nextProps.staticKeyWords)
    ) {
      this.props.dispatch(setTableHeaders(nextProps.staticKeyWords));
    }
  }
  componentDidMount() {
    this.props.dispatch(setDisableLeagues({ disable: true, tab: "playerTab" }));
  }
  componentWillUnmount() {
    this.props.dispatch(
      setDisableLeagues({ disable: false, tab: "playerTab" }),
    );
  }
  render() {
    return (
      <div id="leagueTopScorer" className="tabContent">
        <div className="tournament-content">
          <StandingsTable
            standingColumns={this.props.playersColumns}
            standingsTableData={
              this.props.playersData.hasOwnProperty("info")
                ? this.props.playersData.info
                : []
            }
            isWhiteBG={true}
            isTournament={true}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playersColumns: state.players.playersColumns,
    playersData: state.players.playersData,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Players);
