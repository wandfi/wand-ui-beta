(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{33490:function(e,t,s){Promise.resolve().then(s.bind(s,23159))},23159:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return DiscountPage}});var a=s(57437),n=s(76036),l=s(80547),r=s(30050),i=s(91056),c=s(72009),o=s(8580),u=s(12831),d=s(81628),x=s(15898),m=s(20373),f=s(16691),h=s.n(f),p=s(2265),v=s(41697),g=s(35769);function DiscountPage(){let{vaultsState:e,balances:t,prices:s,vaultsDiscount:f}=(0,p.useContext)(x.g),b=c.iK[(0,i.BV)()].find(e=>"ETH"==e.assetTokenSymbol),j=e[b.assetTokenSymbol],w=f[b.vault],A=w?"Discount available":"No discount",N=!w,y=(0,d.ok)(s,b.xTokenSymbol),S=[{value:"ETHx",label:"ETHx"},{value:"USDB",label:"USDB"}],k=t.USB,[R,T]=(0,p.useMemo)(()=>{if(!j)return["50%","50%"];let e=(0,d.pF)(j.AARU,j.AARDecimals),t=(0,d.pF)(j.aar,j.AARDecimals),s=(0,d.pF)(j.AARS,j.AARDecimals),a=(0,d.pF)(j.AART,j.AARDecimals),n=e/2,toPercent=t=>(100*Math.max(0,Math.min(1,(t-n)/(e-n)))).toFixed(2)+"%",l=toPercent(t);return N?[l,toPercent(s)]:[l,toPercent(a)]},[null==j?void 0:j.AARU,null==j?void 0:j.aar,null==j?void 0:j.AARS,null==j?void 0:j.AART,N]),[B,D]=(0,p.useState)(""),[C,E]=(0,p.useState)("ETHx"),M=(0,p.useMemo)(()=>({vc:b,watch:!0,abi:r.Y,address:c.jX[(0,i.BV)()],functionName:"calcUsbToLeveragedTokens",args:[b.vault,(0,d.su)(B)]}),[b,B]),{data:U}=(0,u.D2)(M),P=(0,p.useMemo)(()=>({vc:b,watch:!0,abi:r.Y,address:c.jX[(0,i.BV)()],functionName:"calcUsbToLeveragedTokens",args:[b.vault,(0,d.su)("1")]}),[b]),{data:W}=(0,u.D2)(P),F=(0,m.dq)((0,d.ok)(U,[1])),L=(0,d.ok)(W,[1]),V=(0,p.useMemo)(()=>0n==L?0n:(0,d.su)("1")*o.Pq/L,[L]),q=(0,p.useMemo)(()=>{let e=s[b.xTokenSymbol];return!e||0n==e||0n==V||V>=e?"0.00%":(0,d.Jh)((e-V)*o.Pq/e,18,2)},[s[b.xTokenSymbol],V]),H=(0,a.jsxs)("div",{style:{position:"relative",left:R,transform:"translate(-50%,0)"},className:"flex flex-col items-center w-fit rounded-sm",children:[(0,a.jsxs)("div",{className:"text-xs flex flex-col justify-center items-center p-1.5 px-4",children:[(0,a.jsx)("span",{className:"text-neutral-400",children:"Current AAR"}),(0,a.jsx)("span",{className:"font-medium",children:(0,d.Rr)(null==j?void 0:j.aar,null==j?void 0:j.AARDecimals)})]}),(0,a.jsx)("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z",fill:"#262626"})})]}),_=(0,a.jsxs)("div",{style:{position:"relative",left:T,transform:"translate(-50%,0)"},className:"flex flex-col items-center w-fit rounded-sm",children:[(0,a.jsx)("svg",{className:"rotate-180",width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z",fill:N?"#E83B3B":"#54E83B"})}),(0,a.jsxs)("div",{className:"text-xs flex flex-col justify-center items-center p-1.5 px-4",children:[(0,a.jsxs)("span",{className:"font-medium",children:["AAR=",N?(0,d.Rr)(null==j?void 0:j.AARS,null==j?void 0:j.AARDecimals):(0,d.Rr)(null==j?void 0:j.AART,null==j?void 0:j.AARDecimals)]}),(0,a.jsx)("span",{className:"text-neutral-400",children:N?"Trigger discount":"Discount end"})]})]}),ValutArea=e=>{let{discountEnable:t,imageSrc:s,token:n}=e;return(0,a.jsxs)("div",{className:"bg-white border border-neutral-200 rounded-3xl flex p-4 w-full mb-[30px]",children:[(0,a.jsxs)("div",{className:"w-[180px] flex items-center",children:[(0,a.jsx)(h(),{src:s,width:54,height:54,className:"mr-[10px]",alt:""}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{className:"text-xl font-bold",children:[n," Vault"]}),(0,a.jsx)("div",{className:"text-sm flex items-center gap-2",children:(0,a.jsxs)("div",{className:"flex items-center text-neutral-700 gap-1",children:[(0,a.jsx)("div",{className:(0,g.m)("w-3 h-3 rounded-full",t?"bg-violet-500":"bg-green-500")}),A]})})]})]}),(0,a.jsxs)("div",{className:"w-[calc(100%-170px)] p-4 rounded-lg flex flex-col gap-2",children:[H,(0,a.jsx)("div",{className:"h-px bg-[#64748B] after:content-['AAR'] after:inline-block after:text-right after:w-full after:text-xs after:text-[#64748B]"}),_]})]})};return(0,a.jsxs)("div",{className:"mx-auto max-w-screen-lg p-4",children:[(0,a.jsxs)("div",{className:"bg-indigo-50 p-6 lg:p-12 rounded-3xl relative",children:[(0,a.jsx)("h3",{className:"text-indigo-500 font-medium text-xl",children:"Discount Offer"}),(0,a.jsx)("div",{className:"text-indigo-900 mt-4 lg:w-3/4",children:"Due to fluctuations in the prices of underlying assets, when the AAR decreases, the protocol will offer users the opportunity to purchase xToken at a discount with $USB. This means that you can engage in arbitrage."}),(0,a.jsx)(h(),{src:"/discount.png",width:400,height:200,className:"lg:absolute lg:-right-8 lg:top-1/2 lg:-translate-y-1/2 mt-8",alt:""})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8 p-6",children:[(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)(ValutArea,{discountEnable:w,imageSrc:"./ETH.svg",token:b.assetTokenSymbol}),(0,a.jsx)(ValutArea,{discountEnable:w,imageSrc:"./USDB.svg",token:"USDB"})]}),(0,a.jsxs)("div",{className:"w-full bg-white border border-neutral-200 p-[30px] pt-[60px] rounded-3xl mb-[30px]",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center gap-2 w-full mx-auto",children:[(0,a.jsx)(l.W,{asset:"USB",amount:B,setAmount:D,balance:k,exchange:(0,m.dq)((0,d.su)(B)*(0,d.ok)(s,"USB",o.Pq)/o.Pq)}),(0,a.jsxs)("div",{className:"flex items-center justify-center w-full",children:[(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)(v.gPZ,{className:"w-6 h-6 text-neutral-500  border border-neutral-200 rounded-full my-[10px]"}),(0,a.jsx)("div",{className:"flex-1"})]}),(0,a.jsxs)("div",{className:"w-full flex-1 text-right text-neutral-700 text-sm whitespace-nowrap",children:["Disount Rate: ",N?"N/A":q]}),(0,a.jsx)(l.W,{asset:b.xTokenSymbol,amount:F,exchange:(0,m.dq)(y*(0,d.ok)(U,[1])/o.Pq),readonly:!0,hasInput:!0,options:S,defaultValue:S[0],onChange:e=>{console.log(e.value),E(e.value)}})]}),(0,a.jsx)(n.v,{tx:"Swap",disabled:(0,d.su)(B)>k||!w,onTxSuccess:()=>{D("")},config:{vc:b,abi:r.WW,address:b.vault,functionName:"usbToLeveragedTokens",args:[(0,d.su)(B)],enabled:w},approves:{[c.O1[(0,i.BV)()]]:(0,d.su)(B)},spender:b.vault})]})]})]})}},76036:function(e,t,s){"use strict";s.d(t,{v:function(){return ApproveAndTx}});var a=s(57437),n=s(72009),l=s(81628),r=s(2265),i=s(71424),c=s(56926),o=s(51143);let u={},useApproves=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*BigInt(1e18),{address:a}=(0,c.mA)(),d=(0,c.t_)(),{data:x}=(0,c.py)(),[m,f]=(0,r.useState)(!1),h=(0,r.useMemo)(()=>Object.keys(e).filter(e=>e!==n.K8),[e]),[p,v]=(0,r.useState)(t&&u[t]||{}),updateAllownce=(e,s)=>{t&&(u[t]={...u[t]||{},[e]:s},v(t=>({...t,[e]:s})))},{data:g}=(0,c.Ov)();(0,r.useEffect)(()=>{a&&t&&h.forEach(e=>{d.readContract({abi:o.em,address:e,functionName:"allowance",args:[a,t]}).then(t=>updateAllownce(e,t)).catch(console.error)})},[h,a,g]);let[b,j]=(0,r.useState)(!1),w=(0,r.useMemo)(()=>h.filter(t=>(0,l.ok)(e,t)>0n&&(0,l.ok)(e,t)>(0,l.ok)(p,t)),[e,h,p]),approve=async()=>{if(0!=w.length&&t)try{j(!0),f(!1);for(let a=0;a<w.length;a++){let n=w[a],l=!1===s?e[n]:s,r=await (null==x?void 0:x.writeContract({abi:o.em,address:n,functionName:"approve",args:[t,l]}));r&&await (null==d?void 0:d.waitForTransactionReceipt({hash:r})),updateAllownce(n,l)}i.A.success("Approve success"),j(!1),f(!0)}catch(e){throw i.A.error((0,l.az)(e)),j(!1),f(!1),e}};return{approve,loading:b,shouldApprove:w.length>0,isSuccess:m}};var d=s(43003),x=s(35769),m=s(72084);function ApproveAndTx(e){let{className:t,tx:s,approves:n,spender:l,requestAmount:i,config:c,toast:o=!0,disabled:u,onTxSuccess:f,onApproveSuccess:h}=e,{write:p,isDisabled:v,isLoading:g,isSuccess:b}=(0,d.R)(c,o),j=(0,r.useRef)();j.current=f,(0,r.useEffect)(()=>{j.current&&b&&j.current()},[b]);let w=u||v||g||!1===c.enabled,{approve:A,shouldApprove:N,loading:y,isSuccess:S}=useApproves(n||{},l,i),k=(0,r.useRef)();return(k.current=h,(0,r.useEffect)(()=>{k.current&&S&&k.current()},[S]),N)?(0,a.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:A,disabled:u||!A||y,children:[y&&(0,a.jsx)(m.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>p(),disabled:w,children:[g&&(0,a.jsx)(m.$,{}),s]})}},80547:function(e,t,s){"use strict";s.d(t,{W:function(){return AssetInput}});var a=s(57437),n=s(81628),l=s(20373),r=s(57042),i=s(16691),c=s.n(i),o=s(2265),u=s(16775),d=s(82288);function AssetInput(e){let{asset:t="ETH",balance:s,balanceTit:i="Balance",balanceDecimals:x=18,exchange:m,readonly:f,selected:h,onClick:p,amount:v,setAmount:g,price:b,disable:j,hasInput:w=!1,options:A,onChange:N=()=>{},defaultValue:y,balanceClassName:S=""}=e,k=(0,o.useRef)(null),R=void 0!==s&&(0,n.su)("number"==typeof v?v+"":v||"")>("bigint"==typeof s?s:0n);return(0,a.jsxs)("div",{className:"relative w-full",onClick:()=>{p&&!j&&p()},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,a.jsx)(c(),{width:24,height:24,src:"/".concat(t,".svg"),alt:""}),(0,a.jsxs)("div",{className:"text-base font-medium",children:[(0,a.jsxs)("div",{children:[w?(0,a.jsx)(d.ZP,{options:A,onChange:N,defaultValue:y,styles:{control:(e,t)=>({...e,border:"0px",minHeight:"24px",padding:"0px",background:"rgb(248 250 252)"})}}):(0,a.jsx)("div",{children:t}),b&&(0,a.jsx)("div",{className:"text-neutral-500 text-xs",children:b})]}),m&&(0,a.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",m]})]})]}),(0,a.jsx)("input",{value:v,onChange:e=>g(e.target.value),ref:k,type:"number",disabled:j,className:(0,r.Z)(f?"bg-slate-50":"bg-white",{"border-red-400 !border-2 focus:border-red-400":R,"border-slate-400  focus:border-blue-400 ":!R},"w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",step:.01,title:"",readOnly:f})]}),void 0!=s&&(0,a.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,a.jsxs)("div",{className:S,children:[(0,a.jsxs)("span",{children:[i,": ",(0,l.Rp)(s,3,x)]}),(0,a.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,u.b)(s,x);g(e),p&&!j&&p()},children:"Max"})]}),(0,a.jsx)("div",{className:"text-sm text-red-400",children:R?"Insufficient account balance":""})]})]})}},72084:function(e,t,s){"use strict";s.d(t,{$:function(){return Spinner}});var a=s(57437);let Spinner=e=>{let{className:t}=e;return(0,a.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},43003:function(e,t,s){"use strict";s.d(t,{R:function(){return useWrapContractWrite}});var a=s(81628),n=s(2265),l=s(71424),r=s(56926),i=s(12831);function useWrapContractWrite(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[s,c]=(0,n.useState)(!1),[o,u]=(0,n.useState)(!1),d=(0,r.t_)(),{data:x}=(0,r.py)(),m=!d||!x||!x.account||s||!e||"object"==typeof e&&!1==e.enabled,write=async()=>{if(!m){c(!0),u(!1);try{let s="function"==typeof e?await e():await (0,i.zp)(e),a=await x.writeContract({account:x.account,address:s.address,abi:s.abi,functionName:s.functionName,args:s.args,value:s.value}),n=await d.waitForTransactionReceipt({hash:a});if("success"!==n.status)throw"Transaction reverted";u(!0),t&&l.A.success("Transaction success")}catch(e){t&&l.A.error((0,a.az)(e))}c(!1)}};return{write,isDisabled:m,isLoading:s,isSuccess:o}}},20373:function(e,t,s){"use strict";s.d(t,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var a=s(16775),n=s(79352);let displayBalanceWithUnit=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,s=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let n=10**t;return(Math.floor(Number((0,a.b)(e,s))*n)/n).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return(Math.floor(Number((0,n.d)(e))*s)/s).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},displayBalanceWithoutFormat=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return String(Math.floor(Number((0,n.d)(e))*s)/s)}}},function(e){e.O(0,[866,33,986,232,510,240,725,619,356,322,971,472,744],function(){return e(e.s=33490)}),_N_E=e.O()}]);