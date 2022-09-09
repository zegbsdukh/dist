import{cl as x,e as $,f as d,Z as A,ar as z,K as F,an as B,Y as U,bz as H,v as W,u as K,a as V,b4 as N,W as Y,o as G,B as Z,n as j,bd as J}from"./index.f279c399.js";import{u as Q}from"./useT.33ce2452.js";import{d as X}from"./useUtil.b24065f0.js";import"./api.75cdd005.js";function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(r){_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function k(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ee(e,t){if(e==null)return{};var n=k(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function te(e,t){return ne(e)||re(e,t)||oe(e,t)||ae()}function ne(e){if(Array.isArray(e))return e}function re(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),u;!(r=(u=i.next()).done)&&(n.push(u.value),!(t&&n.length===t));r=!0);}catch(c){o=!0,a=c}finally{try{!r&&i.return!=null&&i.return()}finally{if(o)throw a}}return n}}function oe(e,t){if(!!e){if(typeof e=="string")return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}}function I(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ce(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(o,a){return a(o)},r)}}function g(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return t.apply(n,[].concat(o,u))}}}function b(e){return{}.toString.call(e).includes("Object")}function ue(e){return!Object.keys(e).length}function h(e){return typeof e=="function"}function se(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function le(e,t){return b(t)||l("changeType"),Object.keys(t).some(function(n){return!se(e,n)})&&l("changeField"),t}function fe(e){h(e)||l("selectorType")}function de(e){h(e)||b(e)||l("handlerType"),b(e)&&Object.values(e).some(function(t){return!h(t)})&&l("handlersType")}function ge(e){e||l("initialIsRequired"),b(e)||l("initialType"),ue(e)&&l("initialContent")}function pe(e,t){throw new Error(e[t]||e.default)}var he={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},l=g(pe)(he),v={changes:le,selector:fe,handler:de,initial:ge};function me(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};v.initial(e),v.handler(t);var n={current:e},r=g(ye)(n,t),o=g(be)(n),a=g(v.changes)(e),i=g(ve)(n);function u(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(s){return s};return v.selector(f),f(n.current)}function c(f){ce(r,o,a,i)(f)}return[u,c]}function ve(e,t){return h(t)?t(e.current):t}function be(e,t){return e.current=E(E({},e.current),t),t}function ye(e,t,n){return h(t)?t(e.current):Object.keys(n).forEach(function(r){var o;return(o=t[r])===null||o===void 0?void 0:o.call(t,e.current[r])}),n}var Oe={create:me},we={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};function je(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return t.apply(n,[].concat(o,u))}}}function Pe(e){return{}.toString.call(e).includes("Object")}function Se(e){return e||C("configIsRequired"),Pe(e)||C("configType"),e.urls?(Ie(),{paths:{vs:e.urls.monacoBase}}):e}function Ie(){console.warn(M.deprecation)}function Te(e,t){throw new Error(e[t]||e.default)}var M={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},C=je(Te)(M),Ee={config:Se},Ce=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(a,i){return i(a)},o)}};function D(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],D(e[n],t[n]))}),S(S({},e),t)}var $e={type:"cancelation",msg:"operation is manually canceled"};function O(e){var t=!1,n=new Promise(function(r,o){e.then(function(a){return t?o($e):r(a)}),e.catch(o)});return n.cancel=function(){return t=!0},n}var Ae=Oe.create({config:we,isInitialized:!1,resolve:null,reject:null,monaco:null}),R=te(Ae,2),m=R[0],y=R[1];function Me(e){var t=Ee.config(e),n=t.monaco,r=ee(t,["monaco"]);y(function(o){return{config:D(o.config,r),monaco:n}})}function De(){var e=m(function(t){var n=t.monaco,r=t.isInitialized,o=t.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!e.isInitialized){if(y({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),O(w);if(window.monaco&&window.monaco.editor)return q(window.monaco),e.resolve(window.monaco),O(w);Ce(Re,Le)(xe)}return O(w)}function Re(e){return document.body.appendChild(e)}function qe(e){var t=document.createElement("script");return e&&(t.src=e),t}function Le(e){var t=m(function(r){var o=r.config,a=r.reject;return{config:o,reject:a}}),n=qe("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function xe(){var e=m(function(n){var r=n.config,o=n.resolve,a=n.reject;return{config:r,resolve:o,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){q(n),e.resolve(n)},function(n){e.reject(n)})}function q(e){m().monaco||y({monaco:e})}function ze(){return m(function(e){var t=e.monaco;return t})}var w=new Promise(function(e,t){return y({resolve:e,reject:t})}),L={config:Me,init:De,__getMonacoInstance:ze};L.config({paths:{vs:x}});let p;const Fe=e=>{const[t,n]=$(!0);return L.init().then(r=>{p=r,n(!1)}),d(A,{get loading(){return t()},get children(){return d(Be,e)}})},Be=e=>{let t,n,r;return z(()=>{n=p.editor.create(t,{value:e.value,theme:e.theme}),r=p.editor.createModel(e.value,e.language,e.path?p.Uri.parse(e.path):void 0),n.setModel(r),n.onDidChangeModelContent(()=>{var o;(o=e.onChange)==null||o.call(e,n.getValue())})}),F(()=>{p.editor.setTheme(e.theme)}),B(()=>{r&&r.dispose(),n&&n.dispose()}),d(U,{w:"$full",h:"70vh",ref(o){const a=t;typeof a=="function"?a(o):t=o}})},Ve=()=>{var f;const[e]=X(),{colorMode:t}=H(),n=W(()=>t()==="light"?"vs":"vs-dark"),{pathname:r}=K(),[o,a]=$((f=e())==null?void 0:f.content),i=Q(),[u,c]=V(()=>{var s;return N.put("/fs/put",o(),{headers:{"File-Path":encodeURIComponent(r()),"Content-Type":((s=e())==null?void 0:s.contentType)||"text/plain"}})});return d(A,{get loading(){return e.loading},get children(){return d(Y,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[d(Fe,{get value(){var s;return(s=e())==null?void 0:s.content},get theme(){return n()},get path(){return G.obj.name},onChange:s=>{a(s)}}),d(Z,{get loading(){return u()},onClick:async()=>{if(!o()){j.success(i("global.save_success"));return}const s=await c();J(s,()=>{j.success(i("global.save_success"))})},get children(){return i("global.save")}})]}})}})};export{Ve as default};
