(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{52827:function(e,t,a){Promise.resolve().then(a.t.bind(a,8367,23)),Promise.resolve().then(a.bind(a,79946)),Promise.resolve().then(a.t.bind(a,9487,23)),Promise.resolve().then(a.t.bind(a,62888,23)),Promise.resolve().then(a.t.bind(a,29180,23)),Promise.resolve().then(a.t.bind(a,39485,23)),Promise.resolve().then(a.t.bind(a,80265,23))},79946:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return PageLayout}});var s=a(31113),n=a(64103),l=a(73216),r=a(28767),i=a(63203),o=a(31030),d=a(19626),c=a(75734),h=a(62845),m=a(5374),x=a(36332),u=a(39939),f=a(8421),p=a(85646),g=a(51625),b=a(73920),v=a(15187),j=a(45248),w=a(99946),k=a(12045),N=a(75930),y=a(85895),S=a(8912),T=a(7915),C=a(32417),P=a(83037),L=a(1195),D=a(6069);let E=new y.f({uri:"https://api.studio.thegraph.com/query/45897/wand/version/latest",cache:new S.h}),z={batchSize:10,wait:500},I={batchSize:100,wait:500},_=new C.S;function Providers(e){let{children:t}=e,[a,y]=n.useState();n.useEffect(()=>{let e=(0,g.o)({storage:{getItem:e=>window.localStorage.getItem(e),removeItem:e=>window.localStorage.removeItem(e),setItem:(e,t)=>{"wagmi.cache"!==e&&localStorage.setItem(e,t)}}}),t=(0,r.a3)([{groupName:"Recommended",wallets:[d.U,c.P,h.D,m.c,x.X,u.J,f.b,p.D]}],{appName:"Wand",projectId:"b3ff10277f66a6ba31bbb88fb6ea4365"});y((0,b._)({connectors:t,storage:e,chains:l.Af,client:e=>{let{chain:t}=e;return(0,L.e)({chain:t,transport:(0,D.d)(t.rpcUrls.default.http[0],{batch:z}),batch:{multicall:I}})}}))},[]);let S=(0,k.l)(e=>e.theme);return a?(0,s.jsx)(T.e,{client:E,children:(0,s.jsx)(v.F,{config:a,children:(0,s.jsx)(P.aH,{client:_,children:(0,s.jsx)(w.QueryParamProvider,{adapter:j.Z,children:(0,s.jsx)(r.pj,{locale:"en-US",modalSize:"compact",theme:"dark"===S?(0,i.$)():(0,o.W)(),children:(0,s.jsx)(N.A,{children:t})})})})})}):null}var O=a(22139),A=a(26504),H=a(19757),Z=a(59175),F=a(15506),M=a(3168),W=a(33501),B=a(41690),U=a.n(B),V=a(42487),q=a.n(V),K=a(69708),R=a(39341),Y=a(13626),J=a(44726),Q=a(72366),X=a(35664),G=a(84253),$=a(26758);let ee=[{name:"doc",url:(0,O.xb)(),icon:Y.K99},{name:"Twitter",url:O.v,icon:Y.vJk},{name:"Discord",url:O.Hj,icon:Y.HpO}],et={[G.F.id]:"Ethereum Sepolia",[l.dm.id]:"Blast Sepolia",[l.A2.id]:"Story Odyssey Testnet",[l.mx.id]:"Blast"},ea={[G.F.id]:"/ETH.svg",[l.dm.id]:"/blast.png",[l.A2.id]:"/storynetwork.png",[l.mx.id]:"/blast.png"};function Header(){let e=(0,K.usePathname)(),{width:t}=(0,J.Z)(window.innerWidth,window.innerHeight),a="/"!==e&&t<1024,i=(0,Z.p)(),{openChainModal:o}=(0,r.iC)(),d=function(){var e,t;let a=(0,Z.p)(),{address:s}=(0,Q.m)(),{data:n}=(0,F.D2)({abi:A.WW,address:null===(t=H.iK[a])||void 0===t?void 0:null===(e=t[0])||void 0===e?void 0:e.vault,functionName:"owner",query:{enabled:!!s}});return!!s&&s==n}(),c=function(){var e,t;let a=(0,Z.p)(),{address:s}=(0,Q.m)(),{data:n}=(0,F.D2)({abi:A.Og,address:null===(t=H.iK[a])||void 0===t?void 0:null===(e=t[0])||void 0===e?void 0:e.assetTokenFeed,functionName:"isTester",args:[s],query:{enabled:!!s}});return!!n}(),h=(0,n.useMemo)(()=>{let e=[..."beta"==$.O||"test"==$.O?[{href:"/lntVaults",label:"LNT Vaults",icon:R.bBF}]:[],{href:"/vaults",label:"Vaults",icon:R.QZG},{href:"/earn",label:"Earn",icon:R.j0p},{href:"/discount",label:"Discount Offer",icon:R.nlc},{href:"/dashboard",label:"Dashboard",icon:R.FL4}];return d&&e.push({href:"/admin",label:"Admin",icon:R.C5v}),c&&e.push({href:"/tester",label:"Tester",icon:R.rv8}),e},[d,c]),{chain:m,address:x}=(0,Q.m)(),u=!m||-1==l.Af.findIndex(e=>e.id==m.id)||l.Af.length<=1;return(0,s.jsx)("div",{className:"h-[72px] fixed w-full flex bg-slate-50/30 backdrop-blur-lg dark:text-slate-50 dark:bg-slate-900/30 z-30",children:(0,s.jsxs)("header",{className:"h-[72px] w-full max-w-[1440px] inset-0 mx-auto flex items-center justify-between px-4   z-30 ml-[calc(100vw - 100%)] w-f ",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)(q(),{href:"/",className:"flex items-center pr-1 text-base font-semibold leading-7",children:[(0,s.jsx)(U(),{className:"",src:"/logo-alt.svg",height:52,width:52,alt:"wand logo image only"}),(0,s.jsx)("span",{className:"font-poppins",style:{display:a?"none":"inline-block"},children:"Wand"})]}),(0,s.jsxs)(M.fC,{children:[(0,s.jsxs)(M.xz,{className:(0,W.Z)("flex text-slate-500 dark:text-slate-50 font-medium items-center capitalize text-sm",{hidden:!a}),children:[e.split("/")[1],(0,s.jsx)(Y.YRR,{})]}),(0,s.jsx)(M.Uv,{children:(0,s.jsx)(M.VY,{className:"z-50 p-1 bg-white border rounded-md shadow-lg border-slate-200 dark:bg-gray-800 dark:border-gray-700",children:h.map(e=>{let{href:t,label:a,icon:n}=e;return(0,s.jsx)(M.ck,{children:(0,s.jsxs)(q(),{className:"flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-sm text-slate-500 hover:bg-slate-50 dark:text-slate-50 dark:hover:bg-gray-700/30",href:t,children:[(0,s.jsx)(n,{}),a]})},a)})})})]})]}),"/"!==e?(0,s.jsx)("div",{className:"items-center justify-between flex-1 hidden px-5 lg:flex",children:h.map(t=>{let{href:a,label:n,icon:l}=t;return(0,s.jsxs)(q(),{className:(0,W.Z)("text-sm font-medium flex gap-1 mx-auto items-center transition-all active:translate-y-1",e===a?"text-slate-700 dark:text-slate-50":"text-slate-500 dark:text-slate-50/50"),href:a,children:[(0,s.jsx)(l,{}),n]},a)})}):null,(0,s.jsxs)("div",{className:"flex items-center gap-1 md:gap-4",children:[(0,s.jsx)(k.h,{}),(0,s.jsx)("div",{className:"items-center hidden gap-3 lg:flex",children:ee.map(e=>{let{url:t,icon:a,name:n}=e;return(0,s.jsx)(q(),{href:t,className:"text-slate-300 hover:text-indigo-500",children:(0,s.jsx)(a,{})},n)})}),u&&(0,s.jsxs)("div",{className:"flex items-center gap-2 text-sm font-medium rounded-full cursor-pointer text-slate-500",onClick:()=>o&&o(),children:[(0,s.jsx)(U(),{width:24,height:24,src:ea[i],alt:""}),(0,s.jsx)("div",{className:"hidden sm:block",children:et[i]})]}),"/"===e?(0,s.jsx)(q(),{href:"/vaults",className:"px-4 py-2 text-sm font-medium leading-6 text-white bg-indigo-500 rounded-full h-fit whitespace-nowrap",children:"Launch App"}):(0,s.jsx)(X.Z,{})]})]})})}var es=a(47259);function PageLayout(e){let{children:t}=e;return(0,n.useEffect)(()=>{"localhost"!==location.hostname&&location.hostname!==O.L3.value&&(O.L3.value=location.hostname)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Providers,{children:[(0,s.jsx)(Header,{}),(0,s.jsx)("div",{className:"min-h-[calc(100vh+1px)] h-auto pt-[80px] pb-6",children:t})]}),(0,s.jsx)(es.x,{position:"top-right",offset:70})]})}},35664:function(e,t,a){"use strict";a.d(t,{Z:function(){return ConnectBtn}});var s=a(31113),n=a(28767),l=a(44726);function ConnectBtn(){let e=(0,l.Z)(1024);return(0,s.jsx)(n.NL,{chainStatus:e.width>600?"full":"icon",showBalance:!1})}},2987:function(e,t,a){"use strict";a.d(t,{o:function(){return SimpleDialog}});var s=a(31113),n=a(26361),l=a(15166),r=a(16916);function SimpleDialog(e){let{trigger:t,children:a,className:i,style:o,closeClassName:d,disableOutClose:c,disableClose:h,triggerProps:m,...x}=e;return(0,s.jsxs)(l.fC,{...x,children:[(0,s.jsx)(l.xz,{...m||{},children:t}),(0,s.jsxs)(l.h_,{children:[(0,s.jsx)(l.aV,{className:"fixed top-0 left-0 inset-0 z-50 bg-black/60"}),(0,s.jsxs)(l.VY,{onEscapeKeyDown:e=>{h&&e.stopPropagation(),h&&e.preventDefault()},onInteractOutside:e=>{console.info("e:",e),c&&e.stopPropagation(),c&&e.preventDefault()},style:o,className:(0,n.cn)("fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#333333] rounded-2xl overflow-hidden shadow-2xl z-50",i),children:[a,(0,s.jsx)(l.x8,{disabled:h,className:(0,n.cn)("absolute right-4 top-4 cursor-point text-xl",d),children:(0,s.jsx)(r.abH,{})})]})]})]})}},12045:function(e,t,a){"use strict";a.d(t,{h:function(){return ThemeMode},l:function(){return d}});var s=a(31113),n=a(26361),l=a(64103),r=a(69426),i=a(48338),o=a(2987);let getThemeState=()=>{let e="light",t="light";return"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(document.documentElement.classList.remove("dark"),e="light",t="light"):(document.documentElement.classList.add("dark"),e="dark",t="dark"),"theme"in localStorage||(e="system"),{themeMode:e,theme:t}},d=(0,i.Ue)(e=>({...getThemeState(),setThemeMode:t=>e(()=>({themeMode:t})),setTheme:t=>e(()=>({theme:t}))})),c={light:(0,s.jsx)(r.EWX,{}),dark:(0,s.jsx)(r.Dq,{}),system:(0,s.jsx)(r.pUp,{})};function ThemeMode(){let e=d(),onChangeTheme=()=>{let{theme:t,themeMode:a}=getThemeState();e.setTheme(t),e.setThemeMode(a)};(0,l.useEffect)(()=>{onChangeTheme()},[]);let onClick=e=>{"System"==e?localStorage.removeItem("theme"):localStorage.theme=e.toLocaleLowerCase(),onChangeTheme()};return(0,s.jsx)(o.o,{className:"max-w-[200px] py-10 flex flex-col text-base text-stone-500 dark:text-white",trigger:(0,s.jsx)("div",{className:"text-xl",children:c[e.theme]}),children:["Light","Dark","System"].map((t,a)=>(0,s.jsxs)("div",{className:(0,n.cn)("flex px-5 items-center py-2 gap-3 cursor-pointer",{"bg-stone-100 dark:bg-zinc-700":t.toLowerCase()==e.themeMode}),onClick:()=>onClick(t),children:[(0,s.jsx)("div",{className:"text-2xl",children:c[t.toLowerCase()]}),(0,s.jsx)("span",{className:"",children:t})]},"theme_mode_"+t))})}},8367:function(){}},function(e){e.O(0,[7495,4643,7588,4176,4775,8559,2639,6209,131,7869,8410,5166,1690,8347,6425,1578,7638,7093,604,1744],function(){return e(e.s=52827)}),_N_E=e.O()}]);