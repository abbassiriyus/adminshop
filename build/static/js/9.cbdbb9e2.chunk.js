(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{150:function(e,t,a){"use strict";var n=a(4),l=a(6),r=a(2),i=a.n(r),o=a(1),s=a.n(o),c=a(5),u=a.n(c),d=a(3),m={tag:d.m,className:s.a.string,cssModule:s.a.object},h=function(e){var t=e.className,a=e.cssModule,r=e.tag,o=Object(l.a)(e,["className","cssModule","tag"]),s=Object(d.i)(u()(t,"card-header"),a);return i.a.createElement(r,Object(n.a)({},o,{className:s}))};h.propTypes=m,h.defaultProps={tag:"div"},t.a=h},151:function(e,t,a){"use strict";var n=a(4),l=a(6),r=a(2),i=a.n(r),o=a(1),s=a.n(o),c=a(5),u=a.n(c),d=a(3),m={className:s.a.string,cssModule:s.a.object,size:s.a.string,bordered:s.a.bool,borderless:s.a.bool,striped:s.a.bool,inverse:Object(d.f)(s.a.bool,'Please use the prop "dark"'),dark:s.a.bool,hover:s.a.bool,responsive:s.a.oneOfType([s.a.bool,s.a.string]),tag:d.m,responsiveTag:d.m,innerRef:s.a.oneOfType([s.a.func,s.a.string,s.a.object])},h=function(e){var t=e.className,a=e.cssModule,r=e.size,o=e.bordered,s=e.borderless,c=e.striped,m=e.inverse,h=e.dark,g=e.hover,p=e.responsive,E=e.tag,y=e.responsiveTag,v=e.innerRef,z=Object(l.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),b=Object(d.i)(u()(t,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!s&&"table-borderless",!!c&&"table-striped",!(!h&&!m)&&"table-dark",!!g&&"table-hover"),a),f=i.a.createElement(E,Object(n.a)({},z,{ref:v,className:b}));if(p){var w=!0===p?"table-responsive":"table-responsive-"+p;return i.a.createElement(y,{className:w},f)}return f};h.propTypes=m,h.defaultProps={tag:"table",responsiveTag:"div"},t.a=h},165:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return N});var n=a(12),l=a(13),r=a(15),i=a(14),o=a(16),s=a(2),c=a.n(s),u=a(155),d=a(156),m=a(157),h=a(150),g=a(158),p=a(151),E=a(167),y=a(159),v=a(160),z=a(161),b=a(131),f=a(144),w=a(36),q=a(145),S=(a(146),a(143),a(63)),N=(S.lang,S.language1,function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={file:null,data:[],category:[],subcategory:[],modal:!1,editmodal:!1,id1:{},delete1:"",lang1:null==localStorage.getItem("lang")?"ru":localStorage.getItem("lang")},a.getCategory=function(){Object(w.k)().then(function(e){a.setState({category:e.data})})},a.getSubCategory=function(){Object(w.v)().then(function(e){a.setState({subcategory:e.data})})},a.handleShow=function(){a.setState({modal:!0})},a.handleClose=function(){a.setState({modal:!1})},a.edittoggle1=function(){a.setState({editmodal:!1})},a.edittoggle=function(e){Object(w.s)(e).then(function(e){document.querySelector("#editnewTitleEn").value=e.data.title_en,document.querySelector("#editnewTitleRu").value=e.data.title_ru,document.querySelector("#editnewTitleUz").value=e.data.title_uz,document.querySelector("#editnewPromotion").value=e.data.percentage,document.querySelector("#editnewDescriptionEn").value=e.data.description_en,document.querySelector("#editnewDescriptionRu").value=e.data.description_ru,document.querySelector("#editnewDescriptionUz").value=e.data.description_uz,document.querySelector("#editstartPromotion").value=e.data.date_from,document.querySelector("#editendPromotion").value=e.data.date_till}),a.setState({editmodal:!0,id1:e})},a.postPromotion=function(){var e={slug:document.querySelector("#newTitleEn").value,title_en:document.querySelector("#newTitleEn").value,title_ru:document.querySelector("#newTitleRu").value,title_uz:document.querySelector("#newTitleUz").value,percentage:Number(document.querySelector("#newPromotion").value),description_en:document.querySelector("#newDescriptionEn").value,description_ru:document.querySelector("#newDescriptionRu").value,description_uz:document.querySelector("#newDescriptionUz").value,date_from:document.querySelector("#startPromotion").value,date_till:document.querySelector("#endPromotion").value,product:"string",image:a.state.file};Object(w.z)(e).then(function(e){a.getPromotion(),document.querySelector(".Alert").style="display: block"}),a.handleClose()},a.putPromotions=function(e){if(0!==document.querySelector("#file").value.length)var t={title_uz:document.querySelector("#editnewTitleUz").value,title_ru:document.querySelector("#editnewTitleRu").value,title_en:document.querySelector("#editnewTitleEn").value,percentage:Number(document.querySelector("#editnewPromotion").value),description_en:document.querySelector("#editnewDescriptionEn").value,description_ru:document.querySelector("#editnewDescriptionRu").value,description_uz:document.querySelector("#editnewDescriptionUz").value,date_from:document.querySelector("#editstartPromotion").value,date_till:document.querySelector("#editendPromotion").value,product:"string",image:a.state.file};else t={title_uz:document.querySelector("#editnewTitleUz").value,title_ru:document.querySelector("#editnewTitleRu").value,title_en:document.querySelector("#editnewTitleEn").value,percentage:Number(document.querySelector("#editnewPromotion").value),description_en:document.querySelector("#editnewDescriptionEn").value,description_ru:document.querySelector("#editnewDescriptionRu").value,description_uz:document.querySelector("#editnewDescriptionUz").value,date_from:document.querySelector("#editstartPromotion").value,date_till:document.querySelector("#editendPromotion").value,product:"string"};Object(w.E)(a.state.id1,t).then(function(e){a.getPromotion(),a.edittoggle1(),document.querySelector(".Alert").style="display: block"}).catch(function(e){})},a.closeAlert=function(){document.querySelector(".Alert").style="display: none"},a.getPromotion=function(){Object(w.t)().then(function(e){a.setState({data:e.data})})},a.openModal1=function(e){document.querySelector(".ModalDelete1").style="top: 0",document.querySelector(".ModalColumn").style="top: 30%",a.setState({delete1:e})},a.CloseModal1=function(){document.querySelector(".ModalDelete1").style="top: -100%",document.querySelector(".ModalColumn").style="top: -100%"},a.deletePromotion=function(e){Object(w.h)(e).then(function(e){a.getPromotion()}),a.CloseModal1()},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"handleFile",value:function(e){e.target.files[0];this.setState({file:e.target.files[0]})}},{key:"componentDidMount",value:function(){this.getPromotion()}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{title:"uz"==this.state.lang1?"Jadvallar":"ru"==this.state.lang1?"\u0422\u0430\u0431\u043b\u0438\u0446\u044b":"Tables",breadcrumbs:[{name:"".concat("uz"==localStorage.getItem("lang")?"jadvallar":"en"==localStorage.getItem("lang")?"tables":"\u0442\u0430\u0431\u043b\u0438\u0446\u044b"),active:!0}],className:"TablePage"},c.a.createElement(u.a,null,c.a.createElement(d.a,{className:"Table-PromotionPage"},c.a.createElement(m.a,{className:"mb-3"},c.a.createElement(h.a,null,c.a.createElement("button",{onClick:function(){return e.handleShow()},className:"btn btn-primary"}," ","uz"==this.state.lang1?"Yaratmoq":"ru"==this.state.lang1?"\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c":"Create"," ")),c.a.createElement(g.a,null,c.a.createElement(p.a,{responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," ","uz"==this.state.lang1?"Rasm":"ru"==this.state.lang1?"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435":"Image  ","  "),c.a.createElement("th",null," ","uz"==this.state.lang1?"Reklama nomi":"ru"==this.state.lang1?"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0430\u043a\u0446\u0438\u0438":"Promotion name"," "),c.a.createElement("th",null," ","uz"==this.state.lang1?"Rag'batlantirish tavsifi":"ru"==this.state.lang1?"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0430\u043a\u0446\u0438\u0438":"Description of promotion"," "),c.a.createElement("th",null," ","uz"==this.state.lang1?"Foiz":"ru"==this.state.lang1?"\u041f\u0440\u043e\u0446\u0435\u043d\u0442":"Percentage"," "),c.a.createElement("th",null," ","uz"==this.state.lang1?"Tahrirlash":"ru"==this.state.lang1?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"Edit "," "),c.a.createElement("th",null," ","uz"==this.state.lang1?"O`chirish":"ru"==this.state.lang1?"\u0443\u0434\u0430\u043b\u0438\u0442\u044c":"Delete"," "))),this.state.data.map(function(t){return c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},c.a.createElement("img",{className:"w-10 h-10",style:{width:"300px",height:"150px"},src:t.image,alt:"Card image"})),c.a.createElement("td",null,t.title),c.a.createElement("td",null,t.description),c.a.createElement("td",null,t.percentage),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.edittoggle(t.id)}}," ","uz"==e.state.lang1?"Tahrirlash":"ru"==e.state.lang1?"\u0418\u0437\u043c\u0438\u043d\u0438\u0442\u044c":"Edit "," ")),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-danger ml-3",onClick:function(){return e.openModal1(t.id)}}," ","uz"==e.state.lang1?"O`chirish":"ru"==e.state.lang1?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c":"Delete"," "))))}),"   "))))),c.a.createElement(E.a,{isOpen:this.state.modal},c.a.createElement(y.a,null," ","uz"==this.state.lang1?"Modal sarlavha":"ru"==this.state.lang1?"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435":"Modal title"," "),c.a.createElement(v.a,null,c.a.createElement("div",{className:"mb-2"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya nomini o'zgartirish(uz)":"ru"==this.state.lang1?"\u0418\u043c\u044f \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b(uz)":"Name promotions(uz)"," "),c.a.createElement("input",{type:"text",id:"newTitleUz",placeholder:"New card name(uz)",required:!0})),c.a.createElement("div",{className:"mb-2"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya nomini o'zgartirish(en)":"ru"==this.state.lang1?"\u0418\u043c\u044f \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b(en)":"Name promotions(en)"," "),c.a.createElement("input",{type:"text",id:"newTitleEn",placeholder:"New card name(en)",required:!0})),c.a.createElement("div",{className:"mb-2"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya nomini o'zgartirish(ru)":"ru"==this.state.lang1?"\u0418\u043c\u044f \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b(ru)":"Name promotions(ru)"," "),c.a.createElement("input",{type:"text",id:"newTitleRu",placeholder:"New card name(ru)",required:!0})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya foizi":"ru"==this.state.lang1?"\u041f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b":"Percentage promotion"," "),c.a.createElement("input",{type:"number",id:"newPromotion",placeholder:"Promotion of new card",requiered:!0})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Yangi kartaning tavsifi(uz)":"ru"==this.state.lang1?"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b(uz)":"Description of new card(uz)"," "),c.a.createElement("input",{type:"text",id:"newDescriptionUz",placeholder:"Description card category(Uz)",requiered:!0})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Yangi kartaning tavsifi(en)":"ru"==this.state.lang1?"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b(ru)":"Description of new card(ru)"," "),c.a.createElement("input",{type:"text",id:"newDescriptionEn",placeholder:"Description card category(En)",requiered:!0})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Yangi kartaning tavsifi(ru)":"ru"==this.state.lang1?"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b(en)":"Description of new card(en)"," "),c.a.createElement("input",{type:"text",id:"newDescriptionRu",placeholder:"Description card category(Ru)",requiered:!0})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya start vaqti":"ru"==this.state.lang1?"\u041d\u0430\u0447\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b":"Start promotion of new card"," "),c.a.createElement("input",{type:"date",id:"startPromotion"})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya tugash vaqti":"ru"==this.state.lang1?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b":"End promotion of new card"," "),c.a.createElement("input",{type:"date",id:"endPromotion"})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Yangi aksiya tasviri":"ru"==this.state.lang1?"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 ":"Image of new promotion"," "),c.a.createElement("input",{type:"file",onInput:function(t){return e.handleFile(t)},id:"file",requiered:!0}))),c.a.createElement(z.a,null,c.a.createElement(b.a,{color:"primary",onClick:this.postPromotion},"uz"==this.state.lang1?"saqlash":"ru"==this.state.lang1?"\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"save"),c.a.createElement(b.a,{color:"secondary",onClick:this.handleClose},"uz"==this.state.lang1?"Bekor qilish":"ru"==this.state.lang1?"\u041e\u0442\u043c\u0435\u043d\u0430":"Cancel"))),c.a.createElement(E.a,{isOpen:this.state.editmodal},c.a.createElement(y.a,null," ","uz"==this.state.lang1?"Tahrirlash":"ru"==this.state.lang1?"\u0418\u0437\u043c\u0438\u043d\u0438\u0442\u044c":"Edit "," "),c.a.createElement(v.a,null,c.a.createElement("div",{className:"mb-2"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya nomini o`zgartirish(uz)":"ru"==this.state.lang1?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u043c\u043e\u0430\u043a\u0446\u0438\u0438(uz)":"Edit promotion name(uz)"," "),c.a.createElement("input",{type:"text",id:"editnewTitleUz",placeholder:"New card name(uz)",required:!0})),c.a.createElement("div",{className:"mb-2"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya nomini o`zgartirish(en)":"ru"==this.state.lang1?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u043c\u043e\u0430\u043a\u0446\u0438\u0438(en)":"Edit promotion name(en)"," "),c.a.createElement("input",{type:"text",id:"editnewTitleEn",placeholder:"New card name(en)",required:!0})),c.a.createElement("div",{className:"mb-2"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya nomini o`zgartirish(ru)":"ru"==this.state.lang1?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u043c\u043e\u0430\u043a\u0446\u0438\u0438(ru)":"Edit promotion name(ru)","  "),c.a.createElement("input",{type:"text",id:"editnewTitleRu",placeholder:"New card name(ru)",required:!0})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Foizni o`zgartirish":"ru"==this.state.lang1?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u043d\u0442":"Edit percentage"," "),c.a.createElement("input",{type:"number",id:"editnewPromotion",placeholder:"Promotion of new card",requiered:!0})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya tavsifini tahrirlash(uz)":"ru"==this.state.lang1?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0430\u043a\u0446\u0438\u0438(uz)":"Edit description of promotion(uz)"," "),c.a.createElement("input",{type:"text",id:"editnewDescriptionUz",placeholder:"Description card category(Uz)",requiered:!0})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya tavsifini tahrirlash(en)":"ru"==this.state.lang1?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0430\u043a\u0446\u0438\u0438(en)":"Edit description of promotion(en)"," "),c.a.createElement("input",{type:"text",id:"editnewDescriptionEn",placeholder:"Description card category(En)",requiered:!0})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya tavsifini tahrirlash(ru)":"ru"==this.state.lang1?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0430\u043a\u0446\u0438\u0438(ru)":"Edit description of promotion(ru)","  "),c.a.createElement("input",{type:"text",id:"editnewDescriptionRu",placeholder:"Description card category(Ru)",requiered:!0})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya boshlanishini o'zgartirish":"ru"==this.state.lang1?"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f":"Edit start this promotion"," "),c.a.createElement("input",{type:"date",id:"editstartPromotion"})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Aksiya tugashini o'zgartirish":"ru"==this.state.lang1?"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c  \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f":"Edit start this promotion"," "),c.a.createElement("input",{type:"date",id:"editendPromotion"})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",null," ","uz"==this.state.lang1?"Ushbu aksiyaning rasmini o`zgartirish":"ru"==this.state.lang1?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0439 \u0430\u043a\u0446\u0438\u0438":"Edit image of this promotion"," "),c.a.createElement("input",{type:"file",onInput:function(t){return e.handleFile(t)},id:"file",requiered:!0}))),c.a.createElement(z.a,null,c.a.createElement(b.a,{color:"primary",onClick:this.putPromotions},"uz"==this.state.lang1?"saqlash":"ru"==this.state.lang1?"\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"save"),c.a.createElement(b.a,{color:"secondary",onClick:this.edittoggle1},"uz"==this.state.lang1?"Bekor qilish":"ru"==this.state.lang1?"\u041e\u0442\u043c\u0435\u043d\u0430":"Cancel"))),c.a.createElement("div",{className:"Alert"},c.a.createElement("div",{className:"d-flex p-2"},c.a.createElement("p",null,"Done"),c.a.createElement("div",{onClick:this.closeAlert,className:"colesealert ml-5"},c.a.createElement(q.a,null))))),c.a.createElement("div",{className:"ModalDelete1"},c.a.createElement("div",{className:"ModalColumn"},c.a.createElement("h2",null," ","uz"==this.state.lang1?"Bu o`chirilsinmi?":"ru"==this.state.lang1?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e?":"Delete this?"," "),c.a.createElement("div",{className:"ButtonsModalDelete"},c.a.createElement("button",{className:"btn btn-danger ml-3",onClick:function(){return e.deletePromotion(e.state.delete1)}},"uz"==this.state.lang1?"O`chirish":"ru"==this.state.lang1?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c":"Delete"),c.a.createElement("button",{className:"btn btn-warning",onClick:this.CloseModal1}," ","uz"==this.state.lang1?"Bekor qilish":"ru"==this.state.lang1?"\u041e\u0442\u043c\u0435\u043d\u0430":"Cancel"," ")))))}}]),t}(s.Component))}}]);
//# sourceMappingURL=9.cbdbb9e2.chunk.js.map