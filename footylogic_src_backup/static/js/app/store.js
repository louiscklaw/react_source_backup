import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../components/match/homeSlice";
import MatchCenterReducer from "../components/matchcenter/MatchCenterSlice";
import HADHandicapTabReducer from "../components/hadhandicaptab/HADHandicapTabSlice";
import HiLoCornersTabReducer from "../components/hilocornerstab/HiloCornersTabSlice";
import HToHTabReducer from "../components/htohtab/HToHTabSlice";
import RecentFormTabReducer from "../components/recentformtab/RecentFormTabSlice";
import RecentFromHADReducer from "../components/recentformhad/RecentFormHADSlice";
import RecentFromHandicapReducer from "../components/recentformhad/RecentFormHADSlice";
import RecentFormHiLoReducer from "../components/recentformhilo/RecentFormHiLoSlice";
import RecentFromCornersReducer from "../components/recentformcorners/RecentFormCornersSlice";
import RecentformTableReducer from "../components/recentformtable/RecentformTableSlice";
import MatchReducer from "../layouts/matchSlice";
import SeasonalStatsReducer from "../components/seasonalstats/SeasonalStatsSlice";
import StandingsReducer from "../components/seasonalstats/standings/StandingsSlice";
import AppReducer from ".././AppSlice";
import PlayerAnalysisReducer from "../components/playeranalysis/PlayerAnalysisSlice";
import TournamentStandingsReducer from "../components/tournamentstandings/TournamentStandingsSlice";
import TopScorerReducer from "../components/topscorer/TopScorerSlice";
import PlayersReducer from "../components/players/PlayersSlice";
import FixturesResultsReducer from "../components/fixturesresults/FixturesResultsSlice";
import TournamentReducer from "../components/tournament/TournamentSlice";
import HtoHSearchReducer from "../components/htohsearch/HtoHSearchSlice";
import SummaryReducer from "../components/summary/SummarySlice";
import BMRecentFormsReducer from "../components/bmrecentforms/BMRecentFormsSlice";
import BMStatisticsReducer from "../components/bmstatistics/BMStatisticsSlice";
import BMHead2HeadReducer from "../components/bmhead2head/BMHead2HeadSlice";
import TournamentLeagueReducer from "../components/tournamentleague/TournamentLeagueSlice";
import HTOHOutputReducer from "../components/htohoutput/htohOutputSlice";
import RulesSliceReducer from "../components/rules/rulesSlice";
import PopOverReducer from "../components/summary/popover/popoverSlice";

export default configureStore({
  reducer: {
    app: AppReducer,
    home: homeReducer,
    matchcenter: MatchCenterReducer,
    hadhandicap: HADHandicapTabReducer,
    hilocorners: HiLoCornersTabReducer,
    htohtab: HToHTabReducer,
    recentfromtab: RecentFormTabReducer,
    recentformhad: RecentFromHADReducer,
    recentformhandicap: RecentFromHandicapReducer,
    recentformhilo: RecentFormHiLoReducer,
    recentformcorners: RecentFromCornersReducer,
    recentfromtable: RecentformTableReducer,
    match: MatchReducer,
    seasonalstats: SeasonalStatsReducer,
    standings: StandingsReducer,
    playeranalysis: PlayerAnalysisReducer,
    tournamentstandings: TournamentStandingsReducer,
    topscorer: TopScorerReducer,
    players: PlayersReducer,
    fixturesresults: FixturesResultsReducer,
    tournament: TournamentReducer,
    htohsearch: HtoHSearchReducer,
    summary: SummaryReducer,
    bmrecentforms: BMRecentFormsReducer,
    bmstatistics: BMStatisticsReducer,
    bmh2h: BMHead2HeadReducer,
    tournamentleague: TournamentLeagueReducer,
    htohoutput: HTOHOutputReducer,
    rules: RulesSliceReducer,
    popover: PopOverReducer,
  },
});
