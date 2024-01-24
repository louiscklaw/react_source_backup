(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [1],
  {
    463: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getNudgedPopoverRect =
          t.getNewPopoverRect =
          t.popoverRectForPosition =
          t.createContainer =
          t.targetPositionHasChanged =
          t.popoverStatesAreEqual =
          t.rectsAreEqual =
          t.arrayUnique =
          t.Constants =
            void 0),
        (t.Constants = {
          POPOVER_CONTAINER_CLASS_NAME: "react-tiny-popover-container",
          DEFAULT_ALIGN: "center",
          OBSERVER_THRESHOLDS: Array(1e3)
            .fill(null)
            .map(function (e, t) {
              return t / 1e3;
            })
            .reverse(),
          DEFAULT_POSITIONS: ["top", "left", "right", "bottom"],
          EMPTY_CLIENT_RECT: {
            top: 0,
            left: 0,
            bottom: 0,
            height: 0,
            right: 0,
            width: 0,
          },
        }),
        (t.arrayUnique = function (e) {
          return e.filter(function (e, t, o) {
            return o.indexOf(e) === t;
          });
        }),
        (t.rectsAreEqual = function (e, t) {
          return (
            e === t ||
            ((null === e || void 0 === e ? void 0 : e.bottom) ===
              (null === t || void 0 === t ? void 0 : t.bottom) &&
              (null === e || void 0 === e ? void 0 : e.height) ===
                (null === t || void 0 === t ? void 0 : t.height) &&
              (null === e || void 0 === e ? void 0 : e.left) ===
                (null === t || void 0 === t ? void 0 : t.left) &&
              (null === e || void 0 === e ? void 0 : e.right) ===
                (null === t || void 0 === t ? void 0 : t.right) &&
              (null === e || void 0 === e ? void 0 : e.top) ===
                (null === t || void 0 === t ? void 0 : t.top) &&
              (null === e || void 0 === e ? void 0 : e.width) ===
                (null === t || void 0 === t ? void 0 : t.width))
          );
        }),
        (t.popoverStatesAreEqual = function (e, o) {
          return (
            e === o ||
            ((null === e || void 0 === e ? void 0 : e.align) ===
              (null === o || void 0 === o ? void 0 : o.align) &&
              (null === e || void 0 === e ? void 0 : e.nudgedLeft) ===
                (null === o || void 0 === o ? void 0 : o.nudgedLeft) &&
              (null === e || void 0 === e ? void 0 : e.nudgedTop) ===
                (null === o || void 0 === o ? void 0 : o.nudgedTop) &&
              e.padding === o.padding &&
              t.rectsAreEqual(
                null === e || void 0 === e ? void 0 : e.popoverRect,
                null === o || void 0 === o ? void 0 : o.popoverRect,
              ) &&
              t.rectsAreEqual(
                null === e || void 0 === e ? void 0 : e.childRect,
                null === o || void 0 === o ? void 0 : o.childRect,
              ) &&
              (null === e || void 0 === e ? void 0 : e.position) ===
                (null === o || void 0 === o ? void 0 : o.position))
          );
        }),
        (t.targetPositionHasChanged = function (e, t) {
          return (
            void 0 === e ||
            e.left !== t.left ||
            e.top !== t.top ||
            e.width !== t.width ||
            e.height !== t.height
          );
        }),
        (t.createContainer = function (e, t) {
          var o = window.document.createElement("div");
          return t && (o.className = t), Object.assign(o.style, e), o;
        }),
        (t.popoverRectForPosition = function (e, t, o, n, r) {
          var i,
            a,
            c = t.left + t.width / 2,
            l = t.top + t.height / 2,
            s = o.width,
            u = o.height;
          switch (e) {
            case "top":
              (i = t.top - u - n),
                (a = c - s / 2),
                "start" === r && (a = t.left),
                "end" === r && (a = t.right - s);
              break;
            case "left":
              (i = l - u / 2),
                (a = t.left - n - s),
                "start" === r && (i = t.top),
                "end" === r && (i = t.bottom - u);
              break;
            case "bottom":
              (i = t.bottom + n),
                (a = c - s / 2),
                "start" === r && (a = t.left),
                "end" === r && (a = t.right - s);
              break;
            case "right":
              (i = l - u / 2),
                (a = t.right + n),
                "start" === r && (i = t.top),
                "end" === r && (i = t.bottom - u);
          }
          return {
            top: i,
            left: a,
            width: s,
            height: u,
            right: a + s,
            bottom: i + u,
          };
        }),
        (t.getNewPopoverRect = function (e, o) {
          var n = e.position,
            r = e.align,
            i = e.childRect,
            a = e.popoverRect,
            c = e.parentRect,
            l = e.padding,
            s = e.reposition,
            u = t.popoverRectForPosition(n, i, a, l, r);
          return {
            rect: u,
            boundaryViolation:
              s &&
              (("top" === n && u.top < c.top + o) ||
                ("left" === n && u.left < c.left + o) ||
                ("right" === n && u.right > c.right - o) ||
                ("bottom" === n && u.bottom > c.bottom - o)),
          };
        }),
        (t.getNudgedPopoverRect = function (e, t, o) {
          var n = t.top + o,
            r = t.left + o,
            i = t.right - o,
            a = t.bottom - o,
            c = e.top < n ? n : e.top;
          c = c + e.height > a ? a - e.height : c;
          var l = e.left < r ? r : e.left;
          return {
            top: c,
            left: (l = l + e.width > i ? i - e.width : l),
            width: e.width,
            height: e.height,
            right: l + e.width,
            bottom: c + e.height,
          };
        });
    },
    469: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in (t = arguments[o]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useArrowContainer = void 0);
      var r = o(1);
      t.useArrowContainer = function (e) {
        var t = e.childRect,
          o = e.popoverRect,
          i = e.position,
          a = e.arrowSize,
          c = e.arrowColor;
        return {
          arrowContainerStyle: r.useMemo(
            function () {
              return { padding: a };
            },
            [a],
          ),
          arrowStyle: r.useMemo(
            function () {
              return n(
                { position: "absolute" },
                (function () {
                  var e = 2 * a,
                    n = t.top - o.top + t.height / 2 - e / 2,
                    r = t.left - o.left + t.width / 2 - e / 2,
                    l = a,
                    s = o.width - a,
                    u = o.height - a;
                  switch (
                    ((r = (r = r < l ? l : r) + e > s ? s - e : r),
                    (n = (n = n < l ? l : n) + e > u ? u - e : n),
                    (n = Number.isNaN(n) ? 0 : n),
                    (r = Number.isNaN(r) ? 0 : r),
                    i)
                  ) {
                    case "right":
                      return {
                        borderTop: a + "px solid transparent",
                        borderBottom: a + "px solid transparent",
                        borderRight: a + "px solid " + c,
                        left: 0,
                        top: n,
                      };
                    case "left":
                      return {
                        borderTop: a + "px solid transparent",
                        borderBottom: a + "px solid transparent",
                        borderLeft: a + "px solid " + c,
                        right: 0,
                        top: n,
                      };
                    case "bottom":
                      return {
                        borderLeft: a + "px solid transparent",
                        borderRight: a + "px solid transparent",
                        borderBottom: a + "px solid " + c,
                        top: 0,
                        left: r,
                      };
                    case "top":
                    default:
                      return {
                        borderLeft: a + "px solid transparent",
                        borderRight: a + "px solid transparent",
                        borderTop: a + "px solid " + c,
                        bottom: 0,
                        left: r,
                      };
                  }
                })(),
              );
            },
            [
              c,
              a,
              t.height,
              t.left,
              t.top,
              t.width,
              o.height,
              o.left,
              o.top,
              o.width,
              i,
            ],
          ),
        };
      };
    },
    473: function (e, t, o) {
      "use strict";
      var n = o(91),
        r = o(92),
        i = o(94),
        a = o(93),
        c = o(1),
        l = o.n(c),
        s = o(33),
        u = o(66),
        d = o(95),
        p = o(502),
        h = o(233),
        f = (function (e) {
          Object(i.a)(o, e);
          var t = Object(a.a)(o);
          function o() {
            return Object(n.a)(this, o), t.apply(this, arguments);
          }
          return (
            Object(r.a)(o, [
              {
                key: "handlePopOverClick",
                value: function (e, t, o) {
                  this.props.dispatch(Object(h.b)(e, t, o));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    o = t.label,
                    n = t.keyValue,
                    r = t.match,
                    i = t.isHome;
                  return l.a.createElement(
                    p.Popover,
                    {
                      isOpen:
                        n == this.props.activeIdx.home ||
                        n == this.props.activeIdx.away,
                      positions: ["bottom", "right", "left", "top"],
                      padding: 2,
                      reposition: !1,
                      content: function (e) {
                        var t = e.position,
                          o = e.childRect,
                          n = e.popoverRect;
                        return l.a.createElement(
                          p.ArrowContainer,
                          {
                            position: t,
                            childRect: o,
                            popoverRect: n,
                            arrowColor: "grey",
                            arrowSize: 5,
                            arrowStyle: { opacity: 0.7 },
                            className: "popover-arrow-container",
                            arrowClassName: "popover-arrow",
                          },
                          l.a.createElement(
                            "div",
                            {
                              style: {
                                border: "solid 1px #ccc",
                                borderRadius: "4px",
                                padding: "5px",
                                width: "100%",
                                textAlign: "center",
                                background: "#fff",
                                fontSize: "13px",
                                margin: "0 10px",
                              },
                            },
                            l.a.createElement(
                              "div",
                              {
                                className: "selectedData",
                                style: { width: "100%" },
                              },
                              l.a.createElement(
                                "div",
                                {
                                  className: "fixture",
                                  style: { fontWeight: "bold" },
                                },
                                r.homeTeamName,
                                "\xa0",
                                l.a.createElement(
                                  "span",
                                  {
                                    className: "score",
                                    style: {
                                      background: "#001a69",
                                      color: "#fff",
                                      textAlign: "center",
                                      padding: "3px 10px",
                                      borderRadius: "4px",
                                      letterSpacing: "2px",
                                    },
                                  },
                                  r.score,
                                ),
                                " \xa0",
                                r.awayTeamName,
                                " ",
                                Object(d.b)(r.kickOff, "banner").date,
                                " ",
                                r.competitionName,
                              ),
                            ),
                          ),
                        );
                      },
                    },
                    l.a.createElement(
                      "span",
                      {
                        className:
                          "status " +
                          ("w" === o.toLowerCase()
                            ? "win"
                            : "l" === o.toLowerCase()
                              ? "loss"
                              : "d" === o.toLowerCase()
                                ? "draw"
                                : ""),
                        onMouseEnter: function () {
                          return e.handlePopOverClick(!0, i, n);
                        },
                        onClick: function () {
                          return e.handlePopOverClick(!0, i, n);
                        },
                        key: "popover" + n,
                      },
                      this.props.staticKeyWords[o.toLowerCase()],
                    ),
                  );
                },
              },
            ]),
            o
          );
        })(c.Component);
      var v = Object(u.b)(
          function (e) {
            return {
              activeIdx: e.popover.activeIdx,
              staticKeyWords: e.app.staticKeyWords,
            };
          },
          function (e) {
            return { dispatch: e, actions: Object(s.b)({}, e) };
          },
        )(f),
        m = (function (e) {
          Object(i.a)(o, e);
          var t = Object(a.a)(o);
          function o() {
            return Object(n.a)(this, o), t.apply(this, arguments);
          }
          return (
            Object(r.a)(o, [
              { key: "componentWillMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this;
                  return l.a.createElement(
                    "div",
                    {
                      className: this.props.isHome ? "tableHome" : "tableAway",
                    },
                    l.a.createElement(
                      "div",
                      { className: "tableFull-width" },
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
                          this.props.title,
                          " - ",
                          l.a.createElement("span", null, this.props.subTitle),
                        ),
                      ),
                      l.a.createElement(
                        "table",
                        { className: "tableDefault tableHkjc-mode" },
                        l.a.createElement(
                          "thead",
                          null,
                          l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.played,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.wTable,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.d,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.l,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.gf,
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              this.props.staticKeyWords.ga,
                            ),
                          ),
                        ),
                        l.a.createElement(
                          "tbody",
                          null,
                          l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement(
                              "td",
                              null,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.data.teamPlayed,
                              ),
                            ),
                            l.a.createElement(
                              "td",
                              null,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.data.teamWin,
                              ),
                            ),
                            l.a.createElement(
                              "td",
                              null,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.data.teamDraw,
                              ),
                            ),
                            l.a.createElement(
                              "td",
                              null,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.data.teamLoss,
                              ),
                            ),
                            l.a.createElement(
                              "td",
                              null,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.data.teamGoalsFor,
                              ),
                            ),
                            l.a.createElement(
                              "td",
                              null,
                              l.a.createElement(
                                "div",
                                null,
                                this.props.data.teamGoalsAway,
                              ),
                            ),
                          ),
                          l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement(
                              "td",
                              { colSpan: "6" },
                              l.a.createElement(
                                "div",
                                { className: "recentForm-info" },
                                l.a.createElement(
                                  "div",
                                  { className: "team-lastForm resultsData" },
                                  this.props.data.teamForm &&
                                    this.props.data.teamForm
                                      .split(",")
                                      .map(function (o, n) {
                                        var r =
                                          e.props.data.recentMatch &&
                                          e.props.data.recentMatch[n]
                                            ? e.props.data.recentMatch[n]
                                            : {};
                                        return (
                                          Object.keys(r).length > 0 &&
                                          l.a.createElement(v, {
                                            match: r,
                                            label: o,
                                            keyValue:
                                              n +
                                              "_" +
                                              (t.props.isHome
                                                ? "home"
                                                : "away"),
                                            idx: n,
                                            isHome: t.props.isHome,
                                            key: n,
                                          })
                                        );
                                      }),
                                ),
                                this.props.data.nextMatch &&
                                  Object.keys(this.props.data.nextMatch)
                                  ? l.a.createElement(
                                      "div",
                                      null,
                                      l.a.createElement(
                                        "span",
                                        { className: "home-text" },
                                        this.props.staticKeyWords.nextMatch,
                                        ": ",
                                      ),
                                      l.a.createElement(
                                        "span",
                                        null,
                                        Object(d.b)(
                                          this.props.data.nextMatch.kickOff,
                                          "banner",
                                        ).date,
                                        " - ",
                                        this.props.data.nextMatch
                                          .competitionName,
                                        " - ",
                                        this.props.data.nextMatch.homeTeamName,
                                        " vs ",
                                        this.props.data.nextMatch.awayTeamName,
                                      ),
                                    )
                                  : "",
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
            o
          );
        })(c.Component);
      t.a = Object(u.b)(
        function (e) {
          return {
            homeTeamName: e.match.homeTeamName,
            awayTeamName: e.match.awayTeamName,
            staticKeyWords: e.app.staticKeyWords,
            isLastResIconTrig: e.summary.isLastResIconTrig,
          };
        },
        function (e) {
          return { dispatch: e, actions: Object(s.b)({}, e) };
        },
      )(m);
    },
    502: function (e, t, o) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, n) {
                void 0 === n && (n = o),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, n) {
                void 0 === n && (n = o), (e[n] = t[o]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        a =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var o in e)
                "default" !== o &&
                  Object.prototype.hasOwnProperty.call(e, o) &&
                  r(t, e, o);
            return i(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Popover =
          t.usePopover =
          t.ArrowContainer =
          t.useArrowContainer =
            void 0);
      var c = a(o(1)),
        l = o(503),
        s = o(463),
        u = o(504);
      Object.defineProperty(t, "usePopover", {
        enumerable: !0,
        get: function () {
          return u.usePopover;
        },
      });
      var d = o(506),
        p = o(469);
      Object.defineProperty(t, "useArrowContainer", {
        enumerable: !0,
        get: function () {
          return p.useArrowContainer;
        },
      });
      var h = o(507);
      Object.defineProperty(t, "ArrowContainer", {
        enumerable: !0,
        get: function () {
          return h.ArrowContainer;
        },
      }),
        (t.Popover = c.forwardRef(function (e, t) {
          var o = e.isOpen,
            r = e.children,
            i = e.content,
            a = e.positions,
            p = void 0 === a ? s.Constants.DEFAULT_POSITIONS : a,
            h = e.align,
            f = void 0 === h ? s.Constants.DEFAULT_ALIGN : h,
            v = e.padding,
            m = void 0 === v ? 0 : v,
            g = e.reposition,
            b = void 0 === g || g,
            y = e.containerParent,
            w = void 0 === y ? window.document.body : y,
            E = e.containerClassName,
            R = void 0 === E ? "react-tiny-popover-container" : E,
            P = e.containerStyle,
            O = e.contentLocation,
            C = e.boundaryInset,
            _ = void 0 === C ? 0 : C,
            N = e.onClickOutside,
            j = d.useMemoizedArray(p),
            x = c.useRef(),
            T = c.useRef(),
            A = c.useRef(b),
            L = c.useRef(),
            k = c.useState({
              isPositioned: !1,
              align: f,
              nudgedLeft: 0,
              nudgedTop: 0,
              position: j[0],
              padding: m,
              childRect: s.Constants.EMPTY_CLIENT_RECT,
              popoverRect: s.Constants.EMPTY_CLIENT_RECT,
              parentRect: s.Constants.EMPTY_CLIENT_RECT,
              boundaryInset: _,
            }),
            M = k[0],
            S = k[1],
            I = c.useCallback(function (e) {
              return S(e);
            }, []),
            F = u.usePopover({
              childRef: L,
              containerClassName: R,
              containerParent: w,
              contentLocation: O,
              positions: j,
              align: f,
              padding: m,
              boundaryInset: _,
              reposition: b,
              onPositionPopover: I,
            }),
            H = F[0],
            W = F[1];
          c.useLayoutEffect(
            function () {
              var e = !0;
              return (
                window.requestAnimationFrame(function t() {
                  var n, r;
                  if (o && e && L.current && W.current) {
                    var i =
                        null === (n = L.current) || void 0 === n
                          ? void 0
                          : n.getBoundingClientRect(),
                      a =
                        null === (r = W.current) || void 0 === r
                          ? void 0
                          : r.getBoundingClientRect();
                    (s.rectsAreEqual(i, {
                      top: M.childRect.top,
                      left: M.childRect.left,
                      width: M.childRect.width,
                      height: M.childRect.height,
                      bottom: M.childRect.top + M.childRect.height,
                      right: M.childRect.left + M.childRect.width,
                    }) &&
                      a.width === M.popoverRect.width &&
                      a.height === M.popoverRect.height &&
                      M.padding === m &&
                      M.align === f &&
                      j === x.current &&
                      O === T.current &&
                      b === A.current) ||
                      H(),
                      j !== x.current && (x.current = j),
                      O !== T.current && (T.current = O),
                      b !== A.current && (A.current = b),
                      e && window.requestAnimationFrame(t);
                  }
                }),
                function () {
                  e = !1;
                }
              );
            },
            [
              o,
              W,
              M.childRect.width,
              M.childRect.height,
              M.childRect.top,
              M.childRect.left,
              M.popoverRect.width,
              M.popoverRect.height,
              M.padding,
              M.align,
              H,
              f,
              m,
              j,
              b,
              _,
              O,
            ],
          ),
            c.useLayoutEffect(
              function () {
                o ||
                  S(function (e) {
                    return n(n({}, e), { isPositioned: !1 });
                  });
              },
              [o],
            ),
            c.useEffect(
              function () {
                var e = W.current;
                return (
                  M.isPositioned && Object.assign(e.style, P),
                  function () {
                    Object.keys(null !== P && void 0 !== P ? P : {}).forEach(
                      function (t) {
                        return (e.style[t] = null);
                      },
                    );
                  }
                );
              },
              [P, o, W, M.isPositioned],
            ),
            c.useLayoutEffect(
              function () {
                W.current.className = R;
              },
              [R, W],
            );
          var q = c.useCallback(
              function (e) {
                var t, n;
                !o ||
                  (null ===
                    (t = null === W || void 0 === W ? void 0 : W.current) ||
                  void 0 === t
                    ? void 0
                    : t.contains(e.target)) ||
                  (null ===
                    (n = null === L || void 0 === L ? void 0 : L.current) ||
                  void 0 === n
                    ? void 0
                    : n.contains(e.target)) ||
                  null === N ||
                  void 0 === N ||
                  N(e);
              },
              [o, N, W],
            ),
            K = c.useCallback(
              function () {
                window.requestAnimationFrame(H);
              },
              [H],
            );
          c.useEffect(
            function () {
              return (
                window.addEventListener("click", q),
                window.addEventListener("resize", K),
                function () {
                  window.removeEventListener("click", q),
                    window.removeEventListener("resize", K);
                }
              );
            },
            [q, K],
          );
          var B = c.useCallback(
            function (e) {
              (L.current = e),
                null != t &&
                  ("object" === typeof t
                    ? (t.current = e)
                    : "function" === typeof t && t(e));
            },
            [t],
          );
          return c.default.createElement(
            c.default.Fragment,
            null,
            c.default.cloneElement(r, { ref: B }),
            o
              ? c.default.createElement(
                  l.PopoverPortal,
                  { element: W.current, container: w },
                  "function" === typeof i ? i(M) : i,
                )
              : null,
          );
        }));
    },
    503: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PopoverPortal = void 0);
      var n = o(1),
        r = o(97);
      t.PopoverPortal = function (e) {
        var t = e.container,
          o = e.element,
          i = e.children;
        return (
          n.useLayoutEffect(
            function () {
              return (
                t.appendChild(o),
                function () {
                  return t.removeChild(o);
                }
              );
            },
            [t, o],
          ),
          r.createPortal(i, o)
        );
      };
    },
    504: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.usePopover = void 0);
      var n = o(1),
        r = o(463),
        i = o(505);
      t.usePopover = function (e) {
        var t = e.childRef,
          o = e.positions,
          a = e.containerClassName,
          c = e.containerParent,
          l = e.contentLocation,
          s = e.align,
          u = e.padding,
          d = e.reposition,
          p = e.boundaryInset,
          h = e.onPositionPopover,
          f = i.useElementRef(a, {
            position: "fixed",
            overflow: "visible",
            top: "0px",
            left: "0px",
          }),
          v = n.useCallback(
            function (e, n, i, a) {
              var m;
              if (
                (void 0 === e && (e = 0),
                void 0 === n && (n = t.current.getBoundingClientRect()),
                void 0 === i && (i = f.current.getBoundingClientRect()),
                void 0 === a && (a = c.getBoundingClientRect()),
                l)
              ) {
                var g =
                    "function" === typeof l
                      ? l({
                          isPositioned: !0,
                          childRect: n,
                          popoverRect: i,
                          parentRect: a,
                          position: "custom",
                          align: "custom",
                          padding: u,
                          nudgedTop: 0,
                          nudgedLeft: 0,
                          boundaryInset: p,
                        })
                      : l,
                  b = g.top,
                  y = g.left,
                  w = a.left + y,
                  E = a.top + b;
                return (
                  (f.current.style.transform =
                    "translate(" + w + "px, " + E + "px)"),
                  void h({
                    isPositioned: !0,
                    childRect: n,
                    popoverRect: i,
                    parentRect: a,
                    position: "custom",
                    align: "custom",
                    padding: u,
                    nudgedTop: 0,
                    nudgedLeft: 0,
                    boundaryInset: p,
                  })
                );
              }
              var R = e === o.length,
                P = R ? o[0] : o[e],
                O = r.getNewPopoverRect(
                  {
                    childRect: n,
                    popoverRect: i,
                    parentRect: a,
                    position: P,
                    align: s,
                    padding: u,
                    reposition: d,
                  },
                  p,
                ),
                C = O.rect;
              if (O.boundaryViolation && d && !R) v(e + 1, n, i, a);
              else {
                var _ = C.top,
                  N = C.left,
                  j = C.width,
                  x = C.height,
                  T = _,
                  A = N;
                d &&
                  !R &&
                  ((T = (m = r.getNudgedPopoverRect(C, a, p)).top),
                  (A = m.left)),
                  (f.current.style.transform =
                    "translate(" + A + "px, " + T + "px)"),
                  h({
                    isPositioned: !0,
                    childRect: n,
                    popoverRect: {
                      top: T,
                      left: A,
                      width: j,
                      height: x,
                      right: A + j,
                      bottom: T + x,
                    },
                    parentRect: a,
                    position: P,
                    align: s,
                    padding: u,
                    nudgedTop: T - _,
                    nudgedLeft: A - N,
                    boundaryInset: p,
                  });
              }
            },
            [t, f, o, s, u, d, p, c, l, h],
          );
        return [v, f];
      };
    },
    505: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useElementRef = void 0);
      var n = o(1),
        r = o(463);
      t.useElementRef = function (e, t) {
        var o = n.useMemo(
          function () {
            return r.createContainer(t, e);
          },
          [e, t],
        );
        return n.useRef(o);
      };
    },
    506: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useMemoizedArray = void 0);
      var n = o(1);
      t.useMemoizedArray = function (e) {
        var t = n.useRef(e);
        return n.useMemo(
          function () {
            if (t.current === e) return t.current;
            if (t.current.length !== e.length) return (t.current = e), e;
            for (var o = 0; o < e.length; o += 1)
              if (e[o] !== t.current[o]) return (t.current = e), e;
            return t.current;
          },
          [e],
        );
      };
    },
    507: function (e, t, o) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var r in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, n) {
                void 0 === n && (n = o),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, n) {
                void 0 === n && (n = o), (e[n] = t[o]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        a =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var o in e)
                "default" !== o &&
                  Object.prototype.hasOwnProperty.call(e, o) &&
                  r(t, e, o);
            return i(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ArrowContainer = void 0);
      var c = a(o(1)),
        l = o(469);
      t.ArrowContainer = function (e) {
        var t = e.childRect,
          o = e.popoverRect,
          r = e.position,
          i = e.arrowColor,
          a = e.arrowSize,
          s = e.className,
          u = e.children,
          d = e.style,
          p = l.useArrowContainer({
            childRect: t,
            popoverRect: o,
            position: r,
            arrowColor: i,
            arrowSize: a,
          }),
          h = p.arrowContainerStyle,
          f = p.arrowStyle,
          v = c.useMemo(
            function () {
              return n(n({}, d), h);
            },
            [h, d],
          );
        return c.default.createElement(
          "div",
          { className: s, style: v },
          c.default.createElement("div", { style: f }),
          u,
        );
      };
    },
  },
]);
//# sourceMappingURL=1.209722d9.chunk.js.map
