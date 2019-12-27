"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var js_cookie_1 = require("js-cookie");
var js_reporter_1 = __importDefault(require("js-reporter"));
var $wpk = new js_reporter_1.default({
    bid: '5ljeschs-nk2v7ecl',
    spa: true,
    uid: '0ca396c5-6508-47f2-a7f3-1e7fb4b976bf',
    rel: '',
    addr: {
        cn: 'http://127.0.0.1:7001/track/transformLog',
    },
    plugins: [],
});
$wpk.installAll();
$wpk.addPlugin(dvaRequestHandler, {
    json: true,
    responseHandler: function (_a) {
        var url = _a.url, status = _a.status, response = _a.response;
        var ok = response.code == 200;
        return {
            bizCode: response.code,
            msg: response.message,
            success: ok,
            service: 'ibmb',
        };
    },
});
$wpk.addPlugin(exposureTag, {});
function fetchData() {
    fetch('https://houtai.baidu.com/api/mock2/service/data?keywords=');
}
setTimeout(function () {
    fetchData();
    axios_1.default.get('/api/chart/count', {
        headers: {
            'auth.token': 'xxxxxxx',
        },
    });
}, 5000);
function exposureTag() {
    var wk = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        wk[_i] = arguments[_i];
    }
    var e = wk[0], pluginConfig = wk[1], proConfig = wk[2];
    var acbLength = pluginConfig.acbLength || 2;
    var anchorName = pluginConfig.anchorName || 'data-yd-anchor-tag';
    var isNullOrEmpty = function (obj) {
        return ((obj !== 0 || obj !== '0') &&
            (obj === undefined ||
                typeof obj === 'undefined' ||
                obj === null ||
                obj === 'null' ||
                obj === ''));
    };
    var getACBtarget = function (node, length) {
        if (length === void 0) { length = 0; }
        if (node.getAttribute(anchorName)) {
            return node.getAttribute(anchorName);
        }
        if (!isNullOrEmpty(node)) {
            var parentNode = node.parentNode;
            if (Object.prototype.toString.call(parentNode) !==
                Object.prototype.toString.call(document) &&
                length < acbLength) {
                return getACBtarget(parentNode, ++length);
            }
        }
        return '';
    };
    document.body.addEventListener('click', function (evt) {
        var n = evt.srcElement ? evt.srcElement : evt.target;
        if (('A' !== n.nodeName || /^javascript.*$|^#.*$/gi.test(''),
            n.offsetWidth && n.offsetHeight)) {
            var c = n.getBoundingClientRect();
            var clickInfo = {
                category: proConfig.category.HITMAP,
                sampleRate: 1,
                evt_user: '当前用户',
                evt_time: Date.now(),
                evt_type: 'click',
                evt_ele: n.nodeName.toLowerCase(),
                evt_content: (n.innerText || n.textContent || '').trim(),
                evt_anchorTag: getACBtarget(n),
                evt_pp: [
                    isNaN(c.left) ? n.offsetLeft : c.left,
                    isNaN(c.top) ? n.offsetTop : c.top,
                    c.width,
                    c.height,
                ].join(','),
            };
            e.report(clickInfo);
        }
    });
}
function deviceId() {
    var wk = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        wk[_i] = arguments[_i];
    }
    var e = wk[0], pluginConfig = wk[1], proConfig = wk[2];
    var setDeviceId = function (uuid) {
        var cookieCross = 'ThinkingDataJSSDKCross';
        var isNewUser = false;
        var deviceId = js_cookie_1.get(cookieCross);
        if (!deviceId) {
            js_cookie_1.set(cookieCross, uuid, {
                secure: false,
                path: '/',
                expires: 10 * 365,
            });
            isNewUser = true;
        }
        deviceId = deviceId || uuid;
        return deviceId;
    };
}
deviceId.prototype.pluginId = 'deviceId';
function dvaRequestHandler(_a) {
    var _this = this;
    var res = _a.res, args = _a.args, start = _a.start, wk = _a.wk;
    var e = wk[0], pluginConfig = wk[1], proConfig = wk[2];
    var w = (res.url || args[0]).split('?');
    var h = w[0];
    var y = w[1] || '';
    var rConfig = args[1];
    var header = rConfig.headers ? JSON.stringify(rConfig.headers) : '';
    var method = rConfig ? rConfig.method || 'GET' : 'GET';
    var body = method !== 'GET' && rConfig && rConfig.body
        ? typeof rConfig.body == 'string'
            ? rConfig.body
            : JSON.stringify(rConfig.body)
        : '';
    res = res.clone();
    res = pluginConfig.json ? res.json() : res.text();
    res.then(function (n) {
        n = n || '';
        n = n > 2048 ? '[response content too large]' : n;
        var resHandler = pluginConfig.responseHandler
            ? pluginConfig.responseHandler.call(_this, {
                url: h,
                response: n,
                status: res.status,
            })
            : {};
        var w_rc = resHandler.bizCode || res.status;
        var content = {
            category: proConfig.category.API,
            sampleRate: 1,
            w_res: h,
            w_param: y,
            w_body: body,
            w_method: method,
            w_rc: w_rc,
            w_rt: Date.now() - start,
            w_resp: resHandler.msg || '',
            w_type: 16,
            w_bizCode: resHandler.bizCode || '',
            w_success: resHandler.success || '',
            w_service: resHandler.service || '',
            w_header: header,
        };
        e.report(content);
    });
}
dvaRequestHandler.prototype.pluginId = 'dvaRequest';
//# sourceMappingURL=newPlugin.js.map