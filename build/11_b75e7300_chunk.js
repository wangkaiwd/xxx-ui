(window.webpackJsonpWUI=window.webpackJsonpWUI||[]).push([[11,16,17],{23:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),u=n.n(r),o=n(2),s=Object(o.a)("form");t.default=function(e){var t=e.className,n=(e.formData,e.fields),r=e.errors,i=(e.onChange,e.onSubmit,e.buttons),m=a.b(e,["className","formData","fields","errors","onChange","onSubmit","buttons"]),l=function(t,n){var r,u=a.a({},e.formData,((r={})[t]=n.target.value,r));e.onChange(u)};return u.a.createElement("form",a.a({className:Object(o.b)(s(),t),onSubmit:function(t){t.preventDefault(),e.onSubmit()},onReset:function(){var t={};for(var n in e.formData)t[n]="";e.onChange(t)}},m),n.map(function(t){return u.a.createElement("div",{key:t.key},t.label,u.a.createElement("input",{value:e.formData[t.key],type:t.input.type,onChange:l.bind(null,t.key)}),r[t.key])}),u.a.createElement("div",{className:s("buttons")},i))}},24:function(e,t,n){"use strict";n.r(t);var a=function(e,t){e||(e=[]),e.push(t)};t.default=function(e,t){var n={};return t.map(function(t){var r=e[t.key];t.required&&function(e){return null==e||""===e}(r)&&a(n[t.key],"必填"),t.minLength&&e[t.key].length<t.minLength&&a(n[t.key],"太短"),t.maxLength&&e[t.key].length>t.maxLength&&a(n[t.key],"太长")}),n}},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(23),o=n(24);t.default=function(e){var t=Object(a.useState)({email:"test@qq.com",username:"wangkaiwd",password:"123456"}),n=t[0],s=t[1],i=Object(a.useState)({}),m=i[0],l=i[1];return r.a.createElement(u.default,{formData:n,fields:[{key:"email",label:"邮箱",input:{type:"text"}},{key:"username",label:"用户名",input:{type:"text"}},{key:"password",label:"密码",input:{type:"text"}}],errors:m,onChange:function(e){s(e)},onSubmit:function(){console.log("formData",n);var e=Object(o.default)(n,[{key:"email",required:!0,message:"邮箱必填"},{key:"username",required:!0,message:"用户名必填"},{key:"username",minLength:5,maxLength:10,message:"用户名需要小于10个字并且大于5个字"},{key:"password",required:!0,message:"密码必填"}]);l(e)},buttons:r.a.createElement(a.Fragment,null,r.a.createElement("button",{type:"submit"},"提交"),r.a.createElement("button",{type:"reset"},"重置"),r.a.createElement("button",null,"返回"))})}}}]);
//# sourceMappingURL=11_b75e7300_chunk.js.map