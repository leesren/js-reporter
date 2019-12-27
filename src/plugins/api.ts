export default function plugin_api(config) {
  // 10
  var r = config; // config
  var o = r.sdk;
  var i = r.http.methods;
  var a = r.category;
  var s = 2048;
  var c = 121e3;
  var u = function(e) {
    return e >= 200 && e <= 299;
  };
  var l = function(e) {
    return (
      -1 === e.indexOf('//arms-retcode') &&
      -1 === e.indexOf('//wpk-gateway') &&
      -1 === e.indexOf('//px.ucweb.com') &&
      -1 === e.indexOf('//px.effirst.com') &&
      -1 === e.indexOf('//px-intl.ucweb.com')
    );
  };
  var f = function(e, t) {
    if (e.env === r.env.BROWSER && window) {
      var n = e.toolKit.extend(
        {
          enable: !0,
          sampleRate: 1,
        },
        t,
      );
      n.enable
        ? (e.logger.info('wpkinterfacePlugin已开启'),
          'XMLHttpRequest' in window &&
            (function(e, t) {
              var n: any = window.XMLHttpRequest.prototype;
              var r = n.open;
              n.open = function(e, t) {
                this.__reqCtx__ = {
                  method: e,
                  url: t || '',
                  start: Date.now(),
                };
                var n = [].slice.call(arguments);
                r.apply(this, n);
              };
              var f = n.send;
              n.send = function(n) {
                var r = this;
                function d(this: any) {
                  if (r.__reqCtx__ && 4 === r.readyState)
                    try {
                      var f = Date.now(),
                        d = (r.responseURL || r.__reqCtx__.url).split('?'),
                        p = d[0],
                        h = d[1] || '',
                        g = '';
                      r.__reqCtx__.method.toUpperCase() !== i.GET &&
                        n &&
                        (g = JSON.stringify(n));
                      var w = String(r.response),
                        v = !0,
                        m: any = {};
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
                        // @ts-ignore
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
                    } catch (t) {
                      e.reportError(t, {
                        bid: o.BID,
                        cid: o.CID,
                        category: a.JSERR,
                        sampleRate: 1,
                      });
                    }
                }
                if (
                  'onreadystatechange' in r &&
                  'function' == typeof r.onreadystatechange
                ) {
                  var p = r.onreadystatechange;
                  r.onreadystatechange = function() {
                    var e = [].slice.call(arguments);
                    // @ts-ignore
                    d.apply(this, e), p.apply(this, e);
                  };
                } else r.onreadystatechange = d;
                var h = [].slice.call(arguments);
                return f.apply(this, h);
              };
            })(e, n),
          'fetch' in window &&
            (function(e, t) {
              var n = window.fetch;
              window.fetch = function() {
                var r: any = [].slice.call(arguments);
                var f = i.GET;
                r[1] && r[1].method && (f = r[1].method.toUpperCase());
                var d = Date.now();
                return n
                  .apply(this, r)
                  .then(function(n) {
                    try {
                      var p = Date.now(),
                        h = (n.url || r[0]).split('?'),
                        g = h[0],
                        w = h[1] || '',
                        v = '';
                      f !== i.GET &&
                        r[1] &&
                        r[1].body &&
                        (v = JSON.stringify(r[1].body)),
                        n
                          .clone()
                          .text()
                          .then(function(r) {
                            r = r || '';
                            var o = !0,
                              i: any = {};
                            if (
                              ('function' == typeof t.errorFilter &&
                                // @ts-ignore
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
                              o && p - d < c && l(g))
                            ) {
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
                    } catch (t) {
                      e.reportError(t, {
                        bid: o.BID,
                        cid: o.CID,
                        category: a.JSERR,
                        sampleRate: 1,
                      });
                    }
                    return n;
                  })
                  .catch(function(t) {
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
