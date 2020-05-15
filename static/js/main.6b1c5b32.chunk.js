(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{180:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(57),l=t.n(r),o=t(3),s=t(4),m=t(6),i=t(5),d=(t(66),t(31)),u=t(7),E=t(58),p=t.n(E),b=(t(83),t(11)),v=t.n(b);var h=function(e){return c.a.createElement("div",{className:"case card text-white bg-dark mb-3 "},c.a.createElement("h3",{className:"card-header"},"Total Confirmed"),c.a.createElement("p",null,c.a.createElement(v.a,{end:e.caseConfirmed,delay:0,separator:",",duration:2})),c.a.createElement("p",null,(a=e.date,new Date(a).toDateString())),c.a.createElement("h6",null,"Numbers of people infected ",c.a.createElement("br",null)," from COVID-19"));var a};var f=function(e){return c.a.createElement("div",{className:"case card text-white bg-dark mb-3"},c.a.createElement("h2",{className:"card-header"},"Total Recovered"),c.a.createElement("p",null,c.a.createElement(v.a,{end:e.caseRecovered,delay:0,separator:",",duration:2})),c.a.createElement("p",null,(a=e.date,new Date(a).toDateString())),c.a.createElement("h6",null,"Numbers of people recovered",c.a.createElement("br",null)," from COVID-19"));var a};var O=function(e){return c.a.createElement("div",{className:"case card text-white bg-dark mb-3"},c.a.createElement("h2",{className:"card-header"},"Total Death"),c.a.createElement("p",null,c.a.createElement(v.a,{className:"card-text",end:e.caseDeath,delay:0,separator:",",duration:2})),c.a.createElement("p",{className:"card-text"},(a=e.date,new Date(a).toDateString())),c.a.createElement("h6",null,"Numbers of people infected ",c.a.createElement("br",null),"from COVID-19"));var a},j=t(59),N=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container  "},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 chart "},c.a.createElement(j.a,{options:{fontSize:50,maintainAspectRatio:!1,legend:{display:!1},title:{fontSize:18,display:!0,text:"Current Situation in ".concat(this.props.name)}},data:{labels:["Confirmed"," Recovered","Death"],datasets:[{fill:!0,borderColor:["white"],backgroundColor:["rgba(135,206,235)","rgba(152,251,152)","rgba(255,99,71)"],data:[this.props.caseConfirmedGraph,this.props.caseRecoveredGraph,this.props.caseDeathGraph]}]}}))))}}]),t}(n.Component),g=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("form",{autoComplete:"off",onSubmit:function(a){a.preventDefault();var t=document.getElementById("input").value;e.props.handleChange(t)}},c.a.createElement("center",null,c.a.createElement("input",{onChange:function(a){""===a.target.value&&e.props.handleBlur()},name:"input",type:"text",id:"input",required:!0,placeholder:"Search country..."}))))}}]),t}(n.Component),y=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-2"}),c.a.createElement("div",{className:"col-sm-8"}," ",c.a.createElement("center",null," ",c.a.createElement("h1",{style:{textIndent:50}},"C O V I D -19"))),c.a.createElement("div",{className:"col-sm-2"})))}}]),t}(n.Component),C=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid footer"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-4"}),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("center",null,c.a.createElement("p",null,c.a.createElement("b",null,"Developed By:Ishan Rijal")))),c.a.createElement("div",{className:"col-sm-4"})),c.a.createElement("center",null,c.a.createElement("i",{className:"fa fa-phone icon"},c.a.createElement("b",null," +977-9808578938")),c.a.createElement("i",{className:"fa fa-envelope contact icon"},c.a.createElement("b",null," ishanrijal6@gmail.com"))))}}]),t}(n.Component),k=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)("https://covid19.mathdro.id/api/"),o=Object(u.a)(l,1)[0],s=Object(n.useState)(" "),m=Object(u.a)(s,2),i=m[0],d=m[1],E=Object(n.useState)(" "),b=Object(u.a)(E,2),v=b[0],j=b[1],k=Object(n.useState)(" "),D=Object(u.a)(k,2),S=D[0],w=D[1],x=Object(n.useState)(" "),I=Object(u.a)(x,2),R=I[0],B=I[1],G=Object(n.useState)("World"),V=Object(u.a)(G,2),F=V[0],M=V[1],T=Object(n.useState)(" "),W=Object(u.a)(T,2),z=W[0],J=W[1],q=Object(n.useState)("World"),A=Object(u.a)(q,2),L=A[0],P=A[1];return Object(n.useEffect)((function(){p()("".concat(o).concat(z)).then((function(e){M(L),B(e.data.lastUpdate),d(e.data.confirmed.value),w(e.data.deaths.value),j(e.data.recovered.value),r(!0)})).catch((function(e){console.log(e),document.getElementById("errorMessage").style.display="block"}))}),[z]),c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement(y,null),t?c.a.createElement("div",null,c.a.createElement("div",{className:"container case-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-4"},c.a.createElement(h,{name:F,caseConfirmed:i,date:R})),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement(f,{name:F,caseRecovered:v,date:R})),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement(O,{name:F,caseDeath:S,date:R}))),c.a.createElement("div",{className:"container "},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-2"}),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(g,{handleChange:function(e){P(e),J("countries/".concat(e))},handleBlur:function(){J(""),P("World"),document.getElementById("errorMessage").style.display="none"}}),c.a.createElement("p",{id:"errorMessage"},"Please Enter valid Country")),c.a.createElement("div",{className:"col-sm-2"})))),c.a.createElement("div",null,c.a.createElement(N,{name:F,caseConfirmedGraph:i,caseRecoveredGraph:v,caseDeathGraph:S}))):c.a.createElement("p",null,"Loading...")),c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement(C,null)))},D={background:"#F7F7F7",text:"black"},S={background:"#121212",text:"black"},w=Object(d.a)(S,D),x=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{backgroundColor:w.background,color:w.text}},c.a.createElement(d.b,{light:D,dark:S}),c.a.createElement(k,null))}}]),t}(n.Component);l.a.render(c.a.createElement(x,null),document.getElementById("root"))},61:function(e,a,t){e.exports=t(180)},66:function(e,a,t){},83:function(e,a,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.6b1c5b32.chunk.js.map