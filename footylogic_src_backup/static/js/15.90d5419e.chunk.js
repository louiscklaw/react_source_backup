(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [15],
  {
    514: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t(91),
        o = t(92),
        p = t(94),
        n = t(93),
        h = t(1),
        i = t.n(h),
        r = t(66),
        c = t(33),
        m = t(22),
        d = t(231),
        I = t(19),
        b = t(5),
        u = t(472),
        T = t(152),
        y = (function (e) {
          Object(p.a)(t, e);
          var a = Object(n.a)(t);
          function t() {
            return Object(s.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(o.a)(t, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.staticKeyWords &&
                    Object.keys(this.props.staticKeyWords) &&
                    this.props.dispatch(Object(d.c)(this.props.staticKeyWords)),
                    this.props.eventInfo.eventId &&
                      0 !== this.props.eventInfo.eventId &&
                      this.props.dispatch(
                        Object(T.b)(
                          this.props.eventInfo.eventId,
                          this.props.languageId,
                        ),
                      );
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.props.dispatch(Object(I.o)(!1)),
                    this.props.homeTeamId &&
                      this.props.homeTeamId > 0 &&
                      this.props.awayTeamId &&
                      this.props.awayTeamId,
                    Object(b.a)() && this.props.dispatch(Object(b.j)(!0));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.dispatch(Object(b.j)(!1));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, a) {
                  this.props.homeTeamId &&
                    this.props.homeTeamId > 0 &&
                    this.props.homeTeamId !== e.homeTeamId &&
                    this.props.awayTeamId &&
                    this.props.awayTeamId > 0 &&
                    this.props.awayTeamId !== e.awayTeamId &&
                    this.props.dispatch(
                      Object(d.b)(this.props.homeTeamId, this.props.awayTeamId),
                    ),
                    JSON.stringify(this.props.staticKeyWords) !==
                      JSON.stringify(e.staticKeyWords) &&
                      this.props.dispatch(
                        Object(d.c)(this.props.staticKeyWords),
                      ),
                    this.props.eventInfo.eventId !== e.eventInfo.eventId &&
                      this.props.eventInfo.eventId > 0 &&
                      this.props.dispatch(
                        Object(T.b)(
                          this.props.eventInfo.eventId,
                          this.props.languageId,
                        ),
                      );
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    { class: "pageContent headTo-headHKJC" },
                    i.a.createElement(m.a, {
                      render: function (e) {
                        return i.a.createElement(
                          u.default,
                          Object.assign({}, e, { isBasic: !0 }),
                        );
                      },
                    }),
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      a.default = Object(r.b)(
        function (e) {
          return {
            homeTeamName: e.match.bannerData.homeTeamName,
            awayTeamName: e.match.bannerData.awayTeamName,
            homeTeamId: e.match.bannerData.homeTeamId,
            awayTeamId: e.match.bannerData.awayTeamId,
            pastSeasons: e.bmh2h.pastSeasons,
            homeTeamTableData: e.bmh2h.homeTeamTableData,
            awayTeamTableData: e.bmh2h.awayTeamTableData,
            handicapColumns: e.bmh2h.handicapColumns,
            homeMarketGroupId: e.bmh2h.homeMarketGroupId,
            staticKeyWords: e.app.staticKeyWords,
            languageId: e.app.languageId,
            eventInfo: e.app.eventInfo,
          };
        },
        function (e) {
          return { dispatch: e, actions: Object(c.b)({}, e) };
        },
      )(y);
    },
  },
]);
//# sourceMappingURL=15.90d5419e.chunk.js.map
