import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  fetchh2hlastencouters,
  setSelectedHiLoOption,
  bindHiLoValue,
} from "./htohOutputSlice";
import HomeAwayDrawGraph from "../homeawaydrawgraph/HomeAwayDrawGraph";
import PerGameGraph from "../pergamegraph/PerGameGraph";
import HiLoGraphs from "../hiloGraphs/HiLoGraphs";
import { formatDate } from "../../sharedfiles/helper";
import Loading from "../loading/Loading";

class HTOHOutput extends Component {
  componentDidMount() {
    if (
      this.props.lastEncountersOptions &&
      this.props.lastEncountersOptions.length > 0 &&
      this.props.match &&
      this.props.match.params.eventId &&
      this.props.match.params.eventId.length > 0
    ) {
      this.props.dispatch(
        fetchh2hlastencouters({
          optionId: this.props.lastEncountersOptions[1]["id"],
          eventId: this.props.match.params.eventId,
          languageId: this.props.languageId,
        }),
      );
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      JSON.stringify(nextProps.lastEncountersOptions) !==
        JSON.stringify(this.props.lastEncountersOptions) &&
      nextProps.lastEncountersOptions.length > 0 &&
      this.props.match &&
      this.props.match.params.eventId &&
      this.props.match.params.eventId.length > 0
    ) {
      this.props.dispatch(
        fetchh2hlastencouters({
          optionId: nextProps.lastEncountersOptions[1]["id"],
          eventId: this.props.match.params.eventId,
          languageId: this.props.languageId,
        }),
      );
    }
    if (
      nextProps.lastEncountersOptions.length > 0 &&
      this.props.match &&
      this.props.match.params.eventId &&
      this.props.match.params.eventId.length > 0 &&
      this.props.match.params.eventId !== nextProps.match.params.eventId
    ) {
      this.props.dispatch(
        fetchh2hlastencouters({
          optionId: nextProps.lastEncountersOptions[1]["id"],
          eventId: this.props.match.params.eventId,
          languageId: this.props.languageId,
        }),
      );
    }
  }
  render() {
    return (
      <div style={{ display: "block" }} id="Standings" className="tabContent">
        {!this.props.loader && (
          <div className="graphSection">
            <div className="sectionHeading">
              <div className="sectionTitle">
                {this.props.staticKeyWords.home +
                  "/" +
                  this.props.staticKeyWords.away +
                  "/" +
                  this.props.staticKeyWords.draw}
              </div>
            </div>
            <div className="graphContainer">
              <div className="graphContent">
                <HomeAwayDrawGraph
                  homeTeamName={this.props.homeTeamName}
                  awayTeamName={this.props.awayTeamName}
                  had={this.props.hadFullTime}
                  loadin="had"
                  title={this.props.staticKeyWords.fullTime}
                />
                {/* <HomeAwayDrawGraph homeTeamName={this.props.homeTeamName} 
                                        awayTeamName={this.props.awayTeamName} 
                                        had={this.props.hadHalfTime} 
                                        loadin='fhad'
                                        title={this.props.staticKeyWords.halfTime}/> Alex requested to hide */}
                <PerGameGraph
                  homeTeamName={this.props.homeTeamName}
                  awayTeamName={this.props.awayTeamName}
                  home={this.props.goalsPerGame.homeTeam}
                  away={this.props.goalsPerGame.awayTeam}
                  title={`${this.props.staticKeyWords.goals} <br/><span>${this.props.staticKeyWords.per}</span> ${this.props.staticKeyWords.game}`}
                />
              </div>
            </div>
          </div>
        )}
        <div className="tabTable-content">
          <div className="tableHeader-home">
            <div className="tableHeading">
              {this.props.staticKeyWords.pastEncounters}
            </div>
            {/* <div className="tableHeading-rightSection">
                        <div className="form-group">
                            <div className="form-control">
                                <select className="select-margin" value={this.props.selectedOptionId} onChange={(event)=> this.props.dispatch(fetchh2hlastencouters({
                                    optionId:event.target.value,
                                    eventId:this.props.hToHEventId,
                                    languageId:this.props.languageId}))}>
                                    {
                                        this.props.lastEncountersOptions.map((item,index)=>{
                                            return <option key={index} value={item.id} >{item.name}</option>
                                        })
                                    }    
                                </select>
                            </div>
                        </div>
                    </div> */}
          </div>
          <table className="tableDefault">
            <thead>
              <tr>
                <th>{this.props.staticKeyWords.date}</th>
                <th>{this.props.staticKeyWords.competition}</th>
                <th>{this.props.staticKeyWords.homeTeam}</th>
                <th>
                  {this.props.staticKeyWords.score +
                    " (" +
                    this.props.staticKeyWords.ht +
                    ")"}
                </th>
                <th>{this.props.staticKeyWords.awayTeam}</th>
                <th>{this.props.staticKeyWords.had}</th>
                <th>{this.props.staticKeyWords.fHAD}</th>
                {/*<th>
                                <div>{this.props.staticKeyWords.hiLo}
                                    <div className="form-group">
                                        <div className="form-control">
                                            <select className="select-margin" onChange={(event)=> this.props.dispatch(setSelectedHiLoOption(event.target.value))}>
                                                {
                                                    this.props.hiLoOptions && this.props.hiLoOptions.map((item,index)=>{
                                                        return <option key={index} value={item}>{item}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th className="w-170">{this.props.staticKeyWords.btts}</th>
                            <th className="w-170">{this.props.staticKeyWords.tts}</th>
                        */}
              </tr>
            </thead>
            <tbody>
              {!this.props.loader &&
              Object.keys(this.props.h2hLastEncounters).length > 0 &&
              this.props.h2hLastEncounters.hasOwnProperty(
                "h2hLast8Encounters",
              ) ? (
                this.props.h2hLastEncounters.h2hLast8Encounters.map(
                  (item, itemIndex) => {
                    return (
                      <tr>
                        <td>
                          {item.kickOff
                            ? formatDate(item.kickOff, "banner").date
                            : "-"}
                        </td>
                        <td>
                          {item.competitionName ? item.competitionName : "-"}
                        </td>
                        <td>{item.homeTeamName ? item.homeTeamName : "-"}</td>
                        <td>
                          {item.scoreFT} ({item.scoreHT})
                        </td>
                        <td>{item.awayTeamName ? item.awayTeamName : "-"}</td>
                        <td>
                          <span
                            className={
                              item.had.toLowerCase() === "h"
                                ? "status win"
                                : item.had.toLowerCase() === "a"
                                  ? " status loss"
                                  : item.had.toLowerCase() === "d"
                                    ? " status draw"
                                    : ""
                            }
                          >
                            {item.had ? item.had : "-"}
                          </span>
                        </td>
                        <td>
                          <span
                            className={
                              item.fHad.toLowerCase() === "h"
                                ? "status win"
                                : item.fHad.toLowerCase() === "a"
                                  ? " status loss"
                                  : item.fHad.toLowerCase() === "d"
                                    ? " status draw"
                                    : ""
                            }
                          >
                            {item.fHad ? item.fHad : "-"}
                          </span>
                        </td>
                        {/*<td><span className={(this.props.dispatch(bindHiLoValue(item.hiLo,this.props.selectedHiLoOption,'class')))}>{this.props.dispatch(bindHiLoValue(item.hiLo,this.props.selectedHiLoOption,'value'))}</span></td>
                            <td>{item.teamsToScore?item.teamsToScore:'-'}</td>*/}
                      </tr>
                    );
                  },
                )
              ) : (
                <tr>
                  <td colspan="9">
                    <Loading
                      isLoader={this.props.loader}
                      isNoData={
                        !this.props.loader &&
                        Object.keys(this.props.h2hLastEncounters).length > 0 &&
                        this.props.h2hLastEncounters.hasOwnProperty(
                          "h2hLast8Encounters",
                        ) &&
                        !this.props.h2hLastEncounters.h2hLast8Encounters.length
                      }
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/*{!this.props.loader && <div className="graphSection">
                <div className="sectionHeading">
                    <div className="sectionTitle">{this.props.staticKeyWords.hiLo}</div>
                </div>
                <div className="graphContainer">
                    <div className="graphContent">
                        <HiLoGraphs data={this.props.ftHiLo} title={this.props.staticKeyWords.fullTime}/>
                        <HiLoGraphs data={this.props.htHiLo} title={this.props.staticKeyWords.halfTime}/>
                    </div>
                </div>
            </div>}*/}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    h2hLastEncounters: state.htohoutput.h2hLastEncounters,
    staticKeyWords: state.app.staticKeyWords,
    selectedOptionId: state.htohoutput.selectedOptionId,
    languageId: state.app.languageId,
    hiLoOptions: state.htohoutput.hiLoOptions,
    selectedHiLoOption: state.htohoutput.selectedHiLoOption,
    hadFullTime: state.htohoutput.hadFullTime,
    hadHalfTime: state.htohoutput.hadHalfTime,
    goalsPerGame: state.htohoutput.goalsPerGame,
    ftHiLo: state.htohoutput.ftHiLo,
    htHiLo: state.htohoutput.htHiLo,
    homeTeamName: state.match.bannerData.homeTeamName,
    awayTeamName: state.match.bannerData.awayTeamName,
    homeTeamId: state.match.bannerData.homeTeamId,
    awayTeamId: state.match.bannerData.awayTeamId,
    loader: state.app.loader,
    hToHEventId: state.htohsearch.hToHEventId,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(
      {
        // setOptions
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HTOHOutput);
