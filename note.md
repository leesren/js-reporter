# JS 日志采集

<a name="ad98a907"></a>

# 1 SDK 引入

> SDK 共有两种方式引入，分别为 npm 模块方式，以及普通的 script 标签引入。

<a name="b4b44920"></a>

## 1.1 script 方式(支持 https)

```html
<!-- 核心引入 -->
<script
  src="https://g.alicdn.com/woodpeckerx/jssdk/wpkReporter.js"
  crossorigin="true"
></script>
<!-- 插件引入 -->
<script
  src="https://g.alicdn.com/woodpeckerx/jssdk/plugins/globalerror.js"
  crossorigin="true"
></script>
<!-- combo方式 -->
<script
  src="https://g.alicdn.com/woodpeckerx/jssdk??wpkReporter.js,plugins/globalerror.js"
  crossorigin="true"
></script>
```

<a name="f56b8ed1"></a>

## 1.2 script 方式快捷引入

```html
<!-- 快捷引入(探针)：导入+自动初始化 -->
<!-- 注意：引入这段脚本后将启用SDK所有的上报功能，建议阅读完文档再决定是否直接引用 -->
<script>
  !(function(c, i, e, b) {
    var h = i.createElement("script");
    var f = i.getElementsByTagName("script")[0];
    h.type = "text/javascript";
    h.crossorigin = true;
    h.onload = function() {
      c[b] || (c[b] = new c.wpkReporter({ bid: "wpktest" }));
      c[b].installAll();
    };
    f.parentNode.insertBefore(h, f);
    h.src = e;
  })(
    window,
    document,
    "https://g.alicdn.com/woodpeckerx/jssdk/wpkReporter.js",
    "__wpk"
  );
</script>
```

<a name="3a88a021"></a>

## 1.3 npm 模块方式

```javascript
1. 安装依赖
npm i wpk-reporter --save

2. 引入核心
import wpkReporter from 'wpk-reporter'

3. 引入插件
import wpkinterfacePlugin from 'wpk-reporter/dist/plugins/interface'
```

<a name="a4bc7a18"></a>

# 2 上报

<a name="3961902f"></a>

## 2.1 demo 预览

```javascript
const wpk = new wpkReporter({
  bid: "wpk新建应用后分配",
  rel: "", // 支持函数，需返回最终的版本字符串'
  uid: "", // 支持函数，需返回最终的uid字符串
  plugins: [], // 可选
  spa: false // 如果你的应用是spa，那就大胆的设为true吧，默认false
});
wpk.install(); // 初始化！一定记得调用
// 现在，试一下主动上报一条日志
wpk.report({
  category: 100, // 必填，一般是100以上的数字，1~99为预留为系统使用
  msg: "hello wpk"
});
```

<a name="766585f5"></a>

## 2.2 配置参数

- **bid 必填**<br />

啄木鸟平台应用标识，新建后分配

- **rel 可选，推荐设置**<br />

前端资源版本号，强烈推荐设置<br />支持字符串以及函数两种方式设置，函数最终需要返回一个字符串

- **uid 可选，推荐设置**<br />

浏览当前页面的用户唯一标识，强烈推荐设置，默认为 uuid<br />支持字符串以及函数两种方式设置，函数最终需要返回一个字符串

- **plugins 可选**<br />

需要开启的插件<br />没有设置任何插件时，默认加载 wpkflowPlugin 用于上报站点流量数据

- **sampleRate 可选**<br />

采样率，大业务（日志量大于 xxx / 天）推荐设置<br />默认规则，除了 性能数据的采样率为 10%，其余类型的日志均为 100%

- **beforeSend 可选**

参数为完整的 logData 对象<br />日志上报的前置处理，返回 false 可阻止日志上报，否则返回 true（记得一定要返回）

- **spa 可选**<br />

是否 spa 应用，默认 false<br />设为 true 后，可配合 wpkflowPlugin 更好的打点（自动监听 hashchange）

- **debug 可选**<br />

开启 debug 模式，默认 false<br />开启后，将会有更详细的打点过程日志输出，一般用于接入时联调分析，生产环境不建议打开

- **ignoreScriptError 可选**<br />

是否忽略 'Script Error'即第三方脚本错误，默认为 true

- **onlyCustom 可选（同时接入内核高可用的业务需关注）**<br />

是否关闭静默上报(插件提供的功能)，只保留自定义上报功能，默认为 false<br />用途：用于规避内核上报的数据与 jssdk 的数据出现重复，同时也浪费流量，普通业务无需关注

<a name="4c4ebf8b"></a>

# 3 插件

sdk 核心默认只包含自定义打点，业务可按需添加插件，扩展 sdk 的打点能力。

<a name="1d8065bb"></a>

## 3.1 使用方式

<a name="45d55c59"></a>

### 3.1.1 构造方法传参

