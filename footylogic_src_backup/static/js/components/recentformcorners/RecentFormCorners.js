import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setOption } from "./RecentFormCornersSlice";
import RecentformTable from "../recentformtable/RecentformTable";
import PerGameGraph from "../pergamegraph/PerGameGraph";
import HiLoGraphDual from "../hiloGraphs/HiLoGraphsDual";
import { engLangId } from "../../sharedfiles/constants";

class RecentFormCorners extends Component {
  // componentDidMount(){

  // }
  // componentDidUpdate(prevProps, prevState){

  // }
  optionChanged(type, id) {
    this.props.dispatch(setOption({ type, id }));
  }
  render() {
    return (
      <div style={{ display: "block" }} id="corners" className="tabContent">
        <RecentformTable
          homeSelectedOptionId={this.props.homeSelectedOptionId}
          awaySelectedOptionId={this.props.awaySelectedOptionId}
          onOptionChange={this.optionChanged.bind(this)}
        />
        {!this.props.isEdisplay && this.props.isAdvancedMode && (
          <div className="graphSection">
            <div className="sectionHeading">
              <div className="sectionTitle">
                {this.props.staticKeyWords.cornersHiLo}
              </div>
            </div>
            <div className="graphContainer">
              <div className="graphContent">
                <div>
                  <div>
                    <HiLoGraphDual
                      data={this.props.cornersInfo}
                      homeTeamName={this.props.homeTeamName}
                      awayTeamName={this.props.awayTeamName}
                      homeSubTitle={
                        "Last 8" +
                        (this.props.homeSelectedOptionId === 1
                          ? ""
                          : this.props.homeSelectedOptionId === 2
                            ? " Home"
                            : " Away") +
                        " Results"
                      }
                      awaySubTitle={
                        "Last 8" +
                        (this.props.awaySelectedOptionId === 1
                          ? ""
                          : this.props.awaySelectedOptionId === 2
                            ? " Home"
                            : " Away") +
                        " Results"
                      }
                      title=""
                    />
                  </div>
                  {/* <div>
                            <PerGameGraph 
                                home={this.props.cornersPerGame.homeGoals} 
                                away={this.props.cornersPerGame.awayGoals} 
                                // homeTeamName={this.props.homeTeamName}
                                // awayTeamName={this.props.awayTeamName}
                                title={this.props.languageId===engLangId?`${this.props.staticKeyWords.corners} ${this.props.staticKeyWords.for} <span>${this.props.staticKeyWords.per} ${this.props.staticKeyWords.game}</span> `:`${this.props.staticKeyWords.cornersForPerGame}`}/>
                            <PerGameGraph 
                                home={this.props.cornersAgainstPerGame.homeGoals} 
                                away={this.props.cornersAgainstPerGame.awayGoals} 
                                // homeTeamName={this.props.homeTeamName}
                                // awayTeamName={this.props.awayTeamName}
                                title={this.props.languageId===engLangId?`${this.props.staticKeyWords.cornersAgainst} <span>${this.props.staticKeyWords.per} ${this.props.staticKeyWords.game}</span> `:`${this.props.staticKeyWords.cornersAgainstPerGame}`}/>
                        </div> */}
                </div>
              </div>
              <div className="noDatagraph">
                {this.props.staticKeyWords.cornersDataPastGame}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cornersPerGame: state.recentfromtab.cornersPerGame,
    cornersAgainstPerGame: state.recentfromtab.cornersAgainstPerGame,
    cornersInfo: state.recentfromtab.cornersInfo,
    staticKeyWords: state.app.staticKeyWords,
    homeTeamName: state.match.bannerData.homeTeamName,
    awayTeamName: state.match.bannerData.awayTeamName,
    homeSelectedOptionId: state.recentformcorners.homeSelectedOptionId,
    awaySelectedOptionId: state.recentformcorners.awaySelectedOptionId,
    languageId: state.app.languageId,
    isEdisplay: state.app.isEdisplay,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentFormCorners);
