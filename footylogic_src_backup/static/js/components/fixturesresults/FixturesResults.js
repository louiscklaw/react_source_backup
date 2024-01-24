import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setLoader } from "../../AppSlice";

import {
  getFixturesResultsData,
  selectCarouselItem,
  getFixtureResultsFilters,
  setFilterOptions,
  getFixturesResultsSeasons,
  generateCarouselData,
  setLeagueSeason,
  setSelectedTabId,
  bindStatusResults,
  setSlideIndex,
} from "./FixturesResultsSlice";
import {
  formatFixtureResultsDate,
  fullMonths,
  formatDate,
} from "../../sharedfiles/helper";
import Loading from "../loading/Loading";
import { engLangId } from "../../sharedfiles/constants";
import {
  navigateToTeamStandings,
  navigateToTourStandings,
  navigateToTeamFixtureResults,
} from "../tournamentleague/TournamentLeagueSlice";

class FixturesResults extends Component {
  componentWillMount() {
    let competitionId = Number(this.props.match.params.leagueId);
    this.props.dispatch(setSelectedTabId(2));
    this.props.dispatch(setLoader(true));
    // this.props.dispatch(getFiltersData(1));

    let carouselData = [];
    for (var i = 11; i >= 0; i--) {
      var dt = new Date();
      dt.setMonth(dt.getMonth() - i);
      carouselData.push({
        id: dt.getFullYear() + "" + (dt.getMonth() + 1),
        fullDate:
          dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate(),
        date: dt.getDate(),
        month: dt.getMonth() + 1,
        year: dt.getFullYear(),
      });
    }
    for (var i = 1; i <= 11; i++) {
      var dt = new Date();
      dt.setMonth(dt.getMonth() + i);
      carouselData.push({
        id: dt.getFullYear() + "" + (dt.getMonth() + 1),
        fullDate:
          dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate(),
        date: dt.getDate(),
        month: dt.getMonth() + 1,
        year: dt.getFullYear(),
      });
    }
    var dt = new Date();
    var selectedCarousel = {
      id: dt.getFullYear() + "" + (dt.getMonth() + 1),
      fullDate:
        dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate(),
      date: dt.getDate(),
      month: dt.getMonth() + 1,
      year: dt.getFullYear(),
    };
    //this.props.dispatch(selectCarouselItem(selectedCarousel))
    //this.props.dispatch(setCarouselData(carouselData));
    if (this.props.match && this.props.match.params) {
      let params = this.getParams(this.props);
      params.date = selectedCarousel.year + "-" + selectedCarousel.month;
      if (Object.keys(params).length > 0) {
        if (!params.isLeague) {
          this.props.dispatch(
            getFixtureResultsFilters(
              competitionId,
              this.props.languageId,
              params,
            ),
          );
          // this.props.dispatch(getFixturesResultsData(params, this.props.languageId, this.props.fixturesresults));
        } else {
          this.props.dispatch(
            getFixturesResultsSeasons(params, this.props.languageId),
          );
        }
      }
    }
  }
  getParams(props) {
    if (props.type === "league") {
      if (
        props.match &&
        props.match.params.leagueId &&
        props.match.params.leagueId > 0
      ) {
        return {
          isLeague: true,
          compId: Number(props.match.params.leagueId),
          teamId: "",
          date:
            this.props.selectedCarouselItem.year +
            "-" +
            this.props.selectedCarouselItem.month,
          seasonId: props.selectedFRSeason.seasonId,
        };
      }
    } else {
      return {
        isLeague: false,
        compId: "",
        teamId: Number(props.match.params.teamId),
        date:
          this.props.selectedCarouselItem.year +
          "-" +
          this.props.selectedCarouselItem.month,
        selectedSeason: this.props.fixturesresults.selectedSeason,
        selectedLeague: this.props.fixturesresults.selectedLeague,
        selectedHHAD: this.props.fixturesresults.selectedHHAD,
        selectedHDC: this.props.fixturesresults.selectedHDC,
        selectedCorner: this.props.fixturesresults.selectedCorner,
        selectedOption: this.props.fixturesresults.selectedOption,
        selectedTabId: this.props.fixturesresults.selectedTabId,
      };
    }
    return {};
  }
  componentWillReceiveProps(nextProps) {
    let params = this.getParams(nextProps);
    let competitionId = Number(nextProps.match.params.leagueId);
    if (
      this.props.match &&
      this.props.match.params &&
      JSON.stringify(this.props.match.params) !==
        JSON.stringify(nextProps.match.params)
    ) {
      if (
        (window.location.pathname.includes("team") &&
          this.props.match.params.teamId !== nextProps.match.params.teamId) ||
        (window.location.pathname.includes("league") &&
          this.props.match.params.leagueId !==
            nextProps.match.params.leagueId) ||
        this.props.match.path !== nextProps.match.path
      ) {
        if (!params.isLeague) {
          // this.props.dispatch(getFixturesResultsData(params, this.props.languageId));
          this.props.dispatch(
            getFixtureResultsFilters(
              competitionId,
              nextProps.languageId,
              params,
            ),
          );
        }
      }
    }
    if (
      params.isLeague &&
      nextProps.selectedCarouselItem &&
      JSON.stringify(this.props.selectedCarouselItem) !==
        JSON.stringify(nextProps.selectedCarouselItem)
    ) {
      params.date =
        nextProps.selectedCarouselItem.year +
        "-" +
        nextProps.selectedCarouselItem.month;
      this.props.dispatch(
        getFixturesResultsData(params, this.props.languageId),
      );
    }
    if (
      params.isLeague &&
      nextProps.isSlideIndex &&
      nextProps.carouselData.length > 0 &&
      this.slider != undefined
    ) {
      var self = this;
      setTimeout(function () {
        if (nextProps.slideIndex > 5) {
          //self.slider.slickGoTo(nextProps.slideIndex);
          self.slider.slickNext();
        } else if (self.slider) {
          self.slider.slickGoTo(nextProps.slideIndex);
        }
      }, 1700);

      this.props.dispatch(setSlideIndex(false));
    }
  }
  componentDidMount() {
    // this.slider.slickGoTo(this.props.carouselData.length)
  }
  componentWillUnmount() {
    this.props.dispatch(selectCarouselItem({}));
    this.props.dispatch(setSelectedTabId(2));
  }
  selectItem(item) {
    this.props.dispatch(selectCarouselItem(item));
    // let params = this.getParams(this.props);
    // params.date = item.year + '-' + item.month;
    //this.props.dispatch(getFixturesResultsData(params, this.props.languageId));
  }
  leagueSeasonChanged(event) {
    if (event.target.value && event.target.value.length > 0) {
      var data = JSON.parse(event.target.value);
      if (data && Object.keys(data).length > 0) {
        this.props.dispatch(setLeagueSeason(data));
        this.props.dispatch(generateCarouselData(data));
      }
    }
  }
  seasonChanged(event) {
    this.props.dispatch(
      setFilterOptions({ key: "Season", value: event.target.value }),
    );
    this.props.dispatch(
      getFixturesResultsData(
        {
          isLeague: false,
          teamId: this.props.match.params.teamId,
          selectedSeason: event.target.value,
          selectedLeague: this.props.fixturesresults.selectedLeague,
          selectedHHAD: this.props.fixturesresults.selectedHHAD,
          selectedHDC: this.props.fixturesresults.selectedHDC,
          selectedCorner: this.props.fixturesresults.selectedCorner,
          selectedOption: this.props.fixturesresults.selectedOption,
          selectedTabId: this.props.fixturesresults.selectedTabId,
        },
        this.props.languageId,
      ),
    );
  }
  leagueChanged(event) {
    this.props.dispatch(
      setFilterOptions({ key: "Team_League", value: event.target.value }),
    );
    this.props.dispatch(
      getFixturesResultsData(
        {
          isLeague: false,
          teamId: this.props.match.params.teamId,
          selectedSeason: this.props.fixturesresults.selectedSeason,
          selectedLeague: event.target.value,
          selectedHHAD: this.props.fixturesresults.selectedHHAD,
          selectedHDC: this.props.fixturesresults.selectedHDC,
          selectedCorner: this.props.fixturesresults.selectedCorner,
          selectedOption: this.props.fixturesresults.selectedOption,
          selectedTabId: this.props.fixturesresults.selectedTabId,
        },
        this.props.languageId,
      ),
    );
  }
  hhadChanged(event) {
    this.props.dispatch(
      setFilterOptions({ key: "Team_HHAD", value: event.target.value }),
    );
    this.props.dispatch(
      getFixturesResultsData(
        {
          isLeague: false,
          teamId: this.props.match.params.teamId,
          selectedSeason: this.props.fixturesresults.selectedSeason,
          selectedLeague: this.props.fixturesresults.selectedLeague,
          selectedHHAD: event.target.value,
          selectedHDC: this.props.fixturesresults.selectedHDC,
          selectedCorner: this.props.fixturesresults.selectedCorner,
          selectedOption: this.props.fixturesresults.selectedOption,
          selectedTabId: this.props.fixturesresults.selectedTabId,
        },
        this.props.languageId,
      ),
    );
  }
  hdcChanged(event) {
    this.props.dispatch(
      setFilterOptions({ key: "Team_HDC", value: event.target.value }),
    );
    this.props.dispatch(
      getFixturesResultsData(
        {
          isLeague: false,
          teamId: this.props.match.params.teamId,
          selectedSeason: this.props.fixturesresults.selectedSeason,
          selectedLeague: this.props.fixturesresults.selectedLeague,
          selectedHHAD: this.props.fixturesresults.selectedHHAD,
          selectedHDC: event.target.value,
          selectedCorner: this.props.fixturesresults.selectedCorner,
          selectedOption: this.props.fixturesresults.selectedOption,
          selectedTabId: this.props.fixturesresults.selectedTabId,
        },
        this.props.languageId,
      ),
    );
  }
  cornersChanged(event) {
    this.props.dispatch(
      setFilterOptions({ key: "Team_Corner", value: event.target.value }),
    );
    this.props.dispatch(
      getFixturesResultsData(
        {
          isLeague: false,
          teamId: this.props.match.params.teamId,
          selectedSeason: this.props.fixturesresults.selectedSeason,
          selectedLeague: this.props.fixturesresults.selectedLeague,
          selectedHHAD: this.props.fixturesresults.selectedHHAD,
          selectedHDC: this.props.fixturesresults.selectedHDC,
          selectedCorner: event.target.value,
          selectedOption: this.props.fixturesresults.selectedOption,
          selectedTabId: this.props.fixturesresults.selectedTabId,
        },
        this.props.languageId,
      ),
    );
  }
  optionsChanged(event) {
    this.props.dispatch(
      setFilterOptions({ key: "Options", value: event.target.value }),
    );
    this.props.dispatch(
      getFixturesResultsData(
        {
          isLeague: false,
          teamId: this.props.match.params.teamId,
          selectedSeason: this.props.fixturesresults.selectedSeason,
          selectedLeague: this.props.fixturesresults.selectedLeague,
          selectedHHAD: this.props.fixturesresults.selectedHHAD,
          selectedHDC: this.props.fixturesresults.selectedHDC,
          selectedCorner: this.props.fixturesresults.selectedCorner,
          selectedOption: event.target.value,
          selectedTabId: this.props.fixturesresults.selectedTabId,
        },
        this.props.languageId,
      ),
    );
  }

