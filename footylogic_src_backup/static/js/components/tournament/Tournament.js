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
  navigateTo,
  getTournamentCountries,
} from "./TournamentSlice";
import { getCompetitionsList, getCountryList } from "../../layouts/matchSlice";
import League from "./league/League";

class Tournament extends Component {
  componentWillMount() {
    this.props.dispatch(selectCountry({ country: "", index: "" }));
    var selectedType = window.location.pathname.includes("home/league")
      ? "league"
      : window.location.pathname.includes("home/cup")
        ? "cup"
        : window.location.pathname.includes("home/international")
          ? "international"
          : "";
    this.props.dispatch(selectType(selectedType));
    this.props.dispatch(
      getTournamentCountries(selectedType, this.props.languageId),
    );
  }
  render() {
    return (
      <section className="layout-content">
        <div className="mainContent container">
          <div className="mainLanding-page tournament-landingPage">
            <div className="btn-group">
              <button
                className={this.props.selectedType == "league" ? "active" : ""}
                onClick={() =>
                  this.props.dispatch(
                    navigateTo("league", this.props, this.props.languageId),
                  )
                }
              >
                {this.props.staticKeyWords.league}
              </button>
              <button
                className={this.props.selectedType == "cup" ? "active" : ""}
                onClick={() =>
                  this.props.dispatch(
                    navigateTo("cup", this.props, this.props.languageId),
                  )
                }
              >
                {this.props.staticKeyWords.cup}
              </button>
              <button
                className={
                  this.props.selectedType == "international" ? "active" : ""
                }
                onClick={() =>
                  this.props.dispatch(
                    navigateTo(
                      "international",
                      this.props,
                      this.props.languageId,
                    ),
                  )
                }
              >
                {this.props.staticKeyWords.international}
              </button>
            </div>
            {/*<Route path={`${this.props.match.path}/league`} render={(props)=><League {...props}/>} />
                    <Route path={`${this.props.match.path}/cup`} render={(props)=><League {...props}/>} />
                    <Route path={`${this.props.match.path}/international`} render={(props)=><League {...props}/>} />*/}
            <Route
              path={`${this.props.match.path}/:leagueType`}
              render={(props) => <League {...props} />}
            />
            {/*<Route path="/tournament/home/league" render={(props)=><League {...props}/>} />
                    <Route path="/tournament/home/cup" render={(props)=><League {...props}/>} />
                    <Route path="/tournament/home/international" render={(props)=><League {...props}/>} />
                    */}
          </div>
        </div>
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    countryList: state.match.countryList,
    allCountries: state.match.allCountries,
    selectedCountry: state.tournament.selectedCountry,
    selectedTab: state.tournament.selectedTab,
    competitionsList: state.match.competitionsList,
    selectedType: state.tournament.selectedType,
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
export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
