(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [18],
  {
    511: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "Home", function () {
          return h;
        });
      var c = t(510),
        n = t(1),
        r = t.n(n),
        l = t(33),
        m = t(66),
        o = t(223),
        i = t(494),
        s = t.n(i),
        d = t(95),
        u = t(5),
        f = t(237);
      function h(e) {
        var a = Object(n.useState)(!1),
          t = Object(c.a)(a, 2),
          l = t[0],
          i = t[1],
          h = Object(m.c)(),
          E = Object(m.d)(o.g),
          N = Object(m.d)(o.j),
          b = Object(m.d)(o.i),
          v = Object(m.d)(o.d),
          w = Object(m.d)(o.f),
          p = Object(m.d)(o.h),
          O = Object(m.d)(o.e);
        return (
          Object(n.useEffect)(function () {
            !1 === l &&
              (h(Object(o.k)(1)),
              h(Object(o.c)([], "", 1, O)),
              i(!0),
              h(Object(u.e)("Match")));
          }),
          r.a.createElement(
            "div",
            { className: "mainLanding-page" },
            r.a.createElement(
              "div",
              { className: "mainSearchbar" },
              r.a.createElement(
                "div",
                { className: "mainSearchbar-leftSection" },
                r.a.createElement(
                  "ul",
                  null,
                  r.a.createElement(
                    "li",
                    {
                      onClick: function () {
                        h(Object(o.k)(1)), h(Object(o.c)(b, "", 1, O));
                      },
                    },
                    r.a.createElement(
                      "a",
                      { href: "#", className: 1 === v ? "active" : "" },
                      p.mcDate,
                    ),
                  ),
                  r.a.createElement(
                    "li",
                    {
                      onClick: function () {
                        h(Object(o.k)(2)), h(Object(o.c)(b, "", 2, O));
                      },
                    },
                    r.a.createElement(
                      "a",
                      { href: "#", className: 2 === v ? "active" : "" },
                      p.tournament,
                    ),
                  ),
                ),
              ),
              r.a.createElement(
                "div",
                { className: "mainSearchbar-rightSection" },
                r.a.createElement(
                  "div",
                  { className: "form-group form-inline" },
                  r.a.createElement("div", { className: "form-label" }),
                  r.a.createElement(
                    "div",
                    { className: "form-control" },
                    r.a.createElement(s.a, {
                      getItemValue: function (e) {
                        return null === e || void 0 === e ? void 0 : e.teamName;
                      },
                      items: b,
                      renderItem: function (e, a) {
                        return r.a.createElement(
                          "div",
                          {
                            key: e.itemId,
                            style: { background: a ? "lightgray" : "white" },
                          },
                          e.teamName,
                        );
                      },
                      inputProps: { placeholder: p.SearchByTeamName },
                      value: N,
                      onChange: function (e) {
                        return h(Object(o.b)(e.target.value, v, O));
                      },
                      onSelect: function (e) {
                        return h(Object(o.c)(b, e, v, O));
                      },
                    }),
                  ),
                ),
              ),
            ),
            E && E.length > 0
              ? E.map(function (a, t) {
                  var c;
                  return (
                    1 === v && Object(d.b)(a.label, "home"),
                    r.a.createElement(
                      "div",
                      { key: t, className: "contentBg" },
                      r.a.createElement(
                        "table",
                        { className: "tableDefault" },
                        r.a.createElement(
                          "thead",
                          null,
                          r.a.createElement(
                            "tr",
                            null,
                            r.a.createElement(
                              "th",
                              {
                                colSpan: "2",
                                className: "w-date",
                                onClick: function () {
                                  return h(
                                    Object(u.f)(a.id, e, v, "tournament"),
                                  );
                                },
                              },
                              1 === v
                                ? null === a ||
                                  void 0 === a ||
                                  null === (c = a.events[0]) ||
                                  void 0 === c
                                  ? void 0
                                  : c.kickOffDateLocal
                                : a.label,
                            ),
                            r.a.createElement(
                              "th",
                              { className: "w-form" },
                              p.homeForm,
                            ),
                            r.a.createElement("th", { className: "w-fixture" }),
                            r.a.createElement(
                              "th",
                              { className: "w-form" },
                              p.awayForm,
                            ),
                            r.a.createElement(
                              "th",
                              { className: "w-winPredictor" },
                              p.hadPredictor,
                              " (%)",
                            ),
                            r.a.createElement(
                              "th",
                              { className: "w-bestBet" },
                              p.bestBet,
                            ),
                          ),
                        ),
                        r.a.createElement(
                          "tbody",
                          null,
                          a.events.map(function (t, c) {
                            return r.a.createElement(
                              "tr",
                              { key: c },
                              r.a.createElement(
                                "td",
                                null,
                                null != t.competitionIdNav
                                  ? r.a.createElement(
                                      "div",
                                      {
                                        "data-href": "true",
                                        onClick: function () {
                                          return h(
                                            Object(u.f)(
                                              t.competitionId,
                                              e,
                                              v,
                                              "date",
                                            ),
                                          );
                                        },
                                      },
                                      2 === v
                                        ? t.kickOffDateLocal
                                        : t.competitionName
                                          ? t.competitionName
                                          : "",
                                    )
                                  : r.a.createElement(
                                      "div",
                                      null,
                                      2 === v
                                        ? t.kickOffDateLocal
                                        : t.competitionName
                                          ? t.competitionName
                                          : "",
                                    ),
                              ),
                              r.a.createElement("td", null, t.kickOffTime),
                              r.a.createElement(
                                "td",
                                null,
                                r.a.createElement(
                                  "div",
                                  {
                                    "data-href": "true",
                                    className: "team-lastForm",
                                  },
                                  t.homeForm.map(function (e, a) {
                                    return r.a.createElement(
                                      "span",
                                      {
                                        key: a,
                                        className:
                                          "status " +
                                          ("w" === e.toLowerCase()
                                            ? "win"
                                            : "l" === e.toLowerCase()
                                              ? "loss"
                                              : "d" === e.toLowerCase()
                                                ? "draw"
                                                : ""),
                                      },
                                      p[e.toLowerCase()],
                                    );
                                  }),
                                ),
                              ),
                              r.a.createElement(
                                "td",
                                { "data-href": "true" },
                                r.a.createElement(
                                  "div",
                                  { className: "table-fixture" },
                                  t.eventName,
                                ),
                                r.a.createElement(
                                  "div",
                                  {
                                    className: "table-fixture",
                                    onClick: function () {
                                      h(
                                        Object(u.d)(
                                          {
                                            countryId: t.countryId,
                                            competitionId:
                                              1 == v ? t.competitionId : a.id,
                                            eventId: t.eventId,
                                          },
                                          "home",
                                          e,
                                        ),
                                      );
                                    },
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "team-image" },
                                    r.a.createElement(
                                      "div",
                                      { className: "homeTeam-name" },
                                      t.homeTeamName,
                                    ),
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "team-vs" },
                                    "vs",
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { className: "team-image" },
                                    r.a.createElement(
                                      "div",
                                      { className: "awayTeam-name" },
                                      t.awayTeamName,
                                    ),
                                  ),
                                ),
                              ),
                              r.a.createElement(
                                "td",
                                null,
                                r.a.createElement(
                                  "div",
                                  {
                                    "data-href": "true",
                                    className: "team-lastForm",
                                  },
                                  t.awayForm.map(function (e, a) {
                                    return r.a.createElement(
                                      "span",
                                      {
                                        key: a,
                                        className:
                                          "status " +
                                          ("w" === e.toLowerCase()
                                            ? "win"
                                            : "l" === e.toLowerCase()
                                              ? "loss"
                                              : "d" === e.toLowerCase()
                                                ? "draw"
                                                : ""),
                                      },
                                      p[e.toLowerCase()],
                                    );
                                  }),
                                ),
                              ),
                              r.a.createElement(
                                "td",
                                { "data-href": "true" },
                                r.a.createElement(
                                  "div",
                                  { className: "win-predictor" },
                                  t.hadHomePct && t.hadDrawPct && t.hadAwayPct
                                    ? r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(
                                          "span",
                                          {
                                            className: "percentage win",
                                            style: {
                                              width: t.hadHomePct + "%",
                                            },
                                          },
                                          t.hadHomePct,
                                        ),
                                        r.a.createElement(
                                          "span",
                                          {
                                            className: "percentage draw",
                                            style: {
                                              width: t.hadDrawPct + "%",
                                            },
                                          },
                                          t.hadDrawPct,
                                        ),
                                        r.a.createElement(
                                          "span",
                                          {
                                            className: "percentage loss",
                                            style: {
                                              width: t.hadAwayPct + "%",
                                            },
                                          },
                                          t.hadAwayPct,
                                        ),
                                      )
                                    : r.a.createElement("span", null, "-"),
                                ),
                              ),
                              r.a.createElement(
                                "td",
                                { "data-href": "true" },
                                t.bestBetName,
                                t.subMarketName && t.subMarketName.length > 0
                                  ? "[".concat(t.subMarketName, "]")
                                  : "",
                                " - ",
                                t.outcomeName,
                              ),
                            );
                          }),
                        ),
                      ),
                    )
                  );
                })
              : r.a.createElement(f.a, {
                  isLoader: w,
                  isNoData: !w && !E.length,
                  temporarilyNoData: p.temporarilyNoData,
                }),
          )
        );
      }
      a.default = Object(m.b)(
        function (e) {
          return { filterBy: e.home.filterBy };
        },
        function (e) {
          return { dispatch: e, actions: Object(l.b)({}, e) };
        },
      )(h);
    },
  },
]);
//# sourceMappingURL=18.14524d87.chunk.js.map
