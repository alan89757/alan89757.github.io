(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{637:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("nodejs教程，适合有一定nodejs基础的小伙伴")]),t._v(" "),a("h2",{attrs:{id:"用法示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法示例"}},[t._v("#")]),t._v(" 用法示例")]),t._v(" "),a("p",[t._v("使用express启动一个web服务")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hostname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Server running at http://")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("hostname"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"全局对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局对象"}},[t._v("#")]),t._v(" 全局对象")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法和属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("示例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Buffer")]),t._v(" "),a("td",[t._v("处理二进制数据")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("__dirname")]),t._v(" "),a("td",[t._v("当前执行脚本所在的目录")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("__filename")]),t._v(" "),a("td",[t._v("当前所执行脚本的文件名")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("global")]),t._v(" "),a("td",[t._v("全局命名空间对象(只属于当前模块下)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("process")]),t._v(" "),a("td",[t._v("进程对象")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("module")]),t._v(" "),a("td",[t._v("当前模块的引用")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("exports")]),t._v(" "),a("td",[t._v("module.exports 的快捷引用方式")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("require")]),t._v(" "),a("td",[t._v("引入模块(只属于当前模块下)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("require.cache")]),t._v(" "),a("td",[t._v("模块在引入时会缓存到该对象中")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("require.resolve()")]),t._v(" "),a("td",[t._v("不会加载模块，只返回解析后的文件名")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("console")]),t._v(" "),a("td",[t._v("打印stdout和stderr")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("setTimeout/clearTimeout")]),t._v(" "),a("td",[t._v("新增/删除定时器")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("setInterval/clearInterval")]),t._v(" "),a("td",[t._v("新增/删除定时器")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("setImmediate")]),t._v(" "),a("td",[t._v("微任务")]),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"console类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#console类"}},[t._v("#")]),t._v(" Console类")]),t._v(" "),a("p",[t._v("可用于创建具有可配置的输出流的简单记录器。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他用法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Console "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'console'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Console "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("console用法等于"),a("code",[t._v("new Console(process.stdout, process.stderr);")]),t._v("，通常是异步")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 常见应用（重写了浏览器的console）")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warn\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dir\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trace\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assert\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeEnd\n\n")])])]),a("h2",{attrs:{id:"定时器-timers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时器-timers"}},[t._v("#")]),t._v(" 定时器（Timers）")]),t._v(" "),a("p",[a("code",[t._v("require('timers')")]),t._v("\n常用API: setTimeout,clearTimeout,setInterval,clearInterval,setImmediate,clearImmediate,ref,unref")]),t._v(" "),a("h2",{attrs:{id:"模块-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块-modules"}},[t._v("#")]),t._v(" 模块(modules)")]),t._v(" "),a("h4",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.bookstack.cn/read/nodebook/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs基础教程"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.bookstack.cn/read/nodejs-api-doc-cn/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs Api文档"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.bookstack.cn/read/nodejs/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs中文文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);