import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { selectTab } from './RecentFormHandicapSlice';
import RecentformTable from "../recentformtable/RecentformTable";
import HaFuGraph from "../hafugraph/HaFuGraph";
//import TableGraph from '../tablegraph/TableGraph';

class RecentFormTab extends Component {
  // componentDidMount(){

  // }
  // componentDidUpdate(prevProps, prevState){

  // }
  render() {
    let hadData = [];
    if (this.props.hdcHad && this.props.hdcHad.length > 0) {
      for (var item of this.props.hdcHad) {
        hadData.push({
          outcomeName: item.result,
          homeGoals: item.homeGoals,
          awayGoals: item.awayGoals,
        });
      }
    }
    return (
      <div style={{ display: "block" }} id="Results" className="tabContent">
        <RecentformTable />
        {!this.props.isEdisplay &&
          this.props.isAdvancedMode &&
          this.props.hdc?.length &&
          hadData?.length && (
            <div className="graphSection">
              <div className="sectionHeading">
                <div className="sectionTitle">
                  {this.props.staticKeyWords.handicap}
                </div>
              </div>

              <div className="graphContainer">
                <div className="graphContent TwoInRow">
                  <div className="leftColumn leftColumn-fullwidth">
                    {/*<TableGraph data={this.props.hdc}
                            homeTeamName={this.props.homeTeamName}
                            awayTeamName={this.props.awayTeamName}/>*/}
                    <HaFuGraph
                      data={this.props.hdc}
                      maxValue={3}
                      loadin="rfhdc"
                      title={this.props.staticKeyWords.handicap}
                      graphHeight="300px"
                      graphWidth="85%"
                    />
                  </div>
                  <div className="rightColumn rightColumn-fullwidth">
                    <HaFuGraph
                      data={hadData}
                      maxValue={6}
                      loadin="rfhdchad"
                      title={this.props.staticKeyWords.handicapHAD}
                      graphHeight="300px"
                      graphWidth="85%"
                    />
                  </div>
                </div>
                <div className="noDatagraph">
                  {this.props.staticKeyWords.handicapLinePastGame}
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
    hdcHad: state.recentfromtab.hdcHad,
    hdc: state.recentfromtab.hdc,
    homeTeamName: state.recentfromtab.homeTeamName,
    awayTeamName: state.recentfromtab.awayTeamName,
    staticKeyWords: state.app.staticKeyWords,
    isEdisplay: state.app.isEdisplay,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentFormTab);
