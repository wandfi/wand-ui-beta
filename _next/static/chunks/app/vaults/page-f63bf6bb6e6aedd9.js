(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{31851:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var a=s(50044),l=s(2265),n=s(93568),i=s(76503);let r=(0,n.fn)("Table"),d=l.forwardRef((e,t)=>{let{children:s,className:n}=e,d=(0,a.__rest)(e,["children","className"]);return l.createElement("div",{className:(0,i.q)(r("root"),"overflow-auto",n)},l.createElement("table",Object.assign({ref:t,className:(0,i.q)(r("table"),"w-full tabular-nums text-tremor-default","text-tremor-content","dark:text-dark-tremor-content")},d),s))});d.displayName="Table"},75646:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var a=s(50044),l=s(2265),n=s(93568),i=s(76503);let r=(0,n.fn)("TableBody"),d=l.forwardRef((e,t)=>{let{children:s,className:n}=e,d=(0,a.__rest)(e,["children","className"]);return l.createElement(l.Fragment,null,l.createElement("tbody",Object.assign({ref:t,className:(0,i.q)(r("root"),"align-top overflow-x-auto divide-y","divide-tremor-border","dark:divide-dark-tremor-border",n)},d),s))});d.displayName="TableBody"},63326:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var a=s(50044),l=s(2265),n=s(37517),i=s(93568),r=s(76503);let d=(0,i.fn)("TableCell"),c=l.forwardRef((e,t)=>{let{children:s,className:i}=e,c=(0,a.__rest)(e,["children","className"]);return l.createElement(l.Fragment,null,l.createElement("td",Object.assign({ref:t,className:(0,r.q)(d("root"),"align-middle whitespace-nowrap tabular-nums text-left",n.W.twoXl.paddingAll,i)},c),s))});c.displayName="TableCell"},68938:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var a=s(50044),l=s(2265),n=s(93568),i=s(76503);let r=(0,n.fn)("TableHead"),d=l.forwardRef((e,t)=>{let{children:s,className:n}=e,d=(0,a.__rest)(e,["children","className"]);return l.createElement(l.Fragment,null,l.createElement("thead",Object.assign({ref:t,className:(0,i.q)(r("root"),"text-left","text-tremor-content","dark:text-dark-tremor-content",n)},d),s))});d.displayName="TableHead"},56760:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var a=s(50044),l=s(2265),n=s(93568),i=s(76503);let r=(0,n.fn)("TableRow"),d=l.forwardRef((e,t)=>{let{children:s,className:n}=e,d=(0,a.__rest)(e,["children","className"]);return l.createElement(l.Fragment,null,l.createElement("tr",Object.assign({ref:t,className:(0,i.q)(r("row"),n)},d),s))});d.displayName="TableRow"},79043:function(e,t,s){"use strict";s.d(t,{i:function(){return a.Z},r:function(){return l.Z}});var a=s(68114),l=s(77832)},26295:function(e,t,s){Promise.resolve().then(s.bind(s,41522))},41522:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Vaults}});var a=s(57437),l=s(91056),n=s(72009),i=s(99057),r=s(20373),d=s(79043),c=s(16691),o=s.n(c),u=s(2265),m=s(81628),x=s(31851),v=s(75646),f=s(63326),h=s(68938),b=s(56760),j=s(64020);function NetValue(e){let{asset:t}=e,{prices:s,vaultsState:d}=(0,u.useContext)(i.FetcherContext),c=n.iK[(0,l.B)()][0],N=s["".concat(t,"x")]||0n,g=d[c.vault],y=Math.max(0,1+1/((0,m.pF)((null==g?void 0:g.aar)||0n,(null==g?void 0:g.AARDecimals)||0n)-1));return(0,a.jsxs)("h5",{className:"font-bold text-sm text-slate-700 mt-4",children:["Net Value",(0,a.jsx)(j.C,{children:"The Net value is calculated based on the underlying assets and is backed by these assets. The Market Price on secondary markets might deviate from the Net value due to a variety of factors. Anyone can engage in arbitrage, and such actions will serve to eliminate these discrepancies."}),(0,a.jsxs)(x.Z,{className:"mt-4 text-sm font-normal",children:[(0,a.jsx)(h.Z,{}),(0,a.jsxs)(v.Z,{children:[(0,a.jsxs)(b.Z,{children:[(0,a.jsxs)(f.Z,{className:"flex gap-2 px-0",children:[(0,a.jsx)(o(),{src:"/USB.svg",width:20,height:20,alt:"USB"}),"USB"]}),(0,a.jsx)(f.Z,{children:"Universal Stable Basis"}),(0,a.jsx)(f.Z,{}),(0,a.jsx)(f.Z,{className:"text-right",children:"$1"})]}),(0,a.jsxs)(b.Z,{children:[(0,a.jsxs)(f.Z,{className:"flex gap-2 px-0",children:[(0,a.jsx)(o(),{src:"/".concat(t+"x",".svg"),width:20,height:20,alt:"ETHx"}),t,"x"]}),(0,a.jsxs)(f.Z,{children:[(0,a.jsxs)("span",{className:"text-base text-slate-700",children:[y.toFixed(2),"x "]}),"Leveraged long on ETH"]}),(0,a.jsx)(f.Z,{}),(0,a.jsxs)(f.Z,{className:"text-right",children:["$",(0,r.dq)(N)]})]})]})]})]})}var N=s(76036),g=s(80547),y=s(1150),S=s(90228),T=s(85156),k=s(8580),p=s(34522),w=s(41697),A=s(35769),B=s(56926);let U="$USB";function VaultCard(e){var t,s,d,c,o,x,v;let{asset:f}=e,{balances:h,prices:b,vaultsMode:j}=(0,u.useContext)(i.FetcherContext),Z=n.iK[(0,l.B)()].find(e=>e.assetTokenSymbol==f),R=n.jX[(0,l.B)()],q=j[Z.assetTokenSymbol],[E,C]=(0,u.useState)("mint"),[M,P]=(0,u.useMemo)(()=>{let e="mint"==E;return 3==q?["Adjustment Model--High AAR",e?"Minting ".concat(U," alone is feasible"):"Redeeming ".concat(Z.xTokenSymbol," alone is feasible")]:2==q?["Adjustment Model--Low AAR",e?"Minting ".concat(Z.xTokenSymbol," alone is feasible"):"Redeeming ".concat(U," alone is feasible")]:["Stability Model",e?"".concat(U," and ").concat(Z.xTokenSymbol," will be minted in fixed ratio"):"Redemption require a fixed ration of ".concat(U," and ").concat(Z.xTokenSymbol)]},[q,Z,E]),[V,_]=(0,u.useState)(""),[H,F]=(0,u.useState)(""),[L,O]=(0,u.useState)(""),W=b[Z.assetTokenSymbol]||0n,$=b[Z.xTokenSymbol]||0n,z=(0,u.useMemo)(()=>{var e;return null==h?void 0:null===(e=h.find(e=>e.symbol===f))||void 0===e?void 0:e.balance},[h]),K=(0,u.useMemo)(()=>{var e;return null==h?void 0:null===(e=h.find(e=>"USB"===e.symbol))||void 0===e?void 0:e.balance},[h]),D=(0,u.useMemo)(()=>{var e;return null==h?void 0:null===(e=h.find(e=>e.symbol===f+"x"))||void 0===e?void 0:e.balance},[h]),[X,Y]=(0,u.useState)(""),[I,G]=(0,u.useState)(""),[J,Q]=(0,u.useState)("USB"),{data:[ee,et,es]=[void 0,void 0,void 0]}=(0,B.Dm)({contracts:[{abi:S.Z,address:R,functionName:q>1?"calcMintPairsAtAdjustmentPhase":"calcMintPairsAtStabilityPhase",args:[Z.vault,(0,m.su)(V||"0")]},{abi:S.Z,address:R,functionName:"calcMintUsbAboveAARU",args:[Z.vault,(0,m.su)(V||"0")]},{abi:S.Z,address:R,functionName:"calcMintLeveragedTokensBelowAARS",args:[Z.vault,(0,m.su)(V||"0")]}],watch:!0,enabled:"mint"==E}),ea=(null==ee?void 0:null===(t=ee.result)||void 0===t?void 0:t[1])||0n,el=(null==ee?void 0:null===(s=ee.result)||void 0===s?void 0:s[2])||0n,en=(null==et?void 0:null===(d=et.result)||void 0===d?void 0:d[1])||0n,ei=(null==es?void 0:null===(c=es.result)||void 0===c?void 0:c[1])||0n,{data:[er,ed,ec,eo,eu]=[void 0,void 0,void 0,void 0,void 0]}=(0,B.Dm)({contracts:[{abi:S.Z,address:R,functionName:"calcPairedRedeemAssetAmount",args:[Z.vault,(0,m.su)(L||"0")]},{abi:S.Z,address:R,functionName:"calcPairdLeveragedTokenAmount",args:[Z.vault,(0,m.su)(H||"0")]},{abi:S.Z,address:R,functionName:"calcPairedUsbAmount",args:[Z.vault,(0,m.su)(L||"0")]},{abi:S.Z,address:R,functionName:"calcRedeemByLeveragedTokenAboveAARU",args:[Z.vault,(0,m.su)(L||"0")]},{abi:S.Z,address:R,functionName:"calcRedeemByUsbBelowAARS",args:[Z.vault,(0,m.su)(H||"0")]}],watch:!0,enabled:"redeem"==E}),em=(null==er?void 0:null===(o=er.result)||void 0===o?void 0:o[1])||0n,ex=(null==ed?void 0:ed.result)||0n,ev=(null==ec?void 0:ec.result)||0n,ef=(null==eo?void 0:null===(x=eo.result)||void 0===x?void 0:x[1])||0n,eh=(null==eu?void 0:null===(v=eu.result)||void 0===v?void 0:v[1])||0n,eb=I==Z.xTokenSymbol,ej="USB"==I,eN=(0,u.useMemo)(()=>{let e={abi:y.Z,address:Z.vault,args:[(0,m.su)(V)],value:Z.assetTokenAddress==n.K8?(0,m.su)(V):0n,functionName:"mintPairsAtAdjustmentPhase"};return(0==q||1==q)&&(e.functionName="mintPairsAtStabilityPhase"),"USB"==X&&(e.functionName="mintUSBAboveAARU"),X==Z.xTokenSymbol&&(e.functionName="mintLeveragedTokensBelowAARS"),e},[q,X,V,Z]),eg=(0,u.useMemo)(()=>{let e={abi:y.Z,address:Z.vault,functionName:"USB"==I?"redeemByPairsWithExpectedUSBAmount":"redeemByPairsWithExpectedLeveragedTokenAmount",args:"USB"==I?[(0,m.su)(H)]:[(0,m.su)(L)]};return I==Z.xTokenSymbol&&(e.functionName="redeemByLeveragedTokenAboveAARU",e.args=[(0,m.su)(L)]),"USB"==I&&(e.functionName="redeemByUsbBelowAARS",e.args=[(0,m.su)(H)]),e},[q,I,H,L,Z]),ey=X==Z.xTokenSymbol?0n:"USB"===X?en:ea,eS="USB"==X?0n:X===Z.xTokenSymbol?ei:el,eT="USB"==J?H:(0,r.dq)(ev),ek=J==Z.xTokenSymbol?L:(0,r.dq)(ex),ep=eb?ef:ej?eh:em;return(0,a.jsxs)("div",{className:(0,A.m)("card relative",q>1?"!bg-violet-500/10":""),children:[(0,a.jsxs)("div",{className:"mb-1 ssm:mb-0 ssm:absolute top-[29px] right-6 flex flex-col items-end",children:[(0,a.jsxs)("div",{className:(0,A.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,a.jsx)("div",{className:(0,A.m)("w-3 h-3 rounded-full","Stability Model"==M?"bg-green-500":"bg-red-500")}),(0,a.jsx)("div",{className:(0,A.m)("Stability Model"==M?"text-green-500":"text-red-500"),children:M})]}),(0,a.jsx)("div",{className:"text-xs text-neutral-500",children:P})]}),(0,a.jsx)("div",{className:"relative flex items-center justify-between",children:(0,a.jsxs)(p.fC,{defaultValue:"mint",className:"w-full",onValueChange:e=>C(e),children:[(0,a.jsxs)(p.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[(0,a.jsx)(p.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"mint",children:"Mint"}),(0,a.jsx)(p.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:"redeem",children:"Redeem"})]}),(0,a.jsx)(p.VY,{value:"mint",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(g.W,{asset:f,exchange:(0,r.dq)(W*(0,m.su)(V)/k.Pq),balance:(0,r.dq)(z),amount:V,setAmount:_}),(0,a.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,a.jsx)(w.gPZ,{})}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)(g.W,{amount:(0,r.ZM)(ey),onClick:()=>{Y(3==q?"USB":"")},asset:"USB",exchange:(0,r.dq)(ey),readonly:!0,disable:q<=1,selected:"USB"===X}),(0,a.jsx)(g.W,{amount:(0,r.ZM)(eS),onClick:()=>{Y(2==q?Z.xTokenSymbol:"")},asset:Z.xTokenSymbol,exchange:(0,r.dq)($*(eS||0n)/k.Pq),readonly:!0,disable:q<=1,selected:X===Z.xTokenSymbol})]}),(0,a.jsx)(N.v,{tx:"Mint",disabled:(0,m.su)(V)>z,onTxSuccess:()=>{_("")},config:eN,approves:{[Z.assetTokenAddress]:(0,m.su)(V)},spender:Z.vault})]})}),(0,a.jsx)(p.VY,{value:"redeem",className:"flex flex-col gap-6",children:(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)(g.W,{amount:eb?"0":eT,setAmount:F,balance:(0,r.dq)(K),onClick:()=>{G(2==q?"USB":""),Q("USB")},asset:"USB",exchange:(0,r.dq)(eb?0n:(0,m.su)(eT)),readonly:I==Z.xTokenSymbol,selected:"USB"===I}),(0,a.jsx)(g.W,{amount:ej?"0":ek,setAmount:O,asset:Z.xTokenSymbol,onClick:()=>{G(3==q?Z.xTokenSymbol:""),Q(Z.xTokenSymbol)},exchange:(0,r.dq)(ej?0n:(0,m.su)(ek)*$/k.Pq),balance:(0,r.dq)(D),readonly:"USB"==I,selected:I===Z.xTokenSymbol})]}),(0,a.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,a.jsx)(w.gPZ,{})}),(0,a.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end",children:"Redemption Fee: 0.5%"})]}),(0,a.jsx)("div",{className:"w-full text-end"}),(0,a.jsx)(g.W,{asset:Z.assetTokenSymbol,amount:(0,r.dq)(ep),exchange:(0,r.dq)(W*(ep||0n)/k.Pq),readonly:!0}),(0,a.jsx)(N.v,{tx:"Redeem",config:eg,disabled:(0,m.su)(eT)>K||(0,m.su)(ek)>D,onTxSuccess:()=>{F(""),O(""),G(""),Q("USB")},approves:ej?{[T.O[(0,l.B)()]]:(0,m.su)(H)}:eb?{[Z.xTokenAddress]:(0,m.su)(L)}:{[Z.xTokenAddress]:(0,m.su)(L),[T.O[(0,l.B)()]]:(0,m.su)(H)},spender:Z.vault})]})})]})})]})}function VaultNetToken(e){let{vc:t,showX:s}=e,l=s?t.xTokenSymbol:t.assetTokenSymbol,{prices:n}=(0,u.useContext)(i.FetcherContext),d=(0,r.dq)(n[l])||"1";return(0,a.jsxs)("div",{className:"flex justify-between lg:justify-start gap-4 w-full items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,a.jsx)(o(),{width:32,height:32,src:"/".concat(l,".svg"),alt:"token"}),(0,a.jsx)("div",{className:"text-xs text-neutral-700 mt-0.5",children:l})]}),(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"text-lg",children:["$",d]})})]})}function Vaults(){let{aar:e,assetLocked:t,prices:s}=(0,u.useContext)(i.FetcherContext),c=n.iK[(0,l.B)()].find(e=>"ETH"==e.assetTokenSymbol);return(0,a.jsxs)("div",{className:"w-full max-w-screen-xl px-4 mx-auto",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold text-neutral-900",children:"ETH Vault"}),(0,a.jsxs)(d.r,{numItemsMd:2,className:"gap-3 mt-4",children:[(0,a.jsxs)("div",{className:"card",children:[(0,a.jsxs)("div",{className:"w-full text-sm px-4 py-6 bg-neutral-50 rounded-xl",children:[(0,a.jsx)("div",{className:"flex flex-col lg:flex-row items-center h-fit gap-4",children:c&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(VaultNetToken,{vc:c}),(0,a.jsx)(VaultNetToken,{vc:c,showX:!0})]})}),(0,a.jsx)(d.i,{}),(0,a.jsxs)("div",{className:"w-full flex justify-between",children:[(0,a.jsx)("div",{className:"text-neutral-500",children:"Total Value Locked"}),(0,a.jsxs)("div",{className:"text-neutral-900 flex items-center gap-2",children:[(0,a.jsx)(o(),{width:20,height:20,src:"/ETH.svg",alt:"token"}),(0,a.jsxs)("div",{children:[(0,r.dq)(t.ETH),(0,a.jsxs)("span",{children:["(~$",(0,r.dq)((t.ETH||0n)*(s.ETH||0n)/10n**18n),")"]})]})]})]}),(0,a.jsxs)("div",{className:"w-full flex justify-between mt-2",children:[(0,a.jsx)("div",{className:"text-neutral-500",children:"AAR (Asset Adequacy Ratio):"}),(0,a.jsx)("div",{className:"text-neutral-900 flex items-center gap-2",children:(0,a.jsxs)("div",{children:[(100*(e.ETH||0)).toFixed(),"%"]})})]})]}),(0,a.jsx)(NetValue,{asset:"ETH"})]}),(0,a.jsx)(VaultCard,{asset:"ETH"})]})]})}},64020:function(e,t,s){"use strict";s.d(t,{C:function(){return Tip}});var a=s(57437),l=s(75224),n=s(71824);function Tip(e){let{children:t}=e;return(0,a.jsx)(l.zt,{children:(0,a.jsxs)(l.fC,{children:[(0,a.jsx)(l.xz,{asChild:!0,children:(0,a.jsx)("div",{className:"inline-block px-1",style:{verticalAlign:"text-bottom"},children:(0,a.jsx)(n.if7,{className:"inline-block w-[14px] h-[14px] stroke-slate-500"})})}),(0,a.jsx)(l.h_,{children:(0,a.jsxs)(l.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:[t,(0,a.jsx)(l.Eh,{})]})})]})})}}},function(e){e.O(0,[27,33,61,986,149,725,818,602,857,203,342,971,472,744],function(){return e(e.s=26295)}),_N_E=e.O()}]);