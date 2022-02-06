/*! For license information please see 8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"79":function(e,t,r){"use strict";r.r(t),r.d(t,"taro_pull_to_refresh",(function(){return f}));var n=r(2),o=r(4),s=r(28),a=r(92),i=r(31);function setTransform(e,t){e.transform=t,e.webkitTransform=t,e.MozTransform=t}var c="undefined"!=typeof navigator&&/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),l={"activate":"release","deactivate":"pull","release":"loading","finish":"finish"},u=!1;try{var h=Object.defineProperty({},"passive",{"get":function get(){u=!0}});window.addEventListener("cancel",(function(){return{}}),h)}catch(e){}var d=!!u&&{"passive":!1},f=function(){function PullToRefresh(e){var t=this;Object(n.a)(this,PullToRefresh),Object(s.g)(this,e),this.onRefresh=Object(s.c)(this,"refresh",7),this.prefixCls="rmc-pull-to-refresh",this.distanceToRefresh=50,this.damping=100,this.indicator=l,this.currSt="deactivate",this.dragOnEdge=!1,this._ScreenY=0,this._startScreenY=0,this._lastScreenY=0,this._isMounted=!1,this.triggerPullDownRefresh=function(e){!t.dragOnEdge&&t._isMounted&&(e?(t._lastScreenY=t.distanceToRefresh+1,t.currSt="release",t.setContentStyle(t._lastScreenY)):(t.currSt="finish",t.reset()))},this.init=function(){var e=t.scrollContainer;t._to={"touchstart":t.onTouchStart.bind(t,e),"touchmove":t.onTouchMove.bind(t,e),"touchend":t.onTouchEnd.bind(t,e),"touchcancel":t.onTouchEnd.bind(t,e)},Object.keys(t._to).forEach((function(r){e.addEventListener(r,t._to[r],d)}))},this.destroy=function(){var e=t.scrollContainer;Object.keys(t._to).forEach((function(r){e.removeEventListener(r,t._to[r])}))},this.onTouchStart=function(e,r){t._ScreenY=t._startScreenY=r.touches[0].screenY,t._lastScreenY=t._lastScreenY||0},this.isEdge=function(e){var r=t.scrollContainer;return r&&r===document.body?(document.scrollingElement?document.scrollingElement:document.body).scrollTop<=0:e.scrollTop<=0},this.damp=function(e){return Math.abs(t._lastScreenY)>t.damping?0:e*=.6*(1-Math.abs(t._ScreenY-t._startScreenY)/window.screen.height)},this.onTouchMove=function(e,r){var n=r.touches[0].screenY;if(!(t._startScreenY>n)&&t.isEdge(e)){t.dragOnEdge||(t._ScreenY=t._startScreenY=r.touches[0].screenY,t.dragOnEdge=!0),r.cancelable&&r.preventDefault();var o=Math.round(n-t._ScreenY);t._ScreenY=n,t._lastScreenY+=t.damp(o),t.setContentStyle(t._lastScreenY),Math.abs(t._lastScreenY)<t.distanceToRefresh?"deactivate"!==t.currSt&&(t.currSt="deactivate"):"deactivate"===t.currSt&&(t.currSt="activate"),c&&r.changedTouches[0].clientY<0&&t.onTouchEnd()}},this.onTouchEnd=function(){t.dragOnEdge&&(t.dragOnEdge=!1),"activate"===t.currSt?(t.currSt="release",t.onRefresh.emit(t),t._lastScreenY=t.distanceToRefresh+1,t.setContentStyle(t._lastScreenY)):"release"===t.currSt?(t._lastScreenY=t.distanceToRefresh+1,t.setContentStyle(t._lastScreenY)):t.reset()},this.reset=function(){t._lastScreenY=0,t.setContentStyle(0)},this.setContentStyle=function(e){t.contentRef&&setTransform(t.contentRef.style,e?"translate3d(0px,".concat(e,"px,0)"):"")}}return Object(o.a)(PullToRefresh,[{"key":"scrollContainer","get":function get(){return null===document.querySelector(".taro-tabbar__tabbar")?window:document.querySelector(".taro-tabbar__panel")||window}},{"key":"statusChange","value":function statusChange(){if("release"===this.currSt){var e=this.el.closest(".taro_page");e&&e.__page&&e.__page.onPullDownRefresh()}}},{"key":"disconnectedCallback","value":function disconnectedCallback(){this.destroy()}},{"key":"componentDidLoad","value":function componentDidLoad(){var e=this;this.init(),this._isMounted=!0,i.eventCenter.on("__taroStartPullDownRefresh",(function(t){var r=t.successHandler,n=t.errorHandler;try{e.triggerPullDownRefresh(!0),r({"errMsg":"startPullDownRefresh: ok"})}catch(e){n({"errMsg":"startPullDownRefresh: fail"})}})),i.eventCenter.on("__taroStopPullDownRefresh",(function(t){var r=t.successHandler,n=t.errorHandler;try{e.triggerPullDownRefresh(!1),r({"errMsg":"stopPullDownRefresh: ok"})}catch(e){n({"errMsg":"stopPullDownRefresh: fail"})}}))}},{"key":"render","value":function render(){var e=this,t=function renderRefresh(t){var r=e.currSt,n=e.dragOnEdge,o=e.prefixCls,i=Object(a.a)(t,!n&&"".concat(o,"-transition")),c="activate"===r||"release"===r;return Object(s.e)("div",{"class":"".concat(o,"-content-wrapper")},Object(s.e)("div",{"class":i,"ref":function ref(t){e.contentRef=t}},c&&Object(s.e)("div",{"class":"".concat(o,"-indicator")},Object(s.e)("div",null),Object(s.e)("div",null),Object(s.e)("div",null)),Object(s.e)("slot",null)))};return this.scrollContainer?t("".concat(this.prefixCls,"-content ").concat(this.prefixCls,"-down")):Object(s.e)(s.a,{"class":Object(a.a)(this.prefixCls,"".concat(this.prefixCls,"-down"))},t("".concat(this.prefixCls,"-content")))}},{"key":"el","get":function get(){return Object(s.d)(this)}}],[{"key":"watchers","get":function get(){return{"currSt":["statusChange"]}}}]),PullToRefresh}();f.style=".rmc-pull-to-refresh-content{transform-origin:left top 0px}.rmc-pull-to-refresh-content-wrapper{overflow:hidden}.rmc-pull-to-refresh-transition{transition:transform 0.3s}@keyframes rmc-pull-to-refresh-indicator{50%{opacity:0.2}100%{opacity:1}}.rmc-pull-to-refresh-indicator{text-align:center;height:30px;line-height:10px}.rmc-pull-to-refresh-indicator>div{background-color:grey;width:6px;height:6px;border-radius:100%;margin:3px;animation-fill-mode:both;display:inline-block;animation:rmc-pull-to-refresh-indicator 0.5s 0s infinite linear}.rmc-pull-to-refresh-indicator>div:nth-child(0){animation-delay:-0.1s !important}.rmc-pull-to-refresh-indicator>div:nth-child(1){animation-delay:-0.2s !important}.rmc-pull-to-refresh-indicator>div:nth-child(2){animation-delay:-0.3s !important}.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator{margin-top:-25px}"},"92":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(5);var o=function createCommonjsModule(e,t,r){return e(r={"path":t,"exports":{},"require":function require(e,t){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}((function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var s=Object(n.a)(o);if("string"===s||"number"===s)e.push(o);else if(Array.isArray(o)){if(o.length){var a=classNames.apply(null,o);a&&e.push(a)}}else if("object"===s)if(o.toString===Object.prototype.toString)for(var i in o)t.call(o,i)&&o[i]&&e.push(i);else e.push(o.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}))}}]);