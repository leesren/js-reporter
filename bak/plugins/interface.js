!function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.wpkinterfacePlugin = e() : t.wpkinterfacePlugin = e()
}(this, function() {
	return function(t) {
			var e = {}; 
			function r(n) {
					if (e[n])
							return e[n].exports;
					var o = e[n] = {
							i: n,
							l: !1,
							exports: {}
					};
					return t[n].call(o.exports, o, o.exports, r),
					o.l = !0,
					o.exports
			}
			return r.m = t,
			r.c = e,
			r.d = function(t, e, n) {
					r.o(t, e) || Object.defineProperty(t, e, {
							enumerable: !0,
							get: n
					})
			}
			,
			r.r = function(t) {
					"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
							value: "Module"
					}),
					Object.defineProperty(t, "__esModule", {
							value: !0
					})
			}
			,
			r.t = function(t, e) {
					if (1 & e && (t = r(t)),
					8 & e)
							return t;
					if (4 & e && "object" == typeof t && t && t.__esModule)
							return t;
					var n = Object.create(null);
					if (r.r(n),
					Object.defineProperty(n, "default", {
							enumerable: !0,
							value: t
					}),
					2 & e && "string" != typeof t)
							for (var o in t)
									r.d(n, o, function(e) {
											return t[e]
									}
									.bind(null, o));
					return n
			}
			,
			r.n = function(t) {
					var e = t && t.__esModule ? function() {
							return t.default
					}
					: function() {
							return t
					}
					;
					return r.d(e, "a", e),
					e
			}
			,
			r.o = function(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
			}
			,
			r.p = "",
			r(r.s = 4)
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
	, , , , function(t, e, r) {
			var n = r(0)
				, o = n.sdk
				, i = n.http.methods
				, a = n.category
				, p = 2048
				, s = 121e3
				, c = function(t) {
					return t >= 200 && t <= 299
			}
				, l = function(t) {
					return -1 === t.indexOf("//arms-retcode") && -1 === t.indexOf("//wpk-gateway") && -1 === t.indexOf("//px.ucweb.com") && -1 === t.indexOf("//px.effirst.com") && -1 === t.indexOf("//px-intl.ucweb.com")
			};
			var f = function(t, e) {
					if (t.env === n.env.BROWSER && window) {
							var r = t.toolKit.extend({
									enable: !0,
									sampleRate: 1
							}, e);
							r.enable ? (t.logger.info("wpkinterfacePlugin已开启"),
							"XMLHttpRequest"in window && function(t, e) {
									var r = window.XMLHttpRequest.prototype
										, n = r.open;
									r.open = function(t, e) {
											this.__reqCtx__ = {
													method: t,
													url: e || "",
													start: Date.now()
											};
											var r = [].slice.call(arguments);
											n.apply(this, r)
									}
									;
									var f = r.send;
									r.send = function(r) {
											var n = this;
											function u() {
													if (n.__reqCtx__ && 4 === n.readyState)
															try {
																	var f = Date.now()
																		, u = (n.responseURL || n.__reqCtx__.url).split("?")
																		, d = u[0]
																		, w = u[1] || ""
																		, h = "";
																	n.__reqCtx__.method.toUpperCase() !== i.GET && r && (h = JSON.stringify(r));
																	var y = String(n.response)
																		, _ = !0
																		, g = {};
																	"function" == typeof e.errorFilter && (_ = !!(g = e.errorFilter.call(this, {
																			url: d,
																			status: n.status,
																			response: y
																	})),
																	t.logger.warn("api errorFilter执行结果：", g)),
																	y.length > p && (y = "[response content too large]");
																	var m = f - n.__reqCtx__.start;
																	if (_ && m < s && l(d)) {
																			var v = g.bizCode || n.status;
																			t.report({
																					category: a.API,
																					sampleRate: e.sampleRate,
																					w_res: d,
																					w_param: w,
																					w_body: c(v) || !e.withBody ? "" : h,
																					w_method: n.__reqCtx__.method,
																					w_rc: v,
																					w_rt: m,
																					w_resp: c(v) || !e.withResp ? "" : g.msg || y,
																					w_type: 16,
																					c1: g.traceId
																			})
																	}
															} catch (e) {
																	t.reportError(e, {
																			bid: o.BID,
																			cid: o.CID,
																			category: a.JSERR,
																			sampleRate: 1
																	})
															}
											}
											if ("onreadystatechange"in n && "function" == typeof n.onreadystatechange) {
													var d = n.onreadystatechange;
													n.onreadystatechange = function() {
															var t = [].slice.call(arguments);
															u.apply(this, t),
															d.apply(this, t)
													}
											} else
													n.onreadystatechange = u;
											var w = [].slice.call(arguments);
											return f.apply(this, w)
									}
							}(t, r),
							"fetch"in window && function(t, e) {
									var r = window.fetch;
									window.fetch = function() {
											var n = [].slice.call(arguments)
												, f = i.GET;
											n[1] && n[1].method && (f = n[1].method.toUpperCase());
											var u = Date.now();
											return r.apply(this, n).then(function(r) {
													try {
															var d = Date.now()
																, w = (r.url || n[0]).split("?")
																, h = w[0]
																, y = w[1] || ""
																, _ = "";
															f !== i.GET && n[1] && n[1].body && (_ = JSON.stringify(n[1].body)),
															r.clone().text().then(function(n) {
																	n = n || "";
																	var o = !0
																		, i = {};
																	if ("function" == typeof e.errorFilter && (o = !!(i = e.errorFilter.call(this, {
																			url: h,
																			status: r.status,
																			response: n
																	})),
																	t.logger.warn("api errorFilter执行结果：", i)),
																	n = n.length > p ? "[response content too large]" : n,
																	o && d - u < s && l(h)) {
																			var w = i.bizCode || r.status;
																			t.report({
																					category: a.API,
																					sampleRate: e.sampleRate,
																					w_res: h,
																					w_param: y,
																					w_body: c(w) || !e.withBody ? "" : _,
																					w_method: f,
																					w_rc: w,
																					w_rt: d - u,
																					w_resp: c(w) || !e.withResp ? "" : i.msg || n,
																					w_type: 16,
																					c1: i.traceId
																			})
																	}
															})
													} catch (e) {
															t.reportError(e, {
																	bid: o.BID,
																	cid: o.CID,
																	category: a.JSERR,
																	sampleRate: 1
															})
													}
													return r
											}).catch(function(e) {
													throw t.reportError(e, {
															category: a.JSERR
													}),
													e
											})
									}
							}(t, r)) : t.logger.info("wpkinterfacePlugin已关闭")
					}
			};
			f.prototype.pluginId = "api",
			t.exports = f
	}
	])
}); 
