(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"85":function(e,t,i){"use strict";i.r(t),i.d(t,"taro_switch_core",(function(){return h}));var c=i(2),n=i(4),o=i(28),h=function(){function Switch(e){var t=this;Object(c.a)(this,Switch),Object(o.g)(this,e),this.onChange=Object(o.c)(this,"change",7),this.type="switch",this.checked=!1,this.color="#04BE02",this.disabled=!1,this.isWillLoadCalled=!1,this.switchChange=function(e){e.stopPropagation();var i=e.target.checked;t.isChecked=i,t.onChange.emit({"value":i})}}return Object(n.a)(Switch,[{"key":"function","value":function _function(e,t){this.isWillLoadCalled&&e!==t&&(this.isChecked=e)}},{"key":"componentWillLoad","value":function componentWillLoad(){this.isWillLoadCalled=!0,this.isChecked=this.checked}},{"key":"componentDidLoad","value":function componentDidLoad(){var e=this;Object.defineProperty(this.el,"value",{"get":function get(){return e.isChecked},"configurable":!0})}},{"key":"render","value":function render(){var e=this.type,t=this.color,i=this.isChecked,c=this.name,n=this.disabled,h=i?{"borderColor":t||"04BE02","backgroundColor":t||"04BE02"}:{};return Object(o.e)("input",{"type":"checkbox","class":"weui-".concat(e),"style":h,"checked":i,"name":c,"disabled":n,"onChange":this.switchChange})}},{"key":"el","get":function get(){return Object(o.d)(this)}}],[{"key":"watchers","get":function get(){return{"checked":["function"]}}}]),Switch}();h.style="taro-switch-core{display:inline-block;width:52px;height:32px}taro-switch-core .weui-switch{display:block;width:100%;height:100%}"}}]);