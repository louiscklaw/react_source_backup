(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [12],
  {
    457: function (e, a, t) {
      "use strict";
      var s = t(91),
        o = t(92),
        r = t(94),
        i = t(93),
        n = t(1),
        l = t.n(n),
        m = t(66),
        p = (function (e) {
          Object(r.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              { key: "componentDidMount", value: function () {} },
              { key: "componentDidUpdate", value: function (e, a) {} },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      { className: "dualHilo-graph" },
                      l.a.createElement(
                        "div",
                        { className: "hiLoGraph" },
                        l.a.createElement(
                          "div",
                          { className: "hiLoGraph-header" },
                          l.a.createElement(
                            "div",
                            { className: "mainTitle medium" },
                            this.props.title,
                          ),
                          l.a.createElement(
                            "div",
                            { className: "mainTitle home-text" },
                            this.props.hideTeamNames
                              ? ""
                              : this.props.homeTeamName,
                            " ",
                            this.props.showSubTitle
                              ? l.a.createElement(
                                  "small",
                                  null,
                                  "(",
                                  this.props.staticKeyWords.last8HomeResults,
                                  ")",
                                )
                              : "",
                          ),
                          l.a.createElement("div", null),
                        ),
                        l.a.createElement(
                          "div",
                          { className: "barGraph" },
                          l.a.createElement(
                            "div",
                            { className: "barsContent" },
                            this.props.data &&
                              this.props.data.map(function (e, a) {
                                return l.a.createElement(
                                  l.a.Fragment,
                                  null,
                                  e.homeTeamHigh &&
                                    e.homeTeamLow &&
                                    l.a.createElement(
                                      "div",
                                      { className: "hiLoBar", key: "bar" + a },
                                      l.a.createElement(
                                        "span",
                                        {
                                          className: "awayBar",
                                          style: { flex: e.homeTeamHigh },
                                        },
                                        e.homeTeamHigh > 0
                                          ? e.homeTeamHigh
                                          : "",
                                      ),
                                      l.a.createElement(
                                        "span",
                                        {
                                          className: "homeBar",
                                          style: { flex: e.homeTeamLow },
                                        },
                                        e.homeTeamLow > 0 ? e.homeTeamLow : "",
                                      ),
                                    ),
                                );
                              }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        "div",
                        null,
                        l.a.createElement(
                          "div",
                          { className: "line-title middleLine" },
                          this.props.hideLine
                            ? ""
                            : this.props.staticKeyWords.line,
                        ),
                        l.a.createElement(
                          "div",
                          { className: "hiLoGraph-body" },
                          l.a.createElement(
                            "div",
                            { className: "lineContent" },
                            this.props.data.map(function (e, a) {
                              return l.a.createElement(
                                l.a.Fragment,
                                null,
                                e.homeTeamHigh &&
                                  e.homeTeamLow &&
                                  l.a.createElement(
                                    "span",
                                    { key: "body" + a },
                                    e.line,
                                  ),
                              );
                            }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        "div",
                        { className: "hiLoGraph" },
                        l.a.createElement(
                          "div",
                          { className: "hiLoGraph-header" },
                          l.a.createElement("div", null),
                          l.a.createElement(
                            "div",
                            { className: "mainTitle away-text" },
                            this.props.hideTeamNames
                              ? ""
                              : this.props.awayTeamName,
                            " ",
                            this.props.showSubTitle
                              ? l.a.createElement(
                                  "small",
                                  null,
                                  "(",
                                  this.props.staticKeyWords.last8AwayResults,
                                  ")",
                                )
                              : "",
                          ),
                          l.a.createElement(
                            "div",
                            { className: "legend-info" },
                            this.props.hideLegend
                              ? ""
                              : l.a.createElement(
                                  l.a.Fragment,
                                  null,
                                  l.a.createElement(
                                    "div",
                                    { className: "homeLegend" },
                                    this.props.staticKeyWords.highIcon,
                                  ),
                                  " ",
                                  l.a.createElement(
                                    "div",
                                    { className: "awayLegend" },
                                    this.props.staticKeyWords.lowIcon,
                                  ),
                                ),
                          ),
                        ),
                        l.a.createElement(
                          "div",
                          { className: "barGraph" },
                          l.a.createElement(
                            "div",
                            { className: "barsContent" },
                            this.props.data.map(function (e, a) {
                              return (
                                console.log(e),
                                l.a.createElement(
                                  l.a.Fragment,
                                  null,
                                  e.homeTeamHigh &&
                                    e.homeTeamLow &&
                                    l.a.createElement(
                                      "div",
                                      { key: "hilo" + a, className: "hiLoBar" },
                                      l.a.createElement(
                                        "span",
                                        {
                                          className: "awayBar",
                                          style: { flex: e.awayTeamHigh },
                                        },
                                        e.awayTeamHigh > 0
                                          ? e.awayTeamHigh
                                          : "",
                                      ),
                                      l.a.createElement(
                                        "span",
                                        {
                                          className: "homeBar",
                                          style: { flex: e.awayTeamLow },
                                        },
                                        e.awayTeamLow > 0 ? e.awayTeamLow : "",
                                      ),
                                    ),
                                )
                              );
                            }),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      a.a = Object(m.b)(function (e) {
        return { staticKeyWords: e.app.staticKeyWords };
      })(p);
    },
    462: function (e, a, t) {
      "use strict";
      function s(e) {
        if (null == e) throw new TypeError("Cannot destructure undefined");
      }
      t.d(a, "a", function () {
        return s;
      });
    },
    517: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t(91),
        o = t(92),
        r = t(94),
        i = t(93),
        n = t(1),
        l = t.n(n),
        m = t(22),
        p = t(33),
        c = t(66),
        h = t(460),
        d = t(154),
        u = (t(95), t(462)),
        y = t(7),
        T =
          (t(6),
          t(4),
          t(3),
          Object(y.c)({
            name: "bmsummarytable",
            initialState: {},
            reducers: {},
          }));
      Object(u.a)(T.actions);
      var f = function (e, a, t) {
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
        v = function (e, a, t, s, o, r) {
          return function (i) {
            var n = {};
            if (
              Object.keys(t).length > 0 &&
              (null === s || void 0 === s ? void 0 : s.length)
            ) {
              if (
                ("hilo" == r
                  ? "halfTime" == e && a
                    ? s.forEach(function (e) {
                        t.homehalf == e.line && (n = e);
                      })
                    : "halfTime" != e || a
                      ? "fullTime" == e && a
                        ? s.forEach(function (e) {
                            t.homefull == e.line && (n = e);
                          })
                        : "fullTime" != e ||
                          a ||
                          s.forEach(function (e) {
                            t.awayfull == e.line && (n = e);
                          })
                      : s.forEach(function (e) {
                          t.awayhalf == e.line && (n = e);
                        })
                  : a
                    ? s.forEach(function (e) {
                        t.homecornerfull == e.line && (n = e);
                      })
                    : a ||
                      s.forEach(function (e) {
                        t.awaycornerfull == e.line && (n = e);
                      }),
                Object.keys(n).length)
              ) {
                if ("hilo" === r) return "high" == o ? n.high : n.low;
                if ("high" == o) {
                  var l = null == n.highPct ? 0 : n.highPct;
                  return n.high + " (" + l + "%)";
                }
                var m = null == n.lowPct ? 0 : n.lowPct;
                return n.low + " (" + m + "%)";
              }
              return "-";
            }
          };
        },
        E = function (e, a, t, s, o) {
          return function (r) {
            "cornershilo" == s
              ? a && t == o.fullTime
                ? r(Object(d.d)({ text: "homecornerfull", value: e }))
                : a ||
                  t != o.fullTime ||
                  r(Object(d.d)({ text: "awaycornerfull", value: e }))
              : a && t == o.halfTime
                ? r(Object(d.e)({ text: "homehalf", value: e }))
                : a && t == o.fullTime
                  ? r(Object(d.e)({ text: "homefull", value: e }))
                  : a || t != o.halfTime
                    ? a ||
                      t != o.fullTime ||
                      r(Object(d.e)({ text: "awayfull", value: e }))
                    : r(Object(d.e)({ text: "awayhalf", value: e }));
          };
        },
        b = (T.reducer, t(5)),
        w = (function (e) {
          Object(r.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            var e;
            return (
              Object(s.a)(this, t),
              ((e = a.call(this)).state = {
                defaultFHHiloValue: 1.5,
                defaultHiloValue: 2.5,
                defaultCornersHiloValue: 9.5,
              }),
              e
            );
          }
          return (
            Object(o.a)(t, [
              { key: "componentWillReceiveProps", value: function (e) {} },
              {
                key: "componentWillMount",
                value: function () {
                  this.props.dispatch(Object(b.e)("default"));
                },
              },
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    this.props.isStatistics &&
                      l.a.createElement(
                        "div",
                        {
                          className: this.props.isHome
                            ? "tableHeader-home"
                            : "tableHeader-away",
                        },
                        l.a.createElement(
                          "div",
                          { className: "tableHeading" },
                          this.props.isHome
                            ? this.props.bannerData.homeTeamName
                            : this.props.bannerData.awayTeamName,
                        ),
                      ),
                    l.a.createElement(
                      "table",
                      { className: "tableDefault" },
                      l.a.createElement(
                        "thead",
                        null,
                        this.props.isHilo &&
                          l.a.createElement(
                            l.a.Fragment,
                            null,
                            l.a.createElement(
                              "tr",
                              null,
                              l.a.createElement("th", { rowSpan: "2" }),
                              this.props.mainColumns &&
                                this.props.mainColumns.map(function (a, t) {
                                  return l.a.createElement(
                                    l.a.Fragment,
                                    { key: "summ" + t },
                                    l.a.createElement(
                                      "th",
                                      { colSpan: "2" },
                                      a.column,
                                      l.a.createElement(
                                        "div",
                                        { className: "form-group mt-10" },
                                        l.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          l.a.createElement(
                                            "span",
                                            null,
                                            e.props.staticKeyWords.line,
                                          ),
                                          " ",
                                          l.a.createElement(
                                            "select",
                                            {
                                              onChange: function (t) {
                                                return e.props.dispatch(
                                                  E(
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
                                                ? t ==
                                                  e.state.defaultFHHiloValue
                                                  ? l.a.createElement(
                                                      "option",
                                                      {
                                                        key: s,
                                                        selected: !0,
                                                        value: t,
                                                      },
                                                      t,
                                                    )
                                                  : l.a.createElement(
                                                      "option",
                                                      { key: s, value: t },
                                                      t,
                                                    )
                                                : t == e.state.defaultHiloValue
                                                  ? l.a.createElement(
                                                      "option",
                                                      {
                                                        key: s,
                                                        selected: !0,
                                                        value: t,
                                                      },
                                                      t,
                                                    )
                                                  : l.a.createElement(
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
                                      l.a.createElement("th", {
                                        className: "w-30",
                                        rowSpan: "1",
                                      }),
                                  );
                                }),
                            ),
                            l.a.createElement("tr", null),
                          ),
                        this.props.isCornersHilo &&
                          l.a.createElement(
                            l.a.Fragment,
                            null,
                            l.a.createElement(
                              "tr",
                              null,
                              l.a.createElement("th", { rowSpan: "1" }),
                              l.a.createElement(
                                "th",
                                { colSpan: "3" },
                                l.a.createElement(
                                  "div",
                                  { className: "form-group" },
                                  l.a.createElement(
                                    "div",
                                    { className: "form-control" },
                                    l.a.createElement(
                                      "span",
                                      null,
                                      this.props.staticKeyWords.line,
                                    ),
                                    " ",
                                    l.a.createElement(
                                      "select",
                                      {
                                        onChange: function (a) {
                                          return e.props.dispatch(
                                            E(
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
                                          ? l.a.createElement(
                                              "option",
                                              {
                                                key: t,
                                                selected: !0,
                                                value: a,
                                              },
                                              a,
                                            )
                                          : l.a.createElement(
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
                            l.a.createElement("tr", null),
                          ),
                        l.a.createElement(
                          "tr",
                          null,
                          this.props.columns &&
                            this.props.columns.map(function (e, a) {
                              return l.a.createElement(
                                "th",
                                { className: e.class, key: a },
                                l.a.createElement("div", null, e.column),
                              );
                            }),
                        ),
                      ),
                      l.a.createElement(
                        "tbody",
                        null,
                        this.props.isStatistics
                          ? l.a.createElement(
                              l.a.Fragment,
                              null,
                              this.props.data &&
                                Object.keys(this.props.data).map(
                                  function (a, t) {
                                    return l.a.createElement(
                                      "tr",
                                      { key: t },
                                      l.a.createElement(
                                        "td",
                                        null,
                                        e.props.staticKeyWords[a],
                                      ),
                                      e.props.isHilo &&
                                        Object.keys(e.props.data[a]).map(
                                          function (t, s) {
                                            if ("" != t.key) {
                                              if (e.props.isHilo)
                                                return l.a.createElement(
                                                  l.a.Fragment,
                                                  { key: s },
                                                  l.a.createElement(
                                                    "td",
                                                    null,
                                                    l.a.createElement(
                                                      "div",
                                                      null,
                                                      e.props.dispatch(
                                                        v(
                                                          t,
                                                          e.props.isHome,
                                                          e.props
                                                            .seledtedFilter,
                                                          e.props.data[a][t],
                                                          "high",
                                                          "hilo",
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                  l.a.createElement(
                                                    "td",
                                                    null,
                                                    l.a.createElement(
                                                      "div",
                                                      null,
                                                      e.props.dispatch(
                                                        v(
                                                          t,
                                                          e.props.isHome,
                                                          e.props
                                                            .seledtedFilter,
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
                                                    l.a.createElement(
                                                      "td",
                                                      null,
                                                      l.a.createElement(
                                                        "div",
                                                        null,
                                                      ),
                                                    ),
                                                );
                                              if (e.props.isCornersHilo)
                                                return "";
                                            }
                                          },
                                        ),
                                      e.props.isCornersHilo &&
                                        l.a.createElement(
                                          l.a.Fragment,
                                          { key: t },
                                          l.a.createElement(
                                            "td",
                                            null,
                                            l.a.createElement(
                                              "div",
                                              null,
                                              e.props.dispatch(
                                                v(
                                                  a,
                                                  e.props.isHome,
                                                  e.props.seledtedFilter,
                                                  e.props.data[a],
                                                  "high",
                                                  "cornerHiLo",
                                                ),
                                              ),
                                            ),
                                          ),
                                          l.a.createElement(
                                            "td",
                                            null,
                                            l.a.createElement(
                                              "div",
                                              null,
                                              e.props.dispatch(
                                                v(
                                                  a,
                                                  e.props.isHome,
                                                  e.props.seledtedFilter,
                                                  e.props.data[a],
                                                  "low",
                                                  "cornerHiLo",
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                    );
                                  },
                                ),
                            )
                          : l.a.createElement(
                              l.a.Fragment,
                              null,
                              this.props.data &&
                                this.props.data.map(function (a, t) {
                                  return l.a.createElement(
                                    "tr",
                                    { key: t },
                                    e.props.columns &&
                                      e.props.columns.map(function (t, s) {
                                        return t.isDiff
                                          ? l.a.createElement(
                                              "td",
                                              { key: s },
                                              l.a.createElement(
                                                "div",
                                                null,
                                                t.isHandicap
                                                  ? l.a.createElement(
                                                      "div",
                                                      { class: "textIcon" },
                                                      l.a.createElement(
                                                        "span",
                                                        null,
                                                        a[t.key + "Name"]
                                                          ? a[t.key + "Name"]
                                                          : "-",
                                                      ),
                                                      l.a.createElement(
                                                        "span",
                                                        {
                                                          className:
                                                            e.props.dispatch(
                                                              f(
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
                                                  : l.a.createElement(
                                                      "div",
                                                      null,
                                                      l.a.createElement(
                                                        "span",
                                                        {
                                                          className:
                                                            e.props.dispatch(
                                                              f(
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
                                          : l.a.createElement(
                                              "td",
                                              {
                                                key: s,
                                                className: t.isSpecialClass
                                                  ? "noBorder-td"
                                                  : "",
                                              },
                                              l.a.createElement(
                                                "div",
                                                {
                                                  className:
                                                    (t.isSpecialClass
                                                      ? "whiteColumn-bg "
                                                      : "") +
                                                    e.props.dispatch(
                                                      f(
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
        })(n.Component);
      var g = Object(c.b)(
          function (e) {
            return {
              homeMarketGroupId: e.bmrecentforms.homeMarketGroupId,
              awayMarketGroupId: e.bmrecentforms.awayMarketGroupId,
              bannerData: e.match.bannerData,
              hiloFilters: e.summary.hiloFilters,
              seledtedFilter: e.summary.seledtedFilter,
              cornersFilters: e.summary.cornersFilters,
              staticKeyWords: e.app.staticKeyWords,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(w),
        H = t(457),
        I = (function (e) {
          Object(r.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "graphSection" },
                    l.a.createElement(
                      "div",
                      { className: "sectionHeading" },
                      l.a.createElement("div", {
                        className: "sectionTitle",
                        dangerouslySetInnerHTML: { __html: this.props.heading },
                      }),
                    ),
                    l.a.createElement(
                      "div",
                      { className: "graphContainer" },
                      l.a.createElement(
                        "div",
                        { className: "graphContent" },
                        l.a.createElement(
                          "div",
                          { className: "hiloGraphtables" },
                          l.a.createElement(H.a, {
                            data: this.props.graphData,
                            homeTeamName: this.props.homeTeamName,
                            awayTeamName: this.props.awayTeamName,
                            title:
                              this.props.secondGraphData &&
                              this.props.secondGraphData.length > 0
                                ? this.props.staticKeyWords.fullTime
                                : "",
                            showSubTitle: !0,
                          }),
                          this.props.secondGraphData &&
                            this.props.secondGraphData.length > 0
                            ? l.a.createElement(H.a, {
                                data: this.props.secondGraphData,
                                homeTeamName: this.props.homeTeamName,
                                awayTeamName: this.props.awayTeamName,
                                title: this.props.staticKeyWords.halfTime,
                                hideTeamNames: !0,
                                hideLine: !0,
                                hideLegend: !0,
                                showSubTitle: !1,
                              })
                            : "",
                          l.a.createElement(
                            "div",
                            { className: "dualHilo-table" },
                            l.a.createElement("hr", null),
                            l.a.createElement(
                              "div",
                              { className: "heading medium" },
                              this.props.staticKeyWords.seasonSummary,
                            ),
                            this.props.isHilo
                              ? l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "tableTwo-column statisticsTables p-0",
                                  },
                                  l.a.createElement(
                                    "div",
                                    { className: "tableHome" },
                                    l.a.createElement(
                                      "div",
                                      { className: "tableFull-width" },
                                      this.props.tableData &&
                                        this.props.tableData.homeTeam
                                        ? l.a.createElement(g, {
                                            isStatistics: !0,
                                            isHilo: this.props.isHilo,
                                            isHome: !0,
                                            columns:
                                              this.props.hiloCornersColumns
                                                .subColumns,
                                            mainColumns:
                                              this.props.hiloCornersColumns
                                                .mainColumns,
                                            data: this.props.tableData.homeTeam,
                                          })
                                        : "",
                                    ),
                                  ),
                                  l.a.createElement(
                                    "div",
                                    { className: "tableAway" },
                                    l.a.createElement(
                                      "div",
                                      { className: "tableFull-width" },
                                      this.props.tableData &&
                                        this.props.tableData.awayTeam
                                        ? l.a.createElement(g, {
                                            isStatistics: !0,
                                            isHilo: this.props.isHilo,
                                            isHome: !1,
                                            columns:
                                              this.props.hiloCornersColumns
                                                .subColumns,
                                            mainColumns:
                                              this.props.hiloCornersColumns
                                                .mainColumns,
                                            data: this.props.tableData.awayTeam,
                                          })
                                        : "",
                                    ),
                                  ),
                                )
                              : this.props.isCornersHilo
                                ? l.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "tableTwo-column statisticsTables p-0",
                                    },
                                    l.a.createElement(
                                      "div",
                                      { className: "tableHome" },
                                      l.a.createElement(
                                        "div",
                                        { className: "tableFull-width" },
                                        this.props.tableData &&
                                          this.props.tableData.homeTeam
                                          ? l.a.createElement(g, {
                                              isStatistics: !0,
                                              isCornersHilo:
                                                this.props.isCornersHilo,
                                              isHome: !0,
                                              columns:
                                                this.props.cornersHiloColumns,
                                              data: this.props.tableData
                                                .homeTeam,
                                            })
                                          : "",
                                      ),
                                    ),
                                    l.a.createElement(
                                      "div",
                                      { className: "tableAway" },
                                      l.a.createElement(
                                        "div",
                                        { className: "tableFull-width" },
                                        this.props.tableData &&
                                          this.props.tableData.awayTeam
                                          ? l.a.createElement(g, {
                                              isStatistics: !0,
                                              isCornersHilo:
                                                this.props.isCornersHilo,
                                              isHome: !1,
                                              columns:
                                                this.props.cornersHiloColumns,
                                              data: this.props.tableData
                                                .awayTeam,
                                            })
                                          : "",
                                      ),
                                    ),
                                  )
                                : "",
                          ),
                        ),
                      ),
                      l.a.createElement("div", null),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      var N = Object(c.b)(
          function (e) {
            return {
              homeTeamName: e.match.homeTeamName,
              awayTeamName: e.match.awayTeamName,
              staticKeyWords: e.app.staticKeyWords,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(I),
        C = t(473),
        L = t(19),
        D = t(472),
        k = t(152),
        O = (function (e) {
          Object(r.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.dispatch(Object(L.o)(!1)),
                    this.props.eventInfo &&
                      this.props.eventInfo.eventId &&
                      this.props.eventInfo.eventId,
                    this.props.homeTeamId &&
                      this.props.homeTeamId > 0 &&
                      this.props.awayTeamId &&
                      this.props.awayTeamId > 0 &&
                      this.props.eventInfo &&
                      this.props.eventInfo.eventId &&
                      ("" + this.props.eventInfo.eventId).length > 0 &&
                      this.props.dispatch(
                        Object(d.c)(
                          this.props.eventInfo.eventId,
                          this.props.languageId,
                          this.props.homeTeamId,
                          this.props.awayTeamId,
                          this.props.eventInfo.competitionId,
                        ),
                      ),
                    this.props.homeTeamId &&
                      this.props.homeTeamId > 0 &&
                      this.props.awayTeamId &&
                      this.props.awayTeamId > 0 &&
                      this.props.dispatch(
                        Object(d.b)(
                          this.props.homeTeamId,
                          this.props.awayTeamId,
                          this.props.languageId,
                          this.props.eventInfo.competitionId,
                        ),
                      ),
                    this.props.eventInfo.eventId &&
                      "" + this.props.eventInfo.eventId.length > 0 &&
                      this.props.dispatch(
                        Object(k.b)(
                          this.props.eventInfo.eventId,
                          this.props.languageId,
                        ),
                      ),
                    this.props.staticKeyWords &&
                      Object.keys(this.props.staticKeyWords).length > 0 &&
                      this.props.dispatch(
                        Object(d.f)(this.props.staticKeyWords),
                      ),
                    this.props.dispatch(Object(b.e)("default"));
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  e.homeTeamId &&
                    e.homeTeamId > 0 &&
                    e.awayTeamId &&
                    e.awayTeamId > 0 &&
                    ((this.props.homeTeamId === e.homeTeamId &&
                      this.props.awayTeamId === e.awayTeamId) ||
                      this.props.dispatch(
                        Object(d.b)(
                          e.homeTeamId,
                          e.awayTeamId,
                          this.props.languageId,
                          e.eventInfo.competitionId,
                        ),
                      )),
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
                        Object(d.c)(
                          e.eventInfo.eventId,
                          e.languageId,
                          e.homeTeamId,
                          e.awayTeamId,
                          e.eventInfo.competitionId,
                        ),
                      ),
                    this.props.eventInfo.eventId !== e.eventInfo.eventId &&
                      e.eventInfo.eventId > 0 &&
                      this.props.dispatch(
                        Object(k.b)(e.eventInfo.eventId, e.languageId),
                      ),
                    e.staticKeyWords &&
                      Object.keys(e.staticKeyWords).length > 0 &&
                      JSON.stringify(this.props.staticKeyWords) !==
                        JSON.stringify(e.staticKeyWords) &&
                      this.props.dispatch(Object(d.f)(e.staticKeyWords));
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.props.dispatch(
                    Object(b.i)({ disable: !0, tab: "SUMMARY" }),
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(
                    Object(b.i)({ disable: !1, tab: "SUMMARY" }),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "pageContent headTo-headHKJC" },
                    l.a.createElement(
                      "div",
                      { className: "tableTwo-column tableTwo-column" },
                      this.props.last8Results &&
                        this.props.last8Results.homeTeam
                        ? l.a.createElement(C.a, {
                            isHome: !0,
                            title: this.props.homeTeamName,
                            subTitle:
                              this.props.staticKeyWords.last8HomeResultsLFL,
                            data: this.props.last8Results.homeTeam,
                          })
                        : "",
                      this.props.last8Results &&
                        this.props.last8Results.awayTeam
                        ? l.a.createElement(C.a, {
                            isHome: !1,
                            title: this.props.awayTeamName,
                            subTitle:
                              this.props.staticKeyWords.last8AwayResultsLFL,
                            data: this.props.last8Results.awayTeam,
                          })
                        : "",
                    ),
                    l.a.createElement(
                      "div",
                      { className: "graphSection" },
                      l.a.createElement(
                        "div",
                        null,
                        l.a.createElement(m.a, {
                          render: function (e) {
                            return l.a.createElement(
                              D.default,
                              Object.assign({}, e, {
                                isBasic: !0,
                                hidetabs: !0,
                                hideOptions: !0,
                                pagename: "summary",
                              }),
                            );
                          },
                        }),
                      ),
                    ),
                    this.props.hiLoTablesData &&
                      l.a.createElement(N, {
                        heading: "<span>".concat(
                          this.props.staticKeyWords.hiLo,
                          "</span>",
                        ),
                        graphData: this.props.hiLoGraphData,
                        secondGraphData: this.props.fhHiLoGraphData,
                        hiloCornersColumns: this.props.hiloCornersColumns,
                        isHilo: !0,
                        tableData: this.props.hiLoTablesData,
                      }),
                    this.props.cornorsHiLoTablesData &&
                      l.a.createElement(N, {
                        heading: this.props.staticKeyWords.cornersHiLo,
                        graphData: this.props.cornorsHiLoGraphData,
                        isCornersHilo: !0,
                        cornersHiloColumns: this.props.cornersHiloColumns,
                        tableData: this.props.cornorsHiLoTablesData,
                      }),
                    this.props.goalScoringTimesData &&
                      l.a.createElement(
                        "div",
                        { className: "graphSection" },
                        l.a.createElement(
                          "div",
                          { className: "sectionHeading" },
                          l.a.createElement(
                            "div",
                            { className: "sectionTitle" },
                            this.props.staticKeyWords.goalScoringTimeAnalysis,
                          ),
                        ),
                        l.a.createElement(
                          "div",
                          { className: "graphContainer" },
                          l.a.createElement(
                            "div",
                            { className: "graphContent" },
                            l.a.createElement(
                              "div",
                              { className: "singleCentered-graph" },
                              l.a.createElement(h.a, {
                                data: this.props.goalScoringTimesData,
                                showLine: !1,
                                homeTeamName: this.props.homeTeamName,
                                awayTeamName: this.props.awayTeamName,
                                loadin: "goalstime",
                                showTable: !0,
                                staticKeyWords: this.props.staticKeyWords,
                                width: "710px",
                                isSummaryGT: !0,
                              }),
                            ),
                          ),
                        ),
                      ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      a.default = Object(c.b)(
        function (e) {
          return {
            h2hLastResultsTableData: e.summary.h2hLastResultsTableData,
            homeTeamName: e.match.homeTeamName,
            awayTeamName: e.match.awayTeamName,
            homeTeamId: e.match.homeTeamId,
            awayTeamId: e.match.awayTeamId,
            hadGraphData: e.summary.hadGraphData,
            goalsPerGame: e.summary.goalsPerGame,
            fhHiLoGraphData: e.summary.fhHiLoGraphData,
            fhHiLoTablesData: e.summary.fhHiLoTablesData,
            hiLoGraphData: e.summary.hiLoGraphData,
            hiLoTablesData: e.summary.hiLoTablesData,
            cornorsHiLoGraphData: e.summary.cornorsHiLoGraphData,
            cornorsHiLoTablesData: e.summary.cornorsHiLoTablesData,
            goalScoringTimesData: e.summary.goalScoringTimesData,
            last8Results: e.summary.last8Results,
            staticKeyWords: e.app.staticKeyWords,
            languageId: e.app.languageId,
            eventInfo: e.app.eventInfo,
            hiloCornersColumns: e.summary.hiloCornersColumns,
            cornersHiloColumns: e.summary.cornersHiloColumns,
          };
        },
        function (e) {
          return { dispatch: e, actions: Object(p.b)({}, e) };
        },
      )(O);
    },
  },
]);
//# sourceMappingURL=12.f1345b66.chunk.js.map
