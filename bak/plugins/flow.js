!function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.wpkflowPlugin = e() : t.wpkflowPlugin = e()
}(this, function() {
	return function(t) {
			var e = {};
			function n(o) {
					if (e[o])
							return e[o].exports;
					var i = e[o] = {
							i: o,
							l: !1,
							exports: {}
					};
					return t[o].call(i.exports, i, i.exports, n),
					i.l = !0,
					i.exports
			}
			return n.m = t,
			n.c = e,
			n.d = function(t, e, o) {
					n.o(t, e) || Object.defineProperty(t, e, {
							enumerable: !0,
							get: o
					})
			}
			,
			n.r = function(t) {
					"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
							value: "Module"
					}),
					Object.defineProperty(t, "__esModule", {
							value: !0
					})
			}
			,
			n.t = function(t, e) {
					if (1 & e && (t = n(t)),
					8 & e)
							return t;
					if (4 & e && "object" == typeof t && t && t.__esModule)
							return t;
					var o = Object.create(null);
					if (n.r(o),
					Object.defineProperty(o, "default", {
							enumerable: !0,
							value: t
					}),
					2 & e && "string" != typeof t)
							for (var i in t)
									n.d(o, i, function(e) {
											return t[e]
									}
									.bind(null, i));
					return o
			}
			,
			n.n = function(t) {
					var e = t && t.__esModule ? function() {
							return t.default
					}
					: function() {
							return t
					}
					;
					return n.d(e, "a", e),
					e
			}
			,
			n.o = function(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
			}
			,
			n.p = "",
			n(n.s = 1)
	}([function(t, e) {
			t.exports = {
					sdk: {
							BID: "wpkreporter",
							CID: "jssdk",
							WID_KEY: "__wpkreporterwid_"
					},
					env: {
							BROWSER: "browser",
							NODEJS: "nodejs",
							WEEX: "weex"
					},
					px: {
							signKey: "Uvn#08uefVdwe&c4",
							addr: {
									cn: "http://127.0.0.1:7001/track/transformLog",
									cn_https: "https://px.effirst.com/api/v1/jssdk/upload",
									intl: "http://px-intl.ucweb.com/api/v1/jssdk/upload",
									intl_https: "https://px-intl.ucweb.com/api/v1/jssdk/upload"
							},
							confAddr: {
									cn: "http://px.effirst.com/api/v1/jconfig",
									cn_https: "https://px.effirst.com/api/v1/jconfig",
									intl: "http://px-intl.ucweb.com/api/v1/jconfig",
									intl_https: "https://px-intl.ucweb.com/api/v1/jconfig"
							}
					},
					http: {
							methods: {
									GET: "GET",
									PUT: "PUT",
									POST: "POST",
									HEAD: "HEAD",
									DELETE: "DELETE",
									OPTIONS: "OPTIONS",
									CONNECT: "OPTIONS",
									TRACE: "OPTIONS",
									PATCH: "OPTIONS"
							},
							protocols: {
									HTTP: "http:",
									HTTPS: "https:"
							}
					},
					category: {
							JSERR: 1,
							API: 2,
							JSFSPERF: 3,
							RESLOADFAIL: 4,
							FLOW: 5,
							BKPG: 6,
							HARLOG: 7
					},
					navConn: {
							types: {
									BLUETOOTH: "bluetooth",
									CELLULAR: "cellular",
									ETHERNET: "ethernet",
									MIXED: "mixed",
									NONE: "none",
									OTHER: "other",
									UNKNOWN: "unknown",
									WIFI: "wifi",
									WIMAX: "wimax"
							},
							effectiveTypes: {
									"2G": "2g",
									"3G": "3g",
									"4G": "4g",
									SLOW2G: "slow-2g"
							}
					}
			}
	}
	, function(t, e, n) {
			var o = n(0).env
				, i = function(t) {
					var e;
					return (t ? (e = t.replace(/^#\/?/, "")) && "string" == typeof e ? e.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : "" : "") || "[index]"
			}
				, r = function(t, e) {
					if (e = e || {},
					t.env === o.BROWSER && window)
							if (t.toolKit.extend({
									enable: !0
							}, e).enable) {
									t.logger.info("wpkflowPlugin已开启");
									var r, p, l = function() {
											t.reportFlow()
									};
									t.toolKit.onListen(window, "load", l, !0),
									t.spa && (n(2)(),
									r = function(e) {
											i(location.hash) && (t._sid = t.toolKit.uuid(),
											t.reportFlow())
									}
									,
									p = function(e) {
											i(e.detail) && (t._sid = t.toolKit.uuid(),
											t.reportFlow())
									}
									,
									t.toolKit.onListen(window, "hashchange", r),
									t.toolKit.onListen(window, "historystatechange", p)),
									t.toolKit.onListen(window, "beforeunload", function() {
											t.toolKit.offListen(window, "load"),
											t.toolKit.offListen(window, "hashchange"),
											t.toolKit.offListen(window, "historystatechange"),
											l = r = p = null
									})
							} else
									t.logger.info("wpkflowPlugin已关闭")
			};
			r.prototype.pluginId = "flow",
			t.exports = r
	}
	, function(t, e) {
			var n = window.history || {}
				, o = window.document
				, i = function(t, e) {
					var n;
					window.CustomEvent ? n = new CustomEvent(t,{
							detail: e
					}) : ((n = o.createEvent("HTMLEvents")).initEvent(t, !1, !0),
					n.detail = e),
					window.dispatchEvent(n)
			}
				, r = function(t) {
					return t && "string" == typeof t ? t.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : ""
			}
				, p = function(t) {
					var e = n[t];
					"function" == typeof e && (n[t] = function(t, o, p) {
							var l = location.href
								, c = e.call(n, t, o, p);
							if (!p || "string" != typeof p)
									return c;
							if (p === l)
									return c;
							try {
									var f = l.split("#")
										, u = p.split("#")
										, s = r(f[0])
										, a = r(u[0])
										, d = f[1] && f[1].replace(/^\/?(.*)/, "$1")
										, w = u[1] && u[1].replace(/^\/?(.*)/, "$1");
									s !== a ? i("historystatechange", a) : d !== w && i("historystatechange", w)
							} catch (t) {}
							return c
					}
					,
					n[t].toString = t + "() { [native code] }")
			};
			t.exports = function() {
					p("pushState"),
					p("replateState")
			}
	}
	])
}); 
