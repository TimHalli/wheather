(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c(8),s=c.n(r),o=c(4),i=c(7),l=c(2);c(14);function d(){var e="http://dataservice.accuweather.com/",t=Object(a.useState)("XK2mHP5KGYO2SwOhzmtTB61e8yImb7DD"),c=Object(l.a)(t,2),r=c[0],s=c[1],d=Object(a.useState)(r),j=Object(l.a)(d,2),u=j[0],b=j[1],h=Object(a.useState)({name:"Tel Aviv",temp:0,fiveDays:[{day:"",temp:0}]}),m=Object(l.a)(h,2),f=m[0],O=m[1],v=Object(a.useState)(""),p=Object(l.a)(v,2),x=p[0],y=p[1],g=Object(a.useState)(""),w=Object(l.a)(g,2),N=w[0],k=w[1],C=Object(a.useState)(215854),S=Object(l.a)(C,2),D=S[0],A=S[1],T=Object(a.useState)([]),F=Object(l.a)(T,2),L=F[0],W=F[1],E=Object(a.useState)(!0),I=Object(l.a)(E,2),z=I[0],P=I[1],Y=Object(a.useState)(!1),B=Object(l.a)(Y,2),K=B[0],M=B[1],H=Object(a.useState)("table-primary"),J=Object(l.a)(H,2),V=J[0],G=J[1],Q=Object(a.useState)(!0),R=Object(l.a)(Q,2),U=R[0],X=R[1],$=function(e){L.some((function(t){return function(t){return t===e}(t)}))?W(L):(W([].concat(Object(i.a)(L),[e])),G("table-active"))};Object(a.useEffect)((function(){var t=fetch("".concat(e,"locations/v1/topcities/150?apikey=").concat(u)).then((function(e){return e.json()})).then((function(e){!function(e,t){var c,n,a=e.filter((function(c){return 0===t.length?e:c.LocalizedName.toLowerCase().indexOf(t.toLowerCase())>-1}));0===a.length?(c="Tel Aviv",n=215854):(c=a[0].LocalizedName,n=a[0].Key),k(c),A(n)}(e,x),e.map((function(e){e.LocalizedName===N&&O(Object(o.a)(Object(o.a)({},f),{},{name:e.LocalizedName}))}))})).catch((function(e){throw new Error("Could not fetch: ".concat(e,". The API you used has expired. You need to use the new API. You can do this at https://developer.accuweather.com/"))}));return function(){return t}}),[x,x]),Object(a.useEffect)((function(){var t,c=fetch((t=D,"".concat(e,"forecasts/v1/daily/5day/").concat(t,"?apikey=").concat(u))).then((function(e){return e.json()})).then((function(e){!function(e){for(var t,c,n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=[],r=0;r<5;r++)t=n[new Date(e.DailyForecasts[r].Date).getDay()],c=5*(e.DailyForecasts[r].Temperature.Maximum.Value-32)/9,a.push({day:t,temp:c.toFixed()});c=5*(e.DailyForecasts[0].Temperature.Maximum.Value-32)/9,O(Object(o.a)(Object(o.a)({},f),{},{name:N,temp:c.toFixed(),fiveDays:a}))}(e)})).catch((function(e){throw new Error("Could not fetch: ".concat(e))}));return function(){return c}}),[x,D]);var q=Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("button",{onClick:function(e){return $(f)},type:"button",className:"btn btn-success",children:"Add To Favorites"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),U?"Dhaka"===N?null:Object(n.jsx)("table",{className:"table table-hover",children:Object(n.jsx)("tbody",{children:Object(n.jsx)("tr",{className:V,children:Object(n.jsx)("th",{scope:"row",children:Object(n.jsx)("h1",{children:f.name})})})})}):null,Object(n.jsx)("input",{onChange:function(e){y((function(){return e.target.value})),X(!0);L.some((function(e){return function(e){return e.name===f.name}(e)}))?G("table-active"):G("table-primary")},className:"form-control form-control-lg",type:"text",placeholder:"Search for a city...",id:"inputLarge"})]}),Object(n.jsx)("div",{className:"card border-primary mb-3",style:{maxWidth:"20rem"},children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-title",children:"Dhaka"===N?"Tel Aviv":N}),Object(n.jsxs)("p",{className:"card-text",children:[f.temp,"C"]})]})}),Object(n.jsx)("h1",{children:"Scattered Clouds"}),Object(n.jsx)("div",{style:{display:"flex"},children:f.fiveDays.map((function(e,t){return Object(n.jsx)("div",{className:"card border-primary mb-3",style:{maxWidth:"20rem"},children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-title",children:e.day}),Object(n.jsxs)("p",{className:"card-text",children:[e.temp,"C"]})]})},t)}))})]})}),Z=Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Favorites"}),Object(n.jsx)("div",{style:{display:"flex"},children:L?L.map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{style:{display:"flex"},children:Object(n.jsxs)("div",{className:"card border-success  mb-3",style:{maxWidth:"20rem"},children:[Object(n.jsx)("div",{className:"card-header",children:Object(n.jsx)("h1",{onClick:function(){return function(e){var t=Object(i.a)(L);t.splice(e,1),W(t)}(t)},children:"\xd7"})}),Object(n.jsxs)("div",{onClick:function(){return function(e){return P(!0),M(!1),y(e.name),X(!1),O(e),e}(e)},className:"card-body",children:[Object(n.jsx)("h3",{className:"card-title",children:e.name}),Object(n.jsxs)("h4",{className:"card-text",children:[e.temp,"C"]})]})]})})},t+e.name)})):null})]});return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{style:{justifyContent:"space-between"},className:"collapse navbar-collapse",id:"navbarColor01",children:[Object(n.jsxs)("ul",{className:"navbar-nav me-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("h1",{id:"home",onClick:function(){P(!0),M(!1)},className:"col-form-label col-form-label-lg mt-2 nav-link active",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("h1",{id:"favorites",onClick:function(){M(!0),P(!1)},className:"col-form-label col-form-label-lg mt-2 nav-link ",children:"Favorites"})})]}),Object(n.jsxs)("tr",{className:"table-warning mt-3",children:[Object(n.jsx)("th",{scope:"row",children:"You need registration here -> \xa0"}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"https://developer.accuweather.com/user/me/apps",children:"https://developer.accuweather.com/user/me/apps"})}),Object(n.jsx)("th",{scope:"row",children:" \xa0 -> And insert the API that you created here -> \xa0"})]}),"\xa0 \xa0",Object(n.jsxs)("form",{className:"d-flex",children:[Object(n.jsx)("input",{onChange:function(e){return s(e.target.value)},className:"form-control form-control-lg",type:"text",placeholder:"Your API..."}),Object(n.jsx)("button",{onClick:function(){b(r)},className:"btn btn-info my-2 my-sm-0",children:"Insert"})]})]})})}),z?q:null,K?Z:null]})}var j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(n.jsx)(d,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");j?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):u(e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.42225470.chunk.js.map