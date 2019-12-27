import routerPlugin from './router';
export default function plugin_flow(config: any) {
  var r = config.env,
    o = function(e) {
      var t;
      return (
        (e
          ? (t = e.replace(/^#\/?/, '')) && 'string' == typeof t
            ? t.replace(/^(https?:)?\/\//, '').replace(/\?.*$/, '')
            : ''
          : '') || '[index]'
      );
    },
    i = function(this: any, e, t) {
      if (((t = t || {}), e.env === r.BROWSER && window))
        if (
          e.toolKit.extend(
            {
              enable: !0,
            },
            t,
          ).enable
        ) {
          e.logger.info('wpkflowPlugin已开启');
          var i,
            a,
            s = function() {
              e.reportFlow();
            };
          e.toolKit.onListen(window, 'load', s, !0),
            e.spa &&
              (routerPlugin.apply(this, [config]),
              (i = function(t) {
                o(location.hash) &&
                  ((e._sid = e.toolKit.uuid()), e.reportFlow());
              }),
              (a = function(t) {
                o(t.detail) && ((e._sid = e.toolKit.uuid()), e.reportFlow());
              }),
              e.toolKit.onListen(window, 'hashchange', i),
              e.toolKit.onListen(window, 'historystatechange', a)),
            e.toolKit.onListen(window, 'beforeunload', function() {
              e.toolKit.offListen(window, 'load');
              e.toolKit.offListen(window, 'hashchange');
              e.toolKit.offListen(window, 'historystatechange');
              // @ts-ignore
              s = i = a = null;
            });
        } else e.logger.info('wpkflowPlugin已关闭');
    };
  i.prototype.pluginId = 'flow';
  return i;
}
