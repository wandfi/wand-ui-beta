(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{28958:function(e){"use strict";var t=Object.prototype.hasOwnProperty,n="~";function s(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,s,o,i){if("function"!=typeof s)throw TypeError("The listener must be a function");var a=new r(s,o||e,i),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function i(e,t){0==--e._eventsCount?e._events=new s:delete e._events[t]}function a(){this._events=new s,this._eventsCount=0}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(n=!1)),a.prototype.eventNames=function(){var e,s,r=[];if(0===this._eventsCount)return r;for(s in e=this._events)t.call(e,s)&&r.push(n?s.slice(1):s);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},a.prototype.listeners=function(e){var t=n?n+e:e,s=this._events[t];if(!s)return[];if(s.fn)return[s.fn];for(var r=0,o=s.length,i=Array(o);r<o;r++)i[r]=s[r].fn;return i},a.prototype.listenerCount=function(e){var t=n?n+e:e,s=this._events[t];return s?s.fn?1:s.length:0},a.prototype.emit=function(e,t,s,r,o,i){var a=n?n+e:e;if(!this._events[a])return!1;var c,f,u=this._events[a],l=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),l){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,s),!0;case 4:return u.fn.call(u.context,t,s,r),!0;case 5:return u.fn.call(u.context,t,s,r,o),!0;case 6:return u.fn.call(u.context,t,s,r,o,i),!0}for(f=1,c=Array(l-1);f<l;f++)c[f-1]=arguments[f];u.fn.apply(u.context,c)}else{var d,p=u.length;for(f=0;f<p;f++)switch(u[f].once&&this.removeListener(e,u[f].fn,void 0,!0),l){case 1:u[f].fn.call(u[f].context);break;case 2:u[f].fn.call(u[f].context,t);break;case 3:u[f].fn.call(u[f].context,t,s);break;case 4:u[f].fn.call(u[f].context,t,s,r);break;default:if(!c)for(d=1,c=Array(l-1);d<l;d++)c[d-1]=arguments[d];u[f].fn.apply(u[f].context,c)}}return!0},a.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},a.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},a.prototype.removeListener=function(e,t,s,r){var o=n?n+e:e;if(!this._events[o])return this;if(!t)return i(this,o),this;var a=this._events[o];if(a.fn)a.fn!==t||r&&!a.once||s&&a.context!==s||i(this,o);else{for(var c=0,f=[],u=a.length;c<u;c++)(a[c].fn!==t||r&&!a[c].once||s&&a[c].context!==s)&&f.push(a[c]);f.length?this._events[o]=1===f.length?f[0]:f:i(this,o)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&i(this,t)):(this._events=new s,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a},47420:function(e,t,n){Promise.resolve().then(n.bind(n,58489))},58489:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(9268),r=n(19707),o=n(75503),i=n(43534);let a=()=>{let{address:e}=(0,r.mA)(),{config:t}=(0,r.PJ)({address:i.C2[1].assetTokenAddress,abi:[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"assetAmount",type:"uint256"}],name:"mint",outputs:[],type:"function"}],functionName:"mint",args:[e,(0,o.f)("10")]}),{write:n,data:s,isLoading:a}=(0,r.GG)(t),{isLoading:c}=(0,r.BX)({hash:null==s?void 0:s.hash});return{mintWBTC:n,isMintWBTCLoading:a||c}},c=()=>{let{address:e}=(0,r.mA)(),{config:t}=(0,r.PJ)({address:i.C2[2].assetTokenAddress,abi:[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"assetAmount",type:"uint256"}],name:"mint",outputs:[],type:"function"}],functionName:"mint",args:[e,(0,o.f)("10")]}),{write:n,data:s,isLoading:a}=(0,r.GG)(t),{isLoading:c}=(0,r.BX)({hash:null==s?void 0:s.hash});return{mintStEth:n,isMintStEthLoading:a||c}};function f(){let{mintWBTC:e}=a(),{mintStEth:t}=c();return(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{className:"btn-primary",onClick:e,children:"Mint WBTC"}),(0,s.jsx)("button",{className:"btn-primary",onClick:t,children:"Mint StEth"})]})}},43534:function(e,t,n){"use strict";n.d(t,{C2:function(){return o},K8:function(){return r},iK:function(){return a},jX:function(){return i}});var s=n(80237);let r="0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",o=[{assetTokenSymbol:"ETH",xTokenSymbol:"ETHx",assetTokenAddress:"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",xTokenAddress:"0xF73855634cE15e2Deab0111D37ccAF0aeA737C84",poolAddress:"0x40b44716085d8f4f53F97081f561E8B669c65aB2"},{assetTokenSymbol:"WBTC",xTokenSymbol:"WBTCx",assetTokenAddress:"0xdc413E2AAc07F1B42595AcB66ca043563ff08654",xTokenAddress:"0x63B98824628ABf8c326C66e75791f6A951a5e273",poolAddress:"0xF98Bdb67Cb77525B96e66333f9c2d078f2876689"},{assetTokenSymbol:"stETH",xTokenSymbol:"stETHx",assetTokenAddress:"0x3426EDF191ca2a6C7138d6e88DEc5C3F39E57fE6",xTokenAddress:"0xD7011496029108D6BBD6B0D1DD363Ff4Efdb8283",poolAddress:"0x8647bc05eeb0Cd66E1Bf90E471CBc503D2E9A30D"}],i={[s.ws.id]:"0xCda6DcF2D6f7f670C1e37CDd514546210038E310"},a={[s.ws.id]:[{vault:"0x4C18f7CE2891Ba5F04558C0c205c4d2c7b34BDaB",assetTokenSymbol:"ETH",assetTokenAddress:r,assetTokenFeed:"0x9B5A61e9f8A3e35F50887c3Ce5c42A346e85C58e",xTokenSymbol:"ETHx",xTokenAddress:"0xEE400AA492Ad3A1D940cdb2756adf6E20B010923",ptyPoolBelowAddress:"0x017049bE6F63E9C0875C60a22Db4F798056ccA7B",ptyPoolAboveAddress:"0x0A4D44522914eC8D11670f022634F1943C8c1cF2"}]}}},function(e){e.O(0,[7544,106,9253,2961,1744],function(){return e(e.s=47420)}),_N_E=e.O()}]);