```javascript
import wpkinterfacePlugin from "wpk-reporter/dist/plugins/interface";
const wpk = new wpkReporter({
  // ...
  plugins: [[wpkinterfacePlugin, { sampleRate: 0.5 }]]
  // ...
});
// 如果是script方式引入插件，也可以直接使用 wpkinterfacePlugin变量
```

<a name="1d2bc5ad"></a>

### 3.1.2 接口方式

```javascript
// 确保已经引入
import wpkinterfacePlugin from "wpk-reporter/dist/plugins/interface";
// ... ...
wpk.addPlugin(interfacePlugin, { sampleRate: 0.5 });
```

<a name="bfdb0422"></a>

## 3.2 插件列表

- 3.2.1 **wpkglobalerrorPlugin (含 jserror resourceError) - 全局错误监控**<br />

_参数：opts_

```json
{
  jsErr: true, // 是否开启js error监控
  jsErrSampleRate: 1, // js error采样率，默认为 1
  jsErrFilter: fn, // js error过滤回调函数，参数为 error对象，返回 false则不上报
  resErr: false, // 是否开启资源加载异常监控
  resErrSampleRate: 1 // 资源异常监控采样率，默认为 1
  resErrFilter: fn // 资源加载异常过滤的回调函数，参数为 error对象，返回 false则不上报
}
```

默认只会捕获 js error(包括 unhandledrejection)，需要监控资源加载异常可以设置 resErr: true

- 3.2.2 **wpkinterfacePlugin - 接口异常监控**<br />

_参数： opts_

```json
{
  "enable": true, // 默认为 true，可设为false关闭插件功能
  "sampleRate": 1, // 采样率，默认为 1
  "withBody": false, // 是否上报请求的body参数，默认 false
  "errorFilter": function(params) {
    // 异常过滤回调函数，参数包含 请求地址、响应码及响应内容，返回 false则不上报
    // params格式为 {url: '', status: '', response: ''}
    // 业务可返回 {bizCode: '', msg: '', traceId: ''}，sdk会将他们一并上报
  }
}
```

默认自动上报所有基于 xhr 或 fetch 的异步请求，有特殊情况的可通过 errorFilter 自定义

- 3.2.3 **wpkperformancePlugin - 基础性能数据自动上报**<br />

_参数: opts_

```json
{
  "enable": true, // 默认为 true，可设为false关闭上报
  "sampleRate": 0.1 // 采样率，默认 100%
}
```

- 3.2.4 **wpkflowPlugin - 站点流量监控**<br />_参数：opts，{ spa: false  }_

默认在 onload 时会自动上报<br />在 sdk 构造参数中设置 spa: true，则在 hashchange 的时候也会自动上报

<a name="2cacf8cb"></a>

# 4 API

<a name="f411d0f1"></a>

## 说明

- 每条上报的数据 logData，我们称之为一条日志数据，类型为 Object<br />
- logData 的属性包含 SDK 所有构造参数，除此之外，还可以包含以下属性：<br />

_构造参数为全局，logData 参数则为单次有效，即只影响单次的上报_

**category** 日志监控分类（比如 性能、接口、js 错误等）<br />_1 ~ 99 为系统保留，自定义监控项由 100 开始，已分配的值：_<br />_1 js 错误，2 api，3 首屏性能，4 资源加载错误，5 页面访问，6 白屏, 7 harlog_

**msg** 日志描述信息<br />**c1** 自定义字段 1<br />**c2** 自定义字段 2<br />**c3** 自定义字段 3<br />**c4** 自定义字段 4<br />**c5** 自定义字段 5

- 所有 api 均返回当前 sdk 实例，因此你可以方便的进行链式调用<br />

<a name="893364be"></a>

## .report(logData)

主动上报一条日志，日志内容为 logData

<a name="38d5c954"></a>

## .reportFlow(logData)

主动上报一次访问的打点，logData 参数可选，需要额外参数时可赋值

<a name="d04499dd"></a>

## .reportError(error, logData)

主动上报一个 jserr 类型的打点，额外参数可在 logData 中设置

<a name="c28bcda3"></a>

## .reportApiError(data)

主动上报接口异常日志，data 为一个 Object 类型的参数，字段包含

```json
{
  msg: '',
  url: '',
  method: '',
  queryString: '',
  body: '',
  response: '',
  status: '',
  spent: ''
  c1: '', c2: '', c3: '', c4: '', c5: ''
}
```

<a name="cb8f865b"></a>

## .setConfig(opts)

更新 sdk 实例配置

<a name="0f0f8533"></a>

## .install()

sdk 安装，即初始化所有的设置，包含各个插件的初始化(在 plugins 参数中指定)等<br />调用此方法后，sdk 的初始化工作才算完成，下面才能成功调用其他 API

<a name="db3371ca"></a>

## .installAll()

sdk 安装，初始化所有的设置，包含内置的所有插件，及安装全家桶，适合不接内核的场景

<a name="3f07538d"></a>

## .diagnose()

诊断函数，方便调试<br />调用后会在浏览器控制台输出诊断信息，并重定向到一个新页面，显示上报结果
