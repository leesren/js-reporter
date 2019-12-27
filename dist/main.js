(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wpkReporter"] = factory();
	else
		root["wpkReporter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
var config1 = {
    sdk: {
        BID: 'wpkreporter',
        CID: 'jssdk',
        WID_KEY: '__wpkreporterwid_',
    },
    env: {
        BROWSER: 'browser',
        NODEJS: 'nodejs',
        WEEX: 'weex',
    },
    px: {
        signKey: 'Uvn#08uefVdwe&c4',
        addr: {
            cn: 'http://127.0.0.1:7003/track/transformLog',
            cn_https: 'https://px.effirst.com/api/v1/jssdk/upload',
            intl: 'http://px-intl.ucweb.com/api/v1/jssdk/upload',
            intl_https: 'https://px-intl.ucweb.com/api/v1/jssdk/upload',
        },
        confAddr: {
            cn: 'http://px.effirst.com/api/v1/jconfig',
            cn_https: 'https://px.effirst.com/api/v1/jconfig',
            intl: 'http://px-intl.ucweb.com/api/v1/jconfig',
            intl_https: 'https://px-intl.ucweb.com/api/v1/jconfig',
        },
    },
    http: {
        methods: {
            GET: 'GET',
            PUT: 'PUT',
            POST: 'POST',
            HEAD: 'HEAD',
            DELETE: 'DELETE',
            OPTIONS: 'OPTIONS',
            CONNECT: 'OPTIONS',
            TRACE: 'OPTIONS',
            PATCH: 'OPTIONS',
        },
        protocols: {
            HTTP: 'http:',
            HTTPS: 'https:',
        },
    },
    category: {
        JSERR: 1,
        API: 2,
        JSFSPERF: 3,
        RESLOADFAIL: 4,
        FLOW: 5,
        BKPG: 6,
        HARLOG: 7,
    },
    navConn: {
        types: {
            BLUETOOTH: 'bluetooth',
            CELLULAR: 'cellular',
            ETHERNET: 'ethernet',
            MIXED: 'mixed',
            NONE: 'none',
            OTHER: 'other',
            UNKNOWN: 'unknown',
            WIFI: 'wifi',
            WIMAX: 'wimax',
        },
        effectiveTypes: {
            '2G': '2g',
            '3G': '3g',
            '4G': '4g',
            SLOW2G: 'slow-2g',
        },
    },
};
function wpkReporterEntry() {
    var t = utils_1.envCheck();
    var r = 'object' == typeof t && t + '' == '[object process]';
    var o = 'function' == typeof callNative || 'function' == typeof nativeLog;
    return o ? reportNative_5() : r ? reportNode_14() : reportBrowser_17(config1);
}
function reportNative_5(e, n) {
    var r = n(1), o = n(13);
    e.exports = function (e) {
        var t = new r(e);
        return t.initialize(o), t;
    };
}
function reportNode_14() { }
function reportBrowser_17(config) {
    var r = utils_1.core(config);
    var o = utils_1.n18(config);
    return function (customConfig) {
        var t = new r(customConfig);
        t.initialize(o);
        return t;
    };
}
var wpkReporter = wpkReporterEntry();
module.exports = wpkReporter;


/***/ }),

/***/ "./src/plugins/api.ts":
/*!****************************!*\
  !*** ./src/plugins/api.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function plugin_api(config) {
    var r = config;
    var o = r.sdk;
    var i = r.http.methods;
    var a = r.category;
    var s = 2048;
    var c = 121e3;
    var u = function (e) {
        return e >= 200 && e <= 299;
    };
    var l = function (e) {
        return (-1 === e.indexOf('//arms-retcode') &&
            -1 === e.indexOf('//wpk-gateway') &&
            -1 === e.indexOf('//px.ucweb.com') &&
            -1 === e.indexOf('//px.effirst.com') &&
            -1 === e.indexOf('//px-intl.ucweb.com'));
    };
    var f = function (e, t) {
        if (e.env === r.env.BROWSER && window) {
            var n = e.toolKit.extend({
                enable: !0,
                sampleRate: 1,
            }, t);
            n.enable
                ? (e.logger.info('wpkinterfacePlugin已开启'),
                    'XMLHttpRequest' in window &&
                        (function (e, t) {
                            var n = window.XMLHttpRequest.prototype;
                            var r = n.open;
                            n.open = function (e, t) {
                                this.__reqCtx__ = {
                                    method: e,
                                    url: t || '',
                                    start: Date.now(),
                                };
                                var n = [].slice.call(arguments);
                                r.apply(this, n);
                            };
                            var f = n.send;
                            n.send = function (n) {
                                var r = this;
                                function d() {
                                    if (r.__reqCtx__ && 4 === r.readyState)
                                        try {
                                            var f = Date.now(), d = (r.responseURL || r.__reqCtx__.url).split('?'), p = d[0], h = d[1] || '', g = '';
                                            r.__reqCtx__.method.toUpperCase() !== i.GET &&
                                                n &&
                                                (g = JSON.stringify(n));
                                            var w = String(r.response), v = !0, m = {};
                                            'function' == typeof t.errorFilter &&
                                                ((v = !!(m = t.errorFilter.call(this, {
                                                    url: p,
                                                    status: r.status,
                                                    response: w,
                                                }))),
                                                    e.logger.warn('api errorFilter执行结果：', m)),
                                                w.length > s && (w = '[response content too large]');
                                            var _ = f - r.__reqCtx__.start;
                                            if (v && _ < c && l(p)) {
                                                var y = m.bizCode || r.status;
                                                e.report({
                                                    category: a.API,
                                                    sampleRate: t.sampleRate,
                                                    w_res: p,
                                                    w_param: h,
                                                    w_body: u(y) || !t.withBody ? '' : g,
                                                    w_method: r.__reqCtx__.method,
                                                    w_rc: y,
                                                    w_rt: _,
                                                    w_resp: u(y) || !t.withResp ? '' : m.msg || w,
                                                    w_type: 16,
                                                    c1: m.traceId,
                                                });
                                            }
                                        }
                                        catch (t) {
                                            e.reportError(t, {
                                                bid: o.BID,
                                                cid: o.CID,
                                                category: a.JSERR,
                                                sampleRate: 1,
                                            });
                                        }
                                }
                                if ('onreadystatechange' in r &&
                                    'function' == typeof r.onreadystatechange) {
                                    var p = r.onreadystatechange;
                                    r.onreadystatechange = function () {
                                        var e = [].slice.call(arguments);
                                        d.apply(this, e), p.apply(this, e);
                                    };
                                }
                                else
                                    r.onreadystatechange = d;
                                var h = [].slice.call(arguments);
                                return f.apply(this, h);
                            };
                        })(e, n),
                    'fetch' in window &&
                        (function (e, t) {
                            var n = window.fetch;
                            window.fetch = function () {
                                var r = [].slice.call(arguments);
                                var f = i.GET;
                                r[1] && r[1].method && (f = r[1].method.toUpperCase());
                                var d = Date.now();
                                return n
                                    .apply(this, r)
                                    .then(function (n) {
                                    try {
                                        var p = Date.now(), h = (n.url || r[0]).split('?'), g = h[0], w = h[1] || '', v = '';
                                        f !== i.GET &&
                                            r[1] &&
                                            r[1].body &&
                                            (v = JSON.stringify(r[1].body)),
                                            n
                                                .clone()
                                                .text()
                                                .then(function (r) {
                                                r = r || '';
                                                var o = !0, i = {};
                                                if (('function' == typeof t.errorFilter &&
                                                    ((o = !!(i = t.errorFilter.call(this, {
                                                        url: g,
                                                        status: n.status,
                                                        response: r,
                                                    }))),
                                                        e.logger.warn('api errorFilter执行结果：', i)),
                                                    (r =
                                                        r.length > s
                                                            ? '[response content too large]'
                                                            : r),
                                                    o && p - d < c && l(g))) {
                                                    var h = i.bizCode || n.status;
                                                    e.report({
                                                        category: a.API,
                                                        sampleRate: t.sampleRate,
                                                        w_res: g,
                                                        w_param: w,
                                                        w_body: u(h) || !t.withBody ? '' : v,
                                                        w_method: f,
                                                        w_rc: h,
                                                        w_rt: p - d,
                                                        w_resp: u(h) || !t.withResp ? '' : i.msg || r,
                                                        w_type: 16,
                                                        c1: i.traceId,
                                                    });
                                                }
                                            });
                                    }
                                    catch (t) {
                                        e.reportError(t, {
                                            bid: o.BID,
                                            cid: o.CID,
                                            category: a.JSERR,
                                            sampleRate: 1,
                                        });
                                    }
                                    return n;
                                })
                                    .catch(function (t) {
                                    throw (e.reportError(t, {
                                        category: a.JSERR,
                                    }),
                                        t);
                                });
                            };
                        })(e, n))
                : e.logger.info('wpkinterfacePlugin已关闭');
        }
    };
    f.prototype.pluginId = 'api';
    return f;
}
exports.default = plugin_api;


/***/ }),

/***/ "./src/plugins/flow.ts":
/*!*****************************!*\
  !*** ./src/plugins/flow.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(__webpack_require__(/*! ./router */ "./src/plugins/router.ts"));
function plugin_flow(config) {
    var r = config.env, o = function (e) {
        var t;
        return ((e
            ? (t = e.replace(/^#\/?/, '')) && 'string' == typeof t
                ? t.replace(/^(https?:)?\/\//, '').replace(/\?.*$/, '')
                : ''
            : '') || '[index]');
    }, i = function (e, t) {
        if (((t = t || {}), e.env === r.BROWSER && window))
            if (e.toolKit.extend({
                enable: !0,
            }, t).enable) {
                e.logger.info('wpkflowPlugin已开启');
                var i, a, s = function () {
                    e.reportFlow();
                };
                e.toolKit.onListen(window, 'load', s, !0),
                    e.spa &&
                        (router_1.default.apply(this, [config]),
                            (i = function (t) {
                                o(location.hash) &&
                                    ((e._sid = e.toolKit.uuid()), e.reportFlow());
                            }),
                            (a = function (t) {
                                o(t.detail) && ((e._sid = e.toolKit.uuid()), e.reportFlow());
                            }),
                            e.toolKit.onListen(window, 'hashchange', i),
                            e.toolKit.onListen(window, 'historystatechange', a)),
                    e.toolKit.onListen(window, 'beforeunload', function () {
                        e.toolKit.offListen(window, 'load');
                        e.toolKit.offListen(window, 'hashchange');
                        e.toolKit.offListen(window, 'historystatechange');
                        s = i = a = null;
                    });
            }
            else
                e.logger.info('wpkflowPlugin已关闭');
    };
    i.prototype.pluginId = 'flow';
    return i;
}
exports.default = plugin_flow;


/***/ }),

/***/ "./src/plugins/gerror.ts":
/*!*******************************!*\
  !*** ./src/plugins/gerror.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function plugin_gerror(config) {
    var r;
    var o;
    var i = config, a = i.env, s = i.category;
    var c = function (e) {
        return 'function' == typeof e;
    }, u = function (e) {
        var t = -1;
        switch (e.tagName.toLowerCase()) {
            case 'img':
                t = 1;
                break;
            case 'link':
                e.rel && 'stylesheet' === e.rel.toLowerCase() && (t = 2);
                break;
            case 'script':
                t = 3;
                break;
            case 'video':
                t = 11;
        }
        return t;
    }, l = {}, f = function (e, t, n, r) {
        e.addEventListener
            ? e.addEventListener(t, n, r || !1)
            : ((l['on' + t] = function () {
                return n.call(e, window.event);
            }),
                e.attachEvent('on' + t, l['on' + t]));
    }, d = function (e, t) {
        var n = e.id ? '#' + e.id : '', r = e.className ? '.' + e.className.split(' ').join('.') : '', o = e.tagName.toLowerCase();
        return e.parentNode && e.parentNode.tagName && t - 1 != 0
            ? d(e.parentNode, t - 1) + ' > ' + o.toLowerCase() + n + r
            : o + n + r;
    }, p = function (e, t, n, i, a, u) {
        if (r)
            try {
                r.call(this, t, n, i, a, u);
            }
            catch (u) { }
        if ((/^script error\.?$/i.test(t) && (t = 'Script error'),
            o.ignoreScriptError && 'Script error' === t))
            e.logger.warn('配置了ignoreScriptError，本次异常将不上报');
        else if (!c(o.jsErrFilter) || o.jsErrFilter.call(this, event)) {
            if (null != u) {
                var l = (u.stack || '').split('\n');
                l.shift();
                var f = {
                    w_msg: t,
                    w_file: n || '',
                    w_line: i || '',
                    w_col: a || '',
                    stack: l.join('\n'),
                    category: s.JSERR,
                    sampleRate: o.jsErrSampleRate,
                };
                e.report(f);
            }
        }
        else
            e.logger.warn('jserrFilter 返回false，本次日志将不上报, event: ', event);
    };
    var h = function (e, t) {
        var n = window;
        n && e.env === a.BROWSER
            ? (e.logger.info('wpkglobalerrorPlugin已开启'),
                !1 !==
                    (o = e.toolKit.extend({
                        jsErrSampleRate: 1,
                        resErrSampleRate: 1,
                    }, t)).jsErr
                    ? ((r = n.onerror),
                        (n.onerror = function (t, n, r, o, i) {
                            p(e, t, n, r, o, i);
                        }),
                        f(n, 'unhandledrejection', function (t) {
                            var n = t.type;
                            'string' == typeof t.reason
                                ? (n = t.reason)
                                : 'object' == typeof t.reason &&
                                    t.reason.message &&
                                    (n = t.reason.message),
                                p(e, n, null, null, null, t.reason);
                        }))
                    : e.logger.warn('js异常监控已关闭'),
                o.resErr
                    ? f(n, 'error', function (t) {
                        !(function (e, t) {
                            if (!t.target.tagName ||
                                t.message ||
                                t.filename ||
                                t.lineno ||
                                t.colno) {
                                e.logger.warn('非资源获取问题，跳出处理, event: ', t);
                            }
                            else if (!c(o.resErrFilter) ||
                                o.resErrFilter.call(this, t)) {
                                var n = t.target.src || t.target.href;
                                e.report({
                                    category: s.RESLOADFAIL,
                                    sampleRate: o.resErrSampleRate,
                                    msg: n + ' 加载失败',
                                    w_res: n,
                                    w_type: u(t.target),
                                    w_xpath: d(t.target, 5),
                                });
                            }
                            else
                                e.logger.warn('reserrFilter 返回false，本次日志将不上报, event: ', t);
                        })(e, t);
                    }, !0)
                    : e.logger.warn('资源加载异常监控已关闭'))
            : e.logger.warn('全局错误监控插件不支持非浏览器环境');
    };
    h.prototype.pluginId = 'gerror';
    return h;
}
exports.default = plugin_gerror;


/***/ }),

/***/ "./src/plugins/index.ts":
/*!******************************!*\
  !*** ./src/plugins/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(/*! ./api */ "./src/plugins/api.ts");
exports.api = api_1.default;
var flow_1 = __webpack_require__(/*! ./flow */ "./src/plugins/flow.ts");
exports.flow = flow_1.default;
var gerror_1 = __webpack_require__(/*! ./gerror */ "./src/plugins/gerror.ts");
exports.gerror = gerror_1.default;
var perf_1 = __webpack_require__(/*! ./perf */ "./src/plugins/perf.ts");
exports.perf = perf_1.default;
var router_1 = __webpack_require__(/*! ./router */ "./src/plugins/router.ts");
exports.router = router_1.default;
var ucparam_1 = __webpack_require__(/*! ./ucparam */ "./src/plugins/ucparam.ts");
exports.ucparam = ucparam_1.default;


/***/ }),

/***/ "./src/plugins/perf.ts":
/*!*****************************!*\
  !*** ./src/plugins/perf.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function plugin_perf(e, t, config) {
    var r, o = config.env, i = config.category, a = [
        'navigationStart',
        'unloadEventStart',
        'unloadEventEnd',
        'redirectStart',
        'redirectEnd',
        'fetchStart',
        'domainLookupStart',
        'domainLookupEnd',
        'connectStart',
        'secureConnectionStart',
        'connectEnd',
        'requestStart',
        'responseStart',
        'responseEnd',
        'domLoading',
        'domInteractive',
        'domContentLoadedEventStart',
        'domContentLoadedEventEnd',
        'domComplete',
        'loadEventStart',
        'loadEventEnd',
        'msFirstPaint',
    ], s = ['navigate', 'reload', 'back_forward'], c = function (e) {
        var t, n = e[a[5]];
        if (1 === e._ver) {
            var r;
            if (window.chrome && window.chrome.loadTimes)
                r = 1e3 * window.chrome.loadTimes().firstPaintTime;
            else
                r = e.msFirstPaint ? e.msFirstPaint : e[a[13]];
            if (!r)
                return -1;
            t = r >= n ? parseFloat((r - n).toFixed(2)) : -1;
        }
        else
            2 === e._ver && ((t = e[a[13]] - n), (t = parseFloat(t.toFixed(2))));
        return t;
    }, u = function (e, t) {
        var n, r, o, i = {};
        for (var s in t)
            (o = 0),
                (n = e[a[t[s][0]]]),
                (r = e[a[t[s][1]]]),
                n > 0 && r > 0 && (o = parseFloat((r - n).toFixed(2))),
                (i[s] = o);
        return i;
    }, l = function (e, t) {
        var n = window;
        if (((r =
            n.performance ||
                n.webkitPerformance ||
                n.msPerformance ||
                n.mozPerformance),
            e.env === o.BROWSER && r && r.timing)) {
            t = t || {};
            var a = e.toolKit.extend({
                enable: !0,
                sampleRate: 1,
            }, t);
            if (a.enable) {
                e.logger.info('wpkperformancePlugin已开启');
                var l = r.timing || {}, f = 1;
                if ('function' == typeof n.PerformanceNavigationTiming)
                    try {
                        var d = r.getEntriesByType('navigation')[0];
                        d && ((l = d), (f = 2));
                    }
                    catch (e) { }
                (l._ver = f),
                    (function (e, t, n, r) {
                        e.addEventListener
                            ? e.addEventListener(t, n, r || !1)
                            : e.attachEvent('on' + t, n);
                    })(window, 'load', function () {
                        /loaded|complete/.test(document.readyState) &&
                            setTimeout(function () {
                                var t = e.toolKit.extend((function (e) {
                                    return u(e, {
                                        w_unload: [1, 2],
                                        w_redirect: [3, 4],
                                        w_appcache: [5, 6],
                                        w_dns: [6, 7],
                                        w_tcp: [8, 10],
                                        w_ssl: [9, 10],
                                        w_ttfb: [11, 12],
                                        w_contentdownload: [12, 13],
                                        w_domparsing: [13, 15],
                                        w_res: [17, 19],
                                    });
                                })(l), (function (e) {
                                    var t = u(e, {
                                        w_firstbyte: [5, 12],
                                        w_tti: [5, 15],
                                        w_domready: [5, 17],
                                        w_load: [5, 19],
                                        w_total: [5, 20],
                                    });
                                    return (t.w_fpt = c(e)), t;
                                })(l));
                                for (var n in t)
                                    if (t[n] < 0 || t[n] > 6e4)
                                        return void e.logger.warn('性能数据异常：', n, t[n]);
                                var o = e.toolKit.extend(t, (function (e) {
                                    var t, n = r.navigation || {}, o = -1, i = -1, a = -1;
                                    return (1 === e._ver
                                        ? (t = s[n.type] || 'other')
                                        : 2 === e._ver &&
                                            ((o = e.encodedBodySize),
                                                (i = e.decodedBodySize),
                                                (a = e.transferSize),
                                                (t = e.type)),
                                        {
                                            w_enbdsize: o,
                                            w_debdsize: i,
                                            w_transize: a,
                                            w_navtype: t,
                                        });
                                })(l), a, {
                                    category: i.JSFSPERF,
                                });
                                e.report(o);
                            });
                    });
            }
            else
                e.logger.info('wpkperformancePlugin已关闭');
        }
        else
            e.logger.warn('基础性能插件仅支持浏览器环境');
    };
    l.prototype.pluginId = 'perf';
    return l;
}
exports.default = plugin_perf;


/***/ }),

/***/ "./src/plugins/router.ts":
/*!*******************************!*\
  !*** ./src/plugins/router.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function plugin_router(config) {
    var n = window.history || {}, r = window.document;
    var o = function (e, t) {
        var n;
        window.CustomEvent
            ? (n = new CustomEvent(e, {
                detail: t,
            }))
            : ((n = r.createEvent('HTMLEvents')).initEvent(e, !1, !0),
                (n.detail = t)),
            window.dispatchEvent(n);
    }, i = function (e) {
        return e && 'string' == typeof e
            ? e.replace(/^(https?:)?\/\//, '').replace(/\?.*$/, '')
            : '';
    }, a = function (e) {
        var t = n[e];
        'function' == typeof t &&
            ((n[e] = function (e, r, a) {
                var s = location.href, c = t.call(n, e, r, a);
                if (!a || 'string' != typeof a)
                    return c;
                if (a === s)
                    return c;
                try {
                    var u = s.split('#'), l = a.split('#'), f = i(u[0]), d = i(l[0]), p = u[1] && u[1].replace(/^\/?(.*)/, '$1'), h = l[1] && l[1].replace(/^\/?(.*)/, '$1');
                    f !== d
                        ? o('historystatechange', d)
                        : p !== h && o('historystatechange', h);
                }
                catch (e) { }
                return c;
            }),
                (n[e].toString = e + '() { [native code] }'));
    };
    return function () {
        a('pushState'), a('replateState');
    };
}
exports.default = plugin_router;


/***/ }),

/***/ "./src/plugins/ucparam.ts":
/*!********************************!*\
  !*** ./src/plugins/ucparam.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function plugin_ucparam(config) {
    var r = config.env;
    var o = function (e, t) {
        if (((t = t || {}),
            -1 !== [r.BROWSER, r.WEEX].indexOf(e.env) &&
                t.params &&
                'string' == typeof t.params)) {
            e.logger.info('wpkucparamPlugin已开启');
            for (var n = t.params, o = ['pr', 've', 'os', 'fr', 'nw'], i = 0; i < 5; i++) {
                var a = o[i];
                -1 === n.indexOf(a) && (n += a);
            }
            try {
                ucapi.biz.ucparams({
                    params: n,
                    success: function (t) {
                        e.uc_param = t || '';
                    },
                });
            }
            catch (t) {
                e.logger.error('get uc_param_str error: ', t), (e.uc_param_str = n);
            }
        }
    };
    o.prototype.pluginId = 'ucparam';
    return o;
}
exports.default = plugin_ucparam;


/***/ }),

/***/ "./src/utils/core.ts":
/*!***************************!*\
  !*** ./src/utils/core.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utilsTool_1 = __webpack_require__(/*! ./utilsTool */ "./src/utils/utilsTool.ts");
