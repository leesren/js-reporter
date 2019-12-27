import { utilsTool } from './utilsTool';
import { gerror, api, perf, ucparam, flow } from '../plugins';

export function core(config) {
  var r = utilsTool();
  var o = config;
  var i = o.px;
  var a = o.category;
  function s(e) {
    // @ts-ignore
    if (!(this instanceof s)) {
      // @ts-ignore
      return new s(e);
    }
    e = e || {};
    // @ts-ignore
    this._init = !1;
    // @ts-ignore
    this.toolKit = r(e);
    if (e.addr && typeof e.addr == 'object') {
      // @ts-ignore
      this.toolKit.extend(o.px.addr, e.addr || {});
    }
    // @ts-ignore
    this.logger = this.toolKit.logger;
    // @ts-ignore
    this.debug = e.debug || !1;

    !0 === e.debug &&
      // @ts-ignore
      this.logger.warn('[wpk] now in debug mode, you can see log details');
    // @ts-ignore
    this._plugins = e.plugins || [];
    // @ts-ignore
    this.bid = e.bid;
    // @ts-ignore
    this.cid = e.cid;
    // @ts-ignore
    this.uid = e.uid;
    // @ts-ignore
    this.rel = e.rel;
    // @ts-ignore
    this.spa = e.spa || !1;
    // @ts-ignore
    this.delay = !1 !== e.delay;
    // @ts-ignore
    this.cluster = e.cluster || 'cn';
    // @ts-ignore
    this.sampleRate = e.sampleRate;
    // @ts-ignore
    this.ignoreScriptError = !1 !== e.ignoreScriptError;
    // @ts-ignore
    this.onlyCustom = e.onlyCustom || !1;
    // @ts-ignore
    this.beforeSend = e.beforeSend || null;
    // @ts-ignore
    this.checkHidden = !1 !== e.checkHidden;
    // @ts-ignore
    this._waitingQueue = [];
  }
  function c(e) {
    var t = i.confAddr[e.cluster + (e.isHttps ? '_https' : '')],
      n = i.signKey;
    (e._startTime = Date.now()),
      (e._dying = !0),
      e.toolKit.dynamicConf(e.bid, e.VERSION, t, n, function(t) {
        (e._dying = !1), (e._dyConf = t), e.logger.warn('jconfig come back');
      });
  }
  s.prototype = {
    VERSION: '0.6.2',
    initialize: function(e) {
      (this.env = e.env),
        e.root.location &&
          -1 !== e.root.location.search.indexOf('wpkReporterDebug=true') &&
          (this.debug = !0),
        (this.send = e.send),
        (this.getWid = e.getWid),
        (this.isHttps = e.isHttps),
        e.bindUnloadEvent(this);
    },
    ready: function() {
      return this._init;
    },
    setConfig: function(e) {
      return this.toolKit.isObject(e) && this.toolKit.extend(this, e), this;
    },
    getConfig: function() {
      return o;
    },
    report: function(e) {
      if (
        ('string' == typeof e &&
          (e = {
            category: a.JSERR,
            msg: e,
          }),
        e.sampleRate || (e.sampleRate = 1),
        this.toolKit.canReport(e.sampleRate || this.sampleRate))
      ) {
        if (this.ready()) {
          var t;
          if ('function' == typeof this.beforeSend) {
            try {
              t = this.beforeSend(e);
            } catch (e) {
              this.logger.error('exec beforeSend failed for:', e);
            }
            if (!1 === t)
              return void this.logger.warn('beforeSend func return false');
            'object' == typeof t && (e = t);
          }
          var n = this.toolKit.getMetas(),
            r = e.bid || this.bid || n.wpkBid,
            o = e.cid || this.cid || n.wpkCid,
            s = e.rel || this.rel || n.wpkRel;
          this.toolKit.isFunction(s) && (s = s());
          var u = e.uid || this.uid;
          if (
            (this.toolKit.isFunction(u) && (u = u()),
            u || (u = this.getWid()),
            this.toolKit.extend(e, {
              w_bid: r,
              w_cid: o,
              w_rel: s,
              w_spa: this.spa,
              w_tm: this.toolKit.timestamp(),
              w_cnt: 1,
              uid: u,
              type: this.toolKit.categoryToType(e.category),
              sdk_ver: this.VERSION,
              log_src: 'jssdk',
              uc_param: this.uc_param || '',
              wid: this.wid,
            }),
            this._dyConf && Date.now() < this._dyConf.expireAt)
          ) {
            var l =
              void 0 !== this._dyConf[e.type]
                ? this._dyConf[e.type]
                : this._dyConf.all;
            if (void 0 !== l && !this.toolKit.canReport(l))
              return void this.logger.warn(
                '由于「动态配置」采样率控制，本条日志最终未上报，类型: ',
                e.type,
                ' 采样率: ',
                l,
              );
          } else
            !this._dying &&
              Date.now() - this._startTime >= 18e5 &&
              (this.logger.warn('syncing dynamic config'), c(this));
          var f: any = {
            app: r,
            cp: 'none',
            de: 4,
            seq: this.toolKit.generateSeq(),
            tm: this.toolKit.timestamp(!0),
            ud: e.uid,
            ver: e.w_rel,
            type: e.type,
            sver: e.sdk_ver,
          };
          f.sign = this.toolKit.computeSign(f, i.signKey);
          var d = i.addr[this.cluster + (this.isHttps ? '_https' : '')],
            p = this.toolKit.objToQueryString(f);
          this.toolKit.cutStr(e, ['c1', 'c2', 'c3', 'c4', 'c5'], 128),
            this.send(d, p, e);
        } else
          this._waitingQueue.push(e),
            this.logger.warn('sdk未完成初始化，数据已缓存');
        return this;
      }
      this.logger.warn(
        '由于采样率控制，本条日志最终未上报，采样率: ',
        e.sampleRate || this.sampleRate,
      );
    },
    reportFlow: function(e) {
      return (
        (e = e || {}),
        this.report(
          this.toolKit.extend(e || {}, {
            category: a.FLOW,
            sampleRate: 1,
          }),
        ),
        this
      );
    },
    reportError: function(e, t) {
      return this.toolKit.isError(e)
        ? (((t = t || {}).category = a.JSERR),
          (t.w_msg = e.toString()),
          (t.stack = this.toolKit.parseErrorStack(e)),
          (t.w_file = e.filename || ''),
          (t.w_line = e.lineno || ''),
          (t.w_col = e.colno || ''),
          this.report(t),
          this)
        : this.report(e, t);
    },
    reportApiError: function(e, t) {
      return (
        e &&
          (this.toolKit.isObject(e.queryString) &&
            (e.queryString = this.toolKit.objToQueryString(e.queryString)),
          this.report(
            this.toolKit.extend(
              t || {},
              {
                msg: e.msg || '',
                w_res: e.url,
                w_method: e.method,
                w_param: e.queryString,
                w_body: JSON.stringify(e.body),
                w_resp: e.response,
                w_rc: e.status,
                w_rt: e.spent || '',
                c1: e.c1,
                c2: e.c2,
                c3: e.c3,
                c4: e.c4,
                c5: e.c5,
              },
              {
                category: a.API,
                w_type: 16,
              },
            ),
          )),
        this
      );
    },
    diagnose: function() {
      this.ready()
        ? this.bid
          ? (this.sampleRate ||
              this.logger.warn(
                '没有设置采样率参数sampleRate，将使用默认采样率',
              ),
            this.report({
              _diagnose: !0,
            }))
          : this.logger.warn('缺少bid参数,请确认是否已正确设置')
        : this.logger.warn('wpkReporter尚未初始化，请确保已调用 install 方法');
    },
    addPlugin: function(e, t) {
      return (
        this._plugins.push([e, t]),
        'function' == typeof e &&
          this._init &&
          e.apply(this, [this, t, this.getConfig()]),
        this
      );
    },
    install: function() {
      c(this);
      var e = flow.apply(this, [this.getConfig()]);
      var t = this._plugins.length;
      var r = false;
      for (var o = 0; o < t; o++) {
        var i = this._plugins[o];
        var a = i[0]; // 函数
        var s = i[1]; // 配置

        a + '' == e + '' && (r = !0),
          a.apply(this, [this, s, this.getConfig()]);
      }
      return (
        (this.wid = this.getWid()),
        (this._sid = this.toolKit.uuid()),
        (this._init = !0),
        (0 !== t && r) ||
          (this.toolKit.logger.info('没有设置Flow，内置开启'),
          this.addPlugin(e)),
        this
      );
    },
    installAll: function() {
      var e = [
        [
          gerror.apply(this, [this.getConfig()]),
          {
            resErr: !0,
          },
        ],
        [api.apply(this, [this.getConfig()])],
        [perf],
        [flow.apply(this, [this.getConfig()])],
        [
          ucparam,
          {
            params: 'prveosfrnw',
          },
        ],
      ]; // 默认安装 plugins 下的所有插件
      var t = this._plugins.length;
      if (0 === t) this._plugins = e;
      else {
        var r: any = [];
        var o = e.length;
        for (var i = 0; i < o; i++) {
          var a: any = e[i];
          for (var s = 0; s < t; s++) {
            if (
              a[0].prototype.pluginId === this._plugins[s][0].prototype.pluginId
            ) {
              // 如果已经存在插件了，就不安装了
              a = this._plugins[s];
              break;
            }
          }
          r.push(a);
        }
        this._plugins = r;
      }
      return this.install();
    },
    uninstall: function() {
      return (this._plugins = []), (this._init = !1), this;
    },
  };
  return s;
}
