!function(e){function t(t){for(var a,o,i=t[0],s=t[1],c=t[2],u=0,p=[];u<i.length;u++)o=i[u],r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(m&&m(t);p.length;)p.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={29:0},r={29:0},l=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,20:1,21:1,31:1,32:1,33:1,34:1,35:1,36:1}[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="static/css/"+({}[e]||e)+"_f5d67134_chunk.css",r=i.p+a,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var c=(m=l[s]).getAttribute("data-href")||m.getAttribute("href");if("stylesheet"===m.rel&&(c===a||c===r))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){var m;if((c=(m=u[s]).getAttribute("data-href"))===a||c===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=a,delete o[e],p.parentNode.removeChild(p),n(l)},p.href=r,document.getElementsByTagName("head")[0].appendChild(p)}).then(function(){o[e]=0}));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+"static/js/"+({}[e]||e)+"_f5d67134_chunk.js"}(e);var c=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",c.type=a,c.request=o,n[1](c)}r[e]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var m=c;l.push([56,30]),n()}([function(e,t,n){e.exports=n(9)(1)},,function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")};t.b=a;var o=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o="wui-"+e,r=t.filter(Boolean).reduce(function(e,t){if("string"==typeof t){var n=[o,t].join("-");e.push(n)}else for(var a in t)if(t.hasOwnProperty(a)&&t[a]){n=[o,a].join("-");e.push(n)}return e},[]).join(" ");return""===t[0]||void 0===t[0]?a(o,r):r}}},,,function(e,t,n){e.exports=n(9)(33)},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),l=n(2),i=Object(l.a)("layout-sider");t.default=function(e){var t=e.className,n=a.b(e,["className"]);return r.a.createElement("div",a.a({className:Object(l.b)(i(),t)},n),e.children)}},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),l=n(2),i=(n(14),n(6)),s=Object(l.a)("layout");t.default=function(e){var t=e.className,n=a.b(e,["className"]),o=e.children,c=o.length>0&&o.some(function(e){return e.type===i.default});return r.a.createElement("div",a.a({className:Object(l.b)(s("",{hasSider:c}),t)},n),e.children)}},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),l=(n(12),n(16),n(2));t.default=function(e){var t=e.className,n=e.name,o=a.b(e,["className","name"]);return r.a.createElement("svg",a.a({className:Object(l.b)("wui-icon",t)},o),r.a.createElement("use",{xlinkHref:"#"+n}))}},function(e,t){e.exports=vendor_e186981e7e3e42a05d7c},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),l=n(2),i=Object(l.a)("layout-content");t.default=function(e){var t=e.className,n=a.b(e,["className"]);return r.a.createElement("div",a.a({className:Object(l.b)(i(),t)},n),e.children)}},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),l=n(2),i=Object(l.a)("layout-header");t.default=function(e){var t=e.className,n=a.b(e,["className"]);return r.a.createElement("div",a.a({className:Object(l.b)(i(),t)},n),e.children)}},function(e,t,n){try{(e=>e.keys().forEach(e))(n(53))}catch(e){}},function(e,t,n){e.exports=n(9)(29)},function(e,t,n){},function(e,t,n){e.exports=n(9)(15)},function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(4),l=n.n(r),i=new o.a({id:"alipay",use:"alipay-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="alipay"><defs><style type="text/css"></style></defs><path d="M860.164096 0C950.276096 0 1024 73.878528 1024 164.169728V695.66464s-32.766976-4.105216-180.219904-53.352448c-40.964096-14.36672-96.258048-34.890752-157.696-57.46176 36.862976-63.61088 65.529856-137.489408 86.011904-215.468032H569.344V297.55392h247.809024V256.512h-247.808V135.440384H468.992c-18.429952 0-18.429952 18.465792-18.429952 18.465792v104.659968h-249.856v41.04192h249.856v69.771264H243.712v41.039872h401.410048c-14.338048 51.305472-34.813952 98.501632-57.341952 141.596672C458.754048 508.919808 319.485952 474.039296 231.424 496.60928c-55.299072 14.3616-92.163072 38.987776-112.642048 63.614976C22.526976 677.19168 92.157952 855.72608 294.912 855.72608c120.832 0 237.565952-67.718144 327.677952-178.5344C757.76 742.8608 1024 853.67808 1024 853.67808v6.15424c0 90.2912-73.725952 164.16768-163.835904 164.16768H163.84C73.728 1024 0 950.12352 0 859.83232V164.170752C0 73.878528 73.728 0 163.84 0h696.324096zM249.853952 556.120064C344.067072 545.860608 432.128 582.79936 536.578048 634.102784c-75.776 94.39232-167.936 153.9072-260.097024 153.9072-159.746048 0-206.850048-125.17376-126.976-194.952192 26.620928-22.573056 73.728-34.881536 100.348928-36.937728z" p-id="2201" /></symbol>'});l.a.add(i);t.default=i},function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(4),l=n.n(r),i=new o.a({id:"close",use:"close-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="close"><defs><style type="text/css"></style></defs><path d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z" p-id="1432" /></symbol>'});l.a.add(i);t.default=i},function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(4),l=n.n(r),i=new o.a({id:"error",use:"error-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="error"><defs><style type="text/css"></style></defs><path d="M256 955.733333c-66.030933 0-102.4-36.369067-102.4-102.4V341.333333c0-4.420267 1.6896-8.465067 4.4544-11.485866l0.017067-0.017067a7.9872 7.9872 0 0 1 0.529066-0.546133l256-256 0.546134-0.529067 0.017066-0.017067A16.981333 16.981333 0 0 1 426.666667 68.266667h341.333333c66.030933 0 102.4 36.369067 102.4 102.4v682.666666c0 63.368533-33.979733 99.720533-95.6928 102.382934L256 955.733333z m-68.266667-597.333333v494.933333c0 47.223467 21.0432 68.266667 68.266667 68.266667h517.973333c42.871467-1.860267 62.293333-22.920533 62.293334-68.266667V170.666667c0-47.223467-21.0432-68.266667-68.266667-68.266667H443.733333v238.933333a17.066667 17.066667 0 0 1-17.066666 17.066667H187.733333z m24.132267-34.133333H409.6V126.532267L211.8656 324.266667z" p-id="3655" /><path d="M512 802.133333a34.133333 34.133333 0 0 1-34.133333-34.133333v-46.933333a34.133333 34.133333 0 0 1 68.266666 0V768a34.133333 34.133333 0 0 1-34.133333 34.133333z m0-170.666666a34.133333 34.133333 0 0 1-34.133333-34.133334V341.333333a34.133333 34.133333 0 0 1 68.266666 0v256a34.133333 34.133333 0 0 1-34.133333 34.133334z" p-id="3656" /></symbol>'});l.a.add(i);t.default=i},function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(4),l=n.n(r),i=new o.a({id:"github",use:"github-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="github"><defs><style type="text/css"></style></defs><path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" p-id="1748" /></symbol>'});l.a.add(i);t.default=i},function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(4),l=n.n(r),i=new o.a({id:"qq",use:"qq-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="qq"><defs><style type="text/css"></style></defs><path d="M980.79827 694.105946c-21.144216-122.796973-109.844757-203.250162-109.844757-203.250162 12.647784-111.477622-33.792-131.26573-33.792-131.26573C827.392 14.668108 530.985514 20.67373 524.730811 20.839784 518.476108 20.67373 222.01427 14.668108 212.300108 359.590054c0 0-46.467459 19.788108-33.819676 131.26573 0 0-88.700541 80.453189-109.817081 203.250162 0 0-11.291676 207.484541 101.403676 25.40627 0 0 25.350919 69.161514 71.790703 131.26573 0 0-83.082378 28.256865-75.997405 101.625081 0 0-2.87827 81.836973 177.401081 76.218811 0 0 126.699243-9.852541 164.753297-63.515676l16.605405 0 0.276757 0 16.633081 0c38.026378 53.635459 164.725622 63.515676 164.725622 63.515676 180.224 5.618162 177.401081-76.218811 177.401081-76.218811 7.029622-73.368216-75.997405-101.625081-75.997405-101.625081 46.439784-62.104216 71.790703-131.26573 71.790703-131.26573C992.034595 901.590486 980.79827 694.105946 980.79827 694.105946z" p-id="3016" /></symbol>'});l.a.add(i);t.default=i},function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(4),l=n.n(r),i=new o.a({id:"try",use:"try-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="try"><defs><style type="text/css"></style></defs><path d="M155.2 796.8V304H60.8v-76.8h270.4v76.8h-94.4v492.8H155.2z m293.6-492.8v177.6h46.4c14.4 0 25.8672-2 34.4-6 8.5328-4 15.2-9.7328 20-17.2 4.2672-7.4672 7.2-16.6672 8.8-27.6s2.4-23.6 2.4-38-0.8-27.0672-2.4-38c-1.6-10.9328-4.8-20.4-9.6-28.4-10.1328-14.9328-29.3328-22.4-57.6-22.4h-42.4z m-81.6 492.8V227.2h131.2c96 0 144 55.7328 144 167.2 0 33.6-5.2 62.1328-15.6 85.6-10.4 23.4672-28.6672 42.4-54.8 56.8l88 260h-86.4L497.6 553.6h-48.8v243.2h-81.6z m402.4 0V556L657.6 227.2h86.4l65.6 226.4h1.6L876.8 227.2h86.4l-112 328.8V796.8h-81.6z" p-id="3926" /></symbol>'});l.a.add(i);t.default=i},function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(4),l=n.n(r),i=new o.a({id:"wechat",use:"wechat-usage",viewBox:"0 0 1184 1024",content:'<symbol class="icon" viewBox="0 0 1184 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="wechat"><defs><style type="text/css"></style></defs><path d="M331.424 263.424q0-23.424-14.272-37.728t-37.728-14.272q-24.576 0-43.424 14.56t-18.848 37.44q0 22.272 18.848 36.864t43.424 14.56q23.424 0 37.728-14.016t14.272-37.44zM756 553.152q0-16-14.56-28.576t-37.44-12.576q-15.424 0-28.288 12.864t-12.864 28.288q0 16 12.864 28.864t28.288 12.864q22.848 0 37.44-12.576t14.56-29.152zM621.152 263.424q0-23.424-14.016-37.728t-37.44-14.272q-24.576 0-43.424 14.56t-18.848 37.44q0 22.272 18.848 36.864t43.424 14.56q23.424 0 37.44-14.016t14.016-37.44zM984 553.152q0-16-14.848-28.576t-37.152-12.576q-15.424 0-28.288 12.864t-12.864 28.288q0 16 12.864 28.864t28.288 12.864q22.272 0 37.152-12.576t14.848-29.152zM832 326.272q-17.728-2.272-40-2.272-96.576 0-177.728 44t-127.712 119.136-46.56 164.288q0 44.576 13.152 86.848-20 1.728-38.848 1.728-14.848 0-28.576-0.864t-31.424-3.712-25.44-4-31.136-6.016-28.576-6.016l-144.576 72.576 41.152-124.576q-165.728-116-165.728-280 0-96.576 55.712-177.728t150.848-127.712 207.712-46.56q100.576 0 190.016 37.728t149.728 104.288 78.016 148.864zM1170.272 646.848q0 66.848-39.136 127.712t-106.016 110.56l31.424 103.424-113.728-62.272q-85.728 21.152-124.576 21.152-96.576 0-177.728-40.288t-127.712-109.44-46.56-150.848 46.56-150.848 127.712-109.44 177.728-40.288q92 0 173.152 40.288t130.016 109.728 48.864 150.56z" p-id="2526" /></symbol>'});l.a.add(i);t.default=i},,,,,,,,,,,function(e,t,n){},function(e,t,n){var a={"./alipay.svg":35,"./close.svg":36,"./error.svg":37,"./github.svg":38,"./qq.svg":39,"./try.svg":40,"./wechat.svg":41};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=53},function(e,t,n){var a={"./button/button":[17,9,16],"./button/button.example":[42,9,1],"./button/button.example.1":[21,9,12],"./button/button.example.1.tsx":[21,9,12],"./button/button.example.2":[22,9,13],"./button/button.example.2.tsx":[22,9,13],"./button/button.example.3":[23,9,14],"./button/button.example.3.tsx":[23,9,14],"./button/button.example.scss":[62,7,31],"./button/button.example.tsx":[42,9,1],"./button/button.scss":[57,7,32],"./button/button.tsx":[17,9,16],"./card/card":[18,9,17],"./card/card.example":[43,9,2],"./card/card.example.1":[24,9,5],"./card/card.example.1.tsx":[24,9,5],"./card/card.example.tsx":[43,9,2],"./card/card.scss":[58,7,33],"./card/card.tsx":[18,9,17],"./dialog/dialog":[19,9,11],"./dialog/dialog.example":[44,9,0],"./dialog/dialog.example.1":[25,9,6],"./dialog/dialog.example.1.tsx":[25,9,6],"./dialog/dialog.example.2":[26,9,7],"./dialog/dialog.example.2.tsx":[26,9,7],"./dialog/dialog.example.3":[27,9,8],"./dialog/dialog.example.3.tsx":[27,9,8],"./dialog/dialog.example.4":[28,9,9],"./dialog/dialog.example.4.tsx":[28,9,9],"./dialog/dialog.example.tsx":[44,9,0],"./dialog/dialog.scss":[59,7,34],"./dialog/dialog.tsx":[19,9,11],"./form/form":[29,9,25],"./form/form.example":[45,9,18],"./form/form.example.tsx":[45,9,18],"./form/form.tsx":[29,9,25],"./form/validator":[30,9,26],"./form/validator.tsx":[30,9,26],"./icon/__tests__/__snapshots__/icon.unit.tsx.snap":[63,7,37],"./icon/__tests__/icon.unit":[46,9,24,19],"./icon/__tests__/icon.unit.tsx":[46,9,24,19],"./icon/icon":[8,9],"./icon/icon.example":[48,9,4],"./icon/icon.example.1":[31,9,22],"./icon/icon.example.1.tsx":[31,9,22],"./icon/icon.example.2":[47,9,27],"./icon/icon.example.2.tsx":[47,9,27],"./icon/icon.example.tsx":[48,9,4],"./icon/icon.scss":[16,7],"./icon/icon.tsx":[8,9],"./icon/importAllSvg":[12,7],"./icon/importAllSvg.js":[12,7],"./input/input":[20,9,20],"./input/input.example":[49,9,3],"./input/input.example.1":[32,9,15],"./input/input.example.1.tsx":[32,9,15],"./input/input.example.tsx":[49,9,3],"./input/input.scss":[60,7,35],"./input/input.tsx":[20,9,20],"./layout/content":[10,9],"./layout/content.tsx":[10,9],"./layout/footer":[33,9,28],"./layout/footer.tsx":[33,9,28],"./layout/header":[11,9],"./layout/header.tsx":[11,9],"./layout/layout":[7,9],"./layout/layout.example":[50,9,23],"./layout/layout.example.tsx":[50,9,23],"./layout/layout.scss":[14,7],"./layout/layout.tsx":[7,9],"./layout/sider":[6,9],"./layout/sider.tsx":[6,9],"./pagination/pagination":[34,9,21],"./pagination/pagination.example":[51,9,10],"./pagination/pagination.example.tsx":[51,9,10],"./pagination/pagination.scss":[61,7,36],"./pagination/pagination.tsx":[34,9,21]};function o(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],o=t[0];return Promise.all(t.slice(2).map(n.e)).then(function(){return n.t(o,t[1])})}o.keys=function(){return Object.keys(a)},o.id=54,e.exports=o},function(e,t,n){e.exports=n.p+"static/images/logo_315015fc.png"},function(e,t,n){"use strict";n.r(t);var a=n(13),o=n.n(a),r=n(0),l=n.n(r),i=n(1),s=(n(52),n(10)),c=n(11),u=n(7),m=n(5),p=n(6),d=n(8),f=function(e){return Object(r.lazy)(function(){return n(54)("./"+e)})},x=[{path:"/icon",component:f("icon/icon.example"),name:"Icon 图标"},{path:"/button",component:f("button/button.example"),name:"Button 按钮"},{path:"/input",component:f("input/input.example"),name:"Input 表单"},{path:"/layout",component:f("layout/layout.example"),name:"Layout 布局"},{path:"/card",component:f("card/card.example"),name:"Card 卡片"},{path:"/dialog",component:f("dialog/dialog.example"),name:"Dialog 对话框"},{path:"/form",component:f("form/form.example"),name:"Form 表单"},{path:"/pagination",component:f("pagination/pagination.example"),name:"Pagination 分页"}],g=n(55),h=function(e){return l.a.createElement(u.default,{className:"example"},l.a.createElement(c.default,{className:"example-header"},l.a.createElement("div",{className:"example-header-left"},l.a.createElement("div",{className:"example-logo"},l.a.createElement("img",{src:g,alt:""}))),l.a.createElement("div",{className:"example-header-right"},l.a.createElement("a",{href:"https://github.com/wangkaiwd/wui",target:"_blank"},l.a.createElement(d.default,{className:"example-github",name:"github"})))),l.a.createElement(u.default,{className:"example-content-wrapper"},l.a.createElement(p.default,{className:"example-sider"},l.a.createElement("h3",{className:"example-sider-component"},"组件"),l.a.createElement("ul",null,x.map(function(e){return l.a.createElement("li",null,l.a.createElement(m.NavLink,{to:e.path,activeClassName:"example-sider-active"},e.name))}))),l.a.createElement(u.default,null,l.a.createElement(s.default,{className:"example-content"},l.a.createElement("div",{className:"example-content-main"},e.children)))))},v=function(){return l.a.createElement(m.HashRouter,null,l.a.createElement(h,null,l.a.createElement(r.Suspense,{fallback:l.a.createElement("div",null,"loading...")},l.a.createElement(m.Switch,null,x.map(function(e){e.name;var t=i.b(e,["name"]);return l.a.createElement(m.Route,i.a({},t))}),l.a.createElement(m.Redirect,{from:"/",to:"/icon"})))))};o.a.render(l.a.createElement(v,null),document.getElementById("root"))}]);