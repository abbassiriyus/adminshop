(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{124:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(22),c=n.n(r),i=n(12),u=n(13),l=n(15),s=n(14),d=n(16),m=n(1),p=n.n(m),f=n(31),g=!!Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_GOOGLE_ANALYTICS;g&&f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_GOOGLE_ANALYTICS);var h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){g&&(this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView))}},{key:"sendPageView",value:function(e){f.a.set({page:e.pathname}),f.a.pageview(e.pathname)}},{key:"render",value:function(){return this.props.children}}]),t}(o.a.Component);h.contextTypes={router:p.a.object};var b=h,v=n(20),y=n(21),E=n(126),k=y.a.create("content"),C=function(e){var t=e.tag,n=e.className,a=Object(v.a)(e,["tag","className"]),r=k.b(n);return o.a.createElement(t,Object.assign({className:r},a))};C.defaultProps={tag:E.a};var S=C,T=n(127),O=n(128),A=n(129),x=function(e){return o.a.createElement("a",Object.assign({href:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_SOURCE_URL,target:"_blank",rel:"noopener noreferrer"},e))},w=function(){return o.a.createElement(T.a,null,o.a.createElement(O.a,{navbar:!0},o.a.createElement(A.a,null,"2022 Reduction theme, source on ",o.a.createElement(x,null,"iTeen"))))},N=n(130),j=(n(71),n(63).lang,function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={lang:[]},n.getValue=function(){var e=document.getElementById("language").value;console.log(e),localStorage.setItem("lang",e);document.getElementById("language").value;window.location.reload()},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("language").value=null==localStorage.getItem("lang")?"ru":localStorage.getItem("lang")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(N.a,{inline:!0,className:"cr-search-form",onSubmit:function(e){return e.preventDefault()}},o.a.createElement("select",{onChange:function(){return e.getValue()},id:"language"},o.a.createElement("option",{value:"uz",className:"uz"},"uz"),o.a.createElement("option",{value:"ru",className:"ru"},"ru"),o.a.createElement("option",{value:"en",className:"en"},"en"))))}}]),t}(a.Component)),z=n(10),I=n(131),P=y.a.create("header"),L=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},n.toggleNotificationPopover=function(){n.setState({isOpenNotificationPopover:!n.state.isOpenNotificationPopover}),n.state.isNotificationConfirmed||n.setState({isNotificationConfirmed:!0})},n.toggleUserCardPopover=function(){n.setState({isOpenUserCardPopover:!n.state.isOpenUserCardPopover})},n.handleSidebarControlButton=function(e){e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){this.state.isNotificationConfirmed;return o.a.createElement(T.a,{light:!0,expand:!0,className:P.b("bg-white")},o.a.createElement(O.a,{navbar:!0,className:"mr-2"},o.a.createElement(I.a,{outline:!0,onClick:this.handleSidebarControlButton},o.a.createElement(z.b,{size:25}))),o.a.createElement(O.a,{navbar:!0},o.a.createElement(j,null)))}}]),t}(o.a.Component),B=n(62),D=n(58),R=n.n(D),_={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}},G=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).handleContentClick=function(e){!t.isSidebarOpen()||"xs"!==n.props.breakpoint&&"sm"!==n.props.breakpoint&&"md"!==n.props.breakpoint||n.openSidebar("close")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.breakpoint;t!==this.props.breakpoint&&this.checkBreakpoint(t)}},{key:"componentDidMount",value:function(){var e=this;this.checkBreakpoint(this.props.breakpoint),setTimeout(function(){e.notificationSystem&&e.notificationSystem.addNotification({title:o.a.createElement(z.g,null),message:"Welome to Reduction Admin!",level:"info"})},1500),setTimeout(function(){e.notificationSystem&&e.notificationSystem.addNotification({title:o.a.createElement(z.j,null),message:"Reduction is carefully designed template powered by React and Bootstrap4!",level:"info"})},2500)}},{key:"checkBreakpoint",value:function(e){switch(e){case"xs":case"sm":case"md":return this.openSidebar("close");case"lg":case"xl":default:return this.openSidebar("open")}}},{key:"openSidebar",value:function(e){if("open"===e)return document.querySelector(".cr-sidebar").classList.add("cr-sidebar--open");document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open")}},{key:"render",value:function(){var e=this,t=this.props.children;return o.a.createElement("main",{className:"cr-app bg-light"},o.a.createElement(X,null),o.a.createElement(S,{fluid:!0,onClick:this.handleContentClick},o.a.createElement(L,null),t,o.a.createElement(w,null)),o.a.createElement(R.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:_}))}}],[{key:"isSidebarOpen",value:function(){return document.querySelector(".cr-sidebar").classList.contains("cr-sidebar--open")}}]),t}(o.a.Component),U=n(25),M=n(35),W=n.n(M),q=n(59),V=n(140),H=n(132),F=n(133),J={backgroundImage:'url("'.concat(W.a,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat"},Y=[{to:"/product",name:"".concat("uz"==localStorage.getItem("lang")?"Mahsulot":"en"==localStorage.getItem("lang")?"Product":"\u0422\u043e\u0432\u0430\u0440"),exact:!1,Icon:z.a},{to:"/category",name:"".concat("uz"==localStorage.getItem("lang")?"Turkum":"en"==localStorage.getItem("lang")?"Category":"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),exact:!1,Icon:z.f},{to:"/subcategory",name:"".concat("uz"==localStorage.getItem("lang")?"Pastki kategoriya":"en"==localStorage.getItem("lang")?"Subcategory":"\u041f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),exact:!1,Icon:z.h},{to:"/promotions",name:"".concat("uz"==localStorage.getItem("lang")?"Aqsiya":"en"==localStorage.getItem("lang")?"Aksiya":"\u0410\u043a\u0441\u0438\u044f"),exact:!1,Icon:z.k}],K=[{to:"/",name:"".concat("uz"==localStorage.getItem("lang")?"Bosh sahifa":"en"==localStorage.getItem("lang")?"Dashboard":"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),exact:!0,Icon:z.c}],Q=y.a.create("sidebar"),X=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={isOpenComponents:!0,isOpenContents:!0,isOpenPages:!0},n.handleClick=function(e){return function(){n.setState(function(t){var n=t["isOpen".concat(e)];return Object(U.a)({},"isOpen".concat(e),!n)})}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("aside",{className:Q.b(),"data-image":W.a},o.a.createElement("div",{className:Q.e("background"),style:J}),o.a.createElement("div",{className:Q.e("content")},o.a.createElement(T.a,null,o.a.createElement(x,{className:"navbar-brand d-flex"},o.a.createElement("span",{className:"text-white"},"ITeen ",o.a.createElement(q.a,null)))),o.a.createElement(O.a,{vertical:!0},K.map(function(e,t){var n=e.to,a=e.name,r=e.exact,c=e.Icon;return o.a.createElement(A.a,{key:t,className:Q.e("nav-item")},o.a.createElement(H.a,{id:"navItem-".concat(a,"-").concat(t),className:"text-uppercase",tag:V.a,to:n,activeClassName:"active",exact:r},o.a.createElement(c,{className:Q.e("nav-item-icon")}),o.a.createElement("span",{className:""},a)))}),o.a.createElement(A.a,{className:Q.e("nav-item"),onClick:this.handleClick("Components")},o.a.createElement(H.a,{className:Q.e("nav-item-collapse")},o.a.createElement("div",{className:"d-flex"},o.a.createElement(z.e,{className:Q.e("nav-item-icon")}),o.a.createElement("span",{className:" align-self-start"}," ","uz"==localStorage.getItem("lang")?"Komponentlar":"en"==localStorage.getItem("lang")?"Components":"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438"," ")),o.a.createElement(z.i,{className:Q.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenComponents?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),o.a.createElement(F.a,{isOpen:this.state.isOpenComponents},Y.map(function(e,t){var n=e.to,a=e.name,r=e.exact,c=e.Icon;return o.a.createElement(A.a,{key:t,className:Q.e("nav-item")},o.a.createElement(H.a,{id:"navItem-".concat(a,"-").concat(t),className:"text-uppercase",tag:V.a,to:n,activeClassName:"active",exact:r},o.a.createElement(c,{className:Q.e("nav-item-icon")}),o.a.createElement("span",{className:""},a)))})))))}}]),t}(o.a.Component),Z=n(134),$=function(e){var t=e.color,n=void 0===t?"primary":t;return o.a.createElement("div",{className:"cr-page-spinner"},o.a.createElement(Z.a,{color:n}))},ee=n(60),te=n.n(ee),ne=n(138),ae=n(141),oe=n(139),re=(n(99),n(135)),ce=n(136),ie=n(137),ue=n(37),le=o.a.lazy(function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,157))}),se=o.a.lazy(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,160))}),de=o.a.lazy(function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,163))}),me=o.a.lazy(function(){return n.e(5).then(n.bind(null,164))}),pe=o.a.lazy(function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,165))}),fe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={token:""},n.pushLogin=function(){var e={username:document.querySelector("#login").value,password:document.querySelector("#Password").value};Object(ue.w)(e).then(function(e){n.setState({token:e.data.key}),localStorage.setItem("token",e.data.key)}).catch(function(e){alert("noto`g`ri parol")})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.token?o.a.createElement(ne.a,null,o.a.createElement(b,null,o.a.createElement(ae.a,null,o.a.createElement(G,null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement($,null)},o.a.createElement(B.a,{exact:!0,path:"/",component:me}),o.a.createElement(B.a,{exact:!0,path:"/product",component:se}),o.a.createElement(B.a,{exact:!0,path:"/category",component:le}),o.a.createElement(B.a,{exact:!0,path:"/promotions",component:pe}),o.a.createElement(B.a,{exact:!0,path:"/subcategory",component:de}))),o.a.createElement(oe.a,{to:"/"})))):o.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(N.a,{style:{width:"300px"}},o.a.createElement("div",{className:"text-center pb-4"},"iTeen"),o.a.createElement(re.a,null,o.a.createElement(ce.a,{for:"login"},"User Name"),o.a.createElement(ie.a,{placeholder:"your Login",type:"text",id:"login"})),o.a.createElement(re.a,null,o.a.createElement(ce.a,{for:"Password"},"Password"),o.a.createElement(ie.a,{type:"password",id:"Password",placeholder:"your password"})),o.a.createElement("hr",null),o.a.createElement(I.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:function(){return e.pushLogin()}},"Login"))))}}]),t}(o.a.Component),ge=te()(function(e){var t=e.width;return t<575?{breakpoint:"xs"}:576<t&&t<767?{breakpoint:"sm"}:768<t&&t<991?{breakpoint:"md"}:992<t&&t<1199?{breakpoint:"lg"}:t>1200?{breakpoint:"xl"}:{breakpoint:"xs"}})(fe),he=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,166)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)})};n(123);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ge,null)),document.getElementById("root")),he()},21:function(e,t,n){"use strict";var a,o=n(5),r=n.n(o),c=(a="cr",{create:function(e){var t=e;return"string"===typeof a&&(t="".concat(a,"-").concat(e)),{b:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return r()(t,n)},e:function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return r()("".concat(t,"__").concat(e),a)},m:function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return r()("".concat(t,"--").concat(e),a)}}}});t.a=c},35:function(e,t,n){e.exports=n.p+"static/media/sidebar-4.80d4a4e5.jpg"},37:function(e,t,n){"use strict";var a=n(36),o=n(47),r=n.n(o),c="https://shop.abrorjonaxmadov.uz",i=localStorage.getItem("token"),u=null==localStorage.getItem("lang")?"ru":localStorage.getItem("lang");function l(e){return r()(Object(a.a)({},e))}n.d(t,"w",function(){return s}),n.d(t,"k",function(){return d}),n.d(t,"j",function(){return m}),n.d(t,"e",function(){return p}),n.d(t,"a",function(){return f}),n.d(t,"A",function(){return g}),n.d(t,"v",function(){return h}),n.d(t,"u",function(){return b}),n.d(t,"i",function(){return v}),n.d(t,"c",function(){return y}),n.d(t,"F",function(){return E}),n.d(t,"D",function(){return k}),n.d(t,"q",function(){return C}),n.d(t,"r",function(){return S}),n.d(t,"g",function(){return T}),n.d(t,"y",function(){return O}),n.d(t,"b",function(){return A}),n.d(t,"o",function(){return x}),n.d(t,"f",function(){return w}),n.d(t,"z",function(){return N}),n.d(t,"E",function(){return j}),n.d(t,"t",function(){return z}),n.d(t,"s",function(){return I}),n.d(t,"d",function(){return P}),n.d(t,"h",function(){return L}),n.d(t,"p",function(){return B}),n.d(t,"x",function(){return D}),n.d(t,"l",function(){return R}),n.d(t,"B",function(){return _}),n.d(t,"m",function(){return G}),n.d(t,"n",function(){return U}),n.d(t,"C",function(){return M});var s=function(e){return l({url:"".concat(c,"/auth/v1/login/"),method:"post",data:e})},d=function(){return l({url:"".concat(c,"/api/v1/categories/"),method:"GET",headers:{"Accept-Language":"".concat(u)}})},m=function(e){return l({url:"".concat(c,"/api/v1/categories/").concat(e,"/"),method:"GET",headers:{"Accept-Language":"".concat(u)}})},p=function(e){return l({url:"".concat(c,"/api/v1/categories/").concat(e,"/delete/"),method:"delete",headers:{Authorization:"Token ".concat(i)}})},f=function(e){return l({url:"".concat(c,"/api/v1/categories/create/"),method:"post",data:e,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},g=function(e,t){return l({url:"".concat(c,"/api/v1/categories/").concat(e,"/update/"),method:"PATCH",data:t,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},h=function(){return l({url:"".concat(c,"/api/v1/subcategories/"),method:"GET",headers:{"Accept-Language":"".concat(u)}})},b=function(e){return l({url:"".concat(c,"/api/v1/subcategories/").concat(e,"/"),method:"GET",headers:{"Accept-Language":"".concat(u)}})},v=function(e){return l({url:"".concat(c,"/api/v1/subcategories/").concat(e,"/delete/"),method:"delete",headers:{Authorization:"Token ".concat(i)}})},y=function(e){return l({url:"".concat(c,"/api/v1/subcategories/create/"),method:"post",data:e,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},E=function(e,t){return l({url:"".concat(c,"/api/v1/subcategories/").concat(e,"/update/"),method:"PATCH",data:t,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},k=function(e,t){return l({url:"".concat(c,"/api/v1/products/").concat(e,"/"),method:"PATCH",data:t,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},C=function(){return l({url:"".concat(c,"/api/v1/products/"),method:"GET",headers:{"Accept-Language":"".concat(u)}})},S=function(e){return l({url:"".concat(c,"/api/v1/products/").concat(e,"/"),method:"GET",headers:{"Accept-Language":"".concat(u)}})},T=function(e){return l({url:"".concat(c,"/api/v1/products/").concat(e,"/"),method:"delete",headers:{Authorization:"Token ".concat(i)}})},O=function(e){return l({url:"".concat(c,"/api/v1/products/"),method:"post",data:e,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},A=function(e){return l({url:"".concat(c,"/api/v1/products/images/"),method:"post",data:e,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},x=function(){return l({url:"".concat(c,"/api/v1/products/images/"),method:"GET",headers:{"Accept-Language":"".concat(u)}})},w=function(e){return l({url:"".concat(c,"/api/v1/products/images/").concat(e,"/"),method:"delete",headers:{Authorization:"Token ".concat(i)}})},N=function(e){return l({url:"".concat(c,"/api/v1/products/promotions/create/"),method:"post",data:e,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},j=function(e,t){return l({url:"".concat(c,"/api/v1/products/promotions/").concat(e,"/update/"),method:"PATCH",data:t,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},z=function(){return l({url:"".concat(c,"/api/v1/products/promotions/"),method:"GET",headers:{"Accept-Language":"".concat(u)}})},I=function(e){return l({url:"".concat(c,"/api/v1/products/promotions/").concat(e),method:"GET",headers:{"Accept-Language":"".concat(u)}})},P=function(e,t){return l({url:"".concat(c,"/api/v1/products/promotions/add-remove/").concat(t,"/"),method:"patch",data:e,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},L=function(e){return l({url:"".concat(c,"/api/v1/products/promotions/").concat(e,"/delete/"),method:"delete",headers:{Authorization:"Token ".concat(i)}})},B=function(e){return l({url:"".concat(c,"/api/v1/products/").concat(e,"/"),method:"GET",headers:{"Accept-Language":"".concat(u)}})},D=function(e){return l({url:"".concat(c,"/api/v1/company/"),method:"post",data:e,headers:{Authorization:"Token ".concat(i),"Accept-Language":"".concat(u),"Content-Type":"multipart/form-data"}})},R=function(){return l({url:"".concat(c,"/api/v1/company/4/"),method:"GET",headers:{"Accept-Language":"".concat(u)}})},_=function(e){return l({url:"".concat(c,"/api/v1/company/4/"),method:"PATCH",data:e,headers:{Authorization:"Token ".concat(i),"Content-Type":"multipart/form-data"}})},G=function(e){return l({url:"".concat(c,"/api/v1/contacts/"),method:"GET"})},U=function(){return l({url:"".concat(c,"/api/v1/currency/",4,"/"),method:"GET"})},M=function(e){return l({url:"".concat(c,"/api/v1/currency/",4,"/"),method:"PATCH",data:e,headers:{Authorization:"Token ".concat(i),"Content-Type":"application/json"}})}},63:function(e,t,n){"use strict";n.r(t),n.d(t,"language1",function(){return a});var a={uz:{item:"buyum"},ru:{item:"narsa"},en:{item:"item"}}},64:function(e,t,n){e.exports=n(124)},71:function(e,t,n){},99:function(e,t,n){}},[[64,3,4]]]);
//# sourceMappingURL=main.7094a744.chunk.js.map