  handleCornersStatus(selectedHomeCornerTab, item) {
    let corner = this.props.dispatch(
      bindStatusResults(item, selectedHomeCornerTab, "value"),
    );
    let formattedValue = "-";
    if (corner && corner != null && corner !== "" && corner !== "-") {
      formattedValue =
        (corner.toLowerCase().charAt(0).toLowerCase() === "h"
          ? this.props.staticKeyWords.highIcon
          : this.props.staticKeyWords.lowIcon) + corner.slice(1);
    }
    return formattedValue;
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 11,
    };

    return (
      <React.Fragment>
        {this.props.type == "league" ? (
          <div id="leagueResults" className="tabContent">
            <div className="tournament-content">
              <div className="monthCarousel mb-20">
                <Slider ref={(slider) => (this.slider = slider)} {...settings}>
                  {this.props.carouselData &&
                    this.props.carouselData.length > 0 &&
                    this.props.carouselData.map((item) => {
                      var formatedItem = formatFixtureResultsDate(
                        item.fullDate,
                        "carousel",
                      );
                      return (
                        <div className="month-list">
                          <div
                            className={
                              this.props.selectedCarouselItem.id === item.id
                                ? "active"
                                : ""
                            }
                            onClick={this.selectItem.bind(this, item)}
                          >
                            <div>
                              {formatedItem.month &&
                                this.props.staticKeyWords[
                                  formatedItem.month.toLowerCase()
                                ]}
                            </div>
                            <div>{formatedItem.year}</div>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>

              <div className="selectedMonthHeading">
                {this.props.selectedCarouselItem.month
                  ? this.props.staticKeyWords[
                      fullMonths[
                        this.props.selectedCarouselItem.month - 1
                      ].toLowerCase()
                    ]
                  : ""}{" "}
                {this.props.selectedCarouselItem.year}
                <div className="sectionFilter">
                  <div className="form-group form-inline-fixture-result">
                    {/* <div className="form-label">Season</div> */}
                    <div className="form-control">
                      <select onChange={this.leagueSeasonChanged.bind(this)}>
                        {this.props.seasons.map((item, index) => {
                          return (
                            <option
                              key={"season_" + index}
                              value={JSON.stringify(item)}
                            >
                              {item.seasonName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {this.props?.data?.info &&
                this.props?.data?.info?.length > 0 &&
                this.props?.data?.info.map((item) => {
                  var dateFormat = formatFixtureResultsDate(
                    item.kickOff,
                    "maindata",
                  );
                  const date = dateFormat.date;
                  let pattern = /[a-z]+|\d+/g;
                  let matches = date.match(pattern) || [];
                  let dayDate = [];

                  for (let i = 0; i < matches.length; i++) {
                    dayDate.push(matches[i]);
                  }
                  return (
                    <table className="tableDefault">
                      <thead>
                        <tr>
                          {/* {dateFormat && <th>{this.props?.staticKeyWords[dateFormat?.weekDay.toLowerCase()] + " " + (this.props.languageId === engLangId ? dateFormat?.date : this.props?.staticKeyWords[dateFormat?.month.toLowerCase()]) + " " + (this.props.languageId === engLangId ? this.props?.staticKeyWords[dateFormat?.month.toLowerCase()] : this.props?.staticKeyWords[dateFormat?.date])}</th>} */}
                          {dateFormat && (
                            <th>
                              {this.props.languageId === engLangId ? (
                                <>
                                  {dayDate[0]}
                                  <sup className="a__sup">{dayDate[1]}</sup>
                                </>
                              ) : (
                                this.props?.staticKeyWords[
                                  dateFormat?.month.toLowerCase()
                                ]
                              )}{" "}
                              {this.props.languageId === engLangId
                                ? this.props?.staticKeyWords[
                                    dateFormat?.month.toLowerCase()
                                  ]
                                : this.props?.staticKeyWords[
                                    dateFormat?.date
                                  ]}{" "}
                              (
                              {
                                this.props?.staticKeyWords[
                                  dateFormat?.weekDay.toLowerCase()
                                ]
                              }
                              )
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {item.events.map((event) => {
                          if (event && Object.keys(event).length > 0) {
                            return (
                              <tr>
                                <td>
                                  <div className="fixture-info">
                                    <div className="team-info">
                                      {event.homeTeamId &&
                                      event.homeTeamId !== null ? (
                                        <div
                                          onClick={() =>
                                            this.props.dispatch(
                                              navigateToTeamFixtureResults(
                                                this.props.history,
                                                this.props.match.params
                                                  .leagueId,
                                                event.homeTeamId,
                                                this.props.languageId,
                                              ),
                                            )
                                          }
                                          className="text-right truncate"
                                          data-href="true"
                                        >
                                          {event.homeTeamName}
                                        </div>
                                      ) : (
                                        <div className="text-right truncate">
                                          {event.homeTeamName}
                                        </div>
                                      )}
                                    </div>
                                    <div className="kickoff score">
                                      {event.homeTeamGoals} -{" "}
                                      {event.awayTeamGoals}
                                      <span className="kickoffHtscore">
                                        {" "}
                                        ({event.homeTeamHTGoals}-
                                        {event.awayTeamHTGoals})
                                      </span>
                                    </div>
                                    <div className="team-info">
                                      {event.awayTeamId &&
                                      event.awayTeamId !== null ? (
                                        <div
                                          onClick={() =>
                                            this.props.dispatch(
                                              navigateToTeamFixtureResults(
                                                this.props.history,
                                                this.props.match.params
                                                  .leagueId,
                                                event.awayTeamId,
                                                this.props.languageId,
                                              ),
                                            )
                                          }
                                          className="text-left truncate"
                                          data-href="true"
                                        >
                                          {event.awayTeamName}
                                        </div>
                                      ) : (
                                        <div className="text-left truncate">
                                          {event.awayTeamName}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  );
                })}

              <Loading
                isLoader={this.props.loader}
                isNoData={
                  (!this.props.loader &&
                    (Object.keys(this.props?.data).length === 0 ||
                      this.props?.data?.info?.length === 0)) ||
                  (Array.isArray(this.props.data?.info) &&
                    Object.keys(this.props?.data?.info[0]?.events[0]).length ===
                      0)
                }
                temporarilyNoData={this.props.staticKeyWords.temporarilyNoData}
              />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <ul className="tabsList" data-persist="true">
              <li
                className={
                  "tabLinks " +
                  (this.props.fixturesresults.selectedTabId == "1"
                    ? "active"
                    : "")
                }
                onClick={() => {
                  this.props.dispatch(setSelectedTabId(1));
                  this.props.dispatch(
                    getFixturesResultsData(
                      {
                        isLeague: false,
                        compId: "",
                        teamId: this.props.match.params.teamId,
                        date:
                          this.props.selectedCarouselItem.year +
                          "-" +
                          this.props.selectedCarouselItem.month,
                        selectedSeason:
                          this.props.fixturesresults.selectedSeason,
                        selectedLeague:
                          this.props.fixturesresults.selectedLeague,
                        selectedHHAD: this.props.fixturesresults.selectedHHAD,
                        selectedHDC: this.props.fixturesresults.selectedHDC,
                        selectedCorner:
                          this.props.fixturesresults.selectedCorner,
                        selectedOption:
                          this.props.fixturesresults.selectedOption,
                        selectedTabId: 1,
                      },
                      this.props.languageId,
                    ),
                  );
                }}
              >
                <a>{this.props.staticKeyWords.fixtures}</a>
              </li>
              <li
                className={
                  "tabLinks " +
                  (this.props.fixturesresults.selectedTabId == "2"
                    ? "active"
                    : "")
                }
                onClick={() => {
                  this.props.dispatch(setSelectedTabId(2));
                  this.props.dispatch(
                    getFixturesResultsData(
                      {
                        isLeague: false,
                        compId: "",
                        teamId: this.props.match.params.teamId,
                        date:
                          this.props.selectedCarouselItem.year +
                          "-" +
                          this.props.selectedCarouselItem.month,
                        selectedSeason:
                          this.props.fixturesresults.selectedSeason,
                        selectedLeague:
                          this.props.fixturesresults.selectedLeague,
                        selectedHHAD: this.props.fixturesresults.selectedHHAD,
                        selectedHDC: this.props.fixturesresults.selectedHDC,
                        selectedCorner:
                          this.props.fixturesresults.selectedCorner,
                        selectedOption:
                          this.props.fixturesresults.selectedOption,
                        selectedTabId: 2,
                      },
                      this.props.languageId,
                    ),
                  );
                }}
              >
                <a>{this.props.staticKeyWords.results}</a>
              </li>
            </ul>
            <div id="leagueResults" className="tabContent">
              <div className="tournament-content">
                <div className="sectionHeading">
                  <div></div>
                  <div className="sectionFilter">
                    <div className="form-group form-inline">
                      {/*<div className="form-label">Season</div>*/}
                      <div className="form-control">
                        <select
                          onChange={this.seasonChanged.bind(this)}
                          value={this.props.selectedSeason}
                        >
                          {this.props.fixtureFilters.hasOwnProperty("Season") &&
                            this.props.fixtureFilters.Season.map(
                              (season, seasonIndex) => {
                                return (
                                  <option key={seasonIndex} value={season.id}>
                                    {season.name}
                                  </option>
                                );
                              },
                            )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="tableDefault fixtureResults">
                  <thead>
                    <tr>
                      <th>
                        {this.props.staticKeyWords.competition}
                        {/* <div className="form-group">
                                                <div className="form-control">
                                                    <select onChange={this.leagueChanged.bind(this)}>
                                                        {this.props.fixtureFilters.hasOwnProperty('Team_League') && this.props.fixtureFilters.Team_League.map((league, leagueIndex) => {
                                                            return <option key={leagueIndex} value={league.id}>{league.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div> */}
                      </th>
                      <th>{this.props.staticKeyWords.mcDate}</th>
                      <th>
                        {this.props.staticKeyWords.ha}
                        <div className="form-group">
                          <div className="form-control">
                            <select
                              onChange={this.optionsChanged.bind(this)}
                              value={this.props.selectedOption}
                            >
                              {this.props.fixtureFilters.hasOwnProperty(
                                "Options",
                              ) &&
                                this.props.fixtureFilters.Options.map(
                                  (option, optionIndex) => {
                                    return (
                                      <option
                                        key={optionIndex}
                                        value={option.id}
                                      >
                                        {option.name}
                                      </option>
                                    );
                                  },
                                )}
                            </select>
                          </div>
                        </div>
                      </th>
                      <th>{this.props.staticKeyWords.against}</th>
                      <th>{this.props.staticKeyWords.wbyl}</th>
                      <th>{this.props.staticKeyWords.scoreHt}</th>
                      <th className="w-75">
                        {this.props.staticKeyWords.hHAD}
                        <div className="form-group">
                          <div className="form-control">
                            <select
                              onChange={this.hhadChanged.bind(this)}
                              value={this.props.selectedHHAD}
                            >
                              {this.props.fixtureFilters.hasOwnProperty(
                                "Team_HHAD",
                              ) &&
                                this.props.fixtureFilters.Team_HHAD.map(
                                  (hhad, hhadIndex) => {
                                    return (
                                      <option key={hhadIndex} value={hhad.id}>
                                        {hhad.name}
                                      </option>
                                    );
                                  },
                                )}
                            </select>
                          </div>
                        </div>
                      </th>
                      <th>
                        {this.props.staticKeyWords.hdc}
                        <div className="form-group">
                          <div className="form-control">
                            <select
                              onChange={this.hdcChanged.bind(this)}
                              value={this.props.selectedHDC}
                            >
                              {this.props.fixtureFilters.hasOwnProperty(
                                "Team_HDC",
                              ) &&
                                this.props.fixtureFilters.Team_HDC.map(
                                  (hdc, hdcIndex) => {
                                    return (
                                      <option key={hdcIndex} value={hdc.id}>
                                        {hdc.name}
                                      </option>
                                    );
                                  },
                                )}
                            </select>
                          </div>
                        </div>
                      </th>
                      <th className="w-75">
                        {this.props.staticKeyWords.corners}
                        <div className="form-group">
                          <div className="form-control">
                            <select
                              onChange={this.cornersChanged.bind(this)}
                              value={this.props.selectedCorner}
                            >
                              {this.props.fixtureFilters.hasOwnProperty(
                                "Team_Corner",
                              ) &&
                                this.props.fixtureFilters.Team_Corner.map(
                                  (corner, cornerIndex) => {
                                    return corner.name ==
                                      this.props.defaultCornersHiloValue ? (
                                      <option
                                        selected
                                        key={cornerIndex}
                                        value={corner.id}
                                      >
                                        {corner.name}
                                      </option>
                                    ) : (
                                      <option
                                        className="test"
                                        key={cornerIndex}
                                        value={corner.id}
                                      >
                                        {corner.name}
                                      </option>
                                    );
                                  },
                                )}
                            </select>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.data.hasOwnProperty("events") &&
                    this.props.data.events.length ? (
                      this.props.data.events.map((event, eventIndex) => {
                        return (
                          <tr>
                            {event.competitionId &&
                            event.competitionId !== null ? (
                              <td
                                onClick={() =>
                                  this.props.dispatch(
                                    navigateToTourStandings(
                                      this.props.history,
                                      event.competitionId,
                                      this.props.languageId,
                                    ),
                                  )
                                }
                                data-href="true"
                              >
                                <div>
                                  {event.competitionName
                                    ? event.competitionName
                                    : "-"}
                                </div>
                              </td>
                            ) : (
                              <td>
                                <div>
                                  {event.competitionName
                                    ? event.competitionName
                                    : "-"}
                                </div>
                              </td>
                            )}
                            <td>
                              <div>
                                {event.kickOff
                                  ? formatDate(event.kickOff, "banner").date
                                  : "-"}
                              </div>
                            </td>
                            <td>
                              <div>
                                {event.homeOrAway ? event.homeOrAway : "-"}
                              </div>
                            </td>

                            {event.teamIdAgainst &&
                            event.teamIdAgainst &&
                            event.competitionId &&
                            event?.competitionId !== null ? (
                              <td
                                onClick={() =>
                                  this.props.dispatch(
                                    navigateToTeamFixtureResults(
                                      this.props.history,
                                      event.competitionId,
                                      event.teamIdAgainst,
                                      this.props.languageId,
                                    ),
                                  )
                                }
                                data-href="true"
                              >
                                <div>
                                  {event.teamAganist ? event.teamAganist : "-"}
                                </div>
                              </td>
                            ) : (
                              <td>
                                <div>
                                  {event.teamAganist ? event.teamAganist : "-"}
                                </div>
                              </td>
                            )}
                            <td>
                              {/* <div>{event.winOrLoss ? event.winOrLoss : '-'}</div> */}
                              {event.winOrLoss ? (
                                <div className="">
                                  {/* <span className="hdcValue">{event.hdcName ? event.hdcName : "-"}</span> */}
                                  <span
                                    className={
                                      "status " +
                                      (event.winOrLoss &&
                                      event.winOrLoss.trim().toLowerCase() ===
                                        "w"
                                        ? "win"
                                        : event.winOrLoss &&
                                            event.winOrLoss
                                              .trim()
                                              .toLowerCase() === "l"
                                          ? "loss"
                                          : event.winOrLoss &&
                                              event.winOrLoss
                                                .trim()
                                                .toLowerCase() === "d"
                                            ? "draw"
                                            : "")
                                    }
                                  >
                                    {event.winOrLoss
                                      ? this.props.staticKeyWords[
                                          event.winOrLoss.trim().toLowerCase()
                                        ]
                                      : ""}
                                  </span>
                                </div>
                              ) : (
                                <span>-</span>
                              )}
                            </td>
                            <td>
                              <div>{event.result ? event.result : "-"}</div>
                            </td>
                            <td>
                              {/* <div className="textIcon"><span>{event.hHadName}</span><span className={event.hHadOutcome ? (event.hHadOutcome.toLowerCase() == 'h' ? 'status win' : event.hHadOutcome.toLowerCase() == 'a' ? 'status loss' : 'status draw') : ''}>{event.hHadOutcome ? event.hHadOutcome : '-'}</span></div> */}
                              {event.hHadName ? (
                                <div
                                  className={
                                    event.hHadName === "-"
                                      ? "textIcon textIcon-center"
                                      : "textIcon"
                                  }
                                >
                                  <span>
                                    {event.hHadName ? event.hHadName : "-"}
                                  </span>
                                  {event.hHadName === "-" ? (
                                    ""
                                  ) : (
                                    <span
                                      className={
                                        "status " +
                                        (event.hHadOutcome &&
                                        event.hHadOutcome
                                          .trim()
                                          .toLowerCase() === "w"
                                          ? "win"
                                          : event.hHadOutcome &&
                                              event.hHadOutcome
                                                .trim()
                                                .toLowerCase() === "l"
                                            ? "loss"
                                            : event.hHadOutcome &&
                                                event.hHadOutcome
                                                  .trim()
                                                  .toLowerCase() === "d"
                                              ? "draw"
                                              : "")
                                      }
                                    >
                                      {event.hHadOutcome
                                        ? this.props.staticKeyWords[
                                            event.hHadOutcome
                                              .trim()
                                              .toLowerCase()
                                          ]
                                        : "-"}
                                    </span>
                                  )}
                                </div>
                              ) : (
                                <span>-</span>
                              )}
                            </td>
                            <td>
                              {/* <div className="textIcon"><span>{event.hdcName}</span><span className={event.hdcOutcome ? (event.hdcOutcome.toLowerCase() == 'h' ? 'status win' : event.hdcOutcome.toLowerCase() == 'a' ? 'status loss' : 'status draw') : ''}>{event.hdcOutcome ? event.hdcOutcome : '-'}</span></div> */}
                              {event.hdcName ? (
                                <div
                                  className={
                                    event.hdcName === "-"
                                      ? "textIcon textIcon-center"
                                      : "textIcon"
                                  }
                                >
                                  <span className="hdcValue">
                                    {event.hdcName ? event.hdcName : "-"}
                                  </span>
                                  {event.hdcName === "-" ? (
                                    ""
                                  ) : (
                                    <span
                                      className={
                                        "status " +
                                        (event.hdcOutcome &&
                                        event.hdcOutcome
                                          .trim()
                                          .toLowerCase() === "w"
                                          ? "win"
                                          : event.hdcOutcome &&
                                              event.hdcOutcome
                                                .trim()
                                                .toLowerCase() === "l"
                                            ? "loss"
                                            : event.hdcOutcome &&
                                                event.hdcOutcome
                                                  .trim()
                                                  .toLowerCase() === "d"
                                              ? "draw"
                                              : "")
                                      }
                                    >
                                      {event.hdcOutcome
                                        ? this.props.staticKeyWords[
                                            event.hdcOutcome
                                              .trim()
                                              .toLowerCase()
                                          ]
                                        : ""}
                                    </span>
                                  )}
                                </div>
                              ) : (
                                <span>-</span>
                              )}
                            </td>
                            <td>
                              <div
                                className={this.props.dispatch(
                                  bindStatusResults(
                                    event.totalCorners,
                                    this.props.fixturesresults.fixtureFilters
                                      .Team_Corner[
                                      this.props.fixturesresults
                                        .selectedCorner - 1
                                    ],
                                    "class",
                                  ),
                                )}
                              >
                                {this.props.fixturesresults.selectedTabId == 2
                                  ? this.handleCornersStatus(
                                      this.props.fixturesresults.fixtureFilters
                                        .Team_Corner[
                                        this.props.fixturesresults
                                          .selectedCorner - 1
                                      ],
                                      event.totalCorners,
                                    )
                                  : "-"}
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colspan="9">
                          <Loading
                            isLoader={this.props.loader}
                            isNoData={
                              !this.props.loader &&
                              (this.props.data.hasOwnProperty("events")
                                ? !this.props.data.events.length
                                : true)
                            }
                            temporarilyNoData={
                              this.props.staticKeyWords.temporarilyNoData
                            }
                          />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.fixturesresults.data,
    carouselData: state.fixturesresults.carouselData,
    selectedCarouselItem: state.fixturesresults.selectedCarouselItem,
    fixtureFilters: state.fixturesresults.fixtureFilters,
    languageId: state.app.languageId,
    loader: state.app.loader,
    fixturesresults: state.fixturesresults,
    staticKeyWords: state.app.staticKeyWords,
    seasons: state.fixturesresults.seasons,
    isSlideIndex: state.fixturesresults.isSlideIndex,
    slideIndex: state.fixturesresults.slideIndex,
    defaultCornersHiloValue: state.fixturesresults.defaultCornersHiloValue,
    selectedFRSeason: state.fixturesresults.selectedFRSeason,
    selectedOption: state.fixturesresults.selectedOption,
    selectedHHAD: state.fixturesresults.selectedHHAD,
    selectedHDC: state.fixturesresults.selectedHDC,
    selectedCorner: state.fixturesresults.selectedCorner,
    selectedSeason: state.fixturesresults.selectedSeason,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FixturesResults);
