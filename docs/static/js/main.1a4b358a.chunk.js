(this["webpackJsonpchildren-rights"]=this["webpackJsonpchildren-rights"]||[]).push([[0],{27:function(e,s,n){},28:function(e,s,n){},29:function(e,s,n){},31:function(e,s,n){},32:function(e,s,n){},41:function(e,s,n){},42:function(e,s,n){},43:function(e,s,n){},44:function(e,s,n){},45:function(e,s,n){},46:function(e,s,n){},47:function(e,s,n){},48:function(e,s,n){},49:function(e,s,n){},50:function(e,s,n){},51:function(e,s,n){},52:function(e,s,n){},53:function(e,s,n){},63:function(e,s,n){},64:function(e,s,n){},65:function(e,s,n){"use strict";n.r(s);var t=n(1),c=n.n(t),a=n(14),i=n.n(a),r=n(2),o=n(22),l=function(){return fetch("https://raw.githubusercontent.com/Celiamf/children-rights/main/src/data/country-info.json").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{name:e.country,id:e.id,img:e.flag,address:e.address_street,addressLink:e.address_link,phone:e.phone,email:e.email,website:e.website,passportDocuments:e.passport_documents,passportPrice:e.passport_price,passportForm:e.passport_onlineForm,passportPayment:e.passport_onlinePayment,passportAppointment:e.passport_onlineAppointment,passportInstructions:e.passport_instructions}}))}))},j=(n(27),n(28),n.p+"static/media/img_landing.e88d7535.svg"),d=(n(29),n(0)),b=function(e){return Object(d.jsx)("div",{className:"wrapper wrapper__".concat(e.className),children:e.children})},u=(n(31),function(e){var s=e.tag;return Object(d.jsx)(s,{className:"title title--".concat(e.className),children:e.text})});u.defaultProps={tag:"h1"};var h=u,m=(n(32),function(e){return Object(d.jsx)("p",{className:"paragraph ".concat(e.className),children:e.text})}),x=function(){return Object(d.jsxs)(b,{children:[Object(d.jsxs)("header",{className:"landing landing__header",children:[Object(d.jsx)("button",{className:"languageBtn",children:Object(d.jsx)("i",{className:"fas fa-language "})}),Object(d.jsx)("img",{src:j,className:"landing__img",alt:"Little people helping each other reach higher"})]}),Object(d.jsxs)("main",{className:"landing landing__main",children:[Object(d.jsxs)("section",{className:"landing landing__intro",children:[Object(d.jsx)(h,{text:"\xa1Hola!",className:"primary"}),Object(d.jsx)(m,{text:"Bienvenido/a a la app que te informa sobre tus derechos"})]}),Object(d.jsx)("section",{className:"landing landing__access",children:Object(d.jsx)(r.b,{to:"/WhereYouLive",className:"btnLink",children:"Tengo menos de 18 a\xf1os y estoy en Madrid"})})]})]})},O=(n(41),n.p+"static/media/icon_center.50c82cf6.svg"),p=(n(42),function(e){return Object(d.jsx)("button",{className:"btn",children:e.content})}),g=(n(43),function(e){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)(r.b,{to:e.to,className:"iconLink",children:Object(d.jsx)("i",{className:"fas fa-chevron-circle-left"})}),Object(d.jsx)(r.b,{to:"/",className:"iconLink",children:Object(d.jsx)("i",{className:"fas fa-home"})}),Object(d.jsx)(p,{content:Object(d.jsx)("i",{className:"fas fa-language"})}),Object(d.jsx)("small",{className:"copy",children:"@TusDerechos 2021"})]})}),f=function(){return Object(d.jsxs)(b,{children:[Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("header",{className:"whereYouLiveHeader",children:Object(d.jsx)("img",{src:O,alt:"Home with a person inside",className:"whereYouLiveHeader__img"})}),Object(d.jsxs)("main",{className:"whereYouLiveMain",children:[Object(d.jsx)(h,{tag:"h2",text:"\xbfD\xf3nde vives?",className:"secondary"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(r.b,{to:"/AtCenterMenu",className:"btnLink btnLink--primary",children:"En un centro de menores"}),Object(d.jsx)(r.b,{to:"/UnderConstruction",className:"btnLink btnLink--secondary",children:"En otro sitio"})]})]})]}),Object(d.jsx)(g,{to:"/"})]})},N=(n(44),n(45),function(e){return Object(d.jsx)("li",{className:"menuSection",children:Object(d.jsx)(r.b,{to:e.to,className:"navLink",children:e.text})})}),y=function(){return Object(d.jsxs)(b,{className:"white",children:[Object(d.jsxs)("main",{className:"atCenterMenuMain",children:[Object(d.jsx)("div",{className:"atCenterMenuMain__intro",children:Object(d.jsx)(h,{tag:"h2",text:"En el centro",className:"primaryMenu"})}),Object(d.jsxs)("ul",{className:"atCenterMenuMain__menu",children:[Object(d.jsx)(N,{text:"\xbfQu\xe9 es un centro o piso de menores?",to:"/UnderConstruction"}),Object(d.jsx)(N,{text:"Tengo un problema con mi edad",to:"/Age"}),Object(d.jsx)(N,{text:"Tengo un problema con mi residencia",to:"/UnderConstruction"}),Object(d.jsx)(N,{text:"Mis derechos como menor",to:"/UnderConstruction"})]})]}),Object(d.jsx)(g,{to:"/WhereYouLive"})]})},_=(n(46),function(){return Object(d.jsxs)(b,{className:"centerDef",children:[Object(d.jsx)("main",{}),Object(d.jsx)(g,{to:"/AtCenterMenu"})]})}),v=(n(47),n(48),n.p+"static/media/imgFiscal.ab38dfd8.svg"),C=n(10),q=n.n(C),L=(n(49),function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(r.b,{to:"/country/".concat(e.id),children:Object(d.jsxs)("li",{className:"countryCard",children:[Object(d.jsx)("img",{src:e.img,alt:e.name,className:"countryCard__img"}),Object(d.jsx)("h3",{className:" countryCard__name",children:e.name})]})})})}),M=function(e){var s=e.countries.map((function(e){return Object(d.jsx)(L,{id:e.id,name:e.name,img:e.img},e.id)}));return Object(d.jsxs)(b,{children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("header",{className:"ageHeader",children:[Object(d.jsxs)("p",{className:"ageHeader__content",children:["Si tienes ",Object(d.jsx)("strong",{children:"menos de 18 a\xf1os,"})," ",Object(d.jsx)("br",{}),"est\xe1s ",Object(d.jsx)("strong",{children:"solo/a en Espa\xf1a"})," ",Object(d.jsx)("br",{}),"y"," ",Object(d.jsxs)("strong",{children:["no tienes pasaporte,",Object(d.jsx)("br",{})]})," ","la Fiscal\xeda estudiar\xe1 tu edad para confirmar que eres menor y"," ",Object(d.jsx)("strong",{children:"protegerte"}),"."]}),Object(d.jsx)("img",{src:v,alt:"Drawing of a judge",className:"ageHeader__img"})]}),Object(d.jsxs)("main",{className:"ageMain",children:[Object(d.jsx)(q.a,{trigger:"\xbfC\xf3mo demuestro que soy menor?",children:Object(d.jsxs)("ol",{className:"ageSection",children:[Object(d.jsxs)("li",{children:["Averigua c\xf3mo conseguir tu ",Object(d.jsx)("strong",{children:"pasaporte"})," (mira m\xe1s abajo)"]}),Object(d.jsxs)("li",{children:["Pide a tu familia que te mande"," ",Object(d.jsx)("strong",{children:"fotos de los documentos"})," que tengas en tu pa\xeds"]}),Object(d.jsxs)("li",{children:["Pide a tu familia que te env\xede los"," ",Object(d.jsx)("strong",{children:"documentos originales por correo"})," o a trav\xe9s de personas de confianza"]})]})}),Object(d.jsx)(q.a,{trigger:"\xbfC\xf3mo consigo mi pasaporte?",children:Object(d.jsx)("ul",{className:"ageSection ageSection__passport",children:s})}),Object(d.jsx)(q.a,{trigger:"\xbfQu\xe9 derechos tengo durante el proceso?",children:Object(d.jsxs)("ul",{className:"ageSection",children:[Object(d.jsxs)("li",{className:"listIcon__rightTreatedAsMinor",children:["Tienes derecho a ser ",Object(d.jsx)("strong",{children:"tratado como menor"})," hasta que la Fiscal\xeda diga lo contrario"]}),Object(d.jsxs)("li",{className:"listIcon__rightLiveInCenter",children:["Tienes derecho a"," ",Object(d.jsx)("strong",{children:"vivir en un centro o piso de menores"})]}),Object(d.jsxs)("li",{className:"listIcon__rightAssistance",children:["Las personas que trabajan en el centro deben"," ",Object(d.jsx)("strong",{children:"ayudarte y acompa\xf1arte"})," en lo que necesites"]}),Object(d.jsxs)("li",{className:"listIcon__rightHealthCare",children:["Tienes derecho a la ",Object(d.jsx)("strong",{children:"atenci\xf3n sanitaria"})]})]})}),Object(d.jsx)(q.a,{trigger:"\xbfQu\xe9 va a pasar en la Fiscal\xeda?",children:Object(d.jsxs)("section",{className:"ageSection ageSection__attorney",children:[Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h3",{children:"Antes de ir"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Pide que te acompa\xf1e una/un ",Object(d.jsx)("strong",{children:"abogada/o"})," ","alguien de confianza adem\xe1s de tu educador/a. \xa1Es tu derecho!"]}),Object(d.jsxs)("li",{children:["Pide un/a ",Object(d.jsx)("strong",{children:"int\xe9rprete"})," que hable tu idioma materno"]}),Object(d.jsxs)("li",{children:["Revisa bien tus ",Object(d.jsx)("strong",{children:"documentos"}),". Es importante que conozcas bien cada uno de ellos, c\xf3mo los has conseguido y qu\xe9 informaci\xf3n contienen"]})]})]}),Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h3",{children:"Cuando est\xe9s all\xed"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Todo lo que digas all\xed se recoger\xe1 en un ",Object(d.jsx)("b",{children:"acta"})," y servir\xe1 para que la Fiscal\xeda decida si eres menor de edad o no."]}),Object(d.jsxs)("li",{children:["Por eso, si no entiendes algo de lo que dice la Fiscal o tu int\xe9rprete, ",Object(d.jsx)("b",{children:"\xa1dilo!"})]}),Object(d.jsxs)("li",{children:["Te preguntar\xe1n sobre:",Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"tu nombre y apellido, fecha de nacimiento y el nombre de tus padres"}),Object(d.jsx)("li",{children:"tus documentos"}),Object(d.jsx)("li",{children:"el viaje desde tu pa\xeds a Espa\xf1a"}),Object(d.jsx)("li",{children:"tu estancia en Espa\xf1a"})]})]}),Object(d.jsxs)("li",{children:["Pueden preguntarte si aceptas hacerte"," ",Object(d.jsx)("strong",{children:"pruebas m\xe9dicas"}),". Tienes derecho a decir que"," ",Object(d.jsx)("b",{children:"NO"}),". Ninguna prueba m\xe9dica puede decir con exactitud cu\xe1l es tu fecha de nacimiento."," ",Object(d.jsx)("strong",{children:"Tu documentaci\xf3n es suficiente para demostrar que eres menor de edad"}),"."]})]})]}),Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h3",{children:"Importante"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Si la Polic\xeda puso mal tu fecha de nacimiento o tu nombre cuando entraste en Espa\xf1a, ",Object(d.jsx)("b",{children:"\xa1dilo!"})]}),Object(d.jsxs)("li",{children:["Si al entrar en Espa\xf1a ten\xedas miedo y dijiste que eras mayor, ",Object(d.jsx)("b",{children:"\xa1dilo!"})]}),Object(d.jsxs)("li",{children:["Si alguna vez has vivido en un Centro de Menores,"," ",Object(d.jsx)("b",{children:"\xa1dilo!"})]}),Object(d.jsxs)("li",{children:["Si tienes documentos en tu pa\xeds y no has podido traerlos,"," ",Object(d.jsx)("b",{children:"\xa1expl\xedcalo!"})]})]})]})]})}),Object(d.jsxs)(q.a,{trigger:"La decisi\xf3n de la Fiscal\xeda",children:[Object(d.jsxs)("header",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"\xa1Paciencia!"})," La Fiscal\xeda puede tardar varias semanas o meses en responder."]}),Object(d.jsxs)("p",{children:["La decisi\xf3n se llama ",Object(d.jsx)("strong",{children:"decreto"}),", y en \xe9l la Fiscal\xeda puede decir que eres:"]})]}),Object(d.jsxs)("section",{className:"ageSection ageSection__attorney",children:[Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h3",{className:"attorneyDecision_yes",children:"Menor"}),Object(d.jsx)("p",{children:"\xa1Enhorabuena!"}),Object(d.jsxs)("p",{children:["Ahora el Estado espa\xf1ol tiene el deber de protegerte y de garantizar tus"," ",Object(d.jsx)("span",{children:Object(d.jsx)(r.b,{to:"/UnderConstruction",className:"textLink",children:"derechos"})})," ","hasta que cumplas 18 a\xf1os."]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"\xa1Atenci\xf3n!"})," Si tu edad y la edad del decreto de la Fiscal\xeda son diferentes, tienes 2 meses para discutir la decisi\xf3n. Habla con"," ",Object(d.jsx)(r.b,{to:"/UnderConstruction",className:"textLink",children:"un/a abogado/a"})," ","para que te ayude."]})]}),Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h3",{className:"attorneyDecision_no",children:"Mayor"}),Object(d.jsxs)("p",{children:["La Fiscal\xeda ha decidido que eres"," ",Object(d.jsx)("strong",{children:"mayor de edad"}),"."]}),Object(d.jsx)("p",{children:"Tendr\xe1s que salir del centro de menores."}),Object(d.jsxs)("p",{children:["Antes de irte, deben darte la"," ",Object(d.jsx)("strong",{children:"resoluci\xf3n administrativa de baja del Sistema de Protecci\xf3n"}),", que es el documento que dice que te tienes que ir. Si se niegan a d\xe1rtela,"," ",Object(d.jsx)(r.b,{to:"/UnderConstruction",className:"textLink",children:"p\xeddela por escrito"}),"."]}),Object(d.jsxs)("p",{children:["Para encontrar un sitio donde quedarte,"," ",Object(d.jsx)(r.b,{to:"/UnderConstruction",className:"textLink",children:"busca ayuda aqu\xed."})]}),Object(d.jsxs)("p",{children:["Si todav\xeda quieres seguir defendiendo tu minor\xeda de edad,"," ",Object(d.jsx)(r.b,{to:"/UnderConstruction",className:"textLink",children:"busca ayuda aqu\xed."})]})]})]})]})]})]}),Object(d.jsx)(g,{to:"/AtCenterMenu"})]})},k=(n(50),function(){return Object(d.jsxs)(b,{className:"residence",children:[Object(d.jsx)("main",{}),Object(d.jsx)(g,{to:"/AtCenterMenu"})]})}),S=(n(51),n.p+"static/media/constructing.6d2bfe74.svg"),A=function(){return Object(d.jsxs)(b,{className:"twoRowGrid",children:[Object(d.jsxs)("main",{className:"underConstructionMain",children:[Object(d.jsx)("img",{src:S,alt:"Woman coding",className:"underConstructionMain__img"}),Object(d.jsx)(m,{className:"underConstructionIntro__subtitle",text:"A\xfan estamos trabajando en esta p\xe1gina"})]}),Object(d.jsx)(g,{to:"/AtCenterMenu"})]})},w=(n(52),n.p+"static/media/icon-close.4b571443.svg"),E=(n(53),function(){return Object(d.jsx)(r.b,{to:"/Age",className:"closeModalBtn","aria-label":"Go back to list",title:"Go back to list",children:Object(d.jsx)("img",{src:w,alt:"Cerrar",className:"closeIcon"})})}),P=n(17),F=n.n(P);F.a.setAppElement("#root");var T=function(e){var s=e.country.passportDocuments.map((function(e){if(""!==e)return Object(d.jsx)("li",{children:e})})),n=e.country.passportInstructions.map((function(e){if(""!==e)return Object(d.jsx)("li",{children:e})}));return console.log({props:e}),Object(d.jsxs)(F.a,{isOpen:"true",className:"modalContainer",children:[Object(d.jsx)(E,{}),Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("section",{className:"countrySection",children:[Object(d.jsx)("img",{src:e.country.img,alt:"".concat(e.country.name," flag"),className:"countryFlag"}),Object(d.jsx)("h2",{children:e.country.name})]}),Object(d.jsxs)("section",{className:"embassySection",children:[Object(d.jsx)("h2",{className:"sectionTitle",children:"Embajada"}),Object(d.jsxs)("div",{className:"embassyList",children:[Object(d.jsx)("h3",{children:"Direcci\xf3n:"}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:e.country.addressLink,target:"_blank",title:"Direcci\xf3n de la embajada en Google",className:"textLink",children:e.country.address})}),Object(d.jsx)("h3",{children:"Tel\xe9fono:"}),Object(d.jsx)("span",{children:e.country.phone}),Object(d.jsx)("h3",{children:"E-mail: "}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:"mailto:".concat(e.country.email),className:"textLink",children:e.country.email})}),Object(d.jsx)("h3",{children:"Web:"}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:e.country.website,target:"_blank",title:"Visita la web de la Embajada",className:"textLink",children:"Visita su web"})})]})]})]}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{className:"sectionTitle",children:"Pasaporte"}),Object(d.jsxs)("div",{className:"passportSection",children:[Object(d.jsxs)("div",{className:"passportRequirements",children:[Object(d.jsx)("h3",{children:"Documentaci\xf3n"}),Object(d.jsx)("ul",{className:"passportRequirements__list",children:s})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Precio"}),Object(d.jsx)("span",{className:"passportPrice",children:e.country.passportPrice})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"M\xe1s informaci\xf3n"}),Object(d.jsxs)("div",{className:"moreInfoWrapper",children:[Object(d.jsx)("div",{className:"warningSign"}),Object(d.jsx)("ul",{className:"moreInfoList",children:n})]})]})]})]})]})},I=n(3);n(63);var D=function(){var e=Object(t.useState)([]),s=Object(o.a)(e,2),n=s[0],c=s[1];return Object(t.useEffect)((function(){l().then((function(e){c(e)}))}),[]),n.sort((function(e,s){var n=e.name.toUpperCase(),t=s.name.toUpperCase();return n<t?-1:n>t?1:0})),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(I.c,{children:[Object(d.jsx)(I.a,{exact:!0,path:"/",component:x}),Object(d.jsx)(I.a,{path:"/WhereYouLive",component:f}),Object(d.jsx)(I.a,{path:"/AtCenterMenu",component:y}),Object(d.jsx)(I.a,{path:"/CenterDef",component:_}),Object(d.jsx)(I.a,{path:"/Age",children:Object(d.jsx)(M,{countries:n})}),Object(d.jsx)(I.a,{path:"/Residence",component:k}),Object(d.jsx)(I.a,{path:"/UnderConstruction",component:A}),Object(d.jsx)(I.a,{exact:!0,path:"/country/:id",render:function(e){var s=parseInt(e.match.params.id),t=n.find((function(e){return e.id===s}));return Object(d.jsx)(T,{country:t})}})]})})};n(64);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(D,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.1a4b358a.chunk.js.map