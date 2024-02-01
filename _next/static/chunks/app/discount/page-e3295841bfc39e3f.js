(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{44935:function(e,t,r){"use strict";function memoize(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{Z:function(){return memoize}})},66584:function(e,t,r){"use strict";var s=r(9176),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function getStatics(e){return s.isMemo(e)?o:l[e.$$typeof]||n}l[s.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[s.Memo]=o;var i=Object.defineProperty,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function hoistNonReactStatics(e,t,r){if("string"!=typeof t){if(m){var s=f(t);s&&s!==m&&hoistNonReactStatics(e,s,r)}var n=c(t);u&&(n=n.concat(u(t)));for(var o=getStatics(e),l=getStatics(t),p=0;p<n.length;++p){var x=n[p];if(!a[x]&&!(r&&r[x])&&!(l&&l[x])&&!(o&&o[x])){var h=d(t,x);try{i(e,x,h)}catch(e){}}}}return e}},33490:function(e,t,r){Promise.resolve().then(r.bind(r,23159))},23159:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return DiscountPage}});var s=r(57437),n=r(76036),a=r(80547),o=r(1150),l=r(90228),i=r(91056),c=r(72009),u=r(8580),d=r(12831),f=r(81628),m=r(15898),p=r(20373),x=r(16691),h=r.n(x),g=r(2265),v=r(41697),b=r(35769),y=r(21693);function DiscountPage(){let{vaultsMode:e,vaultsState:t,balances:r,prices:x}=(0,g.useContext)(m.FetcherContext),j=c.iK[(0,i.BV)()].find(e=>"ETH"==e.assetTokenSymbol),w=t[j.assetTokenSymbol],S=e[j.assetTokenSymbol],N=(0,d.D2)({abi:o.Z,address:j.vault,functionName:"getParamValue",args:[(0,y.$G)("CircuitBreakPeriod",{size:32})]}),k=(0,f.ok)(N,"data"),T=(0,f.ok)(w,"AARBelowCircuitBreakerLineTime"),R=S>=2&&k>0n&&w&&((0,f.ok)(w,"aar")>=(0,f.ok)(w,"AARC")||BigInt(new Date().getTime()/1e3)-T>=k),$=R?"Discount available":"No discount",B=!R,P=(0,f.ok)(x,j.xTokenSymbol),C=[{value:"ETHx",label:"ETHx"},{value:"USDB",label:"USDB"}],D=(0,g.useMemo)(()=>(0,f.ok)(null==r?void 0:r.find(e=>"USB"===e.symbol),"balance"),[r]),[M,E]=(0,g.useMemo)(()=>{if(!w)return["50%","50%"];let e=(0,f.pF)(w.AARU,w.AARDecimals),t=(0,f.pF)(w.aar,w.AARDecimals),r=(0,f.pF)(w.AARS,w.AARDecimals),s=(0,f.pF)(w.AART,w.AARDecimals),n=e/2,toPercent=t=>(100*Math.max(0,Math.min(1,(t-n)/(e-n)))).toFixed(2)+"%",a=toPercent(t);return B?[a,toPercent(r)]:[a,toPercent(s)]},[null==w?void 0:w.AARU,null==w?void 0:w.aar,null==w?void 0:w.AARS,null==w?void 0:w.AART,B]),[F,O]=(0,g.useState)(""),[L,U]=(0,g.useState)("ETHx"),{data:V}=(0,d.D2)({vc:j,watch:!0,abi:l.Z,address:c.jX[(0,i.BV)()],functionName:"calcUsbToLeveragedTokens",args:[j.vault,(0,f.su)(F)]}),{data:W}=(0,d.D2)({vc:j,watch:!0,abi:l.Z,address:c.jX[(0,i.BV)()],functionName:"calcUsbToLeveragedTokens",args:[j.vault,(0,f.su)("1")]}),_=(0,p.dq)((0,f.ok)(V,[1])),Z=(0,f.ok)(W,[1]),q=(0,g.useMemo)(()=>0n==Z?0n:(0,f.su)("1")*u.Pq/Z,[Z]),H=(0,g.useMemo)(()=>{let e=x[j.xTokenSymbol];return!e||0n==e||0n==q||q>=e?"0.00%":(0,f.Jh)((e-q)*u.Pq/e,18,2)},[x[j.xTokenSymbol],q]),I=(0,s.jsxs)("div",{style:{position:"relative",left:M,transform:"translate(-50%,0)"},className:"flex flex-col items-center w-fit rounded-sm",children:[(0,s.jsxs)("div",{className:"text-xs flex flex-col justify-center items-center p-1.5 px-4",children:[(0,s.jsx)("span",{className:"text-neutral-400",children:"Current AAR"}),(0,s.jsx)("span",{className:"font-medium",children:(0,f.Rr)(null==w?void 0:w.aar,null==w?void 0:w.AARDecimals)})]}),(0,s.jsx)("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z",fill:"#262626"})})]}),G=(0,s.jsxs)("div",{style:{position:"relative",left:E,transform:"translate(-50%,0)"},className:"flex flex-col items-center w-fit rounded-sm",children:[(0,s.jsx)("svg",{className:"rotate-180",width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z",fill:B?"#E83B3B":"#54E83B"})}),(0,s.jsxs)("div",{className:"text-xs flex flex-col justify-center items-center p-1.5 px-4",children:[(0,s.jsxs)("span",{className:"font-medium",children:["AAR=",B?(0,f.Rr)(null==w?void 0:w.AARS,null==w?void 0:w.AARDecimals):(0,f.Rr)(null==w?void 0:w.AART,null==w?void 0:w.AARDecimals)]}),(0,s.jsx)("span",{className:"text-neutral-400",children:B?"Trigger discount":"Discount end"})]})]}),ValutArea=e=>{let{discountEnable:t,imageSrc:r,token:n}=e;return(0,s.jsxs)("div",{className:"bg-white border border-neutral-200 rounded-3xl flex p-4 w-full mb-[30px]",children:[(0,s.jsxs)("div",{className:"w-[180px] flex items-center",children:[(0,s.jsx)(h(),{src:r,width:54,height:54,className:"mr-[10px]",alt:""}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h3",{className:"text-xl font-bold",children:[n," Vault"]}),(0,s.jsx)("div",{className:"text-sm flex items-center gap-2",children:(0,s.jsxs)("div",{className:"flex items-center text-neutral-700 gap-1",children:[(0,s.jsx)("div",{className:(0,b.m)("w-3 h-3 rounded-full",t?"bg-violet-500":"bg-green-500")}),$]})})]})]}),(0,s.jsxs)("div",{className:"w-[calc(100%-170px)] p-4 rounded-lg flex flex-col gap-2",children:[I,(0,s.jsx)("div",{className:"h-px bg-[#64748B] after:content-['AAR'] after:inline-block after:text-right after:w-full after:text-xs after:text-[#64748B]"}),G]})]})};return(0,s.jsxs)("div",{className:"mx-auto max-w-screen-lg p-4",children:[(0,s.jsxs)("div",{className:"bg-indigo-50 p-6 lg:p-12 rounded-3xl relative",children:[(0,s.jsx)("h3",{className:"text-indigo-500 font-medium text-xl",children:"Discount Offer"}),(0,s.jsx)("div",{className:"text-indigo-900 mt-4 lg:w-3/4",children:"Due to fluctuations in the prices of underlying assets, when the AAR decreases, the protocol will offer users the opportunity to purchase xToken at a discount with $USB. This means that you can engage in arbitrage."}),(0,s.jsx)(h(),{src:"/discount.png",width:400,height:200,className:"lg:absolute lg:-right-8 lg:top-1/2 lg:-translate-y-1/2 mt-8",alt:""})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8 p-6",children:[(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)(ValutArea,{discountEnable:R,imageSrc:"./ETH.svg",token:j.assetTokenSymbol}),(0,s.jsx)(ValutArea,{discountEnable:R,imageSrc:"./USDB.svg",token:"USDB"})]}),(0,s.jsxs)("div",{className:"w-full bg-white border border-neutral-200 p-[30px] pt-[60px] rounded-3xl mb-[30px]",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2 w-full mx-auto",children:[(0,s.jsx)(a.W,{asset:"USB",amount:F,setAmount:O,balance:D,exchange:(0,p.dq)((0,f.su)(F)*(0,f.ok)(x,"USB",u.Pq)/u.Pq)}),(0,s.jsxs)("div",{className:"flex items-center justify-center w-full",children:[(0,s.jsx)("div",{className:"flex-1"}),(0,s.jsx)(v.gPZ,{className:"w-6 h-6 text-neutral-500  border border-neutral-200 rounded-full my-[10px]"}),(0,s.jsx)("div",{className:"flex-1"})]}),(0,s.jsxs)("div",{className:"w-full flex-1 text-right text-neutral-700 text-sm whitespace-nowrap",children:["Disount Rate: ",B?"N/A":H]}),(0,s.jsx)(a.W,{asset:j.xTokenSymbol,amount:_,exchange:(0,p.dq)(P*(0,f.ok)(V,[1])/u.Pq),readonly:!0,hasInput:!0,options:C,defaultValue:C[0],onChange:e=>{console.log(e.value),U(e.value)}})]}),(0,s.jsx)(n.v,{tx:"Swap",disabled:(0,f.su)(F)>D||!R,onTxSuccess:()=>{O("")},config:{vc:j,abi:o.Z,address:j.vault,functionName:"usbToLeveragedTokens",args:[(0,f.su)(F)],enabled:R},approves:{[c.O1[(0,i.BV)()]]:(0,f.su)(F)},spender:j.vault})]})]})]})}},76036:function(e,t,r){"use strict";r.d(t,{v:function(){return ApproveAndTx}});var s=r(57437),n=r(72009),a=r(81628),o=r(2265),l=r(71424),i=r(56926),c=r(51143);let u={},useApproves=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*BigInt(1e18),{address:s}=(0,i.mA)(),d=(0,i.t_)(),{data:f}=(0,i.py)(),[m,p]=(0,o.useState)(!1),x=(0,o.useMemo)(()=>Object.keys(e).filter(e=>e!==n.K8),[e]),[h,g]=(0,o.useState)(t&&u[t]||{}),updateAllownce=(e,r)=>{t&&(u[t]={...u[t]||{},[e]:r},g(t=>({...t,[e]:r})))},{data:v}=(0,i.Ov)();(0,o.useEffect)(()=>{s&&t&&x.forEach(e=>{d.readContract({abi:c.em,address:e,functionName:"allowance",args:[s,t]}).then(t=>updateAllownce(e,t)).catch(console.error)})},[x,s,v]);let[b,y]=(0,o.useState)(!1),j=(0,o.useMemo)(()=>x.filter(t=>(0,a.ok)(e,t)>0n&&(0,a.ok)(e,t)>(0,a.ok)(h,t)),[e,x,h]),approve=async()=>{if(0!=j.length&&t)try{y(!0),p(!1);for(let s=0;s<j.length;s++){let n=j[s],a=!1===r?e[n]:r,o=await (null==f?void 0:f.writeContract({abi:c.em,address:n,functionName:"approve",args:[t,a]}));o&&await (null==d?void 0:d.waitForTransactionReceipt({hash:o})),updateAllownce(n,a)}l.toast.success("Approve success"),y(!1),p(!0)}catch(e){throw l.toast.error((0,a.az)(e)),y(!1),p(!1),e}};return{approve,loading:b,shouldApprove:j.length>0,isSuccess:m}};var d=r(43003),f=r(35769),m=r(72084);function ApproveAndTx(e){let{className:t,tx:r,approves:n,spender:a,requestAmount:l,config:i,toast:c=!0,disabled:u,onTxSuccess:p,onApproveSuccess:x}=e,{write:h,isLoading:g,isSuccess:v,rePrepare:b}=(0,d.R)(i,c),y=(0,o.useRef)();y.current=p,(0,o.useEffect)(()=>{y.current&&v&&y.current()},[v]);let j=u||!h||g||!1===i.enabled,{approve:w,shouldApprove:S,loading:N,isSuccess:k}=useApproves(n||{},a,l),T=(0,o.useRef)();return(T.current=x,(0,o.useEffect)(()=>{T.current&&k&&T.current(),k&&b&&b()},[k]),S)?(0,s.jsxs)("button",{className:(0,f.m)("btn-primary flex items-center justify-center gap-4",t),onClick:w,disabled:u||!w||N,children:[N&&(0,s.jsx)(m.$,{}),"Approve"]}):(0,s.jsxs)("button",{className:(0,f.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>h(),disabled:j,children:[g&&(0,s.jsx)(m.$,{}),r]})}},80547:function(e,t,r){"use strict";r.d(t,{W:function(){return AssetInput}});var s=r(57437),n=r(81628),a=r(20373),o=r(57042),l=r(16691),i=r.n(l),c=r(2265),u=r(16775),d=r(82288);function AssetInput(e){let{asset:t="ETH",balance:r,balanceTit:l="Balance",balanceDecimals:f=18,exchange:m,readonly:p,selected:x,onClick:h,amount:g,setAmount:v,price:b,disable:y,hasInput:j=!1,options:w,onChange:S=()=>{},defaultValue:N}=e,k=(0,c.useRef)(null),T=void 0!==r&&(0,n.su)("number"==typeof g?g+"":g||"")>("bigint"==typeof r?r:0n);return(0,s.jsxs)("div",{className:"relative w-full",onClick:()=>{h&&!y&&h()},children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,s.jsx)(i(),{width:24,height:24,src:"/".concat(t,".svg"),alt:""}),(0,s.jsxs)("div",{className:"text-base font-medium",children:[(0,s.jsxs)("div",{children:[j?(0,s.jsx)(d.ZP,{options:w,onChange:S,defaultValue:N,styles:{control:(e,t)=>({...e,border:"0px",minHeight:"24px",padding:"0px",background:"rgb(248 250 252)"})}}):(0,s.jsx)("div",{children:t}),b&&(0,s.jsx)("div",{className:"text-neutral-500 text-xs",children:b})]}),m&&(0,s.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",m]})]})]}),(0,s.jsx)("input",{value:g,onChange:e=>v(e.target.value),ref:k,type:"number",disabled:y,className:(0,o.Z)(p?"bg-slate-50":"bg-white",{"border-red-400 !border-2 focus:border-red-400":T,"border-slate-400  focus:border-blue-400 ":!T},"w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",step:.01,title:"",readOnly:p})]}),void 0!=r&&(0,s.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,s.jsxs)("div",{children:[l,": ",(0,a.Rp)(r,3,f),(0,s.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,u.b)(r,f);v(e),h&&!y&&h()},children:"Max"})]}),(0,s.jsx)("div",{className:"text-sm text-red-400",children:T?"Insufficient account balance":""})]})]})}},72084:function(e,t,r){"use strict";r.d(t,{$:function(){return Spinner}});var s=r(57437);let Spinner=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},43003:function(e,t,r){"use strict";r.d(t,{R:function(){return useWrapContractWrite}});var s=r(81628),n=r(2265),a=r(71424),o=r(56926),l=r(12831);function useWrapContractWrite(e){var t;let r=!(arguments.length>1)||void 0===arguments[1]||arguments[1],i=(0,l.RN)(e),c=(0,o.GG)(i.config),u=(0,o.BX)({hash:null===(t=c.data)||void 0===t?void 0:t.hash}),d=c.isLoading||u.isLoading,f=c.isSuccess&&u.isSuccess;return(0,n.useEffect)(()=>{r&&(c.error?a.toast.error((0,s.az)(c.error)):f&&a.toast.success("Transaction success"))},[c.error,f]),{...c,isLoading:d,isSuccess:f,rePrepare:i.refetch}}},20373:function(e,t,r){"use strict";r.d(t,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var s=r(16775),n=r(79352);let displayBalanceWithUnit=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let n=10**t;return(Math.floor(Number((0,s.b)(e,r))*n)/n).toLocaleString("en-US",{maximumFractionDigits:t})},displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let r=10**t;return(Math.floor(Number((0,n.d)(e))*r)/r).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},displayBalanceWithoutFormat=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let r=10**t;return String(Math.floor(Number((0,n.d)(e))*r)/r)}},8236:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,s=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,x=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,y=r?Symbol.for("react.scope"):60119;function z(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case s:switch(e=e.type){case u:case d:case a:case l:case o:case m:return e;default:switch(e=e&&e.$$typeof){case c:case f:case h:case x:case i:return e;default:return t}}case n:return t}}}function A(e){return z(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=i,t.Element=s,t.ForwardRef=f,t.Fragment=a,t.Lazy=h,t.Memo=x,t.Portal=n,t.Profiler=l,t.StrictMode=o,t.Suspense=m,t.isAsyncMode=function(e){return A(e)||z(e)===u},t.isConcurrentMode=A,t.isContextConsumer=function(e){return z(e)===c},t.isContextProvider=function(e){return z(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===s},t.isForwardRef=function(e){return z(e)===f},t.isFragment=function(e){return z(e)===a},t.isLazy=function(e){return z(e)===h},t.isMemo=function(e){return z(e)===x},t.isPortal=function(e){return z(e)===n},t.isProfiler=function(e){return z(e)===l},t.isStrictMode=function(e){return z(e)===o},t.isSuspense=function(e){return z(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===l||e===o||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===x||e.$$typeof===i||e.$$typeof===c||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===y||e.$$typeof===g)},t.typeOf=z},9176:function(e,t,r){"use strict";e.exports=r(8236)}},function(e){e.O(0,[33,986,693,510,565,725,619,356,322,971,472,744],function(){return e(e.s=33490)}),_N_E=e.O()}]);