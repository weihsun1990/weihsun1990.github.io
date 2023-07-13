(function(){"use strict";var t={1082:function(t,n,e){var o=e(7195),i=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a={name:"App"},s=a,l=e(1001),c=(0,l.Z)(s,i,r,!1,null,null,null),p=c.exports,u=e(2241),d=function(){var t=this,n=t._self._c;return n("div",[t.linkContent?t._e():n("div",{staticClass:"note"},[t._v(" 在 "+t._s(t.localUrl)+" 後輸入任意字串，產生 link： ")]),t.linkContent?t._e():n("div",{staticClass:"note-link"},[t._v(" demo://test-link/${input_str} ")]),n("div",{staticClass:"note-link"},[t._v(t._s(`${t.schema}${t.linkContent}`))])])},h=[],m=(e(6229),e(7330),e(2062),{name:"Link",data(){return{schema:"demo://test-link/",linkContent:"",localUrl:""}},created(){const t=new URL(window.location.href);this.localUrl=`${t.protocol}//${t.host}/#/link/`,this.linkContent=`${window.location.href}`.replace(this.localUrl,""),this.linkContent&&(window.onload=()=>{this.toAppLink()})},methods:{toAppLink(){let t="",n=2e3;const e=navigator.userAgent.toLowerCase();/iphone|ipad|ipod/.test(e)?(t="https://apps.apple.com/tw/app/國泰人壽/id432046643",n*=2):/android/.test(e)&&(t="https://play.google.com/store/apps/details?id=com.cathay.main&hl=zh_TW&gl=US"),this.$setCookie("link",`/${this.linkContent}`),window.location=`${this.schema}${this.linkContent}`,t&&setTimeout((function(){window.location=t}),n)}}}),f=m,k=(0,l.Z)(f,d,h,!1,null,"5f5b2826",null),w=k.exports,v=function(){var t=this,n=t._self._c;return n("div",[t.linkContent?n("span",[t._v(t._s(`sent ${t.linkContent} to ${t.platform}`))]):t._e()])},g=[],C={name:"Access",data(){return{platform:"",linkContent:""}},created(){this.platform=this.$route.meta.platform||""},mounted(){this.linkContent=this.$getCookie("link"),"IOS"===this.platform&&window.webkit&&window.webkit.messageHandler.getAppLink.postMessage(this.linkContent),"Android"===this.platform&&window.Android&&window.Android.getAppLink(this.linkContent)}},_=C,A=(0,l.Z)(_,v,g,!1,null,null,null),b=A.exports;const $=[{path:"/",name:"Link",component:w},{path:"/:param(.*)",name:"Param",component:w}],O=[{path:"/",name:"Access",component:b},{path:"/ios",name:"Access",component:b,meta:{platform:"IOS"}},{path:"/android",name:"Access",component:b,meta:{platform:"Android"}}];new u.ZP({mode:"hash",routes:$}),new u.ZP({mode:"hash",routes:O});o.ZP.prototype.$setCookie=function(t,n){const e=new Date;e.setTime(e.getTime()+864e5);let o="expires="+e.toUTCString();document.cookie=t+"="+n+";"+o+";path=/"},o.ZP.prototype.$getCookie=function(t){let n=t+"=",e=decodeURIComponent(document.cookie),o=e.split(";");for(let i=0;i<o.length;i++){let t=o[i];while(" "==t.charAt(0))t=t.substring(1);if(0==t.indexOf(n))return t.substring(n.length,t.length)}return""},o.ZP.config.productionTip=!1;const P=new u.ZP({mode:"hash",routes:[{path:"/"},{path:"/link",name:"Link",component:w},{path:"/link/:param(.*)",name:"Param",component:w},{path:"/access",name:"Access",component:b},{path:"/access/ios",name:"AccessIOS",component:b,meta:{platform:"IOS"}},{path:"/access/android",name:"AccessAndroid",component:b,meta:{platform:"Android"}}]});o.ZP.use(u.ZP),new o.ZP({router:P,render:t=>t(p)}).$mount("#app")}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return t[o].call(r.exports,r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(n,o,i,r){if(!o){var a=1/0;for(p=0;p<t.length;p++){o=t[p][0],i=t[p][1],r=t[p][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(e.O).every((function(t){return e.O[t](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(p--,1);var c=i();void 0!==c&&(n=c)}}return n}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[o,i,r]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var i,r,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(l)var p=l(e)}for(n&&n(o);c<a.length;c++)r=a[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(p)},o=self["webpackChunkapp_link"]=self["webpackChunkapp_link"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(1082)}));o=e.O(o)})();
//# sourceMappingURL=app.978a1651.js.map