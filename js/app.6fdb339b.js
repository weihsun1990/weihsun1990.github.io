(function(){"use strict";var t={1314:function(t,n,o){var i=o(7195),e=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[t.link?t._e():n("div",{staticClass:"note"},[t._v(" 在 "+t._s(t.localUrl)+" 後輸入任意字串，產生 link： ")]),t.link?t._e():n("div",{staticClass:"note-link"},[t._v("demo://test-link/${input_str}")]),n("div",{staticClass:"note-link"},[t._v(t._s(t.link))]),n("a",{attrs:{href:"https://weihsun1990.github.io/#/chart"}},[t._v("chart")]),n("a",{attrs:{href:"https://weihsun1990.github.io/#/pie-chart"}},[t._v("chart")])])},r=[],a=(o(6229),o(7330),o(2062),{name:"App",data(){return{link:"",localUrl:""}},created(){const t=new URL(window.location.href);this.localUrl=`${t.protocol}//${t.host}/#/`;const n=`${window.location.href}`.replace(this.localUrl,"");n&&(this.link=`demo://test-link/${n}`,this.$toAppLink(n))},mounted(){}}),l=a,c=o(1001),u=(0,c.Z)(l,e,r,!1,null,null,null),s=u.exports,p=o(2241);i.ZP.config.productionTip=!1,i.ZP.prototype.$toAppLink=function(t){window.onload=function(){let n="";const o=navigator.userAgent.toLowerCase();/iphone|ipad|ipod/.test(o)?n="https://apps.apple.com/tw/app/國泰人壽/id432046643":/android/.test(o)&&(n="https://play.google.com/store/apps/details?id=com.cathay.main&hl=zh_TW&gl=US"),window.location=`demo://test-link/${t}`,n&&setTimeout((function(){window.location=n}),500)}},i.ZP.use(p.ZP);const f=[{path:"/"}],h=new p.ZP({mode:"hash",routes:f});new i.ZP({router:h,render:t=>t(s)}).$mount("#app")}},n={};function o(i){var e=n[i];if(void 0!==e)return e.exports;var r=n[i]={exports:{}};return t[i].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(n,i,e,r){if(!i){var a=1/0;for(s=0;s<t.length;s++){i=t[s][0],e=t[s][1],r=t[s][2];for(var l=!0,c=0;c<i.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((function(t){return o.O[t](i[c])}))?i.splice(c--,1):(l=!1,r<a&&(a=r));if(l){t.splice(s--,1);var u=e();void 0!==u&&(n=u)}}return n}r=r||0;for(var s=t.length;s>0&&t[s-1][2]>r;s--)t[s]=t[s-1];t[s]=[i,e,r]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var i in n)o.o(n,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,i){var e,r,a=i[0],l=i[1],c=i[2],u=0;if(a.some((function(n){return 0!==t[n]}))){for(e in l)o.o(l,e)&&(o.m[e]=l[e]);if(c)var s=c(o)}for(n&&n(i);u<a.length;u++)r=a[u],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(s)},i=self["webpackChunkapp_link"]=self["webpackChunkapp_link"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(1314)}));i=o.O(i)})();
//# sourceMappingURL=app.6fdb339b.js.map