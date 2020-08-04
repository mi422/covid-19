(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{101:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),s=(a(99),a(24)),l=a.n(s),i=a(35),u=a(15),m=a(237),f=a(238),d=a(239),v=a(231),p=a(235),h=a(54),E=(a(101),a(236));var b=function(e){var t=e.title,a=e.cases,n=e.isRed,r=e.isBlack,o=e.active,s=e.total,l=Object(h.a)(e,["title","cases","isRed","isBlack","active","total"]);return c.a.createElement(v.a,{onClick:l.onClick,className:"infoBox ".concat(o&&"infoBox--selected","\n             ").concat(n&&"infoBox--red"," ").concat(r&&"infoBox--black")},c.a.createElement(p.a,null,c.a.createElement(E.a,{className:"infoBox__title",color:"textSecondary"},t),c.a.createElement("h2",{className:"infoBox__cases ".concat(!n&&"infoBox__cases--green","\n                 ").concat(r&&"infoBox__cases--blacky")},a),c.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},s," Total")))},y=(a(105),a(242)),O=a(243),g=a(87),j=a(17),x=a.n(j),w=a(240),N=a(241),_={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"black",multiplier:2e3}},k=function(e){var t=Object(g.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},C=function(e){return e?"+".concat(x()(e).format("0.0a")):"+0"};var B=function(e){var t=e.countries,a=e.casesType,n=e.center,r=e.zoom;return c.a.createElement("div",{className:"map"},c.a.createElement(y.a,{center:n,zoom:r},c.a.createElement(O.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:_[t].hex,fillColor:_[t].hex,radius:Math.sqrt(e[t])*_[t].multiplier},c.a.createElement(N.a,null,c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info-name"},e.country),c.a.createElement("div",{className:"info-confirmed"},"Cases: ",x()(e.cases).format("0,0")),c.a.createElement("div",{className:"info-recovered"},"Recovered: ",x()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info-deaths"},"Deaths: ",x()(e.deaths).format("0,0")))))}))}(t,a)))};a(106);var S=function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return c.a.createElement("tr",null,c.a.createElement("td",null,t),c.a.createElement("td",null,c.a.createElement("strong",null,x()(a).format("0,0"))))})))},I=a(86),R={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return x()(e).format("0a")}}}]}},T=function(e,t){var a,n=[];for(var c in e.cases){if(a){var r={x:c,y:e[t][c]-a};n.push(r)}a=e[t][c]}return n};var M=function(e){var t=e.casesType,a=Object(h.a)(e,["casesType"]),r=Object(n.useState)({}),o=Object(u.a)(r,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=T(e,t);m(a),console.log(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),c.a.createElement("div",{className:a.className},(null===s||void 0===s?void 0:s.length)>0&&c.a.createElement(I.Line,{data:{datasets:[{backgroundColor:"rgba(204, 10, 52, 0.5)",borderColor:"#CC1034",data:s}]},options:R}))};a(203),a(204);var A=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],E=s[1],y=Object(n.useState)({}),O=Object(u.a)(y,2),g=O[0],j=O[1],x=Object(n.useState)([]),w=Object(u.a)(x,2),N=w[0],_=w[1],I=Object(n.useState)({lat:34.80746,lng:-40.4796}),R=Object(u.a)(I,2),T=R[0],A=R[1],D=Object(n.useState)(3),z=Object(u.a)(D,2),W=z[0],L=z[1],Y=Object(n.useState)([]),F=Object(u.a)(Y,2),J=F[0],U=F[1],q=Object(n.useState)("cases"),K=Object(u.a)(q,2),V=K[0],$=K[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){j(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=k(e);_(a),U(e),r(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var G=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,E(a),n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){E(a),j(e),A([e.countryInfo.lat,e.countryInfo.long]),L(4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("COUNTRY INFO >>>>",g),c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",null,"OUMAIMA'S COVID-19 TRACKER"),c.a.createElement(m.a,{className:"app__dropdown"},c.a.createElement(f.a,{variant:"outlined",onChange:G,value:h},c.a.createElement(d.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return c.a.createElement(d.a,{value:e.value},e.name)}))))),c.a.createElement("div",{className:"app__stats"},c.a.createElement(b,{active:"cases"===V,isRed:!0,onClick:function(e){return $("cases")},title:"Coronavirus Cases",cases:C(g.todayCases),total:C(g.cases)}),c.a.createElement(b,{active:"recovered"===V,onClick:function(e){return $("recovered")},title:"Recovered",cases:C(g.todayRecovered),total:C(g.recovered)}),c.a.createElement(b,{active:"deaths"===V,isBlack:!0,onClick:function(e){return $("deaths")},title:"Deaths",cases:C(g.todayDeaths),total:C(g.deaths)})),c.a.createElement(B,{countries:J,casesType:V,center:T,zoom:W})),c.a.createElement(v.a,{className:"app__right"},c.a.createElement(p.a,null,c.a.createElement("h3",null,"Live cases by country"),c.a.createElement(S,{countries:N}),c.a.createElement("h3",{className:"app__graphTitle"},"Worldwide new ",V),c.a.createElement(M,{className:"app__graph",casesType:V}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.4e0400d7.chunk.js.map