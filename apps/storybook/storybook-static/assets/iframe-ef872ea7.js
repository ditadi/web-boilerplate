import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const f="modulepreload",p=function(o,n){return new URL(o,n).href},O={},r=function(n,s,l){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e,l),e in O)return;O[e]=!0;const _=e.endsWith(".css"),R=_?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const a=t[c];if(a.href===e&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${R}`))return;const i=document.createElement("link");if(i.rel=_?"stylesheet":f,_||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),_)return new Promise((c,a)=>{i.addEventListener("load",c),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},{createChannel:S}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:m}=__STORYBOOK_MODULE_PREVIEW_API__,E=S({page:"preview"});m.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const o=T({url:u});m.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const P={"./src/stories/Button.stories.tsx":async()=>r(()=>import("./Button.stories-021339d4.js"),["./Button.stories-021339d4.js","./index-8db94870.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url)};async function d(o){return P[o]()}d.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:L,PreviewWeb:w,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const o=await Promise.all([r(()=>import("./config-41255887.js"),["./config-41255887.js","./index-d475d2ea.js","./index-8db94870.js","./_commonjsHelpers-042e6b4d.js","./_getPrototype-c39e4407.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-b1f97dbe.js"),[],import.meta.url),r(()=>import("./preview-a60aa466.js"),[],import.meta.url),r(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-2cd4e1a1.js"),["./preview-2cd4e1a1.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-0b573777.js"),["./preview-0b573777.js","./index-d475d2ea.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),r(()=>import("./preview-1f74b887.js"),["./preview-1f74b887.js","./preview-6dd8e8d4.css"],import.meta.url)]);return L(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:d,getProjectAnnotations:I});export{r as _};
//# sourceMappingURL=iframe-ef872ea7.js.map
