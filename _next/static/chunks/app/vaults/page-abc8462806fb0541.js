(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1399],{35883:function(){},55139:function(e,s,t){"use strict";t.d(s,{r:function(){return l.Z}});var l=t(87456)},26295:function(e,s,t){Promise.resolve().then(t.bind(t,16619))},16619:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Vaults}});var l=t(57437),a=t(91056),i=t(72009),n=t(15898),d=t(55139),c=t(16691),r=t.n(c),o=t(2265),x=t(76036),m=t(80547),u=t(89859),h=t(8580),f=t(12831),v=t(81628),p=t(20373),j=t(34522),b=t(41697),g=t(35769),N=t(79352);let w="$USB";function VaultCard(e){let{asset:s}=e,{balances:t,prices:d,vaultsMode:c}=(0,o.useContext)(n.g),r=i.iK[(0,a.BV)()].find(e=>e.assetTokenSymbol==s),y=i.jX[(0,a.BV)()],S=c[r.assetTokenSymbol],[k,B]=(0,o.useState)("mint"),[C,A]=(0,o.useMemo)(()=>{let e="mint"==k;return 3==S?["Adjustment Model--High AAR",e?"Minting ".concat(w," alone is feasible"):"Redeeming ".concat(r.xTokenSymbol," alone is feasible")]:2==S?["Adjustment Model--Low AAR",e?"Minting ".concat(r.xTokenSymbol," alone is feasible"):"Redeeming ".concat(w," alone is feasible")]:["Stability Model",e?"".concat(w," and ").concat(r.xTokenSymbol," will be minted in fixed ratio"):"Redemption require a fixed ration of ".concat(w," and ").concat(r.xTokenSymbol)]},[S,r,k]),[T,U]=(0,o.useState)(""),[M,E]=(0,o.useState)(""),[V,R]=(0,o.useState)(""),P=(0,v.ok)(d,r.assetTokenSymbol),W=(0,v.ok)(d,r.xTokenSymbol),H=(0,o.useMemo)(()=>(0,v.ok)(null==t?void 0:t.find(e=>e.symbol===s),"balance"),[t]),D=(0,o.useMemo)(()=>(0,v.ok)(null==t?void 0:t.find(e=>"USB"===e.symbol),"balance"),[t]),q=(0,o.useMemo)(()=>(0,v.ok)(null==t?void 0:t.find(e=>e.symbol===s+"x"),"balance"),[t]),[L,F]=(0,o.useState)(""),[Y,z]=(0,o.useState)(""),[_,Z]=(0,o.useState)("USB"),O=(0,o.useMemo)(()=>({contracts:[{vc:r,abi:u.Y,address:y,functionName:S>1?"calcMintPairsAtAdjustmentPhase":"calcMintPairsAtStabilityPhase",args:[r.vault,(0,v.su)(T||"0")]},{vc:r,abi:u.Y,address:y,functionName:"calcMintUsbAboveAARU",args:[r.vault,(0,v.su)(T||"0")]},{vc:r,abi:u.Y,address:y,functionName:"calcMintLeveragedTokensBelowAARS",args:[r.vault,(0,v.su)(T||"0")]}],watch:!0,enabled:"mint"==k}),[r,T,k]),{data:[$,I,K]=[void 0,void 0,void 0]}=(0,f.uX)(O),X=(0,v.ok)($,["result",1]),G=(0,v.ok)($,["result",2]),J=(0,v.ok)(I,["result",1]),Q=(0,v.ok)(K,["result",1]),ee=(0,o.useMemo)(()=>({contracts:[{vc:r,abi:u.Y,address:y,functionName:"calcPairdLeveragedTokenAmount",args:[r.vault,(0,v.su)(M||"0")]},{vc:r,abi:u.Y,address:y,functionName:"calcPairedUsbAmount",args:[r.vault,(0,v.su)(V||"0")]},{vc:r,abi:u.Y,address:y,functionName:"calcRedeemByLeveragedTokenAboveAARU",args:[r.vault,(0,v.su)(V||"0")]},{vc:r,abi:u.Y,address:y,functionName:"calcRedeemByUsbBelowAARS",args:[r.vault,(0,v.su)(M||"0")]}],watch:!0,enabled:"redeem"==k}),[r,M,V,k]),{data:[es,et,el,ea]=[void 0,void 0,void 0,void 0]}=(0,f.uX)(ee),ei=(0,v.ok)(es,["result"]),en=(0,v.ok)(et,["result"]),ed=(0,v.ok)(el,["result",1]),ec=(0,v.ok)(ea,["result",1]),er=Y==r.xTokenSymbol,eo="USB"==Y,ex=(0,o.useMemo)(()=>{let e={vc:r,abi:u.WW,address:r.vault,args:[(0,v.su)(T)],value:r.assetTokenAddress==i.K8?(0,v.su)(T):0n,functionName:"mintPairsAtAdjustmentPhase"};return S<=1&&(e.functionName="mintPairsAtStabilityPhase"),"USB"==L&&(e.functionName="mintUSBAboveAARU"),L==r.xTokenSymbol&&(e.functionName="mintLeveragedTokensBelowAARS"),e},[S,L,T,r]),em=(0,o.useMemo)(()=>{console.info("redeem:",S,Y,M,(0,v.su)(M));let e={vc:r,abi:u.WW,address:r.vault,functionName:"USB"==Y?"redeemByPairsWithExpectedUSBAmount":"redeemByPairsWithExpectedLeveragedTokenAmount",args:"USB"==Y?[(0,v.su)(M)]:[(0,v.su)(V)]};return Y==r.xTokenSymbol&&(e.functionName="redeemByLeveragedTokenAboveAARU",e.args=[(0,v.su)(V)]),"USB"==Y&&(e.functionName="redeemByUsbBelowAARS",e.args=[(0,v.su)(M)]),e},[S,Y,M,V,r]),eu=L==r.xTokenSymbol?0n:"USB"===L?J:X,eh="USB"==L?0n:L===r.xTokenSymbol?Q:G,ef=er?"0":"USB"==_?M:(0,N.d)(en),ev=eo?"0":_==r.xTokenSymbol?V:(0,N.d)(ei),ep=(0,o.useMemo)(()=>({vc:r,watch:!0,abi:u.Y,address:y,functionName:"calcPairedRedeemAssetAmount",args:[r.vault,(0,v.su)(ev||"0")]}),[r,ev]),{data:ej}=(0,f.D2)(ep),eb=er?ed:eo?ec:(0,v.ok)(ej,[1]);return(0,l.jsxs)("div",{className:(0,g.m)("card relative",S>1?"!bg-violet-500/10":""),children:[(0,l.jsxs)("div",{className:"mb-1 ssm:mb-0 ssm:absolute top-[29px] right-6 flex flex-col items-end",children:[(0,l.jsxs)("div",{className:(0,g.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,l.jsx)("div",{className:(0,g.m)("w-3 h-3 rounded-full","Stability Model"==C?"bg-green-500":"bg-red-500")}),(0,l.jsx)("div",{className:(0,g.m)("Stability Model"==C?"text-green-500":"text-red-500"),children:C})]}),(0,l.jsx)("div",{className:"text-xs text-neutral-500",children:A})]}),(0,l.jsx)("div",{className:"relative flex items-center justify-between",children:(0,l.jsxs)(j.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>B(e),children:[(0,l.jsxs)(j.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,l.jsx)(j.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,l.jsx)(j.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,l.jsx)(j.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(m.W,{asset:s,exchange:(0,p.dq)(P*(0,v.su)(T)/h.Pq),balance:H,amount:T,setAmount:U}),(0,l.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,l.jsx)(b.gPZ,{})}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)(m.W,{amount:(0,p.ZM)(eu),onClick:()=>{F(3==S?"USB":"")},asset:"USB",exchange:(0,p.dq)(eu),readonly:!0,disable:S<=1,selected:"USB"===L}),(0,l.jsx)(m.W,{amount:(0,p.ZM)(eh),onClick:()=>{F(2==S?r.xTokenSymbol:"")},asset:r.xTokenSymbol,exchange:(0,p.dq)(W*eh/h.Pq),readonly:!0,disable:S<=1,selected:L===r.xTokenSymbol})]}),(0,l.jsx)(x.v,{tx:"Mint",disabled:(0,v.su)(T)>H,onTxSuccess:()=>{U("")},config:ex,approves:{[r.assetTokenAddress]:(0,v.su)(T)},spender:r.vault})]})}),(0,l.jsx)(j.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)(m.W,{amount:ef,setAmount:E,balance:D,onClick:()=>{z(2==S?"USB":""),Z("USB")},asset:"USB",exchange:(0,p.dq)((0,v.su)(ef)),readonly:Y==r.xTokenSymbol,selected:"USB"===Y}),(0,l.jsx)(m.W,{amount:ev,setAmount:R,asset:r.xTokenSymbol,onClick:()=>{z(3==S?r.xTokenSymbol:""),Z(r.xTokenSymbol)},exchange:(0,p.dq)((0,v.su)(ev)*W/h.Pq),balance:q,readonly:"USB"==Y,selected:Y===r.xTokenSymbol})]}),(0,l.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,l.jsx)("div",{className:"flex-1"}),(0,l.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,l.jsx)(b.gPZ,{})}),(0,l.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end",children:"Redemption Fee: 0.5%"})]}),(0,l.jsx)("div",{className:"w-full text-end"}),(0,l.jsx)(m.W,{asset:r.assetTokenSymbol,amount:(0,p.dq)(eb),exchange:(0,p.dq)(P*eb/h.Pq),readonly:!0}),(0,l.jsx)(x.v,{tx:"Redeem",config:em,disabled:(0,v.su)(ef)>D||(0,v.su)(ev)>q,onTxSuccess:()=>{console.info("Redeem onSuccess:"),E(""),R(""),z(""),Z("USB")},approves:eo?{[i.O1[(0,a.BV)()]]:(0,v.su)(M)}:er?{[r.xTokenAddress]:(0,v.su)(V)}:{[r.xTokenAddress]:(0,v.su)(V),[i.O1[(0,a.BV)()]]:(0,v.su)(M)},spender:r.vault})]})})]})})]})}var y=t(21965),S=t(28712),k=t(14181),B=t(37238),C=t(56926),A=t(64020),T=t(62592);let U=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,l.jsx)("path",{d:"M6.50322 7.50486L6.99579 8L13.7977 1.19284C14.0674 0.91867 14.0674 0.478772 13.7977 0.20665C13.6669 0.0736573 13.489 0 13.3051 0C13.1191 0 12.9433 0.0736573 12.8125 0.204604L6.99783 6.02353L1.18926 0.204604C1.05845 0.0736573 0.880637 0 0.696692 0C0.510703 0 0.334934 0.0736573 0.204129 0.204604C-0.0677012 0.478772 -0.0677012 0.91867 0.202085 1.19284L6.47665 7.47622L6.50322 7.50486Z",fill:"#6466F1"})}),M=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,l.jsx)("path",{d:"M7.49678 0.495141L7.00421 0L0.202339 6.80716C-0.0674467 7.08133 -0.0674467 7.52123 0.202339 7.79335C0.333144 7.92634 0.510958 8 0.694902 8C0.880891 8 1.05666 7.92634 1.18747 7.7954L7.00217 1.97647L12.8107 7.7954C12.9415 7.92634 13.1194 8 13.3033 8C13.4893 8 13.6651 7.92634 13.7959 7.7954C14.0677 7.52123 14.0677 7.08133 13.7979 6.80716L7.52335 0.523785L7.49678 0.495141Z",fill:"#6466F1"})}),E=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,l.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#00DE9C","stroke-width":"4"})}),V=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,l.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#FF3D3D","stroke-width":"4"})}),R=(0,l.jsx)("div",{className:"mr-[10px]",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",children:(0,l.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#64748B"})})}),P=(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 20",fill:"none",children:(0,l.jsx)("path",{d:"M20.75 8.00223C20.7 7.61046 20.45 7.26767 20 7.16973H19.95C19.05 6.97385 18.4 6.48414 17.9 5.65164C17.45 4.91709 17.3 3.98665 17.6 3.15415C17.75 2.81135 17.65 2.37062 17.3 2.0768C16.35 1.19533 15.2 0.509741 13.9 0.0690067C13.55 -0.0779047 13.15 0.0200363 12.8 0.36283C12.25 1.04842 11.4 1.39121 10.45 1.39121C9.6 1.39121 8.8 0.999446 8.1 0.313859C7.7 -0.0779047 7.3 -0.0289342 7 0.0690067C5.7 0.607682 4.6 1.2443 3.65 2.02783C3.3 2.27268 3.15 2.71341 3.3 3.10518C3.55 4.03562 3.45 4.91709 3 5.70061C2.6 6.3862 1.85 6.92488 0.95 7.16973C0.9 7.16973 0.9 7.16973 0.85 7.2187C0.55 7.36561 0.35 7.61046 0.2 7.95326V8.00223C0.05 8.73678 0 9.3734 0 10.01C0 10.6466 0.05 11.3812 0.2 11.9688C0.25 12.3606 0.5 12.7034 0.95 12.8013H1C1.9 12.9972 2.55 13.4869 3.05 14.3194C3.5 15.054 3.65 15.9844 3.35 16.8169C3.2 17.1597 3.3 17.6004 3.65 17.8943C4.6 18.7757 5.75 19.4613 7.1 19.9021C7.15 19.9021 7.2 19.951 7.3 19.951H7.45C7.7 19.951 8 19.8531 8.25 19.6082C8.8 18.9716 9.65 18.5799 10.6 18.5799C11.45 18.5799 12.25 18.9716 12.95 19.6572C13.15 19.8531 13.4 20 13.65 20C13.75 20 13.9 20 14 19.951C15.3 19.4124 16.4 18.7757 17.35 17.9922C17.7 17.7963 17.85 17.3066 17.7 16.9149C17.45 15.9844 17.55 15.1029 18 14.3194C18.4 13.6338 19.15 13.0952 20.05 12.8503C20.1 12.8503 20.1 12.8503 20.15 12.8013C20.45 12.6544 20.65 12.4096 20.8 12.0668V12.0178C20.95 11.2833 21 10.6466 21 10.01C20.95 9.32443 20.9 8.63884 20.75 8.00223ZM10.45 13.389C8.5 13.389 6.95 11.8709 6.95 9.96105C6.95 8.0512 8.5 6.53311 10.45 6.53311C12.4 6.53311 13.95 8.0512 13.95 9.96105C13.95 11.8709 12.4 13.389 10.45 13.389Z",fill:"#6466F1"})}),W={ETH:"./ETH.svg",ETHx:"./ETHx.svg",USDB:"./USDB.svg",USDBx:"./USDB.svg",USB:"./USB.svg"};function VaultSimple(e){let{vaultConfig:s}=e,{balances:t,prices:d,vaultsMode:c}=(0,o.useContext)(n.g),b=(0,v.ok)(d,null==s?void 0:s.assetTokenSymbol),g=c[null==s?void 0:s.assetTokenSymbol],w=null==s?void 0:s.assetTokenSymbol,[y,k]=(0,o.useState)("deposit"),[B,C]=(0,o.useState)(""),A=(0,v.su)(B),T="ETH"===w?"ETHx":"USDBx",U=(0,o.useMemo)(()=>(0,v.ok)(null==t?void 0:t.find(e=>e.symbol===w),"balance"),[t]),M=(0,o.useMemo)(()=>{let e={vc:s,abi:u.WW,address:null==s?void 0:s.vault,args:[A],value:(null==s?void 0:s.assetTokenAddress)==i.K8?A:0n,functionName:"mintPairsAtAdjustmentPhase"};return g<=1&&(e.functionName="mintPairsAtStabilityPhase"),e},[g,B,s]),[E,V]=(0,o.useState)(""),R=i.jX[(0,a.BV)()],{data:H}=(0,f.D2)({vc:s,abi:u.Y,address:R,functionName:g<=1?"calcMintPairsAtStabilityPhase":"calcMintPairsAtAdjustmentPhase",args:[null==s?void 0:s.vault,(0,v.su)("1")]}),D=(0,v.ok)(H,[1]),q=(0,v.ok)(H,[2]),L=(0,o.useMemo)(()=>({contracts:[{vc:s,abi:u.Y,address:R,functionName:"calcPairdLeveragedTokenAmount",args:[null==s?void 0:s.vault,(0,v.su)(E||"0")]}],watch:!0,enabled:"withraw"==y}),[s,R,E,y]),{data:[F]=[void 0]}=(0,f.uX)(L),Y=(0,v.ok)(F,["result"]),z=(0,N.d)(Y),_=(0,v.su)(E),Z=(0,o.useMemo)(()=>(0,v.ok)(null==t?void 0:t.find(e=>"USB"===e.symbol),"balance"),[t]),O=(0,o.useMemo)(()=>(0,v.ok)(null==t?void 0:t.find(e=>e.symbol===w+"x"),"balance"),[t]),$=(0,o.useMemo)(()=>{let e={vc:s,abi:u.WW,address:null==s?void 0:s.vault,functionName:"redeemByPairsWithExpectedUSBAmount",args:[(0,v.su)(E)]};return e},[g,E,s]);return(0,l.jsx)("div",{className:"w-full relative flex items-center justify-between",children:(0,l.jsxs)("div",{className:"bg-white relative border border-1 border-[#E4E4E7] p-[20px] pt-0 rounded-[16px] w-full",children:[(0,l.jsxs)(S.fC,{children:[(0,l.jsx)(S.xz,{children:(0,l.jsx)("div",{className:"absolute w-[21px] h-[21px] right-[20px] top-[30px] cursor-pointer hover:bg-indigo-500 hover:bg-opacity-50",children:P})}),(0,l.jsxs)(S.h_,{children:[(0,l.jsx)(S.aV,{className:"bg-black/75 fixed inset-0 z-40"}),(0,l.jsx)(S.VY,{className:"fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50",children:(0,l.jsx)(VaultCard,{asset:"ETH"})})]})]}),(0,l.jsxs)(j.fC,{defaultValue:"deposit",className:"w-full",onValueChange:e=>k(e),children:[(0,l.jsxs)(j.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,l.jsx)(j.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"deposit",children:"Deposit"}),(0,l.jsx)(j.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"withraw",children:"Withdraw"})]}),(0,l.jsx)(j.VY,{value:"deposit",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(m.W,{asset:w,exchange:(0,p.dq)(b*A/h.Pq),balance:U,amount:B,setAmount:C}),(0,l.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] flex items-center pl-[5px] mt-[6px]",children:["1 ",(0,l.jsx)(r(),{src:W.ETH,width:12,height:12,alt:"",className:"mx-[5px]"}),"ETH = ",(0,p.dq)(q)," ",(0,l.jsx)(r(),{src:W[T],width:12,height:12,alt:"",className:"mx-[5px]"})," ",w,"x +",(0,p.dq)(D)," ",(0,l.jsx)(r(),{src:W.USB,width:12,height:12,alt:"",className:"mx-[5px]"})," USB"]}),(0,l.jsx)(x.v,{tx:"Deposit",disabled:A<=0n||A>U,onTxSuccess:()=>{C("")},config:M,approves:{[null==s?void 0:s.assetTokenAddress]:A},spender:null==s?void 0:s.vault})]})}),(0,l.jsx)(j.VY,{value:"withraw",className:"flex flex-col gap-6",children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)("div",{className:"flex flex-col gap-2",children:(0,l.jsx)(m.W,{amount:E,setAmount:V,balance:Z,asset:"USB",exchange:(0,p.dq)(_)})}),(0,l.jsxs)("div",{className:"text-xs text-[#64748B] leading-[12px] md:flex md:items-center md:justify-between pl-[5px] mt-[6px]",children:[(0,l.jsxs)("span",{className:"flex",children:[T," Balance：",(0,l.jsx)(r(),{src:W[T],width:12,height:12,alt:"",className:"mr-[5px]"})," ",(0,p.dq)(O)]}),(0,l.jsxs)("span",{className:"flex",children:["USB Balance: ",(0,l.jsx)(r(),{src:W.USB,width:12,height:12,alt:"",className:"mx-[5px]"})," ",(0,p.dq)(Z)]})]}),(0,l.jsx)(x.v,{tx:"Withdraw",config:$,disabled:_<=0n||_>Z||(0,v.su)(z)>O,onTxSuccess:()=>{console.info("Redeem onSuccess:"),V("")},approves:{[null==s?void 0:s.xTokenAddress]:Y,[i.O1[(0,a.BV)()]]:_},spender:null==s?void 0:s.vault})]})})]})]})})}function VaultCollapse(e){let{asset:s="ETH"}=e,{balances:t,prices:d,vaultsMode:c,vaultsState:x}=(0,o.useContext)(n.g),m=i.iK[(0,a.BV)()].find(e=>e.assetTokenSymbol==s),u=function(e){let{vaultsState:s}=(0,o.useContext)(n.g),t=s[(null==e?void 0:e.vault)||"null"],l=Math.max(0,1+1/((0,v.pF)((0,v.ok)(t,"aar"),(0,v.ok)(t,"AARDecimals"))-1));return l}(m),f=(0,v.ok)(d,null==m?void 0:m.assetTokenSymbol),j=(0,p.dq)((0,v.ok)(x,[null==m?void 0:m.vault,"M_ETH"])),b=(0,p.dq)((0,v.ok)(x,[null==m?void 0:m.vault,"M_ETHx"])),g=(0,p.dq)((0,v.ok)(x,[null==m?void 0:m.vault,"M_ETH"])*f/h.Pq),N=(0,p.dq)((0,v.ok)(x,[null==m?void 0:m.vault,"M_USB_ETH"])),w=(0,v.Rr)((0,v.ok)(x,[null==m?void 0:m.vault,"aar"]),(0,v.ok)(x,[null==m?void 0:m.vault,"AARDecimals"])),S=c[null==m?void 0:m.assetTokenSymbol],{discountEnable:P}=(0,y.W)(m),{address:H}=(0,C.mA)(),[D,q]=(0,o.useState)(!1),L="ETH"===s?"ETHx":"USDBx",F="/".concat(s,".svg"),Y="/".concat(s,"x.svg");return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"w-full flex flex-col md:flex-row justify-between items-center aspect-video md:aspect-auto md:h-[106px] bg-white border-[1px] border-[#E4E4E7] rounded-t-[16px] p-[20px] md:p-[30px]",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row w-[85%] gap-3 md:gap-[5rem]",children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)(r(),{alt:"",width:40,height:40,src:F}),(0,l.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-black text-base font-semibold leading-[16px]",children:s}),(0,l.jsxs)("div",{className:"text-[#64748B] text-sm font-medium leading-[14px]",children:["$",j]})]})]}),(0,l.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-[4rem] border-t-1 border-[#E4E4E7] md:border-0",children:[(0,l.jsxs)("div",{className:"flex flex-col justify-between relative gap-2 md:gap-0",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:"Total Deposit"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{width:14,height:14,src:F,alt:""}),(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:j})]}),(0,l.jsxs)("div",{className:"absolute bottom-[-14px] md:bottom-[-24px] text-[#64748B] text-xs font-semibold leading-[12px]",children:["~$",g]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:"USB Debt"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{width:14,height:14,src:W.USB,alt:""}),(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:N})]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:[L,(0,l.jsx)(A.C,{children:"This is a Margin token, representing your open position in the vault."})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{width:14,height:14,src:W[L],alt:""}),(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium ml-[5px]",children:b})]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsxs)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:["AAR",(0,l.jsx)(A.C,{children:"Asset Adequacy Ratio"})]}),(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:w})})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:"Status"}),(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"mr-[10px]",children:S<=1?E:V}),S<=1?"Stability":"Adjustment"]})})})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-[#64748B] text-xs font-semibold leading-[12px]",children:"Discount Offer"}),(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("span",{className:"text-black text-[14px] leading-[14px] font-medium",children:P?(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"mr-[10px]",children:E}),"Yes"]}):(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"mr-[10px]",children:V}),"No"]})})})]})]})]}),(0,l.jsxs)("div",{className:"flex items-center text-xs text-[#6466F1] cursor-pointer",onClick:()=>{q(!D)},children:[(0,l.jsx)("span",{className:"mr-[5px]",children:D?"Hide":"Details"}),D?M:U]})]}),(0,l.jsx)(B.Collapse,{isOpened:D,className:"ease-linear",children:(0,l.jsx)("div",{className:H?"w-full min-h-[286px] rounded-b-[16px] bg-[#E4E4E7] p-[30px]":"w-full h-[202px] rounded-b-[16px] bg-[#E4E4E7] p-[30px]",children:(0,l.jsxs)("div",{className:"w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,l.jsx)("div",{className:"md:h-full mb-[40px] md:mb-0 flex items-center",children:(0,l.jsxs)("div",{className:"flex mr-[55px]",children:[(0,l.jsx)(r(),{alt:"",width:54,height:54,src:Y}),(0,l.jsxs)("div",{className:"ml-[5px] flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"text-black text-[24px] font-semibold leading-[24px]",children:L}),(0,l.jsxs)("div",{className:"text-[#64748B] text-sm font-medium leading-[14px]",children:["$",b]})]})]})}),(0,l.jsx)("div",{className:"w-full md:w-[300px] min-h-[108px] flex flex-col justify-between",children:"ETH"===s?(0,l.jsxs)(l.Fragment,{children:[H&&(0,l.jsxs)("div",{className:"h-[84px] p-[20px] text-[#64748B] text-xs font-medium leading-[12px] bg-white rounded-[16px] mb-[10px]",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,l.jsx)("div",{children:"Open Position"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{src:W.ETH,width:12,height:12,alt:"",className:"mr-[5px]"}),"43.323"]})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,l.jsxs)("div",{children:["Margin Loan",(0,l.jsx)(A.C,{children:"Repay your margin loan to redeem ETHcorresponding to your open position."})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{src:W.USB,width:12,height:12,alt:"",className:"mr-[5px]"}),"43.323"]})]})]}),(0,l.jsxs)("div",{className:" text-[#64748B] text-xs font-medium leading-[12px] bg-white px-[30px] py-[23px] rounded-[16px]",children:[(0,l.jsxs)("div",{className:"flex items-center mb-[16px]",children:[R,u.toFixed(2),"x Leveraged long on ETH"]}),(0,l.jsxs)("div",{className:"flex items-center mb-[16px]",children:[R,"Add ETHx to wallet"]}),(0,l.jsxs)("div",{className:"flex items-center mb-[16px]",children:[R,"Add USB to wallet"]}),(0,l.jsxs)("div",{className:"flex items-center",children:[R,"View contract"]})]})]}):(0,l.jsxs)(l.Fragment,{children:[H&&(0,l.jsxs)("div",{className:"h-[84px] p-[20px] text-[#64748B] text-xs font-medium leading-[12px] bg-white rounded-[16px] mb-[10px]",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,l.jsx)("div",{children:"Open Position"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{src:W.ETH,width:12,height:12,alt:"",className:"mr-[5px]"}),"43.323"]})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between mb-[16px]",children:[(0,l.jsxs)("div",{children:["Margin Loan",(0,l.jsx)(A.C,{children:"Repay your margin loan to redeem ETHcorresponding to your open position."})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(r(),{src:W.USB,width:12,height:12,alt:"",className:"mr-[5px]"}),"43.323"]})]})]}),(0,l.jsxs)("div",{className:"text-[#64748B] text-xs font-medium leading-[12px] bg-white px-[30px] py-[23px] rounded-[16px]",children:[(0,l.jsxs)("div",{className:"flex items-center mt-[16px]",children:[R,"Add USDBx to wallet"]}),(0,l.jsxs)("div",{className:"flex items-center mt-[16px]",children:[R,"Add USB to wallet"]}),(0,l.jsxs)("div",{className:"flex items-center mt-[16px]",children:[R,"View contract"]})]})]})})]}),(0,l.jsx)("div",{className:"w-full md:min-w-[604px] md:flex md:items-center md:justify-center",children:H&&m?(0,l.jsx)(VaultSimple,{vaultConfig:m}):m?(0,l.jsx)(k.x3,{}):(0,l.jsx)(T.Z,{className:"rounded",children:"Comming soon"})})]})})})]})}function Vaults(){let{aar:e,assetLocked:s,prices:t}=(0,o.useContext)(n.g);return i.iK[(0,a.BV)()].find(e=>"ETH"==e.assetTokenSymbol),(0,l.jsxs)("div",{className:"w-full max-w-screen-xl px-4 mx-auto md:pb-8",children:[(0,l.jsx)("h2",{className:"text-2xl font-semibold text-neutral-900",children:"Vaults"}),(0,l.jsxs)("div",{className:"w-full mt-[20px] mb-[30px] flex text-[24px] md:text-[14px] text-[#64748B] font-medium leading-[24px] md:leading-[14px]",children:[(0,l.jsx)("div",{className:"min-w-[21px] mt-[5px] md:mt-0",children:(0,l.jsx)(r(),{width:21,height:14,src:"./vector.png",alt:"vector"})}),(0,l.jsx)("span",{className:"ml-[6px]",children:"Depositing assets into the Vaults not only yields protocol income but also qualifies for Blast Developer Airdrop."})]}),(0,l.jsxs)(d.r,{numItemsMd:1,className:"gap-3 mt-4",children:[(0,l.jsx)(VaultCollapse,{asset:"ETH"}),(0,l.jsx)(VaultCollapse,{asset:"USDB"})]})]})}},76036:function(e,s,t){"use strict";t.d(s,{v:function(){return ApproveAndTx}});var l=t(57437),a=t(72009),i=t(81628),n=t(2265),d=t(71424),c=t(56926),r=t(72);let o={},useApproves=function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*BigInt(1e18),{address:l}=(0,c.mA)(),x=(0,c.t_)(),{data:m}=(0,c.py)(),[u,h]=(0,n.useState)(!1),f=(0,n.useMemo)(()=>Object.keys(e).filter(e=>e!==a.K8),[e]),[v,p]=(0,n.useState)(s&&o[s]||{}),updateAllownce=(e,t)=>{s&&(o[s]={...o[s]||{},[e]:t},p(s=>({...s,[e]:t})))},{data:j}=(0,c.Ov)();(0,n.useEffect)(()=>{l&&s&&f.forEach(e=>{x.readContract({abi:r.em,address:e,functionName:"allowance",args:[l,s]}).then(s=>updateAllownce(e,s)).catch(console.error)})},[f,l,j]);let[b,g]=(0,n.useState)(!1),N=(0,n.useMemo)(()=>f.filter(s=>(0,i.ok)(e,s)>0n&&(0,i.ok)(e,s)>(0,i.ok)(v,s)),[e,f,v]),approve=async()=>{if(0!=N.length&&s)try{g(!0),h(!1);for(let l=0;l<N.length;l++){let a=N[l],i=!1===t?e[a]:t,n=await (null==m?void 0:m.writeContract({abi:r.em,address:a,functionName:"approve",args:[s,i]}));n&&await (null==x?void 0:x.waitForTransactionReceipt({hash:n})),updateAllownce(a,i)}d.A.success("Approve success"),g(!1),h(!0)}catch(e){throw d.A.error((0,i.az)(e)),g(!1),h(!1),e}};return{approve,loading:b,shouldApprove:N.length>0,isSuccess:u}};var x=t(43003),m=t(35769),u=t(72084);function ApproveAndTx(e){let{className:s,tx:t,approves:a,spender:i,requestAmount:d,config:c,toast:r=!0,disabled:o,onTxSuccess:h,onApproveSuccess:f}=e,{write:v,isDisabled:p,isLoading:j,isSuccess:b}=(0,x.R)(c,r),g=(0,n.useRef)();g.current=h,(0,n.useEffect)(()=>{g.current&&b&&g.current()},[b]);let N=o||p||j||!1===c.enabled,{approve:w,shouldApprove:y,loading:S,isSuccess:k}=useApproves(a||{},i,d),B=(0,n.useRef)();return(B.current=f,(0,n.useEffect)(()=>{B.current&&k&&B.current()},[k]),y)?(0,l.jsxs)("button",{className:(0,m.m)("btn-primary flex items-center justify-center gap-4",s),onClick:w,disabled:o||!w||S,children:[S&&(0,l.jsx)(u.$,{}),"Approve"]}):(0,l.jsxs)("button",{className:(0,m.m)("btn-primary flex items-center justify-center gap-4",s),onClick:()=>v(),disabled:N,children:[j&&(0,l.jsx)(u.$,{}),t]})}},80547:function(e,s,t){"use strict";t.d(s,{W:function(){return AssetInput}});var l=t(57437),a=t(81628),i=t(20373),n=t(57042),d=t(16691),c=t.n(d),r=t(2265),o=t(16775),x=t(82288);function AssetInput(e){let{asset:s="ETH",balance:t,balanceTit:d="Balance",balanceDecimals:m=18,exchange:u,readonly:h,selected:f,onClick:v,amount:p,setAmount:j,price:b,disable:g,hasInput:N=!1,options:w,onChange:y=()=>{},defaultValue:S,balanceClassName:k=""}=e,B=(0,r.useRef)(null),C=void 0!==t&&(0,a.su)("number"==typeof p?p+"":p||"")>("bigint"==typeof t?t:0n);return(0,l.jsxs)("div",{className:"relative w-full",onClick:()=>{v&&!g&&v()},children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,l.jsx)(c(),{width:24,height:24,src:"/".concat(s,".svg"),alt:""}),(0,l.jsxs)("div",{className:"text-base font-medium",children:[(0,l.jsxs)("div",{children:[N?(0,l.jsx)(x.ZP,{options:w,onChange:y,defaultValue:S,styles:{control:(e,s)=>({...e,border:"0px",minHeight:"24px",padding:"0px",background:"rgb(248 250 252)"})}}):(0,l.jsx)("div",{children:s}),b&&(0,l.jsx)("div",{className:"text-neutral-500 text-xs",children:b})]}),u&&(0,l.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",u]})]})]}),(0,l.jsx)("input",{value:p,onChange:e=>j(e.target.value),ref:B,type:"number",disabled:g,className:(0,n.Z)(h?"bg-slate-50":"bg-white",{"border-red-400 !border-2 focus:border-red-400":C,"border-slate-400  focus:border-blue-400 ":!C},"w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",step:.01,title:"",readOnly:h})]}),void 0!=t&&(0,l.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,l.jsxs)("div",{className:k,children:[(0,l.jsxs)("span",{children:[d,": ",(0,i.Rp)(t,3,m)]}),(0,l.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,o.b)(t,m);j(e),v&&!g&&v()},children:"Max"})]}),(0,l.jsx)("div",{className:"text-sm text-red-400",children:C?"Insufficient account balance":""})]})]})}},72084:function(e,s,t){"use strict";t.d(s,{$:function(){return Spinner}});var l=t(57437);let Spinner=e=>{let{className:s}=e;return(0,l.jsxs)("svg",{fill:"none",className:s?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},64020:function(e,s,t){"use strict";t.d(s,{C:function(){return Tip}});var l=t(57437),a=t(75224),i=t(71824);function Tip(e){let{children:s,node:t}=e;return(0,l.jsx)(a.zt,{children:(0,l.jsxs)(a.fC,{children:[(0,l.jsx)(a.xz,{asChild:!0,children:t?(0,l.jsx)("div",{className:"inline-block",style:{verticalAlign:"text-bottom"},children:t}):(0,l.jsx)("div",{className:"inline-block px-1",style:{verticalAlign:"text-bottom"},children:(0,l.jsx)(i.if7,{className:"inline-block w-[14px] h-[14px] stroke-slate-500"})})}),(0,l.jsx)(a.h_,{children:(0,l.jsxs)(a.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:[s,(0,l.jsx)(a.Eh,{})]})})]})})}},21965:function(e,s,t){"use strict";t.d(s,{W:function(){return useVaultDiscount}});var l=t(12831),a=t(89859),i=t(21693),n=t(81628),d=t(2265),c=t(15898);function useVaultDiscount(e){let{vaultsState:s,vaultsMode:t}=(0,d.useContext)(c.g),r=s[(null==e?void 0:e.vault)||"null"],o=t[(null==e?void 0:e.vault)||"null"],x=(0,d.useMemo)(()=>({vc:e,abi:a.WW,address:null==e?void 0:e.vault,functionName:"getParamValue",args:[(0,i.$G)("CircuitBreakPeriod",{size:32})]}),[e]),m=(0,l.D2)(x),u=(0,n.ok)(m,"data"),h=(0,n.ok)(r,"AARBelowCircuitBreakerLineTime"),f=o>=2&&u>0n&&r&&((0,n.ok)(r,"aar")>=(0,n.ok)(r,"AARC")||BigInt(new Date().getTime()/1e3)-h>=u);return{discountEnable:f}}},43003:function(e,s,t){"use strict";t.d(s,{R:function(){return useWrapContractWrite}});var l=t(81628),a=t(2265),i=t(71424),n=t(56926),d=t(12831);function useWrapContractWrite(e){let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[t,c]=(0,a.useState)(!1),[r,o]=(0,a.useState)(!1),x=(0,n.t_)(),{data:m}=(0,n.py)(),u=!x||!m||!m.account||t||!e||"object"==typeof e&&!1==e.enabled,write=async()=>{if(!u){c(!0),o(!1);try{let t="function"==typeof e?await e():await (0,d.zp)(e),l=await m.writeContract({account:m.account,address:t.address,abi:t.abi,functionName:t.functionName,args:t.args,value:t.value}),a=await x.waitForTransactionReceipt({hash:l});if("success"!==a.status)throw"Transaction reverted";o(!0),s&&i.A.success("Transaction success")}catch(e){s&&i.A.error((0,l.az)(e))}c(!1)}};return{write,isDisabled:u,isLoading:t,isSuccess:r}}},20373:function(e,s,t){"use strict";t.d(s,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var l=t(16775),a=t(79352);let displayBalanceWithUnit=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let a=10**s;return(Math.floor(Number((0,l.b)(e,t))*a)/a).toLocaleString("en-US",{maximumFractionDigits:s})},displayBalance=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let t=10**s;return(Math.floor(Number((0,a.d)(e))*t)/t).toLocaleString("en-US",{maximumFractionDigits:s,minimumFractionDigits:s})},displayBalanceWithoutFormat=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let t=10**s;return String(Math.floor(Number((0,a.d)(e))*t)/t)}}},function(e){e.O(0,[3027,3033,8061,9593,9510,2539,510,8156,619,203,4725,7356,2128,4691,4322,2971,2472,1744],function(){return e(e.s=26295)}),_N_E=e.O()}]);