(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [10],
  {
    454: function (e, t, a) {
      "use strict";
      var s = a(466),
        r = a.n(s),
        n = a(467);
      n(r.a), (t.a = r.a);
    },
    474: function (e, t, a) {
      e.exports = a.p + "static/media/Noplayer.ccc63f12.png";
    },
    475: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQvSURBVFiFxZZLbFVVFIa/tfc599HWFoWIcCOEkAANBgbyKIZIKRDBxEdCmjCRxASN8TVSTBzhyIkDNHFAJCZKSCSNAzWKUUgLGKWliMQIRYwDKY/WpDRQ+rjn7r0c0Jbee8/tPUWJ/+icvdb6/3/ts8/eW4iBXmxZrE5OAnPi4lNRuNJXLQWs8VKb3Ryu6mwvDQV6cVsajXJFo44NoFXFE8N5IwX/XNS1zheJe39GfE/LeZBld8udaAYqQAIbBePioyg/TEYMdShNd80ch8AOiUh+4lUL7gEtuDAYf79mGo9umQxeaMkp0luN098cwvb14+Y+WN1ANnw8XN19ZuI1OrYiUqeBAUaBdFHyktnXgMJ0fBpF+Ju3MP39yK3hqvrhUN2vRfWKQQQDXAXm6G+tqYmgSJsD/owj8iOj+MEb+IHByTHb24vtvYwZHIwrQawdk40dkw3pybX1eG/EmsgAZ4EQc/2xEoc/l7fNbfHhEdTdWdCSz2OuX8f2Xr6dVGogMFeLmjD+hXFjfxtBvwTworumJhkjXeVMYBruA4ntE5fLERsU80tRH3n3OgBBcNgwVHsIuCKwQ89vWjfFwuE4GVOTxWQyZeN+Vj3+/llxJWhg9k08u67VL/sov0CMcbbO7jay6qthUd4GrAqf6bmWhQCy9LseRP6IJXSuvMl8FCuOtVG45tS3AFH32vV+OP8BCpJJ7ZflPw0YAGk8+omqfgQsUCMn9MLm9QCifn8cp1iDWItpqMfl5qOpEA3DWH2TTh0BcJ1rXmNotEO9s2RS54Km7pdgygdTbbW+Z+B9EV7h9kr6XOALhY+BeHaq74SmJrNPC+4pzUfzASSbOhvUL14jy9vyRQYmjfS0tCryHrBgWuaEBiYg1hRIp/eGTafeLBqPS9aL29L4sSe9ynaBR4BllG5W1QyIINaOqLHXJGUOBd68K02dN8rSkrjX8xsfVTEngGwiAyLYuppX7erOD6txmyQGpLH9tBhpBUaS5Nua7DtJxBMbAJAlR74WaAK6K+aEwS1TU9tq13btScybNHECqohe2HQJyMGdTyDGumDD2ZQIfrr6UiSegUl0NFug7PxV9ZaO5hnzzdzAQ7KSuH1BFZcdefbeG8A8UTnmnr+nBlT3GBV2VYznoy3a3hxUiv9rA/x+bCuwqKKBggt9zfDumVAm/gu0vTnQebYbWDl1vHQjEmtHg9pgtqw6Xf2exkxmYJ55q1Q81qhzGVeQtqS0iWagvW1H84pFg5+ORXZWvmDqdErdnKj48iyCiorv6p37xsadh/dW4060YA4en//MweO5h+Nil/4qO6MEsNlsdidQ1cBd/Ib/Lf53A9Ouga1Pb1+hIgeMsQuNkYa4nL6+/vhiRcUwFmYyL/74/TcHKmlMvwasqcfrUu9d2lc4YnzMBXUcgko65aidTuIfFXmIIFShLSQAAAAASUVORK5CYII=";
    },
    515: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(91),
        r = a(92),
        n = a(94),
        l = a(93),
        o = a(1),
        i = a.n(o),
        c = a(22),
        p = a(33),
        m = a(66),
        d = a(63),
        u = a(19),
        h = a(237),
        g = a(5),
        y = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.dispatch(Object(g.e)("League"));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return i.a.createElement(
                    "div",
                    { className: "tournament-content p-0" },
                    Object.keys(this.props.allCountries).length > 0
                      ? i.a.createElement(
                          "div",
                          { className: "tabSection" },
                          Object.keys(this.props.allCountries).map(
                            function (t, a) {
                              return i.a.createElement(
                                i.a.Fragment,
                                { key: a },
                                i.a.createElement(
                                  "ul",
                                  { className: "countryTabList" },
                                  e.props.allCountries[t].map(function (a, s) {
                                    return i.a.createElement(
                                      "li",
                                      {
                                        key: s,
                                        className:
                                          "tabLinks " +
                                          (t + s == e.props.selectedTab
                                            ? "active"
                                            : ""),
                                        onClick: function () {
                                          e.props.dispatch(
                                            Object(u.a)(a, e.props),
                                          ),
                                            e.props.dispatch(
                                              Object(d.e)({
                                                country: t,
                                                index: t + s,
                                              }),
                                            );
                                        },
                                      },
                                      i.a.createElement(
                                        "a",
                                        null,
                                        "league" == e.props.selectedType &&
                                          i.a.createElement("span", {
                                            className:
                                              "country-flag " + a.categoryImg,
                                          }),
                                        i.a.createElement(
                                          "div",
                                          null,
                                          a.categoryName,
                                        ),
                                      ),
                                    );
                                  }),
                                ),
                                t == e.props.selectedCountry &&
                                  i.a.createElement(
                                    "div",
                                    { className: "tabsContent" },
                                    i.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "tabContent countryTabContent",
                                      },
                                      i.a.createElement(
                                        "ul",
                                        { className: "" },
                                        e.props.competitionsList &&
                                          e.props.competitionsList.map(
                                            function (t, a) {
                                              return i.a.createElement(
                                                "li",
                                                {
                                                  key: "tourcomp" + a,
                                                  onClick: function () {
                                                    return e.props.dispatch(
                                                      Object(d.d)(t, e.props),
                                                    );
                                                  },
                                                },
                                                t.competitionName,
                                              );
                                            },
                                          ),
                                      ),
                                    ),
                                  ),
                              );
                            },
                          ),
                        )
                      : i.a.createElement(h.a, {
                          isLoader: this.props.loader,
                          isNoData:
                            !this.props.loader &&
                            !Object.keys(this.props.allCountries).length,
                        }),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var f = Object(m.b)(
          function (e) {
            return {
              allCountries: e.match.allCountries,
              selectedCountry: e.tournament.selectedCountry,
              selectedTab: e.tournament.selectedTab,
              competitionsList: e.match.competitionsList,
              selectedType: e.tournament.selectedType,
              languageId: e.app.languageId,
              loader: e.app.loader,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(y),
        v = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.dispatch(Object(d.e)({ country: "", index: "" }));
                  var e = window.location.pathname.includes("home/league")
                    ? "league"
                    : window.location.pathname.includes("home/cup")
                      ? "cup"
                      : window.location.pathname.includes("home/international")
                        ? "international"
                        : "";
                  this.props.dispatch(Object(d.f)(e)),
                    this.props.dispatch(Object(d.b)(e, this.props.languageId));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return i.a.createElement(
                    "section",
                    { className: "layout-content" },
                    i.a.createElement(
                      "div",
                      { className: "mainContent container" },
                      i.a.createElement(
                        "div",
                        {
                          className: "mainLanding-page tournament-landingPage",
                        },
                        i.a.createElement(
                          "div",
                          { className: "btn-group" },
                          i.a.createElement(
                            "button",
                            {
                              className:
                                "league" == this.props.selectedType
                                  ? "active"
                                  : "",
                              onClick: function () {
                                return e.props.dispatch(
                                  Object(d.c)(
                                    "league",
                                    e.props,
                                    e.props.languageId,
                                  ),
                                );
                              },
                            },
                            this.props.staticKeyWords.league,
                          ),
                          i.a.createElement(
                            "button",
                            {
                              className:
                                "cup" == this.props.selectedType
                                  ? "active"
                                  : "",
                              onClick: function () {
                                return e.props.dispatch(
                                  Object(d.c)(
                                    "cup",
                                    e.props,
                                    e.props.languageId,
                                  ),
                                );
                              },
                            },
                            this.props.staticKeyWords.cup,
                          ),
                          i.a.createElement(
                            "button",
                            {
                              className:
                                "international" == this.props.selectedType
                                  ? "active"
                                  : "",
                              onClick: function () {
                                return e.props.dispatch(
                                  Object(d.c)(
                                    "international",
                                    e.props,
                                    e.props.languageId,
                                  ),
                                );
                              },
                            },
                            this.props.staticKeyWords.international,
                          ),
                        ),
                        i.a.createElement(c.a, {
                          path: "".concat(
                            this.props.match.path,
                            "/:leagueType",
                          ),
                          render: function (e) {
                            return i.a.createElement(f, e);
                          },
                        }),
                      ),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var b = Object(m.b)(
          function (e) {
            return {
              countryList: e.match.countryList,
              allCountries: e.match.allCountries,
              selectedCountry: e.tournament.selectedCountry,
              selectedTab: e.tournament.selectedTab,
              competitionsList: e.match.competitionsList,
              selectedType: e.tournament.selectedType,
              staticKeyWords: e.app.staticKeyWords,
              languageId: e.app.languageId,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(v),
        E = a(67),
        O = a(157),
        N = a(4),
        I = a(3),
        T = a(21),
        j = a(95),
        C = a(474),
        D = a.n(C),
        k = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "rowNavigation",
                value: function (e) {
                  this.props.history.push(e),
                    this.props.dispatch(Object(T.h)("fixturesresults"));
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e;
                  Object(g.a)() &&
                    "standings" == this.props.screenfrom &&
                    this.props.dispatch(Object(g.j)(!0)),
                    (null ===
                      (e = Object.keys(this.props.standingsTableData)) ||
                    void 0 === e
                      ? void 0
                      : e.length) > 0
                      ? this.setState({
                          groupLetters: Object.keys(
                            this.props.standingsTableData,
                          ),
                        })
                      : this.setState({ groupLetters: [] });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(g.j)(!1));
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    a,
                    s = this,
                    r =
                      null === (e = this.props) ||
                      void 0 === e ||
                      null === (t = e.standingsData) ||
                      void 0 === t
                        ? void 0
                        : t.displayname,
                    n =
                      "all" !== this.props.groupName &&
                      r.map(function (e) {
                        return e.displayKey === s.props.groupName
                          ? e.displayValue
                          : "";
                      });
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    "standings" == this.props.screenfrom &&
                      Object.keys(this.props.standingsTableData).length > 0
                      ? i.a.createElement(
                          "div",
                          { className: "standingTable-container" },
                          Object.keys(this.props.standingsTableData).length >
                            0 &&
                            Object.keys(this.props.standingsTableData).map(
                              function (e, t) {
                                return i.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "standingTable-group" +
                                      ("all" === s.props.groupName
                                        ? " "
                                        : " fullWidth"),
                                    key: "mainGroup_" + t,
                                  },
                                  i.a.createElement(
                                    "table",
                                    {
                                      className: "tableDefault standingsTable",
                                    },
                                    i.a.createElement(
                                      "thead",
                                      null,
                                      i.a.createElement(
                                        "tr",
                                        null,
                                        i.a.createElement(
                                          "th",
                                          { className: "w-170 team" },
                                          i.a.createElement(
                                            "div",
                                            { className: "groupHeading" },
                                            "all" === s.props.groupName
                                              ? null === r || void 0 === r
                                                ? void 0
                                                : r.map(function (t) {
                                                    return t.displayKey === e
                                                      ? t.displayValue
                                                      : "";
                                                  })
                                              : n,
                                          ),
                                        ),
                                        i.a.createElement(
                                          "th",
                                          { className: "groupStagingth" },
                                          s.props.staticKeyWords.p,
                                        ),
                                        i.a.createElement(
                                          "th",
                                          null,
                                          s.props.staticKeyWords.w,
                                        ),
                                        i.a.createElement(
                                          "th",
                                          null,
                                          s.props.staticKeyWords.d,
                                        ),
                                        i.a.createElement(
                                          "th",
                                          null,
                                          s.props.staticKeyWords.l,
                                        ),
                                        i.a.createElement(
                                          "th",
                                          null,
                                          s.props.staticKeyWords.gf,
                                        ),
                                        i.a.createElement(
                                          "th",
                                          null,
                                          s.props.staticKeyWords.ga,
                                        ),
                                        i.a.createElement(
                                          "th",
                                          null,
                                          s.props.staticKeyWords.pts,
                                        ),
                                      ),
                                    ),
                                    i.a.createElement(
                                      "tbody",
                                      null,
                                      s.props.standingsTableData[e].length >
                                        0 &&
                                        s.props.standingsTableData[e].map(
                                          function (e, t) {
                                            return i.a.createElement(
                                              "tr",
                                              { key: "group_" + t },
                                              e.teamId && null !== e.teamId
                                                ? i.a.createElement(
                                                    "td",
                                                    {
                                                      onClick:
                                                        null != e.teamId
                                                          ? s.rowNavigation.bind(
                                                              s,
                                                              s.props.rowNavigation.replace(
                                                                "[:id]",
                                                                e.teamId,
                                                              ),
                                                            )
                                                          : "",
                                                      className: "team",
                                                      "data-href": "true",
                                                    },
                                                    null != e.flagName
                                                      ? i.a.createElement(
                                                          "span",
                                                          {
                                                            className:
                                                              "groupStagelogo",
                                                          },
                                                          i.a.createElement(
                                                            "img",
                                                            {
                                                              src:
                                                                "https://images.footylogic.com/countries/" +
                                                                e.flagName +
                                                                ".png",
                                                              width: "30px",
                                                              alt: "team",
                                                            },
                                                          ),
                                                        )
                                                      : "",
                                                    i.a.createElement(
                                                      "span",
                                                      null,
                                                      e.teamName,
                                                    ),
                                                  )
                                                : i.a.createElement(
                                                    "td",
                                                    { className: "team" },
                                                    null != e.flagName
                                                      ? i.a.createElement(
                                                          "span",
                                                          {
                                                            className:
                                                              "groupStagelogo",
                                                          },
                                                          i.a.createElement(
                                                            "img",
                                                            {
                                                              src:
                                                                "https://images.footylogic.com/countries/" +
                                                                e.flagName +
                                                                ".png",
                                                              width: "30px",
                                                              alt: "team",
                                                            },
                                                          ),
                                                        )
                                                      : "",
                                                    i.a.createElement(
                                                      "span",
                                                      null,
                                                      e.teamName,
                                                    ),
                                                  ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(
                                                  "div",
                                                  null,
                                                  e.teamPlayed,
                                                ),
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(
                                                  "div",
                                                  null,
                                                  e.teamWin,
                                                ),
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(
                                                  "div",
                                                  null,
                                                  e.teamDraw,
                                                ),
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(
                                                  "div",
                                                  null,
                                                  e.teamLoss,
                                                ),
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(
                                                  "div",
                                                  null,
                                                  e.teamGoalsFor,
                                                ),
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(
                                                  "div",
                                                  null,
                                                  e.teamGoalsAway,
                                                ),
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(
                                                  "div",
                                                  null,
                                                  e.teamPoints,
                                                ),
                                              ),
                                            );
                                          },
                                        ),
                                    ),
                                  ),
                                );
                              },
                            ),
                          this.props.scheduleTable.length > 0 &&
                            i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement(
                                "div",
                                {
                                  className:
                                    "sectionHeading groupTable-heading",
                                },
                                i.a.createElement(
                                  "div",
                                  { className: "sectionTitle" },
                                  i.a.createElement(
                                    "span",
                                    null,
                                    this.props.staticKeyWords.schedule,
                                  ),
                                ),
                              ),
                              i.a.createElement(
                                "table",
                                { className: "tableDefault" },
                                i.a.createElement(
                                  "thead",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement(
                                      "th",
                                      { className: "playOff-date" },
                                      this.props.staticKeyWords.mcDate,
                                    ),
                                    i.a.createElement(
                                      "th",
                                      { className: "playOff-Teams" },
                                      this.props.staticKeyWords.home,
                                    ),
                                    i.a.createElement(
                                      "th",
                                      { className: "playOff-data" },
                                      this.props.staticKeyWords.scoreHt,
                                    ),
                                    i.a.createElement(
                                      "th",
                                      { className: "playOff-Teams" },
                                      this.props.staticKeyWords.away,
                                    ),
                                  ),
                                ),
                                i.a.createElement(
                                  "tbody",
                                  null,
                                  this.props.scheduleTable &&
                                    (null === (a = this.props.scheduleTable) ||
                                    void 0 === a
                                      ? void 0
                                      : a.length) &&
                                    this.props.scheduleTable.map(
                                      function (e, t) {
                                        return i.a.createElement(
                                          "tr",
                                          { key: t },
                                          i.a.createElement(
                                            "td",
                                            { className: "playOff-date" },
                                            i.a.createElement(
                                              "div",
                                              null,
                                              e.Kickoff
                                                ? Object(j.b)(
                                                    e.Kickoff,
                                                    "banner",
                                                  ).date
                                                : "-",
                                            ),
                                          ),
                                          e.homeTeamId && null !== e.homeTeamId
                                            ? i.a.createElement(
                                                "td",
                                                {
                                                  onClick:
                                                    e.homeTeamId &&
                                                    s.rowNavigation.bind(
                                                      s,
                                                      s.props.rowNavigation.replace(
                                                        "[:id]",
                                                        e.homeTeamId,
                                                      ),
                                                    ),
                                                  className: "playOff-Teams",
                                                  "data-href": "true",
                                                },
                                                i.a.createElement(
                                                  "div",
                                                  {
                                                    className:
                                                      "H" == e.winner
                                                        ? "teamBold"
                                                        : "",
                                                  },
                                                  e.homeTeamName,
                                                ),
                                              )
                                            : i.a.createElement(
                                                "td",
                                                { className: "playOff-Teams" },
                                                i.a.createElement(
                                                  "div",
                                                  {
                                                    className:
                                                      "H" == e.winner
                                                        ? "teamBold"
                                                        : "",
                                                  },
                                                  e.homeTeamName,
                                                ),
                                              ),
                                          i.a.createElement(
                                            "td",
                                            { className: "playOff-data" },
                                            i.a.createElement(
                                              "div",
                                              null,
                                              e.fullTimeScore,
                                              " (",
                                              e.halfTimeScore,
                                              ")",
                                            ),
                                          ),
                                          e.awayTeamId && null !== e.awayTeamId
                                            ? i.a.createElement(
                                                "td",
                                                {
                                                  onClick:
                                                    e.awayTeamId &&
                                                    s.rowNavigation.bind(
                                                      s,
                                                      s.props.rowNavigation.replace(
                                                        "[:id]",
                                                        e.awayTeamId,
                                                      ),
                                                    ),
                                                  className: "playOff-Teams",
                                                  "data-href": "true",
                                                },
                                                i.a.createElement(
                                                  "div",
                                                  {
                                                    className:
                                                      "A" == e.winner
                                                        ? "teamBold"
                                                        : "",
                                                  },
                                                  e.awayTeamName,
                                                ),
                                              )
                                            : i.a.createElement(
                                                "td",
                                                { className: "playOff-Teams" },
                                                i.a.createElement(
                                                  "div",
                                                  {
                                                    className:
                                                      "A" == e.winner
                                                        ? "teamBold"
                                                        : "",
                                                  },
                                                  e.awayTeamName,
                                                ),
                                              ),
                                        );
                                      },
                                    ),
                                ),
                              ),
                            ),
                        )
                      : "standings" != this.props.screenfrom ||
                          Object.keys(this.props.standingsTableData).length
                        ? ""
                        : i.a.createElement(h.a, {
                            isLoader: this.props.loader,
                            temporarilyNoData:
                              this.props.staticKeyWords.temporarilyNoData,
                            isNoData:
                              !this.props.loader &&
                              !Object.keys(this.props.standingsTableData)
                                .length > 0,
                          }),
                    "topscorer" == this.props.screenfrom &&
                      this.props.standingsTableData.length > 1
                      ? i.a.createElement(
                          "div",
                          { className: "topScorer-container" },
                          i.a.createElement(
                            "div",
                            { className: "headerDetails" },
                            i.a.createElement(
                              "div",
                              { className: "haed-playerRank" },
                              this.props.staticKeyWords.rank,
                            ),
                            i.a.createElement(
                              "div",
                              { className: "haed-playerInfo" },
                              this.props.staticKeyWords.player,
                            ),
                            i.a.createElement(
                              "div",
                              { className: "haed-goalsNumber" },
                              this.props.staticKeyWords.goals,
                            ),
                            i.a.createElement(
                              "div",
                              { className: "haed-playerHkjcno" },
                              this.props.staticKeyWords.hKJCNo,
                            ),
                          ),
                          this.props.standingsTableData &&
                            this.props.standingsTableData.map(function (e, t) {
                              if (t <= 9)
                                return i.a.createElement(
                                  "div",
                                  {
                                    className: "topScore-playerdetails",
                                    key: "cup_" + t,
                                  },
                                  i.a.createElement(
                                    "div",
                                    { className: "playerRank" },
                                    e.playerRank,
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: "playerIcon" },
                                    i.a.createElement(
                                      "div",
                                      { className: "playerIcon-position" },
                                      i.a.createElement("img", {
                                        src:
                                          N.d.player +
                                          "" +
                                          e.playerImageUrl +
                                          ".png",
                                        alt: "country",
                                        onError: function (e) {
                                          (e.target.onerror = null),
                                            (e.target.src = D.a);
                                        },
                                      }),
                                    ),
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: "playerCountry" },
                                    i.a.createElement("img", {
                                      className: "countryLogo-img",
                                      src:
                                        N.d.country +
                                        "" +
                                        e.countryImgUrl +
                                        ".png",
                                      alt: "country",
                                    }),
                                  ),
                                  e.playerId && null !== e.playerId
                                    ? i.a.createElement(
                                        "div",
                                        {
                                          className: "playerInfo",
                                          onClick: s.rowNavigation.bind(
                                            s,
                                            s.props.rowNavigation.replace(
                                              "[:id]",
                                              e.playerClubId,
                                            ),
                                          ),
                                          "data-href": "true",
                                        },
                                        i.a.createElement(
                                          "span",
                                          null,
                                          e.playerName,
                                        ),
                                        i.a.createElement(
                                          "span",
                                          { className: "text-blue" },
                                          e.playerClub,
                                        ),
                                      )
                                    : i.a.createElement(
                                        "div",
                                        { className: "playerInfo" },
                                        i.a.createElement(
                                          "span",
                                          null,
                                          e.playerName,
                                        ),
                                        i.a.createElement(
                                          "span",
                                          { className: "text-blue" },
                                          e.playerClub,
                                        ),
                                      ),
                                  i.a.createElement(
                                    "div",
                                    { className: "playerGoals" },
                                    i.a.createElement(
                                      "div",
                                      { className: "goalsNumber" },
                                      e.playerGoals,
                                    ),
                                    i.a.createElement("div", {
                                      className: "crossline",
                                    }),
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: "playerHkjcno" },
                                    e.playerHkjcNo,
                                  ),
                                );
                            }),
                        )
                      : "topscorer" == this.props.screenfrom &&
                          this.props.standingsTableData.length <= 1
                        ? i.a.createElement(h.a, {
                            isLoader: this.props.loader,
                            isNoData:
                              !this.props.loader &&
                              !this.props.standingsTableData.length <= 1,
                            temporarilyNoData:
                              this.props.staticKeyWords.temporarilyNoData,
                          })
                        : "",
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var w = Object(m.b)(
          function (e) {
            return {
              loader: e.app.loader,
              staticKeyWords: e.app.staticKeyWords,
              languageId: e.app.languageId,
              groupName: e.tournamentstandings.groupName,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(k),
        W = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "rowNavigation",
                value: function (e) {
                  this.props.history.push(e),
                    this.props.dispatch(Object(T.h)("fixturesresults"));
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    a,
                    s = this,
                    r = this.props,
                    n = r.leg,
                    l = r.standingsTableData;
                  return 1 === n
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          "table",
                          { className: "tableDefault" },
                          i.a.createElement(
                            "thead",
                            null,
                            i.a.createElement(
                              "tr",
                              null,
                              i.a.createElement(
                                "th",
                                { className: "playOff-data" },
                                this.props.staticKeyWords.mcDate,
                              ),
                              this.props.isMatchReplay &&
                                i.a.createElement("th", {
                                  className: "playOff-data",
                                }),
                              i.a.createElement(
                                "th",
                                { className: "playOff-Teams" },
                                this.props.isWRDisplay
                                  ? "-" === l[0].fullTimeScore
                                    ? this.props.staticKeyWords.team1
                                    : this.props.staticKeyWords.winner
                                  : this.props.staticKeyWords.home,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playOff-data" },
                                this.props.staticKeyWords.scoreHt,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playoff-data" },
                                this.props.staticKeyWords.extraTime,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playoff-data" },
                                this.props.staticKeyWords.penalties,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playOff-Teams" },
                                this.props.isWRDisplay
                                  ? "-" === l[0].fullTimeScore
                                    ? this.props.staticKeyWords.team2
                                    : this.props.staticKeyWords.runnerUp
                                  : this.props.staticKeyWords.away,
                              ),
                            ),
                          ),
                          i.a.createElement(
                            "tbody",
                            null,
                            (null === (e = this.props.standingsTableData) ||
                            void 0 === e
                              ? void 0
                              : e.length) &&
                              this.props.standingsTableData.length > 0 &&
                              this.props.standingsTableData.map(
                                function (e, t) {
                                  return i.a.createElement(
                                    "tr",
                                    { key: "leg_" + t },
                                    i.a.createElement(
                                      "td",
                                      { className: "playOff-data" },
                                      i.a.createElement(
                                        "div",
                                        null,
                                        e.kickOff
                                          ? Object(j.b)(e.kickOff, "banner")
                                              .date
                                          : "-",
                                      ),
                                    ),
                                    s.props.isMatchReplay &&
                                      i.a.createElement(
                                        "td",
                                        { className: "playOff-data" },
                                        i.a.createElement(
                                          "div",
                                          null,
                                          e.isReplay
                                            ? s.props.staticKeyWords.replay
                                            : "-",
                                        ),
                                      ),
                                    e.homeTeamId && null !== e.homeTeamId
                                      ? i.a.createElement(
                                          "td",
                                          {
                                            onClick:
                                              e.homeTeamId &&
                                              s.rowNavigation.bind(
                                                s,
                                                s.props.rowNavigation.replace(
                                                  "[:id]",
                                                  e.homeTeamId,
                                                ),
                                              ),
                                            className: "playOff-Teams",
                                            "data-href": "true",
                                          },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "H" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.homeTeamName,
                                          ),
                                        )
                                      : i.a.createElement(
                                          "td",
                                          { className: "playOff-Teams" },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "H" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.homeTeamName,
                                          ),
                                        ),
                                    i.a.createElement(
                                      "td",
                                      { className: "playOff-data" },
                                      i.a.createElement(
                                        "div",
                                        null,
                                        e.fullTimeScore,
                                        " (",
                                        e.halfTimeScore,
                                        ")",
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      { className: "playOff-data" },
                                      i.a.createElement("div", null, e.etScore),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      { className: "playOff-data" },
                                      i.a.createElement(
                                        "div",
                                        null,
                                        e.penalities,
                                      ),
                                    ),
                                    e.awayTeamId && null !== e.awayTeamId
                                      ? i.a.createElement(
                                          "td",
                                          {
                                            onClick:
                                              e.awayTeamId &&
                                              s.rowNavigation.bind(
                                                s,
                                                s.props.rowNavigation.replace(
                                                  "[:id]",
                                                  e.awayTeamId,
                                                ),
                                              ),
                                            className: "playOff-Teams",
                                            "data-href": "true",
                                          },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "A" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.awayTeamName,
                                          ),
                                        )
                                      : i.a.createElement(
                                          "td",
                                          { className: "playOff-Teams" },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "A" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.awayTeamName,
                                          ),
                                        ),
                                  );
                                },
                              ),
                          ),
                        ),
                        i.a.createElement(h.a, {
                          isLoader: this.props.loader,
                          isNoData:
                            !this.props.loader &&
                            (0 ===
                              Object.keys(this.props.standingsTableData)
                                .length ||
                              0 === this.props.standingsTableData.length),
                          temporarilyNoData:
                            this.props.staticKeyWords.temporarilyNoData,
                        }),
                      )
                    : i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          "div",
                          { className: "sectionHeading" },
                          i.a.createElement(
                            "div",
                            { className: "sectionTitle" },
                            i.a.createElement(
                              "span",
                              null,
                              this.props.staticKeyWords.firstLeg,
                            ),
                          ),
                        ),
                        i.a.createElement(
                          "table",
                          { className: "tableDefault" },
                          i.a.createElement(
                            "thead",
                            null,
                            i.a.createElement(
                              "tr",
                              null,
                              i.a.createElement(
                                "th",
                                { className: "playOff-date" },
                                this.props.staticKeyWords.mcDate,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playOff-Teams" },
                                this.props.staticKeyWords.home,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playOff-data" },
                                this.props.staticKeyWords.scoreHt,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playOff-Teams" },
                                this.props.staticKeyWords.away,
                              ),
                            ),
                          ),
                          i.a.createElement(
                            "tbody",
                            null,
                            this.props.standingsTableData &&
                              (null ===
                                (t = this.props.standingsTableData.leg1) ||
                              void 0 === t
                                ? void 0
                                : t.length) &&
                              this.props.standingsTableData.leg1.map(
                                function (e, t) {
                                  return i.a.createElement(
                                    "tr",
                                    { key: "leg_" + t },
                                    i.a.createElement(
                                      "td",
                                      { className: "playOff-date" },
                                      i.a.createElement(
                                        "div",
                                        null,
                                        e.kickOff
                                          ? Object(j.b)(e.kickOff, "banner")
                                              .date
                                          : "-",
                                      ),
                                    ),
                                    e.homeTeamId && null !== e.homeTeamId
                                      ? i.a.createElement(
                                          "td",
                                          {
                                            onClick:
                                              e.homeTeamId &&
                                              s.rowNavigation.bind(
                                                s,
                                                s.props.rowNavigation.replace(
                                                  "[:id]",
                                                  e.homeTeamId,
                                                ),
                                              ),
                                            className: "playOff-Teams",
                                            "data-href": "true",
                                          },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "H" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.homeTeamName,
                                          ),
                                        )
                                      : i.a.createElement(
                                          "td",
                                          { className: "playOff-Teams" },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "H" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.homeTeamName,
                                          ),
                                        ),
                                    i.a.createElement(
                                      "td",
                                      { className: "playOff-data" },
                                      i.a.createElement(
                                        "div",
                                        null,
                                        e.fullTimeScore,
                                        " (",
                                        e.halfTimeScore,
                                        ")",
                                      ),
                                    ),
                                    e.awayTeamId && null !== e.awayTeamId
                                      ? i.a.createElement(
                                          "td",
                                          {
                                            onClick:
                                              e.awayTeamId &&
                                              s.rowNavigation.bind(
                                                s,
                                                s.props.rowNavigation.replace(
                                                  "[:id]",
                                                  e.awayTeamId,
                                                ),
                                              ),
                                            className: "playOff-Teams",
                                            "data-href": "true",
                                          },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "A" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.awayTeamName,
                                          ),
                                        )
                                      : i.a.createElement(
                                          "td",
                                          { className: "playOff-Teams" },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "A" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.awayTeamName,
                                          ),
                                        ),
                                  );
                                },
                              ),
                          ),
                        ),
                        i.a.createElement(h.a, {
                          isLoader: this.props.loader,
                          isNoData:
                            !this.props.loader &&
                            (0 ===
                              Object.keys(this.props.standingsTableData)
                                .length ||
                              0 === this.props.standingsTableData.length),
                          temporarilyNoData:
                            this.props.staticKeyWords.temporarilyNoData,
                        }),
                        i.a.createElement(
                          "div",
                          { className: "sectionHeading" },
                          i.a.createElement(
                            "div",
                            { className: "sectionTitle" },
                            i.a.createElement(
                              "span",
                              null,
                              this.props.staticKeyWords.secondLeg,
                            ),
                          ),
                        ),
                        i.a.createElement(
                          "table",
                          { className: "tableDefault" },
                          i.a.createElement(
                            "thead",
                            null,
                            i.a.createElement(
                              "tr",
                              null,
                              i.a.createElement(
                                "th",
                                { className: "playOff-data" },
                                this.props.staticKeyWords.mcDate,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playOff-Teams" },
                                this.props.staticKeyWords.home,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playOff-data" },
                                this.props.staticKeyWords.scoreHt,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playoff-data" },
                                this.props.staticKeyWords.extraTime,
                                " (",
                                this.props.staticKeyWords.penalties,
                                ")",
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playoff-data" },
                                this.props.staticKeyWords.totalScore,
                              ),
                              i.a.createElement(
                                "th",
                                { className: "playOff-Teams" },
                                this.props.staticKeyWords.away,
                              ),
                            ),
                          ),
                          i.a.createElement(
                            "tbody",
                            null,
                            this.props.standingsTableData &&
                              (null ===
                                (a = this.props.standingsTableData.leg2) ||
                              void 0 === a
                                ? void 0
                                : a.length) &&
                              this.props.standingsTableData.leg2.map(
                                function (e, t) {
                                  return i.a.createElement(
                                    "tr",
                                    { key: "leg_" + t },
                                    i.a.createElement(
                                      "td",
                                      { className: "playOff-data" },
                                      i.a.createElement(
                                        "div",
                                        null,
                                        e.kickOff
                                          ? Object(j.b)(e.kickOff, "banner")
                                              .date
                                          : "-",
                                      ),
                                    ),
                                    e.homeTeamId && null !== e.homeTeamId
                                      ? i.a.createElement(
                                          "td",
                                          {
                                            onClick:
                                              e.homeTeamId &&
                                              s.rowNavigation.bind(
                                                s,
                                                s.props.rowNavigation.replace(
                                                  "[:id]",
                                                  e.homeTeamId,
                                                ),
                                              ),
                                            className: "playOff-Teams",
                                            "data-href": "true",
                                          },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "H" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.homeTeamName,
                                          ),
                                        )
                                      : i.a.createElement(
                                          "td",
                                          { className: "playOff-Teams" },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "H" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.homeTeamName,
                                          ),
                                        ),
                                    i.a.createElement(
                                      "td",
                                      { className: "playOff-data" },
                                      i.a.createElement(
                                        "div",
                                        null,
                                        e.fullTimeScore,
                                        " (",
                                        e.halfTimeScore,
                                        ")",
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      { className: "playOff-data" },
                                      i.a.createElement(
                                        "div",
                                        null,
                                        e.etScore,
                                        " ",
                                        "-" != e.penScore &&
                                          "(" + e.penScore + ")",
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      { className: "playOff-data" },
                                      i.a.createElement(
                                        "div",
                                        null,
                                        e.aggScore,
                                      ),
                                    ),
                                    e.awayTeamId && null !== e.awayTeamId
                                      ? i.a.createElement(
                                          "td",
                                          {
                                            onClick:
                                              e.awayTeamId &&
                                              s.rowNavigation.bind(
                                                s,
                                                s.props.rowNavigation.replace(
                                                  "[:id]",
                                                  e.awayTeamId,
                                                ),
                                              ),
                                            className: "playOff-Teams",
                                            "data-href": "true",
                                          },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "A" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.awayTeamName,
                                          ),
                                        )
                                      : i.a.createElement(
                                          "td",
                                          { className: "playOff-Teams" },
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "A" == e.winner
                                                  ? "teamBold"
                                                  : "",
                                            },
                                            e.awayTeamName,
                                          ),
                                        ),
                                  );
                                },
                              ),
                          ),
                        ),
                        i.a.createElement(h.a, {
                          isLoader: this.props.loader,
                          isNoData:
                            !this.props.loader &&
                            (0 ===
                              Object.keys(this.props.standingsTableData)
                                .length ||
                              0 === this.props.standingsTableData.length),
                          temporarilyNoData:
                            this.props.staticKeyWords.temporarilyNoData,
                        }),
                      );
                },
              },
            ]),
            a
          );
        })(o.Component),
        S = a(458),
        x = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "selectTab",
                value: function (e) {
                  if (
                    (this.props.dispatch(Object(O.l)(e)),
                    this.props.match &&
                      this.props.match.params &&
                      this.props.match.params.leagueId &&
                      Number(this.props.match.params.leagueId) > 0)
                  ) {
                    var t = this.props.params;
                    (t.optionId = e),
                      (t.compId = this.props.compId),
                      this.props.dispatch(
                        Object(O.c)(
                          t,
                          this.props.match.params.leagueType,
                          this.props.languageId,
                          !0,
                        ),
                      );
                  }
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  Object(g.a)() && this.props.dispatch(Object(g.j)(!0));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(g.j)(!1));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return i.a.createElement(
                    "div",
                    { id: "leagueStandings", className: "tabContent" },
                    i.a.createElement(
                      "div",
                      { className: "tournament-content" },
                      i.a.createElement(
                        "div",
                        { className: "btn-group pt-0" },
                        this.props.optionsList.map(function (t, a) {
                          return i.a.createElement(
                            "button",
                            {
                              className:
                                "buttonAll" +
                                (e.props.selectedTab === t.id ? " active" : ""),
                              onClick: e.selectTab.bind(e, t.id),
                              key: "btnOption_" + a,
                            },
                            t.name,
                          );
                        }),
                      ),
                      i.a.createElement(c.a, {
                        render: function (t) {
                          return i.a.createElement(
                            S.a,
                            Object.assign({}, t, {
                              standingColumns: e.props.standingColumns,
                              standingsTableData:
                                e.props.standingsData.hasOwnProperty("info") &&
                                e.props.standingsData.info,
                              isWhiteBG: !0,
                              isRowClick: !0,
                              paramKey: "teamId",
                              rowNavigation:
                                (e.props.languageId === I.c ? "/en" : "/zh") +
                                "/tournament/league/" +
                                (e.props.isTournament
                                  ? e.props.match.params.leagueId
                                  : e.props.eventInfo.competitionId) +
                                "/team/[:id]/fixturesresults",
                              isTournament: e.props.isTournament,
                              type: e.props.type,
                              teamId: e.props.teamId,
                              splitIndex: e.props.standingsData.splitIndex,
                            }),
                          );
                        },
                      }),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var K = Object(m.b)(
          function (e) {
            return {
              optionsList: e.tournamentstandings.optionsList,
              standingColumns: e.tournamentstandings.standingColumns,
              selectedTab: e.tournamentstandings.selectedTab,
              languageId: e.app.languageId,
              compId: e.tournamentstandings.compId,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(x),
        L = a(475),
        H = a.n(L),
        A = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a(e) {
            var r;
            return (
              Object(s.a)(this, a),
              ((r = t.call(this, e)).bracketIndex = {
                last16L: 1,
                quarterFinalsL: 2,
                semiFinalsL: 3,
                finalMiddle: 4,
                semiFinalsR: 5,
                quarterFinalsR: 6,
                last16R: 7,
              }),
              r
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  Object(g.a)() && this.props.dispatch(Object(g.j)(!0));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(g.j)(!1));
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    a,
                    s,
                    r,
                    n,
                    l,
                    o,
                    c,
                    p,
                    m,
                    d,
                    u = this,
                    g = (
                      null === (e = this.props) || void 0 === e
                        ? void 0
                        : e.standingsTableData
                    )
                      ? null === (t = this.props) || void 0 === t
                        ? void 0
                        : t.standingsTableData.treeHeaders
                      : [],
                    y = (
                      null === (a = this.props) || void 0 === a
                        ? void 0
                        : a.standingsTableData
                    )
                      ? null === (s = this.props) || void 0 === s
                        ? void 0
                        : s.standingsTableData.treeData
                      : [],
                    f = (
                      null === (r = this.props) || void 0 === r
                        ? void 0
                        : r.standingsTableData
                    )
                      ? null === (n = this.props) || void 0 === n
                        ? void 0
                        : n.standingsTableData.treeKeys
                      : [];
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      "div",
                      { className: "tournament-container" },
                      g.length > 0 || y.length > 0 || f.length > 0
                        ? i.a.createElement(
                            "div",
                            {
                              className:
                                1 === g.length
                                  ? "tournament-container1"
                                  : 3 === g.length
                                    ? "tournament-container3"
                                    : "",
                            },
                            i.a.createElement(
                              "div",
                              { className: "tournament-headers" },
                              null === g || void 0 === g
                                ? void 0
                                : g.map(function (e, t) {
                                    return i.a.createElement(
                                      "h3",
                                      { key: "KO_TREE" + t },
                                      u.props.staticKeyWords[e],
                                    );
                                  }),
                            ),
                            i.a.createElement(
                              "div",
                              { className: "tournament-brackets" },
                              null === f || void 0 === f
                                ? void 0
                                : f.map(function (e, t) {
                                    var a;
                                    return y[e]
                                      ? i.a.createElement(
                                          "ul",
                                          {
                                            key: "tree" + t,
                                            className:
                                              "bracket " +
                                              ("R" === y[e][0].side
                                                ? "right "
                                                : "") +
                                              "bracket-" +
                                              u.bracketIndex[e],
                                          },
                                          null === (a = y[e]) || void 0 === a
                                            ? void 0
                                            : a.map(function (e, t) {
                                                var a = Object(j.b)(
                                                  e.kickOff,
                                                  "kotree",
                                                );
                                                return "Final" === e.trName
                                                  ? i.a.createElement(
                                                      i.a.Fragment,
                                                      null,
                                                      "" == e.fullTimeScore ||
                                                        null == e.winner ||
                                                        e.isConsolationMatch
                                                        ? ""
                                                        : i.a.createElement(
                                                            "li",
                                                            {
                                                              className:
                                                                "team-item-result",
                                                              key: "winner" + t,
                                                            },
                                                            i.a.createElement(
                                                              "div",
                                                              {
                                                                className:
                                                                  "team-item-resultContent",
                                                              },
                                                              "H" === e.winner
                                                                ? e.homeTeamName
                                                                : e.awayTeamName,
                                                              i.a.createElement(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "teamCup",
                                                                },
                                                                i.a.createElement(
                                                                  "img",
                                                                  {
                                                                    src: H.a,
                                                                    alt: "country",
                                                                  },
                                                                ),
                                                              ),
                                                              i.a.createElement(
                                                                "img",
                                                                {
                                                                  className:
                                                                    "countryLogo-small",
                                                                  src:
                                                                    "https://images.footylogic.com/countries/" +
                                                                    ("H" ===
                                                                    e.winner
                                                                      ? e.homeFlag
                                                                      : e.awayFlag) +
                                                                    ".png",
                                                                  alt: "",
                                                                },
                                                              ),
                                                            ),
                                                          ),
                                                      i.a.createElement(
                                                        "li",
                                                        {
                                                          className:
                                                            e.isConsolationMatch
                                                              ? "team-item-result result-info"
                                                              : "team-item",
                                                          key: "fixtrf" + t,
                                                        },
                                                        i.a.createElement(
                                                          "div",
                                                          {
                                                            className:
                                                              "finalMatch",
                                                          },
                                                          i.a.createElement(
                                                            "span",
                                                            null,
                                                            " ",
                                                            e.homeTeamName,
                                                            e.result &&
                                                              "H" === e.winner
                                                              ? " (" +
                                                                  e.result +
                                                                  ")"
                                                              : "",
                                                            i.a.createElement(
                                                              "img",
                                                              {
                                                                className:
                                                                  "countryLogo-small",
                                                                src:
                                                                  "https://images.footylogic.com/countries/" +
                                                                  e.homeFlag +
                                                                  ".png",
                                                                alt: "",
                                                                onError:
                                                                  function (e) {
                                                                    return (e.target.style.display =
                                                                      "none");
                                                                  },
                                                              },
                                                            ),
                                                            i.a.createElement(
                                                              "span",
                                                              {
                                                                className:
                                                                  "score",
                                                              },
                                                              e.teamHScore,
                                                            ),
                                                            " ",
                                                            i.a.createElement(
                                                              "br",
                                                              null,
                                                            ),
                                                          ),
                                                          i.a.createElement(
                                                            "span",
                                                            {
                                                              className:
                                                                "matchTime",
                                                            },
                                                            i.a.createElement(
                                                              "span",
                                                              null,
                                                              (u.props
                                                                .languageId ===
                                                              I.c
                                                                ? a.date
                                                                : u.props
                                                                    .staticKeyWords[
                                                                    a.month.toLowerCase()
                                                                  ]) +
                                                                " " +
                                                                (u.props
                                                                  .languageId ===
                                                                I.c
                                                                  ? u.props
                                                                      .staticKeyWords[
                                                                      a.month.toLowerCase()
                                                                    ]
                                                                  : u.props
                                                                      .staticKeyWords[
                                                                      a.date
                                                                    ]),
                                                            ),
                                                            i.a.createElement(
                                                              "br",
                                                              null,
                                                            ),
                                                          ),
                                                          i.a.createElement(
                                                            "span",
                                                            null,
                                                            e.awayTeamName,
                                                            e.result &&
                                                              "A" === e.winner
                                                              ? " (" +
                                                                  e.result +
                                                                  ")"
                                                              : "",
                                                            i.a.createElement(
                                                              "img",
                                                              {
                                                                className:
                                                                  "countryLogo-small",
                                                                src:
                                                                  "https://images.footylogic.com/countries/" +
                                                                  e.awayFlag +
                                                                  ".png",
                                                                alt: "",
                                                                onError:
                                                                  function (e) {
                                                                    return (e.target.style.display =
                                                                      "none");
                                                                  },
                                                              },
                                                            ),
                                                            i.a.createElement(
                                                              "span",
                                                              {
                                                                className:
                                                                  "score",
                                                              },
                                                              e.teamAScore,
                                                            ),
                                                          ),
                                                        ),
                                                      ),
                                                    )
                                                  : i.a.createElement(
                                                      i.a.Fragment,
                                                      null,
                                                      i.a.createElement(
                                                        "li",
                                                        {
                                                          key: "fixtrH" + t,
                                                          className:
                                                            "team-item " +
                                                            ("H" === e.winner
                                                              ? "teamBold"
                                                              : "") +
                                                            ("R" === e.side
                                                              ? " team-item-right "
                                                              : ""),
                                                        },
                                                        "R" === e.side
                                                          ? i.a.createElement(
                                                              "span",
                                                              {
                                                                className:
                                                                  "score",
                                                              },
                                                              e.teamHScore,
                                                            )
                                                          : i.a.createElement(
                                                              "span",
                                                              null,
                                                              i.a.createElement(
                                                                "img",
                                                                {
                                                                  className:
                                                                    "countryLogo-small",
                                                                  src:
                                                                    "https://images.footylogic.com/countries/" +
                                                                    e.homeFlag +
                                                                    ".png",
                                                                  alt: "",
                                                                  onError:
                                                                    function (
                                                                      e,
                                                                    ) {
                                                                      return (e.target.style.display =
                                                                        "none");
                                                                    },
                                                                },
                                                              ),
                                                            ),
                                                        i.a.createElement(
                                                          "span",
                                                          {
                                                            className:
                                                              "countryName",
                                                          },
                                                          e.homeTeamName,
                                                          " ",
                                                          e.result &&
                                                            "H" === e.winner
                                                            ? " (" +
                                                                e.result +
                                                                ")"
                                                            : "",
                                                        ),
                                                        "R" === e.side
                                                          ? i.a.createElement(
                                                              "span",
                                                              null,
                                                              i.a.createElement(
                                                                "img",
                                                                {
                                                                  className:
                                                                    "countryLogo-small",
                                                                  src:
                                                                    "https://images.footylogic.com/countries/" +
                                                                    e.homeFlag +
                                                                    ".png",
                                                                  alt: "",
                                                                  onError:
                                                                    function (
                                                                      e,
                                                                    ) {
                                                                      return (e.target.style.display =
                                                                        "none");
                                                                    },
                                                                },
                                                              ),
                                                            )
                                                          : i.a.createElement(
                                                              "span",
                                                              {
                                                                className:
                                                                  "score",
                                                              },
                                                              e.teamHScore,
                                                            ),
                                                        i.a.createElement(
                                                          "span",
                                                          {
                                                            className:
                                                              "tree-arrow",
                                                          },
                                                        ),
                                                      ),
                                                      i.a.createElement(
                                                        "span",
                                                        {
                                                          className:
                                                            "KickOf-time",
                                                        },
                                                        (u.props.languageId ===
                                                        I.c
                                                          ? a.date
                                                          : u.props
                                                              .staticKeyWords[
                                                              a.month.toLowerCase()
                                                            ]) +
                                                          " " +
                                                          (u.props
                                                            .languageId === I.c
                                                            ? u.props
                                                                .staticKeyWords[
                                                                a.month.toLowerCase()
                                                              ]
                                                            : u.props
                                                                .staticKeyWords[
                                                                a.date
                                                              ]),
                                                      ),
                                                      i.a.createElement(
                                                        "li",
                                                        {
                                                          key: "fixtrA" + t,
                                                          className:
                                                            "team-item " +
                                                            ("A" === e.winner
                                                              ? "teamBold"
                                                              : "") +
                                                            ("R" === e.side
                                                              ? " team-item-right "
                                                              : ""),
                                                        },
                                                        "R" === e.side
                                                          ? i.a.createElement(
                                                              "span",
                                                              {
                                                                className:
                                                                  "score",
                                                              },
                                                              e.teamAScore,
                                                            )
                                                          : i.a.createElement(
                                                              "span",
                                                              null,
                                                              i.a.createElement(
                                                                "img",
                                                                {
                                                                  className:
                                                                    "countryLogo-small",
                                                                  src:
                                                                    "https://images.footylogic.com/countries/" +
                                                                    e.awayFlag +
                                                                    ".png",
                                                                  alt: "",
                                                                  onError:
                                                                    function (
                                                                      e,
                                                                    ) {
                                                                      return (e.target.style.display =
                                                                        "none");
                                                                    },
                                                                },
                                                              ),
                                                            ),
                                                        i.a.createElement(
                                                          "span",
                                                          {
                                                            className:
                                                              "countryName",
                                                          },
                                                          e.awayTeamName,
                                                          e.result &&
                                                            "A" === e.winner
                                                            ? " (" +
                                                                e.result +
                                                                ")"
                                                            : "",
                                                        ),
                                                        "R" === e.side
                                                          ? i.a.createElement(
                                                              "span",
                                                              null,
                                                              i.a.createElement(
                                                                "img",
                                                                {
                                                                  className:
                                                                    "countryLogo-small",
                                                                  src:
                                                                    "https://images.footylogic.com/countries/" +
                                                                    e.awayFlag +
                                                                    ".png",
                                                                  alt: "",
                                                                  onError:
                                                                    function (
                                                                      e,
                                                                    ) {
                                                                      return (e.target.style.display =
                                                                        "none");
                                                                    },
                                                                },
                                                              ),
                                                            )
                                                          : i.a.createElement(
                                                              "span",
                                                              {
                                                                className:
                                                                  "score",
                                                              },
                                                              e.teamAScore,
                                                            ),
                                                        i.a.createElement(
                                                          "span",
                                                          {
                                                            className:
                                                              "tree-arrow",
                                                          },
                                                        ),
                                                      ),
                                                    );
                                              }),
                                        )
                                      : i.a.createElement("ul", {
                                          key: "tree" + t,
                                          className:
                                            "bracket " +
                                            ("R" === e.slice(e.length - 1)
                                              ? "right "
                                              : "") +
                                            "bracket-" +
                                            u.bracketIndex[e],
                                        });
                                  }),
                            ),
                          )
                        : "",
                    ),
                    i.a.createElement(h.a, {
                      isLoader: this.props.loader,
                      isNoData:
                        !this.props.loader &&
                        (0 ===
                          Object.keys(
                            (null === (l = this.props) ||
                            void 0 === l ||
                            null === (o = l.standingsTableData) ||
                            void 0 === o
                              ? void 0
                              : o.treeData) &&
                              (null === (c = this.props) ||
                              void 0 === c ||
                              null === (p = c.standingsTableData) ||
                              void 0 === p
                                ? void 0
                                : p.treeHeaders) &&
                              (null === (m = this.props) ||
                              void 0 === m ||
                              null === (d = m.standingsTableData) ||
                              void 0 === d
                                ? void 0
                                : d.treeKeys),
                          ).length ||
                          0 === this.props.standingsTableData.length),
                      temporarilyNoData:
                        this.props.staticKeyWords.temporarilyNoData,
                    }),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var F = Object(m.b)(
          function (e) {
            return { languageId: e.app.languageId };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(A),
        B = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.match && this.props.match.params) {
                    var e = this.getParams(this.props);
                    Object.keys(e).length > 0 &&
                      this.props.dispatch(
                        Object(O.b)(
                          e,
                          this.props.match.params.leagueType,
                          this.props.languageId,
                        ),
                      );
                  }
                  this.props.staticKeyWords &&
                    Object.keys(this.props.staticKeyWords).length > 0 &&
                    this.props.dispatch(Object(O.m)(this.props.staticKeyWords));
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  this.props.staticKeyWords !== e.staticKeyWords &&
                    this.props.dispatch(Object(O.m)(e.staticKeyWords));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(O.e)());
                },
              },
              {
                key: "getParams",
                value: function (e) {
                  return "league" !== e.type
                    ? {
                        optionId: e.selectedTab,
                        seasonId: e.selectedSeasonFilter,
                        isLeague: !1,
                        compId: Number(e.match.params.leagueId),
                        teamId: Number(e.match.params.teamId),
                        roundId: e.level1SelOpt
                          ? e.level1SelOpt.id
                          : e.level2SelOpt
                            ? e.level2SelOpt.id
                            : "",
                        layoutId: e.level1SelOpt
                          ? e.level1SelOpt.layoutId
                          : e.level2SelOpt
                            ? e.level2SelOpt.layoutId
                            : "",
                        groupLetter: e.groupName
                          ? "all" === e.groupName
                            ? "all"
                            : e.groupName.charAt(e.groupName.length - 1)
                          : "all",
                      }
                    : e.match &&
                        e.match.params.leagueId &&
                        e.match.params.leagueId > 0
                      ? {
                          optionId: e.selectedTab,
                          seasonId: e.selectedSeasonFilter,
                          isLeague: !0,
                          compId: Number(e.match.params.leagueId),
                          teamId: "",
                          roundId: e.level1SelOpt
                            ? e.level1SelOpt.id
                            : e.level2SelOpt
                              ? e.level2SelOpt.id
                              : "",
                          layoutId: e.level1SelOpt
                            ? e.level1SelOpt.layoutId
                            : e.level2SelOpt
                              ? e.level2SelOpt.layoutId
                              : "",
                          groupLetter: e.groupName
                            ? "all" === e.groupName
                              ? "all"
                              : e.groupName.charAt(e.groupName.length - 1)
                            : "all",
                        }
                      : {};
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  if (
                    this.props.match &&
                    this.props.match.params &&
                    JSON.stringify(this.props.match.params) !==
                      JSON.stringify(e.match.params) &&
                    ((window.location.pathname.includes("team") &&
                      this.props.match.params.teamId !==
                        e.match.params.teamId) ||
                      (window.location.pathname.includes("league") &&
                        this.props.match.params.leagueId !==
                          e.match.params.leagueId) ||
                      this.props.match.path !== e.match.path)
                  ) {
                    var t = this.getParams(e);
                    this.props.dispatch(
                      Object(O.d)(
                        t,
                        this.props.match.params.leagueType,
                        e.languageId,
                      ),
                    );
                  }
                },
              },
              {
                key: "seasonChanged",
                value: function (e) {
                  var t = e.target.selectedIndex,
                    a = e.target.childNodes[t].getAttribute("data-id");
                  if (
                    (this.props.dispatch(
                      Object(O.f)({ value: e.target.value }),
                    ),
                    this.props.match &&
                      this.props.match.params &&
                      this.props.match.params.leagueId &&
                      this.props.match.params.leagueId > 0)
                  ) {
                    var s = this.getParams(this.props);
                    (s.seasonId = e.target.value),
                      (s.level1Id = this.props.level1SelOpt
                        ? this.props.level1SelOpt.levelId
                        : ""),
                      (s.level2Id = this.props.level2SelOpt
                        ? this.props.level2SelOpt.levelId
                        : ""),
                      (s.compId = a || s.compId),
                      this.props.dispatch(
                        Object(O.d)(
                          s,
                          this.props.match.params.leagueType,
                          this.props.languageId,
                        ),
                      );
                  }
                },
              },
              {
                key: "level1OptClick",
                value: function (e) {
                  var t = this.props.location.pathname.split("/");
                  this.props.history.push(
                    "/" +
                      this.props.match.params.lang +
                      "/tournament/" +
                      this.props.match.params.leagueType +
                      "/" +
                      t[4] +
                      "/standings/" +
                      e.engName.replace(" ", "_"),
                  );
                  var a = this.getParams(this.props);
                  (a.roundId = e.id),
                    (a.layoutId = e.layoutId),
                    this.props.dispatch(Object(O.j)(e)),
                    this.props.dispatch(Object(O.h)(e.layoutName)),
                    e.subLevels.length > 0
                      ? (this.props.dispatch(Object(O.i)(e.subLevels)),
                        (a.roundId = e.subLevels[0].id),
                        (a.layoutId = e.subLevels[0].layoutId),
                        this.props.dispatch(Object(O.k)(e.subLevels[0])),
                        this.props.dispatch(
                          Object(O.c)(
                            a,
                            this.props.match.params.leagueType,
                            this.props.languageId,
                            !1,
                          ),
                        ))
                      : (this.props.dispatch(Object(O.i)("")),
                        this.props.dispatch(Object(O.k)("")),
                        this.props.dispatch(
                          Object(O.c)(
                            a,
                            this.props.match.params.leagueType,
                            this.props.languageId,
                            !0,
                          ),
                        ));
                },
              },
              {
                key: "level2OptClick",
                value: function (e) {
                  this.props.dispatch(Object(O.h)(e.layoutName));
                  var t = this.getParams(this.props);
                  (t.roundId = e.id),
                    (t.layoutId = e.layoutId),
                    this.props.dispatch(Object(O.k)(e)),
                    this.props.dispatch(
                      Object(O.c)(
                        t,
                        this.props.match.params.leagueType,
                        this.props.languageId,
                        !1,
                      ),
                    );
                },
              },
              {
                key: "renderSwitch",
                value: function (e, t) {
                  var a = "";
                  switch (e.trim()) {
                    case "LEAGUE_TABLE":
                      a = i.a.createElement(K, {
                        standingsData: t.standingsData,
                        match: t.match,
                        params: this.getParams(t),
                        type: t.type,
                        isRowClick: t.isRowClick,
                        homeTeamId: t.homeTeamId,
                        awayTeamId: t.awayTeamId,
                        isTournament: t.isTournament,
                        teamId: t.match.params.teamId,
                      });
                      break;
                    case "ROUND_BY_ROUND_LEG_1":
                      a = i.a.createElement(
                        W,
                        Object.assign(
                          {
                            standingsTableData:
                              t.standingsData.hasOwnProperty("info") &&
                              this.props.standingsData.info,
                            leg: 1,
                            isWRDisplay:
                              t.standingsData.hasOwnProperty("info") &&
                              t.standingsData.isWRDisplay,
                            isMatchReplay:
                              t.standingsData.hasOwnProperty("info") &&
                              t.standingsData.isMatchReplay,
                            rowNavigation:
                              (this.props.languageId === I.c ? "/en" : "/zh") +
                              "/tournament/league/" +
                              (this.props.isTournament
                                ? this.props.match.params.leagueId
                                : this.props.eventInfo.competitionId) +
                              "/team/[:id]/fixturesresults",
                          },
                          t,
                        ),
                      );
                      break;
                    case "GROUP_TABLE":
                      a = i.a.createElement(
                        w,
                        Object.assign({}, t, {
                          standingsTableData:
                            t.standingsData && t.standingsData.info
                              ? t.standingsData.info
                              : [],
                          scheduleTable:
                            t.standingsData && t.standingsData.groupFixtures
                              ? t.standingsData.groupFixtures
                              : [],
                          screenfrom: "standings",
                          rowNavigation:
                            (this.props.languageId === I.c ? "/en" : "/zh") +
                            "/tournament/league/" +
                            (this.props.isTournament
                              ? this.props.match.params.leagueId
                              : this.props.eventInfo.competitionId) +
                            "/team/[:id]/fixturesresults",
                        }),
                      );
                      break;
                    case "ROUND_BY_ROUND_LEG_2":
                      a = i.a.createElement(
                        W,
                        Object.assign(
                          {
                            standingsTableData:
                              t.standingsData.hasOwnProperty("info") &&
                              this.props.standingsData.info,
                            leg: 2,
                          },
                          t,
                          {
                            rowNavigation:
                              (this.props.languageId === I.c ? "/en" : "/zh") +
                              "/tournament/league/" +
                              (this.props.isTournament
                                ? this.props.match.params.leagueId
                                : this.props.eventInfo.competitionId) +
                              "/team/[:id]/fixturesresults",
                          },
                        ),
                      );
                      break;
                    case "KO_TREE":
                      a = i.a.createElement(F, {
                        standingsTableData:
                          t.standingsData.hasOwnProperty("info") &&
                          this.props.standingsData.info,
                        staticKeyWords: this.props.staticKeyWords,
                      });
                      break;
                    default:
                      a = i.a.createElement(K, {
                        standingsData: t.standingsData,
                        match: t.match,
                        params: this.getParams(t),
                        type: t.type,
                        isRowClick: t.isRowClick,
                        homeTeamId: t.homeTeamId,
                        awayTeamId: t.awayTeamId,
                        isTournament: t.isTournament,
                        teamId: t.match.params.teamId,
                      });
                  }
                  return a;
                },
              },
              {
                key: "groupChanged",
                value: function (e) {
                  var t = this.getParams(this.props);
                  (t.groupLetter =
                    "all" === e.target.value
                      ? "all"
                      : e.target.value.charAt(e.target.value.length - 1)),
                    " " === t.groupLetter &&
                      this.props.dispatch(
                        Object(O.c)(
                          t,
                          this.props.match.params.leagueType,
                          this.props.languageId,
                        ),
                      ),
                    this.props.dispatch(
                      Object(O.c)(
                        t,
                        this.props.match.params.leagueType,
                        this.props.languageId,
                      ),
                    ),
                    this.props.dispatch(Object(O.g)(e.target.value));
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    a = this,
                    s = this,
                    r =
                      this.props.standingsData && this.props.standingsData.info
                        ? this.props.standingsData.info
                        : [];
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    ((this.props.level1Opt &&
                      this.props.level1Opt.length > 0) ||
                      this.props.seasonFilterData.length > 0) &&
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          "div",
                          { className: "tabSection" },
                          this.props.level1Opt &&
                            this.props.level1Opt.length > 0 &&
                            i.a.createElement(
                              "ul",
                              { className: "tabsList", "data-persist": "true" },
                              this.props.level1Opt.map(function (e, t) {
                                return i.a.createElement(
                                  "li",
                                  {
                                    id: "defaultOpen",
                                    key: "opt_" + t,
                                    className:
                                      a.props.level1SelOpt.id === e.id
                                        ? "active"
                                        : "",
                                    onClick: function () {
                                      return s.level1OptClick(e);
                                    },
                                  },
                                  i.a.createElement(E.b, { to: "#" }, e.name),
                                );
                              }),
                            ),
                          i.a.createElement(
                            "div",
                            { className: "sectionFilter" },
                            i.a.createElement(
                              "div",
                              {
                                className:
                                  "form-group " +
                                  ("standings" == this.props.screenfrom &&
                                  Object.keys(r).length > 0
                                    ? "form-inline-group-staging"
                                    : "form-inline-group-staging-league"),
                              },
                              Object.keys(r).length > 0 &&
                                "GROUP_TABLE" === this.props.layOut &&
                                i.a.createElement(
                                  "div",
                                  { className: "form-control" },
                                  i.a.createElement(
                                    "select",
                                    {
                                      className: "mr-10",
                                      value: this.props.groupName,
                                      onChange: this.groupChanged.bind(this),
                                    },
                                    i.a.createElement(
                                      "option",
                                      { value: "all", key: "group_all" },
                                      this.props.staticKeyWords.groupAll,
                                    ),
                                    null === (e = this.props) ||
                                      void 0 === e ||
                                      null === (t = e.groupLetter) ||
                                      void 0 === t
                                      ? void 0
                                      : t.map(function (e, t) {
                                          if (e)
                                            return i.a.createElement(
                                              "option",
                                              { value: e.displayKey, key: t },
                                              e.displayValue,
                                            );
                                        }),
                                  ),
                                ),
                              this.props.seasonFilterData.length > 0 &&
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    "div",
                                    {
                                      className:
                                        this.props.level1Opt &&
                                        this.props.level1Opt.length > 0
                                          ? "form-inline-group-staging"
                                          : "form-inline-group-staging-league",
                                    },
                                    i.a.createElement(
                                      "div",
                                      { className: "form-control" },
                                      i.a.createElement(
                                        "select",
                                        {
                                          value:
                                            this.props.selectedSeasonFilter,
                                          onChange:
                                            this.seasonChanged.bind(this),
                                        },
                                        this.props.seasonFilterData.map(
                                          function (e, t) {
                                            return i.a.createElement(
                                              "option",
                                              {
                                                value: e.id,
                                                "data-id": e.competitionId,
                                                key: "season_" + t,
                                              },
                                              e.name,
                                            );
                                          },
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                            ),
                          ),
                        ),
                        i.a.createElement("div", { className: "space-5" }),
                      ),
                    this.props.level2Opt &&
                      this.props.level2Opt.length > 0 &&
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          "div",
                          { className: "seasonalStats-tablesList" },
                          i.a.createElement(
                            "div",
                            { className: "listItems" },
                            i.a.createElement(
                              "ul",
                              null,
                              this.props.level2Opt &&
                                this.props.level2Opt.map(function (e, t) {
                                  return i.a.createElement(
                                    "li",
                                    {
                                      className:
                                        a.props.level2SelOpt.id === e.id
                                          ? "active"
                                          : "",
                                      key: t,
                                      onClick: function () {
                                        return s.level2OptClick(e);
                                      },
                                    },
                                    i.a.createElement(E.b, { to: "#" }, e.name),
                                  );
                                }),
                            ),
                          ),
                        ),
                        i.a.createElement("div", { className: "space-5" }),
                      ),
                    !this.props.loader &&
                      Object.keys(this.props.standingsData).length > 0 &&
                      this.renderSwitch(this.props.layOut, this.props),
                    i.a.createElement(h.a, {
                      isLoader: this.props.loader,
                      isNoData:
                        !this.props.loader &&
                        (0 === Object.keys(this.props.standingsData).length ||
                          !this.props.standingsData.hasOwnProperty("info")),
                      temporarilyNoData:
                        this.props.staticKeyWords.temporarilyNoData,
                    }),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var R = Object(m.b)(
          function (e) {
            return {
              seasonFilterData: e.tournamentstandings.seasonFilterData,
              selectedTab: e.tournamentstandings.selectedTab,
              selectedSeasonFilter: e.tournamentstandings.selectedSeasonFilter,
              standingsData: e.tournamentstandings.standingsData,
              staticKeyWords: e.app.staticKeyWords,
              languageId: e.app.languageId,
              level1Opt: e.tournamentstandings.level1Opt,
              isRegSeas: e.tournamentstandings.isRegSeas,
              level2Opt: e.tournamentstandings.level2Opt,
              level1SelOpt: e.tournamentstandings.level1SelOpt,
              level2SelOpt: e.tournamentstandings.level2SelOpt,
              layOut: e.tournamentstandings.layOut,
              layoutId: e.tournamentstandings.layoutId,
              roundId: e.tournamentstandings.roundId,
              loader: e.app.loader,
              groupLetter: e.tournamentstandings.groupLetter,
              groupName: e.tournamentstandings.groupName,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(B),
        P = a(228),
        M = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.match &&
                    this.props.match.params.leagueId &&
                    Number(this.props.match.params.leagueId) > 0 &&
                    this.props.dispatch(
                      Object(P.b)(
                        this.props.match.params.leagueId,
                        this.props.languageId,
                      ),
                    ),
                    this.props.staticKeyWords &&
                      Object.keys(this.props.staticKeyWords) &&
                      this.props.dispatch(
                        Object(P.c)(this.props.staticKeyWords),
                      );
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  JSON.stringify(this.props.staticKeyWords) !==
                    JSON.stringify(e.staticKeyWords) &&
                    this.props.dispatch(Object(P.c)(e.staticKeyWords));
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  Object(g.a)() && this.props.dispatch(Object(g.j)(!0)),
                    this.props.dispatch(
                      Object(g.i)({ disable: !0, tab: "TopScorer" }),
                    );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(g.j)(!1)),
                    this.props.dispatch(
                      Object(g.i)({ disable: !1, tab: "TopScorer" }),
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(c.a, {
                      render: function (t) {
                        return i.a.createElement(
                          w,
                          Object.assign({}, e.props, {
                            standingsTableData:
                              e.props.topScorerData.hasOwnProperty("info")
                                ? e.props.topScorerData.info
                                : [],
                            screenfrom: "topscorer",
                            rowNavigation: "team/[:id]/fixturesresults",
                          }),
                        );
                      },
                    }),
                    this.props.topScorerData.hasOwnProperty("info") &&
                      this.props.topScorerData.info.length >= 11 &&
                      !this.props.isEdisplay &&
                      i.a.createElement(
                        "div",
                        { id: "leagueTopScorer", className: "tabContent" },
                        i.a.createElement(
                          "div",
                          { className: "tournament-content p-0" },
                          i.a.createElement(
                            S.a,
                            Object.assign({}, this.props, {
                              standingColumns: this.props.topScorerColumns,
                              standingsTableData:
                                this.props.topScorerData.hasOwnProperty(
                                  "info",
                                ) && this.props.topScorerData.info,
                              isWhiteBG: !0,
                              isTournament: !0,
                              paramKey: "playerClubId",
                              screenfrom: "topscorer",
                            }),
                          ),
                        ),
                      ),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var U = Object(m.b)(
          function (e) {
            return {
              topScorerData: e.topscorer.topScorerData,
              topScorerColumns: e.topscorer.topScorerColumns,
              staticKeyWords: e.app.staticKeyWords,
              languageId: e.app.languageId,
              isEdisplay: e.app.isEdisplay,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(M),
        _ = a(229),
        G = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.match &&
                    this.props.match.params &&
                    this.props.dispatch(
                      Object(_.b)({
                        teamId: Number(this.props.match.params.teamId),
                        languageId: this.props.languageId,
                      }),
                    ),
                    this.props.staticKeyWords &&
                      Object.keys(this.props.staticKeyWords) &&
                      this.props.dispatch(
                        Object(_.c)(this.props.staticKeyWords),
                      );
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  JSON.stringify(this.props.staticKeyWords) !==
                    JSON.stringify(e.staticKeyWords) &&
                    this.props.dispatch(Object(_.c)(e.staticKeyWords));
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.props.dispatch(
                    Object(g.i)({ disable: !0, tab: "playerTab" }),
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(
                    Object(g.i)({ disable: !1, tab: "playerTab" }),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    { id: "leagueTopScorer", className: "tabContent" },
                    i.a.createElement(
                      "div",
                      { className: "tournament-content" },
                      i.a.createElement(S.a, {
                        standingColumns: this.props.playersColumns,
                        standingsTableData:
                          this.props.playersData.hasOwnProperty("info")
                            ? this.props.playersData.info
                            : [],
                        isWhiteBG: !0,
                        isTournament: !0,
                      }),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var J = Object(m.b)(
          function (e) {
            return {
              playersColumns: e.players.playersColumns,
              playersData: e.players.playersData,
              staticKeyWords: e.app.staticKeyWords,
              languageId: e.app.languageId,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(G),
        Y = a(476),
        V = a.n(Y),
        Q = (a(492), a(493), a(158)),
        X = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  var e = Number(this.props.match.params.leagueId);
                  this.props.dispatch(Object(Q.j)(2)),
                    this.props.dispatch(Object(g.m)(!0));
                  for (var t = [], a = 11; a >= 0; a--) {
                    (s = new Date()).setMonth(s.getMonth() - a),
                      t.push({
                        id: s.getFullYear() + "" + (s.getMonth() + 1),
                        fullDate:
                          s.getFullYear() +
                          "-" +
                          (s.getMonth() + 1) +
                          "-" +
                          s.getDate(),
                        date: s.getDate(),
                        month: s.getMonth() + 1,
                        year: s.getFullYear(),
                      });
                  }
                  for (a = 1; a <= 11; a++) {
                    (s = new Date()).setMonth(s.getMonth() + a),
                      t.push({
                        id: s.getFullYear() + "" + (s.getMonth() + 1),
                        fullDate:
                          s.getFullYear() +
                          "-" +
                          (s.getMonth() + 1) +
                          "-" +
                          s.getDate(),
                        date: s.getDate(),
                        month: s.getMonth() + 1,
                        year: s.getFullYear(),
                      });
                  }
                  (s = new Date()).getFullYear(),
                    s.getMonth(),
                    s.getFullYear(),
                    s.getMonth(),
                    s.getDate(),
                    s.getDate();
                  var s,
                    r = s.getMonth() + 1,
                    n = s.getFullYear();
                  if (this.props.match && this.props.match.params) {
                    var l = this.getParams(this.props);
                    (l.date = n + "-" + r),
                      Object.keys(l).length > 0 &&
                        (l.isLeague
                          ? this.props.dispatch(
                              Object(Q.f)(l, this.props.languageId),
                            )
                          : this.props.dispatch(
                              Object(Q.d)(e, this.props.languageId, l),
                            ));
                  }
                },
              },
              {
                key: "getParams",
                value: function (e) {
                  return "league" !== e.type
                    ? {
                        isLeague: !1,
                        compId: "",
                        teamId: Number(e.match.params.teamId),
                        date:
                          this.props.selectedCarouselItem.year +
                          "-" +
                          this.props.selectedCarouselItem.month,
                        selectedSeason:
                          this.props.fixturesresults.selectedSeason,
                        selectedLeague:
                          this.props.fixturesresults.selectedLeague,
                        selectedHHAD: this.props.fixturesresults.selectedHHAD,
                        selectedHDC: this.props.fixturesresults.selectedHDC,
                        selectedCorner:
                          this.props.fixturesresults.selectedCorner,
                        selectedOption:
                          this.props.fixturesresults.selectedOption,
                        selectedTabId: this.props.fixturesresults.selectedTabId,
                      }
                    : e.match &&
                        e.match.params.leagueId &&
                        e.match.params.leagueId > 0
                      ? {
                          isLeague: !0,
                          compId: Number(e.match.params.leagueId),
                          teamId: "",
                          date:
                            this.props.selectedCarouselItem.year +
                            "-" +
                            this.props.selectedCarouselItem.month,
                          seasonId: e.selectedFRSeason.seasonId,
                        }
                      : {};
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  var t = this.getParams(e),
                    a = Number(e.match.params.leagueId);
                  if (
                    (this.props.match &&
                      this.props.match.params &&
                      JSON.stringify(this.props.match.params) !==
                        JSON.stringify(e.match.params) &&
                      ((window.location.pathname.includes("team") &&
                        this.props.match.params.teamId !==
                          e.match.params.teamId) ||
                        (window.location.pathname.includes("league") &&
                          this.props.match.params.leagueId !==
                            e.match.params.leagueId) ||
                        this.props.match.path !== e.match.path) &&
                      (t.isLeague ||
                        this.props.dispatch(Object(Q.d)(a, e.languageId, t))),
                    t.isLeague &&
                      e.selectedCarouselItem &&
                      JSON.stringify(this.props.selectedCarouselItem) !==
                        JSON.stringify(e.selectedCarouselItem) &&
                      ((t.date =
                        e.selectedCarouselItem.year +
                        "-" +
                        e.selectedCarouselItem.month),
                      this.props.dispatch(
                        Object(Q.e)(t, this.props.languageId),
                      )),
                    t.isLeague &&
                      e.isSlideIndex &&
                      e.carouselData.length > 0 &&
                      void 0 != this.slider)
                  ) {
                    var s = this;
                    setTimeout(function () {
                      e.slideIndex > 5
                        ? s.slider.slickNext()
                        : s.slider && s.slider.slickGoTo(e.slideIndex);
                    }, 1700),
                      this.props.dispatch(Object(Q.k)(!1));
                  }
                },
              },
              { key: "componentDidMount", value: function () {} },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(Q.g)({})),
                    this.props.dispatch(Object(Q.j)(2));
                },
              },
              {
                key: "selectItem",
                value: function (e) {
                  this.props.dispatch(Object(Q.g)(e));
                },
              },
              {
                key: "leagueSeasonChanged",
                value: function (e) {
                  if (e.target.value && e.target.value.length > 0) {
                    var t = JSON.parse(e.target.value);
                    t &&
                      Object.keys(t).length > 0 &&
                      (this.props.dispatch(Object(Q.i)(t)),
                      this.props.dispatch(Object(Q.c)(t)));
                  }
                },
              },
              {
                key: "seasonChanged",
                value: function (e) {
                  this.props.dispatch(
                    Object(Q.h)({ key: "Season", value: e.target.value }),
                  ),
                    this.props.dispatch(
                      Object(Q.e)(
                        {
                          isLeague: !1,
                          teamId: this.props.match.params.teamId,
                          selectedSeason: e.target.value,
                          selectedLeague:
                            this.props.fixturesresults.selectedLeague,
                          selectedHHAD: this.props.fixturesresults.selectedHHAD,
                          selectedHDC: this.props.fixturesresults.selectedHDC,
                          selectedCorner:
                            this.props.fixturesresults.selectedCorner,
                          selectedOption:
                            this.props.fixturesresults.selectedOption,
                          selectedTabId:
                            this.props.fixturesresults.selectedTabId,
                        },
                        this.props.languageId,
                      ),
                    );
                },
              },
              {
                key: "leagueChanged",
                value: function (e) {
                  this.props.dispatch(
                    Object(Q.h)({ key: "Team_League", value: e.target.value }),
                  ),
                    this.props.dispatch(
                      Object(Q.e)(
                        {
                          isLeague: !1,
                          teamId: this.props.match.params.teamId,
                          selectedSeason:
                            this.props.fixturesresults.selectedSeason,
                          selectedLeague: e.target.value,
                          selectedHHAD: this.props.fixturesresults.selectedHHAD,
                          selectedHDC: this.props.fixturesresults.selectedHDC,
                          selectedCorner:
                            this.props.fixturesresults.selectedCorner,
                          selectedOption:
                            this.props.fixturesresults.selectedOption,
                          selectedTabId:
                            this.props.fixturesresults.selectedTabId,
                        },
                        this.props.languageId,
                      ),
                    );
                },
              },
              {
                key: "hhadChanged",
                value: function (e) {
                  this.props.dispatch(
                    Object(Q.h)({ key: "Team_HHAD", value: e.target.value }),
                  ),
                    this.props.dispatch(
                      Object(Q.e)(
                        {
                          isLeague: !1,
                          teamId: this.props.match.params.teamId,
                          selectedSeason:
                            this.props.fixturesresults.selectedSeason,
                          selectedLeague:
                            this.props.fixturesresults.selectedLeague,
                          selectedHHAD: e.target.value,
                          selectedHDC: this.props.fixturesresults.selectedHDC,
                          selectedCorner:
                            this.props.fixturesresults.selectedCorner,
                          selectedOption:
                            this.props.fixturesresults.selectedOption,
                          selectedTabId:
                            this.props.fixturesresults.selectedTabId,
                        },
                        this.props.languageId,
                      ),
                    );
                },
              },
              {
                key: "hdcChanged",
                value: function (e) {
                  this.props.dispatch(
                    Object(Q.h)({ key: "Team_HDC", value: e.target.value }),
                  ),
                    this.props.dispatch(
                      Object(Q.e)(
                        {
                          isLeague: !1,
                          teamId: this.props.match.params.teamId,
                          selectedSeason:
                            this.props.fixturesresults.selectedSeason,
                          selectedLeague:
                            this.props.fixturesresults.selectedLeague,
                          selectedHHAD: this.props.fixturesresults.selectedHHAD,
                          selectedHDC: e.target.value,
                          selectedCorner:
                            this.props.fixturesresults.selectedCorner,
                          selectedOption:
                            this.props.fixturesresults.selectedOption,
                          selectedTabId:
                            this.props.fixturesresults.selectedTabId,
                        },
                        this.props.languageId,
                      ),
                    );
                },
              },
              {
                key: "cornersChanged",
                value: function (e) {
                  this.props.dispatch(
                    Object(Q.h)({ key: "Team_Corner", value: e.target.value }),
                  ),
                    this.props.dispatch(
                      Object(Q.e)(
                        {
                          isLeague: !1,
                          teamId: this.props.match.params.teamId,
                          selectedSeason:
                            this.props.fixturesresults.selectedSeason,
                          selectedLeague:
                            this.props.fixturesresults.selectedLeague,
                          selectedHHAD: this.props.fixturesresults.selectedHHAD,
                          selectedHDC: this.props.fixturesresults.selectedHDC,
                          selectedCorner: e.target.value,
                          selectedOption:
                            this.props.fixturesresults.selectedOption,
                          selectedTabId:
                            this.props.fixturesresults.selectedTabId,
                        },
                        this.props.languageId,
                      ),
                    );
                },
              },
              {
                key: "optionsChanged",
                value: function (e) {
                  this.props.dispatch(
                    Object(Q.h)({ key: "Options", value: e.target.value }),
                  ),
                    this.props.dispatch(
                      Object(Q.e)(
                        {
                          isLeague: !1,
                          teamId: this.props.match.params.teamId,
                          selectedSeason:
                            this.props.fixturesresults.selectedSeason,
                          selectedLeague:
                            this.props.fixturesresults.selectedLeague,
                          selectedHHAD: this.props.fixturesresults.selectedHHAD,
                          selectedHDC: this.props.fixturesresults.selectedHDC,
                          selectedCorner:
                            this.props.fixturesresults.selectedCorner,
                          selectedOption: e.target.value,
                          selectedTabId:
                            this.props.fixturesresults.selectedTabId,
                        },
                        this.props.languageId,
                      ),
                    );
                },
              },
              {
                key: "handleCornersStatus",
                value: function (e, t) {
                  var a = this.props.dispatch(Object(Q.a)(t, e, "value")),
                    s = "-";
                  return (
                    a &&
                      null != a &&
                      "" !== a &&
                      "-" !== a &&
                      (s =
                        ("h" === a.toLowerCase().charAt(0).toLowerCase()
                          ? this.props.staticKeyWords.highIcon
                          : this.props.staticKeyWords.lowIcon) + a.slice(1)),
                    s
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    a,
                    s,
                    r,
                    n,
                    l,
                    o,
                    c,
                    p,
                    m,
                    d,
                    u,
                    g,
                    y,
                    f = this;
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    "league" == this.props.type
                      ? i.a.createElement(
                          "div",
                          { id: "leagueResults", className: "tabContent" },
                          i.a.createElement(
                            "div",
                            { className: "tournament-content" },
                            i.a.createElement(
                              "div",
                              { className: "monthCarousel mb-20" },
                              i.a.createElement(
                                V.a,
                                Object.assign(
                                  {
                                    ref: function (e) {
                                      return (f.slider = e);
                                    },
                                  },
                                  {
                                    dots: !1,
                                    infinite: !1,
                                    speed: 500,
                                    slidesToShow: 6,
                                    slidesToScroll: 6,
                                    initialSlide: 11,
                                  },
                                ),
                                this.props.carouselData &&
                                  this.props.carouselData.length > 0 &&
                                  this.props.carouselData.map(function (e) {
                                    var t = Object(j.c)(e.fullDate, "carousel");
                                    return i.a.createElement(
                                      "div",
                                      { className: "month-list" },
                                      i.a.createElement(
                                        "div",
                                        {
                                          className:
                                            f.props.selectedCarouselItem.id ===
                                            e.id
                                              ? "active"
                                              : "",
                                          onClick: f.selectItem.bind(f, e),
                                        },
                                        i.a.createElement(
                                          "div",
                                          null,
                                          t.month &&
                                            f.props.staticKeyWords[
                                              t.month.toLowerCase()
                                            ],
                                        ),
                                        i.a.createElement("div", null, t.year),
                                      ),
                                    );
                                  }),
                              ),
                            ),
                            i.a.createElement(
                              "div",
                              { className: "selectedMonthHeading" },
                              this.props.selectedCarouselItem.month
                                ? this.props.staticKeyWords[
                                    j.d[
                                      this.props.selectedCarouselItem.month - 1
                                    ].toLowerCase()
                                  ]
                                : "",
                              " ",
                              this.props.selectedCarouselItem.year,
                              i.a.createElement(
                                "div",
                                { className: "sectionFilter" },
                                i.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "form-group form-inline-fixture-result",
                                  },
                                  i.a.createElement(
                                    "div",
                                    { className: "form-control" },
                                    i.a.createElement(
                                      "select",
                                      {
                                        onChange:
                                          this.leagueSeasonChanged.bind(this),
                                      },
                                      this.props.seasons.map(function (e, t) {
                                        return i.a.createElement(
                                          "option",
                                          {
                                            key: "season_" + t,
                                            value: JSON.stringify(e),
                                          },
                                          e.seasonName,
                                        );
                                      }),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            (null === (e = this.props) ||
                            void 0 === e ||
                            null === (t = e.data) ||
                            void 0 === t
                              ? void 0
                              : t.info) &&
                              (null === (a = this.props) ||
                              void 0 === a ||
                              null === (s = a.data) ||
                              void 0 === s ||
                              null === (r = s.info) ||
                              void 0 === r
                                ? void 0
                                : r.length) > 0 &&
                              (null === (n = this.props) ||
                              void 0 === n ||
                              null === (l = n.data) ||
                              void 0 === l
                                ? void 0
                                : l.info.map(function (e) {
                                    for (
                                      var t,
                                        a,
                                        s,
                                        r,
                                        n = Object(j.c)(e.kickOff, "maindata"),
                                        l = n.date.match(/[a-z]+|\d+/g) || [],
                                        o = [],
                                        c = 0;
                                      c < l.length;
                                      c++
                                    )
                                      o.push(l[c]);
                                    return i.a.createElement(
                                      "table",
                                      { className: "tableDefault" },
                                      i.a.createElement(
                                        "thead",
                                        null,
                                        i.a.createElement(
                                          "tr",
                                          null,
                                          n &&
                                            i.a.createElement(
                                              "th",
                                              null,
                                              f.props.languageId === I.c
                                                ? i.a.createElement(
                                                    i.a.Fragment,
                                                    null,
                                                    o[0],
                                                    i.a.createElement(
                                                      "sup",
                                                      { className: "a__sup" },
                                                      o[1],
                                                    ),
                                                  )
                                                : null === (t = f.props) ||
                                                    void 0 === t
                                                  ? void 0
                                                  : t.staticKeyWords[
                                                      null === n || void 0 === n
                                                        ? void 0
                                                        : n.month.toLowerCase()
                                                    ],
                                              " ",
                                              f.props.languageId === I.c
                                                ? null === (a = f.props) ||
                                                  void 0 === a
                                                  ? void 0
                                                  : a.staticKeyWords[
                                                      null === n || void 0 === n
                                                        ? void 0
                                                        : n.month.toLowerCase()
                                                    ]
                                                : null === (s = f.props) ||
                                                    void 0 === s
                                                  ? void 0
                                                  : s.staticKeyWords[
                                                      null === n || void 0 === n
                                                        ? void 0
                                                        : n.date
                                                    ],
                                              " (",
                                              null === (r = f.props) ||
                                                void 0 === r
                                                ? void 0
                                                : r.staticKeyWords[
                                                    null === n || void 0 === n
                                                      ? void 0
                                                      : n.weekDay.toLowerCase()
                                                  ],
                                              ")",
                                            ),
                                        ),
                                      ),
                                      i.a.createElement(
                                        "tbody",
                                        null,
                                        e.events.map(function (e) {
                                          if (e && Object.keys(e).length > 0)
                                            return i.a.createElement(
                                              "tr",
                                              null,
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(
                                                  "div",
                                                  { className: "fixture-info" },
                                                  i.a.createElement(
                                                    "div",
                                                    { className: "team-info" },
                                                    e.homeTeamId &&
                                                      null !== e.homeTeamId
                                                      ? i.a.createElement(
                                                          "div",
                                                          {
                                                            onClick:
                                                              function () {
                                                                return f.props.dispatch(
                                                                  Object(T.d)(
                                                                    f.props
                                                                      .history,
                                                                    f.props
                                                                      .match
                                                                      .params
                                                                      .leagueId,
                                                                    e.homeTeamId,
                                                                    f.props
                                                                      .languageId,
                                                                  ),
                                                                );
                                                              },
                                                            className:
                                                              "text-right truncate",
                                                            "data-href": "true",
                                                          },
                                                          e.homeTeamName,
                                                        )
                                                      : i.a.createElement(
                                                          "div",
                                                          {
                                                            className:
                                                              "text-right truncate",
                                                          },
                                                          e.homeTeamName,
                                                        ),
                                                  ),
                                                  i.a.createElement(
                                                    "div",
                                                    {
                                                      className:
                                                        "kickoff score",
                                                    },
                                                    e.homeTeamGoals,
                                                    " - ",
                                                    e.awayTeamGoals,
                                                    i.a.createElement(
                                                      "span",
                                                      {
                                                        className:
                                                          "kickoffHtscore",
                                                      },
                                                      " (",
                                                      e.homeTeamHTGoals,
                                                      "-",
                                                      e.awayTeamHTGoals,
                                                      ")",
                                                    ),
                                                  ),
                                                  i.a.createElement(
                                                    "div",
                                                    { className: "team-info" },
                                                    e.awayTeamId &&
                                                      null !== e.awayTeamId
                                                      ? i.a.createElement(
                                                          "div",
                                                          {
                                                            onClick:
                                                              function () {
                                                                return f.props.dispatch(
                                                                  Object(T.d)(
                                                                    f.props
                                                                      .history,
                                                                    f.props
                                                                      .match
                                                                      .params
                                                                      .leagueId,
                                                                    e.awayTeamId,
                                                                    f.props
                                                                      .languageId,
                                                                  ),
                                                                );
                                                              },
                                                            className:
                                                              "text-left truncate",
                                                            "data-href": "true",
                                                          },
                                                          e.awayTeamName,
                                                        )
                                                      : i.a.createElement(
                                                          "div",
                                                          {
                                                            className:
                                                              "text-left truncate",
                                                          },
                                                          e.awayTeamName,
                                                        ),
                                                  ),
                                                ),
                                              ),
                                            );
                                        }),
                                      ),
                                    );
                                  })),
                            i.a.createElement(h.a, {
                              isLoader: this.props.loader,
                              isNoData:
                                (!this.props.loader &&
                                  (0 ===
                                    Object.keys(
                                      null === (o = this.props) || void 0 === o
                                        ? void 0
                                        : o.data,
                                    ).length ||
                                    0 ===
                                      (null === (c = this.props) ||
                                      void 0 === c ||
                                      null === (p = c.data) ||
                                      void 0 === p ||
                                      null === (m = p.info) ||
                                      void 0 === m
                                        ? void 0
                                        : m.length))) ||
                                (Array.isArray(
                                  null === (d = this.props.data) || void 0 === d
                                    ? void 0
                                    : d.info,
                                ) &&
                                  0 ===
                                    Object.keys(
                                      null === (u = this.props) ||
                                        void 0 === u ||
                                        null === (g = u.data) ||
                                        void 0 === g ||
                                        null === (y = g.info[0]) ||
                                        void 0 === y
                                        ? void 0
                                        : y.events[0],
                                    ).length),
                              temporarilyNoData:
                                this.props.staticKeyWords.temporarilyNoData,
                            }),
                          ),
                        )
                      : i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            "ul",
                            { className: "tabsList", "data-persist": "true" },
                            i.a.createElement(
                              "li",
                              {
                                className:
                                  "tabLinks " +
                                  ("1" ==
                                  this.props.fixturesresults.selectedTabId
                                    ? "active"
                                    : ""),
                                onClick: function () {
                                  f.props.dispatch(Object(Q.j)(1)),
                                    f.props.dispatch(
                                      Object(Q.e)(
                                        {
                                          isLeague: !1,
                                          compId: "",
                                          teamId: f.props.match.params.teamId,
                                          date:
                                            f.props.selectedCarouselItem.year +
                                            "-" +
                                            f.props.selectedCarouselItem.month,
                                          selectedSeason:
                                            f.props.fixturesresults
                                              .selectedSeason,
                                          selectedLeague:
                                            f.props.fixturesresults
                                              .selectedLeague,
                                          selectedHHAD:
                                            f.props.fixturesresults
                                              .selectedHHAD,
                                          selectedHDC:
                                            f.props.fixturesresults.selectedHDC,
                                          selectedCorner:
                                            f.props.fixturesresults
                                              .selectedCorner,
                                          selectedOption:
                                            f.props.fixturesresults
                                              .selectedOption,
                                          selectedTabId: 1,
                                        },
                                        f.props.languageId,
                                      ),
                                    );
                                },
                              },
                              i.a.createElement(
                                "a",
                                null,
                                this.props.staticKeyWords.fixtures,
                              ),
                            ),
                            i.a.createElement(
                              "li",
                              {
                                className:
                                  "tabLinks " +
                                  ("2" ==
                                  this.props.fixturesresults.selectedTabId
                                    ? "active"
                                    : ""),
                                onClick: function () {
                                  f.props.dispatch(Object(Q.j)(2)),
                                    f.props.dispatch(
                                      Object(Q.e)(
                                        {
                                          isLeague: !1,
                                          compId: "",
                                          teamId: f.props.match.params.teamId,
                                          date:
                                            f.props.selectedCarouselItem.year +
                                            "-" +
                                            f.props.selectedCarouselItem.month,
                                          selectedSeason:
                                            f.props.fixturesresults
                                              .selectedSeason,
                                          selectedLeague:
                                            f.props.fixturesresults
                                              .selectedLeague,
                                          selectedHHAD:
                                            f.props.fixturesresults
                                              .selectedHHAD,
                                          selectedHDC:
                                            f.props.fixturesresults.selectedHDC,
                                          selectedCorner:
                                            f.props.fixturesresults
                                              .selectedCorner,
                                          selectedOption:
                                            f.props.fixturesresults
                                              .selectedOption,
                                          selectedTabId: 2,
                                        },
                                        f.props.languageId,
                                      ),
                                    );
                                },
                              },
                              i.a.createElement(
                                "a",
                                null,
                                this.props.staticKeyWords.results,
                              ),
                            ),
                          ),
                          i.a.createElement(
                            "div",
                            { id: "leagueResults", className: "tabContent" },
                            i.a.createElement(
                              "div",
                              { className: "tournament-content" },
                              i.a.createElement(
                                "div",
                                { className: "sectionHeading" },
                                i.a.createElement("div", null),
                                i.a.createElement(
                                  "div",
                                  { className: "sectionFilter" },
                                  i.a.createElement(
                                    "div",
                                    { className: "form-group form-inline" },
                                    i.a.createElement(
                                      "div",
                                      { className: "form-control" },
                                      i.a.createElement(
                                        "select",
                                        {
                                          onChange:
                                            this.seasonChanged.bind(this),
                                          value: this.props.selectedSeason,
                                        },
                                        this.props.fixtureFilters.hasOwnProperty(
                                          "Season",
                                        ) &&
                                          this.props.fixtureFilters.Season.map(
                                            function (e, t) {
                                              return i.a.createElement(
                                                "option",
                                                { key: t, value: e.id },
                                                e.name,
                                              );
                                            },
                                          ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                              i.a.createElement(
                                "table",
                                { className: "tableDefault fixtureResults" },
                                i.a.createElement(
                                  "thead",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement(
                                      "th",
                                      null,
                                      this.props.staticKeyWords.competition,
                                    ),
                                    i.a.createElement(
                                      "th",
                                      null,
                                      this.props.staticKeyWords.mcDate,
                                    ),
                                    i.a.createElement(
                                      "th",
                                      null,
                                      this.props.staticKeyWords.ha,
                                      i.a.createElement(
                                        "div",
                                        { className: "form-group" },
                                        i.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          i.a.createElement(
                                            "select",
                                            {
                                              onChange:
                                                this.optionsChanged.bind(this),
                                              value: this.props.selectedOption,
                                            },
                                            this.props.fixtureFilters.hasOwnProperty(
                                              "Options",
                                            ) &&
                                              this.props.fixtureFilters.Options.map(
                                                function (e, t) {
                                                  return i.a.createElement(
                                                    "option",
                                                    { key: t, value: e.id },
                                                    e.name,
                                                  );
                                                },
                                              ),
                                          ),
                                        ),
                                      ),
                                    ),
                                    i.a.createElement(
                                      "th",
                                      null,
                                      this.props.staticKeyWords.against,
                                    ),
                                    i.a.createElement(
                                      "th",
                                      null,
                                      this.props.staticKeyWords.wbyl,
                                    ),
                                    i.a.createElement(
                                      "th",
                                      null,
                                      this.props.staticKeyWords.scoreHt,
                                    ),
                                    i.a.createElement(
                                      "th",
                                      { className: "w-75" },
                                      this.props.staticKeyWords.hHAD,
                                      i.a.createElement(
                                        "div",
                                        { className: "form-group" },
                                        i.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          i.a.createElement(
                                            "select",
                                            {
                                              onChange:
                                                this.hhadChanged.bind(this),
                                              value: this.props.selectedHHAD,
                                            },
                                            this.props.fixtureFilters.hasOwnProperty(
                                              "Team_HHAD",
                                            ) &&
                                              this.props.fixtureFilters.Team_HHAD.map(
                                                function (e, t) {
                                                  return i.a.createElement(
                                                    "option",
                                                    { key: t, value: e.id },
                                                    e.name,
                                                  );
                                                },
                                              ),
                                          ),
                                        ),
                                      ),
                                    ),
                                    i.a.createElement(
                                      "th",
                                      null,
                                      this.props.staticKeyWords.hdc,
                                      i.a.createElement(
                                        "div",
                                        { className: "form-group" },
                                        i.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          i.a.createElement(
                                            "select",
                                            {
                                              onChange:
                                                this.hdcChanged.bind(this),
                                              value: this.props.selectedHDC,
                                            },
                                            this.props.fixtureFilters.hasOwnProperty(
                                              "Team_HDC",
                                            ) &&
                                              this.props.fixtureFilters.Team_HDC.map(
                                                function (e, t) {
                                                  return i.a.createElement(
                                                    "option",
                                                    { key: t, value: e.id },
                                                    e.name,
                                                  );
                                                },
                                              ),
                                          ),
                                        ),
                                      ),
                                    ),
                                    i.a.createElement(
                                      "th",
                                      { className: "w-75" },
                                      this.props.staticKeyWords.corners,
                                      i.a.createElement(
                                        "div",
                                        { className: "form-group" },
                                        i.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          i.a.createElement(
                                            "select",
                                            {
                                              onChange:
                                                this.cornersChanged.bind(this),
                                              value: this.props.selectedCorner,
                                            },
                                            this.props.fixtureFilters.hasOwnProperty(
                                              "Team_Corner",
                                            ) &&
                                              this.props.fixtureFilters.Team_Corner.map(
                                                function (e, t) {
                                                  return e.name ==
                                                    f.props
                                                      .defaultCornersHiloValue
                                                    ? i.a.createElement(
                                                        "option",
                                                        {
                                                          selected: !0,
                                                          key: t,
                                                          value: e.id,
                                                        },
                                                        e.name,
                                                      )
                                                    : i.a.createElement(
                                                        "option",
                                                        {
                                                          className: "test",
                                                          key: t,
                                                          value: e.id,
                                                        },
                                                        e.name,
                                                      );
                                                },
                                              ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                                i.a.createElement(
                                  "tbody",
                                  null,
                                  this.props.data.hasOwnProperty("events") &&
                                    this.props.data.events.length
                                    ? this.props.data.events.map(
                                        function (e, t) {
                                          return i.a.createElement(
                                            "tr",
                                            null,
                                            e.competitionId &&
                                              null !== e.competitionId
                                              ? i.a.createElement(
                                                  "td",
                                                  {
                                                    onClick: function () {
                                                      return f.props.dispatch(
                                                        Object(T.e)(
                                                          f.props.history,
                                                          e.competitionId,
                                                          f.props.languageId,
                                                        ),
                                                      );
                                                    },
                                                    "data-href": "true",
                                                  },
                                                  i.a.createElement(
                                                    "div",
                                                    null,
                                                    e.competitionName
                                                      ? e.competitionName
                                                      : "-",
                                                  ),
                                                )
                                              : i.a.createElement(
                                                  "td",
                                                  null,
                                                  i.a.createElement(
                                                    "div",
                                                    null,
                                                    e.competitionName
                                                      ? e.competitionName
                                                      : "-",
                                                  ),
                                                ),
                                            i.a.createElement(
                                              "td",
                                              null,
                                              i.a.createElement(
                                                "div",
                                                null,
                                                e.kickOff
                                                  ? Object(j.b)(
                                                      e.kickOff,
                                                      "banner",
                                                    ).date
                                                  : "-",
                                              ),
                                            ),
                                            i.a.createElement(
                                              "td",
                                              null,
                                              i.a.createElement(
                                                "div",
                                                null,
                                                e.homeOrAway
                                                  ? e.homeOrAway
                                                  : "-",
                                              ),
                                            ),
                                            e.teamIdAgainst &&
                                              e.teamIdAgainst &&
                                              e.competitionId &&
                                              null !==
                                                (null === e || void 0 === e
                                                  ? void 0
                                                  : e.competitionId)
                                              ? i.a.createElement(
                                                  "td",
                                                  {
                                                    onClick: function () {
                                                      return f.props.dispatch(
                                                        Object(T.d)(
                                                          f.props.history,
                                                          e.competitionId,
                                                          e.teamIdAgainst,
                                                          f.props.languageId,
                                                        ),
                                                      );
                                                    },
                                                    "data-href": "true",
                                                  },
                                                  i.a.createElement(
                                                    "div",
                                                    null,
                                                    e.teamAganist
                                                      ? e.teamAganist
                                                      : "-",
                                                  ),
                                                )
                                              : i.a.createElement(
                                                  "td",
                                                  null,
                                                  i.a.createElement(
                                                    "div",
                                                    null,
                                                    e.teamAganist
                                                      ? e.teamAganist
                                                      : "-",
                                                  ),
                                                ),
                                            i.a.createElement(
                                              "td",
                                              null,
                                              e.winOrLoss
                                                ? i.a.createElement(
                                                    "div",
                                                    { className: "" },
                                                    i.a.createElement(
                                                      "span",
                                                      {
                                                        className:
                                                          "status " +
                                                          (e.winOrLoss &&
                                                          "w" ===
                                                            e.winOrLoss
                                                              .trim()
                                                              .toLowerCase()
                                                            ? "win"
                                                            : e.winOrLoss &&
                                                                "l" ===
                                                                  e.winOrLoss
                                                                    .trim()
                                                                    .toLowerCase()
                                                              ? "loss"
                                                              : e.winOrLoss &&
                                                                  "d" ===
                                                                    e.winOrLoss
                                                                      .trim()
                                                                      .toLowerCase()
                                                                ? "draw"
                                                                : ""),
                                                      },
                                                      e.winOrLoss
                                                        ? f.props
                                                            .staticKeyWords[
                                                            e.winOrLoss
                                                              .trim()
                                                              .toLowerCase()
                                                          ]
                                                        : "",
                                                    ),
                                                  )
                                                : i.a.createElement(
                                                    "span",
                                                    null,
                                                    "-",
                                                  ),
                                            ),
                                            i.a.createElement(
                                              "td",
                                              null,
                                              i.a.createElement(
                                                "div",
                                                null,
                                                e.result ? e.result : "-",
                                              ),
                                            ),
                                            i.a.createElement(
                                              "td",
                                              null,
                                              e.hHadName
                                                ? i.a.createElement(
                                                    "div",
                                                    {
                                                      className:
                                                        "-" === e.hHadName
                                                          ? "textIcon textIcon-center"
                                                          : "textIcon",
                                                    },
                                                    i.a.createElement(
                                                      "span",
                                                      null,
                                                      e.hHadName
                                                        ? e.hHadName
                                                        : "-",
                                                    ),
                                                    "-" === e.hHadName
                                                      ? ""
                                                      : i.a.createElement(
                                                          "span",
                                                          {
                                                            className:
                                                              "status " +
                                                              (e.hHadOutcome &&
                                                              "w" ===
                                                                e.hHadOutcome
                                                                  .trim()
                                                                  .toLowerCase()
                                                                ? "win"
                                                                : e.hHadOutcome &&
                                                                    "l" ===
                                                                      e.hHadOutcome
                                                                        .trim()
                                                                        .toLowerCase()
                                                                  ? "loss"
                                                                  : e.hHadOutcome &&
                                                                      "d" ===
                                                                        e.hHadOutcome
                                                                          .trim()
                                                                          .toLowerCase()
                                                                    ? "draw"
                                                                    : ""),
                                                          },
                                                          e.hHadOutcome
                                                            ? f.props
                                                                .staticKeyWords[
                                                                e.hHadOutcome
                                                                  .trim()
                                                                  .toLowerCase()
                                                              ]
                                                            : "-",
                                                        ),
                                                  )
                                                : i.a.createElement(
                                                    "span",
                                                    null,
                                                    "-",
                                                  ),
                                            ),
                                            i.a.createElement(
                                              "td",
                                              null,
                                              e.hdcName
                                                ? i.a.createElement(
                                                    "div",
                                                    {
                                                      className:
                                                        "-" === e.hdcName
                                                          ? "textIcon textIcon-center"
                                                          : "textIcon",
                                                    },
                                                    i.a.createElement(
                                                      "span",
                                                      { className: "hdcValue" },
                                                      e.hdcName
                                                        ? e.hdcName
                                                        : "-",
                                                    ),
                                                    "-" === e.hdcName
                                                      ? ""
                                                      : i.a.createElement(
                                                          "span",
                                                          {
                                                            className:
                                                              "status " +
                                                              (e.hdcOutcome &&
                                                              "w" ===
                                                                e.hdcOutcome
                                                                  .trim()
                                                                  .toLowerCase()
                                                                ? "win"
                                                                : e.hdcOutcome &&
                                                                    "l" ===
                                                                      e.hdcOutcome
                                                                        .trim()
                                                                        .toLowerCase()
                                                                  ? "loss"
                                                                  : e.hdcOutcome &&
                                                                      "d" ===
                                                                        e.hdcOutcome
                                                                          .trim()
                                                                          .toLowerCase()
                                                                    ? "draw"
                                                                    : ""),
                                                          },
                                                          e.hdcOutcome
                                                            ? f.props
                                                                .staticKeyWords[
                                                                e.hdcOutcome
                                                                  .trim()
                                                                  .toLowerCase()
                                                              ]
                                                            : "",
                                                        ),
                                                  )
                                                : i.a.createElement(
                                                    "span",
                                                    null,
                                                    "-",
                                                  ),
                                            ),
                                            i.a.createElement(
                                              "td",
                                              null,
                                              i.a.createElement(
                                                "div",
                                                {
                                                  className: f.props.dispatch(
                                                    Object(Q.a)(
                                                      e.totalCorners,
                                                      f.props.fixturesresults
                                                        .fixtureFilters
                                                        .Team_Corner[
                                                        f.props.fixturesresults
                                                          .selectedCorner - 1
                                                      ],
                                                      "class",
                                                    ),
                                                  ),
                                                },
                                                2 ==
                                                  f.props.fixturesresults
                                                    .selectedTabId
                                                  ? f.handleCornersStatus(
                                                      f.props.fixturesresults
                                                        .fixtureFilters
                                                        .Team_Corner[
                                                        f.props.fixturesresults
                                                          .selectedCorner - 1
                                                      ],
                                                      e.totalCorners,
                                                    )
                                                  : "-",
                                              ),
                                            ),
                                          );
                                        },
                                      )
                                    : i.a.createElement(
                                        "tr",
                                        null,
                                        i.a.createElement(
                                          "td",
                                          { colspan: "9" },
                                          i.a.createElement(h.a, {
                                            isLoader: this.props.loader,
                                            isNoData:
                                              !this.props.loader &&
                                              (!this.props.data.hasOwnProperty(
                                                "events",
                                              ) ||
                                                !this.props.data.events.length),
                                            temporarilyNoData:
                                              this.props.staticKeyWords
                                                .temporarilyNoData,
                                          }),
                                        ),
                                      ),
                                ),
                              ),
                            ),
                          ),
                        ),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var q = Object(m.b)(
          function (e) {
            return {
              data: e.fixturesresults.data,
              carouselData: e.fixturesresults.carouselData,
              selectedCarouselItem: e.fixturesresults.selectedCarouselItem,
              fixtureFilters: e.fixturesresults.fixtureFilters,
              languageId: e.app.languageId,
              loader: e.app.loader,
              fixturesresults: e.fixturesresults,
              staticKeyWords: e.app.staticKeyWords,
              seasons: e.fixturesresults.seasons,
              isSlideIndex: e.fixturesresults.isSlideIndex,
              slideIndex: e.fixturesresults.slideIndex,
              defaultCornersHiloValue:
                e.fixturesresults.defaultCornersHiloValue,
              selectedFRSeason: e.fixturesresults.selectedFRSeason,
              selectedOption: e.fixturesresults.selectedOption,
              selectedHHAD: e.fixturesresults.selectedHHAD,
              selectedHDC: e.fixturesresults.selectedHDC,
              selectedCorner: e.fixturesresults.selectedCorner,
              selectedSeason: e.fixturesresults.selectedSeason,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(X),
        z = a(232),
        Z = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.match &&
                    this.props.match.params &&
                    this.props.dispatch(
                      Object(z.b)(
                        this.props.match.params.leagueId,
                        this.props.languageId,
                      ),
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.rulesInfo;
                  return i.a.createElement(
                    "div",
                    { id: "leagueRules", className: "tabContent" },
                    i.a.createElement(
                      "div",
                      { className: "tournament-content league-rules" },
                      i.a.createElement(
                        "div",
                        { className: "league-rules-content" },
                        i.a.createElement(
                          "div",
                          { className: "rules-label" },
                          this.props.staticKeyWords.teams,
                          ": ",
                        ),
                        " ",
                        e.teams,
                        i.a.createElement("br", null),
                        i.a.createElement(
                          "div",
                          { className: "rulesContent" },
                          i.a.createElement(
                            "div",
                            { className: "rules-label" },
                            this.props.staticKeyWords.structure,
                            ":",
                          ),
                          i.a.createElement("span", {
                            dangerouslySetInnerHTML: { __html: e.structure },
                          }),
                        ),
                        i.a.createElement(
                          "div",
                          { className: "rules-label" },
                          this.props.staticKeyWords.promotion,
                          ": ",
                        ),
                        " ",
                        e.promotion,
                        i.a.createElement("br", null),
                        i.a.createElement(
                          "div",
                          { className: "rules-label" },
                          this.props.staticKeyWords.relegation,
                          ": ",
                        ),
                        " ",
                        e.relegation,
                        i.a.createElement("br", null),
                        i.a.createElement(
                          "div",
                          { className: "rulesContent" },
                          i.a.createElement(
                            "div",
                            { className: "rules-label" },
                            this.props.staticKeyWords.tieBreakRules,
                            ": ",
                          ),
                          i.a.createElement("span", {
                            dangerouslySetInnerHTML: {
                              __html: e.tieBreakRules,
                            },
                          }),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var $ = Object(m.b)(
          function (e) {
            return {
              rulesInfo: e.rules.rulesInfo,
              languageId: e.app.languageId,
              staticKeyWords: e.app.staticKeyWords,
            };
          },
          function (e) {
            return {
              dispatch: e,
              actions: Object(p.b)({ getRulesInfo: z.b }, e),
            };
          },
        )(Z),
        ee = a(509),
        te = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              { key: "componentWillReceiveProps", value: function (e) {} },
              {
                key: "componentWillMount",
                value: function () {
                  this.props.dispatch(Object(T.f)());
                },
              },
              {
                key: "getScreen",
                value: function () {
                  return window.location.pathname.split("/").includes("team")
                    ? "team"
                    : "league";
                },
              },
              {
                key: "goBack",
                value: function () {
                  if (this.props.match && this.props.match.params) {
                    var e = this.getScreen(),
                      t = "en";
                    this.props.match &&
                      this.props.match.params.lang &&
                      this.props.match.params.lang.length > 0 &&
                      (t = this.props.match.params.lang),
                      "league" === e
                        ? this.props.history.push(
                            "/" +
                              t +
                              "/tournament/home/" +
                              this.props.match.params.leagueType,
                          )
                        : "team" === e &&
                          this.props.history.push(
                            "/" +
                              t +
                              "/tournament/" +
                              this.props.match.params.leagueType +
                              "/" +
                              this.props.match.params.leagueId +
                              "/standings",
                          ),
                      this.props.dispatch(Object(T.f)());
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this,
                    a = this.getScreen(),
                    s = this.props.teamPlayer;
                  return i.a.createElement(
                    "div",
                    { className: "mainContent container" },
                    i.a.createElement(
                      "div",
                      { className: "page-header" },
                      i.a.createElement(
                        "div",
                        { className: "pageBack" },
                        i.a.createElement("i", {
                          className: "icon-arrow-left",
                          onClick: this.goBack.bind(this),
                        }),
                      ),
                      i.a.createElement(
                        "div",
                        { className: "page-title" },
                        i.a.createElement("img", { src: "", alt: "" }),
                        this.props.competitionName,
                      ),
                    ),
                    i.a.createElement(
                      "div",
                      { className: "pageContent" },
                      i.a.createElement(
                        "div",
                        { className: "tabSection" },
                        i.a.createElement("div", { className: "space-5" }),
                        i.a.createElement(
                          "ul",
                          { className: "tabsList", "data-persist": "true" },
                          "international" ===
                            this.props.match.params.leagueType && "team" === a
                            ? ""
                            : i.a.createElement(
                                "li",
                                {
                                  className: this.props.dispatch(
                                    Object(T.b)(
                                      "standings",
                                      this.props.selectedButton,
                                    ),
                                  ),
                                  onClick: function () {
                                    return t.props.dispatch(
                                      Object(T.c)(
                                        "standings",
                                        t.props.match.params,
                                        t.props.history,
                                      ),
                                    );
                                  },
                                  id: "defaultOpen",
                                },
                                i.a.createElement(
                                  E.b,
                                  { to: "#" },
                                  this.props.staticKeyWords.standings,
                                ),
                              ),
                          i.a.createElement(
                            "li",
                            {
                              className: this.props.dispatch(
                                Object(T.b)(
                                  "fixturesresults",
                                  this.props.selectedButton,
                                ),
                              ),
                              onClick: function () {
                                t.props.dispatch(
                                  Object(T.c)(
                                    "fixturesresults",
                                    t.props.match.params,
                                    t.props.history,
                                  ),
                                ),
                                  t.props.dispatch(Object(Q.j)(2));
                              },
                            },
                            i.a.createElement(
                              E.b,
                              { to: "#" },
                              this.props.staticKeyWords.fixturesResults,
                            ),
                          ),
                          "league" === a
                            ? -1 !==
                              this.props.topScorer.indexOf(
                                parseInt(this.props.match.params.leagueId),
                              )
                              ? i.a.createElement(
                                  "li",
                                  {
                                    className: this.props.dispatch(
                                      Object(T.b)(
                                        "topscorer",
                                        this.props.selectedButton,
                                      ),
                                    ),
                                    onClick: function () {
                                      return t.props.dispatch(
                                        Object(T.c)(
                                          "topscorer",
                                          t.props.match.params,
                                          t.props.history,
                                        ),
                                      );
                                    },
                                  },
                                  i.a.createElement(
                                    E.b,
                                    { to: "#" },
                                    this.props.staticKeyWords.topScorer,
                                  ),
                                )
                              : ""
                            : s &&
                                -1 ==
                                  s.indexOf(
                                    parseInt(this.props.match.params.leagueId),
                                  )
                              ? i.a.createElement(
                                  "li",
                                  {
                                    className:
                                      (-1 !==
                                      this.props.teamPlayer.indexOf(
                                        parseInt(
                                          this.props.match.params.leagueId,
                                        ),
                                      )
                                        ? "d-none "
                                        : "") +
                                      this.props.dispatch(
                                        Object(T.b)(
                                          "players",
                                          this.props.selectedButton,
                                        ),
                                      ),
                                    onClick: function () {
                                      return t.props.dispatch(
                                        Object(T.c)(
                                          "players",
                                          t.props.match.params,
                                          t.props.history,
                                        ),
                                      );
                                    },
                                  },
                                  i.a.createElement(
                                    E.b,
                                    { to: "#" },
                                    this.props.staticKeyWords.players,
                                  ),
                                )
                              : "",
                          "international" ===
                            this.props.match.params.leagueType && "team" === a
                            ? ""
                            : i.a.createElement(
                                "li",
                                {
                                  className:
                                    ("league" === a &&
                                    -1 !=
                                      this.props.seasonalStats.indexOf(
                                        parseInt(
                                          this.props.match.params.leagueId,
                                        ),
                                      )
                                      ? "d-none "
                                      : "") +
                                    this.props.dispatch(
                                      Object(T.b)(
                                        "statistics",
                                        this.props.selectedButton,
                                      ),
                                    ),
                                  onClick: function () {
                                    return t.props.dispatch(
                                      Object(T.c)(
                                        "statistics",
                                        t.props.match.params,
                                        t.props.history,
                                      ),
                                    );
                                  },
                                },
                                i.a.createElement(
                                  E.b,
                                  { to: "#" },
                                  this.props.staticKeyWords.statistics,
                                ),
                              ),
                        ),
                        i.a.createElement(
                          "div",
                          { className: "tabsContent" },
                          i.a.createElement(
                            c.c,
                            null,
                            i.a.createElement(c.a, {
                              exact: !0,
                              path:
                                this.props.match.path + "/standings/:tabname?",
                              render: function (e) {
                                return i.a.createElement(
                                  R,
                                  Object.assign({}, e, {
                                    isTournament: !0,
                                    type: "league",
                                  }),
                                );
                              },
                            }),
                            i.a.createElement(c.a, {
                              exact: !0,
                              path:
                                this.props.match.path +
                                "/team/:teamId/standings",
                              render: function (e) {
                                return i.a.createElement(
                                  R,
                                  Object.assign({}, e, {
                                    isTournament: !0,
                                    type: "team",
                                  }),
                                );
                              },
                            }),
                            i.a.createElement(c.a, {
                              exact: !0,
                              path: this.props.match.path + "/topscorer",
                              render: function (e) {
                                return i.a.createElement(U, e);
                              },
                            }),
                            i.a.createElement(c.a, {
                              exact: !0,
                              path:
                                this.props.match.path + "/team/:teamId/players",
                              render: function (e) {
                                return i.a.createElement(J, e);
                              },
                            }),
                            i.a.createElement(c.a, {
                              exact: !0,
                              path: this.props.match.path + "/fixturesresults",
                              render: function (e) {
                                return i.a.createElement(
                                  q,
                                  Object.assign({}, e, { type: "league" }),
                                );
                              },
                            }),
                            i.a.createElement(c.a, {
                              exact: !0,
                              path:
                                this.props.match.path +
                                "/team/:teamId/fixturesresults",
                              render: function (e) {
                                return i.a.createElement(
                                  q,
                                  Object.assign({}, e, { type: "team" }),
                                );
                              },
                            }),
                            i.a.createElement(c.a, {
                              exact: !0,
                              path: this.props.match.path + "/rules",
                              render: function (e) {
                                return i.a.createElement($, e);
                              },
                            }),
                            i.a.createElement(c.a, {
                              path: this.props.match.path + "/statistics",
                              render: function (e) {
                                return i.a.createElement(
                                  ee.default,
                                  Object.assign({}, e, {
                                    isTournament: !0,
                                    type: "league",
                                  }),
                                );
                              },
                            }),
                            i.a.createElement(c.a, {
                              path:
                                this.props.match.path +
                                "/team/:teamId/statistics",
                              render: function (e) {
                                return i.a.createElement(
                                  ee.default,
                                  Object.assign({}, e, {
                                    isTournament: !0,
                                    type: "team",
                                  }),
                                );
                              },
                            }),
                          ),
                          i.a.createElement(
                            "div",
                            { className: "timestamp-data" },
                            (
                              null === (e = this.props.corrections) ||
                              void 0 === e
                                ? void 0
                                : e.length
                            )
                              ? i.a.createElement(
                                  "div",
                                  { className: "correction" },
                                  this.props.staticKeyWords.corrections,
                                  ":",
                                  this.props.corrections.map(function (e, a) {
                                    return i.a.createElement(
                                      "div",
                                      null,
                                      i.a.createElement(
                                        "span",
                                        null,
                                        "*",
                                        e.teamName,
                                        ": ",
                                        e.teamPoints,
                                        " ",
                                        t.props.staticKeyWords.points,
                                      ),
                                    );
                                  }),
                                )
                              : i.a.createElement("div", null),
                            i.a.createElement(
                              "div",
                              { className: "timeStamp" },
                              "" != this.props.lastUpdated &&
                                null != this.props.lastUpdated &&
                                "*" +
                                  this.props.staticKeyWords.lastUpdatedOn +
                                  " : " +
                                  Object(j.b)(this.props.lastUpdated, "banner")
                                    .date +
                                  " " +
                                  Object(j.b)(this.props.lastUpdated, "banner")
                                    .time,
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      var ae = Object(m.b)(
          function (e) {
            return {
              bannerData: e.matchcenter.bannerData,
              selectedComp: e.tournament.selectedComp,
              selectedButton: e.tournamentleague.selectedButton,
              lastUpdated: e.tournamentleague.comepetitionAndDate.lastUpdated,
              competitionName:
                e.tournamentleague.comepetitionAndDate.competitionName,
              staticKeyWords: e.app.staticKeyWords,
              seasonalStats:
                e.app.configurations && e.app.configurations.seasonalStats
                  ? e.app.configurations.seasonalStats
                  : [],
              playerAnalysis:
                e.app.configurations && e.app.configurations.playerAnalysis
                  ? e.app.configurations.playerAnalysis
                  : [],
              teamPlayer:
                e.app.configurations && e.app.configurations.teamPlayer
                  ? e.app.configurations.teamPlayer
                  : [],
              topScorer:
                e.app.configurations && e.app.configurations.topScorer
                  ? e.app.configurations.topScorer
                  : [],
              corrections: e.tournamentleague.comepetitionAndDate.corrections,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(te),
        se = (function (e) {
          Object(n.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    c.c,
                    null,
                    i.a.createElement(c.a, {
                      path: "".concat(this.props.match.path, "/home"),
                      render: function (e) {
                        return i.a.createElement(b, e);
                      },
                    }),
                    i.a.createElement(c.a, {
                      path: "".concat(
                        this.props.match.path,
                        "/:leagueType/:leagueId",
                      ),
                      render: function (e) {
                        return i.a.createElement(ae, e);
                      },
                    }),
                  );
                },
              },
            ]),
            a
          );
        })(o.Component);
      t.default = Object(m.b)(
        function (e) {
          return {};
        },
        function (e) {
          return { dispatch: e, actions: Object(p.b)({}, e) };
        },
      )(se);
    },
  },
]);
//# sourceMappingURL=10.4a9424c0.chunk.js.map
