webpackJsonp(
  [1],
  {
    0: function(t, e) {},
    "0kkF": function(t, e) {},
    "1Inb": function(t, e, i) {
      t.exports = i.p + "static/img/link-arrow.ffd54f4.svg";
    },
    "6Xa6": function(t, e) {},
    "8XSV": function(t, e) {},
    "8nVr": function(t, e) {},
    AAKx: function(t, e) {},
    AGeK: function(t, e) {},
    B8ah: function(t, e, i) {
      t.exports = i.p + "static/img/logo-text.b84db7d.svg";
    },
    ChuL: function(t, e) {},
    DeFu: function(t, e) {},
    DiPo: function(t, e) {},
    J5DX: function(t, e) {},
    "Kqa+": function(t, e) {},
    L47u: function(t, e) {},
    LUaU: function(t, e) {},
    N11d: function(t, e) {},
    NHnr: function(t, e, i) {
      "use strict";
      function s(t) {
        i("8nVr");
      }
      function n(t) {
        i("AAKx");
      }
      function o(t) {
        i("DiPo");
      }
      function a(t) {
        i("8XSV");
      }
      function r(t) {
        i("QgE4");
      }
      function l(t) {
        i("J5DX");
      }
      function c(t) {
        i("c1NI");
      }
      function d(t) {
        i("AGeK");
      }
      function u(t) {
        i("ChuL");
      }
      function h(t) {
        i("y9/I");
      }
      function p(t) {
        i("VgK/");
      }
      function f(t) {
        i("YP30");
      }
      function v(t) {
        i("kwBM");
      }
      function g(t) {
        i("L47u");
      }
      function m(t) {
        i("0kkF");
      }
      function _(t) {
        i("p6j3");
      }
      function y(t) {
        i("VmmO");
      }
      function w(t) {
        i("i2FF");
      }
      function C(t) {
        i("LUaU");
      }
      function b(t) {
        i("gzFK");
      }
      function x(t) {
        i("xSA0");
      }
      function $(t) {
        i("sx7o");
      }
      function S(t) {
        i("VFHz");
      }
      function k(t) {
        i("6Xa6");
      }
      function P(t) {
        i("DeFu");
      }
      function T(t) {
        i("N11d");
      }
      function B(t) {
        i("Kqa+");
      }
      function M(t) {
        i("QGuW");
      }
      function A(t) {
        i("OhBC");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var I =
          (i("SCKt"), i("0K64"), i("X8hh"), i("fB7P"), i("rd7d"), i("Rcjy")),
        D = i.n(I),
        E = i("7+uW"),
        L = i("//Fk"),
        O = i.n(L),
        R = i("mtWM"),
        F = i.n(R),
        z = F.a.create({}),
        W = new E.a({
          data: function() {
            return {
              adult: !1,
              articles: [],
              articlesPromise: null,
              collections: [],
              collectionsPromise: null,
              contacts: [],
              contactsPromise: null,
              facts: [],
              factsPromise: null,
              inspirations: [],
              inspirationsPromise: null,
              safeAreaInset: { left: 0, right: 0, bottom: 0 },
              scrollBarWidth: 0,
              scrollEventHandlerAdded: !1,
              scrollPositions: [],
              scrollTop: 0,
              windowHeight: window.innerHeight,
              windowWidth: window.innerWidth,
              supportsTouch: !1,
              isFirefox: !1,
              isSafari: !1
            };
          },
          computed: {
            products: function() {
              return this.collections.reduce(function(t, e) {
                return t.concat(e.products);
              }, []);
            }
          },
          created: function() {
            window.addEventListener("resize", this.onResize),
              this.getScrollBarWidth(),
              this.getSafeAreaInset(),
              this.getCollections(),
              this.getInspirations(),
              this.getFacts(),
              this.getArticles(),
              this.getContacts(),
              this.getAdult(),
              (this.supportsTouch = "ontouchstart" in document.documentElement),
              (this.isFirefox = /firefox/i.test(navigator.userAgent)),
              (this.isSafari = /^((?!chrome|android).)*safari/i.test(
                navigator.userAgent
              )),
              this.isFirefox &&
                document.documentElement.classList.add("firefox");
          },
          destroyed: function() {
            window.removeEventListener("resize", this.onResize),
              document.body.removeEventListener("scroll", this.onScroll),
              this.scrollEventHandlerAdded &&
                document
                  .querySelector("#app > main")
                  .removeEventListener("scroll", this.onScroll);
          },
          methods: {
            getCollections: function(t) {
              return this.fetchData(
                "collections",
                "collectionsPromise",
                "/collections.json",
                t
              );
            },
            getProductByAlias: function(t) {
              return this.products.find(function(e) {
                return e.alias === t;
              });
            },
            getInspirations: function(t) {
              return this.fetchData(
                "inspirations",
                "inspirationsPromise",
                "/recipes.json",
                t
              );
            },
            getFacts: function(t) {
              return this.fetchData(
                "facts",
                "factsPromise",
                "/facts.json",
                t
              );
            },
            getArticles: function(t) {
              return this.fetchData(
                "articles",
                "articlesPromise",
                "/articles.json",
                t
              );
            },
            getContacts: function(t) {
              return this.fetchData(
                "contacts",
                "contactsPromise",
                "/contacts.json",
                t
              );
            },
            getLandingData: function() {
              var t = this;
              z.get("/home.json")
                .then(function(e) {
                  (t.landingData = e.data),
                    t.landingData.bottles.forEach(function(e) {
                      t.$set(e, "currentBottle", 0);
                    }),
                    t.$nextTick(function() {
                      t.onResize();
                    });
                })
                .catch(function(t) {
                  console.log(t);
                });
            },
            fetchData: function(t, e, i, s) {
              var n = this;
              return (
                this.addScrollEventHandler(),
                (this[e] && !s) ||
                  (this[e] = new O.a(function(e) {
                    n[t].length && !s
                      ? e(n[t])
                      : z
                          .get(i)
                          .then(function(i) {
                            (n[t] = i.data), e(n[t]);
                          })
                          .catch(function(t) {
                            n.$emit("handleServerError", t);
                          });
                  })),
                this[e]
              );
            },
            getAdult: function() {
              var t = localStorage.getItem("adult");
              t && !0 === JSON.parse(t) && (this.adult = !0);
            },
            setAdult: function() {
              localStorage.setItem("adult", "true"), (this.adult = !0);
            },
            setDocumentTitle: function(t) {
              document.title = t ? t + " – Polugar" : "Polugar";
            },
            getScrollBarWidth: function() {
              var t = document.createElement("div");
              (t.style.visibility = "hidden"),
                (t.style.width = "100px"),
                document.body.appendChild(t);
              var e = t.offsetWidth;
              t.style.overflow = "scroll";
              var i = document.createElement("div");
              (i.style.width = "100%"), t.appendChild(i);
              var s = i.offsetWidth;
              t.parentNode.removeChild(t), (this.scrollBarWidth = e - s);
            },
            getSafeAreaInset: function() {
              var t = document.createElement("div");
              (t.style.visibility = "hidden"),
                (t.style.position = "absolute"),
                (t.style.left = "env(safe-area-inset-left)"),
                (t.style.right = "env(safe-area-inset-right)"),
                (t.style.bottom = "env(safe-area-inset-bottom)"),
                document.body.appendChild(t);
              var e = window.getDefaultComputedStyle
                ? window.getDefaultComputedStyle(t)
                : window.getComputedStyle(t);
              (this.safeAreaInset.left = parseInt(e.left, 10) || 0),
                (this.safeAreaInset.right = parseInt(e.right, 10) || 0),
                (this.safeAreaInset.bottom = parseInt(e.bottom, 10) || 0),
                t.parentNode.removeChild(t);
            },
            saveScrollPosition: function(t, e, i) {
              var s = { from: t.fullPath, to: e.fullPath, position: i },
                n = this.scrollPositions.findIndex(function(t) {
                  return t.from === s.from && t.to === s.to;
                });
              n > -1
                ? (this.scrollPositions[n] = s)
                : this.scrollPositions.push(s);
            },
            getScrollPosition: function(t, e) {
              return this.scrollPositions.find(function(i) {
                return i.from === e.fullPath && i.to === t.fullPath;
              });
            },
            isMobile: function() {
              return matchMedia
                ? matchMedia(
                    "(max-width: 767.98px), (max-width: 896px) and (max-height: 414px)"
                  ).matches
                : this.windowWidth < 768 ||
                    (this.windowHeight <= 896 && this.windowHeight <= 414);
            },
            addScrollEventHandler: function() {
              var t = document.querySelector("#app > main");
              t &&
                !this.scrollEventHandlerAdded &&
                (document.body.addEventListener("scroll", this.onScroll),
                t.addEventListener("scroll", this.onScroll),
                (this.scrollEventHandlerAdded = !0));
            },
            onScroll: function() {
              var t = document.querySelector("#app > main");
              t &&
                (this.scrollTop =
                  t.scrollTop ||
                  document.body.scrollTop ||
                  document.documentElement.scrollTop ||
                  Math.abs(t.getBoundingClientRect().top)),
                this.$emit("toggleFiltersCollapsed", this.scrollTop > 150);
            },
            onResize: function() {
              (this.windowHeight =
                window.innerHeight || document.documentElement.clientHeight),
                (this.windowWidth =
                  window.innerWidth || document.documentElement.clientWidth),
                this.getScrollBarWidth(),
                this.getSafeAreaInset();
            }
          }
        }),
        V = i("W9M7"),
        N = i.n(V),
        H = i("74Kd"),
        G = i.n(H),
        Y = {
          name: "borders",
          props: {
            filtersCollapsed: Boolean,
            dropdownIsOpened: Boolean,
            isMenuOpened: Boolean
          },
          data: function() {
            return {
              logoWidth: 0,
              margin: 0,
              isFullscreenGallery: !1,
              pointRightTopState: {
                initial: null,
                filterCollapsedValue: null,
                menuOpenedValue: null
              },
              pointRightBottomState: {
                initial: null,
                filterCollapsedValue: null,
                menuOpenedValue: null
              },
              pointLeftBottomState: {
                initial: null,
                filterCollapsedValue: null
              },
              pointLeftTopState: { initial: null, filterCollapsedValue: null },
              topRightBorderState: {
                initial: null,
                filterCollapsedValue: null,
                menuOpenedValue: null
              },
              bottomRightBorderState: {
                initial: null,
                filterCollapsedValue: null,
                menuOpenedValue: null
              },
              bottomLeftBorderState: {
                initial: null,
                filterCollapsedValue: null
              },
              topLeftBorderState: { initial: null, filterCollapsedValue: null }
            };
          },
          computed: {
            topBordersStyle: function() {
              return (
                this.$store.windowWidth / 2 +
                (this.filtersCollapsed ? 0 : this.logoWidth / 2 - 5) +
                "px"
              );
            },
            rightBordersStyle: function() {
              var t = this.$store.windowWidth >= 1024,
                e = this.$store.scrollBarWidth,
                i = this.$store.safeAreaInset.right;
              return {
                marginRight:
                  "calc(" + (t ? 2 : 3) + "% + " + e + "px + " + i + "px)"
              };
            },
            rightPointsStyle: function() {
              var t = this.$store.windowWidth >= 1024,
                e = this.$store.scrollBarWidth;
              return {
                marginRight: "calc(" + (t ? 2 : 3) + "% + " + e + "px)"
              };
            },
            bottomBorderStyle: function() {
              return {
                width:
                  "calc(" +
                  (this.$store.windowWidth >= 1024 ? 96 : 94) +
                  "% - " +
                  this.$store.scrollBarWidth +
                  "px - " +
                  (this.$store.safeAreaInset.left +
                    this.$store.safeAreaInset.right) +
                  "px)"
              };
            }
          },
          watch: {
            $route: function() {
              this.getAnimationData();
            },
            filtersCollapsed: function(t) {
              this.animateOnFilterCollapsedToggle(t);
            },
            isFullscreenGallery: function(t) {
              this.animateOnGalleryToggle(t);
            },
            isMenuOpened: function(t) {
              this.animateOnMenuToggle(t);
            }
          },
          created: function() {
            W.$on("isFullscreenGallery", this.onToggleFullscreenGallery),
              W.$on("logoWidth", this.onGetLogoWidth),
              window.addEventListener("resize", this.onResize);
          },
          mounted: function() {
            this.toggleTransitionOfElements(!1),
              this.getAnimationData(),
              this.setStartingStyles();
          },
          destroyed: function() {
            window.removeEventListener("resize", this.onResize);
          },
          methods: {
            onGetLogoWidth: function(t) {
              this.logoWidth = t;
            },
            getAnimationData: function() {
              var t = this.$store.windowWidth,
                e = t * (t >= 1024 ? 0.02 : 0.03),
                i = t * (t >= 1024 ? 0.02 : 0.03),
                s = document.documentElement.clientHeight;
              (this.margin = +e),
                (this.pointRightTopState = {
                  initial: 99,
                  filterCollapsedValue: -1,
                  menuOpenedValue: 0.4 * s - e - 30 - 13.5
                }),
                (this.pointRightBottomState = {
                  initial: 180,
                  filterCollapsedValue: 80,
                  menuOpenedValue: 0.4 * s + 13.5
                }),
                (this.pointLeftBottomState = {
                  initial: 180,
                  filterCollapsedValue: 80
                }),
                (this.pointLeftTopState = {
                  initial: 99,
                  filterCollapsedValue: -1
                }),
                (this.topRightBorderState = {
                  initial: 99,
                  filterCollapsedValue: 1,
                  menuOpenedValue: 0.4 * s - e - 30 - 13.5
                }),
                (this.bottomRightBorderState = {
                  initial: s - 182 - e - i,
                  filterCollapsedValue: s - 81 - e - i,
                  menuOpenedValue: 0.6 * s - e - i - 13.5
                }),
                (this.bottomLeftBorderState = {
                  initial: s - 182 - e - i,
                  filterCollapsedValue: s - 81 - e - i
                }),
                (this.topLeftBorderState = {
                  initial: 99,
                  filterCollapsedValue: 1
                });
            },
            getY: function(t) {
              var e = this.isMenuOpened,
                i = this.filtersCollapsed,
                s = t === this.bottomLeftBorderState,
                n =
                  t === this.bottomRightBorderState ||
                  t === this.topRightBorderState ||
                  t === this.pointRightTopState ||
                  t === this.pointRightBottomState,
                o = e && !n && i;
              return e && this.$store.windowWidth >= 1024 && !s
                ? t.menuOpenedValue
                : o || (!e && i)
                ? t.filterCollapsedValue
                : t.initial;
            },
            getBordersProps: function(t, e) {
              return {
                scaleY: t.initial,
                ease: e ? "Power1.linear" : "Power1.easeOut",
                clearProps: e ? "transition, scaleY" : "transition"
              };
            },
            setStartingStyles: function(t) {
              if (!(this.$store.windowWidth < 768)) {
                var e = this.$refs,
                  i = e.topRightBorder,
                  s = e.bottomRightBorder,
                  n = e.bottomLeftBorder,
                  o = e.topLeftBorder,
                  a = this.$refs,
                  r = a.topRightPoint,
                  l = a.bottomRightPoint,
                  c = a.bottomLeftPoint,
                  d = a.topLeftPoint;
                this.filtersCollapsed
                  ? this.animateOnFilterCollapsedToggle(!0, !1)
                  : this.isMenuOpened
                  ? this.animateOnMenuToggle(!0, !1)
                  : this.isFullscreenGallery
                  ? this.animateOnGalleryToggle(t)
                  : (this.toggleTransitionOfElements(!1),
                    new G.a()
                      .set(r, { y: this.pointRightTopState.initial })
                      .set(d, { y: this.pointLeftTopState.initial })
                      .set(l, { y: this.pointRightBottomState.initial })
                      .set(c, { y: this.pointLeftBottomState.initial })
                      .set(i, { scaleY: this.topRightBorderState.initial })
                      .set(s, { scaleY: this.bottomRightBorderState.initial })
                      .set(n, { scaleY: this.bottomLeftBorderState.initial })
                      .set(o, { scaleY: this.topLeftBorderState.initial }));
              }
            },
            animateOnFilterCollapsedToggle: function(t, e) {
              var i = this.$refs,
                s = i.topRightBorder,
                n = i.bottomRightBorder,
                o = i.bottomLeftBorder,
                a = i.topLeftBorder,
                r = this.$refs,
                l = r.topRightPoint,
                c = r.bottomRightPoint,
                d = r.bottomLeftPoint,
                u = r.topLeftPoint;
              this.toggleTransitionOfElements(e),
                new G.a()
                  .to(l, 0, { y: this.getY(this.pointRightTopState) }, 0)
                  .to(u, 0, { y: this.getY(this.pointLeftTopState) }, 0)
                  .to(c, 0, { y: this.getY(this.pointRightBottomState) }, 0)
                  .to(d, 0, { y: this.getY(this.pointLeftBottomState) }, 0)
                  .to(s, 0, { scaleY: this.getY(this.topRightBorderState) }, 0)
                  .to(
                    n,
                    0,
                    { scaleY: this.getY(this.bottomRightBorderState) },
                    0
                  )
                  .to(
                    o,
                    0,
                    { scaleY: this.getY(this.bottomLeftBorderState) },
                    0
                  )
                  .to(
                    a,
                    0,
                    { scaleY: this.getY(this.topLeftBorderState, !1) },
                    0
                  );
            },
            animateOnMenuToggle: function(t, e) {
              if (!(this.$store.windowWidth < 768)) {
                var i = this.$refs,
                  s = i.topRightBorder,
                  n = i.bottomRightBorder,
                  o = i.bottomLeftBorder,
                  a = this.$refs,
                  r = a.topRightPoint,
                  l = a.bottomRightPoint;
                this.toggleTransitionOfElements(e),
                  new G.a()
                    .to(r, 0, { y: this.getY(this.pointRightTopState) })
                    .to(l, 0, { y: this.getY(this.pointRightBottomState) })
                    .to(s, 0, { scaleY: this.getY(this.topRightBorderState) })
                    .to(n, 0, {
                      scaleY: this.getY(this.bottomRightBorderState)
                    })
                    .to(o, 0, {
                      scaleY: this.getY(this.bottomLeftBorderState)
                    });
              }
            },
            animateOnGalleryToggle: function(t, e) {
              if (!(this.$store.windowWidth < 768)) {
                if ("article" === this.$route.name)
                  return void N.a.set(this.$refs.borders, {
                    opacity: t ? 0 : 1
                  });
                var i = this.$refs,
                  s = i.topRightBorder,
                  n = i.bottomRightBorder,
                  o = i.bottomLeftBorder,
                  a = i.topLeftBorder;
                if ((this.toggleTransitionOfElements(!1), t)) {
                  if (e) return;
                  new G.a()
                    .to(this.$refs.points, 0.4, { opacity: 0 }, 0)
                    .to(
                      this.$refs.rightTopBorder,
                      0.7,
                      { scaleX: 0, ease: "Power1.easeIn" },
                      0.9
                    )
                    .to(
                      this.$refs.leftTopBorder,
                      0.7,
                      { scaleX: 0, ease: "Power1.easeIn" },
                      0.9
                    )
                    .to(
                      this.$refs.bottomBorder,
                      0.7,
                      { scaleX: 1, ease: "Power1.easeIn" },
                      1.7
                    )
                    .to(a, 0.7, { scaleY: 0, ease: "Power1.linear" }, 0.3)
                    .to(s, 0.7, { scaleY: 0, ease: "Power1.linear" }, 0.3)
                    .to(o, 1.5, { scaleY: 0, ease: "Power1.easeOut" }, 0.3)
                    .to(n, 1.5, { scaleY: 0, ease: "Power1.easeOut" }, 0.3);
                } else
                  new G.a()
                    .to(this.$refs.points, 0.7, { opacity: 1 }, 1.3)
                    .to(
                      this.$refs.rightTopBorder,
                      0.5,
                      { scaleX: 1, clearProps: "scaleX" },
                      0
                    )
                    .to(
                      this.$refs.leftTopBorder,
                      0.5,
                      { scaleX: 1, clearProps: "scaleX" },
                      0
                    )
                    .to(
                      this.$refs.bottomBorder,
                      0.5,
                      { scaleX: 1, clearProps: "scaleX" },
                      0
                    )
                    .to(
                      a,
                      1,
                      this.getBordersProps(this.topLeftBorderState, !0),
                      0.5
                    )
                    .to(
                      s,
                      1,
                      this.getBordersProps(this.topRightBorderState, !0),
                      0.5
                    )
                    .to(
                      n,
                      1.5,
                      this.getBordersProps(this.bottomRightBorderState),
                      0.5
                    )
                    .to(
                      o,
                      1.5,
                      this.getBordersProps(this.bottomLeftBorderState),
                      0.5
                    );
              }
            },
            toggleTransitionOfElements: function() {
              var t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                e = [
                  this.$refs.topRightPoint,
                  this.$refs.bottomRightPoint,
                  this.$refs.bottomLeftPoint,
                  this.$refs.topLeftPoint,
                  this.$refs.topRightBorder,
                  this.$refs.bottomRightBorder,
                  this.$refs.bottomLeftBorder,
                  this.$refs.topLeftBorder
                ];
              N.a.set([e], { transition: t ? "" : "0ms" });
            },
            onToggleFullscreenGallery: function(t) {
              this.isFullscreenGallery = t;
            },
            onResize: function() {
              this.getAnimationData(), this.setStartingStyles(!0);
            }
          }
        },
        q = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              ref: "borders",
              staticClass: "borders",
              class: { invisible: !t.$store.adult }
            },
            [
              i("div", { ref: "points", staticClass: "borders__points" }, [
                i("div", {
                  ref: "topRightPoint",
                  staticClass: "borders__point point__top right",
                  style: t.rightPointsStyle
                }),
                t._v(" "),
                i("div", {
                  ref: "bottomRightPoint",
                  staticClass: "borders__point point__bottom right",
                  style: t.rightPointsStyle
                }),
                t._v(" "),
                i("div", {
                  ref: "bottomLeftPoint",
                  staticClass: "borders__point point__bottom left"
                }),
                t._v(" "),
                i("div", {
                  ref: "topLeftPoint",
                  staticClass: "borders__point point__top left"
                })
              ]),
              t._v(" "),
              i("div", {
                ref: "rightTopBorder",
                staticClass: "borders__top-right",
                style: [{ left: t.topBordersStyle }, t.rightBordersStyle]
              }),
              t._v(" "),
              i("div", {
                ref: "leftTopBorder",
                staticClass: "borders__top-left",
                style: { right: t.topBordersStyle }
              }),
              t._v(" "),
              i("div", {
                ref: "topRightBorder",
                staticClass: "borders__right-top",
                style: t.rightBordersStyle
              }),
              t._v(" "),
              i("div", {
                ref: "bottomRightBorder",
                staticClass: "borders__right-bottom",
                style: t.rightBordersStyle
              }),
              t._v(" "),
              i("div", {
                ref: "bottomBorder",
                staticClass: "borders__bottom",
                style: t.bottomBorderStyle
              }),
              t._v(" "),
              i("div", {
                ref: "bottomLeftBorder",
                staticClass: "borders__left-bottom"
              }),
              t._v(" "),
              i("div", {
                ref: "topLeftBorder",
                staticClass: "borders__left-top"
              }),
              t._v(" "),
              i("div", {
                staticClass: "bottom-overlapping",
                class:
                  (t.isMenuOpened, t.dropdownIsOpened ? "dropdown-opened" : ""),
                style: {
                  left: "-" + t.$store.scrollBarWidth + "px",
                  width: "calc(96vw - " + t.$store.scrollBarWidth + "px)"
                }
              })
            ]
          );
        },
        j = [],
        U = { render: q, staticRenderFns: j },
        X = U,
        K = i("VU/8"),
        Q = s,
        Z = K(Y, X, !1, Q, null, null),
        J = Z.exports,
        tt = {
          name: "fade",
          mounted: function() {
            W.$on("toggleAnimate", this.toggleAnimate);
          },
          methods: {
            toggleAnimate: function() {
              new G.a()
                .to(this.$refs.fade, 0.1, { opacity: 1 }, 0)
                .to(this.$refs.fade, 0.5, { opacity: 0 }, 0.1);
            }
          }
        },
        et = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.$store.adult
            ? i("div", { ref: "fade", staticClass: "fade" })
            : t._e();
        },
        it = [],
        st = { render: et, staticRenderFns: it },
        nt = st,
        ot = i("VU/8"),
        at = n,
        rt = ot(tt, nt, !1, at, null, null),
        lt = rt.exports,
        ct = {
          name: "gradient",
          props: { main: Boolean, hidden: Boolean },
          data: function() {
            return { visible: !0 };
          },
          computed: {
            displayGradientStyle: function() {
              var t = this.$route,
                e = this.visible,
                i = t.meta && t.meta.filter,
                s = ["notfound", "pageupgrade"];
              return i || s.includes(t.name) || !e ? "none" : "";
            }
          },
          mounted: function() {
            var t = this;
            this.main
              ? W.$on("gradientMounted", function(e) {
                  return (t.visible = !e);
                })
              : W.$emit("gradientMounted", !0);
          },
          destroyed: function() {
            W.$emit("gradientMounted", !1);
          }
        },
        dt = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.$store.adult
            ? i("div", {
                ref: "gradient",
                staticClass: "gradient",
                style: {
                  right: t.$store.scrollBarWidth + "px",
                  display: t.displayGradientStyle,
                  opacity: "" + (t.hidden ? 0 : 1),
                  transition: "opacity " + (t.hidden ? 0 : 300) + "ms ease",
                  transitionDelay: (t.hidden ? 0 : 700) + "ms"
                }
              })
            : t._e();
        },
        ut = [],
        ht = { render: dt, staticRenderFns: ut },
        pt = ht,
        ft = i("VU/8"),
        vt = o,
        gt = ft(ct, pt, !1, vt, null, null),
        mt = gt.exports,
        _t = {
          name: "logotype",
          data: function() {
            return {
              activeSlide: null,
              isLogoTextVisible: !1,
              isMenuOpened: !1,
              logoWidth: 0
            };
          },
          mounted: function() {
            this.onResize();
          },
          methods: {
            getLogoWidth: function() {
              this.$refs.logo &&
                W.$emit(
                  "logoWidth",
                  this.$refs.logo.getBoundingClientRect().width
                );
            },
            hideLogoText: function(t) {
              this.isLogoTextVisible = t;
            },
            gradientHidden: function(t) {
              this.isMenuOpened = t;
            },
            scrollTop: function() {
              (this.isMenuOpened && 2 === this.activeSlide) ||
                (window.scrollTo(0, 0), W.$emit("activeSlide", 1));
            },
            onToggleActiveSlide: function(t) {
              this.activeSlide = t;
            },
            onScroll: function() {
              this.hideLogoText(
                document.body.scrollTop > 150 ||
                  document.documentElement.scrollTop > 150
              );
            },
            onResize: function() {
              this.getLogoWidth();
            }
          },
          watch: {
            $route: function() {
              this.hideLogoText(!1);
            }
          },
          created: function() {
            W.$on("activeSlide", this.onToggleActiveSlide),
              W.$on("hideLogoText", this.hideLogoText),
              W.$on("isMenuOpened", this.gradientHidden),
              document.body.addEventListener("scroll", this.onScroll),
              window.addEventListener("resize", this.onResize);
          },
          destroyed: function() {
            document.body.removeEventListener("scroll", this.onScroll),
              window.addEventListener("resize", this.onResize);
          }
        },
        yt = function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "logo-container" },
            [
              s(
                "router-link",
                { staticClass: "logo-link", attrs: { to: { name: "home" } } },
                [
                  s("img", {
                    ref: "logo",
                    staticClass: "logo",
                    attrs: { src: i("qz/U"), alt: "Polugar" },
                    on: {
                      click: function(e) {
                        t.scrollTop();
                      }
                    }
                  }),
                  t._v(" "),
                  "home" !== t.$route.name
                    ? s("img", {
                        class: [
                          "logo-text",
                          { "hide-logo-text": t.isLogoTextVisible }
                        ],
                        style: {
                          opacity: t.$store.adult ? "" : 1,
                          pointerEvents: t.$store.adult ? "" : "auto"
                        },
                        attrs: { src: i("B8ah"), alt: "Rodionov & Sons" },
                        on: {
                          click: function(e) {
                            t.scrollTop();
                          }
                        }
                      })
                    : t._e(),
                  t._v(" "),
                  "home" === t.$route.name
                    ? s("img", {
                        class: [
                          "logo-text",
                          { "hide-logo-text": t.isLogoTextVisible }
                        ],
                        attrs: { src: i("ZL5T"), alt: "Rodionov & Sons" }
                      })
                    : t._e()
                ]
              ),
              t._v(" "),
              s("div", {
                staticClass: "opacity-item-menu",
                class: t.isMenuOpened ? "visible" : ""
              }),
              t._v(" "),
              s("div", {
                staticClass: "top-overlapping",
                class: t.isMenuOpened ? "visible" : ""
              })
            ],
            1
          );
        },
        wt = [],
        Ct = { render: yt, staticRenderFns: wt },
        bt = Ct,
        xt = i("VU/8"),
        $t = a,
        St = xt(_t, bt, !1, $t, null, null),
        kt = St.exports,
        Pt = {
          name: "socials",
          props: { socialsMenu: { default: !1, type: Boolean } }
        },
        Tt = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              ref: "socials",
              staticClass: "socials",
              class: { "menu-socials": t.socialsMenu }
            },
            [
              i(
                "a",
                {
                  staticClass: "socials__twitter",
                  attrs: {
                    href: "https://twitter.com/polugar/media",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Twitter"
                  }
                },
                [
                  i("div", { staticClass: "socials__circle" }),
                  t._v(" "),
                  i(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "60",
                        height: "57",
                        viewBox: "0 0 60 57"
                      }
                    },
                    [
                      i(
                        "g",
                        { attrs: { fill: "none", "fill-rule": "evenodd" } },
                        [
                          i("path", {
                            attrs: {
                              "fill-rule": "nonzero",
                              stroke: "#D09046",
                              d:
                                "M38.455 25.23l.007.274c0 6.377-5.029 11.996-12.173 11.996-2.354 0-4.61-.665-6.556-1.895l-1.833-1.16 2.155.24c.312.035.62.052.924.052 1.336 0 2.62-.331 3.752-.946a4.577 4.577 0 0 1-2.964-2.932l-.264-.81.42.083a4.515 4.515 0 0 1-1.618-3.457v-.893l.737.403a4.491 4.491 0 0 1-.078-4.702l.362-.61.453.547a11.199 11.199 0 0 0 7.48 3.994 4.59 4.59 0 0 1-.016-.374c0-2.509 2.063-4.54 4.603-4.54 1.19 0 2.31.447 3.154 1.232a7.848 7.848 0 0 0 2.196-.869l1.134-.66-.407 1.248a4.51 4.51 0 0 1-.58 1.166c.154-.056.307-.117.457-.182l1.582-.69-.968 1.428a8.63 8.63 0 0 1-1.96 2.058z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]
              ),
              t._v(" "),
              i(
                "a",
                {
                  staticClass: "socials__facebook",
                  attrs: {
                    href: "https://www.facebook.com/polugar.world",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Facebook"
                  }
                },
                [
                  i("div", { staticClass: "socials__circle" }),
                  t._v(" "),
                  i(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "60",
                        height: "57",
                        viewBox: "0 0 60 57"
                      }
                    },
                    [
                      i(
                        "g",
                        { attrs: { fill: "none", "fill-rule": "evenodd" } },
                        [
                          i("path", {
                            attrs: {
                              stroke: "#D09046",
                              d:
                                "M31.985 38v-9.501h2.662L35 25.225h-3.015l.004-1.639c0-.854.082-1.311 1.328-1.311h1.664V19h-2.663c-3.198 0-4.324 1.588-4.324 4.26v1.965H26V28.5h1.994V38h3.99z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]
              ),
              t._v(" "),
              i(
                "a",
                {
                  staticClass: "socials__instagram",
                  attrs: {
                    href: "https://www.instagram.com/polugarofficial",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Instagram"
                  }
                },
                [
                  i("div", { staticClass: "socials__circle" }),
                  t._v(" "),
                  i(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "60",
                        height: "57",
                        viewBox: "0 0 60 57"
                      }
                    },
                    [
                      i(
                        "g",
                        { attrs: { fill: "none", "fill-rule": "evenodd" } },
                        [
                          i(
                            "g",
                            {
                              attrs: {
                                "fill-rule": "nonzero",
                                transform: "translate(20 19)"
                              }
                            },
                            [
                              i("path", {
                                attrs: {
                                  stroke: "#D09046",
                                  d:
                                    "M19.474 3.447a4.887 4.887 0 0 0-1.151-1.77 4.887 4.887 0 0 0-1.77-1.151C15.92.278 15.185.108 14.127.062 13.06.015 12.72 0 10 0 7.28 0 6.94.008 5.873.062 4.807.108 4.08.278 3.447.526a4.887 4.887 0 0 0-1.77 1.151 4.887 4.887 0 0 0-1.151 1.77C.278 4.08.108 4.815.062 5.873.015 6.94 0 7.28 0 10c0 2.72.008 3.06.062 4.127.046 1.066.216 1.793.464 2.426a4.887 4.887 0 0 0 1.151 1.77 4.887 4.887 0 0 0 1.77 1.151c.633.248 1.368.418 2.426.464C6.94 19.985 7.28 20 10 20c2.72 0 3.06-.008 4.127-.062 1.066-.046 1.793-.216 2.426-.464a4.887 4.887 0 0 0 1.77-1.151 4.887 4.887 0 0 0 1.151-1.77c.248-.633.418-1.368.464-2.426C19.985 13.06 20 12.72 20 10c0-2.72-.008-3.06-.062-4.127-.046-1.066-.216-1.793-.464-2.426z"
                                }
                              }),
                              t._v(" "),
                              i("path", {
                                attrs: {
                                  stroke: "#D09046",
                                  d:
                                    "M10 6c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4z"
                                }
                              }),
                              t._v(" "),
                              i("circle", {
                                attrs: {
                                  cx: "15",
                                  cy: "4",
                                  r: "1",
                                  fill: "#D09046"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          );
        },
        Bt = [],
        Mt = { render: Tt, staticRenderFns: Bt },
        At = Mt,
        It = i("VU/8"),
        Dt = r,
        Et = It(Pt, At, !1, Dt, null, null),
        Lt = Et.exports,
        Ot = {
          name: "main-menu",
          components: { Socials: Lt },
          props: { filtersCollapsed: Boolean, isMenuOpened: Boolean },
          data: function() {
            return {
              activeSlide: null,
              menuItems: [],
              isChangeColor: !1,
              isFullscreenGallery: !1,
              isTransition: !0,
              iconState: {
                initialData: 125,
                menuOpenedData: null,
                filterCollapsedData: null
              }
            };
          },
          watch: {
            $route: function() {
              this.getAnimationData();
            },
            isMenuOpened: function(t) {
              this.animateOnMenuToggle(t);
            },
            filtersCollapsed: function(t) {
              this.animateOnFilterCollapsedToggle(t);
            }
          },
          mounted: function() {
            this.onToggleElementsTransition(), this.getAnimationData();
          },
          created: function() {
            window.addEventListener("resize", this.onResize),
              W.$on("isFullscreenGallery", this.onToggleFullscreenGallery),
              W.$on("activeSlide", this.onToggleActiveSlide);
          },
          destroyed: function() {
            window.removeEventListener("resize", this.onResize);
          },
          methods: {
            getAnimationData: function() {
              var t = this.$refs.wherebuy
                  ? getComputedStyle(this.$refs.wherebuy).marginTop.replace(
                      /[^0-9\-.,]/g,
                      ""
                    )
                  : 0,
                e = document.documentElement.clientHeight;
              this.iconState = {
                initialData: 125,
                menuOpenedData: 0.4 * e - t - 13.5,
                filterCollapsedData: 25
              };
            },
            animateOnMenuToggle: function(t) {
              var e = this.$store.windowWidth >= 1024,
                i = this.iconState,
                s = this.filtersCollapsed;
              N.a.to(this.$refs.wherebuy, 0, {
                y:
                  t && e
                    ? i.menuOpenedData
                    : !t && s
                    ? i.filterCollapsedData
                    : i.initialData
              });
            },
            animateOnFilterCollapsedToggle: function(t) {
              this.isMenuOpened ||
                N.a.to(this.$refs.wherebuy, 0, {
                  y: t
                    ? this.iconState.filterCollapsedData
                    : this.iconState.initialData
                });
            },
            onChangeColorIn: function() {
              this.isChangeColor = !0;
            },
            onChangeColorOut: function() {
              this.isChangeColor = !1;
            },
            onToggleActiveSlide: function(t) {
              this.activeSlide = t;
            },
            onToggleMenu: function() {
              W.$emit("onToggleMenu");
            },
            onToggleFullscreenGallery: function(t) {
              this.isFullscreenGallery = t;
            },
            onToggleElementsTransition: function() {
              var t = this;
              (this.isTransition = !1),
                setTimeout(function() {
                  t.isTransition = !0;
                }, 1e3);
            },
            onResize: function() {
              this.getAnimationData(),
                this.onToggleElementsTransition(),
                this.animateOnMenuToggle(this.isMenuOpened),
                this.animateOnFilterCollapsedToggle(this.filtersCollapsed);
            }
          }
        },
        Rt = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "navigation" }, [
            i(
              "div",
              {
                ref: "menu",
                staticClass: "menu-button-wrapper",
                class: { invisible: !t.$store.adult },
                style: { "z-index": 2 === t.activeSlide ? 2019 : "" },
                on: { click: t.onToggleMenu }
              },
              [
                i(
                  "div",
                  { staticClass: "menu-button" },
                  t._l(3, function(t, e) {
                    return i("span", { key: e });
                  })
                )
              ]
            ),
            t._v(" "),
            i(
              "p",
              {
                directives: [
                  {
                    name: "wave",
                    rawName: "v-wave",
                    value: { hover: t.$refs.menu },
                    expression: "{ hover: $refs.menu }"
                  }
                ],
                staticClass: "menu-button__text wave-animation-text",
                style: {
                  "transition-delay": t.isMenuOpened ? "" : "0ms, 600ms"
                }
              },
              [t._v("Menu")]
            ),
            t._v(" "),
            i(
              "p",
              {
                directives: [
                  {
                    name: "wave",
                    rawName: "v-wave",
                    value: { trigger: t.isMenuOpened },
                    expression: "{ trigger: isMenuOpened }"
                  }
                ],
                ref: "menuClosed",
                staticClass:
                  "menu-button__text menu-button__text-closed wave-animation-text",
                on: { click: t.onToggleMenu }
              },
              [t._v("Close")]
            ),
            t._v(" "),
            i(
              "div",
              {
                staticClass: "menu",
                style: { "z-index": 2 === t.activeSlide ? 2018 : "" },
                on: { click: t.onToggleMenu }
              },
              [
                i(
                  "div",
                  { staticClass: "menu__list" },
                  [
                    i("ul", { staticClass: "menu__list-block" }, [
                      i(
                        "li",
                        { staticClass: "menu__items" },
                        [
                          i(
                            "router-link",
                            {
                              directives: [
                                { name: "split", rawName: "v-split" }
                              ],
                              staticClass: "menu__items-link",
                              attrs: {
                                to: {
                                  name: "contacts",
                                  query: {
                                    contacts: t.$store.contacts.length
                                      ? t.$store.contacts[0].alias
                                      : void 0
                                  }
                                }
                              }
                            },
                            [t._v("Contacts")]
                          )
                        ],
                        1
                      ),
                      t._v(" "),
                      i(
                        "li",
                        { staticClass: "menu__items" },
                        [
                          i(
                            "router-link",
                            {
                              directives: [
                                { name: "split", rawName: "v-split" }
                              ],
                              staticClass: "menu__items-link",
                              attrs: { to: { name: "history" } }
                            },
                            [t._v("History")]
                          )
                        ],
                        1
                      ),
                      t._v(" "),
                      i(
                        "li",
                        { staticClass: "menu__items" },
                        [
                          i(
                            "router-link",
                            {
                              directives: [
                                { name: "split", rawName: "v-split" }
                              ],
                              staticClass: "menu__items-link",
                              attrs: { to: { name: "downloads" } }
                            },
                            [t._v("Downloads")]
                          )
                        ],
                        1
                      ),
                      t._v(" "),
                      i(
                        "li",
                        { staticClass: "menu__items menu__items-map-mobile" },
                        [
                          i(
                            "router-link",
                            {
                              directives: [
                                { name: "split", rawName: "v-split" }
                              ],
                              staticClass: "menu__items-link",
                              attrs: { to: { name: "wheretobuy" } }
                            },
                            [t._v("Where to buy")]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(" "),
                    i("ul", { staticClass: "menu__list-block" }, [
                      i(
                        "li",
                        { staticClass: "menu__items" },
                        [
                          i(
                            "router-link",
                            {
                              directives: [
                                { name: "split", rawName: "v-split" }
                              ],
                              staticClass: "menu__items-link",
                              attrs: {
                                to: {
                                  name: "collections",
                                  query: {
                                    collection: t.$store.collections.length
                                      ? t.$store.collections[0].alias
                                      : void 0
                                  }
                                }
                              }
                            },
                            [t._v("Collections")]
                          ),
                          t._v(" "),
                          i(
                            "ul",
                            { staticClass: "menu__sub-list" },
                            t._l(t.$store.collections, function(e, s) {
                              return i(
                                "li",
                                { key: s, staticClass: "menu__sub-items" },
                                [
                                  i("router-link", {
                                    directives: [
                                      { name: "split", rawName: "v-split" }
                                    ],
                                    attrs: {
                                      to: {
                                        name: "collections",
                                        query: { collection: e.alias }
                                      }
                                    },
                                    domProps: { textContent: t._s(e.name) }
                                  })
                                ],
                                1
                              );
                            })
                          )
                        ],
                        1
                      ),
                      t._v(" "),
                      i(
                        "li",
                        { staticClass: "menu__items" },
                        [
                          i(
                            "router-link",
                            {
                              directives: [
                                { name: "split", rawName: "v-split" }
                              ],
                              staticClass: "menu__items-link",
                              attrs: {
                                to: {
                                  name: "inspirations",
                                  query: {
                                    category: t.$store.inspirations.length
                                      ? t.$store.inspirations[0].alias
                                      : void 0
                                  }
                                }
                              }
                            },
                            [t._v("Inspirations")]
                          )
                        ],
                        1
                      )
                    ]),
                    t._v(" "),
                    i("socials", { attrs: { socialsMenu: !0 } })
                  ],
                  1
                ),
                t._v(" "),
                i(
                  "div",
                  {
                    staticClass: "menu__items menu__items-map",
                    on: {
                      mouseenter: t.onChangeColorIn,
                      mouseleave: t.onChangeColorOut
                    }
                  },
                  [
                    i(
                      "router-link",
                      {
                        directives: [{ name: "split", rawName: "v-split" }],
                        attrs: { to: { name: "wheretobuy" } }
                      },
                      [t._v("Where to buy")]
                    )
                  ],
                  1
                )
              ]
            ),
            t._v(" "),
            i(
              "div",
              {
                ref: "wherebuy",
                staticClass: "button-where-buy",
                class: { "no-transition": !t.isTransition || "" },
                style: {
                  "margin-right":
                    "calc(" +
                    (t.$store.windowWidth < 1024 ? 3 : 2) +
                    "% + " +
                    t.$store.scrollBarWidth +
                    "px)",
                  "z-index": 2 === t.activeSlide ? 2019 : ""
                }
              },
              [
                i(
                  "router-link",
                  {
                    directives: [
                      {
                        name: "wave",
                        rawName: "v-wave",
                        value: {
                          hover:
                            t.$store.windowWidth > 1024
                              ? t.$refs.wherebuy
                              : null
                        },
                        expression:
                          "{ hover: $store.windowWidth > 1024 ? $refs.wherebuy : null }"
                      }
                    ],
                    staticClass: "button-where-buy__text wave-animation-text",
                    attrs: { to: { name: "wheretobuy" } }
                  },
                  [t._v("Where to buy")]
                ),
                t._v(" "),
                i("router-link", { attrs: { to: { name: "wheretobuy" } } }, [
                  i(
                    "svg",
                    {
                      class: [t.isChangeColor && "change-color"],
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "22",
                        height: "28",
                        viewBox: "0 0 22 28"
                      }
                    },
                    [
                      i(
                        "g",
                        {
                          attrs: {
                            fill: "none",
                            "fill-rule": "evenodd",
                            stroke: "#d09046",
                            transform: "translate(1 1)"
                          }
                        },
                        [
                          i("path", {
                            attrs: {
                              d:
                                "M10 26.667C16.667 19.237 20 13.682 20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 3.682 3.333 9.237 10 16.667z"
                            }
                          }),
                          t._v(" "),
                          i("circle", {
                            attrs: { cx: "10", cy: "10", r: "2.833" }
                          })
                        ]
                      )
                    ]
                  )
                ])
              ],
              1
            )
          ]);
        },
        Ft = [],
        zt = { render: Rt, staticRenderFns: Ft },
        Wt = zt,
        Vt = i("VU/8"),
        Nt = l,
        Ht = Vt(Ot, Wt, !1, Nt, null, null),
        Gt = Ht.exports,
        Yt = {
          name: "pattern-svg",
          props: {
            isDraw: Boolean,
            active: { type: Boolean, default: !0 },
            transitionDuration: { type: Number, default: 1 },
            hover: Boolean
          },
          watch: {
            isDraw: function(t) {
              this.drawPattern(t);
            },
            active: function(t) {
              this.drawPattern(t);
            }
          },
          mounted: function() {
            this.hover || this.drawPattern(!0), this.setPatternAnimation();
          },
          methods: {
            drawPattern: function(t) {
              var e = this.$refs.galleryPattern,
                i = e && e.querySelectorAll("path:not(.brush)"),
                s = e && e.querySelectorAll("path.brush");
              if (!this.active)
                return (
                  e && N.a.set(e, { opacity: 0 }),
                  i && N.a.set(i, { drawSVG: 0, ease: "Power1.easeInOut" }),
                  void (s && N.a.set(s, { opacity: 0 }))
                );
              t
                ? (e && N.a.fromTo(e, 0, { opacity: 0 }, { opacity: 1 }),
                  i &&
                    N.a.fromTo(
                      i,
                      2,
                      { drawSVG: 0 },
                      { drawSVG: "100%", ease: "Power1.easeInOut" }
                    ),
                  s &&
                    N.a.fromTo(
                      s,
                      1,
                      { opacity: 0 },
                      { opacity: 1, delay: 1.3 }
                    ))
                : (e && N.a.to(e, 1, { opacity: 0 }),
                  i &&
                    N.a.to(i, this.transitionDuration, {
                      drawSVG: 0,
                      ease: "Power1.easeInOut"
                    }),
                  s && N.a.to(s, 1, { opacity: 0 }));
            },
            setPatternAnimation: function() {
              var t = this,
                e = this.$refs.galleryPattern.parentNode;
              !this.$store.supportsTouch &&
                this.hover &&
                ((e.onmouseenter = function() {
                  return t.drawPattern(!0);
                }),
                (e.onmouseleave = function() {
                  return t.drawPattern(!1);
                }));
            }
          }
        },
        qt = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "svg",
            {
              ref: "galleryPattern",
              staticClass: "pattern",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1105",
                height: "728",
                viewBox: "0 0 1105 728"
              }
            },
            [
              i(
                "g",
                {
                  attrs: { fill: "none", "fill-rule": "evenodd", opacity: ".7" }
                },
                [
                  i("g", { attrs: { opacity: ".7" } }, [
                    i("path", {
                      attrs: {
                        stroke: "#BB812B",
                        "stroke-width": ".75",
                        d:
                          "M790.157 277.78s95.448-140.677 25.89-201.214c-65.5-57.063-159.304 7.048-125.588 117.986 28.884 95.007 60.378 212.8 88.587 278.84 35.36 82.94 34.586 263.49-115.542 253.353-128.1-8.593-124.623-213.476-33.62-225.642 68.302-9.075 98.057 36.014 105.593 74.538 13.33 67.49-37.677 123.2-99.602 108.43"
                      }
                    }),
                    t._v(" "),
                    i("path", {
                      staticClass: "brush",
                      attrs: {
                        fill: "#BB812B",
                        "fill-rule": "nonzero",
                        d:
                          "M791.896 275.56s-2.512 5.888-4.444 8.11c-2.8 3.185-5.99 1.64-5.023-.677 1.06-2.414 6.278-2.993 8.597-7.145.676-.965-.097.966.87-.29zM638.58 684.938s-6.57-.676-9.274-1.738c-3.96-1.64-3.38-5.117-.87-4.828 2.706.29 4.735 5.02 9.565 5.89 1.257.386-.868.097.58.676z"
                      }
                    })
                  ]),
                  t._v(" "),
                  i("path", {
                    attrs: {
                      stroke: "#BB812B",
                      "stroke-width": ".75",
                      d:
                        "M859.714 416.91s31.01-22.496 20.77-66.524c-12.75-54.648-58.253-89.31-122.883-81.876-62.6 7.242-95.157 78.593-75.45 159.407 19.708 80.814 101.438 127.062 186.742 99.45 92.067-29.836 119.986-170.415 55.55-256.057-62.12-82.55-138.922-84.386-157.664-35.144-12.075 31.862-2.415 86.606 63.858 194.262 0 0 75.16 133.24 16.906 199.186-59.993 67.78-180.56 31.572-161.624-71.16"
                    }
                  }),
                  t._v(" "),
                  i("path", {
                    staticClass: "brush",
                    attrs: {
                      fill: "#BB812B",
                      "fill-rule": "nonzero",
                      d:
                        "M863.096 413.724s-3.67 5.504-6.087 7.53c-3.575 2.8-7.053.967-5.604-1.157 1.546-2.22 7.632-2.22 10.724-6.18.87-.965-.29.87.966-.193zM685.145 560.966s.483-6.276 1.643-8.98c1.74-3.862 5.893-3.476 5.7-.965-.194 2.608-5.7 4.828-6.57 9.463-.29 1.062-.193-.966-.773.483z"
                    }
                  }),
                  t._v(" "),
                  i("g", { attrs: { opacity: ".4" } }, [
                    i("path", {
                      attrs: {
                        stroke: "#BB812B",
                        "stroke-width": ".75",
                        d:
                          "M829.863 163.172s16.81-68.55-39.61-91.917c-38.255-15.834-68.3 7.242-68.3 7.242"
                      }
                    }),
                    t._v(" "),
                    i("path", {
                      staticClass: "brush",
                      attrs: {
                        fill: "#BB812B",
                        "fill-rule": "nonzero",
                        d:
                          "M831.215 157.572s-.386 6.18-1.256 8.787c-1.45 3.764-4.83 3.378-4.638.964.194-2.51 4.637-4.73 5.41-9.27.097-1.06-.096.87.483-.482zM729.488 73.96s-5.893 1.93-8.212 3.474c-3.284 2.318-2.028 5.504.194 4.732 2.415-.773 3.38-5.697 7.632-7.532 1.062-.482-.87.097.386-.675z"
                      }
                    })
                  ]),
                  t._v(" "),
                  i("g", { attrs: { opacity: ".4" } }, [
                    i("path", {
                      attrs: {
                        stroke: "#BB812B",
                        "stroke-width": ".75",
                        d:
                          "M1088.673 395.96s17.68-56.87-38.74-80.236c-38.256-15.834-62.6-2.027-62.6-2.027"
                      }
                    }),
                    t._v(" "),
                    i("path", {
                      staticClass: "brush",
                      attrs: {
                        fill: "#BB812B",
                        "fill-rule": "nonzero",
                        d:
                          "M1090.026 390.552s-.387 6.18-1.256 8.786c-1.45 3.765-4.83 3.38-4.637.965.193-2.51 4.637-4.73 5.41-9.27.096-1.06 0 .87.483-.48zM990.424 311.862s-5.893 1.93-8.212 3.476c-3.284 2.317-2.028 5.503.194 4.73 2.415-.77 3.38-5.696 7.63-7.53 1.064-.483-.77.193.388-.676z"
                      }
                    })
                  ]),
                  t._v(" "),
                  i("path", {
                    attrs: {
                      stroke: "#BB812B",
                      "stroke-width": ".75",
                      d:
                        "M730.357 209.903s7.15-18.924-6.28-24.91c-11.11-4.924-22.702 2.028-19.32 19.31 7.15 36.497 87.043 276.235 87.043 276.235s9.564 30.124 41.734 25.972c11.4-1.448 32.363-13.42 27.147-45.282",
                      opacity: ".4"
                    }
                  }),
                  t._v(" "),
                  i("path", {
                    staticClass: "brush",
                    attrs: {
                      fill: "#BB812B",
                      "fill-rule": "nonzero",
                      d:
                        "M861.453 465.09s-.193-7.05-1.16-10.042c-1.545-4.345-5.41-4.055-5.216-1.255.097 2.897 5.12 5.504 5.797 10.717.096 1.256.096-1.062.58.58zM1017.957 418.648s5.12 4.828 7.922 6.276c4.153 2.028 6.665-.965 4.636-2.8-2.125-1.93-7.535-.29-11.69-3.476-1.062-.772.58.773-.87 0zM999.312 513.27s6.666-2.318 9.854-2.415c4.637-.096 5.603 3.573 3.09 4.442-2.704.965-6.955-2.897-12.075-1.642-1.35.29.774-.483-.868-.386z"
                    }
                  }),
                  t._v(" "),
                  i("g", { attrs: { opacity: ".4" } }, [
                    i("path", {
                      attrs: {
                        stroke: "#BB812B",
                        "stroke-width": ".75",
                        d: "M761.272 673.545s-54.004 72.22-143.365 26.165"
                      }
                    }),
                    t._v(" "),
                    i("path", {
                      staticClass: "brush",
                      attrs: {
                        fill: "#BB812B",
                        "fill-rule": "nonzero",
                        d:
                          "M759.243 676.055s5.313-4.634 7.052-7.24c2.416-3.96-.29-6.663-2.318-4.83-2.126 1.932-.966 7.436-4.637 11.298-.87.87.87-.676-.097.772zM622.157 701.93s-6.762-2.027-9.467-3.668c-3.768-2.607-2.512-6.18.097-5.407 2.8.87 4.057 6.373 8.887 8.304 1.256.578-.966-.098.483.77z"
                      }
                    })
                  ]),
                  t._v(" "),
                  i("path", {
                    staticClass: "brush",
                    attrs: {
                      fill: "#BB812B",
                      "fill-rule": "nonzero",
                      d:
                        "M731.807 206.04s-1.836 6.857-3.478 9.56c-2.513 3.862-6.184 2.703-5.41 0 .772-2.8 6.278-4.152 8.114-9.172.483-1.16-.097 1.062.773-.387zM662.926 50.4s-2.126-6.76-2.126-9.848c0-4.635 3.768-5.504 4.54-2.897.87 2.8-3.09 6.855-1.93 12.07.192 1.06-.484-1.063-.484.675zM671.137 195.807s2.802 6.47 4.83 8.883c2.996 3.476 6.473 1.738 5.314-.773-1.158-2.607-6.858-3.186-9.37-7.82-.58-1.063.29.965-.773-.29z"
                    }
                  }),
                  t._v(" "),
                  i("path", {
                    attrs: {
                      stroke: "#BB812B",
                      "stroke-width": ".75",
                      d:
                        "M673.842 200.345S601.772 71.64 652.106 13.807c19.61-21.917 57.867-15.835 57.578 17.283-.387 35.917-50.14 34.372-47.145 12.938",
                      opacity: ".4"
                    }
                  }),
                  t._v(" "),
                  i("path", {
                    attrs: {
                      stroke: "#BB812B",
                      "stroke-width": ".75",
                      d:
                        "M1023.367 422.124s-42.12-28.193-26.374-36.593c13.718-7.24 18.84 30.03.58 38.332-41.348 18.73-76.803-93.752-12.173-120.593 103.563-42.967 151.674 77.337 93.806 128.123-52.458 46.055-225.48 99.255-247.025 155.352 0 0-19.706 53.78 28.404 65.752 47.917 11.972 63.084-41.807 41.734-56-21.253-14.194-35.55 11.393-22.896 24.04 0 0 23.38-87.378 124.43-108.04",
                      opacity: ".2"
                    }
                  }),
                  t._v(" "),
                  i("g", [
                    i("g", { attrs: { opacity: ".7" } }, [
                      i("path", {
                        attrs: {
                          stroke: "#BB812B",
                          "stroke-width": ".75",
                          d:
                            "M315.166 277.78s-95.447-140.677-25.89-201.214c65.5-57.063 159.305 7.048 125.59 117.986-28.887 95.007-60.38 212.8-88.59 278.84-35.358 82.94-34.585 263.49 115.542 253.353 128.1-8.593 124.624-213.476 33.62-225.642-68.302-9.075-98.057 36.014-105.592 74.538-13.332 67.49 37.677 123.2 99.602 108.43"
                        }
                      }),
                      t._v(" "),
                      i("path", {
                        staticClass: "brush",
                        attrs: {
                          fill: "#BB812B",
                          "fill-rule": "nonzero",
                          d:
                            "M313.428 275.56s2.51 5.888 4.443 8.11c2.803 3.185 5.99 1.64 5.025-.677-1.063-2.414-6.28-2.993-8.598-7.145-.676-.965.097.966-.87-.29zM466.743 684.938s6.57-.676 9.274-1.738c3.96-1.64 3.382-5.117.87-4.828-2.705.29-4.734 5.02-9.564 5.89-1.256.386.87.097-.58.676z"
                        }
                      })
                    ]),
                    t._v(" "),
                    i("path", {
                      attrs: {
                        stroke: "#BB812B",
                        "stroke-width": ".75",
                        d:
                          "M245.513 416.91s-31.01-22.496-20.77-66.524c12.75-54.648 58.253-89.31 122.883-81.876 62.602 7.242 95.158 78.593 75.45 159.407-19.707 80.814-101.437 127.062-186.74 99.45-92.068-29.836-119.987-170.415-55.55-256.057 62.118-82.55 138.92-84.386 157.663-35.144 12.075 31.862 2.414 86.606-63.86 194.262 0 0-75.16 133.24-16.905 199.186 59.993 67.78 180.56 31.572 161.624-71.16"
                      }
                    }),
                    t._v(" "),
                    i("path", {
                      staticClass: "brush",
                      attrs: {
                        fill: "#BB812B",
                        "fill-rule": "nonzero",
                        d:
                          "M242.13 413.724s3.673 5.504 6.088 7.53c3.574 2.8 7.052.967 5.603-1.157-1.545-2.22-7.63-2.22-10.722-6.18-.773-.965.386.87-.967-.193zM420.178 560.966s-.483-6.276-1.642-8.98c-1.74-3.862-5.893-3.476-5.7-.965.193 2.608 5.7 4.828 6.57 9.463.29 1.062.096-.966.772.483z"
                      }
                    }),
                    t._v(" "),
                    i("g", { attrs: { opacity: ".4" } }, [
                      i("path", {
                        attrs: {
                          stroke: "#BB812B",
                          "stroke-width": ".75",
                          d:
                            "M275.46 163.172s-16.81-68.55 39.61-91.917c38.256-15.834 68.3 7.242 68.3 7.242"
                        }
                      }),
                      t._v(" "),
                      i("path", {
                        staticClass: "brush",
                        attrs: {
                          fill: "#BB812B",
                          "fill-rule": "nonzero",
                          d:
                            "M274.108 157.572s.387 6.18 1.256 8.787c1.45 3.764 4.83 3.378 4.637.964-.192-2.51-4.636-4.73-5.41-9.27-.095-1.06 0 .87-.482-.482zM375.836 73.96s5.893 1.93 8.21 3.474c3.286 2.318 2.03 5.504-.192 4.732-2.415-.773-3.38-5.697-7.632-7.532-1.063-.482.87.097-.386-.675z"
                        }
                      })
                    ]),
                    t._v(" "),
                    i("g", { attrs: { opacity: ".4" } }, [
                      i("path", {
                        attrs: {
                          stroke: "#BB812B",
                          "stroke-width": ".75",
                          d:
                            "M16.65 395.96s-17.68-56.87 38.74-80.236c38.256-15.834 62.6-2.027 62.6-2.027"
                        }
                      }),
                      t._v(" "),
                      i("path", {
                        staticClass: "brush",
                        attrs: {
                          fill: "#BB812B",
                          "fill-rule": "nonzero",
                          d:
                            "M15.298 390.552s.386 6.18 1.256 8.786c1.45 3.765 4.83 3.38 4.637.965-.192-2.51-4.636-4.73-5.41-9.27-.096-1.06 0 .87-.482-.48zM114.803 311.862s5.893 1.93 8.212 3.476c3.284 2.317 2.03 5.503-.193 4.73-2.416-.77-3.382-5.696-7.632-7.53-.966-.483.87.193-.387-.676z"
                        }
                      })
                    ]),
                    t._v(" "),
                    i("path", {
                      attrs: {
                        stroke: "#BB812B",
                        "stroke-width": ".75",
                        d:
                          "M374.966 209.903s-7.15-18.924 6.28-24.91c11.11-4.924 22.702 2.028 19.32 19.31-7.148 36.497-87.042 276.235-87.042 276.235s-9.564 30.124-41.734 25.972c-11.4-1.448-32.364-13.42-27.147-45.282",
                        opacity: ".4"
                      }
                    }),
                    t._v(" "),
                    i("path", {
                      staticClass: "brush",
                      attrs: {
                        fill: "#BB812B",
                        "fill-rule": "nonzero",
                        d:
                          "M243.87 465.09s.194-7.05 1.16-10.042c1.545-4.345 5.41-4.055 5.216-1.255-.096 2.897-5.12 5.504-5.796 10.717-.193 1.256-.097-1.062-.58.58zM87.367 418.648s-5.12 4.828-7.922 6.276c-4.154 2.028-6.666-.965-4.637-2.8 2.125-1.93 7.535-.29 11.69-3.476 1.062-.772-.58.773.87 0zM106.012 513.27s-6.666-2.318-9.854-2.415c-4.637-.096-5.603 3.573-3.09 4.442 2.704.965 6.954-2.897 12.075-1.642 1.352.29-.87-.483.87-.386z"
                      }
                    }),
                    t._v(" "),
                    i("g", { attrs: { opacity: ".4" } }, [
                      i("path", {
                        attrs: {
                          stroke: "#BB812B",
                          "stroke-width": ".75",
                          d: "M344.052 673.545s54.003 72.22 143.365 26.165"
                        }
                      }),
                      t._v(" "),
                      i("path", {
                        staticClass: "brush",
                        attrs: {
                          fill: "#BB812B",
                          "fill-rule": "nonzero",
                          d:
                            "M345.984 676.055s-5.313-4.634-7.052-7.24c-2.415-3.96.29-6.663 2.318-4.83 2.126 1.932.966 7.436 4.637 11.298.967.87-.772-.676.097.772zM483.166 701.93s6.763-2.027 9.468-3.668c3.767-2.607 2.512-6.18-.097-5.407-2.8.87-4.057 6.373-8.888 8.304-1.257.578.965-.098-.484.77z"
                        }
                      })
                    ]),
                    t._v(" "),
                    i("path", {
                      staticClass: "brush",
                      attrs: {
                        fill: "#BB812B",
                        "fill-rule": "nonzero",
                        d:
                          "M373.517 206.04s1.836 6.857 3.478 9.56c2.512 3.862 6.183 2.703 5.41 0-.773-2.8-6.28-4.152-8.115-9.172-.483-1.16.097 1.062-.773-.387zM442.398 50.4s2.125-6.76 2.125-9.848c0-4.635-3.767-5.504-4.54-2.897-.87 2.8 3.09 6.855 1.932 12.07-.193 1.06.483-1.063.483.675zM434.186 195.807s-2.8 6.47-4.83 8.883c-2.995 3.476-6.473 1.738-5.313-.773 1.16-2.607 6.86-3.186 9.37-7.82.58-1.063-.29.965.773-.29z"
                      }
                    }),
                    t._v(" "),
                    i("path", {
                      attrs: {
                        stroke: "#BB812B",
                        "stroke-width": ".75",
                        d:
                          "M431.48 200.345S503.55 71.64 453.22 13.807C433.608-8.11 395.35-2.028 395.64 31.09c.387 35.917 50.14 34.372 47.144 12.938",
                        opacity: ".4"
                      }
                    }),
                    t._v(" "),
                    i("path", {
                      attrs: {
                        stroke: "#BB812B",
                        "stroke-width": ".75",
                        d:
                          "M81.957 422.124s42.12-28.193 26.374-36.593c-13.718-7.24-18.838 30.03-.58 38.332 41.35 18.73 76.804-93.752 12.173-120.593C16.457 260.302-31.75 380.606 26.118 431.392c52.458 46.055 225.48 99.255 247.024 155.352 0 0 19.708 53.78-28.402 65.752-47.917 11.972-63.085-41.807-41.734-56 21.253-14.194 35.55 11.393 22.895 24.04 0 0-23.377-87.378-124.43-108.04",
                        opacity: ".2"
                      }
                    })
                  ])
                ]
              )
            ]
          );
        },
        jt = [],
        Ut = { render: qt, staticRenderFns: jt },
        Xt = Ut,
        Kt = i("VU/8"),
        Qt = c,
        Zt = Kt(Yt, Xt, !1, Qt, null, null),
        Jt = Zt.exports,
        te = {
          name: "age-disclaimer",
          components: { PatternSvg: Jt, Socials: Lt },
          data: function() {
            return { animate: !1 };
          },
          methods: {
            onProceedButtonClick: function() {
              var t = this;
              (this.animate = !0),
                setTimeout(function() {
                  return t.$store.setAdult();
                }, 1500),
                setTimeout(function() {
                  return (t.animate = null);
                }, 2200);
            }
          }
        },
        ee = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.$store.adult || null === t.animate
            ? t._e()
            : i(
                "div",
                { staticClass: "disclaimer", class: { animate: t.animate } },
                [
                  t._m(0),
                  t._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "button-submit",
                      on: { click: t.onProceedButtonClick }
                    },
                    [
                      i("div", { staticClass: "animation-border" }),
                      t._v(" "),
                      i("p", [t._v("Yes")])
                    ]
                  ),
                  t._v(" "),
                  i("socials"),
                  t._v(" "),
                  i("pattern-svg", {
                    attrs: { "is-draw": !t.animate, "transition-duration": 1.5 }
                  })
                ],
                1
              );
        },
        ie = [
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("h2", [
              t._v("\n    Are you of legal\n    "),
              i("br"),
              t._v("drinking age?\n  ")
            ]);
          }
        ],
        se = { render: ee, staticRenderFns: ie },
        ne = se,
        oe = i("VU/8"),
        ae = d,
        re = oe(te, ne, !1, ae, "data-v-1d707fba", null),
        le = re.exports,
        ce = {
          name: "app",
          components: {
            Borders: J,
            Fade: lt,
            Gradient: mt,
            Logotype: kt,
            MainMenu: Gt,
            AgeDisclaimer: le
          },
          data: function() {
            return {
              activeSlide: null,
              bodyHeight: document.body.offsetHeight,
              customClasses: [],
              filtersCollapsed: !1,
              isBorderBottomOff: !1,
              dropdownIsOpened: !1,
              isMenuOpened: !1,
              positionTopBorder: 0,
              preventTransition: !1,
              scrollTop: null,
              windowHeight: window.innerHeight
            };
          },
          computed: {
            setLightPinkTheme: function() {
              return (
                this.isMenuOpened ||
                (this.$route.meta.pinkTheme && 2 !== this.activeSlide)
              );
            }
          },
          watch: {
            setLightPinkTheme: function(t) {
              this.setTheme(t);
            },
            $route: function() {
              this.borderBottomDisplayOff(),
                (this.customClasses = []),
                (this.filtersCollapsed = !1),
                (this.dropdownIsOpened = !1),
                (this.isMenuOpened = !1),
                (this.activeSlide = null);
            },
            preventTransition: function(t) {
              document.body.style.overflowY = t ? "scroll" : "auto";
            },
            bodyHeight: function() {
              this.borderBottomDisplayOff();
            },
            filtersCollapsed: function(t) {
              this.toggleAppClass("filter-collapsed", t),
                this.isMenuOpened && (this.filtersCollapsed = !0);
            },
            isMenuOpened: function(t) {
              var e = this;
              W.$emit("isMenuOpened", t),
                t
                  ? ((this.scrollTop = Math.max(
                      window.pageYOffset,
                      document.documentElement.scrollTop,
                      document.body.scrollTop
                    )),
                    (this.$el.style.overflow = "hidden"),
                    (this.$el.style.maxHeight = "100vh"),
                    (this.$el.scrollTop = this.scrollTop))
                  : ((this.$el.style.overflow = "auto"),
                    this.$nextTick(function() {
                      (e.$el.style.overflow = ""),
                        (e.$el.style.maxHeight = ""),
                        document.body.scrollTo(0, e.scrollTop);
                    })),
                this.toggleAppClass("menu-opened", t);
            }
          },
          mounted: function() {
            this.setTheme(
              this.isMenuOpened ||
                (this.$route.meta.pinkTheme && 2 !== this.activeSlide)
            ),
              this.borderBottomDisplayOff(),
              W.$on("handleServerError", this.handleServerError),
              W.$on("isFullscreenGallery", this.onToggleFullscreenGallery),
              W.$on("getActiveSlide", this.getActiveSlide),
              W.$on("onToggleDropdownPage", this.onToggleDropdownPage),
              W.$on("onToggleMenu", this.onToggleMenu),
              W.$on("toggleAppClass", this.toggleAppClass),
              W.$on("toggleFiltersCollapsed", this.toggleFiltersCollapsed),
              W.$on("togglePreventTransition", this.togglePreventTransition),
              window.addEventListener("resize", this.onResize),
              document.body.addEventListener("scroll", this.onScroll);
          },
          destroyed: function() {
            document.body.removeEventListener("scroll", this.onScroll),
              window.removeEventListener("resize", this.onResize);
          },
          methods: {
            getActiveSlide: function(t) {
              this.activeSlide = t;
            },
            setTheme: function(t) {
              t
                ? document.body.classList.add("light-pink-theme")
                : document.body.classList.remove("light-pink-theme");
            },
            borderBottomDisplayOff: function() {
              var t = this;
              ["contacts", "history", "home", "notfound"].includes(
                this.$route.name
              )
                ? (this.isBorderBottomOff = !1)
                : setTimeout(function() {
                    (t.bodyHeight = document.body.offsetHeight),
                      (t.windowHeight = window.innerHeight),
                      (t.isBorderBottomOff = !0);
                  }, 100);
            },
            toggleAppClass: function(t, e) {
              var i = this.customClasses.indexOf(t);
              void 0 === e
                ? i >= 0
                  ? this.customClasses.splice(i, 1)
                  : this.customClasses.push(t)
                : e
                ? i < 0 && this.customClasses.push(t)
                : i >= 0 && this.customClasses.splice(i, 1);
            },
            onToggleMenu: function(t) {
              this.isMenuOpened =
                "undefined" == typeof value ? !this.isMenuOpened : !!t;
            },
            toggleFiltersCollapsed: function(t) {
              this.$route.meta &&
                this.$route.meta.filter &&
                (this.filtersCollapsed = t);
            },
            togglePreventTransition: function(t) {
              this.preventTransition = t;
            },
            onToggleDropdownPage: function(t, e) {
              (this.dropdownIsOpened =
                void 0 === t ? !this.dropdownIsOpened : !!t),
                this.toggleAppClass(e, t);
            },
            onToggleFullscreenGallery: function(t) {
              t
                ? document.body.classList.add("overflow-hidden")
                : document.body.classList.remove("overflow-hidden");
            },
            onScroll: function() {
              this.$route.meta &&
                this.$route.meta.filter &&
                this.$store.windowWidth >= 768 &&
                (this.filtersCollapsed =
                  this.$store.scrollTop > 150 || this.dropdownIsOpened);
            },
            handleServerError: function(t) {
              console.error(t);
            }
          }
        },
        de = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              class: [
                "page-" + t.$route.name,
                { "border-bottom-off": t.isBorderBottomOff || "" },
                t.customClasses
              ],
              attrs: { id: "app" }
            },
            [
              i("logotype"),
              t._v(" "),
              i("main-menu", {
                attrs: {
                  isMenuOpened: t.isMenuOpened,
                  filtersCollapsed: t.filtersCollapsed || t.dropdownIsOpened
                }
              }),
              t._v(" "),
              i("borders", {
                attrs: {
                  isMenuOpened: t.isMenuOpened,
                  dropdownIsOpened: t.dropdownIsOpened,
                  filtersCollapsed: t.filtersCollapsed || t.dropdownIsOpened
                }
              }),
              t._v(" "),
              i("fade"),
              t._v(" "),
              i("gradient", { attrs: { main: "" } }),
              t._v(" "),
              i("router-view"),
              t._v(" "),
              i("age-disclaimer")
            ],
            1
          );
        },
        ue = [],
        he = { render: de, staticRenderFns: ue },
        pe = he,
        fe = i("VU/8"),
        ve = u,
        ge = fe(ce, pe, !1, ve, null, null),
        me = ge.exports,
        _e = i("/ocq"),
        ye = i("c/Tr"),
        we = i.n(ye),
        Ce = i("nxid"),
        be = i.n(Ce),
        xe = {
          name: "avatars",
          props: {
            active: Number,
            hasOtherContacts: Boolean,
            listAvatars: Array,
            playBtnDashoffset: Number,
            onClick: Function,
            otherActive: Boolean
          },
          data: function() {
            return { ready: !1, hoverIndex: null };
          },
          watch: {
            listAvatars: function() {
              var t = this;
              this.$nextTick(function() {
                t.ready = !0;
              });
            }
          }
        },
        $e = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "contacts-info__wrapper-persons" },
            [
              i("h3", [t._v("Our team")]),
              t._v(" "),
              t._l(t.listAvatars, function(e, s) {
                return i(
                  "div",
                  {
                    key: s,
                    ref: "avatars",
                    refInFor: !0,
                    staticClass: "contacts-info__person",
                    class: { active: !t.otherActive && t.active === e.index },
                    style: {
                      opacity:
                        t.hoverIndex === s ||
                        (null === t.hoverIndex && t.active !== s) ||
                        (t.otherActive && null === t.hoverIndex)
                          ? 1
                          : 0.5,
                      pointerEvents: t.otherActive ? "auto" : ""
                    },
                    on: {
                      click: function(e) {
                        t.onClick(s);
                      },
                      mouseenter: function(e) {
                        t.hoverIndex = t.$store.windowWidth >= 1024 ? s : null;
                      },
                      mouseleave: function(e) {
                        t.hoverIndex = null;
                      }
                    }
                  },
                  [
                    i(
                      "div",
                      {
                        staticClass: "contacts-info__person-avatar",
                        style: {
                          backgroundImage:
                            "url(" +
                            (e.thumb && e.thumb.length ? e.thumb : e.img) +
                            ")"
                        }
                      },
                      [
                        i("div", {
                          staticClass: "contacts-info__person-circle"
                        })
                      ]
                    ),
                    t._v(" "),
                    i(
                      "svg",
                      {
                        ref: "avatarTimer",
                        refInFor: !0,
                        staticClass: "avatar-timer",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "46",
                          height: "46",
                          viewBox: "0 0 46 46"
                        }
                      },
                      [
                        i(
                          "g",
                          {
                            attrs: {
                              fill: "none",
                              "fill-rule": "evenodd",
                              transform: "translate(1 1)"
                            }
                          },
                          [
                            t.active === e.index
                              ? i("circle", {
                                  style: {
                                    transitionDuration: "100ms",
                                    transformOriginX:
                                      t.$store.isSafari &&
                                      t.$store.windowWidth >= 1024
                                        ? "22.5px"
                                        : null
                                  },
                                  attrs: {
                                    cx: "22",
                                    cy: "22",
                                    r: "22",
                                    stroke: "#d09046",
                                    "stroke-width": "1",
                                    "stroke-dasharray": "138 138",
                                    transform: "rotate(-90) translate(-44)",
                                    "stroke-dashoffset": t.playBtnDashoffset
                                  }
                                })
                              : t._e()
                          ]
                        )
                      ]
                    ),
                    t._v(" "),
                    i("p", {
                      directives: [
                        {
                          name: "wave",
                          rawName: "v-wave",
                          value: {
                            hover: t.ready ? t.$refs.avatars[s] : void 0,
                            text: e.name
                          },
                          expression:
                            "{ hover: ready ? $refs.avatars[key] : undefined, text: person.name }"
                        }
                      ],
                      staticClass:
                        "contacts-info__person-name wave-animation-text",
                      domProps: { textContent: t._s(e.name) }
                    })
                  ]
                );
              }),
              t._v(" "),
              t.hasOtherContacts
                ? i(
                    "div",
                    {
                      ref: "other",
                      staticClass: "contacts-info__person other",
                      class: { active: "other" === t.$route.query.person },
                      on: {
                        click: function(e) {
                          t.onClick(t.active, !0);
                        }
                      }
                    },
                    [t._m(0)]
                  )
                : t._e()
            ],
            2
          );
        },
        Se = [
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "contacts-info__person-avatar" }, [
              i("div", { staticClass: "contacts-info__person-circle" }, [
                i("span"),
                t._v(" "),
                i("span"),
                t._v(" "),
                i("span")
              ])
            ]);
          }
        ],
        ke = { render: $e, staticRenderFns: Se },
        Pe = ke,
        Te = i("VU/8"),
        Be = h,
        Me = Te(xe, Pe, !1, Be, null, null),
        Ae = Me.exports,
        Ie = i("KmDb"),
        De = i.n(Ie),
        Ee = i("M4fF"),
        Le = {
          name: "follow-pattern",
          props: { active: { type: Boolean, default: !0 }, dark: Boolean },
          data: function() {
            return {
              trailLengthLimit: 25,
              vinesLength: 32,
              vinesOpacity: 0.7,
              vinesLimit: 50,
              vinesFrequency: this.$store.isSafari ? 500 : 700,
              vinesLifetime: this.$store.isFirefox ? 1e3 : 2e3,
              shadowBlur: 0,
              trailSmoothness: 50,
              backgroundColor: this.dark ? [20, 12, 7] : [248, 244, 240],
              trailColor: [187, 129, 43],
              vineColor: [187, 129, 43],
              drawVineStartDrop: !0,
              drawVineEndDrop: !0,
              frame: 0,
              trailPoints: [],
              vines: [],
              vinesTS: Date.now(),
              trailLength: 0,
              lastMouseX: -1,
              lastMouseY: -1,
              mouseSpeed: 0,
              mouseSpeedTS: Date.now(),
              mouseAcceleration: 0
            };
          },
          computed: {
            context: function() {
              return this.$refs.canvas.getContext("2d");
            }
          },
          created: function() {
            window.addEventListener("mousemove", this.onMouseMove),
              window.addEventListener("mouseleave", this.onMouseLeave);
          },
          mounted: function() {
            /MSIE|Trident/.test(window.navigator.userAgent) || this.run();
          },
          destroyed: function() {
            window.removeEventListener("mousemove", this.onMouseMove),
              window.removeEventListener("mouseleave", this.onMouseLeave);
          },
          methods: {
            run: function() {
              this.draw(), requestAnimationFrame(this.run);
            },
            draw: function() {
              (this.frame += 1),
                this.$refs.canvas &&
                  ((this.$refs.canvas.height =
                    this.$refs.canvas.clientHeight * window.devicePixelRatio),
                  (this.$refs.canvas.width =
                    this.$refs.canvas.clientWidth * window.devicePixelRatio),
                  this.context.scale(
                    window.devicePixelRatio,
                    window.devicePixelRatio
                  ),
                  this.drawCursorTrail(),
                  this.drawVines());
            },
            drawCursorTrail: function() {
              var t = this.trailPoints;
              if (!(t.length < 3)) {
                for (
                  var e = 1, i = t[0].x, s = t[0].y, n = 0;
                  e < t.length - 2;
                  e += 1
                )
                  (this.context.shadowBlur = this.shadowBlur),
                    this.context.beginPath(),
                    this.context.moveTo(i, s),
                    (i = (t[e].x + t[e + 1].x) / 2),
                    (s = (t[e].y + t[e + 1].y) / 2),
                    (n = e / t.length),
                    (this.context.strokeStyle =
                      "rgba(" + this.trailColor.join(",") + ", " + n + ")"),
                    (this.context.shadowColor = this.context.strokeStyle),
                    this.context.quadraticCurveTo(t[e].x, t[e].y, i, s),
                    this.context.stroke();
                this.context.beginPath(),
                  this.context.moveTo(i, s),
                  (this.context.strokeStyle =
                    "rgba(" + this.trailColor.join(",") + ", " + n / 1.2 + ")"),
                  this.context.quadraticCurveTo(
                    t[e].x,
                    t[e].y,
                    t[e + 1].x,
                    t[e + 1].y
                  ),
                  this.context.stroke(),
                  (this.frame % 4 == 0 || t.length >= this.trailLengthLimit) &&
                    (t.shift(), this.reduceTrailPoints());
              }
            },
            drawVines: function() {
              var t = this;
              this.vines.forEach(function(e) {
                var i = e.points;
                if (i.length) {
                  for (
                    var s = i[0].x, n = i[0].y, o = 1;
                    o < i.length - 2;
                    o += 1
                  ) {
                    var a = s,
                      r = n,
                      l =
                        (t.vinesOpacity + (t.vinesOpacity * o) / i.length) / 2;
                    if (
                      ((l *= e.opacity),
                      (s = (i[o].x + i[o + 1].x) / 2),
                      (n = (i[o].y + i[o + 1].y) / 2),
                      (t.context.shadowBlur = t.shadowBlur),
                      t.context.beginPath(),
                      t.context.moveTo(a, r),
                      (t.context.strokeStyle =
                        "rgba(" + t.vineColor.join(",") + ", " + l + ")"),
                      (t.context.shadowColor = t.context.strokeStyle),
                      (t.context.fillStyle =
                        "rgba(" +
                        t.vineColor.join(",") +
                        ", " +
                        e.opacity +
                        ")"),
                      t.drawVineStartDrop && 1 === o)
                    ) {
                      var c =
                          i[o].x -
                          (Math.cos(i[o + 1].angle) * t.vinesLength) / 4,
                        d =
                          i[o].y -
                          (Math.sin(i[o + 1].angle) * t.vinesLength) / 4,
                        u = c - (Math.sin(i[o + 1].angle) * t.vinesLength) / 4,
                        h = d - (Math.cos(i[o + 1].angle) * t.vinesLength) / 4;
                      t.context.moveTo(s, n),
                        t.context.bezierCurveTo(c, d, u, h, s, n),
                        t.context.fill();
                    } else if (t.drawVineEndDrop && o === i.length - 3) {
                      var p =
                          i[o].x +
                          (Math.cos(i[o + 2].angle) * t.vinesLength) / 2,
                        f =
                          i[o].y +
                          (Math.sin(i[o + 2].angle) * t.vinesLength) / 2;
                      t.context.bezierCurveTo(s, n, p, f, a, r),
                        t.context.fill();
                    } else t.context.quadraticCurveTo(i[o].x, i[o].y, s, n);
                    t.context.stroke();
                  }
                  e.opacity > 0 &&
                    (e.opacity = Math.max(
                      e.opacity - 1 / (t.vinesLifetime / (1e3 / 60)),
                      0
                    ));
                }
              });
            },
            addTrailPoint: function(t, e) {
              this.trailPoints.push({ x: t, y: e }),
                (this.trailLength = this.trailPoints.reduce(function(
                  t,
                  e,
                  i,
                  s
                ) {
                  return i ? t + De()(e.x - s[i - 1].x, e.y - s[i - 1].y) : 0;
                },
                0)),
                (this.trailLength = Math.round(this.trailLength)),
                this.reduceTrailPoints();
            },
            reduceTrailPoints: function() {
              var t = this.trailLengthLimit,
                e = this.trailLength,
                i = this.trailSmoothness;
              (i = e > 4 * i ? i : Math.round((e * i) / (4 * i))),
                (this.trailPoints = this.trailPoints.reduce(function(
                  e,
                  s,
                  n,
                  o
                ) {
                  if (o.length < 3 || e.length < 2 || n === o.length - 1)
                    e.push(s);
                  else {
                    var a = Math.abs(s.x - e[e.length - 1].x),
                      r = Math.abs(s.y - e[e.length - 1].y),
                      l = i / (o.length < t / 2 ? 2 : 1);
                    (a >= l || r >= l) && e.push(s);
                  }
                  return e;
                },
                []));
            },
            addVine: function(t, e) {
              var i = Date.now(),
                s = this.vinesLength,
                n = this.vinesFrequency;
              this.mouseSpeed || (this.vinesTS = i);
              var o = i - this.vinesTS >= n - n * Math.random(),
                a = this.vines.length < this.vinesLimit;
              if (this.mouseSpeed && o && a) {
                var r = [],
                  l = Math.random() - 0.5,
                  c = Math.random() * (s / 2) + s / 4,
                  d = Math.atan2(e - this.lastMouseY, t - this.lastMouseX);
                r.push({ x: this.lastMouseX, y: this.lastMouseY }),
                  r.push({ x: t + 20 * l, y: e + 20 * l, angle: d });
                for (var u = 1; u < s; u += 1) {
                  d -=
                    (l * u) / (s / 1.5) -
                    (u === s - s / 4 && d > 0 && l < -0.35 ? 2 : 0);
                  var h = r[u].x + Math.cos(d) * c,
                    p = r[u].y + Math.sin(d) * c;
                  r.push({ x: h, y: p, angle: d });
                }
                this.vines.push({ points: r, opacity: 1 }), (this.vinesTS = i);
              }
              this.vines = this.vines.filter(function(t) {
                return t.opacity > 0;
              });
            },
            calcMouseSpeed: function(t, e) {
              var i = Date.now(),
                s = i - this.mouseSpeedTS || 1,
                n = Math.abs(t - this.lastMouseX),
                o = Math.abs(e - this.lastMouseY),
                a = Math.round(n / s),
                r = Math.round(o / s);
              (this.mouseSpeed = Math.max(a, r)),
                (this.mouseAcceleration = Math.round(this.mouseSpeed / s)),
                (this.mouseSpeedTS = i);
            },
            resetMouseSpeed: Object(Ee.debounce)(function() {
              this.mouseSpeed = 0;
            }, 200),
            onMouseMove: function(t) {
              if (this.active) {
                var e = t.x,
                  i = t.y;
                this.calcMouseSpeed(e, i),
                  this.addTrailPoint(e, i),
                  this.addVine(e, i),
                  (this.lastMouseX = e),
                  (this.lastMouseY = i),
                  this.resetMouseSpeed();
              }
            },
            onMouseLeave: function() {
              this.resetMouseSpeed();
            }
          }
        },
        Oe = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("canvas", {
            ref: "canvas",
            staticClass: "follow-pattern"
          });
        },
        Re = [],
        Fe = { render: Oe, staticRenderFns: Re },
        ze = Fe,
        We = i("VU/8"),
        Ve = p,
        Ne = We(Le, ze, !1, Ve, "data-v-d6cc5b3a", null),
        He = Ne.exports,
        Ge =
          (i("oUsC"),
          i("XZHM"),
          {
            components: { Avatars: Ae, FollowPattern: He, PatternSvg: Jt },
            name: "home",
            data: function() {
              return {
                activeBottle: 1,
                activeSlide: 1,
                avatars: [],
                bottlesDraggable: null,
                imgPosition: [],
                isMenuOpened: !1,
                isSlideAnimating: !1,
                landingData: {},
                slidesCount: 2,
                wheeling: null,
                windowHeight: window.innerHeight,
                xDown: null,
                yDown: null
              };
            },
            watch: {
              activeSlide: function(t) {
                var e = this;
                (this.isSlideAnimating = !0),
                  setTimeout(function() {
                    return (e.isSlideAnimating = !1);
                  }, 1e3),
                  W.$emit("hideLogoText", 1 !== t),
                  W.$emit("activeSlide", t);
              }
            },
            mounted: function() {
              (document.body.style.backgroundColor = getComputedStyle(
                this.$el
              ).backgroundColor),
                (document.body.style.overflowY = "scroll"),
                this.getLandingData(),
                this.getContacts();
              var t = this.$refs.bottlesElement;
              (this.bottlesDraggable = be.a.create(t, {
                type: "x",
                bounds: t.parentElement,
                lockAxis: !0,
                edgeResistance: 0.75,
                dragClickables: !0,
                throwProps: !0,
                snap: this.onDraggableSnap,
                onDragEnd: this.onDraggableDragEnd
              })),
                this.onSetActiveBottle(1, !0),
                this.onResize();
            },
            created: function() {
              W.$on("isMenuOpened", this.onMenuOpened),
                W.$on("activeSlide", this.onToggleActiveSlide),
                window.addEventListener("wheel", this.onWheel),
                window.addEventListener("keydown", this.onKeydown),
                window.addEventListener("touchstart", this.onTouchstart),
                window.addEventListener("touchmove", this.onTouchmove),
                window.addEventListener("resize", this.onResize),
                window.addEventListener("resize", this.onResizeBanners);
            },
            destroyed: function() {
              (document.body.style.backgroundColor = ""),
                window.removeEventListener("wheel", this.onWheel),
                window.removeEventListener("keydown", this.onKeydown),
                window.removeEventListener("touchstart", this.onTouchstart),
                window.removeEventListener("touchmove", this.onTouchmove),
                window.removeEventListener("resize", this.onResize),
                window.removeEventListener("resize", this.onResizeBanners);
            },
            methods: {
              getLandingData: function() {
                var t = this;
                z.get("/home.json")
                  .then(function(e) {
                    (t.landingData = e.data),
                      t.landingData.bottles.forEach(function(e) {
                        t.$set(e, "currentBottle", 0);
                      }),
                      t.$nextTick(function() {
                        t.onResize();
                      });
                  })
                  .catch(function(t) {
                    console.log(t);
                  });
              },
              getContacts: function() {
                var t = this;
                z.get("/contacts.json")
                  .then(function(e) {
                    (t.avatars = we()(e.data)),
                      t.avatars.forEach(function(t, e) {
                        return (t.index = e);
                      });
                  })
                  .catch(function(t) {
                    console.warn(t);
                  });
              },
              scrollLanding: function(t) {
                var e = this;
                if (!this.wheeling && this.$store.adult && !this.isMenuOpened) {
                  var i =
                      t < 0
                        ? Math.max(this.activeSlide - 1, 1)
                        : Math.min(this.activeSlide + 1, this.slidesCount),
                    s = 1 !== this.activeSlide ? this.$refs.slide2 : null;
                  if (i !== this.activeSlide)
                    if (s && s.scrollHeight > s.clientHeight) {
                      var n =
                        i > this.activeSlide
                          ? s.scrollHeight - s.clientHeight
                          : 0;
                      s.scrollTop === n && (this.activeSlide = i);
                    } else this.activeSlide = i;
                  this.wheeling = setTimeout(function() {
                    e.wheeling = void 0;
                  }, 1500);
                }
              },
              onScrollDown: function() {
                this.activeSlide = 2;
              },
              onWheel: function(t) {
                this.scrollLanding(t.deltaY);
              },
              onKeydown: function(t) {
                switch (t.which) {
                  case 38:
                    this.scrollLanding(-1);
                    break;
                  case 40:
                    this.scrollLanding(1);
                    break;
                  default:
                    return;
                }
              },
              onTouchstart: function(t) {
                (this.xDown = t.touches[0].clientX),
                  (this.yDown = t.touches[0].clientY);
              },
              onTouchmove: function(t) {
                if (this.xDown && this.yDown) {
                  var e = this.xDown - t.touches[0].clientX,
                    i = this.yDown - t.touches[0].clientY;
                  Math.abs(e) < Math.abs(i) && this.scrollLanding(i),
                    (this.xDown = null),
                    (this.yDown = null);
                }
              },
              onResize: function() {
                this.$store.windowWidth < 1024 ||
                (1024 === this.$store.windowWidth && this.$store.supportsTouch)
                  ? this.bottlesDraggable[0].enable()
                  : (N.a.set(this.bottlesDraggable[0].target, {
                      clearProps: "x,y,zIndex"
                    }),
                    this.bottlesDraggable[0].disable()),
                  this.onSetActiveBottle(this.activeBottle, !0);
              },
              onDraggableSnap: function(t) {
                var e = this.$refs.bottlesElement.children[0].offsetWidth,
                  i =
                    (this.$refs.bottlesElement.parentElement.offsetWidth - e) /
                    2,
                  s = Math.round(t / e);
                return (
                  (s =
                    s < 0
                      ? Math.max(
                          s,
                          1 - this.$refs.bottlesElement.childElementCount
                        )
                      : 0) *
                    e +
                  i
                );
              },
              onDraggableDragEnd: function() {
                var t = this.$refs.bottlesElement.children[0].offsetWidth,
                  e =
                    (this.$refs.bottlesElement.parentElement.offsetWidth - t) /
                    2;
                this.activeBottle = Math.round(
                  (Math.abs(this.bottlesDraggable[0].endX) + e) / t
                );
              },
              onSetActiveBottle: function(t, e) {
                var i = this.$refs.bottlesElement;
                N.a.to(i, !e, {
                  x:
                    this.$store.windowWidth < 1024
                      ? -i.parentElement.offsetWidth * t
                      : 0
                }),
                  (this.activeBottle = t);
              },
              onToggleActiveSlide: function(t) {
                this.activeSlide = t;
              },
              onMenuOpened: function(t) {
                this.isMenuOpened = t;
              },
              onRouteToContacts: function(t) {
                this.$router.push({
                  name: "contacts",
                  query: { person: this.$store.contacts[t].alias }
                });
              }
            }
          }),
        Ye = function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "main",
            {
              class: ["active-slide-" + t.activeSlide],
              attrs: { role: "main" }
            },
            [
              s("follow-pattern", {
                attrs: { active: 2 === t.activeSlide, dark: !0 }
              }),
              t._v(" "),
              s(
                "div",
                {
                  staticClass: "slide-1",
                  style: {
                    "pointer-events": 1 === t.activeSlide ? "auto" : "none",
                    "z-index": 1 === t.activeSlide ? 1 : ""
                  }
                },
                [
                  t._m(0),
                  t._v(" "),
                  s(
                    "div",
                    {
                      staticClass: "scroll-button",
                      on: { click: t.onScrollDown }
                    },
                    [
                      s("span", [t._v("Our spirits")]),
                      t._v(" "),
                      s("div", { staticClass: "scroll-button__circle" })
                    ]
                  ),
                  t._v(" "),
                  s("pattern-svg", {
                    attrs: {
                      active: t.$store.adult,
                      "is-draw": 2 !== t.activeSlide
                    }
                  })
                ],
                1
              ),
              t._v(" "),
              s(
                "div",
                {
                  ref: "slide2",
                  staticClass: "slide-2",
                  class: ["active-bottle-" + t.activeBottle],
                  style: {
                    "pointer-events":
                      1 === t.activeSlide || t.isSlideAnimating ? "none" : null,
                    "overflow-y":
                      t.isSlideAnimating && t.$store.isMobile()
                        ? "hidden"
                        : null,
                    "z-index": 1 === t.activeSlide ? 0 : ""
                  }
                },
                [
                  s(
                    "ul",
                    { ref: "bottlesElement", staticClass: "bottles" },
                    t._l(t.landingData.bottles, function(e, i) {
                      return s(
                        "li",
                        { key: i },
                        [
                          s(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: i ? "collections" : "product",
                                  params: i ? null : { alias: e.alias },
                                  query: i
                                    ? { collection: e.collection_alias }
                                    : null
                                },
                                "aria-label": e.name
                              }
                            },
                            [
                              s(
                                "svg",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.isNew,
                                      expression: "bottle.isNew"
                                    }
                                  ],
                                  staticClass: "bottles__new-product-sticker",
                                  style: {
                                    opacity: (2 === t.activeSlide && "1") || ""
                                  },
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "82",
                                    height: "82",
                                    viewBox: "0 0 82 82"
                                  }
                                },
                                [
                                  s(
                                    "g",
                                    {
                                      attrs: {
                                        fill: "none",
                                        "fill-rule": "evenodd",
                                        transform: "rotate(-7 45.002 35.574)"
                                      }
                                    },
                                    [
                                      s("circle", {
                                        attrs: {
                                          cx: "40",
                                          cy: "40",
                                          r: "40",
                                          stroke: "#D09046"
                                        }
                                      }),
                                      t._v(" "),
                                      s("circle", {
                                        attrs: {
                                          cx: "40",
                                          cy: "40",
                                          r: "37",
                                          stroke: "#D09046"
                                        }
                                      }),
                                      t._v(" "),
                                      s(
                                        "text",
                                        {
                                          attrs: {
                                            fill: "#D09046",
                                            "font-family":
                                              "ModestoText-Medium, Modesto Text",
                                            "font-size": "12",
                                            "font-weight": "400",
                                            textLength: "42",
                                            "letter-spacing": "7.714"
                                          }
                                        },
                                        [
                                          s(
                                            "tspan",
                                            { attrs: { x: "19.403", y: "45" } },
                                            [t._v("NEW")]
                                          )
                                        ]
                                      ),
                                      t._v(" "),
                                      s("circle", {
                                        attrs: {
                                          cx: "39.485",
                                          cy: "14.744",
                                          r: "1.5",
                                          fill: "#D09046"
                                        }
                                      }),
                                      t._v(" "),
                                      s("circle", {
                                        attrs: {
                                          cx: "39.485",
                                          cy: "63.744",
                                          r: "1.5",
                                          fill: "#D09046"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              t._v(" "),
                              t.$store.adult || 1 === i
                                ? s("img", {
                                    class: [
                                      "bottle-" + e.volume,
                                      "collection-bottle",
                                      "bottle-visible"
                                    ],
                                    attrs: {
                                      srcset: e.images[0].img2x + " 2x",
                                      src:
                                        1 !== i || t.$store.isMobile()
                                          ? e.images[0].img
                                          : e.images[0].img2x,
                                      alt: e.name
                                    }
                                  })
                                : t._e(),
                              t._v(" "),
                              s("p", {
                                directives: [
                                  { name: "split", rawName: "v-split" }
                                ],
                                staticClass: "bottles__collection-name",
                                domProps: {
                                  textContent: t._s(
                                    e.isNew ? "New" : e.collection
                                  )
                                }
                              }),
                              t._v(" "),
                              s("p", {
                                staticClass: "bottles__name",
                                domProps: {
                                  textContent: t._s(e.name || "&nbsp;")
                                }
                              })
                            ]
                          )
                        ],
                        1
                      );
                    })
                  ),
                  t._v(" "),
                  s(
                    "div",
                    {
                      staticClass: "current-product-slider",
                      style: { opacity: (2 === t.activeSlide && 1) || "" }
                    },
                    [
                      t._l(3, function(e, i) {
                        return s(
                          "div",
                          {
                            key: i,
                            staticClass: "current-product-slider__circle",
                            class: {
                              "active-product": i === t.activeBottle || ""
                            },
                            on: {
                              click: function(e) {
                                t.onSetActiveBottle(i);
                              }
                            }
                          },
                          [
                            0 === i || 1 === i
                              ? s(
                                  "div",
                                  {
                                    staticClass:
                                      "current-product-slider__right-arrow",
                                    on: {
                                      click: function(e) {
                                        t.onSetActiveBottle(i++);
                                      }
                                    }
                                  },
                                  [
                                    s(
                                      "svg",
                                      {
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "8",
                                          height: "16",
                                          viewBox: "0 0 8 16"
                                        }
                                      },
                                      [
                                        s(
                                          "g",
                                          {
                                            attrs: {
                                              fill: "#FFF5E9",
                                              "fill-rule": "evenodd"
                                            }
                                          },
                                          [
                                            s("path", {
                                              attrs: {
                                                d:
                                                  "M.11 14.682l.708.707 7.071-7.071-.707-.707z"
                                              }
                                            }),
                                            t._v(" "),
                                            s("path", {
                                              attrs: {
                                                d:
                                                  "M.11 1.318L.819.611l7.071 7.071-.707.707z"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : t._e(),
                            t._v(" "),
                            1 === i || 2 === i
                              ? s(
                                  "div",
                                  {
                                    staticClass:
                                      "current-product-slider__left-arrow",
                                    on: {
                                      click: function(e) {
                                        t.onSetActiveBottle(i--);
                                      }
                                    }
                                  },
                                  [
                                    s(
                                      "svg",
                                      {
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "8",
                                          height: "16",
                                          viewBox: "0 0 8 16"
                                        }
                                      },
                                      [
                                        s(
                                          "g",
                                          {
                                            attrs: {
                                              fill: "#FFF5E9",
                                              "fill-rule": "evenodd"
                                            }
                                          },
                                          [
                                            s("path", {
                                              attrs: {
                                                d:
                                                  "M7.89 14.682l-.708.707L.111 8.318l.707-.707z"
                                              }
                                            }),
                                            t._v(" "),
                                            s("path", {
                                              attrs: {
                                                d:
                                                  "M7.89 1.318L7.181.611.111 7.682l.707.707z"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : t._e()
                          ]
                        );
                      }),
                      t._v(" "),
                      s("div", {
                        staticClass: "current-product-slider__x-line",
                        class: {
                          "half-line": 1 === t.activeBottle,
                          "full-line": 2 === t.activeBottle || ""
                        }
                      })
                    ],
                    2
                  ),
                  t._v(" "),
                  s(
                    "div",
                    { staticClass: "wrapper__bottles-current-product" },
                    t._l(t.landingData.bottles, function(e, i) {
                      return s(
                        "div",
                        {
                          key: i,
                          staticClass: "bottles-current-product",
                          class: {
                            active:
                              i === t.activeBottle && 2 === t.activeSlide
                                ? 1
                                : ""
                          }
                        },
                        [
                          s("p", {
                            staticClass:
                              "bottles-current-product__collection-name",
                            domProps: {
                              textContent: t._s(e.collection || "&nbsp;")
                            }
                          }),
                          t._v(" "),
                          s("p", {
                            staticClass: "bottles-current-product__name",
                            domProps: { textContent: t._s(e.name || "&nbsp;") }
                          })
                        ]
                      );
                    })
                  ),
                  t._v(" "),
                  s("div", { staticClass: "additional-links" }, [
                    t.$store.inspirations[0]
                      ? s(
                          "div",
                          { staticClass: "additional-links__recipes" },
                          [
                            s("div", {
                              staticClass: "additional-links__animation-border"
                            }),
                            t._v(" "),
                            s(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "inspirations",
                                    query: {
                                      category: t.$store.inspirations[0].alias
                                    }
                                  }
                                }
                              },
                              [
                                s("img", {
                                  attrs: { src: i("Vrma"), alt: "cocktails" }
                                }),
                                t._v(" "),
                                t.$store.inspirations[0]
                                  ? s("p", {
                                      directives: [
                                        { name: "split", rawName: "v-split" }
                                      ],
                                      staticClass: "additional-links__text",
                                      domProps: {
                                        textContent: t._s(
                                          "Cocktails inspiration"
                                        )
                                      }
                                    })
                                  : t._e()
                              ]
                            )
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    s(
                      "div",
                      { staticClass: "additional-links__contacts" },
                      [
                        s("div", {
                          staticClass: "additional-links__animation-border"
                        }),
                        t._v(" "),
                        s("router-link", {
                          attrs: {
                            to: { name: "contacts" },
                            "aria-label": "Contacts"
                          }
                        }),
                        t._v(" "),
                        s(
                          "p",
                          { staticClass: "additional-links__contacts-text" },
                          [t._v("Write to us if you have any questions:")]
                        ),
                        t._v(" "),
                        s("avatars", {
                          attrs: {
                            listAvatars: t.avatars,
                            onClick: t.onRouteToContacts
                          }
                        })
                      ],
                      1
                    ),
                    t._v(" "),
                    s(
                      "div",
                      { staticClass: "additional-links__history" },
                      [
                        s("div", {
                          staticClass: "additional-links__animation-border"
                        }),
                        t._v(" "),
                        s(
                          "router-link",
                          { attrs: { to: { name: "history" } } },
                          [
                            s("img", {
                              attrs: { src: i("SDbs"), alt: "brand history" }
                            }),
                            t._v(" "),
                            s(
                              "p",
                              {
                                directives: [
                                  { name: "split", rawName: "v-split" }
                                ],
                                staticClass: "additional-links__text"
                              },
                              [t._v("BRAND HISTORY")]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    t._v(" "),
                    s(
                      "div",
                      { staticClass: "additional-links__where-to-buy" },
                      [
                        s("div", {
                          staticClass: "additional-links__animation-border"
                        }),
                        t._v(" "),
                        s(
                          "router-link",
                          { attrs: { to: { name: "wheretobuy" } } },
                          [
                            s("img", { attrs: { src: i("XiXP"), alt: "" } }),
                            t._v(" "),
                            s(
                              "p",
                              {
                                directives: [
                                  { name: "split", rawName: "v-split" }
                                ],
                                staticClass: "additional-links__text"
                              },
                              [t._v("WHERE TO BUY")]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    t._v(" "),
                    s("span", { staticClass: "overlapping-block left" }),
                    t._v(" "),
                    s("span", { staticClass: "overlapping-block right" })
                  ])
                ]
              ),
              t._v(" "),
              s("div", {
                staticClass: "closing-border-right",
                style: { marginRight: t.$store.scrollBarWidth + "px" }
              }),
              t._v(" "),
              s("div", { staticClass: "closing-border-left" })
            ],
            1
          );
        },
        qe = [
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("h2", { staticClass: "landing-headline" }, [
              t._v("\n      First legal\n      "),
              i("span", [t._v("pot-still")]),
              t._v(" distillery of breadwine\n    ")
            ]);
          }
        ],
        je = { render: Ye, staticRenderFns: qe },
        Ue = je,
        Xe = i("VU/8"),
        Ke = f,
        Qe = Xe(Ge, Ue, !1, Ke, null, null),
        Ze = Qe.exports,
        Je = i("mvHQ"),
        ti = i.n(Je),
        ei = i("woOf"),
        ii = i.n(ei),
        si = i("XhDO"),
        ni = i.n(si),
        oi = i("E84t"),
        ai = i.n(oi),
        ri = {
          name: "banner",
          components: { PatternSvg: Jt },
          props: { active: Boolean, data: Object },
          data: function() {
            return { animate: !1, scrollableParent: null };
          },
          computed: {
            dataImages: function() {
              var t = this;
              return this.data.images.filter(function(e, i) {
                return t.$store.supportsTouch ? 0 === i : i >= 0;
              });
            }
          },
          watch: {
            active: function(t) {
              this.data.is_new && t
                ? this.initScrollableParent()
                : !t &&
                  this.scrollableParent &&
                  ((this.animate = !1),
                  this.scrollableParent.removeEventListener(
                    "scroll",
                    this.onParentScroll
                  ));
            }
          },
          mounted: function() {
            this.active && this.data.is_new && this.initScrollableParent();
          },
          destroyed: function() {
            this.scrollableParent &&
              this.scrollableParent.removeEventListener(
                "scroll",
                this.onParentScroll
              );
          },
          methods: {
            initScrollableParent: function() {
              (this.scrollableParent = this.getScrollableParent(
                this.$refs.stickerIsNew
              )),
                this.scrollableParent.addEventListener(
                  "scroll",
                  this.onParentScroll
                ),
                this.onParentScroll();
            },
            getScrollableParent: function(t) {
              var e = getComputedStyle(t),
                i = "absolute" === e.position,
                s = /(auto|scroll)/;
              if ("fixed" === e.position) return document.body;
              for (var n = t; (n = n.parentElement); )
                if (
                  ((e = getComputedStyle(n)),
                  (!i || "static" !== e.position) &&
                    s.test(e.overflow + e.overflowY + e.overflowX))
                )
                  return n;
              return document.body;
            },
            onParentScroll: function() {
              var t = this.$refs.stickerIsNew.getBoundingClientRect();
              this.animate = t.top <= window.innerHeight && t.bottom > 0;
            }
          }
        },
        li = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.data
            ? i(
                "fact" !== t.data.type ? "router-link" : "div",
                {
                  tag: "router-link",
                  attrs: {
                    to:
                      "fact" !== t.data.type &&
                      ("route" === t.data.type
                        ? t.data.route
                        : {
                            name:
                              "product-banner" === t.data.type
                                ? "product"
                                : t.data.type,
                            params: { alias: t.data.alias }
                          })
                  }
                },
                [
                  i(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            "collections" === t.$route.name &&
                            "product" === t.data.type &&
                            t.data.is_new,
                          expression:
                            "$route.name === 'collections' && data.type === 'product' && data.is_new"
                        }
                      ],
                      ref: "stickerIsNew",
                      staticClass: "grid__sticker-points",
                      class: [t.animate && "animate"]
                    },
                    [
                      i("div", { staticClass: "outer-circle" }, [
                        i("p", { staticClass: "sticker-text" }, [
                          i("span", [t._v("N")]),
                          t._v(" "),
                          i("span", [t._v("E")]),
                          t._v(" "),
                          i("span", [t._v("W")])
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "half" }, [
                          i("div", { staticClass: "border clipped" })
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "border fixed" })
                      ]),
                      t._v(" "),
                      i("div", { staticClass: "inner-circle" }, [
                        i("div", { staticClass: "half" }, [
                          i("div", { staticClass: "border clipped" })
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "border fixed" })
                      ])
                    ]
                  ),
                  t._v(" "),
                  t.data.images && t.data.images.length
                    ? i(
                        "div",
                        { staticClass: "item-images" },
                        t._l(t.dataImages, function(e, s) {
                          return i("img", {
                            key: s,
                            class: {
                              active:
                                t.data.activeImage === s ||
                                (!t.data.activeImage && 0 === s)
                            },
                            attrs: {
                              src: e.img || "",
                              srcset: e.img2x ? e.img2x + " 2x" : e.img || "",
                              alt: t.data.name || t.data.title
                            }
                          });
                        })
                      )
                    : t._e(),
                  t._v(" "),
                  "fact" === t.data.type
                    ? i("div", { staticClass: "item-separator" })
                    : t._e(),
                  t._v(" "),
                  "collections" === t.$route.name && "product" === t.data.type
                    ? i("pattern-svg", { attrs: { hover: !0 } })
                    : t._e(),
                  t._v(" "),
                  (!t.data.name && !t.data.title) ||
                  ("fact" === t.data.type && t.data.images.length)
                    ? t._e()
                    : i("p", {
                        staticClass: "item-title",
                        domProps: {
                          textContent: t._s(t.data.name || t.data.title)
                        }
                      }),
                  t._v(" "),
                  t.data.author && ["recipe", "route"].includes(t.data.type)
                    ? i("p", { staticClass: "item-by" }, [
                        i(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: "route" !== t.data.type,
                                expression: "data.type !== 'route'"
                              }
                            ]
                          },
                          [t._v("by")]
                        ),
                        t._v(" "),
                        i("span", {
                          domProps: { textContent: t._s(t.data.author) }
                        })
                      ])
                    : t._e(),
                  t._v(" "),
                  (t.data.product_name || t.data.footer_text) &&
                  ["recipe", "route", "product-banner"].includes(t.data.type)
                    ? i("p", { staticClass: "item-with" }, [
                        i(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.data.product_name,
                                expression: "data.product_name"
                              }
                            ]
                          },
                          [t._v("with")]
                        ),
                        t._v(" "),
                        ["route", "product-banner"].includes(t.data.type)
                          ? i("span", {
                              domProps: {
                                textContent: t._s(
                                  t.data.product_name || t.data.footer_text
                                )
                              }
                            })
                          : t._e(),
                        t._v(" "),
                        ["route", "product-banner"].includes(t.data.type)
                          ? t._e()
                          : i("span", {
                              directives: [
                                { name: "split", rawName: "v-split" }
                              ],
                              domProps: {
                                textContent: t._s(
                                  t.data.product_name || t.data.footer_text
                                )
                              }
                            })
                      ])
                    : t._e(),
                  t._v(" "),
                  t.data.text
                    ? i("p", {
                        staticClass: "item-text",
                        domProps: { textContent: t._s(t.data.text) }
                      })
                    : t._e()
                ],
                1
              )
            : t._e();
        },
        ci = [],
        di = { render: li, staticRenderFns: ci },
        ui = di,
        hi = i("VU/8"),
        pi = v,
        fi = hi(ri, ui, !1, pi, null, null),
        vi = fi.exports,
        gi = {
          name: "grid",
          components: { Banner: vi },
          props: {
            active: Boolean,
            data: Array,
            filter: Object,
            sameHeight: Boolean
          },
          data: function() {
            return { grid: this.data || [], ready: !1, imagesInterval: null };
          },
          watch: {
            data: function(t) {
              (this.grid = t), this.initGrid();
            }
          },
          mounted: function() {
            this.initGrid();
          },
          methods: {
            initGrid: function() {
              var t = this;
              this.$nextTick(function() {
                var e = new ni.a(t.$refs.grid, {
                  itemSelector: ".grid-item",
                  rowHeight: t.sameHeight ? ".grid-item" : void 0,
                  gutter: ".grid-gutter",
                  percentPosition: !0,
                  transitionDuration: "0"
                });
                e.on("layoutComplete", function() {
                  if (((t.ready = !0), t.$refs.items && t.$refs.items.length)) {
                    var e = t.$refs.items.reduce(function(t, e) {
                      t = Math.max(t, e.offsetTop + e.clientHeight);
                    }, 0);
                    t.$refs.grid.style.height = e + "px";
                  }
                }),
                  e.layout(),
                  ai()(t.$refs.grid).on("progress", function() {
                    return e.layout();
                  });
              });
            },
            onGridItemMouseenter: function(t) {
              var e = this;
              Object.prototype.hasOwnProperty.call(t, "images") &&
                (this.imagesInterval = setInterval(function() {
                  e.$set(
                    t,
                    "activeImage",
                    ((t.activeImage || 0) + 1) % t.images.length
                  );
                }, 3e3));
            },
            onGridItemMouseleave: function(t) {
              clearInterval(this.imagesInterval),
                this.$set(t, "activeImage", 0);
            }
          }
        },
        mi = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { ref: "grid", staticClass: "grid", class: { ready: t.ready } },
            [
              t.filter && !t.grid.length
                ? i(
                    "div",
                    { staticClass: "message" },
                    [
                      i("p", [
                        t._v(
                          "\n      There are no " +
                            t._s(t.filter.category) +
                            " " +
                            t._s(t.filter.value ? "with " : "") +
                            "\n      "
                        ),
                        t.filter.value
                          ? i("i", [t._v(t._s(t.filter.value))])
                          : t._e(),
                        t._v(" yet.\n    ")
                      ]),
                      t._v(" "),
                      t.filter.value
                        ? i(
                            "router-link",
                            {
                              directives: [
                                { name: "split", rawName: "v-split" }
                              ],
                              staticClass: "split-animation",
                              attrs: {
                                to: {
                                  name: t.$route.name,
                                  query: Object.assign(
                                    {},
                                    t.$route.query,
                                    ((s = {}), (s[t.filter.key] = void 0), s)
                                  )
                                }
                              }
                            },
                            [t._v("Show all " + t._s(t.filter.category))]
                          )
                        : t._e()
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              i("div", { staticClass: "grid-gutter" }),
              t._v(" "),
              t._l(t.grid, function(e, s) {
                return i(
                  "div",
                  {
                    key: s,
                    ref: "items",
                    refInFor: !0,
                    class: [
                      "grid-item",
                      ["fact", "route"].includes(e.type) ? "banner" : "",
                      e.type
                    ],
                    on: {
                      mouseenter: function(i) {
                        t.onGridItemMouseenter(e);
                      },
                      mouseleave: function(i) {
                        t.onGridItemMouseleave(e);
                      }
                    }
                  },
                  [i("banner", { attrs: { active: t.active, data: e } })],
                  1
                );
              })
            ],
            2
          );
          var s;
        },
        _i = [],
        yi = { render: mi, staticRenderFns: _i },
        wi = yi,
        Ci = i("VU/8"),
        bi = g,
        xi = Ci(gi, wi, !1, bi, null, null),
        $i = xi.exports,
        Si = i("bOdI"),
        ki = i.n(Si),
        Pi = {
          name: "filters",
          components: { Socials: Lt },
          props: {
            categoryAlias: String,
            categoryName: { type: String, default: "category" },
            dataToFilter: Array,
            hasSelect: Boolean,
            isArticle: Boolean,
            selectedProduct: Object,
            source: Object,
            toggleButtons: Boolean
          },
          data: function() {
            return { dropdownIsOpened: !1 };
          },
          computed: {
            filterItems: function() {
              return this.dataToFilter.filter(function(t) {
                return t.name;
              });
            }
          },
          methods: {
            getFilterResetRouterLink: function() {
              var t = ii()({}, this.$route.query, { product: void 0 });
              return { name: this.$route.name, query: t };
            },
            getFilterItemRouterLink: function(t) {
              var e = t.alias === this.categoryAlias,
                i = this.toggleButtons && e ? void 0 : t.alias,
                s = ii()({}, this.$route.query, ki()({}, this.categoryName, i));
              return { name: this.$route.name, query: s };
            },
            onToggleDropdownPage: function(t) {
              W.$emit(
                "onToggleDropdownPage",
                (this.dropdownIsOpened = !this.dropdownIsOpened),
                t
              );
            },
            onCloseDropdownPage: function(t) {
              this.dropdownIsOpened = t;
            }
          },
          mounted: function() {
            W.$on("onCloseDropdownPage", this.onCloseDropdownPage),
              window.addEventListener("resize", this.onResize);
          },
          destroyed: function() {
            window.removeEventListener("resize", this.onResize);
          }
        },
        Ti = function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return t.dataToFilter || t.isArticle
            ? s(
                "div",
                {
                  staticClass: "filters",
                  style: { marginRight: t.$store.scrollBarWidth + "px" }
                },
                [
                  s("p", {
                    staticClass: "filters__text",
                    domProps: {
                      textContent: t._s(
                        "blog".includes(t.$route.name) || t.isArticle
                          ? "Knowledge"
                          : t.$route.name
                      )
                    }
                  }),
                  t._v(" "),
                  "article" === t.$route.name
                    ? s("div", { staticClass: "row" }, [
                        s(
                          "div",
                          {
                            staticClass:
                              "column large-8 medium-10 small-11 larger-offset-3 large-offset-2 small-offset-1 back-to-blog"
                          },
                          [
                            s("img", { attrs: { src: i("1Inb"), alt: "" } }),
                            t._v(" "),
                            s("router-link", {
                              attrs: { to: { name: "blog" } },
                              domProps: {
                                textContent: t._s("Back to all articles")
                              }
                            })
                          ],
                          1
                        )
                      ])
                    : t._e(),
                  t._v(" "),
                  s("socials"),
                  t._v(" "),
                  s(
                    "ul",
                    {
                      staticClass: "filters__list",
                      class: {
                        color:
                          (void 0 !== t.$route.query.category &&
                            "blog" === t.$route.name) ||
                          ""
                      }
                    },
                    [
                      "article" === t.$route.name
                        ? s(
                            "div",
                            {
                              staticClass:
                                "column large-8 medium-10 larger-offset-3 large-offset-2 small-offset-1"
                            },
                            [
                              s("li", { staticClass: "filters__item" }, [
                                s("p", {
                                  staticClass: "category",
                                  domProps: { textContent: t._s("Events") }
                                }),
                                t._v(" "),
                                s("p", {
                                  staticClass: "date",
                                  domProps: {
                                    textContent: t._s("23 October 2017")
                                  }
                                }),
                                t._v(" "),
                                t.source
                                  ? s("p", { staticClass: "source" }, [
                                      t._v("\n          BY\n          "),
                                      s(
                                        "a",
                                        {
                                          attrs: {
                                            href: this.source.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                          }
                                        },
                                        [t._v(t._s(this.source.text))]
                                      )
                                    ])
                                  : t._e()
                              ])
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      t._l(t.filterItems, function(e, i) {
                        return s(
                          "li",
                          {
                            key: i,
                            staticClass: "filters__item",
                            class: {
                              "active-item":
                                e.alias === t.categoryAlias ||
                                1 === t.dataToFilter.length
                            }
                          },
                          [
                            s("div", { staticClass: "animation-border" }),
                            t._v(" "),
                            s("div", { staticClass: "decorative-line" }),
                            t._v(" "),
                            s("router-link", {
                              attrs: { to: t.getFilterItemRouterLink(e) },
                              domProps: { textContent: t._s(e.name) }
                            })
                          ],
                          1
                        );
                      }),
                      t._v(" "),
                      "blog" === t.$route.name
                        ? s(
                            "li",
                            {
                              staticClass:
                                "filters__item filters__item-downloads",
                              on: {
                                click: function(e) {
                                  t.onToggleDropdownPage(
                                    "opened-download-page"
                                  );
                                }
                              }
                            },
                            [s("p", [t._v("Downloads")]), t._v(" "), t._m(0)]
                          )
                        : t._e(),
                      t._v(" "),
                      t.hasSelect
                        ? s(
                            "li",
                            {
                              staticClass:
                                "filters__item filters__item-select select-products",
                              on: {
                                click: function(e) {
                                  t.onToggleDropdownPage(
                                    "opened-dropdown-products"
                                  );
                                }
                              }
                            },
                            [
                              s("p", {
                                staticClass: "filters__select",
                                class: [t.dropdownIsOpened && "italic"],
                                domProps: {
                                  textContent: t._s(
                                    t.dropdownIsOpened
                                      ? "Back to Inspirations"
                                      : t.selectedProduct.name
                                      ? t.selectedProduct.name
                                      : "Choose product"
                                  )
                                }
                              }),
                              t._v(" "),
                              t._m(1),
                              t._v(" "),
                              s("img", {
                                staticClass: "filters__select-arrow",
                                attrs: { src: i("vU/C"), alt: "" }
                              })
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      t.$route.query.product
                        ? s(
                            "router-link",
                            {
                              staticClass: "filters__reset",
                              attrs: { to: t.getFilterResetRouterLink() }
                            },
                            [
                              s("div", { staticClass: "filters__reset-icon" }, [
                                s(
                                  "svg",
                                  {
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "12",
                                      height: "13",
                                      viewBox: "0 0 12 13"
                                    }
                                  },
                                  [
                                    s(
                                      "g",
                                      {
                                        attrs: {
                                          fill: "#140C07",
                                          "fill-rule": "evenodd"
                                        }
                                      },
                                      [
                                        s("path", {
                                          attrs: {
                                            "fill-rule": "nonzero",
                                            d:
                                              "M.5 7h1A4.5 4.5 0 1 0 6 2.5v-1A5.5 5.5 0 1 1 .5 7z"
                                          }
                                        }),
                                        t._v(" "),
                                        s("path", {
                                          attrs: { d: "M7 0v4L5 2z" }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              t._v(" "),
                              s("p", [t._v("All products")])
                            ]
                          )
                        : t._e()
                    ],
                    2
                  )
                ],
                1
              )
            : t._e();
        },
        Bi = [
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "filters__item-cross" }, [
              i("span"),
              t._v(" "),
              i("span")
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "filters__item-cross" }, [
              i("span"),
              t._v(" "),
              i("span")
            ]);
          }
        ],
        Mi = { render: Ti, staticRenderFns: Bi },
        Ai = Mi,
        Ii = i("VU/8"),
        Di = m,
        Ei = Ii(Pi, Ai, !1, Di, null, null),
        Li = Ei.exports,
        Oi = {
          name: "page-transition",
          components: { Gradient: mt },
          props: {
            animatePage: { default: !0, type: Boolean },
            gradient: Boolean,
            initialPageIndex: { default: 0, type: Number },
            pages: Array,
            preventTransition: Boolean
          },
          data: function() {
            return {
              filtersCollapsed: !1,
              isMenuOpened: !1,
              logoTextHidden: !1,
              pageIndex: this.initialPageIndex,
              scrollAnimating: !1,
              scrolledToTop: !1,
              scrolledToBottom: !1,
              scrollIntent: null,
              timeout: null,
              touchStart: null
            };
          },
          watch: {
            preventTransition: function(t) {
              document.body.style.overflowY = t ? "scroll" : "auto";
            },
            pageIndex: function(t) {
              this.$emit("pageChanged", t), this.animateTransition(t);
            },
            filtersCollapsed: function(t) {
              this.$route.meta &&
                this.$route.meta.filter &&
                W.$emit("toggleFiltersCollapsed", t);
            },
            logoTextHidden: function(t) {
              W.$emit("hideLogoText", t);
            }
          },
          created: function() {
            var t = this;
            W.$on("onToggleMenu", this.onToggleMenu);
            var e = this.$watch("initialPageIndex", function(i) {
              (t.pageIndex = i), e();
            });
          },
          mounted: function() {
            (document.body.style.overflowY = "auto"),
              window.addEventListener("wheel", this.onWheel),
              window.addEventListener("touchstart", this.onTouchStart),
              window.addEventListener("touchend", this.onTouchEnd);
          },
          destroyed: function() {
            window.removeEventListener("wheel", this.onWheel),
              window.removeEventListener("touchstart", this.onTouchStart),
              window.removeEventListener("touchend", this.onTouchEnd),
              clearTimeout(this.timeout),
              clearTimeout(this.scrollAnimating),
              (document.body.style.overflowY = "");
          },
          methods: {
            getPagePosition: function(t) {
              var e = this.scrolledToTop,
                i = this.scrolledToBottom,
                s = this.scrollIntent,
                n = this.scrollAnimating,
                o = this.pageIndex,
                a = this.pages.length - 1;
              if (0 === t && o === a && i && null !== s);
              else if (t === a && 0 === o && e && null !== s);
              else {
                if (t !== o && e && n) return 1;
                if (t === a && 0 === o && n) return -1;
                if (t < o) return n || !this.animatePage ? -1 : 0;
                if (t > o) return n || !this.animatePage ? 1 : 0;
                if (t === o) return 0;
              }
            },
            animateTransition: function(t) {
              var e = this.$refs.pages && this.$refs.pages[t];
              if (e) {
                var i = e.querySelector(".animate-children");
                (e.scrollTop = 0),
                  new G.a().staggerFrom(
                    i ? i.children : e.children,
                    1,
                    {
                      opacity: 0,
                      y: "+=30px",
                      ease: "Power1.easeOut",
                      delay: 1
                    },
                    0.2
                  );
              }
            },
            changePage: function(t) {
              var e = this;
              t
                ? (this.pageIndex = this.pages.findIndex(function(e) {
                    return e.alias === t;
                  }))
                : ((this.pageIndex = (this.pageIndex + 1) % this.pages.length),
                  (this.scrollAnimating = setTimeout(function() {
                    return (e.scrollAnimating = !1);
                  }, 2e3)),
                  (this.scrolledToTop = !1),
                  (this.scrolledToBottom = !1));
            },
            getScrollPosition: function() {
              return (
                this.$refs.pages && this.$refs.pages[this.pageIndex].scrollTop
              );
            },
            setScrollPosition: function(t) {
              var e = this;
              this.$refs.pages && this.$refs.pages[this.pageIndex]
                ? ai()(this.$refs.pages[this.pageIndex], function() {
                    e.$refs.pages[e.pageIndex].scrollTo(0, t);
                  })
                : setTimeout(function() {
                    return e.setScrollPosition(t);
                  }, 200);
            },
            onToggleMenu: function(t) {
              this.isMenuOpened =
                "undefined" == typeof value ? !this.isMenuOpened : !!t;
            },
            onPageScroll: function(t) {
              if (t === this.pageIndex) {
                var e = this.$refs.pages[this.pageIndex];
                (this.filtersCollapsed =
                  this.$route.meta &&
                  this.$route.meta.filter &&
                  e.scrollTop > 150),
                  (this.logoTextHidden = e.scrollTop > 150);
              }
            },
            onWheel: function(t) {
              var e = this,
                i = this.$refs.pages ? this.$refs.pages[this.pageIndex] : null;
              if (i) {
                var s = i.scrollHeight - i.clientHeight,
                  n = t.deltaY <= -1 && 0 === i.scrollTop,
                  o = t.deltaY >= 1 && i.scrollTop >= s;
                if (
                  (this.scrollAnimating ||
                    ((this.scrolledToTop = n), (this.scrolledToBottom = o)),
                  this.scrollAnimating ||
                    this.preventTransition ||
                    this.isMenuOpened ||
                    (!n && !o))
                )
                  this.scrollIntent = null;
                else
                  switch (this.scrollIntent) {
                    case !0:
                      this.timeout ||
                        (this.timeout = setTimeout(function() {
                          (e.scrollIntent = !1), (e.timeout = null);
                        }, 1e3));
                      break;
                    case !1:
                      var a = Math.min(
                        this.pageIndex + (n ? -1 : 1),
                        this.pages.length - 1
                      );
                      (a = Math.max(a, 0)),
                        this.pageIndex !== a &&
                          ((this.scrollAnimating = setTimeout(function() {
                            return (e.scrollAnimating = !1);
                          }, 2e3)),
                          (this.pageIndex = a)),
                        (this.scrollIntent = null);
                      break;
                    case null:
                    default:
                      (this.scrollIntent = !0),
                        this.timeout ||
                          (this.timeout = setTimeout(function() {
                            (e.scrollIntent = !1), (e.timeout = null);
                          }, 1e3));
                  }
              }
            },
            onTouchStart: function(t) {
              this.touchStart = t.touches[0].clientY;
            },
            onTouchEnd: function(t) {
              var e = t.changedTouches[0].clientY;
              this.touchStart > e + 5
                ? this.onWheel({ deltaY: 1 })
                : this.touchStart < e - 5 && this.onWheel({ deltaY: -1 });
            }
          }
        },
        Ri = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "pages" },
            t._l(t.pages, function(e, s) {
              return i(
                "div",
                {
                  key: s,
                  ref: "pages",
                  refInFor: !0,
                  staticClass: "page",
                  class: { active: s === t.pageIndex },
                  style: {
                    paddingRight:
                      s !== t.pageIndex || t.preventTransition
                        ? "calc(" +
                          (t.$store.windowWidth < 1024 ? 3 : 2) +
                          "vw + " +
                          t.$store.scrollBarWidth +
                          "px)"
                        : "",
                    pointerEvents:
                      s !== t.pageIndex || t.scrollAnimating ? null : "auto",
                    transform: t.animatePage
                      ? "translate3d(0, " +
                        100 * t.getPagePosition(s) +
                        "vh, 0)"
                      : null,
                    overflowY:
                      t.animatePage && t.preventTransition ? "hidden" : null,
                    opacity: t.animatePage && s !== t.pageIndex ? 0 : 1
                  },
                  on: {
                    scroll: function(e) {
                      t.onPageScroll(s);
                    }
                  }
                },
                [
                  t.gradient
                    ? i("gradient", { attrs: { hidden: s !== t.pageIndex } })
                    : t._e(),
                  t._v(" "),
                  t._t("default", null, {
                    data: e,
                    index: s,
                    active: s === t.pageIndex,
                    next: s < t.pages.length ? t.pages[s + 1] : null,
                    animating: t.scrollAnimating
                  })
                ],
                2
              );
            })
          );
        },
        Fi = [],
        zi = { render: Ri, staticRenderFns: Fi },
        Wi = zi,
        Vi = i("VU/8"),
        Ni = _,
        Hi = Vi(Oi, Wi, !1, Ni, null, null),
        Gi = Hi.exports,
        Yi = {
          name: "collections",
          components: {
            Filters: Li,
            Grid: $i,
            FollowPattern: He,
            PageTransition: Gi
          },
          data: function() {
            return { collectionIndex: 0, collections: [] };
          },
          computed: {
            collectionsFilters: function() {
              return Array.isArray(this.$store.collections) &&
                this.$store.collections.length
                ? this.$store.collections.map(function(t) {
                    return ii()({ alias: t.alias, name: t.name });
                  })
                : null;
            },
            collectionAlias: function() {
              return this.$route.query.collection;
            },
            routes: function() {
              return this.$store.routes;
            }
          },
          watch: {
            collectionAlias: function(t) {
              this.collections.length
                ? this.$refs.pages.changePage(t)
                : this.$store.getCollections().then(this.fetchData);
            },
            collectionIndex: function(t) {
              this.$router.replace({
                name: "collections",
                query: ii()({}, this.$route.query, {
                  collection: this.collections[t].alias
                })
              });
            }
          },
          mounted: function() {
            this.$store.getCollections().then(this.fetchData);
          },
          beforeRouteEnter: function(t, e, i) {
            i(function(i) {
              var s = i.$store.getScrollPosition(e, t);
              void 0 !== s &&
                i.$nextTick(function() {
                  return i.$refs.pages.setScrollPosition(s.position);
                });
            });
          },
          beforeRouteLeave: function(t, e, i) {
            "product" === t.name &&
              this.$store.saveScrollPosition(
                e,
                t,
                this.$refs.pages.getScrollPosition()
              ),
              i();
          },
          methods: {
            fetchData: function(t) {
              var e = this;
              if (!Array.isArray(t) || !t.length)
                return void this.$router.replace({ name: "home" });
              var i = t.findIndex(function(t) {
                return t.alias === e.collectionAlias;
              });
              i >= 0
                ? ((this.collections = []),
                  t.forEach(function(t) {
                    var i = JSON.parse(ti()(t)),
                      s = Object.prototype.hasOwnProperty.call(i, "products")
                        ? i.products.length
                        : 0;
                    e.collections.push(i),
                      s > 4 &&
                        e.$store.getFacts().then(function(t) {
                          var e = t[Math.floor(Math.random() * t.length)];
                          e && i.products.splice(4, 0, e);
                        });
                  }),
                  (this.collectionIndex = i))
                : this.$router.replace({
                    name: "collections",
                    query: { collection: t[0].alias }
                  });
            },
            onPageChanged: function(t) {
              this.collectionIndex = t;
            }
          }
        },
        qi = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "main",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.$store.collections.length,
                  expression: "$store.collections.length"
                }
              ],
              attrs: { role: "main" }
            },
            [
              i("filters", {
                attrs: {
                  dataToFilter: t.collectionsFilters,
                  categoryAlias: t.collectionAlias,
                  categoryName: "collection"
                }
              }),
              t._v(" "),
              i("page-transition", {
                ref: "pages",
                attrs: {
                  pages: t.collections,
                  initialPageIndex: t.collectionIndex
                },
                on: { pageChanged: t.onPageChanged },
                scopedSlots: t._u([
                  {
                    key: "default",
                    fn: function(e) {
                      return [
                        e.data
                          ? i("p", {
                              staticClass: "heading-collection-mobile",
                              domProps: { textContent: t._s(e.data.name) }
                            })
                          : t._e(),
                        t._v(" "),
                        i("div", { staticClass: "product-line-intro" }, [
                          e.data
                            ? i("p", {
                                staticClass: "product-line-text",
                                domProps: {
                                  textContent: t._s(e.data.description)
                                }
                              })
                            : t._e(),
                          t._v(" "),
                          i(
                            "div",
                            { staticClass: "to-other-page__block" },
                            [
                              i(
                                "span",
                                { staticClass: "to-other-page__text" },
                                [t._v("Know more:")]
                              ),
                              t._v(" "),
                              i(
                                "router-link",
                                {
                                  directives: [
                                    { name: "split", rawName: "v-split" }
                                  ],
                                  staticClass: "to-other-page__link",
                                  attrs: { to: { name: "history" } }
                                },
                                [t._v("Our history")]
                              ),
                              t._v(" "),
                              i(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "6",
                                    height: "9",
                                    viewBox: "0 0 6 9"
                                  }
                                },
                                [
                                  i(
                                    "g",
                                    {
                                      attrs: {
                                        fill: "#140C07",
                                        "fill-rule": "evenodd"
                                      }
                                    },
                                    [
                                      i("path", {
                                        attrs: {
                                          d:
                                            "M.525 8.268l.707.707 4.243-4.243-.707-.707z"
                                        }
                                      }),
                                      t._v(" "),
                                      i("path", {
                                        attrs: {
                                          d:
                                            "M.525.732l.707-.707 4.243 4.243-.707.707z"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]),
                        t._v(" "),
                        e
                          ? i("grid", {
                              attrs: {
                                active: e.active,
                                data: e.data.products,
                                "same-height": t.$store.windowWidth >= 1024
                              }
                            })
                          : t._e(),
                        t._v(" "),
                        e.next
                          ? i(
                              "div",
                              { staticClass: "product-next-collection" },
                              [
                                i(
                                  "p",
                                  {
                                    staticClass:
                                      "product-next-collection__heading"
                                  },
                                  [t._v("next collection")]
                                ),
                                t._v(" "),
                                i(
                                  "p",
                                  {
                                    staticClass:
                                      "product-next-collection__scroll-text"
                                  },
                                  [t._v("keep scrolling")]
                                ),
                                t._v(" "),
                                i("div", {
                                  staticClass:
                                    "product-next-collection__button",
                                  on: {
                                    click: function(e) {
                                      t.$refs.pages.changePage();
                                    }
                                  }
                                }),
                                t._v(" "),
                                i(
                                  "div",
                                  {
                                    staticClass:
                                      "product-next-collection__big-text",
                                    style: {
                                      transform: e.animating
                                        ? "translateY(-5vw)"
                                        : null
                                    }
                                  },
                                  [
                                    i("p", {
                                      domProps: {
                                        textContent: t._s(e.next.name)
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : t._e()
                      ];
                    }
                  }
                ])
              }),
              t._v(" "),
              i("follow-pattern")
            ],
            1
          );
        },
        ji = [],
        Ui = { render: qi, staticRenderFns: ji },
        Xi = Ui,
        Ki = i("VU/8"),
        Qi = y,
        Zi = Ki(Yi, Xi, !1, Qi, null, null),
        Ji = Zi.exports,
        ts = i("Dd8w"),
        es = i.n(ts),
        is = i("dXij"),
        ss = i.n(is),
        ns = {
          name: "product",
          components: { PageTransition: Gi, FollowPattern: He, Grid: $i },
          props: { alias: String },
          computed: {
            product: function() {
              return this.products[this.productIndex];
            }
          },
          data: function() {
            return {
              grid: [],
              productIndex: 0,
              products: [],
              productsAliases: []
            };
          },
          watch: {
            alias: function(t) {
              var e = this;
              this.products.findIndex(function(e) {
                return e.alias === t;
              }) >= 0
                ? this.$refs.pages.changePage(t)
                : this.fetchData(t).then(function() {
                    e.$refs.pages.changePage(t), e.fetchNextProductData();
                  });
            },
            product: function(t) {
              this.$store.setDocumentTitle(t.name);
            },
            productIndex: function(t) {
              var e = this,
                i = this.products,
                s = this.productsAliases;
              t < 0 ||
                t >= i.length ||
                (this.$router.replace(
                  { name: "product", params: { alias: i[t].alias } },
                  function() {
                    t === i.length - 1 &&
                      i.length < s.length &&
                      e.$nextTick(function() {
                        return e.fetchNextProductData();
                      }),
                      setTimeout(function() {
                        return e.fetchGridData();
                      }, 1e3);
                  }
                ),
                this.alias === i[t].alias &&
                  setTimeout(function() {
                    return e.fetchGridData();
                  }, 1e3));
            }
          },
          mounted: function() {
            this.fetchData();
          },
          methods: {
            fetchData: function(t) {
              var e = this;
              return new O.a(function(i) {
                z.get(
                  "/products/" +
                    (t || e.alias) +
                    ".json"
                )
                  .then(function(t) {
                    e.products.push(t.data),
                      setTimeout(
                        function() {
                          return e.fetchGridData();
                        },
                        e.grid.length ? 1e3 : 0
                      ),
                      e.productsAliases.length || e.fetchProductsList(),
                      i(t.data);
                  })
                  .catch(function() {
                    e.$router.replace({ name: "notfound" });
                  });
              });
            },
            fetchProductsList: function() {
              var t = this;
              this.$store
                .getCollections()
                .then(function(e) {
                  var i = e.find(function(e) {
                    return e.alias === t.products[0].collection_alias;
                  });
                  i &&
                    (i.products.forEach(function(e) {
                      t.productsAliases.push(e.alias);
                    }),
                    t.fetchNextProductData());
                })
                .catch(function(t) {
                  console.warn(t);
                });
            },
            fetchNextProductData: function() {
              for (var t = this, e = 0; e < this.productsAliases.length; e++) {
                if (
                  "break" ===
                  (function(e) {
                    if (
                      !t.products.find(function(i) {
                        return i.alias === t.productsAliases[e];
                      })
                    )
                      return t.fetchData(t.productsAliases[e]), "break";
                  })(e)
                )
                  break;
              }
            },
            fetchGridData: function() {
              var t = this;
              (this.grid = []),
                this.$store.getCollections().then(function(e) {
                  var i = e.find(function(e) {
                      return e.alias === t.product.collection_alias;
                    }),
                    s = i.products.filter(function(e) {
                      return e.alias !== t.product.alias;
                    }),
                    n = t.$utils.shuffle(we()(s)).slice(0, 3);
                  (t.grid = ss()(t.grid, n)),
                    (t.grid = t.$utils.shuffle(t.grid));
                }),
                this.$store.getInspirations().then(function(e) {
                  e.forEach(function(e) {
                    var i = e.recipes.filter(function(e) {
                        return e.product_alias === t.product.alias;
                      }),
                      s = t.$utils.shuffle(we()(i)).slice(0, 3);
                    t.grid = ss()(t.grid, s);
                  });
                  var i = t.$router.options.routes.find(function(t) {
                    return "inspirations" === t.name;
                  });
                  if (i) {
                    var s = ii()({}, i.meta, {
                      product_name: t.product.name,
                      product_alias: t.product.alias,
                      images: [{ img: t.product.img }]
                    });
                    t.grid.push(
                      es()(
                        {
                          type: "route",
                          route: {
                            name: i.name,
                            query: {
                              category: e[0].alias,
                              product: t.product.alias
                            }
                          }
                        },
                        s
                      )
                    ),
                      (t.grid = t.$utils.shuffle(t.grid));
                  }
                });
            },
            onPageChanged: function(t) {
              this.productIndex = t;
            }
          }
        },
        os = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "main",
            { attrs: { role: "main" } },
            [
              i("page-transition", {
                ref: "pages",
                attrs: { pages: t.products },
                on: { pageChanged: t.onPageChanged },
                scopedSlots: t._u([
                  {
                    key: "default",
                    fn: function(e) {
                      return [
                        e.data
                          ? i("div", { staticClass: "product" }, [
                              i("div", { staticClass: "product-image" }, [
                                i(
                                  "div",
                                  { staticClass: "product-image-inner" },
                                  [
                                    i("img", {
                                      attrs: {
                                        srcset: e.data.img_large2x + " 2x",
                                        src: e.data.img_large,
                                        alt: e.data.name
                                      }
                                    }),
                                    t._v(" "),
                                    i("h2", {
                                      staticClass: "product-name",
                                      domProps: {
                                        textContent: t._s(e.data.name)
                                      }
                                    }),
                                    t._v(" "),
                                    i("p", {
                                      staticClass: "product-collection",
                                      domProps: {
                                        textContent: t._s(
                                          e.data.collection + " Collection"
                                        )
                                      }
                                    })
                                  ]
                                )
                              ]),
                              t._v(" "),
                              i(
                                "div",
                                {
                                  ref: "productDescription",
                                  staticClass: "product-description"
                                },
                                [
                                  i("p", {
                                    staticClass: "intro",
                                    domProps: {
                                      textContent: t._s(e.data.intro)
                                    }
                                  }),
                                  t._v(" "),
                                  t._l(e.data.description, function(e, s) {
                                    return [
                                      i("h3", {
                                        key: "h-" + s,
                                        domProps: { textContent: t._s(s) }
                                      }),
                                      t._v(" "),
                                      i("p", {
                                        key: "p-" + s,
                                        domProps: { textContent: t._s(e) }
                                      })
                                    ];
                                  }),
                                  t._v(" "),
                                  e.data.reviewer
                                    ? i(
                                        "a",
                                        {
                                          staticClass: "reviewed-button",
                                          attrs: {
                                            href: e.data.reviewer.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                          }
                                        },
                                        [
                                          i("div", {
                                            staticClass:
                                              "reviewed-button__author-photo",
                                            style: {
                                              backgroundImage:
                                                "url(" +
                                                e.data.reviewer.photo +
                                                ")"
                                            }
                                          }),
                                          t._v(" "),
                                          i(
                                            "p",
                                            {
                                              staticClass:
                                                "reviewed-button__text"
                                            },
                                            [
                                              i("span", [t._v("Reviewed by")]),
                                              t._v(" "),
                                              i("span", {
                                                domProps: {
                                                  textContent: t._s(
                                                    e.data.reviewer.name
                                                  )
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    : t._e()
                                ],
                                2
                              )
                            ])
                          : t._e(),
                        t._v(" "),
                        i("p", { staticClass: "inspiration-title" }, [
                          i("span"),
                          t._v(" "),
                          i("span"),
                          t._v(" "),
                          i("span", { staticClass: "text" }, [
                            t._v("Inspiration")
                          ]),
                          t._v(" "),
                          i("span"),
                          t._v(" "),
                          i("span")
                        ]),
                        t._v(" "),
                        i("grid", { attrs: { data: t.grid } }),
                        t._v(" "),
                        e.next
                          ? i(
                              "div",
                              { staticClass: "product-next-collection" },
                              [
                                i("p", {
                                  staticClass:
                                    "product-next-collection__heading",
                                  domProps: { textContent: t._s(e.next.name) }
                                }),
                                t._v(" "),
                                i(
                                  "p",
                                  {
                                    staticClass:
                                      "product-next-collection__scroll-text"
                                  },
                                  [t._v("scroll to the next product")]
                                ),
                                t._v(" "),
                                i("div", {
                                  staticClass:
                                    "product-next-collection__button",
                                  on: {
                                    click: function(e) {
                                      t.$refs.pages.changePage();
                                    }
                                  }
                                }),
                                t._v(" "),
                                i(
                                  "div",
                                  {
                                    staticClass:
                                      "product-next-collection__big-text",
                                    style: {
                                      transform: e.animating
                                        ? "translateY(-5vw)"
                                        : null
                                    }
                                  },
                                  [
                                    i("p", {
                                      domProps: {
                                        textContent: t._s(
                                          t.products[t.productIndex].collection
                                        )
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : t._e()
                      ];
                    }
                  }
                ])
              }),
              t._v(" "),
              i("follow-pattern")
            ],
            1
          );
        },
        as = [],
        rs = { render: os, staticRenderFns: as },
        ls = rs,
        cs = i("VU/8"),
        ds = w,
        us = cs(ns, ls, !1, ds, null, null),
        hs = us.exports,
        ps = i("fZjL"),
        fs = i.n(ps),
        vs = {
          name: "dropdownproducts",
          components: { PatternSvg: Jt },
          props: ["categoryId"],
          data: function() {
            return { scrollTop: null };
          },
          watch: {
            $route: function() {
              W.$emit("onCloseDropdownPage", !1),
                W.$emit("onToggleDropdownPage", !1);
            }
          },
          methods: {
            getProductItemRouterLink: function(t) {
              var e = ii()({}, this.$route.query, { product: t.alias });
              return { name: this.$route.name, query: e };
            }
          }
        },
        gs = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              ref: "dropdown",
              staticClass: "dropdown dropdown-content",
              class: { "selected-product": t.$route.query.product }
            },
            t._l(t.$store.collections, function(e, s) {
              return i("div", { key: s, staticClass: "product-category" }, [
                i("p", { staticClass: "product-category__text" }, [
                  i("span", {
                    staticClass: "product-category__name",
                    domProps: { textContent: t._s(e.name) }
                  }),
                  t._v(" "),
                  i("span", { staticClass: "separator" }),
                  t._v(" "),
                  i("span", {
                    staticClass: "product-category__count",
                    domProps: {
                      textContent: t._s(e.products.length + " products")
                    }
                  })
                ]),
                t._v(" "),
                i(
                  "ul",
                  { staticClass: "product-category__list" },
                  t._l(e.products, function(e, s) {
                    return i(
                      "li",
                      {
                        key: s,
                        staticClass: "product-category__item",
                        class: { selected: e.alias === t.$route.query.product }
                      },
                      [
                        e.images
                          ? i("img", {
                              attrs: {
                                src: e.images[0].img,
                                srcset: e.images[0].img2x + " 2x",
                                alt: e.name
                              }
                            })
                          : t._e(),
                        t._v(" "),
                        i("p", {
                          staticClass: "product-category__product-name",
                          domProps: { textContent: t._s(e.name) }
                        }),
                        t._v(" "),
                        i(
                          "p",
                          { staticClass: "product-category__offer-select" },
                          [t._v("select")]
                        ),
                        t._v(" "),
                        i("pattern-svg", { attrs: { hover: !0 } }),
                        t._v(" "),
                        i("router-link", {
                          attrs: {
                            to: t.getProductItemRouterLink(e),
                            "aria-label": e.name
                          }
                        })
                      ],
                      1
                    );
                  })
                )
              ]);
            })
          );
        },
        ms = [],
        _s = { render: gs, staticRenderFns: ms },
        ys = _s,
        ws = i("VU/8"),
        Cs = C,
        bs = ws(vs, ys, !1, Cs, null, null),
        xs = bs.exports,
        $s = {
          name: "inspirations",
          components: {
            Filters: Li,
            Grid: $i,
            DropdownProducts: xs,
            FollowPattern: He,
            PageTransition: Gi
          },
          data: function() {
            return { categoryIndex: 0, categories: [], dropdownIsOpened: !1 };
          },
          computed: {
            inspirationsFilters: function() {
              return this.$store.inspirations.map(function(t) {
                return ii()({ alias: t.alias, name: t.name });
              });
            },
            productAlias: function() {
              return this.$route.query.product;
            },
            activeProduct: function() {
              return this.$store.getProductByAlias(this.productAlias) || {};
            },
            categoryAlias: function() {
              return this.$route.query.category;
            }
          },
          watch: {
            categoryAlias: function(t) {
              this.categories.length
                ? this.$refs.pages.changePage(t)
                : this.$store.getInspirations().then(this.fetchData);
            },
            productAlias: function() {
              this.$store.getInspirations().then(this.fetchData);
            },
            categoryIndex: function(t) {
              this.$router.replace({
                name: "inspirations",
                query: ii()({}, this.$route.query, {
                  category: this.categories[t].alias
                })
              });
            }
          },
          mounted: function() {
            W.$on("onToggleDropdownPage", this.onToggleDropdownPage),
              this.$store.getInspirations().then(this.fetchData);
          },
          beforeRouteEnter: function(t, e, i) {
            i(function(i) {
              var s = i.$store.getScrollPosition(e, t);
              void 0 !== s &&
                i.$nextTick(function() {
                  return i.$refs.pages.setScrollPosition(s.position);
                });
            });
          },
          beforeRouteLeave: function(t, e, i) {
            ("recipe" !== t.name && "product" !== t.name) ||
              this.$store.saveScrollPosition(
                e,
                t,
                this.$refs.pages.getScrollPosition()
              ),
              i();
          },
          methods: {
            fetchData: function(t) {
              var e = this;
              if (!Array.isArray(t) || !t.length)
                return void this.$router.replace({ name: "home" });
              var i = t.findIndex(function(t) {
                return t.alias === e.categoryAlias;
              });
              i >= 0
                ? ((this.categories = []),
                  t.forEach(function(t) {
                    var i = JSON.parse(ti()(t));
                    e.productAlias &&
                      (i.recipes = i.recipes.filter(function(t) {
                        return t.product_alias === e.productAlias;
                      })),
                      e.categories.push(i),
                      e.$store.getFacts().then(function(t) {
                        e.insertBanners(i, e.$utils.shuffle(we()(t)));
                      }),
                      e.productAlias
                        ? e.$store.getCollections().then(function() {
                            e.insertBanners(
                              i,
                              e.$utils.shuffle(we()([e.activeProduct]))
                            );
                          })
                        : e.$store.getCollections().then(function() {
                            e.insertBanners(
                              i,
                              e.$utils.shuffle(we()(e.$store.products))
                            );
                          });
                    var s = e.$router.options.routes
                      .filter(function(t) {
                        return (
                          t.meta && t.meta.banner && t.name !== e.$route.name
                        );
                      })
                      .map(function(t) {
                        return es()({ type: "route", route: t }, t.meta);
                      });
                    e.insertBanners(i, e.$utils.shuffle(s));
                  }),
                  (this.categoryIndex = i))
                : -1 === i
                ? this.$router.replace({
                    name: "inspirations",
                    query: { category: this.$store.inspirations[0].alias }
                  })
                : this.activeProduct &&
                  !fs()(this.activeProduct).length &&
                  this.$router.replace({
                    name: "inspirations",
                    query: { category: this.$route.query.category }
                  });
            },
            insertBanners: function(t, e) {
              for (var i = 0; i < t.recipes.length; i += 10)
                if (e && e.length) {
                  var s = Math.min(t.recipes.length, i + 10),
                    n = Math.round(Math.random() * (s - i)) + i;
                  t.recipes.splice(n, 0, e[0]), e.splice(0, 1);
                }
            },
            onToggleDropdownPage: function(t) {
              this.dropdownIsOpened = t;
            },
            onPageChanged: function(t) {
              this.categoryIndex = t;
            }
          }
        },
        Ss = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "main",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.$store.collections.length,
                  expression: "$store.collections.length"
                }
              ],
              attrs: { role: "main" }
            },
            [
              i("filters", {
                attrs: {
                  dataToFilter: t.inspirationsFilters,
                  categoryAlias: t.categoryAlias,
                  selectedProduct: t.activeProduct,
                  hasSelect: !0
                }
              }),
              t._v(" "),
              i("dropdown-products"),
              t._v(" "),
              i("page-transition", {
                ref: "pages",
                attrs: {
                  pages: t.categories,
                  preventTransition: t.dropdownIsOpened,
                  initialPageIndex: t.categoryIndex
                },
                on: { pageChanged: t.onPageChanged },
                scopedSlots: t._u([
                  {
                    key: "default",
                    fn: function(e) {
                      return [
                        e.data
                          ? i("p", {
                              staticClass: "heading-inspiration-mobile",
                              domProps: { textContent: t._s(e.data.name) }
                            })
                          : t._e(),
                        t._v(" "),
                        e.data && e.data.recipes.length
                          ? i(
                              "div",
                              { staticClass: "inspiration-line-intro" },
                              [
                                i("p", {
                                  staticClass: "inspiration-line-text",
                                  domProps: {
                                    textContent: t._s(e.data.description)
                                  }
                                }),
                                t._v(" "),
                                i(
                                  "div",
                                  { staticClass: "to-other-page__block" },
                                  [
                                    i(
                                      "span",
                                      { staticClass: "to-other-page__text" },
                                      [t._v("Know more:")]
                                    ),
                                    t._v(" "),
                                    i(
                                      "router-link",
                                      {
                                        directives: [
                                          { name: "split", rawName: "v-split" }
                                        ],
                                        staticClass: "to-other-page__link",
                                        attrs: { to: { name: "collections" } }
                                      },
                                      [t._v("Our production")]
                                    ),
                                    t._v(" "),
                                    i(
                                      "svg",
                                      {
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "6",
                                          height: "9",
                                          viewBox: "0 0 6 9"
                                        }
                                      },
                                      [
                                        i(
                                          "g",
                                          {
                                            attrs: {
                                              fill: "#140C07",
                                              "fill-rule": "evenodd"
                                            }
                                          },
                                          [
                                            i("path", {
                                              attrs: {
                                                d:
                                                  "M.525 8.268l.707.707 4.243-4.243-.707-.707z"
                                              }
                                            }),
                                            t._v(" "),
                                            i("path", {
                                              attrs: {
                                                d:
                                                  "M.525.732l.707-.707 4.243 4.243-.707.707z"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          : t._e(),
                        t._v(" "),
                        e.data
                          ? i("grid", {
                              attrs: {
                                data: e.data.recipes,
                                filter: {
                                  category: e.data.name.toLowerCase(),
                                  key: "product",
                                  value: t.activeProduct.name
                                    ? "Polugar " + t.activeProduct.name
                                    : void 0
                                }
                              }
                            })
                          : t._e(),
                        t._v(" "),
                        e.next
                          ? i(
                              "div",
                              { staticClass: "product-next-collection" },
                              [
                                i(
                                  "p",
                                  {
                                    staticClass:
                                      "product-next-collection__heading"
                                  },
                                  [t._v("next category")]
                                ),
                                t._v(" "),
                                i(
                                  "p",
                                  {
                                    staticClass:
                                      "product-next-collection__scroll-text"
                                  },
                                  [t._v("keep scrolling")]
                                ),
                                t._v(" "),
                                i("div", {
                                  staticClass:
                                    "product-next-collection__button",
                                  on: {
                                    click: function(e) {
                                      t.$refs.pages.changePage();
                                    }
                                  }
                                }),
                                t._v(" "),
                                i(
                                  "div",
                                  {
                                    staticClass:
                                      "product-next-collection__big-text",
                                    style: {
                                      transform: e.animating
                                        ? "translateY(-5vw)"
                                        : null
                                    }
                                  },
                                  [
                                    i("p", {
                                      domProps: {
                                        textContent: t._s(e.next.name)
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : t._e()
                      ];
                    }
                  }
                ])
              }),
              t._v(" "),
              i("follow-pattern")
            ],
            1
          );
        },
        ks = [],
        Ps = { render: Ss, staticRenderFns: ks },
        Ts = Ps,
        Bs = i("VU/8"),
        Ms = b,
        As = Bs($s, Ts, !1, Ms, null, null),
        Is = As.exports,
        Ds = { name: "not-found", components: { Socials: Lt } },
        Es = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "main",
            { staticClass: "page-notfound" },
            [
              i("p", { staticClass: "top-text" }, [t._v("Page not found")]),
              t._v(" "),
              i("socials"),
              t._v(" "),
              i("div", { staticClass: "container-notfound" }, [
                i("h1", [t._v("404")]),
                t._v(" "),
                t._m(0),
                t._v(" "),
                i(
                  "div",
                  { staticClass: "to-other-page__block" },
                  [
                    i("span", { staticClass: "to-other-page__text" }, [
                      t._v("Try another way:")
                    ]),
                    t._v(" "),
                    i(
                      "router-link",
                      {
                        directives: [{ name: "split", rawName: "v-split" }],
                        staticClass: "to-other-page__link",
                        attrs: { to: { name: "home" } }
                      },
                      [t._v("MAIN PAGE")]
                    ),
                    t._v(" "),
                    i(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "6",
                          height: "9",
                          viewBox: "0 0 6 9"
                        }
                      },
                      [
                        i(
                          "g",
                          {
                            attrs: { fill: "#140C07", "fill-rule": "evenodd" }
                          },
                          [
                            i("path", {
                              attrs: {
                                d: "M.525 8.268l.707.707 4.243-4.243-.707-.707z"
                              }
                            }),
                            t._v(" "),
                            i("path", {
                              attrs: {
                                d: "M.525.732l.707-.707 4.243 4.243-.707.707z"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          );
        },
        Ls = [
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("p", [
              t._v(
                "The page you are looking for could not be found. You can go to the\n      "
              ),
              i("i", [t._v("main page")]),
              t._v(" or use the navigation menu.\n    ")
            ]);
          }
        ],
        Os = { render: Es, staticRenderFns: Ls },
        Rs = Os,
        Fs = i("VU/8"),
        zs = x,
        Ws = Fs(Ds, Rs, !1, zs, null, null),
        Vs = Ws.exports,
        Ns = (i("aykR"), i("Dia2")),
        Hs = i.n(Ns);
      (window.videojs = Hs.a),
        (window.videojs = window.videojs.default || window.videojs);
      var Gs = {
          name: "video-player",
          props: {
            options: { type: Object, required: !0 },
            start: { type: Number, default: 0 },
            playsinline: { type: Boolean, default: !1 },
            customEventName: { type: String, default: "statechanged" }
          },
          mounted: function() {
            this.player || this.initialize();
          },
          beforeDestroy: function() {
            this.player && this.dispose();
          },
          methods: {
            initialize: function() {
              var t = this;
              this.player = null;
              var e = ii()(
                  {
                    autoplay: !1,
                    controls: !0,
                    preload: "auto",
                    fluid: !1,
                    muted: !1,
                    width: "100%",
                    height: "360",
                    language: "en",
                    controlBar: {
                      remainingTimeDisplay: !1,
                      playToggle: {},
                      progressControl: {},
                      fullscreenToggle: {},
                      volumeMenuButton: { inline: !1, vertical: !0 }
                    },
                    techOrder: ["html5"],
                    plugins: {}
                  },
                  this.options
                ),
                i = this.playsinline;
              i &&
                (this.$el.children[0].setAttribute("playsinline", i),
                this.$el.children[0].setAttribute("webkit-playsinline", i));
              var s = function(e, i) {
                if ((e && t.$emit(e, t.player), i)) {
                  var s = {};
                  (s[e] = i), t.$emit(t.customEventName, s);
                }
              };
              e.plugins && delete e.plugins.__ob__,
                (this.player = Hs()(this.$el.children[0], e, function() {
                  var e = this;
                  t.$emit("ready", t.player);
                  for (
                    var i = [
                        "loadeddata",
                        "canplay",
                        "canplaythrough",
                        "play",
                        "pause",
                        "seeking",
                        "seeked",
                        "waiting",
                        "playing",
                        "ended",
                        "error",
                        "useractive",
                        "userinactive",
                        "click",
                        "touchend"
                      ],
                      n = 0;
                    n < i.length;
                    n++
                  )
                    !(function(t) {
                      e.on(t, function() {
                        s(t, !0);
                      });
                    })(i[n]);
                  this.on("timeupdate", function() {
                    s("timeupdate", this.currentTime());
                  });
                }));
            },
            dispose: function() {
              if (this.player && Hs.a) {
                if (
                  (this.player.pause && this.player.pause(),
                  Hs()(this.$el.children[0]).dispose(),
                  !this.$el.children.length)
                ) {
                  var t = document.createElement("video");
                  (t.className = "video-js"), this.$el.appendChild(t);
                }
                this.player = null;
              }
            }
          },
          watch: {
            options: {
              deep: !0,
              handler: function(t) {
                this.dispose(),
                  t && t.sources && t.sources.length && this.initialize();
              }
            }
          }
        },
        Ys = function() {
          var t = this,
            e = t.$createElement;
          t._self._c;
          return t._m(0);
        },
        qs = [
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "video-player" }, [
              i("video", { staticClass: "video-js" })
            ]);
          }
        ],
        js = { render: Ys, staticRenderFns: qs },
        Us = js,
        Xs = i("VU/8"),
        Ks = Xs(Gs, Us, !1, null, null, null),
        Qs = Ks.exports,
        Zs = {
          name: "player",
          components: { videoPlayer: Qs },
          props: ["source", "poster", "active", "thumb", "playing"],
          data: function() {
            return {
              playerPaused: !0,
              playerSeeking: !1,
              playerOptions: {
                bigPlayButton: !1,
                controlBar: {
                  audioTrack: !1,
                  timeDivider: !1,
                  durationDisplay: !1,
                  fullscreenToggle: !1,
                  currentTimeDisplay: !1,
                  loadProgressBar: !1,
                  liveDisplay: !1,
                  playbackRateMenuButton: !1,
                  mouseTimeDisplay: !1,
                  volumePanel: !1,
                  chaptersButton: !1,
                  descriptionsButton: !1,
                  captionsButton: !1,
                  subsCapsButton: !1,
                  subsCapsMenuItem: !1,
                  remainingTimeDisplay: !1
                },
                modalDialog: !1,
                autoplay: this.active,
                loop: !1,
                muted: !0,
                language: "en",
                techOrder: ["html5"],
                sources: [{ src: this.source }],
                playing: this.playing,
                poster: this.poster
              }
            };
          },
          computed: {
            player: function() {
              return this.$refs.videoPlayer.player;
            }
          },
          watch: {
            playerPaused: function(t) {
              this.$emit("playerPaused", t);
            },
            playerSeeking: function(t) {
              this.$emit("seeking", t);
            },
            playing: function(t) {
              t ? this.player.play() : this.player.pause();
            },
            active: function(t) {
              t ? this.player.play() : this.player.pause();
            }
          },
          methods: {
            onPlayerTimeupdate: function() {
              this.updatePlayBtnPosition();
            },
            onPlayerPlaying: function() {
              this.playerPaused = !1;
            },
            onPlayerPause: function() {
              this.playerPaused = !0;
            },
            onSeeking: function() {
              this.playerSeeking = !0;
            },
            onSeeked: function() {
              this.playerSeeking = !1;
            },
            onClick: function(t) {
              this.$emit("click", t);
            },
            updatePlayBtnPosition: function() {
              var t = this.$refs.videoPlayer.$el.querySelector(
                  ".vjs-play-control"
                ),
                e = (this.player.currentTime() / this.player.duration()) * 100,
                i = this.$refs.videoPlayer.$el.querySelector(".vjs-control-bar")
                  .clientWidth,
                s = (e * i) / 100;
              N.a.to(t, 0, { x: s });
            },
            onResize: function() {
              this.updatePlayBtnPosition();
            },
            onTouchend: function() {
              this.playerPaused = !this.playerPaused;
            }
          },
          mounted: function() {
            window.addEventListener("resize", this.onResize);
          },
          destroyed: function() {
            window.removeEventListener("resize", this.onResize);
          }
        },
        Js = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("video-player", {
            ref: "videoPlayer",
            staticClass: "vjs-custom-skin",
            attrs: { playsinline: !0, options: t.playerOptions },
            on: {
              timeupdate: function(e) {
                t.onPlayerTimeupdate(e);
              },
              playing: function(e) {
                t.onPlayerPlaying(e);
              },
              pause: function(e) {
                t.onPlayerPause(e);
              },
              load: function(e) {
                t.onPlayerLoad(e);
              },
              click: function(e) {
                t.onClick(e);
              },
              touchend: function(e) {
                t.onTouchend(e);
              },
              seeking: function(e) {
                t.onSeeking(e);
              },
              seeked: function(e) {
                t.onSeeked(e);
              }
            }
          });
        },
        tn = [],
        en = { render: Js, staticRenderFns: tn },
        sn = en,
        nn = i("VU/8"),
        on = $,
        an = nn(Zs, sn, !1, on, null, null),
        rn = an.exports,
        ln = {
          name: "gallery",
          components: { Player: rn },
          props: {
            gallery: Array,
            pageIndex: Number,
            enabled: Boolean,
            isVertical: Boolean
          },
          data: function() {
            return {
              animate: !1,
              autoplay: !0,
              activeSlide: 0,
              dragging: !1,
              elapsedTime: 0,
              interval: null,
              isFullscreen: !1,
              playerPaused: !0,
              playerSeeking: !1,
              scaleImage: 1,
              sliderDraggable: null,
              snapData: [],
              timeout: null,
              userActive: !1
            };
          },
          computed: {
            previousSlide: function() {
              return this.activeSlide <= 0
                ? this.activeSlide
                : this.activeSlide - 1;
            },
            nextSlide: function() {
              return this.activeSlide >= this.gallery.length - 1
                ? this.activeSlide
                : this.activeSlide + 1;
            },
            arrowsStyle: function() {
              return {
                opacity: this.gallery.length <= 1 ? 0 : "",
                zIndex: this.gallery.length <= 1 ? -4 : "",
                pointerEvents: this.gallery.length <= 1 ? "none" : ""
              };
            },
            progressbarStyle: function() {
              var t =
                (this.autoplay ? this.elapsedTime : this.activeSlide) /
                (this.gallery.length - 1);
              return {
                transform: "scaleX(" + Math.min(t, 1) + ")",
                transitionDuration: this.elapsedTime ? null : "0ms"
              };
            }
          },
          watch: {
            activeSlide: function(t, e) {
              this.centerSlide(), this.animationActiveThumb(t, e);
            },
            dragging: function() {
              this.$emit("galleryIsActive", this.isFullscreen || this.dragging);
            },
            enabled: function() {
              this.adjustSlides();
            },
            isFullscreen: function(t) {
              this.isVertical
                ? this.staggerThumbs(t)
                : this.animateGalleryFadeOut(t),
                this.getSnapData(),
                this.$emit("galleryIsActive", t || this.dragging),
                W.$emit("isFullscreenGallery", t),
                W.$emit("toggleAppClass", "gallery-user-notfullscreen", !t),
                W.$emit("toggleAppClass", "fullscreen-gallery", t),
                t && clearInterval(this.interval);
            },
            playerPaused: function(t) {
              t
                ? W.$emit("toggleAppClass", "gallery-user-inactive", !t)
                : (this.onUserActive(), this.openGallery());
            },
            scaleImage: function(t) {
              N.a.to(this.$refs.slides[this.activeSlide], 1, {
                scale: t,
                clearProps: "scale"
              });
            },
            userActive: function(t) {
              var e = this.$refs.slides[this.activeSlide].hasOwnProperty("$el");
              (this.playerPaused && this.playerSeeking) ||
                !e ||
                W.$emit("toggleAppClass", "gallery-user-inactive", !t);
            }
          },
          mounted: function() {
            W.$on("onToggleMenu", this.onToggleMenu),
              window.addEventListener("resize", this.onResize),
              this.initGallery();
          },
          destroyed: function() {
            window.removeEventListener("resize", this.onResize),
              clearTimeout(this.timeout),
              clearInterval(this.interval);
          },
          methods: {
            initGallery: function() {
              var t = this;
              ai()(this.$refs.gallery, function() {
                t.getSnapData().then(function() {
                  t.onSetActiveSlide(
                    t.activeSlide,
                    t.$store.windowWidth >= 1024
                  ),
                    (t.sliderDraggable = be.a.create(t.$refs.slider, {
                      type: "x",
                      bounds: t.$refs.slider.parentElement,
                      lockAxis: !0,
                      dragClickables: !0,
                      throwProps: !0,
                      snap: t.onDraggableSnap,
                      onDragStart: function() {
                        if (!t.playerPaused || t.playerSeeking)
                          return void t.sliderDraggable[0].endDrag();
                        t.dragging = !0;
                      },
                      onDragEnd: function() {
                        setTimeout(function() {
                          return (t.dragging = !1);
                        }, 1e3);
                      },
                      zIndexBoost: !1
                    })),
                    t.sliderDraggable[0].enabled(t.$store.supportsTouch);
                }),
                  t.adjustSlides(),
                  t.centerSlide(!1);
              }),
                this.startAutoplay();
            },
            getGalleryWidth: function() {
              var t = this;
              return new O.a(function(e) {
                (t.$refs.slider.style.width = ""),
                  t.$refs.slides.forEach(function(t) {
                    return t.hasOwnProperty("$el")
                      ? (t.$el.style.flexGrow = 0)
                      : (t.style.flexGrow = 0);
                  }),
                  t.$nextTick(function() {
                    var i = 0;
                    if (
                      (t.$refs.slides.reduce(function(t, e) {
                        (i += e.hasOwnProperty("$el")
                          ? e.$el.clientWidth
                          : e.clientWidth),
                          e.hasOwnProperty("$el")
                            ? (e.$el.style.flexGrow = "")
                            : (e.style.flexGrow = "");
                      }, 0),
                      (t.$refs.slider.style.width = i + "px"),
                      t.isFullscreen || t.isVertical)
                    ) {
                      var s = t.$store.windowWidth;
                      e(s * (t.isFullscreen || s < 1024 ? 1 : 0.4));
                    } else e(t.$refs.gallery.clientWidth);
                  });
              });
            },
            getSnapData: function() {
              var t = this;
              return this.getGalleryWidth().then(function(e) {
                t.snapData = [];
                var i = 0;
                t.$refs.slides.forEach(function(s, n, o) {
                  var a = s.hasOwnProperty("$el")
                      ? s.$el.clientWidth
                      : s.clientWidth,
                    r = (e - a) / 2;
                  a <= e && (r = n === o.length - 1 ? e - a : 0 === n ? 0 : r),
                    t.snapData.push(i + r),
                    (i -= a);
                });
              });
            },
            adjustSlides: function() {
              var t = this;
              if (!this.enabled)
                return (
                  (this.activeSlide = 0),
                  (this.elapsedTime = 0),
                  void (this.scaleImage = 1)
                );
              this.getGalleryWidth().then(function(e) {
                t.$refs.slides.forEach(function(i) {
                  if (!i.hasOwnProperty("$el")) {
                    (i.style.width = ""), (i.style.minWidth = "");
                    var s = t.isVertical ? 0.4 * t.$store.windowWidth : e,
                      n = i.offsetWidth / i.offsetHeight,
                      o = s / t.$refs.gallery.offsetHeight,
                      a = t.$store.windowWidth >= 1024;
                    n <= o
                      ? ((i.style.minHeight = a ? "100%" : 0),
                        (i.style.height = ""),
                        (i.style.maxHeight = t.isVertical ? "none" : ""),
                        (i.style.minWidth = a && t.isVertical ? s + "px" : ""),
                        (i.style.width = a && t.isVertical ? s + "px" : "auto"))
                      : ((i.style.minHeight = "0"),
                        (i.style.height = a ? "100%" : ""),
                        (i.style.maxHeight = ""),
                        (i.style.minWidth = "0"),
                        (i.style.width = ""),
                        (i.style.flexGrow = 0),
                        setTimeout(function() {
                          return (i.style.flexGrow = "");
                        }, 0));
                  }
                });
              });
            },
            centerSlide: function() {
              var t = this,
                e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
              this.getGalleryWidth().then(function(i) {
                var s = t.$refs,
                  n = s.slider,
                  o = s.slides,
                  a = o[t.activeSlide],
                  r = a.hasOwnProperty("$el")
                    ? a.$el.clientWidth
                    : a.clientWidth,
                  l = 0 === t.activeSlide && r <= i,
                  c = t.activeSlide === o.length - 1 && r <= i,
                  d = 0;
                o.filter(function(e, i) {
                  return i < t.activeSlide;
                }).forEach(function(t) {
                  return (d -= t.hasOwnProperty("$el")
                    ? t.$el.clientWidth
                    : t.clientWidth);
                });
                var u = d - (r - i) / 2;
                (u = l ? 0 : c ? i - n.clientWidth : u),
                  N.a.to(n, e ? 1 : 0, { x: u });
              });
            },
            setOpenGallerySettingsForResize: function() {
              var t = this.$store.windowWidth >= 1024,
                e = this.$refs.gallery;
              this.isFullscreen &&
                N.a.to(
                  e,
                  0,
                  { width: t ? "100vw" : "", height: t ? "" : "100vh" },
                  0
                );
            },
            startAutoplay: function() {
              var t = this;
              if (this.isVertical && !(this.gallery.length <= 1)) {
                this.interval = setInterval(function() {
                  t.enabled &&
                    t.autoplay &&
                    ((t.scaleImage = t.scaleImage + 0.001),
                    (t.elapsedTime = (t.elapsedTime + 0.01).toFixed(2) % 5e3),
                    t.elapsedTime === t.activeSlide + 1 &&
                      ((t.activeSlide = t.activeSlide + 1), (t.scaleImage = 1)),
                    t.activeSlide === t.gallery.length &&
                      t.onSetActiveSlide(0));
                }, 50);
              }
            },
            openGallery: function() {
              var t = this;
              this.animate ||
                ((this.isFullscreen = !0),
                this.isVertical
                  ? this.$store.windowWidth >= 1024
                    ? ((this.animate = !0),
                      this.centerSlide(),
                      new G.a()
                        .to(this.$refs.gallery, 1, { width: "100vw" }, 0)
                        .to(
                          this.$refs.leftCircle,
                          1.4,
                          { scale: 1, opacity: 1, rotation: 360 },
                          0.4
                        )
                        .to(
                          this.$refs.rightCircle,
                          1.4,
                          { scale: 1, opacity: 1, rotation: -360 },
                          0.4
                        )
                        .to(this.$refs.btnClose, 0.6, { scale: 1 }, 0.8)
                        .to(
                          this.$refs.leftCircle,
                          1,
                          { scale: 0.7, opacity: 0, rotation: 540 },
                          1.4
                        )
                        .to(
                          this.$refs.rightCircle,
                          1,
                          { scale: 0.7, opacity: 0, rotation: -540 },
                          1.4
                        )
                        .set(
                          [this.$refs.arrowLeft, this.$refs.arrowRight],
                          {
                            pointerEvents: "auto",
                            clearProps: "pointerEvents"
                          },
                          2.2
                        ),
                      setTimeout(function() {
                        return (t.animate = !1);
                      }, 2e3))
                    : new G.a()
                        .to(this.$refs.gallery, 1, { height: "100vh" }, 0)
                        .to(this.$refs.btnClose, 0.6, { scale: 1 }, 0.2)
                  : (this.centerSlide(!1),
                    new G.a().to(this.$refs.btnClose, 0, { scale: 1 }, 0.8)));
            },
            animateGalleryFadeOut: function(t) {
              N.a.to(this.$refs.btnClose, 0.6, { scale: 1 }, t ? 0.7 : 0),
                W.$emit("toggleAnimate");
            },
            animationActiveThumb: function(t, e) {
              var i = this.$refs.thumb;
              N.a.fromTo(
                i[t],
                1,
                { y: "0px", opacity: 1 },
                { y: "-20px", opacity: 0.7 }
              ),
                N.a.fromTo(
                  i[e],
                  1,
                  { y: "-20px", opacity: 0.5 },
                  { y: "0px", opacity: 1 }
                );
            },
            staggerThumbs: function(t) {
              this.$store.windowWidth >= 1024 &&
                new G.a().staggerFromTo(
                  this.$refs.thumb,
                  t ? 0.9 : 0.5,
                  {
                    opacity: t ? 0 : 1,
                    x: t ? "0px" : "+=-15px",
                    ease: t ? "" : "Power1.easeOut"
                  },
                  {
                    opacity: t ? 1 : 0,
                    x: t ? "+=-15px" : "0px",
                    ease: t ? "Power1.easeOut" : "",
                    clearProps: t ? "" : "opacity"
                  },
                  t ? -0.2 : 0.1
                );
            },
            onSetActiveSlide: function(t) {
              var e =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i = arguments[2];
              (this.activeSlide = t),
                (this.autoplay = e),
                (this.elapsedTime = 0),
                (this.scaleImage = 1),
                i &&
                  !this.isFullscreen &&
                  this.gallery.length > 1 &&
                  this.openGallery();
            },
            onCloseGallery: function() {
              var t = this;
              if (!this.animate) {
                var e = this.$store.windowWidth,
                  i = this.$refs.gallery;
                (this.isFullscreen = !1),
                  this.isVertical
                    ? e >= 1024
                      ? ((this.animate = !0),
                        this.centerSlide(),
                        new G.a()
                          .to(i, 1, { width: "40vw", clearProps: "width" }, 0)
                          .set(
                            [this.$refs.arrowLeft, this.$refs.arrowRight],
                            {
                              pointerEvents: "none",
                              clearProps: "pointerEvents"
                            },
                            0
                          )
                          .to(this.$refs.btnClose, 0.6, { scale: 0 }, 0),
                        setTimeout(function() {
                          return (t.animate = !1);
                        }, 2e3))
                      : new G.a()
                          .to(
                            i,
                            1,
                            {
                              height: (e >= 768 ? 616 : 320) + "px",
                              clearProps: "height"
                            },
                            0
                          )
                          .to(this.$refs.btnClose, 0.6, { scale: 0 }, 0)
                    : this.centerSlide(!1);
              }
            },
            onToggleMenu: function(t) {
              this.autoplay = void 0 !== t ? t : !this.autoplay;
            },
            onPlayerPaused: function(t) {
              this.playerPaused = t;
            },
            onPlayerSeeking: function(t) {
              this.playerSeeking = t;
            },
            onUserActive: function() {
              var t = this;
              clearTimeout(this.timeout),
                (this.timeout = setTimeout(function() {
                  t.userActive = !1;
                }, 2e3)),
                (this.userActive = !0);
            },
            onUserInactive: function() {
              clearTimeout(this.timeout);
            },
            onDraggableSnap: function(t) {
              var e = this,
                i = [];
              return (
                this.snapData.reduce(function(s, n) {
                  i.push(Math.abs(t - n)),
                    (e.activeSlide = i.findIndex(function(t) {
                      return t === Math.min.apply(null, i);
                    }));
                }, this.snapData[0]),
                this.snapData[this.activeSlide]
              );
            },
            onResize: function() {
              this.getSnapData(),
                this.adjustSlides(),
                this.centerSlide(!1),
                this.setOpenGallerySettingsForResize(),
                (this.autoplay =
                  !(this.$store.windowWidth < 1024) && this.autoplay);
            }
          }
        },
        cn = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.gallery
            ? i(
                "div",
                {
                  ref: "gallery",
                  staticClass: "gallery",
                  class: { "gallery-fullscreen": t.isFullscreen }
                },
                [
                  i(
                    "div",
                    {
                      ref: "galleryClosed",
                      staticClass: "gallery__area-close",
                      on: { click: t.onCloseGallery }
                    },
                    [
                      i("div", {
                        ref: "btnClose",
                        staticClass: "gallery__btn-close"
                      }),
                      t._v(" "),
                      t.$store.supportsTouch
                        ? t._e()
                        : i(
                            "p",
                            {
                              directives: [
                                {
                                  name: "wave",
                                  rawName: "v-wave",
                                  value: { hover: t.$refs.galleryClosed },
                                  expression: "{ hover: $refs.galleryClosed }"
                                }
                              ],
                              staticClass:
                                "gallery__text-closed wave-animation-text"
                            },
                            [t._v("Close")]
                          )
                    ]
                  ),
                  t._v(" "),
                  t._l(t.gallery, function(e, s) {
                    return i("div", {
                      key: s,
                      class: [
                        "gallery__playback-button-" +
                          (t.playerPaused ? "pause" : "play"),
                        { visible: e.videos && s === t.activeSlide }
                      ],
                      on: {
                        click: function(e) {
                          t.playerPaused = !t.playerPaused;
                        }
                      }
                    });
                  }),
                  t._v(" "),
                  t.isVertical
                    ? i("div", {
                        ref: "leftCircle",
                        staticClass: "animate-circle left",
                        style: t.arrowsStyle
                      })
                    : t._e(),
                  t._v(" "),
                  t.isVertical
                    ? i("div", {
                        ref: "rightCircle",
                        staticClass: "animate-circle right",
                        style: t.arrowsStyle
                      })
                    : t._e(),
                  t._v(" "),
                  t.isVertical && t.gallery.length > 1
                    ? i(
                        "div",
                        {
                          ref: "arrowLeft",
                          staticClass: "gallery__arrow-fullscreen-left",
                          class: {
                            inactive: t.isFullscreen && 0 === t.activeSlide
                          },
                          on: {
                            click: function(e) {
                              t.onSetActiveSlide(t.previousSlide, !1);
                            }
                          }
                        },
                        [
                          i("div", { staticClass: "arrow-circle" }),
                          t._v(" "),
                          i("div", { staticClass: "point" }),
                          t._v(" "),
                          i("div", { staticClass: "point" })
                        ]
                      )
                    : t._e(),
                  t._v(" "),
                  t.isVertical && t.gallery.length > 1
                    ? i(
                        "div",
                        {
                          ref: "arrowRight",
                          staticClass: "gallery__arrow-fullscreen-right",
                          class: {
                            inactive:
                              t.isFullscreen &&
                              t.activeSlide >= t.gallery.length - 1
                          },
                          on: {
                            click: function(e) {
                              t.onSetActiveSlide(t.nextSlide, !1);
                            }
                          }
                        },
                        [
                          i("div", { staticClass: "arrow-circle" }),
                          t._v(" "),
                          i("div", { staticClass: "point" }),
                          t._v(" "),
                          i("div", { staticClass: "point" })
                        ]
                      )
                    : t._e(),
                  t._v(" "),
                  t.isVertical && t.gallery.length > 1
                    ? i(
                        "div",
                        { staticClass: "timeline" },
                        [
                          i("div", { staticClass: "progressbar" }, [
                            t.gallery.length > 1
                              ? i("div", {
                                  staticClass: "bar",
                                  style: t.progressbarStyle
                                })
                              : t._e()
                          ]),
                          t._v(" "),
                          t._l(t.gallery, function(e, s) {
                            return i(
                              "div",
                              {
                                key: s,
                                staticClass: "marker",
                                class: { "marker-active": s === t.activeSlide }
                              },
                              [
                                i("div", {
                                  staticClass: "progress-circle",
                                  on: {
                                    click: function(e) {
                                      if (e.target !== e.currentTarget)
                                        return null;
                                      t.onSetActiveSlide(s, !1);
                                    }
                                  }
                                }),
                                t._v(" "),
                                s === t.activeSlide && 0 !== s
                                  ? i(
                                      "div",
                                      {
                                        staticClass: "progress-arrows-left",
                                        on: {
                                          click: function(e) {
                                            t.onSetActiveSlide(
                                              t.activeSlide - 1,
                                              !1
                                            );
                                          }
                                        }
                                      },
                                      [
                                        i("div", {
                                          staticClass: "progress-arrow-left"
                                        }),
                                        t._v(" "),
                                        i("div", {
                                          staticClass:
                                            "progress-arrow-left-opacity"
                                        })
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                s !== t.gallery.length - 1 &&
                                s === t.activeSlide
                                  ? i(
                                      "div",
                                      {
                                        staticClass: "progress-arrows-right",
                                        on: {
                                          click: function(e) {
                                            t.onSetActiveSlide(
                                              t.activeSlide + 1,
                                              !1
                                            );
                                          }
                                        }
                                      },
                                      [
                                        i("div", {
                                          staticClass: "progress-arrow-right"
                                        }),
                                        t._v(" "),
                                        i("div", {
                                          staticClass:
                                            "progress-arrow-right-opacity"
                                        })
                                      ]
                                    )
                                  : t._e()
                              ]
                            );
                          })
                        ],
                        2
                      )
                    : t._e(),
                  t._v(" "),
                  i(
                    "div",
                    {
                      ref: "slider",
                      staticClass: "gallery__slider",
                      on: {
                        mousemove: t.onUserActive,
                        mouseleave: t.onUserInactive
                      }
                    },
                    [
                      t._l(t.gallery, function(e, s) {
                        return [
                          e.videos
                            ? i("player", {
                                key: "video" + s,
                                ref: "slides",
                                refInFor: !0,
                                attrs: {
                                  active: t.activeSlide === s && t.isFullscreen,
                                  playing: !t.playerPaused,
                                  poster: e.img,
                                  source: e.videos
                                },
                                on: {
                                  seeking: t.onPlayerSeeking,
                                  playerPaused: t.onPlayerPaused,
                                  click: function(e) {
                                    t.onSetActiveSlide(s || 0, !1, !0);
                                  },
                                  touchstart: function(e) {
                                    t.onSetActiveSlide(s || 0, !1, !0);
                                  }
                                }
                              })
                            : i("img", {
                                key: "img" + s,
                                ref: "slides",
                                refInFor: !0,
                                staticClass: "gallery__slide",
                                class: {
                                  active: s === t.activeSlide,
                                  inactive: t.gallery.length <= 1
                                },
                                attrs: { src: !e.videos && e.img2x },
                                on: {
                                  click: function(e) {
                                    t.onSetActiveSlide(
                                      s || 0,
                                      !1,
                                      !(t.$store.windowWidth < 1024) ||
                                        s === t.activeSlide
                                    );
                                  }
                                }
                              })
                        ];
                      }),
                      t._v(" "),
                      i("div", { staticClass: "gallery__mute-button" })
                    ],
                    2
                  ),
                  t._v(" "),
                  i(
                    "div",
                    { ref: "thumbs", staticClass: "gallery__thumbs" },
                    t._l(t.gallery, function(e, s) {
                      return i("img", {
                        key: s,
                        ref: "thumb",
                        refInFor: !0,
                        staticClass: "gallery__thumb",
                        class: {
                          active: s === t.activeSlide,
                          hidden: t.gallery.length <= 1
                        },
                        attrs: { src: e.thumb },
                        on: {
                          click: function(e) {
                            t.onSetActiveSlide(s, !1);
                          }
                        }
                      });
                    })
                  )
                ],
                2
              )
            : t._e();
        },
        dn = [],
        un = { render: cn, staticRenderFns: dn },
        hn = un,
        pn = i("VU/8"),
        fn = S,
        vn = pn(ln, hn, !1, fn, null, null),
        gn = vn.exports,
        mn = {
          name: "recipes",
          components: { Banner: vi, Gallery: gn, PageTransition: Gi },
          props: { alias: String },
          data: function() {
            return {
              galleryIsActive: !1,
              recipes: [],
              recipesAliases: [],
              recipeIndex: 0
            };
          },
          computed: {
            gallery: function() {
              return this.recipes[this.recipeIndex].images || [];
            },
            banner: function() {
              var t = this,
                e = this.$store.products.find(function(e) {
                  return e.alias === t.recipes[t.recipeIndex].product_alias;
                });
              return ii()({}, e, {
                type: "product-banner",
                text: "Explore Polugar apperance, taste, and flavor",
                footer_text: "in details"
              });
            },
            recipe: function() {
              return this.recipes[this.recipeIndex];
            }
          },
          watch: {
            alias: function(t) {
              var e = this;
              this.recipes.findIndex(function(e) {
                return e.alias === t;
              }) >= 0
                ? this.$refs.pages.changePage(t)
                : this.fetchData(t).then(function() {
                    e.$refs.pages.changePage(t), e.fetchNextRecipeData();
                  });
            },
            recipe: function(t) {
              this.$store.setDocumentTitle(t.recipe_name);
            },
            recipeIndex: function(t) {
              var e = this,
                i = this.recipes,
                s = this.recipesAliases;
              t < 0 ||
                t >= i.length ||
                (t > -1 &&
                  this.$router.replace(
                    { name: "recipe", params: { alias: i[t].alias } },
                    function() {
                      t === i.length - 1 &&
                        i.length < s.length &&
                        e.$nextTick(function() {
                          return e.fetchNextRecipeData();
                        });
                    }
                  ));
            }
          },
          mounted: function() {
            this.fetchData();
          },
          methods: {
            fetchData: function(t) {
              var e = this;
              z.get(
                "/recipes/" +
                  (t || this.alias) +
                  ".json"
              )
                .then(function(t) {
                  e.recipes.push(t.data),
                    e.recipesAliases.length || e.fetchRecipesList();
                })
                .catch(function() {
                  e.$router.replace({ name: "notfound" });
                });
            },
            fetchRecipesList: function() {
              var t = this;
              this.$store
                .getInspirations()
                .then(function(e) {
                  var i = e.find(function(e) {
                    return e.alias === t.recipes[0].category_alias;
                  });
                  i &&
                    (i.recipes.forEach(function(e) {
                      t.recipesAliases.push(e.alias);
                    }),
                    t.fetchNextRecipeData());
                })
                .catch(function(t) {
                  console.warn(t);
                });
            },
            fetchNextRecipeData: function() {
              for (var t = this, e = 0; e < this.recipesAliases.length; e++) {
                if (
                  "break" ===
                  (function(e) {
                    if (
                      !t.recipes.find(function(i) {
                        return i.alias === t.recipesAliases[e];
                      })
                    )
                      return t.fetchData(t.recipesAliases[e]), "break";
                  })(e)
                )
                  break;
              }
            },
            onGalleryToggle: function(t) {
              this.galleryIsActive = t;
            },
            onPageChanged: function(t) {
              this.recipeIndex = t;
            }
          }
        },
        _n = function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "main",
            { attrs: { role: "main" } },
            [
              s("page-transition", {
                ref: "pages",
                attrs: {
                  pages: t.recipes,
                  animatePage: t.$store.windowWidth < 1024,
                  preventTransition: t.galleryIsActive,
                  gradient: ""
                },
                on: { pageChanged: t.onPageChanged },
                scopedSlots: t._u([
                  {
                    key: "default",
                    fn: function(e) {
                      return [
                        s("gallery", {
                          ref: "gallery",
                          style: {
                            transform:
                              "translate3d(0, " +
                              100 * t.$refs.pages.getPagePosition(e.index) +
                              "vh, 0)"
                          },
                          attrs: {
                            gallery: e.data.images,
                            enabled: e.active,
                            isVertical: !0,
                            pageIndex: t.recipeIndex
                          },
                          on: { galleryIsActive: t.onGalleryToggle }
                        }),
                        t._v(" "),
                        s(
                          "div",
                          {
                            ref: "recipeInfo",
                            staticClass: "recipe-info",
                            class: { active: e.active },
                            style: {
                              transform:
                                "translate3d(0, " +
                                100 * t.$refs.pages.getPagePosition(e.index) +
                                "vh, 0)"
                            }
                          },
                          [
                            s(
                              "div",
                              {
                                ref: "textArea",
                                staticClass: "text-area animate-children"
                              },
                              [
                                s("div", { staticClass: "pre-header" }, [
                                  e.data.category
                                    ? s("span", {
                                        staticClass: "recipe-collection",
                                        domProps: {
                                          textContent: t._s(e.data.category)
                                        }
                                      })
                                    : t._e(),
                                  t._v(" "),
                                  e.data.product_name
                                    ? s("span", {
                                        staticClass: "component",
                                        domProps: {
                                          textContent: t._s(
                                            "Polugar " + e.data.product_name
                                          )
                                        }
                                      })
                                    : t._e()
                                ]),
                                t._v(" "),
                                s("div", { staticClass: "header" }, [
                                  s("h1", {
                                    domProps: {
                                      textContent: t._s(e.data.recipe_name)
                                    }
                                  }),
                                  t._v(" "),
                                  e.data.author && e.data.author.name
                                    ? s("h4", {
                                        domProps: {
                                          textContent: t._s(e.data.author.name)
                                        }
                                      })
                                    : t._e(),
                                  t._v(" "),
                                  e.data.author && e.data.author.location
                                    ? s("img", { attrs: { src: i("qo5O") } })
                                    : t._e(),
                                  t._v(" "),
                                  e.data.author && e.data.author.location
                                    ? s(
                                        "a",
                                        {
                                          attrs: {
                                            href: e.data.author.location_url,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                          }
                                        },
                                        [
                                          e.data.author &&
                                          e.data.author.location
                                            ? s("span", {
                                                staticClass: "place",
                                                domProps: {
                                                  textContent: t._s(
                                                    e.data.author.location
                                                  )
                                                }
                                              })
                                            : t._e()
                                        ]
                                      )
                                    : t._e()
                                ]),
                                t._v(" "),
                                e.data.ingredients
                                  ? s(
                                      "div",
                                      { staticClass: "components" },
                                      t._l(e.data.ingredients, function(e, i) {
                                        return s(
                                          "div",
                                          { key: i, staticClass: "component" },
                                          [
                                            e.ingredient
                                              ? s(
                                                  "span",
                                                  { staticClass: "name" },
                                                  [
                                                    s("b", {
                                                      domProps: {
                                                        textContent: t._s(
                                                          e.unit_volume
                                                        )
                                                      }
                                                    })
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            s("span", {
                                              staticClass: "name",
                                              domProps: {
                                                textContent: t._s(e.ingredient)
                                              }
                                            })
                                          ]
                                        );
                                      })
                                    )
                                  : t._e(),
                                t._v(" "),
                                t._l(e.data.info, function(e, i) {
                                  return s(
                                    "div",
                                    {
                                      key: i,
                                      staticClass: "instructions",
                                      class: { invisible: !e }
                                    },
                                    [
                                      s("span", {
                                        staticClass: "kind",
                                        domProps: { textContent: t._s(i + ":") }
                                      }),
                                      t._v(" "),
                                      s("span", {
                                        staticClass: "text",
                                        domProps: { textContent: t._s(e) }
                                      })
                                    ]
                                  );
                                }),
                                t._v(" "),
                                s(
                                  "div",
                                  { staticClass: "banner product" },
                                  [s("banner", { attrs: { data: t.banner } })],
                                  1
                                ),
                                t._v(" "),
                                e.data.description
                                  ? s("div", { staticClass: "description" }, [
                                      s("p", {
                                        domProps: {
                                          textContent: t._s(e.data.description)
                                        }
                                      })
                                    ])
                                  : t._e(),
                                t._v(" "),
                                e.data.author && e.data.author.bio
                                  ? s("div", { staticClass: "author" }, [
                                      s("p", {
                                        domProps: {
                                          innerHTML: t._s(e.data.author.bio)
                                        }
                                      })
                                    ])
                                  : t._e()
                              ],
                              2
                            ),
                            t._v(" "),
                            e.next
                              ? s(
                                  "div",
                                  { staticClass: "product-next-collection" },
                                  [
                                    s(
                                      "div",
                                      {
                                        ref: "scrollDownArrow",
                                        staticClass: "wrapper-block-next"
                                      },
                                      [
                                        s("p", {
                                          staticClass:
                                            "product-next-collection__heading",
                                          domProps: {
                                            textContent: t._s(
                                              e.next.recipe_name
                                            )
                                          }
                                        }),
                                        t._v(" "),
                                        s(
                                          "p",
                                          {
                                            staticClass:
                                              "product-next-collection__scroll-text"
                                          },
                                          [t._v("keep scrolling")]
                                        ),
                                        t._v(" "),
                                        s("div", {
                                          staticClass:
                                            "product-next-collection__button",
                                          on: {
                                            click: function(e) {
                                              t.$refs.pages.changePage();
                                            }
                                          }
                                        })
                                      ]
                                    ),
                                    t._v(" "),
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "product-next-collection__big-text",
                                        style: {
                                          transform: e.animating
                                            ? "translateY(-6vw)"
                                            : null
                                        }
                                      },
                                      [s("p", [t._v("Next")])]
                                    )
                                  ]
                                )
                              : t._e()
                          ]
                        )
                      ];
                    }
                  }
                ])
              })
            ],
            1
          );
        },
        yn = [],
        wn = { render: _n, staticRenderFns: yn },
        Cn = wn,
        bn = i("VU/8"),
        xn = k,
        $n = bn(mn, Cn, !1, xn, null, null),
        Sn = $n.exports,
        kn = {
          name: "history",
          components: {
            Avatars: Ae,
            Banner: vi,
            Gradient: mt,
            PatternSvg: Jt,
            Socials: Lt,
            FollowPattern: He
          },
          data: function() {
            return {
              activeSlide: 1,
              avatars: [],
              banners: [],
              gradientHidden: !0,
              isMenuOpened: !1,
              overflowSlide: !1,
              slidesCount: 2,
              wheeling: null,
              currentYear: new Date().getFullYear()
            };
          },
          computed: {
            textStyle: function() {
              var t = 2 === this.activeSlide && this.$store.windowWidth < 1024,
                e = this.$store.windowWidth;
              return {
                opacity: t ? 0 : 1,
                transform:
                  "translate3d(0, " +
                  (2 === this.activeSlide && e < 1024 ? -120 : 0) +
                  "px, 0)"
              };
            }
          },
          watch: {
            activeSlide: function(t) {
              var e = this;
              (this.gradientHidden = 1 === t && ""),
                setTimeout(function() {
                  e.overflowSlide = 2 === t;
                }, 1e3),
                (document.body.style.backgroundColor =
                  1 === t ? "#140c07" : "#f8f4f0"),
                W.$emit("hideLogoText", 1 !== t),
                W.$emit("getActiveSlide", t);
            }
          },
          mounted: function() {
            W.$on("isMenuOpened", this.onWheelingOff),
              window.addEventListener("wheel", this.onWheel),
              window.addEventListener("keydown", this.onKeydown),
              window.addEventListener("touchstart", this.onTouchstart),
              window.addEventListener("touchmove", this.onTouchmove),
              (document.body.style.backgroundColor = getComputedStyle(
                this.$el
              ).backgroundColor),
              (document.body.style.transition = getComputedStyle(
                this.$el
              ).transition),
              this.animateMainPattern(),
              this.getContacts(),
              this.createBanners();
          },
          destroyed: function() {
            (document.body.style.backgroundColor = null),
              (document.body.style.transition = null),
              window.removeEventListener("wheel", this.onWheel),
              window.removeEventListener("keydown", this.onKeydown),
              window.removeEventListener("touchstart", this.onTouchstart),
              window.removeEventListener("touchmove", this.onTouchmove);
          },
          methods: {
            animateMainPattern: function() {
              var t = this.$refs.mainPattern,
                e = t && t.querySelectorAll("path:not(.brush)"),
                i = t && t.querySelectorAll("path.brush");
              e && N.a.from(e, 3, { drawSVG: 0, ease: "Power1.easeInOut" }),
                i && N.a.from(i, 2, { opacity: 0, delay: 1.5 });
            },
            getContacts: function() {
              var t = this;
              z.get("/contacts.json")
                .then(function(e) {
                  (t.avatars = we()(e.data)),
                    t.avatars.forEach(function(t, e) {
                      return (t.index = e);
                    });
                })
                .catch(function(t) {
                  console.warn(t);
                });
            },
            createBanners: function() {
              this.banners = [];
              var t = this.$router.options.routes.find(function(t) {
                return "collections" === t.name;
              });
              t && this.banners.push(es()({ type: "route", route: t }, t.meta)),
                (t = this.$router.options.routes.find(function(t) {
                  return "inspirations" === t.name;
                })) &&
                  this.banners.push(es()({ type: "route", route: t }, t.meta));
            },
            scrollLanding: function(t) {
              var e = this;
              if (!this.wheeling && this.$store.adult && !this.isMenuOpened) {
                var i =
                    t < 0
                      ? Math.max(this.activeSlide - 1, 1)
                      : Math.min(this.activeSlide + 1, this.slidesCount),
                  s = 1 !== this.activeSlide ? this.$refs.slide2 : null;
                if (i !== this.activeSlide)
                  if (s && s.scrollHeight > s.clientHeight) {
                    var n =
                      i > this.activeSlide
                        ? s.scrollHeight - s.clientHeight
                        : 0;
                    s.scrollTop === n && (this.activeSlide = i);
                  } else this.activeSlide = i;
                this.wheeling = setTimeout(function() {
                  e.wheeling = null;
                }, 1500);
              }
            },
            onScrollDown: function() {
              this.activeSlide = 2;
            },
            onWheel: function(t) {
              this.scrollLanding(t.deltaY);
            },
            onKeydown: function(t) {
              switch (t.which) {
                case 38:
                  this.scrollLanding(-1);
                  break;
                case 40:
                  this.scrollLanding(1);
                  break;
                default:
                  return;
              }
            },
            onTouchstart: function(t) {
              (this.xDown = t.touches[0].clientX),
                (this.yDown = t.touches[0].clientY);
            },
            onTouchmove: function(t) {
              if (this.xDown && this.yDown) {
                var e = this.xDown - t.touches[0].clientX,
                  i = this.yDown - t.touches[0].clientY;
                Math.abs(e) < Math.abs(i) && this.scrollLanding(i),
                  (this.xDown = null),
                  (this.yDown = null);
              }
            },
            onRouteToContacts: function(t) {
              this.$router.push({
                name: "contacts",
                query: { person: this.$store.contacts[t].alias }
              });
            },
            onWheelingOff: function(t) {
              this.isMenuOpened = t;
            }
          }
        },
        Pn = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "main",
            {
              staticClass: "history",
              style: {
                "background-color": 1 === t.activeSlide ? "#140c07" : "#f8f4f0"
              },
              attrs: { role: "main" }
            },
            [
              i("follow-pattern", {
                attrs: { active: 2 === t.activeSlide, dark: !0 }
              }),
              t._v(" "),
              i("socials", {
                style: {
                  opacity: 1 === t.activeSlide ? 1 : 0,
                  "transition-delay": 1 === t.activeSlide ? "1100ms" : "0ms"
                }
              }),
              t._v(" "),
              i(
                "div",
                {
                  ref: "slide1",
                  staticClass: "slide-1",
                  style: {
                    "pointer-events": 1 === t.activeSlide ? "auto" : "none"
                  }
                },
                [
                  i("pattern-svg", {
                    attrs: {
                      active: t.$store.adult,
                      isDraw: !(2 === t.activeSlide)
                    }
                  }),
                  t._v(" "),
                  i(
                    "h1",
                    {
                      style: {
                        transform:
                          "translate3d(0, " +
                          (1 === t.activeSlide ? 0 : -35) +
                          "vh, 0)",
                        "transition-delay":
                          1 === t.activeSlide ? "100ms" : "0ms"
                      }
                    },
                    [t._v("HISTORY OF RUSSIAN NATIONAL DRINK")]
                  ),
                  t._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "years",
                      style: {
                        opacity:
                          1 === t.activeSlide || t.$store.windowWidth < 1024
                            ? 1
                            : 0,
                        "pointer-events": 1 === t.activeSlide ? "auto" : "none",
                        "transition-delay":
                          1 === t.activeSlide ? "200ms" : "0ms"
                      }
                    },
                    [
                      i(
                        "p",
                        {
                          style: [
                            t.textStyle,
                            {
                              "transition-delay":
                                2 === t.activeSlide &&
                                t.$store.windowWidth < 1024
                                  ? "0ms"
                                  : "280ms"
                            }
                          ]
                        },
                        [t._v("1515")]
                      ),
                      t._v(" "),
                      i(
                        "p",
                        {
                          style: [
                            t.textStyle,
                            {
                              "transition-delay":
                                2 === t.activeSlide &&
                                t.$store.windowWidth < 1024
                                  ? "70ms"
                                  : "210ms"
                            }
                          ]
                        },
                        [t._v("1533")]
                      ),
                      t._v(" "),
                      i(
                        "p",
                        {
                          style: [
                            t.textStyle,
                            {
                              "transition-delay":
                                (2 === t.activeSlide && t.$store.windowWidth,
                                "140ms")
                            }
                          ]
                        },
                        [t._v("1870")]
                      ),
                      t._v(" "),
                      i(
                        "p",
                        {
                          style: [
                            t.textStyle,
                            {
                              "transition-delay":
                                2 === t.activeSlide &&
                                t.$store.windowWidth < 1024
                                  ? "210ms"
                                  : "70ms"
                            }
                          ]
                        },
                        [t._v("1895")]
                      ),
                      t._v(" "),
                      i(
                        "p",
                        {
                          style: [
                            t.textStyle,
                            {
                              "transition-delay":
                                2 === t.activeSlide &&
                                t.$store.windowWidth < 1024
                                  ? "280ms"
                                  : "0ms"
                            }
                          ]
                        },
                        [t._v("2010")]
                      )
                    ]
                  ),
                  t._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "scroll-button",
                      style: {
                        opacity: 1 === t.activeSlide ? 1 : 0,
                        "pointer-events": 1 === t.activeSlide ? "auto" : "none",
                        "transition-delay":
                          1 === t.activeSlide ? "200ms" : "0ms"
                      },
                      on: { click: t.onScrollDown }
                    },
                    [
                      i("p", [t._v("OUR HISTORY")]),
                      t._v(" "),
                      i("p", [t._v("keep scrolling")]),
                      t._v(" "),
                      i("div", { staticClass: "scroll-button__circle" })
                    ]
                  )
                ],
                1
              ),
              t._v(" "),
              i(
                "div",
                {
                  ref: "slide2",
                  staticClass: "slide-2",
                  style: {
                    "pointer-events": 1 === t.activeSlide ? "none" : "auto",
                    overflowY: t.overflowSlide ? "" : "hidden",
                    "margin-right": t.overflowSlide
                      ? ""
                      : t.$store.scrollBarWidth + "px"
                  }
                },
                [
                  i("gradient", { attrs: { hidden: t.gradientHidden } }),
                  t._v(" "),
                  i(
                    "p",
                    {
                      staticClass: "background-text",
                      style: {
                        opacity: 1 === t.activeSlide ? 0 : 0.5,
                        transform:
                          "translate3d(0, " +
                          (1 === t.activeSlide ? 35 : 0) +
                          "vh, 0)"
                      }
                    },
                    [t._v("History")]
                  ),
                  t._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "block block-facts",
                      style: {
                        opacity: 1 === t.activeSlide ? 0 : 1,
                        transform:
                          t.overflowSlide && 2 === t.activeSlide
                            ? "none"
                            : "translate3d(0, " +
                              (1 === t.activeSlide ? 35 : 0) +
                              "vh, 0)",
                        "transition-delay": 1 === t.activeSlide ? "0ms" : ""
                      }
                    },
                    [
                      i("p", { staticClass: "block-heading" }, [t._v("FACTS")]),
                      t._v(" "),
                      t._m(0)
                    ]
                  ),
                  t._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "block block-dates",
                      style: {
                        opacity: 1 === t.activeSlide ? 0 : 1,
                        transform:
                          "translate3d(0, " +
                          (1 === t.activeSlide ? 35 : 0) +
                          "vh, 0)",
                        "transition-delay":
                          1 === t.activeSlide
                            ? "0ms"
                            : t.$store.windowWidth < 1024
                            ? "200ms"
                            : ""
                      }
                    },
                    [
                      i("p", { staticClass: "block-dates-text first-block" }, [
                        i("span", { staticClass: "block-heading" }, [
                          t._v("DATES")
                        ]),
                        t._v(" "),
                        i(
                          "span",
                          {
                            staticClass: "block-date",
                            style: {
                              transform:
                                "translate3d(0, " +
                                (1 === t.activeSlide &&
                                t.$store.windowWidth > 1024
                                  ? 20
                                  : 0) +
                                "px, 0)",
                              "transition-delay": (t.activeSlide, "0ms")
                            }
                          },
                          [t._v("1515")]
                        ),
                        t._v(" "),
                        i("span", { staticClass: "block-dates-line" }),
                        t._v(
                          "\n        The first written mention of distilled spirit «hot wine» in Russian is the letter of monk Iosif of Volotsk. It was a strict prohibition to bring the alcoholic drinks in the monastery.\n      "
                        )
                      ]),
                      t._v(" "),
                      i("p", { staticClass: "block-dates-text" }, [
                        i(
                          "span",
                          {
                            staticClass: "block-date",
                            style: {
                              transform:
                                "translate3d(0, " +
                                (1 === t.activeSlide &&
                                t.$store.windowWidth > 1024
                                  ? 20
                                  : 0) +
                                "px, 0)",
                              "transition-delay":
                                1 === t.activeSlide ? "0ms" : "150ms"
                            }
                          },
                          [t._v("1533")]
                        ),
                        t._v(" "),
                        i("span", { staticClass: "block-dates-line" }),
                        t._v(
                          "\n        The first mention of vodka (bread wine distilled with herbs and spices) in Russian is the chronicle of treatment of the father of Ivan the Terrible, the Russian king Vassily III. Vodka was applied there by external use as an antiseptic, but he was still dead from the blood poisoning.\n      "
                        )
                      ]),
                      t._v(" "),
                      i("p", { staticClass: "block-dates-text" }, [
                        i(
                          "span",
                          {
                            staticClass: "block-date",
                            style: {
                              transform:
                                "translate3d(0, " +
                                (1 === t.activeSlide &&
                                t.$store.windowWidth > 1024
                                  ? 20
                                  : 0) +
                                "px, 0)",
                              "transition-delay":
                                1 === t.activeSlide ? "0ms" : "250ms"
                            }
                          },
                          [t._v("1870")]
                        ),
                        t._v(" "),
                        i("span", { staticClass: "block-dates-line" }),
                        t._v(
                          "\n        When rectifcation (distillation columns) reached Russia in 1870, alcohol started being produced using the more effcient modern technology and the old recipes of grain distillates used by the nobility were slowly phased out.\n      "
                        )
                      ]),
                      t._v(" "),
                      i("p", { staticClass: "block-dates-text" }, [
                        i(
                          "span",
                          {
                            staticClass: "block-date",
                            style: {
                              transform:
                                "translate3d(0, " +
                                (1 === t.activeSlide ? 20 : 0) +
                                "px, 0)",
                              "transition-delay":
                                1 === t.activeSlide ? "0ms" : "350ms"
                            }
                          },
                          [t._v("1895")]
                        ),
                        t._v(" "),
                        i("span", { staticClass: "block-dates-line" }),
                        t._v(
                          "\n        It was then in 1895, when the Tsar introduced a state monopoly, that the production of Polugar was completely forbidden and all the traditional distilleries with their copper pot stills were destroyed.\n      "
                        )
                      ])
                    ]
                  ),
                  t._v(" "),
                  i(
                    "div",
                    {
                      staticClass: "block block-something",
                      style: {
                        opacity: 1 === t.activeSlide ? 0 : 1,
                        transform:
                          "translate3d(0, " +
                          (1 === t.activeSlide ? 35 : 0) +
                          "vh, 0)",
                        "transition-delay": 1 === t.activeSlide ? "0ms" : ""
                      }
                    },
                    [
                      i("p", { staticClass: "background-text" }, [
                        t._v("38,5%")
                      ]),
                      t._v(" "),
                      t._m(1),
                      t._v(" "),
                      t._m(2)
                    ]
                  ),
                  t._v(" "),
                  t._m(3),
                  t._v(" "),
                  i("div", { staticClass: "block block-dates" }, [
                    i("span", { staticClass: "block-dates-line top" }),
                    t._v(" "),
                    t._m(4),
                    t._v(" "),
                    i("span", { staticClass: "block-date bottom" }, [
                      t._v(t._s(t.currentYear))
                    ])
                  ]),
                  t._v(" "),
                  t._m(5),
                  t._v(" "),
                  i(
                    "div",
                    { staticClass: "additional-content" },
                    [
                      i(
                        "div",
                        { staticClass: "contacts" },
                        [
                          i("div", { staticClass: "animation-border" }),
                          t._v(" "),
                          i("router-link", {
                            attrs: {
                              to: { name: "contacts" },
                              "aria-label": "Contacts"
                            }
                          }),
                          t._v(" "),
                          i("p", { staticClass: "contacts__text" }, [
                            t._v("Contact us if you have any questions:")
                          ]),
                          t._v(" "),
                          i("avatars", {
                            attrs: {
                              listAvatars: t.avatars,
                              onClick: t.onRouteToContacts
                            }
                          })
                        ],
                        1
                      ),
                      t._v(" "),
                      t._l(t.banners, function(e, s) {
                        return i(
                          "div",
                          { key: s, class: ["banner", e.type] },
                          [
                            i("div", { staticClass: "animation-border" }),
                            t._v(" "),
                            i("banner", { attrs: { data: e } })
                          ],
                          1
                        );
                      })
                    ],
                    2
                  ),
                  t._v(" "),
                  i("div", {
                    ref: "closingRightBorder",
                    staticClass: "closing-border-right",
                    style: {
                      right:
                        "calc(" +
                        (t.$store.windowWidth >= 1024 ? 2 : 3) +
                        "vw + " +
                        this.$store.scrollBarWidth +
                        "px)"
                    }
                  }),
                  t._v(" "),
                  i("div", { staticClass: "closing-border-left" })
                ],
                1
              )
            ],
            1
          );
        },
        Tn = [
          function() {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e;
            return s("div", { staticClass: "sticky-block" }, [
              s("img", {
                staticClass: "block-facts-image small-image",
                attrs: { alt: "", src: i("PFvX") }
              }),
              t._v(" "),
              s("div", { staticClass: "block-facts-separator" }),
              t._v(" "),
              s("p", { staticClass: "block-facts-text" }, [
                t._v(
                  "\n          The vodka was made from grain and distilled in copper pot stills, rather like single malt whisky, and was called Breadwine or\n          "
                ),
                s("i", [t._v("Polugar")]),
                t._v(".\n        ")
              ])
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e;
            return s("div", { staticClass: "block-wrapper-image" }, [
              s("img", {
                staticClass: "block-something-image",
                attrs: { alt: "", src: i("T3mK") }
              })
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "block-wrapper" }, [
              i("p", { staticClass: "block-something-big-text" }, [
                t._v("The word Polugar actually means half-burned in Russian.")
              ]),
              t._v(" "),
              i("p", { staticClass: "block-something-text" }, [
                t._v(
                  "This is because before alcohol meters were invented, the strength and therefore the perceived quality of an alcoholic drink would be tested by burning out two portions of the liquid until just one portion is left. In other words, when the drink was half burned off, it was called “Polugar.”"
                )
              ])
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e;
            return s("div", { staticClass: "block block-facts first-block" }, [
              s("img", {
                staticClass: "block-facts-image",
                attrs: { alt: "", src: i("q4OT") }
              }),
              t._v(" "),
              s("div", { staticClass: "block-facts-separator" }),
              t._v(" "),
              s("p", { staticClass: "block-facts-text" }, [
                t._v(
                  "«Rodionov & Sons» made the comeback of Russain grain distillates in 2010"
                )
              ])
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("p", { staticClass: "block-dates-text" }, [
              i("span", { staticClass: "block-date" }, [t._v("2010")]),
              t._v(" "),
              i("span", { staticClass: "block-dates-line" }),
              t._v(
                "\n        This lost symbol of traditional Russian gastronomy has now started to make a comeback thanks to a recipe found in a book from the 18th century by Boris Rodionov, a well-known Russian vodka historian, academic and published author.\n        "
              ),
              i("br"),
              t._v(" "),
              i("br"),
              t._v(
                "The Rodionov family are now spearheading a movement to restore the former glory of traditional grain distillates, Polugar, so enjoyed during the golden age of Russian history\n      "
              )
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "block block-future" }, [
              i("p", { staticClass: "background-text" }, [t._v("Future")]),
              t._v(" "),
              i("p", { staticClass: "block-future-text" }, [
                t._v("THE LEGENDARY RUSSIAN BREADWINE")
              ])
            ]);
          }
        ],
        Bn = { render: Pn, staticRenderFns: Tn },
        Mn = Bn,
        An = i("VU/8"),
        In = P,
        Dn = An(kn, Mn, !1, In, null, null),
        En = Dn.exports,
        Ln = {
          name: "contacts",
          components: { Socials: Lt, Avatars: Ae, FollowPattern: He },
          data: function() {
            return {
              active: -1,
              avatars: [],
              autoplay: !0,
              interval: null,
              isMenuOpened: !1,
              isPersonChanging: !1,
              otherActive: !1,
              otherContacts: []
            };
          },
          computed: {
            userIndex: function() {
              var t = this;
              return this.avatars.findIndex(function(e) {
                return e.alias === t.$route.query.person;
              });
            }
          },
          watch: {
            isMenuOpened: function(t) {
              this.autoplay = !t;
            },
            active: function(t, e) {
              this.animateContact(t, e);
            }
          },
          mounted: function() {
            this.$store.getContacts().then(this.initialize),
              W.$on("onToggleMenu", this.onToggleMenu),
              window.addEventListener("wheel", this.onWheel),
              window.addEventListener("keydown", this.onKeydown);
          },
          destroyed: function() {
            window.removeEventListener("wheel", this.onWheel),
              window.removeEventListener("keydown", this.onKeydown),
              clearInterval(this.interval);
          },
          methods: {
            initialize: function() {
              (this.avatars = we()(this.$store.contacts).filter(function(t) {
                return t.img;
              })),
                this.avatars.forEach(function(t, e) {
                  return (t.index = e);
                }),
                (this.otherContacts = we()(this.$store.contacts).filter(
                  function(t) {
                    return "other" === t.alias;
                  }
                )),
                (this.active = -1 === this.userIndex ? 0 : this.userIndex);
            },
            changeContact: function(t) {
              var e = this;
              if (!this.isPersonChanging) {
                var i = this.$store.windowWidth >= 1024 ? 1500 : 1e3;
                t >= 1
                  ? ((this.active = this.active + 1),
                    this.active === this.avatars.length &&
                      (this.otherActive = !0),
                    this.active === this.avatars.length + 1 &&
                      ((this.active = 0), (this.otherActive = !1)))
                  : t <= -1 &&
                    (this.active === this.avatars.length &&
                      (this.otherActive = !1),
                    0 === this.active &&
                      ((this.active = this.avatars.length + 1),
                      (this.otherActive = !0)),
                    (this.active = this.active - 1)),
                  (this.isPersonChanging = !0),
                  setTimeout(function() {
                    return (e.isPersonChanging = !1);
                  }, i),
                  this.$router.replace({
                    name: "contacts",
                    query: {
                      person: this.otherActive
                        ? this.otherContacts[0].alias
                        : this.avatars[this.active].alias
                    }
                  });
              }
            },
            onClickPerson: function(t, e) {
              var i = this;
              this.isPersonChanging ||
                (t === this.active
                  ? (this.active = this.avatars.length)
                  : (this.active = t),
                (this.isPersonChanging = !0),
                setTimeout(function() {
                  return (i.isPersonChanging = !1);
                }, 1e3),
                this.$router.replace({
                  name: "contacts",
                  query: {
                    person: e
                      ? this.otherContacts[0].alias
                      : this.avatars[t].alias
                  }
                }),
                "other" !== this.$route.query.person
                  ? setTimeout(function() {
                      return (i.otherActive = !1);
                    }, 1e3)
                  : (this.otherActive = !0));
            },
            onWheel: function(t) {
              this.$store.windowWidth >= 1024 && this.changeContact(t.deltaY);
            },
            onKeydown: function(t) {
              var e = this.$store.windowWidth >= 1024;
              switch (t.which) {
                case 38:
                  this.changeContact(e ? -1 : 0);
                  break;
                case 37:
                  this.changeContact(-1);
                  break;
                case 39:
                  this.changeContact(1);
                  break;
                case 40:
                  this.changeContact(e ? 1 : 0);
                  break;
                default:
                  return;
              }
            },
            animateContact: function(t, e) {
              if (-1 !== e) {
                var i = this.$refs,
                  s = i.contacts,
                  n = i.infoblock,
                  o = e < t && !(t === this.avatars.length - 1 && 0 === e),
                  a = e === this.avatars.length - 1 && 0 === t;
                N.a.fromTo(
                  s[t],
                  this.otherActive ? 0 : 1,
                  { x: o || a ? "100%" : "-100%" },
                  { x: "0%" }
                ),
                  N.a.fromTo(
                    s[e],
                    1,
                    { x: "0%" },
                    { x: o || a ? "-100%" : "100%" }
                  ),
                  N.a.fromTo(
                    n[t],
                    this.otherActive ? 0 : 1,
                    { opacity: 0 },
                    { opacity: 1 }
                  ),
                  N.a.fromTo(n[e], 1, { opacity: 1 }, { opacity: 0 }),
                  N.a.fromTo(
                    this.$refs.infoname[e],
                    0.8,
                    { y: "0px", opacity: 1 },
                    { y: (this.otherActive ? 0 : -60) + "px", opacity: 0 }
                  ),
                  N.a.fromTo(
                    this.$refs.infocontacts[e],
                    0.6,
                    { y: "0px", opacity: 1 },
                    { y: (this.otherActive ? 0 : -70) + "px", opacity: 0 }
                  ),
                  N.a.fromTo(
                    this.$refs.infoname[t],
                    1,
                    { y: (this.otherActive ? 0 : 50) + "px", opacity: 0 },
                    { y: "0px", opacity: 1, delay: 0.5 }
                  ),
                  N.a.fromTo(
                    this.$refs.infocontacts[t],
                    0.9,
                    { y: (this.otherActive ? 0 : 50) + "px", opacity: 0 },
                    {
                      y: "0px",
                      opacity: 1,
                      delay: this.otherActive ? 0.5 : 0.7
                    }
                  );
              }
            },
            onToggleMenu: function(t) {
              this.isMenuOpened =
                "undefined" == typeof value ? !this.isMenuOpened : !!t;
            }
          }
        },
        On = function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "main",
            {
              class: { "active-other": "other" === t.$route.query.person },
              style: {
                zIndex:
                  (t.otherActive && !t.isPersonChanging) ||
                  t.$store.windowWidth >= 1024
                    ? ""
                    : 3
              },
              attrs: { role: "main" }
            },
            [
              s(
                "div",
                { staticClass: "contacts-photo" },
                t._l(t.$store.contacts, function(e, i) {
                  return s("div", {
                    key: i,
                    ref: "contacts",
                    refInFor: !0,
                    staticClass: "contacts-photo__image",
                    class: { "active-person": t.active === i },
                    style: { "background-image": "url(" + e.img + ")" }
                  });
                })
              ),
              t._v(" "),
              s("socials"),
              t._v(" "),
              s("h2", { staticClass: "contacts-heading" }, [t._v("Contacts")]),
              t._v(" "),
              s("div", { staticClass: "contacts-info" }, [
                s("h1", { staticClass: "contacts-info__heading" }, [
                  t._v("Contacts")
                ]),
                t._v(" "),
                s(
                  "div",
                  { staticClass: "wrapper-info" },
                  t._l(t.$store.contacts, function(e, i) {
                    return s(
                      "div",
                      {
                        key: i,
                        ref: "infoblock",
                        refInFor: !0,
                        staticClass: "contacts-info__block-info",
                        class: {
                          "active-info":
                            t.active === i && "other" !== t.$route.query.person
                        }
                      },
                      [
                        s(
                          "div",
                          {
                            ref: "infoname",
                            refInFor: !0,
                            staticClass: "wrapper-name"
                          },
                          [
                            s("p", {
                              staticClass: "contacts-name",
                              domProps: { textContent: t._s(e.name) }
                            }),
                            t._v(" "),
                            s("p", {
                              staticClass: "contacts-info__position",
                              domProps: { textContent: t._s(e.position) }
                            })
                          ]
                        ),
                        t._v(" "),
                        s(
                          "div",
                          {
                            ref: "infocontacts",
                            refInFor: !0,
                            staticClass: "wrapper-contacts"
                          },
                          [
                            e.mail
                              ? s(
                                  "a",
                                  {
                                    staticClass: "contacts-info__email",
                                    attrs: {
                                      href: "mailto:b.rodionov@polugar.com"
                                    }
                                  },
                                  [
                                    s("div", {
                                      staticClass: "contacts-info__email-icon"
                                    }),
                                    t._v(" "),
                                    s("p", {
                                      domProps: { textContent: t._s(e.mail) }
                                    })
                                  ]
                                )
                              : t._e(),
                            t._v(" "),
                            e.facebook
                              ? s(
                                  "div",
                                  { staticClass: "contacts-info__facebook" },
                                  [
                                    s("div", {
                                      staticClass:
                                        "contacts-info__facebook-icon"
                                    }),
                                    t._v(" "),
                                    s("p", [
                                      s("a", {
                                        attrs: {
                                          href:
                                            "https://www.facebook.com/" +
                                            e.facebook,
                                          target: "_blank",
                                          rel: "noopener noreferrer"
                                        },
                                        domProps: {
                                          textContent: t._s(e.facebook)
                                        }
                                      })
                                    ])
                                  ]
                                )
                              : t._e(),
                            t._v(" "),
                            e.phones && e.phones.length
                              ? s(
                                  "div",
                                  { staticClass: "contacts-info__telephone" },
                                  [
                                    s("div", {
                                      staticClass:
                                        "contacts-info__telephone-icon"
                                    }),
                                    t._v(" "),
                                    t._l(e.phones, function(e, i) {
                                      return s("p", {
                                        key: i,
                                        domProps: { textContent: t._s(e) }
                                      });
                                    })
                                  ],
                                  2
                                )
                              : t._e(),
                            t._v(" "),
                            e.site
                              ? s(
                                  "div",
                                  { staticClass: "contacts-info__site" },
                                  [
                                    s("div", {
                                      staticClass: "contacts-info__site-icon"
                                    }),
                                    t._v(" "),
                                    s("p", [
                                      s("a", {
                                        attrs: {
                                          href: "http://" + e.site,
                                          target: "_blank",
                                          rel: "noopener noreferrer"
                                        },
                                        domProps: { textContent: t._s(e.site) }
                                      })
                                    ])
                                  ]
                                )
                              : t._e()
                          ]
                        )
                      ]
                    );
                  })
                )
              ]),
              t._v(" "),
              s("avatars", {
                ref: "avatars",
                attrs: {
                  active: t.active,
                  hasOtherContacts: !0,
                  listAvatars: t.avatars,
                  otherActive: t.otherActive,
                  onClick: t.onClickPerson
                }
              }),
              t._v(" "),
              s("div", { staticClass: "contacts-other" }, [
                s(
                  "div",
                  {
                    staticClass: "contacts-other__back",
                    on: {
                      click: function(e) {
                        t.onClickPerson(t.active);
                      }
                    }
                  },
                  [
                    s("img", { attrs: { src: i("1Inb"), alt: "" } }),
                    t._v("\n      Back to all contacts\n    ")
                  ]
                ),
                t._v(" "),
                s(
                  "div",
                  { staticClass: "wrapper-other" },
                  t._l(
                    t.otherContacts.length && t.otherContacts[0].contacts,
                    function(e, i) {
                      return s(
                        "div",
                        {
                          key: i,
                          ref: "infoblock",
                          refInFor: !0,
                          staticClass: "contacts-other__info"
                        },
                        [
                          s(
                            "div",
                            {
                              ref: "infoname",
                              refInFor: !0,
                              staticClass: "wrapper-name"
                            },
                            [
                              s("p", {
                                staticClass: "contacts-name",
                                domProps: { textContent: t._s(e.name) }
                              }),
                              t._v(" "),
                              s("p", {
                                staticClass: "contacts-info__position",
                                domProps: { textContent: t._s(e.position) }
                              })
                            ]
                          ),
                          t._v(" "),
                          s(
                            "div",
                            {
                              ref: "infocontacts",
                              refInFor: !0,
                              staticClass: "wrapper-contacts"
                            },
                            [
                              e.mail
                                ? s(
                                    "a",
                                    {
                                      staticClass: "contacts-info__email",
                                      attrs: {
                                        href: "mailto:b.rodionov@polugar.com"
                                      }
                                    },
                                    [
                                      s("div", {
                                        staticClass: "contacts-info__email-icon"
                                      }),
                                      t._v(" "),
                                      s("span", {
                                        domProps: { textContent: t._s(e.mail) }
                                      })
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              e.facebook
                                ? s(
                                    "div",
                                    { staticClass: "contacts-info__facebook" },
                                    [
                                      s("div", {
                                        staticClass:
                                          "contacts-info__facebook-icon"
                                      }),
                                      t._v(" "),
                                      s("p", [
                                        s("a", {
                                          attrs: {
                                            href:
                                              "https://www.facebook.com/" +
                                              e.facebook,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                          },
                                          domProps: {
                                            textContent: t._s(e.facebook)
                                          }
                                        })
                                      ])
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              e.phones.length
                                ? s(
                                    "div",
                                    { staticClass: "contacts-info__telephone" },
                                    [
                                      s("div", {
                                        staticClass:
                                          "contacts-info__telephone-icon"
                                      }),
                                      t._v(" "),
                                      s(
                                        "p",
                                        t._l(e.phones, function(e, i) {
                                          return s("span", {
                                            key: i,
                                            domProps: { textContent: t._s(e) }
                                          });
                                        })
                                      )
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              e.site
                                ? s(
                                    "div",
                                    { staticClass: "contacts-info__site" },
                                    [
                                      s("div", {
                                        staticClass: "contacts-info__site-icon"
                                      }),
                                      t._v(" "),
                                      s("p", [
                                        s("a", {
                                          attrs: {
                                            href: "http://www." + e.site,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                          },
                                          domProps: {
                                            textContent: t._s(e.site)
                                          }
                                        })
                                      ])
                                    ]
                                  )
                                : t._e()
                            ]
                          )
                        ]
                      );
                    }
                  )
                )
              ]),
              t._v(" "),
              s("div", {
                staticClass: "closing-border-right",
                style: { marginRight: t.$store.scrollBarWidth + "px" }
              }),
              t._v(" "),
              s("div", { staticClass: "closing-border-left" }),
              t._v(" "),
              s("follow-pattern")
            ],
            1
          );
        },
        Rn = [],
        Fn = { render: On, staticRenderFns: Rn },
        zn = Fn,
        Wn = i("VU/8"),
        Vn = T,
        Nn = Wn(Ln, zn, !1, Vn, null, null),
        Hn = Nn.exports,
        Gn = {
          name: "wheretobuy",
          components: {
            Avatars: Ae,
            Banner: vi,
            Socials: Lt,
            FollowPattern: He
          },
          data: function() {
            return {
              active: null,
              avatars: [],
              banners: [],
              headerHeight: 90,
              listLocations: []
            };
          },
          watch: {
            active: function(t, e) {
              var i = this.$refs.locations[t],
                s = this.$refs.locations[e];
              if (i) {
                i.style.height = "auto";
                var n = i.offsetHeight;
                (i.style.height = ""),
                  N.a.to(i, 0.5, { height: n }),
                  this.scrollToExpandedElement(i, s, t, e, n);
              }
              s &&
                N.a.to(s, 0.5, {
                  height: this.headerHeight,
                  clearProps: "height"
                });
            }
          },
          mounted: function() {
            this.fetchData(), this.getContacts(), this.createBanners();
          },
          methods: {
            fetchData: function() {
              var t = this;
              z.get("/where-to-buy.json")
                .then(function(e) {
                  t.listLocations = e.data;
                })
                .catch(function(t) {
                  console.log(t);
                });
            },
            getContacts: function() {
              var t = this;
              z.get("/contacts.json")
                .then(function(e) {
                  (t.avatars = we()(e.data)),
                    t.avatars.forEach(function(t, e) {
                      return (t.index = e);
                    });
                })
                .catch(function(t) {
                  console.warn(t);
                });
            },
            createBanners: function() {
              var t = this;
              (this.banners = []),
                this.$store.getFacts().then(function(e) {
                  t.banners.push(t.$utils.shuffle(we()(e))[0]);
                  var i = t.$router.options.routes.find(function(t) {
                    return "inspirations" === t.name;
                  });
                  i &&
                    t.banners.push(es()({ type: "route", route: i }, i.meta));
                });
            },
            onClickLocation: function(t) {
              this.active = t === this.active ? null : t;
            },
            scrollToExpandedElement: function(t, e, i, s, n) {
              var o = window.pageYOffset,
                a = window.innerHeight,
                r = t.getBoundingClientRect().bottom,
                l = t.getBoundingClientRect().top,
                c = e && i > s,
                d = c ? e.getBoundingClientRect().top : 0,
                u = c ? e.offsetHeight - this.headerHeight : 0,
                h = o + r + n - u - a,
                p = o + l - u - this.headerHeight,
                f = o + l + n > o + a;
              r + n > a
                ? N.a.to(window, 0.5, {
                    scrollTo: { y: Math.min(h, p), autoKill: !1 }
                  })
                : (l <= 0 || d <= 0 || f) &&
                  N.a.to(window, 0.5, { scrollTo: { y: p, autoKill: !1 } });
            },
            onRouteToContacts: function(t) {
              this.$router.push({
                name: "contacts",
                query: { person: this.$store.contacts[t].alias }
              });
            }
          }
        },
        Yn = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "main",
            {
              ref: "main",
              staticClass: "where-to-buy",
              attrs: { role: "main" }
            },
            [
              i("p", { staticClass: "where-to-buy__text" }, [
                t._v("Where to buy")
              ]),
              t._v(" "),
              i("socials"),
              t._v(" "),
              i(
                "div",
                { staticClass: "wrapper-locations" },
                t._l(t.listLocations, function(e, s) {
                  return i(
                    "div",
                    {
                      key: s,
                      ref: "locations",
                      refInFor: !0,
                      staticClass: "where-to-buy__location",
                      class: { opened: t.active === s }
                    },
                    [
                      i(
                        "div",
                        {
                          staticClass: "btn-open-location",
                          on: {
                            click: function(e) {
                              t.onClickLocation(s);
                            }
                          }
                        },
                        [
                          e.location
                            ? i("p", {
                                staticClass: "location",
                                domProps: { textContent: t._s(e.location) }
                              })
                            : t._e(),
                          t._v(" "),
                          i(
                            "svg",
                            {
                              staticClass: "select-arrow",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "9",
                                height: "6",
                                viewBox: "0 0 9 6"
                              }
                            },
                            [
                              i(
                                "g",
                                {
                                  attrs: {
                                    fill: "#140C07",
                                    "fill-rule": "evenodd"
                                  }
                                },
                                [
                                  i("path", {
                                    attrs: {
                                      d:
                                        "M.732.525l-.707.707 4.243 4.243.707-.707z"
                                    }
                                  }),
                                  t._v(" "),
                                  i("path", {
                                    attrs: {
                                      d:
                                        "M8.268.525l.707.707-4.243 4.243-.707-.707z"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      t._v(" "),
                      i(
                        "div",
                        { staticClass: "wrapper-block-info" },
                        [
                          e.location
                            ? i("p", {
                                staticClass: "location",
                                domProps: { textContent: t._s(e.location) }
                              })
                            : t._e(),
                          t._v(" "),
                          t._l(e.city, function(e, s) {
                            return i(
                              "div",
                              { key: s, staticClass: "block-info" },
                              [
                                e.site
                                  ? i("a", {
                                      staticClass: "site",
                                      attrs: {
                                        href: "https://" + e.site,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                      },
                                      domProps: { textContent: t._s(e.site) }
                                    })
                                  : t._e(),
                                t._v(" "),
                                e.email
                                  ? i("div", { staticClass: "wrapper-email" }, [
                                      i("div", { staticClass: "icon-email" }),
                                      t._v(" "),
                                      i(
                                        "a",
                                        {
                                          staticClass: "email",
                                          attrs: { href: "#" }
                                        },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(e.email) +
                                              "\n              "
                                          ),
                                          i("span", { staticClass: "border" })
                                        ]
                                      )
                                    ])
                                  : t._e(),
                                t._v(" "),
                                t._l(e.telephone, function(s, n) {
                                  return i(
                                    "div",
                                    {
                                      key: n,
                                      staticClass: "wrapper-telephone",
                                      class: { invisible: !e.telephone }
                                    },
                                    [
                                      i("div", {
                                        staticClass: "icon-telephone"
                                      }),
                                      t._v(" "),
                                      i("p", {
                                        staticClass: "telephone",
                                        domProps: { textContent: t._s(s) }
                                      })
                                    ]
                                  );
                                })
                              ],
                              2
                            );
                          })
                        ],
                        2
                      )
                    ]
                  );
                })
              ),
              t._v(" "),
              i(
                "div",
                { staticClass: "additional-content" },
                [
                  i(
                    "div",
                    { staticClass: "contacts" },
                    [
                      i("div", { staticClass: "animation-border" }),
                      t._v(" "),
                      i("router-link", {
                        attrs: {
                          to: { name: "contacts" },
                          "aria-label": "Contacts"
                        }
                      }),
                      t._v(" "),
                      i("p", { staticClass: "contacts__text" }, [
                        t._v("Let us know if your country is not on this list:")
                      ]),
                      t._v(" "),
                      i("avatars", {
                        attrs: {
                          listAvatars: t.avatars,
                          onClick: t.onRouteToContacts
                        }
                      })
                    ],
                    1
                  ),
                  t._v(" "),
                  t._l(t.banners, function(e, s) {
                    return i(
                      "div",
                      { key: s, class: ["banner", e.type] },
                      [
                        "fact" !== e.type
                          ? i("div", { staticClass: "animation-border" })
                          : t._e(),
                        t._v(" "),
                        i("banner", { attrs: { data: e } })
                      ],
                      1
                    );
                  })
                ],
                2
              ),
              t._v(" "),
              i("follow-pattern")
            ],
            1
          );
        },
        qn = [],
        jn = { render: Yn, staticRenderFns: qn },
        Un = jn,
        Xn = i("VU/8"),
        Kn = B,
        Qn = Xn(Gn, Un, !1, Kn, null, null),
        Zn = Qn.exports,
        Jn = {
          name: "downloadpage",
          props: { visible: Boolean },
          data: function() {
            return { downloadPage: [], scrollTop: null };
          },
          methods: {
            getDownloadPageData: function() {
              var t = this;
              z.get("/downloadpage.json")
                .then(function(e) {
                  t.downloadPage = e.data;
                })
                .catch(function(t) {
                  console.log(t);
                });
            },
            onCloseDownloadPage: function(t) {
              W.$emit("toggleAppClass", "opened-download-page", t);
            }
          },
          mounted: function() {
            this.getDownloadPageData();
          }
        },
        to = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              ref: "downloadPage",
              staticClass: "download-page dropdown-content",
              class: { visible: t.visible }
            },
            [
              t.visible
                ? t._e()
                : i(
                    "div",
                    {
                      staticClass: "button__close-page",
                      on: {
                        click: function(e) {
                          t.onCloseDownloadPage(!1);
                        }
                      }
                    },
                    [i("span"), t._v(" "), i("span")]
                  ),
              t._v(" "),
              t._l(t.downloadPage, function(e, s) {
                return i(
                  "a",
                  {
                    key: s,
                    staticClass: "download-page__item",
                    class: {
                      "download-page__item-all": "all" === e.type || "",
                      "download-page__item-logo": "logotype" === e.type || "",
                      "download-page__item-photo": "photos" === e.type || "",
                      "download-page__item-bottom": "revival" === e.type || ""
                    },
                    attrs: { href: e.downloadFile, download: "" }
                  },
                  [
                    "revival" === e.type
                      ? i("div", { staticClass: "animation-border" })
                      : t._e(),
                    t._v(" "),
                    "all" === e.type
                      ? i("p", {
                          staticClass: "download-page__item-intro",
                          domProps: { textContent: t._s(e.text) }
                        })
                      : t._e(),
                    t._v(" "),
                    "all" === e.type
                      ? i(
                          "div",
                          { staticClass: "download-page__item-category" },
                          [
                            i("p", {
                              directives: [
                                { name: "split", rawName: "v-split" }
                              ],
                              domProps: { textContent: t._s(e.name) }
                            }),
                            t._v(" "),
                            i("p", {
                              staticClass: "download-page__item-size",
                              domProps: {
                                textContent: t._s(e.itemSize + " MB")
                              }
                            })
                          ]
                        )
                      : t._e(),
                    t._v(" "),
                    e.stats
                      ? i("p", { staticClass: "download-page__item-stats" }, [
                          i("span", {
                            domProps: { textContent: t._s(e.stats) }
                          }),
                          t._v(" "),
                          i("span", [t._v("images")])
                        ])
                      : t._e(),
                    t._v(" "),
                    "photos" === e.type
                      ? i(
                          "div",
                          { staticClass: "download-page__icon-download" },
                          [
                            i(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 74 72"
                                }
                              },
                              [
                                i("path", {
                                  attrs: {
                                    d:
                                      "M29.4 27.2L38 42.1l8.6-14.9-8.6 3.9-8.6-3.9zM27 25l11 5 11-5-11 19-11-19z",
                                    fill: "#fff5e9"
                                  }
                                })
                              ]
                            ),
                            t._v(" "),
                            i("span")
                          ]
                        )
                      : t._e(),
                    t._v(" "),
                    e.img && "all" !== e.type
                      ? i("img", {
                          class: {
                            "download-page__item-image":
                              "bottles" === e.type || "",
                            "download-page__item-logo-image":
                              "logotype" === e.type || "",
                            "download-page__item-photo-image":
                              "photos" === e.type || ""
                          },
                          attrs: {
                            srcset: e.img2x + " 2x",
                            src: e.img,
                            alt: ""
                          }
                        })
                      : t._e(),
                    t._v(" "),
                    "all" !== e.type
                      ? i("p", {
                          directives: [{ name: "split", rawName: "v-split" }],
                          staticClass: "download-page__item-category",
                          domProps: { textContent: t._s(e.name) }
                        })
                      : t._e(),
                    t._v(" "),
                    "all" !== e.type
                      ? i(
                          "div",
                          { staticClass: "download-page__item-additional" },
                          [
                            i("span", {
                              staticClass: "download-page__item-data",
                              domProps: { textContent: t._s(e.itemData) }
                            }),
                            t._v(" "),
                            i("span", {
                              staticClass: "download-page__item-separator"
                            }),
                            t._v(" "),
                            i("span", {
                              staticClass: "download-page__item-size",
                              domProps: {
                                textContent: t._s(
                                  e.itemFormat + ", " + e.itemSize + " MB"
                                )
                              }
                            })
                          ]
                        )
                      : t._e()
                  ]
                );
              })
            ],
            2
          );
        },
        eo = [],
        io = { render: to, staticRenderFns: eo },
        so = io,
        no = i("VU/8"),
        oo = M,
        ao = no(Jn, so, !1, oo, null, null),
        ro = ao.exports,
        lo = {
          name: "downloads",
          components: { Downloadpage: ro, FollowPattern: He, Socials: Lt },
          data: function() {
            return {};
          },
          computed: {},
          watch: {},
          mounted: function() {},
          methods: {}
        },
        co = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "main",
            { staticClass: "page-downloads", attrs: { role: "main" } },
            [
              i(
                "div",
                {
                  staticClass: "header",
                  style: {
                    right:
                      "calc(" +
                      (t.$store.windowWidth >= 1024 ? 2 : 3) +
                      "vw + " +
                      this.$store.scrollBarWidth +
                      "px)"
                  }
                },
                [
                  i("p", { staticClass: "header__text" }, [t._v("Downloads")]),
                  t._v(" "),
                  i("socials")
                ],
                1
              ),
              t._v(" "),
              i("downloadpage", { attrs: { visible: !0 } }),
              t._v(" "),
              i("follow-pattern")
            ],
            1
          );
        },
        uo = [],
        ho = { render: co, staticRenderFns: uo },
        po = ho,
        fo = i("VU/8"),
        vo = A,
        go = fo(lo, po, !1, vo, null, null),
        mo = go.exports;
      E.a.use(_e.a);
      var _o = new _e.a({
          routes: [
            { path: "/", name: "home", component: Ze, meta: { pinkTheme: !0 } },
            {
              path: "/products/",
              name: "collections",
              component: Ji,
              meta: {
                banner: !0,
                docTitle: "Collections",
                filter: !0,
                title: "Explore all",
                text: "products",
                footer_text: "Collections",
                images: [
                  {
                    img:
                      "/images/bottles/700_Wheat.png",
                    img2x:
                      "/images/bottles/700_Wheat@2x.png"
                  }
                ]
              }
            },
            {
              path: "/products/:alias?",
              name: "product",
              component: hs,
              props: !0
            },
            {
              path: "/inspirations/",
              name: "inspirations",
              component: Is,
              meta: {
                banner: !0,
                docTitle: "Inspirations",
                filter: !0,
                title: "Explore all",
                text: "cocktails",
                footer_text: "Inspiration",
                images: [
                  {
                    img:
                      "/images/icons/cocktails-additional.svg"
                  }
                ]
              }
            },
            {
              path: "/inspirations/:alias",
              name: "recipe",
              component: Sn,
              props: !0,
              meta: { docTitle: "Recipe" }
            },
            {
              path: "/history",
              name: "history",
              component: En,
              meta: {
                author: "1800    —    2016",
                banner: !0,
                docTitle: "History",
                text: "Our history",
                title: "Polugar revival",
                pinkTheme: !0,
                images: [
                  {
                    img:
                      "/images/icons/cocktails-additional.svg"
                  }
                ]
              }
            },
            {
              path: "*",
              name: "notfound",
              component: Vs,
              meta: { docTitle: "Not Found" }
            },
            {
              path: "/downloads",
              name: "downloads",
              component: mo,
              meta: { docTitle: "Downloads" }
            },
            {
              path: "/contacts",
              name: "contacts",
              component: Hn,
              meta: { docTitle: "Contacts" }
            },
            {
              path: "/wheretobuy",
              name: "wheretobuy",
              component: Zn,
              meta: { docTitle: "Where To Buy" }
            }
          ],
          mode: "history"
        }),
        yo = i("7nRM"),
        wo = i.n(yo),
        Co = {
          shuffle: function(t) {
            for (var e = wo()(t), i = e.slice(0), s = i.length; s; ) {
              s -= 1;
              var n = Math.floor(Math.random() * s),
                o = [i[n], i[s]];
              (i[s] = o[0]), (i[n] = o[1]);
            }
            return i;
          }
        },
        bo = {
          bind: function(t) {
            setTimeout(function() {
              t.innerHTML =
                "<span>" +
                t.innerText.split("").join("</span><span>") +
                "</span>";
            }, 2e3);
          }
        },
        xo = {
          bind: function(t) {
            var e = t;
            e.innerHTML =
              "<span>" +
              e.innerHTML.split("").join("</span><span>") +
              "</span>";
          },
          update: function(t, e) {
            function i(e) {
              for (
                var i = t.querySelectorAll("span"),
                  s = (e ? 3e3 : 2e3) / (5 * i.length),
                  n = 0;
                n < i.length;
                n += 1
              ) {
                var o = i[n];
                (o.style.transitionDelay = e
                  ? n * s + "ms"
                  : (i.length - n) * s + "ms"),
                  (o.style.transform = e ? "translateX(0)" : ""),
                  (o.style.opacity = e ? 1 : "");
              }
            }
            var s = e.value.hover,
              n = e.value.trigger,
              o = e.value.text;
            o &&
              o !== e.oldValue.text &&
              (t.innerHTML =
                "<span>" + o.split("").join("</span><span>") + "</span>"),
              void 0 !== n && i(n),
              s &&
                ((s.onmouseenter = function() {
                  return i(!0);
                }),
                (s.onmouseleave = function() {
                  return i(!1);
                }));
          },
          unbind: function(t) {
            document.removeEventListener("unbind", t);
          }
        };
      D.a.polyfill(),
        (E.a.prototype.$baseURL = ""),
        (E.a.prototype.$store = W),
        (E.a.prototype.$utils = Co),
        (E.a.config.productionTip = !1),
        E.a.directive("split", bo),
        E.a.directive("wave", xo),
        _o.afterEach(function(t) {
          setTimeout(function() {
            "product" !== t.name && W.setDocumentTitle(t.meta.docTitle);
          });
        }),
        new E.a({
          el: "#app",
          router: _o,
          template: "<App/>",
          components: { App: me }
        });
    },
    OhBC: function(t, e) {},
    PFvX: function(t, e, i) {
      t.exports = i.p + "static/img/history-1.bb2a30d.svg";
    },
    QGuW: function(t, e) {},
    QgE4: function(t, e) {},
    SDbs: function(t, e, i) {
      t.exports = i.p + "static/img/history-additional.d8db7ce.svg";
    },
    T3mK: function(t, e, i) {
      t.exports = i.p + "static/img/history-2.c0e3890.svg";
    },
    VFHz: function(t, e) {},
    "VgK/": function(t, e) {},
    VmmO: function(t, e) {},
    Vrma: function(t, e, i) {
      t.exports = i.p + "static/img/cocktails-additional.8b796d2.svg";
    },
    XZHM: function(t, e, i) {
      (function(s) {
        var n,
          o,
          a,
          r = void 0 !== t && t.exports && void 0 !== s ? s : this || window;
        (r._gsQueue || (r._gsQueue = [])).push(function() {
          "use strict";
          function t(t, e, i, s, n, o) {
            return (
              (i = (parseFloat(i || 0) - parseFloat(t || 0)) * n),
              (s = (parseFloat(s || 0) - parseFloat(e || 0)) * o),
              Math.sqrt(i * i + s * s)
            );
          }
          function e(t) {
            return (
              ("string" != typeof t && t.nodeType) ||
                ((t = r.TweenLite.selector(t)), t.length && (t = t[0])),
              t
            );
          }
          function i(t, e, i) {
            var s,
              n,
              o = t.indexOf(" ");
            return (
              -1 === o
                ? ((s = void 0 !== i ? i + "" : t), (n = t))
                : ((s = t.substr(0, o)), (n = t.substr(o + 1))),
              (s =
                -1 !== s.indexOf("%")
                  ? (parseFloat(s) / 100) * e
                  : parseFloat(s)),
              (n =
                -1 !== n.indexOf("%")
                  ? (parseFloat(n) / 100) * e
                  : parseFloat(n)),
              s > n ? [n, s] : [s, n]
            );
          }
          function s(i) {
            if (!i) return 0;
            i = e(i);
            var s,
              n,
              o,
              a,
              r,
              l,
              d,
              u = i.tagName.toLowerCase(),
              h = 1,
              p = 1;
            "non-scaling-stroke" === i.getAttribute("vector-effect") &&
              ((p = i.getScreenCTM()), (h = p.a), (p = p.d));
            try {
              n = i.getBBox();
            } catch (t) {}
            if (
              ((n && (n.width || n.height)) ||
                ("rect" !== u && "circle" !== u && "ellipse" !== u) ||
                ((n = {
                  width: parseFloat(
                    i.getAttribute(
                      "rect" === u ? "width" : "circle" === u ? "r" : "rx"
                    )
                  ),
                  height: parseFloat(
                    i.getAttribute(
                      "rect" === u ? "height" : "circle" === u ? "r" : "ry"
                    )
                  )
                }),
                "rect" !== u && ((n.width *= 2), (n.height *= 2))),
              "path" === u)
            )
              (a = i.style.strokeDasharray),
                (i.style.strokeDasharray = "none"),
                (s = i.getTotalLength() || 0),
                h !== p &&
                  console.log(
                    "Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
                  ),
                (s *= (h + p) / 2),
                (i.style.strokeDasharray = a);
            else if ("rect" === u) s = 2 * n.width * h + 2 * n.height * p;
            else if ("line" === u)
              s = t(
                i.getAttribute("x1"),
                i.getAttribute("y1"),
                i.getAttribute("x2"),
                i.getAttribute("y2"),
                h,
                p
              );
            else if ("polyline" === u || "polygon" === u)
              for (
                o = i.getAttribute("points").match(c) || [],
                  "polygon" === u && o.push(o[0], o[1]),
                  s = 0,
                  r = 2;
                r < o.length;
                r += 2
              )
                s += t(o[r - 2], o[r - 1], o[r], o[r + 1], h, p) || 0;
            else
              ("circle" !== u && "ellipse" !== u) ||
                ((l = (n.width / 2) * h),
                (d = (n.height / 2) * p),
                (s =
                  Math.PI *
                  (3 * (l + d) - Math.sqrt((3 * l + d) * (l + 3 * d)))));
            return s || 0;
          }
          function n(t, i) {
            if (!t) return [0, 0];
            (t = e(t)), (i = i || s(t) + 1);
            var n = l(t),
              o = n.strokeDasharray || "",
              a = parseFloat(n.strokeDashoffset),
              r = o.indexOf(",");
            return (
              r < 0 && (r = o.indexOf(" ")),
              (o = r < 0 ? i : parseFloat(o.substr(0, r)) || 1e-5),
              o > i && (o = i),
              [Math.max(0, -a), Math.max(0, o - a)]
            );
          }
          var o,
            a = r.document,
            l = a.defaultView ? a.defaultView.getComputedStyle : function() {},
            c = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            d = -1 !== ((r.navigator || {}).userAgent || "").indexOf("Edge");
          (o = r._gsDefine.plugin({
            propName: "drawSVG",
            API: 2,
            version: "0.1.4",
            global: !0,
            overwriteProps: ["drawSVG"],
            init: function(t, e, o, a) {
              if (!t.getBBox) return !1;
              var r,
                c,
                u,
                h,
                p = s(t) + 1;
              return (
                (this._style = t.style),
                "function" == typeof e && (e = e(a, t)),
                !0 === e || "true" === e
                  ? (e = "0 100%")
                  : e
                  ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
                  : (e = "0 0"),
                (r = n(t, p)),
                (c = i(e, p, r[0])),
                (this._length = p + 10),
                0 === r[0] && 0 === c[0]
                  ? ((u = Math.max(1e-5, c[1] - p)),
                    (this._dash = p + u),
                    (this._offset = p - r[1] + u),
                    this._addTween(
                      this,
                      "_offset",
                      this._offset,
                      p - c[1] + u,
                      "drawSVG"
                    ))
                  : ((this._dash = r[1] - r[0] || 1e-6),
                    (this._offset = -r[0]),
                    this._addTween(
                      this,
                      "_dash",
                      this._dash,
                      c[1] - c[0] || 1e-5,
                      "drawSVG"
                    ),
                    this._addTween(
                      this,
                      "_offset",
                      this._offset,
                      -c[0],
                      "drawSVG"
                    )),
                d &&
                  ((h = l(t)),
                  "butt" !== (c = h.strokeLinecap) &&
                    c !== h.strokeLinejoin &&
                    ((c = parseFloat(h.strokeMiterlimit)),
                    this._addTween(
                      t.style,
                      "strokeMiterlimit",
                      c,
                      c + 1e-4,
                      "strokeMiterlimit"
                    ))),
                !0
              );
            },
            set: function(t) {
              this._firstPT &&
                (this._super.setRatio.call(this, t),
                (this._style.strokeDashoffset = this._offset),
                (this._style.strokeDasharray =
                  1 === t || 0 === t
                    ? this._offset < 0.001 && this._length - this._dash <= 10
                      ? "none"
                      : this._offset === this._dash
                      ? "0px, 999999px"
                      : this._dash + "px," + this._length + "px"
                    : this._dash + "px," + this._length + "px"));
            }
          })),
            (o.getLength = s),
            (o.getPosition = n);
        }),
          r._gsDefine && r._gsQueue.pop()(),
          (function(s) {
            "use strict";
            var l = function() {
              return (r.GreenSockGlobals || r).DrawSVGPlugin;
            };
            void 0 !== t && t.exports
              ? (i("W9M7"), (t.exports = l()))
              : ((o = [i("W9M7")]),
                (n = l),
                void 0 !== (a = "function" == typeof n ? n.apply(e, o) : n) &&
                  (t.exports = a));
          })();
      }.call(e, i("DuR2")));
    },
    XiXP: function(t, e, i) {
      t.exports = i.p + "static/img/where-to-buy-additional.cb10f42.svg";
    },
    YP30: function(t, e) {},
    ZL5T: function(t, e, i) {
      t.exports = i.p + "static/img/logo-text-landing.ba9d0d1.svg";
    },
    c1NI: function(t, e) {},
    gzFK: function(t, e) {},
    i2FF: function(t, e) {},
    kwBM: function(t, e) {},
    oUsC: function(t, e, i) {
      (function(s) {
        var n,
          o,
          a,
          r = void 0 !== t && t.exports && void 0 !== s ? s : this || window;
        (r._gsQueue || (r._gsQueue = [])).push(function() {
          "use strict";
          r._gsDefine(
            "plugins.ThrowPropsPlugin",
            [
              "plugins.TweenPlugin",
              "TweenLite",
              "easing.Ease",
              "utils.VelocityTracker"
            ],
            function(t, e, i, s) {
              var n,
                o,
                a,
                l,
                c = function(e, i) {
                  t.call(this, "throwProps"), (this._overwriteProps.length = 0);
                },
                d = 999999999999999,
                u = r._gsDefine.globals,
                h = !1,
                p = {
                  x: 1,
                  y: 1,
                  z: 2,
                  scale: 1,
                  scaleX: 1,
                  scaleY: 1,
                  rotation: 1,
                  rotationZ: 1,
                  rotationX: 2,
                  rotationY: 2,
                  skewX: 1,
                  skewY: 1,
                  xPercent: 1,
                  yPercent: 1
                },
                f = function(t, e, i, s) {
                  for (var n, o, a = e.length, r = 0, l = d; --a > -1; )
                    (n = e[a]),
                      (o = n - t),
                      o < 0 && (o = -o),
                      o < l && n >= s && n <= i && ((r = a), (l = o));
                  return e[r];
                },
                v = function(t, e, i, s) {
                  if ("auto" === t.end) return t;
                  (i = isNaN(i) ? d : i), (s = isNaN(s) ? -d : s);
                  var n =
                    "function" == typeof t.end
                      ? t.end(e)
                      : t.end instanceof Array
                      ? f(e, t.end, i, s)
                      : Number(t.end);
                  return (
                    n > i ? (n = i) : n < s && (n = s),
                    { max: n, min: n, unitFactor: t.unitFactor }
                  );
                },
                g = function(t, e, i) {
                  for (var s in e) void 0 === t[s] && s !== i && (t[s] = e[s]);
                  return t;
                },
                m = (c.calculateChange = function(t, s, n, o) {
                  return (
                    null == o && (o = 0.05),
                    (n * o * t) /
                      (s instanceof i
                        ? s
                        : s
                        ? new i(s)
                        : e.defaultEase
                      ).getRatio(o)
                  );
                }),
                _ = (c.calculateDuration = function(t, s, n, o, a) {
                  a = a || 0.05;
                  var r = o instanceof i ? o : o ? new i(o) : e.defaultEase;
                  return Math.abs(((s - t) * r.getRatio(a)) / n / a);
                }),
                y = (c.calculateTweenDuration = function(t, n, o, a, r, l) {
                  if (("string" == typeof t && (t = e.selector(t)), !t))
                    return 0;
                  null == o && (o = 10),
                    null == a && (a = 0.2),
                    null == r && (r = 1),
                    t.length && (t = t[0] || t);
                  var d,
                    u,
                    p,
                    f,
                    y,
                    w,
                    C,
                    b,
                    x,
                    $,
                    S = 0,
                    k = 9999999999,
                    P = n.throwProps || n,
                    T =
                      n.ease instanceof i
                        ? n.ease
                        : n.ease
                        ? new i(n.ease)
                        : e.defaultEase,
                    B = isNaN(P.checkpoint) ? 0.05 : Number(P.checkpoint),
                    M = isNaN(P.resistance)
                      ? c.defaultResistance
                      : Number(P.resistance);
                  for (d in P)
                    "resistance" !== d &&
                      "checkpoint" !== d &&
                      "preventOvershoot" !== d &&
                      ((u = P[d]),
                      "object" != typeof u &&
                        ((x = x || s.getByTarget(t)),
                        x && x.isTrackingProp(d)
                          ? (u =
                              "number" == typeof u
                                ? { velocity: u }
                                : { velocity: x.getVelocity(d) })
                          : ((f = Number(u) || 0),
                            (p = f * M > 0 ? f / M : f / -M))),
                      "object" == typeof u &&
                        (void 0 !== u.velocity && "number" == typeof u.velocity
                          ? (f = Number(u.velocity) || 0)
                          : ((x = x || s.getByTarget(t)),
                            (f =
                              x && x.isTrackingProp(d) ? x.getVelocity(d) : 0)),
                        (y = isNaN(u.resistance) ? M : Number(u.resistance)),
                        (p = f * y > 0 ? f / y : f / -y),
                        (w =
                          "function" == typeof t[d]
                            ? t[
                                d.indexOf("set") ||
                                "function" != typeof t["get" + d.substr(3)]
                                  ? d
                                  : "get" + d.substr(3)
                              ]()
                            : t[d] || 0),
                        (C = w + m(f, T, p, B)),
                        void 0 !== u.end &&
                          ((u = v(u, C, u.max, u.min)),
                          (l || h) && (P[d] = g(u, P[d], "end"))),
                        void 0 !== u.max && C > Number(u.max) + 1e-10
                          ? (($ = u.unitFactor || c.defaultUnitFactors[d] || 1),
                            (b =
                              (w > u.max && u.min !== u.max) ||
                              (f * $ > -15 && f * $ < 45)
                                ? a + 0.1 * (o - a)
                                : _(w, u.max, f, T, B)) +
                              r <
                              k && (k = b + r))
                          : void 0 !== u.min &&
                            C < Number(u.min) - 1e-10 &&
                            (($ = u.unitFactor || c.defaultUnitFactors[d] || 1),
                            (b =
                              (w < u.min && u.min !== u.max) ||
                              (f * $ > -45 && f * $ < 15)
                                ? a + 0.1 * (o - a)
                                : _(w, u.min, f, T, B)) +
                              r <
                              k && (k = b + r)),
                        b > S && (S = b)),
                      p > S && (S = p));
                  return S > k && (S = k), S > o ? o : S < a ? a : S;
                }),
                w = (c.prototype = new t("throwProps"));
              return (
                (w.constructor = c),
                (c.version = "0.10.0"),
                (c.API = 2),
                (c._autoCSS = !0),
                (c.defaultResistance = 100),
                (c.defaultUnitFactors = { time: 1e3, totalTime: 1e3 }),
                (c.track = function(t, e, i) {
                  return s.track(t, e, i);
                }),
                (c.untrack = function(t, e) {
                  s.untrack(t, e);
                }),
                (c.isTracking = function(t, e) {
                  return s.isTracking(t, e);
                }),
                (c.getVelocity = function(t, e) {
                  var i = s.getByTarget(t);
                  return i ? i.getVelocity(e) : NaN;
                }),
                (c._cssRegister = function() {
                  var t = u.com.greensock.plugins.CSSPlugin;
                  if (t) {
                    var e = t._internals,
                      i = e._parseToProxy,
                      a = e._setPluginRatio,
                      r = e.CSSPropTween;
                    e._registerComplexSpecialProp("throwProps", {
                      parser: function(t, e, l, d, u, h) {
                        h = new c();
                        var f,
                          v,
                          g,
                          m,
                          _ = {},
                          y = {},
                          w = {},
                          C = {},
                          b = {},
                          x = {};
                        o = {};
                        for (v in e)
                          "resistance" !== v &&
                            "preventOvershoot" !== v &&
                            ((f = e[v]),
                            "object" == typeof f
                              ? (void 0 !== f.velocity &&
                                "number" == typeof f.velocity
                                  ? (_[v] = Number(f.velocity) || 0)
                                  : ((m = m || s.getByTarget(t)),
                                    (_[v] =
                                      m && m.isTrackingProp(v)
                                        ? m.getVelocity(v)
                                        : 0)),
                                void 0 !== f.end && (C[v] = f.end),
                                void 0 !== f.min && (y[v] = f.min),
                                void 0 !== f.max && (w[v] = f.max),
                                f.preventOvershoot && (x[v] = !0),
                                void 0 !== f.resistance &&
                                  (!0, (b[v] = f.resistance)))
                              : "number" == typeof f
                              ? (_[v] = f)
                              : ((m = m || s.getByTarget(t)),
                                m && m.isTrackingProp(v)
                                  ? (_[v] = m.getVelocity(v))
                                  : (_[v] = f || 0)),
                            p[v] && d._enableTransforms(2 === p[v]));
                        (g = i(t, _, d, u, h)), (n = g.proxy), (_ = g.end);
                        for (v in n)
                          o[v] = {
                            velocity: _[v],
                            min: y[v],
                            max: w[v],
                            end: C[v],
                            resistance: b[v],
                            preventOvershoot: x[v]
                          };
                        return (
                          null != e.resistance && (o.resistance = e.resistance),
                          e.preventOvershoot && (o.preventOvershoot = !0),
                          (u = new r(t, "throwProps", 0, 0, g.pt, 2)),
                          d._overwriteProps.pop(),
                          (u.plugin = h),
                          (u.setRatio = a),
                          (u.data = g),
                          h._onInitTween(n, o, d._tween),
                          u
                        );
                      }
                    });
                  }
                }),
                (c.to = function(t, i, s, r, c) {
                  i.throwProps || (i = { throwProps: i }),
                    0 === c && (i.throwProps.preventOvershoot = !0),
                    (h = !0);
                  var d = new e(t, r || 1, i);
                  return (
                    d.render(0, !0, !0),
                    d.vars.css
                      ? (d.duration(
                          y(n, { throwProps: o, ease: i.ease }, s, r, c)
                        ),
                        d._delay && !d.vars.immediateRender
                          ? d.invalidate()
                          : a._onInitTween(n, l, d),
                        (h = !1),
                        d)
                      : (d.kill(),
                        (d = new e(t, y(t, i, s, r, c), i)),
                        (h = !1),
                        d)
                  );
                }),
                (w._onInitTween = function(t, e, i, n) {
                  (this.target = t), (this._props = []), (a = this), (l = e);
                  var o,
                    r,
                    c,
                    d,
                    u,
                    p,
                    f,
                    _,
                    y,
                    w = i._ease,
                    C = isNaN(e.checkpoint) ? 0.05 : Number(e.checkpoint),
                    b = i._duration,
                    x = e.preventOvershoot,
                    $ = 0;
                  for (o in e)
                    if (
                      "resistance" !== o &&
                      "checkpoint" !== o &&
                      "preventOvershoot" !== o
                    ) {
                      if (
                        ((r = e[o]),
                        "function" == typeof r && (r = r(n, t)),
                        "number" == typeof r)
                      )
                        u = Number(r) || 0;
                      else if ("object" != typeof r || isNaN(r.velocity)) {
                        if (
                          !(y = y || s.getByTarget(t)) ||
                          !y.isTrackingProp(o)
                        )
                          throw "ERROR: No velocity was defined in the throwProps tween of " +
                            t +
                            " property: " +
                            o;
                        u = y.getVelocity(o);
                      } else u = Number(r.velocity);
                      (p = m(u, w, b, C)),
                        (_ = 0),
                        (d = "function" == typeof t[o]),
                        (c = d
                          ? t[
                              o.indexOf("set") ||
                              "function" != typeof t["get" + o.substr(3)]
                                ? o
                                : "get" + o.substr(3)
                            ]()
                          : t[o]),
                        "object" == typeof r &&
                          ((f = c + p),
                          void 0 !== r.end &&
                            ((r = v(r, f, r.max, r.min)),
                            h && (e[o] = g(r, e[o], "end"))),
                          void 0 !== r.max && Number(r.max) < f
                            ? x || r.preventOvershoot
                              ? (p = r.max - c)
                              : (_ = r.max - c - p)
                            : void 0 !== r.min &&
                              Number(r.min) > f &&
                              (x || r.preventOvershoot
                                ? (p = r.min - c)
                                : (_ = r.min - c - p))),
                        (this._overwriteProps[$] = o),
                        (this._props[$++] = {
                          p: o,
                          s: c,
                          c1: p,
                          c2: _,
                          f: d,
                          r: !1
                        });
                    }
                  return !0;
                }),
                (w._kill = function(e) {
                  for (var i = this._props.length; --i > -1; )
                    null != e[this._props[i].p] && this._props.splice(i, 1);
                  return t.prototype._kill.call(this, e);
                }),
                (w._mod = function(t) {
                  for (var e, i = this._props, s = i.length; --s > -1; )
                    "function" == typeof (e = t[i[s].p] || t.throwProps) &&
                      (i[s].m = e);
                }),
                (w.setRatio = function(t) {
                  for (var e, i, s = this._props.length; --s > -1; )
                    (e = this._props[s]),
                      (i = e.s + e.c1 * t + e.c2 * t * t),
                      e.m
                        ? (i = e.m(i, this.target))
                        : 1 === t &&
                          (i = ((1e4 * i + (i < 0 ? -0.5 : 0.5)) | 0) / 1e4),
                      e.f ? this.target[e.p](i) : (this.target[e.p] = i);
                }),
                t.activate([c]),
                c
              );
            },
            !0
          ),
            r._gsDefine(
              "utils.VelocityTracker",
              ["TweenLite"],
              function(t) {
                var e,
                  i,
                  s,
                  n,
                  o = /([A-Z])/g,
                  a = {},
                  r = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1,
                    xPercent: 1,
                    yPercent: 1
                  },
                  l = document.defaultView
                    ? document.defaultView.getComputedStyle
                    : function() {},
                  c = function(t, e, i) {
                    var s = (t._gsTransform || a)[e];
                    return s || 0 === s
                      ? s
                      : (t.style[e]
                          ? (s = t.style[e])
                          : (i = i || l(t, null))
                          ? (s =
                              i[e] ||
                              i.getPropertyValue(e) ||
                              i.getPropertyValue(
                                e.replace(o, "-$1").toLowerCase()
                              ))
                          : t.currentStyle && (s = t.currentStyle[e]),
                        parseFloat(s) || 0);
                  },
                  d = t.ticker,
                  u = function(t, e, i) {
                    (this.p = t),
                      (this.f = e),
                      (this.v1 = this.v2 = 0),
                      (this.t1 = this.t2 = d.time),
                      (this.css = !1),
                      (this.type = ""),
                      (this._prev = null),
                      i && ((this._next = i), (i._prev = this));
                  },
                  h = function() {
                    var t,
                      i,
                      o = e,
                      a = d.time;
                    if (a - s >= 0.03)
                      for (n = s, s = a; o; ) {
                        for (i = o._firstVP; i; )
                          (t = i.css
                            ? c(o.target, i.p)
                            : i.f
                            ? o.target[i.p]()
                            : o.target[i.p]),
                            (t !== i.v1 || a - i.t1 > 0.15) &&
                              ((i.v2 = i.v1),
                              (i.v1 = t),
                              (i.t2 = i.t1),
                              (i.t1 = a)),
                            (i = i._next);
                        o = o._next;
                      }
                  },
                  p = function(t) {
                    (this._lookup = {}),
                      (this.target = t),
                      (this.elem = !(!t.style || !t.nodeType)),
                      i ||
                        (d.addEventListener("tick", h, null, !1, -100),
                        (s = n = d.time),
                        (i = !0)),
                      e && ((this._next = e), (e._prev = this)),
                      (e = this);
                  },
                  f = (p.getByTarget = function(t) {
                    for (var i = e; i; ) {
                      if (i.target === t) return i;
                      i = i._next;
                    }
                  }),
                  v = p.prototype;
                return (
                  (v.addProp = function(e, i) {
                    if (!this._lookup[e]) {
                      var s = this.target,
                        n = "function" == typeof s[e],
                        o = n ? this._altProp(e) : e,
                        a = this._firstVP;
                      (this._firstVP = this._lookup[e] = this._lookup[
                        o
                      ] = a = new u(
                        o !== e && 0 === e.indexOf("set") ? o : e,
                        n,
                        a
                      )),
                        (a.css =
                          this.elem &&
                          (void 0 !== this.target.style[a.p] || r[a.p])),
                        a.css &&
                          r[a.p] &&
                          !s._gsTransform &&
                          t.set(s, { x: "+=0", overwrite: !1 }),
                        (a.type =
                          i || (a.css && 0 === e.indexOf("rotation"))
                            ? "deg"
                            : ""),
                        (a.v1 = a.v2 = a.css
                          ? c(s, a.p)
                          : n
                          ? s[a.p]()
                          : s[a.p]);
                    }
                  }),
                  (v.removeProp = function(t) {
                    var e = this._lookup[t];
                    e &&
                      (e._prev
                        ? (e._prev._next = e._next)
                        : e === this._firstVP && (this._firstVP = e._next),
                      e._next && (e._next._prev = e._prev),
                      (this._lookup[t] = 0),
                      e.f && (this._lookup[this._altProp(t)] = 0));
                  }),
                  (v.isTrackingProp = function(t) {
                    return this._lookup[t] instanceof u;
                  }),
                  (v.getVelocity = function(t) {
                    var e,
                      i,
                      s,
                      n = this._lookup[t],
                      o = this.target;
                    if (!n)
                      throw "The velocity of " + t + " is not being tracked.";
                    return (
                      (e = n.css ? c(o, n.p) : n.f ? o[n.p]() : o[n.p]),
                      (i = e - n.v2),
                      ("rad" !== n.type && "deg" !== n.type) ||
                        ((s = "rad" === n.type ? 2 * Math.PI : 360),
                        (i %= s) !== i % (s / 2) &&
                          (i = i < 0 ? i + s : i - s)),
                      i / (d.time - n.t2)
                    );
                  }),
                  (v._altProp = function(t) {
                    var e = t.substr(0, 3),
                      i =
                        ("get" === e ? "set" : "set" === e ? "get" : e) +
                        t.substr(3);
                    return "function" == typeof this.target[i] ? i : t;
                  }),
                  (p.getByTarget = function(i) {
                    var s = e;
                    for (
                      "string" == typeof i && (i = t.selector(i)),
                        i.length &&
                          i !== window &&
                          i[0] &&
                          i[0].style &&
                          !i.nodeType &&
                          (i = i[0]);
                      s;

                    ) {
                      if (s.target === i) return s;
                      s = s._next;
                    }
                  }),
                  (p.track = function(t, e, i) {
                    var s = f(t),
                      n = e.split(","),
                      o = n.length;
                    for (
                      i = (i || "").split(","), s || (s = new p(t));
                      --o > -1;

                    )
                      s.addProp(n[o], i[o] || i[0]);
                    return s;
                  }),
                  (p.untrack = function(t, i) {
                    var s = f(t),
                      n = (i || "").split(","),
                      o = n.length;
                    if (s) {
                      for (; --o > -1; ) s.removeProp(n[o]);
                      (s._firstVP && i) ||
                        (s._prev
                          ? (s._prev._next = s._next)
                          : s === e && (e = s._next),
                        s._next && (s._next._prev = s._prev));
                    }
                  }),
                  (p.isTracking = function(t, e) {
                    var i = f(t);
                    return !!i && (!(e || !i._firstVP) || i.isTrackingProp(e));
                  }),
                  p
                );
              },
              !0
            );
        }),
          r._gsDefine && r._gsQueue.pop()(),
          (function(s) {
            "use strict";
            var l = function() {
              return (r.GreenSockGlobals || r).ThrowPropsPlugin;
            };
            (o = [i("W9M7")]),
              (n = l),
              void 0 !== (a = "function" == typeof n ? n.apply(e, o) : n) &&
                (t.exports = a);
          })();
      }.call(e, i("DuR2")));
    },
    p6j3: function(t, e) {},
    q4OT: function(t, e, i) {
      t.exports = i.p + "static/img/history-image3.ceda3eb.png";
    },
    qo5O: function(t, e, i) {
      t.exports = i.p + "static/img/place.18487df.svg";
    },
    "qz/U": function(t, e, i) {
      t.exports = i.p + "static/img/logo.501d519.svg";
    },
    sx7o: function(t, e) {},
    "vU/C": function(t, e, i) {
      t.exports = i.p + "static/img/icon-arrow-select.4d31c88.svg";
    },
    xSA0: function(t, e) {},
    "y9/I": function(t, e) {}
  },
  ["NHnr"]
);
