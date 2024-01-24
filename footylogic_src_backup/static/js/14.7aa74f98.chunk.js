(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [14],
  {
    462: function (e, a, t) {
      "use strict";
      function s(e) {
        if (null == e) throw new TypeError("Cannot destructure undefined");
      }
      t.d(a, "a", function () {
        return s;
      });
    },
    518: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t(91),
        l = t(92),
        o = t(94),
        r = t(93),
        i = t(1),
        n = t.n(i),
        c = t(33),
        m = t(66),
        p = t(462),
        d = t(7),
        h = t(159),
        u = Object(d.c)({
          name: "bmrecentformstable",
          initialState: {},
          reducers: {},
        });
      Object(p.a)(u.actions);
      var b = function (e, a, t) {
          return function (s) {
            return a && e && ("FT Result" == t || "FHAD" == t || void 0 == t)
              ? "status " +
                  ("l" == e.toLowerCase()
                    ? "loss"
                    : "w" == e.toLowerCase()
                      ? "win"
                      : "d" == e.toLowerCase()
                        ? "draw"
                        : "")
              : a ||
                  !e ||
                  ("FH HiLo" != t &&
                    "HiLo" != t &&
                    "Both Teams to Score" != t &&
                    "Corners HiLo" != t &&
                    void 0 != t)
                ? void 0
                : "status " +
                  (e.toLowerCase().includes("h")
                    ? "High"
                    : e.toLowerCase().includes("l")
                      ? "Low"
                      : "n" == e.toLowerCase()
                        ? "BTTSno"
                        : "y" == e.toLowerCase()
                          ? "BTTSyes"
                          : "");
          };
        },
        T = function (e, a, t, s, l, o) {
          return function (r) {
            var i = {};
            if (Object.keys(t).length > 0) {
              if (
                ("hilo" == o
                  ? "halfTime" == e && a
                    ? s.forEach(function (e) {
                        t.homehalf == e.line && (i = e);
                      })
                    : "halfTime" != e || a
                      ? "fullTime" == e && a
                        ? s.forEach(function (e) {
                            t.homefull == e.line && (i = e);
                          })
                        : "fullTime" != e ||
                          a ||
                          s.forEach(function (e) {
                            t.awayfull == e.line && (i = e);
                          })
                      : s.forEach(function (e) {
                          t.awayhalf == e.line && (i = e);
                        })
                  : a
                    ? s.forEach(function (e) {
                        t.homecornerfull == e.line && (i = e);
                      })
                    : a ||
                      s.forEach(function (e) {
                        t.awaycornerfull == e.line && (i = e);
                      }),
                Object.keys(i).length)
              ) {
                if ("high" == l) {
                  var n = i.highPct && i.highPct ? i.highPct : 0;
                  return i.high + " (" + n + "%)";
                }
                var c = i.lowPct && i.lowPct ? i.lowPct : 0;
                return i.low + " (" + c + "%)";
              }
              return "-";
            }
          };
        },
        f = function (e, a, t, s, l) {
          return function (o) {
            "cornershilo" == s
              ? a && t == l.fullTime
                ? o(Object(h.c)({ text: "homecornerfull", value: e }))
                : a ||
                  t != l.fullTime ||
                  o(Object(h.c)({ text: "awaycornerfull", value: e }))
              : a && t == l.halfTime
                ? o(Object(h.d)({ text: "homehalf", value: e }))
                : a && t == l.fullTime
                  ? o(Object(h.d)({ text: "homefull", value: e }))
                  : a || t != l.halfTime
                    ? a ||
                      t != l.fullTime ||
                      o(Object(h.d)({ text: "awayfull", value: e }))
                    : o(Object(h.d)({ text: "awayhalf", value: e }));
          };
        },
        E = (u.reducer, t(5)),
        v = (function (e) {
          Object(o.a)(t, e);
          var a = Object(r.a)(t);
          function t() {
            var e;
            return (
              Object(s.a)(this, t),
              ((e = a.call(this)).state = {
                defaultFHHiloValue: 2.5,
                defaultHiloValue: 1.5,
                defaultCornersHiloValue: 9.5,
              }),
              e
            );
          }
          return (
            Object(l.a)(t, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.dispatch(Object(E.e)("default"));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return n.a.createElement(
                    n.a.Fragment,
                    null,
                    this.props.isStatistics &&
                      n.a.createElement(
                        "div",
                        {
                          className: this.props.isHome
                            ? "tableHeader-home"
                            : "tableHeader-away",
                        },
                        n.a.createElement(
                          "div",
                          { className: "tableHeading" },
                          this.props.isHome
                            ? this.props.bannerData.homeTeamName
                            : this.props.bannerData.awayTeamName,
                        ),
                      ),
                    n.a.createElement(
                      "table",
                      { className: "tableDefault" },
                      n.a.createElement(
                        "thead",
                        null,
                        this.props.isHilo &&
                          n.a.createElement(
                            n.a.Fragment,
                            null,
                            n.a.createElement(
                              "tr",
                              null,
                              n.a.createElement("th", { rowspan: "2" }),
                              this.props.mainColumns &&
                                this.props.mainColumns.map(function (a, t) {
                                  return n.a.createElement(
                                    n.a.Fragment,
                                    null,
                                    n.a.createElement(
                                      "th",
                                      { colspan: "2" },
                                      a.column,
                                      n.a.createElement(
                                        "div",
                                        { className: "form-group mt-10" },
                                        n.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          n.a.createElement(
                                            "span",
                                            null,
                                            e.props.staticKeyWords.goalLine,
                                          ),
                                          " ",
                                          n.a.createElement(
                                            "select",
                                            {
                                              onChange: function (t) {
                                                return e.props.dispatch(
                                                  f(
                                                    t.target.value,
                                                    e.props.isHome,
                                                    a.column,
                                                    null,
                                                    e.props.staticKeyWords,
                                                  ),
                                                );
                                              },
                                            },
                                            (e.props.isHome &&
                                            a.column ==
                                              e.props.staticKeyWords.halfTime
                                              ? e.props.hiloFilters
                                                  .homeHalfTimeGoals
                                              : e.props.isHome &&
                                                  a.column ==
                                                    e.props.staticKeyWords
                                                      .fullTime
                                                ? e.props.hiloFilters
                                                    .homeFullTimeGoals
                                                : e.props.isHome ||
                                                    a.column !=
                                                      e.props.staticKeyWords
                                                        .halfTime
                                                  ? e.props.hiloFilters
                                                      .awayFullTimeGoals
                                                  : e.props.hiloFilters
                                                      .awayHalfTimeGoals
                                            ).map(function (t, s) {
                                              return a.column ==
                                                e.props.staticKeyWords.halfTime
                                                ? t == e.state.defaultHiloValue
                                                  ? n.a.createElement(
                                                      "option",
                                                      {
                                                        key: s,
                                                        selected: !0,
                                                        value: t,
                                                      },
                                                      t,
                                                    )
                                                  : n.a.createElement(
                                                      "option",
                                                      { key: s, value: t },
                                                      t,
                                                    )
                                                : t ==
                                                    e.state.defaultFHHiloValue
                                                  ? n.a.createElement(
                                                      "option",
                                                      {
                                                        key: s,
                                                        selected: !0,
                                                        value: t,
                                                      },
                                                      t,
                                                    )
                                                  : n.a.createElement(
                                                      "option",
                                                      { key: s, value: t },
                                                      t,
                                                    );
                                            }),
                                          ),
                                        ),
                                      ),
                                    ),
                                    a.rowspan &&
                                      n.a.createElement("th", {
                                        class: "w-30",
                                        rowspan: "1",
                                      }),
                                  );
                                }),
                            ),
                            n.a.createElement("tr", null),
                          ),
                        this.props.isCornersHilo &&
                          n.a.createElement(
                            n.a.Fragment,
                            null,
                            n.a.createElement(
                              "tr",
                              null,
                              n.a.createElement("th", { rowspan: "1" }),
                              n.a.createElement(
                                "th",
                                { colspan: "3" },
                                n.a.createElement(
                                  "div",
                                  { class: "form-group" },
                                  n.a.createElement(
                                    "div",
                                    { class: "form-control" },
                                    n.a.createElement(
                                      "span",
                                      null,
                                      this.props.staticKeyWords.line,
                                    ),
                                    " ",
                                    n.a.createElement(
                                      "select",
                                      {
                                        onChange: function (a) {
                                          return e.props.dispatch(
                                            f(
                                              a.target.value,
                                              e.props.isHome,
                                              e.props.staticKeyWords.fullTime,
                                              "cornershilo",
                                              e.props.staticKeyWords,
                                            ),
                                          );
                                        },
                                      },
                                      (this.props.cornersFilters &&
                                      this.props.isHome
                                        ? this.props.cornersFilters
                                            .homeCornersFullTimeGoals
                                        : this.props.cornersFilters
                                            .awayCornersFullTimeGoals
                                      ).map(function (a, t) {
                                        return a ==
                                          e.state.defaultCornersHiloValue
                                          ? n.a.createElement(
                                              "option",
                                              {
                                                key: t,
                                                selected: !0,
                                                value: a,
                                              },
                                              a,
                                            )
                                          : n.a.createElement(
                                              "option",
                                              { key: t, value: a },
                                              a,
                                            );
                                      }),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            n.a.createElement("tr", null),
                          ),
                        n.a.createElement(
                          "tr",
                          null,
                          this.props.columns &&
                            this.props.columns.map(function (e, a) {
                              return n.a.createElement(
                                "th",
                                { className: e.class, key: a },
                                n.a.createElement("div", null, e.column),
                              );
                            }),
                        ),
                      ),
                      n.a.createElement(
                        "tbody",
                        null,
                        this.props.isStatistics
                          ? n.a.createElement(
                              n.a.Fragment,
                              null,
                              this.props.data &&
                                Object.keys(this.props.data).map(
                                  function (a, t) {
                                    return n.a.createElement(
                                      "tr",
                                      { key: t },
                                      n.a.createElement(
                                        "td",
                                        null,
                                        e.props.staticKeyWords[a],
                                      ),
                                      (e.props.isHilo || e.props.isCornersHilo
                                        ? Object.keys(e.props.data[a])
                                        : e.props.columns
                                      ).map(function (t, s) {
                                        if ("" != t.key) {
                                          if (e.props.isHilo)
                                            return n.a.createElement(
                                              n.a.Fragment,
                                              { key: s },
                                              n.a.createElement(
                                                "td",
                                                null,
                                                n.a.createElement(
                                                  "div",
                                                  null,
                                                  e.props.dispatch(
                                                    T(
                                                      t,
                                                      e.props.isHome,
                                                      e.props.seledtedFilter,
                                                      e.props.data[a][t],
                                                      "high",
                                                      "hilo",
                                                    ),
                                                  ),
                                                ),
                                              ),
                                              n.a.createElement(
                                                "td",
                                                null,
                                                n.a.createElement(
                                                  "div",
                                                  null,
                                                  e.props.dispatch(
                                                    T(
                                                      t,
                                                      e.props.isHome,
                                                      e.props.seledtedFilter,
                                                      e.props.data[a][t],
                                                      "low",
                                                      "hilo",
                                                    ),
                                                  ),
                                                ),
                                              ),
                                              Object.keys(e.props.data[a])
                                                .length -
                                                1 !=
                                                s &&
                                                n.a.createElement(
                                                  "td",
                                                  null,
                                                  n.a.createElement(
                                                    "div",
                                                    null,
                                                  ),
                                                ),
                                            );
                                          if (e.props.isCornersHilo) {
                                            if (s < 1)
                                              return n.a.createElement(
                                                n.a.Fragment,
                                                { key: s },
                                                n.a.createElement(
                                                  "td",
                                                  null,
                                                  n.a.createElement(
                                                    "div",
                                                    null,
                                                    e.props.dispatch(
                                                      T(
                                                        t,
                                                        e.props.isHome,
                                                        e.props.seledtedFilter,
                                                        e.props.data[a],
                                                        "high",
                                                      ),
                                                    ),
                                                  ),
                                                ),
                                                n.a.createElement(
                                                  "td",
                                                  null,
                                                  n.a.createElement(
                                                    "div",
                                                    null,
                                                    e.props.dispatch(
                                                      T(
                                                        t,
                                                        e.props.isHome,
                                                        e.props.seledtedFilter,
                                                        e.props.data[a],
                                                        "low",
                                                      ),
                                                    ),
                                                  ),
                                                ),
                                              );
                                          } else if (
                                            "HomeOrAway" != t.key &&
                                            "HTFT_type" != t.key
                                          )
                                            return n.a.createElement(
                                              "td",
                                              { key: s },
                                              e.props.data[a][t.key],
                                            );
                                        }
                                      }),
                                    );
                                  },
                                ),
                            )
                          : n.a.createElement(
                              n.a.Fragment,
                              null,
                              this.props.data &&
                                this.props.data.map(function (a, t) {
                                  return n.a.createElement(
                                    "tr",
                                    { key: t },
                                    e.props.columns &&
                                      e.props.columns.map(function (t, s) {
                                        return t.isDiff
                                          ? n.a.createElement(
                                              "td",
                                              { key: s },
                                              n.a.createElement(
                                                "div",
                                                null,
                                                t.isHandicap
                                                  ? n.a.createElement(
                                                      "div",
                                                      { class: "textIcon" },
                                                      n.a.createElement(
                                                        "span",
                                                        null,
                                                        a[t.key + "Name"]
                                                          ? a[t.key + "Name"]
                                                          : "-",
                                                      ),
                                                      n.a.createElement(
                                                        "span",
                                                        {
                                                          className:
                                                            e.props.dispatch(
                                                              b(
                                                                a[
                                                                  t.key +
                                                                    "Outcome"
                                                                ],
                                                                t.isHandicap,
                                                              ),
                                                            ),
                                                        },
                                                        a[t.key + "Outcome"]
                                                          ? a[t.key + "Outcome"]
                                                          : "-",
                                                      ),
                                                    )
                                                  : n.a.createElement(
                                                      "div",
                                                      null,
                                                      n.a.createElement(
                                                        "span",
                                                        {
                                                          className:
                                                            e.props.dispatch(
                                                              b(
                                                                a[t.key] &&
                                                                  a[t.key][0]
                                                                    .outcomename,
                                                                t.isHandicap,
                                                              ),
                                                            ),
                                                        },
                                                        a[t.key] &&
                                                          a[t.key][0]
                                                            .outcomename
                                                          ? a[t.key][0]
                                                              .outcomename
                                                          : "-",
                                                        "  ",
                                                      ),
                                                    ),
                                              ),
                                            )
                                          : n.a.createElement(
                                              "td",
                                              {
                                                key: s,
                                                className: t.isSpecialClass
                                                  ? "noBorder-td"
                                                  : "",
                                              },
                                              n.a.createElement(
                                                "div",
                                                {
                                                  className:
                                                    (t.isSpecialClass
                                                      ? "whiteColumn-bg "
                                                      : "") +
                                                    e.props.dispatch(
                                                      b(
                                                        a[t.key],
                                                        t.isHandicap,
                                                        t.column,
                                                      ),
                                                    ),
                                                },
                                                a[t.key],
                                              ),
                                            );
                                      }),
                                  );
                                }),
                            ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(i.Component);
      var w = Object(m.b)(
          function (e) {
            return {
              homeMarketGroupId: e.bmrecentforms.homeMarketGroupId,
              awayMarketGroupId: e.bmrecentforms.awayMarketGroupId,
              bannerData: e.match.bannerData,
              hiloFilters: e.bmstatistics.hiloFilters,
              seledtedFilter: e.bmstatistics.seledtedFilter,
              cornersFilters: e.bmstatistics.cornersFilters,
              staticKeyWords: e.app.staticKeyWords,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(c.b)({}, e) };
          },
        )(v),
        y = t(19),
        N = t(237),
        H = (function (e) {
          Object(o.a)(t, e);
          var a = Object(r.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.dispatch(Object(y.o)(!1)),
                    this.props.homeTeamId &&
                      this.props.homeTeamId > 0 &&
                      void 0 !== this.props.homeTeamId &&
                      this.props.awayTeamId &&
                      this.props.awayTeamId > 0 &&
                      void 0 !== this.props.awayTeamId &&
                      this.props.eventInfo &&
                      this.props.eventInfo.eventId &&
                      ("" + this.props.eventInfo.eventId).length > 0 &&
                      this.props.dispatch(
                        Object(h.b)(
                          this.props.eventInfo.eventId,
                          this.props.allSeasons && this.props.allSeasons.length
                            ? this.props.allSeasons[0].id
                            : "1",
                          this.props.homeTeamId,
                          this.props.awayTeamId,
                          this.props.eventInfo.competitionId,
                        ),
                      ),
                    this.props.staticKeyWords &&
                      Object.keys(this.props.staticKeyWords) &&
                      this.props.dispatch(
                        Object(h.e)(this.props.staticKeyWords),
                      );
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.props.eventInfo &&
                    this.props.dispatch(
                      Object(y.g)(
                        this.props.languageId,
                        2,
                        this.props.eventInfo.competitionId,
                      ),
                    ),
                    this.props.dispatch(
                      Object(E.i)({ disable: !0, tab: "STATISTICS" }),
                    );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(
                    Object(E.i)({ disable: !1, tab: "STATISTICS" }),
                  );
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  JSON.stringify(this.props.staticKeyWords) !==
                    JSON.stringify(e.staticKeyWords) &&
                    this.props.dispatch(Object(h.e)(e.staticKeyWords)),
                    ((void 0 !== e.homeTeamId &&
                      void 0 !== e.awayTeamId &&
                      this.props.eventInfo.eventId !== e.eventInfo.eventId &&
                      ("" + e.eventInfo.eventId).length > 0) ||
                      (e.homeTeamId &&
                        e.homeTeamId > 0 &&
                        e.awayTeamId &&
                        e.awayTeamId > 0 &&
                        (this.props.homeTeamId !== e.homeTeamId ||
                          this.props.awayTeamId !== e.awayTeamId))) &&
                      this.props.dispatch(
                        Object(h.b)(
                          e.eventInfo.eventId,
                          e.allSeasons && e.allSeasons.length
                            ? e.allSeasons[0].id
                            : "1",
                          e.homeTeamId,
                          e.awayTeamId,
                          e.eventInfo.competitionId,
                        ),
                      );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return n.a.createElement(
                    n.a.Fragment,
                    null,
                    Object.keys(this.props.marketsInfo).length > 0
                      ? n.a.createElement(
                          "div",
                          {
                            className:
                              "pageContent headTo-headHKJC-statistics p-0",
                          },
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.leagueTable,
                              ),
                              n.a.createElement(
                                "div",
                                { className: "sectionFilter" },
                                n.a.createElement(
                                  "div",
                                  { className: "form-group form-inline" },
                                  n.a.createElement(
                                    "div",
                                    { className: "form-control" },
                                    n.a.createElement(
                                      "select",
                                      {
                                        value: this.props.selectedSeasonId,
                                        onChange: function (a) {
                                          return e.props.dispatch(
                                            Object(h.b)(
                                              e.props.match.params.eventId,
                                              a.target.value,
                                              e.props.homeTeamId,
                                              e.props.awayTeamId,
                                              e.props.eventInfo.competitionId,
                                            ),
                                          );
                                        },
                                      },
                                      this.props.allSeasons.map(
                                        function (e, a) {
                                          return n.a.createElement(
                                            "option",
                                            { value: e.id },
                                            e.name,
                                          );
                                        },
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "leagueTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns: this.props.leagueColumns,
                                        data: this.props.marketsInfo.leagueTable
                                          .homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "leagueTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns: this.props.leagueColumns,
                                        data: this.props.marketsInfo.leagueTable
                                          .awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.firstHalfHAD,
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "fhHadTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns: this.props.fhHadColumns,
                                        data: this.props.marketsInfo.fhHadTable
                                          .homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "fhHadTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns: this.props.fhHadColumns,
                                        data: this.props.marketsInfo.fhHadTable
                                          .awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.handicap,
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "handicapTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns: this.props.handicapColumns,
                                        data: this.props.marketsInfo
                                          .handicapTable.homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "handicapTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns: this.props.handicapColumns,
                                        data: this.props.marketsInfo
                                          .handicapTable.awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.handicapHAD,
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "handicapHadTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns: this.props.fhHadColumns,
                                        data: this.props.marketsInfo
                                          .handicapHadTable.homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "handicapHadTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns: this.props.fhHadColumns,
                                        data: this.props.marketsInfo
                                          .handicapHadTable.awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                n.a.createElement(
                                  "span",
                                  null,
                                  this.props.staticKeyWords.hiLo,
                                ),
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "hiLoTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHilo: !0,
                                        isHome: !0,
                                        columns:
                                          this.props.hilpCornersColumns
                                            .subColumns,
                                        mainColumns:
                                          this.props.hilpCornersColumns
                                            .mainColumns,
                                        data: this.props.marketsInfo.hiLoTable
                                          .homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "hiLoTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHilo: !0,
                                        isHome: !1,
                                        columns:
                                          this.props.hilpCornersColumns
                                            .subColumns,
                                        mainColumns:
                                          this.props.hilpCornersColumns
                                            .mainColumns,
                                        data: this.props.marketsInfo.hiLoTable
                                          .awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.cornersHiLo,
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "cornerHiLoTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isCornersHilo: !0,
                                        isHome: !0,
                                        columns: this.props.cornersHiloColumns,
                                        data: this.props.marketsInfo
                                          .cornerHiLoTable.homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "cornerHiLoTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isCornersHilo: !0,
                                        isHome: !1,
                                        columns: this.props.cornersHiloColumns,
                                        data: this.props.marketsInfo
                                          .cornerHiLoTable.awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.odd,
                                " / ",
                                this.props.staticKeyWords.even,
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "oddEvenTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns: this.props.oddEvenColumns,
                                        data: this.props.marketsInfo
                                          .oddEvenTable.homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "oddEvenTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns: this.props.oddEvenColumns,
                                        data: this.props.marketsInfo
                                          .oddEvenTable.awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.firstHalfCorrectScore,
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "firstHalfCorrectScoreTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns:
                                          this.props.fhCorrectScoreColumns,
                                        data: this.props.marketsInfo
                                          .firstHalfCorrectScoreTable.homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "firstHalfCorrectScoreTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns:
                                          this.props.fhCorrectScoreColumns,
                                        data: this.props.marketsInfo
                                          .firstHalfCorrectScoreTable.awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.correctScore,
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "correctScoreTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns:
                                          this.props.fhCorrectScoreColumns,
                                        data: this.props.marketsInfo
                                          .correctScoreTable.homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "correctScoreTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns:
                                          this.props.fhCorrectScoreColumns,
                                        data: this.props.marketsInfo
                                          .correctScoreTable.awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.firstTeamToScore,
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "firstTeamToScoreTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns: this.props.teamToScoreColumns,
                                        data: Object.keys(
                                          this.props.marketsInfo
                                            .firstTeamToScoreTable,
                                        ).length
                                          ? this.props.marketsInfo
                                              .firstTeamToScoreTable.teamToScore
                                              .homeTeam
                                          : "",
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "firstTeamToScoreTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns: this.props.teamToScoreColumns,
                                        data: Object.keys(
                                          this.props.marketsInfo
                                            .firstTeamToScoreTable,
                                        ).length
                                          ? this.props.marketsInfo
                                              .firstTeamToScoreTable.teamToScore
                                              .awayTeam
                                          : "",
                                      }),
                                  ),
                                ),
                              ),
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables pt-0 tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "firstTeamToScoreTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns: this.props.teamToWinColumns,
                                        data: Object.keys(
                                          this.props.marketsInfo
                                            .firstTeamToScoreTable,
                                        ).length
                                          ? this.props.marketsInfo
                                              .firstTeamToScoreTable.scoreFirst
                                              .homeTeam
                                          : "",
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "firstTeamToScoreTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns: this.props.teamToWinColumns,
                                        data: Object.keys(
                                          this.props.marketsInfo
                                            .firstTeamToScoreTable,
                                        ).length
                                          ? this.props.marketsInfo
                                              .firstTeamToScoreTable.scoreFirst
                                              .awayTeam
                                          : "",
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.htft,
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "htFtTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns: this.props.htftColumns,
                                        data: this.props.marketsInfo.htFtTable
                                          .homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "htFtTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns: this.props.htftColumns,
                                        data: this.props.marketsInfo.htFtTable
                                          .awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          n.a.createElement(
                            "div",
                            { className: "graphSection" },
                            n.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              n.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.totalGoals,
                              ),
                            ),
                            n.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "tableTwo-column statisticsTables tableTwo-columntabview",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "tableHome" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "goalsTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !0,
                                        columns: this.props.goalsColumns,
                                        data: this.props.marketsInfo.goalsTable
                                          .homeTeam,
                                      }),
                                  ),
                                ),
                                n.a.createElement(
                                  "div",
                                  { className: "tableAway" },
                                  n.a.createElement(
                                    "div",
                                    { className: "tableFull-width" },
                                    this.props.marketsInfo.hasOwnProperty(
                                      "goalsTable",
                                    ) &&
                                      n.a.createElement(w, {
                                        isStatistics: !0,
                                        isHome: !1,
                                        columns: this.props.goalsColumns,
                                        data: this.props.marketsInfo.goalsTable
                                          .awayTeam,
                                      }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        )
                      : n.a.createElement(N.a, {
                          isLoader: this.props.loader,
                          isNoData:
                            !this.props.loader &&
                            !Object.keys(this.props.marketsInfo).length,
                        }),
                  );
                },
              },
            ]),
            t
          );
        })(i.Component);
      a.default = Object(m.b)(
        function (e) {
          return {
            leagueColumns: e.bmstatistics.leagueColumns,
            fhHadColumns: e.bmstatistics.fhHadColumns,
            handicapColumns: e.bmstatistics.handicapColumns,
            oddEvenColumns: e.bmstatistics.oddEvenColumns,
            teamsToScoreColumns: e.bmstatistics.teamsToScoreColumns,
            htftColumns: e.bmstatistics.htftColumns,
            goalsColumns: e.bmstatistics.goalsColumns,
            fhCorrectScoreColumns: e.bmstatistics.fhCorrectScoreColumns,
            hilpCornersColumns: e.bmstatistics.hilpCornersColumns,
            cornersHiloColumns: e.bmstatistics.cornersHiloColumns,
            teamToScoreColumns: e.bmstatistics.teamToScoreColumns,
            teamToWinColumns: e.bmstatistics.teamToWinColumns,
            marketsInfo: e.bmstatistics.marketsInfo,
            selectedFilter: e.bmstatistics.selectedFilter,
            staticKeyWords: e.app.staticKeyWords,
            loader: e.app.loader,
            allSeasons: e.match.allSeasons,
            selectedSeasonId: e.bmstatistics.selectedSeasonId,
            homeTeamId: e.match.homeTeamId,
            awayTeamId: e.match.awayTeamId,
            eventInfo: e.app.eventInfo,
            languageId: e.app.languageId,
          };
        },
        function (e) {
          return { dispatch: e, actions: Object(c.b)({}, e) };
        },
      )(H);
    },
  },
]);
//# sourceMappingURL=14.7aa74f98.chunk.js.map
