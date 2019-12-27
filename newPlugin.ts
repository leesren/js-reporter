import axios from 'axios';
import { get, remove, set } from 'js-cookie';
// import wpkReporter from 'js-reporter'; // 导入基础sdk

// import wpkReporter from 'wpk-reporter'; // 导入基础sdk

const wpkReporter = window['wpkReporter'];
import interfaceReporter from 'js-reporter/dist/plugins/interface';
import globalerrorReporter from 'js-reporter/dist/plugins/globalerror';
import performanceReporter from 'js-reporter/dist/plugins/performance';
import ucReporter from 'js-reporter/dist/plugins/ucparam';
import flowReporter from 'js-reporter/dist/plugins/flow';
const $wpk = new wpkReporter({
  bid: '5ljeschs-nk2v7ecl', // 新建应用时确定
  spa: true, // 单页应用开启后，可更准确地采集PV
  uid: '0ca396c5-6508-47f2-a7f3-1e7fb4b976bf', // 支持函数，需返回最终的uid字符串
  rel: '', // 支持函数，需返回最终的版本字符串
  addr: {
    cn: 'http://127.0.0.1:7001/track/transformLog', // 覆盖默认地址
  },
  plugins: [
    // [
    //   globalerrorReporter,
    //   {
    //     resErr: true,
    //   },
    // ],
    // [interfaceReporter],
    // [performanceReporter],
    // [ucReporter, { params: 'prveosfrnw' }],
    // [dvaRequest, {}],
  ],
});
// $wpk.install(); // 初始化sdk 必须调用
$wpk.installAll(); // 初始化sdk 必须调用
// $wpk.addPlugin(dvaRequestHandler, {
//   json: true,
//   // withResp:false,
//   responseHandler: function({ url, status, response }) {
//     const ok = response.code == 200;
//     return {
//       bizCode: response.code, // 业务状态码处理
//       // msg: ok ? '' : response.message,
//       msg: response.message,
//       success: ok,
//       service: 'ibmb',
//     };
//   },
// });
$wpk.addPlugin(exposureTag, {});

function fetchData() {
  fetch('https://houtai.baidu.com/api/mock2/service/data?keywords=');
}

setTimeout(() => {
  fetchData();

  axios.get('/api/chart/count', {
    headers: {
      'auth.token': 'xxxxxxx',
    },
  });
}, 5000);

/**
 * 埋点统计插件
 * <Tag data-yd-anchor-tag={"Main.body.tag."+name}>首页</Tag>
 */
function exposureTag(...wk) {
  const [e, pluginConfig, proConfig] = wk;
  const acbLength = pluginConfig.acbLength || 2;
  const anchorName = pluginConfig.anchorName || 'data-yd-anchor-tag';
  const isNullOrEmpty = obj => {
    return (
      (obj !== 0 || obj !== '0') &&
      (obj === undefined ||
        typeof obj === 'undefined' ||
        obj === null ||
        obj === 'null' ||
        obj === '')
    );
  };
  const getACBtarget = (node, length = 0) => {
    //冒泡场景下将除document外所有父元素添加点击事件
    if (node.getAttribute(anchorName)) {
      return node.getAttribute(anchorName);
    }
    //length 限制采集内容大小，只采集有效数据
    if (!isNullOrEmpty(node)) {
      var parentNode = node.parentNode;
      /* 自动埋点采集点击数据时,使用下面的建议*/
      if (
        Object.prototype.toString.call(parentNode) !==
          Object.prototype.toString.call(document) &&
        length < acbLength
      ) {
        return getACBtarget(parentNode, ++length);
      }
    }
    return '';
  };
  document.body.addEventListener('click', evt => {
    // data-yd-anchor-tag="pageName.container.英文名.中文解释"
    var n: any = evt.srcElement ? evt.srcElement : evt.target;
    if (
      ('A' !== n.nodeName || /^javascript.*$|^#.*$/gi.test(''),
      n.offsetWidth && n.offsetHeight)
    ) {
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
        ].join(','), // 点击位置信息
      };
      e.report(clickInfo);
    }
  });
}
/**
 * 设备统计
 */
function deviceId(...wk) {
  const [e, pluginConfig, proConfig] = wk;
  // 设备id，需要设置一个很长的时间
  const setDeviceId = function(uuid) {
    const cookieCross = 'ThinkingDataJSSDKCross';
    let isNewUser = false;
    let deviceId = get(cookieCross);
    if (!deviceId) {
      set(cookieCross, uuid, {
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
