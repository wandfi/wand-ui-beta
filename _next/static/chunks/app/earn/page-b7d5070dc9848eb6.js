(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{18530:function(e,t,a){Promise.resolve().then(a.bind(a,76010))},76010:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var n=a(9268),s=a(22828),l=a(85418),i=a(56883),r=a(82899),o=a(43534),c=a(19707),u=a(91185),d=a(31648),m=a(68010),v=a(42485),f=a(82861),b=a(12120),x=a(35931),h=a(76394),g=a.n(h),p=a(86006),y=a(83455),j=a(87471),k=a(78592),N=a(32100);function w(e){let{symbol:t,value:a,decimals:s}=e;return(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,f.dq)(a,s),(0,n.jsx)(g(),{className:"inline-block",alt:"usb",width:16,height:16,src:"/".concat(t,".svg")})]})}function S(e){var t,a;let{type:h,vc:S}=e,T="buy"==h,_=T?i.O[(0,l.B)()]:S.assetTokenAddress,A=T?"USB":S.assetTokenSymbol,C=T?S.assetTokenSymbol:"USB",R=T?"Buy ".concat(S.assetTokenSymbol," Low"):"Sell ".concat(S.assetTokenSymbol," High"),M=T?S.ptyPoolBelowAddress:S.ptyPoolAboveAddress,{prices:$,balances:E,earns:B,vaultsState:P,assetLocked:I,vaultUSBTotal:V}=(0,p.useContext)(v.FetcherContext),q=P[S.vault],D=B[M],z=(0,p.useMemo)(()=>{var e;return null==E?void 0:null===(e=E.find(e=>e.symbol===A))||void 0===e?void 0:e.balance},[E,A]),[F,Z]=(0,p.useState)(""),[W,L]=(0,p.useState)(""),U=T?S.xTokenSymbol:S.assetTokenSymbol,K=T?S.assetTokenSymbol:S.xTokenSymbol,O=(0,p.useMemo)(()=>{var e,t;return(null!==(e=null==D?void 0:D.totalStake)&&void 0!==e?e:0n)*(null!==(t=$[A])&&void 0!==t?t:r.Pq)/r.Pq},[$[A],null==D?void 0:D.totalStake]),Y=T?null==q?void 0:q.AARS:null==q?void 0:q.AARU,H=null!==(t=I[S.assetTokenSymbol])&&void 0!==t?t:0n,J=null!==(a=V[S.vault])&&void 0!==a?a:0n,G=(0,p.useMemo)(()=>Y&&q.AARDecimals&&0n!=H&&0n!=J?Y*J*r.Pq/q.AARDecimals/H/BigInt(1e9):$[S.assetTokenSymbol],[Y,J,q.AARDecimals,H]),Q=function(e){let{address:t,token:a}=e,n=a==o.K8,{data:s}=(0,c.KQ)({address:t,enabled:n}),{data:l}=(0,c.do)({abi:u.em,address:a,functionName:"balanceOf",args:[t],enabled:!n});return n?null==s?void 0:s.value:l}({address:M,token:T?S.assetTokenAddress:S.xTokenAddress}),X=(0,p.useMemo)(()=>{var e;let t=null!==(e=null==D?void 0:D.totalStake)&&void 0!==e?e:0n;return 0n==t?"0.00%":(0,m.Jh)((null!=Q?Q:0n)*r.Pq/t,18,2)},[null==D?void 0:D.totalStake,Q]),{data:ee}=(0,c.do)({abi:s.Z,address:M,functionName:"getRecentStakeYields"}),et=(0,p.useMemo)(()=>{var e;if(!ee||0==ee.length||!O||0n==O)return"0.00%";let[t,a]=ee.reduce((e,t)=>[e[0]+t[0],e[1]+t[1]],[0n,0n]),n=BigInt(31536e3),s=a*(null!==(e=$[U])&&void 0!==e?e:0n)*n/t/r.Pq;return(0,m.Jh)(s*r.Pq/O,18,2)},[ee,$[U],O]),ea=(0,p.useMemo)(()=>{var e,t;let a=T?[{key:"staked",label:"".concat(A," Staked"),value:(0,n.jsx)(w,{symbol:A,value:null==D?void 0:D.stake})},{key:"successfully_bought",label:"Successfully Bought",value:(0,n.jsx)(w,{symbol:C,value:null==D?void 0:D.match})},{key:"stake_earned",label:"".concat(U," earned"),value:(0,n.jsx)(w,{symbol:U,value:null==D?void 0:D.earn,decimals:6})},{key:"transacation_reward_pool",label:"Transaction Reward Pool",value:(0,n.jsx)(w,{symbol:K,value:Q,decimals:6})},{key:"stake_yield_apr",label:"".concat(U," yield APR"),value:et},{key:"discount_rate",label:"Discount Rate",value:"".concat(X," (Est.)")},{key:"usb_rebasable_apr",label:"USB Rebasable APR",value:(0,m.Rr)(null!==(e=q.Y)&&void 0!==e?e:0n,null!==(t=q.settingsDecimals)&&void 0!==t?t:0)}]:[{key:"staked",label:"".concat(A," Staked"),value:(0,n.jsx)(w,{symbol:A,value:null==D?void 0:D.stake})},{key:"successfully_bought",label:"Successfully Bought",value:(0,n.jsx)(w,{symbol:C,value:null==D?void 0:D.match})},{key:"stake_earned",label:"".concat(U," earned"),value:(0,n.jsx)(w,{symbol:U,value:null==D?void 0:D.earn,decimals:6})},{key:"transacation_reward_pool",label:"Transaction Reward Pool",value:(0,n.jsx)(w,{symbol:K,value:Q,decimals:6})},{key:"stake_yield_apr",label:"".concat(U," yield APR"),value:et},{key:"discount_rate",label:"Discount Rate",value:"".concat(X," (Est.)")}];return a},[D,Q]),{write:en,isLoading:es}=(0,d.R)({abi:s.Z,address:M,functionName:"claimAll"});return(0,n.jsxs)("div",{className:"card flex flex-col",children:[(0,n.jsxs)("div",{className:"relative w-fit",children:[(0,n.jsx)(g(),{width:40,height:40,src:"/".concat(A,".svg"),alt:""}),(0,n.jsx)(g(),{className:"absolute -right-2 -bottom-2",width:24,height:24,src:"/".concat(C,".svg"),alt:""})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("h6",{className:"text-base leading-6 font-bold mt-6",children:R||"title"}),(0,n.jsxs)("div",{className:"text-slate-500 text-sm",children:["TVL: $",(0,f.dq)(O)]})]}),(0,n.jsxs)("div",{className:"flex flex-col text-sm mt-6 gap-3",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("div",{className:"flex items-center gap-1",children:"Current ".concat(S.assetTokenSymbol," price")}),(0,n.jsxs)("div",{className:"font-semibold",children:["$",(0,f.dq)($[S.assetTokenSymbol])]})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("div",{className:"flex items-center gap-1",children:"Target Price"}),(0,n.jsxs)("div",{className:"font-semibold",children:["$",(0,f.dq)(G)]})]})]}),(0,n.jsx)(x.iz,{}),(0,n.jsx)(x.rj,{numItemsSm:2,className:"gap-y-3 gap-x-7",children:null==ea?void 0:ea.map(e=>(0,n.jsxs)("div",{className:"flex justify-between flex-col",children:[(0,n.jsx)("div",{className:"text-xs text-neutral-500",children:e.label}),(0,n.jsx)("div",{className:"text-neutral-900 text-sm mt-1",children:e.value})]},e.key))}),(0,n.jsx)("div",{className:"flex-1"}),(0,n.jsxs)("div",{className:"flex justify-between mt-6",children:[(0,n.jsx)("div",{className:"text-sm text-slate-500 flex flex-col gap-3"}),(0,n.jsxs)("button",{className:"btn-secondary h-7 flex items-center w-fit self-end justify-center gap-4 ",disabled:!en||es,onClick:()=>en(),children:[es&&(0,n.jsx)(N.$,{}),"Claim all"]})]}),(0,n.jsxs)(b.fC,{defaultValue:"stake",className:"mt-6",children:[(0,n.jsx)(b.aV,{className:"flex gap-6 border-b border-slate-200",children:["stake","unstake"].map(e=>(0,n.jsx)(b.xz,{value:e,className:"capitalize py-1 text-sm leading-6 text-slate-400 data-[state=active]:font-medium data-[state=active]:text-slate-900 data-[state=active]:border-b data-[state=active]:border-slate-900",children:e},e))}),(0,n.jsxs)(b.VY,{value:"stake",className:"pt-4",children:[(0,n.jsx)(k.W,{amount:F,setAmount:Z,asset:A,balance:(0,f.dq)(z)}),(0,n.jsx)(y.v,{tx:"Stake",config:{abi:s.Z,address:M,functionName:"stake",args:[(0,m.su)(F)],value:"ETH"==A?(0,m.su)(F):0n},approves:{[_]:(0,m.su)(F)},spender:M})]}),(0,n.jsxs)(b.VY,{value:"unstake",className:"pt-4",children:[(0,n.jsx)(k.W,{amount:W,setAmount:L,asset:A}),(0,n.jsx)(j.c,{className:"mt-12",tx:"UnStake",config:{abi:s.Z,address:M,functionName:"withdraw",args:[(0,m.su)(W)]}})]})]})]})}function T(){let e=o.iK[(0,l.B)()].find(e=>"ETH"==e.assetTokenSymbol);return e?(0,n.jsx)("div",{children:(0,n.jsxs)(x.rj,{numItemsSm:2,className:"gap-3 mt-6",children:[(0,n.jsx)(S,{vc:e,type:"buy"}),(0,n.jsx)(S,{vc:e,type:"sell"})]})}):null}},83455:function(e,t,a){"use strict";a.d(t,{v:function(){return b}});var n=a(9268),s=a(43534),l=a(68010),i=a(86006),r=a(179),o=a(19707),c=a(91185);let u={},d=function(e,t){var a;let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*BigInt(1e18),{address:d}=(0,o.mA)(),m=(0,o.t_)(),{data:v}=(0,o.py)(),f=(0,i.useMemo)(()=>Object.keys(e).filter(e=>e!==s.K8),[e]),[b,x]=(0,i.useState)(null!==(a=u[t])&&void 0!==a?a:{}),h=(e,a)=>{var n;u[t]={...null!==(n=u[t])&&void 0!==n?n:{},[e]:a},x(t=>({...t,[e]:a}))},{data:g}=(0,o.Ov)();(0,i.useEffect)(()=>{d&&f.forEach(e=>{m.readContract({abi:c.em,address:e,functionName:"allowance",args:[d,t]}).then(t=>h(e,t)).catch(console.error)})},[f,d,g]);let[p,y]=(0,i.useState)(!1),j=(0,i.useMemo)(()=>f.filter(t=>(e[t]||0n)>0n&&(e[t]||0n)>(b[t]||0n)),[e,f]),k=async()=>{if(0!=j.length)try{y(!0);for(let e=0;e<j.length;e++){let a=j[e],s=await (null==v?void 0:v.writeContract({abi:c.em,address:a,functionName:"approve",args:[t,n]}));s&&await (null==m?void 0:m.waitForTransactionReceipt({hash:s})),h(a,n)}y(!1),r.toast.success("Approve success")}catch(e){throw r.toast.error((0,l.az)(e)),y(!1),e}};return{approve:k,loading:p,shouldApprove:j.length>0}};var m=a(87471),v=a(32100),f=a(2002);function b(e){let{className:t,tx:a,approves:s,spender:l,requestAmount:i,config:r,toast:o=!0}=e,{approve:c,shouldApprove:u,loading:b}=d(s,l,i),x=!c||b||void 0!==r.enabled&&!r.enabled;return u?(0,n.jsxs)("button",{className:(0,f.m)("btn-primary flex items-center justify-center gap-4",t),onClick:c,disabled:x,children:[b&&(0,n.jsx)(v.$,{}),"Approve"]}):(0,n.jsx)(m.c,{tx:a,config:r,toast:o,className:t})}},87471:function(e,t,a){"use strict";a.d(t,{c:function(){return r}});var n=a(9268),s=a(31648),l=a(32100),i=a(2002);function r(e){let{className:t,config:a,toast:r=!0,tx:o}=e,{write:c,isLoading:u}=(0,s.R)(a,r);return(0,n.jsxs)("button",{className:(0,i.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>c(),disabled:!c||u,children:[u&&(0,n.jsx)(l.$,{}),o]})}},78592:function(e,t,a){"use strict";a.d(t,{W:function(){return o}});var n=a(9268),s=a(63831),l=a(76394),i=a.n(l),r=a(86006);function o(e){let{asset:t="ETH",balance:a,exchange:l,readonly:o,selected:c,onClick:u,amount:d,setAmount:m,price:v,disable:f}=e,b=(0,r.useRef)(null);return(0,n.jsxs)("div",{className:"relative",onClick:()=>{u&&!f&&u()},children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,n.jsx)(i(),{width:24,height:24,src:"/".concat(t,".svg"),alt:""}),(0,n.jsxs)("div",{className:"text-base font-medium",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:t}),v&&(0,n.jsx)("div",{className:"text-neutral-500 text-xs",children:v})]}),l&&(0,n.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",l]})]})]}),(0,n.jsx)("input",{value:d,onChange:e=>m(e.target.value),ref:b,type:"number",disabled:f,className:(0,s.Z)("w-full h-16 text-right pr-4 font-bold text-2xl border text-slate-700 rounded-md focus:ring-2 focus:outline-blue-500",o?"bg-slate-50":"bg-white",c?"border-indigo-500":"border-slate-200"),placeholder:"0.00",step:.01,readOnly:o})]}),a&&(0,n.jsxs)("div",{className:"text-slate-400 pl-3 mt-1 text-sm",children:["Balance: ",a,(0,n.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{var e;m(null===(e=String(a))||void 0===e?void 0:e.replace(",","")),u&&!f&&u()},children:"Max"})]})]})}},32100:function(e,t,a){"use strict";a.d(t,{$:function(){return s}});var n=a(9268);let s=e=>{let{className:t}=e;return(0,n.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},31648:function(e,t,a){"use strict";a.d(t,{R:function(){return r}});var n=a(68010),s=a(86006),l=a(179),i=a(19707);function r(e){var t;let a=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=(0,i.PJ)(e),o=(0,i.GG)(r.config),c=(0,i.BX)({hash:null===(t=o.data)||void 0===t?void 0:t.hash}),u=o.isLoading||c.isLoading,d=o.isSuccess&&c.isSuccess;return(0,s.useEffect)(()=>{a&&(o.error?l.toast.error((0,n.az)(o.error)):d&&l.toast.success("Transaction success"))},[o.error,d]),{...o,isLoading:u,isSuccess:d}}},68010:function(e,t,a){"use strict";a.d(t,{Jh:function(){return u},Rr:function(){return o},az:function(){return i},pF:function(){return r},su:function(){return c}});var n=a(78188),s=a(26359),l=a(30411);function i(e){let t="Unkown";return("string"==typeof e?t=e:"string"==typeof(null==e?void 0:e.msg)?t=null==e?void 0:e.msg:"string"==typeof(null==e?void 0:e.message)&&(t=null==e?void 0:e.message),t.includes("User denied")||t.includes("user rejected transaction"))?"You declined the action in your wallet.":t.includes("transaction failed")?"Transaction failed":t}function r(e,t){let a=(0,n.b)(e,"bigint"==typeof t?parseInt(t.toString()):t);return parseFloat(a)}function o(e,t){return(100*r(e,t)).toFixed()+"%"}function c(e,t){e||(e="0"),e=e.replaceAll(",","");let a="number"==typeof t?t:s.ez[t||"wei"];return(0,l.v)(e,a)}function u(e,t,a){let s=(0,n.b)(100n*e,t);return parseFloat(s.replaceAll(",","")).toFixed(a)+"%"}},82861:function(e,t,a){"use strict";a.d(t,{ZM:function(){return l},dq:function(){return s}});var n=a(30633);let s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let a=10**t;return(Math.floor(Number((0,n.d)(e))*a)/a).toLocaleString("en-US",{maximumFractionDigits:t})},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let a=10**t;return String(Math.floor(Number((0,n.d)(e))*a)/a)}},12120:function(e,t,a){"use strict";a.d(t,{VY:function(){return A},aV:function(){return T},fC:function(){return S},xz:function(){return _}});var n=a(40431),s=a(86006),l=a(1928),i=a(38899),r=a(18294),o=a(51868),c=a(76899),u=a(84924),d=a(85740),m=a(70757);let v="Tabs",[f,b]=(0,i.b)(v,[r.Pc]),x=(0,r.Pc)(),[h,g]=f(v),p=(0,s.forwardRef)((e,t)=>{let{__scopeTabs:a,value:l,onValueChange:i,defaultValue:r,orientation:o="horizontal",dir:v,activationMode:f="automatic",...b}=e,x=(0,u.gm)(v),[g,p]=(0,d.T)({prop:l,onChange:i,defaultProp:r});return(0,s.createElement)(h,{scope:a,baseId:(0,m.M)(),value:g,onValueChange:p,orientation:o,dir:x,activationMode:f},(0,s.createElement)(c.WV.div,(0,n.Z)({dir:x,"data-orientation":o},b,{ref:t})))}),y=(0,s.forwardRef)((e,t)=>{let{__scopeTabs:a,loop:l=!0,...i}=e,o=g("TabsList",a),u=x(a);return(0,s.createElement)(r.fC,(0,n.Z)({asChild:!0},u,{orientation:o.orientation,dir:o.dir,loop:l}),(0,s.createElement)(c.WV.div,(0,n.Z)({role:"tablist","aria-orientation":o.orientation},i,{ref:t})))}),j=(0,s.forwardRef)((e,t)=>{let{__scopeTabs:a,value:i,disabled:o=!1,...u}=e,d=g("TabsTrigger",a),m=x(a),v=N(d.baseId,i),f=w(d.baseId,i),b=i===d.value;return(0,s.createElement)(r.ck,(0,n.Z)({asChild:!0},m,{focusable:!o,active:b}),(0,s.createElement)(c.WV.button,(0,n.Z)({type:"button",role:"tab","aria-selected":b,"aria-controls":f,"data-state":b?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:v},u,{ref:t,onMouseDown:(0,l.M)(e.onMouseDown,e=>{o||0!==e.button||!1!==e.ctrlKey?e.preventDefault():d.onValueChange(i)}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&d.onValueChange(i)}),onFocus:(0,l.M)(e.onFocus,()=>{let e="manual"!==d.activationMode;b||o||!e||d.onValueChange(i)})})))}),k=(0,s.forwardRef)((e,t)=>{let{__scopeTabs:a,value:l,forceMount:i,children:r,...u}=e,d=g("TabsContent",a),m=N(d.baseId,l),v=w(d.baseId,l),f=l===d.value,b=(0,s.useRef)(f);return(0,s.useEffect)(()=>{let e=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.createElement)(o.z,{present:i||f},({present:a})=>(0,s.createElement)(c.WV.div,(0,n.Z)({"data-state":f?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":m,hidden:!a,id:v,tabIndex:0},u,{ref:t,style:{...e.style,animationDuration:b.current?"0s":void 0}}),a&&r))});function N(e,t){return`${e}-trigger-${t}`}function w(e,t){return`${e}-content-${t}`}let S=p,T=y,_=j,A=k},2002:function(e,t,a){"use strict";a.d(t,{m:function(){return l}});var n=a(35446),s=a(68741),l=(0,n.I)(s._)},30411:function(e,t,a){"use strict";function n(e,t){let[a,n="0"]=e.split("."),s=a.startsWith("-");if(s&&(a=a.slice(1)),n=n.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${n}`))&&(a=`${BigInt(a)+1n}`),n="";else if(n.length>t){let[e,s,l]=[n.slice(0,t-1),n.slice(t-1,t),n.slice(t)],i=Math.round(Number(`${s}.${l}`));(n=i>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${i}`).length>t&&(n=n.slice(1),a=`${BigInt(a)+1n}`),n=n.slice(0,t)}else n=n.padEnd(t,"0");return BigInt(`${s?"-":""}${a}${n}`)}a.d(t,{v:function(){return n}})}},function(e){e.O(0,[482,656,728,948,119,778,790,624,342,253,961,560],function(){return e(e.s=18530)}),_N_E=e.O()}]);