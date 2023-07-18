(function(){"use strict";var t={4719:function(t,e,n){var o=n(7195),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],s={name:"App"},a=s,c=n(1001),l=(0,c.Z)(a,r,i,!1,null,null,null),p=l.exports,u=n(2241),d=function(){var t=this,e=t._self._c;return e("div",[t.linkContent?t._e():e("div",{staticClass:"note"},[t._v(" 在 "+t._s(t.localUrl)+" 後輸入任意字串，產生 link： ")]),t.linkContent?t._e():e("div",{staticClass:"note-link"},[t._v(" demo://test-link/${input_str} ")]),t.linkContent?e("div",{staticClass:"note-link"},[t._v(" "+t._s(`${t.schema}${t.linkContent}`)+" ")]):t._e()])},f=[],h=(n(6229),n(7330),n(2062),n(7658),n(1439),n(7585),n(5315),n(306)),g=t=>{const e=t?h.Z.create(t):h.Z.create();return e.interceptors.request.use((t=>t),(t=>Promise.reject(t))),e.interceptors.response.use((t=>t),(t=>Promise.reject(t))),e},m=n(4605),w=n.n(m),v=(()=>({get(){let t=new(w()),e=t.getResult();return e}}))();const k=(()=>{function t(t,e){const n=document.createElement("canvas"),o=n.getContext("2d");o.font=e;const r=o.measureText(t);return r.width}return{getFonts(){const e=[],n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";for(let o=0;o<n.length;o++){let r=n[o]+" font",i=t(n[o],r);e.push({font:r,width:i})}return e},getLanguage(){return navigator.language||navigator.userLanguage},getScreenSize(){return{width:window.screen.width,height:window.screen.height}}}})(),b=g(),A=()=>b.get("https://api.ipify.org?format=json").then((t=>t.data.ip));var _=(()=>({get(){return Promise.all([A()]).then((t=>{const e=t[0];let n={};e&&(n.ip=e);const o=v.get();return o.language=k.getLanguage(),o.screenSize=k.getScreenSize(),n={...o,...n},n})).catch((t=>{console.error(t)}))},toSHA256(t){const e=(new TextEncoder).encode(JSON.stringify(t));return window.crypto.subtle.digest("SHA-256",e).then((t=>{const e=Array.from(new Uint8Array(t)),n=e.map((t=>t.toString(16).padStart(2,"0"))).join("");return n}))},platform(){const t=navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(t)?"ios":/android/.test(t)?"android":"web"},testFilter(t){const e={};return t.os&&t.os.name&&(e.os={name:t.os.name}),e}}))(),C={name:"Link",data(){return{schema:"demo://test-link/",linkContent:"",localUrl:""}},created(){const t=new URL(window.location.href);this.localUrl=`${t.protocol}//${t.host}/#/link/`,this.linkContent=`${window.location.href}`.replace(this.localUrl,""),this.linkContent&&(window.onload=()=>{this.toAppLink()})},methods:{toAppLink(){let t="",e=2e3;_.platform();"ios"===this.platform?(t="https://apps.apple.com/tw/app/國泰人壽/id432046643",e*=2):"android"===this.platform&&(t="https://play.google.com/store/apps/details?id=com.cathay.main&hl=zh_TW&gl=US"),window.location=`${this.schema}${this.linkContent}`,t&&setTimeout((function(){window.location=t}),e)}}},y=C,S=(0,c.Z)(y,d,f,!1,null,"52de8bc2",null),O=S.exports,x=function(){var t=this,e=t._self._c;return e("div",[t.message?e("span",[t._v(t._s(t.message))]):t._e()])},P=[],Z={name:"Access",data(){return{platform:"",linkContent:"",message:""}},created(){this.platform=_.platform()},mounted(){let t={},e="";_.get().then((e=>(t=_.testFilter(e),_.toSHA256(t)))).then((t=>{e=t,this.message=e;const n=this.mockDbQuery(this.message);this.toAppScript(n)}))},methods:{toAppScript(t){"ios"===this.platform&&window.webkit&&window.webkit.messageHandler.getAppLink.postMessage(t),"android"===this.platform&&window.Android&&window.Android.getAppLink(t)},mockDbQuery(t){const e={"3e23e182f6610757be5a6fdb81ed150362a573f13ca3a22c79f19ac50b3ae3c2":"/pageA","1b1bbc2aa37f17be15edbe657b3657b0f9912cec509ac922a3ddeeb1445d8ef4":"/pageB"};return e[t]||""}}},L=Z,T=(0,c.Z)(L,x,P,!1,null,null,null),j=T.exports,$=function(){var t=this,e=t._self._c;return e("div",[t.message?e("span",[t._v(t._s(t.message))]):t._e()])},U=[],H={name:"Agent",data(){return{platform:"",linkContent:"",message:""}},created(){this.platform=_.platform()},mounted(){let t={},e="";_.get().then((e=>(t=_.testFilter(e),_.toSHA256(t)))).then((n=>{e=n,this.message=JSON.stringify({agent:t,hash:e}),this.toAppScript(this.message)}))},methods:{toAppScript(t){const e=t||"EMPTY";"ios"===this.platform&&window.webkit&&window.webkit.messageHandler.getAppLink.postMessage(e),"android"===this.platform&&window.Android&&window.Android.getAppLink(e)}}},F=H,z=(0,c.Z)(F,$,U,!1,null,null,null),E=z.exports,M=[{path:"/"},{path:"/link/:param(.*)",name:"Param",component:O},{path:"/access",name:"Access",component:j},{path:"/agent",name:"Agent",component:E}];o.ZP.prototype.$setCookie=function(t,e){const n=new Date;n.setTime(n.getTime()+864e5);let o="expires="+n.toUTCString();document.cookie=t+"="+e+";"+o+";path=/"},o.ZP.prototype.$getCookie=function(t){let e=t+"=",n=decodeURIComponent(document.cookie),o=n.split(";");for(let r=0;r<o.length;r++){let t=o[r];while(" "==t.charAt(0))t=t.substring(1);if(0==t.indexOf(e))return t.substring(e.length,t.length)}return""},o.ZP.config.productionTip=!1;const D=new u.ZP({mode:"hash",routes:M});o.ZP.use(u.ZP),new o.ZP({router:D,render:t=>t(p)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(p=0;p<t.length;p++){o=t[p][0],r=t[p][1],i=t[p][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(a=!1,i<s&&(s=i));if(a){t.splice(p--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],a=o[1],c=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var p=c(n)}for(e&&e(o);l<s.length;l++)i=s[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(p)},o=self["webpackChunkapp_link"]=self["webpackChunkapp_link"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4719)}));o=n.O(o)})();
//# sourceMappingURL=app.e7a43079.js.map