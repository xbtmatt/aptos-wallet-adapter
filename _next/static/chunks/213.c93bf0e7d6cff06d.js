"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[213],{4213:function(e,l,a){a.r(l),a.d(l,{default:function(){return u}});var t=a(7458),n=a(2983),s=a(118),c=a(9633),i=a(5999),r=a(6807),d=a(8740),m=e=>{if(e)return"".concat(e.slice(0,6),"...").concat(e.slice(-5))},{Text:o}=s.Z;function x(e){let{isModalOpen:l,setModalOpen:a}=e,[s,o]=(0,n.useState)(!1);(0,n.useEffect)(()=>{void 0!==l&&o(l)},[l]);let{connect:x,disconnect:w,account:u,wallets:j,connected:N}=(0,d.Os)(),p=()=>{N?w():o(!0)},v=e=>{x(e),o(!1),a&&a(!1)},b=()=>{o(!1),a&&a(!1)},f=(null==u?void 0:u.ansName)?null==u?void 0:u.ansName:m(null==u?void 0:u.address);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.ZP,{className:"wallet-button",onClick:()=>p(),children:N?f:"Connect Wallet"}),(0,t.jsx)(i.Z,{title:(0,t.jsx)("div",{className:"wallet-modal-title",children:"Connect Wallet"}),centered:!0,open:s,onCancel:b,footer:[],closable:!1,zIndex:9999,children:!N&&(0,t.jsx)(r.Z,{children:null==j?void 0:j.map(e=>h(e,v))})})]})}var h=(e,l)=>{let a=e.readyState===d.i1.Installed||e.readyState===d.i1.Loadable,n=e.deeplinkProvider;return!a&&(0,d.cX)()?n?(0,t.jsx)(r.Z.Item,{onClick:()=>l(e.name),children:(0,t.jsxs)("div",{className:"wallet-menu-wrapper",children:[(0,t.jsxs)("div",{className:"wallet-name-wrapper",children:[(0,t.jsx)("img",{src:e.icon,width:25,style:{marginRight:10}}),(0,t.jsx)(o,{className:"wallet-selector-text",children:e.name})]}),(0,t.jsx)(c.ZP,{className:"wallet-connect-button",children:(0,t.jsx)(o,{className:"wallet-connect-button-text",children:"Connect"})})]})},e.name):(0,t.jsx)(r.Z.Item,{disabled:!0,children:(0,t.jsx)("div",{className:"wallet-menu-wrapper",children:(0,t.jsxs)("div",{className:"wallet-name-wrapper",children:[(0,t.jsx)("img",{src:e.icon,width:25,style:{marginRight:10}}),(0,t.jsx)(o,{className:"wallet-selector-text",children:e.name})]})})},e.name):(0,t.jsx)(r.Z.Item,{onClick:e.readyState===d.i1.Installed||e.readyState===d.i1.Loadable?()=>l(e.name):()=>window.open(e.url),children:(0,t.jsxs)("div",{className:"wallet-menu-wrapper",children:[(0,t.jsxs)("div",{className:"wallet-name-wrapper",children:[(0,t.jsx)("img",{src:e.icon,width:25,style:{marginRight:10}}),(0,t.jsx)(o,{className:"wallet-selector-text",children:e.name})]}),e.readyState===d.i1.Installed||e.readyState===d.i1.Loadable?(0,t.jsx)(c.ZP,{className:"wallet-connect-button",children:(0,t.jsx)(o,{className:"wallet-connect-button-text",children:"Connect"})}):(0,t.jsx)(o,{className:"wallet-connect-install",children:"Install"})]})},e.name)};let w=()=>(0,t.jsx)(x,{});var u=w}}]);