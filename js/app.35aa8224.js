(function(){"use strict";var t={6513:function(t,n,o){var e=o(7195),i=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[t.link?t._e():n("div",{staticClass:"note"},[t._v(" 在 "+t._s(t.localUrl)+" 後輸入任意字串，產生 link： ")]),t.link?t._e():n("div",{staticClass:"note-link"},[t._v("demo://test-link/${input_str}")]),n("div",{staticClass:"note-link"},[t._v(t._s(t.link))]),n("a",{attrs:{href:"https://weihsun1990.github.io/#/chart",target:"_blank"}},[t._v("chart")]),n("br"),n("a",{attrs:{href:"https://weihsun1990.github.io/#/pie-chart",target:"_blank"}},[t._v("chart")])])},r=[],a=(o(6229),o(7330),o(2062),{name:"App",data(){return{link:"",localUrl:""}},created(){const t=new URL(window.location.href);this.localUrl=`${t.protocol}//${t.host}/#/`;const n=`${window.location.href}`.replace(this.localUrl,"");n&&(this.link=`demo://test-link/${n}`,this.$toAppLink(n))},mounted(){}}),l=a,c=o(1001),u=(0,c.Z)(l,i,r,!1,null,null,null),s=u.exports,p=o(2241);e.ZP.config.productionTip=!1,e.ZP.prototype.$toAppLink=function(t){window.onload=function(){let n="",o=2e3;const e=navigator.userAgent.toLowerCase();/iphone|ipad|ipod/.test(e)?(n="https://apps.apple.com/tw/app/國泰人壽/id432046643",o*=2):/android/.test(e)&&(n="https://play.google.com/store/apps/details?id=com.cathay.main&hl=zh_TW&gl=US"),window.location=`demo://test-link/${t}`,n&&setTimeout((function(){window.location=n}),o)}},e.ZP.use(p.ZP);const f=[{path:"/"}],h=new p.ZP({mode:"hash",routes:f});new e.ZP({router:h,render:t=>t(s)}).$mount("#app")}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(n,e,i,r){if(!e){var a=1/0;for(s=0;s<t.length;s++){e=t[s][0],i=t[s][1],r=t[s][2];for(var l=!0,c=0;c<e.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((function(t){return o.O[t](e[c])}))?e.splice(c--,1):(l=!1,r<a&&(a=r));if(l){t.splice(s--,1);var u=i();void 0!==u&&(n=u)}}return n}r=r||0;for(var s=t.length;s>0&&t[s-1][2]>r;s--)t[s]=t[s-1];t[s]=[e,i,r]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,r,a=e[0],l=e[1],c=e[2],u=0;if(a.some((function(n){return 0!==t[n]}))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(c)var s=c(o)}for(n&&n(e);u<a.length;u++)r=a[u],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(s)},e=self["webpackChunkapp_link"]=self["webpackChunkapp_link"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(6513)}));e=o.O(e)})();
//# sourceMappingURL=app.35aa8224.js.map