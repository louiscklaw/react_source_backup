(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [0],
  {
    455: function (e, t, a) {
      "use strict";
      var s = a(91),
        o = a(92),
        n = a(94),
        i = a(93),
        r = a(1),
        l = a.n(r),
        p = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  return 0 === Number(this.props.home) ||
                    0 === Number(this.props.away)
                    ? l.a.createElement("div", null)
                    : l.a.createElement(
                        "div",
                        { className: "goalsperGame-graph" },
                        l.a.createElement(
                          "div",
                          { className: "goalsperGame-content" },
                          l.a.createElement(
                            "div",
                            { className: "homeGoals-data" },
                            l.a.createElement(
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
                            l.a.createElement(
                              "div",
                              { className: "home-text" },
                              this.props.homeTeamName,
                            ),
                          ),
                          l.a.createElement("div", {
                            className: "graphTitle",
                            dangerouslySetInnerHTML: {
                              __html: this.props.title,
                            },
                          }),
                          l.a.createElement(
                            "div",
                            { className: "awayGoals-data" },
                            l.a.createElement(
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
                            l.a.createElement(
                              "div",
                              { className: "away-text" },
                              this.props.awayTeamName,
                            ),
                          ),
                        ),
                        l.a.createElement("div", {
                          className: "goalsperGame-teamNames",
                        }),
                      );
                },
              },
            ]),
            a
          );
        })(r.Component);
      t.a = p;
    },
    456: function (e, t, a) {
      "use strict";
      var s = a(0),
        o = a(25),
        n = a(91),
        i = a(92),
        r = a(94),
        l = a(93),
        p = a(1),
        c = a.n(p),
        h = a(454),
        d = (function (e) {
          Object(r.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(i.a)(a, [
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
                value: function (e, t) {
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
                    t = [],
                    a = [],
                    n = [];
                  if (this.props.isDirect)
                    (t = this.props.data.labels),
                      (a = this.props.data.homeTeam),
                      (n = this.props.data.awayTeam);
                  else if (this.props.data && this.props.data.length > 0) {
                    var i,
                      r = Object(o.a)(this.props.data);
                    try {
                      for (r.s(); !(i = r.n()).done; ) {
                        var l = i.value;
                        t.push(l.outcomeName),
                          a.push(l.homeGoals),
                          n.push(l.awayGoals);
                      }
                    } catch (c) {
                      r.e(c);
                    } finally {
                      r.f();
                    }
                  }
                  var p = this;
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
                        categories: t,
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
                                p.props.homeLegend +
                                "</span>"
                            : '<span style="color:#FFF;font-weight:normal">' +
                                p.props.awayLegend +
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
                      { name: "home", data: a },
                      { name: "away", data: n },
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
            a
          );
        })(p.Component);
      t.a = d;
    },
    460: function (e, t, a) {
      "use strict";
      var s = a(0),
        o = a(25),
        n = a(91),
        i = a(92),
        r = a(94),
        l = a(93),
        p = a(1),
        c = a.n(p),
        h = a(454),
        d = (function (e) {
          Object(r.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(i.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.loadGraph();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  JSON.stringify(e.data) !== JSON.stringify(this.props.data) &&
                    Object.keys(this.props.data).length > 0 &&
                    this.loadGraph();
                },
              },
              {
                key: "loadGraph",
                value: function () {
                  var e,
                    t,
                    a = [],
                    n = [],
                    i = [],
                    r = [],
                    l = Object(o.a)(this.props.data);
                  try {
                    for (l.s(); !(t = l.n()).done; ) {
                      var p = t.value;
                      a.push(p.goalMinutes),
                        n.push(p.homeTeamGoals),
                        i.push(p.awayTeamGoals),
                        this.props.showLine &&
                          r.push(p.homeTeamGoals + p.awayTeamGoals);
                    }
                  } catch (c) {
                    l.e(c);
                  } finally {
                    l.f();
                  }
                  h.a.chart(
                    this.props.loadin,
                    ((e = {
                      chart: { backgroundColor: "rgba(255, 255, 255, 0.0)" },
                      title: {
                        text: this.props.title,
                        style: { color: "#FFF" },
                      },
                      xAxis: {
                        categories: a,
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
                      { type: "column", name: "home", data: n },
                      { type: "column", name: "away", data: i },
                      {
                        type: "line",
                        name: "Total",
                        data: r,
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
                  return c.a.createElement(
                    "div",
                    {
                      className: [
                        this.props.showTable
                          ? "goalTimes"
                          : "totalGoals-analysis",
                        this.props.isSummaryGT ? "summary-goalTimes" : "",
                      ].join(" "),
                    },
                    c.a.createElement(
                      "div",
                      {
                        className: [
                          this.props.showTable ? "goalTimes-graph" : "",
                          this.props.isSummaryGT ? "goalTimes-graph-m150" : "",
                        ].join(" "),
                      },
                      c.a.createElement("div", {
                        id: this.props.loadin,
                        style: {
                          width: this.props.width,
                          height: this.props.height,
                        },
                      }),
                    ),
                    this.props.showTable && this.props.data.length > 0
                      ? c.a.createElement(
                          "table",
                          { className: "tableDefault tableForGraph" },
                          c.a.createElement(
                            "tbody",
                            null,
                            c.a.createElement(
                              "tr",
                              { className: "home-bg" },
                              c.a.createElement(
                                "td",
                                {
                                  className:
                                    "white-bg " +
                                    (this.props.isSummaryGT
                                      ? "w-150"
                                      : "w-100px"),
                                },
                                c.a.createElement(
                                  "div",
                                  { className: "home-text" },
                                  this.props.homeTeamName,
                                  c.a.createElement("br", null),
                                  c.a.createElement(
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
                              this.props.data.map(function (e, t) {
                                return c.a.createElement(
                                  "td",
                                  { key: "gtt_td_" + t },
                                  c.a.createElement(
                                    "div",
                                    null,
                                    e.homeTeamGoals,
                                  ),
                                );
                              }),
                            ),
                            c.a.createElement(
                              "tr",
                              { className: "away-bg" },
                              c.a.createElement(
                                "td",
                                { className: "white-bg w-100px" },
                                c.a.createElement(
                                  "div",
                                  { className: "away-text" },
                                  this.props.awayTeamName,
                                  c.a.createElement("br", null),
                                  c.a.createElement(
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
                              this.props.data.map(function (e, t) {
                                return c.a.createElement(
                                  "td",
                                  { key: "gtt_td_" + t },
                                  c.a.createElement(
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
            a
          );
        })(p.Component);
      t.a = d;
    },
    461: function (e, t, a) {
      "use strict";
      var s = a(0),
        o = a(91),
        n = a(92),
        i = a(94),
        r = a(93),
        l = a(1),
        p = a.n(l),
        c = a(454),
        h = a(66),
        d = (function (e) {
          Object(i.a)(a, e);
          var t = Object(r.a)(a);
          function a() {
            return Object(o.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(n.a)(a, [
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
                value: function (e, t) {
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
                    t = [];
                  t = this.props.isDirect
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
                  var a = [];
                  a = this.props.isDirect
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
                        categories: t,
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
                      { name: "", colorByPoint: !0, data: a },
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
            a
          );
        })(l.Component);
      t.a = Object(h.b)(function (e) {
        return { staticKeyWords: e.app.staticKeyWords };
      })(d);
    },
    464: function (e, t, a) {
      "use strict";
      var s = a(0),
        o = a(25),
        n = a(91),
        i = a(92),
        r = a(94),
        l = a(93),
        p = a(1),
        c = a.n(p),
        h = a(454),
        d = (function (e) {
          Object(r.a)(a, e);
          var t = Object(l.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(i.a)(a, [
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
                value: function (e, t) {
                  JSON.stringify(e.data) !== JSON.stringify(this.props.data) &&
                    Object.keys(this.props.data).length > 0 &&
                    this.loadGraph();
                },
              },
              {
                key: "loadGraph",
                value: function () {
                  var e,
                    t = [],
                    a = [],
                    n = [];
                  if (
                    this.props.data &&
                    this.props.data.homeTeam &&
                    this.props.data.homeTeam.length > 0
                  ) {
                    var i,
                      r = Object(o.a)(this.props.data.homeTeam);
                    try {
                      for (r.s(); !(i = r.n()).done; ) {
                        var l = i.value;
                        a.push("#28d0ce"), t.push(l.score), n.push(l.goals);
                      }
                    } catch (u) {
                      r.e(u);
                    } finally {
                      r.f();
                    }
                  }
                  if (
                    this.props.data &&
                    this.props.data.draw &&
                    this.props.data.draw.length > 0
                  ) {
                    var p,
                      c = Object(o.a)(this.props.data.draw);
                    try {
                      for (c.s(); !(p = c.n()).done; ) {
                        l = p.value;
                        a.push("#FFFFFF"), t.push(l.score), n.push(l.goals);
                      }
                    } catch (u) {
                      c.e(u);
                    } finally {
                      c.f();
                    }
                  }
                  if (
                    this.props.data &&
                    this.props.data.awayTeam &&
                    this.props.data.awayTeam.length > 0
                  ) {
                    var d,
                      m = Object(o.a)(this.props.data.awayTeam);
                    try {
                      for (m.s(); !(d = m.n()).done; ) {
                        l = d.value;
                        a.push("#e47273"), t.push(l.score), n.push(l.goals);
                      }
                    } catch (u) {
                      m.e(u);
                    } finally {
                      m.f();
                    }
                  }
                  h.a.chart(
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
                        categories: t,
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
                      colors: a,
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
                      { name: "", colorByPoint: !0, data: n },
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
                    style: {
                      width: this.props.graphWidth,
                      height: this.props.graphHeight,
                    },
                  });
                },
              },
            ]),
            a
          );
        })(p.Component);
      t.a = d;
    },
    470: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB1ElEQVQ4jc3US6hOURQH8N93mXh2RRKKizxLoatQ0lWSvNINETGQV8zM1J2YSBhJBjJSilB0GZl6JMr1Ji5K5K08vm652rVObbvPzMCq3Tl77bXX+f/Xf63jv7VaAtY0dnuJry9WYjWm4CsG4xnO4hTq+YVf3Uc1NWCZLl/DOvTiLTbjKQZgPm5jbiMEuc3AGexCZ/g34g46cCCBQCtOYjcuV/dzmoNwF9twqfjIC4xpwOAqpuNlSXMP+mF8cWk4BmJC4U/Jf2Bf5aiS1aIuaa1Bn/AvxnUcC9qbsvj1QXMBmvOaTcJ7rMAodKMr3pfiHg7jBDagBT0hSFeI0VkhGx3c32EipsWHOiKRONuBEZiNybiCNoxU0ak1t7ZEH20NterxTKjOZ3VKNJ9kCt4Iih97P9+8VSF7EIhyu4BFGIYhsdpxuohLJXqU1+w1fmIq7mfi9OR9hHERV1lCNTNE+qNpD8U6Hvuk1hHsz2LaY5QOxn5ZiFJXNG0t5E9CXMSqoP4pS5bQvorztuizOfhWNm2aw7V4ju8xBcuL+swLAd7EfklKVB2Ws/kFC7EXW0L+5EurP3ZGTz2M9shR//UXlGxotMasGKkPeIxzaRbL4ETz3xl+A1KicAtcjCWkAAAAAElFTkSuQmCC";
    },
    471: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAAgklEQVQ4jWNkgIL3ltrcDAwMaxkYGFwYGBiYGbCDHwwMDJMYGBjKBY9fZWBCUpLEwMDgjkcjCHAwMDCUMTAw6II4yJql8GhCB3LomkkGo5pHNdNP8z8S9P1F13ycSI1fGRgYzoMYLEiCWxgYGBIJZMtvDAwMCxkYGF6S4EpqAwYGBgBaGxAYbGNKcgAAAABJRU5ErkJggg==";
    },
    472: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(91),
        o = a(92),
        n = a(94),
        i = a(93),
        r = a(1),
        l = a.n(r),
        p = a(66),
        c = a(33),
        h = a(22),
        d = a(224),
        m = a(95),
        u = a(6),
        g = a(4),
        y = a(470),
        v = a.n(y),
        E = a(471),
        b = a.n(E),
        f = a(237),
        N = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            var e;
            return (
              Object(s.a)(this, a),
              ((e = t.call(this)).state = {
                expandedRows: [],
                homeTeamExpand: [],
                awayTeamExpand: [],
              }),
              e
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "handleRowClick",
                value: function (e) {
                  var t = this;
                  if (this.state.expandedRows !== e) {
                    var a = e,
                      s =
                        g.e.moreInfo +
                        "?eventId=" +
                        this.props.eventId +
                        "&languageId=" +
                        this.props.languageId;
                    Object(u.a)(s, "GET", {}).then(function (e) {
                      e.data &&
                        Object.keys(e.data).length > 0 &&
                        (e.data.hasOwnProperty("homeTeam") &&
                          t.setState({ homeTeamExpand: e.data.homeTeam }),
                        e.data.hasOwnProperty("awayTeam") &&
                          t.setState({ awayTeamExpand: e.data.awayTeam }));
                    }),
                      this.setState({ expandedRows: a });
                  } else this.setState({ expandedRows: "" });
                },
              },
              {
                key: "renderItem",
                value: function (e, t) {
                  var a = e.scoreFT.split(":"),
                    s = "";
                  a[0] > a[1]
                    ? (s += "homeBold")
                    : a[0] < a[1]
                      ? (s += "awayBold")
                      : (s += "draw");
                  var o = [
                    l.a.createElement(
                      "tr",
                      { key: "row-data-" + t },
                      l.a.createElement(
                        "td",
                        null,
                        l.a.createElement(
                          "div",
                          null,
                          e.kickOff
                            ? Object(m.b)(e.kickOff, "banner").date
                            : "",
                        ),
                      ),
                      l.a.createElement(
                        "td",
                        null,
                        l.a.createElement("div", null, e.competitionName),
                      ),
                      l.a.createElement(
                        "td",
                        { className: "team" },
                        "homeBold" === s
                          ? l.a.createElement(
                              "strong",
                              null,
                              " ",
                              l.a.createElement(
                                "div",
                                null,
                                e.homeTeamName,
                                " ",
                              ),
                            )
                          : l.a.createElement("div", null, e.homeTeamName, " "),
                      ),
                      l.a.createElement(
                        "td",
                        { className: "noBorder-td" },
                        l.a.createElement(
                          "div",
                          { className: "whiteColumn-bg" },
                          e.scoreFT,
                          " (",
                          e.scoreHT,
                          ") ",
                          e.isNeutral ? "#" : "",
                        ),
                      ),
                      l.a.createElement(
                        "td",
                        { className: "team" },
                        "awayBold" === s
                          ? l.a.createElement(
                              "strong",
                              null,
                              l.a.createElement(
                                "div",
                                null,
                                e.awayTeamName,
                                " ",
                              ),
                            )
                          : l.a.createElement("div", null, e.awayTeamName, " "),
                      ),
                      l.a.createElement(
                        "td",
                        null,
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            "span",
                            {
                              className:
                                "status " +
                                (e.had && "h" === e.had.trim().toLowerCase()
                                  ? "win"
                                  : e.had && "a" === e.had.trim().toLowerCase()
                                    ? "loss"
                                    : e.had &&
                                        "d" === e.had.trim().toLowerCase()
                                      ? "draw"
                                      : ""),
                            },
                            e.had
                              ? this.props.staticKeyWords[
                                  e.had.trim().toLowerCase()
                                ]
                              : "-",
                          ),
                        ),
                      ),
                      l.a.createElement(
                        "td",
                        null,
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            "span",
                            {
                              className:
                                "status " +
                                (e.fHad && "h" === e.fHad.trim().toLowerCase()
                                  ? "win"
                                  : e.fHad &&
                                      "a" === e.fHad.trim().toLowerCase()
                                    ? "loss"
                                    : e.fHad &&
                                        "d" === e.fHad.trim().toLowerCase()
                                      ? "draw"
                                      : ""),
                            },
                            e.fHad
                              ? this.props.staticKeyWords[
                                  e.fHad.trim().toLowerCase()
                                ]
                              : "-",
                          ),
                        ),
                      ),
                      l.a.createElement(
                        "td",
                        null,
                        e.hdcName
                          ? l.a.createElement(
                              "div",
                              { className: "textIcon" },
                              l.a.createElement(
                                "span",
                                { className: "hdcValue" },
                                e.hdcName ? e.hdcName : "-",
                              ),
                              l.a.createElement(
                                "span",
                                {
                                  className:
                                    "status " +
                                    (e.hdcOutcome &&
                                    "h" === e.hdcOutcome.trim().toLowerCase()
                                      ? "win"
                                      : e.hdcOutcome &&
                                          "a" ===
                                            e.hdcOutcome.trim().toLowerCase()
                                        ? "loss"
                                        : e.hdcOutcome &&
                                            "d" ===
                                              e.hdcOutcome.trim().toLowerCase()
                                          ? "draw"
                                          : ""),
                                },
                                e.hdcOutcome
                                  ? this.props.staticKeyWords[
                                      e.hdcOutcome.trim().toLowerCase()
                                    ]
                                  : "",
                              ),
                            )
                          : l.a.createElement("span", null, "-"),
                      ),
                      l.a.createElement(
                        "td",
                        null,
                        e.hHadName
                          ? l.a.createElement(
                              "div",
                              { className: "textIcon" },
                              l.a.createElement(
                                "span",
                                null,
                                e.hHadName ? e.hHadName : "-",
                              ),
                              l.a.createElement(
                                "span",
                                {
                                  className:
                                    "status " +
                                    (e.hHadOutcome &&
                                    "h" === e.hHadOutcome.trim().toLowerCase()
                                      ? "win"
                                      : e.hHadOutcome &&
                                          "a" ===
                                            e.hHadOutcome.trim().toLowerCase()
                                        ? "loss"
                                        : e.hHadOutcome &&
                                            "d" ===
                                              e.hHadOutcome.trim().toLowerCase()
                                          ? "draw"
                                          : ""),
                                },
                                e.hHadOutcome
                                  ? this.props.staticKeyWords[
                                      e.hHadOutcome.trim().toLowerCase()
                                    ]
                                  : "-",
                              ),
                            )
                          : l.a.createElement("span", null, "-"),
                      ),
                    ),
                  ];
                  return (
                    this.state.expandedRows === t &&
                      o.push(
                        l.a.createElement(
                          "tr",
                          { key: "row-expanded-" + t },
                          l.a.createElement(
                            "td",
                            {
                              colspan: "4",
                              className: "noBorder-td text-right",
                            },
                            this.state.homeTeamExpand.map(function (e, t) {
                              return l.a.createElement(
                                "div",
                                {
                                  className:
                                    "moreExpand" +
                                    ("red card" === e.eventType.toLowerCase()
                                      ? " textRed"
                                      : " textBlue"),
                                },
                                l.a.createElement(
                                  "span",
                                  { className: "moreIcon" },
                                  "goal" === e.eventType.toLowerCase()
                                    ? l.a.createElement("img", {
                                        src: v.a,
                                        alt: "sport icon",
                                      })
                                    : "red card" === e.eventType.toLowerCase()
                                      ? l.a.createElement("img", {
                                          src: b.a,
                                          alt: "red card",
                                        })
                                      : "",
                                ),
                                l.a.createElement(
                                  "span",
                                  null,
                                  e.playerName,
                                  "(",
                                  e.goalMinute,
                                  ")",
                                ),
                              );
                            }),
                          ),
                          l.a.createElement(
                            "td",
                            {
                              colspan: "7",
                              className: "noBorder-td text-left",
                            },
                            this.state.awayTeamExpand.map(function (e, t) {
                              return l.a.createElement(
                                "div",
                                {
                                  className:
                                    "moreExpand" +
                                    ("red card" === e.eventType.toLowerCase()
                                      ? " textRed"
                                      : " textBlue"),
                                },
                                l.a.createElement(
                                  "span",
                                  { className: "moreIcon" },
                                  "goal" === e.eventType.toLowerCase()
                                    ? l.a.createElement("img", {
                                        src: v.a,
                                        alt: "sport icon",
                                      })
                                    : "red card" === e.eventType.toLowerCase()
                                      ? l.a.createElement("img", {
                                          src: b.a,
                                          alt: "red card",
                                        })
                                      : "",
                                ),
                                l.a.createElement(
                                  "span",
                                  null,
                                  e.playerName,
                                  "(",
                                  e.goalMinute,
                                  ")",
                                ),
                              );
                            }),
                          ),
                        ),
                      ),
                    o
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = [];
                  return (
                    this.props.data.forEach(function (a, s) {
                      var o = e.renderItem(a, s);
                      t = t.concat(o);
                    }),
                    l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        "table",
                        { className: "tableDefault" },
                        l.a.createElement(
                          "thead",
                          null,
                          l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement(
                              "th",
                              { className: "w-100px" },
                              this.props.headings.date,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.headings.comp,
                            ),
                            l.a.createElement(
                              "th",
                              { className: "team" },
                              this.props.headings.homeTeam,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.headings.scoreHT,
                            ),
                            l.a.createElement(
                              "th",
                              { className: "team" },
                              this.props.headings.awayTeam,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.headings.had,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.headings.fHAD,
                            ),
                            l.a.createElement(
                              "th",
                              { className: "w-150" },
                              this.props.headings.hdc,
                            ),
                            l.a.createElement(
                              "th",
                              { className: "w-80" },
                              this.props.headings.hHAD,
                            ),
                          ),
                        ),
                        l.a.createElement(
                          "tbody",
                          null,
                          !this.props.isLoader && this.props.data.length > 0
                            ? t
                            : l.a.createElement(
                                "tr",
                                null,
                                l.a.createElement(
                                  "td",
                                  {
                                    colSpan: Object.keys(this.props.headings)
                                      .length,
                                  },
                                  l.a.createElement(f.a, {
                                    isLoader: this.props.loader,
                                    isNoData:
                                      !this.props.loader &&
                                      0 === this.props.data.length,
                                    temporarilyNoData:
                                      this.props.temporarilyNoData,
                                  }),
                                ),
                              ),
                        ),
                      ),
                      this.props.staticKeyWords.noteLang,
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.Component);
      var T = Object(p.b)(function (e) {
        return { staticKeyWords: e.app.staticKeyWords };
      })(N);
      function O(e) {
        return l.a.createElement(T, {
          data: e.data,
          headings: e.headings,
          eventId: e.eventId,
          loader: e.loader,
          languageId: e.languageId,
          temporarilyNoData: e.temporarilyNoData,
        });
      }
      var w = a(0),
        L = a(454),
        I = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.had &&
                    Object.keys(this.props.had).length > 0 &&
                    this.loadHADGraph();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  e.had &&
                    JSON.stringify(e.had) !== JSON.stringify(this.props.had) &&
                    Object.keys(this.props.had).length > 0 &&
                    this.loadHADGraph();
                },
              },
              {
                key: "loadHADGraph",
                value: function () {
                  L.a.chart(
                    this.props.loadin,
                    Object(w.a)(
                      {
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
                          categories: [
                            this.props.homeTeamName,
                            this.props.draw ? this.props.draw : "Draw",
                            this.props.awayTeamName,
                          ],
                          lineWidth: 0,
                          labels: {
                            colorByPoint: !0,
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
                        colors: ["#29d6d4", "#FFFFFF", "#e57374"],
                        plotOptions: {
                          series: {
                            dataLabels: {
                              enabled: !0,
                              align: "center",
                              inside: !0,
                              style: {
                                textOutline: "0px",
                                fontWeight: "normal",
                                fontSize: "12px",
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
                        series: [
                          {
                            name: "Population",
                            colorByPoint: !0,
                            data: [
                              [
                                this.props.homeTeamName,
                                this.props.had.homeTeam,
                              ],
                              [
                                this.props.draw ? this.props.draw : "Draw",
                                this.props.had.draw,
                              ],
                              [
                                this.props.awayTeamName,
                                this.props.had.awayTeam,
                              ],
                            ],
                          },
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
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement("div", {
                      id: this.props.loadin,
                      style: {
                        width: this.props.graphWidth
                          ? this.props.graphWidth
                          : "100%",
                        height: this.props.graphHeight
                          ? this.props.graphHeight
                          : "200px",
                      },
                    }),
                  );
                },
              },
            ]),
            a
          );
        })(r.Component),
        W = a(64),
        j = a(464),
        k = a(456),
        C = a(455),
        H = a(3),
        x = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.dispatch(Object(W.d)(H.b)),
                    this.props.lastEncountersOptions &&
                      this.props.lastEncountersOptions.length > 0 &&
                      this.props.eventInfo &&
                      this.props.eventInfo.eventId &&
                      this.props.eventInfo.eventId.length > 0 &&
                      (this.props.dispatch(
                        Object(W.c)(this.props.lastEncountersOptions),
                      ),
                      this.props.dispatch(
                        Object(W.b)({
                          optionId: this.props.hideOptions
                            ? 1
                            : this.props.selectedOptionId,
                          marketGroupId: 1,
                          eventId: this.props.eventInfo.eventId,
                          languageId: this.props.languageId,
                          isBasic: this.props.isBasic,
                        }),
                      ));
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  JSON.stringify(e.lastEncountersOptions) !==
                    JSON.stringify(this.props.lastEncountersOptions) &&
                    e.lastEncountersOptions.length > 0 &&
                    this.props.eventInfo &&
                    this.props.eventInfo.eventId &&
                    this.props.eventInfo.eventId.length > 0 &&
                    (this.props.dispatch(Object(W.c)(e.lastEncountersOptions)),
                    this.props.dispatch(
                      Object(W.b)({
                        optionId: e.hideOptions ? 1 : e.selectedOptionId,
                        marketGroupId: 1,
                        eventId: this.props.eventInfo.eventId,
                        languageId: this.props.languageId,
                        isBasic: this.props.isBasic,
                      }),
                    )),
                    e.lastEncountersOptions.length > 0 &&
                      this.props.eventInfo &&
                      this.props.eventInfo.eventId &&
                      this.props.eventInfo.eventId.length > 0 &&
                      this.props.eventInfo.eventId !== e.eventInfo.eventId &&
                      (this.props.dispatch(
                        Object(W.c)(e.lastEncountersOptions),
                      ),
                      this.props.dispatch(
                        Object(W.b)({
                          optionId: e.hideOptions ? 1 : e.selectedOptionId,
                          marketGroupId: 1,
                          eventId: e.eventInfo.eventId,
                          languageId: e.languageId,
                          isBasic: e.isBasic,
                        }),
                      ));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(W.d)(H.b));
                },
              },
              {
                key: "optionChanged",
                value: function (e) {
                  this.props.dispatch(Object(W.d)(e.target.value)),
                    this.props.dispatch(
                      Object(W.b)({
                        optionId: e.target.value,
                        marketGroupId: 1,
                        eventId: this.props.eventInfo.eventId,
                        languageId: this.props.languageId,
                        isBasic: this.props.isBasic,
                      }),
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    {
                      style: { display: "block" },
                      id: "Standings",
                      className: "tabContent",
                    },
                    l.a.createElement(
                      "div",
                      { className: "tabTable-content" },
                      l.a.createElement(
                        "div",
                        { className: "tableHeader-home" },
                        this.props.isBasic && this.props.hideOptions
                          ? l.a.createElement(
                              "div",
                              { className: "tableHeading" },
                              " ",
                              this.props.staticKeyWords.headToHead,
                              " ",
                              l.a.createElement(
                                "span",
                                null,
                                "(",
                                this.props.staticKeyWords.last8Encounters,
                                ")",
                              ),
                            )
                          : l.a.createElement(
                              "div",
                              { className: "tableHeading" },
                              " ",
                              this.props.staticKeyWords.last8Encounters,
                            ),
                        l.a.createElement(
                          "div",
                          { className: "tableHeading-rightSection" },
                          l.a.createElement(
                            "div",
                            { className: "form-group" },
                            this.props.hideOptions
                              ? ""
                              : l.a.createElement(
                                  "div",
                                  { className: "form-control" },
                                  l.a.createElement(
                                    "select",
                                    {
                                      className: "select-margin",
                                      value: this.props.selectedOptionId,
                                      onChange: this.optionChanged.bind(this),
                                    },
                                    this.props.options.map(function (e, t) {
                                      return 3 != e.id
                                        ? l.a.createElement(
                                            "option",
                                            { key: t, value: e.id },
                                            e.name,
                                          )
                                        : "";
                                    }),
                                  ),
                                ),
                          ),
                        ),
                      ),
                      this.props.isBasic &&
                        this.props.tableRecentResults &&
                        Object.keys(this.props.tableRecentResults)
                        ? l.a.createElement(
                            "div",
                            { className: "pastSeasons pastSeasons-grid" },
                            l.a.createElement(
                              "div",
                              { className: "pastSeasons-block homeWins small" },
                              this.props.homeTeamName,
                              " ",
                              this.props.staticKeyWords.wins,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.tableRecentResults.homeTeam,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "pastSeasons-block draws small" },
                              this.props.staticKeyWords.draws,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.tableRecentResults.draw,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "pastSeasons-block awayWins small" },
                              this.props.awayTeamName,
                              " ",
                              this.props.staticKeyWords.wins,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.tableRecentResults.awayTeam,
                              ),
                            ),
                          )
                        : "",
                      l.a.createElement(O, {
                        data: this.props.h2hLastEncounters,
                        eventId: this.props.match.params.eventId,
                        languageId: this.props.languageId,
                        loader: this.props.loader,
                        temporarilyNoData: this.props.isData
                          ? this.props.staticKeyWords.noPastMeetingsVenue
                          : this.props.staticKeyWords.noPastMeetings,
                        headings: {
                          season: this.props.staticKeyWords.season,
                          date: this.props.staticKeyWords.mcDate,
                          comp: this.props.staticKeyWords.competition,
                          homeTeam: this.props.staticKeyWords.homeTeam,
                          scoreHT: this.props.staticKeyWords.scoreHt,
                          awayTeam: this.props.staticKeyWords.awayTeam,
                          had: this.props.staticKeyWords.had,
                          fHAD: this.props.staticKeyWords.fHAD,
                          hdc: this.props.staticKeyWords.hdc,
                          hHAD: this.props.staticKeyWords.hHAD,
                          more: this.props.staticKeyWords.more,
                        },
                      }),
                    ),
                    this.props.isEdisplay ||
                      this.props.isBasic ||
                      this.props.loader ||
                      !(
                        (this.props.had &&
                          Object.keys(this.props.had).length > 0) ||
                        (this.props.firstHalfHad &&
                          Object.keys(this.props.firstHalfHad).length > 0) ||
                        (this.props.goalsPerGame &&
                          Object.keys(this.props.goalsPerGame).length > 0)
                      )
                      ? ""
                      : l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            "div",
                            { className: "graphSection" },
                            l.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              l.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.homeAwayDraw,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              l.a.createElement(
                                "div",
                                { className: "graphContent TwoInRow" },
                                l.a.createElement(
                                  "div",
                                  { className: "leftColumn" },
                                  l.a.createElement(I, {
                                    homeTeamName: this.props.homeTeamName,
                                    awayTeamName: this.props.awayTeamName,
                                    had: this.props.had,
                                    draw: this.props.staticKeyWords.draw,
                                    loadin: "had",
                                    title: this.props.staticKeyWords.fullTime,
                                  }),
                                  l.a.createElement(I, {
                                    homeTeamName: this.props.homeTeamName,
                                    awayTeamName: this.props.awayTeamName,
                                    had: this.props.firstHalfHad,
                                    draw: this.props.staticKeyWords.draw,
                                    loadin: "fhad",
                                    title: this.props.staticKeyWords.halfTime,
                                  }),
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "rightColumn" },
                                  Object.keys(this.props.goalsPerGame).length >
                                    0 &&
                                    l.a.createElement(C.a, {
                                      homeTeamName: this.props.homeTeamName,
                                      awayTeamName: this.props.awayTeamName,
                                      home: this.props.goalsPerGame.homeTeam,
                                      away: this.props.goalsPerGame.awayTeam,
                                      title:
                                        this.props.languageId === H.c
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
                                                this.props.staticKeyWords.game,
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
                          l.a.createElement(
                            "div",
                            { className: "graphSection" },
                            l.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              l.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.handicap,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              l.a.createElement(
                                "div",
                                { className: "graphContent TwoInRow" },
                                l.a.createElement(
                                  "div",
                                  { className: "leftColumn" },
                                  l.a.createElement(k.a, {
                                    data: this.props.hdc,
                                    loadin: "hdc",
                                    title: this.props.staticKeyWords.handicap,
                                    maxValue: 8,
                                    graphHeight: "300px",
                                    graphWidth: "85%",
                                  }),
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "rightColumn" },
                                  l.a.createElement(I, {
                                    homeTeamName: this.props.homeTeamName,
                                    awayTeamName: this.props.awayTeamName,
                                    had: this.props.hdcHad,
                                    loadin: "hachad",
                                    draw: this.props.staticKeyWords.draw,
                                    title:
                                      this.props.staticKeyWords.handicapHAD,
                                    graphHeight: "200px",
                                    graphWidth: "85%",
                                  }),
                                ),
                              ),
                              l.a.createElement(
                                "div",
                                { className: "noDatagraph" },
                                this.props.staticKeyWords.handicapLinePastGame,
                              ),
                            ),
                          ),
                          l.a.createElement(
                            "div",
                            { className: "graphSection" },
                            l.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              l.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                l.a.createElement(
                                  "span",
                                  null,
                                  this.props.staticKeyWords.csHafu,
                                ),
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              l.a.createElement(
                                "div",
                                { className: "graphContent TwoInRow" },
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "correctScore-graph leftColumn leftColumn-fullwidth singleColumn",
                                  },
                                  l.a.createElement(j.a, {
                                    data: this.props.fullTime,
                                    maxValue: 8,
                                    loadin: "csfilltime",
                                    graphWidth: "85%",
                                    graphHeight: "300px",
                                    title: this.props.staticKeyWords.fullTime,
                                  }),
                                  l.a.createElement(j.a, {
                                    data: this.props.halfTime,
                                    maxValue: 8,
                                    loadin: "cshalftime",
                                    graphWidth: "85%",
                                    graphHeight: "300px",
                                    title: this.props.staticKeyWords.halfTime,
                                  }),
                                ),
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "haFu rightColumn rightColumn-fullwidth ",
                                  },
                                  l.a.createElement(k.a, {
                                    data: this.props.haFu,
                                    loadin: "hafu",
                                    maxValue: 8,
                                    title: this.props.staticKeyWords.haFu,
                                    graphHeight: "600px",
                                    graphWidth: "85%",
                                  }),
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
        })(r.Component);
      var K = Object(p.b)(
          function (e) {
            return {
              h2hLastEncounters: e.hadhandicap.h2hLastEncounters,
              homeTeamName: e.match.bannerData.homeTeamName,
              awayTeamName: e.match.bannerData.awayTeamName,
              homeTeamId: e.match.bannerData.homeTeamId,
              awayTeamId: e.match.bannerData.awayTeamId,
              had: e.hadhandicap.had,
              firstHalfHad: e.hadhandicap.firstHalfHad,
              hdcHad: e.hadhandicap.hdcHad,
              options: e.hadhandicap.options,
              fullTime: e.hadhandicap.fullTime,
              halfTime: e.hadhandicap.halfTime,
              haFu: e.hadhandicap.haFu,
              goalsPerGame: e.hadhandicap.goalsPerGame,
              hdc: e.hadhandicap.hdc,
              staticKeyWords: e.app.staticKeyWords,
              selectedOptionId: e.hadhandicap.selectedOptionId,
              languageId: e.app.languageId,
              lastEncountersOptions: e.matchcenter.lastEncountersOptions,
              tableRecentResults: e.hadhandicap.tableRecentResults,
              loader: e.hadhandicap.loader,
              eventInfo: e.app.eventInfo,
              isData: e.hadhandicap.isData,
              isEdisplay: e.app.isEdisplay,
            };
          },
          function (e) {
            return {
              dispatch: e,
              actions: Object(c.b)({ setOptions: W.c }, e),
            };
          },
        )(x),
        D = a(25),
        F = a(155),
        S = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a(e) {
            var o, n;
            return (
              Object(s.a)(this, a),
              ((n = t.call(this, e)).state =
                ((o = {
                  hiLoData: [],
                  expandedRows: [],
                  cornersHiLoLine: [],
                  fhHiLoLine: [],
                  hiLoLine: [],
                  selectedCornersHiloLine: 9.5,
                  selectedFhHiloLine: 1.5,
                  selectedhiLoLine: 2.5,
                }),
                Object(w.a)(o, "expandedRows", []),
                Object(w.a)(o, "isDataSet", !1),
                Object(w.a)(o, "homeTeamExpand", []),
                Object(w.a)(o, "awayTeamExpand", []),
                Object(w.a)(o, "cornersHiLoLinetDefaulData", 9.5),
                Object(w.a)(o, "fhHiLoDefaultData", 1.5),
                Object(w.a)(o, "hiLoDefaultData", 2.5),
                o)),
              n
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.hiLoData.length > 0 &&
                    (this.setState({ hiLoData: this.props.hiLoData }),
                    this.setData(this, this.props.hiLoData));
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  var t = this;
                  ((JSON.stringify(e.hiLoData) !==
                    JSON.stringify(this.props.hiLoData) &&
                    e.hiLoData.length > 0) ||
                    !this.state.isDataSet) &&
                    (this.setState({
                      selectedCornersHiloLine: 9.5,
                      selectedFhHiloLine: 1.5,
                      selectedhiLoLine: 2.5,
                    }),
                    this.setState({ hiLoData: e.hiLoData }),
                    setTimeout(function () {
                      t.setData(t, e.hiLoData);
                    }, 10));
                },
              },
              {
                key: "setData",
                value: function (e, t) {
                  if (t && t.length > 0) {
                    var a,
                      s = [],
                      o = [],
                      n = [],
                      i = e.state.selectedCornersHiloLine
                        ? e.state.selectedCornersHiloLine
                        : "",
                      r = e.state.selectedFhHiloLine
                        ? e.state.selectedFhHiloLine
                        : "",
                      l = e.state.selectedhiLoLine
                        ? e.state.selectedhiLoLine
                        : "",
                      p = t[0],
                      c = Object(D.a)(p.cornersHiLo);
                    try {
                      for (c.s(); !(a = c.n()).done; ) {
                        var h = a.value;
                        s.push(h.line), "" === i && (i = h.line);
                      }
                    } catch (y) {
                      c.e(y);
                    } finally {
                      c.f();
                    }
                    var d,
                      m = Object(D.a)(p.fhHiLo);
                    try {
                      for (m.s(); !(d = m.n()).done; ) {
                        h = d.value;
                        o.push(h.line), "" === r && (r = h.line);
                      }
                    } catch (y) {
                      m.e(y);
                    } finally {
                      m.f();
                    }
                    var u,
                      g = Object(D.a)(p.hiLo);
                    try {
                      for (g.s(); !(u = g.n()).done; ) {
                        h = u.value;
                        n.push(h.line), "" === l && (l = h.line);
                      }
                    } catch (y) {
                      g.e(y);
                    } finally {
                      g.f();
                    }
                    e.setState({
                      isDataSet: !0,
                      cornersHiLoLine: s,
                      fhHiLoLine: o,
                      hiLoLine: n,
                      selectedCornersHiloLine: i,
                      selectedFhHiloLine: r,
                      selectedhiLoLine: l,
                    });
                  }
                },
              },
              {
                key: "handleRowClick",
                value: function (e) {
                  var t = this;
                  if (this.state.expandedRows !== e) {
                    var a = e,
                      s =
                        g.e.moreInfo +
                        "?eventId=" +
                        this.props.eventId +
                        "&languageId=" +
                        this.props.languageId;
                    Object(u.a)(s, "GET", {}).then(function (e) {
                      e.data &&
                        Object.keys(e.data).length > 0 &&
                        (e.data.hasOwnProperty("homeTeam") &&
                          t.setState({ homeTeamExpand: e.data.homeTeam }),
                        e.data.hasOwnProperty("awayTeam") &&
                          t.setState({ awayTeamExpand: e.data.awayTeam }));
                    }),
                      this.setState({ expandedRows: a });
                  } else this.setState({ expandedRows: "" });
                },
              },
              {
                key: "renderItem",
                value: function (e, t) {
                  var a = this,
                    s = "",
                    o = e.scoreFT.split(":");
                  o[0] > o[1]
                    ? (s += "homeBold")
                    : o[0] < o[1]
                      ? (s += "awayBold")
                      : (s += "draw");
                  var n = this,
                    i = [
                      l.a.createElement(
                        "tr",
                        null,
                        l.a.createElement(
                          "td",
                          null,
                          l.a.createElement(
                            "div",
                            null,
                            e.kickOff
                              ? Object(m.b)(e.kickOff, "banner").date
                              : "",
                          ),
                        ),
                        l.a.createElement(
                          "td",
                          null,
                          l.a.createElement("div", null, e.competitionName),
                        ),
                        l.a.createElement(
                          "td",
                          { className: "team" },
                          "homeBold" === s
                            ? l.a.createElement(
                                "strong",
                                null,
                                " ",
                                l.a.createElement("div", null, e.homeTeamName),
                              )
                            : l.a.createElement("div", null, e.homeTeamName),
                        ),
                        l.a.createElement(
                          "td",
                          { className: "noBorder-td" },
                          l.a.createElement(
                            "div",
                            { className: "whiteColumn-bg" },
                            e.scoreFT,
                            " (",
                            e.scoreHT,
                            ") ",
                            e.isNeutral ? "#" : "",
                          ),
                        ),
                        l.a.createElement(
                          "td",
                          { className: "team" },
                          "awayBold" === s
                            ? l.a.createElement(
                                "strong",
                                null,
                                " ",
                                l.a.createElement("div", null, e.awayTeamName),
                              )
                            : l.a.createElement("div", null, e.awayTeamName),
                        ),
                        l.a.createElement(
                          "td",
                          null,
                          l.a.createElement("div", null, e.totalGoals),
                        ),
                        l.a.createElement(
                          "td",
                          null,
                          e.fhHiLo.map(function (e) {
                            if (e.line === n.state.selectedFhHiloLine)
                              return l.a.createElement(
                                "div",
                                null,
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "status " +
                                      (e.outcomeName &&
                                      "h" === e.outcomeName.trim().toLowerCase()
                                        ? "BTTSyes"
                                        : "BTTSno"),
                                  },
                                  "h" === e.outcomeName.trim().toLowerCase()
                                    ? a.props.staticKeyWords.highIcon
                                    : "l" === e.outcomeName.trim().toLowerCase()
                                      ? a.props.staticKeyWords.lowIcon
                                      : "-",
                                ),
                              );
                          }),
                        ),
                        l.a.createElement(
                          "td",
                          null,
                          e.hiLo.map(function (e) {
                            if (e.line === n.state.selectedhiLoLine)
                              return l.a.createElement(
                                "div",
                                null,
                                l.a.createElement(
                                  "span",
                                  {
                                    className:
                                      e.outcomeName &&
                                      "h" === e.outcomeName.trim().toLowerCase()
                                        ? "status BTTSyes"
                                        : e.outcomeName &&
                                            "l" ===
                                              e.outcomeName.trim().toLowerCase()
                                          ? "status BTTSno"
                                          : "",
                                  },
                                  "h" === e.outcomeName.trim().toLowerCase()
                                    ? a.props.staticKeyWords.highIcon
                                    : "l" === e.outcomeName.trim().toLowerCase()
                                      ? a.props.staticKeyWords.lowIcon
                                      : "-",
                                ),
                              );
                          }),
                        ),
                        l.a.createElement(
                          "td",
                          null,
                          e.cornersHiLo.map(function (e) {
                            if (e.line === n.state.selectedCornersHiloLine)
                              return l.a.createElement(
                                "div",
                                null,
                                l.a.createElement(
                                  "span",
                                  {
                                    className: e.outcomeName
                                      .toLowerCase()
                                      .includes("h")
                                      ? "status BTTSyes"
                                      : e.outcomeName
                                            .toLowerCase()
                                            .includes("l")
                                        ? "status BTTSno"
                                        : "",
                                  },
                                  e.outcomeName && "-" !== e.outcomeName
                                    ? ("h" ===
                                      e.outcomeName
                                        .toLowerCase()
                                        .charAt(0)
                                        .toLowerCase()
                                        ? a.props.staticKeyWords.highIcon
                                        : a.props.staticKeyWords.lowIcon) +
                                        e.outcomeName.slice(1)
                                    : "-",
                                ),
                              );
                          }),
                        ),
                      ),
                    ];
                  return (
                    this.state.expandedRows === t &&
                      i.push(
                        l.a.createElement(
                          "tr",
                          { key: "row-expanded-" + t },
                          l.a.createElement(
                            "td",
                            { colspan: "4", class: "noBorder-td text-right" },
                            this.state.homeTeamExpand.map(function (e, t) {
                              return l.a.createElement(
                                "div",
                                {
                                  class:
                                    "moreExpand" +
                                    (e.eventType &&
                                    "red card" === e.eventType.toLowerCase()
                                      ? " textRed"
                                      : " textBlue"),
                                },
                                l.a.createElement(
                                  "span",
                                  { class: "moreIcon" },
                                  e.eventType &&
                                    "goal" === e.eventType.toLowerCase()
                                    ? l.a.createElement("img", {
                                        src: v.a,
                                        alt: "sport icon",
                                      })
                                    : e.eventType &&
                                        "red card" === e.eventType.toLowerCase()
                                      ? l.a.createElement("img", {
                                          src: b.a,
                                          alt: "red card",
                                        })
                                      : "",
                                ),
                                l.a.createElement(
                                  "span",
                                  null,
                                  e.playerName,
                                  "(",
                                  e.goalMinute,
                                  ")",
                                ),
                              );
                            }),
                          ),
                          l.a.createElement(
                            "td",
                            { colspan: "7", class: "noBorder-td text-left" },
                            this.state.awayTeamExpand.map(function (e, t) {
                              return l.a.createElement(
                                "div",
                                {
                                  class:
                                    "moreExpand" +
                                    (e.eventType &&
                                    "red card" === e.eventType.toLowerCase()
                                      ? " textRed"
                                      : " textBlue"),
                                },
                                l.a.createElement(
                                  "span",
                                  { class: "moreIcon" },
                                  e.eventType &&
                                    "goal" === e.eventType.toLowerCase()
                                    ? l.a.createElement("img", {
                                        src: v.a,
                                        alt: "sport icon",
                                      })
                                    : e.eventType &&
                                        "red card" === e.eventType.toLowerCase()
                                      ? l.a.createElement("img", {
                                          src: b.a,
                                          alt: "red card",
                                        })
                                      : "",
                                ),
                                l.a.createElement(
                                  "span",
                                  null,
                                  e.playerName,
                                  "(",
                                  e.goalMinute,
                                  ")",
                                ),
                              );
                            }),
                          ),
                        ),
                      ),
                    i
                  );
                },
              },
              {
                key: "cornersHiLoLineChanged",
                value: function (e) {
                  this.setState({
                    selectedCornersHiloLine: Number(e.target.value),
                  });
                },
              },
              {
                key: "hiLoLineChanged",
                value: function (e) {
                  this.setState({ selectedhiLoLine: Number(e.target.value) });
                },
              },
              {
                key: "fhHiLoLineChanged",
                value: function (e) {
                  this.setState({ selectedFhHiloLine: Number(e.target.value) });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = [];
                  this.props.hiLoData.forEach(function (a, s) {
                    var o = e.renderItem(a, s);
                    t = t.concat(o);
                  });
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "table",
                      { className: "tableDefault" },
                      l.a.createElement(
                        "thead",
                        null,
                        l.a.createElement(
                          "tr",
                          null,
                          l.a.createElement(
                            "th",
                            { className: "w-100px" },
                            l.a.createElement(
                              "div",
                              null,
                              this.props.headings.date,
                            ),
                          ),
                          l.a.createElement(
                            "th",
                            null,
                            l.a.createElement(
                              "div",
                              null,
                              this.props.headings.comp,
                            ),
                          ),
                          l.a.createElement(
                            "th",
                            { className: "team" },
                            l.a.createElement(
                              "div",
                              { className: "teams" },
                              this.props.headings.homeTeam,
                            ),
                          ),
                          l.a.createElement(
                            "th",
                            null,
                            l.a.createElement(
                              "div",
                              null,
                              this.props.headings.scoreHT,
                            ),
                          ),
                          l.a.createElement(
                            "th",
                            { className: "team" },
                            l.a.createElement(
                              "div",
                              { className: "teams" },
                              this.props.headings.awayTeam,
                            ),
                          ),
                          l.a.createElement(
                            "th",
                            null,
                            l.a.createElement(
                              "div",
                              null,
                              this.props.headings.ttg,
                            ),
                          ),
                          l.a.createElement(
                            "th",
                            null,
                            l.a.createElement(
                              "div",
                              null,
                              this.props.headings.fhHiLo,
                              l.a.createElement(
                                "div",
                                { className: "form-group" },
                                l.a.createElement(
                                  "div",
                                  { className: "form-control" },
                                  l.a.createElement(
                                    "select",
                                    {
                                      className: "select-margin",
                                      value: this.state.selectedFhHiloLine,
                                      onChange:
                                        this.fhHiLoLineChanged.bind(this),
                                    },
                                    this.state.fhHiLoLine.map(function (t) {
                                      return t == e.state.fhHiLoDefaultData
                                        ? l.a.createElement(
                                            "option",
                                            { selected: !0, value: t },
                                            t,
                                          )
                                        : l.a.createElement(
                                            "option",
                                            { value: t },
                                            t,
                                          );
                                    }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          l.a.createElement(
                            "th",
                            null,
                            l.a.createElement(
                              "div",
                              null,
                              this.props.headings.hiLo,
                              l.a.createElement(
                                "div",
                                { className: "form-group" },
                                l.a.createElement(
                                  "div",
                                  { className: "form-control" },
                                  l.a.createElement(
                                    "select",
                                    {
                                      className: "select-margin",
                                      value: this.state.selectedhiLoLine,
                                      onChange: this.hiLoLineChanged.bind(this),
                                    },
                                    this.state.hiLoLine.map(function (t) {
                                      return t == e.state.hiLoDefaultData
                                        ? l.a.createElement(
                                            "option",
                                            { selected: !0, value: t },
                                            t,
                                          )
                                        : l.a.createElement(
                                            "option",
                                            { value: t },
                                            t,
                                          );
                                    }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          l.a.createElement(
                            "th",
                            { className: "w-100px" },
                            l.a.createElement(
                              "div",
                              { style: { whiteSpace: "nowrap" } },
                              this.props.headings.cornersHiLo,
                              l.a.createElement(
                                "div",
                                { className: "form-group" },
                                l.a.createElement(
                                  "div",
                                  { className: "form-control" },
                                  l.a.createElement(
                                    "select",
                                    {
                                      className: "select-margin",
                                      value: this.state.selectedCornersHiloLine,
                                      onChange:
                                        this.cornersHiLoLineChanged.bind(this),
                                    },
                                    this.state.cornersHiLoLine.map(
                                      function (t) {
                                        return t ==
                                          e.state.cornersHiLoLinetDefaulData
                                          ? l.a.createElement(
                                              "option",
                                              { selected: !0, value: t },
                                              t,
                                            )
                                          : l.a.createElement(
                                              "option",
                                              { value: t },
                                              t,
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
                      l.a.createElement(
                        "tbody",
                        null,
                        !this.props.isLoader && this.props.hiLoData.length > 0
                          ? t
                          : l.a.createElement(
                              "td",
                              {
                                colSpan: Object.keys(this.props.headings)
                                  .length,
                              },
                              l.a.createElement(f.a, {
                                isLoader: this.props.loader,
                                isNoData:
                                  !this.props.loader &&
                                  !this.props.hiLoData.length,
                                temporarilyNoData: this.props.temporarilyNoData,
                              }),
                            ),
                      ),
                    ),
                    this.props.staticKeyWords.noteLang,
                  );
                },
              },
            ]),
            a
          );
        })(r.Component);
      var G = Object(p.b)(function (e) {
          return { staticKeyWords: e.app.staticKeyWords };
        })(S),
        A = a(461),
        R = a(460),
        B = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              { key: "componentDidMount", value: function () {} },
              { key: "componentDidUpdate", value: function (e, t) {} },
              {
                key: "render",
                value: function () {
                  var e,
                    t = [],
                    a = [],
                    s = [],
                    o = Object(D.a)(this.props.data);
                  try {
                    for (o.s(); !(e = o.n()).done; ) {
                      var n = e.value;
                      t.push(n.line), a.push(n.high), s.push(n.low);
                    }
                  } catch (i) {
                    o.e(i);
                  } finally {
                    o.f();
                  }
                  return l.a.createElement(
                    "div",
                    { class: "graphContainer" },
                    l.a.createElement(
                      "div",
                      { class: "" },
                      l.a.createElement(
                        "div",
                        { class: "hiLoGraph" },
                        l.a.createElement(
                          "div",
                          { class: "hiLoGraph-header" },
                          l.a.createElement(
                            "div",
                            { class: "line-title" },
                            this.props.staticKeyWords.line,
                          ),
                          l.a.createElement(
                            "div",
                            { class: "mainTitle" },
                            this.props.title,
                          ),
                          l.a.createElement(
                            "div",
                            { class: "legend-info" },
                            l.a.createElement(
                              "div",
                              { class: "homeLegend" },
                              this.props.staticKeyWords.highIcon,
                            ),
                            " ",
                            l.a.createElement(
                              "div",
                              { class: "awayLegend" },
                              this.props.staticKeyWords.lowIcon,
                            ),
                          ),
                        ),
                        l.a.createElement(
                          "div",
                          { class: "barGraph" },
                          l.a.createElement(
                            "div",
                            { class: "hiLoGraph-body" },
                            l.a.createElement(
                              "div",
                              { class: "lineContent" },
                              this.props.data.map(function (e) {
                                return l.a.createElement(
                                  "span",
                                  null,
                                  e.high ? e.line : "",
                                );
                              }),
                            ),
                          ),
                          l.a.createElement(
                            "div",
                            { class: "barsContent" },
                            this.props.data.map(function (e) {
                              return l.a.createElement(
                                l.a.Fragment,
                                null,
                                e.high &&
                                  e.low &&
                                  l.a.createElement(
                                    "div",
                                    { class: "hiLoBar" },
                                    l.a.createElement(
                                      "span",
                                      {
                                        class: "awayBar",
                                        style: { flex: e.high },
                                      },
                                      e.high > 0 ? e.high : "",
                                    ),
                                    l.a.createElement(
                                      "span",
                                      {
                                        class: "homeBar",
                                        style: { flex: e.low },
                                      },
                                      e.low > 0 ? e.low : "",
                                    ),
                                  ),
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
            a
          );
        })(r.Component);
      var M = Object(p.b)(function (e) {
          return { staticKeyWords: e.app.staticKeyWords };
        })(B),
        P = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.data &&
                    this.props.data.length > 0 &&
                    this.loadHADGraph();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  JSON.stringify(e.data) !== JSON.stringify(this.props.data) &&
                    this.props.data.length > 0 &&
                    this.loadHADGraph();
                },
              },
              {
                key: "loadHADGraph",
                value: function () {
                  var e;
                  L.a.chart(
                    this.props.loadin,
                    ((e = {
                      chart: {
                        type: this.props.type,
                        backgroundColor: "rgba(255, 255, 255, 0.0)",
                      },
                      title: {
                        text: this.props.title,
                        style: { color: "#FFF" },
                      },
                      xAxis: {
                        gridLineWidth: 0,
                        categories: this.props.categories,
                        lineWidth: 0,
                        labels: { style: { color: "#FFF", fontSize: "12px" } },
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
                        column: { minPointLength: 3 },
                        series: {
                          dataLabels: {
                            enabled: !0,
                            align: "center",
                            inside: !1,
                            crop: !1,
                            overflow: "none",
                            style: {
                              color: "#FFF",
                              textOutline: "0px",
                              fontSize: "12px",
                              fontWeight: "normal",
                            },
                            textAlign: "left",
                          },
                          enableMouseTracking: !1,
                          borderWidth: 0,
                          borderRadiusTopLeft: "50%",
                          borderRadiusTopRight: "50%",
                        },
                      },
                    }),
                    Object(w.a)(e, "credits", { enabled: !1 }),
                    Object(w.a)(e, "series", [
                      {
                        name: "Population",
                        colorByPoint: !0,
                        data: this.props.data,
                      },
                    ]),
                    e),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement("div", {
                      id: this.props.loadin,
                      style: {
                        width: "80%",
                        height: this.props.height ? this.props.height : "200px",
                      },
                    }),
                  );
                },
              },
            ]),
            a
          );
        })(r.Component),
        J = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              { key: "componentDidMount", value: function () {} },
              { key: "componentDidUpdate", value: function (e, t) {} },
              { key: "loadGraph", value: function () {} },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { class: "teamToscore-container" },
                    this.props.data.neitherTeams &&
                      this.props.data.oneTeam &&
                      this.props.data.bothTeams
                      ? l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            "div",
                            { class: "mainTitle" },
                            this.props.title,
                          ),
                          l.a.createElement(
                            "div",
                            { class: "teamToscore-circles" },
                            l.a.createElement(
                              "div",
                              { class: "teamToscore-common" },
                              l.a.createElement(
                                "div",
                                { class: "teamTo-score neither" },
                                this.props.data.neitherTeams,
                              ),
                              l.a.createElement("div", null, "Neither"),
                            ),
                            l.a.createElement(
                              "div",
                              { class: "teamToscore-common" },
                              l.a.createElement(
                                "div",
                                { class: "teamTo-score one" },
                                this.props.data.oneTeam,
                              ),
                              l.a.createElement("div", null, "One"),
                            ),
                            l.a.createElement(
                              "div",
                              { class: "teamToscore-common" },
                              l.a.createElement(
                                "div",
                                { class: "teamTo-score both" },
                                this.props.data.bothTeams,
                              ),
                              l.a.createElement("div", null, "Both"),
                            ),
                          ),
                        )
                      : "",
                  );
                },
              },
            ]),
            a
          );
        })(r.Component),
        U = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.dispatch(Object(F.d)(H.b)),
                    this.props.lastEncountersOptions &&
                      this.props.lastEncountersOptions.length > 0 &&
                      this.props.eventInfo &&
                      this.props.eventInfo.eventId &&
                      this.props.eventInfo.eventId.length > 0 &&
                      (this.props.dispatch(
                        Object(F.c)(this.props.lastEncountersOptions),
                      ),
                      this.props.dispatch(
                        Object(F.b)({
                          optionId: this.props.selectedOptionId,
                          marketGroupId: 2,
                          eventId: this.props.eventInfo.eventId,
                          languageId: this.props.languageId,
                          isBasic: this.props.isBasic,
                        }),
                      ));
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  JSON.stringify(e.lastEncountersOptions) !==
                    JSON.stringify(this.props.lastEncountersOptions) &&
                    e.lastEncountersOptions.length > 0 &&
                    (this.props.dispatch(Object(F.c)(e.lastEncountersOptions)),
                    this.props.dispatch(
                      Object(F.b)({
                        optionId: e.selectedOptionId,
                        marketGroupId: 2,
                        eventId: e.eventInfo.eventId,
                        languageId: e.languageId,
                        isBasic: e.isBasic,
                      }),
                    )),
                    this.props.lastEncountersOptions.length > 0 &&
                      this.props.eventInfo &&
                      this.props.eventInfo.eventId &&
                      this.props.eventInfo.eventId.length > 0 &&
                      this.props.eventInfo.eventId !== e.eventInfo.eventId &&
                      (this.props.dispatch(
                        Object(F.c)(e.lastEncountersOptions),
                      ),
                      this.props.dispatch(
                        Object(F.b)({
                          optionId: e.selectedOptionId,
                          marketGroupId: 2,
                          eventId: e.eventInfo.eventId,
                          languageId: e.languageId,
                          isBasic: e.isBasic,
                        }),
                      ));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(F.d)(H.b));
                },
              },
              {
                key: "optionChanged",
                value: function (e) {
                  this.props.dispatch(Object(F.d)(e.target.value)),
                    this.props.dispatch(
                      Object(F.b)({
                        optionId: e.target.value,
                        marketGroupId: 2,
                        eventId: this.props.eventInfo.eventId,
                        languageId: this.props.languageId,
                        isBasic: this.props.isBasic,
                      }),
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = [],
                    a = [],
                    s = Object(D.a)(this.props.totalGoals);
                  try {
                    for (s.s(); !(e = s.n()).done; ) {
                      var o = e.value;
                      a.push(o.goals), t.push(o.timesScored);
                    }
                  } catch (n) {
                    s.e(n);
                  } finally {
                    s.f();
                  }
                  return l.a.createElement(
                    "div",
                    {
                      style: { display: "block" },
                      id: "Results",
                      className: "tabContent",
                    },
                    l.a.createElement(
                      "div",
                      { className: "tabTable-content" },
                      l.a.createElement(
                        "div",
                        { className: "tableHeader-home" },
                        l.a.createElement(
                          "div",
                          { className: "tableHeading" },
                          this.props.staticKeyWords.last8Encounters,
                        ),
                        l.a.createElement(
                          "div",
                          { className: "tableHeading-rightSection" },
                          l.a.createElement(
                            "div",
                            { className: "form-group" },
                            l.a.createElement(
                              "div",
                              { className: "form-control" },
                              l.a.createElement(
                                "select",
                                {
                                  className: "select-margin",
                                  value: this.props.selectedOptionId,
                                  onChange: this.optionChanged.bind(this),
                                },
                                this.props.lastEncountersOptions.map(
                                  function (e, t) {
                                    if (3 != e.id)
                                      return l.a.createElement(
                                        "option",
                                        {
                                          key: "hilo_option_" + t,
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
                      this.props.isBasic &&
                        this.props.tableRecentResults &&
                        Object.keys(this.props.tableRecentResults)
                        ? l.a.createElement(
                            "div",
                            { class: "pastSeasons pastSeasons-grid" },
                            l.a.createElement(
                              "div",
                              { class: "pastSeasons-block homeWins small" },
                              this.props.homeTeamName,
                              " ",
                              this.props.staticKeyWords.wins,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.tableRecentResults.homeTeam,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { class: "pastSeasons-block draws small" },
                              this.props.staticKeyWords.draws,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.tableRecentResults.draw,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { class: "pastSeasons-block awayWins small" },
                              this.props.awayTeamName,
                              " ",
                              this.props.staticKeyWords.wins,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.tableRecentResults.awayTeam,
                              ),
                            ),
                          )
                        : "",
                      l.a.createElement(G, {
                        hiLoData: this.props.hiLoLastEncounters,
                        loader: this.props.loader,
                        eventId: this.props.match.params.eventId,
                        languageId: this.props.languageId,
                        temporarilyNoData: this.props.isData
                          ? this.props.staticKeyWords.noPastMeetingsVenue
                          : this.props.staticKeyWords.noPastMeetings,
                        headings: {
                          season: this.props.staticKeyWords.season,
                          date: this.props.staticKeyWords.mcDate,
                          comp: this.props.staticKeyWords.competition,
                          homeTeam: this.props.staticKeyWords.homeTeam,
                          scoreHT: this.props.staticKeyWords.scoreHt,
                          awayTeam: this.props.staticKeyWords.awayTeam,
                          ttg: this.props.staticKeyWords.ttg,
                          fhHiLo: this.props.staticKeyWords.fhHiLo,
                          hiLo: this.props.staticKeyWords.hiLo,
                          btts: this.props.staticKeyWords.btts,
                          tts: this.props.staticKeyWords.tts,
                          cornersHiLo: this.props.staticKeyWords.cornersHiLo,
                          more: this.props.staticKeyWords.more,
                        },
                      }),
                    ),
                    this.props.isEdisplay ||
                      this.props.isBasic ||
                      this.props.loader ||
                      !(
                        (this.props.ftHiLo && this.props.ftHiLo.length > 0) ||
                        (this.props.htHiLo && this.props.htHiLo.length > 0)
                      )
                      ? ""
                      : l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            "div",
                            { className: "graphSection" },
                            l.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              l.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                l.a.createElement(
                                  "span",
                                  null,
                                  this.props.staticKeyWords.hiLo,
                                ),
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              l.a.createElement(
                                "div",
                                {
                                  className:
                                    "graphContent paddingRight TwoInRow",
                                },
                                l.a.createElement(
                                  "div",
                                  { className: "leftColumn" },
                                  l.a.createElement(M, {
                                    data: this.props.ftHiLo,
                                    line: this.props.staticKeyWords.line,
                                    title: this.props.staticKeyWords.fullTime,
                                  }),
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "rightColumn" },
                                  l.a.createElement(M, {
                                    data: this.props.htHiLo,
                                    line: this.props.staticKeyWords.line,
                                    title: this.props.staticKeyWords.halfTime,
                                  }),
                                ),
                              ),
                            ),
                          ),
                          l.a.createElement(
                            "div",
                            { className: "graphSection" },
                            l.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              l.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.languageId === H.c
                                  ? l.a.createElement(
                                      l.a.Fragment,
                                      null,
                                      this.props.staticKeyWords.cornersTaken,
                                      " ",
                                      l.a.createElement(
                                        "span",
                                        null,
                                        this.props.staticKeyWords.hiLo,
                                      ),
                                    )
                                  : this.props.staticKeyWords.cornersHiLo,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              l.a.createElement(
                                "div",
                                { className: "graphContent TwoInRow" },
                                l.a.createElement(
                                  "div",
                                  { className: "leftColumn" },
                                  l.a.createElement(M, {
                                    data: this.props.cornersHiLo,
                                    line: this.props.staticKeyWords.line,
                                    title:
                                      this.props.staticKeyWords.cornersHiLo,
                                  }),
                                ),
                              ),
                              l.a.createElement(
                                "div",
                                { className: "noDatagraph" },
                                this.props.staticKeyWords.cornersDataPastGame,
                              ),
                            ),
                          ),
                          l.a.createElement(
                            "div",
                            { className: "graphSection" },
                            l.a.createElement(
                              "div",
                              { className: "sectionHeading" },
                              l.a.createElement(
                                "div",
                                { className: "sectionTitle" },
                                this.props.staticKeyWords.goals,
                              ),
                            ),
                            l.a.createElement(
                              "div",
                              { className: "graphContainer" },
                              l.a.createElement(
                                "div",
                                { className: "graphContent TwoInRow" },
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "leftColumn leftColumn-fullwidth doubleColumn",
                                  },
                                  l.a.createElement(A.a, {
                                    homeTeamName: this.props.homeTeamName,
                                    awayTeamName: this.props.awayTeamName,
                                    mainData: this.props.firstToScore,
                                    data: [
                                      this.props.firstToScore.homeScoredFirst,
                                      this.props.firstToScore.awayScoredFirst,
                                      this.props.firstToScore.noGoal,
                                    ],
                                    title:
                                      this.props.staticKeyWords
                                        .firstTeamToScore,
                                    colors: ["#29d6d4", "#e57374", "#FFFFFF"],
                                    loadin: "ftshilo",
                                  }),
                                  l.a.createElement(P, {
                                    categories: a,
                                    data: t,
                                    type: "column",
                                    loadin: "totalGoals",
                                    colors: ["#CD853F"],
                                    height: "300px",
                                    maxValue: 8,
                                    title: this.props.staticKeyWords.totalGoals,
                                  }),
                                ),
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "rightColumn rightColumn-fullwidth",
                                  },
                                  l.a.createElement(J, {
                                    data: this.props.teamsToScore,
                                    title: this.props.staticKeyWords.tts,
                                  }),
                                  l.a.createElement(R.a, {
                                    data: this.props.goalTimes,
                                    title: this.props.staticKeyWords.goalTimes,
                                    showLine: !0,
                                    homeTeamName: this.props.homeTeamName,
                                    awayTeamName: this.props.awayTeamName,
                                    loadin: "goalstime",
                                    showTable: !0,
                                    width: "95%",
                                  }),
                                ),
                              ),
                              l.a.createElement(
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
            a
          );
        })(r.Component);
      var z = Object(p.b)(
          function (e) {
            return {
              hiLoLastEncounters: e.hilocorners.hiLoLastEncounters,
              options: e.hilocorners.options,
              ftHiLo: e.hilocorners.ftHiLo,
              htHiLo: e.hilocorners.htHiLo,
              cornersHiLo: e.hilocorners.cornersHiLo,
              homeTeamName: e.match.bannerData.homeTeamName,
              awayTeamName: e.match.bannerData.awayTeamName,
              homeTeamId: e.match.bannerData.homeTeamId,
              awayTeamId: e.match.bannerData.awayTeamId,
              firstToScore: e.hilocorners.firstToScore,
              goalTimes: e.hilocorners.goalTimes,
              cornersPerGame: e.hilocorners.cornersPerGame,
              staticKeyWords: e.app.staticKeyWords,
              selectedOptionId: e.hilocorners.selectedOptionId,
              teamsToScore: e.hilocorners.teamsToScore,
              totalGoals: e.hilocorners.totalGoals,
              languageId: e.app.languageId,
              lastEncountersOptions: e.matchcenter.lastEncountersOptions,
              tableRecentResults: e.hilocorners.tableRecentResults,
              loader: e.hilocorners.loader,
              eventInfo: e.app.eventInfo,
              isData: e.hilocorners.isData,
              isEdisplay: e.app.isEdisplay,
            };
          },
          function (e) {
            return {
              dispatch: e,
              actions: Object(c.b)({ setOptions: F.c }, e),
            };
          },
        )(U),
        V = a(24),
        Y = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.lastEncountersOptions &&
                    this.props.lastEncountersOptions.length > 0 &&
                    this.props.match &&
                    this.props.match.params.eventId &&
                    this.props.match.params.eventId.length > 0 &&
                    this.props.dispatch(
                      Object(V.b)({
                        optionId: this.props.lastEncountersOptions[1].id,
                        eventId: this.props.match.params.eventId,
                        languageId: this.props.languageId,
                      }),
                    );
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  JSON.stringify(e.lastEncountersOptions) !==
                    JSON.stringify(this.props.lastEncountersOptions) &&
                    e.lastEncountersOptions.length > 0 &&
                    this.props.match &&
                    this.props.match.params.eventId &&
                    this.props.match.params.eventId.length > 0 &&
                    this.props.dispatch(
                      Object(V.b)({
                        optionId: e.lastEncountersOptions[1].id,
                        eventId: this.props.match.params.eventId,
                        languageId: this.props.languageId,
                      }),
                    ),
                    e.lastEncountersOptions.length > 0 &&
                      this.props.match &&
                      this.props.match.params.eventId &&
                      this.props.match.params.eventId.length > 0 &&
                      this.props.match.params.eventId !==
                        e.match.params.eventId &&
                      this.props.dispatch(
                        Object(V.b)({
                          optionId: e.lastEncountersOptions[1].id,
                          eventId: this.props.match.params.eventId,
                          languageId: this.props.languageId,
                        }),
                      );
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    {
                      style: { display: "block" },
                      id: "Standings",
                      className: "tabContent",
                    },
                    !this.props.loader &&
                      l.a.createElement(
                        "div",
                        { className: "graphSection" },
                        l.a.createElement(
                          "div",
                          { className: "sectionHeading" },
                          l.a.createElement(
                            "div",
                            { className: "sectionTitle" },
                            this.props.staticKeyWords.home +
                              "/" +
                              this.props.staticKeyWords.away +
                              "/" +
                              this.props.staticKeyWords.draw,
                          ),
                        ),
                        l.a.createElement(
                          "div",
                          { className: "graphContainer" },
                          l.a.createElement(
                            "div",
                            { className: "graphContent" },
                            l.a.createElement(I, {
                              homeTeamName: this.props.homeTeamName,
                              awayTeamName: this.props.awayTeamName,
                              had: this.props.hadFullTime,
                              loadin: "had",
                              title: this.props.staticKeyWords.fullTime,
                            }),
                            l.a.createElement(C.a, {
                              homeTeamName: this.props.homeTeamName,
                              awayTeamName: this.props.awayTeamName,
                              home: this.props.goalsPerGame.homeTeam,
                              away: this.props.goalsPerGame.awayTeam,
                              title: ""
                                .concat(
                                  this.props.staticKeyWords.goals,
                                  " <br/><span>",
                                )
                                .concat(
                                  this.props.staticKeyWords.per,
                                  "</span> ",
                                )
                                .concat(this.props.staticKeyWords.game),
                            }),
                          ),
                        ),
                      ),
                    l.a.createElement(
                      "div",
                      { className: "tabTable-content" },
                      l.a.createElement(
                        "div",
                        { className: "tableHeader-home" },
                        l.a.createElement(
                          "div",
                          { className: "tableHeading" },
                          this.props.staticKeyWords.pastEncounters,
                        ),
                      ),
                      l.a.createElement(
                        "table",
                        { className: "tableDefault" },
                        l.a.createElement(
                          "thead",
                          null,
                          l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.date,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.competition,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.homeTeam,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.score +
                                " (" +
                                this.props.staticKeyWords.ht +
                                ")",
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.awayTeam,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.had,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.fHAD,
                            ),
                          ),
                        ),
                        l.a.createElement(
                          "tbody",
                          null,
                          !this.props.loader &&
                            Object.keys(this.props.h2hLastEncounters).length >
                              0 &&
                            this.props.h2hLastEncounters.hasOwnProperty(
                              "h2hLast8Encounters",
                            )
                            ? this.props.h2hLastEncounters.h2hLast8Encounters.map(
                                function (e, t) {
                                  return l.a.createElement(
                                    "tr",
                                    null,
                                    l.a.createElement(
                                      "td",
                                      null,
                                      e.kickOff
                                        ? Object(m.b)(e.kickOff, "banner").date
                                        : "-",
                                    ),
                                    l.a.createElement(
                                      "td",
                                      null,
                                      e.competitionName
                                        ? e.competitionName
                                        : "-",
                                    ),
                                    l.a.createElement(
                                      "td",
                                      null,
                                      e.homeTeamName ? e.homeTeamName : "-",
                                    ),
                                    l.a.createElement(
                                      "td",
                                      null,
                                      e.scoreFT,
                                      " (",
                                      e.scoreHT,
                                      ")",
                                    ),
                                    l.a.createElement(
                                      "td",
                                      null,
                                      e.awayTeamName ? e.awayTeamName : "-",
                                    ),
                                    l.a.createElement(
                                      "td",
                                      null,
                                      l.a.createElement(
                                        "span",
                                        {
                                          className:
                                            "h" === e.had.toLowerCase()
                                              ? "status win"
                                              : "a" === e.had.toLowerCase()
                                                ? " status loss"
                                                : "d" === e.had.toLowerCase()
                                                  ? " status draw"
                                                  : "",
                                        },
                                        e.had ? e.had : "-",
                                      ),
                                    ),
                                    l.a.createElement(
                                      "td",
                                      null,
                                      l.a.createElement(
                                        "span",
                                        {
                                          className:
                                            "h" === e.fHad.toLowerCase()
                                              ? "status win"
                                              : "a" === e.fHad.toLowerCase()
                                                ? " status loss"
                                                : "d" === e.fHad.toLowerCase()
                                                  ? " status draw"
                                                  : "",
                                        },
                                        e.fHad ? e.fHad : "-",
                                      ),
                                    ),
                                  );
                                },
                              )
                            : l.a.createElement(
                                "tr",
                                null,
                                l.a.createElement(
                                  "td",
                                  { colspan: "9" },
                                  l.a.createElement(f.a, {
                                    isLoader: this.props.loader,
                                    isNoData:
                                      !this.props.loader &&
                                      Object.keys(this.props.h2hLastEncounters)
                                        .length > 0 &&
                                      this.props.h2hLastEncounters.hasOwnProperty(
                                        "h2hLast8Encounters",
                                      ) &&
                                      !this.props.h2hLastEncounters
                                        .h2hLast8Encounters.length,
                                  }),
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
        })(r.Component);
      var Q = Object(p.b)(
          function (e) {
            return {
              h2hLastEncounters: e.htohoutput.h2hLastEncounters,
              staticKeyWords: e.app.staticKeyWords,
              selectedOptionId: e.htohoutput.selectedOptionId,
              languageId: e.app.languageId,
              hiLoOptions: e.htohoutput.hiLoOptions,
              selectedHiLoOption: e.htohoutput.selectedHiLoOption,
              hadFullTime: e.htohoutput.hadFullTime,
              hadHalfTime: e.htohoutput.hadHalfTime,
              goalsPerGame: e.htohoutput.goalsPerGame,
              ftHiLo: e.htohoutput.ftHiLo,
              htHiLo: e.htohoutput.htHiLo,
              homeTeamName: e.match.bannerData.homeTeamName,
              awayTeamName: e.match.bannerData.awayTeamName,
              homeTeamId: e.match.bannerData.homeTeamId,
              awayTeamId: e.match.bannerData.awayTeamId,
              loader: e.app.loader,
              hToHEventId: e.htohsearch.hToHEventId,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(c.b)({}, e) };
          },
        )(Y),
        q = a(5),
        X = (function (e) {
          Object(n.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(o.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  var e, t, a, s, o;
                  (
                    null === (e = this.props) ||
                    void 0 === e ||
                    null === (t = e.match) ||
                    void 0 === t ||
                    null === (a = t.params) ||
                    void 0 === a
                      ? void 0
                      : a.tabname
                  )
                    ? this.props.dispatch(
                        Object(d.b)(this.props.match.params.tabname),
                      )
                    : this.props.dispatch(Object(d.b)("had")),
                    (null === (s = this.props) || void 0 === s
                      ? void 0
                      : s.homeTeamName) &&
                      (null === (o = this.props) || void 0 === o
                        ? void 0
                        : o.awayTeamName) &&
                      "summary" != this.props.pagename &&
                      this.props.dispatch(
                        Object(q.e)(
                          "HtoH",
                          this.props.homeTeamName +
                            " vs " +
                            this.props.awayTeamName,
                        ),
                      );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var a, s;
                  (null === (a = this.props) || void 0 === a
                    ? void 0
                    : a.homeTeamName) &&
                    (null === (s = this.props) || void 0 === s
                      ? void 0
                      : s.awayTeamName) &&
                    e.homeTeamName != this.props.homeTeamName &&
                    e.awayTeamName != this.props.awayTeamName &&
                    "summary" != this.props.pagename &&
                    this.props.dispatch(
                      Object(q.e)(
                        "HtoH",
                        this.props.homeTeamName +
                          " vs " +
                          this.props.awayTeamName,
                      ),
                    );
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
                          "/htoh/head2head/" +
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
                          "/bmhead2head/" +
                          e,
                      ),
                    this.props.dispatch(Object(d.b)(e));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return l.a.createElement(
                    "div",
                    { className: "tabSection" },
                    window.location.pathname
                      .split("/")
                      .includes("htohoutput") || this.props.hidetabs
                      ? ""
                      : l.a.createElement(
                          "ul",
                          { className: "tabsList", "data-persist": "true" },
                          l.a.createElement(
                            "li",
                            {
                              className:
                                "tabLinks" +
                                ("had" === this.props.selectedTab
                                  ? " active"
                                  : ""),
                              onClick: function () {
                                return e.handleTabClickChange("had");
                              },
                              id: "defaultOpen",
                            },
                            l.a.createElement(
                              "a",
                              null,
                              this.props.staticKeyWords.hadHandicap,
                            ),
                          ),
                          l.a.createElement(
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
                            l.a.createElement(
                              "a",
                              null,
                              this.props.staticKeyWords.hiLoCorners,
                            ),
                          ),
                        ),
                    l.a.createElement(
                      "div",
                      { className: "tabsContent" },
                      window.location.pathname.split("/").includes("htohoutput")
                        ? l.a.createElement(h.a, {
                            render: function (t) {
                              return l.a.createElement(
                                Q,
                                Object.assign({}, t, {
                                  lastEncountersOptions:
                                    e.props.lastEncountersOptions,
                                }),
                              );
                            },
                          })
                        : l.a.createElement(
                            l.a.Fragment,
                            null,
                            "had" === this.props.selectedTab
                              ? l.a.createElement(h.a, {
                                  render: function (t) {
                                    return l.a.createElement(
                                      K,
                                      Object.assign({}, t, {
                                        lastEncountersOptions:
                                          e.props.lastEncountersOptions,
                                        isBasic: e.props.isBasic,
                                        hideOptions: e.props.hideOptions,
                                      }),
                                    );
                                  },
                                })
                              : l.a.createElement(h.a, {
                                  render: function (t) {
                                    return l.a.createElement(
                                      z,
                                      Object.assign({}, t, {
                                        lastEncountersOptions:
                                          e.props.lastEncountersOptions,
                                        isBasic: e.props.isBasic,
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
            a
          );
        })(r.Component);
      t.default = Object(p.b)(
        function (e) {
          return {
            selectedTab: e.htohtab.selectedTab,
            lastEncountersOptions: e.matchcenter.lastEncountersOptions,
            staticKeyWords: e.app.staticKeyWords,
            isAdvancedMode: e.match.isAdvancedMode,
            homeTeamName: e.match.homeTeamName,
            awayTeamName: e.match.awayTeamName,
          };
        },
        function (e) {
          return { dispatch: e, actions: Object(c.b)({ selectTab: d.b }, e) };
        },
      )(X);
    },
  },
]);
//# sourceMappingURL=0.0c178b13.chunk.js.map
