(function(){"use strict";var t={7785:function(t,i,n){var e=n(6369),s=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"app"}},[i("LoginView")],1)},a=[],r=function(){var t=this,i=t._self._c;return i("div",{staticClass:"login"},[i("section",{staticClass:"main"},[i("h1",{staticClass:"main__title"},[t._v(t._s(t.title))]),i("div",{staticClass:"main__login-block-wrapper"},[i("h2",{staticClass:"main__subtitle"},[t._v(t._s(t.$tc("login.title")))]),i("ValidationObserver",[i("div",{staticClass:"main__login-block"},[i("label",{staticClass:"main__label",attrs:{for:"login"}},[t._v(t._s(t.inputLabel))]),i("ValidationProvider",{staticClass:"validation-provider",attrs:{rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:n}){return[i("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"main__login-input",attrs:{type:"text",name:"login"},domProps:{value:t.login},on:{input:function(i){i.target.composing||(t.login=i.target.value)}}}),i("span",{staticClass:"validation-error"},[t._v(t._s(n[0]))])]}}])}),t.passwordShow?[i("label",{staticClass:"main__label",attrs:{for:"password"}},[t._v("Пароль")]),i("ValidationProvider",{staticClass:"validation-provider",attrs:{rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:n}){return[i("input",{staticClass:"main__login-input",attrs:{type:"text",name:"password"}}),i("span",{staticClass:"validation-error"},[t._v(t._s(n[0]))])]}}],null,!1,3401115735)})]:i("div",{staticClass:"password-placeholder"}),i("button",{staticClass:"main__button",on:{click:t.onLogin}},[t._v(" "+t._s(t.$tc("login.buttonTitle"))+" ")])],2)])],1),i("div",{staticClass:"main__footer"},[i("div",{staticClass:"main__footer-item"},[t._m(0),i("switch-icon",{staticClass:"footer__icon footer__switch"})],1),i("div",{staticClass:"main__footer-item"},[t.online?i("wifi-connect",{staticClass:"footer__icon"}):i("wifi-no-connect",{staticClass:"footer__icon"})],1),i("div",{staticClass:"main__footer-item"},[t._v(" "+t._s(t.convertedLang)+" ")])])]),t._m(1)])},o=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"footer__dropdown"},[i("span",{staticClass:"footer__dropdown-item"},[t._v("Завершение работы")]),i("span",{staticClass:"footer__dropdown-item"},[t._v("Перезагрузка")])])},function(){var t=this,i=t._self._c;return i("section",{staticClass:"advertisement"},[i("img",{staticClass:"advertisement__image",attrs:{src:"login-screen.png",alt:"login image"}})])}],l=function(){var t=this,i=t._self._c;return i("div",[i("svg",{staticStyle:{"enable-background":"new 0 0 494.45 494.45"},attrs:{x:"0px",y:"0px",viewBox:"0 0 494.45 494.45",stroke:"white",fill:"white"}},[i("g",[i("g",[i("g",[i("path",{attrs:{stroke:"white",d:"M395.225,277.325c-6.8,0-13.5-2.6-18.7-7.8c-71.4-71.3-187.4-71.3-258.8,0c-10.3,10.3-27.1,10.3-37.4,0\n                      s-10.3-27.1,0-37.4c92-92,241.6-92,333.6,0c10.3,10.3,10.3,27.1,0,37.4C408.725,274.725,401.925,277.325,395.225,277.325z"}})]),i("g",[i("path",{attrs:{d:"M323.625,348.825c-6.8,0-13.5-2.6-18.7-7.8c-15.4-15.4-36-23.9-57.8-23.9s-42.4,8.5-57.8,23.9\n                      c-10.3,10.3-27.1,10.3-37.4,0c-10.3-10.3-10.3-27.1,0-37.4c25.4-25.4,59.2-39.4,95.2-39.4s69.8,14,95.2,39.5\n                      c10.3,10.3,10.3,27.1,0,37.4C337.225,346.225,330.425,348.825,323.625,348.825z"}})]),i("g",[i("circle",{attrs:{cx:"247.125",cy:"398.925",r:"35.3"}})]),i("g",[i("path",{attrs:{d:"M467.925,204.625c-6.8,0-13.5-2.6-18.7-7.8c-111.5-111.4-292.7-111.4-404.1,0c-10.3,10.3-27.1,10.3-37.4,0\n                      s-10.3-27.1,0-37.4c64-64,149-99.2,239.5-99.2s175.5,35.2,239.5,99.2c10.3,10.3,10.3,27.1,0,37.4\n                      C481.425,202.025,474.625,204.625,467.925,204.625z"}})])])])])])},c=[],u={},d=u,p=n(1001),f=(0,p.Z)(d,l,c,!1,null,null,null),_=f.exports,v=function(){var t=this,i=t._self._c;return i("svg",{attrs:{width:"36px",height:"36px",viewBox:"0 0 36 36",fill:"white"}},[i("title",[t._v("no-wifi-line")]),i("path",{staticClass:"clr-i-outline clr-i-outline-path-1",attrs:{d:"M18,24.42a4,4,0,1,0,4,4A4,4,0,0,0,18,24.42Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,30.42Z"}}),i("path",{staticClass:"clr-i-outline clr-i-outline-path-2",attrs:{d:"M26.21,21.85a1,1,0,0,0-.23-1.4,13.56,13.56,0,0,0-5-2.23l3.87,3.87A1,1,0,0,0,26.21,21.85Z"}}),i("path",{staticClass:"clr-i-outline clr-i-outline-path-3",attrs:{d:"M18.05,10.72a20.88,20.88,0,0,0-4.16.43l1.74,1.74a19,19,0,0,1,2.42-.17A18.76,18.76,0,0,1,28.64,16a1,1,0,0,0,1.12-1.65A20.75,20.75,0,0,0,18.05,10.72Z"}}),i("path",{staticClass:"clr-i-outline clr-i-outline-path-4",attrs:{d:"M33.55,8.2A28.11,28.11,0,0,0,8.11,5.36L9.69,6.93A26,26,0,0,1,32.45,9.87a1,1,0,0,0,1.1-1.67Z"}}),i("path",{staticClass:"clr-i-outline clr-i-outline-path-5",attrs:{d:"M1.84,4.75,4.27,7.18c-.62.34-1.23.7-1.83,1.1A1,1,0,1,0,3.56,9.94C4.26,9.47,5,9,5.74,8.65l3.87,3.87A20.59,20.59,0,0,0,6.23,14.4,1,1,0,0,0,7.36,16a18.82,18.82,0,0,1,3.77-2l4.16,4.16A13.51,13.51,0,0,0,10,20.55a1,1,0,0,0,1.18,1.61A11.52,11.52,0,0,1,17,20l10.8,10.8,1.41-1.41-26-26Z"}}),i("rect",{attrs:{x:"0",y:"0",width:"36",height:"36","fill-opacity":"0"}})])},g=[],h={},m=h,w=(0,p.Z)(m,v,g,!1,null,null,null),C=w.exports,b=function(){var t=this,i=t._self._c;return i("svg",{staticClass:"icon",attrs:{width:"1024px",height:"1024px",viewBox:"0 0 1024 1024",fill:"white"}},[i("path",{attrs:{fill:"white",d:"M352 159.872V230.4a352 352 0 10320 0v-70.528A416.128 416.128 0 01512 960a416 416 0 01-160-800.128z"}}),i("path",{attrs:{fill:"white",d:"M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"}})])},x=[],y={},k=y,Z=(0,p.Z)(k,b,x,!1,null,null,null),A=Z.exports,O=n(5708),L=n(8815);(0,O.l7)("required",L.C1),(0,O.NC)({en:{code:"en",messages:{required(){return"The field is required"}}},ru:{code:"ru",messages:{required(){return"Поле обязательно для заполнения"}}},kz:{code:"kz",messages:{required(){return"Толтыруға қажет өріс"}}}}),(0,O.NC)("ru");var M={name:"login-view",components:{ValidationObserver:O._j,ValidationProvider:O.d_,wifiNoConnect:C,wifiConnect:_,switchIcon:A},data(){return{title:58,login:"",password:"",online:!0,language:"rus"}},methods:{onLogin(){}},computed:{inputLabel(){return this.login?this.passwordShow?"Логин":"Чек":"Чек / Логин"},passwordShow(){return!!this.login&&!1===/\d/.test(this.login[0])},convertedLang(){return this.language.toUpperCase()}}},q=M,P=(0,p.Z)(q,r,o,!1,null,null,null),S=P.exports,V={name:"App",components:{LoginView:S}},z=V,T=(0,p.Z)(z,s,a,!1,null,null,null),j=T.exports,N=n(6018),B={ru:{login:{title:"Вход в систему",buttonTitle:"Войти"}},kz:{login:{title:"Системага кіру",buttonTitle:"Кіру"}},en:{login:{title:"System Login",buttonTitle:"Login"}}};e.ZP.use(N.Z);let I="ru";null!==localStorage.getItem("i18n")&&(I=localStorage.getItem("i18n"));var $=new N.Z({locale:I,messages:B});e.ZP.config.productionTip=!1,new e.ZP({i18n:$,render:t=>t(j)}).$mount("#app")}},i={};function n(e){var s=i[e];if(void 0!==s)return s.exports;var a=i[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(i,e,s,a){if(!e){var r=1/0;for(u=0;u<t.length;u++){e=t[u][0],s=t[u][1],a=t[u][2];for(var o=!0,l=0;l<e.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](e[l])}))?e.splice(l--,1):(o=!1,a<r&&(r=a));if(o){t.splice(u--,1);var c=s();void 0!==c&&(i=c)}}return i}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[e,s,a]}}(),function(){n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,{a:i}),i}}(),function(){n.d=function(t,i){for(var e in i)n.o(i,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={143:0};n.O.j=function(i){return 0===t[i]};var i=function(i,e){var s,a,r=e[0],o=e[1],l=e[2],c=0;if(r.some((function(i){return 0!==t[i]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(l)var u=l(n)}for(i&&i(e);c<r.length;c++)a=r[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},e=self["webpackChunklogin_client_view"]=self["webpackChunklogin_client_view"]||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(7785)}));e=n.O(e)})();
//# sourceMappingURL=app.8d7cf4dd.js.map