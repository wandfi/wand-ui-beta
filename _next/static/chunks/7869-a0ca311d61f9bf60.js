"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7869],{72178:function(e,n,t){t.d(n,{Av:function(){return a},pF:function(){return r},xv:function(){return i},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",i="with-scroll-bars-hidden",a="--removed-body-scroll-bar-size"},68398:function(e,n,t){t.d(n,{jp:function(){return RemoveScrollBar}});var r=t(64103),o=t(87259),i=t(72178),a={left:0,top:0,right:0,gap:0},parse=function(e){return parseInt(e||"",10)||0},getOffset=function(e){var n=window.getComputedStyle(document.body),t=n["padding"===e?"paddingLeft":"marginLeft"],r=n["padding"===e?"paddingTop":"marginTop"],o=n["padding"===e?"paddingRight":"marginRight"];return[parse(t),parse(r),parse(o)]},getGapWidth=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return a;var n=getOffset(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},u=(0,o.Ws)(),getStyles=function(e,n,t,r){var o=e.left,a=e.top,u=e.right,c=e.gap;return void 0===t&&(t="margin"),"\n  .".concat(i.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(i.pF," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(i.zi," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(i.pF," .").concat(i.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(i.zi," .").concat(i.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat(i.Av,": ").concat(c,"px;\n  }\n")},RemoveScrollBar=function(e){var n=e.noRelative,t=e.noImportant,o=e.gapMode,i=void 0===o?"margin":o,a=r.useMemo(function(){return getGapWidth(i)},[i]);return r.createElement(u,{styles:getStyles(a,!n,i,t?"":"!important")})}},87259:function(e,n,t){t.d(n,{Ws:function(){return styleSingleton}});var r,o=t(64103),stylesheetSingleton=function(){var e=0,n=null;return{add:function(o){if(0==e&&(n=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=r||t.nc;return n&&e.setAttribute("nonce",n),e}())){var i,a;(i=n).styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o)),a=n,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!n||(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},styleHookSingleton=function(){var e=stylesheetSingleton();return function(n,t){o.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},styleSingleton=function(){var e=styleHookSingleton();return function(n){return e(n.styles,n.dynamic),null}}},99090:function(e,n,t){t.d(n,{q:function(){return useMergeRefs}});var r=t(64103);function useMergeRefs(e,n){var t,o,i;return t=n||null,o=function(n){return e.forEach(function(e){return"function"==typeof e?e(n):e&&(e.current=n),e})},(i=(0,r.useState)(function(){return{value:t,callback:o,facade:{get current(){return i.value},set current(value){var e=i.value;e!==value&&(i.value=value,i.callback(value,e))}}}})[0]).callback=o,i.facade}},94345:function(e,n,t){t.d(n,{L:function(){return exportSidecar}});var r=t(55731),o=t(64103),SideCar=function(e){var n=e.sideCar,t=(0,r.__rest)(e,["sideCar"]);if(!n)throw Error("Sidecar: please provide `sideCar` property to import the right car");var i=n.read();if(!i)throw Error("Sidecar medium not found");return o.createElement(i,(0,r.__assign)({},t))};function exportSidecar(e,n){return e.useMedium(n),SideCar}SideCar.isSideCarExport=!0},22132:function(e,n,t){t.d(n,{_:function(){return createSidecarMedium}});var r=t(55731);function ItoI(e){return e}function createSidecarMedium(e){void 0===e&&(e={});var n,t,o,i=(void 0===n&&(n=ItoI),t=[],o=!1,{read:function(){if(o)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:null},useMedium:function(e){var r=n(e,o);return t.push(r),function(){t=t.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(o=!0;t.length;){var n=t;t=[],n.forEach(e)}t={push:function(n){return e(n)},filter:function(){return t}}},assignMedium:function(e){o=!0;var n=[];if(t.length){var r=t;t=[],r.forEach(e),n=t}var executeQueue=function(){var t=n;n=[],t.forEach(e)},cycle=function(){return Promise.resolve().then(executeQueue)};cycle(),t={push:function(e){n.push(e),cycle()},filter:function(e){return n=n.filter(e),t}}}});return i.options=(0,r.__assign)({async:!0,ssr:!1},e),i}},80317:function(e,n,t){t.d(n,{Z:function(){return _extends}});function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}},91036:function(e,n,t){t.d(n,{M:function(){return $e42e1063c40fb3ef$export$b9ecd428b558ff10}});function $e42e1063c40fb3ef$export$b9ecd428b558ff10(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}},4042:function(e,n,t){t.d(n,{F:function(){return $6ed0406888f73fc4$export$43e446d32b3d21af},e:function(){return $6ed0406888f73fc4$export$c7b2cbe3552a0d05}});var r=t(64103);function $6ed0406888f73fc4$export$43e446d32b3d21af(...e){return n=>e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...e){return(0,r.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...e),e)}},85834:function(e,n,t){t.d(n,{b:function(){return $c512c27ab02ef895$export$50c7b4e9d9f19c1},k:function(){return $c512c27ab02ef895$export$fd42f52fd3ae1109}});var r=t(64103);function $c512c27ab02ef895$export$fd42f52fd3ae1109(e,n){let t=(0,r.createContext)(n);function Provider(e){let{children:n,...o}=e,i=(0,r.useMemo)(()=>o,Object.values(o));return(0,r.createElement)(t.Provider,{value:i},n)}return Provider.displayName=e+"Provider",[Provider,function(o){let i=(0,r.useContext)(t);if(i)return i;if(void 0!==n)return n;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function $c512c27ab02ef895$export$50c7b4e9d9f19c1(e,n=[]){let t=[],createScope=()=>{let n=t.map(e=>(0,r.createContext)(e));return function(t){let o=(null==t?void 0:t[e])||n;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return createScope.scopeName=e,[function(n,o){let i=(0,r.createContext)(o),a=t.length;function Provider(n){let{scope:t,children:o,...u}=n,c=(null==t?void 0:t[e][a])||i,l=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(c.Provider,{value:l},o)}return t=[...t,o],Provider.displayName=n+"Provider",[Provider,function(t,u){let c=(null==u?void 0:u[e][a])||i,l=(0,r.useContext)(c);if(l)return l;if(void 0!==o)return o;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let createScope1=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((n,{useScope:t,scopeName:r})=>{let o=t(e),i=o[`__scope${r}`];return{...n,...i}},{});return(0,r.useMemo)(()=>({[`__scope${n.scopeName}`]:o}),[o])}};return createScope1.scopeName=n.scopeName,createScope1}(createScope,...n)]}},68833:function(e,n,t){let r;t.d(n,{XB:function(){return f}});var o=t(80317),i=t(64103),a=t(91036),u=t(35705),c=t(4042),l=t(60691);let d="dismissableLayer.update",s=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,i.forwardRef)((e,n)=>{var t;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:p,onPointerDownOutside:v,onFocusOutside:m,onInteractOutside:h,onDismiss:b,...$}=e,g=(0,i.useContext)(s),[E,y]=(0,i.useState)(null),x=null!==(t=null==E?void 0:E.ownerDocument)&&void 0!==t?t:null==globalThis?void 0:globalThis.document,[,w]=(0,i.useState)({}),S=(0,c.e)(n,e=>y(e)),C=Array.from(g.layers),[N]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),P=C.indexOf(N),O=E?C.indexOf(E):-1,A=g.layersWithOutsidePointerEventsDisabled.size>0,D=O>=P,T=function(e,n=null==globalThis?void 0:globalThis.document){let t=(0,l.W)(e),r=(0,i.useRef)(!1),o=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let handlePointerDown=e=>{if(e.target&&!r.current){let r={originalEvent:e};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",t,r,{discrete:!0})}"touch"===e.pointerType?(n.removeEventListener("click",o.current),o.current=handleAndDispatchPointerDownOutsideEvent,n.addEventListener("click",o.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}r.current=!1},e=window.setTimeout(()=>{n.addEventListener("pointerdown",handlePointerDown)},0);return()=>{window.clearTimeout(e),n.removeEventListener("pointerdown",handlePointerDown),n.removeEventListener("click",o.current)}},[n,t]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let n=e.target,t=[...g.branches].some(e=>e.contains(n));!D||t||(null==v||v(e),null==h||h(e),e.defaultPrevented||null==b||b())},x),M=function(e,n=null==globalThis?void 0:globalThis.document){let t=(0,l.W)(e),r=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let handleFocus=e=>{e.target&&!r.current&&$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",t,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",handleFocus),()=>n.removeEventListener("focusin",handleFocus)},[n,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let n=e.target,t=[...g.branches].some(e=>e.contains(n));t||(null==m||m(e),null==h||h(e),e.defaultPrevented||null==b||b())},x);return!function(e,n=null==globalThis?void 0:globalThis.document){let t=(0,l.W)(e);(0,i.useEffect)(()=>{let handleKeyDown=e=>{"Escape"===e.key&&t(e)};return n.addEventListener("keydown",handleKeyDown),()=>n.removeEventListener("keydown",handleKeyDown)},[t,n])}(e=>{let n=O===g.layers.size-1;n&&(null==p||p(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},x),(0,i.useEffect)(()=>{if(E)return f&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(r=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(E)),g.layers.add(E),$5cb92bef7577960e$var$dispatchUpdate(),()=>{f&&1===g.layersWithOutsidePointerEventsDisabled.size&&(x.body.style.pointerEvents=r)}},[E,x,f,g]),(0,i.useEffect)(()=>()=>{E&&(g.layers.delete(E),g.layersWithOutsidePointerEventsDisabled.delete(E),$5cb92bef7577960e$var$dispatchUpdate())},[E,g]),(0,i.useEffect)(()=>{let handleUpdate=()=>w({});return document.addEventListener(d,handleUpdate),()=>document.removeEventListener(d,handleUpdate)},[]),(0,i.createElement)(u.WV.div,(0,o.Z)({},$,{ref:S,style:{pointerEvents:A?D?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.M)(e.onFocusCapture,M.onFocusCapture),onBlurCapture:(0,a.M)(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:(0,a.M)(e.onPointerDownCapture,T.onPointerDownCapture)}))});function $5cb92bef7577960e$var$dispatchUpdate(){let e=new CustomEvent(d);document.dispatchEvent(e)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(e,n,t,{discrete:r}){let o=t.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&o.addEventListener(e,n,{once:!0}),r?(0,u.jH)(o,i):o.dispatchEvent(i)}},41106:function(e,n,t){t.d(n,{M:function(){return $1746a345f3d73bb7$export$f680877a34711e37}});var r,o=t(64103),i=t(99875);let a=(r||(r=t.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function $1746a345f3d73bb7$export$f680877a34711e37(e){let[n,t]=o.useState(a());return(0,i.b)(()=>{e||t(e=>null!=e?e:String(u++))},[e]),e||(n?`radix-${n}`:"")}},18236:function(e,n,t){t.d(n,{h:function(){return u}});var r=t(80317),o=t(64103),i=t(55078),a=t(35705);let u=(0,o.forwardRef)((e,n)=>{var t;let{container:u=null==globalThis?void 0:null===(t=globalThis.document)||void 0===t?void 0:t.body,...c}=e;return u?i.createPortal((0,o.createElement)(a.WV.div,(0,r.Z)({},c,{ref:n})),u):null})},35649:function(e,n,t){t.d(n,{z:function(){return $921a889cee6df7e8$export$99c2b779aa4e8b8b}});var r=t(64103),o=t(55078),i=t(4042),a=t(99875);let $921a889cee6df7e8$export$99c2b779aa4e8b8b=e=>{let{present:n,children:t}=e,u=function(e){var n;let[t,i]=(0,r.useState)(),u=(0,r.useRef)({}),c=(0,r.useRef)(e),l=(0,r.useRef)("none"),d=e?"mounted":"unmounted",[s,f]=(n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},d));return(0,r.useEffect)(()=>{let e=$921a889cee6df7e8$var$getAnimationName(u.current);l.current="mounted"===s?e:"none"},[s]),(0,a.b)(()=>{let n=u.current,t=c.current,r=t!==e;if(r){let r=l.current,o=$921a889cee6df7e8$var$getAnimationName(n);e?f("MOUNT"):"none"===o||(null==n?void 0:n.display)==="none"?f("UNMOUNT"):t&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),c.current=e}},[e,f]),(0,a.b)(()=>{if(t){let handleAnimationEnd=e=>{let n=$921a889cee6df7e8$var$getAnimationName(u.current),r=n.includes(e.animationName);e.target===t&&r&&(0,o.flushSync)(()=>f("ANIMATION_END"))},handleAnimationStart=e=>{e.target===t&&(l.current=$921a889cee6df7e8$var$getAnimationName(u.current))};return t.addEventListener("animationstart",handleAnimationStart),t.addEventListener("animationcancel",handleAnimationEnd),t.addEventListener("animationend",handleAnimationEnd),()=>{t.removeEventListener("animationstart",handleAnimationStart),t.removeEventListener("animationcancel",handleAnimationEnd),t.removeEventListener("animationend",handleAnimationEnd)}}f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:(0,r.useCallback)(e=>{e&&(u.current=getComputedStyle(e)),i(e)},[])}}(n),c="function"==typeof t?t({present:u.isPresent}):r.Children.only(t),l=(0,i.e)(u.ref,c.ref),d="function"==typeof t;return d||u.isPresent?(0,r.cloneElement)(c,{ref:l}):null};function $921a889cee6df7e8$var$getAnimationName(e){return(null==e?void 0:e.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"},35705:function(e,n,t){t.d(n,{WV:function(){return u},jH:function(){return $8927f6f2acc4f386$export$6d1a0317bde7de7f}});var r=t(80317),o=t(64103),i=t(55078),a=t(17756);let u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=(0,o.forwardRef)((e,t)=>{let{asChild:i,...u}=e,c=i?a.g7:n;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(c,(0,r.Z)({},u,{ref:t}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function $8927f6f2acc4f386$export$6d1a0317bde7de7f(e,n){e&&(0,i.flushSync)(()=>e.dispatchEvent(n))}},17756:function(e,n,t){t.d(n,{A4:function(){return $5e63c961fc1ce211$export$d9f1ccf0bdb05d45},g7:function(){return a}});var r=t(80317),o=t(64103),i=t(4042);let a=(0,o.forwardRef)((e,n)=>{let{children:t,...i}=e,a=o.Children.toArray(t),c=a.find($5e63c961fc1ce211$var$isSlottable);if(c){let e=c.props.children,t=a.map(n=>n!==c?n:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(u,(0,r.Z)({},i,{ref:n}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,t):null)}return(0,o.createElement)(u,(0,r.Z)({},i,{ref:n}),t)});a.displayName="Slot";let u=(0,o.forwardRef)((e,n)=>{let{children:t,...r}=e;return(0,o.isValidElement)(t)?(0,o.cloneElement)(t,{...function(e,n){let t={...n};for(let r in n){let o=e[r],i=n[r],a=/^on[A-Z]/.test(r);a?o&&i?t[r]=(...e)=>{i(...e),o(...e)}:o&&(t[r]=o):"style"===r?t[r]={...o,...i}:"className"===r&&(t[r]=[o,i].filter(Boolean).join(" "))}return{...e,...t}}(r,t.props),ref:n?(0,i.F)(n,t.ref):t.ref}):o.Children.count(t)>1?o.Children.only(null):null});u.displayName="SlotClone";let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function $5e63c961fc1ce211$var$isSlottable(e){return(0,o.isValidElement)(e)&&e.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}},60691:function(e,n,t){t.d(n,{W:function(){return $b1b2314f5f9a1d84$export$25bec8c6f54ee79a}});var r=t(64103);function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(e){let n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useMemo)(()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)},[])}},55908:function(e,n,t){t.d(n,{T:function(){return $71cd76cc60e0454e$export$6f32135080cb4c3}});var r=t(64103),o=t(60691);function $71cd76cc60e0454e$export$6f32135080cb4c3({prop:e,defaultProp:n,onChange:t=()=>{}}){let[i,a]=function({defaultProp:e,onChange:n}){let t=(0,r.useState)(e),[i]=t,a=(0,r.useRef)(i),u=(0,o.W)(n);return(0,r.useEffect)(()=>{a.current!==i&&(u(i),a.current=i)},[i,a,u]),t}({defaultProp:n,onChange:t}),u=void 0!==e,c=u?e:i,l=(0,o.W)(t),d=(0,r.useCallback)(n=>{if(u){let t="function"==typeof n?n(e):n;t!==e&&l(t)}else a(n)},[u,e,a,l]);return[c,d]}},99875:function(e,n,t){t.d(n,{b:function(){return o}});var r=t(64103);let o=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);