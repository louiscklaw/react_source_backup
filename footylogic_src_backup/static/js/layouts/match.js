import React, { Component, lazy, Suspense } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import MatchCenter from "../components/matchcenter/MatchCenter";
import { MatchBanner } from "../components/matchbanner/MatchBanner";
import {
  setBanner,
  getBanner,
  highlightTab,
  navigateTo,
  getCountryList,
  getToggleMode,
} from "./matchSlice";
//import HToHTab from '../components/htohtab/HToHTab';
// import SeasonalStats from '../components/seasonalstats/SeasonalStats';
// import PlayerAnalysis from '../components/playeranalysis/PlayerAnalysis';
import { setEventId } from "../AppSlice";
import { Helmet } from "react-helmet";
//import { setTabData,getTeamData } from '../components/playeranalysis/PlayerAnalysisSlice';
// import Summary  from '../components/summary/Summary';
// import BMRecentForms  from '../components/bmrecentforms/BMRecentForms';
// import BMStatistics  from '../components/bmstatistics/BMStatistics';
// import BMHead2Head from '../components/bmhead2head/BMHead2Head';
// import { configurations } from '../sharedfiles/constants';

/**
 * Lazy loading
 */
const SeasonalStats = lazy(
  () => import("../components/seasonalstats/SeasonalStats"),
);
const PlayerAnalysis = lazy(
  () => import("../components/playeranalysis/PlayerAnalysis"),
);
const Summary = lazy(() => import("../components/summary/Summary"));
const BMRecentForms = lazy(
  () => import("../components/bmrecentforms/BMRecentForms"),
);
const BMStatistics = lazy(
  () => import("../components/bmstatistics/BMStatistics"),
);
const BMHead2Head = lazy(() => import("../components/bmhead2head/BMHead2Head"));

