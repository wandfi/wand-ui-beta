"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{28654:function(_,f,u){u.d(f,{ee:function(){return eo},Eh:function(){return el},VY:function(){return er},fC:function(){return $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9},D7:function(){return Z}});var m=u(13428),d=u(2265);function t(_){return _.split("-")[1]}function e(_){return"y"===_?"height":"width"}function n(_){return _.split("-")[0]}function o(_){return["top","bottom"].includes(n(_))?"x":"y"}function i(_,f,u){let m,{reference:d,floating:p}=_,h=d.x+d.width/2-p.width/2,b=d.y+d.height/2-p.height/2,x=o(f),A=e(x),E=d[A]/2-p[A]/2,$="x"===x;switch(n(f)){case"top":m={x:h,y:d.y-p.height};break;case"bottom":m={x:h,y:d.y+d.height};break;case"right":m={x:d.x+d.width,y:b};break;case"left":m={x:d.x-p.width,y:b};break;default:m={x:d.x,y:d.y}}switch(t(f)){case"start":m[x]-=E*(u&&$?-1:1);break;case"end":m[x]+=E*(u&&$?-1:1)}return m}let floating_ui_core_browser_min_r=async(_,f,u)=>{let{placement:m="bottom",strategy:d="absolute",middleware:p=[],platform:h}=u,b=p.filter(Boolean),x=await (null==h.isRTL?void 0:h.isRTL(f)),A=await h.getElementRects({reference:_,floating:f,strategy:d}),{x:E,y:$}=i(A,m,x),D=m,C={},L=0;for(let u=0;u<b.length;u++){let{name:p,fn:O}=b[u],{x:T,y:B,data:M,reset:V}=await O({x:E,y:$,initialPlacement:m,placement:D,strategy:d,middlewareData:C,rects:A,platform:h,elements:{reference:_,floating:f}});E=null!=T?T:E,$=null!=B?B:$,C={...C,[p]:{...C[p],...M}},V&&L<=50&&(L++,"object"==typeof V&&(V.placement&&(D=V.placement),V.rects&&(A=!0===V.rects?await h.getElementRects({reference:_,floating:f,strategy:d}):V.rects),{x:E,y:$}=i(A,D,x)),u=-1)}return{x:E,y:$,placement:D,strategy:d,middlewareData:C}};function a(_,f){return"function"==typeof _?_(f):_}function l(_){return"number"!=typeof _?{top:0,right:0,bottom:0,left:0,..._}:{top:_,right:_,bottom:_,left:_}}function floating_ui_core_browser_min_s(_){return{..._,top:_.y,left:_.x,right:_.x+_.width,bottom:_.y+_.height}}async function c(_,f){var u;void 0===f&&(f={});let{x:m,y:d,platform:p,rects:h,elements:b,strategy:x}=_,{boundary:A="clippingAncestors",rootBoundary:E="viewport",elementContext:$="floating",altBoundary:D=!1,padding:C=0}=a(f,_),L=l(C),O=b[D?"floating"===$?"reference":"floating":$],T=floating_ui_core_browser_min_s(await p.getClippingRect({element:null==(u=await (null==p.isElement?void 0:p.isElement(O)))||u?O:O.contextElement||await (null==p.getDocumentElement?void 0:p.getDocumentElement(b.floating)),boundary:A,rootBoundary:E,strategy:x})),B="floating"===$?{...h.floating,x:m,y:d}:h.reference,M=await (null==p.getOffsetParent?void 0:p.getOffsetParent(b.floating)),V=await (null==p.isElement?void 0:p.isElement(M))&&await (null==p.getScale?void 0:p.getScale(M))||{x:1,y:1},N=floating_ui_core_browser_min_s(p.convertOffsetParentRelativeRectToViewportRelativeRect?await p.convertOffsetParentRelativeRectToViewportRelativeRect({rect:B,offsetParent:M,strategy:x}):B);return{top:(T.top-N.top+L.top)/V.y,bottom:(N.bottom-T.bottom+L.bottom)/V.y,left:(T.left-N.left+L.left)/V.x,right:(N.right-T.right+L.right)/V.x}}let p=Math.min,h=Math.max,g=_=>({name:"arrow",options:_,async fn(f){let{x:u,y:m,placement:d,rects:b,platform:x,elements:A}=f,{element:E,padding:$=0}=a(_,f)||{};if(null==E)return{};let D=l($),C={x:u,y:m},L=o(d),O=e(L),T=await x.getDimensions(E),B="y"===L,M=B?"clientHeight":"clientWidth",V=b.reference[O]+b.reference[L]-C[L]-b.floating[O],N=C[L]-b.reference[L],Y=await (null==x.getOffsetParent?void 0:x.getOffsetParent(E)),q=Y?Y[M]:0;q&&await (null==x.isElement?void 0:x.isElement(Y))||(q=A.floating[M]||b.floating[O]);let X=q/2-T[O]/2-1,j=p(D[B?"top":"left"],X),I=p(D[B?"bottom":"right"],X),Z=q-T[O]-I,G=q/2-T[O]/2+(V/2-N/2),J=h(j,p(G,Z)),K=null!=t(d)&&G!=J&&b.reference[O]/2-(G<j?j:I)-T[O]/2<0?G<j?j-G:Z-G:0;return{[L]:C[L]-K,data:{[L]:J,centerOffset:G-J+K}}}}),b=["top","right","bottom","left"],x=(b.reduce((_,f)=>_.concat(f,f+"-start",f+"-end"),[]),{left:"right",right:"left",bottom:"top",top:"bottom"});function y(_){return _.replace(/left|right|bottom|top/g,_=>x[_])}let A={start:"end",end:"start"};function v(_){return _.replace(/start|end/g,_=>A[_])}function R(_,f){return{top:_.top-f.height,right:_.right-f.width,bottom:_.bottom-f.height,left:_.left-f.width}}function P(_){return b.some(f=>_[f]>=0)}function k(_){return"x"===_?"y":"x"}function floating_ui_dom_browser_min_n(_){var f;return(null==_||null==(f=_.ownerDocument)?void 0:f.defaultView)||window}function floating_ui_dom_browser_min_o(_){return floating_ui_dom_browser_min_n(_).getComputedStyle(_)}function floating_ui_dom_browser_min_i(_){return _ instanceof floating_ui_dom_browser_min_n(_).Node}function r(_){return floating_ui_dom_browser_min_i(_)?(_.nodeName||"").toLowerCase():"#document"}function floating_ui_dom_browser_min_c(_){return _ instanceof HTMLElement||_ instanceof floating_ui_dom_browser_min_n(_).HTMLElement}function floating_ui_dom_browser_min_l(_){return"undefined"!=typeof ShadowRoot&&(_ instanceof floating_ui_dom_browser_min_n(_).ShadowRoot||_ instanceof ShadowRoot)}function s(_){let{overflow:f,overflowX:u,overflowY:m,display:d}=floating_ui_dom_browser_min_o(_);return/auto|scroll|overlay|hidden|clip/.test(f+m+u)&&!["inline","contents"].includes(d)}function floating_ui_dom_browser_min_u(_){let f=floating_ui_dom_browser_min_a(),u=floating_ui_dom_browser_min_o(_);return"none"!==u.transform||"none"!==u.perspective||!!u.containerType&&"normal"!==u.containerType||!f&&!!u.backdropFilter&&"none"!==u.backdropFilter||!f&&!!u.filter&&"none"!==u.filter||["transform","perspective","filter"].some(_=>(u.willChange||"").includes(_))||["paint","layout","strict","content"].some(_=>(u.contain||"").includes(_))}function floating_ui_dom_browser_min_a(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function floating_ui_dom_browser_min_d(_){return["html","body","#document"].includes(r(_))}let E=Math.min,$=Math.max,D=Math.round,C=Math.floor,floating_ui_dom_browser_min_y=_=>({x:_,y:_});function floating_ui_dom_browser_min_w(_){let f=floating_ui_dom_browser_min_o(_),u=parseFloat(f.width)||0,m=parseFloat(f.height)||0,d=floating_ui_dom_browser_min_c(_),p=d?_.offsetWidth:u,h=d?_.offsetHeight:m,b=D(u)!==p||D(m)!==h;return b&&(u=p,m=h),{width:u,height:m,$:b}}function floating_ui_dom_browser_min_x(_){return _ instanceof Element||_ instanceof floating_ui_dom_browser_min_n(_).Element}function floating_ui_dom_browser_min_v(_){return floating_ui_dom_browser_min_x(_)?_:_.contextElement}function floating_ui_dom_browser_min_b(_){let f=floating_ui_dom_browser_min_v(_);if(!floating_ui_dom_browser_min_c(f))return floating_ui_dom_browser_min_y(1);let u=f.getBoundingClientRect(),{width:m,height:d,$:p}=floating_ui_dom_browser_min_w(f),h=(p?D(u.width):u.width)/m,b=(p?D(u.height):u.height)/d;return h&&Number.isFinite(h)||(h=1),b&&Number.isFinite(b)||(b=1),{x:h,y:b}}let L=floating_ui_dom_browser_min_y(0);function floating_ui_dom_browser_min_T(_){let f=floating_ui_dom_browser_min_n(_);return floating_ui_dom_browser_min_a()&&f.visualViewport?{x:f.visualViewport.offsetLeft,y:f.visualViewport.offsetTop}:L}function floating_ui_dom_browser_min_R(_,f,u,m){var d;void 0===f&&(f=!1),void 0===u&&(u=!1);let p=_.getBoundingClientRect(),h=floating_ui_dom_browser_min_v(_),b=floating_ui_dom_browser_min_y(1);f&&(m?floating_ui_dom_browser_min_x(m)&&(b=floating_ui_dom_browser_min_b(m)):b=floating_ui_dom_browser_min_b(_));let x=(void 0===(d=u)&&(d=!1),!(!m||d&&m!==floating_ui_dom_browser_min_n(h))&&d)?floating_ui_dom_browser_min_T(h):floating_ui_dom_browser_min_y(0),A=(p.left+x.x)/b.x,E=(p.top+x.y)/b.y,$=p.width/b.x,D=p.height/b.y;if(h){let _=floating_ui_dom_browser_min_n(h),f=m&&floating_ui_dom_browser_min_x(m)?floating_ui_dom_browser_min_n(m):m,u=_.frameElement;for(;u&&m&&f!==_;){let _=floating_ui_dom_browser_min_b(u),f=u.getBoundingClientRect(),m=getComputedStyle(u),d=f.left+(u.clientLeft+parseFloat(m.paddingLeft))*_.x,p=f.top+(u.clientTop+parseFloat(m.paddingTop))*_.y;A*=_.x,E*=_.y,$*=_.x,D*=_.y,A+=d,E+=p,u=floating_ui_dom_browser_min_n(u).frameElement}}return floating_ui_core_browser_min_s({width:$,height:D,x:A,y:E})}function floating_ui_dom_browser_min_E(_){return floating_ui_dom_browser_min_x(_)?{scrollLeft:_.scrollLeft,scrollTop:_.scrollTop}:{scrollLeft:_.pageXOffset,scrollTop:_.pageYOffset}}function S(_){var f;return null==(f=(floating_ui_dom_browser_min_i(_)?_.ownerDocument:_.document)||window.document)?void 0:f.documentElement}function floating_ui_dom_browser_min_C(_){return floating_ui_dom_browser_min_R(S(_)).left+floating_ui_dom_browser_min_E(_).scrollLeft}function F(_){if("html"===r(_))return _;let f=_.assignedSlot||_.parentNode||floating_ui_dom_browser_min_l(_)&&_.host||S(_);return floating_ui_dom_browser_min_l(f)?f.host:f}function floating_ui_dom_browser_min_D(_,f){var u;void 0===f&&(f=[]);let m=function floating_ui_dom_browser_min_O(_){let f=F(_);return floating_ui_dom_browser_min_d(f)?_.ownerDocument?_.ownerDocument.body:_.body:floating_ui_dom_browser_min_c(f)&&s(f)?f:floating_ui_dom_browser_min_O(f)}(_),d=m===(null==(u=_.ownerDocument)?void 0:u.body),p=floating_ui_dom_browser_min_n(m);return d?f.concat(p,p.visualViewport||[],s(m)?m:[]):f.concat(m,floating_ui_dom_browser_min_D(m))}function H(_,f,u){let m;if("viewport"===f)m=function(_,f){let u=floating_ui_dom_browser_min_n(_),m=S(_),d=u.visualViewport,p=m.clientWidth,h=m.clientHeight,b=0,x=0;if(d){p=d.width,h=d.height;let _=floating_ui_dom_browser_min_a();(!_||_&&"fixed"===f)&&(b=d.offsetLeft,x=d.offsetTop)}return{width:p,height:h,x:b,y:x}}(_,u);else if("document"===f)m=function(_){let f=S(_),u=floating_ui_dom_browser_min_E(_),m=_.ownerDocument.body,d=$(f.scrollWidth,f.clientWidth,m.scrollWidth,m.clientWidth),p=$(f.scrollHeight,f.clientHeight,m.scrollHeight,m.clientHeight),h=-u.scrollLeft+floating_ui_dom_browser_min_C(_),b=-u.scrollTop;return"rtl"===floating_ui_dom_browser_min_o(m).direction&&(h+=$(f.clientWidth,m.clientWidth)-d),{width:d,height:p,x:h,y:b}}(S(_));else if(floating_ui_dom_browser_min_x(f))m=function(_,f){let u=floating_ui_dom_browser_min_R(_,!0,"fixed"===f),m=u.top+_.clientTop,d=u.left+_.clientLeft,p=floating_ui_dom_browser_min_c(_)?floating_ui_dom_browser_min_b(_):floating_ui_dom_browser_min_y(1);return{width:_.clientWidth*p.x,height:_.clientHeight*p.y,x:d*p.x,y:m*p.y}}(f,u);else{let u=floating_ui_dom_browser_min_T(_);m={...f,x:f.x-u.x,y:f.y-u.y}}return floating_ui_core_browser_min_s(m)}function z(_,f){return floating_ui_dom_browser_min_c(_)&&"fixed"!==floating_ui_dom_browser_min_o(_).position?f?f(_):_.offsetParent:null}function floating_ui_dom_browser_min_P(_,f){let u=floating_ui_dom_browser_min_n(_);if(!floating_ui_dom_browser_min_c(_))return u;let m=z(_,f);for(;m&&["table","td","th"].includes(r(m))&&"static"===floating_ui_dom_browser_min_o(m).position;)m=z(m,f);return m&&("html"===r(m)||"body"===r(m)&&"static"===floating_ui_dom_browser_min_o(m).position&&!floating_ui_dom_browser_min_u(m))?u:m||function(_){let f=F(_);for(;floating_ui_dom_browser_min_c(f)&&!floating_ui_dom_browser_min_d(f);){if(floating_ui_dom_browser_min_u(f))return f;f=F(f)}return null}(_)||u}let O={convertOffsetParentRelativeRectToViewportRelativeRect:function(_){let{rect:f,offsetParent:u,strategy:m}=_,d=floating_ui_dom_browser_min_c(u),p=S(u);if(u===p)return f;let h={scrollLeft:0,scrollTop:0},b=floating_ui_dom_browser_min_y(1),x=floating_ui_dom_browser_min_y(0);if((d||!d&&"fixed"!==m)&&(("body"!==r(u)||s(p))&&(h=floating_ui_dom_browser_min_E(u)),floating_ui_dom_browser_min_c(u))){let _=floating_ui_dom_browser_min_R(u);b=floating_ui_dom_browser_min_b(u),x.x=_.x+u.clientLeft,x.y=_.y+u.clientTop}return{width:f.width*b.x,height:f.height*b.y,x:f.x*b.x-h.scrollLeft*b.x+x.x,y:f.y*b.y-h.scrollTop*b.y+x.y}},getDocumentElement:S,getClippingRect:function(_){let{element:f,boundary:u,rootBoundary:m,strategy:d}=_,p=[..."clippingAncestors"===u?function(_,f){let u=f.get(_);if(u)return u;let m=floating_ui_dom_browser_min_D(_).filter(_=>floating_ui_dom_browser_min_x(_)&&"body"!==r(_)),d=null,p="fixed"===floating_ui_dom_browser_min_o(_).position,h=p?F(_):_;for(;floating_ui_dom_browser_min_x(h)&&!floating_ui_dom_browser_min_d(h);){let f=floating_ui_dom_browser_min_o(h),u=floating_ui_dom_browser_min_u(h);u||"fixed"!==f.position||(d=null),(p?!u&&!d:!u&&"static"===f.position&&d&&["absolute","fixed"].includes(d.position)||s(h)&&!u&&function W(_,f){let u=F(_);return!(u===f||!floating_ui_dom_browser_min_x(u)||floating_ui_dom_browser_min_d(u))&&("fixed"===floating_ui_dom_browser_min_o(u).position||W(u,f))}(_,h))?m=m.filter(_=>_!==h):d=f,h=F(h)}return f.set(_,m),m}(f,this._c):[].concat(u),m],h=p[0],b=p.reduce((_,u)=>{let m=H(f,u,d);return _.top=$(m.top,_.top),_.right=E(m.right,_.right),_.bottom=E(m.bottom,_.bottom),_.left=$(m.left,_.left),_},H(f,h,d));return{width:b.right-b.left,height:b.bottom-b.top,x:b.left,y:b.top}},getOffsetParent:floating_ui_dom_browser_min_P,getElementRects:async function(_){let{reference:f,floating:u,strategy:m}=_,d=this.getOffsetParent||floating_ui_dom_browser_min_P,p=this.getDimensions;return{reference:function(_,f,u){let m=floating_ui_dom_browser_min_c(f),d=S(f),p="fixed"===u,h=floating_ui_dom_browser_min_R(_,!0,p,f),b={scrollLeft:0,scrollTop:0},x=floating_ui_dom_browser_min_y(0);if(m||!m&&!p){if(("body"!==r(f)||s(d))&&(b=floating_ui_dom_browser_min_E(f)),floating_ui_dom_browser_min_c(f)){let _=floating_ui_dom_browser_min_R(f,!0,p,f);x.x=_.x+f.clientLeft,x.y=_.y+f.clientTop}else d&&(x.x=floating_ui_dom_browser_min_C(d))}return{x:h.left+b.scrollLeft-x.x,y:h.top+b.scrollTop-x.y,width:h.width,height:h.height}}(f,await d(u),m),floating:{x:0,y:0,...await p(u)}}},getClientRects:function(_){return Array.from(_.getClientRects())},getDimensions:function(_){return floating_ui_dom_browser_min_w(_)},getScale:floating_ui_dom_browser_min_b,isElement:floating_ui_dom_browser_min_x,isRTL:function(_){return"rtl"===getComputedStyle(_).direction}};function floating_ui_dom_browser_min_A(_,f,u,m){void 0===m&&(m={});let{ancestorScroll:d=!0,ancestorResize:p=!0,elementResize:h="function"==typeof ResizeObserver,layoutShift:b="function"==typeof IntersectionObserver,animationFrame:x=!1}=m,A=floating_ui_dom_browser_min_v(_),D=d||p?[...A?floating_ui_dom_browser_min_D(A):[],...floating_ui_dom_browser_min_D(f)]:[];D.forEach(_=>{d&&_.addEventListener("scroll",u,{passive:!0}),p&&_.addEventListener("resize",u)});let L=A&&b?function(_,f){let u,m=null,d=S(_);function r(){clearTimeout(u),m&&m.disconnect(),m=null}return function c(p,h){void 0===p&&(p=!1),void 0===h&&(h=1),r();let{left:b,top:x,width:A,height:D}=_.getBoundingClientRect();if(p||f(),!A||!D)return;let L={rootMargin:-C(x)+"px "+-C(d.clientWidth-(b+A))+"px "+-C(d.clientHeight-(x+D))+"px "+-C(b)+"px",threshold:$(0,E(1,h))||1},O=!0;function w(_){let f=_[0].intersectionRatio;if(f!==h){if(!O)return c();f?c(!1,f):u=setTimeout(()=>{c(!1,1e-7)},100)}O=!1}try{m=new IntersectionObserver(w,{...L,root:d.ownerDocument})}catch(_){m=new IntersectionObserver(w,L)}m.observe(_)}(!0),r}(A,u):null,O,T=-1,B=null;h&&(B=new ResizeObserver(_=>{let[m]=_;m&&m.target===A&&B&&(B.unobserve(f),cancelAnimationFrame(T),T=requestAnimationFrame(()=>{B&&B.observe(f)})),u()}),A&&!x&&B.observe(A),B.observe(f));let M=x?floating_ui_dom_browser_min_R(_):null;return x&&function e(){let f=floating_ui_dom_browser_min_R(_);M&&(f.x!==M.x||f.y!==M.y||f.width!==M.width||f.height!==M.height)&&u(),M=f,O=requestAnimationFrame(e)}(),u(),()=>{D.forEach(_=>{d&&_.removeEventListener("scroll",u),p&&_.removeEventListener("resize",u)}),L&&L(),B&&B.disconnect(),B=null,x&&cancelAnimationFrame(O)}}let floating_ui_dom_browser_min_B=(_,f,u)=>{let m=new Map,d={platform:O,...u},p={...d.platform,_c:m};return floating_ui_core_browser_min_r(_,f,{...d,platform:p})};var T=u(54887);let floating_ui_react_dom_esm_arrow=_=>({name:"arrow",options:_,fn(f){let{element:u,padding:m}="function"==typeof _?_(f):_;if(u&&({}).hasOwnProperty.call(u,"current")){if(null!=u.current)return g({element:u.current,padding:m}).fn(f)}else if(u)return g({element:u,padding:m}).fn(f);return{}}});var B="undefined"!=typeof document?d.useLayoutEffect:d.useEffect;function deepEqual(_,f){let u,m,d;if(_===f)return!0;if(typeof _!=typeof f)return!1;if("function"==typeof _&&_.toString()===f.toString())return!0;if(_&&f&&"object"==typeof _){if(Array.isArray(_)){if((u=_.length)!=f.length)return!1;for(m=u;0!=m--;)if(!deepEqual(_[m],f[m]))return!1;return!0}if((u=(d=Object.keys(_)).length)!==Object.keys(f).length)return!1;for(m=u;0!=m--;)if(!({}).hasOwnProperty.call(f,d[m]))return!1;for(m=u;0!=m--;){let u=d[m];if(("_owner"!==u||!_.$$typeof)&&!deepEqual(_[u],f[u]))return!1}return!0}return _!=_&&f!=f}function getDPR(_){if("undefined"==typeof window)return 1;let f=_.ownerDocument.defaultView||window;return f.devicePixelRatio||1}function roundByDPR(_,f){let u=getDPR(_);return Math.round(f*u)/u}function useLatestRef(_){let f=d.useRef(_);return B(()=>{f.current=_}),f}var M=u(9381);let V=(0,d.forwardRef)((_,f)=>{let{children:u,width:p=10,height:h=5,...b}=_;return(0,d.createElement)(M.WV.svg,(0,m.Z)({},b,{ref:f,width:p,height:h,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),_.asChild?u:(0,d.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var N=u(42210),Y=u(56989),q=u(16459),X=u(51030);let j="Popper",[I,Z]=(0,Y.b)(j),[G,J]=I(j),K=(0,d.forwardRef)((_,f)=>{let{__scopePopper:u,virtualRef:p,...h}=_,b=J("PopperAnchor",u),x=(0,d.useRef)(null),A=(0,N.e)(f,x);return(0,d.useEffect)(()=>{b.onAnchorChange((null==p?void 0:p.current)||x.current)}),p?null:(0,d.createElement)(M.WV.div,(0,m.Z)({},h,{ref:A}))}),Q="PopperContent",[U,ee]=I(Q),et=(0,d.forwardRef)((_,f)=>{var u,b,x,A,E,$,D,C,L,O,V,Y,j,I;let{__scopePopper:Z,side:G="bottom",sideOffset:K=0,align:ee="center",alignOffset:et=0,arrowPadding:en=0,collisionBoundary:ei=[],collisionPadding:eo=0,sticky:er="partial",hideWhenDetached:el=!1,avoidCollisions:ea=!0,onPlaced:e_,...ef}=_,es=J(Q,Z),[eu,em]=(0,d.useState)(null),ec=(0,N.e)(f,_=>em(_)),[ed,eg]=(0,d.useState)(null),ew=function(_){let[f,u]=(0,d.useState)(void 0);return(0,X.b)(()=>{if(_){u({width:_.offsetWidth,height:_.offsetHeight});let f=new ResizeObserver(f=>{let m,d;if(!Array.isArray(f)||!f.length)return;let p=f[0];if("borderBoxSize"in p){let _=p.borderBoxSize,f=Array.isArray(_)?_[0]:_;m=f.inlineSize,d=f.blockSize}else m=_.offsetWidth,d=_.offsetHeight;u({width:m,height:d})});return f.observe(_,{box:"border-box"}),()=>f.unobserve(_)}u(void 0)},[_]),f}(ed),ep=null!==(u=null==ew?void 0:ew.width)&&void 0!==u?u:0,eh=null!==(b=null==ew?void 0:ew.height)&&void 0!==b?b:0,eb="number"==typeof eo?eo:{top:0,right:0,bottom:0,left:0,...eo},ey=Array.isArray(ei)?ei:[ei],ex=ey.length>0,ev={padding:eb,boundary:ey.filter($cf1ac5d9fe0e8206$var$isNotNull),altBoundary:ex},{refs:eR,floatingStyles:eA,placement:eP,isPositioned:eS,middlewareData:eE}=function(_){void 0===_&&(_={});let{placement:f="bottom",strategy:u="absolute",middleware:m=[],platform:p,elements:{reference:h,floating:b}={},transform:x=!0,whileElementsMounted:A,open:E}=_,[$,D]=d.useState({x:0,y:0,strategy:u,placement:f,middlewareData:{},isPositioned:!1}),[C,L]=d.useState(m);deepEqual(C,m)||L(m);let[O,M]=d.useState(null),[V,N]=d.useState(null),Y=d.useCallback(_=>{_!=I.current&&(I.current=_,M(_))},[M]),q=d.useCallback(_=>{_!==Z.current&&(Z.current=_,N(_))},[N]),X=h||O,j=b||V,I=d.useRef(null),Z=d.useRef(null),G=d.useRef($),J=useLatestRef(A),K=useLatestRef(p),Q=d.useCallback(()=>{if(!I.current||!Z.current)return;let _={placement:f,strategy:u,middleware:C};K.current&&(_.platform=K.current),floating_ui_dom_browser_min_B(I.current,Z.current,_).then(_=>{let f={..._,isPositioned:!0};U.current&&!deepEqual(G.current,f)&&(G.current=f,T.flushSync(()=>{D(f)}))})},[C,f,u,K]);B(()=>{!1===E&&G.current.isPositioned&&(G.current.isPositioned=!1,D(_=>({..._,isPositioned:!1})))},[E]);let U=d.useRef(!1);B(()=>(U.current=!0,()=>{U.current=!1}),[]),B(()=>{if(X&&(I.current=X),j&&(Z.current=j),X&&j){if(J.current)return J.current(X,j,Q);Q()}},[X,j,Q,J]);let ee=d.useMemo(()=>({reference:I,floating:Z,setReference:Y,setFloating:q}),[Y,q]),et=d.useMemo(()=>({reference:X,floating:j}),[X,j]),en=d.useMemo(()=>{let _={position:u,left:0,top:0};if(!et.floating)return _;let f=roundByDPR(et.floating,$.x),m=roundByDPR(et.floating,$.y);return x?{..._,transform:"translate("+f+"px, "+m+"px)",...getDPR(et.floating)>=1.5&&{willChange:"transform"}}:{position:u,left:f,top:m}},[u,x,et.floating,$.x,$.y]);return d.useMemo(()=>({...$,update:Q,refs:ee,elements:et,floatingStyles:en}),[$,Q,ee,et,en])}({strategy:"fixed",placement:G+("center"!==ee?"-"+ee:""),whileElementsMounted:floating_ui_dom_browser_min_A,elements:{reference:es.anchor},middleware:[{name:"offset",options:L={mainAxis:K+eh,alignmentAxis:et},async fn(_){let{x:f,y:u}=_,m=await async function(_,f){let{placement:u,platform:m,elements:d}=_,p=await (null==m.isRTL?void 0:m.isRTL(d.floating)),h=n(u),b=t(u),x="x"===o(u),A=["left","top"].includes(h)?-1:1,E=p&&x?-1:1,$=a(f,_),{mainAxis:D,crossAxis:C,alignmentAxis:L}="number"==typeof $?{mainAxis:$,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...$};return b&&"number"==typeof L&&(C="end"===b?-1*L:L),x?{x:C*E,y:D*A}:{x:D*A,y:C*E}}(_,L);return{x:f+m.x,y:u+m.y,data:m}}},ea&&{name:"shift",options:V={mainAxis:!0,crossAxis:!1,limiter:"partial"===er?(void 0===O&&(O={}),{options:O,fn(_){let{x:f,y:u,placement:m,rects:d,middlewareData:p}=_,{offset:h=0,mainAxis:b=!0,crossAxis:x=!0}=a(O,_),A={x:f,y:u},E=o(m),$=k(E),D=A[E],C=A[$],L=a(h,_),T="number"==typeof L?{mainAxis:L,crossAxis:0}:{mainAxis:0,crossAxis:0,...L};if(b){let _="y"===E?"height":"width",f=d.reference[E]-d.floating[_]+T.mainAxis,u=d.reference[E]+d.reference[_]-T.mainAxis;D<f?D=f:D>u&&(D=u)}if(x){var B,M;let _="y"===E?"width":"height",f=["top","left"].includes(n(m)),u=d.reference[$]-d.floating[_]+(f&&(null==(B=p.offset)?void 0:B[$])||0)+(f?0:T.crossAxis),h=d.reference[$]+d.reference[_]+(f?0:(null==(M=p.offset)?void 0:M[$])||0)-(f?T.crossAxis:0);C<u?C=u:C>h&&(C=h)}return{[E]:D,[$]:C}}}):void 0,...ev},async fn(_){let{x:f,y:u,placement:m}=_,{mainAxis:d=!0,crossAxis:b=!1,limiter:x={fn:_=>{let{x:f,y:u}=_;return{x:f,y:u}}},...A}=a(V,_),E={x:f,y:u},$=await c(_,A),D=o(n(m)),C=k(D),L=E[D],O=E[C];if(d){let _="y"===D?"bottom":"right";L=h(L+$["y"===D?"top":"left"],p(L,L-$[_]))}b&&(O=h(O+$["y"===C?"top":"left"],p(O,O-$["y"===C?"bottom":"right"])));let T=x.fn({..._,[D]:L,[C]:O});return{...T,data:{x:T.x-f,y:T.y-u}}}},ea&&{name:"flip",options:Y={...ev},async fn(_){var f,u,m,d;let{placement:p,middlewareData:h,rects:b,initialPlacement:x,platform:A,elements:E}=_,{mainAxis:$=!0,crossAxis:D=!0,fallbackPlacements:C,fallbackStrategy:L="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:T=!0,...B}=a(Y,_),M=n(p),V=n(x)===x,N=await (null==A.isRTL?void 0:A.isRTL(E.floating)),q=C||(V||!T?[y(x)]:function(_){let f=y(_);return[v(_),f,v(f)]}(x));C||"none"===O||q.push(...function(_,f,u,m){let d=t(_),p=function(_,f,u){let m=["left","right"],d=["right","left"];switch(_){case"top":case"bottom":return u?f?d:m:f?m:d;case"left":case"right":return f?["top","bottom"]:["bottom","top"];default:return[]}}(n(_),"start"===u,m);return d&&(p=p.map(_=>_+"-"+d),f&&(p=p.concat(p.map(v)))),p}(x,T,O,N));let X=[x,...q],j=await c(_,B),I=[],Z=(null==(f=h.flip)?void 0:f.overflows)||[];if($&&I.push(j[M]),D){let{main:_,cross:f}=function(_,f,u){void 0===u&&(u=!1);let m=t(_),d=o(_),p=e(d),h="x"===d?m===(u?"end":"start")?"right":"left":"start"===m?"bottom":"top";return f.reference[p]>f.floating[p]&&(h=y(h)),{main:h,cross:y(h)}}(p,b,N);I.push(j[_],j[f])}if(Z=[...Z,{placement:p,overflows:I}],!I.every(_=>_<=0)){let _=((null==(u=h.flip)?void 0:u.index)||0)+1,f=X[_];if(f)return{data:{index:_,overflows:Z},reset:{placement:f}};let b=null==(m=Z.filter(_=>_.overflows[0]<=0).sort((_,f)=>_.overflows[1]-f.overflows[1])[0])?void 0:m.placement;if(!b)switch(L){case"bestFit":{let _=null==(d=Z.map(_=>[_.placement,_.overflows.filter(_=>_>0).reduce((_,f)=>_+f,0)]).sort((_,f)=>_[1]-f[1])[0])?void 0:d[0];_&&(b=_);break}case"initialPlacement":b=x}if(p!==b)return{reset:{placement:b}}}return{}}},{name:"size",options:j={...ev,apply:({elements:_,rects:f,availableWidth:u,availableHeight:m})=>{let{width:d,height:p}=f.reference,h=_.floating.style;h.setProperty("--radix-popper-available-width",`${u}px`),h.setProperty("--radix-popper-available-height",`${m}px`),h.setProperty("--radix-popper-anchor-width",`${d}px`),h.setProperty("--radix-popper-anchor-height",`${p}px`)}},async fn(_){let f,u;let{placement:m,rects:d,platform:b,elements:x}=_,{apply:A=()=>{},...E}=a(j,_),$=await c(_,E),D=n(m),C=t(m),L="x"===o(m),{width:O,height:T}=d.floating;"top"===D||"bottom"===D?(f=D,u=C===(await (null==b.isRTL?void 0:b.isRTL(x.floating))?"start":"end")?"left":"right"):(u=D,f="end"===C?"top":"bottom");let B=T-$[f],M=O-$[u],V=!_.middlewareData.shift,N=B,Y=M;if(L){let _=O-$.left-$.right;Y=C||V?p(M,_):_}else{let _=T-$.top-$.bottom;N=C||V?p(B,_):_}if(V&&!C){let _=h($.left,0),f=h($.right,0),u=h($.top,0),m=h($.bottom,0);L?Y=O-2*(0!==_||0!==f?_+f:h($.left,$.right)):N=T-2*(0!==u||0!==m?u+m:h($.top,$.bottom))}await A({..._,availableWidth:Y,availableHeight:N});let q=await b.getDimensions(x.floating);return O!==q.width||T!==q.height?{reset:{rects:!0}}:{}}},ed&&floating_ui_react_dom_esm_arrow({element:ed,padding:en}),$cf1ac5d9fe0e8206$var$transformOrigin({arrowWidth:ep,arrowHeight:eh}),el&&{name:"hide",options:I={strategy:"referenceHidden"},async fn(_){let{rects:f}=_,{strategy:u="referenceHidden",...m}=a(I,_);switch(u){case"referenceHidden":{let u=R(await c(_,{...m,elementContext:"reference"}),f.reference);return{data:{referenceHiddenOffsets:u,referenceHidden:P(u)}}}case"escaped":{let u=R(await c(_,{...m,altBoundary:!0}),f.floating);return{data:{escapedOffsets:u,escaped:P(u)}}}default:return{}}}}]}),[e$,eD]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(eP),eC=(0,q.W)(e_);(0,X.b)(()=>{eS&&(null==eC||eC())},[eS,eC]);let eL=null===(x=eE.arrow)||void 0===x?void 0:x.x,eO=null===(A=eE.arrow)||void 0===A?void 0:A.y,eT=(null===(E=eE.arrow)||void 0===E?void 0:E.centerOffset)!==0,[ek,eH]=(0,d.useState)();return(0,X.b)(()=>{eu&&eH(window.getComputedStyle(eu).zIndex)},[eu]),(0,d.createElement)("div",{ref:eR.setFloating,"data-radix-popper-content-wrapper":"",style:{...eA,transform:eS?eA.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ek,"--radix-popper-transform-origin":[null===($=eE.transformOrigin)||void 0===$?void 0:$.x,null===(D=eE.transformOrigin)||void 0===D?void 0:D.y].join(" ")},dir:_.dir},(0,d.createElement)(U,{scope:Z,placedSide:e$,onArrowChange:eg,arrowX:eL,arrowY:eO,shouldHideArrow:eT},(0,d.createElement)(M.WV.div,(0,m.Z)({"data-side":e$,"data-align":eD},ef,{ref:ec,style:{...ef.style,animation:eS?void 0:"none",opacity:null!==(C=eE.hide)&&void 0!==C&&C.referenceHidden?0:void 0}}))))}),en={top:"bottom",right:"left",bottom:"top",left:"right"},ei=(0,d.forwardRef)(function(_,f){let{__scopePopper:u,...p}=_,h=ee("PopperArrow",u),b=en[h.placedSide];return(0,d.createElement)("span",{ref:h.onArrowChange,style:{position:"absolute",left:h.arrowX,top:h.arrowY,[b]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[h.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[h.placedSide],visibility:h.shouldHideArrow?"hidden":void 0}},(0,d.createElement)(V,(0,m.Z)({},p,{ref:f,style:{...p.style,display:"block"}})))});function $cf1ac5d9fe0e8206$var$isNotNull(_){return null!==_}let $cf1ac5d9fe0e8206$var$transformOrigin=_=>({name:"transformOrigin",options:_,fn(f){var u,m,d,p,h;let{placement:b,rects:x,middlewareData:A}=f,E=(null===(u=A.arrow)||void 0===u?void 0:u.centerOffset)!==0,$=E?0:_.arrowWidth,D=E?0:_.arrowHeight,[C,L]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(b),O={start:"0%",center:"50%",end:"100%"}[L],T=(null!==(m=null===(d=A.arrow)||void 0===d?void 0:d.x)&&void 0!==m?m:0)+$/2,B=(null!==(p=null===(h=A.arrow)||void 0===h?void 0:h.y)&&void 0!==p?p:0)+D/2,M="",V="";return"bottom"===C?(M=E?O:`${T}px`,V=`${-D}px`):"top"===C?(M=E?O:`${T}px`,V=`${x.floating.height+D}px`):"right"===C?(M=`${-D}px`,V=E?O:`${B}px`):"left"===C&&(M=`${x.floating.width+D}px`,V=E?O:`${B}px`),{data:{x:M,y:V}}}});function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(_){let[f,u="center"]=_.split("-");return[f,u]}let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9=_=>{let{__scopePopper:f,children:u}=_,[m,p]=(0,d.useState)(null);return(0,d.createElement)(G,{scope:f,anchor:m,onAnchorChange:p},u)},eo=K,er=et,el=ei}}]);