var endPoint = "";
var updateOddsEndpoint = "";

var devEndPoint = "https://dev.hkjcstatsapi.bettorlogic.com/"; //"http://localhost:50002/";

var qaEndPoint = "https://qa.hkjcstatsapi.bettorlogic.com/";

var uatEndPoint = "https://uat-hkjc.beapi.footylogic.com/";

var prodEndPoint = "https://api.footylogic.com/";

var auroraEndPoint = "https://auroratesting.hkjcbeapi.footylogic.com/";

var testingv2 = "https://testingv2-beapi.footylogic.com/";

var actualv2 = "https://api.v2.footylogic.com/";
//var testEndPoint = "https://test.hkjcstatsapi.bettorlogic.com/"
if (window.location.hostname.includes("qa")) {
  endPoint = qaEndPoint;
}
// else if(window.location.hostname.includes('testing.footylogic.com')){
// 	endPoint = testEndPoint;
// }
else if (window.location.hostname.includes("localhost")) {
  endPoint = uatEndPoint;
} else if (window.location.hostname.includes("uat")) {
  endPoint = uatEndPoint;
} else if (window.location.hostname.includes("testingv2")) {
  endPoint = testingv2;
} else if (window.location.hostname.includes("desktop.v2")) {
  endPoint = actualv2;
} else if (window.location.hostname.includes("footylogic.com")) {
  endPoint = prodEndPoint;
} else if (window.location.hostname.includes("auroratesting")) {
  endPoint = auroraEndPoint;
} else if (window.location.hostname.includes("alpha")) {
  endPoint = prodEndPoint;
} else {
  endPoint = qaEndPoint;
}

export const common = {
  getCountries: endPoint + "common/countries",
  getCompetitions: endPoint + "common/competitions",
  getEvents: endPoint + "common/events",
  getSeasonslist: endPoint + "common/seasonslist",
  getCategories: endPoint + "common/categories",
  getConfigurations: endPoint + "status/Configurations",
};

export const matchCenter = {
  getBanner: endPoint + "match/h2h/banner",
  getWinBest: endPoint + "match/h2h/bestbet-winpredictor",
  getH2hInfo: endPoint + "match/h2h/h2h-information",
  getRecentformInformation: endPoint + "match/h2h/recentform-information",
  getLasRresults: endPoint + "match/h2h/recentform-lastresults",
  getTeamSearch: endPoint + "match/home/team-search",
  getGames: endPoint + "match/home/games",
  moreInfo: endPoint + "match/h2h/h2h-moreinfo",
  getHTOHOutput: endPoint + "match/h2h/h2h-output",
};

export const seasonalStats = {
  getTablesList: endPoint + "match/seasonalstats/keyperformance-tableslist",
  getKeyPerformanceInfo: endPoint + "match/seasonalstats/keyperformanceinfo",
  getFilters: endPoint + "match/seasonalstats/dropdown-filters",
  getKeyPerformanceTableInfo:
    endPoint + "match/seasonalstats/keyperformance-tableinfo",
};

export const playeranalysis = {
  getPlayersInfo: endPoint + "match/playeranalysis/players-info",
};

export const tournament = {
  getStandings: endPoint + "tournament/standings",
  getTopScorer: endPoint + "tournament/topscorer",
  getTeamStandings: endPoint + "team/standings",
  getPlayers: endPoint + "team/players",
  getFixturesResults: endPoint + "tournament/fixtures-results",
  getTeamFixturesResults: endPoint + "team/fixtures-results",
  getTournamentCountries: endPoint + "tournament/countries",
  fixtureResultsFilters: endPoint + "team/fixtures-results/dropdown-filters",
  getTournamentCompetitions: endPoint + "tournament/competitions",
  getSeasons: endPoint + "tournament/fixtures-seasons",
  getRules: endPoint + "tournament/rules",
  tourOptions: endPoint + "tournament/options",
};

export const summary = {
  getLastResults: endPoint + "match/summary/recentEncounters",
  getMarketsInfo: endPoint + "match/summary/markets-info",
  getResults: endPoint + "match/summary/last-results",
};

export const htohsearch = {
  h2hSearchTeams: endPoint + "h2hsearch/teams",
  h2hSearchEventInfo: endPoint + "h2hsearch/event-info",
};

export const recentforms = {
  getRecentResultsEvent: endPoint + "match/recentform/recentresults-event",
  getRecentResultsTeam: endPoint + "match/recentform/recentresults-team",
};

export const statistics = {
  getMarketsInfo: endPoint + "match/statistics/markets-info",
};

export const bmhead2head = {
  getEventInfo: endPoint + "match/h2h/event-information",
  getTeamInfo: endPoint + "match/h2h/team-information",
  pastSeasonInfo: endPoint + "match/h2h/pastseasons-info",
};

export const imageUrls = {
  team: window.location.protocol + "//images.footylogic.com/teams/",
  player: window.location.protocol + "//images.footylogic.com/players/",
  country: window.location.protocol + "//images.footylogic.com/countries/",
};
