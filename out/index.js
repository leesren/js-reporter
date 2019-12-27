"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var config1 = {
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
            cn: 'http://127.0.0.1:7003/track/transformLog',
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
function wpkReporterEntry() {
    var t = utils_1.envCheck();
    var r = 'object' == typeof t && t + '' == '[object process]';
    var o = 'function' == typeof callNative || 'function' == typeof nativeLog;
    return o ? reportNative_5() : r ? reportNode_14() : reportBrowser_17(config1);
}
function reportNative_5(e, n) {
    var r = n(1), o = n(13);
    e.exports = function (e) {
        var t = new r(e);
        return t.initialize(o), t;
    };
}
function reportNode_14() { }
function reportBrowser_17(config) {
    var r = utils_1.core(config);
    var o = utils_1.n18(config);
    return function (customConfig) {
        var t = new r(customConfig);
        t.initialize(o);
        return t;
    };
}
var wpkReporter = wpkReporterEntry();
module.exports = wpkReporter;
//# sourceMappingURL=index.js.map