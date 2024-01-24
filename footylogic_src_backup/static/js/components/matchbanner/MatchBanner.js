import React, { useEffect, useState } from "react";
// import { bindActionCreators } from "redux";

// import LeicesterLogo from '../../assets/images/Leicester.png';
// import AstonvillaLogo from '../../assets/images/astonvilla.png';
import { formatDate, addSuffix } from "../../sharedfiles/helper";
import { imageUrls } from "../../sharedfiles/EndpointConfig";

export function MatchBanner(props) {
  var competitionId = props.data.competitionId;
  var teamId = props.data.homeTeamId;
  var ateamId = props.data.awayTeamId;
  var teamawaynavId = props.data.awayTeamIdNav;
  var teamhomenavId = props.data.homeTeamIdNav;
  var tournamenttype = props.data.tournamentType;

  const homeBannerClick = () => {
    if (teamhomenavId && tournamenttype) {
      props.history.push(
        "/" +
          props.match.params.lang +
          "/tournament/" +
          props.data.tournamentType.toLowerCase() +
          "/" +
          competitionId +
          "/team/" +
          teamhomenavId +
          "/fixturesresults",
      );
    }
  };
  const awayBannerClick = () => {
    if (teamawaynavId && tournamenttype) {
      props.history.push(
        "/" +
          props.match.params.lang +
          "/tournament/" +
          props.data.tournamentType.toLowerCase() +
          "/" +
          competitionId +
          "/team/" +
          teamawaynavId +
          "/fixturesresults",
      );
    }
  };
  const bannerClick = () => {
    if (tournamenttype && competitionId) {
      props.history.push(
        "/" +
          props.match.params.lang +
          "/tournament/" +
          props.data.tournamentType.toLowerCase() +
          "/" +
          competitionId +
          "/standings/",
      );
    }
  };
  var koDate = formatDate(props.data.kickOffTime, "banner");

  return (
    <div className="mainTeamBanner">
      <div className="gameDetails">
        <div className="homeTeam" style={{ backgroundColor: "#0C5483" }}>
          <div className="homeTeam-logo">
            <img
              className="teamLogo-img"
              src={imageUrls.team + "" + props.data.homeTeamLogo + ".png"}
              alt="logo"
            />
            {/*<span class={"teamLogo t-"+props.data.homeTeamLogo}></span>*/}
          </div>
          <div className="homeTeam-details">
            <div className="teamName">
              <a
                href="#"
                onClick={() => {
                  homeBannerClick();
                }}
              >
                {props.data.homeTeamName}
              </a>
            </div>
            {props.data.homeLeagueShortName != null ? (
              <div className={`teamPosition`}>
                {
                  <>
                    ({props.data.homeLeagueShortName} - {props.data.homeTeamPos}
                    )
                  </>
                }
              </div>
            ) : (
              <div className={`teamPosition`}>
                {props.data.homeTeamPos != null ? (
                  <>
                    ({props.data.homeTeamPos}
                    <sup>{addSuffix(props.data.homeTeamPos, true)}</sup>)
                  </>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>

        <div className="leagueDetails">
          <div className="kickOff-details">
            <div className="normalPosition">
              <div>
                {props.data.matchDayCode} {props.data.matchNumber}
              </div>
              {props.data.competitionIdNav != null ? (
                <div>
                  <a
                    href="#"
                    onClick={() => {
                      bannerClick();
                    }}
                  >
                    {props.data.competitionName}
                  </a>
                </div>
              ) : (
                <div>{props.data.competitionName}</div>
              )}
              <div className="date">
                {koDate && koDate.date ? koDate.date : ""}{" "}
                <span className="time">
                  {koDate && koDate.time ? koDate.time : ""}
                </span>
              </div>
            </div>
          </div>
          <div className="oddsDetails">
            <div className="odds home">
              {props.data.homeOdds ? props.data.homeOdds.toFixed(2) : ""}
            </div>
            <div className="odds draw">
              {props.data.drawOdds ? props.data.drawOdds.toFixed(2) : ""}
            </div>
            <div className="odds away">
              {props.data.awayOdds ? props.data.awayOdds.toFixed(2) : ""}
            </div>
          </div>
        </div>

        <div className="awayTeam" style={{ backgroundColor: "#670633" }}>
          <div className="awayTeam-details">
            <div className="teamName">
              <a
                href="#"
                onClick={() => {
                  awayBannerClick();
                }}
              >
                {props.data.awayTeamName}
              </a>{" "}
            </div>
            {props.data.awayLeagueShortName != null ? (
              <div className={`teamPosition`}>
                {
                  <>
                    ({props.data.awayLeagueShortName} - {props.data.awayTeamPos}
                    )
                  </>
                }
              </div>
            ) : (
              <div className={`teamPosition`}>
                {props.data.awayTeamPos != null ? (
                  <>
                    ({props.data.awayTeamPos}
                    <sup>{addSuffix(props.data.awayTeamPos, true)}</sup>)
                  </>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
          <div className="awayTeam-logo">
            {/*<img src={props.data.awayTeamLogo} alt="logo"/>*/}
            {/*<img src={AstonvillaLogo} alt="logo"/>*/}
            {/* <span class={"teamLogo t-"+props.data.awayTeamLogo}></span>*/}
            <img
              className="teamLogo-img"
              src={imageUrls.team + "" + props.data.awayTeamLogo + ".png"}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
