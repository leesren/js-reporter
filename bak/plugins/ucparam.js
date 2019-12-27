!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.wpkucparamPlugin = e())
    : (t.wpkucparamPlugin = e());
})(this, function() {
  return (function(t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = {
        i: n,
        l: !1,
        exports: {},
      });
      return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function(t, e, n) {
        r.o(t, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: n,
          });
      }),
      (r.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {
            value: 'Module',
          }),
          Object.defineProperty(t, '__esModule', {
            value: !0,
          });
      }),
      (r.t = function(t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', {
            enumerable: !0,
            value: t,
          }),
          2 & e && 'string' != typeof t)
        )
          for (var o in t)
            r.d(
              n,
              o,
              function(e) {
                return t[e];
              }.bind(null, o),
            );
        return n;
      }),
      (r.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return r.d(e, 'a', e), e;
      }),
      (r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ''),
      r((r.s = 6))
    );
  })({
    0: function(t, e) {
      t.exports = {
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
            cn: 'http://127.0.0.1:7001/track/transformLog',
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
    },
    6: function(t, e, r) {
      var n = r(0).env,
        o = function(t, e) {
          if (
            ((e = e || {}),
            -1 !== [n.BROWSER, n.WEEX].indexOf(t.env) &&
              e.params &&
              'string' == typeof e.params)
          ) {
            t.logger.info('wpkucparamPlugin已开启');
            for (
              var r = e.params, o = ['pr', 've', 'os', 'fr', 'nw'], p = 0;
              p < 5;
              p++
            ) {
              var i = o[p];
              -1 === r.indexOf(i) && (r += i);
            }
            try {
              ucapi.biz.ucparams({
                params: r,
                success: function(e) {
                  t.uc_param = e || '';
                },
              });
            } catch (e) {
              t.logger.error('get uc_param_str error: ', e),
                (t.uc_param_str = r);
            }
          }
        };
      (o.prototype.pluginId = 'ucparam'), (t.exports = o);
    },
  });
});
