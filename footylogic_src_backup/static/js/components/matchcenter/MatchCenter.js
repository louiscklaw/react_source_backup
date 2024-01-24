import React, { Component, lazy, Suspense } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import { WinPredictor } from "../winpredictor/WinPredictor";
import { BestBet } from "../bestbet/BestBet";
import { getWinBest, selectTab } from "./MatchCenterSlice";
// import HToHTab from '../htohtab/HToHTab';
// import RecentFromTab from '../recentformtab/RecentFormTab'
// import { setEventId } from '../../AppSlice'
import { engLangId } from "../../sharedfiles/constants";
import { setDisplayMode, checkEdisplay } from "../../AppSlice";

/**
 * Lazy loading
 */
const HToHTab = lazy(() => import("../htohtab/HToHTab"));
const RecentFromTab = lazy(() => import("../recentformtab/RecentFormTab"));

class MatchCenter extends Component {
  componentWillMount() {
    // this.props.dispatch(setEventId({
    //   countryId:this.props.match.params.countryId,
    //   competitionId:this.props.match.params.competitionId,
    //   eventId:this.props.match.params.eventId
    // }))
    if ("" + this.props.eventInfo.eventId.length > 0) {
      this.props.dispatch(
        getWinBest(this.props.eventInfo.eventId, this.props.languageId),
      );
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.eventInfo.eventId != nextProps.eventInfo.eventId) {
      this.props.dispatch(
        getWinBest(nextProps.eventInfo.eventId, this.props.languageId),
      );
    }
  }
  componentDidMount() {
    this.props.dispatch(selectTab("RF"));
    this.props.dispatch(
      getWinBest(this.props.match.params.eventId, this.props.languageId),
    );
    if (checkEdisplay()) {
      this.props.dispatch(setDisplayMode(true));
    }
  }
  componentWillUnmount() {
    this.props.dispatch(setDisplayMode(false));
  }
  render() {
    return (
      <div className="pageContent">
        <div className="btn-group">
          <NavLink to={this.props.match.url + "/head2head"}>
            {/*<button className={this.props.selectedTab === 'h2h' ? "active" : ""}*/}
            <button
              className={
                window.location.pathname.includes("htoh/head2head")
                  ? "active"
                  : ""
              }
              onClick={() => this.props.dispatch(selectTab("h2h"))}
            >
              {this.props.staticKeyWords.mcH2H}
            </button>
          </NavLink>
          <NavLink to={this.props.match.url + "/recentform"}>
            {/*<button className={this.props.selectedTab === 'RF' ? "active" : ""}*/}
            <button
              className={
                window.location.pathname.includes("htoh/recentform")
                  ? "active"
                  : ""
              }
              onClick={() => this.props.dispatch(selectTab("RF"))}
            >
              {this.props.staticKeyWords.recentForms}
            </button>
          </NavLink>
        </div>
        <div className="winPredictor-bestBet">
          <WinPredictor
            data={this.props.winData}
            languageId={this.props.languageId}
            draw={this.props.staticKeyWords.draw}
            win={
              this.props.languageId === engLangId
                ? this.props.staticKeyWords.win
                : this.props.staticKeyWords.mcWinPredictor
            }
            predictor={this.props.staticKeyWords.predictor}
          />
          <BestBet
            data={this.props.bestData}
            bestBet={this.props.staticKeyWords.bestBet}
            languageId={this.props.languageId}
            best={
              this.props.languageId === engLangId
                ? this.props.staticKeyWords.best
                : this.props.staticKeyWords.bestBet
            }
            bet={this.props.staticKeyWords.bet}
          />
        </div>
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route
              path={this.props.match.path + "/head2head/:tabname?"}
              render={(props) => <HToHTab {...props} />}
            />
            <Route
              path={this.props.match.path + "/recentform/:tabname?"}
              render={(props) => (
                <RecentFromTab isAdvancedMode={true} {...props} />
              )}
            />
          </Switch>
        </Suspense>
        {/*this.props.selectedTab==='h2h'?<HToHTab lastEncountersOptions={this.props.lastEncountersOptions}/>:
                        <RecentFromTab/>*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bannerData: state.matchcenter.bannerData,
    winData: state.matchcenter.winPredictorData,
    bestData: state.matchcenter.bestBetData,
    h2hLastEncounters: state.matchcenter.h2hLastEncounters,
    homeTeamName: state.matchcenter.homeTeamName,
    awayTeamName: state.matchcenter.awayTeamName,
    had: state.matchcenter.had,
    firstHalfHad: state.matchcenter.firstHalfHad,
    hdcHad: state.matchcenter.hdcHad,
    selectedTab: state.matchcenter.selectedTab,
    lastEncountersOptions: state.matchcenter.lastEncountersOptions,
    eventInfo: state.app.eventInfo,
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
export default connect(mapStateToProps, mapDispatchToProps)(MatchCenter);
