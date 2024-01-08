(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{79043:function(e,t,s){"use strict";s.d(t,{i:function(){return a.Z},r:function(){return n.Z}});var a=s(68114),n=s(77832)},62166:function(e,t,s){Promise.resolve().then(s.bind(s,45350))},45350:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return EarnPage}});var a=s(57437),n=s(45428),l=s(91056),r=s(85156),i=s(8580),o=s(72009),c=s(56926),u=s(30197),d=s(43003),m=s(81628),x=s(99057),v=s(20373),f=s(34522),h=s(79043),b=s(16691),p=s.n(b),g=s(2265),k=s(76036),y=s(80547),j=s(72084),w=s(64020);let N={};function TokenValue(e){let{symbol:t,value:s,decimals:n}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,v.dq)(s,n),(0,a.jsx)(p(),{className:"inline-block",alt:"usb",width:16,height:16,src:"/".concat(t,".svg")})]})}function DualTokenCard(e){var t,s;let{type:b,vc:S}=e,T="buy"==b,A=T?r.O[(0,l.B)()]:S.assetTokenAddress,R=T?"USB":S.assetTokenSymbol,E=T?S.assetTokenSymbol:"USB",C=T?"Buy ".concat(S.assetTokenSymbol," Low"):"Sell ".concat(S.assetTokenSymbol," High"),_=T?S.ptyPoolBelowAddress:S.ptyPoolAboveAddress,{prices:P,balances:B,earns:z,vaultsState:M,assetLocked:V,vaultUSBTotal:q}=(0,g.useContext)(x.FetcherContext),F=M[S.vault],I=z[_],U=(0,g.useMemo)(()=>{var e;return null==B?void 0:null===(e=B.find(e=>e.symbol===R))||void 0===e?void 0:e.balance},[B,R]),[W,$]=(0,g.useState)(""),[D,L]=(0,g.useState)(""),Z=T?S.xTokenSymbol:S.assetTokenSymbol,H=T?S.assetTokenSymbol:S.xTokenSymbol,Y=(0,g.useMemo)(()=>{var e,t;return(null!==(e=null==I?void 0:I.totalStake)&&void 0!==e?e:0n)*(null!==(t=P[R])&&void 0!==t?t:i.Pq)/i.Pq},[P[R],null==I?void 0:I.totalStake]),O=T?null==F?void 0:F.AARS:null==F?void 0:F.AARU,J=null!==(t=V[S.assetTokenSymbol])&&void 0!==t?t:0n,K=null!==(s=q[S.vault])&&void 0!==s?s:0n,G=(0,g.useMemo)(()=>O&&F.AARDecimals&&0n!=J&&0n!=K?O*K*i.Pq/F.AARDecimals/J/BigInt(1e9):P[S.assetTokenSymbol],[O,K,F.AARDecimals,J]),Q=function(e){let{address:t,token:s}=e,a=s==o.K8,{data:n}=(0,c.KQ)({address:t,enabled:a}),{data:l}=(0,c.do)({abi:u.em,address:s,functionName:"balanceOf",args:[t],enabled:!a});return a?null==n?void 0:n.value:l}({address:_,token:T?S.assetTokenAddress:S.xTokenAddress}),X=(0,g.useMemo)(()=>{var e;let t=null!==(e=null==I?void 0:I.totalStake)&&void 0!==e?e:0n;return 0n==t?"0.00%":(0,m.Jh)((null!=Q?Q:0n)*i.Pq/t,18,2)},[null==I?void 0:I.totalStake,Q]),{data:ee}=(0,c.do)({abi:n.Z,address:_,functionName:"getRecentStakeYields"}),et=(0,g.useMemo)(()=>{var e;if(!ee||0==ee.length||!Y||0n==Y)return"0.00%";let[t,s]=ee.reduce((e,t)=>[e[0]+t[0],e[1]+t[1]],[0n,0n]),a=BigInt(31536e3),n=s*(null!==(e=P[Z])&&void 0!==e?e:0n)*a/t/i.Pq;return(0,m.Jh)(n*i.Pq/Y,18,2)},[ee,P[Z],Y]),es=(0,g.useMemo)(()=>{var e,t;let s=T?[{key:"staked",label:"".concat(R," Staked"),value:(0,a.jsx)(TokenValue,{symbol:R,value:null==I?void 0:I.stake})},{key:"successfully_bought",label:"Successfully Sold",value:(0,a.jsx)(TokenValue,{symbol:E,value:null==I?void 0:I.match})},{key:"stake_earned",label:"".concat(Z," Earned"),value:(0,a.jsx)(TokenValue,{symbol:Z,value:null==I?void 0:I.earn,decimals:6})},{key:"transacation_reward_pool",label:"Reward Pool",tip:"The reward funds originates from protocol, and when a purchase action is triggered, these funds will be distributed proportionally.",value:(0,a.jsx)(TokenValue,{symbol:H,value:Q,decimals:6})},{key:"stake_yield_apr",label:"".concat(Z," Yield APR"),value:et},{key:"discount_rate",label:"Reward Rate",tip:"This is an estimated value, to be determined upon triggering. Reward Rate =Reward/Transaction volume",value:"".concat(X," (Est.)")},{key:"usb_rebasable_apr",label:"USB Interest-bearing APR",value:(0,m.Rr)(null!==(e=F.Y)&&void 0!==e?e:0n,null!==(t=F.settingsDecimals)&&void 0!==t?t:0)}]:[{key:"staked",label:"".concat(R," Staked"),value:(0,a.jsx)(TokenValue,{symbol:R,value:null==I?void 0:I.stake})},{key:"successfully_bought",label:"Successfully Sold",value:(0,a.jsx)(TokenValue,{symbol:E,value:null==I?void 0:I.match})},{key:"stake_earned",label:"".concat(Z," Earned"),value:(0,a.jsx)(TokenValue,{symbol:Z,value:null==I?void 0:I.earn,decimals:6})},{key:"transacation_reward_pool",label:"Reward Pool",tip:"The reward funds originates from protocol, and when a purchase action is triggered, these funds will be distributed proportionally.",value:(0,a.jsx)(TokenValue,{symbol:H,value:Q,decimals:6})},{key:"stake_yield_apr",label:"".concat(Z," Yield APR"),value:et},{key:"discount_rate",label:"Reward Rate",tip:"This is an estimated value, to be determined upon triggering. Reward Rate =Reward/Transaction volume",value:"".concat(X," (Est.)")}];return s},[I,Q]),{write:ea,isLoading:en}=(0,d.R)({abi:n.Z,address:_,functionName:"claimAll"}),el=function(e){let t=(0,g.useRef)(null);return N[e]&&N[e].includes(t)||(N[e]=[...N[e]||[],t]),(0,g.useEffect)(()=>{if(!t.current)return()=>{};let onResize=()=>{let s=N[e]||[],a=s.reduce((e,t)=>{var s,a;return Math.max(null!==(a=null===(s=t.current)||void 0===s?void 0:s.clientHeight)&&void 0!==a?a:0,e)},0);s.filter(e=>e!=t).forEach(e=>{var t,s;let n=null!==(s=null===(t=e.current)||void 0===t?void 0:t.clientHeight)&&void 0!==s?s:0;n!==a&&a>0&&e.current&&(e.current.style.height="".concat(a,"px"))})};return window.addEventListener("resize",onResize),onResize(),()=>{window.removeEventListener("resize",onResize)}},[t.current]),t}(S.vault);return(0,a.jsxs)("div",{className:"card flex flex-col",children:[(0,a.jsxs)("div",{className:"flex gap-5 ",ref:el,children:[(0,a.jsxs)("div",{className:"relative w-fit shrink-0 h-[40px] w-[40px]",children:[(0,a.jsx)(p(),{width:40,height:40,src:"/".concat(R,".svg"),alt:""}),(0,a.jsx)(p(),{className:"absolute -right-2 -bottom-2",width:24,height:24,src:"/".concat(E,".svg"),alt:""})]}),(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{className:"text-base leading-6 font-bold",children:C||"title"}),(0,a.jsx)("p",{className:"text-xs text-slate-400",children:T?"Stake $USB, and when the ".concat(S.assetTokenSymbol," price falls to the target, it will trigger the purchase of ").concat(S.assetTokenSymbol," with staked $USB."):"Stake ".concat(S.assetTokenSymbol,", and when the ").concat(S.assetTokenSymbol," price rises to the target, staked ").concat(S.assetTokenSymbol," will be sold.")})]})})]}),(0,a.jsxs)("div",{className:"text-slate-500 text-sm text-end w-full",children:["TVL: $",(0,v.dq)(Y)]}),(0,a.jsxs)("div",{className:"flex flex-col text-sm mt-1 gap-1",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("div",{className:"flex items-center gap-1",children:"Current ".concat(S.assetTokenSymbol," price")}),(0,a.jsxs)("div",{className:"font-semibold",children:["$",(0,v.dq)(P[S.assetTokenSymbol])]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("div",{className:"flex items-center gap-1",children:"Target Price"}),(0,a.jsxs)("div",{className:"font-semibold",children:["$",(0,v.dq)(G)]})]})]}),(0,a.jsx)(h.i,{className:"my-4"}),(0,a.jsx)(h.r,{numItemsSm:2,className:"gap-y-2 gap-x-7",children:null==es?void 0:es.map(e=>(0,a.jsxs)("div",{className:"flex justify-between flex-col",children:[(0,a.jsxs)("div",{className:"text-xs text-neutral-500",children:[e.label," ",e.tip&&(0,a.jsx)(w.C,{children:e.tip})]}),(0,a.jsx)("div",{className:"text-neutral-900 text-sm",children:e.value})]},e.key))}),(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("div",{className:"text-sm text-slate-500 flex flex-col gap-3"}),(0,a.jsxs)("button",{className:"btn-primary px-4 h-7 flex items-center w-fit self-end justify-center gap-4 ",disabled:!ea||en,onClick:()=>ea(),children:[en&&(0,a.jsx)(j.$,{}),"Claim all"]})]}),(0,a.jsxs)(f.fC,{defaultValue:"stake",className:"",children:[(0,a.jsx)(f.aV,{className:"flex gap-6 border-b border-slate-200",children:["stake","unstake"].map(e=>(0,a.jsx)(f.xz,{value:e,className:"capitalize py-1 text-sm leading-6 text-slate-400 data-[state=active]:font-medium data-[state=active]:text-slate-900 data-[state=active]:border-b data-[state=active]:border-slate-900",children:e},e))}),(0,a.jsxs)(f.VY,{value:"stake",className:"pt-4",children:[(0,a.jsx)(y.W,{amount:W,setAmount:$,asset:R,balance:(0,v.dq)(U)}),(0,a.jsx)(k.v,{tx:"Stake",disabled:(0,m.su)(W)>U,onTxSuccess:()=>{$("")},config:{abi:n.Z,address:_,functionName:"stake",args:[(0,m.su)(W)],value:"ETH"==R?(0,m.su)(W):0n},className:"mt-2",approves:{[A]:(0,m.su)(W)},spender:_})]}),(0,a.jsxs)(f.VY,{value:"unstake",className:"pt-4",children:[(0,a.jsx)(y.W,{amount:D,setAmount:L,asset:R,balance:(0,v.dq)((null==I?void 0:I.stake)||0n),balanceTit:"Staked"}),(0,a.jsx)(k.v,{className:"mt-2",tx:"UnStake",disabled:(0,m.su)(D)>((null==I?void 0:I.stake)||0n),onTxSuccess:()=>{L("")},config:{abi:n.Z,address:_,functionName:"withdraw",args:[(0,m.su)(D)]}})]})]})]})}var S=s(77832);function EarnPage(){let e=o.iK[(0,l.B)()].find(e=>"ETH"==e.assetTokenSymbol);return e?(0,a.jsxs)("div",{className:"w-full h-full max-w-screen-xl px-4 mx-auto",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"Earn ETH"}),(0,a.jsxs)(S.Z,{numItemsSm:2,className:"gap-3 mt-4",children:[(0,a.jsx)(DualTokenCard,{vc:e,type:"buy"}),(0,a.jsx)(DualTokenCard,{vc:e,type:"sell"})]})]}):null}},76036:function(e,t,s){"use strict";s.d(t,{v:function(){return ApproveAndTx}});var a=s(57437),n=s(72009),l=s(81628),r=s(2265),i=s(71424),o=s(56926),c=s(30197);let u={},useApproves=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*BigInt(1e18),{address:a}=(0,o.mA)(),d=(0,o.t_)(),{data:m}=(0,o.py)(),[x,v]=(0,r.useState)(!1),f=(0,r.useMemo)(()=>Object.keys(e).filter(e=>e!==n.K8),[e]),[h,b]=(0,r.useState)(t&&u[t]||{}),updateAllownce=(e,s)=>{var a;t&&(u[t]={...null!==(a=u[t])&&void 0!==a?a:{},[e]:s},b(t=>({...t,[e]:s})))},{data:p}=(0,o.Ov)();(0,r.useEffect)(()=>{a&&t&&f.forEach(e=>{d.readContract({abi:c.em,address:e,functionName:"allowance",args:[a,t]}).then(t=>updateAllownce(e,t)).catch(console.error)})},[f,a,p]);let[g,k]=(0,r.useState)(!1),y=(0,r.useMemo)(()=>f.filter(t=>(e[t]||0n)>0n&&(e[t]||0n)>(h[t]||0n)),[e,f,h]),approve=async()=>{if(0!=y.length&&t)try{k(!0),v(!1);for(let e=0;e<y.length;e++){let a=y[e],n=await (null==m?void 0:m.writeContract({abi:c.em,address:a,functionName:"approve",args:[t,s]}));n&&await (null==d?void 0:d.waitForTransactionReceipt({hash:n})),updateAllownce(a,s)}i.toast.success("Approve success"),k(!1),v(!0)}catch(e){throw i.toast.error((0,l.az)(e)),k(!1),v(!1),e}};return{approve,loading:g,shouldApprove:y.length>0,isSuccess:x}};var d=s(43003),m=s(35769),x=s(72084);function ApproveAndTx(e){let{className:t,tx:s,approves:n,spender:l,requestAmount:i,config:o,toast:c=!0,disabled:u,onTxSuccess:v,onApproveSuccess:f}=e,{write:h,isLoading:b,isSuccess:p}=(0,d.R)(o,c),g=(0,r.useRef)();g.current=v,(0,r.useEffect)(()=>{g.current&&p&&g.current()},[p]);let k=u||!h||b||void 0!==o.enabled&&!o.enabled,{approve:y,shouldApprove:j,loading:w,isSuccess:N}=useApproves(n||{},l,i),S=(0,r.useRef)();return(S.current=f,(0,r.useEffect)(()=>{S.current&&N&&S.current()},[N]),j)?(0,a.jsxs)("button",{className:(0,m.m)("btn-primary flex items-center justify-center gap-4",t),onClick:y,disabled:u||!y||w,children:[w&&(0,a.jsx)(x.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,m.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>h(),disabled:k,children:[b&&(0,a.jsx)(x.$,{}),s]})}},80547:function(e,t,s){"use strict";s.d(t,{W:function(){return AssetInput}});var a=s(57437),n=s(81628),l=s(57042),r=s(16691),i=s.n(r),o=s(2265);function AssetInput(e){let{asset:t="ETH",balance:s,balanceTit:r="Balance",exchange:c,readonly:u,selected:d,onClick:m,amount:x,setAmount:v,price:f,disable:h}=e,b=(0,o.useRef)(null),p=s&&(0,n.su)("number"==typeof x?x+"":x||"")>(0,n.su)("number"==typeof s?s+"":s||"");return(0,a.jsxs)("div",{className:"relative w-full",onClick:()=>{m&&!h&&m()},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,a.jsx)(i(),{width:24,height:24,src:"/".concat(t,".svg"),alt:""}),(0,a.jsxs)("div",{className:"text-base font-medium",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:t}),f&&(0,a.jsx)("div",{className:"text-neutral-500 text-xs",children:f})]}),c&&(0,a.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",c]})]})]}),(0,a.jsx)("input",{value:x,onChange:e=>v(e.target.value),ref:b,type:"number",disabled:h,className:(0,l.Z)(u?"bg-slate-50":"bg-white",{"border-red-400 !border-2 focus:border-red-400":p,"border-slate-400  focus:border-blue-400 ":!p},"w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",step:.01,title:"",readOnly:u})]}),s&&(0,a.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,a.jsxs)("div",{children:[r,": ",s,(0,a.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{var e;v(null===(e=String(s))||void 0===e?void 0:e.replace(",","")),m&&!h&&m()},children:"Max"})]}),(0,a.jsx)("div",{className:"text-sm text-red-400",children:p?"Insufficient account balance":""})]})]})}},72084:function(e,t,s){"use strict";s.d(t,{$:function(){return Spinner}});var a=s(57437);let Spinner=e=>{let{className:t}=e;return(0,a.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},64020:function(e,t,s){"use strict";s.d(t,{C:function(){return Tip}});var a=s(57437),n=s(75224),l=s(71824);function Tip(e){let{children:t}=e;return(0,a.jsx)(n.zt,{children:(0,a.jsxs)(n.fC,{children:[(0,a.jsx)(n.xz,{asChild:!0,children:(0,a.jsx)("div",{className:"inline-block px-1",style:{verticalAlign:"text-bottom"},children:(0,a.jsx)(l.if7,{className:"inline-block w-[14px] h-[14px] stroke-slate-500"})})}),(0,a.jsx)(n.h_,{children:(0,a.jsxs)(n.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:[t,(0,a.jsx)(n.Eh,{})]})})]})})}},43003:function(e,t,s){"use strict";s.d(t,{R:function(){return useWrapContractWrite}});var a=s(81628),n=s(2265),l=s(71424),r=s(56926);function useWrapContractWrite(e){var t;let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1],i=(0,r.PJ)(e),o=(0,r.GG)(i.config),c=(0,r.BX)({hash:null===(t=o.data)||void 0===t?void 0:t.hash}),u=o.isLoading||c.isLoading,d=o.isSuccess&&c.isSuccess;return(0,n.useEffect)(()=>{s&&(o.error?l.toast.error((0,a.az)(o.error)):d&&l.toast.success("Transaction success"))},[o.error,d]),{...o,isLoading:u,isSuccess:d}}},81628:function(e,t,s){"use strict";s.d(t,{Jh:function(){return fmtPercent},Rr:function(){return fmtAAR},az:function(){return getErrorMsg},pF:function(){return aarToNumber},su:function(){return parseEthers}});var a=s(16775),n=s(36238),l=s(43977);function getErrorMsg(e){let t="Unkown";return("string"==typeof e?t=e:"string"==typeof(null==e?void 0:e.msg)?t=null==e?void 0:e.msg:"string"==typeof(null==e?void 0:e.message)&&(t=null==e?void 0:e.message),t.includes("User denied")||t.includes("user rejected transaction"))?"You declined the action in your wallet.":t.includes("transaction failed")?"Transaction failed":t}function aarToNumber(e,t){let s=(0,a.b)(e,"bigint"==typeof t?parseInt(t.toString()):t);return parseFloat(s)}function fmtAAR(e,t){return(100*aarToNumber(e,t)).toFixed()+"%"}function parseEthers(e,t){e||(e="0"),e=e.replaceAll(",","");let s="number"==typeof t?t:n.ez[t||"wei"];return(0,l.v)(e,s)}function fmtPercent(e,t,s){let n="bigint"==typeof t?parseInt(t.toString()):t,l=(0,a.b)(100n*e,n);return parseFloat(l.replaceAll(",","")).toFixed(s)+"%"}},20373:function(e,t,s){"use strict";s.d(t,{ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var a=s(79352);let displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return(Math.floor(Number((0,a.d)(e))*s)/s).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},displayBalanceWithoutFormat=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return String(Math.floor(Number((0,a.d)(e))*s)/s)}}},function(e){e.O(0,[27,61,986,335,129,818,602,857,203,971,472,744],function(){return e(e.s=62166)}),_N_E=e.O()}]);