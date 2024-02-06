(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{35883:function(){},14034:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var a=s(50044),n=s(2265),l=s(16737),r=s(37517),i=s(93568),c=s(76503);let o=(0,i.fn)("Divider"),d=n.forwardRef((e,t)=>{let{className:s}=e,i=(0,a.__rest)(e,["className"]);return n.createElement("div",Object.assign({ref:t,className:(0,c.q)(o("root"),"w-full mx-auto","bg-tremor-background-subtle","dark:bg-dark-tremor-background-subtle",l.N.threeXs.height,r.W.threeXl.marginTop,r.W.threeXl.marginBottom,s)},i))});d.displayName="Divider"},55139:function(e,t,s){"use strict";s.d(t,{r:function(){return a.Z}});var a=s(87456)},62166:function(e,t,s){Promise.resolve().then(s.bind(s,66790))},66790:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return EarnPage}});var a=s(57437),n=s(91056),l=s(72009),r=s(8580),i=s(2265);let c={};var o=s(12831),d=s(43003),u=s(81628),m=s(15898),x=s(20373),f=s(14034),h=s(87456),p=s(14181),b=s(16691),v=s.n(b),g=s(56926),k=s(76036),j=s(80547),y=s(72084),w=s(64020),N=s(30050),T=s(79352);function TokenValue(e){let{symbol:t,value:s,decimals:n}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)(v(),{className:"inline-block",alt:"usb",width:16,height:16,src:"/".concat(t,".svg")}),(0,x.dq)(s,n)]})}function DualTokenCard(e){let{type:t,vc:s}=e,b="buy"==t,S=b?l.O1[(0,n.BV)()]:s.assetTokenAddress,A=b?"USB":s.assetTokenSymbol,R=b?s.assetTokenSymbol:"USB",C=b?"Buy ".concat(s.assetTokenSymbol," Low"):"Sell ".concat(s.assetTokenSymbol," High"),E=b?s.ptyPoolBelowAddress:s.ptyPoolAboveAddress,{prices:_,balances:B,earns:P,vaultsState:M,assetLocked:D,vaultUSBTotal:q}=(0,i.useContext)(m.g),z=M[s.vault],W=P[E],{address:I}=(0,g.mA)(),V=B[A],[U,F]=(0,i.useState)(""),H=(0,u.su)(U),Z=b?s.xTokenSymbol:s.assetTokenSymbol,L=b?s.assetTokenSymbol:s.xTokenSymbol,O=(0,i.useMemo)(()=>W.totalStake*(0,u.ok)(_,A,r.Pq)/r.Pq,[_[A],W.totalStake]),$=b?null==z?void 0:z.AARS:null==z?void 0:z.AARU,Y=(0,u.ok)(D,s.assetTokenSymbol),X=(0,u.ok)(q,s.vault),J=(0,i.useMemo)(()=>$&&z.AARDecimals&&0n!=Y&&0n!=X?$*X*r.Pq/z.AARDecimals/Y/BigInt(1e9):(0,u.ok)(_,s.assetTokenFeed),[$,X,z.AARDecimals,Y]),K=b?"Stake $USB, and when the ".concat(s.assetTokenSymbol," price falls to the target, it will trigger the purchase of ").concat(s.assetTokenSymbol," with staked $USB."):"Stake ".concat(s.assetTokenSymbol,", and when the ").concat(s.assetTokenSymbol," price rises to the target, staked ").concat(s.assetTokenSymbol," will be sold."),G=(0,i.useMemo)(()=>({abi:N.aT,address:E,functionName:"getAccruedMatchingYields",watch:!0}),[E]),Q=(0,o.D2)(G),ee=(0,u.ok)(Q,"data"),et=(0,i.useMemo)(()=>{let e=(0,u.ok)(W,"totalStake");return 0n==e?"0.00%":(0,u.Jh)(ee*r.Pq/e,18,2)},[W.totalStake,ee]),es=(0,i.useMemo)(()=>"2.00%",[_[Z],O]),ea=(0,i.useMemo)(()=>{let e=b?[{key:"eth_price",label:"ETH Price",value:(0,x.dq)(_[s.assetTokenSymbol])},{key:"target_price",label:"Target Price",value:(0,x.dq)(J)},{key:"apr_yield",label:"APR(".concat(Z," Yield)"),value:es},{key:"apr_interest",label:"APR(USB Interest)",value:(0,u.Jh)((0,u.ok)(z,"Y"),(0,u.ok)(z,"settingsDecimals"),2)},{key:"transacation_reward_pool",label:"Reward Pool",tip:"The reward funds originates from protocol, and when a purchase action is triggered, these funds will be distributed proportionally.",value:(0,a.jsx)(TokenValue,{symbol:L,value:ee,decimals:6})},{key:"discount_rate",label:"Reward Rate",tip:"This is an estimated value, to be determined upon triggering. Reward Rate =Reward/Transaction volume",value:"".concat(et," (Est.)")}]:[{key:"eth_price",label:"ETH Price",value:(0,x.dq)(_[s.assetTokenSymbol])},{key:"target_price",label:"Target Price",value:(0,x.dq)(J)},{key:"apr_yield",label:"APR(".concat(Z," Yield)"),value:es},{key:"transacation_reward_pool",label:"Reward Pool",tip:"The reward funds originates from protocol, and when a purchase action is triggered, these funds will be distributed proportionally.",value:(0,a.jsx)(TokenValue,{symbol:L,value:ee,decimals:6})},{key:"discount_rate",label:"Reward Rate",tip:"This is an estimated value, to be determined upon triggering. Reward Rate =Reward/Transaction volume",value:"".concat(et," (Est.)")}];return e},[W,ee]),en=(0,i.useMemo)(()=>{let e=b?[{key:"successfully_brought",label:"Successfully Brought",value:(0,a.jsx)(TokenValue,{symbol:R,value:W.match})},{key:"x_earend",label:"".concat(Z," earned"),value:(0,a.jsx)(TokenValue,{symbol:Z,value:W.earn})}]:[{key:"successfully_sold",label:"Successfully Sold",value:(0,a.jsx)(TokenValue,{symbol:R,value:W.match})},{key:"x_earend",label:"".concat(Z," earned"),value:(0,a.jsx)(TokenValue,{symbol:Z,value:W.earn})}];return e},[W,ee]),{write:el,isDisabled:er,isLoading:ei}=(0,d.R)({abi:N.aT,address:E,functionName:"claimAll"}),ec=function(e){let t=(0,i.useRef)(null);return c[e]&&c[e].includes(t)||(c[e]=[...c[e]||[],t]),(0,i.useEffect)(()=>{if(!t.current)return()=>{};let onResize=()=>{let s=c[e]||[],a=s.reduce((e,t)=>{var s;return Math.max((null===(s=t.current)||void 0===s?void 0:s.clientHeight)||0,e)},0);s.filter(e=>e!=t).forEach(e=>{var t;let s=(null===(t=e.current)||void 0===t?void 0:t.clientHeight)||0;s!==a&&a>0&&e.current&&(e.current.style.height="".concat(a,"px"))})};return window.addEventListener("resize",onResize),onResize(),()=>{window.removeEventListener("resize",onResize)}},[t.current]),t}(s.vault);return(0,a.jsxs)("div",{className:"card flex flex-col",children:[(0,a.jsxs)("div",{className:"flex gap-5 items-center justify-between",ref:ec,children:[(0,a.jsxs)("div",{className:"flex gap-5 items-center",children:[(0,a.jsxs)("div",{className:"relative w-fit shrink-0 h-[40px] w-[40px]",children:[(0,a.jsx)(v(),{width:40,height:40,src:"/".concat(A,".svg"),alt:""}),(0,a.jsx)(v(),{className:"absolute -right-2 -bottom-2",width:24,height:24,src:"/".concat(R,".svg"),alt:""})]}),(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("h6",{className:"text-base leading-6 font-bold",children:C||"title"}),(0,a.jsx)(w.C,{children:K})]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"text-xs text-black font-medium text-right",children:["Total ",A," Staked"]}),(0,a.jsx)("div",{className:"text-[24px] text-black font-semibold",children:(0,x.dq)(W.totalStake)})]})]}),(0,a.jsx)(f.Z,{className:"my-4"}),(0,a.jsxs)(h.Z,{numItemsSm:2,className:"gap-x-2 min-h-[188px]",children:[(0,a.jsx)(h.Z,{numItemsSm:1,className:"gap-y-2 gap-x-7 md:border-r-[1px] border-[#E4E4E7] mb-[12px] md-0",children:null==ea?void 0:ea.map(e=>(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)("div",{className:"text-xs text-black font-medium mr-[5px]",children:[e.label," : ",e.tip&&(0,a.jsx)(w.C,{children:e.tip})]}),(0,a.jsx)("div",{className:"text-neutral-900 text-sm",children:e.value})]},e.key))}),I&&(0,a.jsxs)(h.Z,{numItemsSm:1,className:"gap-x-1",children:[(0,a.jsx)("div",{className:"w-full border-t-[1px] border-[#E4E4E7] md:border-0 md:px-[20px]",children:null==en?void 0:en.map(e=>(0,a.jsxs)("div",{className:"flex items-center mt-[8px] md:mt-0 md:mb-2",children:[(0,a.jsxs)("div",{className:"text-xs text-black font-medium mr-[5px]",children:[e.label," :"]}),(0,a.jsx)("div",{className:"text-neutral-900 text-sm",children:e.value})]},e.key))}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,a.jsxs)("button",{className:"btn-primary px-4 h-7 flex items-center w-[60%] md:w-fit self-end justify-center gap-4 bg-[#64738B]",disabled:er||ei,onClick:()=>el(),children:[ei&&(0,a.jsx)(y.$,{}),"Claim All"]})}),(0,a.jsxs)("div",{className:"flex mt-[28px] justify-center items-center text-[#64748B] text-base font-medium",children:["Staked: ",(0,x.dq)(W.stake)," ",(0,a.jsx)("span",{className:"text-[#6466F1] ml-[5px] cursor-pointer",onClick:()=>F((0,T.d)(W.stake)),children:"Max"})]})]})]})]}),(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsx)("div",{className:"text-sm text-slate-500 flex flex-col gap-3"})}),I?(0,a.jsxs)("div",{className:"mt-[30px]",children:[(0,a.jsx)(j.W,{amount:U,setAmount:F,asset:A,balance:V,checkBalance:!1}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(k.v,{tx:H>V?"Insufficient account balance":"Stake",disabled:H<=0n||H>V,onTxSuccess:()=>{F("")},config:{abi:N.aT,address:E,functionName:"stake",args:[H],value:"ETH"==A?H:0n},className:"mt-2 w-[45%]",approves:{[S]:H},spender:E}),(0,a.jsx)(k.v,{className:"mt-2 w-[45%]",tx:H>W.stake?"Insufficient account balance":"UnStake",disabled:H<=0n||H>W.stake,onTxSuccess:()=>{F("")},config:{abi:N.aT,address:E,functionName:"withdraw",args:[H]}})]})]}):(0,a.jsx)("div",{className:"w-full flex items-center justify-center mt-[30px]",children:(0,a.jsx)(p.x3,{})})]})}var S=s(55139);function EarnPage(){let e=l.iK[(0,n.BV)()].find(e=>"ETH"==e.assetTokenSymbol);return e?(0,a.jsxs)("div",{className:"w-full h-full max-w-screen-xl px-4 mx-auto",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"Price Trigger Yield"}),(0,a.jsxs)(S.r,{numItemsSm:2,className:"gap-3 mt-4",children:[(0,a.jsx)(DualTokenCard,{vc:e,type:"buy"}),(0,a.jsx)(DualTokenCard,{vc:e,type:"sell"})]})]}):null}},76036:function(e,t,s){"use strict";s.d(t,{v:function(){return ApproveAndTx}});var a=s(57437),n=s(72009),l=s(81628),r=s(2265),i=s(71424),c=s(56926),o=s(51143),d=s(12831);let u={},useApproves=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*BigInt(1e18),{address:a}=(0,c.mA)(),m=(0,d.uT)(),{data:x}=(0,c.py)(),[f,h]=(0,r.useState)(!1),p=(0,r.useMemo)(()=>Object.keys(e).filter(e=>e!==n.K8),[e]),[b,v]=(0,r.useState)(t&&u[t]||{}),updateAllownce=(e,s)=>{t&&(u[t]={...u[t]||{},[e]:s},v(t=>({...t,[e]:s})))},{data:g}=(0,c.Ov)(),k=(0,c.t_)();(0,r.useEffect)(()=>{a&&t&&p.forEach(e=>{m({abi:o.em,address:e,functionName:"allowance",args:[a,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[p,a,g]);let[j,y]=(0,r.useState)(!1),w=(0,r.useMemo)(()=>p.filter(t=>(0,l.ok)(e,t)>0n&&(0,l.ok)(e,t)>(0,l.ok)(b,t)),[e,p,b]),approve=async()=>{if(0!=w.length&&t)try{y(!0),h(!1);for(let a=0;a<w.length;a++){let n=w[a],l=!1===s?e[n]:s,r=await (null==x?void 0:x.writeContract({abi:o.em,address:n,functionName:"approve",args:[t,l]}));r&&await (null==k?void 0:k.waitForTransactionReceipt({hash:r})),updateAllownce(n,l)}i.A.success("Approve success"),y(!1),h(!0)}catch(e){throw i.A.error((0,l.az)(e)),y(!1),h(!1),e}};return{approve,loading:j,shouldApprove:w.length>0,isSuccess:f}};var m=s(43003),x=s(35769),f=s(72084);function ApproveAndTx(e){let{className:t,tx:s,approves:n,spender:l,requestAmount:i,config:c,toast:o=!0,disabled:d,onTxSuccess:u,onApproveSuccess:h}=e,{write:p,isDisabled:b,isLoading:v,isSuccess:g}=(0,m.R)(c,o),k=(0,r.useRef)();k.current=u,(0,r.useEffect)(()=>{k.current&&g&&k.current()},[g]);let j=d||b||v||!1===c.enabled,{approve:y,shouldApprove:w,loading:N,isSuccess:T}=useApproves(n||{},l,i),S=(0,r.useRef)();return(S.current=h,(0,r.useEffect)(()=>{S.current&&T&&S.current()},[T]),w)?(0,a.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:y,disabled:d||!y||N,children:[N&&(0,a.jsx)(f.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>p(),disabled:j,children:[v&&(0,a.jsx)(f.$,{}),s]})}},80547:function(e,t,s){"use strict";s.d(t,{W:function(){return AssetInput}});var a=s(57437),n=s(81628),l=s(20373),r=s(57042),i=s(16691),c=s.n(i),o=s(2265),d=s(16775),u=s(82288);function AssetInput(e){let{asset:t="ETH",checkBalance:s=!0,balance:i,balanceTit:m="Balance",balanceDecimals:x=18,exchange:f,readonly:h,selected:p,onClick:b,amount:v,setAmount:g,price:k,disable:j,hasInput:y=!1,options:w,onChange:N=()=>{},defaultValue:T,balanceClassName:S=""}=e,A=(0,o.useRef)(null),R=s&&void 0!==i&&(0,n.su)("number"==typeof v?v+"":v||"")>("bigint"==typeof i?i:0n);return(0,a.jsxs)("div",{className:"relative w-full",onClick:()=>{b&&!j&&b()},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,a.jsx)(c(),{width:24,height:24,src:"/".concat(t,".svg"),alt:""}),(0,a.jsxs)("div",{className:"text-base font-medium",children:[(0,a.jsxs)("div",{children:[y?(0,a.jsx)(u.ZP,{options:w,onChange:N,defaultValue:T,styles:{control:(e,t)=>({...e,border:"0px",minHeight:"24px",padding:"0px",background:"rgb(248 250 252)"})}}):(0,a.jsx)("div",{children:t}),k&&(0,a.jsx)("div",{className:"text-neutral-500 text-xs",children:k})]}),f&&(0,a.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",f]})]})]}),(0,a.jsx)("input",{value:v,onChange:e=>g(e.target.value),ref:A,type:"number",disabled:j,className:(0,r.Z)(h?"bg-slate-50":"bg-white",{"border-red-400 !border-2 focus:border-red-400":R,"border-slate-400  focus:border-blue-400 ":!R},"w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",step:.01,title:"",readOnly:h})]}),void 0!=i&&(0,a.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,a.jsxs)("div",{className:S,children:[(0,a.jsxs)("span",{children:[m,": ",(0,l.Rp)(i,3,x)]}),(0,a.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,d.b)(i,x);g(e),b&&!j&&b()},children:"Max"})]}),(0,a.jsx)("div",{className:"text-sm text-red-400",children:R?"Insufficient account balance":""})]})]})}},72084:function(e,t,s){"use strict";s.d(t,{$:function(){return Spinner}});var a=s(57437);let Spinner=e=>{let{className:t}=e;return(0,a.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},64020:function(e,t,s){"use strict";s.d(t,{C:function(){return Tip}});var a=s(57437),n=s(75224),l=s(71824);function Tip(e){let{children:t,node:s}=e;return(0,a.jsx)(n.zt,{children:(0,a.jsxs)(n.fC,{children:[(0,a.jsx)(n.xz,{asChild:!0,children:s?(0,a.jsx)("div",{className:"inline-block",style:{verticalAlign:"text-bottom"},children:s}):(0,a.jsx)("div",{className:"inline-block px-1",style:{verticalAlign:"text-bottom"},children:(0,a.jsx)(l.if7,{className:"inline-block w-[14px] h-[14px] stroke-slate-500"})})}),(0,a.jsx)(n.h_,{children:(0,a.jsxs)(n.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:[t,(0,a.jsx)(n.Eh,{})]})})]})})}},43003:function(e,t,s){"use strict";s.d(t,{R:function(){return useWrapContractWrite}});var a=s(81628),n=s(2265),l=s(71424),r=s(56926),i=s(12831);function useWrapContractWrite(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[s,c]=(0,n.useState)(!1),[o,d]=(0,n.useState)(!1),u=(0,r.t_)(),{data:m}=(0,r.py)(),x=!u||!m||!m.account||s||!e||"object"==typeof e&&!1==e.enabled,write=async()=>{if(!x){c(!0),d(!1);try{let s="function"==typeof e?await e():await (0,i.zp)(e),{request:a}=await u.simulateContract({account:m.account,address:s.address,abi:s.abi,functionName:s.functionName,args:s.args,value:s.value}),n=await m.writeContract(a),r=await u.waitForTransactionReceipt({hash:n});if("success"!==r.status)throw"Transaction reverted";d(!0),t&&l.A.success("Transaction success")}catch(e){t&&l.A.error((0,a.az)(e))}c(!1)}};return{write,isDisabled:x,isLoading:s,isSuccess:o}}},20373:function(e,t,s){"use strict";s.d(t,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var a=s(16775),n=s(79352);let displayBalanceWithUnit=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,s=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let n=10**t;return(Math.floor(Number((0,a.b)(e,s))*n)/n).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return(Math.floor(Number((0,n.d)(e))*s)/s).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},displayBalanceWithoutFormat=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return String(Math.floor(Number((0,n.d)(e))*s)/s)}}},function(e){e.O(0,[27,866,61,986,232,510,539,240,156,725,619,356,128,322,971,472,744],function(){return e(e.s=62166)}),_N_E=e.O()}]);