!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.58e2e8c0.js","./useT-legacy.d7e106cf.js","./Folder-legacy.1756e9c5.js","./Layout-legacy.508f9e78.js","./useUtil-legacy.213021f8.js","./index-legacy.cdb79e52.js","./obj-legacy.97e43e8b.js","./icon-legacy.205e3d8b.js","./useTitle-legacy.bb8ace92.js","./Markdown-legacy.30d126d7.js","./api-legacy.9ed804b4.js","./index-legacy.bed79c9d.js","./FolderTree-legacy.b83b0d02.js"],(function(n,t){"use strict";var r,i,o,c,a,l,u,s,g,f,d,b,h,m,y,j,w,p,x,A,v,$,k,S,C,z,M,I,E,O,T,P,F;return{setters:[function(e){r=e.f,i=e.a0,o=e.A,c=e.aB,a=e.aE,l=e.ch,u=e.m,s=e.aC,g=e.bq,f=e.ae,d=e.bb,b=e.am,h=e.ag,m=e.bc,y=e.bt,j=e.bA,w=e.e,p=e.K,x=e.ci,A=e.cj,v=e.ck,$=e.af,k=e.w,S=e.o,C=e.W},function(e){z=e.u},function(e){M=e.z},function(e){I=e.b,E=e.M},function(e){O=e.c},function(e){T=e.I},function(e){P=e.O},function(e){F=e.g},function(){},function(){},function(){},function(){},function(){}],execute:function(){var t=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],U=function(e){if((0,O().isHide)(e.obj))return null;var n=I().setPathAs,w=M({id:1}).show;return r(E.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(i,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",get _hover(){return{transform:"scale(1.01)",bgColor:o(),transition:"all 0.3s"}},as:T,get href(){return e.obj.name},onMouseEnter:function(){n(e.obj.name,e.obj.is_dir,!0)},onContextMenu:function(n){c((function(){a(!1),l(e.index,!0,!0)})),w(n,{props:e.obj})},get children(){return[r(i,{class:"name-box",spacing:"$1",get w(){return t[0].w},get children(){return[r(u,{get when(){return s()},get children(){return r(g,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){l(e.index,n.target.checked)}})}}),r(f,{class:"icon",boxSize:"$6",get color(){return d()},get as(){return F(e.obj)},mr:"$1","on:click":function(n){e.obj.type===P.IMAGE&&(n.stopPropagation(),n.preventDefault(),b.emit("gallery",e.obj.name))}}),r(h,{get label(){return e.obj.name},get children(){return r(m,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get children(){return e.obj.name}})}})]}}),r(m,{class:"size",get w(){return t[1].w},get textAlign(){return t[1].textAlign},get children(){return y(e.obj.size)}}),r(m,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return t[2].w},get textAlign(){return t[2].textAlign},get children(){return j(e.obj.modified)}})]}})}})};n("default",(function(){var n=z(),o=e(w(),2),l=o[0],f=o[1],d=e(w(!1),2),b=d[0],h=d[1];p((function(){l()&&x(l(),b())}));var y=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===l()?h(!b()):c((function(){f(e.name),h(!1)}))}}};return r(C,{class:"list",w:"$full",spacing:"$1",get children(){return[r(i,{class:"title",w:"$full",p:"$2",get children(){return[r(i,{get w(){return t[0].w},spacing:"$1",get children(){return[r(u,{get when(){return s()},get children(){return r(g,{get checked(){return A()},get indeterminate(){return v()},onChange:function(e){a(e.target.checked)}})}}),r(m,$((function(){return y(t[0])}),{get children(){return n("home.obj.".concat(t[0].name))}}))]}}),r(m,$({get w(){return t[1].w}},(function(){return y(t[1])}),{get children(){return n("home.obj.".concat(t[1].name))}})),r(m,$({get w(){return t[2].w}},(function(){return y(t[1])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(t[2].name))}}))]}}),r(k,{get each(){return S.objs},children:function(e,n){return r(U,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
