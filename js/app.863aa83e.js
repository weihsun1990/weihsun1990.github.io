(function(){"use strict";var n={8193:function(n,t,e){var o=e(7195),i=function(){var n=this,t=n._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],a={name:"App"},s=a,l=e(1001),c=(0,l.Z)(s,i,r,!1,null,null,null),p=c.exports,u=e(2241),h=function(){var n=this,t=n._self._c;return t("div",[n.linkContent?n._e():t("div",{staticClass:"note"},[n._v(" 在 "+n._s(n.localUrl)+" 後輸入任意字串，產生 link： ")]),n.linkContent?n._e():t("div",{staticClass:"note-link"},[n._v(" demo://test-link/${input_str} ")]),t("div",{staticClass:"note-link"},[n._v(n._s(`${n.schema}${n.linkContent}`))])])},d=[],m=(e(6229),e(7330),e(2062),{name:"Link",data(){return{schema:"demo://test-link/",linkContent:"",localUrl:""}},created(){const n=new URL(window.location.href);this.localUrl=`${n.protocol}//${n.host}/#/link/`,this.linkContent=`${window.location.href}`.replace(this.localUrl,""),this.linkContent&&(window.onload=()=>{this.toAppLink()})},methods:{toAppLink(){let n="",t=2e3;const e=navigator.userAgent.toLowerCase();/iphone|ipad|ipod/.test(e)?(n="https://apps.apple.com/tw/app/國泰人壽/id432046643",t*=2):/android/.test(e)&&(n="https://play.google.com/store/apps/details?id=com.cathay.main&hl=zh_TW&gl=US"),this.$setCookie("link",`/${this.linkContent}`),window.location=`${this.schema}${this.linkContent}`,n&&setTimeout((function(){window.location=n}),t)}}}),f=m,k=(0,l.Z)(f,h,d,!1,null,"5f5b2826",null),w=k.exports,v=function(){var n=this,t=n._self._c;return t("div",[n.linkContent?t("span",[n._v(n._s(`sent ${n.linkContent} to ${n.platform}`))]):n._e()])},C=[],g={name:"Access",data(){return{platform:"",linkContent:""}},created(){this.platform=this.$route.meta.platform||""},mounted(){this.linkContent=this.$getCookie("link"),this.linkContent||(this.linkContent="no cookie"),"IOS"===this.platform&&window.webkit&&window.webkit.messageHandler.getAppLink.postMessage(this.linkContent),"Android"===this.platform&&window.Android&&window.Android.getAppLink(this.linkContent)}},_=g,A=(0,l.Z)(_,v,C,!1,null,null,null),b=A.exports;const $=[{path:"/",name:"Link",component:w},{path:"/:param(.*)",name:"Param",component:w}],O=[{path:"/",name:"Access",component:b},{path:"/ios",name:"Access",component:b,meta:{platform:"IOS"}},{path:"/android",name:"Access",component:b,meta:{platform:"Android"}}];new u.ZP({mode:"hash",routes:$}),new u.ZP({mode:"hash",routes:O});o.ZP.prototype.$setCookie=function(n,t){const e=new Date;e.setTime(e.getTime()+864e5);let o="expires="+e.toUTCString();document.cookie=n+"="+t+";"+o+";path=/"},o.ZP.prototype.$getCookie=function(n){let t=n+"=",e=decodeURIComponent(document.cookie),o=e.split(";");for(let i=0;i<o.length;i++){let n=o[i];while(" "==n.charAt(0))n=n.substring(1);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return""},o.ZP.config.productionTip=!1;const P=new u.ZP({mode:"hash",routes:[{path:"/"},{path:"/link",name:"Link",component:w},{path:"/link/:param(.*)",name:"Param",component:w},{path:"/access",name:"Access",component:b},{path:"/access/ios",name:"AccessIOS",component:b,meta:{platform:"IOS"}},{path:"/access/android",name:"AccessAndroid",component:b,meta:{platform:"Android"}}]});o.ZP.use(u.ZP),new o.ZP({router:P,render:n=>n(p)}).$mount("#app")}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return n[o].call(r.exports,r,r.exports,e),r.exports}e.m=n,function(){var n=[];e.O=function(t,o,i,r){if(!o){var a=1/0;for(p=0;p<n.length;p++){o=n[p][0],i=n[p][1],r=n[p][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(e.O).every((function(n){return e.O[n](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){n.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var p=n.length;p>0&&n[p-1][2]>r;p--)n[p]=n[p-1];n[p]=[o,i,r]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==n[t]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(l)var p=l(e)}for(t&&t(o);c<a.length;c++)r=a[c],e.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return e.O(p)},o=self["webpackChunkapp_link"]=self["webpackChunkapp_link"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(8193)}));o=e.O(o)})();
//# sourceMappingURL=app.863aa83e.js.map