var plugins_1 = __webpack_require__(/*! ../plugins */ "./src/plugins/index.ts");
function core(config) {
    var r = utilsTool_1.utilsTool();
    var o = config;
    var i = o.px;
    var a = o.category;
    function s(e) {
        if (!(this instanceof s)) {
            return new s(e);
        }
        e = e || {};
        this._init = !1;
        this.toolKit = r(e);
        if (e.addr && typeof e.addr == 'object') {
            this.toolKit.extend(o.px.addr, e.addr || {});
        }
        this.logger = this.toolKit.logger;
        this.debug = e.debug || !1;
        !0 === e.debug &&
            this.logger.warn('[wpk] now in debug mode, you can see log details');
        this._plugins = e.plugins || [];
        this.bid = e.bid;
        this.cid = e.cid;
        this.uid = e.uid;
        this.rel = e.rel;
        this.spa = e.spa || !1;
        this.delay = !1 !== e.delay;
        this.cluster = e.cluster || 'cn';
        this.sampleRate = e.sampleRate;
        this.ignoreScriptError = !1 !== e.ignoreScriptError;
        this.onlyCustom = e.onlyCustom || !1;
        this.beforeSend = e.beforeSend || null;
        this.checkHidden = !1 !== e.checkHidden;
        this._waitingQueue = [];
    }
    function c(e) {
        var t = i.confAddr[e.cluster + (e.isHttps ? '_https' : '')], n = i.signKey;
        (e._startTime = Date.now()),
            (e._dying = !0),
            e.toolKit.dynamicConf(e.bid, e.VERSION, t, n, function (t) {
                (e._dying = !1), (e._dyConf = t), e.logger.warn('jconfig come back');
            });
    }
    s.prototype = {
        VERSION: '0.6.2',
        initialize: function (e) {
            (this.env = e.env),
                e.root.location &&
                    -1 !== e.root.location.search.indexOf('wpkReporterDebug=true') &&
                    (this.debug = !0),
                (this.send = e.send),
                (this.getWid = e.getWid),
                (this.isHttps = e.isHttps),
                e.bindUnloadEvent(this);
        },
        ready: function () {
            return this._init;
        },
        setConfig: function (e) {
            return this.toolKit.isObject(e) && this.toolKit.extend(this, e), this;
        },
        getConfig: function () {
            return o;
        },
        report: function (e) {
            if (('string' == typeof e &&
                (e = {
                    category: a.JSERR,
                    msg: e,
                }),
                e.sampleRate || (e.sampleRate = 1),
                this.toolKit.canReport(e.sampleRate || this.sampleRate))) {
                if (this.ready()) {
                    var t;
                    if ('function' == typeof this.beforeSend) {
                        try {
                            t = this.beforeSend(e);
                        }
                        catch (e) {
                            this.logger.error('exec beforeSend failed for:', e);
                        }
                        if (!1 === t)
                            return void this.logger.warn('beforeSend func return false');
                        'object' == typeof t && (e = t);
                    }
                    var n = this.toolKit.getMetas(), r = e.bid || this.bid || n.wpkBid, o = e.cid || this.cid || n.wpkCid, s = e.rel || this.rel || n.wpkRel;
                    this.toolKit.isFunction(s) && (s = s());
                    var u = e.uid || this.uid;
                    if ((this.toolKit.isFunction(u) && (u = u()),
                        u || (u = this.getWid()),
                        this.toolKit.extend(e, {
                            w_bid: r,
                            w_cid: o,
                            w_rel: s,
                            w_spa: this.spa,
                            w_tm: this.toolKit.timestamp(),
                            w_cnt: 1,
                            uid: u,
                            type: this.toolKit.categoryToType(e.category),
                            sdk_ver: this.VERSION,
                            log_src: 'jssdk',
                            uc_param: this.uc_param || '',
                            wid: this.wid,
                        }),
                        this._dyConf && Date.now() < this._dyConf.expireAt)) {
                        var l = void 0 !== this._dyConf[e.type]
                            ? this._dyConf[e.type]
                            : this._dyConf.all;
                        if (void 0 !== l && !this.toolKit.canReport(l))
                            return void this.logger.warn('由于「动态配置」采样率控制，本条日志最终未上报，类型: ', e.type, ' 采样率: ', l);
                    }
                    else
                        !this._dying &&
                            Date.now() - this._startTime >= 18e5 &&
                            (this.logger.warn('syncing dynamic config'), c(this));
                    var f = {
                        app: r,
                        cp: 'none',
                        de: 4,
                        seq: this.toolKit.generateSeq(),
                        tm: this.toolKit.timestamp(!0),
                        ud: e.uid,
                        ver: e.w_rel,
                        type: e.type,
                        sver: e.sdk_ver,
                    };
                    f.sign = this.toolKit.computeSign(f, i.signKey);
                    var d = i.addr[this.cluster + (this.isHttps ? '_https' : '')], p = this.toolKit.objToQueryString(f);
                    this.toolKit.cutStr(e, ['c1', 'c2', 'c3', 'c4', 'c5'], 128),
                        this.send(d, p, e);
                }
                else
                    this._waitingQueue.push(e),
                        this.logger.warn('sdk未完成初始化，数据已缓存');
                return this;
            }
            this.logger.warn('由于采样率控制，本条日志最终未上报，采样率: ', e.sampleRate || this.sampleRate);
        },
        reportFlow: function (e) {
            return ((e = e || {}),
                this.report(this.toolKit.extend(e || {}, {
                    category: a.FLOW,
                    sampleRate: 1,
                })),
                this);
        },
        reportError: function (e, t) {
            return this.toolKit.isError(e)
                ? (((t = t || {}).category = a.JSERR),
                    (t.w_msg = e.toString()),
                    (t.stack = this.toolKit.parseErrorStack(e)),
                    (t.w_file = e.filename || ''),
                    (t.w_line = e.lineno || ''),
                    (t.w_col = e.colno || ''),
                    this.report(t),
                    this)
                : this.report(e, t);
        },
        reportApiError: function (e, t) {
            return (e &&
                (this.toolKit.isObject(e.queryString) &&
                    (e.queryString = this.toolKit.objToQueryString(e.queryString)),
                    this.report(this.toolKit.extend(t || {}, {
                        msg: e.msg || '',
                        w_res: e.url,
                        w_method: e.method,
                        w_param: e.queryString,
                        w_body: JSON.stringify(e.body),
                        w_resp: e.response,
                        w_rc: e.status,
                        w_rt: e.spent || '',
                        c1: e.c1,
                        c2: e.c2,
                        c3: e.c3,
                        c4: e.c4,
                        c5: e.c5,
                    }, {
                        category: a.API,
                        w_type: 16,
                    }))),
                this);
        },
        diagnose: function () {
            this.ready()
                ? this.bid
                    ? (this.sampleRate ||
                        this.logger.warn('没有设置采样率参数sampleRate，将使用默认采样率'),
                        this.report({
                            _diagnose: !0,
                        }))
                    : this.logger.warn('缺少bid参数,请确认是否已正确设置')
                : this.logger.warn('wpkReporter尚未初始化，请确保已调用 install 方法');
        },
        addPlugin: function (e, t) {
            return (this._plugins.push([e, t]),
                'function' == typeof e &&
                    this._init &&
                    e.apply(this, [this, t, this.getConfig()]),
                this);
        },
        install: function () {
            c(this);
            var e = plugins_1.flow.apply(this, [this.getConfig()]);
            var t = this._plugins.length;
            var r = false;
            for (var o = 0; o < t; o++) {
                var i = this._plugins[o];
                var a = i[0];
                var s = i[1];
                a + '' == e + '' && (r = !0),
                    a.apply(this, [this, s, this.getConfig()]);
            }
            return ((this.wid = this.getWid()),
                (this._sid = this.toolKit.uuid()),
                (this._init = !0),
                (0 !== t && r) ||
                    (this.toolKit.logger.info('没有设置Flow，内置开启'),
                        this.addPlugin(e)),
                this);
        },
        installAll: function () {
            var e = [
                [
                    plugins_1.gerror.apply(this, [this.getConfig()]),
                    {
                        resErr: !0,
                    },
                ],
                [plugins_1.api.apply(this, [this.getConfig()])],
                [plugins_1.perf],
                [plugins_1.flow.apply(this, [this.getConfig()])],
                [
                    plugins_1.ucparam,
                    {
                        params: 'prveosfrnw',
                    },
                ],
            ];
            var t = this._plugins.length;
            if (0 === t)
                this._plugins = e;
            else {
                var r = [];
                var o = e.length;
                for (var i = 0; i < o; i++) {
                    var a = e[i];
                    for (var s = 0; s < t; s++) {
                        if (a[0].prototype.pluginId === this._plugins[s][0].prototype.pluginId) {
                            a = this._plugins[s];
                            break;
                        }
                    }
                    r.push(a);
                }
                this._plugins = r;
            }
            return this.install();
        },
        uninstall: function () {
            return (this._plugins = []), (this._init = !1), this;
        },
    };
    return s;
}
exports.core = core;


/***/ }),

/***/ "./src/utils/envCheck.ts":
/*!*******************************!*\
  !*** ./src/utils/envCheck.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function envCheck() {
    var n, r, o = {};
    function i() {
        throw new Error('setTimeout has not been defined');
    }
    function a() {
        throw new Error('clearTimeout has not been defined');
    }
    function s(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
            return (n = setTimeout), setTimeout(e, 0);
        try {
            return n(e, 0);
        }
        catch (t) {
            try {
                return n.call(null, e, 0);
            }
            catch (t) {
                return n.call(this, e, 0);
            }
        }
    }
    !(function () {
        try {
            n = 'function' == typeof setTimeout ? setTimeout : i;
        }
        catch (e) {
            n = i;
        }
        try {
            r = 'function' == typeof clearTimeout ? clearTimeout : a;
        }
        catch (e) {
            r = a;
        }
    })();
    var c, u = [], l = !1, f = -1;
    function d() {
        l &&
            c &&
            ((l = !1), c.length ? (u = c.concat(u)) : (f = -1), u.length && p());
    }
    function p() {
        if (!l) {
            var e = s(d);
            l = !0;
            for (var t = u.length; t;) {
                for (c = u, u = []; ++f < t;)
                    c && c[f].run();
                (f = -1), (t = u.length);
            }
            (c = null),
                (l = !1),
                (function (e) {
                    if (r === clearTimeout)
                        return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                    try {
                        r(e);
                    }
                    catch (t) {
                        try {
                            return r.call(null, e);
                        }
                        catch (t) {
                            return r.call(this, e);
                        }
                    }
                })(e);
        }
    }
    function h(e, t) {
        (this.fun = e), (this.array = t);
    }
    function g() { }
    (o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        u.push(new h(e, t)), 1 !== u.length || l || s(p);
    }),
        (h.prototype.run = function () {
            this.fun.apply(null, this.array);
        }),
        (o.title = 'browser'),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ''),
        (o.versions = {}),
        (o.on = g),
        (o.addListener = g),
        (o.once = g),
        (o.off = g),
        (o.removeListener = g),
        (o.removeAllListeners = g),
        (o.emit = g),
        (o.prependListener = g),
        (o.prependOnceListener = g),
        (o.listeners = function (e) {
            return [];
        }),
        (o.binding = function (e) {
            throw new Error('process.binding is not supported');
        }),
        (o.cwd = function () {
            return '/';
        }),
        (o.chdir = function (e) {
            throw new Error('process.chdir is not supported');
        }),
        (o.umask = function () {
            return 0;
        });
    return o;
}
exports.envCheck = envCheck;


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./envCheck */ "./src/utils/envCheck.ts"));
__export(__webpack_require__(/*! ./n18 */ "./src/utils/n18.ts"));
__export(__webpack_require__(/*! ./stringTools */ "./src/utils/stringTools.ts"));
__export(__webpack_require__(/*! ./utilsTool */ "./src/utils/utilsTool.ts"));
__export(__webpack_require__(/*! ./core */ "./src/utils/core.ts"));


/***/ }),

/***/ "./src/utils/n18.ts":
/*!**************************!*\
  !*** ./src/utils/n18.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function n18(config) {
    var r = config;
    var o = 'undefined' != typeof window
        ? window
        : 'undefined' != typeof self
            ? self
            : {};
    var i = o.document;
    var a = o.navigator;
    var s = o.location;
    var c = {};
    var u = function (e, t, n, r, o) {
        if (void 0 === t) {
            var a, s;
            if (!c[e]) {
                a = new RegExp(e + '=([^;]+)');
                try {
                    s = a.exec(i.cookie);
                }
                catch (e) {
                    return null;
                }
                s && (c[e] = s[1]);
            }
            return c[e];
        }
        var u = e + '=' + t;
        r && (u += '; domain=' + r),
            o && (u += '; path=' + o),
            n && (u += '; max-age=' + n);
        try {
            return (i.cookie = u), !!i.cookie;
        }
        catch (e) {
            return !1;
        }
    }, l = function (e) {
        var t = window, n = 'wpkimgreporter_' +
            +new Date() +
            '.r' +
            Math.floor(1e3 * Math.random()), r = (t[n] = new Image());
        (r.onload = r.onerror = function () {
            t[n] = null;
        }),
            (r.src = e);
    }, f = null, d = function (e) {
        clearTimeout(f),
            (f = null),
            (function (e) {
                var t = e._waitingQueue;
                if (e.checkHidden && i && i.hidden)
                    return (e.logger.warn('当前页面不可见，日志数据将丢弃: ', t),
                        void (e._waitingQueue = []));
                if (a && a.sendBeacon && o.Blob) {
                    var n, r, s = (function (e) {
                        for (var t, n, r = [], o = [], i = e.length, a = 0; a < i; a++)
                            (n = e[a].category), -1 === o.indexOf(n) && o.push(n);
                        t = o.length;
                        for (var s = 0; s < t; s++) {
                            n = o[s];
                            for (var c = [], u = 0; u < i; u++) {
                                var l = e[u];
                                l.category === n && c.push(l);
                            }
                            r[s] = c;
                        }
                        return r;
                    })(t), c = s.length;
                    try {
                        for (var u, f = 0; f < c; f++) {
                            (u = (n = s[f])[0]._servAddr), (r = n.length);
                            for (var d = 0; d < r; d++)
                                (n[d].w_send_mode = 'sendbeacon'),
                                    (n[d]._servAddr = void 0),
                                    (n[d]._hash = void 0),
                                    (n[d] = e.toolKit.objToJsonString(n[d]));
                            var p = encodeURIComponent(n.join('\n'));
                            a.sendBeacon(u, p);
                        }
                        e._waitingQueue = [];
                    }
                    catch (e) { }
                }
                else {
                    for (var h, g, w = 0; w < t.length; w++)
                        (g = (h = t[w])._servAddr),
                            (h.w_send_mode = 'imgsrc'),
                            (h._servAddr = void 0),
                            (h._hash = void 0),
                            (h = encodeURIComponent(e.toolKit.objToJsonString(h))),
                            l(g + '&data=' + h);
                    e._waitingQueue = [];
                }
            })(e);
    }, p = function (e) {
        d(e);
    };
    return {
        env: r.env.BROWSER,
        root: o,
        isHttps: s.protocol === r.http.protocols.HTTPS,
        send: function (e, t, n) {
            var c = this;
            if (c.toolKit.isU4HA(c.onlyCustom) && n.category < 100)
                c.logger.warn('在u4内核环境，屏蔽非自定义的所有自动打点');
            else {
                var u = c.toolKit.extend((function (e) {
                    if (!i)
                        return {};
                    var t, n = i.referrer;
                    return (n &&
                        -1 !== n.indexOf('"') &&
                        (n = encodeURIComponent(i.referrer)),
                        {
                            w_url: s.origin + s.pathname,
                            w_query: s.search,
                            w_ref: s.hash.substring(1),
                            w_title: i.title,
                            ua: a.userAgent,
                            referrer: n,
                            dsp_w: o.screen.width,
                            dsp_h: o.screen.height,
                            net: ((t = a.connection),
                                t && t.type
                                    ? t.type === r.navConn.types.NONE
                                        ? 'disconnected'
                                        : t.type === r.navConn.types.CELLULAR
                                            ? t.effectiveType === r.navConn.effectiveTypes.SLOW2G
                                                ? '2g'
                                                : t.effectiveType
                                            : t.type
                                    : ''),
                        });
                })(c.spa), n, {
                    w_frmid: c._sid,
                });
                if ((c.logger.warn('logData to send: ', e, u),
                    (e += '?wpk-header=' + encodeURIComponent(t)),
                    c.uc_param_str && (e += '&uc_param_str=' + c.uc_param_str),
                    !0 === n._diagnose))
                    return ((u = encodeURIComponent(c.toolKit.objToJsonString(u))),
                        void window.open(e + '&data=' + u));
                (u._servAddr = e), (u._hash = c.toolKit.genContentHash(u));
                var l, p, h = c.delay && -1 !== [1, 2, 4].indexOf(u.category);
                if ((function (e, t) {
                    var n = e._waitingQueue, r = n.length, o = t.reduplication || e.reduplication || !0, i = !0;
                    if (1 === t.category && o && 0 !== r) {
                        for (var a, s = 0; s < r; s++)
                            if ((a = n[s])._hash === t._hash) {
                                a.w_cnt++, (i = !1);
                                break;
                            }
                        i && n.push(t);
                    }
                    else
                        n.push(t);
                    return i;
                })(c, u) ||
                    !h)
                    (l = function () {
                        d(c);
                    }),
                        (f =
                            -1 === (p = h ? 3e3 : -1) ? (l(), null) : setTimeout(l, p || 0));
                else
                    c.logger.warn('logData被合并: ', u);
            }
        },
        getWid: function () {
            var e = u(r.sdk.WID_KEY);
            return e || ((e = this.toolKit.uuid()), u(r.sdk.WID_KEY, e, 15552e3)), e;
        },
        bindUnloadEvent: function (e) {
            window &&
                (window.addEventListener
                    ? window.addEventListener('beforeunload', function (t) {
                        p(e);
                    }, !1)
                    : window.attachEvent &&
                        window.attachEvent('onbeforeunload', function (t) {
                            p(e);
                        }));
        },
    };
}
exports.n18 = n18;


/***/ }),

/***/ "./src/utils/stringTools.ts":
/*!**********************************!*\
  !*** ./src/utils/stringTools.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function stringTools() {
    function i(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
    }
    function a(e, t, n, r, o, a) {
        return i((function (e, t) {
            return (e << o) | (e >>> (32 - o));
        })(i(i(t, e), i(r, a))), n);
    }
    function s(e, t, n, r, o, i, s) {
        return a((t & n) | (~t & r), e, t, o, i, s);
    }
    function c(e, t, n, r, o, i, s) {
        return a((t & r) | (n & ~r), e, t, o, i, s);
    }
    function u(e, t, n, r, o, i, s) {
        return a(t ^ n ^ r, e, t, o, i, s);
    }
    function l(e, t, n, r, o, i, s) {
        return a(n ^ (t | ~r), e, t, o, i, s);
    }
    function f(e, t) {
        var n, r, o, a, f;
        (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
        var d = 1732584193, p = -271733879, h = -1732584194, g = 271733878;
        for (n = 0; n < e.length; n += 16)
            (p = l((p = l((p = l((p = l((p = u((p = u((p = u((p = u((p = c((p = c((p = c((p = c((p = s((p = s((p = s((p = s((o = p), (h = s((a = h), (g = s((f = g), (d = s((r = d), p, h, g, e[n], 7, -680876936)), p, h, e[n + 1], 12, -389564586)), d, p, e[n + 2], 17, 606105819)), g, d, e[n + 3], 22, -1044525330)), (h = s(h, (g = s(g, (d = s(d, p, h, g, e[n + 4], 7, -176418897)), p, h, e[n + 5], 12, 1200080426)), d, p, e[n + 6], 17, -1473231341)), g, d, e[n + 7], 22, -45705983)), (h = s(h, (g = s(g, (d = s(d, p, h, g, e[n + 8], 7, 1770035416)), p, h, e[n + 9], 12, -1958414417)), d, p, e[n + 10], 17, -42063)), g, d, e[n + 11], 22, -1990404162)), (h = s(h, (g = s(g, (d = s(d, p, h, g, e[n + 12], 7, 1804603682)), p, h, e[n + 13], 12, -40341101)), d, p, e[n + 14], 17, -1502002290)), g, d, e[n + 15], 22, 1236535329)), (h = c(h, (g = c(g, (d = c(d, p, h, g, e[n + 1], 5, -165796510)), p, h, e[n + 6], 9, -1069501632)), d, p, e[n + 11], 14, 643717713)), g, d, e[n], 20, -373897302)), (h = c(h, (g = c(g, (d = c(d, p, h, g, e[n + 5], 5, -701558691)), p, h, e[n + 10], 9, 38016083)), d, p, e[n + 15], 14, -660478335)), g, d, e[n + 4], 20, -405537848)), (h = c(h, (g = c(g, (d = c(d, p, h, g, e[n + 9], 5, 568446438)), p, h, e[n + 14], 9, -1019803690)), d, p, e[n + 3], 14, -187363961)), g, d, e[n + 8], 20, 1163531501)), (h = c(h, (g = c(g, (d = c(d, p, h, g, e[n + 13], 5, -1444681467)), p, h, e[n + 2], 9, -51403784)), d, p, e[n + 7], 14, 1735328473)), g, d, e[n + 12], 20, -1926607734)), (h = u(h, (g = u(g, (d = u(d, p, h, g, e[n + 5], 4, -378558)), p, h, e[n + 8], 11, -2022574463)), d, p, e[n + 11], 16, 1839030562)), g, d, e[n + 14], 23, -35309556)), (h = u(h, (g = u(g, (d = u(d, p, h, g, e[n + 1], 4, -1530992060)), p, h, e[n + 4], 11, 1272893353)), d, p, e[n + 7], 16, -155497632)), g, d, e[n + 10], 23, -1094730640)), (h = u(h, (g = u(g, (d = u(d, p, h, g, e[n + 13], 4, 681279174)), p, h, e[n], 11, -358537222)), d, p, e[n + 3], 16, -722521979)), g, d, e[n + 6], 23, 76029189)), (h = u(h, (g = u(g, (d = u(d, p, h, g, e[n + 9], 4, -640364487)), p, h, e[n + 12], 11, -421815835)), d, p, e[n + 15], 16, 530742520)), g, d, e[n + 2], 23, -995338651)), (h = l(h, (g = l(g, (d = l(d, p, h, g, e[n], 6, -198630844)), p, h, e[n + 7], 10, 1126891415)), d, p, e[n + 14], 15, -1416354905)), g, d, e[n + 5], 21, -57434055)), (h = l(h, (g = l(g, (d = l(d, p, h, g, e[n + 12], 6, 1700485571)), p, h, e[n + 3], 10, -1894986606)), d, p, e[n + 10], 15, -1051523)), g, d, e[n + 1], 21, -2054922799)), (h = l(h, (g = l(g, (d = l(d, p, h, g, e[n + 8], 6, 1873313359)), p, h, e[n + 15], 10, -30611744)), d, p, e[n + 6], 15, -1560198380)), g, d, e[n + 13], 21, 1309151649)), (h = l(h, (g = l(g, (d = l(d, p, h, g, e[n + 4], 6, -145523070)), p, h, e[n + 11], 10, -1120210379)), d, p, e[n + 2], 15, 718787259)), g, d, e[n + 9], 21, -343485551)),
                (d = i(d, r)),
                (p = i(p, o)),
                (h = i(h, a)),
                (g = i(g, f));
        return [d, p, h, g];
    }
    function d(e) {
        var t, n = '', r = 32 * e.length;
        for (t = 0; t < r; t += 8)
            n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
        return n;
    }
    function p(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)
            n[t] = 0;
        var r = 8 * e.length;
        for (t = 0; t < r; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n;
    }
    function h(e) {
        var t, n, r = '0123456789abcdef', o = '';
        for (n = 0; n < e.length; n += 1)
            (t = e.charCodeAt(n)),
                (o += r.charAt((t >>> 4) & 15) + r.charAt(15 & t));
        return o;
    }
    function g(e) {
        return unescape(encodeURIComponent(e));
    }
    function w(e) {
        return (function (e) {
            return d(f(p(e), 8 * e.length));
        })(g(e));
    }
    function v(e, t) {
        return (function (e, t) {
            var n, r, o = p(e), i = [], a = [];
            for (i[15] = a[15] = void 0,
                16 < o.length && (o = f(o, 8 * e.length)),
                n = 0; n < 16; n += 1)
                (i[n] = 909522486 ^ o[n]), (a[n] = 1549556828 ^ o[n]);
            return ((r = f(i.concat(p(t)), 512 + 8 * t.length)),
                d(f(a.concat(r), 640)));
        })(g(e), g(t));
    }
    return function m(e, t, n) {
        return t
            ? n
                ? v(t, e)
                : (function (e, t) {
                    return h(v(e, t));
                })(t, e)
            : n
                ? w(e)
                : (function (e) {
                    return h(w(e));
                })(e);
    };
}
exports.stringTools = stringTools;


/***/ }),

