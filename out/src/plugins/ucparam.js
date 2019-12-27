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
//# sourceMappingURL=ucparam.js.map