!function(e, r) {
	"object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports.wpkglobalerrorPlugin = r() : e.wpkglobalerrorPlugin = r()
}(this, function() {
	return function(e) {
			var r = {};
			function t(n) {
					if (r[n])
							return r[n].exports;
					var o = r[n] = {
							i: n,
							l: !1,
							exports: {}
					};
					return e[n].call(o.exports, o, o.exports, t),
					o.l = !0,
					o.exports
			}
			return t.m = e,
			t.c = r,
			t.d = function(e, r, n) {
					t.o(e, r) || Object.defineProperty(e, r, {
							enumerable: !0,
							get: n
					})
			}
			,
			t.r = function(e) {
					"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
							value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
							value: !0
					})
			}
			,
			t.t = function(e, r) {
					if (1 & r && (e = t(e)),
					8 & r)
							return e;
					if (4 & r && "object" == typeof e && e && e.__esModule)
							return e;
					var n = Object.create(null);
					if (t.r(n),
					Object.defineProperty(n, "default", {
							enumerable: !0,
							value: e
					}),
					2 & r && "string" != typeof e)
							for (var o in e)
									t.d(n, o, function(r) {
											return e[r]
									}
									.bind(null, o));
					return n
			}
			,
			t.n = function(e) {
					var r = e && e.__esModule ? function() {
							return e.default
					}
					: function() {
							return e
					}
					;
					return t.d(r, "a", r),
					r
			}
			,
			t.o = function(e, r) {
					return Object.prototype.hasOwnProperty.call(e, r)
			}
			,
			t.p = "",
			t(t.s = 3)
	}([function(e, r) {
			e.exports = {
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
	, , , function(e, r, t) {
			var n, o, i = t(0), a = i.env, s = i.category, l = function(e) {
					return "function" == typeof e
			}, p = function(e) {
					var r = -1;
					switch (e.tagName.toLowerCase()) {
					case "img":
							r = 1;
							break;
					case "link":
							e.rel && "stylesheet" === e.rel.toLowerCase() && (r = 2);
							break;
					case "script":
							r = 3;
							break;
					case "video":
							r = 11
					}
					return r
			}, c = {}, f = function(e, r, t, n) {
					e.addEventListener ? e.addEventListener(r, t, n || !1) : (c["on" + r] = function() {
							return t.call(e, window.event)
					}
					,
					e.attachEvent("on" + r, c["on" + r]))
			}, u = function(e, r) {
					var t = e.id ? "#" + e.id : ""
						, n = e.className ? "." + e.className.split(" ").join(".") : ""
						, o = e.tagName.toLowerCase();
					return e.parentNode && e.parentNode.tagName && r - 1 != 0 ? u(e.parentNode, r - 1) + " > " + o.toLowerCase() + t + n : o + t + n
			}, g = function(e, r, t, i, a, p) {
					if (n)
							try {
									n.call(this, r, t, i, a, p)
							} catch (p) {}
					if (/^script error\.?$/i.test(r) && (r = "Script error"),
					o.ignoreScriptError && "Script error" === r)
							e.logger.warn("配置了ignoreScriptError，本次异常将不上报");
					else if (!l(o.jsErrFilter) || o.jsErrFilter.call(this, event)) {
							if (null != p) {
									var c = (p.stack || "").split("\n");
									c.shift();
									var f = {
											w_msg: r,
											w_file: t || "",
											w_line: i || "",
											w_col: a || "",
											stack: c.join("\n"),
											category: s.JSERR,
											sampleRate: o.jsErrSampleRate
									};
									e.report(f)
							}
					} else
							e.logger.warn("jserrFilter 返回false，本次日志将不上报, event: ", event)
			}, d = function(e, r) {
					var t = window;
					t && e.env === a.BROWSER ? (e.logger.info("wpkglobalerrorPlugin已开启"),
					!1 !== (o = e.toolKit.extend({
							jsErrSampleRate: 1,
							resErrSampleRate: 1
					}, r)).jsErr ? (n = t.onerror,
					t.onerror = function(r, t, n, o, i) {
							g(e, r, t, n, o, i)
					}
					,
					f(t, "unhandledrejection", function(r) {
							var t = r.type;
							"string" == typeof r.reason ? t = r.reason : "object" == typeof r.reason && r.reason.message && (t = r.reason.message),
							g(e, t, null, null, null, r.reason)
					})) : e.logger.warn("js异常监控已关闭"),
					o.resErr ? f(t, "error", function(r) {
							!function(e, r) {
									if (!r.target.tagName || r.message || r.filename || r.lineno || r.colno)
											e.logger.warn("非资源获取问题，跳出处理, event: ", r);
									else if (!l(o.resErrFilter) || o.resErrFilter.call(this, r)) {
											var t = r.target.src || r.target.href;
											e.report({
													category: s.RESLOADFAIL,
													sampleRate: o.resErrSampleRate,
													msg: t + " 加载失败",
													w_res: t,
													w_type: p(r.target),
													w_xpath: u(r.target, 5)
											})
									} else
											e.logger.warn("reserrFilter 返回false，本次日志将不上报, event: ", r)
							}(e, r)
					}, !0) : e.logger.warn("资源加载异常监控已关闭")) : e.logger.warn("全局错误监控插件不支持非浏览器环境")
			};
			d.prototype.pluginId = "gerror",
			e.exports = d
	}
	])
}); 
