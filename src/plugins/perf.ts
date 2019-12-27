export default function plugin_perf(e, t, config) {
  // 11
  var r,
    o = config.env,
    i = config.category,
    a = [
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
    ],
    s = ['navigate', 'reload', 'back_forward'],
    c = function(e) {
      var t,
        n = e[a[5]];
      if (1 === e._ver) {
        var r;
        if ((window as any).chrome && (window as any).chrome.loadTimes)
          r = 1e3 * (window as any).chrome.loadTimes().firstPaintTime;
        else r = e.msFirstPaint ? e.msFirstPaint : e[a[13]];
        if (!r) return -1;
        t = r >= n ? parseFloat((r - n).toFixed(2)) : -1;
      } else
        2 === e._ver && ((t = e[a[13]] - n), (t = parseFloat(t.toFixed(2))));
      return t;
    },
    u = function(e, t) {
      var n,
        r,
        o,
        i = {};
      for (var s in t)
        (o = 0),
          (n = e[a[t[s][0]]]),
          (r = e[a[t[s][1]]]),
          n > 0 && r > 0 && (o = parseFloat((r - n).toFixed(2))),
          (i[s] = o);
      return i;
    },
    l = function(e, t) {
      var n: any = window;
      if (
        ((r =
          n.performance ||
          n.webkitPerformance ||
          n.msPerformance ||
          n.mozPerformance),
        e.env === o.BROWSER && r && r.timing)
      ) {
        t = t || {};
        var a = e.toolKit.extend(
          {
            enable: !0,
            sampleRate: 1,
          },
          t,
        );
        if (a.enable) {
          e.logger.info('wpkperformancePlugin已开启');
          var l = r.timing || {},
            f = 1;
          if ('function' == typeof n.PerformanceNavigationTiming)
            try {
              var d = r.getEntriesByType('navigation')[0];
              d && ((l = d), (f = 2));
            } catch (e) {}
          (l._ver = f),
            (function(e: any, t, n, r) {
              e.addEventListener
                ? e.addEventListener(t, n, r || !1)
                : e.attachEvent('on' + t, n);
            })(window, 'load', function() {
              /loaded|complete/.test(document.readyState) &&
                setTimeout(function() {
                  var t = e.toolKit.extend(
                    (function(e) {
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
                    })(l),
                    (function(e) {
                      var t: any = u(e, {
                        w_firstbyte: [5, 12],
                        w_tti: [5, 15],
                        w_domready: [5, 17],
                        w_load: [5, 19],
                        w_total: [5, 20],
                      });
                      return (t.w_fpt = c(e)), t;
                    })(l),
                  );
                  for (var n in t)
                    if (t[n] < 0 || t[n] > 6e4)
                      return void e.logger.warn('性能数据异常：', n, t[n]);
                  var o = e.toolKit.extend(
                    t,
                    (function(e) {
                      var t,
                        n = r.navigation || {},
                        o = -1,
                        i = -1,
                        a = -1;
                      return (
                        1 === e._ver
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
                        }
                      );
                    })(l),
                    a,
                    {
                      category: i.JSFSPERF,
                    },
                  );
                  e.report(o);
                });
            });
        } else e.logger.info('wpkperformancePlugin已关闭');
      } else e.logger.warn('基础性能插件仅支持浏览器环境');
    };
  l.prototype.pluginId = 'perf';
  return l;
}
