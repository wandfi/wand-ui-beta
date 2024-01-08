(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{33490:function(e,s,t){Promise.resolve().then(t.bind(t,23159))},23159:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return DiscountPage}});var a=t(57437),l=t(76036),n=t(80547),i=t(1150),r=t(90228),o=t(91056),c=t(72009),d=t(85156),u=t(8580),x=t(81628),m=t(99057),f=t(20373),h=t(16691),g=t.n(h),v=t(2265),p=t(41697),j=t(35769),A=t(56926);function DiscountPage(){let{vaultsMode:e,vaultsState:s,balances:t,prices:h}=(0,v.useContext)(m.FetcherContext),b=c.iK[(0,o.B)()].find(e=>"ETH"==e.assetTokenSymbol),w=e[b.assetTokenSymbol],N=2==w,R=N?"Discount available":"No discount",T=s[b.assetTokenSymbol],k=!N,y=(0,x.ok)(h,b.xTokenSymbol),S=(0,v.useMemo)(()=>{var e;return null==t?void 0:null===(e=t.find(e=>"USB"===e.symbol))||void 0===e?void 0:e.balance},[t]),[D,P]=(0,v.useMemo)(()=>{let e=(0,x.pF)(T.AARU,T.AARDecimals),s=(0,x.pF)(T.aar,T.AARDecimals),t=(0,x.pF)(T.AARS,T.AARDecimals),a=(0,x.pF)(T.AART,T.AARDecimals),l=e/2,toPercent=s=>(100*Math.max(0,Math.min(1,(s-l)/(e-l)))).toFixed(2)+"%",n=toPercent(s);return k?[n,toPercent(t)]:[n,toPercent(a)]},[T.AARU,T.aar,T.AARS,T.AART,k]),[B,q]=(0,v.useState)(""),{data:L}=(0,A.do)({watch:!0,abi:r.Z,address:c.jX[(0,o.B)()],functionName:"calcUsbToLeveragedTokens",args:[b.vault,(0,x.su)(B)]}),{data:M}=(0,A.do)({watch:!0,abi:r.Z,address:c.jX[(0,o.B)()],functionName:"calcUsbToLeveragedTokens",args:[b.vault,(0,x.su)("1")]}),U=(0,f.dq)((0,x.ok)(L,[1])),_=(0,x.ok)(M,[1]),F=(0,v.useMemo)(()=>0n==_?0n:(0,x.su)("1")*u.Pq/_,[_]),Z=(0,v.useMemo)(()=>{let e=h[b.xTokenSymbol];return!e||0n==e||0n==F||F>=e?"0.00%":(0,x.Jh)((e-F)*u.Pq/e,18,2)},[h[b.xTokenSymbol],F]),C=(0,a.jsxs)("div",{style:{position:"relative",left:D,transform:"translate(-50%,0)"},className:"flex flex-col items-center w-fit rounded-sm",children:[(0,a.jsxs)("div",{className:"text-xs text-white flex flex-col justify-center items-center bg-neutral-800 p-1.5 px-4 rounded-md",children:[(0,a.jsx)("span",{className:"text-neutral-400",children:"Current AAR"}),(0,a.jsx)("span",{className:"font-medium",children:(0,x.Rr)(T.aar,T.AARDecimals)})]}),(0,a.jsx)("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z",fill:"#262626"})})]}),E=(0,a.jsxs)("div",{style:{position:"relative",left:P,transform:"translate(-50%,0)"},className:"flex flex-col items-center w-fit rounded-sm",children:[(0,a.jsx)("svg",{className:"rotate-180",width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z",fill:"#262626"})}),(0,a.jsxs)("div",{className:"text-xs text-white flex flex-col justify-center items-center bg-neutral-800 p-1.5 px-4 rounded-md",children:[(0,a.jsx)("span",{className:"text-neutral-400",children:k?"Trigger discount":"Discount end"}),(0,a.jsxs)("span",{className:"font-medium",children:["AAR=",k?(0,x.Rr)(T.AARS,T.AARDecimals):(0,x.Rr)(T.AART,T.AARDecimals)]})]})]});return(0,a.jsxs)("div",{className:"mx-auto max-w-screen-lg p-4",children:[(0,a.jsxs)("div",{className:"bg-indigo-50 p-6 lg:p-12 rounded-3xl relative",children:[(0,a.jsx)("h3",{className:"text-indigo-500 font-medium text-xl",children:"Discount Offer"}),(0,a.jsx)("div",{className:"text-indigo-900 mt-4 lg:w-3/4",children:"Due to fluctuations in the prices of underlying assets, when the AAR decreases, the protocol will offer users the opportunity to purchase xToken at a discount with $USB. This means that you can engage in arbitrage."}),(0,a.jsx)(g(),{src:"/discount.png",width:400,height:200,className:"lg:absolute lg:-right-8 lg:top-1/2 lg:-translate-y-1/2 mt-8",alt:""})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 border border-neutral-200 rounded-3xl mt-8 p-6",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("h3",{className:"text-3xl font-bold",children:[b.assetTokenSymbol," Vault"]}),(0,a.jsxs)("div",{className:"text-sm flex items-center gap-2",children:[(0,a.jsx)("div",{children:"State:"}),(0,a.jsxs)("div",{className:"flex items-center text-neutral-700 gap-1",children:[(0,a.jsx)("div",{className:(0,j.m)("w-3 h-3 rounded-full",N?"bg-violet-500":"bg-green-500")}),R]})]}),(0,a.jsxs)("div",{className:"w-full bg-neutral-50 p-8 rounded-lg flex flex-col gap-2",children:[C,(0,a.jsx)("div",{className:"h-px bg-neutral-300 after:content-['AAR'] after:inline-block after:text-right after:w-full after:text-xs after:text-neutral-500"}),E]})]}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center gap-4 w-full mx-auto",children:[(0,a.jsx)(n.W,{asset:"USB",amount:B,setAmount:q,balance:(0,f.dq)(S),exchange:(0,f.dq)((0,x.su)(B)*(h.USB||u.Pq)/u.Pq)}),(0,a.jsxs)("div",{className:"flex items-center justify-center w-full",children:[(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)(p.gPZ,{className:"w-6 h-6 text-neutral-500  border border-neutral-200 rounded-full"}),(0,a.jsxs)("div",{className:"flex-1 text-end text-neutral-700 text-sm whitespace-nowrap",children:["Disount Rate: ",k?"N/A":Z]})]}),(0,a.jsx)(n.W,{asset:b.xTokenSymbol,amount:U,exchange:(0,f.dq)(y*(0,x.ok)(L,[1])/u.Pq),readonly:!0})]}),(0,a.jsx)(l.v,{tx:"Swap",disabled:(0,x.su)(B)>S,onTxSuccess:()=>{q("")},config:{abi:i.Z,address:b.vault,functionName:"usbToLeveragedTokens",args:[(0,x.su)(B)],enabled:N},approves:{[d.O[(0,o.B)()]]:(0,x.su)(B)},spender:b.vault})]})]})]})}},35769:function(e,s,t){"use strict";t.d(s,{m:function(){return n}});var a=t(48362),l=t(17783),n=(0,a.I)(l._)}},function(e){e.O(0,[27,33,986,149,725,818,203,342,971,472,744],function(){return e(e.s=33490)}),_N_E=e.O()}]);