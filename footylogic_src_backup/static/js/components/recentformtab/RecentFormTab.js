import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  selectTab,
  getGraphData,
  loadData,
  resetTableData,
  selectDefaultHomeOptionId,
  selectDefaultAwayOptionId,
} from "./RecentFormTabSlice";
import RecentFormHAD from "../recentformhad/RecentFormHAD";
import RecentFormHandicap from "../recentformhandicap/RecentFormHandicap";
import RecentFormHiLo from "../recentformhilo/RecentFormHiLo";
import RecentFormCorners from "../recentformcorners/RecentFormCorners";

class RecentFormTab extends Component {
  componentWillMount() {
    if (this.props?.match?.params?.tabname) {
      this.props.dispatch(selectTab(this.props.match.params.tabname));
    } else {
      this.props.dispatch(selectTab("had"));
    }
  }
  componentDidMount() {
    if (
      this.props.bannerData &&
      Object.keys(this.props.bannerData).length > 0
    ) {
      let tabname = this.props.match.params.tabname
        ? this.props.match.params.tabname
        : "had";
      this.props.dispatch(
        loadData(
          tabname,
          "",
          "",
          this.props.bannerData.homeTeamId,
          this.props.bannerData.awayTeamId,
          this.props.languageId,
          {},
        ),
      );
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.bannerData != nextProps.bannerData &&
      window.location.pathname.split("/").includes("recentform")
    ) {
      this.props.dispatch(selectDefaultHomeOptionId(this.props.homeOption));
      this.props.dispatch(selectDefaultAwayOptionId(this.props.awayOption));
      let tabname = this.props.match.params.tabname
        ? this.props.match.params.tabname
        : "had";
      this.props.dispatch(
        loadData(
          tabname,
          "",
          "",
          nextProps.bannerData.homeTeamId,
          nextProps.bannerData.awayTeamId,
          this.props.languageId,
          {
            selectedHomeOptionId: this.props.homeOption,
            selectedAwayOptionId: this.props.awayOption,
          },
        ),
      );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    //     if(prevProps?.match?.params?.tabname &&this.props?.match?.params?.tabname &&
    //         this.props.match.params.tabname!=prevProps.match.params.tabname){
    //     if(this.props?.match?.params?.tabname){
    //         this.props.dispatch(selectTab(this.props.match.params.tabname))
    //     }
    //     else{
    //         this.props.dispatch(selectTab('had'))
    //     }
    // }
  }
  componentWillUnmount() {
    this.props.dispatch(resetTableData());
  }
  handleTabClickChange(tab) {
    if (this.props.isAdvancedMode) {
      this.props.history.push(
        "/" +
          this.props.match.params.lang +
          "/matchcenter/" +
          this.props.match.params.countryId +
          "/" +
          this.props.match.params.competitionId +
          "/" +
          this.props.match.params.eventId +
          "/htoh/recentform/" +
          tab,
      );
    } else {
      this.props.history.push(
        "/" +
          this.props.match.params.lang +
          "/matchcenter/" +
          this.props.match.params.countryId +
          "/" +
          this.props.match.params.competitionId +
          "/" +
          this.props.match.params.eventId +
          "/bmrecentforms/" +
          tab,
      );
    }
    this.props.dispatch(
      loadData(
        tab,
        "",
        "",
        this.props.homeTeamId,
        this.props.awayTeamId,
        this.props.languageId,
        {},
      ),
    );
    this.props.dispatch(selectTab(tab));
  }
  render() {
    return (
      <div className="tabSection">
        <ul className="tabsList" data-persist="true">
          <li
            className={
              "tabLinks" + (this.props.selectedTab === "had" ? " active" : "")
            }
            id="defaultOpen"
            onClick={() => this.handleTabClickChange("had")}
          >
            <a>{this.props.staticKeyWords.had}</a>
          </li>
          <li
            className={
              "tabLinks" +
              (this.props.selectedTab === "handicap" ? " active" : "")
            }
            onClick={() => this.handleTabClickChange("handicap")}
          >
            <a>{this.props.staticKeyWords.handicaps}</a>
          </li>
          <li
            className={
              "tabLinks" + (this.props.selectedTab === "hilo" ? " active" : "")
            }
            onClick={() => this.handleTabClickChange("hilo")}
          >
            <a>{this.props.staticKeyWords.hiLo}</a>
          </li>
          <li
            className={
              "tabLinks" +
              (this.props.selectedTab === "corners" ? " active" : "")
            }
            onClick={() => this.handleTabClickChange("corners")}
          >
            <a>{this.props.staticKeyWords.corners}</a>
          </li>
        </ul>
        <div className="tabsContent">
          {this.props.selectedTab === "had" ? (
            <RecentFormHAD isAdvancedMode={this.props.isAdvancedMode} />
          ) : this.props.selectedTab === "handicap" ? (
            <RecentFormHandicap isAdvancedMode={this.props.isAdvancedMode} />
          ) : this.props.selectedTab === "hilo" ? (
            <RecentFormHiLo isAdvancedMode={this.props.isAdvancedMode} />
          ) : (
            <RecentFormCorners isAdvancedMode={this.props.isAdvancedMode} />
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selectedTab: state.recentfromtab.selectedTab,
    homeTeamData: state.recentformhad.homeTeamData,
    awayTeamData: state.recentformhad.awayTeamData,
    homeTeamName: state.recentformhad.homeTeamName,
    awayTeamName: state.recentformhad.awayTeamName,
    bannerData: state.match.bannerData,
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    staticKeyWords: state.app.staticKeyWords,
    languageId: state.app.languageId,
    defaultHomeOptionId: state.recentfromtab.defaultHomeOptionId,
    defaultAwayOptionId: state.recentfromtab.defaultAwayOptionId,
    homeOption: state.recentfromtab.homeOption,
    awayOption: state.recentfromtab.awayOption,
    isAdvancedMode: state.match.isAdvancedMode,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(
      {
        selectTab,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentFormTab);
