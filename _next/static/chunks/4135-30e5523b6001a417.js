"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4135],{29040:function(e,t,n){n.d(t,{Dx:function(){return H},VY:function(){return j},aV:function(){return X},fC:function(){return S},h_:function(){return K},xz:function(){return N}});var r=n(40431),o=n(86006),l=n(1928),i=n(81084),u=n(38899),a=n(70757),s=n(85740),c=n(36841),d=n(63961),f=n(187),p=n(51868),v=n(76899),E=n(76808),g=n(94299),m=n(472),b=n(1095);let D="Dialog",[h,y]=(0,u.b)(D),[w,C]=h(D),O=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...u}=e,a=C("DialogTrigger",n),s=(0,i.e)(t,a.triggerRef);return(0,o.createElement)(v.WV.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":x(a.open)},u,{ref:s,onClick:(0,l.M)(e.onClick,a.onOpenToggle)}))}),_="DialogPortal",[R,P]=h(_,{forceMount:void 0}),F="DialogOverlay",M=(0,o.forwardRef)((e,t)=>{let n=P(F,e.__scopeDialog),{forceMount:l=n.forceMount,...i}=e,u=C(F,e.__scopeDialog);return u.modal?(0,o.createElement)(p.z,{present:l||u.open},(0,o.createElement)(T,(0,r.Z)({},i,{ref:t}))):null}),T=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,i=C(F,n);return(0,o.createElement)(g.Z,{as:b.g7,allowPinchZoom:!0,shards:[i.contentRef]},(0,o.createElement)(v.WV.div,(0,r.Z)({"data-state":x(i.open)},l,{ref:t,style:{pointerEvents:"auto",...l.style}})))}),W="DialogContent",L=(0,o.forwardRef)((e,t)=>{let n=P(W,e.__scopeDialog),{forceMount:l=n.forceMount,...i}=e,u=C(W,e.__scopeDialog);return(0,o.createElement)(p.z,{present:l||u.open},u.modal?(0,o.createElement)(k,(0,r.Z)({},i,{ref:t})):(0,o.createElement)(Z,(0,r.Z)({},i,{ref:t})))}),k=(0,o.forwardRef)((e,t)=>{let n=C(W,e.__scopeDialog),u=(0,o.useRef)(null),a=(0,i.e)(t,n.contentRef,u);return(0,o.useEffect)(()=>{let e=u.current;if(e)return(0,m.Ry)(e)},[]),(0,o.createElement)(I,(0,r.Z)({},e,{ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,l.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:(0,l.M)(e.onFocusOutside,e=>e.preventDefault())}))}),Z=(0,o.forwardRef)((e,t)=>{let n=C(W,e.__scopeDialog),l=(0,o.useRef)(!1),i=(0,o.useRef)(!1);return(0,o.createElement)(I,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,o;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(l.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),l.current=!1,i.current=!1},onInteractOutside:t=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(l.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let u=t.target,a=null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(u);a&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}}))}),I=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:l,onOpenAutoFocus:u,onCloseAutoFocus:a,...s}=e,f=C(W,n),p=(0,o.useRef)(null),v=(0,i.e)(t,p);return(0,E.EW)(),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(d.M,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:u,onUnmountAutoFocus:a},(0,o.createElement)(c.XB,(0,r.Z)({role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":x(f.open)},s,{ref:v,onDismiss:()=>f.onOpenChange(!1)}))),!1)}),A="DialogTitle",z=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,i=C(A,n);return(0,o.createElement)(v.WV.h2,(0,r.Z)({id:i.titleId},l,{ref:t}))});function x(e){return e?"open":"closed"}let[V,B]=(0,u.k)("DialogTitleWarning",{contentName:W,titleName:A,docsSlug:"dialog"}),S=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:l,onOpenChange:i,modal:u=!0}=e,c=(0,o.useRef)(null),d=(0,o.useRef)(null),[f=!1,p]=(0,s.T)({prop:r,defaultProp:l,onChange:i});return(0,o.createElement)(w,{scope:t,triggerRef:c,contentRef:d,contentId:(0,a.M)(),titleId:(0,a.M)(),descriptionId:(0,a.M)(),open:f,onOpenChange:p,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p]),modal:u},n)},N=O,K=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:l}=e,i=C(_,t);return(0,o.createElement)(R,{scope:t,forceMount:n},o.Children.map(r,e=>(0,o.createElement)(p.z,{present:n||i.open},(0,o.createElement)(f.h,{asChild:!0,container:l},e))))},X=M,j=L,H=z},36841:function(e,t,n){let r;n.d(t,{XB:function(){return f}});var o=n(40431),l=n(86006),i=n(1928),u=n(76899),a=n(81084),s=n(46868);let c="dismissableLayer.update",d=(0,l.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,l.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:E,onPointerDownOutside:g,onFocusOutside:m,onInteractOutside:b,onDismiss:D,...h}=e,y=(0,l.useContext)(d),[w,C]=(0,l.useState)(null),O=null!==(n=null==w?void 0:w.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,_]=(0,l.useState)({}),R=(0,a.e)(t,e=>C(e)),P=Array.from(y.layers),[F]=[...y.layersWithOutsidePointerEventsDisabled].slice(-1),M=P.indexOf(F),T=w?P.indexOf(w):-1,W=y.layersWithOutsidePointerEventsDisabled.size>0,L=T>=M,k=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,s.W)(e),r=(0,l.useRef)(!1),o=(0,l.useRef)(()=>{});return(0,l.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function l(){v("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...y.branches].some(e=>e.contains(t));!L||n||(null==g||g(e),null==b||b(e),e.defaultPrevented||null==D||D())},O),Z=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,s.W)(e),r=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{let e=e=>{e.target&&!r.current&&v("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...y.branches].some(e=>e.contains(t));n||(null==m||m(e),null==b||b(e),e.defaultPrevented||null==D||D())},O);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,s.W)(e);(0,l.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{let t=T===y.layers.size-1;t&&(null==E||E(e),!e.defaultPrevented&&D&&(e.preventDefault(),D()))},O),(0,l.useEffect)(()=>{if(w)return f&&(0===y.layersWithOutsidePointerEventsDisabled.size&&(r=O.body.style.pointerEvents,O.body.style.pointerEvents="none"),y.layersWithOutsidePointerEventsDisabled.add(w)),y.layers.add(w),p(),()=>{f&&1===y.layersWithOutsidePointerEventsDisabled.size&&(O.body.style.pointerEvents=r)}},[w,O,f,y]),(0,l.useEffect)(()=>()=>{w&&(y.layers.delete(w),y.layersWithOutsidePointerEventsDisabled.delete(w),p())},[w,y]),(0,l.useEffect)(()=>{let e=()=>_({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,l.createElement)(u.WV.div,(0,o.Z)({},h,{ref:R,style:{pointerEvents:W?L?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,Z.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,Z.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,k.onPointerDownCapture)}))});function p(){let e=new CustomEvent(c);document.dispatchEvent(e)}function v(e,t,n,{discrete:r}){let o=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,u.jH)(o,l):o.dispatchEvent(l)}},187:function(e,t,n){n.d(t,{h:function(){return u}});var r=n(40431),o=n(86006),l=n(8431),i=n(76899);let u=(0,o.forwardRef)((e,t)=>{var n;let{container:u=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...a}=e;return u?l.createPortal((0,o.createElement)(i.WV.div,(0,r.Z)({},a,{ref:t})),u):null})},2002:function(e,t,n){n.d(t,{m:function(){return l}});var r=n(35446),o=n(68741),l=(0,r.I)(o._)}}]);