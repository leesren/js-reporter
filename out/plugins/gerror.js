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
//# sourceMappingURL=gerror.js.map