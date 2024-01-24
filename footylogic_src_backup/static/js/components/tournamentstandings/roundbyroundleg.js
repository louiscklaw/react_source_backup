import React, { Component } from "react";
import { formatDate } from "../../sharedfiles/helper";
import { setSelectButton } from "../tournamentleague/TournamentLeagueSlice";
import Loading from "../loading/Loading";
class RoundByRoundLeg extends Component {
  rowNavigation(link) {
    this.props.history.push(link);
    this.props.dispatch(setSelectButton("fixturesresults"));
  }
  render() {
    const { leg, standingsTableData } = this.props;
    return leg === 1 ? (
      <>
        <table className="tableDefault">
          <thead>
            <tr>
              <th className="playOff-data">
                {this.props.staticKeyWords.mcDate}
              </th>
              {this.props.isMatchReplay && <th className="playOff-data"></th>}
              <th className="playOff-Teams">
                {this.props.isWRDisplay
                  ? standingsTableData[0].fullTimeScore === "-"
                    ? this.props.staticKeyWords.team1
                    : this.props.staticKeyWords.winner
                  : this.props.staticKeyWords.home}
              </th>
              <th className="playOff-data">
                {this.props.staticKeyWords.scoreHt}
              </th>
              <th className="playoff-data">
                {this.props.staticKeyWords.extraTime}
              </th>
              <th className="playoff-data">
                {this.props.staticKeyWords.penalties}
              </th>
              <th className="playOff-Teams">
                {this.props.isWRDisplay
                  ? standingsTableData[0].fullTimeScore === "-"
                    ? this.props.staticKeyWords.team2
                    : this.props.staticKeyWords.runnerUp
                  : this.props.staticKeyWords.away}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.standingsTableData?.length &&
              this.props.standingsTableData.length > 0 &&
              this.props.standingsTableData.map((item, index) => {
                return (
                  <tr key={"leg_" + index}>
                    <td className="playOff-data">
                      <div>
                        {item.kickOff
                          ? formatDate(item.kickOff, "banner").date
                          : "-"}
                      </div>
                    </td>
                    {this.props.isMatchReplay && (
                      <td className="playOff-data">
                        <div>
                          {item.isReplay
                            ? this.props.staticKeyWords.replay
                            : "-"}
                        </div>
                      </td>
                    )}
                    {item.homeTeamId && item.homeTeamId !== null ? (
                      <td
                        onClick={
                          item.homeTeamId &&
                          this.rowNavigation.bind(
                            this,
                            this.props.rowNavigation.replace(
                              "[:id]",
                              item.homeTeamId,
                            ),
                          )
                        }
                        className="playOff-Teams"
                        data-href="true"
                      >
                        <div className={item.winner == "H" ? "teamBold" : ""}>
                          {item.homeTeamName}
                        </div>
                      </td>
                    ) : (
                      <td className="playOff-Teams">
                        <div className={item.winner == "H" ? "teamBold" : ""}>
                          {item.homeTeamName}
                        </div>
                      </td>
                    )}
                    <td className="playOff-data">
                      <div>
                        {item.fullTimeScore} ({item.halfTimeScore})
                      </div>
                    </td>
                    <td className="playOff-data">
                      <div>{item.etScore}</div>
                    </td>
                    <td className="playOff-data">
                      <div>{item.penalities}</div>
                    </td>
                    {item.awayTeamId && item.awayTeamId !== null ? (
                      <td
                        onClick={
                          item.awayTeamId &&
                          this.rowNavigation.bind(
                            this,
                            this.props.rowNavigation.replace(
                              "[:id]",
                              item.awayTeamId,
                            ),
                          )
                        }
                        className="playOff-Teams"
                        data-href="true"
                      >
                        <div className={item.winner == "A" ? "teamBold" : ""}>
                          {item.awayTeamName}
                        </div>
                      </td>
                    ) : (
                      <td className="playOff-Teams">
                        <div className={item.winner == "A" ? "teamBold" : ""}>
                          {item.awayTeamName}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Loading
          isLoader={this.props.loader}
          isNoData={
            !this.props.loader &&
            (Object.keys(this.props.standingsTableData).length === 0 ||
              this.props.standingsTableData.length === 0)
          }
          temporarilyNoData={this.props.staticKeyWords.temporarilyNoData}
        />
      </>
    ) : (
      <>
        <div className="sectionHeading">
          <div className="sectionTitle">
            <span>{this.props.staticKeyWords.firstLeg}</span>
          </div>
        </div>
        <table className="tableDefault">
          <thead>
            <tr>
              <th className="playOff-date">
                {this.props.staticKeyWords.mcDate}
              </th>
              <th className="playOff-Teams">
                {this.props.staticKeyWords.home}
              </th>
              <th className="playOff-data">
                {this.props.staticKeyWords.scoreHt}
              </th>
              <th className="playOff-Teams">
                {this.props.staticKeyWords.away}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.standingsTableData &&
              this.props.standingsTableData.leg1?.length &&
              this.props.standingsTableData.leg1.map((item, index) => {
                return (
                  <tr key={"leg_" + index}>
                    <td className="playOff-date">
                      <div>
                        {item.kickOff
                          ? formatDate(item.kickOff, "banner").date
                          : "-"}
                      </div>
                    </td>
                    {item.homeTeamId && item.homeTeamId !== null ? (
                      <td
                        onClick={
                          item.homeTeamId &&
                          this.rowNavigation.bind(
                            this,
                            this.props.rowNavigation.replace(
                              "[:id]",
                              item.homeTeamId,
                            ),
                          )
                        }
                        className="playOff-Teams"
                        data-href="true"
                      >
                        <div className={item.winner == "H" ? "teamBold" : ""}>
                          {item.homeTeamName}
                        </div>
                      </td>
                    ) : (
                      <td className="playOff-Teams">
                        <div className={item.winner == "H" ? "teamBold" : ""}>
                          {item.homeTeamName}
                        </div>
                      </td>
                    )}
                    <td className="playOff-data">
                      <div>
                        {item.fullTimeScore} ({item.halfTimeScore})
                      </div>
                    </td>
                    {item.awayTeamId && item.awayTeamId !== null ? (
                      <td
                        onClick={
                          item.awayTeamId &&
                          this.rowNavigation.bind(
                            this,
                            this.props.rowNavigation.replace(
                              "[:id]",
                              item.awayTeamId,
                            ),
                          )
                        }
                        className="playOff-Teams"
                        data-href="true"
                      >
                        <div className={item.winner == "A" ? "teamBold" : ""}>
                          {item.awayTeamName}
                        </div>
                      </td>
                    ) : (
                      <td className="playOff-Teams">
                        <div className={item.winner == "A" ? "teamBold" : ""}>
                          {item.awayTeamName}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Loading
          isLoader={this.props.loader}
          isNoData={
            !this.props.loader &&
            (Object.keys(this.props.standingsTableData).length === 0 ||
              this.props.standingsTableData.length === 0)
          }
          temporarilyNoData={this.props.staticKeyWords.temporarilyNoData}
        />
        <div className="sectionHeading">
          <div className="sectionTitle">
            <span>{this.props.staticKeyWords.secondLeg}</span>
          </div>
        </div>
        <table className="tableDefault">
          <thead>
            <tr>
              <th className="playOff-data">
                {this.props.staticKeyWords.mcDate}
              </th>
              <th className="playOff-Teams">
                {this.props.staticKeyWords.home}
              </th>
              <th className="playOff-data">
                {this.props.staticKeyWords.scoreHt}
              </th>
              <th className="playoff-data">
                {this.props.staticKeyWords.extraTime} (
                {this.props.staticKeyWords.penalties})
              </th>
              <th className="playoff-data">
                {this.props.staticKeyWords.totalScore}
              </th>
              <th className="playOff-Teams">
                {this.props.staticKeyWords.away}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.standingsTableData &&
              this.props.standingsTableData.leg2?.length &&
              this.props.standingsTableData.leg2.map((item, index) => {
                return (
                  <tr key={"leg_" + index}>
                    <td className="playOff-data">
                      <div>
                        {item.kickOff
                          ? formatDate(item.kickOff, "banner").date
                          : "-"}
                      </div>
                    </td>
                    {item.homeTeamId && item.homeTeamId !== null ? (
                      <td
                        onClick={
                          item.homeTeamId &&
                          this.rowNavigation.bind(
                            this,
                            this.props.rowNavigation.replace(
                              "[:id]",
                              item.homeTeamId,
                            ),
                          )
                        }
                        className="playOff-Teams"
                        data-href="true"
                      >
                        <div className={item.winner == "H" ? "teamBold" : ""}>
                          {item.homeTeamName}
                        </div>
                      </td>
                    ) : (
                      <td className="playOff-Teams">
                        <div className={item.winner == "H" ? "teamBold" : ""}>
                          {item.homeTeamName}
                        </div>
                      </td>
                    )}
                    <td className="playOff-data">
                      <div>
                        {item.fullTimeScore} ({item.halfTimeScore})
                      </div>
                    </td>
                    <td className="playOff-data">
                      <div>
                        {item.etScore}{" "}
                        {item.penScore != "-" && "(" + item.penScore + ")"}
                      </div>
                    </td>
                    <td className="playOff-data">
                      <div>{item.aggScore}</div>
                    </td>
                    {item.awayTeamId && item.awayTeamId !== null ? (
                      <td
                        onClick={
                          item.awayTeamId &&
                          this.rowNavigation.bind(
                            this,
                            this.props.rowNavigation.replace(
                              "[:id]",
                              item.awayTeamId,
                            ),
                          )
                        }
                        className="playOff-Teams"
                        data-href="true"
                      >
                        <div className={item.winner == "A" ? "teamBold" : ""}>
                          {item.awayTeamName}
                        </div>
                      </td>
                    ) : (
                      <td className="playOff-Teams">
                        <div className={item.winner == "A" ? "teamBold" : ""}>
                          {item.awayTeamName}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Loading
          isLoader={this.props.loader}
          isNoData={
            !this.props.loader &&
            (Object.keys(this.props.standingsTableData).length === 0 ||
              this.props.standingsTableData.length === 0)
          }
          temporarilyNoData={this.props.staticKeyWords.temporarilyNoData}
        />
      </>
    );
  }
}

export default RoundByRoundLeg;
