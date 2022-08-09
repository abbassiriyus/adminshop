(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{142:function(e,t,a){"use strict";var n=a(36),l=a(1),r=a.n(l);t.a=Object(n.a)({},r.a,{ID:r.a.oneOfType([r.a.string,r.a.number]).isRequired,component:r.a.oneOfType([r.a.string,r.a.func]),date:r.a.oneOfType([r.a.instanceOf(Date),r.a.string])})},144:function(e,t,a){"use strict";var n=a(25),l=a(20),r=a(5),c=a.n(r),o=a(2),s=a.n(o),u=(a(142),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),i=function(e){var t,a=e.tag,r=e.className,o=e.type,i=Object(l.a)(e,["tag","className","type"]),m=c()(Object(n.a)({},o,!!o),r);return t=a||(!a&&u[o]?u[o]:"p"),s.a.createElement(t,Object.assign({},i,{className:m}))};i.defaultProps={type:"p"},t.a=i},146:function(e,t,a){"use strict";var n=a(20),l=a(2),r=a.n(l),c=(a(142),a(21)),o=a(147),s=a(148),u=a(144),i=c.a.create("page"),m=function(e){var t=e.title,a=e.breadcrumbs,l=e.tag,c=e.className,m=e.children,d=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),g=i.b("px-3",c);return r.a.createElement(l,Object.assign({className:g},d),r.a.createElement("div",{className:i.e("header")},t&&"string"===typeof t?r.a.createElement(u.a,{type:"h1",className:i.e("title")},t):t,a&&r.a.createElement(o.a,{className:i.e("breadcrumb")},r.a.createElement(s.a,null,"Home"),a.length&&a.map(function(e,t){var a=e.name,n=e.active;return r.a.createElement(s.a,{key:t,active:n},a)}))),m)};m.defaultProps={tag:"div",title:""},t.a=m},147:function(e,t,a){"use strict";var n=a(4),l=a(6),r=a(2),c=a.n(r),o=a(1),s=a.n(o),u=a(5),i=a.n(u),m=a(3),d={tag:m.n,listTag:m.n,className:s.a.string,listClassName:s.a.string,cssModule:s.a.object,children:s.a.node,"aria-label":s.a.string},g=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,o=e.children,s=e.tag,u=e.listTag,d=e["aria-label"],g=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(m.j)(i()(t),r),h=Object(m.j)(i()("breadcrumb",a),r);return c.a.createElement(s,Object(n.a)({},g,{className:p,"aria-label":d}),c.a.createElement(u,{className:h},o))};g.propTypes=d,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=g},148:function(e,t,a){"use strict";var n=a(4),l=a(6),r=a(2),c=a.n(r),o=a(1),s=a.n(o),u=a(5),i=a.n(u),m=a(3),d={tag:m.n,active:s.a.bool,className:s.a.string,cssModule:s.a.object},g=function(e){var t=e.className,a=e.cssModule,r=e.active,o=e.tag,s=Object(l.a)(e,["className","cssModule","active","tag"]),u=Object(m.j)(i()(t,!!r&&"active","breadcrumb-item"),a);return c.a.createElement(o,Object(n.a)({},s,{className:u,"aria-current":r?"page":void 0}))};g.propTypes=d,g.defaultProps={tag:"li"},t.a=g},149:function(e,t,a){"use strict";var n=a(4),l=a(6),r=a(2),c=a.n(r),o=a(1),s=a.n(o),u=a(5),i=a.n(u),m=a(3),d={tag:m.n,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},g=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,o=e.tag,s=e.form,u=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.j)(i()(t,r?"no-gutters":null,s?"form-row":"row"),a);return c.a.createElement(o,Object(n.a)({},u,{className:d}))};g.propTypes=d,g.defaultProps={tag:"div"},t.a=g},150:function(e,t,a){"use strict";var n=a(4),l=a(6),r=a(37),c=a.n(r),o=a(2),s=a.n(o),u=a(1),i=a.n(u),m=a(5),d=a.n(m),g=a(3),p=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),push:Object(g.f)(p,'Please use the prop "order"'),pull:Object(g.f)(p,'Please use the prop "order"'),order:p,offset:p})]),f={tag:g.n,xs:h,sm:h,md:h,lg:h,xl:h,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.widths,o=e.tag,u=Object(l.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach(function(t,n){var l=e[t];if(delete u[t],l||""===l){var r=!n;if(c()(l)){var o,s=r?"-":"-"+t+"-",m=y(r,t,l.size);i.push(Object(g.j)(d()(((o={})[m]=l.size||""===l.size,o["order"+s+l.order]=l.order||0===l.order,o["offset"+s+l.offset]=l.offset||0===l.offset,o)),a))}else{var p=y(r,t,l);i.push(p)}}}),i.length||i.push("col");var m=Object(g.j)(d()(t,i),a);return s.a.createElement(o,Object(n.a)({},u,{className:m}))};v.propTypes=f,v.defaultProps=b,t.a=v},365:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),r=a(15),c=a(14),o=a(16),s=a(146),u=(a(365),a(2)),i=a.n(u),m=a(149),d=a(150),g=a(38),p=(a(47),a(63)),h=(p.lang,p.language1),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={category:[],product:[],subCategory:[],aksiya:[],data:[],file:[],file2:[],lang1:null==localStorage.getItem("lang")?"uz:":localStorage.getItem("lang")},a.getcategory=function(){Object(g.j)().then(function(e){a.setState({category:e.data})})},a.getProduct1=function(){Object(g.o)().then(function(e){a.setState({product:e.data})})},a.getSubCategory=function(){Object(g.q)().then(function(e){a.setState({subCategory:e.data})})},a.getImaga=function(){Object(g.p)().then(function(e){a.setState({aksiya:e.data})})},a.postContact=function(){var e={name:document.querySelector("")};Object(g.l)(e).then(function(e){a.getContact()})},a.getCompanys=function(){Object(g.k)().then(function(e){document.querySelector("#phone").value=e.data.phone,document.querySelector("#team").value=e.data.team,document.querySelector("#team_story").value=e.data.team_story,document.querySelector("#longitude").value=e.data.longitude,document.querySelector("#latitude").value=e.data.latitude,a.state.file2=e.data.logo})},a.postCompanys=function(){var e={created_at:"123324.2342342000000000000000000",modified_at:"123324.2342342000000000000000000",logo:a.state.file2,phone:document.querySelector("#phone").value,about_img:a.state.file,team:document.querySelector("#team").value,team_story:document.querySelector("#team_story").value,longitude:"123324.2342342000000000000000000",latitude:"12432432.2343530000000000000000000",created:1,modified:1};Object(g.s)(e).then(function(e){a.getCompanys()})},a.putCompanys=function(){var e={logo:a.state.file2,phone:document.querySelector("#phone").value,about_img:a.state.file,team:document.querySelector("#team").value,team_story:document.querySelector("#team_story").value};Object(g.w)(e).then(function(e){a.getCompanys(),document.querySelector("#phone").value=e.data.phone,document.querySelector("#team").value=e.data.team,document.querySelector("#team_story").value=e.data.team_story,document.querySelector("#longitude").value=e.data.longitude,document.querySelector("#latitude").value=e.data.latitude,a.state.file2=e.data.logo})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"handleFile",value:function(e){var t=e.target.files[0];this.setState({file:t})}},{key:"handleFile2",value:function(e){var t=e.target.files[0];this.setState({file2:t})}},{key:"componentDidMount",value:function(){var e=this;this.getImaga(),this.getSubCategory(),this.getProduct1(),this.getCompanys(),this.getcategory(),setTimeout(function(){e.getcategory()},100)}},{key:"render",value:function(){var e=this;return i.a.createElement(s.a,{className:"DashboardPage",title:"Dashboard",breadcrumbs:[{name:"Dashboard",active:!0}]},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:3,md:6,sm:6,xs:12},i.a.createElement("div",{class:"bg-info w-100 card12"},i.a.createElement("h1",null,this.state.product.length),i.a.createElement("p",null,"Product"))),i.a.createElement(d.a,{lg:3,md:6,sm:6,xs:12},i.a.createElement("div",{className:"card12"},i.a.createElement("h1",null,this.state.category.length),i.a.createElement("p",null,"Category"))),i.a.createElement(d.a,{lg:3,md:6,sm:6,xs:12},i.a.createElement("div",{className:"card12"},i.a.createElement("h1",null,this.state.subCategory.length),i.a.createElement("p",null,"SubCategory"))),i.a.createElement(d.a,{lg:3,md:6,sm:6,xs:12},i.a.createElement("div",{className:"card12"},i.a.createElement("h1",null,this.state.aksiya.length),i.a.createElement("p",null,"Promotion")))),i.a.createElement("div",{className:"InputGroup"},i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"uz"==this.state.lang?h.uz.item:"ru"==this.state.lang?h.ru.item:h.en.item),i.a.createElement("input",{type:"number",id:"phone",placeholder:"Phone Number"})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"Team"),i.a.createElement("input",{type:"text",id:"team",placeholder:"team",requiered:!0})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"Team Story"),i.a.createElement("input",{type:"text",id:"team_story",placeholder:"Team Story",requiered:!0})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"Longitude"),i.a.createElement("input",{type:"text",id:"longitude",placeholder:"Longitude"})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"Latitude"),i.a.createElement("input",{type:"text",id:"latitude",placeholder:"Latitude",requiered:!0})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"Company logo"),i.a.createElement("input",{className:"d-block mt-2",onInput:function(t){return e.handleFile2(t)},type:"file",placeholder:"logo",name:"",id:"logo"})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"About Img"),i.a.createElement("input",{type:"file",onInput:function(t){return e.handleFile(t)},id:"aboutImg",requiered:!0}))),i.a.createElement("button",{className:"btn btn-primary mt-2",onClick:function(){return e.putCompanys()}},"yuborish"))}}]),t}(i.a.Component);t.default=f}}]);
//# sourceMappingURL=15.7b4a1700.chunk.js.map