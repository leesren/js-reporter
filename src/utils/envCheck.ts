export function envCheck() {
  var n,
    r,
    o: any = {};
  function i() {
    throw new Error('setTimeout has not been defined');
  }
  function a() {
    throw new Error('clearTimeout has not been defined');
  }
  function s(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === i || !n) && setTimeout)
      return (n = setTimeout), setTimeout(e, 0);
    try {
      return n(e, 0);
    } catch (t) {
      try {
        return n.call(null, e, 0);
      } catch (t) {
        // @ts-ignore
        return n.call(this, e, 0);
      }
    }
  }
  // @ts-ignore
  !(function() {
    try {
      n = 'function' == typeof setTimeout ? setTimeout : i;
    } catch (e) {
      n = i;
    }
    try {
      r = 'function' == typeof clearTimeout ? clearTimeout : a;
    } catch (e) {
      r = a;
    }
  })();
  var c,
    u: any = [],
    l = !1,
    f = -1;
  function d() {
    l &&
      c &&
      ((l = !1), c.length ? (u = c.concat(u)) : (f = -1), u.length && p());
  }
  function p() {
    if (!l) {
      var e = s(d);
      l = !0;
      for (var t = u.length; t; ) {
        for (c = u, u = []; ++f < t; ) c && c[f].run();
        (f = -1), (t = u.length);
      }
      (c = null),
        (l = !1),
        (function(e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === a || !r) && clearTimeout)
            return (r = clearTimeout), clearTimeout(e);
          try {
            r(e);
          } catch (t) {
            try {
              return r.call(null, e);
            } catch (t) {
              // @ts-ignore
              return r.call(this, e);
            }
          }
        })(e);
    }
  }
  function h(e, t) {
    // @ts-ignore
    (this.fun = e), (this.array = t);
  }
  function g() {}
  (o.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    u.push(new h(e, t)), 1 !== u.length || l || s(p);
  }),
    (h.prototype.run = function() {
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
    (o.listeners = function(e) {
      return [];
    }),
    (o.binding = function(e) {
      throw new Error('process.binding is not supported');
    }),
    (o.cwd = function() {
      return '/';
    }),
    (o.chdir = function(e) {
      throw new Error('process.chdir is not supported');
    }),
    (o.umask = function() {
      return 0;
    });
  return o;
}
