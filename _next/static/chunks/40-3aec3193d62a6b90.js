"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{29040:function(e,t,n){n.d(t,{Dx:function(){return q},VY:function(){return j},aV:function(){return Y},fC:function(){return S},h_:function(){return X},x8:function(){return G},xz:function(){return U}});var o=n(40431),r=n(86006),l=n(1928),a=n(81084),u=n(38899),c=n(70757),i=n(85740),s=n(36841),f=n(63961),d=n(187),p=n(51868),g=n(76899),D=n(76808),_=n(94299),m=n(472),E=n(1095);let v="Dialog",[R,C]=(0,u.b)(v),[h,M]=R(v),O=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...u}=e,c=M("DialogTrigger",n),i=(0,a.e)(t,c.triggerRef);return(0,r.createElement)(g.WV.button,(0,o.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":N(c.open)},u,{ref:i,onClick:(0,l.M)(e.onClick,c.onOpenToggle)}))}),b="DialogPortal",[w,F]=R(b,{forceMount:void 0}),Z="DialogOverlay",y=(0,r.forwardRef)((e,t)=>{let n=F(Z,e.__scopeDialog),{forceMount:l=n.forceMount,...a}=e,u=M(Z,e.__scopeDialog);return u.modal?(0,r.createElement)(p.z,{present:l||u.open},(0,r.createElement)(k,(0,o.Z)({},a,{ref:t}))):null}),k=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=M(Z,n);return(0,r.createElement)(_.Z,{as:E.g7,allowPinchZoom:!0,shards:[a.contentRef]},(0,r.createElement)(g.WV.div,(0,o.Z)({"data-state":N(a.open)},l,{ref:t,style:{pointerEvents:"auto",...l.style}})))}),I="DialogContent",P=(0,r.forwardRef)((e,t)=>{let n=F(I,e.__scopeDialog),{forceMount:l=n.forceMount,...a}=e,u=M(I,e.__scopeDialog);return(0,r.createElement)(p.z,{present:l||u.open},u.modal?(0,r.createElement)(A,(0,o.Z)({},a,{ref:t})):(0,r.createElement)(T,(0,o.Z)({},a,{ref:t})))}),A=(0,r.forwardRef)((e,t)=>{let n=M(I,e.__scopeDialog),u=(0,r.useRef)(null),c=(0,a.e)(t,n.contentRef,u);return(0,r.useEffect)(()=>{let e=u.current;if(e)return(0,m.Ry)(e)},[]),(0,r.createElement)(V,(0,o.Z)({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,l.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,o=2===t.button||n;o&&e.preventDefault()}),onFocusOutside:(0,l.M)(e.onFocusOutside,e=>e.preventDefault())}))}),T=(0,r.forwardRef)((e,t)=>{let n=M(I,e.__scopeDialog),l=(0,r.useRef)(!1),a=(0,r.useRef)(!1);return(0,r.createElement)(V,(0,o.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,r;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(l.current||null===(r=n.triggerRef.current)||void 0===r||r.focus(),t.preventDefault()),l.current=!1,a.current=!1},onInteractOutside:t=>{var o,r;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(l.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let u=t.target,c=null===(r=n.triggerRef.current)||void 0===r?void 0:r.contains(u);c&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}}))}),V=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:l,onOpenAutoFocus:u,onCloseAutoFocus:c,...i}=e,d=M(I,n),p=(0,r.useRef)(null),g=(0,a.e)(t,p);return(0,D.EW)(),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(f.M,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:u,onUnmountAutoFocus:c},(0,r.createElement)(s.XB,(0,o.Z)({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":N(d.open)},i,{ref:g,onDismiss:()=>d.onOpenChange(!1)}))),!1)}),W="DialogTitle",x=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=M(W,n);return(0,r.createElement)(g.WV.h2,(0,o.Z)({id:a.titleId},l,{ref:t}))}),z=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,u=M("DialogClose",n);return(0,r.createElement)(g.WV.button,(0,o.Z)({type:"button"},a,{ref:t,onClick:(0,l.M)(e.onClick,()=>u.onOpenChange(!1))}))});function N(e){return e?"open":"closed"}let[B,K]=(0,u.k)("DialogTitleWarning",{contentName:I,titleName:W,docsSlug:"dialog"}),S=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:l,onOpenChange:a,modal:u=!0}=e,s=(0,r.useRef)(null),f=(0,r.useRef)(null),[d=!1,p]=(0,i.T)({prop:o,defaultProp:l,onChange:a});return(0,r.createElement)(h,{scope:t,triggerRef:s,contentRef:f,contentId:(0,c.M)(),titleId:(0,c.M)(),descriptionId:(0,c.M)(),open:d,onOpenChange:p,onOpenToggle:(0,r.useCallback)(()=>p(e=>!e),[p]),modal:u},n)},U=O,X=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:l}=e,a=M(b,t);return(0,r.createElement)(w,{scope:t,forceMount:n},r.Children.map(o,e=>(0,r.createElement)(p.z,{present:n||a.open},(0,r.createElement)(d.h,{asChild:!0,container:l},e))))},Y=y,j=P,q=x,G=z}}]);