import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  loadSearchData,
  selectSearchData,
  selectValue,
  getTeamsList,
  selectTeamsList,
  setFilter,
  selectFilterBy,
  selectLoader,
  selectStaticWords,
  selectLanguageId,
} from "./homeSlice";
import ReactAutocomplete from "react-autocomplete";
import { formatDate } from "../../sharedfiles/helper";
import { getEvenId, navigateToTournament, metaData } from "../../AppSlice";
import Loading from "../loading/Loading";
// import noImage from '../../assets/images/teams/no-img.png'

export function Home(props) {
  const [fetched, setFetched] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(selectSearchData);
  const value = useSelector(selectValue);
  const teamsList = useSelector(selectTeamsList);
  const filterBy = useSelector(selectFilterBy);
  const loader = useSelector(selectLoader);
  const staticKeyWords = useSelector(selectStaticWords);
  const langugageId = useSelector(selectLanguageId);
  useEffect(() => {
    if (fetched === false) {
      dispatch(setFilter(1));
      dispatch(loadSearchData([], "", 1, langugageId));
      setFetched(true);
      dispatch(metaData("Match"));
    }
  });

  return (
    <div className="mainLanding-page">
      <div className="mainSearchbar">
        <div className="mainSearchbar-leftSection">
          <ul>
            <li
              onClick={() => {
                dispatch(setFilter(1));
                dispatch(loadSearchData(teamsList, "", 1, langugageId));
              }}
            >
              <a href="#" className={filterBy === 1 ? "active" : ""}>
                {staticKeyWords.mcDate}
              </a>
            </li>
            <li
              onClick={() => {
                dispatch(setFilter(2));
                dispatch(loadSearchData(teamsList, "", 2, langugageId));
              }}
            >
              <a href="#" className={filterBy === 2 ? "active" : ""}>
                {staticKeyWords.tournament}
              </a>
            </li>
          </ul>
        </div>

        <div className="mainSearchbar-rightSection">
          <div className="form-group form-inline">
            <div className="form-label">{/*staticKeyWords.teamSearch*/}</div>
            <div className="form-control">
              {/* <input placeholder="Search by Team name" type="text" />*/}
              <ReactAutocomplete
                getItemValue={(item) => item?.teamName}
                items={teamsList}
                renderItem={(item, isHighlighted) => (
                  <div
                    key={item.itemId}
                    style={{
                      background: isHighlighted ? "lightgray" : "white",
                    }}
                  >
                    {item.teamName}
                  </div>
                )}
                inputProps={{ placeholder: staticKeyWords.SearchByTeamName }}
                value={value}
                onChange={(e) =>
                  dispatch(getTeamsList(e.target.value, filterBy, langugageId))
                }
                onSelect={(val) =>
                  dispatch(
                    loadSearchData(teamsList, val, filterBy, langugageId),
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>

      {data && data.length > 0 ? (
        data.map(function (comp, index) {
          var dateFormat = {};
          if (filterBy === 1) {
            dateFormat = formatDate(comp.label, "home");
          }

          return (
            <div key={index} className="contentBg">
              <table className="tableDefault">
                <thead>
                  <tr>
                    <th
                      colSpan="2"
                      className="w-date"
                      onClick={() =>
                        dispatch(
                          navigateToTournament(
                            comp.id,
                            props,
                            filterBy,
                            "tournament",
                          ),
                        )
                      }
                    >
                      {filterBy === 1
                        ? comp?.events[0]?.kickOffDateLocal
                        : comp.label}
                    </th>
                    {/* <th className="w-koTime">{staticKeyWords.koTime}</th> */}
                    <th className="w-form">{staticKeyWords.homeForm}</th>
                    <th className="w-fixture"></th>
                    <th className="w-form">{staticKeyWords.awayForm}</th>
                    <th className="w-winPredictor">
                      {staticKeyWords.hadPredictor} (%)
                    </th>
                    <th className="w-bestBet">{staticKeyWords.bestBet}</th>
                  </tr>
                </thead>
                <tbody>
                  {comp.events.map(function (event, eventIndex) {
                    //var kickOffDT=formatDate(event.kickOff,'home');
                    return (
                      <tr key={eventIndex}>
                        <td>
                          {event.competitionIdNav != null ? (
                            <div
                              data-href="true"
                              onClick={() =>
                                dispatch(
                                  navigateToTournament(
                                    event.competitionId,
                                    props,
                                    filterBy,
                                    "date",
                                  ),
                                )
                              }
                            >
                              {filterBy === 2
                                ? event.kickOffDateLocal
                                : event.competitionName
                                  ? event.competitionName
                                  : ""}
                            </div>
                          ) : (
                            <div>
                              {filterBy === 2
                                ? event.kickOffDateLocal
                                : event.competitionName
                                  ? event.competitionName
                                  : ""}
                            </div>
                          )}
                        </td>
                        <td>{event.kickOffTime}</td>
                        <td>
                          <div data-href="true" className="team-lastForm">
                            {event.homeForm.map(function (wl, wlIndex) {
                              return (
                                <span
                                  key={wlIndex}
                                  className={
                                    "status " +
                                    (wl.toLowerCase() === "w"
                                      ? "win"
                                      : wl.toLowerCase() === "l"
                                        ? "loss"
                                        : wl.toLowerCase() === "d"
                                          ? "draw"
                                          : "")
                                  }
                                >
                                  {staticKeyWords[wl.toLowerCase()]}
                                </span>
                              );
                            })}
                          </div>
                        </td>
                        <td data-href="true">
                          <div className="table-fixture">{event.eventName}</div>
                          <div
                            className="table-fixture"
                            onClick={() => {
                              dispatch(
                                getEvenId(
                                  {
                                    countryId: event.countryId,
                                    competitionId:
                                      filterBy == 1
                                        ? event.competitionId
                                        : comp.id,
                                    eventId: event.eventId,
                                  },
                                  "home",
                                  props,
                                ),
                              );
                            }}
                          >
                            <div className="team-image">
                              <div className="homeTeam-name">
                                {event.homeTeamName}
                              </div>
                              {/*<div><img src={event.homeTeamImgUrl=="" || !event.homeTeamImgUrl?noImage:event.homeTeamImgUrl}/></div>*/}
                            </div>
                            <div className="team-vs">vs</div>
                            <div className="team-image">
                              {/*<div><img src={event.awayTeamImgUrl=="" || !event.awayTeamImgUrl?noImage:event.awayTeamImgUrl}/></div>*/}
                              <div className="awayTeam-name">
                                {event.awayTeamName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div data-href="true" className="team-lastForm">
                            {event.awayForm.map(function (wl, wlIndex) {
                              return (
                                <span
                                  key={wlIndex}
                                  className={
                                    "status " +
                                    (wl.toLowerCase() === "w"
                                      ? "win"
                                      : wl.toLowerCase() === "l"
                                        ? "loss"
                                        : wl.toLowerCase() === "d"
                                          ? "draw"
                                          : "")
                                  }
                                >
                                  {staticKeyWords[wl.toLowerCase()]}
                                </span>
                              );
                            })}
                          </div>
                        </td>
                        <td data-href="true">
                          <div className="win-predictor">
                            {event.hadHomePct &&
                            event.hadDrawPct &&
                            event.hadAwayPct ? (
                              <>
                                <span
                                  className="percentage win"
                                  style={{ width: event.hadHomePct + "%" }}
                                >
                                  {event.hadHomePct}
                                </span>
                                <span
                                  className="percentage draw"
                                  style={{ width: event.hadDrawPct + "%" }}
                                >
                                  {event.hadDrawPct}
                                </span>
                                <span
                                  className="percentage loss"
                                  style={{ width: event.hadAwayPct + "%" }}
                                >
                                  {event.hadAwayPct}
                                </span>
                              </>
                            ) : (
                              <span>-</span>
                            )}
                          </div>
                        </td>
                        <td data-href="true">
                          {event.bestBetName}
                          {event.subMarketName && event.subMarketName.length > 0
                            ? `[${event.subMarketName}]`
                            : ""}{" "}
                          - {event.outcomeName}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })
      ) : (
        <Loading
          isLoader={loader}
          isNoData={!loader && !data.length}
          temporarilyNoData={staticKeyWords.temporarilyNoData}
        />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    filterBy: state.home.filterBy,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
