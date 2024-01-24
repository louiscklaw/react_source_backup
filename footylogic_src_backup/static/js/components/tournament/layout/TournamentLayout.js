import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Tournament from "../Tournament";
import TournamentLeague from "../../tournamentleague/TournamentLeague";

class TournamentLayout extends Component {
  render() {
    return (
      <Switch>
        {/*<Route path={`${this.props.match.path}/home`} render={(props)=><Tournament {...props}/>} />
        <Route path={`${this.props.match.path}/league/:leagueId`} render={(props)=><TournamentLeague {...props}/>} />*/}
        <Route
          path={`${this.props.match.path}/home`}
          render={(props) => <Tournament {...props} />}
        />
        <Route
          path={`${this.props.match.path}/:leagueType/:leagueId`}
          render={(props) => <TournamentLeague {...props} />}
        />
      </Switch>
    );
  }
}
function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TournamentLayout);
