(function(){"use strict";var t={7055:function(t,e,n){var i=n(6369),r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},o=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")]),e("button",{on:{click:t.test}},[t._v("测试一下go")])])])},a=[],l={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()},test(){this.$router.go(-3)}}},u=l,c=n(1001),v=(0,c.Z)(u,s,a,!1,null,null,null),f=v.exports,p={name:"App",components:{Banner:f}},h=p,d=(0,c.Z)(h,r,o,!1,null,null,null),m=d.exports,_=n(2631),g=function(){var t=this;t._self._c;return t._m(0)},w=[function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("我是About的内容")])])}],b={name:"About",beforeRouteEnter(t,e,n){t.meta.isAuth?"atguigu"===localStorage.getItem("school")?n():alert("学校名不对，无权限查看！"):n()},beforeRouteLeave(t,e,n){console.log("app-beforeleave"),n()}},y=b,x=(0,c.Z)(y,g,w,!1,null,null,null),k=x.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("我是Home的内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"News"}},[e("router-view")],1)],1)])},Z=[],O={name:"Home"},A=O,q=(0,c.Z)(A,C,Z,!1,null,null,null),P=q.exports,j=function(){var t=this,e=t._self._c;return e("div",[e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习vue")]),t._m(0),t._m(1),t._m(2)])])},N=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],S={name:"News",data(){return{opacity:1}},activated(){console.log("New组件被激活了"),this.timer=setInterval((()=>{console.log("@"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("New组件失活了"),clearInterval(this.timer)}},$=S,B=(0,c.Z)($,j,N,!1,null,"76d47654",null),H=B.exports,I=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"xiangqing",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},L=[],M=(n(7658),{name:"Message",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}}}),R=M,T=(0,c.Z)(R,I,L,!1,null,"3b94211a",null),D=T.exports,E=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])},z=[],F={name:"Detail",props:["id","title"]},V=F,G=(0,c.Z)(V,E,z,!1,null,null,null),J=G.exports;const K=new _.ZP({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{name:"zhuye",path:"/home",component:P,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:H,meta:{isAuth:!0,title:"新闻"}},{name:"xiaoxi",path:"message",component:D,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail/:id/:title",component:J,meta:{isAuth:!0,title:"详情"},props({query:{id:t,title:e}}){return{id:t,title:e}}}]}]}]});var Q=K;i.ZP.config.productionTip=!1,i.ZP.use(_.ZP),new i.ZP({el:"#app",render:t=>t(m),router:Q})}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,s=i[0],a=i[1],l=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var c=l(n)}for(e&&e(i);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7055)}));i=n.O(i)})();
//# sourceMappingURL=app.542f86d2.js.map