class Match extends Component {
  componentWillMount() {
    this.props.dispatch(
      setEventId({
        countryId: this.props.match.params.countryId,
        competitionId: this.props.match.params.competitionId,
        eventId: this.props.match.params.eventId,
      }),
    );
    this.props.dispatch(
      getCountryList(
        this.props.match.params,
        this.props.languageId,
        this.props,
      ),
    );
    if (this.props.eventInfo && Object.keys(this.props.eventInfo).length > 0) {
      //this.props.dispatch(getWinBest(this.props.eventInfo.eventId,this.props.languageId));
    }
  }
  componentDidMount() {
    this.props.dispatch(
      getBanner(this.props.match.params.eventId, this.props.languageId),
    );
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.eventInfo.eventId !== nextProps.eventInfo.eventId) {
      //this.props.dispatch(getWinBest(nextProps.eventInfo.eventId,this.props.languageId));
    }
  }
  handleOddsClick() {
    let oddsWindow = window.open(
      "https://bet.hkjc.com/football/odds/odds_allodds.aspx?lang=" +
        (this.props.languageId === 19 ? "en" : "ch") +
        "&tmatchid=" +
        this.props.bannerData.eventId,
      "MsgWindow",
      "width=768px,height=768px,scrollbars=no,left=500px,top=200px",
    );
    oddsWindow.focus();
  }
  handlePreviewClick() {
    window.open(
      "https://football.hkjc.com/football/preview/preview.aspx?lang=" +
        (this.props.languageId === 19 ? "en" : "ch") +
        "&tmatchid=" +
        this.props.bannerData.eventId,
      "MsgWindow",
      "width=768px,height=768px,scrollbars=no,left=500px,top=200px",
    );
  }
  //  getCookieValue(name) {
  //   let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)")
  //   return result ? result.pop() : ""
  // }
  render() {
    const bannerData = this.props.bannerData;
    const competitionId = this.props.bannerData.competitionId;
    return (
      <>
        {/* <Helmet>
          <meta property="og:title" name="og:title" content={ bannerData.homeTeamName + ' VS ' + bannerData.awayTeamName}/>
          <meta property="og:description" name="og:description" content= {this.props.staticKeyWords.headToHead} />
        </Helmet> */}
        <div className="mainLanding-page">
          {Object.keys(bannerData).length > 0 ? (
            <MatchBanner data={bannerData} {...this.props} />
          ) : (
            ""
          )}
          <div className="subHeader">
            {/*<a className="active" href="#home">HEAD TO HEAD</a>
                        <a href="#">SEASONAL STATS</a>*/}
            <ul>
              {this.props.isAdvancedMode ? (
                <>
                  <li className={this.props.dispatch(highlightTab("htoh"))}>
                    <a
                      href="#"
                      onClick={() =>
                        this.props.dispatch(
                          navigateTo(this.props.eventInfo, "h2h", this.props),
                        )
                      }
                    >
                      {this.props.staticKeyWords.headToHead}
                    </a>
                  </li>
                  <li
                    className={
                      (this.props.seasonalStats.indexOf(
                        parseInt(competitionId),
                      ) !== -1
                        ? "d-none "
                        : "") +
                      this.props.dispatch(highlightTab("seasonalstats"))
                    }
                  >
                    <a
                      href="#"
                      onClick={() =>
                        this.props.dispatch(
                          navigateTo(
                            this.props.eventInfo,
                            "seasonalstats",
                            this.props,
                          ),
                        )
                      }
                    >
                      {this.props.staticKeyWords.seasonalStats}
                    </a>
                  </li>
                  <li
                    className={
                      (this.props.playerAnalysis.indexOf(
                        parseInt(competitionId),
                      ) !== -1
                        ? "d-none "
                        : "") +
                      this.props.dispatch(highlightTab("playeranalysis"))
                    }
                  >
                    <a
                      href="#"
                      onClick={() =>
                        this.props.dispatch(
                          navigateTo(
                            this.props.eventInfo,
                            "playeranalysis",
                            this.props,
                            this.props.bannerData.homeTeamId,
                          ),
                        )
                      }
                    >
                      {this.props.staticKeyWords.playerAnalysis}
                    </a>
                  </li>
                </>
              ) : (
                ""
              )}
              <li>
                <a href="#" onClick={() => this.handleOddsClick()}>
                  {this.props.staticKeyWords.odds}
                </a>
              </li>
              <li>
                <a href="#" onClick={() => this.handlePreviewClick()}>
                  {this.props.staticKeyWords.preview}
                </a>
              </li>

              {!this.props.isAdvancedMode ? (
                <>
                  <li
                    className={
                      (this.props.summary.indexOf(parseInt(competitionId)) !==
                      -1
                        ? "d-none"
                        : "") + this.props.dispatch(highlightTab("summary"))
                    }
                  >
                    <a
                      href="#"
                      onClick={() =>
                        this.props.dispatch(
                          navigateTo(
                            this.props.eventInfo,
                            "summary",
                            this.props,
                          ),
                        )
                      }
                    >
                      {this.props.staticKeyWords.summary}
                    </a>
                  </li>
                  <li
                    className={this.props.dispatch(
                      highlightTab("bmrecentforms"),
                    )}
                  >
                    <a
                      href="#"
                      onClick={() =>
                        this.props.dispatch(
                          navigateTo(
                            this.props.eventInfo,
                            "bmrecentforms",
                            this.props,
                          ),
                        )
                      }
                    >
                      {this.props.staticKeyWords.recentForms}
                    </a>
                  </li>
                  <li
                    className={this.props.dispatch(highlightTab("bmhead2head"))}
                  >
                    <a
                      href="#"
                      onClick={() =>
                        this.props.dispatch(
                          navigateTo(
                            this.props.eventInfo,
                            "bmhead2head",
                            this.props,
                          ),
                        )
                      }
                    >
                      {this.props.staticKeyWords.headToHead}
                    </a>
                  </li>
                  <li
                    className={
                      (this.props.bmStatistics.indexOf(
                        parseInt(competitionId),
                      ) !== -1
                        ? "d-none"
                        : "") +
                      this.props.dispatch(highlightTab("bmstatistics"))
                    }
                  >
                    <a
                      href="#"
                      onClick={() =>
                        this.props.dispatch(
                          navigateTo(
                            this.props.eventInfo,
                            "bmstatistics",
                            this.props,
                          ),
                        )
                      }
                    >
                      {this.props.staticKeyWords.statistics}
                    </a>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
            <ul className="changeMode">
              <li
                onClick={() =>
                  this.props.dispatch(
                    getToggleMode(
                      this.props.eventInfo,
                      this.props.isAdvancedMode,
                      this.props,
                    ),
                  )
                }
              >
                <a href="#">
                  {!this.props.isAdvancedMode
                    ? this.props.staticKeyWords.advancedMode
                    : this.props.staticKeyWords.basicMode}
                </a>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route
                path="/:lang/matchcenter/:countryId/:competitionId/:eventId/htoh"
                component={MatchCenter}
              />
              <Route
                path="/:lang/matchcenter/:countryId/:competitionId/:eventId/htohoutput/htoh"
                component={MatchCenter}
              />
              <Route
                path="/:lang/matchcenter/:countryId/:competitionId/:eventId/seasonalstats"
                render={(props) => <SeasonalStats {...props} />}
              />
              <Route
                path="/:lang/matchcenter/:countryId/:competitionId/:eventId/playeranalysis"
                render={(props) => <PlayerAnalysis {...props} />}
              />
              <Route
                path="/:lang/matchcenter/:countryId/:competitionId/:eventId/summary"
                render={(props) => <Summary {...props} />}
              />
              <Route
                path="/:lang/matchcenter/:countryId/:competitionId/:eventId/bmrecentforms/:tabname?"
                render={(props) => <BMRecentForms {...props} />}
              />
              <Route
                path="/:lang/matchcenter/:countryId/:competitionId/:eventId/bmstatistics"
                render={(props) => <BMStatistics {...props} />}
              />
              <Route
                path="/:lang/matchcenter/:countryId/:competitionId/:eventId/bmhead2head/:tabname?"
                render={(props) => <BMHead2Head {...props} />}
              />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    bannerData: state.match.bannerData,
    eventInfo: state.app.eventInfo,
    isAdvancedMode: state.match.isAdvancedMode,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    allSeasons: state.match.allSeasons,
    seasonalStats:
      state.app.configurations && state.app.configurations.seasonalStats
        ? state.app.configurations.seasonalStats
        : [],
    playerAnalysis:
      state.app.configurations && state.app.configurations.playerAnalysis
        ? state.app.configurations.playerAnalysis
        : [],
    summary:
      state.app.configurations && state.app.configurations.summary
        ? state.app.configurations.summary
        : [],
    bmStatistics:
      state.app.configurations && state.app.configurations.bmStatistics
        ? state.app.configurations.bmStatistics
        : [],
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(
      { setBanner, getBanner, navigateTo, getToggleMode },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Match);
