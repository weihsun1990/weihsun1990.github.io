(function(){"use strict";var e={655:function(e,t,n){var r=n(7195),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],o={name:"App"},s=o,l=n(1001),A=(0,l.Z)(s,i,a,!1,null,null,null),c=A.exports,g=n(2241),p=function(){var e=this,t=e._self._c;return t("div",[e.linkContent?e._e():t("div",{staticClass:"note"},[e._v(" 在 "+e._s(e.localUrl)+" 後輸入任意字串，產生 link： ")]),e.linkContent?e._e():t("div",{staticClass:"note-link"},[e._v(" demo://test-link/${input_str} ")]),e.linkContent?t("div",{staticClass:"note-link"},[e._v(" "+e._s(`${e.schema}${e.linkContent}`)+" ")]):e._e()])},d=[],u=(n(6229),n(7330),n(2062),n(7658),n(1439),n(7585),n(5315),n(306)),h=e=>{const t=e?u.Z.create(e):u.Z.create();return t.interceptors.request.use((e=>e),(e=>Promise.reject(e))),t.interceptors.response.use((e=>e),(e=>Promise.reject(e))),t},f=n(4605),m=n.n(f),w=(()=>({get(){let e=new(m()),t=e.getResult();return t}}))();const b=(()=>{function e(e,t){const n=document.createElement("canvas"),r=n.getContext("2d");r.font=t;const i=r.measureText(e);return i.width}return{getFonts(){const t=[],n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";for(let r=0;r<n.length;r++){let i=n[r]+" font",a=e(n[r],i);t.push({font:i,width:a})}return t},getLanguage(){return navigator.language||navigator.userLanguage},getScreenSize(){return{width:window.screen.width,height:window.screen.height}}}})(),v=h(),x=()=>v.get("https://api.ipify.org?format=json").then((e=>e.data.ip));var E=(()=>({get(){return Promise.all([x()]).then((e=>{const t=e[0];let n={};t&&(n.ip=t);const r=w.get();return r.language=b.getLanguage(),r.screenSize=b.getScreenSize(),n={...r,...n},n})).catch((e=>{console.error(e)}))},toSHA256(e){const t=(new TextEncoder).encode(JSON.stringify(e));return window.crypto.subtle.digest("SHA-256",t).then((e=>{const t=Array.from(new Uint8Array(e)),n=t.map((e=>e.toString(16).padStart(2,"0"))).join("");return n}))},platform(){const e=navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(e)?"ios":/android/.test(e)?"android":"web"},testFilter(e){const t={};return e.os&&e.os.name&&(t.os={name:e.os.name}),t}}))(),C={name:"Link",data(){return{schema:"demo://test-link/",linkContent:"",localUrl:""}},created(){const e=new URL(window.location.href);this.localUrl=`${e.protocol}//${e.host}/#/link/`,this.linkContent=`${window.location.href}`.replace(this.localUrl,""),this.linkContent&&(window.onload=()=>{this.toAppLink()})},methods:{toAppLink(){let e="",t=2e3;E.platform();"ios"===this.platform?(e="https://apps.apple.com/tw/app/國泰人壽/id432046643",t*=2):"android"===this.platform&&(e="https://play.google.com/store/apps/details?id=com.cathay.main&hl=zh_TW&gl=US"),window.location=`${this.schema}${this.linkContent}`,e&&setTimeout((function(){window.location=e}),t)}}},k=C,_=(0,l.Z)(k,p,d,!1,null,"52de8bc2",null),Q=_.exports,y=function(){var e=this,t=e._self._c;return t("div",[e.message?t("span",[e._v(e._s(e.message))]):e._e()])},B=[],L={name:"Access",data(){return{platform:"",linkContent:"",message:""}},created(){this.platform=E.platform()},mounted(){let e={},t="";E.get().then((t=>(e=E.testFilter(t),E.toSHA256(e)))).then((e=>{t=e,this.message=t;const n=this.mockDbQuery(this.message);this.toAppScript(n)}))},methods:{toAppScript(e){"ios"===this.platform&&window.webkit&&window.webkit.messageHandler.getAppLink.postMessage(e),"android"===this.platform&&window.Android&&window.Android.getAppLink(e)},mockDbQuery(e){const t={"3e23e182f6610757be5a6fdb81ed150362a573f13ca3a22c79f19ac50b3ae3c2":"/pageA","1b1bbc2aa37f17be15edbe657b3657b0f9912cec509ac922a3ddeeb1445d8ef4":"/pageB"};return t[e]||""}}},M=L,S=(0,l.Z)(M,y,B,!1,null,null,null),I=S.exports,W=function(){var e=this,t=e._self._c;return t("div",[e.message?t("span",[e._v(e._s(e.message))]):e._e()])},R=[],O={name:"Agent",data(){return{platform:"",linkContent:"",message:""}},created(){this.platform=E.platform()},mounted(){let e={},t="";E.get().then((t=>(e=E.testFilter(t),E.toSHA256(e)))).then((n=>{t=n,this.message=JSON.stringify({agent:e,hash:t}),this.toAppScript(this.message)}))},methods:{toAppScript(e){const t=e||"EMPTY";"ios"===this.platform&&window.webkit&&window.webkit.messageHandler.getAppLink.postMessage(t),"android"===this.platform&&window.Android&&window.Android.getAppLink(t)}}},F=O,G=(0,l.Z)(F,W,R,!1,null,null,null),D=G.exports,P=function(){var e=this,t=e._self._c;return t("div",[e.fpid?t("div",[e._v(e._s(e.fpid))]):e._e()])},V=[],Z={name:"Fingerprint",data(){return{fpid:"",fpc:[],result:[],safari:[{key:"userAgent",value:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15"},{key:"webdriver",value:!1},{key:"language",value:"zh-TW"},{key:"colorDepth",value:24},{key:"deviceMemory",value:"not available"},{key:"hardwareConcurrency",value:8},{key:"screenResolution",value:[900,1440]},{key:"availableScreenResolution",value:[786,1440]},{key:"timezoneOffset",value:-480},{key:"timezone",value:"Asia/Taipei"},{key:"sessionStorage",value:!0},{key:"localStorage",value:!0},{key:"indexedDb",value:!0},{key:"addBehavior",value:!1},{key:"openDatabase",value:!1},{key:"cpuClass",value:"not available"},{key:"platform",value:"MacIntel"},{key:"plugins",value:[["PDF Viewer","Portable Document Format",[["application/pdf","pdf"],["text/pdf","pdf"]]],["Chrome PDF Viewer","Portable Document Format",[["application/pdf","pdf"],["text/pdf","pdf"]]],["Chromium PDF Viewer","Portable Document Format",[["application/pdf","pdf"],["text/pdf","pdf"]]],["Microsoft Edge PDF Viewer","Portable Document Format",[["application/pdf","pdf"],["text/pdf","pdf"]]],["WebKit built-in PDF","Portable Document Format",[["application/pdf","pdf"],["text/pdf","pdf"]]]]},{key:"webgl",value:["data:image/png;base64,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","extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_astc;WEBGL_compressed_texture_etc;WEBGL_compressed_texture_etc1;WEBGL_compressed_texture_pvrtc;WEBKIT_WEBGL_compressed_texture_pvrtc;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw","webgl aliased line width range:[1, 1]","webgl aliased point size range:[1, 511]","webgl alpha bits:8","webgl antialiasing:yes","webgl blue bits:8","webgl depth bits:24","webgl green bits:8","webgl max anisotropy:16","webgl max combined texture image units:32","webgl max cube map texture size:16384","webgl max fragment uniform vectors:1024","webgl max render buffer size:16384","webgl max texture image units:16","webgl max texture size:16384","webgl max varying vectors:30","webgl max vertex attribs:16","webgl max vertex texture image units:16","webgl max vertex uniform vectors:1024","webgl max viewport dims:[16384, 16384]","webgl red bits:8","webgl renderer:WebKit WebGL","webgl shading language version:WebGL GLSL ES 1.0 (1.0)","webgl stencil bits:0","webgl vendor:WebKit","webgl version:WebGL 1.0","webgl unmasked vendor:Apple Inc.","webgl unmasked renderer:Apple GPU","webgl vertex shader high float precision:23","webgl vertex shader high float precision rangeMin:127","webgl vertex shader high float precision rangeMax:127","webgl vertex shader medium float precision:23","webgl vertex shader medium float precision rangeMin:127","webgl vertex shader medium float precision rangeMax:127","webgl vertex shader low float precision:23","webgl vertex shader low float precision rangeMin:127","webgl vertex shader low float precision rangeMax:127","webgl fragment shader high float precision:23","webgl fragment shader high float precision rangeMin:127","webgl fragment shader high float precision rangeMax:127","webgl fragment shader medium float precision:23","webgl fragment shader medium float precision rangeMin:127","webgl fragment shader medium float precision rangeMax:127","webgl fragment shader low float precision:23","webgl fragment shader low float precision rangeMin:127","webgl fragment shader low float precision rangeMax:127","webgl vertex shader high int precision:0","webgl vertex shader high int precision rangeMin:31","webgl vertex shader high int precision rangeMax:30","webgl vertex shader medium int precision:0","webgl vertex shader medium int precision rangeMin:31","webgl vertex shader medium int precision rangeMax:30","webgl vertex shader low int precision:0","webgl vertex shader low int precision rangeMin:31","webgl vertex shader low int precision rangeMax:30","webgl fragment shader high int precision:0","webgl fragment shader high int precision rangeMin:31","webgl fragment shader high int precision rangeMax:30","webgl fragment shader medium int precision:0","webgl fragment shader medium int precision rangeMin:31","webgl fragment shader medium int precision rangeMax:30","webgl fragment shader low int precision:0","webgl fragment shader low int precision rangeMin:31","webgl fragment shader low int precision rangeMax:30"]},{key:"webglVendorAndRenderer",value:"Apple Inc.~Apple GPU"},{key:"hasLiedLanguages",value:!1},{key:"hasLiedResolution",value:!1},{key:"hasLiedOs",value:!1},{key:"hasLiedBrowser",value:!1},{key:"touchSupport",value:[0,!1,!1]},{key:"fonts",value:["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Comic Sans MS","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","LUCIDA GRANDE","Microsoft Sans Serif","Monaco","Palatino","Tahoma","Times","Times New Roman","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"]},{key:"audio",value:"124.04345259929687"}]}},created(){},mounted(){window.requestIdleCallback?requestIdleCallback((()=>{Fingerprint2.get((e=>{this.fpc=e,this.mapping(this.fpc);const t=this.filterFpc.map((e=>e.value));this.fpid=Fingerprint2.x64hash128(t.join(""),31)}))})):setTimeout((()=>{Fingerprint2.get((e=>{this.fpc=e;const t=this.filterFpc.map((e=>e.value));this.fpid=Fingerprint2.x64hash128(t.join(""),31)}))}),500)},methods:{mapping(e){const t=this.safari,n=[];e.forEach((e=>{const r=t.find((t=>t.key===e.key));r&&r.value===e.value&&n.push(e)})),this.result=n}},computed:{filterFpc(){const e=["webdriver","language","hardwareConcurrency","timezoneOffset","timezone","sessionStorage","localStorage","indexedDb","addBehavior","cpuClass","platform","hasLiedLanguages","hasLiedResolution","hasLiedOs","hasLiedBrowser"];return this.fpc.filter((t=>e.some((e=>e===t.key))))}}},T=Z,H=(0,l.Z)(T,P,V,!1,null,"bfda3738",null),K=H.exports,j=[{path:"/"},{path:"/link/:param(.*)",name:"Param",component:Q},{path:"/access",name:"Access",component:I},{path:"/agent",name:"Agent",component:D},{path:"/fingerprint",name:"Fingerprint",component:K}];r.ZP.prototype.$setCookie=function(e,t){const n=new Date;n.setTime(n.getTime()+864e5);let r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"},r.ZP.prototype.$getCookie=function(e){let t=e+"=",n=decodeURIComponent(document.cookie),r=n.split(";");for(let i=0;i<r.length;i++){let e=r[i];while(" "==e.charAt(0))e=e.substring(1);if(0==e.indexOf(t))return e.substring(t.length,e.length)}return""},r.ZP.config.productionTip=!1;const N=new g.ZP({mode:"hash",routes:j});r.ZP.use(g.ZP),new r.ZP({router:N,render:e=>e(c)}).$mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],a=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var A=i();void 0!==A&&(t=A)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],s=r[1],l=r[2],A=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(t&&t(r);A<o.length;A++)a=o[A],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkapp_link"]=self["webpackChunkapp_link"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(655)}));r=n.O(r)})();
//# sourceMappingURL=app.d473ada8.js.map