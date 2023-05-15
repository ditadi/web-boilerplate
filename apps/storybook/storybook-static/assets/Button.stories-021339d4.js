import{r as j}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";var O={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=j,P=Symbol.for("react.element"),z=Symbol.for("react.fragment"),L=Object.prototype.hasOwnProperty,h=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function R(o,r,a){var e,t={},p=null,u=null;a!==void 0&&(p=""+a),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(u=r.ref);for(e in r)L.call(r,e)&&!w.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:P,type:o,key:p,ref:u,props:t,_owner:h.current}}m.Fragment=z;m.jsx=R;m.jsxs=R;O.exports=m;var N=O.exports,T=({primary:o=!1,label:r="Boop",size:a="small"})=>N.jsx("button",{className:`
		  ${o?"ui-bg-red-500":"ui-bg-blue-500"}
		  ${a==="large"?"text-lg":"text-base"}
		`,children:r});const I={title:"Example/Button",component:T,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},s={args:{primary:!0,label:"Button"}},n={args:{label:"Button"}},l={args:{size:"large",label:"Button"}},c={args:{size:"small",label:"Button"}};var i,d,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var _,b,y;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,x,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var B,v,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(E=(v=c.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const D=["Primary","Secondary","Large","Small"];export{l as Large,s as Primary,n as Secondary,c as Small,D as __namedExportsOrder,I as default};
//# sourceMappingURL=Button.stories-021339d4.js.map
