(function(e){function t(t){for(var s,n,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);h&&h(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(s=!1)}s&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={1:0},r={1:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"4a5761b4",3:"179ffe89",4:"3c5326d2",5:"d2026111",6:"4e3f95e2",7:"27acfddd"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={2:1,3:1,4:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var s="css/"+({}[e]||e)+"."+{2:"c974b365",3:"b9232a42",4:"52acce0a",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0"}[e]+".css",r=c.p+s,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===r))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===s||d===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var s=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[e],h.parentNode.removeChild(h),a(o)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){n[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(h);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,a[1](u)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var h=d;o.push([0,0]),a()})({0:function(e,t,a){e.exports=a("2f39")},"034f":function(e,t,a){"use strict";var s=a("ed82"),n=a.n(s);n.a},"2f39":function(e,t,a){"use strict";a.r(t);a("5319");var s=a("c973"),n=a.n(s),r=(a("7d6e"),a("e54f"),a("21cb"),a("3e27"),a("985d"),a("31cd"),a("2b0e")),o=a("1f91"),i=a("42d2"),c=a("b05d"),l=a("2a19"),d=a("436b"),u=a("18d6"),h=a("a639");r["a"].use(c["a"],{config:{},lang:o["a"],iconSet:i["a"],plugins:{Notify:l["a"],Dialog:d["a"],LocalStorage:u["a"],SessionStorage:h["a"]}});var p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},f=[],m=a("ded3"),g=a.n(m),k=a("2f62"),b={methods:g()(g()({},Object(k["b"])("settings",["getSettings"])),Object(k["b"])("auth",["handleAuthStateChange"])),mounted(){this.getSettings(),this.handleAuthStateChange()}},v=b,w=(a("034f"),a("2877")),y=Object(w["a"])(v,p,f,!1,null,null,null),S=y.exports,T=(a("4e82"),a("1732")),O=a("59ca"),j=(a("ea7b"),a("66ce"),{apiKey:"AIzaSyC0jR3KYRvIIm4TaJnD-P5Mz-QHIjiQk88",authDomain:"quasar-todo-awesome.firebaseapp.com",databaseURL:"https://quasar-todo-awesome.firebaseio.com",projectId:"quasar-todo-awesome",storageBucket:"quasar-todo-awesome.appspot.com",messagingSenderId:"119205393755",appId:"1:119205393755:web:1d3c2f64231960f3aa967e",measurementId:"G-TMPESSTQ4J"});let I=O["initializeApp"](j),P=I.auth(),L=I.database();var E=a("f508");function C(e){E["a"].hide(),d["a"].create({title:"Error",message:e})}const A={namespaced:!0,tasks:{},search:"",sort:"name",tasksDownloaded:!1},D={updateTask(e,t){Object.assign(e.tasks[t.id],t.updates)},deleteTask(e,t){r["a"].delete(e.tasks,t)},addTask(e,t){r["a"].set(e.tasks,t.id,t.task)},clearTasks(e){e.tasks={}},setSearch(e,t){e.search=t},setSort(e,t){e.sort=t},setTasksDownloaded(e,t){e.tasksDownloaded=t}},_={updateTask({dispatch:e},t){e("fbUpdateTask",t)},deleteTask({dispatch:e},t){e("fbDeleteTask",t)},addTask({dispatch:e},t){let a=Object(T["a"])(),s={id:a,task:t};e("fbAddTask",s)},setSearch({commit:e},t){e("setSearch",t)},setSort({commit:e},t){e("setSort",t)},fbReadData({commit:e}){let t=P.currentUser.uid,a=L.ref("tasks/"+t);a.once("value",t=>{e("setTasksDownloaded",!0)},e=>{C(e.message),this.$router.replace("/auth")}),a.on("child_added",t=>{let a=t.val(),s={id:t.key,task:a};e("addTask",s)}),a.on("child_changed",t=>{let a=t.val(),s={id:t.key,updates:a};e("updateTask",s)}),a.on("child_removed",t=>{let a=t.key;e("deleteTask",a)})},fbAddTask({},e){let t=P.currentUser.uid,a=L.ref("tasks/"+t+"/"+e.id);a.set(e.task,e=>{e?C(e.message):l["a"].create("Task added! 👍")})},fbUpdateTask({},e){let t=P.currentUser.uid,a=L.ref("tasks/"+t+"/"+e.id);a.update(e.updates,t=>{if(t)C(t.message);else{let t=Object.keys(e.updates);t.includes("completed")&&1==t.length||l["a"].create("Task updated! 👍")}})},fbDeleteTask({},e){let t=P.currentUser.uid,a=L.ref("tasks/"+t+"/"+e);a.remove(e=>{e?C(e.message):l["a"].create("Task deleted! 👍")})}},U={tasksSorted:e=>{let t={},a=Object.keys(e.tasks);return a.sort((t,a)=>{let s=e.tasks[t][e.sort].toLowerCase(),n=e.tasks[a][e.sort].toLowerCase();return s>n?1:s<n?-1:0}),a.forEach(a=>{t[a]=e.tasks[a]}),t},tasksFiltered:(e,t)=>{let a=t.tasksSorted,s={};return e.search?(Object.keys(a).forEach((function(t){let n=a[t],r=n.name.toLowerCase(),o=e.search.toLowerCase();r.includes(o)&&(s[t]=n)})),s):a},tasksTodo:(e,t)=>{let a=t.tasksFiltered,s={};return Object.keys(a).forEach((function(e){let t=a[e];t.completed||(s[e]=t)})),s},tasksCompleted:(e,t)=>{let a=t.tasksFiltered,s={};return Object.keys(a).forEach((function(e){let t=a[e];t.completed&&(s[e]=t)})),s}};var x={namespaced:!0,state:A,mutations:D,actions:_,getters:U};const F={settings:{show12HourTimeFormat:!1,showTasksInOneList:!1}},q={setShow12HourTimeFormat(e,t){e.settings.show12HourTimeFormat=t},setShowTasksInOneList(e,t){e.settings.showTasksInOneList=t},setSettings(e,t){Object.assign(e.settings,t)}},H={setShow12HourTimeFormat({commit:e,dispatch:t},a){e("setShow12HourTimeFormat",a),t("saveSettings")},setShowTasksInOneList({commit:e,dispatch:t},a){e("setShowTasksInOneList",a),t("saveSettings")},saveSettings({state:e}){u["a"].set("settings",e.settings)},getSettings({commit:e}){let t=u["a"].getItem("settings");t&&e("setSettings",t)}},M={settings:e=>e.settings};var N={namespaced:!0,state:F,mutations:q,actions:H,getters:M};const B={loggedIn:!1},R={setLoggedIn(e,t){e.loggedIn=t}},$={registerUser({},e){E["a"].show(),P.createUserWithEmailAndPassword(e.email,e.password).then(e=>{console.log("response: ",e)}).catch(e=>{C(e.message)})},loginUser({},e){E["a"].show(),P.signInWithEmailAndPassword(e.email,e.password).then(e=>{console.log("response: ",e)}).catch(e=>{C(e.message)})},logoutUser(){P.signOut()},handleAuthStateChange({commit:e,dispatch:t}){P.onAuthStateChanged(a=>{E["a"].hide(),a?(e("setLoggedIn",!0),u["a"].set("loggedIn",!0),this.$router.push("/").catch(e=>{}),t("tasks/fbReadData",null,{root:!0})):(e("setLoggedIn",!1),e("tasks/clearTasks",null,{root:!0}),e("tasks/setTasksDownloaded",!1,{root:!0}),e("setLoggedIn",!1),u["a"].set("loggedIn",!1),this.$router.replace("/auth").catch(e=>{}))})}},J={};var Q={namespaced:!0,state:B,mutations:R,actions:$,getters:J};r["a"].use(k["a"]);var z=function(){const e=new k["a"].Store({modules:{tasks:x,settings:N,auth:Q},strict:!1});return e},K=a("8c4f");a("e6cf");const V=[{path:"/",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"a9c3")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"10d0"))},{path:"/settings",component:()=>Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"311b"))},{path:"/settings/help",component:()=>Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"1a2f"))},{path:"/auth",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"f724"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"e51e"))}];var W=V;r["a"].use(K["a"]);var G=function(){const e=new K["a"]({scrollBehavior:()=>({x:0,y:0}),routes:W,mode:"hash",base:""});return e},Y=function(){return X.apply(this,arguments)};function X(){return X=n()((function*(){const e="function"===typeof z?yield z({Vue:r["a"]}):z,t="function"===typeof G?yield G({Vue:r["a"],store:e}):G;e.$router=t;const a={router:t,store:e,render:e=>e(S),el:"#q-app"};return{app:a,store:e,router:t}})),X.apply(this,arguments)}var Z=({router:e})=>{e.beforeEach((e,t,a)=>{let s=u["a"].getItem("loggedIn");s||"/auth"===e.path?a():a("/auth")})};const ee="";function te(){return ae.apply(this,arguments)}function ae(){return ae=n()((function*(){const{app:e,store:t,router:a}=yield Y();let s=!1;const n=e=>{s=!0;const t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),i=[void 0,Z];for(let l=0;!1===s&&l<i.length;l++)if("function"===typeof i[l])try{yield i[l]({app:e,router:a,store:t,Vue:r["a"],ssrContext:null,redirect:n,urlPath:o,publicPath:ee})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==s&&new r["a"](e)})),ae.apply(this,arguments)}te()},"31cd":function(e,t,a){},ed82:function(e,t,a){}});