(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [16],
  {
    513: function (t, a, e) {
      "use strict";
      e.r(a);
      var s = e(91),
        o = e(92),
        p = e(94),
        n = e(93),
        i = e(1),
        r = e.n(i),
        c = e(22),
        h = e(33),
        d = e(66),
        m = e(473),
        l = e(230),
        b = e(154),
        u = e(19),
        O = e(508),
        I = e(153),
        f = e(152),
        y = e(5),
        v = (function (t) {
          Object(p.a)(e, t);
          var a = Object(n.a)(e);
          function e() {
            return Object(s.a)(this, e), a.apply(this, arguments);
          }
          return (
            Object(o.a)(e, [
              {
                key: "componentWillMount",
                value: function () {
                  if (
                    (this.props.dispatch(Object(u.o)(!1)),
                    this.props.dispatch(Object(l.b)({ text: "home", id: 1 })),
                    this.props.dispatch(Object(l.b)({ text: "away", id: 1 })),
                    this.props.dispatch(
                      Object(f.b)(
                        this.props.eventInfo.eventId,
                        this.props.languageId,
                      ),
                    ),
                    Object.keys(this.props.bannerData).length)
                  ) {
                    var t,
                      a,
                      e,
                      s = (
                        null === (t = this.props) ||
                        void 0 === t ||
                        null === (a = t.match) ||
                        void 0 === a ||
                        null === (e = a.params) ||
                        void 0 === e
                          ? void 0
                          : e.tabname
                      )
                        ? this.props.match.params.tabname
                        : "had";
                    this.props.dispatch(
                      Object(I.b)(
                        s,
                        "",
                        "",
                        this.props.bannerData.homeTeamId,
                        this.props.bannerData.awayTeamId,
                        this.props.languageId,
                        {},
                      ),
                    ),
                      this.props.dispatch(
                        Object(b.b)(
                          this.props.bannerData.homeTeamId,
                          this.props.bannerData.awayTeamId,
                          this.props.languageId,
                          this.props.bannerData.competitionId,
                        ),
                      );
                  }
                  this.props.staticKeyWords &&
                    Object.keys(this.props.staticKeyWords) &&
                    this.props.dispatch(Object(l.c)(this.props.staticKeyWords)),
                    Object(y.a)() && this.props.dispatch(Object(y.j)(!0));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(y.j)(!1));
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (t) {
                  if (
                    this.props.bannerData != t.bannerData &&
                    window.location.pathname
                      .split("/")
                      .includes("bmrecentforms")
                  ) {
                    var a, e, s;
                    this.props.dispatch(Object(I.e)(this.props.homeOption)),
                      this.props.dispatch(Object(I.d)(this.props.awayOption));
                    var o = (
                      null === (a = this.props) ||
                      void 0 === a ||
                      null === (e = a.match) ||
                      void 0 === e ||
                      null === (s = e.params) ||
                      void 0 === s
                        ? void 0
                        : s.tabname
                    )
                      ? this.props.match.params.tabname
                      : "had";
                    this.props.dispatch(
                      Object(I.b)(
                        o,
                        "",
                        "",
                        t.bannerData.homeTeamId,
                        t.bannerData.awayTeamId,
                        this.props.languageId,
                        {
                          selectedHomeOptionId: this.props.homeOption,
                          selectedAwayOptionId: this.props.awayOption,
                        },
                      ),
                    ),
                      this.props.dispatch(
                        Object(b.b)(
                          t.bannerData.homeTeamId,
                          t.bannerData.awayTeamId,
                          this.props.languageId,
                          t.bannerData.competitionId,
                        ),
                      );
                  }
                  this.props.eventInfo.eventId !== t.eventInfo.eventId &&
                    t.eventInfo.eventId > 0 &&
                    this.props.dispatch(
                      Object(f.b)(
                        this.props.eventInfo.eventId,
                        this.props.languageId,
                      ),
                    ),
                    JSON.stringify(this.props.staticKeyWords) !==
                      JSON.stringify(t.staticKeyWords) &&
                      this.props.dispatch(Object(l.c)(t.staticKeyWords));
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "pageContent headTo-headHKJC" },
                    r.a.createElement(
                      "div",
                      { class: "tableTwo-column tableTwo-column" },
                      this.props.last8Results &&
                        this.props.last8Results.homeTeam
                        ? r.a.createElement(m.a, {
                            isHome: !0,
                            title: this.props.bannerData.homeTeamName,
                            subTitle:
                              this.props.staticKeyWords.last8HomeResultsLFL,
                            data: this.props.last8Results.homeTeam,
                          })
                        : "",
                      this.props.last8Results &&
                        this.props.last8Results.awayTeam
                        ? r.a.createElement(m.a, {
                            isHome: !1,
                            title: this.props.bannerData.awayTeamName,
                            subTitle:
                              this.props.staticKeyWords.last8AwayResultsLFL,
                            data: this.props.last8Results.awayTeam,
                          })
                        : "",
                    ),
                    r.a.createElement(c.a, {
                      render: function (t) {
                        return r.a.createElement(
                          O.default,
                          Object.assign({ isAdvancedMode: !1 }, t),
                        );
                      },
                    }),
                  );
                },
              },
            ]),
            e
          );
        })(i.Component);
      a.default = Object(d.b)(
        function (t) {
          return {
            bannerData: t.match.bannerData,
            tableData: t.bmrecentforms.tableData,
            handicapColumns: t.bmrecentforms.handicapColumns,
            cornersColumns: t.bmrecentforms.cornersColumns,
            homeMarketGroupId: t.bmrecentforms.homeMarketGroupId,
            awayMarketGroupId: t.bmrecentforms.awayMarketGroupId,
            last8Results: t.summary.last8Results,
            staticKeyWords: t.app.staticKeyWords,
            languageId: t.app.languageId,
            eventInfo: t.app.eventInfo,
            defaultHomeOptionId: t.recentfromtab.defaultHomeOptionId,
            defaultAwayOptionId: t.recentfromtab.defaultAwayOptionId,
            homeOption: t.recentfromtab.homeOption,
            awayOption: t.recentfromtab.awayOption,
          };
        },
        function (t) {
          return { dispatch: t, actions: Object(h.b)({}, t) };
        },
      )(v);
    },
  },
]);
//# sourceMappingURL=16.477c031d.chunk.js.map