/***/ "./src/utils/utilsTool.ts":
/*!********************************!*\
  !*** ./src/utils/utilsTool.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var stringTools_1 = __webpack_require__(/*! ./stringTools */ "./src/utils/stringTools.ts");
function utilsTool() {
    var r = stringTools_1.stringTools();
    var o = function (e) {
        return e || '';
    };
    var i = function () {
        var e = Date.now();
        return ('undefined' != typeof window &&
            window.performance &&
            'function' == typeof window.performance.now &&
            (e += performance.now()),
            'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (t) {
                var n = (e + 16 * Math.random()) % 16 | 0;
                return ((e = Math.floor(e / 16)), ('x' === t ? n : 11 & n).toString(16));
            }));
    }, a = function (e) {
        return 'object' == typeof e;
    }, s = function (e) {
        var t = {}.toString.call(e);
        return (a(e) &&
            ('[object Error]' === t ||
                '[object Exception]' === t ||
                t instanceof Error));
    }, c = function (e) {
        return '[object Array]' === {}.toString.call(e);
    }, u = function (e) {
        return 'function' == typeof e;
    }, l = function (e) {
        var t = +new Date();
        return !0 === e && (t = Math.floor(t / 1e3)), t;
    }, f = function (e) {
        if (e.stack) {
            var t = e.stack.split('\n');
            return t.shift(), t.join('\n');
        }
        return '';
    }, d = function (e, t) {
        e = e || {};
        var n = [];
        for (var o in e)
            n.push(o);
        n.sort();
        for (var i = n.length, a = [], s = 0; s < i; s++)
            a.push(n[s] + '=' + e[n[s]]);
        return a.push(t), r(a.join(''));
    }, p = function (e) {
        var t;
        switch (e) {
            case 1:
                t = 'jserr';
                break;
            case 2:
                t = 'api';
                break;
            case 3:
                t = 'jsfsperf';
                break;
            case 4:
                t = 'resloadfail';
                break;
            case 5:
                t = 'flow';
                break;
            case 6:
                t = 'bkpg';
                break;
            case 7:
                t = 'harlog';
                break;
            default:
                t = 'jssdkidx';
        }
        return t;
    }, h = function () {
        return l() + Math.floor(10 * Math.random());
    }, g = function (e) {
        var t = [];
        for (var n in e)
            t.push(n + '=' + e[n]);
        return t.join('&');
    }, w = function (e) {
        return JSON ? JSON.stringify(e) : e.toString();
    }, v = function () {
        if ('undefined' != typeof document && document.getElementsByTagName)
            for (var e, t, n, r, o = document.getElementsByTagName('meta'), i = o.length, a = 0; a < i; a++)
                'wpk-bid' === (r = o[a]).name
                    ? (e = r.content)
                    : 'wpk-cid' === r.name
                        ? (t = r.content)
                        : 'wpk-rel' === r.name && (n = r.content);
        return {
            wpkBid: e || null,
            wpkCid: t || null,
            wpkRel: n || null,
        };
    }, m = function (e, t, n, r) {
        return (e.addEventListener
            ? e.addEventListener(t, function o(i) {
                r && e.removeEventListener(t, o, !1), n.call(this, i);
            }, !1)
            : e.attachEvent &&
                e.attachEvent('on' + t, function o(i) {
                    r && e.detachEvent('on' + t, o), n.call(this, i);
                }),
            this);
    }, _ = function (e, t, n) {
        return n
            ? (e.removeEventListener
                ? e.removeEventListener(t, n)
                : e.detachEvent && e.detachEvent(t, n),
                this)
            :
                this;
    }, y = function (e) {
        return (!!e &&
            0 !== e &&
            (e >= 1 ||
                '100%' === e ||
                (/^\d+(\.\d+)?%$/.test(e)
                    ? Math.random() < parseFloat(e) / 100
                    : e > 0 && e < 1 && Math.random() < e)));
    }, x = 'wpk-reporter', b = function (e, t) {
        var n = [].slice.call(t);
        e.apply(this, [x].concat(n));
    }, E = function (e) {
        var t = '';
        switch (e.category) {
            case 1:
                t = r([
                    e.category,
                    e.uid,
                    e.w_url,
                    e.w_ref,
                    e.w_msg || '',
                    e.w_line || '',
                    e.w_col || '',
                ].join(''));
                break;
            case 2:
                t = r([e.category, e.uid, e.w_res, e.w_method, e.w_rc].join(''));
                break;
            case 4:
                t = r([e.category, e.uid, e.w_url, e.w_ref, e.w_res, e.w_type].join(''));
        }
        return t;
    }, S = function (e, t) {
        e = e || !1;
        try {
            if (('undefined' != typeof window &&
                window.ucweb &&
                window.ucweb.window) ||
                t) {
                for (var n = (t || navigator.userAgent).split(' '), r = n.length, o = !1, i = !1, a = 0; a < r; a++) {
                    if (-1 !== n[a].indexOf('UWS/'))
                        i = n[a].split('/')[1] >= '2.13.2.37';
                    else
                        -1 !== n[a].indexOf('AliApp(DingTalk/') && (o = !0);
                }
                return o ? i : e;
            }
        }
        catch (e) { }
        return !1;
    }, R = {
        get: function (e) {
            if ('undefined' != typeof localStorage) {
                var t = localStorage.getItem(e);
                if (t) {
                    if (((t = JSON.parse(t)), Date.now() < t.expireAt))
                        return t;
                    this.rm(e);
                }
            }
            return null;
        },
        set: function (e, t) {
            'undefined' != typeof localStorage &&
                e &&
                t &&
                ((t.expireAt = Date.now() + 18e5),
                    localStorage.setItem(e, JSON.stringify(t)));
        },
        rm: function (e) {
            'undefined' != typeof localStorage && localStorage.removeItem(e);
        },
    }, k = function (e, t) {
        if (t) {
            if (1 === t.length)
                return e === t[0];
            if (2 === t.length) {
                var n = t[0], r = t[1];
                return n && !r ? o(e, n) : n && r ? o(e, n) && o(r, e) : o(r, e);
            }
            return !1;
        }
        return !0;
        function o(e, t) {
            var n = e.split('.'), r = t.split('.');
            return (!(n[0] < r[0]) &&
                (n[0] > r[0] || (!(n[1] < r[1]) && (n[1] > r[1] || n[2] >= r[2]))));
        }
    }, T = function (e, t, n, r, o) {
        var a = R.get('wpkreporter:dynamicConf');
        if (a)
            u(o) && o(a);
        else {
            var s = {
                app: e,
                tm: l(!0),
                ud: i(),
                sver: t,
            };
            s.sign = d(s, r);
            var c = g(s);
            !(function (e, t) {
                if ('undefined' == typeof XMLHttpRequest)
                    t();
                else {
                    var n = new XMLHttpRequest();
                    (n.onreadystatechange = function () {
                        if (4 === n.readyState) {
                            var e;
                            if (200 === n.status && n.response)
                                try {
                                    var r = JSON.parse(n.response);
                                    0 === r.code && (e = r.config || []);
                                }
                                catch (e) { }
                            t(e);
                        }
                    }),
                        (n.timeout = 3e3),
                        n.open('GET', e, !0),
                        n.send();
                }
            })(n + '?wpk-header=' + encodeURIComponent(c), function (e) {
                if (((a = {}), void 0 !== e)) {
                    for (var n = e.length, r = 0; r < n; r++) {
                        var i = e[r], s = i.sdkver;
                        if (k(t, s)) {
                            if ((i.common &&
                                void 0 !== i.common.sampleRate &&
                                (a.all = i.common.sampleRate),
                                i.config))
                                for (var c, l = i.config.length, f = 0; f < l; f++)
                                    (c = i.config[f]).type &&
                                        void 0 !== c.sampleRate &&
                                        (a[c.type] = c.sampleRate);
                            break;
                        }
                    }
                    R.set('wpkreporter:dynamicConf', a);
                }
                u(o) && o(a);
            });
        }
    }, O = function (e, t, n) {
        for (var r, o = t.length, i = 0; i < o; i++)
            'string' == typeof (r = e[t[i]])
                ? (e[t[i]] = r.substring(0, n))
                : 'object' == typeof r && (e[t[i]] = String(r));
    };
    return function (e) {
        return {
            noop: o,
            uuid: i,
            md5: r,
            isError: s,
            isArray: c,
            isObject: a,
            isFunction: u,
            logger: 'undefined' != typeof console && a(console) && e.debug
                ? {
                    trace: function () {
                        b(console.trace, arguments);
                    },
                    debug: function () {
                        b(console.debug, arguments);
                    },
                    log: function () {
                        b(console.log, arguments);
                    },
                    info: function () {
                        b(console.info, arguments);
                    },
                    warn: function () {
                        b(console.warn, arguments);
                    },
                    error: function () {
                        b(console.error, arguments);
                    },
                }
                : {
                    trace: o,
                    debug: o,
                    log: o,
                    info: o,
                    warn: o,
                    error: o,
                },
            extend: function (e) {
                for (var t = 1, n = arguments.length; t < n; t++) {
                    var r = arguments[t];
                    for (var o in r)
                        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }
                return e;
            },
            canReport: y,
            onListen: m,
            offListen: _,
            getMetas: v,
            timestamp: l,
            computeSign: d,
            generateSeq: h,
            categoryToType: p,
            parseErrorStack: f,
            objToJsonString: w,
            objToQueryString: g,
            genContentHash: E,
            isU4HA: S,
            cutStr: O,
            dynamicConf: T,
        };
    };
}
exports.utilsTool = utilsTool;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cGtSZXBvcnRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd3BrUmVwb3J0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd3BrUmVwb3J0ZXIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd3BrUmVwb3J0ZXIvLi9zcmMvcGx1Z2lucy9hcGkudHMiLCJ3ZWJwYWNrOi8vd3BrUmVwb3J0ZXIvLi9zcmMvcGx1Z2lucy9mbG93LnRzIiwid2VicGFjazovL3dwa1JlcG9ydGVyLy4vc3JjL3BsdWdpbnMvZ2Vycm9yLnRzIiwid2VicGFjazovL3dwa1JlcG9ydGVyLy4vc3JjL3BsdWdpbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd3BrUmVwb3J0ZXIvLi9zcmMvcGx1Z2lucy9wZXJmLnRzIiwid2VicGFjazovL3dwa1JlcG9ydGVyLy4vc3JjL3BsdWdpbnMvcm91dGVyLnRzIiwid2VicGFjazovL3dwa1JlcG9ydGVyLy4vc3JjL3BsdWdpbnMvdWNwYXJhbS50cyIsIndlYnBhY2s6Ly93cGtSZXBvcnRlci8uL3NyYy91dGlscy9jb3JlLnRzIiwid2VicGFjazovL3dwa1JlcG9ydGVyLy4vc3JjL3V0aWxzL2VudkNoZWNrLnRzIiwid2VicGFjazovL3dwa1JlcG9ydGVyLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL3dwa1JlcG9ydGVyLy4vc3JjL3V0aWxzL24xOC50cyIsIndlYnBhY2s6Ly93cGtSZXBvcnRlci8uL3NyYy91dGlscy9zdHJpbmdUb29scy50cyIsIndlYnBhY2s6Ly93cGtSZXBvcnRlci8uL3NyYy91dGlscy91dGlsc1Rvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QUFFLENBQUMsRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxDQUNQLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNkLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDdkIsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDN0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLEdBQUcsVUFBVSxFQUNqQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQ2QsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUNmLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDZixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNQLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDUCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1AsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNQLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDSixDQUFDLEVBQ0QsQ0FBQyxTQUFTLENBQ1YsQ0FBQyxFQUNGLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDUixFQUFFLEVBQ0YsQ0FBQyxTQUFTLENBQ1YsQ0FBQyxFQUNGLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDUixFQUFFLEVBQ0YsU0FBUyxDQUNULENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLENBQUMsVUFBVSxDQUNYLENBQUMsRUFDRixDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNSLENBQUMsRUFDRCxDQUFDLFNBQVMsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNSLEVBQUUsRUFDRixVQUFVLENBQ1YsQ0FBQyxFQUNGLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDUixFQUFFLEVBQ0YsQ0FBQyxVQUFVLENBQ1gsQ0FBQyxFQUNGLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDUixFQUFFLEVBQ0YsQ0FBQyxRQUFRLENBQ1QsQ0FBQyxFQUNGLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxFQUNELFVBQVUsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNSLEVBQUUsRUFDRixDQUFDLFVBQVUsQ0FDWCxDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNULEVBQUUsRUFDRixDQUFDLEtBQUssQ0FDTixDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNULEVBQUUsRUFDRixDQUFDLFVBQVUsQ0FDWCxDQUFDLEVBQ0YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDVCxDQUFDLEVBQ0QsVUFBVSxDQUNWLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLENBQUMsUUFBUSxDQUNULENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLENBQUMsVUFBVSxDQUNYLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLFVBQVUsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDUixDQUFDLEVBQ0QsQ0FBQyxTQUFTLENBQ1YsQ0FBQyxFQUNGLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDUixDQUFDLEVBQ0QsQ0FBQyxVQUFVLENBQ1gsQ0FBQyxFQUNGLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDVCxFQUFFLEVBQ0YsU0FBUyxDQUNULENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDSixFQUFFLEVBQ0YsQ0FBQyxTQUFTLENBQ1YsQ0FBQyxFQUNGLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxFQUNELENBQUMsU0FBUyxDQUNWLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsQ0FBQyxFQUNELFFBQVEsQ0FDUixDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNULEVBQUUsRUFDRixDQUFDLFNBQVMsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNSLEVBQUUsRUFDRixDQUFDLFNBQVMsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFDM0MsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNULENBQUMsRUFDRCxDQUFDLFVBQVUsQ0FDWCxDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNSLEVBQUUsRUFDRixDQUFDLFNBQVMsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNSLEVBQUUsRUFDRixVQUFVLENBQ1YsQ0FBQyxFQUNGLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsQ0FBQyxFQUNELENBQUMsVUFBVSxDQUNYLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxFQUNELENBQUMsUUFBUSxDQUNULENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLFVBQVUsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNULEVBQUUsRUFDRixDQUFDLFVBQVUsQ0FDWCxDQUFDLEVBQ0YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUN6QyxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLENBQUMsVUFBVSxDQUNYLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLFVBQVUsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNULEVBQUUsRUFDRixDQUFDLFFBQVEsQ0FDVCxDQUFDLEVBQ0YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUM3QyxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLFVBQVUsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNSLEVBQUUsRUFDRixDQUFDLFNBQVMsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNULEVBQUUsRUFDRixDQUFDLFVBQVUsQ0FDWCxDQUFDLEVBQ0YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFDNUMsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ0osRUFBRSxFQUNGLENBQUMsU0FBUyxDQUNWLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLENBQUMsU0FBUyxDQUNWLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLFFBQVEsQ0FDUixDQUFDLEVBQ0YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUM1QyxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLENBQUMsU0FBUyxDQUNWLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLFNBQVMsQ0FDVCxDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNSLEVBQUUsRUFDRixDQUFDLFNBQVMsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ3hDLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDUixFQUFFLEVBQ0YsVUFBVSxDQUNWLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLENBQUMsVUFBVSxDQUNYLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLENBQUMsUUFBUSxDQUNULENBQUMsRUFDRixDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUM3QyxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLENBQUMsVUFBVSxDQUNYLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLENBQUMsT0FBTyxDQUNSLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLENBQUMsVUFBVSxDQUNYLENBQUMsRUFDRixDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDTCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUM1QyxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLENBQUMsUUFBUSxDQUNULENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLENBQUMsVUFBVSxDQUNYLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLFVBQVUsQ0FDVixDQUFDLEVBQ0YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUMsRUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQyxFQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUM1QyxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ1QsRUFBRSxFQUNGLENBQUMsVUFBVSxDQUNYLENBQUMsRUFDRixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1IsRUFBRSxFQUNGLFNBQVMsQ0FDVCxDQUFDLEVBQ0YsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNSLEVBQUUsRUFDRixDQUFDLFNBQVMsQ0FDVixDQUFDO2dCQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDYixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENB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RUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0Q7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUM7WUFDWCxTQUFTLEVBQUUsQ0FBQztZQUNaLFdBQVcsRUFBRSxDQUFDO1lBQ2QsV0FBVyxFQUFFLENBQUM7WUFDZCxjQUFjLEVBQUUsQ0FBQztZQUNqQixlQUFlLEVBQUUsQ0FBQztZQUNsQixlQUFlLEVBQUUsQ0FBQztZQUNsQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBM1lELDhCQTJZQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid3BrUmVwb3J0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid3BrUmVwb3J0ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgZW52Q2hlY2ssIGNvcmUsIG4xOCB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgY29uZmlnMSA9IHtcbiAgc2RrOiB7XG4gICAgQklEOiAnd3BrcmVwb3J0ZXInLFxuICAgIENJRDogJ2pzc2RrJyxcbiAgICBXSURfS0VZOiAnX193cGtyZXBvcnRlcndpZF8nLFxuICB9LFxuICBlbnY6IHtcbiAgICBCUk9XU0VSOiAnYnJvd3NlcicsXG4gICAgTk9ERUpTOiAnbm9kZWpzJyxcbiAgICBXRUVYOiAnd2VleCcsXG4gIH0sXG4gIHB4OiB7XG4gICAgc2lnbktleTogJ1V2biMwOHVlZlZkd2UmYzQnLFxuICAgIGFkZHI6IHtcbiAgICAgIGNuOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAzL3RyYWNrL3RyYW5zZm9ybUxvZycsXG4gICAgICBjbl9odHRwczogJ2h0dHBzOi8vcHguZWZmaXJzdC5jb20vYXBpL3YxL2pzc2RrL3VwbG9hZCcsXG4gICAgICBpbnRsOiAnaHR0cDovL3B4LWludGwudWN3ZWIuY29tL2FwaS92MS9qc3Nkay91cGxvYWQnLFxuICAgICAgaW50bF9odHRwczogJ2h0dHBzOi8vcHgtaW50bC51Y3dlYi5jb20vYXBpL3YxL2pzc2RrL3VwbG9hZCcsXG4gICAgfSxcbiAgICBjb25mQWRkcjoge1xuICAgICAgY246ICdodHRwOi8vcHguZWZmaXJzdC5jb20vYXBpL3YxL2pjb25maWcnLFxuICAgICAgY25faHR0cHM6ICdodHRwczovL3B4LmVmZmlyc3QuY29tL2FwaS92MS9qY29uZmlnJyxcbiAgICAgIGludGw6ICdodHRwOi8vcHgtaW50bC51Y3dlYi5jb20vYXBpL3YxL2pjb25maWcnLFxuICAgICAgaW50bF9odHRwczogJ2h0dHBzOi8vcHgtaW50bC51Y3dlYi5jb20vYXBpL3YxL2pjb25maWcnLFxuICAgIH0sXG4gIH0sXG4gIGh0dHA6IHtcbiAgICBtZXRob2RzOiB7XG4gICAgICBHRVQ6ICdHRVQnLFxuICAgICAgUFVUOiAnUFVUJyxcbiAgICAgIFBPU1Q6ICdQT1NUJyxcbiAgICAgIEhFQUQ6ICdIRUFEJyxcbiAgICAgIERFTEVURTogJ0RFTEVURScsXG4gICAgICBPUFRJT05TOiAnT1BUSU9OUycsXG4gICAgICBDT05ORUNUOiAnT1BUSU9OUycsXG4gICAgICBUUkFDRTogJ09QVElPTlMnLFxuICAgICAgUEFUQ0g6ICdPUFRJT05TJyxcbiAgICB9LFxuICAgIHByb3RvY29sczoge1xuICAgICAgSFRUUDogJ2h0dHA6JyxcbiAgICAgIEhUVFBTOiAnaHR0cHM6JyxcbiAgICB9LFxuICB9LFxuICBjYXRlZ29yeToge1xuICAgIEpTRVJSOiAxLFxuICAgIEFQSTogMixcbiAgICBKU0ZTUEVSRjogMyxcbiAgICBSRVNMT0FERkFJTDogNCxcbiAgICBGTE9XOiA1LFxuICAgIEJLUEc6IDYsXG4gICAgSEFSTE9HOiA3LFxuICB9LFxuICBuYXZDb25uOiB7XG4gICAgdHlwZXM6IHtcbiAgICAgIEJMVUVUT09USDogJ2JsdWV0b290aCcsXG4gICAgICBDRUxMVUxBUjogJ2NlbGx1bGFyJyxcbiAgICAgIEVUSEVSTkVUOiAnZXRoZXJuZXQnLFxuICAgICAgTUlYRUQ6ICdtaXhlZCcsXG4gICAgICBOT05FOiAnbm9uZScsXG4gICAgICBPVEhFUjogJ290aGVyJyxcbiAgICAgIFVOS05PV046ICd1bmtub3duJyxcbiAgICAgIFdJRkk6ICd3aWZpJyxcbiAgICAgIFdJTUFYOiAnd2ltYXgnLFxuICAgIH0sXG4gICAgZWZmZWN0aXZlVHlwZXM6IHtcbiAgICAgICcyRyc6ICcyZycsXG4gICAgICAnM0cnOiAnM2cnLFxuICAgICAgJzRHJzogJzRnJyxcbiAgICAgIFNMT1cyRzogJ3Nsb3ctMmcnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5mdW5jdGlvbiB3cGtSZXBvcnRlckVudHJ5KCkge1xuICB2YXIgdCA9IGVudkNoZWNrKCk7XG4gIHZhciByID0gJ29iamVjdCcgPT0gdHlwZW9mIHQgJiYgdCArICcnID09ICdbb2JqZWN0IHByb2Nlc3NdJztcbiAgLy8gQHRzLWlnbm9yZVxuICB2YXIgbyA9ICdmdW5jdGlvbicgPT0gdHlwZW9mIGNhbGxOYXRpdmUgfHwgJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgbmF0aXZlTG9nO1xuICAvLyBlLmV4cG9ydHMgPSBuKG8gPyA1IDogciA/IDE0IDogMTcpO1xuICByZXR1cm4gbyA/IHJlcG9ydE5hdGl2ZV81KCkgOiByID8gcmVwb3J0Tm9kZV8xNCgpIDogcmVwb3J0QnJvd3Nlcl8xNyhjb25maWcxKTtcbn1cblxuZnVuY3Rpb24gcmVwb3J0TmF0aXZlXzUoZT86IGFueSwgbj86IGFueSkge1xuICAvLyA1XG4gIHZhciByID0gbigxKSxcbiAgICBvID0gbigxMyk7XG4gIGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdCA9IG5ldyByKGUpO1xuICAgIHJldHVybiB0LmluaXRpYWxpemUobyksIHQ7XG4gIH07XG59XG5mdW5jdGlvbiByZXBvcnROb2RlXzE0KCkge31cbmZ1bmN0aW9uIHJlcG9ydEJyb3dzZXJfMTcoY29uZmlnKSB7XG4gIC8vIDE3XG4gIHZhciByID0gY29yZShjb25maWcpO1xuICB2YXIgbyA9IG4xOChjb25maWcpO1xuICByZXR1cm4gZnVuY3Rpb24oY3VzdG9tQ29uZmlnKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHZhciB0ID0gbmV3IHIoY3VzdG9tQ29uZmlnKTtcbiAgICB0LmluaXRpYWxpemUobyk7XG4gICAgcmV0dXJuIHQ7XG4gIH07XG59XG5jb25zdCB3cGtSZXBvcnRlciA9IHdwa1JlcG9ydGVyRW50cnkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3cGtSZXBvcnRlcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsdWdpbl9hcGkoY29uZmlnKSB7XG4gIC8vIDEwXG4gIHZhciByID0gY29uZmlnOyAvLyBjb25maWdcbiAgdmFyIG8gPSByLnNkaztcbiAgdmFyIGkgPSByLmh0dHAubWV0aG9kcztcbiAgdmFyIGEgPSByLmNhdGVnb3J5O1xuICB2YXIgcyA9IDIwNDg7XG4gIHZhciBjID0gMTIxZTM7XG4gIHZhciB1ID0gZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiBlID49IDIwMCAmJiBlIDw9IDI5OTtcbiAgfTtcbiAgdmFyIGwgPSBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC0xID09PSBlLmluZGV4T2YoJy8vYXJtcy1yZXRjb2RlJykgJiZcbiAgICAgIC0xID09PSBlLmluZGV4T2YoJy8vd3BrLWdhdGV3YXknKSAmJlxuICAgICAgLTEgPT09IGUuaW5kZXhPZignLy9weC51Y3dlYi5jb20nKSAmJlxuICAgICAgLTEgPT09IGUuaW5kZXhPZignLy9weC5lZmZpcnN0LmNvbScpICYmXG4gICAgICAtMSA9PT0gZS5pbmRleE9mKCcvL3B4LWludGwudWN3ZWIuY29tJylcbiAgICApO1xuICB9O1xuICB2YXIgZiA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICBpZiAoZS5lbnYgPT09IHIuZW52LkJST1dTRVIgJiYgd2luZG93KSB7XG4gICAgICB2YXIgbiA9IGUudG9vbEtpdC5leHRlbmQoXG4gICAgICAgIHtcbiAgICAgICAgICBlbmFibGU6ICEwLFxuICAgICAgICAgIHNhbXBsZVJhdGU6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHQsXG4gICAgICApO1xuICAgICAgbi5lbmFibGVcbiAgICAgICAgPyAoZS5sb2dnZXIuaW5mbygnd3BraW50ZXJmYWNlUGx1Z2lu5bey5byA5ZCvJyksXG4gICAgICAgICAgJ1hNTEh0dHBSZXF1ZXN0JyBpbiB3aW5kb3cgJiZcbiAgICAgICAgICAgIChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgIHZhciBuOiBhbnkgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO1xuICAgICAgICAgICAgICB2YXIgciA9IG4ub3BlbjtcbiAgICAgICAgICAgICAgbi5vcGVuID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19yZXFDdHhfXyA9IHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogZSxcbiAgICAgICAgICAgICAgICAgIHVybDogdCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0OiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgci5hcHBseSh0aGlzLCBuKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdmFyIGYgPSBuLnNlbmQ7XG4gICAgICAgICAgICAgIG4uc2VuZCA9IGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZCh0aGlzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChyLl9fcmVxQ3R4X18gJiYgNCA9PT0gci5yZWFkeVN0YXRlKVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgPSAoci5yZXNwb25zZVVSTCB8fCByLl9fcmVxQ3R4X18udXJsKS5zcGxpdCgnPycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcCA9IGRbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gZFsxXSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGcgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICByLl9fcmVxQ3R4X18ubWV0aG9kLnRvVXBwZXJDYXNlKCkgIT09IGkuR0VUICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBuICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoZyA9IEpTT04uc3RyaW5naWZ5KG4pKTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IFN0cmluZyhyLnJlc3BvbnNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG06IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICdmdW5jdGlvbicgPT0gdHlwZW9mIHQuZXJyb3JGaWx0ZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgodiA9ICEhKG0gPSB0LmVycm9yRmlsdGVyLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiB3LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubG9nZ2VyLndhcm4oJ2FwaSBlcnJvckZpbHRlcuaJp+ihjOe7k+aenO+8micsIG0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHcubGVuZ3RoID4gcyAmJiAodyA9ICdbcmVzcG9uc2UgY29udGVudCB0b28gbGFyZ2VdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF8gPSBmIC0gci5fX3JlcUN0eF9fLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICYmIF8gPCBjICYmIGwocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gbS5iaXpDb2RlIHx8IHIuc3RhdHVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5yZXBvcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogYS5BUEksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZVJhdGU6IHQuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd19yZXM6IHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdfcGFyYW06IGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdfYm9keTogdSh5KSB8fCAhdC53aXRoQm9keSA/ICcnIDogZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd19tZXRob2Q6IHIuX19yZXFDdHhfXy5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdfcmM6IHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdfcnQ6IF8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdfcmVzcDogdSh5KSB8fCAhdC53aXRoUmVzcCA/ICcnIDogbS5tc2cgfHwgdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd190eXBlOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYzE6IG0udHJhY2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICAgICAgICAgIGUucmVwb3J0RXJyb3IodCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmlkOiBvLkJJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpZDogby5DSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogYS5KU0VSUixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZVJhdGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gciAmJlxuICAgICAgICAgICAgICAgICAgJ2Z1bmN0aW9uJyA9PSB0eXBlb2Ygci5vbnJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHZhciBwID0gci5vbnJlYWR5c3RhdGVjaGFuZ2U7XG4gICAgICAgICAgICAgICAgICByLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBkLmFwcGx5KHRoaXMsIGUpLCBwLmFwcGx5KHRoaXMsIGUpO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Ugci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBkO1xuICAgICAgICAgICAgICAgIHZhciBoID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGgpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkoZSwgbiksXG4gICAgICAgICAgJ2ZldGNoJyBpbiB3aW5kb3cgJiZcbiAgICAgICAgICAgIChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgIHZhciBuID0gd2luZG93LmZldGNoO1xuICAgICAgICAgICAgICB3aW5kb3cuZmV0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcjogYW55ID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIHZhciBmID0gaS5HRVQ7XG4gICAgICAgICAgICAgICAgclsxXSAmJiByWzFdLm1ldGhvZCAmJiAoZiA9IHJbMV0ubWV0aG9kLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIHZhciBkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gblxuICAgICAgICAgICAgICAgICAgLmFwcGx5KHRoaXMsIHIpXG4gICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IChuLnVybCB8fCByWzBdKS5zcGxpdCgnPycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZyA9IGhbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gaFsxXSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICBmICE9PSBpLkdFVCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgclsxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgclsxXS5ib2R5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAodiA9IEpTT04uc3RyaW5naWZ5KHJbMV0uYm9keSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgblxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xvbmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gciB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTogYW55ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHQuZXJyb3JGaWx0ZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKG8gPSAhIShpID0gdC5lcnJvckZpbHRlci5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBuLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5sb2dnZXIud2FybignYXBpIGVycm9yRmlsdGVy5omn6KGM57uT5p6c77yaJywgaSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmxlbmd0aCA+IHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdbcmVzcG9uc2UgY29udGVudCB0b28gbGFyZ2VdJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvICYmIHAgLSBkIDwgYyAmJiBsKGcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBpLmJpekNvZGUgfHwgbi5zdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlcG9ydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBhLkFQSSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlUmF0ZTogdC5zYW1wbGVSYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3X3JlczogZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd19wYXJhbTogdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd19ib2R5OiB1KGgpIHx8ICF0LndpdGhCb2R5ID8gJycgOiB2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3X21ldGhvZDogZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd19yYzogaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd19ydDogcCAtIGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdfcmVzcDogdShoKSB8fCAhdC53aXRoUmVzcCA/ICcnIDogaS5tc2cgfHwgcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd190eXBlOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzE6IGkudHJhY2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBlLnJlcG9ydEVycm9yKHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZDogby5CSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaWQ6IG8uQ0lELFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGEuSlNFUlIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVSYXRlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChlLnJlcG9ydEVycm9yKHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogYS5KU0VSUixcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHQpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KShlLCBuKSlcbiAgICAgICAgOiBlLmxvZ2dlci5pbmZvKCd3cGtpbnRlcmZhY2VQbHVnaW7lt7LlhbPpl60nKTtcbiAgICB9XG4gIH07XG4gIGYucHJvdG90eXBlLnBsdWdpbklkID0gJ2FwaSc7XG4gIHJldHVybiBmO1xufVxuIiwiaW1wb3J0IHJvdXRlclBsdWdpbiBmcm9tICcuL3JvdXRlcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbHVnaW5fZmxvdyhjb25maWc6IGFueSkge1xuICB2YXIgciA9IGNvbmZpZy5lbnYsXG4gICAgbyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGVcbiAgICAgICAgICA/ICh0ID0gZS5yZXBsYWNlKC9eI1xcLz8vLCAnJykpICYmICdzdHJpbmcnID09IHR5cGVvZiB0XG4gICAgICAgICAgICA/IHQucmVwbGFjZSgvXihodHRwcz86KT9cXC9cXC8vLCAnJykucmVwbGFjZSgvXFw/LiokLywgJycpXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgOiAnJykgfHwgJ1tpbmRleF0nXG4gICAgICApO1xuICAgIH0sXG4gICAgaSA9IGZ1bmN0aW9uKHRoaXM6IGFueSwgZSwgdCkge1xuICAgICAgaWYgKCgodCA9IHQgfHwge30pLCBlLmVudiA9PT0gci5CUk9XU0VSICYmIHdpbmRvdykpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBlLnRvb2xLaXQuZXh0ZW5kKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbmFibGU6ICEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgKS5lbmFibGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgZS5sb2dnZXIuaW5mbygnd3BrZmxvd1BsdWdpbuW3suW8gOWQrycpO1xuICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZS5yZXBvcnRGbG93KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIGUudG9vbEtpdC5vbkxpc3Rlbih3aW5kb3csICdsb2FkJywgcywgITApLFxuICAgICAgICAgICAgZS5zcGEgJiZcbiAgICAgICAgICAgICAgKHJvdXRlclBsdWdpbi5hcHBseSh0aGlzLCBbY29uZmlnXSksXG4gICAgICAgICAgICAgIChpID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIG8obG9jYXRpb24uaGFzaCkgJiZcbiAgICAgICAgICAgICAgICAgICgoZS5fc2lkID0gZS50b29sS2l0LnV1aWQoKSksIGUucmVwb3J0RmxvdygpKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIChhID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIG8odC5kZXRhaWwpICYmICgoZS5fc2lkID0gZS50b29sS2l0LnV1aWQoKSksIGUucmVwb3J0RmxvdygpKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGUudG9vbEtpdC5vbkxpc3Rlbih3aW5kb3csICdoYXNoY2hhbmdlJywgaSksXG4gICAgICAgICAgICAgIGUudG9vbEtpdC5vbkxpc3Rlbih3aW5kb3csICdoaXN0b3J5c3RhdGVjaGFuZ2UnLCBhKSksXG4gICAgICAgICAgICBlLnRvb2xLaXQub25MaXN0ZW4od2luZG93LCAnYmVmb3JldW5sb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGUudG9vbEtpdC5vZmZMaXN0ZW4od2luZG93LCAnbG9hZCcpO1xuICAgICAgICAgICAgICBlLnRvb2xLaXQub2ZmTGlzdGVuKHdpbmRvdywgJ2hhc2hjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgZS50b29sS2l0Lm9mZkxpc3Rlbih3aW5kb3csICdoaXN0b3J5c3RhdGVjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBzID0gaSA9IGEgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBlLmxvZ2dlci5pbmZvKCd3cGtmbG93UGx1Z2lu5bey5YWz6ZetJyk7XG4gICAgfTtcbiAgaS5wcm90b3R5cGUucGx1Z2luSWQgPSAnZmxvdyc7XG4gIHJldHVybiBpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGx1Z2luX2dlcnJvcihjb25maWcpIHtcbiAgdmFyIHI6IGFueTtcbiAgdmFyIG86IGFueTtcbiAgdmFyIGkgPSBjb25maWcsXG4gICAgYSA9IGkuZW52LFxuICAgIHMgPSBpLmNhdGVnb3J5O1xuICB2YXIgYyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiAnZnVuY3Rpb24nID09IHR5cGVvZiBlO1xuICAgIH0sXG4gICAgdSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0ID0gLTE7XG4gICAgICBzd2l0Y2ggKGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgICAgdCA9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xpbmsnOlxuICAgICAgICAgIGUucmVsICYmICdzdHlsZXNoZWV0JyA9PT0gZS5yZWwudG9Mb3dlckNhc2UoKSAmJiAodCA9IDIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzY3JpcHQnOlxuICAgICAgICAgIHQgPSAzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd2aWRlbyc6XG4gICAgICAgICAgdCA9IDExO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gICAgfSxcbiAgICBsID0ge30sXG4gICAgZiA9IGZ1bmN0aW9uKGUsIHQsIG4sIHI/OiBhbnkpIHtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lclxuICAgICAgICA/IGUuYWRkRXZlbnRMaXN0ZW5lcih0LCBuLCByIHx8ICExKVxuICAgICAgICA6ICgobFsnb24nICsgdF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBuLmNhbGwoZSwgd2luZG93LmV2ZW50KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlLmF0dGFjaEV2ZW50KCdvbicgKyB0LCBsWydvbicgKyB0XSkpO1xuICAgIH0sXG4gICAgZCA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIHZhciBuID0gZS5pZCA/ICcjJyArIGUuaWQgOiAnJyxcbiAgICAgICAgciA9IGUuY2xhc3NOYW1lID8gJy4nICsgZS5jbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCcuJykgOiAnJyxcbiAgICAgICAgbyA9IGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGUucGFyZW50Tm9kZSAmJiBlLnBhcmVudE5vZGUudGFnTmFtZSAmJiB0IC0gMSAhPSAwXG4gICAgICAgID8gZChlLnBhcmVudE5vZGUsIHQgLSAxKSArICcgPiAnICsgby50b0xvd2VyQ2FzZSgpICsgbiArIHJcbiAgICAgICAgOiBvICsgbiArIHI7XG4gICAgfSxcbiAgICBwID0gZnVuY3Rpb24odGhpczogYW55LCBlLCB0LCBuLCBpLCBhLCB1KSB7XG4gICAgICBpZiAocilcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByLmNhbGwodGhpcywgdCwgbiwgaSwgYSwgdSk7XG4gICAgICAgIH0gY2F0Y2ggKHUpIHt9XG4gICAgICBpZiAoXG4gICAgICAgICgvXnNjcmlwdCBlcnJvclxcLj8kL2kudGVzdCh0KSAmJiAodCA9ICdTY3JpcHQgZXJyb3InKSxcbiAgICAgICAgby5pZ25vcmVTY3JpcHRFcnJvciAmJiAnU2NyaXB0IGVycm9yJyA9PT0gdClcbiAgICAgIClcbiAgICAgICAgZS5sb2dnZXIud2Fybign6YWN572u5LqGaWdub3JlU2NyaXB0RXJyb3LvvIzmnKzmrKHlvILluLjlsIbkuI3kuIrmiqUnKTtcbiAgICAgIGVsc2UgaWYgKCFjKG8uanNFcnJGaWx0ZXIpIHx8IG8uanNFcnJGaWx0ZXIuY2FsbCh0aGlzLCBldmVudCkpIHtcbiAgICAgICAgaWYgKG51bGwgIT0gdSkge1xuICAgICAgICAgIHZhciBsID0gKHUuc3RhY2sgfHwgJycpLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICBsLnNoaWZ0KCk7XG4gICAgICAgICAgdmFyIGYgPSB7XG4gICAgICAgICAgICB3X21zZzogdCxcbiAgICAgICAgICAgIHdfZmlsZTogbiB8fCAnJyxcbiAgICAgICAgICAgIHdfbGluZTogaSB8fCAnJyxcbiAgICAgICAgICAgIHdfY29sOiBhIHx8ICcnLFxuICAgICAgICAgICAgc3RhY2s6IGwuam9pbignXFxuJyksXG4gICAgICAgICAgICBjYXRlZ29yeTogcy5KU0VSUixcbiAgICAgICAgICAgIHNhbXBsZVJhdGU6IG8uanNFcnJTYW1wbGVSYXRlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgZS5yZXBvcnQoZik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZVxuICAgICAgICBlLmxvZ2dlci53YXJuKFxuICAgICAgICAgICdqc2VyckZpbHRlciDov5Tlm55mYWxzZe+8jOacrOasoeaXpeW/l+WwhuS4jeS4iuaKpSwgZXZlbnQ6ICcsXG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICk7XG4gICAgfTtcbiAgdmFyIGggPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgdmFyIG4gPSB3aW5kb3c7XG4gICAgbiAmJiBlLmVudiA9PT0gYS5CUk9XU0VSXG4gICAgICA/IChlLmxvZ2dlci5pbmZvKCd3cGtnbG9iYWxlcnJvclBsdWdpbuW3suW8gOWQrycpLFxuICAgICAgICAhMSAhPT1cbiAgICAgICAgKG8gPSBlLnRvb2xLaXQuZXh0ZW5kKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGpzRXJyU2FtcGxlUmF0ZTogMSxcbiAgICAgICAgICAgIHJlc0VyclNhbXBsZVJhdGU6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0LFxuICAgICAgICApKS5qc0VyclxuICAgICAgICAgID8gKChyID0gbi5vbmVycm9yKSxcbiAgICAgICAgICAgIChuLm9uZXJyb3IgPSBmdW5jdGlvbih0LCBuLCByLCBvLCBpKSB7XG4gICAgICAgICAgICAgIHAoZSwgdCwgbiwgciwgbywgaSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGYobiwgJ3VuaGFuZGxlZHJlamVjdGlvbicsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgdmFyIG4gPSB0LnR5cGU7XG4gICAgICAgICAgICAgICdzdHJpbmcnID09IHR5cGVvZiB0LnJlYXNvblxuICAgICAgICAgICAgICAgID8gKG4gPSB0LnJlYXNvbilcbiAgICAgICAgICAgICAgICA6ICdvYmplY3QnID09IHR5cGVvZiB0LnJlYXNvbiAmJlxuICAgICAgICAgICAgICAgICAgdC5yZWFzb24ubWVzc2FnZSAmJlxuICAgICAgICAgICAgICAgICAgKG4gPSB0LnJlYXNvbi5tZXNzYWdlKSxcbiAgICAgICAgICAgICAgICBwKGUsIG4sIG51bGwsIG51bGwsIG51bGwsIHQucmVhc29uKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIDogZS5sb2dnZXIud2FybignanPlvILluLjnm5Hmjqflt7LlhbPpl60nKSxcbiAgICAgICAgby5yZXNFcnJcbiAgICAgICAgICA/IGYoXG4gICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgIShmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICF0LnRhcmdldC50YWdOYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgIHQubWVzc2FnZSB8fFxuICAgICAgICAgICAgICAgICAgICB0LmZpbGVuYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgIHQubGluZW5vIHx8XG4gICAgICAgICAgICAgICAgICAgIHQuY29sbm9cbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBlLmxvZ2dlci53YXJuKCfpnZ7otYTmupDojrflj5bpl67popjvvIzot7Plh7rlpITnkIYsIGV2ZW50OiAnLCB0KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFjKG8ucmVzRXJyRmlsdGVyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIG8ucmVzRXJyRmlsdGVyLmNhbGwodGhpcywgdClcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQudGFyZ2V0LnNyYyB8fCB0LnRhcmdldC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICBlLnJlcG9ydCh7XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHMuUkVTTE9BREZBSUwsXG4gICAgICAgICAgICAgICAgICAgICAgc2FtcGxlUmF0ZTogby5yZXNFcnJTYW1wbGVSYXRlLFxuICAgICAgICAgICAgICAgICAgICAgIG1zZzogbiArICcg5Yqg6L295aSx6LSlJyxcbiAgICAgICAgICAgICAgICAgICAgICB3X3JlczogbixcbiAgICAgICAgICAgICAgICAgICAgICB3X3R5cGU6IHUodC50YXJnZXQpLFxuICAgICAgICAgICAgICAgICAgICAgIHdfeHBhdGg6IGQodC50YXJnZXQsIDUpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBlLmxvZ2dlci53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICdyZXNlcnJGaWx0ZXIg6L+U5ZueZmFsc2XvvIzmnKzmrKHml6Xlv5flsIbkuI3kuIrmiqUsIGV2ZW50OiAnLFxuICAgICAgICAgICAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSkoZSwgdCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICEwLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZS5sb2dnZXIud2Fybign6LWE5rqQ5Yqg6L295byC5bi455uR5o6n5bey5YWz6ZetJykpXG4gICAgICA6IGUubG9nZ2VyLndhcm4oJ+WFqOWxgOmUmeivr+ebkeaOp+aPkuS7tuS4jeaUr+aMgemdnua1j+iniOWZqOeOr+WigycpO1xuICB9O1xuICBoLnByb3RvdHlwZS5wbHVnaW5JZCA9ICdnZXJyb3InO1xuICByZXR1cm4gaDtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYXBpIH0gZnJvbSAnLi9hcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbG93IH0gZnJvbSAnLi9mbG93JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2Vycm9yIH0gZnJvbSAnLi9nZXJyb3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwZXJmIH0gZnJvbSAnLi9wZXJmJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1Y3BhcmFtIH0gZnJvbSAnLi91Y3BhcmFtJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsdWdpbl9wZXJmKGUsIHQsIGNvbmZpZykge1xuICAvLyAxMVxuICB2YXIgcixcbiAgICBvID0gY29uZmlnLmVudixcbiAgICBpID0gY29uZmlnLmNhdGVnb3J5LFxuICAgIGEgPSBbXG4gICAgICAnbmF2aWdhdGlvblN0YXJ0JyxcbiAgICAgICd1bmxvYWRFdmVudFN0YXJ0JyxcbiAgICAgICd1bmxvYWRFdmVudEVuZCcsXG4gICAgICAncmVkaXJlY3RTdGFydCcsXG4gICAgICAncmVkaXJlY3RFbmQnLFxuICAgICAgJ2ZldGNoU3RhcnQnLFxuICAgICAgJ2RvbWFpbkxvb2t1cFN0YXJ0JyxcbiAgICAgICdkb21haW5Mb29rdXBFbmQnLFxuICAgICAgJ2Nvbm5lY3RTdGFydCcsXG4gICAgICAnc2VjdXJlQ29ubmVjdGlvblN0YXJ0JyxcbiAgICAgICdjb25uZWN0RW5kJyxcbiAgICAgICdyZXF1ZXN0U3RhcnQnLFxuICAgICAgJ3Jlc3BvbnNlU3RhcnQnLFxuICAgICAgJ3Jlc3BvbnNlRW5kJyxcbiAgICAgICdkb21Mb2FkaW5nJyxcbiAgICAgICdkb21JbnRlcmFjdGl2ZScsXG4gICAgICAnZG9tQ29udGVudExvYWRlZEV2ZW50U3RhcnQnLFxuICAgICAgJ2RvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCcsXG4gICAgICAnZG9tQ29tcGxldGUnLFxuICAgICAgJ2xvYWRFdmVudFN0YXJ0JyxcbiAgICAgICdsb2FkRXZlbnRFbmQnLFxuICAgICAgJ21zRmlyc3RQYWludCcsXG4gICAgXSxcbiAgICBzID0gWyduYXZpZ2F0ZScsICdyZWxvYWQnLCAnYmFja19mb3J3YXJkJ10sXG4gICAgYyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0LFxuICAgICAgICBuID0gZVthWzVdXTtcbiAgICAgIGlmICgxID09PSBlLl92ZXIpIHtcbiAgICAgICAgdmFyIHI7XG4gICAgICAgIGlmICgod2luZG93IGFzIGFueSkuY2hyb21lICYmICh3aW5kb3cgYXMgYW55KS5jaHJvbWUubG9hZFRpbWVzKVxuICAgICAgICAgIHIgPSAxZTMgKiAod2luZG93IGFzIGFueSkuY2hyb21lLmxvYWRUaW1lcygpLmZpcnN0UGFpbnRUaW1lO1xuICAgICAgICBlbHNlIHIgPSBlLm1zRmlyc3RQYWludCA/IGUubXNGaXJzdFBhaW50IDogZVthWzEzXV07XG4gICAgICAgIGlmICghcikgcmV0dXJuIC0xO1xuICAgICAgICB0ID0gciA+PSBuID8gcGFyc2VGbG9hdCgociAtIG4pLnRvRml4ZWQoMikpIDogLTE7XG4gICAgICB9IGVsc2VcbiAgICAgICAgMiA9PT0gZS5fdmVyICYmICgodCA9IGVbYVsxM11dIC0gbiksICh0ID0gcGFyc2VGbG9hdCh0LnRvRml4ZWQoMikpKSk7XG4gICAgICByZXR1cm4gdDtcbiAgICB9LFxuICAgIHUgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICB2YXIgbixcbiAgICAgICAgcixcbiAgICAgICAgbyxcbiAgICAgICAgaSA9IHt9O1xuICAgICAgZm9yICh2YXIgcyBpbiB0KVxuICAgICAgICAobyA9IDApLFxuICAgICAgICAgIChuID0gZVthW3Rbc11bMF1dXSksXG4gICAgICAgICAgKHIgPSBlW2FbdFtzXVsxXV1dKSxcbiAgICAgICAgICBuID4gMCAmJiByID4gMCAmJiAobyA9IHBhcnNlRmxvYXQoKHIgLSBuKS50b0ZpeGVkKDIpKSksXG4gICAgICAgICAgKGlbc10gPSBvKTtcbiAgICAgIHJldHVybiBpO1xuICAgIH0sXG4gICAgbCA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIHZhciBuOiBhbnkgPSB3aW5kb3c7XG4gICAgICBpZiAoXG4gICAgICAgICgociA9XG4gICAgICAgICAgbi5wZXJmb3JtYW5jZSB8fFxuICAgICAgICAgIG4ud2Via2l0UGVyZm9ybWFuY2UgfHxcbiAgICAgICAgICBuLm1zUGVyZm9ybWFuY2UgfHxcbiAgICAgICAgICBuLm1velBlcmZvcm1hbmNlKSxcbiAgICAgICAgZS5lbnYgPT09IG8uQlJPV1NFUiAmJiByICYmIHIudGltaW5nKVxuICAgICAgKSB7XG4gICAgICAgIHQgPSB0IHx8IHt9O1xuICAgICAgICB2YXIgYSA9IGUudG9vbEtpdC5leHRlbmQoXG4gICAgICAgICAge1xuICAgICAgICAgICAgZW5hYmxlOiAhMCxcbiAgICAgICAgICAgIHNhbXBsZVJhdGU6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0LFxuICAgICAgICApO1xuICAgICAgICBpZiAoYS5lbmFibGUpIHtcbiAgICAgICAgICBlLmxvZ2dlci5pbmZvKCd3cGtwZXJmb3JtYW5jZVBsdWdpbuW3suW8gOWQrycpO1xuICAgICAgICAgIHZhciBsID0gci50aW1pbmcgfHwge30sXG4gICAgICAgICAgICBmID0gMTtcbiAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2Ygbi5QZXJmb3JtYW5jZU5hdmlnYXRpb25UaW1pbmcpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgZCA9IHIuZ2V0RW50cmllc0J5VHlwZSgnbmF2aWdhdGlvbicpWzBdO1xuICAgICAgICAgICAgICBkICYmICgobCA9IGQpLCAoZiA9IDIpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgKGwuX3ZlciA9IGYpLFxuICAgICAgICAgICAgKGZ1bmN0aW9uKGU6IGFueSwgdCwgbiwgcikge1xuICAgICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgICAgICA/IGUuYWRkRXZlbnRMaXN0ZW5lcih0LCBuLCByIHx8ICExKVxuICAgICAgICAgICAgICAgIDogZS5hdHRhY2hFdmVudCgnb24nICsgdCwgbik7XG4gICAgICAgICAgICB9KSh3aW5kb3csICdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIC9sb2FkZWR8Y29tcGxldGUvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkgJiZcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLnRvb2xLaXQuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1KGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdfdW5sb2FkOiBbMSwgMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3X3JlZGlyZWN0OiBbMywgNF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3X2FwcGNhY2hlOiBbNSwgNl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3X2RuczogWzYsIDddLFxuICAgICAgICAgICAgICAgICAgICAgICAgd190Y3A6IFs4LCAxMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3X3NzbDogWzksIDEwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdfdHRmYjogWzExLCAxMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3X2NvbnRlbnRkb3dubG9hZDogWzEyLCAxM10sXG4gICAgICAgICAgICAgICAgICAgICAgICB3X2RvbXBhcnNpbmc6IFsxMywgMTVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgd19yZXM6IFsxNywgMTldLFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KShsKSxcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdDogYW55ID0gdShlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3X2ZpcnN0Ynl0ZTogWzUsIDEyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdfdHRpOiBbNSwgMTVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgd19kb21yZWFkeTogWzUsIDE3XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdfbG9hZDogWzUsIDE5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdfdG90YWw6IFs1LCAyMF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0LndfZnB0ID0gYyhlKSksIHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pKGwpLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gdClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbbl0gPCAwIHx8IHRbbl0gPiA2ZTQpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgZS5sb2dnZXIud2Fybign5oCn6IO95pWw5o2u5byC5bi477yaJywgbiwgdFtuXSk7XG4gICAgICAgICAgICAgICAgICB2YXIgbyA9IGUudG9vbEtpdC5leHRlbmQoXG4gICAgICAgICAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gci5uYXZpZ2F0aW9uIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAxID09PSBlLl92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAodCA9IHNbbi50eXBlXSB8fCAnb3RoZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IDIgPT09IGUuX3ZlciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgobyA9IGUuZW5jb2RlZEJvZHlTaXplKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9IGUuZGVjb2RlZEJvZHlTaXplKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSA9IGUudHJhbnNmZXJTaXplKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCA9IGUudHlwZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3X2VuYmRzaXplOiBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3X2RlYmRzaXplOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3X3RyYW5zaXplOiBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3X25hdnR5cGU6IHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSkobCksXG4gICAgICAgICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaS5KU0ZTUEVSRixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBlLnJlcG9ydChvKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgZS5sb2dnZXIuaW5mbygnd3BrcGVyZm9ybWFuY2VQbHVnaW7lt7LlhbPpl60nKTtcbiAgICAgIH0gZWxzZSBlLmxvZ2dlci53YXJuKCfln7rnoYDmgKfog73mj5Lku7bku4XmlK/mjIHmtY/op4jlmajnjq/looMnKTtcbiAgICB9O1xuICBsLnByb3RvdHlwZS5wbHVnaW5JZCA9ICdwZXJmJztcbiAgcmV0dXJuIGw7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbHVnaW5fcm91dGVyKGNvbmZpZz86IGFueSkge1xuICAvLyA4XG4gIHZhciBuID0gd2luZG93Lmhpc3RvcnkgfHwge30sXG4gICAgciA9IHdpbmRvdy5kb2N1bWVudDtcbiAgdmFyIG8gPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICB2YXIgbjtcbiAgICAgIHdpbmRvdy5DdXN0b21FdmVudFxuICAgICAgICA/IChuID0gbmV3IEN1c3RvbUV2ZW50KGUsIHtcbiAgICAgICAgICAgIGRldGFpbDogdCxcbiAgICAgICAgICB9KSlcbiAgICAgICAgOiAoKG4gPSByLmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJykpLmluaXRFdmVudChlLCAhMSwgITApLFxuICAgICAgICAgIChuLmRldGFpbCA9IHQpKSxcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobik7XG4gICAgfSxcbiAgICBpID0gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIGUgJiYgJ3N0cmluZycgPT0gdHlwZW9mIGVcbiAgICAgICAgPyBlLnJlcGxhY2UoL14oaHR0cHM/Oik/XFwvXFwvLywgJycpLnJlcGxhY2UoL1xcPy4qJC8sICcnKVxuICAgICAgICA6ICcnO1xuICAgIH0sXG4gICAgYSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0ID0gbltlXTtcbiAgICAgICdmdW5jdGlvbicgPT0gdHlwZW9mIHQgJiZcbiAgICAgICAgKChuW2VdID0gZnVuY3Rpb24oZSwgciwgYSkge1xuICAgICAgICAgIHZhciBzID0gbG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIGMgPSB0LmNhbGwobiwgZSwgciwgYSk7XG4gICAgICAgICAgaWYgKCFhIHx8ICdzdHJpbmcnICE9IHR5cGVvZiBhKSByZXR1cm4gYztcbiAgICAgICAgICBpZiAoYSA9PT0gcykgcmV0dXJuIGM7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1ID0gcy5zcGxpdCgnIycpLFxuICAgICAgICAgICAgICBsID0gYS5zcGxpdCgnIycpLFxuICAgICAgICAgICAgICBmID0gaSh1WzBdKSxcbiAgICAgICAgICAgICAgZCA9IGkobFswXSksXG4gICAgICAgICAgICAgIHAgPSB1WzFdICYmIHVbMV0ucmVwbGFjZSgvXlxcLz8oLiopLywgJyQxJyksXG4gICAgICAgICAgICAgIGggPSBsWzFdICYmIGxbMV0ucmVwbGFjZSgvXlxcLz8oLiopLywgJyQxJyk7XG4gICAgICAgICAgICBmICE9PSBkXG4gICAgICAgICAgICAgID8gbygnaGlzdG9yeXN0YXRlY2hhbmdlJywgZClcbiAgICAgICAgICAgICAgOiBwICE9PSBoICYmIG8oJ2hpc3RvcnlzdGF0ZWNoYW5nZScsIGgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH0pLFxuICAgICAgICAobltlXS50b1N0cmluZyA9IGUgKyAnKCkgeyBbbmF0aXZlIGNvZGVdIH0nKSk7XG4gICAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGEoJ3B1c2hTdGF0ZScpLCBhKCdyZXBsYXRlU3RhdGUnKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsdWdpbl91Y3BhcmFtKGNvbmZpZykge1xuICAvLyAxMlxuXG4gIHZhciByID0gY29uZmlnLmVudjtcbiAgdmFyIG8gPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgaWYgKFxuICAgICAgKCh0ID0gdCB8fCB7fSksXG4gICAgICAtMSAhPT0gW3IuQlJPV1NFUiwgci5XRUVYXS5pbmRleE9mKGUuZW52KSAmJlxuICAgICAgICB0LnBhcmFtcyAmJlxuICAgICAgICAnc3RyaW5nJyA9PSB0eXBlb2YgdC5wYXJhbXMpXG4gICAgKSB7XG4gICAgICBlLmxvZ2dlci5pbmZvKCd3cGt1Y3BhcmFtUGx1Z2lu5bey5byA5ZCvJyk7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgbiA9IHQucGFyYW1zLCBvID0gWydwcicsICd2ZScsICdvcycsICdmcicsICdudyddLCBpID0gMDtcbiAgICAgICAgaSA8IDU7XG4gICAgICAgIGkrK1xuICAgICAgKSB7XG4gICAgICAgIHZhciBhID0gb1tpXTtcbiAgICAgICAgLTEgPT09IG4uaW5kZXhPZihhKSAmJiAobiArPSBhKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdWNhcGkuYml6LnVjcGFyYW1zKHtcbiAgICAgICAgICBwYXJhbXM6IG4sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgZS51Y19wYXJhbSA9IHQgfHwgJyc7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgIGUubG9nZ2VyLmVycm9yKCdnZXQgdWNfcGFyYW1fc3RyIGVycm9yOiAnLCB0KSwgKGUudWNfcGFyYW1fc3RyID0gbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBvLnByb3RvdHlwZS5wbHVnaW5JZCA9ICd1Y3BhcmFtJztcbiAgcmV0dXJuIG87XG59XG4iLCJpbXBvcnQgeyB1dGlsc1Rvb2wgfSBmcm9tICcuL3V0aWxzVG9vbCc7XG5pbXBvcnQgeyBnZXJyb3IsIGFwaSwgcGVyZiwgdWNwYXJhbSwgZmxvdyB9IGZyb20gJy4uL3BsdWdpbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29yZShjb25maWcpIHtcbiAgdmFyIHIgPSB1dGlsc1Rvb2woKTtcbiAgdmFyIG8gPSBjb25maWc7XG4gIHZhciBpID0gby5weDtcbiAgdmFyIGEgPSBvLmNhdGVnb3J5O1xuICBmdW5jdGlvbiBzKGUpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIHMpKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gbmV3IHMoZSk7XG4gICAgfVxuICAgIGUgPSBlIHx8IHt9O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLl9pbml0ID0gITE7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMudG9vbEtpdCA9IHIoZSk7XG4gICAgaWYgKGUuYWRkciAmJiB0eXBlb2YgZS5hZGRyID09ICdvYmplY3QnKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnRvb2xLaXQuZXh0ZW5kKG8ucHguYWRkciwgZS5hZGRyIHx8IHt9KTtcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMubG9nZ2VyID0gdGhpcy50b29sS2l0LmxvZ2dlcjtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5kZWJ1ZyA9IGUuZGVidWcgfHwgITE7XG5cbiAgICAhMCA9PT0gZS5kZWJ1ZyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5sb2dnZXIud2FybignW3dwa10gbm93IGluIGRlYnVnIG1vZGUsIHlvdSBjYW4gc2VlIGxvZyBkZXRhaWxzJyk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuX3BsdWdpbnMgPSBlLnBsdWdpbnMgfHwgW107XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuYmlkID0gZS5iaWQ7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuY2lkID0gZS5jaWQ7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMudWlkID0gZS51aWQ7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMucmVsID0gZS5yZWw7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuc3BhID0gZS5zcGEgfHwgITE7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuZGVsYXkgPSAhMSAhPT0gZS5kZWxheTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5jbHVzdGVyID0gZS5jbHVzdGVyIHx8ICdjbic7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuc2FtcGxlUmF0ZSA9IGUuc2FtcGxlUmF0ZTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5pZ25vcmVTY3JpcHRFcnJvciA9ICExICE9PSBlLmlnbm9yZVNjcmlwdEVycm9yO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLm9ubHlDdXN0b20gPSBlLm9ubHlDdXN0b20gfHwgITE7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuYmVmb3JlU2VuZCA9IGUuYmVmb3JlU2VuZCB8fCBudWxsO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmNoZWNrSGlkZGVuID0gITEgIT09IGUuY2hlY2tIaWRkZW47XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuX3dhaXRpbmdRdWV1ZSA9IFtdO1xuICB9XG4gIGZ1bmN0aW9uIGMoZSkge1xuICAgIHZhciB0ID0gaS5jb25mQWRkcltlLmNsdXN0ZXIgKyAoZS5pc0h0dHBzID8gJ19odHRwcycgOiAnJyldLFxuICAgICAgbiA9IGkuc2lnbktleTtcbiAgICAoZS5fc3RhcnRUaW1lID0gRGF0ZS5ub3coKSksXG4gICAgICAoZS5fZHlpbmcgPSAhMCksXG4gICAgICBlLnRvb2xLaXQuZHluYW1pY0NvbmYoZS5iaWQsIGUuVkVSU0lPTiwgdCwgbiwgZnVuY3Rpb24odCkge1xuICAgICAgICAoZS5fZHlpbmcgPSAhMSksIChlLl9keUNvbmYgPSB0KSwgZS5sb2dnZXIud2FybignamNvbmZpZyBjb21lIGJhY2snKTtcbiAgICAgIH0pO1xuICB9XG4gIHMucHJvdG90eXBlID0ge1xuICAgIFZFUlNJT046ICcwLjYuMicsXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oZSkge1xuICAgICAgKHRoaXMuZW52ID0gZS5lbnYpLFxuICAgICAgICBlLnJvb3QubG9jYXRpb24gJiZcbiAgICAgICAgICAtMSAhPT0gZS5yb290LmxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCd3cGtSZXBvcnRlckRlYnVnPXRydWUnKSAmJlxuICAgICAgICAgICh0aGlzLmRlYnVnID0gITApLFxuICAgICAgICAodGhpcy5zZW5kID0gZS5zZW5kKSxcbiAgICAgICAgKHRoaXMuZ2V0V2lkID0gZS5nZXRXaWQpLFxuICAgICAgICAodGhpcy5pc0h0dHBzID0gZS5pc0h0dHBzKSxcbiAgICAgICAgZS5iaW5kVW5sb2FkRXZlbnQodGhpcyk7XG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5pdDtcbiAgICB9LFxuICAgIHNldENvbmZpZzogZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIHRoaXMudG9vbEtpdC5pc09iamVjdChlKSAmJiB0aGlzLnRvb2xLaXQuZXh0ZW5kKHRoaXMsIGUpLCB0aGlzO1xuICAgIH0sXG4gICAgZ2V0Q29uZmlnOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH0sXG4gICAgcmVwb3J0OiBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoXG4gICAgICAgICgnc3RyaW5nJyA9PSB0eXBlb2YgZSAmJlxuICAgICAgICAgIChlID0ge1xuICAgICAgICAgICAgY2F0ZWdvcnk6IGEuSlNFUlIsXG4gICAgICAgICAgICBtc2c6IGUsXG4gICAgICAgICAgfSksXG4gICAgICAgIGUuc2FtcGxlUmF0ZSB8fCAoZS5zYW1wbGVSYXRlID0gMSksXG4gICAgICAgIHRoaXMudG9vbEtpdC5jYW5SZXBvcnQoZS5zYW1wbGVSYXRlIHx8IHRoaXMuc2FtcGxlUmF0ZSkpXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xuICAgICAgICAgIHZhciB0O1xuICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB0aGlzLmJlZm9yZVNlbmQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHQgPSB0aGlzLmJlZm9yZVNlbmQoZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdleGVjIGJlZm9yZVNlbmQgZmFpbGVkIGZvcjonLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghMSA9PT0gdClcbiAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5sb2dnZXIud2FybignYmVmb3JlU2VuZCBmdW5jIHJldHVybiBmYWxzZScpO1xuICAgICAgICAgICAgJ29iamVjdCcgPT0gdHlwZW9mIHQgJiYgKGUgPSB0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG4gPSB0aGlzLnRvb2xLaXQuZ2V0TWV0YXMoKSxcbiAgICAgICAgICAgIHIgPSBlLmJpZCB8fCB0aGlzLmJpZCB8fCBuLndwa0JpZCxcbiAgICAgICAgICAgIG8gPSBlLmNpZCB8fCB0aGlzLmNpZCB8fCBuLndwa0NpZCxcbiAgICAgICAgICAgIHMgPSBlLnJlbCB8fCB0aGlzLnJlbCB8fCBuLndwa1JlbDtcbiAgICAgICAgICB0aGlzLnRvb2xLaXQuaXNGdW5jdGlvbihzKSAmJiAocyA9IHMoKSk7XG4gICAgICAgICAgdmFyIHUgPSBlLnVpZCB8fCB0aGlzLnVpZDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAodGhpcy50b29sS2l0LmlzRnVuY3Rpb24odSkgJiYgKHUgPSB1KCkpLFxuICAgICAgICAgICAgdSB8fCAodSA9IHRoaXMuZ2V0V2lkKCkpLFxuICAgICAgICAgICAgdGhpcy50b29sS2l0LmV4dGVuZChlLCB7XG4gICAgICAgICAgICAgIHdfYmlkOiByLFxuICAgICAgICAgICAgICB3X2NpZDogbyxcbiAgICAgICAgICAgICAgd19yZWw6IHMsXG4gICAgICAgICAgICAgIHdfc3BhOiB0aGlzLnNwYSxcbiAgICAgICAgICAgICAgd190bTogdGhpcy50b29sS2l0LnRpbWVzdGFtcCgpLFxuICAgICAgICAgICAgICB3X2NudDogMSxcbiAgICAgICAgICAgICAgdWlkOiB1LFxuICAgICAgICAgICAgICB0eXBlOiB0aGlzLnRvb2xLaXQuY2F0ZWdvcnlUb1R5cGUoZS5jYXRlZ29yeSksXG4gICAgICAgICAgICAgIHNka192ZXI6IHRoaXMuVkVSU0lPTixcbiAgICAgICAgICAgICAgbG9nX3NyYzogJ2pzc2RrJyxcbiAgICAgICAgICAgICAgdWNfcGFyYW06IHRoaXMudWNfcGFyYW0gfHwgJycsXG4gICAgICAgICAgICAgIHdpZDogdGhpcy53aWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMuX2R5Q29uZiAmJiBEYXRlLm5vdygpIDwgdGhpcy5fZHlDb25mLmV4cGlyZUF0KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdmFyIGwgPVxuICAgICAgICAgICAgICB2b2lkIDAgIT09IHRoaXMuX2R5Q29uZltlLnR5cGVdXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9keUNvbmZbZS50eXBlXVxuICAgICAgICAgICAgICAgIDogdGhpcy5fZHlDb25mLmFsbDtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGwgJiYgIXRoaXMudG9vbEtpdC5jYW5SZXBvcnQobCkpXG4gICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMubG9nZ2VyLndhcm4oXG4gICAgICAgICAgICAgICAgJ+eUseS6juOAjOWKqOaAgemFjee9ruOAjemHh+agt+eOh+aOp+WItu+8jOacrOadoeaXpeW/l+acgOe7iOacquS4iuaKpe+8jOexu+WeizogJyxcbiAgICAgICAgICAgICAgICBlLnR5cGUsXG4gICAgICAgICAgICAgICAgJyDph4fmoLfnjoc6ICcsXG4gICAgICAgICAgICAgICAgbCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICF0aGlzLl9keWluZyAmJlxuICAgICAgICAgICAgICBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnRUaW1lID49IDE4ZTUgJiZcbiAgICAgICAgICAgICAgKHRoaXMubG9nZ2VyLndhcm4oJ3N5bmNpbmcgZHluYW1pYyBjb25maWcnKSwgYyh0aGlzKSk7XG4gICAgICAgICAgdmFyIGY6IGFueSA9IHtcbiAgICAgICAgICAgIGFwcDogcixcbiAgICAgICAgICAgIGNwOiAnbm9uZScsXG4gICAgICAgICAgICBkZTogNCxcbiAgICAgICAgICAgIHNlcTogdGhpcy50b29sS2l0LmdlbmVyYXRlU2VxKCksXG4gICAgICAgICAgICB0bTogdGhpcy50b29sS2l0LnRpbWVzdGFtcCghMCksXG4gICAgICAgICAgICB1ZDogZS51aWQsXG4gICAgICAgICAgICB2ZXI6IGUud19yZWwsXG4gICAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgICBzdmVyOiBlLnNka192ZXIsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBmLnNpZ24gPSB0aGlzLnRvb2xLaXQuY29tcHV0ZVNpZ24oZiwgaS5zaWduS2V5KTtcbiAgICAgICAgICB2YXIgZCA9IGkuYWRkclt0aGlzLmNsdXN0ZXIgKyAodGhpcy5pc0h0dHBzID8gJ19odHRwcycgOiAnJyldLFxuICAgICAgICAgICAgcCA9IHRoaXMudG9vbEtpdC5vYmpUb1F1ZXJ5U3RyaW5nKGYpO1xuICAgICAgICAgIHRoaXMudG9vbEtpdC5jdXRTdHIoZSwgWydjMScsICdjMicsICdjMycsICdjNCcsICdjNSddLCAxMjgpLFxuICAgICAgICAgICAgdGhpcy5zZW5kKGQsIHAsIGUpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLl93YWl0aW5nUXVldWUucHVzaChlKSxcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ3Nka+acquWujOaIkOWIneWni+WMlu+8jOaVsOaNruW3sue8k+WtmCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oXG4gICAgICAgICfnlLHkuo7ph4fmoLfnjofmjqfliLbvvIzmnKzmnaHml6Xlv5fmnIDnu4jmnKrkuIrmiqXvvIzph4fmoLfnjoc6ICcsXG4gICAgICAgIGUuc2FtcGxlUmF0ZSB8fCB0aGlzLnNhbXBsZVJhdGUsXG4gICAgICApO1xuICAgIH0sXG4gICAgcmVwb3J0RmxvdzogZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGUgPSBlIHx8IHt9KSxcbiAgICAgICAgdGhpcy5yZXBvcnQoXG4gICAgICAgICAgdGhpcy50b29sS2l0LmV4dGVuZChlIHx8IHt9LCB7XG4gICAgICAgICAgICBjYXRlZ29yeTogYS5GTE9XLFxuICAgICAgICAgICAgc2FtcGxlUmF0ZTogMSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9LFxuICAgIHJlcG9ydEVycm9yOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy50b29sS2l0LmlzRXJyb3IoZSlcbiAgICAgICAgPyAoKCh0ID0gdCB8fCB7fSkuY2F0ZWdvcnkgPSBhLkpTRVJSKSxcbiAgICAgICAgICAodC53X21zZyA9IGUudG9TdHJpbmcoKSksXG4gICAgICAgICAgKHQuc3RhY2sgPSB0aGlzLnRvb2xLaXQucGFyc2VFcnJvclN0YWNrKGUpKSxcbiAgICAgICAgICAodC53X2ZpbGUgPSBlLmZpbGVuYW1lIHx8ICcnKSxcbiAgICAgICAgICAodC53X2xpbmUgPSBlLmxpbmVubyB8fCAnJyksXG4gICAgICAgICAgKHQud19jb2wgPSBlLmNvbG5vIHx8ICcnKSxcbiAgICAgICAgICB0aGlzLnJlcG9ydCh0KSxcbiAgICAgICAgICB0aGlzKVxuICAgICAgICA6IHRoaXMucmVwb3J0KGUsIHQpO1xuICAgIH0sXG4gICAgcmVwb3J0QXBpRXJyb3I6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgJiZcbiAgICAgICAgICAodGhpcy50b29sS2l0LmlzT2JqZWN0KGUucXVlcnlTdHJpbmcpICYmXG4gICAgICAgICAgICAoZS5xdWVyeVN0cmluZyA9IHRoaXMudG9vbEtpdC5vYmpUb1F1ZXJ5U3RyaW5nKGUucXVlcnlTdHJpbmcpKSxcbiAgICAgICAgICB0aGlzLnJlcG9ydChcbiAgICAgICAgICAgIHRoaXMudG9vbEtpdC5leHRlbmQoXG4gICAgICAgICAgICAgIHQgfHwge30sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtc2c6IGUubXNnIHx8ICcnLFxuICAgICAgICAgICAgICAgIHdfcmVzOiBlLnVybCxcbiAgICAgICAgICAgICAgICB3X21ldGhvZDogZS5tZXRob2QsXG4gICAgICAgICAgICAgICAgd19wYXJhbTogZS5xdWVyeVN0cmluZyxcbiAgICAgICAgICAgICAgICB3X2JvZHk6IEpTT04uc3RyaW5naWZ5KGUuYm9keSksXG4gICAgICAgICAgICAgICAgd19yZXNwOiBlLnJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIHdfcmM6IGUuc3RhdHVzLFxuICAgICAgICAgICAgICAgIHdfcnQ6IGUuc3BlbnQgfHwgJycsXG4gICAgICAgICAgICAgICAgYzE6IGUuYzEsXG4gICAgICAgICAgICAgICAgYzI6IGUuYzIsXG4gICAgICAgICAgICAgICAgYzM6IGUuYzMsXG4gICAgICAgICAgICAgICAgYzQ6IGUuYzQsXG4gICAgICAgICAgICAgICAgYzU6IGUuYzUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogYS5BUEksXG4gICAgICAgICAgICAgICAgd190eXBlOiAxNixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKSksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSxcbiAgICBkaWFnbm9zZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlYWR5KClcbiAgICAgICAgPyB0aGlzLmJpZFxuICAgICAgICAgID8gKHRoaXMuc2FtcGxlUmF0ZSB8fFxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKFxuICAgICAgICAgICAgICAgICfmsqHmnInorr7nva7ph4fmoLfnjoflj4LmlbBzYW1wbGVSYXRl77yM5bCG5L2/55So6buY6K6k6YeH5qC3546HJyxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRoaXMucmVwb3J0KHtcbiAgICAgICAgICAgICAgX2RpYWdub3NlOiAhMCxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIDogdGhpcy5sb2dnZXIud2Fybign57y65bCRYmlk5Y+C5pWwLOivt+ehruiupOaYr+WQpuW3suato+ehruiuvue9ricpXG4gICAgICAgIDogdGhpcy5sb2dnZXIud2Fybignd3BrUmVwb3J0ZXLlsJrmnKrliJ3lp4vljJbvvIzor7fnoa7kv53lt7LosIPnlKggaW5zdGFsbCDmlrnms5UnKTtcbiAgICB9LFxuICAgIGFkZFBsdWdpbjogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5fcGx1Z2lucy5wdXNoKFtlLCB0XSksXG4gICAgICAgICdmdW5jdGlvbicgPT0gdHlwZW9mIGUgJiZcbiAgICAgICAgICB0aGlzLl9pbml0ICYmXG4gICAgICAgICAgZS5hcHBseSh0aGlzLCBbdGhpcywgdCwgdGhpcy5nZXRDb25maWcoKV0pLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0sXG4gICAgaW5zdGFsbDogZnVuY3Rpb24oKSB7XG4gICAgICBjKHRoaXMpO1xuICAgICAgdmFyIGUgPSBmbG93LmFwcGx5KHRoaXMsIFt0aGlzLmdldENvbmZpZygpXSk7XG4gICAgICB2YXIgdCA9IHRoaXMuX3BsdWdpbnMubGVuZ3RoO1xuICAgICAgdmFyIHIgPSBmYWxzZTtcbiAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdDsgbysrKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5fcGx1Z2luc1tvXTtcbiAgICAgICAgdmFyIGEgPSBpWzBdOyAvLyDlh73mlbBcbiAgICAgICAgdmFyIHMgPSBpWzFdOyAvLyDphY3nva5cblxuICAgICAgICBhICsgJycgPT0gZSArICcnICYmIChyID0gITApLFxuICAgICAgICAgIGEuYXBwbHkodGhpcywgW3RoaXMsIHMsIHRoaXMuZ2V0Q29uZmlnKCldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgICh0aGlzLndpZCA9IHRoaXMuZ2V0V2lkKCkpLFxuICAgICAgICAodGhpcy5fc2lkID0gdGhpcy50b29sS2l0LnV1aWQoKSksXG4gICAgICAgICh0aGlzLl9pbml0ID0gITApLFxuICAgICAgICAoMCAhPT0gdCAmJiByKSB8fFxuICAgICAgICAgICh0aGlzLnRvb2xLaXQubG9nZ2VyLmluZm8oJ+ayoeacieiuvue9rkZsb3fvvIzlhoXnva7lvIDlkK8nKSxcbiAgICAgICAgICB0aGlzLmFkZFBsdWdpbihlKSksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSxcbiAgICBpbnN0YWxsQWxsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlID0gW1xuICAgICAgICBbXG4gICAgICAgICAgZ2Vycm9yLmFwcGx5KHRoaXMsIFt0aGlzLmdldENvbmZpZygpXSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzRXJyOiAhMCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBbYXBpLmFwcGx5KHRoaXMsIFt0aGlzLmdldENvbmZpZygpXSldLFxuICAgICAgICBbcGVyZl0sXG4gICAgICAgIFtmbG93LmFwcGx5KHRoaXMsIFt0aGlzLmdldENvbmZpZygpXSldLFxuICAgICAgICBbXG4gICAgICAgICAgdWNwYXJhbSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXJhbXM6ICdwcnZlb3Nmcm53JyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgXTsgLy8g6buY6K6k5a6J6KOFIHBsdWdpbnMg5LiL55qE5omA5pyJ5o+S5Lu2XG4gICAgICB2YXIgdCA9IHRoaXMuX3BsdWdpbnMubGVuZ3RoO1xuICAgICAgaWYgKDAgPT09IHQpIHRoaXMuX3BsdWdpbnMgPSBlO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciByOiBhbnkgPSBbXTtcbiAgICAgICAgdmFyIG8gPSBlLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvOyBpKyspIHtcbiAgICAgICAgICB2YXIgYTogYW55ID0gZVtpXTtcbiAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHQ7IHMrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBhWzBdLnByb3RvdHlwZS5wbHVnaW5JZCA9PT0gdGhpcy5fcGx1Z2luc1tzXVswXS5wcm90b3R5cGUucGx1Z2luSWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyDlpoLmnpzlt7Lnu4/lrZjlnKjmj5Lku7bkuobvvIzlsLHkuI3lronoo4XkuoZcbiAgICAgICAgICAgICAgYSA9IHRoaXMuX3BsdWdpbnNbc107XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByLnB1c2goYSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGx1Z2lucyA9IHI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YWxsKCk7XG4gICAgfSxcbiAgICB1bmluc3RhbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9wbHVnaW5zID0gW10pLCAodGhpcy5faW5pdCA9ICExKSwgdGhpcztcbiAgICB9LFxuICB9O1xuICByZXR1cm4gcztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlbnZDaGVjaygpIHtcbiAgdmFyIG4sXG4gICAgcixcbiAgICBvOiBhbnkgPSB7fTtcbiAgZnVuY3Rpb24gaSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbiAgfVxuICBmdW5jdGlvbiBhKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG4gIH1cbiAgZnVuY3Rpb24gcyhlKSB7XG4gICAgaWYgKG4gPT09IHNldFRpbWVvdXQpIHJldHVybiBzZXRUaW1lb3V0KGUsIDApO1xuICAgIGlmICgobiA9PT0gaSB8fCAhbikgJiYgc2V0VGltZW91dClcbiAgICAgIHJldHVybiAobiA9IHNldFRpbWVvdXQpLCBzZXRUaW1lb3V0KGUsIDApO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbihlLCAwKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gbi5jYWxsKG51bGwsIGUsIDApO1xuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBuLmNhbGwodGhpcywgZSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIEB0cy1pZ25vcmVcbiAgIShmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgbiA9ICdmdW5jdGlvbicgPT0gdHlwZW9mIHNldFRpbWVvdXQgPyBzZXRUaW1lb3V0IDogaTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0gaTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHIgPSAnZnVuY3Rpb24nID09IHR5cGVvZiBjbGVhclRpbWVvdXQgPyBjbGVhclRpbWVvdXQgOiBhO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHIgPSBhO1xuICAgIH1cbiAgfSkoKTtcbiAgdmFyIGMsXG4gICAgdTogYW55ID0gW10sXG4gICAgbCA9ICExLFxuICAgIGYgPSAtMTtcbiAgZnVuY3Rpb24gZCgpIHtcbiAgICBsICYmXG4gICAgICBjICYmXG4gICAgICAoKGwgPSAhMSksIGMubGVuZ3RoID8gKHUgPSBjLmNvbmNhdCh1KSkgOiAoZiA9IC0xKSwgdS5sZW5ndGggJiYgcCgpKTtcbiAgfVxuICBmdW5jdGlvbiBwKCkge1xuICAgIGlmICghbCkge1xuICAgICAgdmFyIGUgPSBzKGQpO1xuICAgICAgbCA9ICEwO1xuICAgICAgZm9yICh2YXIgdCA9IHUubGVuZ3RoOyB0OyApIHtcbiAgICAgICAgZm9yIChjID0gdSwgdSA9IFtdOyArK2YgPCB0OyApIGMgJiYgY1tmXS5ydW4oKTtcbiAgICAgICAgKGYgPSAtMSksICh0ID0gdS5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgKGMgPSBudWxsKSxcbiAgICAgICAgKGwgPSAhMSksXG4gICAgICAgIChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKHIgPT09IGNsZWFyVGltZW91dCkgcmV0dXJuIGNsZWFyVGltZW91dChlKTtcbiAgICAgICAgICBpZiAoKHIgPT09IGEgfHwgIXIpICYmIGNsZWFyVGltZW91dClcbiAgICAgICAgICAgIHJldHVybiAociA9IGNsZWFyVGltZW91dCksIGNsZWFyVGltZW91dChlKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcihlKTtcbiAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gci5jYWxsKG51bGwsIGUpO1xuICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHJldHVybiByLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KShlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaChlLCB0KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgICh0aGlzLmZ1biA9IGUpLCAodGhpcy5hcnJheSA9IHQpO1xuICB9XG4gIGZ1bmN0aW9uIGcoKSB7fVxuICAoby5uZXh0VGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdCA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxuICAgICAgZm9yICh2YXIgbiA9IDE7IG4gPCBhcmd1bWVudHMubGVuZ3RoOyBuKyspIHRbbiAtIDFdID0gYXJndW1lbnRzW25dO1xuICAgIHUucHVzaChuZXcgaChlLCB0KSksIDEgIT09IHUubGVuZ3RoIHx8IGwgfHwgcyhwKTtcbiAgfSksXG4gICAgKGgucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG4gICAgfSksXG4gICAgKG8udGl0bGUgPSAnYnJvd3NlcicpLFxuICAgIChvLmJyb3dzZXIgPSAhMCksXG4gICAgKG8uZW52ID0ge30pLFxuICAgIChvLmFyZ3YgPSBbXSksXG4gICAgKG8udmVyc2lvbiA9ICcnKSxcbiAgICAoby52ZXJzaW9ucyA9IHt9KSxcbiAgICAoby5vbiA9IGcpLFxuICAgIChvLmFkZExpc3RlbmVyID0gZyksXG4gICAgKG8ub25jZSA9IGcpLFxuICAgIChvLm9mZiA9IGcpLFxuICAgIChvLnJlbW92ZUxpc3RlbmVyID0gZyksXG4gICAgKG8ucmVtb3ZlQWxsTGlzdGVuZXJzID0gZyksXG4gICAgKG8uZW1pdCA9IGcpLFxuICAgIChvLnByZXBlbmRMaXN0ZW5lciA9IGcpLFxuICAgIChvLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBnKSxcbiAgICAoby5saXN0ZW5lcnMgPSBmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSksXG4gICAgKG8uYmluZGluZyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9KSxcbiAgICAoby5jd2QgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAnLyc7XG4gICAgfSksXG4gICAgKG8uY2hkaXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH0pLFxuICAgIChvLnVtYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgcmV0dXJuIG87XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2VudkNoZWNrJztcbmV4cG9ydCAqIGZyb20gJy4vbjE4JztcbmV4cG9ydCAqIGZyb20gJy4vc3RyaW5nVG9vbHMnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlsc1Rvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlJztcbiIsImV4cG9ydCBmdW5jdGlvbiBuMTgoY29uZmlnKSB7XG4gIHZhciByID0gY29uZmlnO1xuICB2YXIgbzogYW55ID1cbiAgICAndW5kZWZpbmVkJyAhPSB0eXBlb2Ygd2luZG93XG4gICAgICA/IHdpbmRvd1xuICAgICAgOiAndW5kZWZpbmVkJyAhPSB0eXBlb2Ygc2VsZlxuICAgICAgPyBzZWxmXG4gICAgICA6IHt9O1xuICB2YXIgaSA9IG8uZG9jdW1lbnQ7XG4gIHZhciBhID0gby5uYXZpZ2F0b3I7XG4gIHZhciBzID0gby5sb2NhdGlvbjtcbiAgdmFyIGMgPSB7fTtcbiAgdmFyIHUgPSBmdW5jdGlvbihlLCB0LCBuLCByLCBvKSB7XG4gICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgIHZhciBhLCBzO1xuICAgICAgICBpZiAoIWNbZV0pIHtcbiAgICAgICAgICBhID0gbmV3IFJlZ0V4cChlICsgJz0oW147XSspJyk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHMgPSBhLmV4ZWMoaS5jb29raWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzICYmIChjW2VdID0gc1sxXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNbZV07XG4gICAgICB9XG4gICAgICB2YXIgdSA9IGUgKyAnPScgKyB0O1xuICAgICAgciAmJiAodSArPSAnOyBkb21haW49JyArIHIpLFxuICAgICAgICBvICYmICh1ICs9ICc7IHBhdGg9JyArIG8pLFxuICAgICAgICBuICYmICh1ICs9ICc7IG1heC1hZ2U9JyArIG4pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIChpLmNvb2tpZSA9IHUpLCAhIWkuY29va2llO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9XG4gICAgfSxcbiAgICBsID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSB3aW5kb3csXG4gICAgICAgIG4gPVxuICAgICAgICAgICd3cGtpbWdyZXBvcnRlcl8nICtcbiAgICAgICAgICArbmV3IERhdGUoKSArXG4gICAgICAgICAgJy5yJyArXG4gICAgICAgICAgTWF0aC5mbG9vcigxZTMgKiBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgciA9ICh0W25dID0gbmV3IEltYWdlKCkpO1xuICAgICAgKHIub25sb2FkID0gci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRbbl0gPSBudWxsO1xuICAgICAgfSksXG4gICAgICAgIChyLnNyYyA9IGUpO1xuICAgIH0sXG4gICAgZiA9IG51bGwsXG4gICAgZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNsZWFyVGltZW91dChmKSxcbiAgICAgICAgKGYgPSBudWxsKSxcbiAgICAgICAgKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IGUuX3dhaXRpbmdRdWV1ZTtcbiAgICAgICAgICBpZiAoZS5jaGVja0hpZGRlbiAmJiBpICYmIGkuaGlkZGVuKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgZS5sb2dnZXIud2Fybign5b2T5YmN6aG16Z2i5LiN5Y+v6KeB77yM5pel5b+X5pWw5o2u5bCG5Lii5byDOiAnLCB0KSxcbiAgICAgICAgICAgICAgdm9pZCAoZS5fd2FpdGluZ1F1ZXVlID0gW10pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIGlmIChhICYmIGEuc2VuZEJlYWNvbiAmJiBvLkJsb2IpIHtcbiAgICAgICAgICAgIHZhciBuLFxuICAgICAgICAgICAgICByLFxuICAgICAgICAgICAgICBzID0gKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0LCBuLCByID0gW10sIG8gPSBbXSwgaSA9IGUubGVuZ3RoLCBhID0gMDsgYSA8IGk7IGErKylcbiAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgIChuID0gZVthXS5jYXRlZ29yeSksIC0xID09PSBvLmluZGV4T2YobikgJiYgby5wdXNoKG4pO1xuICAgICAgICAgICAgICAgIHQgPSBvLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHQ7IHMrKykge1xuICAgICAgICAgICAgICAgICAgbiA9IG9bc107XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gW10sIHUgPSAwOyB1IDwgaTsgdSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gZVt1XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBsLmNhdGVnb3J5ID09PSBuICYmIGMucHVzaChsKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgIHJbc10gPSBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgICAgfSkodCksXG4gICAgICAgICAgICAgIGMgPSBzLmxlbmd0aDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHUsIGYgPSAwOyBmIDwgYzsgZisrKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICh1ID0gKG4gPSBzW2ZdKVswXS5fc2VydkFkZHIpLCAociA9IG4ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IHI7IGQrKylcbiAgICAgICAgICAgICAgICAgIChuW2RdLndfc2VuZF9tb2RlID0gJ3NlbmRiZWFjb24nKSxcbiAgICAgICAgICAgICAgICAgICAgKG5bZF0uX3NlcnZBZGRyID0gdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgKG5bZF0uX2hhc2ggPSB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAobltkXSA9IGUudG9vbEtpdC5vYmpUb0pzb25TdHJpbmcobltkXSkpO1xuICAgICAgICAgICAgICAgIHZhciBwID0gZW5jb2RlVVJJQ29tcG9uZW50KG4uam9pbignXFxuJykpO1xuICAgICAgICAgICAgICAgIGEuc2VuZEJlYWNvbih1LCBwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlLl93YWl0aW5nUXVldWUgPSBbXTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGgsIGcsIHcgPSAwOyB3IDwgdC5sZW5ndGg7IHcrKylcbiAgICAgICAgICAgICAgKGcgPSAoaCA9IHRbd10pLl9zZXJ2QWRkciksXG4gICAgICAgICAgICAgICAgKGgud19zZW5kX21vZGUgPSAnaW1nc3JjJyksXG4gICAgICAgICAgICAgICAgKGguX3NlcnZBZGRyID0gdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAoaC5faGFzaCA9IHZvaWQgMCksXG4gICAgICAgICAgICAgICAgKGggPSBlbmNvZGVVUklDb21wb25lbnQoZS50b29sS2l0Lm9ialRvSnNvblN0cmluZyhoKSkpLFxuICAgICAgICAgICAgICAgIGwoZyArICcmZGF0YT0nICsgaCk7XG4gICAgICAgICAgICBlLl93YWl0aW5nUXVldWUgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKGUpO1xuICAgIH0sXG4gICAgcCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGQoZSk7XG4gICAgfTtcbiAgcmV0dXJuIHtcbiAgICBlbnY6IHIuZW52LkJST1dTRVIsXG4gICAgcm9vdDogbyxcbiAgICBpc0h0dHBzOiBzLnByb3RvY29sID09PSByLmh0dHAucHJvdG9jb2xzLkhUVFBTLFxuICAgIHNlbmQ6IGZ1bmN0aW9uKGUsIHQsIG4pIHtcbiAgICAgIHZhciBjOiBhbnkgPSB0aGlzO1xuXG4gICAgICBpZiAoYy50b29sS2l0LmlzVTRIQShjLm9ubHlDdXN0b20pICYmIG4uY2F0ZWdvcnkgPCAxMDApXG4gICAgICAgIGMubG9nZ2VyLndhcm4oJ+WcqHU05YaF5qC4546v5aKD77yM5bGP6JS96Z2e6Ieq5a6a5LmJ55qE5omA5pyJ6Ieq5Yqo5omT54K5Jyk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIHUgPSBjLnRvb2xLaXQuZXh0ZW5kKFxuICAgICAgICAgIChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoIWkpIHJldHVybiB7fTtcbiAgICAgICAgICAgIHZhciB0LFxuICAgICAgICAgICAgICBuID0gaS5yZWZlcnJlcjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIG4gJiZcbiAgICAgICAgICAgICAgICAtMSAhPT0gbi5pbmRleE9mKCdcIicpICYmXG4gICAgICAgICAgICAgICAgKG4gPSBlbmNvZGVVUklDb21wb25lbnQoaS5yZWZlcnJlcikpLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd191cmw6IHMub3JpZ2luICsgcy5wYXRobmFtZSxcbiAgICAgICAgICAgICAgICB3X3F1ZXJ5OiBzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICB3X3JlZjogcy5oYXNoLnN1YnN0cmluZygxKSxcbiAgICAgICAgICAgICAgICB3X3RpdGxlOiBpLnRpdGxlLFxuICAgICAgICAgICAgICAgIHVhOiBhLnVzZXJBZ2VudCxcbiAgICAgICAgICAgICAgICByZWZlcnJlcjogbixcbiAgICAgICAgICAgICAgICBkc3Bfdzogby5zY3JlZW4ud2lkdGgsXG4gICAgICAgICAgICAgICAgZHNwX2g6IG8uc2NyZWVuLmhlaWdodCxcbiAgICAgICAgICAgICAgICBuZXQ6XG4gICAgICAgICAgICAgICAgICAoKHQgPSBhLmNvbm5lY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgdCAmJiB0LnR5cGVcbiAgICAgICAgICAgICAgICAgICAgPyB0LnR5cGUgPT09IHIubmF2Q29ubi50eXBlcy5OT05FXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZGlzY29ubmVjdGVkJ1xuICAgICAgICAgICAgICAgICAgICAgIDogdC50eXBlID09PSByLm5hdkNvbm4udHlwZXMuQ0VMTFVMQVJcbiAgICAgICAgICAgICAgICAgICAgICA/IHQuZWZmZWN0aXZlVHlwZSA9PT0gci5uYXZDb25uLmVmZmVjdGl2ZVR5cGVzLlNMT1cyR1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnMmcnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHQuZWZmZWN0aXZlVHlwZVxuICAgICAgICAgICAgICAgICAgICAgIDogdC50eXBlXG4gICAgICAgICAgICAgICAgICAgIDogJycpLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pKGMuc3BhKSxcbiAgICAgICAgICBuLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdfZnJtaWQ6IGMuX3NpZCxcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGMubG9nZ2VyLndhcm4oJ2xvZ0RhdGEgdG8gc2VuZDogJywgZSwgdSksXG4gICAgICAgICAgKGUgKz0gJz93cGstaGVhZGVyPScgKyBlbmNvZGVVUklDb21wb25lbnQodCkpLFxuICAgICAgICAgIGMudWNfcGFyYW1fc3RyICYmIChlICs9ICcmdWNfcGFyYW1fc3RyPScgKyBjLnVjX3BhcmFtX3N0ciksXG4gICAgICAgICAgITAgPT09IG4uX2RpYWdub3NlKVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh1ID0gZW5jb2RlVVJJQ29tcG9uZW50KGMudG9vbEtpdC5vYmpUb0pzb25TdHJpbmcodSkpKSxcbiAgICAgICAgICAgIHZvaWQgd2luZG93Lm9wZW4oZSArICcmZGF0YT0nICsgdSlcbiAgICAgICAgICApO1xuICAgICAgICAodS5fc2VydkFkZHIgPSBlKSwgKHUuX2hhc2ggPSBjLnRvb2xLaXQuZ2VuQ29udGVudEhhc2godSkpO1xuICAgICAgICB2YXIgbCxcbiAgICAgICAgICBwLFxuICAgICAgICAgIGggPSBjLmRlbGF5ICYmIC0xICE9PSBbMSwgMiwgNF0uaW5kZXhPZih1LmNhdGVnb3J5KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IGUuX3dhaXRpbmdRdWV1ZSxcbiAgICAgICAgICAgICAgciA9IG4ubGVuZ3RoLFxuICAgICAgICAgICAgICBvID0gdC5yZWR1cGxpY2F0aW9uIHx8IGUucmVkdXBsaWNhdGlvbiB8fCAhMCxcbiAgICAgICAgICAgICAgaSA9ICEwO1xuICAgICAgICAgICAgaWYgKDEgPT09IHQuY2F0ZWdvcnkgJiYgbyAmJiAwICE9PSByKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGEsIHMgPSAwOyBzIDwgcjsgcysrKVxuICAgICAgICAgICAgICAgIGlmICgoYSA9IG5bc10pLl9oYXNoID09PSB0Ll9oYXNoKSB7XG4gICAgICAgICAgICAgICAgICBhLndfY250KyssIChpID0gITEpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpICYmIG4ucHVzaCh0KTtcbiAgICAgICAgICAgIH0gZWxzZSBuLnB1c2godCk7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICB9KShjLCB1KSB8fFxuICAgICAgICAgICFoXG4gICAgICAgIClcbiAgICAgICAgICAobCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZChjKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIChmID1cbiAgICAgICAgICAgICAgLTEgPT09IChwID0gaCA/IDNlMyA6IC0xKSA/IChsKCksIG51bGwpIDogc2V0VGltZW91dChsLCBwIHx8IDApKTtcbiAgICAgICAgZWxzZSBjLmxvZ2dlci53YXJuKCdsb2dEYXRh6KKr5ZCI5bm2OiAnLCB1KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFdpZDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB2YXIgZSA9IHUoci5zZGsuV0lEX0tFWSk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gZSB8fCAoKGUgPSB0aGlzLnRvb2xLaXQudXVpZCgpKSwgdShyLnNkay5XSURfS0VZLCBlLCAxNTU1MmUzKSksIGU7XG4gICAgfSxcbiAgICBiaW5kVW5sb2FkRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHdpbmRvdyAmJlxuICAgICAgICAod2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICAgICAgICA/IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAnYmVmb3JldW5sb2FkJyxcbiAgICAgICAgICAgICAgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHAoZSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICExLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogKHdpbmRvdyBhcyBhbnkpLmF0dGFjaEV2ZW50ICYmXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkuYXR0YWNoRXZlbnQoJ29uYmVmb3JldW5sb2FkJywgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICBwKGUpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH0sXG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9vbHMoKSB7XG5cdC8vIDdcbiBcblx0XHRmdW5jdGlvbiBpKGUsIHQpIHtcblx0XHRcdHZhciBuID0gKDY1NTM1ICYgZSkgKyAoNjU1MzUgJiB0KTtcblx0XHRcdHJldHVybiAoKChlID4+IDE2KSArICh0ID4+IDE2KSArIChuID4+IDE2KSkgPDwgMTYpIHwgKDY1NTM1ICYgbik7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIGEoZSwgdCwgbiwgciwgbywgYSkge1xuXHRcdFx0cmV0dXJuIGkoXG5cdFx0XHRcdChmdW5jdGlvbiAoZSwgdCkge1xuXHRcdFx0XHRcdHJldHVybiAoZSA8PCBvKSB8IChlID4+PiAoMzIgLSBvKSk7XG5cdFx0XHRcdH0pKGkoaSh0LCBlKSwgaShyLCBhKSkpLFxuXHRcdFx0XHRuLFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gcyhlLCB0LCBuLCByLCBvLCBpLCBzKSB7XG5cdFx0XHRyZXR1cm4gYSgodCAmIG4pIHwgKH50ICYgciksIGUsIHQsIG8sIGksIHMpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBjKGUsIHQsIG4sIHIsIG8sIGksIHMpIHtcblx0XHRcdHJldHVybiBhKCh0ICYgcikgfCAobiAmIH5yKSwgZSwgdCwgbywgaSwgcyk7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIHUoZSwgdCwgbiwgciwgbywgaSwgcykge1xuXHRcdFx0cmV0dXJuIGEodCBeIG4gXiByLCBlLCB0LCBvLCBpLCBzKTtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gbChlLCB0LCBuLCByLCBvLCBpLCBzKSB7XG5cdFx0XHRyZXR1cm4gYShuIF4gKHQgfCB+ciksIGUsIHQsIG8sIGksIHMpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBmKGUsIHQpIHtcblx0XHRcdHZhciBuLCByLCBvLCBhLCBmO1xuXHRcdFx0KGVbdCA+PiA1XSB8PSAxMjggPDwgdCAlIDMyKSwgKGVbMTQgKyAoKCh0ICsgNjQpID4+PiA5KSA8PCA0KV0gPSB0KTtcblx0XHRcdHZhciBkID0gMTczMjU4NDE5Myxcblx0XHRcdFx0cCA9IC0yNzE3MzM4NzksXG5cdFx0XHRcdGggPSAtMTczMjU4NDE5NCxcblx0XHRcdFx0ZyA9IDI3MTczMzg3ODtcblx0XHRcdGZvciAobiA9IDA7IG4gPCBlLmxlbmd0aDsgbiArPSAxNilcblx0XHRcdFx0KHAgPSBsKFxuXHRcdFx0XHRcdChwID0gbChcblx0XHRcdFx0XHRcdChwID0gbChcblx0XHRcdFx0XHRcdFx0KHAgPSBsKFxuXHRcdFx0XHRcdFx0XHRcdChwID0gdShcblx0XHRcdFx0XHRcdFx0XHRcdChwID0gdShcblx0XHRcdFx0XHRcdFx0XHRcdFx0KHAgPSB1KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdChwID0gdShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChwID0gYyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHAgPSBjKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChwID0gYyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChwID0gYyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHAgPSBzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChwID0gcyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChwID0gcyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHAgPSBzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChvID0gcCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGggPSBzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGEgPSBoKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChnID0gcyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGYgPSBnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGQgPSBzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChyID0gZCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC02ODA4NzY5MzYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW24gKyAxXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC0zODk1NjQ1ODYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgMl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxNyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDYwNjEwNTgxOSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgM10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTEwNDQ1MjUzMzAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoaCA9IHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZyA9IHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGQgPSBzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW24gKyA0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Nyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTE3NjQxODg5Nyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW24gKyA1XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTIwMDA4MDQyNixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgNl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTE0NzMyMzEzNDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW24gKyA3XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC00NTcwNTk4Myxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGggPSBzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZyA9IHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZCA9IHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgOF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTc3MDAzNTQxNixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgOV0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTE5NTg0MTQ0MTcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW24gKyAxMF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDE3LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQtNDIwNjMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgMTFdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQtMTk5MDQwNDE2Mixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoaCA9IHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGcgPSBzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZCA9IHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW24gKyAxMl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Nyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxODA0NjAzNjgyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgMTNdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTQwMzQxMTAxLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDE0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDE3LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTE1MDIwMDIyOTAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDE1XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxMjM2NTM1MzI5LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGggPSBjKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGcgPSBjKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChkID0gYyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgMV0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC0xNjU3OTY1MTAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgNl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ5LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTEwNjk1MDE2MzIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDExXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxNCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2NDM3MTc3MTMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW25dLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTM3Mzg5NzMwMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGggPSBjKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZyA9IGMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZCA9IGMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgNV0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTcwMTU1ODY5MSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgMTBdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MzgwMTYwODMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW24gKyAxNV0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDE0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQtNjYwNDc4MzM1LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDRdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MjAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQtNDA1NTM3ODQ4LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChoID0gYyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZyA9IGMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChkID0gYyhkLCBwLCBoLCBnLCBlW24gKyA5XSwgNSwgNTY4NDQ2NDM4KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDE0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTEwMTk4MDM2OTAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgM10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxNCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC0xODczNjM5NjEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDhdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDIwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDExNjM1MzE1MDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoaCA9IGMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZyA9IGMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGQgPSBjKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW24gKyAxM10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC0xNDQ0NjgxNDY3LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDJdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC01MTQwMzc4NCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgN10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTczNTMyODQ3Myxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDEyXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MjAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC0xOTI2NjA3NzM0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoaCA9IHUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChnID0gdShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChkID0gdShkLCBwLCBoLCBnLCBlW24gKyA1XSwgNCwgLTM3ODU1OCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW24gKyA4XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxMSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQtMjAyMjU3NDQ2Myxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDExXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDE4MzkwMzA1NjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgMTRdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MjMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQtMzUzMDk1NTYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGggPSB1KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChnID0gdShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGQgPSB1KGQsIHAsIGgsIGcsIGVbbiArIDFdLCA0LCAtMTUzMDk5MjA2MCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlW24gKyA0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEyNzI4OTMzNTMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgN10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxNixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC0xNTU0OTc2MzIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDEwXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyMyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQtMTA5NDczMDY0MCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdChoID0gdShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdChnID0gdShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZCA9IHUoZCwgcCwgaCwgZywgZVtuICsgMTNdLCA0LCA2ODEyNzkxNzQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDExLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTM1ODUzNzIyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgM10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LTcyMjUyMTk3OSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDZdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQyMyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0NzYwMjkxODksXG5cdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdChoID0gdShcblx0XHRcdFx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0KGcgPSB1KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGQgPSB1KGQsIHAsIGgsIGcsIGVbbiArIDldLCA0LCAtNjQwMzY0NDg3KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDEyXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxMSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQtNDIxODE1ODM1LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuICsgMTVdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQxNixcblx0XHRcdFx0XHRcdFx0XHRcdFx0NTMwNzQyNTIwLFxuXHRcdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDJdLFxuXHRcdFx0XHRcdFx0XHRcdFx0MjMsXG5cdFx0XHRcdFx0XHRcdFx0XHQtOTk1MzM4NjUxLFxuXHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdChoID0gbChcblx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHQoZyA9IGwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdChkID0gbChkLCBwLCBoLCBnLCBlW25dLCA2LCAtMTk4NjMwODQ0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVbbiArIDddLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQxMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0MTEyNjg5MTQxNSxcblx0XHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZCxcblx0XHRcdFx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRcdFx0XHRlW24gKyAxNF0sXG5cdFx0XHRcdFx0XHRcdFx0XHQxNSxcblx0XHRcdFx0XHRcdFx0XHRcdC0xNDE2MzU0OTA1LFxuXHRcdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0ZCxcblx0XHRcdFx0XHRcdFx0XHRlW24gKyA1XSxcblx0XHRcdFx0XHRcdFx0XHQyMSxcblx0XHRcdFx0XHRcdFx0XHQtNTc0MzQwNTUsXG5cdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHQoaCA9IGwoXG5cdFx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0XHQoZyA9IGwoXG5cdFx0XHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHRcdFx0KGQgPSBsKGQsIHAsIGgsIGcsIGVbbiArIDEyXSwgNiwgMTcwMDQ4NTU3MSkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRcdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRlW24gKyAzXSxcblx0XHRcdFx0XHRcdFx0XHRcdDEwLFxuXHRcdFx0XHRcdFx0XHRcdFx0LTE4OTQ5ODY2MDYsXG5cdFx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdFx0ZCxcblx0XHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRcdGVbbiArIDEwXSxcblx0XHRcdFx0XHRcdFx0XHQxNSxcblx0XHRcdFx0XHRcdFx0XHQtMTA1MTUyMyxcblx0XHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdGQsXG5cdFx0XHRcdFx0XHRcdGVbbiArIDFdLFxuXHRcdFx0XHRcdFx0XHQyMSxcblx0XHRcdFx0XHRcdFx0LTIwNTQ5MjI3OTksXG5cdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdChoID0gbChcblx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0KGcgPSBsKFxuXHRcdFx0XHRcdFx0XHRcdGcsXG5cdFx0XHRcdFx0XHRcdFx0KGQgPSBsKGQsIHAsIGgsIGcsIGVbbiArIDhdLCA2LCAxODczMzEzMzU5KSksXG5cdFx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0XHRcdGVbbiArIDE1XSxcblx0XHRcdFx0XHRcdFx0XHQxMCxcblx0XHRcdFx0XHRcdFx0XHQtMzA2MTE3NDQsXG5cdFx0XHRcdFx0XHRcdCkpLFxuXHRcdFx0XHRcdFx0XHRkLFxuXHRcdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0XHRlW24gKyA2XSxcblx0XHRcdFx0XHRcdFx0MTUsXG5cdFx0XHRcdFx0XHRcdC0xNTYwMTk4MzgwLFxuXHRcdFx0XHRcdFx0KSksXG5cdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0ZCxcblx0XHRcdFx0XHRcdGVbbiArIDEzXSxcblx0XHRcdFx0XHRcdDIxLFxuXHRcdFx0XHRcdFx0MTMwOTE1MTY0OSxcblx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHQoaCA9IGwoXG5cdFx0XHRcdFx0XHRoLFxuXHRcdFx0XHRcdFx0KGcgPSBsKFxuXHRcdFx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdFx0XHQoZCA9IGwoZCwgcCwgaCwgZywgZVtuICsgNF0sIDYsIC0xNDU1MjMwNzApKSxcblx0XHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdFx0aCxcblx0XHRcdFx0XHRcdFx0ZVtuICsgMTFdLFxuXHRcdFx0XHRcdFx0XHQxMCxcblx0XHRcdFx0XHRcdFx0LTExMjAyMTAzNzksXG5cdFx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRcdGQsXG5cdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0ZVtuICsgMl0sXG5cdFx0XHRcdFx0XHQxNSxcblx0XHRcdFx0XHRcdDcxODc4NzI1OSxcblx0XHRcdFx0XHQpKSxcblx0XHRcdFx0XHRnLFxuXHRcdFx0XHRcdGQsXG5cdFx0XHRcdFx0ZVtuICsgOV0sXG5cdFx0XHRcdFx0MjEsXG5cdFx0XHRcdFx0LTM0MzQ4NTU1MSxcblx0XHRcdFx0KSksXG5cdFx0XHRcdFx0KGQgPSBpKGQsIHIpKSxcblx0XHRcdFx0XHQocCA9IGkocCwgbykpLFxuXHRcdFx0XHRcdChoID0gaShoLCBhKSksXG5cdFx0XHRcdFx0KGcgPSBpKGcsIGYpKTtcblx0XHRcdHJldHVybiBbZCwgcCwgaCwgZ107XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIGQoZSkge1xuXHRcdFx0dmFyIHQsXG5cdFx0XHRcdG4gPSAnJyxcblx0XHRcdFx0ciA9IDMyICogZS5sZW5ndGg7XG5cdFx0XHRmb3IgKHQgPSAwOyB0IDwgcjsgdCArPSA4KVxuXHRcdFx0XHRuICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGVbdCA+PiA1XSA+Pj4gdCAlIDMyKSAmIDI1NSk7XG5cdFx0XHRyZXR1cm4gbjtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gcChlKSB7XG5cdFx0XHR2YXIgdCxcblx0XHRcdFx0bjphbnkgPSBbXTtcblx0XHRcdGZvciAoblsoZS5sZW5ndGggPj4gMikgLSAxXSA9IHZvaWQgMCwgdCA9IDA7IHQgPCBuLmxlbmd0aDsgdCArPSAxKVxuXHRcdFx0XHRuW3RdID0gMDtcblx0XHRcdHZhciByID0gOCAqIGUubGVuZ3RoO1xuXHRcdFx0Zm9yICh0ID0gMDsgdCA8IHI7IHQgKz0gOClcblx0XHRcdFx0blt0ID4+IDVdIHw9ICgyNTUgJiBlLmNoYXJDb2RlQXQodCAvIDgpKSA8PCB0ICUgMzI7XG5cdFx0XHRyZXR1cm4gbjtcblx0XHR9XG5cdFx0ZnVuY3Rpb24gaChlKSB7XG5cdFx0XHR2YXIgdCxcblx0XHRcdFx0bixcblx0XHRcdFx0ciA9ICcwMTIzNDU2Nzg5YWJjZGVmJyxcblx0XHRcdFx0byA9ICcnO1xuXHRcdFx0Zm9yIChuID0gMDsgbiA8IGUubGVuZ3RoOyBuICs9IDEpXG5cdFx0XHRcdCh0ID0gZS5jaGFyQ29kZUF0KG4pKSxcblx0XHRcdFx0XHQobyArPSByLmNoYXJBdCgodCA+Pj4gNCkgJiAxNSkgKyByLmNoYXJBdCgxNSAmIHQpKTtcblx0XHRcdHJldHVybiBvO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBnKGUpIHtcblx0XHRcdHJldHVybiB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoZSkpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiB3KGUpIHtcblx0XHRcdHJldHVybiAoZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0cmV0dXJuIGQoZihwKGUpLCA4ICogZS5sZW5ndGgpKTtcblx0XHRcdH0pKGcoZSkpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiB2KGUsIHQpIHtcblx0XHRcdHJldHVybiAoZnVuY3Rpb24gKGUsIHQpIHtcblx0XHRcdFx0dmFyIG4sXG5cdFx0XHRcdFx0cixcblx0XHRcdFx0XHRvID0gcChlKSxcblx0XHRcdFx0XHRpOmFueSA9IFtdLFxuXHRcdFx0XHRcdGE6YW55ID0gW107XG5cdFx0XHRcdGZvciAoXG5cdFx0XHRcdFx0aVsxNV0gPSBhWzE1XSA9IHZvaWQgMCxcblx0XHRcdFx0XHQxNiA8IG8ubGVuZ3RoICYmIChvID0gZihvLCA4ICogZS5sZW5ndGgpKSxcblx0XHRcdFx0XHRuID0gMDtcblx0XHRcdFx0XHRuIDwgMTY7XG5cdFx0XHRcdFx0biArPSAxXG5cdFx0XHRcdClcblx0XHRcdFx0XHQoaVtuXSA9IDkwOTUyMjQ4NiBeIG9bbl0pLCAoYVtuXSA9IDE1NDk1NTY4MjggXiBvW25dKTtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQociA9IGYoaS5jb25jYXQocCh0KSksIDUxMiArIDggKiB0Lmxlbmd0aCkpLFxuXHRcdFx0XHRcdGQoZihhLmNvbmNhdChyKSwgNjQwKSlcblx0XHRcdFx0KTtcblx0XHRcdH0pKGcoZSksIGcodCkpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gZnVuY3Rpb24gbShlLCB0LCBuKSB7XG5cdFx0XHRyZXR1cm4gdFxuXHRcdFx0XHQ/IG5cblx0XHRcdFx0XHQ/IHYodCwgZSlcblx0XHRcdFx0XHQ6IChmdW5jdGlvbiAoZSwgdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGgodihlLCB0KSk7XG5cdFx0XHRcdFx0fSkodCwgZSlcblx0XHRcdFx0OiBuXG5cdFx0XHRcdFx0PyB3KGUpXG5cdFx0XHRcdFx0OiAoZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBoKHcoZSkpO1xuXHRcdFx0XHRcdH0pKGUpO1xuXHRcdH0gXG5cdCBcbn0iLCJpbXBvcnQgeyBzdHJpbmdUb29scyB9IGZyb20gJy4vc3RyaW5nVG9vbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXRpbHNUb29sKCkge1xuICAvLyA2XG4gIHZhciByOiBhbnkgPSBzdHJpbmdUb29scygpO1xuICB2YXIgbyA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gZSB8fCAnJztcbiAgfTtcbiAgdmFyIGkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlID0gRGF0ZS5ub3coKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICd1bmRlZmluZWQnICE9IHR5cGVvZiB3aW5kb3cgJiZcbiAgICAgICAgICB3aW5kb3cucGVyZm9ybWFuY2UgJiZcbiAgICAgICAgICAnZnVuY3Rpb24nID09IHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ICYmXG4gICAgICAgICAgKGUgKz0gcGVyZm9ybWFuY2Uubm93KCkpLFxuICAgICAgICAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICB2YXIgbiA9IChlICsgMTYgKiBNYXRoLnJhbmRvbSgpKSAlIDE2IHwgMDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKGUgPSBNYXRoLmZsb29yKGUgLyAxNikpLCAoJ3gnID09PSB0ID8gbiA6IDExICYgbikudG9TdHJpbmcoMTYpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSxcbiAgICBhID0gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuICdvYmplY3QnID09IHR5cGVvZiBlO1xuICAgIH0sXG4gICAgcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0OiBhbnkgPSB7fS50b1N0cmluZy5jYWxsKGUpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYShlKSAmJlxuICAgICAgICAoJ1tvYmplY3QgRXJyb3JdJyA9PT0gdCB8fFxuICAgICAgICAgICdbb2JqZWN0IEV4Y2VwdGlvbl0nID09PSB0IHx8XG4gICAgICAgICAgdCBpbnN0YW5jZW9mIEVycm9yKVxuICAgICAgKTtcbiAgICB9LFxuICAgIGMgPSBmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gJ1tvYmplY3QgQXJyYXldJyA9PT0ge30udG9TdHJpbmcuY2FsbChlKTtcbiAgICB9LFxuICAgIHUgPSBmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZTtcbiAgICB9LFxuICAgIGwgPSBmdW5jdGlvbihlPzogYW55KSB7XG4gICAgICB2YXIgdCA9ICtuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuICEwID09PSBlICYmICh0ID0gTWF0aC5mbG9vcih0IC8gMWUzKSksIHQ7XG4gICAgfSxcbiAgICBmID0gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUuc3RhY2spIHtcbiAgICAgICAgdmFyIHQgPSBlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgcmV0dXJuIHQuc2hpZnQoKSwgdC5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuICAgIGQgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICBlID0gZSB8fCB7fTtcbiAgICAgIHZhciBuOiBhbnkgPSBbXTtcbiAgICAgIGZvciAodmFyIG8gaW4gZSkgbi5wdXNoKG8pO1xuICAgICAgbi5zb3J0KCk7XG4gICAgICBmb3IgKHZhciBpID0gbi5sZW5ndGgsIGE6IGFueSA9IFtdLCBzID0gMDsgcyA8IGk7IHMrKylcbiAgICAgICAgYS5wdXNoKG5bc10gKyAnPScgKyBlW25bc11dKTtcbiAgICAgIHJldHVybiBhLnB1c2godCksIHIoYS5qb2luKCcnKSk7XG4gICAgfSxcbiAgICBwID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQ7XG4gICAgICBzd2l0Y2ggKGUpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHQgPSAnanNlcnInO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdCA9ICdhcGknO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdCA9ICdqc2ZzcGVyZic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0ID0gJ3Jlc2xvYWRmYWlsJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHQgPSAnZmxvdyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICB0ID0gJ2JrcGcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgdCA9ICdoYXJsb2cnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHQgPSAnanNzZGtpZHgnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gICAgfSxcbiAgICBoID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbCgpICsgTWF0aC5mbG9vcigxMCAqIE1hdGgucmFuZG9tKCkpO1xuICAgIH0sXG4gICAgZyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0OiBhbnkgPSBbXTtcbiAgICAgIGZvciAodmFyIG4gaW4gZSkgdC5wdXNoKG4gKyAnPScgKyBlW25dKTtcbiAgICAgIHJldHVybiB0LmpvaW4oJyYnKTtcbiAgICB9LFxuICAgIHcgPSBmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gSlNPTiA/IEpTT04uc3RyaW5naWZ5KGUpIDogZS50b1N0cmluZygpO1xuICAgIH0sXG4gICAgdiA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCd1bmRlZmluZWQnICE9IHR5cGVvZiBkb2N1bWVudCAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSlcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgZSxcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgcixcbiAgICAgICAgICAgIG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpLFxuICAgICAgICAgICAgaSA9IG8ubGVuZ3RoLFxuICAgICAgICAgICAgYSA9IDA7XG4gICAgICAgICAgYSA8IGk7XG4gICAgICAgICAgYSsrXG4gICAgICAgIClcbiAgICAgICAgICAnd3BrLWJpZCcgPT09IChyID0gb1thXSkubmFtZVxuICAgICAgICAgICAgPyAoZSA9IHIuY29udGVudClcbiAgICAgICAgICAgIDogJ3dway1jaWQnID09PSByLm5hbWVcbiAgICAgICAgICAgID8gKHQgPSByLmNvbnRlbnQpXG4gICAgICAgICAgICA6ICd3cGstcmVsJyA9PT0gci5uYW1lICYmIChuID0gci5jb250ZW50KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdwa0JpZDogZSB8fCBudWxsLFxuICAgICAgICB3cGtDaWQ6IHQgfHwgbnVsbCxcbiAgICAgICAgd3BrUmVsOiBuIHx8IG51bGwsXG4gICAgICB9O1xuICAgIH0sXG4gICAgbSA9IGZ1bmN0aW9uKGUsIHQsIG4sIHIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lclxuICAgICAgICAgID8gZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICB0LFxuICAgICAgICAgICAgICBmdW5jdGlvbiBvKGkpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgciAmJiBlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCwgbywgITEpLCBuLmNhbGwodGhpcywgaSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICExLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZS5hdHRhY2hFdmVudCAmJlxuICAgICAgICAgICAgZS5hdHRhY2hFdmVudCgnb24nICsgdCwgZnVuY3Rpb24gbyhpKSB7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgciAmJiBlLmRldGFjaEV2ZW50KCdvbicgKyB0LCBvKSwgbi5jYWxsKHRoaXMsIGkpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9LFxuICAgIF8gPSBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gblxuICAgICAgICA/IChlLnJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgID8gZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsIG4pXG4gICAgICAgICAgICA6IGUuZGV0YWNoRXZlbnQgJiYgZS5kZXRhY2hFdmVudCh0LCBuKSxcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGhpcylcbiAgICAgICAgOiAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRoaXM7XG4gICAgfSxcbiAgICB5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgISFlICYmXG4gICAgICAgIDAgIT09IGUgJiZcbiAgICAgICAgKGUgPj0gMSB8fFxuICAgICAgICAgICcxMDAlJyA9PT0gZSB8fFxuICAgICAgICAgICgvXlxcZCsoXFwuXFxkKyk/JSQvLnRlc3QoZSlcbiAgICAgICAgICAgID8gTWF0aC5yYW5kb20oKSA8IHBhcnNlRmxvYXQoZSkgLyAxMDBcbiAgICAgICAgICAgIDogZSA+IDAgJiYgZSA8IDEgJiYgTWF0aC5yYW5kb20oKSA8IGUpKVxuICAgICAgKTtcbiAgICB9LFxuICAgIHggPSAnd3BrLXJlcG9ydGVyJyxcbiAgICBiID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgdmFyIG4gPSBbXS5zbGljZS5jYWxsKHQpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgZS5hcHBseSh0aGlzLCBbeF0uY29uY2F0KG4pKTtcbiAgICB9LFxuICAgIEUgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdCA9ICcnO1xuICAgICAgc3dpdGNoIChlLmNhdGVnb3J5KSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0ID0gcihcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgZS5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgZS51aWQsXG4gICAgICAgICAgICAgIGUud191cmwsXG4gICAgICAgICAgICAgIGUud19yZWYsXG4gICAgICAgICAgICAgIGUud19tc2cgfHwgJycsXG4gICAgICAgICAgICAgIGUud19saW5lIHx8ICcnLFxuICAgICAgICAgICAgICBlLndfY29sIHx8ICcnLFxuICAgICAgICAgICAgXS5qb2luKCcnKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdCA9IHIoW2UuY2F0ZWdvcnksIGUudWlkLCBlLndfcmVzLCBlLndfbWV0aG9kLCBlLndfcmNdLmpvaW4oJycpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHQgPSByKFxuICAgICAgICAgICAgW2UuY2F0ZWdvcnksIGUudWlkLCBlLndfdXJsLCBlLndfcmVmLCBlLndfcmVzLCBlLndfdHlwZV0uam9pbignJyksXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICAgIH0sXG4gICAgUyA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIGUgPSBlIHx8ICExO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICgndW5kZWZpbmVkJyAhPSB0eXBlb2Ygd2luZG93ICYmXG4gICAgICAgICAgICAod2luZG93IGFzIGFueSkudWN3ZWIgJiZcbiAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS51Y3dlYi53aW5kb3cpIHx8XG4gICAgICAgICAgdFxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgdmFyIG4gPSAodCB8fCBuYXZpZ2F0b3IudXNlckFnZW50KS5zcGxpdCgnICcpLFxuICAgICAgICAgICAgICByID0gbi5sZW5ndGgsXG4gICAgICAgICAgICAgIG8gPSAhMSxcbiAgICAgICAgICAgICAgaSA9ICExLFxuICAgICAgICAgICAgICBhID0gMDtcbiAgICAgICAgICAgIGEgPCByO1xuICAgICAgICAgICAgYSsrXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoLTEgIT09IG5bYV0uaW5kZXhPZignVVdTLycpKVxuICAgICAgICAgICAgICBpID0gblthXS5zcGxpdCgnLycpWzFdID49ICcyLjEzLjIuMzcnO1xuICAgICAgICAgICAgZWxzZSAtMSAhPT0gblthXS5pbmRleE9mKCdBbGlBcHAoRGluZ1RhbGsvJykgJiYgKG8gPSAhMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvID8gaSA6IGU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICByZXR1cm4gITE7XG4gICAgfSxcbiAgICBSID0ge1xuICAgICAgZ2V0OiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPSB0eXBlb2YgbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgdmFyIHQ6IGFueSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGUpO1xuICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICBpZiAoKCh0ID0gSlNPTi5wYXJzZSh0KSksIERhdGUubm93KCkgPCB0LmV4cGlyZUF0KSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICB0aGlzLnJtKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGxvY2FsU3RvcmFnZSAmJlxuICAgICAgICAgIGUgJiZcbiAgICAgICAgICB0ICYmXG4gICAgICAgICAgKCh0LmV4cGlyZUF0ID0gRGF0ZS5ub3coKSArIDE4ZTUpLFxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGUsIEpTT04uc3RyaW5naWZ5KHQpKSk7XG4gICAgICB9LFxuICAgICAgcm06IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShlKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBrID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgaWYgKDEgPT09IHQubGVuZ3RoKSByZXR1cm4gZSA9PT0gdFswXTtcbiAgICAgICAgaWYgKDIgPT09IHQubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIG4gPSB0WzBdLFxuICAgICAgICAgICAgciA9IHRbMV07XG4gICAgICAgICAgcmV0dXJuIG4gJiYgIXIgPyBvKGUsIG4pIDogbiAmJiByID8gbyhlLCBuKSAmJiBvKHIsIGUpIDogbyhyLCBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9XG4gICAgICByZXR1cm4gITA7XG4gICAgICBmdW5jdGlvbiBvKGUsIHQpIHtcbiAgICAgICAgdmFyIG4gPSBlLnNwbGl0KCcuJyksXG4gICAgICAgICAgciA9IHQuc3BsaXQoJy4nKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAhKG5bMF0gPCByWzBdKSAmJlxuICAgICAgICAgIChuWzBdID4gclswXSB8fCAoIShuWzFdIDwgclsxXSkgJiYgKG5bMV0gPiByWzFdIHx8IG5bMl0gPj0gclsyXSkpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgVCA9IGZ1bmN0aW9uKGUsIHQsIG4sIHIsIG8pIHtcbiAgICAgIHZhciBhID0gUi5nZXQoJ3dwa3JlcG9ydGVyOmR5bmFtaWNDb25mJyk7XG4gICAgICBpZiAoYSkgdShvKSAmJiBvKGEpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBzOiBhbnkgPSB7XG4gICAgICAgICAgYXBwOiBlLFxuICAgICAgICAgIHRtOiBsKCEwKSxcbiAgICAgICAgICB1ZDogaSgpLFxuICAgICAgICAgIHN2ZXI6IHQsXG4gICAgICAgIH07XG4gICAgICAgIHMuc2lnbiA9IGQocywgcik7XG4gICAgICAgIHZhciBjID0gZyhzKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAhKGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgaWYgKCd1bmRlZmluZWQnID09IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCkgdCgpO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG4gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIChuLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoNCA9PT0gbi5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICAgICAgaWYgKDIwMCA9PT0gbi5zdGF0dXMgJiYgbi5yZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gSlNPTi5wYXJzZShuLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgMCA9PT0gci5jb2RlICYmIChlID0gci5jb25maWcgfHwgW10pO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICB0KGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKG4udGltZW91dCA9IDNlMyksXG4gICAgICAgICAgICAgIG4ub3BlbignR0VUJywgZSwgITApLFxuICAgICAgICAgICAgICBuLnNlbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKG4gKyAnP3dway1oZWFkZXI9JyArIGVuY29kZVVSSUNvbXBvbmVudChjKSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmICgoKGEgPSB7fSksIHZvaWQgMCAhPT0gZSkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSBlLmxlbmd0aCwgciA9IDA7IHIgPCBuOyByKyspIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSBlW3JdLFxuICAgICAgICAgICAgICAgIHMgPSBpLnNka3ZlcjtcbiAgICAgICAgICAgICAgaWYgKGsodCwgcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAoaS5jb21tb24gJiZcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBpLmNvbW1vbi5zYW1wbGVSYXRlICYmXG4gICAgICAgICAgICAgICAgICAgIChhLmFsbCA9IGkuY29tbW9uLnNhbXBsZVJhdGUpLFxuICAgICAgICAgICAgICAgICAgaS5jb25maWcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYywgbCA9IGkuY29uZmlnLmxlbmd0aCwgZiA9IDA7IGYgPCBsOyBmKyspXG4gICAgICAgICAgICAgICAgICAgIChjID0gaS5jb25maWdbZl0pLnR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGMuc2FtcGxlUmF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgIChhW2MudHlwZV0gPSBjLnNhbXBsZVJhdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSLnNldCgnd3BrcmVwb3J0ZXI6ZHluYW1pY0NvbmYnLCBhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdShvKSAmJiBvKGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIE8gPSBmdW5jdGlvbihlLCB0LCBuKSB7XG4gICAgICBmb3IgKHZhciByLCBvID0gdC5sZW5ndGgsIGkgPSAwOyBpIDwgbzsgaSsrKVxuICAgICAgICAnc3RyaW5nJyA9PSB0eXBlb2YgKHIgPSBlW3RbaV1dKVxuICAgICAgICAgID8gKGVbdFtpXV0gPSByLnN1YnN0cmluZygwLCBuKSlcbiAgICAgICAgICA6ICdvYmplY3QnID09IHR5cGVvZiByICYmIChlW3RbaV1dID0gU3RyaW5nKHIpKTtcbiAgICB9O1xuICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiB7XG4gICAgICBub29wOiBvLFxuICAgICAgdXVpZDogaSxcbiAgICAgIG1kNTogcixcbiAgICAgIGlzRXJyb3I6IHMsXG4gICAgICBpc0FycmF5OiBjLFxuICAgICAgaXNPYmplY3Q6IGEsXG4gICAgICBpc0Z1bmN0aW9uOiB1LFxuICAgICAgbG9nZ2VyOlxuICAgICAgICAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY29uc29sZSAmJiBhKGNvbnNvbGUpICYmIGUuZGVidWdcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgdHJhY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGIoY29uc29sZS50cmFjZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVidWc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGIoY29uc29sZS5kZWJ1ZywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbG9nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBiKGNvbnNvbGUubG9nLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBiKGNvbnNvbGUuaW5mbywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgd2FybjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYihjb25zb2xlLndhcm4sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBiKGNvbnNvbGUuZXJyb3IsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICAgIHRyYWNlOiBvLFxuICAgICAgICAgICAgICBkZWJ1ZzogbyxcbiAgICAgICAgICAgICAgbG9nOiBvLFxuICAgICAgICAgICAgICBpbmZvOiBvLFxuICAgICAgICAgICAgICB3YXJuOiBvLFxuICAgICAgICAgICAgICBlcnJvcjogbyxcbiAgICAgICAgICAgIH0sXG4gICAgICBleHRlbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyB0IDwgbjsgdCsrKSB7XG4gICAgICAgICAgdmFyIHIgPSBhcmd1bWVudHNbdF07XG4gICAgICAgICAgZm9yICh2YXIgbyBpbiByKVxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsIG8pICYmIChlW29dID0gcltvXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9LFxuICAgICAgY2FuUmVwb3J0OiB5LFxuICAgICAgb25MaXN0ZW46IG0sXG4gICAgICBvZmZMaXN0ZW46IF8sXG4gICAgICBnZXRNZXRhczogdixcbiAgICAgIHRpbWVzdGFtcDogbCxcbiAgICAgIGNvbXB1dGVTaWduOiBkLFxuICAgICAgZ2VuZXJhdGVTZXE6IGgsXG4gICAgICBjYXRlZ29yeVRvVHlwZTogcCxcbiAgICAgIHBhcnNlRXJyb3JTdGFjazogZixcbiAgICAgIG9ialRvSnNvblN0cmluZzogdyxcbiAgICAgIG9ialRvUXVlcnlTdHJpbmc6IGcsXG4gICAgICBnZW5Db250ZW50SGFzaDogRSxcbiAgICAgIGlzVTRIQTogUyxcbiAgICAgIGN1dFN0cjogTyxcbiAgICAgIGR5bmFtaWNDb25mOiBULFxuICAgIH07XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9