(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{142:function(e,a,t){"use strict";var n=t(36),l=t(1),r=t.n(l);a.a=Object(n.a)({},r.a,{ID:r.a.oneOfType([r.a.string,r.a.number]).isRequired,component:r.a.oneOfType([r.a.string,r.a.func]),date:r.a.oneOfType([r.a.instanceOf(Date),r.a.string])})},144:function(e,a,t){"use strict";var n=t(25),l=t(20),r=t(5),c=t.n(r),m=t(2),i=t.n(m),o=(t(142),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,r=e.className,m=e.type,u=Object(l.a)(e,["tag","className","type"]),s=c()(Object(n.a)({},m,!!m),r);return a=t||(!t&&o[m]?o[m]:"p"),i.a.createElement(a,Object.assign({},u,{className:s}))};u.defaultProps={type:"p"},a.a=u},146:function(e,a,t){"use strict";var n=t(20),l=t(2),r=t.n(l),c=(t(142),t(21)),m=t(147),i=t(148),o=t(144),u=c.a.create("page"),s=function(e){var a=e.title,t=e.breadcrumbs,l=e.tag,c=e.className,s=e.children,E=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),d=u.b("px-3",c);return r.a.createElement(l,Object.assign({className:d},E),r.a.createElement("div",{className:u.e("header")},a&&"string"===typeof a?r.a.createElement(o.a,{type:"h1",className:u.e("title")},a):a,t&&r.a.createElement(m.a,{className:u.e("breadcrumb")},r.a.createElement(i.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,n=e.active;return r.a.createElement(i.a,{key:a,active:n},t)}))),s)};s.defaultProps={tag:"div",title:""},a.a=s},161:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return l});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},l=function(){return["primary","secondary","success","info","warning","danger"]}},377:function(e,a,t){"use strict";t.r(a);var n=t(146),l=t(2),r=t.n(l),c=t(149),m=t(150),i=t(152),o=t(158),u=t(154),s=t(388),E=t(378),d=t(379),p=t(380),h=t(125),A=t(161),b=Object(A.b)();a.default=function(){return r.a.createElement(n.a,{title:"Dropdowns",breadcrumbs:[{name:"dropdowns",active:!0}]},r.a.createElement(c.a,null,r.a.createElement(m.a,{md:6},r.a.createElement(i.a,null,r.a.createElement(o.a,null,"Single button dropdowns"),r.a.createElement(u.a,null,b.map(function(e,a){return r.a.createElement(s.a,{key:a},r.a.createElement(E.a,{caret:!0,color:e,className:"text-capitalize m-1"},e),r.a.createElement(d.a,null,r.a.createElement(p.a,{header:!0},"Header"),r.a.createElement(p.a,{disabled:!0},"Action"),r.a.createElement(p.a,null,"Another Action"),r.a.createElement(p.a,{divider:!0}),r.a.createElement(p.a,null,"Another Action")))})))),r.a.createElement(m.a,{md:6},r.a.createElement(i.a,null,r.a.createElement(o.a,null,"Split button dropdowns"),r.a.createElement(u.a,null,b.map(function(e,a){return r.a.createElement(s.a,{key:a,className:"text-capitalize m-1"},r.a.createElement(h.a,{color:e},e),r.a.createElement(E.a,{caret:!0,color:e}),r.a.createElement(d.a,null,r.a.createElement(p.a,{header:!0},"Header"),r.a.createElement(p.a,{disabled:!0},"Action"),r.a.createElement(p.a,null,"Another Action"),r.a.createElement(p.a,{divider:!0}),r.a.createElement(p.a,null,"Another Action")))}))))),r.a.createElement(c.a,null,r.a.createElement(m.a,{md:6},r.a.createElement(i.a,null,r.a.createElement(o.a,null,"Sizing"),r.a.createElement(u.a,null,r.a.createElement(s.a,{className:"m-1"},r.a.createElement(E.a,{caret:!0,size:"lg"},"Large"),r.a.createElement(d.a,null,r.a.createElement(p.a,null,"Another Action"),r.a.createElement(p.a,null,"Another Action"))),r.a.createElement(s.a,{className:"m-1"},r.a.createElement(E.a,{caret:!0},"Normal"),r.a.createElement(d.a,null,r.a.createElement(p.a,null,"Another Action"),r.a.createElement(p.a,null,"Another Action"))),r.a.createElement(s.a,{className:"m-1"},r.a.createElement(E.a,{caret:!0,size:"sm"},"Small"),r.a.createElement(d.a,null,r.a.createElement(p.a,null,"Another Action"),r.a.createElement(p.a,null,"Another Action")))))),r.a.createElement(m.a,{md:6},r.a.createElement(i.a,null,r.a.createElement(o.a,null,"Dropup"),r.a.createElement(u.a,null,r.a.createElement(s.a,{direction:"up"},r.a.createElement(E.a,{caret:!0,size:"lg"},"Dropup"),r.a.createElement(d.a,null,r.a.createElement(p.a,null,"Another Action"),r.a.createElement(p.a,null,"Another Action"))))))),r.a.createElement(c.a,null,r.a.createElement(m.a,{md:6},r.a.createElement(i.a,null,r.a.createElement(o.a,null,"Alignment"),r.a.createElement(u.a,null,r.a.createElement(s.a,{className:"m-1"},r.a.createElement(E.a,{caret:!0},"This dropdown's menu is right-aligned"),r.a.createElement(d.a,{right:!0},r.a.createElement(p.a,{header:!0},"Header"),r.a.createElement(p.a,{disabled:!0},"Action"),r.a.createElement(p.a,null,"Another Action"),r.a.createElement(p.a,{divider:!0}),r.a.createElement(p.a,null,"Another Action"))),r.a.createElement(s.a,{className:"m-1"},r.a.createElement(E.a,{caret:!0},"This dropdown's menu is left-aligned"),r.a.createElement(d.a,null,r.a.createElement(p.a,{header:!0},"Header"),r.a.createElement(p.a,{disabled:!0},"Action"),r.a.createElement(p.a,null,"Another Action"),r.a.createElement(p.a,{divider:!0}),r.a.createElement(p.a,null,"Another Action"))))))))}}}]);
//# sourceMappingURL=20.e738a486.chunk.js.map