(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{398:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"深入理解javascript执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入理解javascript执行上下文"}},[t._v("#")]),t._v(" 深入理解javascript执行上下文")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("javascript执行一段可执行代码时，会创建对应的上下文（全局上下文或函数上下文）")]),t._v(" "),a("h2",{attrs:{id:"每个执行上下文-都有三个重要属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每个执行上下文-都有三个重要属性"}},[t._v("#")]),t._v(" 每个执行上下文， 都有三个重要属性")]),t._v(" "),a("ul",[a("li",[t._v("变量对象")]),t._v(" "),a("li",[t._v("作用域链")]),t._v(" "),a("li",[t._v("this")])]),t._v(" "),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"执行分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行分析"}},[t._v("#")]),t._v(" 执行分析")]),t._v(" "),a("ol",[a("li",[t._v("执行全局代码，创建全局上下文，把全局上下文压入执行上下文栈")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  ECStack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    globalContext\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("初始化全局上下文")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  globalContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" checkscope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" globalContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" globalContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("初始化同时，checkscope函数被创建，保存作用域链到checkscope函数的内部属性[[scope]]")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  checkscope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    globalContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("执行checkscope函数，创建checkscope函数执行上下文，把checkscope函数执行上下文压入执行上下文栈")]),t._v(" "),a("li",[t._v("初始化checkscope函数执行上下文\n5.1 复制checkscope函数属性[[scope]]创建作用域链  "),a("code",[t._v("{Scope: [globalContext.VO]}")]),t._v("\n5.2 用arguments创建活动对象   "),a("code",[t._v("{arguments: { length: 0}}")]),t._v("\n5.3 初始化活动对象，即加入形参，变量声明，函数声明\n5.4 将活动对象压入checkscope作用域链顶端\n同时，f函数被创建，保存作用域链到f函数的内部属性[[scope]]")]),t._v(" "),a("li",[t._v("执行f函数，创建f函数执行上下文，把f函数执行上下文压入执行上下文栈")]),t._v(" "),a("li",[t._v("初始化f函数执行上下文，以下跟第5步相同：\n7.1 复制f函数属性[[scope]]创建作用域链\n7.2 用arguments创建活动对象\n7.3 初始化活动对象，即加入形参，变量声明，函数声明\n7.4 将活动对象压入f作用域链顶端")]),t._v(" "),a("li",[t._v("f函数执行，沿着作用域链查找scope，返回scope的值")]),t._v(" "),a("li",[t._v("f函数执行完毕，把f函数弹出执行上下文栈")]),t._v(" "),a("li",[t._v("checkscope函数执行完毕，把checkscope函数弹出执行上下文栈")]),t._v(" "),a("li",[t._v("全局代码执行完毕，把globalContext弹出执行上下文栈")])])])}),[],!1,null,null,null);s.default=e.exports}}]);