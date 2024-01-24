import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  selectCountry,
  selectType,
  setSelectedComp,
  navigateToLeague,
} from "../TournamentSlice";
import {
  getCompetitionsList,
  setCompetitionsList,
  assignCompetitions,
} from "../../../layouts/matchSlice";
import Loading from "../../loading/Loading";
import { metaData } from "../../../AppSlice";

class League extends Component {
  componentWillMount() {
    // this.props.dispatch(selectType('league'));
    // let url = new URLSearchParams(window.location.search);
    // if(url.has('League')){
    this.props.dispatch(metaData("League"));
    // } else if(url.has('cup')){
    //   metaData("default");
    // } else if(url.has('international')){
    //   metaData("default");
    // }
  }
  // navigateToLeague(item){
  //   this.props.dispatch(setSelectedComp(item));
  //   var lang = 'en';
  //   if(this.props.match && this.props.match.params.lang && this.props.match.params.lang.length>0){
  //     lang = this.props.match.params.lang
  //   }
  //   this.props.history.push('/'+lang+'/tournament/'+this.props.match.params.leagueType+'/'+item.competitionId+'/standings');
  // }
  render() {
    return (
      <div className="tournament-content p-0">
        {Object.keys(this.props.allCountries).length > 0 ? (
          <div className="tabSection">
            {Object.keys(this.props.allCountries).map((country, index) => {
              return (
                <React.Fragment key={index}>
                  <ul className="countryTabList">
                    {this.props.allCountries[country].map((list, ind) => {
                      return (
                        <li
                          key={ind}
                          className={
                            "tabLinks " +
                            (country + ind == this.props.selectedTab
                              ? "active"
                              : "")
                          }
                          onClick={() => {
                            this.props.dispatch(
                              assignCompetitions(list, this.props),
                            );
                            this.props.dispatch(
                              selectCountry({
                                country: country,
                                index: country + ind,
                              }),
                            );
                          }}
                        >
                          <a>
                            {this.props.selectedType == "league" && (
                              <span
                                className={"country-flag " + list.categoryImg}
                              ></span>
                            )}
                            {/*<span ><img src={list.countryImageURL}/></span>*/}
                            <div>{list.categoryName}</div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  {country == this.props.selectedCountry && (
                    <div className="tabsContent">
                      <div className="tabContent countryTabContent">
                        <ul className="">
                          {this.props.competitionsList &&
                            this.props.competitionsList.map(
                              (competition, competitionIndex) => {
                                {
                                  /*return <li onClick={this.navigateToLeague.bind(this,competition)}>{competition.competitionName}</li>*/
                                }
                                return (
                                  <li
                                    key={"tourcomp" + competitionIndex}
                                    onClick={() =>
                                      this.props.dispatch(
                                        navigateToLeague(
                                          competition,
                                          this.props,
                                        ),
                                      )
                                    }
                                  >
                                    {competition.competitionName}
                                  </li>
                                );
                              },
                            )}
                        </ul>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          <Loading
            isLoader={this.props.loader}
            isNoData={
              !this.props.loader && !Object.keys(this.props.allCountries).length
            }
          />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    allCountries: state.match.allCountries,
    selectedCountry: state.tournament.selectedCountry,
    selectedTab: state.tournament.selectedTab,
    competitionsList: state.match.competitionsList,
    selectedType: state.tournament.selectedType,
    languageId: state.app.languageId,
    loader: state.app.loader,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(League);
