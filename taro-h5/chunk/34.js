(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"80":function(e,t,i){"use strict";i.r(t),i.d(t,"taro_radio_core",(function(){return o})),i.d(t,"taro_radio_group_core",(function(){return r}));var n=i(2),a=i(4),c=i(28),o=function(){function Radio(e){var t=this;Object(n.a)(this,Radio),Object(c.g)(this,e),this.onChange=Object(c.c)(this,"radiochange",7),this.value="",this.checked=!1,this.disabled=!1,this.isWillLoadCalled=!1,this.handleClick=function(){t.disabled||t.checked||(t.checked=!0)}}return Object(a.a)(Radio,[{"key":"watchChecked","value":function watchChecked(e){this.isWillLoadCalled&&e&&this.onChange.emit({"value":this.value})}},{"key":"watchId","value":function watchId(e){this.isWillLoadCalled&&e&&this.inputEl.setAttribute("id",e)}},{"key":"componentDidRender","value":function componentDidRender(){this.id&&this.el.removeAttribute("id")}},{"key":"componentWillLoad","value":function componentWillLoad(){this.isWillLoadCalled=!0}},{"key":"render","value":function render(){var e=this,t=this.checked,i=this.name,n=this.value,a=this.disabled;return Object(c.e)(c.a,{"className":"weui-cells_checkbox","onClick":this.handleClick},Object(c.e)("input",{"ref":function ref(t){t&&(e.inputEl=t,e.id&&t.setAttribute("id",e.id))},"type":"radio","name":i,"value":n,"class":"weui-check","checked":t,"disabled":a,"onChange":function onChange(e){return e.stopPropagation()}}),Object(c.e)("i",{"class":"weui-icon-checked"}),Object(c.e)("slot",null))}},{"key":"el","get":function get(){return Object(c.d)(this)}}],[{"key":"watchers","get":function get(){return{"checked":["watchChecked"],"id":["watchId"]}}}]),Radio}(),r=function(){function RadioGroup(e){Object(n.a)(this,RadioGroup),Object(c.g)(this,e),this.onChange=Object(c.c)(this,"change",7),this.uniqueName=Date.now().toString(36)}return Object(a.a)(RadioGroup,[{"key":"function","value":function _function(e){if(e.stopPropagation(),"TARO-RADIO-CORE"===e.target.tagName){var t=e.target;if(t.checked)this.el.querySelectorAll("taro-radio-core").forEach((function(e){e!==t&&(e.checked=!1)})),this.value=e.detail.value,this.onChange.emit({"value":this.value})}}},{"key":"componentDidLoad","value":function componentDidLoad(){var e=this;this.el.querySelectorAll("taro-radio-core").forEach((function(t){t.setAttribute("name",e.name||e.uniqueName)})),Object.defineProperty(this.el,"value",{"get":function get(){if(!e.value){var t=e.el.querySelectorAll("taro-radio-core");e.value=e.getValues(t)}return e.value},"configurable":!0})}},{"key":"getValues","value":function getValues(e){var t="";return Array.from(e).forEach((function(e){var i=e.querySelector("input");(null==i?void 0:i.checked)&&(t=i.value||"")})),t}},{"key":"render","value":function render(){return Object(c.e)(c.a,{"class":"weui-cells_radiogroup"})}},{"key":"el","get":function get(){return Object(c.d)(this)}}]),RadioGroup}()}}]);