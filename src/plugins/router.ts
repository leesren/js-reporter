export default function plugin_router(config?: any) {
  // 8
  var n = window.history || {},
    r = window.document;
  var o = function(e, t) {
      var n;
      window.CustomEvent
        ? (n = new CustomEvent(e, {
            detail: t,
          }))
        : ((n = r.createEvent('HTMLEvents')).initEvent(e, !1, !0),
          (n.detail = t)),
        window.dispatchEvent(n);
    },
    i = function(e) {
      return e && 'string' == typeof e
        ? e.replace(/^(https?:)?\/\//, '').replace(/\?.*$/, '')
        : '';
    },
    a = function(e) {
      var t = n[e];
      'function' == typeof t &&
        ((n[e] = function(e, r, a) {
          var s = location.href,
            c = t.call(n, e, r, a);
          if (!a || 'string' != typeof a) return c;
          if (a === s) return c;
          try {
            var u = s.split('#'),
              l = a.split('#'),
              f = i(u[0]),
              d = i(l[0]),
              p = u[1] && u[1].replace(/^\/?(.*)/, '$1'),
              h = l[1] && l[1].replace(/^\/?(.*)/, '$1');
            f !== d
              ? o('historystatechange', d)
              : p !== h && o('historystatechange', h);
          } catch (e) {}
          return c;
        }),
        (n[e].toString = e + '() { [native code] }'));
    };
  return function() {
    a('pushState'), a('replateState');
  };
}
