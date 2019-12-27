import { stringTools } from './stringTools';

export function utilsTool() {
  // 6
  var r: any = stringTools();
  var o = function(e) {
    return e || '';
  };
  var i = function() {
      var e = Date.now();
      return (
        'undefined' != typeof window &&
          window.performance &&
          'function' == typeof window.performance.now &&
          (e += performance.now()),
        'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
          var n = (e + 16 * Math.random()) % 16 | 0;
          return (
            (e = Math.floor(e / 16)), ('x' === t ? n : 11 & n).toString(16)
          );
        })
      );
    },
    a = function(e) {
      return 'object' == typeof e;
    },
    s = function(e) {
      var t: any = {}.toString.call(e);
      return (
        a(e) &&
        ('[object Error]' === t ||
          '[object Exception]' === t ||
          t instanceof Error)
      );
    },
    c = function(e) {
      return '[object Array]' === {}.toString.call(e);
    },
    u = function(e) {
      return 'function' == typeof e;
    },
    l = function(e?: any) {
      var t = +new Date();
      return !0 === e && (t = Math.floor(t / 1e3)), t;
    },
    f = function(e) {
      if (e.stack) {
        var t = e.stack.split('\n');
        return t.shift(), t.join('\n');
      }
      return '';
    },
    d = function(e, t) {
      e = e || {};
      var n: any = [];
      for (var o in e) n.push(o);
      n.sort();
      for (var i = n.length, a: any = [], s = 0; s < i; s++)
        a.push(n[s] + '=' + e[n[s]]);
      return a.push(t), r(a.join(''));
    },
    p = function(e) {
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
    },
    h = function() {
      return l() + Math.floor(10 * Math.random());
    },
    g = function(e) {
      var t: any = [];
      for (var n in e) t.push(n + '=' + e[n]);
      return t.join('&');
    },
    w = function(e) {
      return JSON ? JSON.stringify(e) : e.toString();
    },
    v = function() {
      if ('undefined' != typeof document && document.getElementsByTagName)
        for (
          var e,
            t,
            n,
            r,
            o = document.getElementsByTagName('meta'),
            i = o.length,
            a = 0;
          a < i;
          a++
        )
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
    },
    m = function(e, t, n, r) {
      return (
        e.addEventListener
          ? e.addEventListener(
              t,
              function o(i) {
                // @ts-ignore
                r && e.removeEventListener(t, o, !1), n.call(this, i);
              },
              !1,
            )
          : e.attachEvent &&
            e.attachEvent('on' + t, function o(i) {
              // @ts-ignore
              r && e.detachEvent('on' + t, o), n.call(this, i);
            }),
        // @ts-ignore
        this
      );
    },
    _ = function(e, t, n) {
      // @ts-ignore
      return n
        ? (e.removeEventListener
            ? e.removeEventListener(t, n)
            : e.detachEvent && e.detachEvent(t, n),
          // @ts-ignore
          this)
        : // @ts-ignore
          // @ts-ignore
          this;
    },
    y = function(e) {
      return (
        !!e &&
        0 !== e &&
        (e >= 1 ||
          '100%' === e ||
          (/^\d+(\.\d+)?%$/.test(e)
            ? Math.random() < parseFloat(e) / 100
            : e > 0 && e < 1 && Math.random() < e))
      );
    },
    x = 'wpk-reporter',
    b = function(e, t) {
      var n = [].slice.call(t);
      // @ts-ignore
      e.apply(this, [x].concat(n));
    },
    E = function(e) {
      var t = '';
      switch (e.category) {
        case 1:
          t = r(
            [
              e.category,
              e.uid,
              e.w_url,
              e.w_ref,
              e.w_msg || '',
              e.w_line || '',
              e.w_col || '',
            ].join(''),
          );
          break;
        case 2:
          t = r([e.category, e.uid, e.w_res, e.w_method, e.w_rc].join(''));
          break;
        case 4:
          t = r(
            [e.category, e.uid, e.w_url, e.w_ref, e.w_res, e.w_type].join(''),
          );
      }
      return t;
    },
    S = function(e, t) {
      e = e || !1;
      try {
        if (
          ('undefined' != typeof window &&
            (window as any).ucweb &&
            (window as any).ucweb.window) ||
          t
        ) {
          for (
            var n = (t || navigator.userAgent).split(' '),
              r = n.length,
              o = !1,
              i = !1,
              a = 0;
            a < r;
            a++
          ) {
            if (-1 !== n[a].indexOf('UWS/'))
              i = n[a].split('/')[1] >= '2.13.2.37';
            else -1 !== n[a].indexOf('AliApp(DingTalk/') && (o = !0);
          }
          return o ? i : e;
        }
      } catch (e) {}
      return !1;
    },
    R = {
      get: function(e) {
        if ('undefined' != typeof localStorage) {
          var t: any = localStorage.getItem(e);
          if (t) {
            if (((t = JSON.parse(t)), Date.now() < t.expireAt)) return t;
            this.rm(e);
          }
        }
        return null;
      },
      set: function(e, t) {
        'undefined' != typeof localStorage &&
          e &&
          t &&
          ((t.expireAt = Date.now() + 18e5),
          localStorage.setItem(e, JSON.stringify(t)));
      },
      rm: function(e) {
        'undefined' != typeof localStorage && localStorage.removeItem(e);
      },
    },
    k = function(e, t) {
      if (t) {
        if (1 === t.length) return e === t[0];
        if (2 === t.length) {
          var n = t[0],
            r = t[1];
          return n && !r ? o(e, n) : n && r ? o(e, n) && o(r, e) : o(r, e);
        }
        return !1;
      }
      return !0;
      function o(e, t) {
        var n = e.split('.'),
          r = t.split('.');
        return (
          !(n[0] < r[0]) &&
          (n[0] > r[0] || (!(n[1] < r[1]) && (n[1] > r[1] || n[2] >= r[2])))
        );
      }
    },
    T = function(e, t, n, r, o) {
      var a = R.get('wpkreporter:dynamicConf');
      if (a) u(o) && o(a);
      else {
        var s: any = {
          app: e,
          tm: l(!0),
          ud: i(),
          sver: t,
        };
        s.sign = d(s, r);
        var c = g(s);
        // @ts-ignore
        !(function(e, t) {
          // @ts-ignore
          if ('undefined' == typeof XMLHttpRequest) t();
          else {
            var n = new XMLHttpRequest();
            (n.onreadystatechange = function() {
              if (4 === n.readyState) {
                var e;
                if (200 === n.status && n.response)
                  try {
                    var r = JSON.parse(n.response);
                    0 === r.code && (e = r.config || []);
                  } catch (e) {}
                t(e);
              }
            }),
              (n.timeout = 3e3),
              n.open('GET', e, !0),
              n.send();
          }
        })(n + '?wpk-header=' + encodeURIComponent(c), function(e) {
          if (((a = {}), void 0 !== e)) {
            for (var n = e.length, r = 0; r < n; r++) {
              var i = e[r],
                s = i.sdkver;
              if (k(t, s)) {
                if (
                  (i.common &&
                    void 0 !== i.common.sampleRate &&
                    (a.all = i.common.sampleRate),
                  i.config)
                )
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
    },
    O = function(e, t, n) {
      for (var r, o = t.length, i = 0; i < o; i++)
        'string' == typeof (r = e[t[i]])
          ? (e[t[i]] = r.substring(0, n))
          : 'object' == typeof r && (e[t[i]] = String(r));
    };
  return function(e) {
    return {
      noop: o,
      uuid: i,
      md5: r,
      isError: s,
      isArray: c,
      isObject: a,
      isFunction: u,
      logger:
        'undefined' != typeof console && a(console) && e.debug
          ? {
              trace: function() {
                b(console.trace, arguments);
              },
              debug: function() {
                b(console.debug, arguments);
              },
              log: function() {
                b(console.log, arguments);
              },
              info: function() {
                b(console.info, arguments);
              },
              warn: function() {
                b(console.warn, arguments);
              },
              error: function() {
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
      extend: function(e) {
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
