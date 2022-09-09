import{u as m,o as d,S as b,b5 as w,b6 as v,x as h,s as f,b7 as C,b8 as k,n as x,b9 as D,c as L,X as R}from"./index.33d2aa70.js";import{b as S}from"./api.e0893224.js";import{u as T}from"./useT.2ec8a2b0.js";const E=(t,e,a="direct",r)=>{t=v(t,!0);let n=`${t}/${e.name}`;n=h(n,r);let c=C,s=a==="direct"?"/d":"/p";a==="preview"&&(c=location.origin+k,s="");let o=`${c}${s}${n}`;return a!=="preview"&&e.sign&&(o+=`?sign=${e.sign}`),o},p=()=>{const{pathname:t}=m(),e=(r,n,c)=>{const s=d.state===b.Folder?t():w(t());return E(s,r,n,c)},a=(r,n)=>e(r,"direct",n);return{getLinkByObj:e,rawLink:a,proxyLink:(r,n)=>e(r,"proxy",n),previewPage:(r,n)=>e(r,"preview",n),currentObjLink:r=>a(d.obj,r)}},P=()=>{const{previewPage:t,rawLink:e}=p(),a=r=>f().filter(n=>!n.is_dir).map(n=>e(n,r));return{rawLinks:a,previewPagesText:()=>f().map(r=>t(r,!0)).join(`
`),rawLinksText:r=>a(r).join(`
`)}},B=()=>{const{copy:t}=I(),{previewPagesText:e,rawLinksText:a}=P(),{currentObjLink:r}=p();return{copySelectedPreviewPage:()=>{t(e())},copySelectedRawLink:n=>{t(a(n))},copyCurrentRawLink:n=>{t(r(n))}}};var j=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],r=0;r<t.rangeCount;r++)a.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||a.forEach(function(n){t.addRange(n)}),e&&e.focus()}},A=j,g={"text/plain":"Text","text/html":"Url",default:"Text"},U="Copy to clipboard: #{key}, Enter";function $(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function F(t,e){var a,r,n,c,s,o,l=!1;e||(e={}),a=e.debug||!1;try{n=A(),c=document.createRange(),s=document.getSelection(),o=document.createElement("span"),o.textContent=t,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(i){if(i.stopPropagation(),e.format)if(i.preventDefault(),typeof i.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=g[e.format]||g.default;window.clipboardData.setData(u,t)}else i.clipboardData.clearData(),i.clipboardData.setData(e.format,t);e.onCopy&&(i.preventDefault(),e.onCopy(i.clipboardData))}),document.body.appendChild(o),c.selectNodeContents(o),s.addRange(c);var y=document.execCommand("copy");if(!y)throw new Error("copy command was unsuccessful");l=!0}catch(i){a&&console.error("unable to copy using execCommand: ",i),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),l=!0}catch(u){a&&console.error("unable to copy using clipboardData: ",u),a&&console.error("falling back to prompt"),r=$("message"in e?e.message:U),window.prompt(r,t)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(c):s.removeAllRanges()),o&&document.body.removeChild(o),n()}return l}var O=F;const I=()=>{const t=T(),{pathname:e}=m();return{copy:a=>{O(a),x.success(t("global.copied"))},isHide:a=>{const r=D();for(const n of r)if(n.test(L(e(),a.name)))return!0;return!1}}},M=()=>{const{proxyLink:t}=p();return R("",async()=>S(t(d.obj,!0)))};export{p as a,B as b,I as c,M as d,E as g,P as u};
