"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[381],{28378:function(e,t,n){n.d(t,{u:function(){return r}});function r(e,[t,n]){return Math.min(n,Math.max(t,e))}},32726:function(e,t,n){n.d(t,{B4:function(){return ep},JO:function(){return em},VY:function(){return eh},ck:function(){return ew},eT:function(){return eb},fC:function(){return es},h_:function(){return ev},l_:function(){return eg},xz:function(){return ef}});var r=n(40431),o=n(86006),l=n(8431),a=n(28378),i=n(1928),u=n(79455),d=n(81084),c=n(38899),s=n(84924),f=n(36841),p=n(76808),m=n(63961),v=n(70757),h=n(6777),g=n(187),w=n(76899),b=n(1095),y=n(46868),E=n(85740),S=n(6423),x=n(93414),C=n(28137),M=n(472),D=n(94299);let _=[" ","Enter","ArrowUp","ArrowDown"],R=[" ","Enter"],P="Select",[k,T,I]=(0,u.B)(P),[V,A]=(0,c.b)(P,[I,h.D7]),K=(0,h.D7)(),[W,Z]=V(P),[O,H]=V(P),L=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,disabled:l=!1,...a}=e,u=K(n),c=Z("SelectTrigger",n),s=c.disabled||l,f=(0,d.e)(t,c.onTriggerChange),p=T(n),[m,v,g]=ed(e=>{let t=p().filter(e=>!e.disabled),n=t.find(e=>e.value===c.value),r=ec(t,e,n);void 0!==r&&c.onValueChange(r.value)}),b=()=>{s||(c.onOpenChange(!0),g())};return(0,o.createElement)(h.ee,(0,r.Z)({asChild:!0},u),(0,o.createElement)(w.WV.button,(0,r.Z)({type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":void 0===c.value?"":void 0},a,{ref:f,onClick:(0,i.M)(a.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,i.M)(a.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(b(),c.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,i.M)(a.onKeyDown,e=>{let t=""!==m.current,n=e.ctrlKey||e.altKey||e.metaKey;n||1!==e.key.length||v(e.key),(!t||" "!==e.key)&&_.includes(e.key)&&(b(),e.preventDefault())})})))}),B=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,className:l,style:a,children:i,placeholder:u,...c}=e,s=Z("SelectValue",n),{onValueNodeHasChildrenChange:f}=s,p=void 0!==i,m=(0,d.e)(t,s.onValueNodeChange);return(0,S.b)(()=>{f(p)},[f,p]),(0,o.createElement)(w.WV.span,(0,r.Z)({},c,{ref:m,style:{pointerEvents:"none"}}),void 0===s.value&&void 0!==u?u:i)}),N=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,children:l,...a}=e;return(0,o.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},a,{ref:t}),l||"▼")}),F="SelectContent",z=(0,o.forwardRef)((e,t)=>{let n=Z(F,e.__scopeSelect),[a,i]=(0,o.useState)();return((0,S.b)(()=>{i(new DocumentFragment)},[]),n.open)?(0,o.createElement)($,(0,r.Z)({},e,{ref:t})):a?(0,l.createPortal)((0,o.createElement)(U,{scope:e.__scopeSelect},(0,o.createElement)(k.Slot,{scope:e.__scopeSelect},(0,o.createElement)("div",null,e.children))),a):null}),[U,Y]=V(F),$=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,position:l="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:u,onPointerDownOutside:c,side:s,sideOffset:v,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:y,collisionPadding:E,sticky:S,hideWhenDetached:x,avoidCollisions:C,..._}=e,R=Z(F,n),[P,k]=(0,o.useState)(null),[I,V]=(0,o.useState)(null),A=(0,d.e)(t,e=>k(e)),[K,W]=(0,o.useState)(null),[O,H]=(0,o.useState)(null),L=T(n),[B,N]=(0,o.useState)(!1),z=(0,o.useRef)(!1);(0,o.useEffect)(()=>{if(P)return(0,M.Ry)(P)},[P]),(0,p.EW)();let Y=(0,o.useCallback)(e=>{let[t,...n]=L().map(e=>e.ref.current),[r]=n.slice(-1),o=document.activeElement;for(let n of e)if(n===o||(null==n||n.scrollIntoView({block:"nearest"}),n===t&&I&&(I.scrollTop=0),n===r&&I&&(I.scrollTop=I.scrollHeight),null==n||n.focus(),document.activeElement!==o))return},[L,I]),$=(0,o.useCallback)(()=>Y([K,P]),[Y,K,P]);(0,o.useEffect)(()=>{B&&$()},[B,$]);let{onOpenChange:j,triggerPointerDownPosRef:G}=R;(0,o.useEffect)(()=>{if(P){let e={x:0,y:0},t=t=>{var n,r,o,l;e={x:Math.abs(Math.round(t.pageX)-(null!==(n=null===(r=G.current)||void 0===r?void 0:r.x)&&void 0!==n?n:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(l=G.current)||void 0===l?void 0:l.y)&&void 0!==o?o:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():P.contains(n.target)||j(!1),document.removeEventListener("pointermove",t),G.current=null};return null!==G.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}},[P,j,G]),(0,o.useEffect)(()=>{let e=()=>j(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[j]);let[J,Q]=ed(e=>{let t=L().filter(e=>!e.disabled),n=t.find(e=>e.ref.current===document.activeElement),r=ec(t,e,n);r&&setTimeout(()=>r.ref.current.focus())}),ee=(0,o.useCallback)((e,t,n)=>{let r=!z.current&&!n,o=void 0!==R.value&&R.value===t;(o||r)&&(W(e),r&&(z.current=!0))},[R.value]),et=(0,o.useCallback)(()=>null==P?void 0:P.focus(),[P]),en=(0,o.useCallback)((e,t,n)=>{let r=!z.current&&!n,o=void 0!==R.value&&R.value===t;(o||r)&&H(e)},[R.value]),er="popper"===l?X:q,eo=er===X?{side:s,sideOffset:v,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:y,collisionPadding:E,sticky:S,hideWhenDetached:x,avoidCollisions:C}:{};return(0,o.createElement)(U,{scope:n,content:P,viewport:I,onViewportChange:V,itemRefCallback:ee,selectedItem:K,onItemLeave:et,itemTextRefCallback:en,focusSelectedItem:$,selectedItemText:O,position:l,isPositioned:B,searchRef:J},(0,o.createElement)(D.Z,{as:b.g7,allowPinchZoom:!0},(0,o.createElement)(m.M,{asChild:!0,trapped:R.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,i.M)(a,e=>{var t;null===(t=R.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:c,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>R.onOpenChange(!1)},(0,o.createElement)(er,(0,r.Z)({role:"listbox",id:R.contentId,"data-state":R.open?"open":"closed",dir:R.dir,onContextMenu:e=>e.preventDefault()},_,eo,{onPlaced:()=>N(!0),ref:A,style:{display:"flex",flexDirection:"column",outline:"none",..._.style},onKeyDown:(0,i.M)(_.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||Q(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=L().filter(e=>!e.disabled),n=t.map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(n=n.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let t=e.target,r=n.indexOf(t);n=n.slice(r+1)}setTimeout(()=>Y(n)),e.preventDefault()}})}))))))}),q=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,onPlaced:l,...i}=e,u=Z(F,n),c=Y(F,n),[s,f]=(0,o.useState)(null),[p,m]=(0,o.useState)(null),v=(0,d.e)(t,e=>m(e)),h=T(n),g=(0,o.useRef)(!1),b=(0,o.useRef)(!0),{viewport:y,selectedItem:E,selectedItemText:x,focusSelectedItem:C}=c,M=(0,o.useCallback)(()=>{if(u.trigger&&u.valueNode&&s&&p&&y&&E&&x){let e=u.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),n=u.valueNode.getBoundingClientRect(),r=x.getBoundingClientRect();if("rtl"!==u.dir){let o=r.left-t.left,l=n.left-o,i=e.left-l,u=e.width+i,d=Math.max(u,t.width),c=window.innerWidth-10,f=(0,a.u)(l,[10,c-d]);s.style.minWidth=u+"px",s.style.left=f+"px"}else{let o=t.right-r.right,l=window.innerWidth-n.right-o,i=window.innerWidth-e.right-l,u=e.width+i,d=Math.max(u,t.width),c=window.innerWidth-10,f=(0,a.u)(l,[10,c-d]);s.style.minWidth=u+"px",s.style.right=f+"px"}let o=h(),i=window.innerHeight-20,d=y.scrollHeight,c=window.getComputedStyle(p),f=parseInt(c.borderTopWidth,10),m=parseInt(c.paddingTop,10),v=parseInt(c.borderBottomWidth,10),w=parseInt(c.paddingBottom,10),b=f+m+d+w+v,S=Math.min(5*E.offsetHeight,b),C=window.getComputedStyle(y),M=parseInt(C.paddingTop,10),D=parseInt(C.paddingBottom,10),_=e.top+e.height/2-10,R=E.offsetHeight/2,P=E.offsetTop+R,k=f+m+P;if(k<=_){let e=E===o[o.length-1].ref.current;s.style.bottom="0px";let t=p.clientHeight-y.offsetTop-y.offsetHeight;s.style.height=k+Math.max(i-_,R+(e?D:0)+t+v)+"px"}else{let e=E===o[0].ref.current;s.style.top="0px";let t=Math.max(_,f+y.offsetTop+(e?M:0)+R);s.style.height=t+(b-k)+"px",y.scrollTop=k-_+y.offsetTop}s.style.margin="10px 0",s.style.minHeight=S+"px",s.style.maxHeight=i+"px",null==l||l(),requestAnimationFrame(()=>g.current=!0)}},[h,u.trigger,u.valueNode,s,p,y,E,x,u.dir,l]);(0,S.b)(()=>M(),[M]);let[D,_]=(0,o.useState)();(0,S.b)(()=>{p&&_(window.getComputedStyle(p).zIndex)},[p]);let R=(0,o.useCallback)(e=>{e&&!0===b.current&&(M(),null==C||C(),b.current=!1)},[M,C]);return(0,o.createElement)(j,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:g,onScrollButtonChange:R},(0,o.createElement)("div",{ref:f,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:D}},(0,o.createElement)(w.WV.div,(0,r.Z)({},i,{ref:v,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}}))))}),X=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,align:l="start",collisionPadding:a=10,...i}=e,u=K(n);return(0,o.createElement)(h.VY,(0,r.Z)({},u,i,{ref:t,align:l,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[j,G]=V(F,{}),J="SelectViewport",Q=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...l}=e,a=Y(J,n),u=G(J,n),c=(0,d.e)(t,a.onViewportChange),s=(0,o.useRef)(0);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(k.Slot,{scope:n},(0,o.createElement)(w.WV.div,(0,r.Z)({"data-radix-select-viewport":"",role:"presentation"},l,{ref:c,style:{position:"relative",flex:1,overflow:"auto",...l.style},onScroll:(0,i.M)(l.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=u;if(null!=r&&r.current&&n){let e=Math.abs(s.current-t.scrollTop);if(e>0){let r=window.innerHeight-20,o=parseFloat(n.style.minHeight),l=parseFloat(n.style.height),a=Math.max(o,l);if(a<r){let o=a+e,l=Math.min(r,o),i=o-l;n.style.height=l+"px","0px"===n.style.bottom&&(t.scrollTop=i>0?i:0,n.style.justifyContent="flex-end")}}}s.current=t.scrollTop})}))))}),[ee,et]=V("SelectGroup"),en="SelectItem",[er,eo]=V(en),el=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,value:l,disabled:a=!1,textValue:u,...c}=e,s=Z(en,n),f=Y(en,n),p=s.value===l,[m,h]=(0,o.useState)(null!=u?u:""),[g,b]=(0,o.useState)(!1),y=(0,d.e)(t,e=>{var t;return null===(t=f.itemRefCallback)||void 0===t?void 0:t.call(f,e,l,a)}),E=(0,v.M)(),S=()=>{a||(s.onValueChange(l),s.onOpenChange(!1))};return(0,o.createElement)(er,{scope:n,value:l,disabled:a,textId:E,isSelected:p,onItemTextChange:(0,o.useCallback)(e=>{h(t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()})},[])},(0,o.createElement)(k.ItemSlot,{scope:n,value:l,disabled:a,textValue:m},(0,o.createElement)(w.WV.div,(0,r.Z)({role:"option","aria-labelledby":E,"data-highlighted":g?"":void 0,"aria-selected":p&&g,"data-state":p?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1},c,{ref:y,onFocus:(0,i.M)(c.onFocus,()=>b(!0)),onBlur:(0,i.M)(c.onBlur,()=>b(!1)),onPointerUp:(0,i.M)(c.onPointerUp,S),onPointerMove:(0,i.M)(c.onPointerMove,e=>{if(a){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,i.M)(c.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}}),onKeyDown:(0,i.M)(c.onKeyDown,e=>{var t;let n=(null===(t=f.searchRef)||void 0===t?void 0:t.current)!=="";n&&" "===e.key||(R.includes(e.key)&&S()," "===e.key&&e.preventDefault())})}))))}),ea="SelectItemText",ei=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,className:a,style:i,...u}=e,c=Z(ea,n),s=Y(ea,n),f=eo(ea,n),p=H(ea,n),[m,v]=(0,o.useState)(null),h=(0,d.e)(t,e=>v(e),f.onItemTextChange,e=>{var t;return null===(t=s.itemTextRefCallback)||void 0===t?void 0:t.call(s,e,f.value,f.disabled)}),g=null==m?void 0:m.textContent,b=(0,o.useMemo)(()=>(0,o.createElement)("option",{key:f.value,value:f.value,disabled:f.disabled},g),[f.disabled,f.value,g]),{onNativeOptionAdd:y,onNativeOptionRemove:E}=p;return(0,S.b)(()=>(y(b),()=>E(b)),[y,E,b]),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(w.WV.span,(0,r.Z)({id:f.textId},u,{ref:h})),f.isSelected&&c.valueNode&&!c.valueNodeHasChildren?(0,l.createPortal)(u.children,c.valueNode):null)}),eu=((e,t)=>{let{__scopeSelect:n,onAutoScroll:l,...a}=e,u=Y("SelectScrollButton",n),d=(0,o.useRef)(null),c=T(n),s=(0,o.useCallback)(()=>{null!==d.current&&(window.clearInterval(d.current),d.current=null)},[]);return(0,o.useEffect)(()=>()=>s(),[s]),(0,S.b)(()=>{var e;let t=c().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[c]),(0,o.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},a,{ref:t,style:{flexShrink:0,...a.style},onPointerDown:(0,i.M)(a.onPointerDown,()=>{null===d.current&&(d.current=window.setInterval(l,50))}),onPointerMove:(0,i.M)(a.onPointerMove,()=>{var e;null===(e=u.onItemLeave)||void 0===e||e.call(u),null===d.current&&(d.current=window.setInterval(l,50))}),onPointerLeave:(0,i.M)(a.onPointerLeave,()=>{s()})}))},(0,o.forwardRef)((e,t)=>{let{value:n,...l}=e,a=(0,o.useRef)(null),i=(0,d.e)(t,a),u=(0,x.D)(n);return(0,o.useEffect)(()=>{let e=a.current,t=window.HTMLSelectElement.prototype,r=Object.getOwnPropertyDescriptor(t,"value"),o=r.set;if(u!==n&&o){let t=new Event("change",{bubbles:!0});o.call(e,n),e.dispatchEvent(t)}},[u,n]),(0,o.createElement)(C.T,{asChild:!0},(0,o.createElement)("select",(0,r.Z)({},l,{ref:i,defaultValue:n})))}));function ed(e){let t=(0,y.W)(e),n=(0,o.useRef)(""),r=(0,o.useRef)(0),l=(0,o.useCallback)(e=>{let o=n.current+e;t(o),function e(t){n.current=t,window.clearTimeout(r.current),""!==t&&(r.current=window.setTimeout(()=>e(""),1e3))}(o)},[t]),a=(0,o.useCallback)(()=>{n.current="",window.clearTimeout(r.current)},[]);return(0,o.useEffect)(()=>()=>window.clearTimeout(r.current),[]),[n,l,a]}function ec(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0]),l=o?t[0]:t,a=n?e.indexOf(n):-1,i=(r=Math.max(a,0),e.map((t,n)=>e[(r+n)%e.length])),u=1===l.length;u&&(i=i.filter(e=>e!==n));let d=i.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return d!==n?d:void 0}eu.displayName="BubbleSelect";let es=e=>{let{__scopeSelect:t,children:n,open:r,defaultOpen:l,onOpenChange:a,value:i,defaultValue:u,onValueChange:d,dir:c,name:f,autoComplete:p,disabled:m,required:g}=e,w=K(t),[b,y]=(0,o.useState)(null),[S,x]=(0,o.useState)(null),[C,M]=(0,o.useState)(!1),D=(0,s.gm)(c),[_=!1,R]=(0,E.T)({prop:r,defaultProp:l,onChange:a}),[P,T]=(0,E.T)({prop:i,defaultProp:u,onChange:d}),I=(0,o.useRef)(null),V=!b||!!b.closest("form"),[A,Z]=(0,o.useState)(new Set),H=Array.from(A).map(e=>e.props.value).join(";");return(0,o.createElement)(h.fC,w,(0,o.createElement)(W,{required:g,scope:t,trigger:b,onTriggerChange:y,valueNode:S,onValueNodeChange:x,valueNodeHasChildren:C,onValueNodeHasChildrenChange:M,contentId:(0,v.M)(),value:P,onValueChange:T,open:_,onOpenChange:R,dir:D,triggerPointerDownPosRef:I,disabled:m},(0,o.createElement)(k.Provider,{scope:t},(0,o.createElement)(O,{scope:e.__scopeSelect,onNativeOptionAdd:(0,o.useCallback)(e=>{Z(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,o.useCallback)(e=>{Z(t=>{let n=new Set(t);return n.delete(e),n})},[])},n)),V?(0,o.createElement)(eu,{key:H,"aria-hidden":!0,required:g,tabIndex:-1,name:f,autoComplete:p,value:P,onChange:e=>T(e.target.value),disabled:m},void 0===P?(0,o.createElement)("option",{value:""}):null,Array.from(A)):null))},ef=L,ep=B,em=N,ev=e=>(0,o.createElement)(g.h,(0,r.Z)({asChild:!0},e)),eh=z,eg=Q,ew=el,eb=ei},90995:function(e,t,n){n.d(t,{bU:function(){return z},e6:function(){return F},fC:function(){return B},fQ:function(){return N}});var r=n(40431),o=n(86006),l=n(28378),a=n(1928),i=n(81084),u=n(38899),d=n(85740),c=n(84924),s=n(93414),f=n(59952),p=n(76899),m=n(79455);let v=["PageUp","PageDown"],h=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],g={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},w="Slider",[b,y,E]=(0,m.B)(w),[S,x]=(0,u.b)(w,[E]),[C,M]=S(w),D=(0,o.forwardRef)((e,t)=>{let{name:n,min:u=0,max:c=100,step:s=1,orientation:f="horizontal",disabled:p=!1,minStepsBetweenThumbs:m=0,defaultValue:g=[u],value:w,onValueChange:y=()=>{},onValueCommit:E=()=>{},inverted:S=!1,...x}=e,[M,D]=(0,o.useState)(null),_=(0,i.e)(t,e=>D(e)),R=(0,o.useRef)(new Set),T=(0,o.useRef)(0),I=!M||!!M.closest("form"),V="horizontal"===f?P:k,[A=[],K]=(0,d.T)({prop:w,defaultProp:g,onChange:e=>{var t;null===(t=[...R.current][T.current])||void 0===t||t.focus(),y(e)}}),W=(0,o.useRef)(A);function Z(e,t,{commit:n}={commit:!1}){let r=(String(s).split(".")[1]||"").length,o=function(e,t){let n=Math.pow(10,t);return Math.round(e*n)/n}(Math.round((e-u)/s)*s+u,r),a=(0,l.u)(o,[u,c]);K((e=[])=>{let r=function(e=[],t,n){let r=[...e];return r[n]=t,r.sort((e,t)=>e-t)}(e,a,t);if(!function(e,t){if(t>0){let n=e.slice(0,-1).map((t,n)=>e[n+1]-t);return Math.min(...n)>=t}return!0}(r,m*s))return e;{T.current=r.indexOf(a);let t=String(r)!==String(e);return t&&n&&E(r),t?r:e}})}return(0,o.createElement)(C,{scope:e.__scopeSlider,disabled:p,min:u,max:c,valueIndexToChangeRef:T,thumbs:R.current,values:A,orientation:f},(0,o.createElement)(b.Provider,{scope:e.__scopeSlider},(0,o.createElement)(b.Slot,{scope:e.__scopeSlider},(0,o.createElement)(V,(0,r.Z)({"aria-disabled":p,"data-disabled":p?"":void 0},x,{ref:_,onPointerDown:(0,a.M)(x.onPointerDown,()=>{p||(W.current=A)}),min:u,max:c,inverted:S,onSlideStart:p?void 0:function(e){let t=function(e,t){if(1===e.length)return 0;let n=e.map(e=>Math.abs(e-t)),r=Math.min(...n);return n.indexOf(r)}(A,e);Z(e,t)},onSlideMove:p?void 0:function(e){Z(e,T.current)},onSlideEnd:p?void 0:function(){let e=W.current[T.current],t=A[T.current];t!==e&&E(A)},onHomeKeyDown:()=>!p&&Z(u,0,{commit:!0}),onEndKeyDown:()=>!p&&Z(c,A.length-1,{commit:!0}),onStepKeyDown:({event:e,direction:t})=>{if(!p){let n=v.includes(e.key),r=n||e.shiftKey&&h.includes(e.key),o=T.current,l=A[o],a=s*(r?10:1)*t;Z(l+a,o,{commit:!0})}}})))),I&&A.map((e,t)=>(0,o.createElement)(O,{key:t,name:n?n+(A.length>1?"[]":""):void 0,value:e})))}),[_,R]=S(w,{startEdge:"left",endEdge:"right",size:"width",direction:1}),P=(0,o.forwardRef)((e,t)=>{let{min:n,max:l,dir:a,inverted:u,onSlideStart:d,onSlideMove:s,onSlideEnd:f,onStepKeyDown:p,...m}=e,[v,h]=(0,o.useState)(null),w=(0,i.e)(t,e=>h(e)),b=(0,o.useRef)(),y=(0,c.gm)(a),E="ltr"===y,S=E&&!u||!E&&u;function x(e){let t=b.current||v.getBoundingClientRect(),r=[0,t.width],o=L(r,S?[n,l]:[l,n]);return b.current=t,o(e-t.left)}return(0,o.createElement)(_,{scope:e.__scopeSlider,startEdge:S?"left":"right",endEdge:S?"right":"left",direction:S?1:-1,size:"width"},(0,o.createElement)(T,(0,r.Z)({dir:y,"data-orientation":"horizontal"},m,{ref:w,style:{...m.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{let t=x(e.clientX);null==d||d(t)},onSlideMove:e=>{let t=x(e.clientX);null==s||s(t)},onSlideEnd:()=>{b.current=void 0,null==f||f()},onStepKeyDown:e=>{let t=g[S?"from-left":"from-right"].includes(e.key);null==p||p({event:e,direction:t?-1:1})}})))}),k=(0,o.forwardRef)((e,t)=>{let{min:n,max:l,inverted:a,onSlideStart:u,onSlideMove:d,onSlideEnd:c,onStepKeyDown:s,...f}=e,p=(0,o.useRef)(null),m=(0,i.e)(t,p),v=(0,o.useRef)(),h=!a;function w(e){let t=v.current||p.current.getBoundingClientRect(),r=[0,t.height],o=L(r,h?[l,n]:[n,l]);return v.current=t,o(e-t.top)}return(0,o.createElement)(_,{scope:e.__scopeSlider,startEdge:h?"bottom":"top",endEdge:h?"top":"bottom",size:"height",direction:h?1:-1},(0,o.createElement)(T,(0,r.Z)({"data-orientation":"vertical"},f,{ref:m,style:{...f.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{let t=w(e.clientY);null==u||u(t)},onSlideMove:e=>{let t=w(e.clientY);null==d||d(t)},onSlideEnd:()=>{v.current=void 0,null==c||c()},onStepKeyDown:e=>{let t=g[h?"from-bottom":"from-top"].includes(e.key);null==s||s({event:e,direction:t?-1:1})}})))}),T=(0,o.forwardRef)((e,t)=>{let{__scopeSlider:n,onSlideStart:l,onSlideMove:i,onSlideEnd:u,onHomeKeyDown:d,onEndKeyDown:c,onStepKeyDown:s,...f}=e,m=M(w,n);return(0,o.createElement)(p.WV.span,(0,r.Z)({},f,{ref:t,onKeyDown:(0,a.M)(e.onKeyDown,e=>{"Home"===e.key?(d(e),e.preventDefault()):"End"===e.key?(c(e),e.preventDefault()):v.concat(h).includes(e.key)&&(s(e),e.preventDefault())}),onPointerDown:(0,a.M)(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),m.thumbs.has(t)?t.focus():l(e)}),onPointerMove:(0,a.M)(e.onPointerMove,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&i(e)}),onPointerUp:(0,a.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),u(e))})}))}),I=(0,o.forwardRef)((e,t)=>{let{__scopeSlider:n,...l}=e,a=M("SliderTrack",n);return(0,o.createElement)(p.WV.span,(0,r.Z)({"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation},l,{ref:t}))}),V="SliderRange",A=(0,o.forwardRef)((e,t)=>{let{__scopeSlider:n,...l}=e,a=M(V,n),u=R(V,n),d=(0,o.useRef)(null),c=(0,i.e)(t,d),s=a.values.length,f=a.values.map(e=>H(e,a.min,a.max));return(0,o.createElement)(p.WV.span,(0,r.Z)({"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0},l,{ref:c,style:{...e.style,[u.startEdge]:(s>1?Math.min(...f):0)+"%",[u.endEdge]:100-Math.max(...f)+"%"}}))}),K="SliderThumb",W=(0,o.forwardRef)((e,t)=>{let n=y(e.__scopeSlider),[l,a]=(0,o.useState)(null),u=(0,i.e)(t,e=>a(e)),d=(0,o.useMemo)(()=>l?n().findIndex(e=>e.ref.current===l):-1,[n,l]);return(0,o.createElement)(Z,(0,r.Z)({},e,{ref:u,index:d}))}),Z=(0,o.forwardRef)((e,t)=>{var n;let{__scopeSlider:l,index:u,...d}=e,c=M(K,l),s=R(K,l),[m,v]=(0,o.useState)(null),h=(0,i.e)(t,e=>v(e)),g=(0,f.t)(m),w=c.values[u],y=void 0===w?0:H(w,c.min,c.max),E=(n=c.values.length)>2?`Value ${u+1} of ${n}`:2===n?["Minimum","Maximum"][u]:void 0,S=null==g?void 0:g[s.size],x=S?function(e,t,n){let r=e/2,o=L([0,50],[0,r]);return(r-o(t)*n)*n}(S,y,s.direction):0;return(0,o.useEffect)(()=>{if(m)return c.thumbs.add(m),()=>{c.thumbs.delete(m)}},[m,c.thumbs]),(0,o.createElement)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[s.startEdge]:`calc(${y}% + ${x}px)`}},(0,o.createElement)(b.ItemSlot,{scope:e.__scopeSlider},(0,o.createElement)(p.WV.span,(0,r.Z)({role:"slider","aria-label":e["aria-label"]||E,"aria-valuemin":c.min,"aria-valuenow":w,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0},d,{ref:h,style:void 0===w?{display:"none"}:e.style,onFocus:(0,a.M)(e.onFocus,()=>{c.valueIndexToChangeRef.current=u})}))))}),O=e=>{let{value:t,...n}=e,l=(0,o.useRef)(null),a=(0,s.D)(t);return(0,o.useEffect)(()=>{let e=l.current,n=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(n,"value"),o=r.set;if(a!==t&&o){let n=new Event("input",{bubbles:!0});o.call(e,t),e.dispatchEvent(n)}},[a,t]),(0,o.createElement)("input",(0,r.Z)({style:{display:"none"}},n,{ref:l,defaultValue:t}))};function H(e,t,n){return(0,l.u)(100/(n-t)*(e-t),[0,100])}function L(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}let B=D,N=I,F=A,z=W},12120:function(e,t,n){n.d(t,{VY:function(){return R},aV:function(){return D},fC:function(){return M},xz:function(){return _}});var r=n(40431),o=n(86006),l=n(1928),a=n(38899),i=n(18294),u=n(51868),d=n(76899),c=n(84924),s=n(85740),f=n(70757);let p="Tabs",[m,v]=(0,a.b)(p,[i.Pc]),h=(0,i.Pc)(),[g,w]=m(p),b=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:l,onValueChange:a,defaultValue:i,orientation:u="horizontal",dir:p,activationMode:m="automatic",...v}=e,h=(0,c.gm)(p),[w,b]=(0,s.T)({prop:l,onChange:a,defaultProp:i});return(0,o.createElement)(g,{scope:n,baseId:(0,f.M)(),value:w,onValueChange:b,orientation:u,dir:h,activationMode:m},(0,o.createElement)(d.WV.div,(0,r.Z)({dir:h,"data-orientation":u},v,{ref:t})))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:l=!0,...a}=e,u=w("TabsList",n),c=h(n);return(0,o.createElement)(i.fC,(0,r.Z)({asChild:!0},c,{orientation:u.orientation,dir:u.dir,loop:l}),(0,o.createElement)(d.WV.div,(0,r.Z)({role:"tablist","aria-orientation":u.orientation},a,{ref:t})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,disabled:u=!1,...c}=e,s=w("TabsTrigger",n),f=h(n),p=x(s.baseId,a),m=C(s.baseId,a),v=a===s.value;return(0,o.createElement)(i.ck,(0,r.Z)({asChild:!0},f,{focusable:!u,active:v}),(0,o.createElement)(d.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":v,"aria-controls":m,"data-state":v?"active":"inactive","data-disabled":u?"":void 0,disabled:u,id:p},c,{ref:t,onMouseDown:(0,l.M)(e.onMouseDown,e=>{u||0!==e.button||!1!==e.ctrlKey?e.preventDefault():s.onValueChange(a)}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&s.onValueChange(a)}),onFocus:(0,l.M)(e.onFocus,()=>{let e="manual"!==s.activationMode;v||u||!e||s.onValueChange(a)})})))}),S=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:l,forceMount:a,children:i,...c}=e,s=w("TabsContent",n),f=x(s.baseId,l),p=C(s.baseId,l),m=l===s.value,v=(0,o.useRef)(m);return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.createElement)(u.z,{present:a||m},({present:n})=>(0,o.createElement)(d.WV.div,(0,r.Z)({"data-state":m?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":f,hidden:!n,id:p,tabIndex:0},c,{ref:t,style:{...e.style,animationDuration:v.current?"0s":void 0}}),n&&i))});function x(e,t){return`${e}-trigger-${t}`}function C(e,t){return`${e}-content-${t}`}let M=b,D=y,_=E,R=S},93414:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(86006);function o(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}}]);