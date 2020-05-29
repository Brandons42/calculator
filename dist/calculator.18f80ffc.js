parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"4W9k":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=function(t){function n(){var t,a;e(this,n);for(var c=arguments.length,o=new Array(c),u=0;u<c;u++)o[u]=arguments[u];return r(l(a=i(this,(t=s(n)).call.apply(t,[this].concat(o)))),"state",{display:"0"}),r(l(a),"_clear",function(){return a.setState({display:"0"})}),r(l(a),"_decimal",function(){return a.setState({display:a.state.display.includes(".")&&!a.state.display.includes(" ")||a.state.display.includes(".")&&!a.state.display.includes(" ")&&a.state.display.lastIndexOf(".")>a.state.display.lastIndexOf(" ")?a.state.display:a.state.display+"."})}),r(l(a),"_flip",function(){if(a.state.display.includes(" ")){var t=a.state.display.lastIndexOf(" ")+1;t===a.state.display.length?a.setState({display:a.state.display+"-"}):a.state.display.endsWith("-")?a.setState({display:a.state.display.substring(0,a.state.display.length-1)}):"-"===a.state.display.charAt(t)?a.setState({display:a.state.display.substring(0,t)+a.state.display.substring(t+1)}):a.setState({display:a.state.display.substring(0,t)+"-"+a.state.display.substring(t)})}else a.state.display.startsWith("-")?a.setState({display:a.state.display.substring(1)}):a.setState({display:"-"+a.state.display})}),r(l(a),"_onClickNum",function(t){"0"===a.state.display?a.setState({display:t}):"-0"===a.state.display?a.setState({display:"-"+t}):a.setState({display:a.state.display+t})}),r(l(a),"_onClickOp",function(t){var e,n=function(){return a.state.display.substring(0,a.state.display.length-3)};e=a.state.display.endsWith(" ")?"-"===t?"".concat(a.state.display,"-"):"".concat(n()," ").concat(t," "):a.state.display.endsWith("-")?"-"===t?a.state.display:"".concat(n()).concat(t," "):"".concat(a.state.display," ").concat(t," "),a.setState({display:e})}),r(l(a),"_solve",function(){var t=function(t){var e=t.split(/ x | \/ /g);if(e[0]=parseFloat(e[0]),1===e.length)return e[0];var n=t.replace(/[^(x|\/)]/g,"").split("");return e.reduce(function(t,a,i){return"-"!==a?(a=parseFloat("-"===e[i-1]?-a:a),"x"===n[i-1]?t*a:t/a):t})},e=a.state.display.split(/ \+ | \- /g);if(e[0]=t(e[0]),1===e.length)a.setState({display:e[0].toString()});else{var n=a.state.display.replace(/[^(\+|\-)]/g,"").split("");a.setState({display:e.reduce(function(e,a,i){if(0!==a.length)return a=t(a),"+"===n[i-1]?e+a:e-a}).toString()})}}),a}return c(n,React.Component),a(n,[{key:"render",value:function(){var t=this;return React.createElement("div",null,React.createElement("section",{id:"calculator"},React.createElement("div",{id:"screen"},React.createElement("p",{id:"display"},this.state.display)),React.createElement("button",{className:"button",id:"clear",onClick:this._clear},"AC"),React.createElement("button",{className:"button",onClick:this._flip},"+/-"),React.createElement("button",{className:"button",id:"subtract",onClick:function(){return t._onClickOp("-")}},"-"),React.createElement("button",{className:"button",id:"divide",onClick:function(){return t._onClickOp("/")}},"/"),React.createElement("button",{className:"button",id:"multiply",onClick:function(){return t._onClickOp("x")}},"X"),React.createElement("button",{className:"button",id:"add",onClick:function(){return t._onClickOp("+")}},"+"),React.createElement("button",{className:"button",id:"seven",onClick:function(){return t._onClickNum("7")}},"7"),React.createElement("button",{className:"button",id:"eight",onClick:function(){return t._onClickNum("8")}},"8"),React.createElement("button",{className:"button",id:"nine",onClick:function(){return t._onClickNum("9")}},"9"),React.createElement("button",{className:"button",id:"four",onClick:function(){return t._onClickNum("4")}},"4"),React.createElement("button",{className:"button",id:"five",onClick:function(){return t._onClickNum("5")}},"5"),React.createElement("button",{className:"button",id:"six",onClick:function(){return t._onClickNum("6")}},"6"),React.createElement("button",{className:"button",id:"one",onClick:function(){return t._onClickNum("1")}},"1"),React.createElement("button",{className:"button",id:"two",onClick:function(){return t._onClickNum("2")}},"2"),React.createElement("button",{className:"button",id:"three",onClick:function(){return t._onClickNum("3")}},"3"),React.createElement("button",{className:"button",id:"zero",onClick:function(){return t._onClickNum("0")}},"0"),React.createElement("button",{className:"button",id:"decimal",onClick:this._decimal},"."),React.createElement("button",{className:"button",id:"equals",onClick:this._solve},"=")))}}]),n}();exports.default=u;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./Calculator"));function t(e){return e&&e.__esModule?e:{default:e}}ReactDOM.render(React.createElement(e.default,null),document.getElementById("root"));
},{"./Calculator":"4W9k"}]},{},["Focm"], null)
//# sourceMappingURL=calculator.18f80ffc.js.map