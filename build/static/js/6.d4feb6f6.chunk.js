(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){"use strict";var l=a(20),n=a(2),r=a.n(n),u=a(37),o=a(1),c=a.n(o),s=(Object(u.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])}),a(23)),m=a(153),i=a(154),d=a(25),g=a(5),h=a.n(g),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},p=function(e){var t,a=e.tag,n=e.className,u=e.type,o=Object(l.a)(e,["tag","className","type"]),c=h()(Object(d.a)({},u,!!u),n);return t=a||(!a&&y[u]?y[u]:"p"),r.a.createElement(t,Object.assign({},o,{className:c}))};p.defaultProps={type:"p"};var v=p,b=s.a.create("page"),f=function(e){var t=e.title,a=e.breadcrumbs,n=e.tag,u=e.className,o=e.children,c=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),s=b.b("px-3",u);return r.a.createElement(n,Object.assign({className:s},c),r.a.createElement("div",{className:b.e("header")},t&&"string"===typeof t?r.a.createElement(v,{type:"h1",className:b.e("title")},t):t,a&&r.a.createElement(m.a,{className:b.e("breadcrumb")},r.a.createElement(i.a,null,"uz"==localStorage.getItem("lang")?"Admin":"en"==localStorage.getItem("lang")?"Admin":"A\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440"),a.length&&a.map(function(e,t){var a=e.name,l=e.active;return r.a.createElement(i.a,{key:t,active:l},a)}))),o)};f.defaultProps={tag:"div",title:""};t.a=f},164:function(e,t,a){"use strict";a.r(t);var l=a(12),n=a(13),r=a(15),u=a(14),o=a(16),c=a(144),s=(a(143),a(2)),m=a.n(s),i=a(155),d=a(156),g=a(36),h=(a(46),a(142),a(145)),y=a(63),p=(y.lang,y.language1,function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={category:[],product:[],subCategory:[],aksiya:[],data:[],file:[],file2:[],lang1:null==localStorage.getItem("lang")?"ru":localStorage.getItem("lang")},a.getcategory=function(){Object(g.k)().then(function(e){a.setState({category:e.data})})},a.getProduct1=function(){Object(g.q)().then(function(e){a.setState({product:e.data})})},a.getSubCategory=function(){Object(g.v)().then(function(e){a.setState({subCategory:e.data})})},a.getImaga=function(){Object(g.t)().then(function(e){a.setState({aksiya:e.data})})},a.postContact=function(){var e={name:document.querySelector("")};Object(g.m)(e).then(function(e){a.getContact()})},a.getCompanys=function(){Object(g.l)().then(function(e){document.querySelector("#phone").value=e.data.phone,document.querySelector("#team").value=e.data.team,document.querySelector("#team_story").value=e.data.team_story,document.querySelector("#longitude").value=e.data.longitude,document.querySelector("#latitude").value=e.data.latitude,a.state.file2=e.data.logo,document.querySelector("#telegram").value=e.data.telegram,document.querySelector("#instagram").value=e.data.instagram,document.querySelector("#facebook").value=e.data.facebook})},a.postCompanys=function(){var e={created_at:"123324.2342342000000000000000000",modified_at:"123324.2342342000000000000000000",logo:a.state.file2,phone:document.querySelector("#phone").value,about_img:a.state.file,team:document.querySelector("#team").value,team_story:document.querySelector("#team_story").value,longitude:"123324.2342342000000000000000000",latitude:"12432432.2343530000000000000000000",created:1,modified:1,telegram:document.querySelector("#telegram").value,instagram:document.querySelector("#instagram").value,facebook:document.querySelector("#facebook").value};document.querySelector(".Alert").style="display: block",Object(g.x)(e).then(function(e){a.getCompanys()})},a.putCompanys=function(){var e;e=0!=document.querySelector("#aboutImg").value.length&&0!=document.querySelector("#logo").value.length?{logo:a.state.file2,phone:document.querySelector("#phone").value,about_img:a.state.file,team:document.querySelector("#team").value,longitude:document.querySelector("#longitude").value,latitude:document.querySelector("#latitude").value,team_story:document.querySelector("#team_story").value,telegram:document.querySelector("#telegram").value,instagram:document.querySelector("#instagram").value,facebook:document.querySelector("#facebook").value}:0===document.querySelector("#logo").value.length&&0!=document.querySelector("#aboutImg").value.length?{phone:document.querySelector("#phone").value,longitude:document.querySelector("#longitude").value,latitude:document.querySelector("#latitude").value,about_img:a.state.file,team:document.querySelector("#team").value,team_story:document.querySelector("#team_story").value,telegram:document.querySelector("#telegram").value,instagram:document.querySelector("#instagram").value,facebook:document.querySelector("#facebook").value}:0===document.querySelector("#aboutImg").value.length&&0!=document.querySelector("#logo").value.length?{longitude:document.querySelector("#longitude").value,latitude:document.querySelector("#latitude").value,logo:a.state.file2,phone:document.querySelector("#phone").value,team:document.querySelector("#team").value,team_story:document.querySelector("#team_story").value,telegram:document.querySelector("#telegram").value,instagram:document.querySelector("#instagram").value,facebook:document.querySelector("#facebook").value}:{longitude:document.querySelector("#longitude").value,latitude:document.querySelector("#latitude").value,phone:document.querySelector("#phone").value,team:document.querySelector("#team").value,team_story:document.querySelector("#team_story").value,telegram:document.querySelector("#telegram").value,instagram:document.querySelector("#instagram").value,facebook:document.querySelector("#facebook").value},Object(g.B)(e).then(function(e){document.querySelector("#phone").value=e.data.phone,document.querySelector("#team").value=e.data.team,document.querySelector("#team_story").value=e.data.team_story,document.querySelector("#longitude").value=e.data.longitude,document.querySelector("#latitude").value=e.data.latitude,a.state.file2=e.data.logo,document.querySelector("#telegram").value=e.data.telegram,document.querySelector("#instagram").value=e.data.instagram,document.querySelector("#facebook").value=e.data.facebook,document.querySelector(".Alert").style="display:block"})},a.Dollor=function(){var e={value:document.querySelector("#dataDollor").value};Object(g.C)(e).then(function(e){document.querySelector(".Alert").style="display:block"})},a.getDollors=function(){Object(g.n)().then(function(e){document.querySelector("#dataDollor").value=e.data.value})},a.closeAlert=function(){document.querySelector(".Alert").style="display: none"},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"handleFile",value:function(e){var t=e.target.files[0];console.log(e.target.files[0]),this.setState({file:t})}},{key:"handleFile2",value:function(e){var t=e.target.files[0];console.log(e.target.files[0]),this.setState({file2:t})}},{key:"componentDidMount",value:function(){this.getImaga(),this.getSubCategory(),this.getProduct1(),this.getCompanys(),this.getcategory(),this.getDollors()}},{key:"render",value:function(){var e=this;return m.a.createElement(c.a,{className:"DashboardPage",title:"uz"==this.state.lang1?"Bosh sahifa":"ru"==this.state.lang1?"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430":"Homepage",breadcrumbs:[{name:"".concat("uz"==this.state.lang1?"Bosh sahifa":"ru"==this.state.lang1?"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430":"Homepage"),active:!0}]},m.a.createElement(i.a,{className:"Dashboard"},m.a.createElement(d.a,{className:"Column-dashboard"},m.a.createElement("div",{class:"bg-info w-100 card12"},m.a.createElement("h1",null,this.state.product.length),m.a.createElement("p",null,"uz"==this.state.lang1?"Maxsulot":"ru"==this.state.lang1?"\u0422\u043e\u0432\u0430\u0440":"Product"))),m.a.createElement(d.a,{className:"Column-dashboard"},m.a.createElement("div",{className:"card12"},m.a.createElement("h1",null,this.state.category.length),m.a.createElement("p",null,"uz"==this.state.lang1?"Turlar":"ru"==this.state.lang1?"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f":"Category"))),m.a.createElement(d.a,{className:"Column-dashboard"},m.a.createElement("div",{className:"card12"},m.a.createElement("h1",null,this.state.subCategory.length),m.a.createElement("p",null,"uz"==this.state.lang1?"Qo`shimcha tur":"ru"==this.state.lang1?"\u041f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f":"SubCategory"))),m.a.createElement(d.a,{className:"Column-dashboard"},m.a.createElement("div",{className:"card12"},m.a.createElement("h1",null,this.state.aksiya.length),m.a.createElement("p",null,"uz"==this.state.lang1?"Aksiyalar":"ru"==this.state.lang1?"\u041f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435":"Promotion")))),m.a.createElement("div",{className:"InputGroup"},m.a.createElement("div",{className:"mt-3"},m.a.createElement("h5",null,"uz"==this.state.lang1?"Telefon raqam":"ru"==this.state.lang1?"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"Phone Number"),m.a.createElement("input",{type:"text",id:"phone",placeholder:"uz"==this.state.lang1?"":(this.state.lang1,"")})),m.a.createElement("div",{className:"mt-3"},m.a.createElement("h5",null,"uz"==this.state.lang1?"Jamoa":"ru"==this.state.lang1?"\u041a\u043e\u043c\u0430\u043d\u0434\u0430":"Team"),m.a.createElement("input",{type:"text",id:"team",placeholder:"uz"==this.state.lang1?"Jamoa":"ru"==this.state.lang1?"\u041a\u043e\u043c\u0430\u043d\u0434\u0430":"Team",requiered:!0})),m.a.createElement("div",{className:"mt-3"},m.a.createElement("h5",null,"uz"==this.state.lang1?"Tariximiz":"ru"==this.state.lang1?"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b":"Team Story"),m.a.createElement("input",{type:"text",id:"team_story",placeholder:"uz"==this.state.lang1?"Tariximiz":"ru"==this.state.lang1?"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b":"Team Story",requiered:!0})),m.a.createElement("div",{className:"mt-3"},m.a.createElement("h5",null,"uz"==this.state.lang1?"Uzunlik xaritadagi":"ru"==this.state.lang1?"\u0414\u043b\u0438\u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435":"Length is on the map"),m.a.createElement("input",{type:"text",id:"longitude",placeholder:"uz"==this.state.lang1?"Uzunlik xaritadagi":"ru"==this.state.lang1?"\u0414\u043b\u0438\u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435":"Length is on the map"})),m.a.createElement("div",{className:"mt-3"},m.a.createElement("h5",null,"uz"==this.state.lang1?"Kenglik xaritadagi":"ru"==this.state.lang1?"\u0428\u0438\u0440\u043e\u0442\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435":"Latitude on the map"),m.a.createElement("input",{type:"text",id:"latitude",placeholder:"uz"==this.state.lang1?"Kenglik xaritadagi":"ru"==this.state.lang1?"\u0428\u0438\u0440\u043e\u0442\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435":"Latitude on the map",requiered:!0})),m.a.createElement("div",{className:"mt-3"},m.a.createElement("h5",null,"uz"==this.state.lang1?"Kompaniya logotipi":"ru"==this.state.lang1?"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438":"Company logo"),m.a.createElement("input",{className:"d-block mt-2",onInput:function(t){return e.handleFile2(t)},type:"file",placeholder:"logo",name:"",id:"logo"})),m.a.createElement("div",{className:"mt-3"},m.a.createElement("h5",null,"uz"==this.state.lang1?"Biz haqimizda rasm":"ru"==this.state.lang1?"\u043a\u0430\u0440\u0442\u0438\u043d\u0430 \u043e \u043d\u0430\u0441":"Picture about us"),m.a.createElement("input",{type:"file",onInput:function(t){return e.handleFile(t)},id:"aboutImg",requiered:!0})),m.a.createElement("div",{className:"mt-3"},m.a.createElement("h5",null,"uz"==this.state.lang1?"Telegram":(this.state.lang1,"Telegram")),m.a.createElement("input",{type:"text",id:"telegram",requiered:!0})),m.a.createElement("div",{className:"mt-3"},m.a.createElement("h5",null,"uz"==this.state.lang1?"Instagram":(this.state.lang1,"Instagram")),m.a.createElement("input",{type:"text",id:"instagram",requiered:!0})),m.a.createElement("div",{className:"mt-3"},m.a.createElement("h5",null,"uz"==this.state.lang1?"Facebook":(this.state.lang1,"Facebook")),m.a.createElement("input",{type:"text",id:"facebook",requiered:!0}))),m.a.createElement("button",{className:"btn btn-primary mt-2 btn-send",onClick:function(){return e.putCompanys()}},"uz"==this.state.lang1?"Yuborish":"ru"==this.state.lang1?"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430":"Sending"),m.a.createElement("div",{className:"dollor12 mt-3"},m.a.createElement("h5",null,"Dollar kursi"),m.a.createElement("input",{className:"input-dollar",type:"number",id:"dataDollor"}),m.a.createElement("button",{onClick:function(){e.Dollor()},className:"btn btn-primary"},"uz"==this.state.lang1?"Qiymatni yuborish":"ru"==this.state.lang1?"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435":"Send value")),m.a.createElement("div",{className:"Alert"},m.a.createElement("div",{className:"d-flex p-2"},m.a.createElement("p",null,"Done"),m.a.createElement("div",{onClick:this.closeAlert,className:"colesealert ml-5"},m.a.createElement(h.a,null)))))}}]),t}(m.a.Component));t.default=p}}]);
//# sourceMappingURL=6.d4feb6f6.chunk.js.map