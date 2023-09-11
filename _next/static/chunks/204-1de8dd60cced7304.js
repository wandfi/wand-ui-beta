"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{36841:function(e,t,r){let n;r.d(t,{XB:function(){return f}});var o=r(40431),i=r(86006),l=r(1928),a=r(76899),u=r(81084),s=r(46868);let d="dismissableLayer.update",c=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,i.forwardRef)((e,t)=>{var r;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:h,onPointerDownOutside:m,onFocusOutside:g,onInteractOutside:y,onDismiss:w,...b}=e,E=(0,i.useContext)(c),[x,P]=(0,i.useState)(null),C=null!==(r=null==x?void 0:x.ownerDocument)&&void 0!==r?r:null==globalThis?void 0:globalThis.document,[,O]=(0,i.useState)({}),S=(0,u.e)(t,e=>P(e)),D=Array.from(E.layers),[W]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),A=D.indexOf(W),R=x?D.indexOf(x):-1,k=E.layersWithOutsidePointerEventsDisabled.size>0,L=R>=A,$=function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,s.W)(e),n=(0,i.useRef)(!1),o=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let e=e=>{if(e.target&&!n.current){let n={originalEvent:e};function i(){v("dismissableLayer.pointerDownOutside",r,n,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=i,t.addEventListener("click",o.current,{once:!0})):i()}n.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,r]),{onPointerDownCapture:()=>n.current=!0}}(e=>{let t=e.target,r=[...E.branches].some(e=>e.contains(t));!L||r||(null==m||m(e),null==y||y(e),e.defaultPrevented||null==w||w())},C),T=function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,s.W)(e),n=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e=e=>{e.target&&!n.current&&v("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}(e=>{let t=e.target,r=[...E.branches].some(e=>e.contains(t));r||(null==g||g(e),null==y||y(e),e.defaultPrevented||null==w||w())},C);return!function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,s.W)(e);(0,i.useEffect)(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[r,t])}(e=>{let t=R===E.layers.size-1;t&&(null==h||h(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},C),(0,i.useEffect)(()=>{if(x)return f&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(n=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(x)),E.layers.add(x),p(),()=>{f&&1===E.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=n)}},[x,C,f,E]),(0,i.useEffect)(()=>()=>{x&&(E.layers.delete(x),E.layersWithOutsidePointerEventsDisabled.delete(x),p())},[x,E]),(0,i.useEffect)(()=>{let e=()=>O({});return document.addEventListener(d,e),()=>document.removeEventListener(d,e)},[]),(0,i.createElement)(a.WV.div,(0,o.Z)({},b,{ref:S,style:{pointerEvents:k?L?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,T.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,$.onPointerDownCapture)}))});function p(){let e=new CustomEvent(d);document.dispatchEvent(e)}function v(e,t,r,{discrete:n}){let o=r.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),n?(0,a.jH)(o,i):o.dispatchEvent(i)}},6777:function(e,t,r){r.d(t,{ee:function(){return B},Eh:function(){return M},VY:function(){return H},fC:function(){return z},D7:function(){return P}});var n=r(40431),o=r(86006),i=r(21828),l=r(41778),a=r(8431);let u=e=>({name:"arrow",options:e,fn(t){let{element:r,padding:n}="function"==typeof e?e(t):e;if(r&&({}).hasOwnProperty.call(r,"current")){if(null!=r.current)return(0,i.x7)({element:r.current,padding:n}).fn(t)}else if(r)return(0,i.x7)({element:r,padding:n}).fn(t);return{}}});var s="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;function d(e,t){let r,n,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(!d(e[n],t[n]))return!1;return!0}if((r=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(n=r;0!=n--;)if(!({}).hasOwnProperty.call(t,o[n]))return!1;for(n=r;0!=n--;){let r=o[n];if(("_owner"!==r||!e.$$typeof)&&!d(e[r],t[r]))return!1}return!0}return e!=e&&t!=t}function c(e){if("undefined"==typeof window)return 1;let t=e.ownerDocument.defaultView||window;return t.devicePixelRatio||1}function f(e,t){let r=c(e);return Math.round(t*r)/r}function p(e){let t=o.useRef(e);return s(()=>{t.current=e}),t}var v=r(76899);let h=(0,o.forwardRef)((e,t)=>{let{children:r,width:i=10,height:l=5,...a}=e;return(0,o.createElement)(v.WV.svg,(0,n.Z)({},a,{ref:t,width:i,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?r:(0,o.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var m=r(81084),g=r(38899),y=r(46868),w=r(6423),b=r(59952);let E="Popper",[x,P]=(0,g.b)(E),[C,O]=x(E),S=(0,o.forwardRef)((e,t)=>{let{__scopePopper:r,virtualRef:i,...l}=e,a=O("PopperAnchor",r),u=(0,o.useRef)(null),s=(0,m.e)(t,u);return(0,o.useEffect)(()=>{a.onAnchorChange((null==i?void 0:i.current)||u.current)}),i?null:(0,o.createElement)(v.WV.div,(0,n.Z)({},l,{ref:s}))}),D="PopperContent",[W,A]=x(D),R=(0,o.forwardRef)((e,t)=>{var r,h,g,E,x,P,C,S;let{__scopePopper:A,side:R="bottom",sideOffset:k=0,align:L="center",alignOffset:z=0,arrowPadding:B=0,collisionBoundary:H=[],collisionPadding:M=0,sticky:V="partial",hideWhenDetached:Y=!1,avoidCollisions:F=!0,onPlaced:Z,...j}=e,X=O(D,A),[I,N]=(0,o.useState)(null),K=(0,m.e)(t,e=>N(e)),[q,G]=(0,o.useState)(null),J=(0,b.t)(q),Q=null!==(r=null==J?void 0:J.width)&&void 0!==r?r:0,U=null!==(h=null==J?void 0:J.height)&&void 0!==h?h:0,ee="number"==typeof M?M:{top:0,right:0,bottom:0,left:0,...M},et=Array.isArray(H)?H:[H],er=et.length>0,en={padding:ee,boundary:et.filter($),altBoundary:er},{refs:eo,floatingStyles:ei,placement:el,isPositioned:ea,middlewareData:eu}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:i,elements:{reference:u,floating:v}={},transform:h=!0,whileElementsMounted:m,open:g}=e,[y,w]=o.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[b,E]=o.useState(n);d(b,n)||E(n);let[x,P]=o.useState(null),[C,O]=o.useState(null),S=o.useCallback(e=>{e!=R.current&&(R.current=e,P(e))},[P]),D=o.useCallback(e=>{e!==k.current&&(k.current=e,O(e))},[O]),W=u||x,A=v||C,R=o.useRef(null),k=o.useRef(null),L=o.useRef(y),$=p(m),T=p(i),_=o.useCallback(()=>{if(!R.current||!k.current)return;let e={placement:t,strategy:r,middleware:b};T.current&&(e.platform=T.current),(0,l.oo)(R.current,k.current,e).then(e=>{let t={...e,isPositioned:!0};z.current&&!d(L.current,t)&&(L.current=t,a.flushSync(()=>{w(t)}))})},[b,t,r,T]);s(()=>{!1===g&&L.current.isPositioned&&(L.current.isPositioned=!1,w(e=>({...e,isPositioned:!1})))},[g]);let z=o.useRef(!1);s(()=>(z.current=!0,()=>{z.current=!1}),[]),s(()=>{if(W&&(R.current=W),A&&(k.current=A),W&&A){if($.current)return $.current(W,A,_);_()}},[W,A,_,$]);let B=o.useMemo(()=>({reference:R,floating:k,setReference:S,setFloating:D}),[S,D]),H=o.useMemo(()=>({reference:W,floating:A}),[W,A]),M=o.useMemo(()=>{let e={position:r,left:0,top:0};if(!H.floating)return e;let t=f(H.floating,y.x),n=f(H.floating,y.y);return h?{...e,transform:"translate("+t+"px, "+n+"px)",...c(H.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:t,top:n}},[r,h,H.floating,y.x,y.y]);return o.useMemo(()=>({...y,update:_,refs:B,elements:H,floatingStyles:M}),[y,_,B,H,M])}({strategy:"fixed",placement:R+("center"!==L?"-"+L:""),whileElementsMounted:l.Me,elements:{reference:X.anchor},middleware:[(0,i.cv)({mainAxis:k+U,alignmentAxis:z}),F&&(0,i.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===V?(0,i.dr)():void 0,...en}),F&&(0,i.RR)({...en}),(0,i.dp)({...en,apply:({elements:e,rects:t,availableWidth:r,availableHeight:n})=>{let{width:o,height:i}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${r}px`),l.setProperty("--radix-popper-available-height",`${n}px`),l.setProperty("--radix-popper-anchor-width",`${o}px`),l.setProperty("--radix-popper-anchor-height",`${i}px`)}}),q&&u({element:q,padding:B}),T({arrowWidth:Q,arrowHeight:U}),Y&&(0,i.Cp)({strategy:"referenceHidden"})]}),[es,ed]=_(el),ec=(0,y.W)(Z);(0,w.b)(()=>{ea&&(null==ec||ec())},[ea,ec]);let ef=null===(g=eu.arrow)||void 0===g?void 0:g.x,ep=null===(E=eu.arrow)||void 0===E?void 0:E.y,ev=(null===(x=eu.arrow)||void 0===x?void 0:x.centerOffset)!==0,[eh,em]=(0,o.useState)();return(0,w.b)(()=>{I&&em(window.getComputedStyle(I).zIndex)},[I]),(0,o.createElement)("div",{ref:eo.setFloating,"data-radix-popper-content-wrapper":"",style:{...ei,transform:ea?ei.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:eh,"--radix-popper-transform-origin":[null===(P=eu.transformOrigin)||void 0===P?void 0:P.x,null===(C=eu.transformOrigin)||void 0===C?void 0:C.y].join(" ")},dir:e.dir},(0,o.createElement)(W,{scope:A,placedSide:es,onArrowChange:G,arrowX:ef,arrowY:ep,shouldHideArrow:ev},(0,o.createElement)(v.WV.div,(0,n.Z)({"data-side":es,"data-align":ed},j,{ref:K,style:{...j.style,animation:ea?void 0:"none",opacity:null!==(S=eu.hide)&&void 0!==S&&S.referenceHidden?0:void 0}}))))}),k={top:"bottom",right:"left",bottom:"top",left:"right"},L=(0,o.forwardRef)(function(e,t){let{__scopePopper:r,...i}=e,l=A("PopperArrow",r),a=k[l.placedSide];return(0,o.createElement)("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0}},(0,o.createElement)(h,(0,n.Z)({},i,{ref:t,style:{...i.style,display:"block"}})))});function $(e){return null!==e}let T=e=>({name:"transformOrigin",options:e,fn(t){var r,n,o,i,l;let{placement:a,rects:u,middlewareData:s}=t,d=(null===(r=s.arrow)||void 0===r?void 0:r.centerOffset)!==0,c=d?0:e.arrowWidth,f=d?0:e.arrowHeight,[p,v]=_(a),h={start:"0%",center:"50%",end:"100%"}[v],m=(null!==(n=null===(o=s.arrow)||void 0===o?void 0:o.x)&&void 0!==n?n:0)+c/2,g=(null!==(i=null===(l=s.arrow)||void 0===l?void 0:l.y)&&void 0!==i?i:0)+f/2,y="",w="";return"bottom"===p?(y=d?h:`${m}px`,w=`${-f}px`):"top"===p?(y=d?h:`${m}px`,w=`${u.floating.height+f}px`):"right"===p?(y=`${-f}px`,w=d?h:`${g}px`):"left"===p&&(y=`${u.floating.width+f}px`,w=d?h:`${g}px`),{data:{x:y,y:w}}}});function _(e){let[t,r="center"]=e.split("-");return[t,r]}let z=e=>{let{__scopePopper:t,children:r}=e,[n,i]=(0,o.useState)(null);return(0,o.createElement)(C,{scope:t,anchor:n,onAnchorChange:i},r)},B=S,H=R,M=L},187:function(e,t,r){r.d(t,{h:function(){return a}});var n=r(40431),o=r(86006),i=r(8431),l=r(76899);let a=(0,o.forwardRef)((e,t)=>{var r;let{container:a=null==globalThis?void 0:null===(r=globalThis.document)||void 0===r?void 0:r.body,...u}=e;return a?i.createPortal((0,o.createElement)(l.WV.div,(0,n.Z)({},u,{ref:t})),a):null})},59952:function(e,t,r){r.d(t,{t:function(){return i}});var n=r(86006),o=r(6423);function i(e){let[t,r]=(0,n.useState)(void 0);return(0,o.b)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,o=t.blockSize}else n=e.offsetWidth,o=e.offsetHeight;r({width:n,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}}}]);