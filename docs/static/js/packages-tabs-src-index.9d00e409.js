(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./packages/tabs/src/index.css":function(e,t,n){(e.exports=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,'.t7-tabs{clear:both;margin-bottom:20px}.t7-tabs__item,.t7-tabs__list{list-style:none;margin:0}.t7-tabs__list{font-size:0;margin-bottom:-1px;padding-left:15px;padding-right:20px;white-space:nowrap;position:relative;z-index:1}.t7-tabs__item{-moz-user-select:-moz-none;-webkit-user-select:none;-ms-user-select:none;user-select:none;background:#f6f6f6;border:1px solid #ddd;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;display:inline-block;font-size:13px;margin-left:5px;padding:5px 10px;outline:0}.t7-tabs__item:hover{background:#ffd}.t7-tabs__item[aria-selected=true]{background:#fff;border-bottom-color:#fff}.t7-tabs__item:focus{border-color:#39f;box-shadow:0 0 2px 0 #39f}.t7-tabs__panel{border:1px solid #ddd;border-radius:3px;padding-top:20px;padding-left:20px;padding-right:20px;z-index:0}.t7-tabs__panel[aria-hidden=true]{display:none}.t7-tabs__panel:after,.t7-tabs__panel:before{content:".";display:block;overflow:hidden;visibility:hidden;font-size:0;line-height:0;width:0;height:0}.t7-tabs__panel:after{clear:both}',""])},"./packages/tabs/src/index.css":function(e,t,n){var o=n("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./packages/tabs/src/index.css");"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},a=n("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals),e.hot.accept("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./packages/tabs/src/index.css",function(){var t=n("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./packages/tabs/src/index.css");if("string"===typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,o=0;for(n in e){if(!t||e[n]!==t[n])return!1;o++}for(n in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},"./packages/tabs/src/index.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/tabs/node_modules/@t7/utils/dist/index.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=!(r=p(t).call(this,e))||"object"!==l(r)&&"function"!==typeof r?d(o):r,Object(s.bind)(d(d(n))),n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.a.Component),n=t,(o=[{key:"handleClick",value:function(e){var t=e.keyCode;if(!t||13===t){var n=this.props.handleClick;if("function"===typeof n)n(e,this.props.index,this.props.label)}}},{key:"render",value:function(){var e=this.props.ariaControls,t=this.props.ariaExpanded,n=this.props.ariaSelected,o=this.props.className,a=this.props.id,i=this.props.label,s=this.handleClick;return r.a.createElement("li",{"aria-controls":e,"aria-expanded":t,"aria-selected":n,className:o,id:a,key:a,role:"tab",tabIndex:"0",onClick:s,onKeyDown:s},i)}}])&&c(n.prototype,o),a&&c(n,a),t}();f.defaultProps={ariaExpanded:!1,ariaSelected:!1};var b=f;function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}f.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null}],displayName:"Tab",props:{ariaExpanded:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},ariaSelected:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},ariaControls:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},index:{type:{name:"number"},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},handleClick:{type:{name:"func"},required:!1,description:""}}};var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,h(t).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r.a.Component),t}(),T=_;_.__docgenInfo={description:"",methods:[],displayName:"TabPanel"};n("./packages/tabs/src/index.css");function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=!(r=j(t).call(this,e))||"object"!==v(r)&&"function"!==typeof r?k(o):r,Object(s.bind)(k(k(n))),n.defaultState(),n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r.a.Component),n=t,(o=[{key:"defaultState",value:function(){this.state={id:this.props.id||Object(s.unique)(),selected:this.props.selected}}},{key:"handleClick",value:function(e,t,n){var o=e.keyCode;if(!o||13===o){this.setState({selected:t});var r=this.props.handleClick;"function"===typeof r&&r(e,t,n)}}},{key:"render",value:function(){var e=this.state.id,t=this.props.children,n=this.state.selected,o=this.handleClick;return r.a.createElement("div",{className:"t7-tabs",id:e},r.a.createElement("ul",{role:"tablist",className:"t7-tabs__list"},t.map(function(t,a){var i=t.props.label,s="tabpanel_"+a+"_"+e,l="tab_"+a+"_"+e,c=n===a;return r.a.createElement(b,{ariaControls:s,ariaExpanded:c,ariaSelected:c,className:"t7-tabs__item",id:l,index:a,key:l,label:i,handleClick:o})})),t.map(function(t,o){var a="tab_panel_"+o+"_"+e,i="tab_"+o+"_"+e,s=n===o,l=t.props.children;return"string"===typeof l&&(l=r.a.createElement("p",null,l)),r.a.createElement("div",{"aria-hidden":!s,"aria-labelledby":i,className:"t7-tabs__panel",id:a,key:a,role:"tabpanel"},l)}))}}])&&x(n.prototype,o),a&&x(n,a),t}();E.defaultProps={children:null,selected:0};var O=E;function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t){return!t||"object"!==S(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}E.__docgenInfo={description:"",methods:[{name:"defaultState",docblock:null,modifiers:[],params:[],returns:null},{name:"handleClick",docblock:null,modifiers:[],params:[{name:"e",type:null},{name:"index",type:null},{name:"label",type:null}],returns:null}],displayName:"Tabs",props:{children:{defaultValue:{value:"null",computed:!1},type:{name:"node"},required:!1,description:""},selected:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},handleClick:{type:{name:"func"},required:!1,description:""}}},n.d(t,"default",function(){return X});var X=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=N(this,M(t).call(this,e))).layout=null,n}var n,o,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=P(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"t7tabs"}},"@t7/tabs"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Create a React tab compoent and related panel content from a single formatted structure"),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),r.a.createElement(i.f,{of:O}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Tabs, { TabPanel } from '@t7/tabs'\nimport '@t7/tabs/dist/index.css'\n")),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"/* create a \"handler\" if your appliction requires additional processing when tabs are selected */\nconst handleClick = (e, index, label) => {\n  <do something interesting>\n\n  /*\n    `e` is the event,\n    'index' is the index of the tab in the order declared,\n    `label` is the text itself.\n  */\n}\n\n.\n.\n.\n\n/* create your tabs as a single logical grouping */\n<Tabs selected={0} handleClick={handleClick}>\n  <TabPanel label='Tab 1'>\n    <p>\n      Tab content for Tab 1\n    </p>\n  </TabPanel>\n  <TabPanel label='Tab 2'>\n    <p>\n      Tab content for Tab 2\n    </p>\n  </TabPanel>\n  <TabPanel label='Tab 3'>\n    <p>\n      Tab content for Tab 3\n    </p>\n  </TabPanel>\n</Tabs>\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},"Basic Usage"),r.a.createElement(i.e,{__position:1,__code:'<Tabs>\n  <TabPanel label="Tab 1">\n    <p>Tab content for Tab 1</p>\n  </TabPanel>\n  <TabPanel label="Tab 2">\n    <p>Tab content for Tab 2</p>\n  </TabPanel>\n  <TabPanel label="Tab 3">\n    <p>Tab content for Tab 3</p>\n  </TabPanel>\n</Tabs>',__scope:{props:this?this.props:n,Tabs:O,TabPanel:T}},r.a.createElement(O,null,r.a.createElement(T,{label:"Tab 1"},r.a.createElement("p",null,"Tab content for Tab 1")),r.a.createElement(T,{label:"Tab 2"},r.a.createElement("p",null,"Tab content for Tab 2")),r.a.createElement(T,{label:"Tab 3"},r.a.createElement("p",null,"Tab content for Tab 3")))),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"note-regarding-the-use-of-the-required-css"}},"Note regarding the use of the ",r.a.createElement(a.MDXTag,{name:"em",components:t,parentName:"h3"},"required")," CSS"),r.a.createElement(a.MDXTag,{name:"p",components:t},r.a.createElement(a.MDXTag,{name:"em",components:t,parentName:"p"},r.a.createElement(a.MDXTag,{name:"em",components:t,parentName:"em"},"if your build process will not resolve the CSS in a module copy the file ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"@t7/tabs/dist/index.css")," from the node_modules folder and reference the copy with an HTML link "))),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},'e.g.\n<link rel="stylesheet" type="text/css" href="<your stylesheet folder>/@t7/tabs/dist/index.css">\n')))}}])&&C(n.prototype,o),s&&C(n,s),t}();X.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-tabs-src-index.8228ef9e76c5d31fc990.js.map