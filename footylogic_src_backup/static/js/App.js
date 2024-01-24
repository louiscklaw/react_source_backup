import React, { Component, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import Match from './layouts/match';
import "./assets/css/hkjc-stats-center-styles.scss";
import logo from "./assets/images/logo.png";
// import { Home } from './components/match/home';
import {
  getCountryList,
  getCompetitionsList,
  getEventList,
  toggleMode,
} from "./layouts/matchSlice";
import {
  getEvenId,
  resetEventId,
  setTempCountryInfo,
  setTempCompetitionInfo,
  reSetMainTab,
  setStaticKeyWords,
  setLanguage,
  setConfigurations,
  getConfigurations,
} from "./AppSlice";
// import TournamentLeague from './components/tournamentleague/TournamentLeague';
// import TournamentLayout from './components/tournament/layout/TournamentLayout';
// import HtoHSearch from './components/htohsearch/HtoHSearch';
import blLogo from "./assets/images/logo-bettorlogic.png";
import { staticEng, staticChe, configurations } from "./sharedfiles/constants";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { engLangId } from "./sharedfiles/constants";
import Loading from "./components/loading/Loading";
/**
 * Lazy loading
 */
const TournamentLayout = lazy(
  () => import("./components/tournament/layout/TournamentLayout"),
);
// const HtoHSearch = lazy(() => import('./components/htohsearch/HtoHSearch')); // As per client request temporarily hiding
const Home = lazy(() => import("./components/match/home"));
const Match = lazy(() => import("./layouts/match"));
const ErrorPage = lazy(() => import("../src/components/errorpage"));
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null,
    };
  }

  componentDidCatch(error, erroInfo) {
    this.setState({ error: error, erroInfo: erroInfo });
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentWillMount() {
    var staticKeyWords = {};
    if (
      this.props.match &&
      this.props.match.params.lang &&
      this.props.match.params.lang === "en"
    ) {
      this.props.dispatch(setLanguage(19));
      staticKeyWords = staticEng;
    } else {
      this.props.dispatch(setLanguage(18));
      staticKeyWords = staticChe;
    }
    if (
      this.props.match &&
      (!this.props.match.params.lang ||
        this.props.match.params.lang.length < 2 ||
        this.props.match.params.lang.length > 2)
    ) {
      if (this.props.match.url.length > 0 && this.props.match.url !== "/") {
        this.props.history.push("/en" + this.props.location.pathname);
        window.location.reload();
      } else {
        this.props.history.push("/en");
        window.location.reload();
      }
    }
    this.props.dispatch(getConfigurations());
    //this.props.dispatch(setConfigurations(configurations));
    this.props.dispatch(setStaticKeyWords(staticKeyWords));
  }
  componentDidMount() {
    this.props.dispatch(reSetMainTab());
    if (navigator.cookieEnabled) {
      window.onbeforeunload = function () {
        localStorage.setItem("modeType", "");
      };
    }
  }
  changeLanguage(lang) {
    var pathName = window.location.pathname;
    if (pathName.length >= 3) {
      var pathArray = pathName.split("/");
      if (pathArray.length >= 2 && pathArray[1].length === 2) {
        pathArray[1] = lang;
        pathName = pathArray.join("/");
      }
      this.props.history.push(pathName);
      window.location.reload();
    }
  }
  render() {
    if (this.state.hasError) {
      window.location.href = window.location.origin + "/error";
    }
    return (
      <>
        {/* <Helmet>
        <meta property="og:title" name="og:title" content="Footylogic Stats Centre"></meta>
        <meta  property="og:description" name="og:description" content="Match List" />
        </Helmet> */}
        {!this.props.intialLoad ? (
          <Router>
            <div
              className={
                "HKJC-stats-center " +
                `${this.props.isEdisplay ? "eDisplay" : ""}`
              }
            >
              {!this.props.isEdisplay && (
                <header className="layout-header">
                  <div className="mainHeader container">
                    <div className="mainHeader-content ">
                      <div className="mainHeader-left">
                        <div className="mainHeader-logo">
                          <img src={logo} alt="logo" />
                        </div>
                        <div className="mainHeader-tabs">
                          <ul>
                            <li
                              onClick={() =>
                                this.props.dispatch(
                                  resetEventId("match", toggleMode),
                                )
                              }
                            >
                              <NavLink
                                to={`${this.props.match.url}`}
                                isActive={(match, location) => {
                                  if (
                                    location.pathname.split("/").length === 2 ||
                                    location.pathname.includes("/matchcenter")
                                  ) {
                                    return true;
                                  } else {
                                    return false;
                                  }
                                }}
                              >
                                {this.props.staticKeyWords.match}
                              </NavLink>
                              {/*<NavLink to={`${this.props.match.url}`} isActive={(match, location) => {
                                                            if (location.pathname === "/" || location.pathname.includes('home')|| 
                                                            location.pathname.includes('/matchcenter')) {
                                                              return true;
                                                            }else{
                                                              return false;
                                                            }
                                                          }}>

                                                            
                          {this.props.staticKeyWords.match} 
                                                        </NavLink>*/}
                            </li>

                            <li
                              onClick={() =>
                                this.props.dispatch(
                                  resetEventId("tournament", toggleMode),
                                )
                              }
                            >
                              <NavLink
                                to={`${this.props.match.url}/tournament/home/league`}
                                isActive={(match, location) => {
                                  if (
                                    location.pathname.includes("tournament")
                                  ) {
                                    return true;
                                  } else {
                                    return false;
                                  }
                                }}
                              >
                                {this.props.staticKeyWords.tournament}
                              </NavLink>
                            </li>
                            {/* <li onClick={() => this.props.dispatch(resetEventId('htohsearch', toggleMode))}>
                        <NavLink to={`${this.props.match.url}/htohsearch`}>
                          {this.props.staticKeyWords.headTOHeadSearch}
                        </NavLink>
                      </li> */}
                          </ul>
                        </div>
                      </div>
                      <div className="mainHeader-right">
                        <div className="lan">
                          <div>SHARE </div>
                          <div>
                            <FacebookShareButton
                              url={
                                this.props.metaDataurl +
                                "?url=" +
                                window.location.href.replace("#", "") +
                                "&title=" +
                                this.props.metaDataInfo?.metaTitle?.replace(
                                  /\s+/g,
                                  "%20",
                                ) +
                                "&description=" +
                                this.props.metaDataInfo?.metaDescription?.replace(
                                  /\s+/g,
                                  "%20",
                                )
                              }
                            >
                              <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                          </div>
                          <div>
                            <TwitterShareButton
                              url={encodeURI(
                                this.props.metaDataurl +
                                  "?url=" +
                                  window.location.href +
                                  "&title=" +
                                  this.props.metaDataInfo?.metaTitle +
                                  "&description=" +
                                  this.props.metaDataInfo?.metaDescription,
                              )}
                            >
                              <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                          </div>
                          {/* <div>
                      <WhatsappShareButton url={"https://metatags.footylogic.com?url="+window.location.href+"&title="+this.props.metaDataInfo.metaTitle.replace(/\s+/g, '%20') + "&description="+this.props.metaDataInfo.metaDescription.replace(/\s+/g, '%20')}>
                        <WhatsappIcon size={32} round={true}/>
                        </WhatsappShareButton>
                    </div> */}
                        </div>
                        <div className="lan">
                          <a
                            href="#"
                            onClick={this.changeLanguage.bind(this, "zh")}
                          >
                            中文
                          </a>
                          |
                          <a
                            href="#"
                            onClick={this.changeLanguage.bind(this, "en")}
                          >
                            EN
                          </a>
                          |
                          <a
                            href={
                              "https://bet.hkjc.com/football/index.aspx?lang=" +
                              (this.props.languageId === 19 ? "en" : "ch")
                            }
                            target="_blank"
                          >
                            hkjcfootball.com
                          </a>
                        </div>
                      </div>
                      {this.props.selectedMainTab == "match" &&
                      this.props.eventInfo.eventId &&
                      false ? (
                        <div className="mainHeader-right">
                          <div className="form-grid">
                            <div className="form-col">
                              <div className="form-group">
                                <div className="form-control">
                                  <select
                                    className="select-margin"
                                    value={this.props.tempEventInfo.countryId}
                                    onChange={(event) => {
                                      this.props.dispatch(
                                        setTempCountryInfo(event.target.value),
                                      );
                                      this.props.dispatch(
                                        getCompetitionsList(event.target.value),
                                      );
                                    }}
                                  >
                                    <option hidden selected value></option>
                                    {/* client requested to make selection empty when no match i.e. especially for international */}
                                    {this.props.countryList.map(
                                      (country, index) => {
                                        return (
                                          <option
                                            key={index}
                                            value={country.countryId}
                                          >
                                            {country.countryName}
                                          </option>
                                        );
                                      },
                                    )}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-col">
                              <div className="form-group">
                                <div className="form-control">
                                  <select
                                    className="select-margin"
                                    value={
                                      this.props.tempEventInfo.competitionId
                                    }
                                    onChange={(event) => {
                                      this.props.dispatch(
                                        setTempCompetitionInfo(
                                          event.target.value,
                                        ),
                                      );
                                      this.props.dispatch(
                                        getEventList(event.target.value),
                                      );
                                    }}
                                  >
                                    {this.props.competitionsList.map(
                                      (competition, index) => {
                                        return (
                                          <option
                                            key={index}
                                            value={competition.competitionId}
                                          >
                                            {competition.competitionName}
                                          </option>
                                        );
                                      },
                                    )}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-grid">
                            <div className="form-col">
                              <div className="form-group">
                                <div className="form-control">
                                  <select
                                    className="select-margin"
                                    value={this.props.tempEventInfo.eventId}
                                    onChange={(event) =>
                                      this.props.dispatch(
                                        getEvenId(
                                          {
                                            countryId:
                                              this.props.tempEventInfo
                                                .countryId,
                                            competitionId:
                                              this.props.tempEventInfo
                                                .competitionId,
                                            eventId: event.target.value,
                                          },
                                          "fromdropdown",
                                          this.props,
                                          this.props.bannerData,
                                          this.props.tabInfo,
                                        ),
                                      )
                                    }
                                  >
                                    {this.props.eventList.map(
                                      (event, index) => {
                                        return (
                                          <option
                                            key={index}
                                            value={event.eventId}
                                          >
                                            {event.eventName}
                                          </option>
                                        );
                                      },
                                    )}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </header>
              )}
              <section className="layout-content">
                <div className="mainContent container">
                  {!this.props.isEdisplay && (
                    <div className="gameSearch">
                      {/*{(this.props.selectedMainTab=='match' && this.props.eventInfo.eventId)?<div className="form-grid">*/}
                      {this.props.eventInfo.eventId &&
                      window.location.pathname
                        .split("/")
                        .includes("matchcenter") ? (
                        <div className="form-grid">
                          <div className="form-col">
                            <div className="form-group">
                              <div className="form-control">
                                <select
                                  className="leagueDropdown"
                                  value={this.props.tempEventInfo.countryId}
                                  onChange={(event) => {
                                    this.props.dispatch(
                                      setTempCountryInfo(event.target.value),
                                    );
                                    this.props.dispatch(
                                      getCompetitionsList(
                                        event.target.value,
                                        "",
                                        "",
                                        this.props.languageId,
                                        "",
                                        "",
                                        this.props,
                                      ),
                                    );
                                  }}
                                >
                                  <option hidden selected value>
                                    {this.props.staticKeyWords.selectCountry}
                                  </option>
                                  {/* client requested to make selection empty when no match i.e. especially for international */}
                                  {this.props.countryList.map(
                                    (country, index) => {
                                      return (
                                        <option
                                          key={index}
                                          value={country.countryId}
                                        >
                                          {country.countryName}
                                        </option>
                                      );
                                    },
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-col">
                            <div className="form-group">
                              <div className="form-control">
                                <select
                                  className="leagueDropdown"
                                  value={this.props.tempEventInfo.competitionId}
                                  onChange={(event) => {
                                    this.props.dispatch(
                                      setTempCompetitionInfo(
                                        event.target.value,
                                      ),
                                    );
                                    this.props.dispatch(
                                      getEventList(
                                        event.target.value,
                                        "",
                                        this.props.languageId,
                                        "",
                                        this.props.tempEventInfo.countryId,
                                        this.props,
                                      ),
                                    );
                                  }}
                                >
                                  <option hidden selected value>
                                    {this.props.staticKeyWords.selectTournment}
                                  </option>
                                  {this.props.competitionsList.map(
                                    (competition, index) => {
                                      //  if (this.props.disableLeagues.length===0 ||this.props.disableLeagues.indexOf(competition.competitionId) != -1) {
                                      return (
                                        <option
                                          disabled={
                                            this.props.disableLeagues.indexOf(
                                              competition.competitionId,
                                            ) !== -1
                                              ? true
                                              : false
                                          }
                                          key={index}
                                          value={competition.competitionId}
                                        >
                                          {competition.competitionName}
                                        </option>
                                      );
                                      //   }
                                    },
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-col">
                            <div className="form-group">
                              <div className="form-control">
                                <select
                                  className="leagueDropdown"
                                  value={this.props.tempEventInfo.eventId}
                                  onChange={(event) =>
                                    this.props.dispatch(
                                      getEvenId(
                                        {
                                          countryId:
                                            this.props.tempEventInfo.countryId,
                                          competitionId:
                                            this.props.tempEventInfo
                                              .competitionId,
                                          eventId: event.target.value,
                                        },
                                        "fromdropdown",
                                        this.props,
                                        this.props.bannerData,
                                        this.props.tabInfo,
                                      ),
                                    )
                                  }
                                >
                                  <option hidden selected value>
                                    {this.props.staticKeyWords.selectMatch}
                                  </option>
                                  {this.props.eventList.map((event, index) => {
                                    return (
                                      <option key={index} value={event.eventId}>
                                        {event.eventName}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                  {/*<Router>*/}
                  <Suspense fallback={<div></div>}>
                    <Switch>
                      <Route
                        exact
                        path={`${this.props.match.path}`}
                        component={Home}
                      />
                      <Route
                        exact
                        path={`${this.props.match.path}/home`}
                        component={Home}
                      />
                      <Route
                        path={`${this.props.match.path}/matchcenter/:countryId/:competitionId/:eventId`}
                        render={(props) => <Match {...props} />}
                      />
                      <Route
                        path={`${this.props.match.path}/tournament`}
                        render={(props) => <TournamentLayout {...props} />}
                      />
                      <Route
                        exact
                        path={`${this.props.match.path}/error`}
                        component={ErrorPage}
                      />
                      {/* <Route path={`${this.props.match.path}/htohsearch`} render={(props) => <HtoHSearch {...props} />} /> */}
                    </Switch>
                  </Suspense>
                  {/*</Router>*/}
                  <div className="poweredBy ">
                    <div className="poweredBy-content">
                      {this.props.staticKeyWords.footerText}
                    </div>
                    <div className="poweredBy-logo">
                      <img src={blLogo} alt="logo" />
                    </div>
                  </div>
                </div>
              </section>
              {/* <footer className="layout-footer">
            <div className="footer-content container">

              <div className="footerBottom">
                <div className="footerLinks">
                  <ul>
                    <li><a href="#">{this.props.staticKeyWords.faq}</a></li>
                    <li><a href="#">{this.props.staticKeyWords.contactUs}</a></li>
                    <li><a href="#">{this.props.staticKeyWords.rules}</a></li>
                    <li><a href="#">{this.props.staticKeyWords.responsibleGamblingPolicy}</a></li>
                    <li><a href="#">{this.props.staticKeyWords.privacy}</a></li>
                    <li><a href="#">{this.props.staticKeyWords.disclaimerUs}</a></li>
                    <li><a href="#">{this.props.staticKeyWords.securityTips}</a></li>
                  </ul>
                </div>
                <div className="footer-copyRight">{this.props.staticKeyWords.copyRightText}
                </div>
              </div>
            </div>
          </footer> */}
            </div>
          </Router>
        ) : (
          ""
        )}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    countryList: state.match.countryList,
    competitionsList: state.match.competitionsList,
    eventList: state.match.eventList,
    selectedMainTab: state.app.selectedMainTab,
    eventInfo: state.app.eventInfo,
    tempEventInfo: state.app.tempEventInfo,
    bannerData: state.match.bannerData,
    tabInfo: state.playeranalysis.tabInfo,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    disableLeagues: state.app.disableLeagues,
    isEdisplay: state.app.isEdisplay,
    metaDataInfo: state.app.metaDataInfo,
    metaDataurl: state.app.metaDataURL,
    intialLoad: state.app.intialLoad,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(
      {
        getConfigurations,
        getCountryList,
        getEvenId,
        getCompetitionsList,
        getEventList,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
