(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [2],
  {
    455: function (e, a, t) {
      "use strict";
      var s = t(91),
        o = t(92),
        r = t(94),
        l = t(93),
        n = t(1),
        i = t.n(n),
        c = (function (e) {
          Object(r.a)(t, e);
          var a = Object(l.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              {
                key: "render",
                value: function () {
                  return 0 === Number(this.props.home) ||
                    0 === Number(this.props.away)
                    ? i.a.createElement("div", null)
                    : i.a.createElement(
                        "div",
                        { className: "goalsperGame-graph" },
                        i.a.createElement(
                          "div",
                          { className: "goalsperGame-content" },
                          i.a.createElement(
                            "div",
                            { className: "homeGoals-data" },
                            i.a.createElement(
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
                            i.a.createElement(
                              "div",
                              { className: "home-text" },
                              this.props.homeTeamName,
                            ),
                          ),
                          i.a.createElement("div", {
                            className: "graphTitle",
                            dangerouslySetInnerHTML: {
                              __html: this.props.title,
                            },
                          }),
                          i.a.createElement(
                            "div",
                            { className: "awayGoals-data" },
                            i.a.createElement(
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
                            i.a.createElement(
                              "div",
                              { className: "away-text" },
                              this.props.awayTeamName,
                            ),
                          ),
                        ),
                        i.a.createElement("div", {
                          className: "goalsperGame-teamNames",
                        }),
                      );
                },
              },
            ]),
            t
          );
        })(n.Component);
      a.a = c;
    },
    456: function (e, a, t) {
      "use strict";
      var s = t(0),
        o = t(25),
        r = t(91),
        l = t(92),
        n = t(94),
        i = t(93),
        c = t(1),
        p = t.n(c),
        m = t(454),
        h = (function (e) {
          Object(n.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(r.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
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
                    r = [];
                  if (this.props.isDirect)
                    (a = this.props.data.labels),
                      (t = this.props.data.homeTeam),
                      (r = this.props.data.awayTeam);
                  else if (this.props.data && this.props.data.length > 0) {
                    var l,
                      n = Object(o.a)(this.props.data);
                    try {
                      for (n.s(); !(l = n.n()).done; ) {
                        var i = l.value;
                        a.push(i.outcomeName),
                          t.push(i.homeGoals),
                          r.push(i.awayGoals);
                      }
                    } catch (p) {
                      n.e(p);
                    } finally {
                      n.f();
                    }
                  }
                  var c = this;
                  m.a.chart(
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
                                c.props.homeLegend +
                                "</span>"
                            : '<span style="color:#FFF;font-weight:normal">' +
                                c.props.awayLegend +
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
                      { name: "away", data: r },
                    ]),
                    e),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return p.a.createElement("div", {
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
        })(c.Component);
      a.a = h;
    },
    457: function (e, a, t) {
      "use strict";
      var s = t(91),
        o = t(92),
        r = t(94),
        l = t(93),
        n = t(1),
        i = t.n(n),
        c = t(66),
        p = (function (e) {
          Object(r.a)(t, e);
          var a = Object(l.a)(t);
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
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      "div",
                      { className: "dualHilo-graph" },
                      i.a.createElement(
                        "div",
                        { className: "hiLoGraph" },
                        i.a.createElement(
                          "div",
                          { className: "hiLoGraph-header" },
                          i.a.createElement(
                            "div",
                            { className: "mainTitle medium" },
                            this.props.title,
                          ),
                          i.a.createElement(
                            "div",
                            { className: "mainTitle home-text" },
                            this.props.hideTeamNames
                              ? ""
                              : this.props.homeTeamName,
                            " ",
                            this.props.showSubTitle
                              ? i.a.createElement(
                                  "small",
                                  null,
                                  "(",
                                  this.props.staticKeyWords.last8HomeResults,
                                  ")",
                                )
                              : "",
                          ),
                          i.a.createElement("div", null),
                        ),
                        i.a.createElement(
                          "div",
                          { className: "barGraph" },
                          i.a.createElement(
                            "div",
                            { className: "barsContent" },
                            this.props.data &&
                              this.props.data.map(function (e, a) {
                                return i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  e.homeTeamHigh &&
                                    e.homeTeamLow &&
                                    i.a.createElement(
                                      "div",
                                      { className: "hiLoBar", key: "bar" + a },
                                      i.a.createElement(
                                        "span",
                                        {
                                          className: "awayBar",
                                          style: { flex: e.homeTeamHigh },
                                        },
                                        e.homeTeamHigh > 0
                                          ? e.homeTeamHigh
                                          : "",
                                      ),
                                      i.a.createElement(
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
                      i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                          "div",
                          { className: "line-title middleLine" },
                          this.props.hideLine
                            ? ""
                            : this.props.staticKeyWords.line,
                        ),
                        i.a.createElement(
                          "div",
                          { className: "hiLoGraph-body" },
                          i.a.createElement(
                            "div",
                            { className: "lineContent" },
                            this.props.data.map(function (e, a) {
                              return i.a.createElement(
                                i.a.Fragment,
                                null,
                                e.homeTeamHigh &&
                                  e.homeTeamLow &&
                                  i.a.createElement(
                                    "span",
                                    { key: "body" + a },
                                    e.line,
                                  ),
                              );
                            }),
                          ),
                        ),
                      ),
                      i.a.createElement(
                        "div",
                        { className: "hiLoGraph" },
                        i.a.createElement(
                          "div",
                          { className: "hiLoGraph-header" },
                          i.a.createElement("div", null),
                          i.a.createElement(
                            "div",
                            { className: "mainTitle away-text" },
                            this.props.hideTeamNames
                              ? ""
                              : this.props.awayTeamName,
                            " ",
                            this.props.showSubTitle
                              ? i.a.createElement(
                                  "small",
                                  null,
                                  "(",
                                  this.props.staticKeyWords.last8AwayResults,
                                  ")",
                                )
                              : "",
                          ),
                          i.a.createElement(
                            "div",
                            { className: "legend-info" },
                            this.props.hideLegend
                              ? ""
                              : i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    "div",
                                    { className: "homeLegend" },
                                    this.props.staticKeyWords.highIcon,
                                  ),
                                  " ",
                                  i.a.createElement(
                                    "div",
                                    { className: "awayLegend" },
                                    this.props.staticKeyWords.lowIcon,
                                  ),
                                ),
                          ),
                        ),
                        i.a.createElement(
                          "div",
                          { className: "barGraph" },
                          i.a.createElement(
                            "div",
                            { className: "barsContent" },
                            this.props.data.map(function (e, a) {
                              return (
                                console.log(e),
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  e.homeTeamHigh &&
                                    e.homeTeamLow &&
                                    i.a.createElement(
                                      "div",
                                      { key: "hilo" + a, className: "hiLoBar" },
                                      i.a.createElement(
                                        "span",
                                        {
                                          className: "awayBar",
                                          style: { flex: e.awayTeamHigh },
                                        },
                                        e.awayTeamHigh > 0
                                          ? e.awayTeamHigh
                                          : "",
                                      ),
                                      i.a.createElement(
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
      a.a = Object(c.b)(function (e) {
        return { staticKeyWords: e.app.staticKeyWords };
      })(p);
    },
    460: function (e, a, t) {
      "use strict";
      var s = t(0),
        o = t(25),
        r = t(91),
        l = t(92),
        n = t(94),
        i = t(93),
        c = t(1),
        p = t.n(c),
        m = t(454),
        h = (function (e) {
          Object(n.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(r.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.loadGraph();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, a) {
                  JSON.stringify(e.data) !== JSON.stringify(this.props.data) &&
                    Object.keys(this.props.data).length > 0 &&
                    this.loadGraph();
                },
              },
              {
                key: "loadGraph",
                value: function () {
                  var e,
                    a,
                    t = [],
                    r = [],
                    l = [],
                    n = [],
                    i = Object(o.a)(this.props.data);
                  try {
                    for (i.s(); !(a = i.n()).done; ) {
                      var c = a.value;
                      t.push(c.goalMinutes),
                        r.push(c.homeTeamGoals),
                        l.push(c.awayTeamGoals),
                        this.props.showLine &&
                          n.push(c.homeTeamGoals + c.awayTeamGoals);
                    }
                  } catch (p) {
                    i.e(p);
                  } finally {
                    i.f();
                  }
                  m.a.chart(
                    this.props.loadin,
                    ((e = {
                      chart: { backgroundColor: "rgba(255, 255, 255, 0.0)" },
                      title: {
                        text: this.props.title,
                        style: { color: "#FFF" },
                      },
                      xAxis: {
                        categories: t,
                        lineWidth: 0,
                        labels: {
                          style: {
                            color: "#FFF",
                            fontSize: "12px",
                            fontWeight: "normal",
                          },
                        },
                        gridLineWidth: 0,
                      },
                      yAxis: {
                        gridLineWidth: 0,
                        labels: { enabled: !1 },
                        title: { text: !1 },
                      },
                      tooltip: { enabled: !1 },
                      legend: { enabled: !1 },
                      credits: { enabled: !1 },
                      colors: ["#28d0ce", "#e47273"],
                      plotOptions: {
                        column: { minPointLength: 3 },
                        series: {
                          dataLabels: {
                            enabled: !!this.props.showLabels,
                            color: "#FFFFFF",
                            textAlign: "left",
                            fontSize: "12px",
                            fontWeight: "normal",
                          },
                          enableMouseTracking: !1,
                          pointPadding: 0,
                          borderWidth: 0,
                          borderRadiusTopLeft: "50%",
                          borderRadiusTopRight: "50%",
                        },
                      },
                    }),
                    Object(s.a)(e, "credits", { enabled: !1 }),
                    Object(s.a)(e, "series", [
                      { type: "column", name: "home", data: r },
                      { type: "column", name: "away", data: l },
                      {
                        type: "line",
                        name: "Total",
                        data: n,
                        marker: {
                          lineWidth: 2,
                          lineColor: "white",
                          fillColor: "#f8a824",
                        },
                      },
                    ]),
                    e),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return p.a.createElement(
                    "div",
                    {
                      className: [
                        this.props.showTable
                          ? "goalTimes"
                          : "totalGoals-analysis",
                        this.props.isSummaryGT ? "summary-goalTimes" : "",
                      ].join(" "),
                    },
                    p.a.createElement(
                      "div",
                      {
                        className: [
                          this.props.showTable ? "goalTimes-graph" : "",
                          this.props.isSummaryGT ? "goalTimes-graph-m150" : "",
                        ].join(" "),
                      },
                      p.a.createElement("div", {
                        id: this.props.loadin,
                        style: {
                          width: this.props.width,
                          height: this.props.height,
                        },
                      }),
                    ),
                    this.props.showTable && this.props.data.length > 0
                      ? p.a.createElement(
                          "table",
                          { className: "tableDefault tableForGraph" },
                          p.a.createElement(
                            "tbody",
                            null,
                            p.a.createElement(
                              "tr",
                              { className: "home-bg" },
                              p.a.createElement(
                                "td",
                                {
                                  className:
                                    "white-bg " +
                                    (this.props.isSummaryGT
                                      ? "w-150"
                                      : "w-100px"),
                                },
                                p.a.createElement(
                                  "div",
                                  { className: "home-text" },
                                  this.props.homeTeamName,
                                  p.a.createElement("br", null),
                                  p.a.createElement(
                                    "span",
                                    null,
                                    this.props.staticKeyWords
                                      ? " (" +
                                          this.props.staticKeyWords
                                            .last8HomeResults +
                                          ")"
                                      : "",
                                  ),
                                ),
                              ),
                              this.props.data.map(function (e, a) {
                                return p.a.createElement(
                                  "td",
                                  { key: "gtt_td_" + a },
                                  p.a.createElement(
                                    "div",
                                    null,
                                    e.homeTeamGoals,
                                  ),
                                );
                              }),
                            ),
                            p.a.createElement(
                              "tr",
                              { className: "away-bg" },
                              p.a.createElement(
                                "td",
                                { className: "white-bg w-100px" },
                                p.a.createElement(
                                  "div",
                                  { className: "away-text" },
                                  this.props.awayTeamName,
                                  p.a.createElement("br", null),
                                  p.a.createElement(
                                    "span",
                                    null,
                                    this.props.staticKeyWords
                                      ? " (" +
                                          this.props.staticKeyWords
                                            .last8AwayResults +
                                          ")"
                                      : "",
                                  ),
                                ),
                              ),
                              this.props.data.map(function (e, a) {
                                return p.a.createElement(
                                  "td",
                                  { key: "gtt_td_" + a },
                                  p.a.createElement(
                                    "div",
                                    null,
                                    e.awayTeamGoals,
                                  ),
                                );
                              }),
                            ),
                          ),
                        )
                      : "",
                  );
                },
              },
            ]),
            t
          );
        })(c.Component);
      a.a = h;
    },
    464: function (e, a, t) {
      "use strict";
      var s = t(0),
        o = t(25),
        r = t(91),
        l = t(92),
        n = t(94),
        i = t(93),
        c = t(1),
        p = t.n(c),
        m = t(454),
        h = (function (e) {
          Object(n.a)(t, e);
          var a = Object(i.a)(t);
          function t() {
            return Object(r.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.data &&
                    Object.keys(this.props.data).length > 0 &&
                    this.loadGraph();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, a) {
                  JSON.stringify(e.data) !== JSON.stringify(this.props.data) &&
                    Object.keys(this.props.data).length > 0 &&
                    this.loadGraph();
                },
              },
              {
                key: "loadGraph",
                value: function () {
                  var e,
                    a = [],
                    t = [],
                    r = [];
                  if (
                    this.props.data &&
                    this.props.data.homeTeam &&
                    this.props.data.homeTeam.length > 0
                  ) {
                    var l,
                      n = Object(o.a)(this.props.data.homeTeam);
                    try {
                      for (n.s(); !(l = n.n()).done; ) {
                        var i = l.value;
                        t.push("#28d0ce"), a.push(i.score), r.push(i.goals);
                      }
                    } catch (u) {
                      n.e(u);
                    } finally {
                      n.f();
                    }
                  }
                  if (
                    this.props.data &&
                    this.props.data.draw &&
                    this.props.data.draw.length > 0
                  ) {
                    var c,
                      p = Object(o.a)(this.props.data.draw);
                    try {
                      for (p.s(); !(c = p.n()).done; ) {
                        i = c.value;
                        t.push("#FFFFFF"), a.push(i.score), r.push(i.goals);
                      }
                    } catch (u) {
                      p.e(u);
                    } finally {
                      p.f();
                    }
                  }
                  if (
                    this.props.data &&
                    this.props.data.awayTeam &&
                    this.props.data.awayTeam.length > 0
                  ) {
                    var h,
                      d = Object(o.a)(this.props.data.awayTeam);
                    try {
                      for (d.s(); !(h = d.n()).done; ) {
                        i = h.value;
                        t.push("#e47273"), a.push(i.score), r.push(i.goals);
                      }
                    } catch (u) {
                      d.e(u);
                    } finally {
                      d.f();
                    }
                  }
                  m.a.chart(
                    this.props.loadin,
                    ((e = {
                      chart: {
                        type: "column",
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
                          useHTML: !0,
                          style: {
                            color: "#000",
                            backgroundColor: "#FFF",
                            borderRadius: "50%",
                            padding: "8px",
                            fontSize: "12px",
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
                      colors: t,
                    }),
                    Object(s.a)(e, "tooltip", { enabled: !1 }),
                    Object(s.a)(e, "credits", { enabled: !1 }),
                    Object(s.a)(e, "plotOptions", {
                      column: { minPointLength: 3 },
                      series: {
                        dataLabels: {
                          enabled: !0,
                          crop: !1,
                          overflow: "none",
                          colorByPoint: !0,
                          textAlign: "left",
                          style: {
                            textOutline: "0px",
                            fontSize: "12px",
                            fontWeight: "normal",
                          },
                          formatter: function () {
                            return (
                              '<span style="color: ' +
                              this.color +
                              '";"-webkit-text-stroke:px black">' +
                              this.y +
                              "</span>"
                            );
                          },
                        },
                        enableMouseTracking: !1,
                        borderWidth: 0,
                        borderRadiusTopLeft: "50%",
                        borderRadiusTopRight: "50%",
                      },
                    }),
                    Object(s.a)(e, "series", [
                      { name: "", colorByPoint: !0, data: r },
                    ]),
                    e),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return p.a.createElement("div", {
                    id: this.props.loadin,
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
        })(c.Component);
      a.a = h;
    },
    508: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t(91),
        o = t(92),
        r = t(94),
        l = t(93),
        n = t(1),
        i = t.n(n),
        c = t(66),
        p = t(33),
        m = t(153),
        h = (t(114), t(227)),
        d = t(95),
        u = t(237),
        y = t(5),
        b = (function (e) {
          Object(r.a)(t, e);
          var a = Object(l.a)(t);
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
              { key: "componentWillMount", value: function () {} },
              {
                key: "componentDidMount",
                value: function () {
                  var e, a;
                  this.props.dispatch(
                    Object(h.e)(this.props.selectedTab, null),
                  ),
                    (null === (e = this.props) || void 0 === e
                      ? void 0
                      : e.homeTeamName) &&
                      (null === (a = this.props) || void 0 === a
                        ? void 0
                        : a.awayTeamName) &&
                      this.props.dispatch(
                        Object(y.e)(
                          "RecentFormTab",
                          this.props.homeTeamName +
                            " vs " +
                            this.props.awayTeamName,
                        ),
                      ),
                    this.props.dispatch(Object(m.e)(1)),
                    this.props.dispatch(Object(m.d)(1));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, a) {
                  var t, s;
                  (null === (t = this.props) || void 0 === t
                    ? void 0
                    : t.homeTeamName) &&
                    (null === (s = this.props) || void 0 === s
                      ? void 0
                      : s.awayTeamName) &&
                    (null === e || void 0 === e ? void 0 : e.homeTeamName) !==
                      this.props.homeTeamName &&
                    (null === e || void 0 === e ? void 0 : e.awayTeamName) !==
                      this.props.awayTeamName &&
                    (this.props.dispatch(
                      Object(h.e)(this.props.selectedTab, null),
                    ),
                    this.props.dispatch(
                      Object(y.e)(
                        "RecentFormTab",
                        this.props.homeTeamName +
                          " vs " +
                          this.props.awayTeamName,
                      ),
                    ));
                },
              },
              {
                key: "optionSelected",
                value: function (e, a) {
                  this.props.dispatch(
                    Object(h.d)(
                      a.target.value,
                      m.b,
                      this.props.selectedTab,
                      e,
                      this.props.homeTeamId,
                      this.props.awayTeamId,
                      this.props.languageId,
                      {
                        selectedHomeOptionId:
                          "home" === e
                            ? a.target.value
                            : this.props.defaultHomeOptionId,
                        selectedAwayOptionId:
                          "away" === e
                            ? a.target.value
                            : this.props.defaultAwayOptionId,
                      },
                    ),
                  ),
                    "home" === e
                      ? this.props.dispatch(Object(m.e)(a.target.value))
                      : this.props.dispatch(Object(m.d)(a.target.value)),
                    this.props.onOptionChange &&
                      this.props.onOptionChange(e, a.target.value);
                },
              },
              {
                key: "handleCornersStatus",
                value: function (e, a) {
                  var t = Object(h.a)(e, "corners", a, ""),
                    s = "-";
                  return (
                    t &&
                      null != t &&
                      "" !== t &&
                      "-" !== t &&
                      (s =
                        ("h" === t.toLowerCase().charAt(0).toLowerCase()
                          ? this.props.staticKeyWords.highIcon
                          : this.props.staticKeyWords.lowIcon) + t.slice(1)),
                    s
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return i.a.createElement(
                    "div",
                    { className: "tableTwo-column" },
                    i.a.createElement(
                      "div",
                      { className: "tableHome" },
                      i.a.createElement(
                        "div",
                        { className: "tableFull-width" },
                        i.a.createElement(
                          "div",
                          { className: "tableHeader-home" },
                          i.a.createElement(
                            "div",
                            { className: "tableHeading" },
                            this.props.homeTeamName,
                            " ",
                            i.a.createElement(
                              "span",
                              null,
                              "(",
                              this.props.staticKeyWords.recentResults,
                              ")",
                            ),
                          ),
                          i.a.createElement(
                            "div",
                            { className: "tableHeading-rightSection" },
                            i.a.createElement(
                              "div",
                              { className: "form-group" },
                              i.a.createElement(
                                "div",
                                { className: "form-control" },
                                i.a.createElement(
                                  "select",
                                  {
                                    className: "select-margin",
                                    value: this.props.defaultHomeOptionId,
                                    onChange: this.optionSelected.bind(
                                      this,
                                      "home",
                                    ),
                                  },
                                  this.props.lastEncountersOptions.map(
                                    function (a, t) {
                                      return i.a.createElement(
                                        "option",
                                        { key: t, value: a.id },
                                        e.selectedHomeOptionId,
                                        " ",
                                        a.name,
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
                          { className: "tableDefault" },
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
                              ),
                              i.a.createElement(
                                "th",
                                null,
                                this.props.staticKeyWords.against,
                              ),
                              i.a.createElement(
                                "th",
                                null,
                                this.props.staticKeyWords.pos,
                              ),
                              "had" === this.props.selectedTab &&
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    "th",
                                    { className: "playerHT-FT" },
                                    this.props.staticKeyWords.scoreHt,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    this.props.staticKeyWords.wbyl,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    this.props.staticKeyWords.fhwbyl,
                                  ),
                                ),
                              "handicap" === this.props.selectedTab &&
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    "th",
                                    { className: "playerHT-FT" },
                                    this.props.staticKeyWords.ftScore,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    this.props.staticKeyWords.hdc,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    this.props.staticKeyWords.hHAD,
                                  ),
                                ),
                              "hilo" === this.props.selectedTab &&
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    "th",
                                    { className: "playerHT-FT" },
                                    this.props.staticKeyWords.scoreHt,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    { className: "w-50" },
                                    this.props.staticKeyWords.ttg,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    i.a.createElement(
                                      "div",
                                      null,
                                      this.props.staticKeyWords.fhHiLo,
                                      i.a.createElement(
                                        "div",
                                        { className: "form-group" },
                                        i.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          i.a.createElement(
                                            "select",
                                            {
                                              className: "select-margin",
                                              onChange: function (a) {
                                                return e.props.dispatch(
                                                  Object(h.c)(
                                                    a.target.value,
                                                    "home_fhHiLo",
                                                  ),
                                                );
                                              },
                                            },
                                            this.props.homefhHiLo &&
                                              this.props.homefhHiLo.map(
                                                function (a, t) {
                                                  return a ==
                                                    e.state.defaultFHHiloValue
                                                    ? i.a.createElement(
                                                        "option",
                                                        {
                                                          selected: !0,
                                                          key: t,
                                                          value: a,
                                                        },
                                                        a,
                                                      )
                                                    : i.a.createElement(
                                                        "option",
                                                        { key: t, value: a },
                                                        a,
                                                      );
                                                },
                                              ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    i.a.createElement(
                                      "div",
                                      null,
                                      this.props.staticKeyWords.hiLo,
                                      i.a.createElement(
                                        "div",
                                        { className: "form-group" },
                                        i.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          i.a.createElement(
                                            "select",
                                            {
                                              className: "select-margin",
                                              onChange: function (a) {
                                                return e.props.dispatch(
                                                  Object(h.c)(
                                                    a.target.value,
                                                    "home_hiLo",
                                                  ),
                                                );
                                              },
                                            },
                                            this.props.homehiLo &&
                                              this.props.homehiLo.map(
                                                function (a, t) {
                                                  return a ==
                                                    e.state.defaultHiloValue
                                                    ? i.a.createElement(
                                                        "option",
                                                        {
                                                          key: t,
                                                          selected: !0,
                                                          value: a,
                                                        },
                                                        a,
                                                      )
                                                    : i.a.createElement(
                                                        "option",
                                                        { key: t, value: a },
                                                        a,
                                                      );
                                                },
                                              ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              "corners" === this.props.selectedTab &&
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    "th",
                                    null,
                                    this.props.staticKeyWords.scoreHt,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    i.a.createElement(
                                      "div",
                                      null,
                                      this.props.staticKeyWords.cornersHiLo,
                                      i.a.createElement(
                                        "div",
                                        { className: "form-group" },
                                        i.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          i.a.createElement(
                                            "select",
                                            {
                                              className: "select-margin",
                                              onChange: function (a) {
                                                return e.props.dispatch(
                                                  Object(h.c)(
                                                    a.target.value,
                                                    "home_corners",
                                                  ),
                                                );
                                              },
                                            },
                                            this.props.homeCorners &&
                                              this.props.homeCorners.map(
                                                function (a, t) {
                                                  return a ==
                                                    e.state
                                                      .defaultCornersHiloValue
                                                    ? i.a.createElement(
                                                        "option",
                                                        {
                                                          key: t,
                                                          selected: !0,
                                                          value: a,
                                                        },
                                                        a,
                                                      )
                                                    : i.a.createElement(
                                                        "option",
                                                        { key: t, value: a },
                                                        a,
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
                          ),
                          i.a.createElement(
                            "tbody",
                            null,
                            this.props.homeTeamData.length
                              ? this.props.homeTeamData.map(function (a, t) {
                                  var s;
                                  return i.a.createElement(
                                    "tr",
                                    { key: t },
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        null,
                                        a.competitionName
                                          ? a.competitionName
                                          : "-",
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        null,
                                        Object(d.b)(a.kickOff, "banner").date,
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        null,
                                        a.homeOrAway ? a.homeOrAway : "-",
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        null,
                                        a.oppTeamName ? a.oppTeamName : "-",
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        null,
                                        a.teamPos ? a.teamPos : "-",
                                      ),
                                    ),
                                    "had" === e.props.selectedTab &&
                                      i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                          "td",
                                          { className: "noBorder-td" },
                                          i.a.createElement(
                                            "div",
                                            { className: "whiteColumn-bg" },
                                            a.fullTimeScore
                                              ? a.fullTimeScore
                                              : "-",
                                            " ",
                                            a.halfTimeScore
                                              ? "(" + a.halfTimeScore + ")"
                                              : "",
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: Object(h.a)(
                                                  a.fullTimeResult,
                                                  "",
                                                  "",
                                                  "class",
                                                ),
                                              },
                                              a.fullTimeResult
                                                ? "w" ===
                                                  a.fullTimeResult.toLowerCase()
                                                  ? e.props.staticKeyWords
                                                      .hadWinIcon
                                                  : "l" ===
                                                      a.fullTimeResult.toLowerCase()
                                                    ? e.props.staticKeyWords
                                                        .hadLossIcon
                                                    : "d" ===
                                                        a.fullTimeResult.toLowerCase()
                                                      ? e.props.staticKeyWords.d
                                                      : "-"
                                                : "-",
                                            ),
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: Object(h.a)(
                                                  a.firstHalfHad,
                                                  "",
                                                  "",
                                                  "class",
                                                ),
                                              },
                                              a.firstHalfHad
                                                ? "w" ===
                                                  a.firstHalfHad.toLowerCase()
                                                  ? e.props.staticKeyWords
                                                      .hadWinIcon
                                                  : "l" ===
                                                      a.firstHalfHad.toLowerCase()
                                                    ? e.props.staticKeyWords
                                                        .hadLossIcon
                                                    : "d" ===
                                                        a.firstHalfHad.toLowerCase()
                                                      ? e.props.staticKeyWords.d
                                                      : "-"
                                                : "-",
                                            ),
                                          ),
                                        ),
                                      ),
                                    "handicap" === e.props.selectedTab &&
                                      i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                          "td",
                                          { className: "noBorder-td" },
                                          i.a.createElement(
                                            "div",
                                            { className: "whiteColumn-bg" },
                                            a.fullTimeScore
                                              ? a.fullTimeScore
                                              : "-",
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          a.hdcOutcome
                                            ? i.a.createElement(
                                                "div",
                                                { className: "textIcon" },
                                                i.a.createElement(
                                                  "span",
                                                  { className: "hdcValue" },
                                                  a.hdcName,
                                                ),
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    className: Object(h.a)(
                                                      a.hdcOutcome,
                                                      "handicaps",
                                                      "",
                                                      "class",
                                                    ),
                                                  },
                                                  a.hdcOutcome &&
                                                    null !== a.hdcOutcome &&
                                                    "-" !== a.hdcOutcome
                                                    ? "w" ===
                                                      a.hdcOutcome.toLowerCase()
                                                      ? e.props.staticKeyWords
                                                          .hadWinIcon
                                                      : "l" ===
                                                          a.hdcOutcome.toLowerCase()
                                                        ? e.props.staticKeyWords
                                                            .hadLossIcon
                                                        : "d" ===
                                                            a.hdcOutcome.toLowerCase()
                                                          ? e.props
                                                              .staticKeyWords.d
                                                          : "-"
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
                                          a.hHadOutcome
                                            ? i.a.createElement(
                                                "div",
                                                { className: "textIcon" },
                                                i.a.createElement(
                                                  "span",
                                                  null,
                                                  a.hHadName,
                                                ),
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    className: Object(h.a)(
                                                      a.hHadOutcome,
                                                      "handicapsHAD",
                                                      "",
                                                      "class",
                                                    ),
                                                  },
                                                  a.hHadOutcome
                                                    ? "w" ===
                                                      a.hHadOutcome.toLowerCase()
                                                      ? e.props.staticKeyWords
                                                          .hadWinIcon
                                                      : "l" ===
                                                          a.hHadOutcome.toLowerCase()
                                                        ? e.props.staticKeyWords
                                                            .hadLossIcon
                                                        : "d" ===
                                                            a.hHadOutcome.toLowerCase()
                                                          ? e.props
                                                              .staticKeyWords.d
                                                          : "-"
                                                    : "-",
                                                ),
                                              )
                                            : i.a.createElement(
                                                "span",
                                                null,
                                                "-",
                                              ),
                                        ),
                                      ),
                                    "hilo" === e.props.selectedTab &&
                                      i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                          "td",
                                          { className: "noBorder-td" },
                                          i.a.createElement(
                                            "div",
                                            { className: "whiteColumn-bg" },
                                            a.fullTimeScore
                                              ? a.fullTimeScore
                                              : "-",
                                            " ",
                                            a.halfTimeScore
                                              ? "(" + a.halfTimeScore + ")"
                                              : "",
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            a.totalGoals,
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: Object(h.a)(
                                                  e.props.selectedHomeFhHiloTab,
                                                  "hilo",
                                                  a.fhHiLo,
                                                  "class",
                                                ),
                                              },
                                              "h" ===
                                                (null ===
                                                  (s = Object(h.a)(
                                                    e.props
                                                      .selectedHomeFhHiloTab,
                                                    "hilo",
                                                    a.fhHiLo,
                                                  )) || void 0 === s
                                                  ? void 0
                                                  : s.toLowerCase())
                                                ? e.props.staticKeyWords
                                                    .highIcon
                                                : e.props.staticKeyWords
                                                    .lowIcon,
                                              "  ",
                                            ),
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: Object(h.a)(
                                                  e.props.selectedHomeHiloTab,
                                                  "hilo",
                                                  a.hiLo,
                                                  "class",
                                                ),
                                              },
                                              "h" ===
                                                Object(h.a)(
                                                  e.props.selectedHomeHiloTab,
                                                  "hilo",
                                                  a.hiLo,
                                                ).toLowerCase()
                                                ? e.props.staticKeyWords
                                                    .highIcon
                                                : e.props.staticKeyWords
                                                    .lowIcon,
                                            ),
                                          ),
                                        ),
                                      ),
                                    "corners" === e.props.selectedTab &&
                                      i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                          "td",
                                          { className: "noBorder-td" },
                                          i.a.createElement(
                                            "div",
                                            { className: "whiteColumn-bg" },
                                            a.fullTimeScore
                                              ? a.fullTimeScore
                                              : "-",
                                            " ",
                                            a.halfTimeScore
                                              ? "(" + a.halfTimeScore + ")"
                                              : "",
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: Object(h.a)(
                                                  e.props.selectedHomeCornerTab,
                                                  "corners",
                                                  a.cornerHiLo,
                                                  "class",
                                                ),
                                              },
                                              e.handleCornersStatus(
                                                e.props.selectedHomeCornerTab,
                                                a.cornerHiLo,
                                              ),
                                            ),
                                          ),
                                        ),
                                      ),
                                  );
                                })
                              : i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement(
                                    "td",
                                    {
                                      colSpan:
                                        "had" === this.props.selectedTab
                                          ? 9
                                          : "handicap" ===
                                              this.props.selectedTab
                                            ? 8
                                            : "hilo" === this.props.selectedTab
                                              ? 11
                                              : "corners" ===
                                                  this.props.selectedTab
                                                ? 8
                                                : 0,
                                    },
                                    i.a.createElement(u.a, {
                                      isLoader: this.props.loader,
                                      isNoData:
                                        !this.props.loader &&
                                        !this.props.homeTeamData.length,
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
                    i.a.createElement(
                      "div",
                      { className: "tableAway" },
                      i.a.createElement(
                        "div",
                        { className: "tableFull-width" },
                        i.a.createElement(
                          "div",
                          { className: "tableHeader-away" },
                          i.a.createElement(
                            "div",
                            { className: "tableHeading" },
                            this.props.awayTeamName,
                            " ",
                            i.a.createElement(
                              "span",
                              null,
                              "(",
                              this.props.staticKeyWords.recentResults,
                              ")",
                            ),
                          ),
                          i.a.createElement(
                            "div",
                            { className: "tableHeading-rightSection" },
                            i.a.createElement(
                              "div",
                              { className: "form-group" },
                              i.a.createElement(
                                "div",
                                { className: "form-control" },
                                i.a.createElement(
                                  "select",
                                  {
                                    className: "select-margin",
                                    value: this.props.defaultAwayOptionId,
                                    onChange: this.optionSelected.bind(
                                      this,
                                      "away",
                                    ),
                                  },
                                  this.props.lastEncountersOptions.map(
                                    function (e, a) {
                                      return i.a.createElement(
                                        "option",
                                        { key: a, value: e.id },
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
                          { className: "tableDefault" },
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
                              ),
                              i.a.createElement(
                                "th",
                                null,
                                this.props.staticKeyWords.against,
                              ),
                              i.a.createElement(
                                "th",
                                null,
                                this.props.staticKeyWords.pos,
                              ),
                              "had" === this.props.selectedTab &&
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    "th",
                                    { className: "playerHT-FT" },
                                    this.props.staticKeyWords.scoreHt,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    this.props.staticKeyWords.wbyl,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    this.props.staticKeyWords.fhwbyl,
                                  ),
                                ),
                              "handicap" === this.props.selectedTab &&
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    "th",
                                    { className: "playerHT-FT" },
                                    this.props.staticKeyWords.ftScore,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    this.props.staticKeyWords.hdc,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    this.props.staticKeyWords.hHAD,
                                  ),
                                ),
                              "hilo" === this.props.selectedTab &&
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    "th",
                                    { className: "playerHT-FT" },
                                    this.props.staticKeyWords.scoreHt,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    { className: "w-50" },
                                    this.props.staticKeyWords.ttg,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    i.a.createElement(
                                      "div",
                                      null,
                                      this.props.staticKeyWords.fhHiLo,
                                      i.a.createElement(
                                        "div",
                                        { className: "form-group" },
                                        i.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          i.a.createElement(
                                            "select",
                                            {
                                              className: "select-margin",
                                              onChange: function (a) {
                                                return e.props.dispatch(
                                                  Object(h.c)(
                                                    a.target.value,
                                                    "away_fhHiLo",
                                                  ),
                                                );
                                              },
                                            },
                                            this.props.awayfhHiLo &&
                                              this.props.awayfhHiLo.map(
                                                function (a, t) {
                                                  return a ==
                                                    e.state.defaultFHHiloValue
                                                    ? i.a.createElement(
                                                        "option",
                                                        {
                                                          selected: !0,
                                                          key: t,
                                                          value: a,
                                                        },
                                                        a,
                                                      )
                                                    : i.a.createElement(
                                                        "option",
                                                        { key: t, value: a },
                                                        a,
                                                      );
                                                },
                                              ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    i.a.createElement(
                                      "div",
                                      null,
                                      this.props.staticKeyWords.hiLo,
                                      i.a.createElement(
                                        "div",
                                        { className: "form-group" },
                                        i.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          i.a.createElement(
                                            "select",
                                            {
                                              className: "select-margin",
                                              onChange: function (a) {
                                                return e.props.dispatch(
                                                  Object(h.c)(
                                                    a.target.value,
                                                    "away_hiLo",
                                                  ),
                                                );
                                              },
                                            },
                                            this.props.awayhiLo &&
                                              this.props.awayhiLo.map(
                                                function (a, t) {
                                                  return a ==
                                                    e.state.defaultHiloValue
                                                    ? i.a.createElement(
                                                        "option",
                                                        {
                                                          key: t,
                                                          selected: !0,
                                                          value: a,
                                                        },
                                                        a,
                                                      )
                                                    : i.a.createElement(
                                                        "option",
                                                        { key: t, value: a },
                                                        a,
                                                      );
                                                },
                                              ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              "corners" === this.props.selectedTab &&
                                i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(
                                    "th",
                                    null,
                                    this.props.staticKeyWords.scoreHt,
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    i.a.createElement(
                                      "div",
                                      null,
                                      this.props.staticKeyWords.cornersHiLo,
                                      i.a.createElement(
                                        "div",
                                        { className: "form-group" },
                                        i.a.createElement(
                                          "div",
                                          { className: "form-control" },
                                          i.a.createElement(
                                            "select",
                                            {
                                              className: "select-margin",
                                              onChange: function (a) {
                                                return e.props.dispatch(
                                                  Object(h.c)(
                                                    a.target.value,
                                                    "away_corners",
                                                  ),
                                                );
                                              },
                                            },
                                            this.props.awayCorners &&
                                              this.props.awayCorners.map(
                                                function (a, t) {
                                                  return a ==
                                                    e.state
                                                      .defaultCornersHiloValue
                                                    ? i.a.createElement(
                                                        "option",
                                                        {
                                                          key: t,
                                                          selected: !0,
                                                          value: a,
                                                        },
                                                        a,
                                                      )
                                                    : i.a.createElement(
                                                        "option",
                                                        { key: t, value: a },
                                                        a,
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
                          ),
                          i.a.createElement(
                            "tbody",
                            null,
                            this.props.awayTeamData.length
                              ? this.props.awayTeamData.map(function (a, t) {
                                  var s;
                                  return i.a.createElement(
                                    "tr",
                                    { key: t },
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        null,
                                        a.competitionName
                                          ? a.competitionName
                                          : "-",
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        null,
                                        null ===
                                          (s = Object(d.b)(
                                            a.kickOff,
                                            "banner",
                                          )) || void 0 === s
                                          ? void 0
                                          : s.date,
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        null,
                                        a.homeOrAway ? a.homeOrAway : "-",
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        null,
                                        a.oppTeamName ? a.oppTeamName : "-",
                                      ),
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        null,
                                        a.teamPos ? a.teamPos : "-",
                                      ),
                                    ),
                                    "had" === e.props.selectedTab &&
                                      i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                          "td",
                                          { className: "noBorder-td" },
                                          i.a.createElement(
                                            "div",
                                            { className: "whiteColumn-bg" },
                                            a.fullTimeScore
                                              ? a.fullTimeScore
                                              : "-",
                                            " ",
                                            a.halfTimeScore
                                              ? "(" + a.halfTimeScore + ")"
                                              : "",
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: Object(h.a)(
                                                  a.fullTimeResult,
                                                  "",
                                                  "",
                                                  "class",
                                                ),
                                              },
                                              a.fullTimeResult
                                                ? "w" ===
                                                  a.fullTimeResult.toLowerCase()
                                                  ? e.props.staticKeyWords
                                                      .hadWinIcon
                                                  : "l" ===
                                                      a.fullTimeResult.toLowerCase()
                                                    ? e.props.staticKeyWords
                                                        .hadLossIcon
                                                    : "d" ===
                                                        a.fullTimeResult.toLowerCase()
                                                      ? e.props.staticKeyWords.d
                                                      : "-"
                                                : "-",
                                            ),
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: Object(h.a)(
                                                  a.firstHalfHad,
                                                  "",
                                                  "",
                                                  "class",
                                                ),
                                              },
                                              a.firstHalfHad
                                                ? "w" ===
                                                  a.firstHalfHad.toLowerCase()
                                                  ? e.props.staticKeyWords
                                                      .hadWinIcon
                                                  : "l" ===
                                                      a.firstHalfHad.toLowerCase()
                                                    ? e.props.staticKeyWords
                                                        .hadLossIcon
                                                    : "d" ===
                                                        a.firstHalfHad.toLowerCase()
                                                      ? e.props.staticKeyWords.d
                                                      : "-"
                                                : "-",
                                            ),
                                          ),
                                        ),
                                      ),
                                    "handicap" === e.props.selectedTab &&
                                      i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            a.fullTimeScore
                                              ? a.fullTimeScore
                                              : "-",
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          a.hdcOutcome
                                            ? i.a.createElement(
                                                "div",
                                                { className: "textIcon" },
                                                i.a.createElement(
                                                  "span",
                                                  { className: "hdcValue" },
                                                  a.hdcName,
                                                ),
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    className: Object(h.a)(
                                                      a.hdcOutcome,
                                                      "handicaps",
                                                      "",
                                                      "class",
                                                    ),
                                                  },
                                                  a.hdcOutcome &&
                                                    null !== a.hdcOutcome &&
                                                    "-" !== a.hdcOutcome
                                                    ? "w" ===
                                                      a.hdcOutcome.toLowerCase()
                                                      ? e.props.staticKeyWords
                                                          .hadWinIcon
                                                      : "l" ===
                                                          a.hdcOutcome.toLowerCase()
                                                        ? e.props.staticKeyWords
                                                            .hadLossIcon
                                                        : "d" ===
                                                            a.hdcOutcome.toLowerCase()
                                                          ? e.props
                                                              .staticKeyWords.d
                                                          : "-"
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
                                          a.hHadOutcome
                                            ? i.a.createElement(
                                                "div",
                                                { className: "textIcon" },
                                                i.a.createElement(
                                                  "span",
                                                  null,
                                                  a.hHadName,
                                                ),
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    className: Object(h.a)(
                                                      a.hHadOutcome,
                                                      "handicapsHAD",
                                                      "",
                                                      "class",
                                                    ),
                                                  },
                                                  a.hHadOutcome
                                                    ? "w" ===
                                                      a.hHadOutcome.toLowerCase()
                                                      ? e.props.staticKeyWords
                                                          .hadWinIcon
                                                      : "l" ===
                                                          a.hHadOutcome.toLowerCase()
                                                        ? e.props.staticKeyWords
                                                            .hadLossIcon
                                                        : "d" ===
                                                            a.hHadOutcome.toLowerCase()
                                                          ? e.props
                                                              .staticKeyWords.d
                                                          : "-"
                                                    : "-",
                                                ),
                                              )
                                            : i.a.createElement(
                                                "span",
                                                null,
                                                "-",
                                              ),
                                        ),
                                      ),
                                    "hilo" === e.props.selectedTab &&
                                      i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                          "td",
                                          { className: "noBorder-td" },
                                          i.a.createElement(
                                            "div",
                                            { className: "whiteColumn-bg" },
                                            a.fullTimeScore
                                              ? a.fullTimeScore
                                              : "-",
                                            " ",
                                            a.halfTimeScore
                                              ? "(" + a.halfTimeScore + ")"
                                              : "",
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            a.totalGoals,
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: Object(h.a)(
                                                  e.props.selectedAwayFhHiloTab,
                                                  "hilo",
                                                  a.fhHiLo,
                                                  "class",
                                                ),
                                              },
                                              "h" ===
                                                Object(h.a)(
                                                  e.props.selectedAwayFhHiloTab,
                                                  "hilo",
                                                  a.fhHiLo,
                                                ).toLowerCase()
                                                ? e.props.staticKeyWords
                                                    .highIcon
                                                : e.props.staticKeyWords
                                                    .lowIcon,
                                            ),
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: Object(h.a)(
                                                  e.props.selectedAwayHiloTab,
                                                  "hilo",
                                                  a.hiLo,
                                                  "class",
                                                ),
                                              },
                                              "h" ===
                                                Object(h.a)(
                                                  e.props.selectedAwayHiloTab,
                                                  "hilo",
                                                  a.hiLo,
                                                ).toLowerCase()
                                                ? e.props.staticKeyWords
                                                    .highIcon
                                                : e.props.staticKeyWords
                                                    .lowIcon,
                                            ),
                                          ),
                                        ),
                                      ),
                                    "corners" === e.props.selectedTab &&
                                      i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement(
                                          "td",
                                          { className: "noBorder-td" },
                                          i.a.createElement(
                                            "div",
                                            { className: "whiteColumn-bg" },
                                            a.fullTimeScore
                                              ? a.fullTimeScore
                                              : "-",
                                            " ",
                                            a.halfTimeScore
                                              ? "(" + a.halfTimeScore + ")"
                                              : "",
                                          ),
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: Object(h.a)(
                                                  e.props.selectedAwayCornerTab,
                                                  "corners",
                                                  a.cornerHiLo,
                                                  "class",
                                                ),
                                              },
                                              e.handleCornersStatus(
                                                e.props.selectedAwayCornerTab,
                                                a.cornerHiLo,
                                              ),
                                            ),
                                          ),
                                        ),
                                      ),
                                  );
                                })
                              : i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement(
                                    "td",
                                    {
                                      colSpan:
                                        "had" === this.props.selectedTab
                                          ? 9
                                          : "handicap" ===
                                              this.props.selectedTab
                                            ? 8
                                            : "hilo" === this.props.selectedTab
                                              ? 11
                                              : "corners" ===
                                                  this.props.selectedTab
                                                ? 8
                                                : 0,
                                    },
                                    i.a.createElement(u.a, {
                                      isLoader: this.props.loader,
                                      isNoData:
                                        !this.props.loader &&
                                        !this.props.awayTeamData.length,
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
              selectedTab: e.recentfromtab.selectedTab,
              homeTeamData: e.recentfromtab.homeTeamData,
              awayTeamData: e.recentfromtab.awayTeamData,
              homeTeamName: e.match.bannerData.homeTeamName,
              awayTeamName: e.match.bannerData.awayTeamName,
              filterOptions: e.recentfromtable.filterOptions,
              lastEncountersOptions: e.matchcenter.lastEncountersOptions,
              selectedHomeFhHiloTab:
                "" == e.recentfromtable.selectedHomeFhHiloTab
                  ? e.recentfromtab.selectedHomeFhHiloTab
                  : e.recentfromtable.selectedHomeFhHiloTab,
              selectedHomeHiloTab:
                "" == e.recentfromtable.selectedHomeHiloTab
                  ? e.recentfromtab.selectedHomeHiloTab
                  : e.recentfromtable.selectedHomeHiloTab,
              selectedAwayFhHiloTab:
                "" == e.recentfromtable.selectedAwayFhHiloTab
                  ? e.recentfromtab.selectedAwayFhHiloTab
                  : e.recentfromtable.selectedAwayFhHiloTab,
              selectedAwayHiloTab:
                "" == e.recentfromtable.selectedAwayHiloTab
                  ? e.recentfromtab.selectedAwayHiloTab
                  : e.recentfromtable.selectedAwayHiloTab,
              selectedHomeCornerTab:
                "" == e.recentfromtable.selectedHomeCornerTab
                  ? e.recentfromtab.selectedHomeCornerTab
                  : e.recentfromtable.selectedHomeCornerTab,
              selectedAwayCornerTab:
                "" == e.recentfromtable.selectedAwayCornerTab
                  ? e.recentfromtab.selectedAwayCornerTab
                  : e.recentfromtable.selectedAwayCornerTab,
              homefhHiLo: e.recentfromtab.homefhHiLo,
              homehiLo: e.recentfromtab.homehiLo,
              awayfhHiLo: e.recentfromtab.awayfhHiLo,
              awayhiLo: e.recentfromtab.awayhiLo,
              awayCorners: e.recentfromtab.awayCorners,
              homeCorners: e.recentfromtab.homeCorners,
              homeTeamId: e.match.bannerData.homeTeamId,
              awayTeamId: e.match.bannerData.awayTeamId,
              loader: e.app.loader,
              staticKeyWords: e.app.staticKeyWords,
              languageId: e.app.languageId,
              defaultHomeOptionId: e.recentfromtab.defaultHomeOptionId,
              defaultAwayOptionId: e.recentfromtab.defaultAwayOptionId,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(b),
        E = t(456),
        T = (t(464), t(0)),
        g = t(25),
        v = t(454),
        w = (function (e) {
          Object(r.a)(t, e);
          var a = Object(l.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.loadGraph();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, a) {
                  JSON.stringify(e.data) !== JSON.stringify(this.props.data) &&
                    Object.keys(this.props.data).length > 0 &&
                    this.loadGraph();
                },
              },
              {
                key: "loadGraph",
                value: function () {
                  var e = [],
                    a = [],
                    t = [];
                  if (this.props.data && this.props.data.length > 0) {
                    var s,
                      o = Object(g.a)(this.props.data);
                    try {
                      for (o.s(); !(s = o.n()).done; ) {
                        var r = s.value;
                        e.push(r.score),
                          a.push(r.homeTeamGoals),
                          t.push(r.awayTeamGoals);
                      }
                    } catch (l) {
                      o.e(l);
                    } finally {
                      o.f();
                    }
                  }
                  v.a.chart(
                    this.props.loadin,
                    Object(T.a)(
                      {
                        chart: {
                          type: "column",
                          backgroundColor: "rgba(255, 255, 255, 0.0)",
                        },
                        title: {
                          text: this.props.title,
                          style: { color: "#FFF" },
                        },
                        colors: ["#28d0ce", "#e47273"],
                        xAxis: {
                          gridLineWidth: 0,
                          categories: e,
                          lineWidth: 0,
                          labels: {
                            useHTML: !0,
                            style: {
                              color: "#000",
                              backgroundColor: "#FFF",
                              borderRadius: "50%",
                              padding: "8px",
                              fontSize: "12px",
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
                        plotOptions: {
                          column: { minPointLength: 3 },
                          series: {
                            dataLabels: {
                              enabled: !0,
                              crop: !1,
                              overflow: "none",
                              colorByPoint: !0,
                              textAlign: "left",
                              style: {
                                textOutline: "0px",
                                fontSize: "12px",
                                fontWeight: "normal",
                              },
                              formatter: function () {
                                return (
                                  '<span style="color: ' +
                                  this.color +
                                  '";"-webkit-text-stroke:px black">' +
                                  this.y +
                                  "</span>"
                                );
                              },
                            },
                            borderWidth: 0,
                            borderRadiusTopLeft: "50%",
                            borderRadiusTopRight: "50%",
                          },
                        },
                        series: [
                          { name: "Home", data: a },
                          { name: "Away", data: t },
                        ],
                      },
                      "credits",
                      { enabled: !1 },
                    ),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement("div", {
                    id: this.props.loadin,
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
        })(n.Component),
        N = t(455),
        O = t(3),
        H = (function (e) {
          Object(r.a)(t, e);
          var a = Object(l.a)(t);
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
                  var e,
                    a,
                    t = [];
                  this.props.rfHadData &&
                    Object.keys(this.props.rfHadData).length > 0 &&
                    Object.keys(this.props.rfHadData) &&
                    (t = [
                      {
                        outcomeName: this.props.staticKeyWords.win,
                        homeGoals: this.props.rfHadData.homeWin,
                        awayGoals: this.props.rfHadData.awayWin,
                      },
                      {
                        outcomeName: this.props.staticKeyWords.draw,
                        homeGoals: this.props.rfHadData.homeDraw,
                        awayGoals: this.props.rfHadData.awayDraw,
                      },
                      {
                        outcomeName: this.props.staticKeyWords.loss,
                        homeGoals: this.props.rfHadData.homeLoss,
                        awayGoals: this.props.rfHadData.awayLoss,
                      },
                    ]);
                  var s = [];
                  return (
                    this.props.firstHalfHad &&
                      Object.keys(this.props.firstHalfHad).length > 0 &&
                      Object.keys(this.props.firstHalfHad) &&
                      (s = [
                        {
                          outcomeName: this.props.staticKeyWords.win,
                          homeGoals: this.props.firstHalfHad.homeWin,
                          awayGoals: this.props.firstHalfHad.awayWin,
                        },
                        {
                          outcomeName: this.props.staticKeyWords.draw,
                          homeGoals: this.props.firstHalfHad.homeDraw,
                          awayGoals: this.props.firstHalfHad.awayDraw,
                        },
                        {
                          outcomeName: this.props.staticKeyWords.loss,
                          homeGoals: this.props.firstHalfHad.homeLoss,
                          awayGoals: this.props.firstHalfHad.awayLoss,
                        },
                      ]),
                    i.a.createElement(
                      "div",
                      {
                        style: { display: "block" },
                        id: "Standings",
                        className: "tabContent",
                      },
                      i.a.createElement(f, null),
                      !this.props.isEdisplay &&
                        this.props.isAdvancedMode &&
                        !this.props.loader &&
                        i.a.createElement(
                          i.a.Fragment,
                          null,
                          ((t && t.length > 0) ||
                            (s && s.length > 0) ||
                            (this.props.goalsPerGame &&
                              Object.keys(this.props.goalsPerGame).length >
                                0)) &&
                            i.a.createElement(
                              "div",
                              { className: "graphSection" },
                              i.a.createElement(
                                "div",
                                { className: "sectionHeading" },
                                i.a.createElement(
                                  "div",
                                  { className: "sectionTitle" },
                                  this.props.staticKeyWords.homeAwayDraw,
                                ),
                              ),
                              i.a.createElement(
                                "div",
                                { className: "graphContainer" },
                                i.a.createElement(
                                  "div",
                                  { className: "graphContent TwoInRow" },
                                  i.a.createElement(
                                    "div",
                                    { className: "leftColumn" },
                                    i.a.createElement(E.a, {
                                      data: t,
                                      maxValue: 8,
                                      loadin: "rfhad",
                                      title: this.props.staticKeyWords.fullTime,
                                      graphHeight: "250px",
                                      graphWidth: "100%",
                                    }),
                                    i.a.createElement(E.a, {
                                      data: s,
                                      maxValue: 4,
                                      loadin: "rffhhad",
                                      title: this.props.staticKeyWords.halfTime,
                                      graphHeight: "250px",
                                      graphWidth: "100%",
                                    }),
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: "rightColumn" },
                                    i.a.createElement(
                                      "div",
                                      null,
                                      i.a.createElement(N.a, {
                                        homeTeamName: this.props.homeTeamName,
                                        awayTeamName: this.props.awayTeamName,
                                        home: this.props.goalsPerGame.homeTeam,
                                        away: this.props.goalsPerGame.awayTeam,
                                        title:
                                          this.props.languageId === O.c
                                            ? ""
                                                .concat(
                                                  this.props.staticKeyWords
                                                    .goalsFor,
                                                  " <br/><span>",
                                                )
                                                .concat(
                                                  this.props.staticKeyWords.per,
                                                  "</span> ",
                                                )
                                                .concat(
                                                  this.props.staticKeyWords
                                                    .game,
                                                )
                                            : "".concat(
                                                this.props.staticKeyWords
                                                  .goalsPerGame,
                                              ),
                                      }),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          (null === (e = this.props.fullTime) || void 0 === e
                            ? void 0
                            : e.length) &&
                            (null === (a = this.props.halfTime) || void 0 === a
                              ? void 0
                              : a.length) &&
                            i.a.createElement(
                              "div",
                              { className: "graphSection" },
                              i.a.createElement(
                                "div",
                                { className: "sectionHeading" },
                                i.a.createElement(
                                  "div",
                                  { className: "sectionTitle" },
                                  i.a.createElement(
                                    "span",
                                    null,
                                    this.props.staticKeyWords.csHafu,
                                  ),
                                ),
                              ),
                              i.a.createElement(
                                "div",
                                { className: "graphContainer" },
                                i.a.createElement(
                                  "div",
                                  { className: "graphContent TwoInRow" },
                                  i.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "correctScore-graph leftColumn leftColumn-fullwidth singleColumn",
                                    },
                                    i.a.createElement(w, {
                                      data: this.props.fullTime,
                                      loadin: "rfcsfilltime",
                                      graphWidth: "85%",
                                      graphHeight: "300px",
                                      maxValue: 8,
                                      title: this.props.staticKeyWords.fullTime,
                                    }),
                                    i.a.createElement(w, {
                                      data: this.props.halfTime,
                                      loadin: "rfcshalftime",
                                      graphWidth: "85%",
                                      graphHeight: "300px",
                                      maxValue: 8,
                                      title: this.props.staticKeyWords.halfTime,
                                    }),
                                  ),
                                  i.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "haFu rightColumn rightColumn-fullwidth",
                                    },
                                    i.a.createElement(E.a, {
                                      data: this.props.haFu,
                                      maxValue: 8,
                                      loadin: "hafu",
                                      title: this.props.staticKeyWords.haFu,
                                      graphHeight: "600px",
                                      graphWidth: "85%",
                                    }),
                                  ),
                                ),
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
      var W = Object(c.b)(
          function (e) {
            return {
              selectedTab: e.recentfromtab.selectedTab,
              rfHadData: e.recentfromtab.rfHadData,
              firstHalfHad: e.recentfromtab.firstHalfHad,
              fullTime: e.recentfromtab.fullTime,
              halfTime: e.recentfromtab.halfTime,
              haFu: e.recentfromtab.haFu,
              goalsPerGame: e.recentfromtab.goalsPerGame,
              staticKeyWords: e.app.staticKeyWords,
              homeTeamName: e.match.homeTeamName,
              awayTeamName: e.match.awayTeamName,
              loader: e.app.loader,
              languageId: e.app.languageId,
              isEdisplay: e.app.isEdisplay,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(H),
        L = (function (e) {
          Object(r.a)(t, e);
          var a = Object(l.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              {
                key: "render",
                value: function () {
                  var e,
                    a = [];
                  if (this.props.hdcHad && this.props.hdcHad.length > 0) {
                    var t,
                      s = Object(g.a)(this.props.hdcHad);
                    try {
                      for (s.s(); !(t = s.n()).done; ) {
                        var o = t.value;
                        a.push({
                          outcomeName: o.result,
                          homeGoals: o.homeGoals,
                          awayGoals: o.awayGoals,
                        });
                      }
                    } catch (r) {
                      s.e(r);
                    } finally {
                      s.f();
                    }
                  }
                  return i.a.createElement(
                    "div",
                    {
                      style: { display: "block" },
                      id: "Results",
                      className: "tabContent",
                    },
                    i.a.createElement(f, null),
                    !this.props.isEdisplay &&
                      this.props.isAdvancedMode &&
                      (null === (e = this.props.hdc) || void 0 === e
                        ? void 0
                        : e.length) &&
                      (null === a || void 0 === a ? void 0 : a.length) &&
                      i.a.createElement(
                        "div",
                        { className: "graphSection" },
                        i.a.createElement(
                          "div",
                          { className: "sectionHeading" },
                          i.a.createElement(
                            "div",
                            { className: "sectionTitle" },
                            this.props.staticKeyWords.handicap,
                          ),
                        ),
                        i.a.createElement(
                          "div",
                          { className: "graphContainer" },
                          i.a.createElement(
                            "div",
                            { className: "graphContent TwoInRow" },
                            i.a.createElement(
                              "div",
                              { className: "leftColumn leftColumn-fullwidth" },
                              i.a.createElement(E.a, {
                                data: this.props.hdc,
                                maxValue: 3,
                                loadin: "rfhdc",
                                title: this.props.staticKeyWords.handicap,
                                graphHeight: "300px",
                                graphWidth: "85%",
                              }),
                            ),
                            i.a.createElement(
                              "div",
                              {
                                className: "rightColumn rightColumn-fullwidth",
                              },
                              i.a.createElement(E.a, {
                                data: a,
                                maxValue: 6,
                                loadin: "rfhdchad",
                                title: this.props.staticKeyWords.handicapHAD,
                                graphHeight: "300px",
                                graphWidth: "85%",
                              }),
                            ),
                          ),
                          i.a.createElement(
                            "div",
                            { className: "noDatagraph" },
                            this.props.staticKeyWords.handicapLinePastGame,
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
      var C = Object(c.b)(
          function (e) {
            return {
              hdcHad: e.recentfromtab.hdcHad,
              hdc: e.recentfromtab.hdc,
              homeTeamName: e.recentfromtab.homeTeamName,
              awayTeamName: e.recentfromtab.awayTeamName,
              staticKeyWords: e.app.staticKeyWords,
              isEdisplay: e.app.isEdisplay,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(L),
        j = t(225),
        K = t(460),
        I = t(457),
        S = (function (e) {
          Object(r.a)(t, e);
          var a = Object(l.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              {
                key: "optionChanged",
                value: function (e, a) {
                  this.props.dispatch(Object(j.b)({ type: e, id: a }));
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    a = [],
                    t = Object(g.a)(this.props.totalGoalsAnalysis);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var s = e.value;
                      a.push({
                        goalMinutes: s.goals,
                        homeTeamGoals: s.timesScoredHome,
                        awayTeamGoals: s.timesScoredAway,
                      });
                    }
                  } catch (o) {
                    t.e(o);
                  } finally {
                    t.f();
                  }
                  return i.a.createElement(
                    "div",
                    {
                      style: { display: "block" },
                      id: "hilo",
                      className: "tabContent",
                    },
                    i.a.createElement(f, {
                      homeSelectedOptionId: this.props.homeSelectedOptionId,
                      awaySelectedOptionId: this.props.awaySelectedOptionId,
                      onOptionChange: this.optionChanged.bind(this),
                    }),
                    !this.props.isEdisplay &&
                      this.props.isAdvancedMode &&
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          "div",
                          { className: "graphSection" },
                          i.a.createElement(
                            "div",
                            { className: "sectionHeading" },
                            i.a.createElement(
                              "div",
                              { className: "sectionTitle" },
                              i.a.createElement(
                                "span",
                                null,
                                this.props.staticKeyWords.hiLo,
                              ),
                            ),
                          ),
                          i.a.createElement(
                            "div",
                            { className: "graphContainer" },
                            i.a.createElement(
                              "div",
                              { className: "graphContent" },
                              i.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    flexDirection: "column",
                                  },
                                },
                                i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement(I.a, {
                                    data: this.props.fullTimeHiLo,
                                    homeTeamName: this.props.homeTeamName,
                                    awayTeamName: this.props.awayTeamName,
                                    line: this.props.staticKeyWords.line,
                                    hideLine: !1,
                                    hideTeamNames: !1,
                                    hideLegend: !1,
                                    hideSubtitle: !1,
                                    homeSubTitle:
                                      "Last 8" +
                                      (1 === this.props.homeSelectedOptionId
                                        ? ""
                                        : 2 === this.props.homeSelectedOptionId
                                          ? " Home"
                                          : " Away") +
                                      " Results",
                                    awaySubTitle:
                                      "Last 8" +
                                      (1 === this.props.awaySelectedOptionId
                                        ? ""
                                        : 2 === this.props.awaySelectedOptionId
                                          ? " Home"
                                          : " Away") +
                                      " Results",
                                    title: this.props.staticKeyWords.fullTime,
                                  }),
                                ),
                                i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement(I.a, {
                                    data: this.props.halfTimeHiLo,
                                    homeTeamName: this.props.homeTeamName,
                                    awayTeamName: this.props.awayTeamName,
                                    hideLine: !0,
                                    hideTeamNames: !0,
                                    hideLegend: !0,
                                    hideSubtitle: !0,
                                    homeSubTitle:
                                      "Last 8" +
                                      (1 === this.props.homeSelectedOptionId
                                        ? ""
                                        : 2 === this.props.homeSelectedOptionId
                                          ? " Home"
                                          : " Away") +
                                      " Results",
                                    awaySubTitle:
                                      "Last 8" +
                                      (1 === this.props.awaySelectedOptionId
                                        ? ""
                                        : 2 === this.props.awaySelectedOptionId
                                          ? " Home"
                                          : " Away") +
                                      " Results",
                                    title: this.props.staticKeyWords.halfTime,
                                  }),
                                ),
                              ),
                            ),
                          ),
                        ),
                        i.a.createElement(
                          "div",
                          { className: "graphSection" },
                          i.a.createElement(
                            "div",
                            { className: "sectionHeading" },
                            i.a.createElement(
                              "div",
                              { className: "sectionTitle" },
                              this.props.staticKeyWords.goals,
                            ),
                          ),
                          i.a.createElement(
                            "div",
                            { className: "graphContainer" },
                            i.a.createElement(
                              "div",
                              { className: "graphContent TwoInRow" },
                              i.a.createElement(
                                "div",
                                {
                                  className: "leftColumn leftColumn-fullwidth",
                                },
                                i.a.createElement(E.a, {
                                  homeTeamName: this.props.homeTeamName,
                                  awayTeamName: this.props.awayTeamName,
                                  mainData: this.props.firstToScore,
                                  isDirect: !0,
                                  data: {
                                    labels: [
                                      this.props.staticKeyWords.scored1st,
                                      this.props.staticKeyWords.conceded1st,
                                      this.props.staticKeyWords.nogoals,
                                    ],
                                    homeTeam: this.props.firstToScore.homeTeam,
                                    awayTeam: this.props.firstToScore.awayTeam,
                                  },
                                  title:
                                    this.props.staticKeyWords.firstTeamToScore,
                                  colors: ["#29d6d4", "#e57374", "#FFFFFF"],
                                  graphHeight: "250px",
                                  graphWidth: "85%",
                                  loadin: "rfftshilo",
                                }),
                                i.a.createElement(K.a, {
                                  data: a,
                                  showLine: !1,
                                  title: this.props.staticKeyWords.totalGoals,
                                  loadin: "goalsanalysis",
                                  width: "85%",
                                  height: "300px",
                                  showLabels: !0,
                                }),
                              ),
                              i.a.createElement(
                                "div",
                                {
                                  className:
                                    "rightColumn rightColumn-fullwidth",
                                },
                                i.a.createElement(K.a, {
                                  data: this.props.goalTimes,
                                  title: this.props.staticKeyWords.goalTimes,
                                  homeTeamName: this.props.homeTeamName,
                                  awayTeamName: this.props.awayTeamName,
                                  showLine: !1,
                                  loadin: "goaltime",
                                  showLabels: !0,
                                  showTable: !0,
                                  width: "94%",
                                  height: "500px",
                                }),
                              ),
                            ),
                            i.a.createElement(
                              "div",
                              { className: "noDatagraph" },
                              this.props.staticKeyWords.goalMinutesPastGame,
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
      var k = Object(c.b)(
          function (e) {
            return {
              fullTimeHiLo: e.recentfromtab.fullTimeHiLo,
              halfTimeHiLo: e.recentfromtab.halfTimeHiLo,
              firstToScore: e.recentfromtab.firstToScore,
              homeTeamName: e.match.bannerData.homeTeamName,
              awayTeamName: e.match.bannerData.awayTeamName,
              homeTeamId: e.match.bannerData.homeTeamId,
              awayTeamId: e.match.bannerData.awayTeamId,
              goalTimes: e.recentfromtab.goalTimes,
              totalGoalsAnalysis: e.recentfromtab.totalGoalsAnalysis,
              staticKeyWords: e.app.staticKeyWords,
              teamsToScore: e.recentfromtab.teamsToScore,
              homeSelectedOptionId: e.recentformhilo.homeSelectedOptionId,
              awaySelectedOptionId: e.recentformhilo.awaySelectedOptionId,
              isEdisplay: e.app.isEdisplay,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(S),
        F = t(226),
        D = (function (e) {
          Object(r.a)(t, e);
          var a = Object(l.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              {
                key: "optionChanged",
                value: function (e, a) {
                  this.props.dispatch(Object(F.b)({ type: e, id: a }));
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    {
                      style: { display: "block" },
                      id: "corners",
                      className: "tabContent",
                    },
                    i.a.createElement(f, {
                      homeSelectedOptionId: this.props.homeSelectedOptionId,
                      awaySelectedOptionId: this.props.awaySelectedOptionId,
                      onOptionChange: this.optionChanged.bind(this),
                    }),
                    !this.props.isEdisplay &&
                      this.props.isAdvancedMode &&
                      i.a.createElement(
                        "div",
                        { className: "graphSection" },
                        i.a.createElement(
                          "div",
                          { className: "sectionHeading" },
                          i.a.createElement(
                            "div",
                            { className: "sectionTitle" },
                            this.props.staticKeyWords.cornersHiLo,
                          ),
                        ),
                        i.a.createElement(
                          "div",
                          { className: "graphContainer" },
                          i.a.createElement(
                            "div",
                            { className: "graphContent" },
                            i.a.createElement(
                              "div",
                              null,
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(I.a, {
                                  data: this.props.cornersInfo,
                                  homeTeamName: this.props.homeTeamName,
                                  awayTeamName: this.props.awayTeamName,
                                  homeSubTitle:
                                    "Last 8" +
                                    (1 === this.props.homeSelectedOptionId
                                      ? ""
                                      : 2 === this.props.homeSelectedOptionId
                                        ? " Home"
                                        : " Away") +
                                    " Results",
                                  awaySubTitle:
                                    "Last 8" +
                                    (1 === this.props.awaySelectedOptionId
                                      ? ""
                                      : 2 === this.props.awaySelectedOptionId
                                        ? " Home"
                                        : " Away") +
                                    " Results",
                                  title: "",
                                }),
                              ),
                            ),
                          ),
                          i.a.createElement(
                            "div",
                            { className: "noDatagraph" },
                            this.props.staticKeyWords.cornersDataPastGame,
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
      var x = Object(c.b)(
          function (e) {
            return {
              cornersPerGame: e.recentfromtab.cornersPerGame,
              cornersAgainstPerGame: e.recentfromtab.cornersAgainstPerGame,
              cornersInfo: e.recentfromtab.cornersInfo,
              staticKeyWords: e.app.staticKeyWords,
              homeTeamName: e.match.bannerData.homeTeamName,
              awayTeamName: e.match.bannerData.awayTeamName,
              homeSelectedOptionId: e.recentformcorners.homeSelectedOptionId,
              awaySelectedOptionId: e.recentformcorners.awaySelectedOptionId,
              languageId: e.app.languageId,
              isEdisplay: e.app.isEdisplay,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(p.b)({}, e) };
          },
        )(D),
        A = (function (e) {
          Object(r.a)(t, e);
          var a = Object(l.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              {
                key: "componentWillMount",
                value: function () {
                  var e, a, t;
                  (
                    null === (e = this.props) ||
                    void 0 === e ||
                    null === (a = e.match) ||
                    void 0 === a ||
                    null === (t = a.params) ||
                    void 0 === t
                      ? void 0
                      : t.tabname
                  )
                    ? this.props.dispatch(
                        Object(m.f)(this.props.match.params.tabname),
                      )
                    : this.props.dispatch(Object(m.f)("had"));
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (
                    this.props.bannerData &&
                    Object.keys(this.props.bannerData).length > 0
                  ) {
                    var e = this.props.match.params.tabname
                      ? this.props.match.params.tabname
                      : "had";
                    this.props.dispatch(
                      Object(m.b)(
                        e,
                        "",
                        "",
                        this.props.bannerData.homeTeamId,
                        this.props.bannerData.awayTeamId,
                        this.props.languageId,
                        {},
                      ),
                    );
                  }
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  if (
                    this.props.bannerData != e.bannerData &&
                    window.location.pathname.split("/").includes("recentform")
                  ) {
                    this.props.dispatch(Object(m.e)(this.props.homeOption)),
                      this.props.dispatch(Object(m.d)(this.props.awayOption));
                    var a = this.props.match.params.tabname
                      ? this.props.match.params.tabname
                      : "had";
                    this.props.dispatch(
                      Object(m.b)(
                        a,
                        "",
                        "",
                        e.bannerData.homeTeamId,
                        e.bannerData.awayTeamId,
                        this.props.languageId,
                        {
                          selectedHomeOptionId: this.props.homeOption,
                          selectedAwayOptionId: this.props.awayOption,
                        },
                      ),
                    );
                  }
                },
              },
              { key: "componentDidUpdate", value: function (e, a) {} },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(m.c)());
                },
              },
              {
                key: "handleTabClickChange",
                value: function (e) {
                  this.props.isAdvancedMode
                    ? this.props.history.push(
                        "/" +
                          this.props.match.params.lang +
                          "/matchcenter/" +
                          this.props.match.params.countryId +
                          "/" +
                          this.props.match.params.competitionId +
                          "/" +
                          this.props.match.params.eventId +
                          "/htoh/recentform/" +
                          e,
                      )
                    : this.props.history.push(
                        "/" +
                          this.props.match.params.lang +
                          "/matchcenter/" +
                          this.props.match.params.countryId +
                          "/" +
                          this.props.match.params.competitionId +
                          "/" +
                          this.props.match.params.eventId +
                          "/bmrecentforms/" +
                          e,
                      ),
                    this.props.dispatch(
                      Object(m.b)(
                        e,
                        "",
                        "",
                        this.props.homeTeamId,
                        this.props.awayTeamId,
                        this.props.languageId,
                        {},
                      ),
                    ),
                    this.props.dispatch(Object(m.f)(e));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return i.a.createElement(
                    "div",
                    { className: "tabSection" },
                    i.a.createElement(
                      "ul",
                      { className: "tabsList", "data-persist": "true" },
                      i.a.createElement(
                        "li",
                        {
                          className:
                            "tabLinks" +
                            ("had" === this.props.selectedTab ? " active" : ""),
                          id: "defaultOpen",
                          onClick: function () {
                            return e.handleTabClickChange("had");
                          },
                        },
                        i.a.createElement(
                          "a",
                          null,
                          this.props.staticKeyWords.had,
                        ),
                      ),
                      i.a.createElement(
                        "li",
                        {
                          className:
                            "tabLinks" +
                            ("handicap" === this.props.selectedTab
                              ? " active"
                              : ""),
                          onClick: function () {
                            return e.handleTabClickChange("handicap");
                          },
                        },
                        i.a.createElement(
                          "a",
                          null,
                          this.props.staticKeyWords.handicaps,
                        ),
                      ),
                      i.a.createElement(
                        "li",
                        {
                          className:
                            "tabLinks" +
                            ("hilo" === this.props.selectedTab
                              ? " active"
                              : ""),
                          onClick: function () {
                            return e.handleTabClickChange("hilo");
                          },
                        },
                        i.a.createElement(
                          "a",
                          null,
                          this.props.staticKeyWords.hiLo,
                        ),
                      ),
                      i.a.createElement(
                        "li",
                        {
                          className:
                            "tabLinks" +
                            ("corners" === this.props.selectedTab
                              ? " active"
                              : ""),
                          onClick: function () {
                            return e.handleTabClickChange("corners");
                          },
                        },
                        i.a.createElement(
                          "a",
                          null,
                          this.props.staticKeyWords.corners,
                        ),
                      ),
                    ),
                    i.a.createElement(
                      "div",
                      { className: "tabsContent" },
                      "had" === this.props.selectedTab
                        ? i.a.createElement(W, {
                            isAdvancedMode: this.props.isAdvancedMode,
                          })
                        : "handicap" === this.props.selectedTab
                          ? i.a.createElement(C, {
                              isAdvancedMode: this.props.isAdvancedMode,
                            })
                          : "hilo" === this.props.selectedTab
                            ? i.a.createElement(k, {
                                isAdvancedMode: this.props.isAdvancedMode,
                              })
                            : i.a.createElement(x, {
                                isAdvancedMode: this.props.isAdvancedMode,
                              }),
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
            selectedTab: e.recentfromtab.selectedTab,
            homeTeamData: e.recentformhad.homeTeamData,
            awayTeamData: e.recentformhad.awayTeamData,
            homeTeamName: e.recentformhad.homeTeamName,
            awayTeamName: e.recentformhad.awayTeamName,
            bannerData: e.match.bannerData,
            homeTeamId: e.match.bannerData.homeTeamId,
            awayTeamId: e.match.bannerData.awayTeamId,
            staticKeyWords: e.app.staticKeyWords,
            languageId: e.app.languageId,
            defaultHomeOptionId: e.recentfromtab.defaultHomeOptionId,
            defaultAwayOptionId: e.recentfromtab.defaultAwayOptionId,
            homeOption: e.recentfromtab.homeOption,
            awayOption: e.recentfromtab.awayOption,
            isAdvancedMode: e.match.isAdvancedMode,
          };
        },
        function (e) {
          return { dispatch: e, actions: Object(p.b)({ selectTab: m.f }, e) };
        },
      )(A);
    },
  },
]);
//# sourceMappingURL=2.b3054b68.chunk.js.map
