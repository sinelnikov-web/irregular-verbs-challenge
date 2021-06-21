(this["webpackJsonpirregular-verbs-challenge"]=this["webpackJsonpirregular-verbs-challenge"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),r=a.n(c),i=(a(111),a(9)),l=(a(112),a(22)),o=a(15),u=a(164),j=a(25),b=a(68),h=a.n(b),d=a(87),O=a(40),p=a(12),m=a(88),v=a.n(m),f=function(){return v.a.get("".concat("/irregular-verbs-challenge","/verbs.json")).then((function(e){return e.data}))},g="FETCHING_START",x="FETCHING_COMPLETE",_="GET_VERBS_SUCCESS",S="GET_VERBS_SUCCESS",N="UPDATE_VERBS",P={verbs:[],isFetching:!1,error:!1},y=function(e){return{type:N,payload:e}},C=function(){return{type:x}},k=a(2),E=function(){var e=Object(j.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:g}),e.next=4,f();case 4:a=e.sent,localStorage.setItem("verbs",JSON.stringify(a)),t({type:_,payload:a}),t(C()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),t({type:S}),t(C());case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(k.jsxs)("section",{className:"homepage",children:[Object(k.jsx)("span",{className:"homepage__welcome",children:"Welcome to"}),Object(k.jsx)("h1",{className:"homepage__title",children:"Irregular Verbs Challenge"}),Object(k.jsx)("p",{className:"homepage__subtitle",children:"Try yourself in this challenge for check your knowledge about irregular verbs"}),Object(k.jsx)("hr",{}),Object(k.jsx)("p",{className:"homepage__faq",children:"What to do? \u2192 enter three forms of verbs as many times in a row as you can."}),Object(k.jsxs)("div",{className:"homepage__controls",children:[Object(k.jsx)(u.a,{variant:"outlined",className:"homepage__button",component:l.b,to:"/competitive",children:"Competitive mode"}),Object(k.jsx)("span",{className:"homepage__buttons-divider",children:"or"}),Object(k.jsx)(u.a,{variant:"outlined",className:"homepage__button",component:l.b,to:"/learn",children:"Learning mode"})]})]})},I=a(36),T=a.p+"static/media/heart.b0e72901.png",w=a(167),L=a(168),B=a(169),F=a(170),V=a(171),R=a(172),M=a(173),U=a(174),W=a(175),D=a(179),J=a(176),Y=a(94),A=a.n(Y),G=a(93),z=a.n(G);function H(e){var t=e.verb,a=e.mistake,s=Object(n.useState)(!1),c=Object(i.a)(s,2),r=c[0],l=c[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(V.a,{children:Object(k.jsxs)(R.a,{onClick:function(){return l(!r)},component:"th",scope:"row",align:"center",children:[Object(k.jsx)(U.a,{"aria-label":"expand row",size:"small",children:r?Object(k.jsx)(z.a,{}):Object(k.jsx)(A.a,{})}),t]})}),Object(k.jsx)(V.a,{children:Object(k.jsx)(R.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(k.jsx)(W.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(k.jsxs)(D.a,{margin:1,children:[Object(k.jsx)(J.a,{variant:"h6",gutterBottom:!0,component:"div",children:t}),Object(k.jsxs)(B.a,{size:"small","aria-label":"purchases",children:[Object(k.jsx)(F.a,{children:Object(k.jsxs)(V.a,{children:[Object(k.jsx)(R.a,{children:"Your answer"}),Object(k.jsx)(R.a,{children:"Right answer"})]})}),Object(k.jsxs)(M.a,{children:[Object(k.jsxs)(V.a,{children:[Object(k.jsx)(R.a,{children:a.userInfinitive}),Object(k.jsx)(R.a,{children:a.infinitive})]}),Object(k.jsxs)(V.a,{children:[Object(k.jsx)(R.a,{children:a.userPast}),Object(k.jsx)(R.a,{children:a.past})]}),Object(k.jsxs)(V.a,{children:[Object(k.jsx)(R.a,{children:a.userPastParticiple}),Object(k.jsx)(R.a,{children:a.pastParticiple})]})]})]})]})})})})]})}var X=function(e){var t=e.setStatus;Object(n.useEffect)((function(){t("default")}),[]);var a=Object(j.c)((function(e){return e.result}));return console.log(a.mistakesList),Object(k.jsxs)("div",{className:"results",children:[Object(k.jsx)("h1",{className:"results__title",children:"Congratulations! You complete challenge!"}),Object(k.jsxs)("span",{className:"results__score",children:["Your score: ",a.score]}),Object(k.jsxs)("span",{className:"results__score",children:["Your total score: ",a.totalScore]}),Object(k.jsx)("div",{className:"results__mistakes",children:Object(k.jsx)(w.a,{component:L.a,children:Object(k.jsxs)(B.a,{"aria-label":"collapsible table",children:[Object(k.jsx)(F.a,{children:Object(k.jsx)(V.a,{children:Object(k.jsx)(R.a,{align:"center",colSpan:2,children:"Your mistakes"})})}),Object(k.jsx)(M.a,{children:Object.keys(a.mistakesList).map((function(e,t){return Object(k.jsx)(H,{verb:e,mistake:a.mistakesList[e]},t)}))})]})})}),Object(k.jsxs)("div",{className:"results__controls",children:[Object(k.jsx)(u.a,{className:"results__control",variant:"outlined",component:l.b,to:"/competitive",children:"Play again"}),Object(k.jsx)(u.a,{className:"results__control",variant:"outlined",component:l.b,to:"/learn",children:"Learn verbs"})]})]})},q=s.a.memo((function(e){var t=e.currentVerb,a=e.score,s=e.life,c=Object(n.useState)(!1),r=Object(i.a)(c,2),l=r[0],o=r[1],u=Object(n.useState)("Okay, here we go!!!"),j=Object(i.a)(u,2),b=j[0],h=j[1],d=Object(n.useState)(!1),O=Object(i.a)(d,2),p=O[0],m=O[1],v=Object(n.useState)(!1),f=Object(i.a)(v,2),g=f[0],x=f[1];return Object(n.useEffect)((function(){l||t.infinitive===b?l&&t.infinitive!==b?function(){var e=t.infinitive;setTimeout((function(){e=e.slice(0,b.length+1),h(e.trim())}),100)}():o(!1):function(){var e=b;setTimeout((function(){e=e.slice(0,e.length-1),h(e),0===b.length&&(o(!0),h(String(" ")))}),100)}(),p||(m(!0),setInterval((function(){x((function(e){return!e}))}),1e3))}),[t,b]),Object(k.jsxs)("div",{className:"challenge__block",children:[Object(k.jsx)("span",{className:"challenge__lives",children:s.map((function(e){return Object(k.jsx)("img",{className:"challenge__heart",src:T,alt:s.length})}))}),Object(k.jsxs)("span",{className:"challenge__score",children:["score: ",a]}),Object(k.jsxs)("h1",{className:"challenge__verb",children:[b,Object(k.jsx)("span",{className:"challenge__cursor",children:g?"|":Object(k.jsx)(k.Fragment,{children:"\xa0"})})]})]})})),K=a(177),Q=a(65),Z=function(e){var t=e.onSubmit,a=e.setStatus,n=e.isSubmit,s=e.errors,c=e.generateVerb,r=e.setErrors,i=e.setIsSubmit,l=(e.life,Object(Q.a)({initialValues:{infinitive:"",past:"",pastParticiple:""},onSubmit:t}));return Object(k.jsxs)("form",{onSubmit:l.handleSubmit,children:[Object(k.jsxs)("div",{className:"challenge__input-group",children:[Object(k.jsx)(K.a,{InputProps:{readOnly:n},className:"challenge__input",variant:"outlined",label:"Infinitive",type:"text",name:"infinitive",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.infinitive}),l.errors.infinitive&&l.touched.infinitive&&l.errors.infinitive,Object(k.jsx)(K.a,{InputProps:{readOnly:n},error:!!s.past,className:"challenge__input",variant:"outlined",label:"2-nd form",type:"text",name:"past",helperText:s.past,onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.past}),l.errors.past&&l.touched.past&&l.errors.past,Object(k.jsx)(K.a,{InputProps:{readOnly:n},error:!!s.pastParticiple,className:"challenge__input",variant:"outlined",label:"3-rd form",type:"text",name:"pastParticiple",helperText:s.pastParticiple,onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.pastParticiple}),l.errors.pastParticiple&&l.touched.pastParticiple&&l.errors.pastParticiple]}),Object(k.jsxs)("div",{className:"challenge__button-group",children:[Object(k.jsx)(u.a,{disabled:n,fullWidth:!0,className:"challenge__button",variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(k.jsx)(u.a,{onClick:function(){l.resetForm(),r({infinitive:"",past:"",pastParticiple:""}),a("default"),i(!1),c()},disabled:!n,fullWidth:!0,className:"challenge__button",variant:"contained",color:"secondary",children:"Next"})]})]})},$="UPDATE_RESULT",ee={totalScore:localStorage.getItem("totalScore"),score:0,mistakesList:[]},te=function(e){return{type:$,payload:e}},ae=s.a.memo((function(e){var t=Object(j.c)((function(e){return e.challenge.verbs}));t=0===t.length?JSON.parse(localStorage.getItem("verbs")):t;var a=Object(n.useState)(),s=Object(i.a)(a,2),c=s[0],r=s[1],l=Object(n.useState)([1,1,1,1,1,1]),u=Object(i.a)(l,2),b=u[0],h=u[1],d=Object(n.useState)(0),m=Object(i.a)(d,2),v=m[0],f=m[1],g=Object(n.useState)(""),x=Object(i.a)(g,2),_=x[0],S=x[1],N=Object(n.useState)(!1),P=Object(i.a)(N,2),C=P[0],E=P[1],T=Object(n.useState)({infinitive:"",past:"",pastParticiple:""}),w=Object(i.a)(T,2),L=w[0],B=w[1],F=Object(j.b)(),V=function(){var e=Math.floor(Math.random()*t.length);S(t[e]);var a=Object(O.a)(t);a.splice(e,1),F(y(a))};return Object(n.useEffect)((function(){V()}),[]),0===b.length?(F(te({mistakesList:c,score:v})),Object(k.jsx)(o.a,{to:"/result"})):Object(k.jsxs)("section",{className:"challenge",children:[Object(k.jsx)(q,{currentVerb:_,score:v,life:b,mistakesList:c}),Object(k.jsx)(Z,{setStatus:e.setStatus,onSubmit:function(t){var a=0;E(!0),Object.keys(t).map((function(e){_[e].toLowerCase().trim()!==t[e].toLowerCase().trim()&&(a++,r((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(I.a)({},_.infinitive,{infinitive:_.infinitive,past:_.past,pastParticiple:_.pastParticiple,userInfinitive:t.infinitive,userPast:t.past,userPastParticiple:t.pastParticiple}))})),B((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(I.a)({},e,_[e]))})))})),0===a?(e.setStatus("success"),f((function(e){return e+1}))):1===a?(e.setStatus("mistake"),h((function(e){return e.slice(0,e.length-1)})),f((function(e){return e+.5}))):(h((function(e){return e.slice(0,e.length-2)})),e.setStatus("wrong"))},generateVerb:V,errors:L,isSubmit:C,setErrors:B,setIsSubmit:E,life:b})]})})),ne=function(){return Object(k.jsxs)("div",{className:"leaderboard",children:[Object(k.jsx)("h1",{className:"leaderboard__title",children:"Leaderboard"}),Object(k.jsx)("div",{className:"leaderboard__list",children:Object(k.jsxs)("div",{className:"leaderboard__item",children:[Object(k.jsx)("img",{src:"http://placehold.it/150x150",alt:"",className:"leaderboard__photo"}),Object(k.jsx)("div",{className:"leaderboard__score-block",children:Object(k.jsx)("span",{className:"leaderboard__score",children:"Total score: 10"})})]})})]})},se=s.a.memo((function(e){var t=e.currentVerb,a=Object(n.useState)(!1),s=Object(i.a)(a,2),c=s[0],r=s[1],l=Object(n.useState)("Start!!!"),o=Object(i.a)(l,2),u=o[0],j=o[1],b=Object(n.useState)(!1),h=Object(i.a)(b,2),d=h[0],O=h[1],p=Object(n.useState)(!1),m=Object(i.a)(p,2),v=m[0],f=m[1];return Object(n.useEffect)((function(){c||t.infinitive===u?c&&t.infinitive!==u?function(){var e=t.infinitive;setTimeout((function(){e=e.slice(0,u.length+1),j(e.trim())}),100)}():r(!1):function(){var e=u;setTimeout((function(){e=e.slice(0,e.length-1),j(e),0===u.length&&(r(!0),j(String(" ")))}),100)}(),d||(O(!0),setInterval((function(){f((function(e){return!e}))}),1e3))}),[t,u]),Object(k.jsx)("div",{className:"challenge__block",children:Object(k.jsxs)("h1",{className:"challenge__verb",children:[u,Object(k.jsx)("span",{className:"challenge__cursor",children:v?"|":Object(k.jsx)(k.Fragment,{children:"\xa0"})})]})})})),ce=function(e){var t=e.onSubmit,a=e.setStatus,n=e.isSubmit,s=e.errors,c=e.generateVerb,r=e.setErrors,i=e.setIsSubmit;e.life;console.log("ChallengeForm render");var l=Object(Q.a)({initialValues:{infinitive:"",past:"",pastParticiple:""},onSubmit:t});return Object(k.jsxs)("form",{onSubmit:l.handleSubmit,children:[Object(k.jsxs)("div",{className:"challenge__input-group",children:[Object(k.jsx)(K.a,{InputProps:{readOnly:n},className:"challenge__input",variant:"outlined",label:"Infinitive",type:"text",name:"infinitive",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.infinitive}),l.errors.infinitive&&l.touched.infinitive&&l.errors.infinitive,Object(k.jsx)(K.a,{InputProps:{readOnly:n},error:!!s.past,className:"challenge__input",variant:"outlined",label:"2-nd form",type:"text",name:"past",helperText:s.past,onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.past}),l.errors.past&&l.touched.past&&l.errors.past,Object(k.jsx)(K.a,{InputProps:{readOnly:n},error:!!s.pastParticiple,className:"challenge__input",variant:"outlined",label:"3-rd form",type:"text",name:"pastParticiple",helperText:s.pastParticiple,onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.pastParticiple}),l.errors.pastParticiple&&l.touched.pastParticiple&&l.errors.pastParticiple]}),Object(k.jsxs)("div",{className:"challenge__button-group",children:[Object(k.jsx)(u.a,{disabled:n,fullWidth:!0,className:"challenge__button",variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(k.jsx)(u.a,{onClick:function(){l.resetForm(),r({infinitive:"",past:"",pastParticiple:""}),a("default"),i(!1),c()},disabled:!n,fullWidth:!0,className:"challenge__button",variant:"contained",color:"secondary",children:"Next"})]})]})},re=s.a.memo((function(e){var t=Object(j.c)((function(e){return e.challenge.verbs}));t=0===t.length?JSON.parse(localStorage.getItem("verbs")):t;var a=Object(n.useState)(!1),s=Object(i.a)(a,2),c=s[0],r=s[1],l=Object(n.useState)(),b=Object(i.a)(l,2),h=b[0],d=b[1],m=Object(n.useState)(""),v=Object(i.a)(m,2),f=v[0],g=v[1],x=Object(n.useState)(!1),_=Object(i.a)(x,2),S=_[0],N=_[1],P=Object(n.useState)({infinitive:"",past:"",pastParticiple:""}),C=Object(i.a)(P,2),E=C[0],T=C[1],w=Object(j.b)(),L=function(){var e=Math.floor(Math.random()*t.length);g(t[e]);var a=Object(O.a)(t);a.splice(e,1),w(y(a))};return Object(n.useEffect)((function(){L()}),[]),c?(w(te({mistakesList:h,score:0})),Object(k.jsx)(o.a,{to:"/result"})):Object(k.jsxs)("section",{className:"challenge",children:[Object(k.jsx)(se,{currentVerb:f}),Object(k.jsx)(ce,{setStatus:e.setStatus,onSubmit:function(t){var a=0;N(!0),Object.keys(t).map((function(e){f[e].toLowerCase().trim()!==t[e].toLowerCase().trim()&&(a++,d((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(I.a)({},f.infinitive,{infinitive:f.infinitive,past:f.past,pastParticiple:f.pastParticiple,userInfinitive:t.infinitive,userPast:t.past,userPastParticiple:t.pastParticiple}))})),T((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(I.a)({},e,f[e]))})))})),0===a?e.setStatus("success"):1===a?e.setStatus("mistake"):e.setStatus("wrong")},generateVerb:L,errors:E,isSubmit:S,setErrors:T,setIsSubmit:N}),Object(k.jsx)("div",{className:"challenge__controls",children:Object(k.jsx)(u.a,{onClick:function(){return r(!0)},className:"challenge__stop",variant:"outlined",children:"Stop"})})]})}));var ie=function(){var e=Object(n.useState)("default"),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(k.jsx)("div",{className:"App ".concat("default"!==a?a:""),children:Object(k.jsx)(l.a,{children:Object(k.jsxs)(o.d,{children:[Object(k.jsx)(o.b,{exact:!0,path:"/",component:E}),Object(k.jsx)(o.b,{exact:!0,path:"/competitive",children:Object(k.jsx)(ae,{setStatus:s})}),Object(k.jsx)(o.b,{exact:!0,path:"/learn",children:Object(k.jsx)(re,{setStatus:s})}),Object(k.jsx)(o.b,{exact:!0,path:"/result",children:Object(k.jsx)(X,{setStatus:s})}),Object(k.jsx)(o.b,{exact:!0,path:"/leaderboard",component:ne})]})})})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,181)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))},oe=a(51),ue=a(97),je=Object(oe.b)({challenge:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!0});case x:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!1});case _:return Object(p.a)(Object(p.a)({},e),{},{verbs:Object(O.a)(n),error:!1});case S:return Object(p.a)(Object(p.a)({},e),{},{error:!0});case N:return Object(p.a)(Object(p.a)({},e),{},{verbs:Object(O.a)(n)});default:return e}},result:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case $:var s;return localStorage.getItem("totalScore")?s=(s=parseFloat(localStorage.getItem("totalScore")))<n.score?n.score:s:(localStorage.setItem("totalScore",n.score),s=n.score),Object(p.a)(Object(p.a)({},e),{},{mistakesList:Object(p.a)({},n.mistakesList),score:n.score,totalScore:s});default:return e}}}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.c,he=Object(oe.d)(je,be(Object(oe.a)(ue.a)));window.__store__=he;var de=he;r.a.render(Object(k.jsx)(j.a,{store:de,children:Object(k.jsx)(ie,{})}),document.getElementById("root")),le()}},[[138,1,2]]]);
//# sourceMappingURL=main.209e9589.chunk.js.map