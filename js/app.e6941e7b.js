(function(){"use strict";var t={6536:function(t,e,n){var o=n(7195),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],s={name:"App"},a=s,c=n(1001),p=(0,c.Z)(a,r,i,!1,null,null,null),l=p.exports,d=n(2241),u=function(){var t=this,e=t._self._c;return e("div",[t.linkContent?t._e():e("div",{staticClass:"note"},[t._v(" 在 "+t._s(t.localUrl)+" 後輸入任意字串，產生 link： ")]),t.linkContent?t._e():e("div",{staticClass:"note-link"},[t._v(" demo://test-link/${input_str} ")]),e("div",{staticClass:"note-link"},[t._v(t._s(`${t.schema}${t.linkContent}`))])])},h=[],g=(n(6229),n(7330),n(2062),{name:"Link",data(){return{schema:"demo://test-link/",linkContent:"",localUrl:""}},created(){const t=new URL(window.location.href);this.localUrl=`${t.protocol}//${t.host}/#/link/`,this.linkContent=`${window.location.href}`.replace(this.localUrl,""),this.linkContent&&(window.onload=()=>{this.toAppLink()})},methods:{toAppLink(){let t="",e=2e3;const n=navigator.userAgent.toLowerCase();/iphone|ipad|ipod/.test(n)?(t="https://apps.apple.com/tw/app/國泰人壽/id432046643",e*=2):/android/.test(n)&&(t="https://play.google.com/store/apps/details?id=com.cathay.main&hl=zh_TW&gl=US"),this.$setCookie("link",`/${this.linkContent}`),window.location=`${this.schema}${this.linkContent}`,t&&setTimeout((function(){window.location=t}),e)}}}),f=g,m=(0,c.Z)(f,u,h,!1,null,"5f5b2826",null),w=m.exports,v=function(){var t=this,e=t._self._c;return e("div",[t.message?e("span",[t._v(t._s(t.message))]):t._e()])},k=[],A=(n(1439),n(7585),n(5315),n(306)),y=(n(7658),n(4605)),b=n.n(y),_=(()=>({get(){let t=new(b()),e=t.getResult();return e}}))();const C=(()=>({async getIpAddress(){try{const t=await A.Z.get("https://api.ipify.org?format=json");return t.data.ip}catch(t){throw console.error("Error: ",t),t}},getFonts(){const t=[],e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";for(let n=0;n<e.length;n++){let o=e[n]+" font",r=this.measureTextWidth(e[n],o);t.push({font:o,width:r})}return t},getLanguage(){return navigator.language||navigator.userLanguage},getScreenSize(){return{width:window.screen.width,height:window.screen.height}}}))();var S=(()=>({get(){const t=_.get();return t.language=C.getLanguage(),t.screenSize=C.getScreenSize(),t},platform(){const t=navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(t)?"ios":/android/.test(t)?"android":"web"}}))(),O={name:"Access",data(){return{platform:"",linkContent:"",message:""}},created(){this.platform=S.platform()},mounted(){this.getIpAddress().then((t=>{const e={ip:t},n=S.get();n.os&&(e.os=n.os),n.device&&(e.device=n.device),this.createBrowserFingerprint(e).then((t=>{this.message=t;const e=this.mockDbQuery(this.message);this.toAppScript(e)}))})).catch((t=>{console.error("Error getting IP: ",t)}))},methods:{toAppScript(t){"IOS"===this.platform&&window.webkit&&window.webkit.messageHandler.getAppLink.postMessage(t),"Android"===this.platform&&window.Android&&window.Android.getAppLink(t)},mockDbQuery(t){const e={"6b061c25e7aff1260c171241d4db8e6ee032a026d9432a889f838eae052fd6d5":"/pie-chart"};return e[t]||""},async getIpAddress(){try{const t=await A.Z.get("https://api.ipify.org?format=json");return t.data.ip}catch(t){throw console.error("Error: ",t),t}},async createBrowserFingerprint(t){const e=JSON.stringify(t),n=(new TextEncoder).encode(e),o=await window.crypto.subtle.digest("SHA-256",n),r=Array.from(new Uint8Array(o)),i=r.map((t=>t.toString(16).padStart(2,"0"))).join("");return i}}},Z=O,P=(0,c.Z)(Z,v,k,!1,null,null,null),x=P.exports;const L=[{path:"/",name:"Link",component:w},{path:"/:param(.*)",name:"Param",component:w}],$=[{path:"/",name:"Access",component:x}];new d.ZP({mode:"hash",routes:L}),new d.ZP({mode:"hash",routes:$});var j=function(){var t=this,e=t._self._c;return e("div",[t.message?e("span",[t._v(t._s(t.message))]):t._e()])},T=[],I={name:"Agent",data(){return{platform:"",linkContent:"",message:""}},created(){this.platform=S.platform()},mounted(){this.getIpAddress().then((t=>{const e={ip:t},n=S.get();n.os&&(e.os=n.os),n.device&&(e.device=n.device),this.createBrowserFingerprint(e).then((t=>{this.message=JSON.stringify({agent:e,hash:t}),this.toAppScript(this.message)}))})).catch((t=>{console.error("Error getting IP: ",t)}))},methods:{toAppScript(t){"IOS"===this.platform&&window.webkit&&window.webkit.messageHandler.getAppLink.postMessage(t),"Android"===this.platform&&window.Android&&window.Android.getAppLink(t)},async getIpAddress(){try{const t=await A.Z.get("https://api.ipify.org?format=json");return t.data.ip}catch(t){throw console.error("Error: ",t),t}},async createBrowserFingerprint(t){const e=JSON.stringify(t),n=(new TextEncoder).encode(e),o=await window.crypto.subtle.digest("SHA-256",n),r=Array.from(new Uint8Array(o)),i=r.map((t=>t.toString(16).padStart(2,"0"))).join("");return i}}},U=I,E=(0,c.Z)(U,j,T,!1,null,null,null),F=E.exports;o.ZP.prototype.$setCookie=function(t,e){const n=new Date;n.setTime(n.getTime()+864e5);let o="expires="+n.toUTCString();document.cookie=t+"="+e+";"+o+";path=/"},o.ZP.prototype.$getCookie=function(t){let e=t+"=",n=decodeURIComponent(document.cookie),o=n.split(";");for(let r=0;r<o.length;r++){let t=o[r];while(" "==t.charAt(0))t=t.substring(1);if(0==t.indexOf(e))return t.substring(e.length,t.length)}return""},o.ZP.config.productionTip=!1;const z=new d.ZP({mode:"hash",routes:[{path:"/"},{path:"/link/:param(.*)",name:"Param",component:w},{path:"/access",name:"Access",component:x},{path:"/agent",name:"Agent",component:F}]});o.ZP.use(d.ZP),new o.ZP({router:z,render:t=>t(l)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(a=!1,i<s&&(s=i));if(a){t.splice(l--,1);var p=r();void 0!==p&&(e=p)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],a=o[1],c=o[2],p=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var l=c(n)}for(e&&e(o);p<s.length;p++)i=s[p],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunkapp_link"]=self["webpackChunkapp_link"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6536)}));o=n.O(o)})();
//# sourceMappingURL=app.e6941e7b.js.map