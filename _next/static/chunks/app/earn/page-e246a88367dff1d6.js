(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{55139:function(e,t,s){"use strict";s.d(t,{r:function(){return a.Z}});var a=s(87456)},62166:function(e,t,s){Promise.resolve().then(s.bind(s,66790))},66790:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return EarnPage}});var a=s(57437),l=s(45428),n=s(91056),r=s(72009),i=s(8580),c=s(2265);let o={};var u=s(43003),d=s(81628),m=s(99057),x=s(20373),h=s(68114),f=s(87456),v=s(16691),b=s.n(v),p=s(56926),g=s(76036),k=s(80547),j=s(72084),y=s(64020),w=s(14181);function TokenValue(e){let{symbol:t,value:s,decimals:l}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)(b(),{className:"inline-block",alt:"usb",width:16,height:16,src:"/".concat(t,".svg")}),(0,x.dq)(s,l)]})}function DualTokenCard(e){let{type:t,vc:s}=e,x="buy"==t;x?r.O1[(0,n.BV)()]:s.assetTokenAddress;let v=x?"USB":s.assetTokenSymbol,N=x?s.assetTokenSymbol:"USB",S=x?"Buy ".concat(s.assetTokenSymbol," Low"):"Sell ".concat(s.assetTokenSymbol," High"),T=x?s.ptyPoolBelowAddress:s.ptyPoolAboveAddress,{prices:A,balances:R,earns:_,vaultsState:E,assetLocked:C,vaultUSBTotal:B}=(0,c.useContext)(m.FetcherContext),P=E[s.vault],M=_[T],{address:V}=(0,p.mA)(),z=(0,c.useMemo)(()=>(0,d.ok)(null==R?void 0:R.find(e=>e.symbol===v),"balance"),[R,v]),[I,U]=(0,c.useState)(""),Z=x?s.xTokenSymbol:s.assetTokenSymbol,D=x?s.assetTokenSymbol:s.xTokenSymbol,W=(0,c.useMemo)(()=>(0,d.ok)(M,"totalStake")*(0,d.ok)(A,v,i.Pq)/i.Pq,[A[v],null==M?void 0:M.totalStake]),H=x?null==P?void 0:P.AARS:null==P?void 0:P.AARU,F=(0,d.ok)(C,s.assetTokenSymbol),L=(0,d.ok)(B,s.vault);(0,c.useMemo)(()=>H&&P.AARDecimals&&0n!=F&&0n!=L?H*L*i.Pq/P.AARDecimals/F/BigInt(1e9):(0,d.ok)(A,s.assetTokenFeed),[H,L,P.AARDecimals,F]);let Y=x?"Stake $USB, and when the ".concat(s.assetTokenSymbol," price falls to the target, it will trigger the purchase of ").concat(s.assetTokenSymbol," with staked $USB."):"Stake ".concat(s.assetTokenSymbol,", and when the ").concat(s.assetTokenSymbol," price rises to the target, staked ").concat(s.assetTokenSymbol," will be sold."),$=(0,p.do)({abi:l.Z,address:T,functionName:"getAccruedMatchingYields",watch:!0}),q=(0,d.ok)($,"data"),O=(0,c.useMemo)(()=>{let e=(0,d.ok)(M,"totalStake");return 0n==e?"0.00%":(0,d.Jh)(q*i.Pq/e,18,2)},[null==M?void 0:M.totalStake,q]),G=(0,c.useMemo)(()=>"2.00%",[A[Z],W]),J=(0,c.useMemo)(()=>{let e=x?[{key:"eth_price",label:"ETH Price",value:(0,a.jsx)(TokenValue,{symbol:v,value:null==M?void 0:M.stake})},{key:"target_price",label:"Target Price",value:(0,a.jsx)(TokenValue,{symbol:N,value:null==M?void 0:M.match})},{key:"apr_yield",label:"APR(".concat(Z," Yield)"),value:G},{key:"apr_interest",label:"APR(".concat(Z," Interest)"),value:G},{key:"transacation_reward_pool",label:"Reward Pool",tip:"The reward funds originates from protocol, and when a purchase action is triggered, these funds will be distributed proportionally.",value:(0,a.jsx)(TokenValue,{symbol:D,value:q,decimals:6})},{key:"discount_rate",label:"Reward Rate",tip:"This is an estimated value, to be determined upon triggering. Reward Rate =Reward/Transaction volume",value:"".concat(O," (Est.)")},{key:"usb_rebasable_apr",label:"USB Interest-bearing APR",value:(0,d.Rr)((0,d.ok)(P,"Y"),(0,d.ok)(P,"settingsDecimals"))}]:[{key:"eth_price",label:"ETH Price",value:(0,a.jsx)(TokenValue,{symbol:v,value:null==M?void 0:M.stake})},{key:"target_price",label:"Target Price",value:(0,a.jsx)(TokenValue,{symbol:N,value:null==M?void 0:M.match})},{key:"apr_yield",label:"APR(".concat(Z," Yield)"),value:G},{key:"transacation_reward_pool",label:"Reward Pool",tip:"The reward funds originates from protocol, and when a purchase action is triggered, these funds will be distributed proportionally.",value:(0,a.jsx)(TokenValue,{symbol:D,value:q,decimals:6})},{key:"discount_rate",label:"Reward Rate",tip:"This is an estimated value, to be determined upon triggering. Reward Rate =Reward/Transaction volume",value:"".concat(O," (Est.)")},{key:"usb_rebasable_apr",label:"USB Interest-bearing APR",value:(0,d.Rr)((0,d.ok)(P,"Y"),(0,d.ok)(P,"settingsDecimals"))}];return e},[M,q]),K=(0,c.useMemo)(()=>{let e=x?[{key:"successfully_brought",label:"Successfully Brought",value:(0,a.jsx)(TokenValue,{symbol:v,value:null==M?void 0:M.stake})},{key:"x_earend",label:"".concat(Z," earned"),value:(0,a.jsx)(TokenValue,{symbol:N,value:null==M?void 0:M.match})}]:[{key:"successfully_sold",label:"Successfully Sold",value:(0,a.jsx)(TokenValue,{symbol:v,value:null==M?void 0:M.stake})},{key:"x_earend",label:"".concat(Z," earned"),value:(0,a.jsx)(TokenValue,{symbol:N,value:null==M?void 0:M.match})}];return e},[M,q]),{write:X,isLoading:Q}=(0,u.R)({abi:l.Z,address:T,functionName:"claimAll"}),ee=function(e){let t=(0,c.useRef)(null);return o[e]&&o[e].includes(t)||(o[e]=[...o[e]||[],t]),(0,c.useEffect)(()=>{if(!t.current)return()=>{};let onResize=()=>{let s=o[e]||[],a=s.reduce((e,t)=>{var s;return Math.max((null===(s=t.current)||void 0===s?void 0:s.clientHeight)||0,e)},0);s.filter(e=>e!=t).forEach(e=>{var t;let s=(null===(t=e.current)||void 0===t?void 0:t.clientHeight)||0;s!==a&&a>0&&e.current&&(e.current.style.height="".concat(a,"px"))})};return window.addEventListener("resize",onResize),onResize(),()=>{window.removeEventListener("resize",onResize)}},[t.current]),t}(s.vault);return(0,a.jsxs)("div",{className:"card flex flex-col",children:[(0,a.jsxs)("div",{className:"flex gap-5 items-center justify-between",ref:ee,children:[(0,a.jsxs)("div",{className:"flex gap-5 items-center",children:[(0,a.jsxs)("div",{className:"relative w-fit shrink-0 h-[40px] w-[40px]",children:[(0,a.jsx)(b(),{width:40,height:40,src:"/".concat(v,".svg"),alt:""}),(0,a.jsx)(b(),{className:"absolute -right-2 -bottom-2",width:24,height:24,src:"/".concat(N,".svg"),alt:""})]}),(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("h6",{className:"text-base leading-6 font-bold",children:S||"title"}),(0,a.jsx)(y.C,{children:Y})]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"text-xs text-black font-medium text-right",children:["Total ",v," Staked"]}),(0,a.jsx)("div",{className:"text-[24px] text-black font-semibold",children:"323,323.223"})]})]}),(0,a.jsx)(h.Z,{className:"my-4"}),(0,a.jsxs)(f.Z,{numItemsSm:2,className:"gap-x-2 min-h-[188px]",children:[(0,a.jsx)(f.Z,{numItemsSm:1,className:"gap-y-2 gap-x-7 md:border-r-[1px] border-[#E4E4E7] mb-[12px] md-0",children:null==J?void 0:J.map(e=>(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)("div",{className:"text-xs text-black font-medium mr-[5px]",children:[e.label," : ",e.tip&&(0,a.jsx)(y.C,{children:e.tip})]}),(0,a.jsx)("div",{className:"text-neutral-900 text-sm",children:e.value})]},e.key))}),V&&(0,a.jsxs)(f.Z,{numItemsSm:1,className:"gap-x-1",children:[(0,a.jsx)("div",{className:"w-full border-t-[1px] border-[#E4E4E7] md:border-0 md:px-[20px]",children:null==K?void 0:K.map(e=>(0,a.jsx)("div",{className:"flex items-center mt-[8px] md:mt-0 md:mb-[15px]",children:(0,a.jsx)("div",{className:"text-neutral-900 text-sm",children:e.value})},e.key))}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,a.jsxs)("button",{className:"btn-primary px-4 h-7 flex items-center w-[60%] md:w-fit self-end justify-center gap-4 bg-[#64738B]",disabled:!X||Q,onClick:()=>X(),children:[Q&&(0,a.jsx)(j.$,{}),"Claim All"]})}),(0,a.jsxs)("div",{className:"flex mt-[28px] justify-center items-center text-[#64748B] text-base font-medium",children:["Staked: ","0.237","  ",(0,a.jsx)("span",{className:"text-[#6466F1] ml-[5px]",children:"Max"})]})]})]})]}),(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsx)("div",{className:"text-sm text-slate-500 flex flex-col gap-3"})}),V?(0,a.jsxs)("div",{className:"mt-[30px]",children:[(0,a.jsx)(k.W,{amount:I,setAmount:U,asset:v,balance:z}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(g.v,{tx:"Stake",disabled:(0,d.su)(I)>z,onTxSuccess:()=>{U("")},config:{abi:l.Z,address:T,functionName:"stake",args:[(0,d.su)(I)],value:"ETH"==v?(0,d.su)(I):0n},className:"mt-2 w-[45%]",spender:T}),(0,a.jsx)(g.v,{className:"mt-2 w-[45%]",tx:"UnStake",disabled:(0,d.su)(I)>(0,d.ok)(M,"stake"),onTxSuccess:()=>{U("")},config:{abi:l.Z,address:T,functionName:"withdraw",args:[(0,d.su)(I)]}})]})]}):(0,a.jsx)("div",{className:"w-full flex items-center justify-center mt-[30px]",children:(0,a.jsx)(w.x3,{})})]})}var N=s(55139);function EarnPage(){let e=r.iK[(0,n.BV)()].find(e=>"ETH"==e.assetTokenSymbol);return e?(0,a.jsxs)("div",{className:"w-full h-full max-w-screen-xl px-4 mx-auto",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"Price Trigger Yield"}),(0,a.jsxs)(N.r,{numItemsSm:2,className:"gap-3 mt-4",children:[(0,a.jsx)(DualTokenCard,{vc:e,type:"buy"}),(0,a.jsx)(DualTokenCard,{vc:e,type:"sell"})]})]}):null}},76036:function(e,t,s){"use strict";s.d(t,{v:function(){return ApproveAndTx}});var a=s(57437),l=s(72009),n=s(81628),r=s(2265),i=s(71424),c=s(56926),o=s(85566);let u={},useApproves=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*BigInt(1e18),{address:a}=(0,c.mA)(),d=(0,c.t_)(),{data:m}=(0,c.py)(),[x,h]=(0,r.useState)(!1),f=(0,r.useMemo)(()=>Object.keys(e).filter(e=>e!==l.K8),[e]),[v,b]=(0,r.useState)(t&&u[t]||{}),updateAllownce=(e,s)=>{t&&(u[t]={...u[t]||{},[e]:s},b(t=>({...t,[e]:s})))},{data:p}=(0,c.Ov)();(0,r.useEffect)(()=>{a&&t&&f.forEach(e=>{d.readContract({abi:o.em,address:e,functionName:"allowance",args:[a,t]}).then(t=>updateAllownce(e,t)).catch(console.error)})},[f,a,p]);let[g,k]=(0,r.useState)(!1),j=(0,r.useMemo)(()=>f.filter(t=>(0,n.ok)(e,t)>0n&&(0,n.ok)(e,t)>(0,n.ok)(v,t)),[e,f,v]),approve=async()=>{if(0!=j.length&&t)try{k(!0),h(!1);for(let a=0;a<j.length;a++){let l=j[a],n=!1===s?e[l]:s,r=await (null==m?void 0:m.writeContract({abi:o.em,address:l,functionName:"approve",args:[t,n]}));r&&await (null==d?void 0:d.waitForTransactionReceipt({hash:r})),updateAllownce(l,n)}i.toast.success("Approve success"),k(!1),h(!0)}catch(e){throw i.toast.error((0,n.az)(e)),k(!1),h(!1),e}};return{approve,loading:g,shouldApprove:j.length>0,isSuccess:x}};var d=s(43003),m=s(35769),x=s(72084);function ApproveAndTx(e){let{className:t,tx:s,approves:l,spender:n,requestAmount:i,config:c,toast:o=!0,disabled:u,onTxSuccess:h,onApproveSuccess:f}=e,{write:v,isLoading:b,isSuccess:p,rePrepare:g}=(0,d.R)(c,o),k=(0,r.useRef)();k.current=h,(0,r.useEffect)(()=>{k.current&&p&&k.current()},[p]);let j=u||!v||b||!1===c.enabled,{approve:y,shouldApprove:w,loading:N,isSuccess:S}=useApproves(l||{},n,i),T=(0,r.useRef)();return(T.current=f,(0,r.useEffect)(()=>{T.current&&S&&T.current(),S&&g&&g()},[S]),w)?(0,a.jsxs)("button",{className:(0,m.m)("btn-primary flex items-center justify-center gap-4",t),onClick:y,disabled:u||!y||N,children:[N&&(0,a.jsx)(x.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,m.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>v(),disabled:j,children:[b&&(0,a.jsx)(x.$,{}),s]})}},80547:function(e,t,s){"use strict";s.d(t,{W:function(){return AssetInput}});var a=s(57437),l=s(81628),n=s(20373),r=s(57042),i=s(16691),c=s.n(i),o=s(2265),u=s(16775),d=s(82288);function AssetInput(e){let{asset:t="ETH",balance:s,balanceTit:i="Balance",balanceDecimals:m=18,exchange:x,readonly:h,selected:f,onClick:v,amount:b,setAmount:p,price:g,disable:k,hasInput:j=!1,options:y,onChange:w=()=>{},defaultValue:N}=e,S=(0,o.useRef)(null),T=void 0!==s&&(0,l.su)("number"==typeof b?b+"":b||"")>("bigint"==typeof s?s:0n);return(0,a.jsxs)("div",{className:"relative w-full",onClick:()=>{v&&!k&&v()},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,a.jsx)(c(),{width:24,height:24,src:"/".concat(t,".svg"),alt:""}),(0,a.jsxs)("div",{className:"text-base font-medium",children:[(0,a.jsxs)("div",{children:[j?(0,a.jsx)(d.ZP,{options:y,onChange:w,defaultValue:N,styles:{control:(e,t)=>({...e,border:"0px",minHeight:"24px",padding:"0px",background:"rgb(248 250 252)"})}}):(0,a.jsx)("div",{children:t}),g&&(0,a.jsx)("div",{className:"text-neutral-500 text-xs",children:g})]}),x&&(0,a.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",x]})]})]}),(0,a.jsx)("input",{value:b,onChange:e=>p(e.target.value),ref:S,type:"number",disabled:k,className:(0,r.Z)(h?"bg-slate-50":"bg-white",{"border-red-400 !border-2 focus:border-red-400":T,"border-slate-400  focus:border-blue-400 ":!T},"w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",step:.01,title:"",readOnly:h})]}),void 0!=s&&(0,a.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,a.jsxs)("div",{children:[i,": ",(0,n.Rp)(s,3,m),(0,a.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,u.b)(s,m);p(e),v&&!k&&v()},children:"Max"})]}),(0,a.jsx)("div",{className:"text-sm text-red-400",children:T?"Insufficient account balance":""})]})]})}},72084:function(e,t,s){"use strict";s.d(t,{$:function(){return Spinner}});var a=s(57437);let Spinner=e=>{let{className:t}=e;return(0,a.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},64020:function(e,t,s){"use strict";s.d(t,{C:function(){return Tip}});var a=s(57437),l=s(75224),n=s(71824);function Tip(e){let{children:t}=e;return(0,a.jsx)(l.zt,{children:(0,a.jsxs)(l.fC,{children:[(0,a.jsx)(l.xz,{asChild:!0,children:(0,a.jsx)("div",{className:"inline-block px-1",style:{verticalAlign:"text-bottom"},children:(0,a.jsx)(n.if7,{className:"inline-block w-[14px] h-[14px] stroke-slate-500"})})}),(0,a.jsx)(l.h_,{children:(0,a.jsxs)(l.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:[t,(0,a.jsx)(l.Eh,{})]})})]})})}},43003:function(e,t,s){"use strict";s.d(t,{R:function(){return useWrapContractWrite}});var a=s(81628),l=s(2265),n=s(71424),r=s(56926);function useWrapContractWrite(e){var t;let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1],i=(0,r.PJ)(e),c=(0,r.GG)(i.config),o=(0,r.BX)({hash:null===(t=c.data)||void 0===t?void 0:t.hash}),u=c.isLoading||o.isLoading,d=c.isSuccess&&o.isSuccess;return(0,l.useEffect)(()=>{s&&(c.error?n.toast.error((0,a.az)(c.error)):d&&n.toast.success("Transaction success"))},[c.error,d]),{...c,isLoading:u,isSuccess:d,rePrepare:i.refetch}}},20373:function(e,t,s){"use strict";s.d(t,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var a=s(16775),l=s(79352);let displayBalanceWithUnit=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,s=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let l=10**t;return(Math.floor(Number((0,a.b)(e,s))*l)/l).toLocaleString("en-US",{maximumFractionDigits:t})},displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return(Math.floor(Number((0,l.d)(e))*s)/s).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},displayBalanceWithoutFormat=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return String(Math.floor(Number((0,l.d)(e))*s)/s)}}},function(e){e.O(0,[27,61,986,866,205,725,539,619,356,654,518,203,971,472,744],function(){return e(e.s=62166)}),_N_E=e.O()}]);