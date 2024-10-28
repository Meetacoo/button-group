(self.webpackChunk_kne_components_button_group=self.webpackChunk_kne_components_button_group||[]).push([[155,656],{76155:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ConfirmButton:()=>k,ConfirmLink:()=>T,ConfirmText:()=>S,FetchButton:()=>z,LoadingButton:()=>j,default:()=>qe,useLoading:()=>_,withConfirm:()=>N});var r=n(94922),o=n.n(r),a=n(28833);const i=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(t);return e||(n.current=t),(0,r.useCallback)((function(){return n.current&&n.current(...arguments)}),[])};var c=n(58612),l=n(86340),u=n(54159),s=n.n(u),f=n(16052),p=n(98771),v=n.n(p),d=n(95600),h=n.n(d);const m=(t,e)=>{const n=(0,r.useRef)(null);n.current=Object.assign({},{time:500,isDebounce:!1},e);const o=(0,r.useRef)(null),a=i(t);return(0,r.useLayoutEffect)((()=>{const t=o.current,e=()=>window.requestAnimationFrame((()=>{t&&a(t)}));e();const r=new ResizeObserver((n.current.isDebounce?h():v())(e,n.current.time));return t&&r.observe(t),()=>{r.disconnect()}}),[a]),o};function g(){return g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},g.apply(null,arguments)}function y(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}const b=["onClick","children"],_=t=>{const[e,n]=(0,r.useState)(!1),o=i((function(){return n(!0),Promise.resolve(t&&t(...arguments)).then((()=>{n(!1)}))}));return{isLoading:e,setIsLoading:n,callback:o}},j=t=>{let{onClick:e,children:n}=t,r=y(t,b);const{isLoading:i,callback:c}=_(e);return o().createElement(a.Button,g({},r,{loading:i,onClick:c}),"function"===typeof n?n(i):n)};var O={overlay:"_zIHFy",modal:"_R-IrF","confirm-content":"_F1kMl",title:"_Iee0d",content:"_aGBVE","has-title":"_0oW1K"};const x=["title","message","isDelete","showCancel","cancelText","onCancel","isModal","okText","placement","children","onClick","getContainer","renderModal"],w=["children"],C=["children"],E=["children"],k=t=>{const e=Object.assign({},{message:"\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",confirm:"\u786e\u5b9a",delete:"\u5220\u9664",cancel:"\u53d6\u6d88"},t.locale),n=Object.assign({},{isDelete:!0},t,{locale:e}),{title:l,message:u,isDelete:f,showCancel:p,cancelText:v,onCancel:d,isModal:h,okText:m,placement:b,children:j,onClick:w,getContainer:C,renderModal:E}=n,k=y(n,x),[T,S]=(0,r.useState)(!1),{isLoading:N,callback:P}=_(w),z=i((()=>{S(!0)})),F=o().createElement(a.Flex,{className:O["confirm-content"],vertical:!0,gap:8,onClick:t=>{t.stopPropagation()}},l&&o().createElement(a.Flex,{align:"flex-start",gap:8,className:O.title},f&&o().createElement(c.A,{className:"title-icon"}),l),o().createElement(a.Flex,{align:"flex-start",gap:8,className:s()(O.content,{[O["has-title"]]:l})},!l&&f?o().createElement(c.A,{className:"title-icon"}):null,u||e.message)),$=()=>"function"===typeof j?j(g({},k,{onClick:z})):o().createElement(a.Button,g({},k,{loading:N,onClick:()=>{z()}}),j);if(h){const t={open:T,onCancel:()=>{S(!1),d&&d()},wrapClassName:O.modal,okText:m||(f?e.delete:e.confirm),cancelText:v||e.cancel,onOk:t=>(S(!1),P(t)),closable:!1,okButtonProps:{danger:f},getContainer:C,children:F};return o().createElement(o().Fragment,null,"function"===typeof E?E(t):o().createElement(a.Modal,t),$())}return o().createElement(a.Popconfirm,{overlayClassName:s()(O.overlay,{[O["is-danger"]]:f}),okButtonProps:{danger:f},title:F,open:T,getPopupContainer:C,onCancel:d,placement:b,showCancel:p,okText:m||(f?e.delete:e.confirm),cancelText:v||e.cancel,onOpenChange:S,onConfirm:t=>{P(t)}},$())},T=t=>{let{children:e}=t,n=y(t,w);return o().createElement(k,n,(t=>o().createElement(a.Typography.Link,t,e)))},S=t=>{let{children:e}=t,n=y(t,C);return o().createElement(k,n,(t=>o().createElement(a.Typography.Text,t,e)))},N=t=>(console.warn("\u540e\u7eed\u7248\u672c\u53ef\u80fd\u5220\u9664\u8be5api\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528"),e=>{let{children:n}=e,r=y(e,E);return o().createElement(k,r,(e=>o().createElement(t,e,n)))}),P=["api","onClick"],z=t=>{let{api:e,onClick:n}=t,r=y(t,P);const a=(0,f.useFetch)(Object.assign({},e,{auto:!1})),{isLoading:i,refresh:c}=a;return o().createElement(j,g({},r,{loading:i,onClick:async()=>{const{output:t,errorStack:e}=await c({});Object.values(e).length>0||n&&n({data:t})}}))};var F=Array.isArray,$="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},W="object"==typeof $&&$&&$.Object===Object&&$,A="object"==typeof self&&self&&self.Object===Object&&self,B=W||A||Function("return this")(),L=B.Symbol,M=Object.prototype,D=M.hasOwnProperty,I=M.toString,R=L?L.toStringTag:void 0;var q=function(t){var e=D.call(t,R),n=t[R];try{t[R]=void 0;var r=!0}catch(a){}var o=I.call(t);return r&&(e?t[R]=n:delete t[R]),o},G=Object.prototype.toString;var U=function(t){return G.call(t)},V=L?L.toStringTag:void 0;var H=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":V&&V in Object(t)?q(t):U(t)};var K=function(t){return null!=t&&"object"==typeof t};var X=function(t){return"symbol"==typeof t||K(t)&&"[object Symbol]"==H(t)},J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;var Y=function(t,e){if(F(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!X(t))||(Q.test(t)||!J.test(t)||null!=e&&t in Object(e))};var Z=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var tt=function(t){if(!Z(t))return!1;var e=H(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},et=B["__core-js_shared__"],nt=function(){var t=/[^.]+$/.exec(et&&et.keys&&et.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var rt=function(t){return!!nt&&nt in t},ot=Function.prototype.toString;var at=function(t){if(null!=t){try{return ot.call(t)}catch(e){}try{return t+""}catch(e){}}return""},it=/^\[object .+?Constructor\]$/,ct=Function.prototype,lt=Object.prototype,ut=ct.toString,st=lt.hasOwnProperty,ft=RegExp("^"+ut.call(st).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pt=function(t){return!(!Z(t)||rt(t))&&(tt(t)?ft:it).test(at(t))};var vt=function(t,e){return null==t?void 0:t[e]};var dt=function(t,e){var n=vt(t,e);return pt(n)?n:void 0},ht=dt(Object,"create");var mt=function(){this.__data__=ht?ht(null):{},this.size=0};var gt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},yt=Object.prototype.hasOwnProperty;var bt=function(t){var e=this.__data__;if(ht){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return yt.call(e,t)?e[t]:void 0},_t=Object.prototype.hasOwnProperty;var jt=function(t){var e=this.__data__;return ht?void 0!==e[t]:_t.call(e,t)};var Ot=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ht&&void 0===e?"__lodash_hash_undefined__":e,this};function xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}xt.prototype.clear=mt,xt.prototype.delete=gt,xt.prototype.get=bt,xt.prototype.has=jt,xt.prototype.set=Ot;var wt=xt;var Ct=function(){this.__data__=[],this.size=0};var Et=function(t,e){return t===e||t!==t&&e!==e};var kt=function(t,e){for(var n=t.length;n--;)if(Et(t[n][0],e))return n;return-1},Tt=Array.prototype.splice;var St=function(t){var e=this.__data__,n=kt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Tt.call(e,n,1),--this.size,!0)};var Nt=function(t){var e=this.__data__,n=kt(e,t);return n<0?void 0:e[n][1]};var Pt=function(t){return kt(this.__data__,t)>-1};var zt=function(t,e){var n=this.__data__,r=kt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ft.prototype.clear=Ct,Ft.prototype.delete=St,Ft.prototype.get=Nt,Ft.prototype.has=Pt,Ft.prototype.set=zt;var $t=Ft,Wt=dt(B,"Map");var At=function(){this.size=0,this.__data__={hash:new wt,map:new(Wt||$t),string:new wt}};var Bt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Lt=function(t,e){var n=t.__data__;return Bt(e)?n["string"==typeof e?"string":"hash"]:n.map};var Mt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e};var Dt=function(t){return Lt(this,t).get(t)};var It=function(t){return Lt(this,t).has(t)};var Rt=function(t,e){var n=Lt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qt.prototype.clear=At,qt.prototype.delete=Mt,qt.prototype.get=Dt,qt.prototype.has=It,qt.prototype.set=Rt;var Gt=qt;function Ut(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(Ut.Cache||Gt),n}Ut.Cache=Gt;var Vt=Ut;var Ht=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,Xt=function(t){var e=Vt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Ht,(function(t,n,r,o){e.push(r?o.replace(Kt,"$1"):n||t)})),e}));var Jt=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},Qt=L?L.prototype:void 0,Yt=Qt?Qt.toString:void 0;var Zt=function t(e){if("string"==typeof e)return e;if(F(e))return Jt(e,t)+"";if(X(e))return Yt?Yt.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var te=function(t){return null==t?"":Zt(t)};var ee=function(t,e){return F(t)?t:Y(t,e)?[t]:Xt(te(t))};var ne=function(t){if("string"==typeof t||X(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var re=function(t,e){for(var n=0,r=(e=ee(e,t)).length;null!=t&&n<r;)t=t[ne(e[n++])];return n&&n==r?t:void 0},oe=function(){try{var t=dt(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();var ae=function(t,e,n){"__proto__"==e&&oe?oe(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},ie=Object.prototype.hasOwnProperty;var ce=function(t,e,n){var r=t[e];ie.call(t,e)&&Et(r,n)&&(void 0!==n||e in t)||ae(t,e,n)},le=/^(?:0|[1-9]\d*)$/;var ue=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&le.test(t))&&t>-1&&t%1==0&&t<e};var se=function(t,e,n,r){if(!Z(t))return t;for(var o=-1,a=(e=ee(e,t)).length,i=a-1,c=t;null!=c&&++o<a;){var l=ne(e[o]),u=n;if("__proto__"===l||"constructor"===l||"prototype"===l)return t;if(o!=i){var s=c[l];void 0===(u=r?r(s,l,c):void 0)&&(u=Z(s)?s:ue(e[o+1])?[]:{})}ce(c,l,u),c=c[l]}return t};var fe=function(t,e,n){for(var r=-1,o=e.length,a={};++r<o;){var i=e[r],c=re(t,i);n(c,i)&&se(a,ee(i,t),c)}return a};var pe=function(t,e){return null!=t&&e in Object(t)};var ve=function(t){return K(t)&&"[object Arguments]"==H(t)},de=Object.prototype,he=de.hasOwnProperty,me=de.propertyIsEnumerable,ge=ve(function(){return arguments}())?ve:function(t){return K(t)&&he.call(t,"callee")&&!me.call(t,"callee")};var ye=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var be=function(t,e,n){for(var r=-1,o=(e=ee(e,t)).length,a=!1;++r<o;){var i=ne(e[r]);if(!(a=null!=t&&n(t,i)))break;t=t[i]}return a||++r!=o?a:!!(o=null==t?0:t.length)&&ye(o)&&ue(i,o)&&(F(t)||ge(t))};var _e=function(t,e){return null!=t&&be(t,e,pe)};var je=function(t,e){return fe(t,e,(function(e,n){return _e(t,n)}))};var Oe=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t},xe=L?L.isConcatSpreadable:void 0;var we=function(t){return F(t)||ge(t)||!!(xe&&t&&t[xe])};var Ce=function t(e,n,r,o,a){var i=-1,c=e.length;for(r||(r=we),a||(a=[]);++i<c;){var l=e[i];n>0&&r(l)?n>1?t(l,n-1,r,o,a):Oe(a,l):o||(a[a.length]=l)}return a};var Ee=function(t){return(null==t?0:t.length)?Ce(t,1):[]};var ke=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},Te=Math.max;var Se=function(t,e,n){return e=Te(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,a=Te(r.length-e,0),i=Array(a);++o<a;)i[o]=r[e+o];o=-1;for(var c=Array(e+1);++o<e;)c[o]=r[o];return c[e]=n(i),ke(t,this,c)}};var Ne=function(t){return function(){return t}};var Pe=oe?function(t,e){return oe(t,"toString",{configurable:!0,enumerable:!1,value:Ne(e),writable:!0})}:function(t){return t},ze=Date.now;var Fe=function(t){var e=0,n=0;return function(){var r=ze(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Pe);var $e=function(t){return Fe(Se(t,void 0,Ee),t+"")}((function(t,e){return null==t?{}:je(t,e)}));const We=Vt((t=>{let{amountWidth:e,moreBtnWidth:n,buttonWidthList:r,spaceProps:o,compact:a}=t;const i=a?0:["small","middle","large"].indexOf(o.size)>-1?8*(["small","middle","large"].indexOf(o.size)+1):Number.isInteger(o.size)?o.size:8;let c=0,l=0;for(;e>=l+r[c]+c*i&&c<r.length;)l+=r[c],c+=1;for(;e<l+(c-1)*i+(c<r.length?n+i:0)&&c>0;)l-=r[c-1],c-=1;return c}),(t=>{let{amountWidth:e,moreBtnWidth:n,buttonWidthList:r,spaceProps:o,compact:a}=t;return`${e}${n}${r.join(",")}${Object.values(o).join(",")}${a&&a.toString()}`}));var Ae="_V58ju",Be="_XN3o6",Le="_-depB",Me="_juFTd",De="_x6dp-";const Ie=["list","more","compact"],Re=["className","confirm","buttonComponent"],qe=t=>{const e=Object.assign({},{more:"\u66f4\u591a"},t.locale),n=Object.assign({},{more:o().createElement(a.Button,null,e.more,o().createElement(l.A,null))},t,{locale:e}),{list:c,more:u,compact:f}=n,p=y(n,Ie),v=$e(p,["size","split","align","style"]),[d,h]=(0,r.useState)(c.length&&1),b=i((()=>{const t=O.current,e=x.current,n=_.current;if(!t)return;const o=t.querySelectorAll(".button-group-item");if(!o)return;if(0===o.length)return;const a=n.clientWidth,i=e.clientWidth,c=[].map.call(o,(t=>t.offsetWidth)),l=We({amountWidth:a,moreBtnWidth:i,buttonWidthList:c,spaceProps:v,compact:f});(0,r.startTransition)((()=>{h(l)}))})),_=m(b),O=m(b),x=m(b),w=c.slice(d),C=(t,e,n)=>{if("function"===typeof t)return t({key:e,className:s()("button-group-item",De),isDropdown:n});const{className:r,confirm:a,buttonComponent:i}=t,c=y(t,Re),l=a||c.message,u=l?k:i||j;return o().createElement(u,g({danger:l&&!1!==c.isDelete},Object.assign({},c,l&&(c.isModal||n)?{isModal:!0}:{}),{key:e,className:s()("button-group-item",De,r)}))},E=f?a.Space.Compact:a.Space;return o().createElement(o().Fragment,null,o().createElement("div",{className:Ae,ref:_}),o().createElement("div",{className:Be},o().createElement("div",{className:Le,ref:x},u),o().createElement("div",{className:Le,ref:O},o().createElement(E,v,c.map(C)))),o().createElement(E,v,c.slice(0,d).map(((t,e)=>C(t,e,!1))),w.length>0&&o().createElement(a.Dropdown,{overlayClassName:Me,menu:{items:w.map(((t,e)=>({key:e,label:C(t,e,!0)})))}},u)))}},49266:(t,e,n)=>{var r=n(36382).Symbol;t.exports=r},99635:(t,e,n)=>{var r=n(49266),o=n(3654),a=n(39789),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},64579:(t,e,n)=>{var r=n(78913),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},74807:(t,e,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},3654:(t,e,n)=>{var r=n(49266),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(l){}var o=i.call(t);return r&&(e?t[c]=n:delete t[c]),o}},39789:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},36382:(t,e,n)=>{var r=n(74807),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},78913:t=>{var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},95600:(t,e,n)=>{var r=n(2316),o=n(93375),a=n(2899),i=Math.max,c=Math.min;t.exports=function(t,e,n){var l,u,s,f,p,v,d=0,h=!1,m=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=l,r=u;return l=u=void 0,d=e,f=t.apply(r,n)}function b(t){var n=t-v;return void 0===v||n>=e||n<0||m&&t-d>=s}function _(){var t=o();if(b(t))return j(t);p=setTimeout(_,function(t){var n=e-(t-v);return m?c(n,s-(t-d)):n}(t))}function j(t){return p=void 0,g&&l?y(t):(l=u=void 0,f)}function O(){var t=o(),n=b(t);if(l=arguments,u=this,v=t,n){if(void 0===p)return function(t){return d=t,p=setTimeout(_,e),h?y(t):f}(v);if(m)return clearTimeout(p),p=setTimeout(_,e),y(v)}return void 0===p&&(p=setTimeout(_,e)),f}return e=a(e)||0,r(n)&&(h=!!n.leading,s=(m="maxWait"in n)?i(a(n.maxWait)||0,e):s,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==p&&clearTimeout(p),d=0,l=v=u=p=void 0},O.flush=function(){return void 0===p?f:j(o())},O}},2316:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},76003:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},90931:(t,e,n)=>{var r=n(99635),o=n(76003);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},93375:(t,e,n)=>{var r=n(36382);t.exports=function(){return r.Date.now()}},98771:(t,e,n)=>{var r=n(95600),o=n(2316);t.exports=function(t,e,n){var a=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),r(t,e,{leading:a,maxWait:e,trailing:i})}},2899:(t,e,n)=>{var r=n(64579),o=n(2316),a=n(90931),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(a(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||l.test(t)?u(t.slice(2),n?2:8):i.test(t)?NaN:+t}}}]);
//# sourceMappingURL=155.ccd0871e.chunk.js.map