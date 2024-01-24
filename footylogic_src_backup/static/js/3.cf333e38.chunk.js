(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [3],
  {
    455: function (e, a, t) {
      "use strict";
      var s = t(91),
        r = t(92),
        o = t(94),
        i = t(93),
        n = t(1),
        p = t.n(n),
        l = (function (e) {
          Object(o.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(r.a)(t, [
              {
                key: "render",
                value: function () {
                  return 0 === Number(this.props.home) ||
                    0 === Number(this.props.away)
                    ? p.a.createElement("div", null)
                    : p.a.createElement(
                        "div",
                        { className: "goalsperGame-graph" },
                        p.a.createElement(
                          "div",
                          { className: "goalsperGame-content" },
                          p.a.createElement(
                            "div",
                            { className: "homeGoals-data" },
                            p.a.createElement(
                              "div",
                              {
                                className: "homeGoals-circle",
                                style: {
                                  width:
                                    50 +
                                    20 * (Number(this.props.home) - 0.1) +
                                    "px",
                                  height:
                                    50 +
                                    20 * (Number(this.props.home) - 0.1) +
                                    "px",
                                  fontSize:
                                    1.25 +
                                    0.5 * (Number(this.props.home) - 0.1) +
                                    "em",
                                },
                              },
                              this.props.home,
                            ),
                            p.a.createElement(
                              "div",
                              { className: "home-text" },
                              this.props.homeTeamName,
                            ),
                          ),
                          p.a.createElement("div", {
                            className: "graphTitle",
                            dangerouslySetInnerHTML: {
                              __html: this.props.title,
                            },
                          }),
                          p.a.createElement(
                            "div",
                            { className: "awayGoals-data" },
                            p.a.createElement(
                              "div",
                              {
                                className: "awayGoals-circle",
                                style: {
                                  width:
                                    50 +
                                    20 * (Number(this.props.away) - 0.1) +
                                    "px",
                                  height:
                                    50 +
                                    20 * (Number(this.props.away) - 0.1) +
                                    "px",
                                  fontSize:
                                    1.25 +
                                    0.5 * (Number(this.props.away) - 0.1) +
                                    "em",
                                },
                              },
                              this.props.away,
                            ),
                            p.a.createElement(
                              "div",
                              { className: "away-text" },
                              this.props.awayTeamName,
                            ),
                          ),
                        ),
                        p.a.createElement("div", {
                          className: "goalsperGame-teamNames",
                        }),
                      );
                },
              },
            ]),
            t
          );
        })(n.Component);
      a.a = l;
    },
    456: function (e, a, t) {
      "use strict";
      var s = t(0),
        r = t(25),
        o = t(91),
        i = t(92),
        n = t(94),
        p = t(93),
        l = t(1),
        c = t.n(l),
        h = t(454),
        d = (function (e) {
          Object(n.a)(t, e);
          var a = Object(p.a)(t);
          function t() {
            return Object(o.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isDirect
                    ? this.props.data &&
                      Object.keys(this.props.data).length > 0 &&
                      this.loadGraph()
                    : this.props.data &&
                      this.props.data.length > 0 &&
                      this.loadGraph();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, a) {
                  this.props.isDirect
                    ? (JSON.stringify(e.data) !==
                        JSON.stringify(this.props.data) ||
                        e.loadin !== this.props.loadin) &&
                      Object.keys(this.props.data).length > 0 &&
                      this.loadGraph()
                    : (JSON.stringify(e.data) !==
                        JSON.stringify(this.props.data) ||
                        e.loadin !== this.props.loadin) &&
                      this.props.data.length > 0 &&
                      this.loadGraph();
                },
              },
              {
                key: "loadGraph",
                value: function () {
                  var e,
                    a = [],
                    t = [],
                    o = [];
                  if (this.props.isDirect)
                    (a = this.props.data.labels),
                      (t = this.props.data.homeTeam),
                      (o = this.props.data.awayTeam);
                  else if (this.props.data && this.props.data.length > 0) {
                    var i,
                      n = Object(r.a)(this.props.data);
                    try {
                      for (n.s(); !(i = n.n()).done; ) {
                        var p = i.value;
                        a.push(p.outcomeName),
                          t.push(p.homeGoals),
                          o.push(p.awayGoals);
                      }
                    } catch (c) {
                      n.e(c);
                    } finally {
                      n.f();
                    }
                  }
                  var l = this;
                  h.a.chart(
                    this.props.loadin,
                    ((e = {
                      chart: {
                        type: this.props.iscolumn ? "column" : "bar",
                        backgroundColor: "rgba(255, 255, 255, 0.0)",
                      },
                      title: {
                        text: this.props.title,
                        style: { color: "#FFF" },
                      },
                      xAxis: {
                        gridLineWidth: 0,
                        categories: a,
                        lineWidth: 0,
                        labels: {
                          style: {
                            color: "#FFF",
                            fontSize: "14px",
                            textTransform: "uppercase",
                          },
                        },
                      },
                      yAxis: {
                        title: { text: "" },
                        gridLineWidth: 0,
                        min: 0,
                        max: null,
                        labels: { enabled: !1 },
                      },
                      tooltip: { enable: !1 },
                      legend: {
                        enabled: !!this.props.isLegend && this.props.isLegend,
                        verticalAlign: "top",
                        itemStyle: { fontSize: "14px" },
                        labelFormatter: function () {
                          return "home" === this.name
                            ? '<span style="color:#FFF;font-weight:normal">' +
                                l.props.homeLegend +
                                "</span>"
                            : '<span style="color:#FFF;font-weight:normal">' +
                                l.props.awayLegend +
                                "</span>";
                        },
                      },
                      credits: { enabled: !1 },
                      colors: ["#28d0ce", "#e47273"],
                      plotOptions: {
                        bar: { minPointLength: 3 },
                        column: { minPointLength: 3 },
                        series: {
                          dataLabels: {
                            enabled: !0,
                            color: "#FFFFFF",
                            textAlign: "left",
                            crop: !1,
                            overflow: "none",
                            allowOverlap: !0,
                            style: { fontSize: "12px", fontWeight: "normal" },
                          },
                          enableMouseTracking: !1,
                          borderWidth: 0,
                          borderRadiusTopLeft: this.props.noradious
                            ? "0"
                            : "50%",
                          borderRadiusTopRight: this.props.noradious
                            ? "0"
                            : "50%",
                        },
                      },
                    }),
                    Object(s.a)(e, "credits", { enabled: !1 }),
                    Object(s.a)(e, "series", [
                      { name: "home", data: t },
                      { name: "away", data: o },
                    ]),
                    e),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return c.a.createElement("div", {
                    id: this.props.loadin,
                    className:
                      this.props.addClass && this.props.addClass.length > 0
                        ? this.props.addClass
                        : "",
                    style: {
                      width: this.props.graphWidth,
                      height: this.props.graphHeight,
                    },
                  });
                },
              },
            ]),
            t
          );
        })(l.Component);
      a.a = d;
    },
    457: function (e, a, t) {
      "use strict";
      var s = t(91),
        r = t(92),
        o = t(94),
        i = t(93),
        n = t(1),
        p = t.n(n),
        l = t(66),
        c = (function (e) {
          Object(o.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(r.a)(t, [
              { key: "componentDidMount", value: function () {} },
              { key: "componentDidUpdate", value: function (e, a) {} },
              {
                key: "render",
                value: function () {
                  return p.a.createElement(
                    p.a.Fragment,
                    null,
                    p.a.createElement(
                      "div",
                      { className: "dualHilo-graph" },
                      p.a.createElement(
                        "div",
                        { className: "hiLoGraph" },
                        p.a.createElement(
                          "div",
                          { className: "hiLoGraph-header" },
                          p.a.createElement(
                            "div",
                            { className: "mainTitle medium" },
                            this.props.title,
                          ),
                          p.a.createElement(
                            "div",
                            { className: "mainTitle home-text" },
                            this.props.hideTeamNames
                              ? ""
                              : this.props.homeTeamName,
                            " ",
                            this.props.showSubTitle
                              ? p.a.createElement(
                                  "small",
                                  null,
                                  "(",
                                  this.props.staticKeyWords.last8HomeResults,
                                  ")",
                                )
                              : "",
                          ),
                          p.a.createElement("div", null),
                        ),
                        p.a.createElement(
                          "div",
                          { className: "barGraph" },
                          p.a.createElement(
                            "div",
                            { className: "barsContent" },
                            this.props.data &&
                              this.props.data.map(function (e, a) {
                                return p.a.createElement(
                                  p.a.Fragment,
                                  null,
                                  e.homeTeamHigh &&
                                    e.homeTeamLow &&
                                    p.a.createElement(
                                      "div",
                                      { className: "hiLoBar", key: "bar" + a },
                                      p.a.createElement(
                                        "span",
                                        {
                                          className: "awayBar",
                                          style: { flex: e.homeTeamHigh },
                                        },
                                        e.homeTeamHigh > 0
                                          ? e.homeTeamHigh
                                          : "",
                                      ),
                                      p.a.createElement(
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
                      p.a.createElement(
                        "div",
                        null,
                        p.a.createElement(
                          "div",
                          { className: "line-title middleLine" },
                          this.props.hideLine
                            ? ""
                            : this.props.staticKeyWords.line,
                        ),
                        p.a.createElement(
                          "div",
                          { className: "hiLoGraph-body" },
                          p.a.createElement(
                            "div",
                            { className: "lineContent" },
                            this.props.data.map(function (e, a) {
                              return p.a.createElement(
                                p.a.Fragment,
                                null,
                                e.homeTeamHigh &&
                                  e.homeTeamLow &&
                                  p.a.createElement(
                                    "span",
                                    { key: "body" + a },
                                    e.line,
                                  ),
                              );
                            }),
                          ),
                        ),
                      ),
                      p.a.createElement(
                        "div",
                        { className: "hiLoGraph" },
                        p.a.createElement(
                          "div",
                          { className: "hiLoGraph-header" },
                          p.a.createElement("div", null),
                          p.a.createElement(
                            "div",
                            { className: "mainTitle away-text" },
                            this.props.hideTeamNames
                              ? ""
                              : this.props.awayTeamName,
                            " ",
                            this.props.showSubTitle
                              ? p.a.createElement(
                                  "small",
                                  null,
                                  "(",
                                  this.props.staticKeyWords.last8AwayResults,
                                  ")",
                                )
                              : "",
                          ),
                          p.a.createElement(
                            "div",
                            { className: "legend-info" },
                            this.props.hideLegend
                              ? ""
                              : p.a.createElement(
                                  p.a.Fragment,
                                  null,
                                  p.a.createElement(
                                    "div",
                                    { className: "homeLegend" },
                                    this.props.staticKeyWords.highIcon,
                                  ),
                                  " ",
                                  p.a.createElement(
                                    "div",
                                    { className: "awayLegend" },
                                    this.props.staticKeyWords.lowIcon,
                                  ),
                                ),
                          ),
                        ),
                        p.a.createElement(
                          "div",
                          { className: "barGraph" },
                          p.a.createElement(
                            "div",
                            { className: "barsContent" },
                            this.props.data.map(function (e, a) {
                              return (
                                console.log(e),
                                p.a.createElement(
                                  p.a.Fragment,
                                  null,
                                  e.homeTeamHigh &&
                                    e.homeTeamLow &&
                                    p.a.createElement(
                                      "div",
                                      { key: "hilo" + a, className: "hiLoBar" },
                                      p.a.createElement(
                                        "span",
                                        {
                                          className: "awayBar",
                                          style: { flex: e.awayTeamHigh },
                                        },
                                        e.awayTeamHigh > 0
                                          ? e.awayTeamHigh
                                          : "",
                                      ),
                                      p.a.createElement(
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
      a.a = Object(l.b)(function (e) {
        return { staticKeyWords: e.app.staticKeyWords };
      })(c);
    },
    458: function (e, a, t) {
      "use strict";
      var s = t(91),
        r = t(92),
        o = t(94),
        i = t(93),
        n = t(1),
        p = t.n(n),
        l = t(33),
        c = t(66),
        h = t(237),
        d = t(19),
        m = t(21),
        u =
          (t(51),
          (function (e) {
            Object(o.a)(t, e);
            var a = Object(i.a)(t);
            function t(e) {
              var r;
              return (
                Object(s.a)(this, t),
                ((r = a.call(this, e)).state = {
                  rowsToShow: 20,
                  totalRows: 0,
                }),
                r
              );
            }
            return (
              Object(r.a)(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.props.standingsTableData &&
                      this.props.standingsTableData.length &&
                      this.props.isViewAll &&
                      (this.setState({
                        totalRows: this.props.standingsTableData.length,
                      }),
                      this.setState({ rowsToShow: 20 }));
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.props.standingsTableData &&
                      e.standingsTableData &&
                      this.props.standingsTableData.length !==
                        e.standingsTableData.length &&
                      this.setState({
                        totalRows: this.props.standingsTableData.length,
                      }),
                      this.props.dispatch(Object(d.j)("seasonalstats")) &&
                        1 == this.props.selectedTable.tableId &&
                        this.props.dispatch(Object(m.h)("statistics"));
                  },
                },
                {
                  key: "rowNavigation",
                  value: function (e) {
                    this.props.dispatch(Object(m.h)("fixturesresults")),
                      this.props.history.push(e);
                  },
                },
                {
                  key: "handleShowMore",
                  value: function () {
                    var e = this.state.rowsToShow,
                      a = this.state.totalRows;
                    e < a
                      ? this.setState({ rowsToShow: a })
                      : this.setState({ rowsToShow: 20 });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return p.a.createElement(
                      "table",
                      {
                        className:
                          "tableDefault" +
                          (this.props.isWhiteBG ? "" : " tableSeasonal-stats"),
                      },
                      p.a.createElement(
                        "thead",
                        null,
                        p.a.createElement(
                          "tr",
                          null,
                          this.props.standingColumns.map(function (a, t) {
                            if (a.isHeaderImg)
                              return p.a.createElement(
                                "th",
                                { key: "gp" + t, className: a.className },
                                p.a.createElement("img", {
                                  src: a.column,
                                  alt: "graph",
                                }),
                              );
                            if (
                              "statistics" === e.props.selectedButton &&
                              1 == e.props.selectedTable.tableId &&
                              1 == e.props.selectedBetTypeFilter &&
                              a.column == e.props.staticKeyWords.pts
                            );
                            else if (
                              "statistics" !== e.props.selectedButton ||
                              1 != e.props.selectedTable.tableId ||
                              2 != e.props.selectedBetTypeFilter ||
                              0 != e.props.isPoints ||
                              a.column != e.props.staticKeyWords.pts
                            )
                              return p.a.createElement(
                                "th",
                                { key: "gc" + t, className: a.className },
                                a.column,
                              );
                          }),
                        ),
                      ),
                      p.a.createElement(
                        "tbody",
                        null,
                        this.props.standingsTableData.length
                          ? this.props.standingsTableData.map(function (a, t) {
                              if (t < e.state.rowsToShow || !e.props.isViewAll)
                                return p.a.createElement(
                                  p.a.Fragment,
                                  null,
                                  p.a.createElement(
                                    "tr",
                                    {
                                      key: "tm" + t,
                                      className: e.props.isTournament
                                        ? "team" == e.props.type &&
                                          e.props.teamId == a.teamId
                                          ? "neutral"
                                          : ""
                                        : e.props.homeTeamId == a.teamId
                                          ? "homeBg"
                                          : e.props.awayTeamId == a.teamId
                                            ? "awayBg"
                                            : "",
                                      onClick:
                                        "null" !== a[e.props.paramKey] &&
                                        e.props.isRowClick
                                          ? e.rowNavigation.bind(
                                              e,
                                              e.props.rowNavigation
                                                ? e.props.rowNavigation.replace(
                                                    "[:id]",
                                                    a[e.props.paramKey],
                                                  )
                                                : "",
                                            )
                                          : "",
                                    },
                                    e.props.standingColumns.map(
                                      function (s, r) {
                                        if (s.isSplit)
                                          return p.a.createElement(
                                            "td",
                                            { key: r, className: "formStatus" },
                                            p.a.createElement(
                                              "div",
                                              { className: "team-lastForm" },
                                              a[s.key] &&
                                                a[s.key]
                                                  .split(",")
                                                  .map(function (a, t) {
                                                    return p.a.createElement(
                                                      "span",
                                                      {
                                                        key: t,
                                                        className:
                                                          "status" +
                                                          ("W" === a
                                                            ? " win"
                                                            : "D" === a
                                                              ? " draw"
                                                              : " loss"),
                                                      },
                                                      e.props.staticKeyWords[
                                                        a.toLowerCase()
                                                      ],
                                                    );
                                                  }),
                                            ),
                                          );
                                        if (s.showImg)
                                          return p.a.createElement(
                                            "td",
                                            {
                                              key: "tim" + r,
                                              className: "text-left",
                                            },
                                            a[s.imgKey]
                                              ? p.a.createElement("img", {
                                                  class: "player-pic",
                                                  src: a[s.imgKey],
                                                  alt: "player",
                                                })
                                              : "",
                                            a[s.key],
                                          );
                                        if (s.isTopScorer) {
                                          if (t >= 10)
                                            return p.a.createElement(
                                              "td",
                                              {
                                                key: "ts" + r,
                                                className: s.className,
                                              },
                                              p.a.createElement(
                                                "div",
                                                null,
                                                "" !== a[s.key] &&
                                                  0 !== a[s.key]
                                                  ? a[s.key]
                                                  : 0,
                                              ),
                                            );
                                        } else if (
                                          "statistics" ===
                                            e.props.selectedButton &&
                                          1 == e.props.selectedTable.tableId &&
                                          1 == e.props.selectedBetTypeFilter &&
                                          "teamPoints" == s.key
                                        );
                                        else if (
                                          "statistics" !==
                                            e.props.selectedButton ||
                                          1 != e.props.selectedTable.tableId ||
                                          2 != e.props.selectedBetTypeFilter ||
                                          0 != e.props.isPoints ||
                                          "teamPoints" != s.key
                                        )
                                          return 5 ===
                                            e.props.selectedTable.tableId ||
                                            9 ===
                                              e.props.selectedTable.tableId ||
                                            11 === e.props.selectedTable.tableId
                                            ? p.a.createElement(
                                                p.a.Fragment,
                                                null,
                                                " ",
                                                "null" !== a.teamId
                                                  ? p.a.createElement(
                                                      "td",
                                                      {
                                                        key: "tp" + r,
                                                        className:
                                                          "teamName" == s.key
                                                            ? "team teamSpacing"
                                                            : "",
                                                        "data-href": "true",
                                                      },
                                                      p.a.createElement(
                                                        "div",
                                                        null,
                                                        "" !== a[s.key] &&
                                                          0 !== a[s.key]
                                                          ? a[s.key]
                                                          : 0,
                                                      ),
                                                    )
                                                  : p.a.createElement(
                                                      "td",
                                                      {
                                                        key: "tp" + r,
                                                        className:
                                                          "teamName" == s.key
                                                            ? "team teamSpacing"
                                                            : "",
                                                      },
                                                      p.a.createElement(
                                                        "div",
                                                        null,
                                                        "" !== a[s.key] &&
                                                          0 !== a[s.key]
                                                          ? a[s.key]
                                                          : 0,
                                                      ),
                                                    ),
                                              )
                                            : p.a.createElement(
                                                p.a.Fragment,
                                                null,
                                                "null" !== a.teamId
                                                  ? p.a.createElement(
                                                      "td",
                                                      {
                                                        key: "tp" + r,
                                                        className:
                                                          "teamName" == s.key
                                                            ? "team "
                                                            : "",
                                                        "data-href": "true",
                                                      },
                                                      p.a.createElement(
                                                        "div",
                                                        null,
                                                        "" !== a[s.key] &&
                                                          0 !== a[s.key]
                                                          ? a[s.key]
                                                          : 0,
                                                      ),
                                                    )
                                                  : p.a.createElement(
                                                      "td",
                                                      {
                                                        key: "tp" + r,
                                                        className:
                                                          "teamName" == s.key
                                                            ? "team "
                                                            : "",
                                                      },
                                                      p.a.createElement(
                                                        "div",
                                                        null,
                                                        "" !== a[s.key] &&
                                                          0 !== a[s.key]
                                                          ? a[s.key]
                                                          : 0,
                                                      ),
                                                    ),
                                              );
                                      },
                                    ),
                                  ),
                                  0 != e.props.splitIndex &&
                                    e.props.splitIndex === t + 1 &&
                                    p.a.createElement(
                                      "tr",
                                      null,
                                      p.a.createElement("td", {
                                        colspan: "12",
                                        class: "vertical-line",
                                      }),
                                    ),
                                );
                            })
                          : p.a.createElement(
                              "tr",
                              null,
                              p.a.createElement(
                                "td",
                                { colSpan: this.props.standingColumns.length },
                                p.a.createElement(h.a, {
                                  isLoader: this.props.loader,
                                  isNoData:
                                    !this.props.loader &&
                                    !this.props.standingsTableData.length,
                                  temporarilyNoData:
                                    this.props.staticKeyWords.temporarilyNoData,
                                }),
                              ),
                            ),
                        this.props.standingsTableData.length &&
                          this.props.standingsTableData.length > 20 &&
                          this.props.isViewAll
                          ? p.a.createElement(
                              "tr",
                              { className: "ShowMore" },
                              p.a.createElement(
                                "td",
                                { colSpan: "11" },
                                p.a.createElement(
                                  "li",
                                  {
                                    onClick: function () {
                                      return e.handleShowMore();
                                    },
                                  },
                                  this.state.rowsToShow < this.state.totalRows
                                    ? this.props.staticKeyWords.showAll
                                    : this.props.staticKeyWords.showLess,
                                ),
                              ),
                            )
                          : "",
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component));
      a.a = Object(c.b)(
        function (e) {
          return {
            loader: e.app.loader,
            homeTeamId: e.match.bannerData.homeTeamId,
            awayTeamId: e.match.bannerData.awayTeamId,
            staticKeyWords: e.app.staticKeyWords,
            selectedTable: e.seasonalstats.selectedTable,
            selectedBetTypeFilter: e.standings.selectedBetTypeFilter,
            isPoints: e.seasonalstats.isPoints,
            selectedButton: e.tournamentleague.selectedButton,
          };
        },
        function (e) {
          return { dispatch: e, actions: Object(l.b)({}, e) };
        },
      )(u);
    },
    461: function (e, a, t) {
      "use strict";
      var s = t(0),
        r = t(91),
        o = t(92),
        i = t(94),
        n = t(93),
        p = t(1),
        l = t.n(p),
        c = t(454),
        h = t(66),
        d = (function (e) {
          Object(i.a)(t, e);
          var a = Object(n.a)(t);
          function t() {
            return Object(r.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isDirect
                    ? this.props.data &&
                      Object.keys(this.props.data).length > 0 &&
                      this.loadGraph()
                    : this.props.mainData &&
                      Object.keys(this.props.mainData).length > 0 &&
                      this.props.data.length > 0 &&
                      this.loadGraph();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, a) {
                  this.props.isDirect
                    ? JSON.stringify(e.mainData) !==
                        JSON.stringify(this.props.mainData) &&
                      Object.keys(this.props.data).length > 0 &&
                      this.loadGraph()
                    : JSON.stringify(e.mainData) !==
                        JSON.stringify(this.props.mainData) &&
                      this.props.data.length > 0 &&
                      this.loadGraph();
                },
              },
              {
                key: "loadGraph",
                value: function () {
                  var e,
                    a = [];
                  a = this.props.isDirect
                    ? Object.assign(
                        [],
                        [this.props.staticKeyWords.nogoals],
                        this.props.data.labels,
                      )
                    : [
                        this.props.homeTeamName,
                        this.props.awayTeamName,
                        this.props.staticKeyWords.nogoals,
                      ];
                  var t = [];
                  t = this.props.isDirect
                    ? this.props.data.data
                    : this.props.data;
                  c.a.chart(
                    this.props.loadin,
                    ((e = {
                      chart: {
                        type: "bar",
                        backgroundColor: "rgba(255, 255, 255, 0.0)",
                      },
                      title: {
                        text: this.props.title,
                        style: { color: "#FFF" },
                      },
                      xAxis: {
                        gridLineWidth: 0,
                        categories: a,
                        lineWidth: 0,
                        labels: {
                          style: {
                            fontSize: "14px",
                            textTransform: "uppercase",
                          },
                          formatter: function () {
                            return (
                              '<span style="color: ' +
                              this.chart.options.colors[this.pos] +
                              '";"-webkit-text-stroke:px black">' +
                              this.value +
                              "</span>"
                            );
                          },
                        },
                      },
                      yAxis: {
                        title: { text: "" },
                        gridLineWidth: 0,
                        min: 0,
                        max: null,
                        labels: { enabled: !1 },
                      },
                      tooltip: { enable: !1 },
                      legend: { enabled: !1 },
                      credits: { enabled: !1 },
                      colors: this.props.colors,
                      plotOptions: {
                        series: {
                          dataLabels: {
                            enabled: !0,
                            align: "center",
                            inside: !0,
                            style: {
                              textOutline: "0px",
                              fontSize: "12px",
                              fontWeight: "normal",
                            },
                            textAlign: "left",
                            formatter: function () {
                              return 0 === this.y
                                ? '<span style="color: #FFF";"-webkit-text-stroke:px black">' +
                                    this.y +
                                    "</span>"
                                : this.y;
                            },
                          },
                          enableMouseTracking: !1,
                          borderWidth: 0,
                          borderRadiusTopLeft: "50%",
                          borderRadiusTopRight: "50%",
                        },
                      },
                    }),
                    Object(s.a)(e, "credits", { enabled: !1 }),
                    Object(s.a)(e, "series", [
                      { name: "", colorByPoint: !0, data: t },
                    ]),
                    e),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement("div", {
                    id: this.props.loadin,
                    style: {
                      width: this.props.graphWidth
                        ? this.props.graphWidth
                        : "80%",
                      height: this.props.graphHeight
                        ? this.props.graphHeight
                        : "200px",
                    },
                  });
                },
              },
            ]),
            t
          );
        })(p.Component);
      a.a = Object(h.b)(function (e) {
        return { staticKeyWords: e.app.staticKeyWords };
      })(d);
    },
    509: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t(91),
        r = t(92),
        o = t(94),
        i = t(93),
        n = t(1),
        p = t.n(n),
        l = t(33),
        c = t(66),
        h = t(67),
        d = t(22),
        m = t(0),
        u = t(25),
        g = t(156),
        y = t(51),
        b = t(456),
        T = t(458),
        I = t(237),
        v = t(21),
        E = (function (e) {
          Object(o.a)(t, e);
          var a = Object(i.a)(t);
          function t(e) {
            var r;
            return (
              Object(s.a)(this, t),
              ((r = a.call(this, e)).state = { rowsToShow: 20, totalRows: 0 }),
              r
            );
          }
          return (
            Object(r.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.standingsTableData &&
                    this.props.standingsTableData.length &&
                    this.props.isViewAll &&
                    (this.setState({
                      totalRows: this.props.standingsTableData.length,
                    }),
                    this.setState({ rowsToShow: 20 }));
                },
              },
              {
                key: "rowNavigation",
                value: function (e, a) {
                  if (!a) return !0;
                  this.props.dispatch(Object(v.h)("fixturesresults")),
                    this.props.history.push(e);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.standingsTableData &&
                    e.standingsTableData &&
                    this.props.standingsTableData.length !==
                      e.standingsTableData.length &&
                    this.setState({
                      totalRows: this.props.standingsTableData.length,
                    });
                },
              },
              {
                key: "handleShowMore",
                value: function () {
                  var e = this.state.rowsToShow,
                    a = this.state.totalRows;
                  e < a
                    ? this.setState({ rowsToShow: a })
                    : this.setState({ rowsToShow: 20 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return p.a.createElement(
                    "table",
                    { class: "tableDefault tableSeasonal-stats" },
                    p.a.createElement(
                      "thead",
                      null,
                      p.a.createElement(
                        "tr",
                        null,
                        this.props.standingColumns
                          ? this.props.standingColumns.map(function (e, a) {
                              if (e.hasOwnProperty("isRow"))
                                return p.a.createElement(
                                  p.a.Fragment,
                                  { key: a },
                                  e.isRow
                                    ? p.a.createElement(
                                        "th",
                                        {
                                          className: e.className,
                                          rowSpan: e.spanValue,
                                        },
                                        e.column,
                                      )
                                    : p.a.createElement(
                                        "th",
                                        {
                                          className: e.className,
                                          colSpan: e.spanValue,
                                        },
                                        e.column,
                                      ),
                                );
                            })
                          : p.a.createElement(p.a.Fragment, null),
                      ),
                      p.a.createElement(
                        "tr",
                        null,
                        this.props.standingColumns
                          ? this.props.standingColumns.map(function (e, a) {
                              return p.a.createElement(
                                p.a.Fragment,
                                { key: a },
                                !e.hasOwnProperty("isRow") &&
                                  p.a.createElement(
                                    "th",
                                    { className: e.className },
                                    e.column,
                                  ),
                              );
                            })
                          : p.a.createElement(p.a.Fragment, null),
                      ),
                    ),
                    p.a.createElement(
                      "tbody",
                      null,
                      this.props.standingsTableData.length
                        ? this.props.standingsTableData.map(function (a, t) {
                            if (t < e.state.rowsToShow || !e.props.isViewAll)
                              return p.a.createElement(
                                "tr",
                                {
                                  key: "tm" + t,
                                  className: e.props.isTournament
                                    ? "team" == e.props.type &&
                                      e.props.teamId == a.teamId
                                      ? "neutral"
                                      : ""
                                    : e.props.homeTeamId == a.teamId
                                      ? "homeBg"
                                      : e.props.awayTeamId == a.teamId
                                        ? "awayBg"
                                        : "",
                                  onClick:
                                    "null" !== a[e.props.paramKey] &&
                                    e.props.isRowClick
                                      ? e.rowNavigation.bind(
                                          e,
                                          e.props.rowNavigation
                                            ? e.props.rowNavigation.replace(
                                                "[:id]",
                                                a[e.props.paramKey],
                                              )
                                            : "",
                                        )
                                      : "",
                                },
                                e.props.standingColumns &&
                                  e.props.standingColumns.map(function (t, s) {
                                    if (t.isDisplay) {
                                      var r = t.key.split(".");
                                      return t.className
                                        ? p.a.createElement(
                                            p.a.Fragment,
                                            null,
                                            " ",
                                            "null" !== a.teamId &&
                                              e.props.isRowClick
                                              ? p.a.createElement(
                                                  "td",
                                                  {
                                                    key: s,
                                                    className: t.className,
                                                    "data-href": "true",
                                                  },
                                                  p.a.createElement(
                                                    "div",
                                                    null,
                                                    r.length > 1
                                                      ? a[r[1]]
                                                      : a[t.key],
                                                  ),
                                                )
                                              : p.a.createElement(
                                                  "td",
                                                  {
                                                    key: s,
                                                    className: t.className,
                                                  },
                                                  p.a.createElement(
                                                    "div",
                                                    null,
                                                    r.length > 1
                                                      ? a[r[1]]
                                                      : a[t.key],
                                                  ),
                                                ),
                                          )
                                        : p.a.createElement(
                                            p.a.Fragment,
                                            null,
                                            "null" !== a.teamId &&
                                              e.props.isRowClick
                                              ? p.a.createElement(
                                                  "td",
                                                  {
                                                    key: s,
                                                    "data-href": "true",
                                                  },
                                                  p.a.createElement(
                                                    "div",
                                                    null,
                                                    r.length > 1
                                                      ? a[r[1]]
                                                      : a[t.key],
                                                  ),
                                                )
                                              : p.a.createElement(
                                                  "td",
                                                  { key: s },
                                                  p.a.createElement(
                                                    "div",
                                                    null,
                                                    r.length > 1
                                                      ? a[r[1]]
                                                      : a[t.key],
                                                  ),
                                                ),
                                          );
                                    }
                                  }),
                              );
                          })
                        : p.a.createElement(
                            "tr",
                            null,
                            p.a.createElement(
                              "td",
                              { colSpan: this.props.standingColumns.length },
                              p.a.createElement(I.a, {
                                isLoader: this.props.loader,
                                isNoData:
                                  !this.props.loader &&
                                  !this.props.standingsTableData.length,
                                temporarilyNoData:
                                  this.props.staticKeyWords.temporarilyNoData,
                              }),
                            ),
                          ),
                      this.props.standingsTableData.length &&
                        this.props.standingsTableData.length > 20 &&
                        this.props.isViewAll
                        ? p.a.createElement(
                            "tr",
                            { className: "ShowMore" },
                            p.a.createElement(
                              "td",
                              { colSpan: "11" },
                              p.a.createElement(
                                "li",
                                {
                                  onClick: function () {
                                    return e.handleShowMore();
                                  },
                                },
                                this.state.rowsToShow < this.state.totalRows
                                  ? this.props.staticKeyWords.showAll
                                  : this.props.staticKeyWords.showLess,
                              ),
                            ),
                          )
                        : "",
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      var f = Object(c.b)(
          function (e) {
            return {
              homeTeamId: e.match.bannerData.homeTeamId,
              awayTeamId: e.match.bannerData.awayTeamId,
              loader: e.app.loader,
              staticKeyWords: e.app.staticKeyWords,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(l.b)({}, e) };
          },
        )(E),
        N = t(461),
        w = t(457),
        D = t(455),
        k = t(3),
        C = (function (e) {
          Object(o.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(r.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.dispatch(Object(y.d)(1));
                },
              },
              { key: "componentDidUpdate", value: function (e, a) {} },
              {
                key: "selectTab",
                value: function (e) {
                  this.props.dispatch(Object(y.d)(e)),
                    this.props.dispatch(
                      Object(g.d)({
                        table: this.props.selectedTable,
                        eventId: this.props.eventInfo.eventId,
                        competitionId: this.props.isTournament
                          ? this.props.match.params.leagueId
                          : this.props.eventInfo.competitionId,
                        optionId: e,
                        seasonId: this.props.selectedSeasonFilter,
                        hdcTypeId: this.props.selectedHDCFilter,
                        hiLoFtId: this.props.selectedHiLoFTFilter,
                        hiLoHtId: this.props.selectedHiLoHTFilter,
                        languageId: this.props.languageId,
                        homeTeamId: this.props.homeTeamId,
                        betTypeId: this.props.selectedBetTypeFilter,
                        awayTeamId: this.props.awayTeamId,
                      }),
                    );
                },
              },
              {
                key: "seasonChanged",
                value: function (e) {
                  var a = e.target.selectedIndex,
                    t = e.target.childNodes[a].getAttribute("data-id");
                  (t = t || this.props.match.params.leagueId),
                    this.props.dispatch(
                      Object(y.c)({ filter: "season", value: e.target.value }),
                    ),
                    this.props.dispatch(
                      Object(g.d)({
                        table: this.props.selectedTable,
                        eventId: this.props.eventInfo.eventId,
                        competitionId:
                          "team" === this.props.type
                            ? t
                            : this.props.isTournament
                              ? this.props.match.params.leagueId
                              : this.props.eventInfo.competitionId,
                        optionId: this.props.selectedTab,
                        seasonId: e.target.value,
                        hdcTypeId: this.props.selectedHDCFilter,
                        hiLoFtId: this.props.selectedHiLoFTFilter,
                        hiLoHtId: this.props.selectedHiLoHTFilter,
                        languageId: this.props.languageId,
                        homeTeamId: this.props.homeTeamId,
                        awayTeamId: this.props.awayTeamId,
                      }),
                    );
                },
              },
              {
                key: "hdcTypeChanged",
                value: function (e) {
                  this.props.dispatch(
                    Object(y.c)({ filter: "hdcType", value: e.target.value }),
                  ),
                    this.props.dispatch(
                      Object(g.d)({
                        table: this.props.selectedTable,
                        eventId: this.props.eventInfo.eventId,
                        competitionId: this.props.isTournament
                          ? this.props.match.params.leagueId
                          : this.props.eventInfo.competitionId,
                        optionId: this.props.selectedTab,
                        seasonId: this.props.selectedSeasonFilter,
                        hdcTypeId: e.target.value,
                        hiLoFtId: this.props.selectedHiLoFTFilter,
                        hiLoHtId: this.props.selectedHiLoHTFilter,
                        languageId: this.props.languageId,
                        homeTeamId: this.props.homeTeamId,
                        awayTeamId: this.props.awayTeamId,
                      }),
                    );
                },
              },
              {
                key: "hiloFTChanged",
                value: function (e) {
                  this.props.dispatch(
                    Object(y.c)({ filter: "hiloFT", value: e.target.value }),
                  ),
                    this.props.dispatch(
                      Object(g.d)({
                        table: this.props.selectedTable,
                        eventId: this.props.eventInfo.eventId,
                        competitionId: this.props.isTournament
                          ? this.props.match.params.leagueId
                          : this.props.eventInfo.competitionId,
                        optionId: this.props.selectedTab,
                        seasonId: this.props.selectedSeasonFilter,
                        hdcTypeId: this.props.selectedHDCFilter,
                        hiLoFtId: e.target.value,
                        hiLoHtId: this.props.selectedHiLoHTFilter,
                        languageId: this.props.languageId,
                        homeTeamId: this.props.homeTeamId,
                        awayTeamId: this.props.awayTeamId,
                      }),
                    );
                },
              },
              {
                key: "hiloHTChanged",
                value: function (e) {
                  this.props.dispatch(
                    Object(y.c)({ filter: "hiloHT", value: e.target.value }),
                  ),
                    this.props.dispatch(
                      Object(g.d)({
                        table: this.props.selectedTable,
                        eventId: this.props.eventInfo.eventId,
                        competitionId: this.props.isTournament
                          ? this.props.match.params.leagueId
                          : this.props.eventInfo.competitionId,
                        optionId: this.props.selectedTab,
                        seasonId: this.props.selectedSeasonFilter,
                        hiLoFtId: this.props.selectedHiLoFTFilter,
                        hiLoHtId: e.target.value,
                        languageId: this.props.languageId,
                        homeTeamId: this.props.homeTeamId,
                        awayTeamId: this.props.awayTeamId,
                      }),
                    );
                },
              },
              {
                key: "betTypeChanged",
                value: function (e) {
                  var a = e.target.selectedIndex;
                  e.target.childNodes[a].getAttribute("byteType");
                  this.props.dispatch(
                    Object(y.c)({ filter: "betType", value: e.target.value }),
                  ),
                    this.props.dispatch(
                      Object(g.d)({
                        table: this.props.selectedTable,
                        eventId: this.props.eventInfo.eventId,
                        competitionId: this.props.isTournament
                          ? this.props.match.params.leagueId
                          : this.props.eventInfo.competitionId,
                        optionId: this.props.selectedTab,
                        seasonId: this.props.selectedSeasonFilter,
                        betTypeId: e.target.value,
                        languageId: this.props.languageId,
                        homeTeamId: this.props.homeTeamId,
                        awayTeamId: this.props.awayTeamId,
                      }),
                    );
                },
              },
              {
                key: "structureGraphData",
                value: function (e) {
                  var a,
                    t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "",
                    r = [],
                    o = Object(u.a)(e);
                  try {
                    for (o.s(); !(a = o.n()).done; ) {
                      var i = a.value;
                      r.push({
                        outcomeName: t ? i[s] : i.outcomeName,
                        homeGoals: i.homeTeam,
                        awayGoals: i.awayTeam,
                      });
                    }
                  } catch (n) {
                    o.e(n);
                  } finally {
                    o.f();
                  }
                  return r;
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    a,
                    t,
                    s,
                    r,
                    o = this;
                  return (
                    (this.props.standingsChartData &&
                      this.props.standingsChartData.length > 0 &&
                      11 === this.props.selectedTable.tableId) ||
                      (1 === this.props.selectedTable.tableId
                        ? this.props.standingsFHHAD &&
                          Object.keys(this.props.standingsFHHAD).length
                        : (this.props.standingsChartData &&
                            this.props.standingsChartData.length > 0 &&
                            this.props.selectedTable.tableId,
                          (this.props.standingsChartData &&
                            this.props.standingsChartData.length > 0 &&
                            5 === this.props.selectedTable.tableId) ||
                            (this.props.handicapChartData &&
                              Object.keys(this.props.handicapChartData).length >
                                0 &&
                              3 === this.props.selectedTable.tableId) ||
                            (this.props.handicapHadChartData &&
                              Object.keys(this.props.handicapHadChartData)
                                .length > 0 &&
                              4 === this.props.selectedTable.tableId) ||
                            (this.props.firstTeamToScoreGraphData &&
                              this.props.firstTeamToScoreGraphData.length > 0 &&
                              8 === this.props.selectedTable.tableId) ||
                            (this.props.correctScoreGraphData &&
                              Object.keys(this.props.correctScoreGraphData)
                                .length > 0 &&
                              9 === this.props.selectedTable.tableId) ||
                            (this.props.FHCorretScoreGraphData &&
                              this.props.FHCorretScoreGraphData.length > 0 &&
                              12 === this.props.selectedTable.tableId) ||
                            (this.props.teamToScoreOEGraphData &&
                              Object.keys(this.props.teamToScoreOEGraphData)
                                .length > 0 &&
                              this.props.selectedTable.tableId))),
                    p.a.createElement(
                      p.a.Fragment,
                      null,
                      p.a.createElement(
                        "div",
                        { className: "seasonalStats-container" },
                        p.a.createElement(
                          "div",
                          { className: "sectionHeading" },
                          p.a.createElement(
                            "div",
                            { className: "sectionTitle" },
                            this.props.selectedTable.tableName,
                          ),
                          p.a.createElement(
                            "div",
                            { className: "sectionFilter" },
                            3 === this.props.selectedTable.tableId
                              ? p.a.createElement(
                                  "div",
                                  { className: "form-group form-inline" },
                                  p.a.createElement(
                                    "div",
                                    { className: "form-control" },
                                    p.a.createElement(
                                      "select",
                                      {
                                        onChange:
                                          this.hdcTypeChanged.bind(this),
                                      },
                                      this.props.HDCTypeFilterData.map(
                                        function (e, a) {
                                          return p.a.createElement(
                                            "option",
                                            { key: "hdcType" + a, value: e.id },
                                            e.name,
                                          );
                                        },
                                      ),
                                    ),
                                  ),
                                )
                              : "",
                            1 === this.props.selectedTable.tableId ||
                              6 === this.props.selectedTable.tableId ||
                              9 === this.props.selectedTable.tableId
                              ? p.a.createElement(
                                  "div",
                                  { className: "form-group form-inline" },
                                  p.a.createElement(
                                    "div",
                                    { className: "form-control" },
                                    p.a.createElement(
                                      "select",
                                      {
                                        onChange:
                                          this.betTypeChanged.bind(this),
                                        value: this.props.selectedBetTypeFilter,
                                      },
                                      this.props.betTypeFilterData &&
                                        this.props.betTypeFilterData.map(
                                          function (e, a) {
                                            return p.a.createElement(
                                              "option",
                                              {
                                                byteType: e.competitionId,
                                                value: e.id,
                                                key: a,
                                              },
                                              e.name,
                                            );
                                          },
                                        ),
                                    ),
                                  ),
                                )
                              : "",
                            p.a.createElement(
                              "div",
                              { className: "form-group form-inline" },
                              p.a.createElement(
                                "div",
                                { className: "form-control" },
                                p.a.createElement(
                                  "select",
                                  {
                                    onChange: this.seasonChanged.bind(this),
                                    value: this.props.selectedSeasonFilter,
                                  },
                                  this.props.seasonFilterData.map(
                                    function (e, a) {
                                      return p.a.createElement(
                                        "option",
                                        {
                                          "data-id": e.competitionId,
                                          key: a,
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
                        p.a.createElement(
                          "div",
                          { className: "seasonalStats-content" },
                          "league" == this.props.type &&
                            9 == this.props.selectedTable.tableId
                            ? p.a.createElement(p.a.Fragment, null)
                            : p.a.createElement(
                                "div",
                                { className: "btn-group" },
                                this.props.optionsList.length > 1 &&
                                  this.props.optionsList.map(function (e, a) {
                                    return p.a.createElement(
                                      "button",
                                      {
                                        key: a,
                                        className:
                                          "buttonAll" +
                                          (o.props.selectedTab === e.id
                                            ? " active"
                                            : ""),
                                        onClick: o.selectTab.bind(o, e.id),
                                      },
                                      e.name,
                                    );
                                  }),
                              ),
                          1 == this.props.selectedTable.tableId ||
                            3 == this.props.selectedTable.tableId ||
                            5 == this.props.selectedTable.tableId ||
                            11 == this.props.selectedTable.tableId ||
                            8 == this.props.selectedTable.tableId ||
                            (9 == this.props.selectedTable.tableId &&
                              !this.props.isTournament)
                            ? p.a.createElement(
                                T.a,
                                Object.assign({}, this.props, {
                                  standingColumns:
                                    3 === this.props.selectedTable.tableId
                                      ? this.props.handicapColumns
                                      : 5 === this.props.selectedTable.tableId
                                        ? this.props.hafuColumns
                                        : 11 ===
                                            this.props.selectedTable.tableId
                                          ? this.props.toatalGoalsColumns
                                          : 8 ===
                                              this.props.selectedTable.tableId
                                            ? this.props.firstTeamToScoreColumns
                                            : 9 ===
                                                this.props.selectedTable.tableId
                                              ? this.props.correctScoreColumns
                                              : this.props.standingColumns,
                                  standingsTableData:
                                    this.props.standingsTableData,
                                  isTournament: this.props.isTournament,
                                  seasonalStats:
                                    this.props.staticKeyWords.seasonalStats,
                                  type: this.props.type,
                                  teamId: this.props.teamId,
                                  isViewAll: !0,
                                  isRowClick: !0,
                                  paramKey: "teamId",
                                  rowNavigation:
                                    (this.props.languageId === k.c
                                      ? "/en"
                                      : "/zh") +
                                    "/tournament/league/" +
                                    (this.props.isTournament
                                      ? this.props.match.params.leagueId
                                      : this.props.eventInfo.competitionId) +
                                    "/team/[:id]/fixturesresults",
                                }),
                              )
                            : p.a.createElement(
                                f,
                                ((a = {
                                  standingColumns:
                                    4 === this.props.selectedTable.tableId
                                      ? this.props.handicapHadColumns
                                      : 6 === this.props.selectedTable.tableId
                                        ? this.props.hiloColumns
                                        : 7 === this.props.selectedTable.tableId
                                          ? this.props
                                              .teamsToScoreOddOrEvenColumns
                                          : 10 ===
                                              this.props.selectedTable.tableId
                                            ? this.props.cornersHiloColumns
                                            : 9 ===
                                                  this.props.selectedTable
                                                    .tableId &&
                                                this.props.isTournament
                                              ? this.props
                                                  .tourCorrectScoreColumns
                                              : "",
                                  standingsTableData:
                                    null === (e = this.props) || void 0 === e
                                      ? void 0
                                      : e.standingsTableData,
                                  isTournament: this.props.isTournament,
                                  type: this.props.type,
                                  teamId: this.props.teamId,
                                  isViewAll: !0,
                                  paramKey: "teamId",
                                  isRowClick:
                                    9 !== this.props.selectedTable.tableId,
                                }),
                                Object(m.a)(a, "paramKey", "teamId"),
                                Object(m.a)(a, "history", this.props.history),
                                Object(m.a)(
                                  a,
                                  "rowNavigation",
                                  (this.props.languageId === k.c
                                    ? "/en"
                                    : "/zh") +
                                    "/tournament/league/" +
                                    (this.props.isTournament
                                      ? this.props.match.params.leagueId
                                      : this.props.eventInfo.competitionId) +
                                    "/team/[:id]/fixturesresults",
                                ),
                                a),
                              ),
                          p.a.createElement(
                            "span",
                            { className: "seasonalstate-clr-white" },
                            1 == this.props.selectedTable.tableId ||
                              6 == this.props.selectedTable.tableId
                              ? 1 == this.props.selectedBetTypeFilter
                                ? null === (t = this.props) || void 0 === t
                                  ? void 0
                                  : t.rankingBasiswlhalf
                                : null === (s = this.props) || void 0 === s
                                  ? void 0
                                  : s.rankingBasisWL
                              : null === (r = this.props) || void 0 === r
                                ? void 0
                                : r.rankingBasis,
                          ),
                          p.a.createElement(
                            "span",
                            { className: "seasonalstate-clr-white" },
                            9 == this.props.selectedTable.tableId
                              ? this.props.correctScoreallTournament
                              : "",
                          ),
                        ),
                      ),
                      !this.props.isEdisplay &&
                        !this.props.isTournament &&
                        !this.props.loader &&
                        p.a.createElement(
                          "div",
                          { className: "graphSection" },
                          p.a.createElement(
                            "div",
                            { className: "sectionHeading" },
                            p.a.createElement(
                              "div",
                              { className: "sectionTitle" },
                              1 === this.props.selectedTable.tableId
                                ? this.props.staticKeyWords.hadComparison
                                : 3 === this.props.selectedTable.tableId
                                  ? this.props.staticKeyWords.hdcTypeComparison
                                  : 4 === this.props.selectedTable.tableId
                                    ? this.props.staticKeyWords
                                        .handicapHADComparison
                                    : 5 === this.props.selectedTable.tableId
                                      ? this.props.staticKeyWords.hafuComparison
                                      : 6 === this.props.selectedTable.tableId
                                        ? this.props.staticKeyWords.hiLo
                                        : 7 === this.props.selectedTable.tableId
                                          ? this.props.staticKeyWords
                                              .ttsOEComparison
                                          : 8 ===
                                              this.props.selectedTable.tableId
                                            ? this.props.staticKeyWords
                                                .ffsComparison
                                            : 9 ===
                                                this.props.selectedTable.tableId
                                              ? this.props.staticKeyWords
                                                  .correctScoreComparision
                                              : 10 ===
                                                  this.props.selectedTable
                                                    .tableId
                                                ? this.props.staticKeyWords
                                                    .cornersComparision
                                                : 11 ===
                                                    this.props.selectedTable
                                                      .tableId
                                                  ? this.props.staticKeyWords
                                                      .totalGoalsComparison
                                                  : this.props.staticKeyWords
                                                      .seasonRankingTrend,
                            ),
                            (this.props.selectedTable.tableId, ""),
                          ),
                          p.a.createElement(
                            "div",
                            { className: "graphContainer" },
                            p.a.createElement(
                              "div",
                              { className: "graphContent TwoInRow" },
                              1 === this.props.selectedTable.tableId
                                ? 2 == this.props.selectedBetTypeFilter
                                  ? p.a.createElement(
                                      p.a.Fragment,
                                      null,
                                      p.a.createElement(b.a, {
                                        data: this.props.standingsFHHAD,
                                        maxValue: this.props.hadMaxValue,
                                        loadin: "had",
                                        isDirect: !0,
                                        title:
                                          this.props.staticKeyWords.fullTime,
                                        graphHeight: "300px",
                                        graphWidth: "85%",
                                      }),
                                      p.a.createElement(
                                        "div",
                                        { className: "goalsPer-game-margin" },
                                        this.props.standingsFHGPG &&
                                          Object.keys(this.props.standingsFHGPG)
                                            .length > 0
                                          ? p.a.createElement(D.a, {
                                              homeTeamName:
                                                this.props.homeTeamName,
                                              awayTeamName:
                                                this.props.awayTeamName,
                                              home: this.props.standingsFHGPG
                                                .homeTeam,
                                              away: this.props.standingsFHGPG
                                                .awayTeam,
                                              title:
                                                this.props.languageId === k.c
                                                  ? ""
                                                      .concat(
                                                        this.props
                                                          .staticKeyWords.goals,
                                                        " <br/><span>",
                                                      )
                                                      .concat(
                                                        this.props
                                                          .staticKeyWords.per,
                                                        "</span> ",
                                                      )
                                                      .concat(
                                                        this.props
                                                          .staticKeyWords.game,
                                                      )
                                                  : "".concat(
                                                      this.props.staticKeyWords
                                                        .goalsPerGame,
                                                    ),
                                            })
                                          : "",
                                      ),
                                    )
                                  : 1 == this.props.selectedBetTypeFilter
                                    ? p.a.createElement(
                                        p.a.Fragment,
                                        null,
                                        p.a.createElement(b.a, {
                                          data: this.props.standingsFHHAD,
                                          maxValue: this.props.fhHadMaxValue,
                                          loadin: "fhad",
                                          isDirect: !0,
                                          title:
                                            this.props.staticKeyWords.halfTime,
                                          graphHeight: "300px",
                                          graphWidth: "650px",
                                        }),
                                        this.props.standingsFHGPG &&
                                          Object.keys(this.props.standingsFHGPG)
                                            .length > 0
                                          ? p.a.createElement(D.a, {
                                              homeTeamName:
                                                this.props.homeTeamName,
                                              awayTeamName:
                                                this.props.awayTeamName,
                                              home: this.props.standingsFHGPG
                                                .homeTeam,
                                              away: this.props.standingsFHGPG
                                                .awayTeam,
                                              title:
                                                this.props.staticKeyWords
                                                  .firstHalfGpg,
                                            })
                                          : "",
                                      )
                                    : ""
                                : 3 === this.props.selectedTable.tableId
                                  ? p.a.createElement(
                                      p.a.Fragment,
                                      null,
                                      p.a.createElement(
                                        "div",
                                        { className: "ThreeInRow" },
                                        Object.keys(
                                          this.props.handicapChartData.all,
                                        ).length > 0
                                          ? p.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "handiCap-leftcolumn",
                                              },
                                              p.a.createElement(b.a, {
                                                title:
                                                  this.props.staticKeyWords.all,
                                                data: this.props
                                                  .handicapChartData.all,
                                                isDirect: !0,
                                                noradious: !1,
                                                loadin: "all",
                                                graphWidth: "100%",
                                                graphHeight: "350px",
                                              }),
                                            )
                                          : p.a.createElement(
                                              p.a.Fragment,
                                              null,
                                            ),
                                        Object.keys(
                                          this.props.handicapChartData.positive,
                                        ).length > 0
                                          ? p.a.createElement(
                                              "div",
                                              {
                                                className: this.props
                                                  .isHandicapChartsMul
                                                  ? "handiCap-midcolumn"
                                                  : "singleCentered-graph",
                                              },
                                              p.a.createElement(b.a, {
                                                title:
                                                  this.props.staticKeyWords
                                                    .plus,
                                                data: this.props
                                                  .handicapChartData.positive,
                                                isDirect: !0,
                                                noradious: !1,
                                                loadin: "hadPositive",
                                                graphWidth: this.props
                                                  .isHandicapChartsMul
                                                  ? "100%"
                                                  : "800px",
                                                graphHeight: "350px",
                                              }),
                                            )
                                          : p.a.createElement(
                                              p.a.Fragment,
                                              null,
                                            ),
                                        Object.keys(
                                          this.props.handicapChartData.negative,
                                        ).length > 0
                                          ? p.a.createElement(
                                              "div",
                                              {
                                                className: this.props
                                                  .isHandicapChartsMul
                                                  ? "handiCap-rightcolumn"
                                                  : "singleCentered-graph",
                                              },
                                              p.a.createElement(b.a, {
                                                title:
                                                  this.props.staticKeyWords
                                                    .minus,
                                                data: this.props
                                                  .handicapChartData.negative,
                                                isDirect: !0,
                                                noradious: !1,
                                                loadin: "hadNegative",
                                                graphWidth: this.props
                                                  .isHandicapChartsMul
                                                  ? "100%"
                                                  : "800px",
                                                graphHeight: "350px",
                                              }),
                                            )
                                          : p.a.createElement(
                                              p.a.Fragment,
                                              null,
                                            ),
                                      ),
                                      Object.keys(
                                        this.props.handicapChartData.zero,
                                      ).length > 0
                                        ? p.a.createElement(
                                            "div",
                                            {
                                              className: this.props
                                                .isHandicapChartsMul
                                                ? ""
                                                : "singleCentered-graph",
                                            },
                                            p.a.createElement(b.a, {
                                              title:
                                                this.props.staticKeyWords.zero,
                                              data: this.props.handicapChartData
                                                .zero,
                                              isDirect: !0,
                                              noradious: !1,
                                              loadin: "hadZero",
                                              graphWidth: this.props
                                                .isHandicapChartsMul
                                                ? "400px"
                                                : "800px",
                                              graphHeight: "350px",
                                            }),
                                          )
                                        : p.a.createElement(p.a.Fragment, null),
                                    )
                                  : 5 === this.props.selectedTable.tableId
                                    ? p.a.createElement(
                                        "div",
                                        { className: "singleCentered-graph" },
                                        p.a.createElement(b.a, {
                                          data: this.props.hafuGraphData,
                                          isDirect: !0,
                                          noradious: !1,
                                          loadin: "hafu",
                                          iscolumn: !0,
                                          graphWidth: "85%",
                                          graphHeight: "300px",
                                        }),
                                      )
                                    : 4 === this.props.selectedTable.tableId
                                      ? p.a.createElement(
                                          "div",
                                          { className: "ThreeInRow" },
                                          Object.keys(
                                            this.props.handicapHadChartData.all,
                                          ).length > 0
                                            ? p.a.createElement(
                                                "div",
                                                {
                                                  className:
                                                    "handiCap-leftcolumn",
                                                },
                                                p.a.createElement(b.a, {
                                                  title:
                                                    this.props.staticKeyWords
                                                      .all,
                                                  data: this.props
                                                    .handicapHadChartData.all,
                                                  isDirect: !0,
                                                  noradious: !1,
                                                  loadin: "all",
                                                  graphWidth: "100%",
                                                  graphHeight: "350px",
                                                }),
                                              )
                                            : p.a.createElement(
                                                p.a.Fragment,
                                                null,
                                              ),
                                          Object.keys(
                                            this.props.handicapHadChartData
                                              .positive,
                                          ).length > 0
                                            ? p.a.createElement(
                                                "div",
                                                {
                                                  className:
                                                    "handiCap-midcolumn",
                                                },
                                                p.a.createElement(b.a, {
                                                  title:
                                                    this.props.staticKeyWords
                                                      .plus,
                                                  data: this.props
                                                    .handicapHadChartData
                                                    .positive,
                                                  isDirect: !0,
                                                  noradious: !1,
                                                  loadin: "hadPositive",
                                                  graphWidth: "100%",
                                                  graphHeight: "350px",
                                                }),
                                              )
                                            : p.a.createElement(
                                                p.a.Fragment,
                                                null,
                                              ),
                                          Object.keys(
                                            this.props.handicapHadChartData
                                              .negative,
                                          ).length > 0
                                            ? p.a.createElement(
                                                "div",
                                                {
                                                  className:
                                                    "handiCap-rightcolumn",
                                                },
                                                p.a.createElement(b.a, {
                                                  title:
                                                    this.props.staticKeyWords
                                                      .minus,
                                                  data: this.props
                                                    .handicapHadChartData
                                                    .negative,
                                                  isDirect: !0,
                                                  noradious: !1,
                                                  loadin: "hadNegative",
                                                  graphWidth: "100%",
                                                  graphHeight: "350px",
                                                }),
                                              )
                                            : p.a.createElement(
                                                p.a.Fragment,
                                                null,
                                              ),
                                        )
                                      : 6 === this.props.selectedTable.tableId
                                        ? (2 ==
                                            this.props.selectedBetTypeFilter &&
                                            this.props.hiLoChartData) ||
                                          (1 ==
                                            this.props.selectedBetTypeFilter &&
                                            this.props.hiLoChartData)
                                          ? p.a.createElement(w.a, {
                                              data: this.props.hiLoChartData,
                                              homeTeamName:
                                                this.props.homeTeamName,
                                              awayTeamName:
                                                this.props.awayTeamName,
                                              title: "",
                                            })
                                          : ""
                                        : (this.props.selectedTable.tableId,
                                          7 === this.props.selectedTable.tableId
                                            ? p.a.createElement(
                                                "div",
                                                {
                                                  className:
                                                    "singleCentered-graph",
                                                },
                                                p.a.createElement(b.a, {
                                                  data: this.props
                                                    .teamToScoreOEGraphData,
                                                  maxValue: 8,
                                                  loadin: "had",
                                                  isDirect: !0,
                                                  title:
                                                    this.props.staticKeyWords
                                                      .oddOREven,
                                                  graphHeight: "200px",
                                                  graphWidth: "85%",
                                                }),
                                              )
                                            : 8 ===
                                                this.props.selectedTable.tableId
                                              ? p.a.createElement(
                                                  p.a.Fragment,
                                                  null,
                                                  p.a.createElement(
                                                    "div",
                                                    { className: "leftColumn" },
                                                    p.a.createElement(N.a, {
                                                      homeTeamName:
                                                        this.props.homeTeamName,
                                                      awayTeamName:
                                                        this.props.awayTeamName,
                                                      mainData:
                                                        this.props
                                                          .firstTeamToScoreGraphData
                                                          .FTSScored,
                                                      data: this.props
                                                        .firstTeamToScoreGraphData
                                                        .FTSScored,
                                                      isDirect: !0,
                                                      colors: [
                                                        "#29d6d4",
                                                        "#e57374",
                                                      ],
                                                      title:
                                                        this.props
                                                          .staticKeyWords
                                                          .scoredFirst,
                                                      loadin: "scored",
                                                      graphHeight: "150px",
                                                      graphWidth: "85%",
                                                    }),
                                                  ),
                                                  p.a.createElement(
                                                    "div",
                                                    {
                                                      className: "rightColumn",
                                                    },
                                                    p.a.createElement(N.a, {
                                                      homeTeamName:
                                                        this.props.homeTeamName,
                                                      awayTeamName:
                                                        this.props.awayTeamName,
                                                      mainData:
                                                        this.props
                                                          .firstTeamToScoreGraphData
                                                          .FTSConceded,
                                                      data: this.props
                                                        .firstTeamToScoreGraphData
                                                        .FTSConceded,
                                                      isDirect: !0,
                                                      colors: [
                                                        "#29d6d4",
                                                        "#e57374",
                                                      ],
                                                      title:
                                                        this.props
                                                          .staticKeyWords
                                                          .concededFirst,
                                                      loadin: "conceded",
                                                      graphHeight: "150px",
                                                      graphWidth: "85%",
                                                    }),
                                                  ),
                                                )
                                              : 9 ===
                                                  this.props.selectedTable
                                                    .tableId
                                                ? p.a.createElement(
                                                    "div",
                                                    {
                                                      className:
                                                        "singleCentered-graph",
                                                    },
                                                    p.a.createElement(b.a, {
                                                      data: this.props
                                                        .correctScoreGraphData,
                                                      noradious: !1,
                                                      loadin: "csh",
                                                      iscolumn: !0,
                                                      isDirect: !0,
                                                      isLegend: !1,
                                                      graphWidth: "85%",
                                                      homeLegend:
                                                        this.props.homeTeamName,
                                                      awayLegend:
                                                        this.props.awayTeamName,
                                                    }),
                                                  )
                                                : 12 ===
                                                    this.props.selectedTable
                                                      .tableId
                                                  ? p.a.createElement(
                                                      "div",
                                                      null,
                                                      p.a.createElement(b.a, {
                                                        data: [],
                                                        noradious: !1,
                                                        loadin: "cs",
                                                        iscolumn: !0,
                                                      }),
                                                    )
                                                  : 10 ===
                                                      this.props.selectedTable
                                                        .tableId
                                                    ? p.a.createElement(w.a, {
                                                        data: this.props
                                                          .cornersHiLoChartData,
                                                        homeTeamName:
                                                          this.props
                                                            .homeTeamName,
                                                        awayTeamName:
                                                          this.props
                                                            .awayTeamName,
                                                        title: "",
                                                      })
                                                    : 11 ===
                                                        this.props.selectedTable
                                                          .tableId
                                                      ? p.a.createElement(
                                                          "div",
                                                          {
                                                            className:
                                                              "singleCentered-graph",
                                                          },
                                                          p.a.createElement(
                                                            b.a,
                                                            {
                                                              data: this.props
                                                                .standingsChartData,
                                                              isDirect: !0,
                                                              iscolumn: !0,
                                                              noradious: !1,
                                                              loadin:
                                                                "hafucomp11",
                                                              graphHeight:
                                                                "300px",
                                                              graphWidth: "85%",
                                                            },
                                                          ),
                                                        )
                                                      : ""),
                            ),
                          ),
                        ),
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      var O = Object(c.b)(
          function (e) {
            return {
              standingsTableData: e.seasonalstats.standingsTableData,
              standingsChartData: e.seasonalstats.standingsChartData,
              standingColumns: e.seasonalstats.standingColumns,
              handicapColumns: e.seasonalstats.handicapColumns,
              handicapHadColumns: e.seasonalstats.handicapHadColumns,
              teamsToScoreOddOrEvenColumns:
                e.seasonalstats.teamsToScoreOddOrEvenColumns,
              cornersHiloColumns: e.seasonalstats.cornersHiloColumns,
              hiloColumns: e.seasonalstats.hiloColumns,
              toatalGoalsColumns: e.seasonalstats.toatalGoalsColumns,
              selectedTable: e.seasonalstats.selectedTable,
              eventInfo: e.app.eventInfo,
              selectedTab: e.standings.selectedTab,
              seasonFilterData: e.seasonalstats.seasonFilterData,
              selectedSeasonFilter: e.standings.selectedSeasonFilter,
              selectedHDCFilter: e.standings.selectedHDCFilter,
              selectedBetTypeFilter: e.standings.selectedBetTypeFilter,
              homeTeamId: e.match.bannerData.homeTeamId,
              awayTeamId: e.match.bannerData.awayTeamId,
              HDCTypeFilterData: e.seasonalstats.HDCTypeFilterData,
              handicapChartData: e.seasonalstats.handicapChartData,
              hafuColumns: e.seasonalstats.hafuColumns,
              HiLoFTFilterData: e.seasonalstats.HiLoFTFilterData,
              HiLoHTFilterData: e.seasonalstats.HiLoHTFilterData,
              betTypeFilterData: e.seasonalstats.betTypeFilterData,
              selectedHiLoFTFilter: e.standings.selectedHiLoFTFilter,
              selectedHiLoHTFilter: e.standings.selectedHiLoHTFilter,
              handicapHadChartData: e.seasonalstats.handicapHadChartData,
              optionsList: e.seasonalstats.optionsList,
              firstTeamToScoreColumns: e.seasonalstats.firstTeamToScoreColumns,
              firstTeamToScoreGraphData:
                e.seasonalstats.firstTeamToScoreGraphData,
              correctScoreColumns: e.seasonalstats.correctScoreColumns,
              homeTeamName: e.match.homeTeamName,
              awayTeamName: e.match.awayTeamName,
              correctScoreGraphData: e.seasonalstats.correctScoreGraphData,
              FHCorretScoreGraphData: e.seasonalstats.FHCorretScoreGraphData,
              teamToScoreOEGraphData: e.seasonalstats.teamToScoreOEGraphData,
              hiLoChartData: e.seasonalstats.hiLoChartData,
              fhHiLoChartData: e.seasonalstats.fhHiLoChartData,
              cornersHiLoChartData: e.seasonalstats.cornersHiLoChartData,
              staticKeyWords: e.app.staticKeyWords,
              languageId: e.app.languageId,
              standingsHAD: e.seasonalstats.standingsHAD,
              standingsGPG: e.seasonalstats.standingsGPG,
              standingsFHHAD: e.seasonalstats.standingsFHHAD,
              standingsFHGPG: e.seasonalstats.standingsFHGPG,
              selectedCSGOptionId: e.standings.selectedCSGOptionId,
              loader: e.app.loader,
              hafuGraphData: e.seasonalstats.hafuGraphData,
              fhHadMaxValue: e.seasonalstats.fhHadMaxValue,
              hadMaxValue: e.seasonalstats.hadMaxValue,
              isHandicapChartsMul: e.seasonalstats.isHandicapChartsMul,
              tourCorrectScoreColumns: e.seasonalstats.tourCorrectScoreColumns,
              isEdisplay: e.app.isEdisplay,
            };
          },
          function (e) {
            return {
              dispatch: e,
              actions: Object(l.b)({ getTableData: g.d }, e),
            };
          },
        )(C),
        F = (function (e) {
          Object(o.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(r.a)(t, [
              { key: "componentDidMount", value: function () {} },
              { key: "componentDidUpdate", value: function (e, a) {} },
              {
                key: "render",
                value: function () {
                  return p.a.createElement(
                    "section",
                    { className: "layout-content" },
                    p.a.createElement(
                      "div",
                      { className: "mainContent container" },
                      p.a.createElement(
                        "div",
                        { className: "mainLanding-page" },
                        p.a.createElement(
                          "div",
                          { className: "pageContent" },
                          p.a.createElement(
                            "div",
                            { className: "seasonalStats" },
                            p.a.createElement(
                              "div",
                              { className: "seasonalStats-container" },
                              p.a.createElement(
                                "div",
                                { className: "sectionHeading" },
                                p.a.createElement(
                                  "div",
                                  { className: "sectionTitle" },
                                  this.props.selectedTable.tableName,
                                  " ",
                                ),
                              ),
                              p.a.createElement(
                                "div",
                                { className: "seasonalStats-content" },
                                p.a.createElement(
                                  "table",
                                  { className: "tableDefault keyIndicator" },
                                  p.a.createElement(
                                    "thead",
                                    null,
                                    p.a.createElement(
                                      "tr",
                                      null,
                                      p.a.createElement(
                                        "th",
                                        {
                                          className: "th-spaceSeparator",
                                          colSpan: "2",
                                        },
                                        this.props.keyIndicatorsData
                                          .homeTeamName,
                                      ),
                                      p.a.createElement(
                                        "th",
                                        {
                                          className: "th-spaceSeparator w-500",
                                          rowSpan: "2",
                                        },
                                        this.props.keyIndicatorsData.season,
                                      ),
                                      p.a.createElement(
                                        "th",
                                        { className: "", colSpan: "2" },
                                        this.props.keyIndicatorsData
                                          .awayTeamName,
                                      ),
                                    ),
                                    p.a.createElement(
                                      "tr",
                                      null,
                                      p.a.createElement(
                                        "th",
                                        { className: "th-separator" },
                                        this.props.staticKeyWords.stats,
                                      ),
                                      p.a.createElement(
                                        "th",
                                        null,
                                        this.props.staticKeyWords.rank,
                                      ),
                                      p.a.createElement(
                                        "th",
                                        { className: "th-separator" },
                                        this.props.staticKeyWords.rank,
                                      ),
                                      p.a.createElement(
                                        "th",
                                        null,
                                        this.props.staticKeyWords.stats,
                                      ),
                                    ),
                                  ),
                                  p.a.createElement(
                                    "tbody",
                                    null,
                                    this.props.keyIndicatorsData.hasOwnProperty(
                                      "indicators",
                                    ) &&
                                      this.props.keyIndicatorsData.indicators
                                        .length
                                      ? this.props.keyIndicatorsData.indicators.map(
                                          function (e, a) {
                                            return p.a.createElement(
                                              "tr",
                                              { key: a },
                                              p.a.createElement(
                                                "td",
                                                { colSpan: "2" },
                                                e.indicatorHomeRank
                                                  ? p.a.createElement(
                                                      "div",
                                                      {
                                                        className:
                                                          "keyIndicators " +
                                                          (parseInt(
                                                            e.indicatorHomeRank,
                                                          ) <
                                                          parseInt(
                                                            e.indicatorAwayRank,
                                                          )
                                                            ? "home-bg"
                                                            : ""),
                                                      },
                                                      p.a.createElement(
                                                        "div",
                                                        { className: "text" },
                                                        e.indicatorHome,
                                                      ),
                                                      p.a.createElement(
                                                        "div",
                                                        { className: "rank" },
                                                        e.indicatorHomeRank,
                                                      ),
                                                    )
                                                  : p.a.createElement(
                                                      "div",
                                                      {
                                                        className:
                                                          "home-text pr-10",
                                                      },
                                                      e.indicatorHome,
                                                    ),
                                              ),
                                              p.a.createElement(
                                                "td",
                                                null,
                                                p.a.createElement(
                                                  "div",
                                                  null,
                                                  e.indicatorName,
                                                ),
                                              ),
                                              p.a.createElement(
                                                "td",
                                                { colSpan: "2" },
                                                e.indicatorAwayRank
                                                  ? p.a.createElement(
                                                      "div",
                                                      {
                                                        className:
                                                          "keyIndicators " +
                                                          (parseInt(
                                                            e.indicatorAwayRank,
                                                          ) <
                                                          parseInt(
                                                            e.indicatorHomeRank,
                                                          )
                                                            ? "away-bg"
                                                            : ""),
                                                      },
                                                      p.a.createElement(
                                                        "div",
                                                        { className: "rank" },
                                                        e.indicatorAwayRank,
                                                      ),
                                                      p.a.createElement(
                                                        "div",
                                                        { className: "text" },
                                                        e.indicatorAway,
                                                      ),
                                                    )
                                                  : p.a.createElement(
                                                      "div",
                                                      {
                                                        className:
                                                          "away-text pl-15",
                                                      },
                                                      e.indicatorAway,
                                                    ),
                                              ),
                                            );
                                          },
                                        )
                                      : p.a.createElement(
                                          "tr",
                                          null,
                                          p.a.createElement(
                                            "td",
                                            { colSpan: "5" },
                                            p.a.createElement(I.a, {
                                              isLoader: this.props.loader,
                                              isNoData:
                                                !this.props.loader &&
                                                ((this.props.keyIndicatorsData.hasOwnProperty(
                                                  "indicators",
                                                ) &&
                                                  !this.props.keyIndicatorsData
                                                    .indicators.length) ||
                                                  void 0 ===
                                                    this.props.KeyIndicators),
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
      var S = Object(c.b)(
          function (e) {
            return {
              selectedTable: e.seasonalstats.selectedTable,
              keyIndicatorsData: e.seasonalstats.keyIndicatorsData,
              selectedTableId: e.seasonalstats.selectedTableId,
              loader: e.app.loader,
              staticKeyWords: e.app.staticKeyWords,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(l.b)({}, e) };
          },
        )(F),
        H = t(5),
        j = (function (e) {
          Object(o.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(r.a)(t, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.dispatch(Object(H.m)(!0)),
                    this.props.dispatch(Object(g.g)([])),
                    ((this.props.homeTeamId && this.props.awayTeamId) ||
                      this.props.type) &&
                      (this.props.dispatch(
                        Object(g.e)(
                          this.props.tableAndRoutes,
                          this.props.match.params.eventId,
                          this.props.match.params.competitionId
                            ? this.props.match.params.competitionId
                            : this.props.match.params.leagueId,
                          this.props.isTournament,
                          this.props.type,
                          this.props.languageId,
                          this.props.homeTeamId,
                          this.props.awayTeamId,
                        ),
                      ),
                      "team" === this.props.type
                        ? this.props.dispatch(
                            Object(H.e)(
                              "TeamSeasonalStats",
                              this.props.competitionName,
                            ),
                          )
                        : this.props.isTournament
                          ? this.props.competitionName &&
                            this.props.dispatch(
                              Object(H.e)(
                                "TournamentSeasonalStats",
                                this.props.competitionName,
                              ),
                            )
                          : this.props.homeTeamName &&
                            this.props.awayTeamName &&
                            this.props.dispatch(
                              Object(H.e)(
                                "SeasonalStats",
                                this.props.homeTeamName +
                                  " vs " +
                                  this.props.awayTeamName,
                              ),
                            )),
                    this.props.staticKeyWords &&
                      Object.keys(this.props.staticKeyWords).length > 0 &&
                      this.props.dispatch(
                        Object(g.h)({
                          keyWords: this.props.staticKeyWords,
                          type: this.props.type,
                        }),
                      );
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  if (
                    ((((this.props.homeTeamId !== e.homeTeamId ||
                      this.props.awayTeamId !== e.awayTeamId) &&
                      e.homeTeamId &&
                      ("" + e.homeTeamId).length > 0 &&
                      e.awayTeamId &&
                      ("" + e.awayTeamId).length > 0) ||
                      (e.type && this.props.type != e.type)) &&
                      (this.props.dispatch(Object(H.m)(!0)),
                      this.props.dispatch(
                        Object(g.e)(
                          e.tableAndRoutes,
                          e.eventInfo.eventId,
                          e.eventInfo.competitionId
                            ? e.eventInfo.competitionId
                            : e.match.params.leagueId,
                          e.isTournament,
                          e.type,
                          e.languageId,
                          e.homeTeamId,
                          e.awayTeamId,
                        ),
                      )),
                    "team" === e.type)
                  )
                    e.competitionName !== this.props.competitionName &&
                      this.props.dispatch(
                        Object(H.e)("TeamSeasonalStats", e.competitionName),
                      );
                  else if (e.isTournament)
                    e.competitionName !== this.props.competitionName &&
                      this.props.dispatch(
                        Object(H.e)(
                          "TournamentSeasonalStats",
                          e.competitionName,
                        ),
                      );
                  else {
                    var a, t;
                    (null === (a = this.props) || void 0 === a
                      ? void 0
                      : a.awayTeamName) &&
                      (null === (t = this.props) || void 0 === t
                        ? void 0
                        : t.awayTeamName) &&
                      e.homeTeamName !== this.props.homeTeamName &&
                      e.awayTeamName !== this.props.awayTeamName &&
                      this.props.dispatch(
                        Object(H.e)(
                          "SeasonalStats",
                          e.homeTeamName + " vs " + e.awayTeamName,
                        ),
                      );
                  }
                  this.props.staticKeyWords !== e.staticKeyWords &&
                    this.props.dispatch(
                      Object(g.h)({ keyWords: e.staticKeyWords, type: e.type }),
                    );
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.props.dispatch(
                    Object(H.i)({ disable: !0, tab: "STATS" }),
                  ),
                    Object(H.a)() && this.props.dispatch(Object(H.j)(!0));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(H.j)(!1)),
                    this.props.dispatch(
                      Object(H.i)({ disable: !1, tab: "STATS" }),
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return p.a.createElement(
                    "div",
                    { className: "pageContent" },
                    p.a.createElement(
                      "div",
                      { className: "seasonalStats" },
                      p.a.createElement(
                        "div",
                        { className: "seasonalStats-tablesList" },
                        p.a.createElement(
                          "div",
                          { className: "listItems" },
                          p.a.createElement(
                            "ul",
                            null,
                            this.props.tablesList &&
                              this.props.tablesList.map(function (a, t) {
                                if (
                                  (e.props.isTournament && 2 != a.tableId) ||
                                  !e.props.isTournament
                                )
                                  return p.a.createElement(
                                    "li",
                                    {
                                      className: e.props.dispatch(
                                        Object(g.f)(
                                          a.tableId,
                                          e.props.tableAndRoutes,
                                          t,
                                          e.props.isTournament,
                                          e.props.type,
                                        ),
                                      ),
                                      key: t,
                                      onClick: function () {
                                        return e.props.dispatch(
                                          Object(g.c)({
                                            table: a,
                                            eventId: e.props.eventInfo.eventId,
                                            competitionId: e.props.eventInfo
                                              .competitionId
                                              ? e.props.eventInfo.competitionId
                                              : e.props.match.params.leagueId,
                                            languageId: e.props.languageId,
                                            homeTeamId: e.props.homeTeamId,
                                            awayTeamId: e.props.awayTeamId,
                                          }),
                                        );
                                      },
                                    },
                                    p.a.createElement(
                                      h.b,
                                      {
                                        to: e.props.dispatch(
                                          Object(g.a)(
                                            a.tableId,
                                            e.props.tableAndRoutes,
                                            t,
                                          ),
                                        ),
                                      },
                                      a.tableName,
                                    ),
                                  );
                              }),
                          ),
                        ),
                      ),
                      p.a.createElement(
                        d.c,
                        null,
                        p.a.createElement(d.a, {
                          exact: !0,
                          path: this.props.match.path + "/standings",
                          render: function (a) {
                            return p.a.createElement(
                              O,
                              Object.assign({}, a, {
                                isTournament: e.props.isTournament,
                                type: e.props.type,
                                teamId: e.props.match.params.teamId,
                              }),
                            );
                          },
                        }),
                        p.a.createElement(d.a, {
                          exact: !0,
                          path: this.props.match.path + "/keyindicators",
                          component: S,
                        }),
                        p.a.createElement(d.a, {
                          exact: !0,
                          path: this.props.match.path + "/handicap",
                          render: function (a) {
                            var t, s;
                            return p.a.createElement(
                              O,
                              Object.assign({}, a, {
                                rankingBasis:
                                  null === (t = e.props) ||
                                  void 0 === t ||
                                  null === (s = t.staticKeyWords) ||
                                  void 0 === s
                                    ? void 0
                                    : s.RankingBasisHandicap,
                                isTournament: e.props.isTournament,
                                type: e.props.type,
                                teamId: e.props.match.params.teamId,
                              }),
                            );
                          },
                        }),
                        p.a.createElement(d.a, {
                          exact: !0,
                          path: this.props.match.path + "/hafu",
                          render: function (a) {
                            return p.a.createElement(
                              O,
                              Object.assign({}, a, {
                                isTournament: e.props.isTournament,
                                type: e.props.type,
                                teamId: e.props.match.params.teamId,
                              }),
                            );
                          },
                        }),
                        p.a.createElement(d.a, {
                          exact: !0,
                          path: this.props.match.path + "/handicaphad",
                          render: function (a) {
                            var t, s;
                            return p.a.createElement(
                              O,
                              Object.assign({}, a, {
                                rankingBasis:
                                  null === (t = e.props) ||
                                  void 0 === t ||
                                  null === (s = t.staticKeyWords) ||
                                  void 0 === s
                                    ? void 0
                                    : s.RankingBasisHandicapHAD,
                                isTournament: e.props.isTournament,
                                type: e.props.type,
                                teamId: e.props.match.params.teamId,
                              }),
                            );
                          },
                        }),
                        p.a.createElement(d.a, {
                          exact: !0,
                          path:
                            this.props.match.path + "/teamstoscoreoddoreven",
                          render: function (a) {
                            var t, s;
                            return p.a.createElement(
                              O,
                              Object.assign({}, a, {
                                rankingBasis:
                                  null === (t = e.props) ||
                                  void 0 === t ||
                                  null === (s = t.staticKeyWords) ||
                                  void 0 === s
                                    ? void 0
                                    : s.RankingBasisOddEven,
                                isTournament: e.props.isTournament,
                                type: e.props.type,
                                teamId: e.props.match.params.teamId,
                              }),
                            );
                          },
                        }),
                        p.a.createElement(d.a, {
                          exact: !0,
                          path: this.props.match.path + "/hilo",
                          render: function (a) {
                            var t, s, r, o;
                            return p.a.createElement(
                              O,
                              Object.assign({}, a, {
                                rankingBasiswlhalf:
                                  null === (t = e.props) ||
                                  void 0 === t ||
                                  null === (s = t.staticKeyWords) ||
                                  void 0 === s
                                    ? void 0
                                    : s.RankingBasisFHHiLo,
                                rankingBasisWL:
                                  null === (r = e.props) ||
                                  void 0 === r ||
                                  null === (o = r.staticKeyWords) ||
                                  void 0 === o
                                    ? void 0
                                    : o.RankingBasisHiLo,
                                isTournament: e.props.isTournament,
                                type: e.props.type,
                                teamId: e.props.match.params.teamId,
                              }),
                            );
                          },
                        }),
                        p.a.createElement(d.a, {
                          exact: !0,
                          path: this.props.match.path + "/cornershilo",
                          render: function (a) {
                            var t, s;
                            return p.a.createElement(
                              O,
                              Object.assign({}, a, {
                                rankingBasis:
                                  null === (t = e.props) ||
                                  void 0 === t ||
                                  null === (s = t.staticKeyWords) ||
                                  void 0 === s
                                    ? void 0
                                    : s.RankingBasisCornersHiLo,
                                isTournament: e.props.isTournament,
                                type: e.props.type,
                                teamId: e.props.match.params.teamId,
                              }),
                            );
                          },
                        }),
                        p.a.createElement(d.a, {
                          exact: !0,
                          path: this.props.match.path + "/totalgoals",
                          render: function (a) {
                            return p.a.createElement(
                              O,
                              Object.assign({}, a, {
                                isTournament: e.props.isTournament,
                                type: e.props.type,
                                teamId: e.props.match.params.teamId,
                              }),
                            );
                          },
                        }),
                        p.a.createElement(d.a, {
                          exact: !0,
                          path: this.props.match.path + "/firstteamtoscore",
                          render: function (a) {
                            var t, s;
                            return p.a.createElement(
                              O,
                              Object.assign({}, a, {
                                rankingBasis:
                                  null === (t = e.props) ||
                                  void 0 === t ||
                                  null === (s = t.staticKeyWords) ||
                                  void 0 === s
                                    ? void 0
                                    : s.RankingBasisFirstTeamtoScore,
                                isTournament: e.props.isTournament,
                                type: e.props.type,
                                teamId: e.props.match.params.teamId,
                              }),
                            );
                          },
                        }),
                        p.a.createElement(d.a, {
                          exact: !0,
                          path: this.props.match.path + "/correctscore",
                          render: function (a) {
                            return p.a.createElement(
                              O,
                              Object.assign({}, a, {
                                correctScoreallTournament:
                                  e.props.staticKeyWords.correctScoreTournament,
                                isTournament: e.props.isTournament,
                                type: e.props.type,
                                teamId: e.props.match.params.teamId,
                              }),
                            );
                          },
                        }),
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
            tablesList: e.seasonalstats.tablesList,
            eventInfo: e.app.eventInfo,
            selectedTable: e.seasonalstats.selectedTable,
            tableAndRoutes: e.seasonalstats.tableAndRoutes,
            staticKeyWords: e.app.staticKeyWords,
            languageId: e.app.languageId,
            homeTeamId: e.match.bannerData.homeTeamId,
            awayTeamId: e.match.bannerData.awayTeamId,
            lastUpdated: e.seasonalstats.lastUpdated,
            homeTeamName: e.match.homeTeamName,
            awayTeamName: e.match.awayTeamName,
            competitionName:
              e.tournamentleague.comepetitionAndDate.competitionName,
          };
        },
        function (e) {
          return { dispatch: e, actions: Object(l.b)({}, e) };
        },
      )(j);
    },
  },
]);
//# sourceMappingURL=3.cf333e38.chunk.js.map
