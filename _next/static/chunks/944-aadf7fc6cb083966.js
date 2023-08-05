"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[944],{36944:function(e,t,r){let n,a,l;function u(e,t,r=!0){return{...e,default:t,decode:(...n)=>{let a=e.decode(...n);return void 0===a||r&&null===a?t:a}}}r.d(t,{QueryParamProvider:function(){return O},StringParam:function(){return i},useQueryParam:function(){return C},withDefault:function(){return u}});let i={encode:function(e){return null==e?e:String(e)},decode:function(e){let t=function(e,t){if(null==e)return e;if(0===e.length&&(!t||t&&""!==e))return null;let r=e instanceof Array?e[0]:e;return null==r?r:t||""!==r?r:null}(e,!0);return null==t?t:String(t)}};'{}[],":'.split("").map(e=>[e,encodeURIComponent(e)]);var o=r(86006);let s=new class{constructor(){this.paramsMap=new Map,this.registeredParams=new Map}set(e,t,r,n){this.paramsMap.set(e,{stringified:t,decoded:r,decode:n})}has(e,t,r){if(!this.paramsMap.has(e))return!1;let n=this.paramsMap.get(e);return!!n&&n.stringified===t&&(null==r||n.decode===r)}get(e){var t;if(this.paramsMap.has(e))return null==(t=this.paramsMap.get(e))?void 0:t.decoded}registerParams(e){for(let t of e){let e=this.registeredParams.get(t)||0;this.registeredParams.set(t,e+1)}}unregisterParams(e){for(let t of e){let e=(this.registeredParams.get(t)||0)-1;e<=0?(this.registeredParams.delete(t),this.paramsMap.has(t)&&this.paramsMap.delete(t)):this.registeredParams.set(t,e)}}clear(){this.paramsMap.clear(),this.registeredParams.clear()}};function c(e,t,r,n){var a;if(!r||!t.length)return e;let l={...e},u=!1;for(let e of t)Object.prototype.hasOwnProperty.call(l,e)||(l[e]=null!=(a=r[e])?a:n,u=!0);return u?l:e}let p=Object.prototype.hasOwnProperty;function f(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function d(e,t,r){var n,a;if(f(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let l=Object.keys(e),u=Object.keys(t);if(l.length!==u.length)return!1;for(let u=0;u<l.length;u++){let i=null!=(a=null==(n=null==r?void 0:r[l[u]])?void 0:n.equals)?a:f;if(!p.call(t,l[u])||!i(e[l[u]],t[l[u]]))return!1}return!0}function m(e,t,r){let n={},a=Object.keys(t);for(let l of a){let a;let u=t[l],i=e[l];if(r.has(l,i,u.decode))a=r.get(l);else{if(a=u.decode(i),u.equals&&r.has(l,i)){let e=r.get(l);u.equals(a,e)&&(a=e)}void 0!==a&&r.set(l,i,a,u.decode)}void 0===a&&void 0!==u.default&&(a=u.default),n[l]=a}return n}function h(){let e;return function(t,r,n){let a=m(t,r,n);return null!=e&&d(e,a)?e:(e=a,a)}}let g={},y=(e,t,r)=>{if(n===t&&l===e&&a===r)return g;n=t,l=e;let u=e(null!=t?t:"");a=r;let i=function(e){if(e)return Object.fromEntries(e.split("\n").map(e=>e.split("\x00")))}(r);for(let[e,t]of Object.entries(u)){(null==i?void 0:i[e])&&(delete u[e],u[e=i[e]]=t);let r=g[e];d(t,r)&&(u[e]=r)}return g=u,u};function v(e,t){null==t&&(t={});let r={...e,...t};return t.params&&e.params&&(r.params={...e.params,...t.params}),r}let P={adapter:{},options:{searchStringToObject:function(e){let t=new URLSearchParams(e),r={};for(let[e,n]of t)Object.prototype.hasOwnProperty.call(r,e)?Array.isArray(r[e])?r[e].push(n):r[e]=[r[e],n]:r[e]=n;return r},objectToSearchString:function(e){let t=new URLSearchParams,r=Object.entries(e);for(let[e,n]of r)if(null!=n){if(Array.isArray(n))for(let r of n)t.append(e,null!=r?r:"");else t.append(e,n)}return t.toString()},updateType:"pushIn",includeKnownParams:void 0,includeAllParams:!1,removeDefaultsFromUrl:!1,enableBatching:!1,skipUpdateWhenNoChange:!0}},b=o.createContext(P);function j({children:e,adapter:t,options:r}){let{adapter:n,options:a}=o.useContext(b),l=o.useMemo(()=>({adapter:null!=t?t:n,options:v(a,r)}),[t,r,n,a]);return o.createElement(b.Provider,{value:l},e)}function O({children:e,adapter:t,options:r}){return t?o.createElement(t,null,t=>o.createElement(j,{adapter:t,options:r},e)):o.createElement(j,{options:r},e)}let M=e=>e(),S=e=>setTimeout(()=>e(),0),k=[];var w=function(e,t){var r,n;let a;let{adapter:l,options:u}=function(){let e=o.useContext(b);if(void 0===e||e===P)throw Error("useQueryParams must be used within a QueryParamProvider");return e}(),[p]=(0,o.useState)(h),{paramConfigMap:f,options:d}=(r=e,n=t,{paramConfigMap:void 0===r?{}:Array.isArray(r)?Object.fromEntries(r.map(e=>[e,"inherit"])):r,options:n}),g=(0,o.useMemo)(()=>v(u,d),[u,d]),j=function(e,t){var r,n,a;let l={},u=!1,o=Object.keys(e),s=t.includeKnownParams||!1!==t.includeKnownParams&&0===o.length;if(s){let e=Object.keys(null!=(r=t.params)?r:{});o.push(...e)}for(let r of o){let o=e[r];if(null!=o&&"object"==typeof o){l[r]=o;continue}u=!0,l[r]=null!=(a=null==(n=t.params)?void 0:n[r])?a:i}return u?l:e}(f,g),O=y(g.searchStringToObject,l.location.search,function(e){let t;for(let r in e)if(e[r].urlName){let n=e[r].urlName,a=`${n}\0${r}`;t?t.push(a):t=[a]}return t?t.join("\n"):void 0}(j));g.includeAllParams&&(j=c(j,Object.keys(O),g.params,i));let w=p(O,j,s),C=Object.keys(j).join("\x00");(0,o.useEffect)(()=>{let e=C.split("\x00");return s.registerParams(e),()=>{s.unregisterParams(e)}},[C]);let E={adapter:l,paramConfigMap:j,options:g},A=(0,o.useRef)(E);null==A.current&&(A.current=E),(0,o.useEffect)(()=>{A.current.adapter=l,A.current.paramConfigMap=j,A.current.options=g},[l,j,g]);let[T]=(0,o.useState)(()=>(e,t)=>{let{adapter:r,paramConfigMap:n,options:a}=A.current;null==t&&(t=a.updateType),function(e,{immediate:t}={}){k.push(e),1===k.length&&(t?M:S)(()=>{let t;let r=k.slice();k.length=0;let n=r[0].currentSearchString;for(let e=0;e<r.length;++e){let n=0===e?r[e]:{...r[e],currentSearchString:t};t=function({changes:e,updateType:t,currentSearchString:r,paramConfigMap:n,options:a}){let l,u,i;let{searchStringToObject:o,objectToSearchString:p}=a;null==t&&(t=a.updateType);let f=y(o,r),d=c(n,Object.keys(e),a.params);if("function"==typeof e){let t=m(f,d,s);u=e(t)}else u=e;return l=function(e,t){let r={},n=Object.keys(t);for(let a of n){let n=t[a];e[a]?r[a]=e[a].encode(t[a]):r[a]=null==n?n:String(n)}return r}(d,u),a.removeDefaultsFromUrl&&function(e,t){var r;for(let n in e)if((null==(r=t[n])?void 0:r.default)!==void 0&&void 0!==e[n]){let r=t[n].encode(t[n].default);r===e[n]&&(e[n]=void 0)}}(l,d),l=function(e,t){var r;let n={};for(let a in e)(null==(r=t[a])?void 0:r.urlName)!=null?n[t[a].urlName]=e[a]:n[a]=e[a];return n}(l,d),(null==(i=p("push"===t||"replace"===t?l:{...f,...l}))?void 0:i.length)&&"?"!==i[0]&&(i=`?${i}`),null!=i?i:""}(n)}e.options.skipUpdateWhenNoChange&&t===n||function({searchString:e,adapter:t,navigate:r,updateType:n}){let a=t.location,l={...a,search:e};r&&("string"==typeof n&&n.startsWith("replace")?t.replace(l):t.push(l))}({searchString:null!=t?t:"",adapter:r[r.length-1].adapter,navigate:!0,updateType:r[r.length-1].updateType})})}({changes:e,updateType:t,currentSearchString:r.location.search,paramConfigMap:n,options:a,adapter:r},{immediate:!a.enableBatching})});return[w,T]};let C=(e,t,r)=>{let n=(0,o.useMemo)(()=>({[e]:null!=t?t:"inherit"}),[e,t]),[a,l]=w(n,r),u=a[e],i=(0,o.useCallback)((t,r)=>"function"==typeof t?l(r=>{let n=t(r[e]);return{[e]:n}},r):l({[e]:t},r),[e,l]);return[u,i]}}}]);