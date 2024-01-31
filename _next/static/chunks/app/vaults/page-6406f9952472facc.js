(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{55139:function(e,s,t){"use strict";t.d(s,{r:function(){return l.Z}});var l=t(87456)},26295:function(e,s,t){Promise.resolve().then(t.bind(t,39930))},39930:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Vaults}});var l=t(57437),a=t(91056),i=t(72009),n=t(99057),d=t(55139),x=t(16691),c=t.n(x),m=t(2265),o=t(37238),r=t(80547),u=t(1150),h=t(76036),f=t(14181),p=t(34522),v=t(81628),j=t(20373),b=t(8580),g=t(56926),N=t(79352),w=t(90228),S=t(28712),B=t(41697),y=t(35769);let k="$USB";function VaultCard(e){let{asset:s}=e,{balances:t,prices:d,vaultsMode:x}=(0,m.useContext)(n.FetcherContext),c=i.iK[(0,a.BV)()].find(e=>e.assetTokenSymbol==s),o=i.jX[(0,a.BV)()],f=x[c.assetTokenSymbol],[S,C]=(0,m.useState)("mint"),[A,T]=(0,m.useMemo)(()=>{let e="mint"==S;return 3==f?["Adjustment Model--High AAR",e?"Minting ".concat(k," alone is feasible"):"Redeeming ".concat(c.xTokenSymbol," alone is feasible")]:2==f?["Adjustment Model--Low AAR",e?"Minting ".concat(c.xTokenSymbol," alone is feasible"):"Redeeming ".concat(k," alone is feasible")]:["Stability Model",e?"".concat(k," and ").concat(c.xTokenSymbol," will be minted in fixed ratio"):"Redemption require a fixed ration of ".concat(k," and ").concat(c.xTokenSymbol)]},[f,c,S]),[U,E]=(0,m.useState)(""),[V,M]=(0,m.useState)(""),[P,L]=(0,m.useState)(""),R=(0,v.ok)(d,c.assetTokenSymbol),Z=(0,v.ok)(d,c.xTokenSymbol),H=(0,m.useMemo)(()=>(0,v.ok)(null==t?void 0:t.find(e=>e.symbol===s),"balance"),[t]),D=(0,m.useMemo)(()=>(0,v.ok)(null==t?void 0:t.find(e=>"USB"===e.symbol),"balance"),[t]),q=(0,m.useMemo)(()=>(0,v.ok)(null==t?void 0:t.find(e=>e.symbol===s+"x"),"balance"),[t]),[W,F]=(0,m.useState)(""),[O,z]=(0,m.useState)(""),[_,Y]=(0,m.useState)("USB"),{data:[K,$,X]=[void 0,void 0,void 0]}=(0,g.Dm)({contracts:[{abi:w.Z,address:o,functionName:f>1?"calcMintPairsAtAdjustmentPhase":"calcMintPairsAtStabilityPhase",args:[c.vault,(0,v.su)(U||"0")]},{abi:w.Z,address:o,functionName:"calcMintUsbAboveAARU",args:[c.vault,(0,v.su)(U||"0")]},{abi:w.Z,address:o,functionName:"calcMintLeveragedTokensBelowAARS",args:[c.vault,(0,v.su)(U||"0")]}],watch:!0,enabled:"mint"==S}),I=(0,v.ok)(K,["result",1]),G=(0,v.ok)(K,["result",2]),J=(0,v.ok)($,["result",1]),Q=(0,v.ok)(X,["result",1]),{data:[ee,es,et,el]=[void 0,void 0,void 0,void 0]}=(0,g.Dm)({contracts:[{abi:w.Z,address:o,functionName:"calcPairdLeveragedTokenAmount",args:[c.vault,(0,v.su)(V||"0")]},{abi:w.Z,address:o,functionName:"calcPairedUsbAmount",args:[c.vault,(0,v.su)(P||"0")]},{abi:w.Z,address:o,functionName:"calcRedeemByLeveragedTokenAboveAARU",args:[c.vault,(0,v.su)(P||"0")]},{abi:w.Z,address:o,functionName:"calcRedeemByUsbBelowAARS",args:[c.vault,(0,v.su)(V||"0")]}],watch:!0,enabled:"redeem"==S}),ea=(0,v.ok)(ee,["result"]),ei=(0,v.ok)(es,["result"]),en=(0,v.ok)(et,["result",1]),ed=(0,v.ok)(el,["result",1]),ex=O==c.xTokenSymbol,ec="USB"==O,em=(0,m.useMemo)(()=>{let e={abi:u.Z,address:c.vault,args:[(0,v.su)(U)],value:c.assetTokenAddress==i.K8?(0,v.su)(U):0n,functionName:"mintPairsAtAdjustmentPhase"};return f<=1&&(e.functionName="mintPairsAtStabilityPhase"),"USB"==W&&(e.functionName="mintUSBAboveAARU"),W==c.xTokenSymbol&&(e.functionName="mintLeveragedTokensBelowAARS"),e},[f,W,U,c]),eo=(0,m.useMemo)(()=>{console.info("redeem:",f,O,V,(0,v.su)(V));let e={abi:u.Z,address:c.vault,functionName:"USB"==O?"redeemByPairsWithExpectedUSBAmount":"redeemByPairsWithExpectedLeveragedTokenAmount",args:"USB"==O?[(0,v.su)(V)]:[(0,v.su)(P)]};return O==c.xTokenSymbol&&(e.functionName="redeemByLeveragedTokenAboveAARU",e.args=[(0,v.su)(P)]),"USB"==O&&(e.functionName="redeemByUsbBelowAARS",e.args=[(0,v.su)(V)]),e},[f,O,V,P,c]),er=W==c.xTokenSymbol?0n:"USB"===W?J:I,eu="USB"==W?0n:W===c.xTokenSymbol?Q:G,eh=ex?"0":"USB"==_?V:(0,N.d)(ei),ef=ec?"0":_==c.xTokenSymbol?P:(0,N.d)(ea),{data:ep}=(0,g.do)({watch:!0,abi:w.Z,address:o,functionName:"calcPairedRedeemAssetAmount",args:[c.vault,(0,v.su)(ef||"0")]}),ev=ex?en:ec?ed:(0,v.ok)(ep,[1]);return(0,l.jsxs)("div",{className:(0,y.m)("card relative",f>1?"!bg-violet-500/10":""),children:[(0,l.jsxs)("div",{className:"mb-1 ssm:mb-0 ssm:absolute top-[29px] right-6 flex flex-col items-end",children:[(0,l.jsxs)("div",{className:(0,y.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,l.jsx)("div",{className:(0,y.m)("w-3 h-3 rounded-full","Stability Model"==A?"bg-green-500":"bg-red-500")}),(0,l.jsx)("div",{className:(0,y.m)("Stability Model"==A?"text-green-500":"text-red-500"),children:A})]}),(0,l.jsx)("div",{className:"text-xs text-neutral-500",children:T})]}),(0,l.jsx)("div",{className:"relative flex items-center justify-between",children:(0,l.jsxs)(p.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>C(e),children:[(0,l.jsxs)(p.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,l.jsx)(p.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,l.jsx)(p.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,l.jsx)(p.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(r.W,{asset:s,exchange:(0,j.dq)(R*(0,v.su)(U)/b.Pq),balance:H,amount:U,setAmount:E}),(0,l.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,l.jsx)(B.gPZ,{})}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)(r.W,{amount:(0,j.ZM)(er),onClick:()=>{F(3==f?"USB":"")},asset:"USB",exchange:(0,j.dq)(er),readonly:!0,disable:f<=1,selected:"USB"===W}),(0,l.jsx)(r.W,{amount:(0,j.ZM)(eu),onClick:()=>{F(2==f?c.xTokenSymbol:"")},asset:c.xTokenSymbol,exchange:(0,j.dq)(Z*eu/b.Pq),readonly:!0,disable:f<=1,selected:W===c.xTokenSymbol})]}),(0,l.jsx)(h.v,{tx:"Mint",disabled:(0,v.su)(U)>H,onTxSuccess:()=>{E("")},config:em,approves:{[c.assetTokenAddress]:(0,v.su)(U)},spender:c.vault})]})}),(0,l.jsx)(p.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)(r.W,{amount:eh,setAmount:M,balance:D,onClick:()=>{z(2==f?"USB":""),Y("USB")},asset:"USB",exchange:(0,j.dq)((0,v.su)(eh)),readonly:O==c.xTokenSymbol,selected:"USB"===O}),(0,l.jsx)(r.W,{amount:ef,setAmount:L,asset:c.xTokenSymbol,onClick:()=>{z(3==f?c.xTokenSymbol:""),Y(c.xTokenSymbol)},exchange:(0,j.dq)((0,v.su)(ef)*Z/b.Pq),balance:q,readonly:"USB"==O,selected:O===c.xTokenSymbol})]}),(0,l.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,l.jsx)("div",{className:"flex-1"}),(0,l.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,l.jsx)(B.gPZ,{})}),(0,l.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end",children:"Redemption Fee: 0.5%"})]}),(0,l.jsx)("div",{className:"w-full text-end"}),(0,l.jsx)(r.W,{asset:c.assetTokenSymbol,amount:(0,j.dq)(ev),exchange:(0,j.dq)(R*ev/b.Pq),readonly:!0}),(0,l.jsx)(h.v,{tx:"Redeem",config:eo,disabled:(0,v.su)(eh)>D||(0,v.su)(ef)>q,onTxSuccess:()=>{console.info("Redeem onSuccess:"),M(""),L(""),z(""),Y("USB")},approves:ec?{[i.O1[(0,a.BV)()]]:(0,v.su)(V)}:ex?{[c.xTokenAddress]:(0,v.su)(P)}:{[c.xTokenAddress]:(0,v.su)(P),[i.O1[(0,a.BV)()]]:(0,v.su)(V)},spender:c.vault})]})})]})})]})}function VaultCollapse(e){let{asset:s="ETH"}=e,t={ETH:"./ETH.svg",ETHx:"./ETHx.svg",USDB:"./USDB.svg",USDBx:"./USDB.svg",USB:"./USB.svg"},d="23,13",{address:x}=(0,g.mA)(),[B,y]=(0,m.useState)(!1),[k,C]=(0,m.useState)("deposit"),[A,T]=(0,m.useState)(""),[U,E]=(0,m.useState)(""),{balances:V,prices:M,vaultsMode:P}=(0,m.useContext)(n.FetcherContext),L=i.iK[(0,a.BV)()].find(e=>e.assetTokenSymbol==s);console.log(L);let R=(0,v.ok)(M,L.assetTokenSymbol),Z=P[L.assetTokenSymbol],H="ETH"===s?"ETHx":"USDBx",D="/".concat(s,".svg"),q="/".concat(s,"x.svg"),W=(0,m.useMemo)(()=>(0,v.ok)(null==V?void 0:V.find(e=>e.symbol===s),"balance"),[V]),F=(0,m.useMemo)(()=>{let e={abi:u.Z,address:L.vault,args:[(0,v.su)(U)],value:L.assetTokenAddress==i.K8?(0,v.su)(U):0n,functionName:"mintPairsAtAdjustmentPhase"};return Z<=1&&(e.functionName="mintPairsAtStabilityPhase"),"USB"==A&&(e.functionName="mintUSBAboveAARU"),A==L.xTokenSymbol&&(e.functionName="mintLeveragedTokensBelowAARS"),e},[Z,A,U,L]),[O,z]=(0,m.useState)(""),[_,Y]=(0,m.useState)(""),[K,$]=(0,m.useState)("USB"),[X,I]=(0,m.useState)(""),G=_==L.xTokenSymbol,J="USB"==_,Q=i.jX[(0,a.BV)()],{data:[ee,es]=[void 0,void 0]}=(0,g.Dm)({contracts:[{abi:w.Z,address:Q,functionName:"calcPairdLeveragedTokenAmount",args:[L.vault,(0,v.su)(O||"0")]},{abi:w.Z,address:Q,functionName:"calcPairedUsbAmount",args:[L.vault,(0,v.su)(X||"0")]}],watch:!0,enabled:"redeem"==k}),et=(0,v.ok)(es,["result"]),el=(0,v.ok)(ee,["result"]),ea=G?"0":"USB"==K?O:(0,N.d)(et),ei=J?"0":K==L.xTokenSymbol?X:(0,N.d)(el),en=(0,m.useMemo)(()=>(0,v.ok)(null==V?void 0:V.find(e=>"USB"===e.symbol),"balance"),[V]),ed=(0,m.useMemo)(()=>(0,v.ok)(null==V?void 0:V.find(e=>e.symbol===s+"x"),"balance"),[V]),ex=(0,m.useMemo)(()=>{console.info("redeem:",Z,_,O,(0,v.su)(O));let e={abi:u.Z,address:L.vault,functionName:"USB"==_?"redeemByPairsWithExpectedUSBAmount":"redeemByPairsWithExpectedLeveragedTokenAmount",args:"USB"==_?[(0,v.su)(O)]:[(0,v.su)(X)]};return _==L.xTokenSymbol&&(e.functionName="redeemByLeveragedTokenAboveAARU",e.args=[(0,v.su)(X)]),"USB"==_&&(e.functionName="redeemByUsbBelowAARS",e.args=[(0,v.su)(O)]),e},[Z,_,O,X,L]),ec=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,l.jsx)("path",{d:"M6.50322 7.50486L6.99579 8L13.7977 1.19284C14.0674 0.91867 14.0674 0.478772 13.7977 0.20665C13.6669 0.0736573 13.489 0 13.3051 0C13.1191 0 12.9433 0.0736573 12.8125 0.204604L6.99783 6.02353L1.18926 0.204604C1.05845 0.0736573 0.880637 0 0.696692 0C0.510703 0 0.334934 0.0736573 0.204129 0.204604C-0.0677012 0.478772 -0.0677012 0.91867 0.202085 1.19284L6.47665 7.47622L6.50322 7.50486Z",fill:"#6466F1"})}),em=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,l.jsx)("path",{d:"M7.49678 0.495141L7.00421 0L0.202339 6.80716C-0.0674467 7.08133 -0.0674467 7.52123 0.202339 7.79335C0.333144 7.92634 0.510958 8 0.694902 8C0.880891 8 1.05666 7.92634 1.18747 7.7954L7.00217 1.97647L12.8107 7.7954C12.9415 7.92634 13.1194 8 13.3033 8C13.4893 8 13.6651 7.92634 13.7959 7.7954C14.0677 7.52123 14.0677 7.08133 13.7979 6.80716L7.52335 0.523785L7.49678 0.495141Z",fill:"#6466F1"})}),eo=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,l.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#00DE9C","stroke-width":"4"})}),er=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,l.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#FF3D3D","stroke-width":"4"})}),eu=(0,l.jsx)("div",{className:"mr-[10px]",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",children:(0,l.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#64748B"})})}),eh=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 20",fill:"none",children:(0,l.jsx)("path",{d:"M20.75 8.00223C20.7 7.61046 20.45 7.26767 20 7.16973H19.95C19.05 6.97385 18.4 6.48414 17.9 5.65164C17.45 4.91709 17.3 3.98665 17.6 3.15415C17.75 2.81135 17.65 2.37062 17.3 2.0768C16.35 1.19533 15.2 0.509741 13.9 0.0690067C13.55 -0.0779047 13.15 0.0200363 12.8 0.36283C12.25 1.04842 11.4 1.39121 10.45 1.39121C9.6 1.39121 8.8 0.999446 8.1 0.313859C7.7 -0.0779047 7.3 -0.0289342 7 0.0690067C5.7 0.607682 4.6 1.2443 3.65 2.02783C3.3 2.27268 3.15 2.71341 3.3 3.10518C3.55 4.03562 3.45 4.91709 3 5.70061C2.6 6.3862 1.85 6.92488 0.95 7.16973C0.9 7.16973 0.9 7.16973 0.85 7.2187C0.55 7.36561 0.35 7.61046 0.2 7.95326V8.00223C0.05 8.73678 0 9.3734 0 10.01C0 10.6466 0.05 11.3812 0.2 11.9688C0.25 12.3606 0.5 12.7034 0.95 12.8013H1C1.9 12.9972 2.55 13.4869 3.05 14.3194C3.5 15.054 3.65 15.9844 3.35 16.8169C3.2 17.1597 3.3 17.6004 3.65 17.8943C4.6 18.7757 5.75 19.4613 7.1 19.9021C7.15 19.9021 7.2 19.951 7.3 19.951H7.45C7.7 19.951 8 19.8531 8.25 19.6082C8.8 18.9716 9.65 18.5799 10.6 18.5799C11.45 18.5799 12.25 18.9716 12.95 19.6572C13.15 19.8531 13.4 20 13.65 20C13.75 20 13.9 20 14 19.951C15.3 19.4124 16.4 18.7757 17.35 17.9922C17.7 17.7963 17.85 17.3066 17.7 16.9149C17.45 15.9844 17.55 15.1029 18 14.3194C18.4 13.6338 19.15 13.0952 20.05 12.8503C20.1 12.8503 20.1 12.8503 20.15 12.8013C20.45 12.6544 20.65 12.4096 20.8 12.0668V12.0178C20.95 11.2833 21 10.6466 21 10.01C20.95 9.32443 20.9 8.63884 20.75 8.00223ZM10.45 13.389C8.5 13.389 6.95 11.8709 6.95 9.96105C6.95 8.0512 8.5 6.53311 10.45 6.53311C12.4 6.53311 13.95 8.0512 13.95 9.96105C13.95 11.8709 12.4 13.389 10.45 13.389Z",fill:"#6466F1"})});return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"w-full flex flex-col md:flex-row justify-between items-center aspect-video md:aspect-auto md:h-[106px] bg-white border-[1px] border-[#E4E4E7] rounded-t-[16px] p-[20px] md:p-[30px]",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row w-[85%] gap-3 md:gap-10",children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)(c(),{alt:"",width:40,height:40,src:D}),(0,l.jsxs)("div",{className:"ml-[10px] flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-black text-base font-semibold leading-[16px]",children:s}),(0,l.jsxs)("div",{className:"text-[#64748B] text-sm font-medium leading-[14px]",children:["$",d]})]})]}),(0,l.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-10 border-t-1 border-[#E4E4E7] md:border-0",children:[(0,l.jsxs)("div",{className:"flex flex-col justify-between relative gap-2 md:gap-0",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:"Total Deposit"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(c(),{width:14,height:14,src:D,alt:""}),(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[10px]",children:d})]}),(0,l.jsxs)("div",{className:"absolute bottom-[-14px] md:bottom-[-24px] text-[#64748B] text-xs font-semibold leading-[12px]",children:["~$","23,22,23"]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:"USB Debt"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(c(),{width:14,height:14,src:t.USB,alt:""}),(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[10px]",children:"33,23,45"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:H}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(c(),{width:14,height:14,src:t[H],alt:""}),(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[10px]",children:"22,23"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:"AAR"}),(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsxs)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:[13,"%"]})})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:"Status"}),(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"mr-[10px]",children:eo}),"Stability"]})})})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:"Discount Offer"}),(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"mr-[10px]",children:er}),"Yes"]})})})]})]})]}),(0,l.jsxs)("div",{className:"flex items-center text-xs text-[#6466F1] cursor-pointer",onClick:()=>{y(!B)},children:[(0,l.jsx)("span",{className:"mr-[5px]",children:B?"Hide":"Details"}),B?em:ec]})]}),(0,l.jsx)(o.Collapse,{isOpened:B,className:"ease-linear",children:(0,l.jsx)("div",{className:x?"w-full min-h-[286px] rounded-b-[16px] bg-[#E4E4E7] p-[30px]":"w-full h-[202px] rounded-b-[16px] bg-[#E4E4E7] p-[30px]",children:(0,l.jsxs)("div",{className:"w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,l.jsx)("div",{className:"md:h-full mb-[40px] md:mb-0 flex items-center",children:(0,l.jsxs)("div",{className:"flex mr-[55px]",children:[(0,l.jsx)(c(),{alt:"",width:54,height:54,src:q}),(0,l.jsxs)("div",{className:"ml-[10px] flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-black text-[24px] font-semibold leading-[24px]",children:H}),(0,l.jsxs)("div",{className:"text-[#64748B] text-sm font-medium leading-[14px]",children:["$","23,22"]})]})]})}),(0,l.jsx)("div",{className:"w-full md:w-[300px] min-h-[108px] flex flex-col justify-between",children:"ETH"===s?(0,l.jsxs)(l.Fragment,{children:[x&&(0,l.jsxs)("div",{className:"h-[84px] p-[20px] text-[#64748B] text-xs font-medium leading-[12px] bg-white rounded-[16px] mb-[10px]",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,l.jsx)("div",{children:"Open Position"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(c(),{src:t.ETH,width:12,height:12,alt:"",className:"mr-[5px]"}),"43.323"]})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,l.jsx)("div",{children:"Margin Loan"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(c(),{src:t.USB,width:12,height:12,alt:"",className:"mr-[5px]"}),"43.323"]})]})]}),(0,l.jsxs)("div",{className:" text-[#64748B] text-xs font-medium leading-[12px] bg-white px-[30px] py-[23px] rounded-[16px]",children:[(0,l.jsxs)("div",{className:"flex items-center mb-[16px]",children:[eu,"2.45x Leveraged long on ETH"]}),(0,l.jsxs)("div",{className:"flex items-center mb-[16px]",children:[eu,"Add ETHx to wallet"]}),(0,l.jsxs)("div",{className:"flex items-center mb-[16px]",children:[eu,"Add USB to wallet"]}),(0,l.jsxs)("div",{className:"flex items-center",children:[eu,"View contract"]})]})]}):(0,l.jsxs)(l.Fragment,{children:[x&&(0,l.jsxs)("div",{className:"h-[84px] p-[20px] text-[#64748B] text-xs font-medium leading-[12px] bg-white rounded-[16px] mb-[10px]",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,l.jsx)("div",{children:"Open Position"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(c(),{src:t.ETH,width:12,height:12,alt:"",className:"mr-[5px]"}),"43.323"]})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,l.jsx)("div",{children:"Margin Loan"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(c(),{src:t.USB,width:12,height:12,alt:"",className:"mr-[5px]"}),"43.323"]})]})]}),(0,l.jsxs)("div",{className:"text-[#64748B] text-xs font-medium leading-[12px] bg-white px-[30px] py-[23px] rounded-[16px]",children:[(0,l.jsxs)("div",{className:"flex items-center mt-[16px]",children:[eu,"Add USDBx to wallet"]}),(0,l.jsxs)("div",{className:"flex items-center mt-[16px]",children:[eu,"Add USB to wallet"]}),(0,l.jsxs)("div",{className:"flex items-center mt-[16px]",children:[eu,"View contract"]})]})]})})]}),(0,l.jsx)("div",{className:"w-full md:min-w-[604px] md:flex md:items-center md:justify-center",children:x?(0,l.jsx)("div",{className:"w-full relative flex items-center justify-between",children:(0,l.jsxs)("div",{className:"bg-white relative border border-1 border-[#E4E4E7] p-[20px] pt-0 rounded-[16px] w-full",children:[(0,l.jsxs)(S.fC,{children:[(0,l.jsx)(S.xz,{children:(0,l.jsx)("div",{className:"absolute w-[21px] h-[21px] right-[20px] top-[30px] cursor-pointer hover:bg-indigo-500 hover:bg-opacity-50",children:eh})}),(0,l.jsxs)(S.h_,{children:[(0,l.jsx)(S.aV,{className:"bg-black/75 fixed inset-0 z-40"}),(0,l.jsx)(S.VY,{className:"fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50",children:(0,l.jsx)(VaultCard,{asset:"ETH"})})]})]}),(0,l.jsxs)(p.fC,{defaultValue:"deposit",className:"w-full",onValueChange:e=>C(e),children:[(0,l.jsxs)(p.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,l.jsx)(p.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"deposit",children:"Deposit"}),(0,l.jsx)(p.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"withraw",children:"Withdraw"})]}),(0,l.jsx)(p.VY,{value:"deposit",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(r.W,{asset:s,exchange:(0,j.dq)(R*(0,v.su)(U)/b.Pq),balance:W,amount:U,setAmount:E}),(0,l.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] flex items-center pl-[5px] mt-[6px]",children:[" 1 ",(0,l.jsx)(c(),{src:t.ETH,width:12,height:12,alt:"",className:"mx-[5px]"}),"ETH  =  0.7231   ",(0,l.jsx)(c(),{src:t[H],width:12,height:12,alt:"",className:"mx-[5px]"}),"  ",s,"x  +  232.3231  ",(0,l.jsx)(c(),{src:t.USB,width:12,height:12,alt:"",className:"mx-[5px]"}),"   USB"]}),(0,l.jsx)(h.v,{tx:"Deposit",disabled:(0,v.su)(U)>W,onTxSuccess:()=>{E("")},config:F,approves:{[L.assetTokenAddress]:(0,v.su)(U)},spender:L.vault})]})}),(0,l.jsx)(p.VY,{value:"withraw",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)("div",{className:"flex flex-col gap-2",children:(0,l.jsx)(r.W,{amount:ea,setAmount:z,balance:en,onClick:()=>{Y(2==Z?"USB":""),$("USB")},asset:"USB",exchange:(0,j.dq)((0,v.su)(ea)),readonly:_==L.xTokenSymbol,selected:"USB"===_})}),(0,l.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] md:flex md:items-center md:justify-between pl-[5px] mt-[6px]",children:[(0,l.jsxs)("span",{className:"flex",children:[H," Balance：",(0,l.jsx)(c(),{src:t[H],width:12,height:12,alt:"",className:"mr-[5px]"})," 43.430"]}),(0,l.jsxs)("span",{className:"flex",children:["USB Balance: ",(0,l.jsx)(c(),{src:t.USB,width:12,height:12,alt:"",className:"mx-[5px]"})," 43.430"]})]}),(0,l.jsx)(h.v,{tx:"Withdraw",config:ex,disabled:(0,v.su)(ea)>en||(0,v.su)(ei)>ed,onTxSuccess:()=>{console.info("Redeem onSuccess:"),z(""),I(""),Y(""),$("USB")},approves:J?{[i.O1[(0,a.BV)()]]:(0,v.su)(O)}:G?{[L.xTokenAddress]:(0,v.su)(X)}:{[L.xTokenAddress]:(0,v.su)(X),[i.O1[(0,a.BV)()]]:(0,v.su)(O)},spender:L.vault})]})})]})]})}):(0,l.jsx)(f.x3,{})})]})})})]})}function Vaults(){let{aar:e,assetLocked:s,prices:t}=(0,m.useContext)(n.FetcherContext);return i.iK[(0,a.BV)()].find(e=>"ETH"==e.assetTokenSymbol),(0,l.jsxs)("div",{className:"w-full max-w-screen-xl px-4 mx-auto md:pb-8",children:[(0,l.jsx)("h2",{className:"text-2xl font-semibold text-neutral-900",children:"Vault"}),(0,l.jsxs)("div",{className:"w-full mt-[20px] mb-[30px] flex text-[24px] md:text-[14px] text-[#64748B] font-medium leading-[24px] md:leading-[14px]",children:[(0,l.jsx)("div",{className:"min-w-[21px] mt-[5px] md:mt-0",children:(0,l.jsx)(c(),{width:21,height:14,src:"./vector.png",alt:"vector"})}),(0,l.jsx)("span",{className:"ml-[6px]",children:"Depositing assets into the Vaults not only yields protocol income but also qualifies for Blast Developer Airdrop."})]}),(0,l.jsxs)(d.r,{numItemsMd:1,className:"gap-3 mt-4",children:[(0,l.jsx)(VaultCollapse,{asset:"ETH"}),(0,l.jsx)(VaultCollapse,{asset:"USDB"})]})]})}}},function(e){e.O(0,[27,33,986,866,205,725,539,619,356,346,754,203,975,971,472,744],function(){return e(e.s=26295)}),_N_E=e.O()}]);