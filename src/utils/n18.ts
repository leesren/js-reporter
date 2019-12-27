export function n18(config) {
  var r = config;
  var o: any =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof self
      ? self
      : {};
  var i = o.document;
  var a = o.navigator;
  var s = o.location;
  var c = {};
  var u = function(e, t, n, r, o) {
      if (void 0 === t) {
        var a, s;
        if (!c[e]) {
          a = new RegExp(e + '=([^;]+)');
          try {
            s = a.exec(i.cookie);
          } catch (e) {
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
      } catch (e) {
        return !1;
      }
    },
    l = function(e) {
      var t = window,
        n =
          'wpkimgreporter_' +
          +new Date() +
          '.r' +
          Math.floor(1e3 * Math.random()),
        r = (t[n] = new Image());
      (r.onload = r.onerror = function() {
        t[n] = null;
      }),
        (r.src = e);
    },
    f = null,
    d = function(e) {
      // @ts-ignore
      clearTimeout(f),
        (f = null),
        (function(e) {
          var t = e._waitingQueue;
          if (e.checkHidden && i && i.hidden)
            return (
              e.logger.warn('当前页面不可见，日志数据将丢弃: ', t),
              void (e._waitingQueue = [])
            );
          if (a && a.sendBeacon && o.Blob) {
            var n,
              r,
              s = (function(e) {
                for (var t, n, r = [], o = [], i = e.length, a = 0; a < i; a++)
                  // @ts-ignore
                  (n = e[a].category), -1 === o.indexOf(n) && o.push(n);
                t = o.length;
                for (var s = 0; s < t; s++) {
                  n = o[s];
                  for (var c = [], u = 0; u < i; u++) {
                    var l = e[u];
                    // @ts-ignore
                    l.category === n && c.push(l);
                  }
                  // @ts-ignore
                  r[s] = c;
                }
                return r;
              })(t),
              c = s.length;
            try {
              for (var u, f = 0; f < c; f++) {
                // @ts-ignore
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
            } catch (e) {}
          } else {
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
    },
    p = function(e) {
      d(e);
    };
  return {
    env: r.env.BROWSER,
    root: o,
    isHttps: s.protocol === r.http.protocols.HTTPS,
    send: function(e, t, n) {
      var c: any = this;

      if (c.toolKit.isU4HA(c.onlyCustom) && n.category < 100)
        c.logger.warn('在u4内核环境，屏蔽非自定义的所有自动打点');
      else {
        var u = c.toolKit.extend(
          (function(e) {
            if (!i) return {};
            var t,
              n = i.referrer;
            return (
              n &&
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
                net:
                  ((t = a.connection),
                  t && t.type
                    ? t.type === r.navConn.types.NONE
                      ? 'disconnected'
                      : t.type === r.navConn.types.CELLULAR
                      ? t.effectiveType === r.navConn.effectiveTypes.SLOW2G
                        ? '2g'
                        : t.effectiveType
                      : t.type
                    : ''),
              }
            );
          })(c.spa),
          n,
          {
            w_frmid: c._sid,
          },
        );
        if (
          (c.logger.warn('logData to send: ', e, u),
          (e += '?wpk-header=' + encodeURIComponent(t)),
          c.uc_param_str && (e += '&uc_param_str=' + c.uc_param_str),
          !0 === n._diagnose)
        )
          return (
            (u = encodeURIComponent(c.toolKit.objToJsonString(u))),
            void window.open(e + '&data=' + u)
          );
        (u._servAddr = e), (u._hash = c.toolKit.genContentHash(u));
        var l,
          p,
          h = c.delay && -1 !== [1, 2, 4].indexOf(u.category);
        if (
          (function(e, t) {
            var n = e._waitingQueue,
              r = n.length,
              o = t.reduplication || e.reduplication || !0,
              i = !0;
            if (1 === t.category && o && 0 !== r) {
              for (var a, s = 0; s < r; s++)
                if ((a = n[s])._hash === t._hash) {
                  a.w_cnt++, (i = !1);
                  break;
                }
              i && n.push(t);
            } else n.push(t);
            return i;
          })(c, u) ||
          !h
        )
          (l = function() {
            d(c);
          }),
            // @ts-ignore
            (f =
              -1 === (p = h ? 3e3 : -1) ? (l(), null) : setTimeout(l, p || 0));
        else c.logger.warn('logData被合并: ', u);
      }
    },
    getWid: function() {
      // @ts-ignore
      var e = u(r.sdk.WID_KEY);
      // @ts-ignore
      return e || ((e = this.toolKit.uuid()), u(r.sdk.WID_KEY, e, 15552e3)), e;
    },
    bindUnloadEvent: function(e) {
      window &&
        (window.addEventListener
          ? window.addEventListener(
              'beforeunload',
              function(t) {
                p(e);
              },
              !1,
            )
          : (window as any).attachEvent &&
            (window as any).attachEvent('onbeforeunload', function(t) {
              p(e);
            }));
    },
  };
}
