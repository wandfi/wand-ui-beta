(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2705],{62600:function(e,t,n){"use strict";n.d(t,{r:function(){return l.Z}});var l=n(62653)},39628:function(e,t,n){Promise.resolve().then(n.bind(n,61523))},61523:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return LntVaults}});var l=n(31113),s=n(2794),a=n(50553),r=n(62600),i=n(26361),o=n(69708),components_AList=e=>{let{item:t,index:n}=e,s=Math.min(t["VT Buyback"],100),a=(0,o.useRouter)();return(0,l.jsx)("div",{className:(0,i.cn)("card p-0"),children:(0,l.jsx)("div",{className:"flex flex-col items-center justify-between w-full gap-5 p-4 cursor-pointer md:flex-row md:p-10",onClick:()=>a.push("lntVaultsDetail"),children:(0,l.jsxs)("div",{className:"flex flex-col w-full md:flex-row md:w-[85%] gap-4 md:gap-5 items-center",children:[(0,l.jsx)("div",{className:"flex flex-col w-full relative md:w-[10rem] flex-shrink-0 mr-[60px]",children:(0,l.jsx)("img",{src:"./lntVaults.png"})}),Object.entries(t).map(e=>{let[n,a]=e;return(0,l.jsxs)("div",{className:"flex flex-col w-full relative md:w-[10rem] flex-shrink-0",children:[(0,l.jsx)("div",{style:{display:"color"===n?"none":"flex"},className:"text-[#64748B] dark:text-slate-50/60",children:n}),"VT Buyback"===n?(0,l.jsxs)("div",{className:"flex w-full mt-[5px] items-center ",children:[(0,l.jsx)("div",{className:"flex w-full h-4 bg-gray-200 rounded-full ",children:(0,l.jsx)("div",{className:"h-full rounded-full",style:{width:"".concat(s,"%"),background:t.color}})}),(0,l.jsxs)("div",{className:"text-sm  text-right text-gray-600 ml-[10px]",children:[s,"%"]})]}):(0,l.jsx)("div",{className:" mt-[5px]",style:{display:"color"===n?"none":"flex"},children:a})]},n)})]})})})};function LntVaults(){return(0,l.jsxs)("div",{className:"w-full max-w-screen-xl px-4 mx-auto md:pb-8 ",children:[(0,l.jsx)(a.a,{}),(0,l.jsx)("h2",{className:"page-title",children:"LNT Vaults"}),(0,l.jsx)(s.aG,{}),(0,l.jsx)(r.r,{numItemsMd:1,className:"gap-3 mt-4",children:[{"Total Delegated":"4,921","VT Supply":"4,921,000","YT Supply":"221,000","VT Buyback":29,color:"linear-gradient(90deg, #C2B7FD 0%, #6466F1 100%)"}].map((e,t)=>(console.log("dasdasdas",Object.keys(e)),(0,l.jsx)(components_AList,{index:t,item:e},"group_vault_item_".concat(t))))})]})}},2794:function(e,t,n){"use strict";n.d(t,{IS:function(){return useBlastPointsItems},aG:function(){return BlastPointCards}});var l=n(31113),s=n(26361),a=n(33621),r=n(73216),i=n(19757),o=n(90168),c=n(59175),d=n(15948),u=n(45438),m=n(47518),x=n(76034),f=n(75930),h=n(84944),p=n(64103),g=n(73083),v=n(84570),b=n(42341),k=n(22719),j=n(12045);let y={USB:"rgba(226, 254, 182, 1)",USB_dark:"#E2FEB6",ETHx:"rgba(238, 234, 254, 1)",IPx:"rgba(238, 234, 254, 1)",ETHx_dark:"linear-gradient(90deg, #C2B7FD 0%, #746D97 100%)",IPx_dark:"linear-gradient(90deg, #C2B7FD 0%, #746D97 100%)",USDBx:"linear-gradient(90deg, rgba(16, 185, 129, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%)",USDBx_dark:"linear-gradient(90deg, #C2B7FD 0%, #6366F1 100%)"},N={USB:"rgba(196, 241, 126, 1)",ETHx:"rgba(219, 210, 255, 1)",IPx:"rgba(219, 210, 255, 1)",USDBx:"rgba(255, 255, 255, 1)"};function useBlastPointsItems(){let e=(0,c.p)(),{prices:t,usbApr:n}=(0,p.useContext)(f.g),l=(0,x.a)(),a=(0,u.i)(),o=(0,m.m)(),d=(0,p.useMemo)(()=>{let n=[],a=i.iK[e];if(r.DF.find(t=>t.id==e)){let c=t[i.K8],d=t[i.O1[e]],calcPoint=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100n;return 0n==c?"0":(0,h.Rp)(6504987n*302400n*e*t/c,0,8)};n.push({symbol:"USB",tit:"APY:".concat((0,s.Jh)(o[i.O1[e]],10)," ~ ").concat((0,s.Jh)(o.USB_END,10)),sub:"~ Interest + Earning",point:calcPoint(d),per:100}),a.filter(e=>"USDB"==e.assetTokenSymbol||e.assetTokenSymbol==(0,r.b)()).forEach(e=>{let a=e.assetTokenSymbol==(0,r.b)()?"".concat((0,r.b)()," GAIN BOOSTER"):"APY:".concat((0,s.Jh)(o[e.xTokenAddress],10)),i=e.isStable&&(0,r.WA)()?"~ ".concat(l[e.vault].toFixed(2),"x Blast Native Yield"):"~ ".concat(l[e.vault].toFixed(2),"x Leveraged long on ").concat(e.assetTokenSymbol);n.push({symbol:e.xTokenSymbol,tit:a,sub:i,point:calcPoint(t[e.xTokenAddress],e.xTokenSymbol=="".concat((0,r.b)(),"x")?1n:100n),per:e.xTokenSymbol=="".concat((0,r.b)(),"x")?1:100})})}return n},[e,t,l,n,a]);return d}function BlastPointCard(e){let{symbol:t,tit:n,sub:d,point:u}=e,m=(0,c.p)(),x=(0,p.useMemo)(()=>{var e,n;let l=(0,o.l)(m,!1),a={USB:"USDB",["".concat((0,r.b)(),"x")]:(0,r.b)(),USDBx:"USDB"},c=null===(e=l.find(e=>e.symbol==a[t]))||void 0===e?void 0:e.address,d=null===(n=l.find(e=>e.symbol==t))||void 0===n?void 0:n.address;if(!c||!d)return"";let convertNative=e=>e==i.K8?"0x0000000000000000000000000000000000000000":e;return(0,s.h$)(convertNative(c),convertNative(d))},[m]),f=(0,j.l)(e=>e.theme);return(0,l.jsxs)("div",{style:{boxShadow:"0px 0px 12px 0px rgba(187, 215, 144, 0.4)"},className:"rounded-2xl overflow-hidden bg-white text-base flex flex-col dark:bg-slate-950",children:[(0,l.jsxs)("div",{className:"flex md:flex-wrap items-center p-4 gap-2 dark:text-black",style:{background:y["".concat(t,"_").concat(f)]||y[t]},children:[(0,l.jsx)(a.c,{symbol:t,size:42,className:"shrink-0"}),(0,l.jsx)("div",{className:"font-semibold",children:t}),(0,l.jsxs)("div",{className:"whitespace-nowrap text-center text-sm ml-auto flex flex-col items-center flex-1",children:[(0,l.jsx)("div",{className:"rounded-full px-2 py-[2px] w-fit",style:{background:N[t]},children:n}),(0,l.jsx)("div",{className:"mt-1",children:d})]})]}),(0,l.jsxs)("div",{className:"flex justify-between p-4 whitespace-nowrap text-sm items-center gap-2",children:[(0,l.jsx)(k._,{icons:["blast","gold","wand"]}),(0,l.jsxs)("a",{className:"underline text-slate-500 dark:text-slate-50 flex items-center gap-1",href:x,target:"_blank",children:["Swap on Thruster ",(0,l.jsx)(g.Ig3,{})]})]})]})}function BlastPointCards(){let e=useBlastPointsItems(),[t,n]=(0,d.n)(e=>{let{width:t}=e;return t<970});return 0==e.length?null:(0,l.jsxs)("div",{ref:t,className:"grid grid-cols-1 md:grid-cols-3 gap-5 md:pb-[60px]",children:[!n&&e.map(e=>(0,l.jsx)(BlastPointCard,{...e},e.symbol)),n&&(0,l.jsx)(b.tq,{spaceBetween:20,pagination:{clickable:!0,renderBullet:function(e,t){return'<div class="'+t+'"></div>'}},className:"-translate-x-[1rem] !px-4 !pb-10 !w-screen",modules:[v.tl],children:e.map(e=>(0,l.jsx)(b.o5,{children:(0,l.jsx)(BlastPointCard,{...e})},e.symbol))})]})}},22719:function(e,t,n){"use strict";n.d(t,{_:function(){return PointsIcons}});var l=n(31113),s=n(73216),a=n(59175),r=n(26361);let i={};function PointsIcons(e){let{className:t,icons:n}=e,o=(0,a.p)(),c=!s.DF.find(e=>e.id==o);console.info("isUnBlast",c);let d=n.filter(e=>!c||!["blast","gold"].includes(e));return(0,l.jsxs)("div",{className:(0,r.cn)("flex gap-1 items-center",t),children:[(0,l.jsx)("span",{className:"mr-2",children:"Points:"}),d.map((e,t)=>(0,l.jsx)("img",{className:"rounded-full w-5 h-5 object-fill",alt:e,src:i[e]||"".concat(e,".png")},e))]})}},12045:function(e,t,n){"use strict";n.d(t,{h:function(){return ThemeMode},l:function(){return c}});var l=n(31113),s=n(26361),a=n(64103),r=n(69426),i=n(48338),o=n(2987);let getThemeState=()=>{let e="light",t="light";return"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(document.documentElement.classList.remove("dark"),e="light",t="light"):(document.documentElement.classList.add("dark"),e="dark",t="dark"),"theme"in localStorage||(e="system"),{themeMode:e,theme:t}},c=(0,i.Ue)(e=>({...getThemeState(),setThemeMode:t=>e(()=>({themeMode:t})),setTheme:t=>e(()=>({theme:t}))})),d={light:(0,l.jsx)(r.EWX,{}),dark:(0,l.jsx)(r.Dq,{}),system:(0,l.jsx)(r.pUp,{})};function ThemeMode(){let e=c(),onChangeTheme=()=>{let{theme:t,themeMode:n}=getThemeState();e.setTheme(t),e.setThemeMode(n)};(0,a.useEffect)(()=>{onChangeTheme()},[]);let onClick=e=>{"System"==e?localStorage.removeItem("theme"):localStorage.theme=e.toLocaleLowerCase(),onChangeTheme()};return(0,l.jsx)(o.o,{className:"max-w-[200px] py-10 flex flex-col text-base text-stone-500 dark:text-white",trigger:(0,l.jsx)("div",{className:"text-xl",children:d[e.theme]}),children:["Light","Dark","System"].map((t,n)=>(0,l.jsxs)("div",{className:(0,s.cn)("flex px-5 items-center py-2 gap-3 cursor-pointer",{"bg-stone-100 dark:bg-zinc-700":t.toLowerCase()==e.themeMode}),onClick:()=>onClick(t),children:[(0,l.jsx)("div",{className:"text-2xl",children:d[t.toLowerCase()]}),(0,l.jsx)("span",{className:"",children:t})]},"theme_mode_"+t))})}},15948:function(e,t,n){"use strict";n.d(t,{n:function(){return useElementSizeCheck}});var l=n(85665);function useElementSizeCheck(e){let[t,n]=(0,l.Z)();return[t,e(n)]}},47518:function(e,t,n){"use strict";n.d(t,{m:function(){return useTokenApys}});var l=n(26361),s=n(88439),a=n(45438),r=n(76034),i=n(64103),o=n(75930),c=n(59175),d=n(19757),u=n(12396);function useTokenApys(){let e=(0,s.b)(()=>(0,l.Yb)({},0n)),t=(0,c.p)(),{prices:n,usbApr:m,stableVaultsState:x}=(0,i.useContext)(o.g),f=(0,r.a)(),h=(0,a.i)();return(0,i.useMemo)(()=>{let n=d.iK[t],s=(0,l.ok)(h[n[0].ptyPoolBelowAddress],"staking");e[d.O1[t]]=m.apr,e.USB_END=m.apr+s;let a=(0,u.v)("0.1",10);return n.forEach(t=>{if(t.assetTokenAddress!=d.K8){let n=f[t.vault]>1n?(0,u.v)("".concat((f[t.vault]-1).toFixed(2)),10):0n,l=(0,u.v)("1",10);e[t.xTokenAddress]=(n*(a-x[t.vault].Y*x[t.vault].aar/l)+a*l)/l}}),null},[t,n,f,m,h,x]),e}},76034:function(e,t,n){"use strict";n.d(t,{a:function(){return useValutsLeverageRatio},z:function(){return useVaultLeverageRatio}});var l=n(19757),s=n(26361),a=n(75930),r=n(64103),i=n(59175),o=n(88439);function useVaultLeverageRatio(e){let{vaultsState:t,stableVaultsState:n}=(0,r.useContext)(a.g),l=t[(null==e?void 0:e.vault)||"null"],i=n[(null==e?void 0:e.vault)||"null"],o=(null==e?void 0:e.isStable)?(0,s.pF)(i.aar,i.AARDecimals):(0,s.pF)(l.aar,l.AARDecimals);return Math.max(0,1+1/(o-1))}function useValutsLeverageRatio(){let{vaultsState:e,stableVaultsState:t}=(0,r.useContext)(a.g),n=(0,i.p)(),c=l.iK[n],d=(0,o.b)(()=>new Proxy({},{get:function(e,t){return t in e&&null!==e[t]&&void 0!==e[t]?e[t]:0}}));return c.forEach(n=>{let l=e[(null==n?void 0:n.vault)||"null"],a=t[(null==n?void 0:n.vault)||"null"],r=(null==n?void 0:n.isStable)?(0,s.pF)(a.aar,a.AARDecimals):(0,s.pF)(l.aar,l.AARDecimals);d[n.vault]=Math.max(0,1+1/(r-1))}),d}},17695:function(e,t,n){"use strict";n.d(t,{S1:function(){return off},ZT:function(){return noop},jU:function(){return l},on:function(){return on}});var noop=function(){};function on(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function off(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var l="undefined"!=typeof window}},function(e){e.O(0,[7495,4643,7588,2659,4320,2639,6209,131,7869,5166,5513,1578,7638,553,7093,604,1744],function(){return e(e.s=39628)}),_N_E=e.O()}]);