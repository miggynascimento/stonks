(this.webpackJsonpstonks=this.webpackJsonpstonks||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},199:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),o=t.n(i),c=(t(100),t(101),t(61)),l=t(22),s=t(23),p=t(3),u=t(243),m=t(254),d=t(258),g=t(256),f=t(255),h=t(246),E=t(257),b=t(90),v=t.n(b),w=t(259),x=t(241),y=t(242),k=t(84),B=t.n(k),C=t(244),S=t(245),O=t(86),I=t.n(O),N=t(87),j=t.n(N),P=t(85),D=t.n(P),M=t(48),z=t(247),H=Object(u.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(l.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{}}})),J=function(e){var a=e.open,t=e.handleDrawerOpen,n=H();return r.a.createElement(C.a,{position:"absolute",className:Object(p.a)(n.appBar,a&&n.appBarShift)},r.a.createElement(S.a,{className:n.toolbar},r.a.createElement(h.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:t,className:Object(p.a)(n.menuButton,a&&n.menuButtonHidden)},r.a.createElement(I.a,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:D.a,style:{width:50,height:50}}),r.a.createElement(M.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:n.title},"Boosted.Stonks Viewer \ud83d\udcc8")),r.a.createElement(h.a,{color:"inherit"},r.a.createElement(z.a,{badgeContent:4,color:"secondary"},r.a.createElement(j.a,null)))))},T=t(253),W=t(201),$=t(88),F=function(e){var a=e.stockData,t=a.opportunities;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{data:function(e){return{backgroundColor:e.getContext("2d").createLinearGradient(0,0,100,0),labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"black",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBackgroundColor:"#fff",pointBorderWidth:10,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a.prices||[],pointBorderColor:function(e){var a=e.dataIndex;return t.buyIndices.includes(a)?"green":t.exitIndices.includes(a)?"red":"black"}}]}},options:{legend:{display:!1}},tooltip:!0}),r.a.createElement("br",null))};function R(e){return r.a.createElement(M.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}var A=Object(u.a)({depositContext:{flex:1}});function G(e){var a=e.title,t=e.amount,n=A();return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null,a),r.a.createElement(M.a,{component:"p",variant:"h4"},t),r.a.createElement(M.a,{color:"textSecondary",className:n.depositContext},"as of Today"))}var L=t(248),X=t(252),U=t(251),V=t(249),q=t(250),K=t(45),Q=t.n(K);function Y(e){var a=e.stockData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null,"Trades"),r.a.createElement(L.a,{size:"small"},r.a.createElement(V.a,null,r.a.createElement(q.a,null,r.a.createElement(U.a,null,"Date"),r.a.createElement(U.a,null,"Buy Price"),r.a.createElement(U.a,null,"Sell Price"),r.a.createElement(U.a,null,"Profit"))),r.a.createElement(X.a,null,a.opportunities.buyIndices.map((function(e,t){var n=a.prices[a.opportunities.exitIndices[t]];return r.a.createElement(q.a,{key:t},r.a.createElement(U.a,null,function(e,a){var t=Q()().month(e).format("MMMM"),n=a?Q()().month(a).format("MMMM"):"(current)";return"".concat(t," - ").concat(n)}(e,a.opportunities.exitIndices[t])),r.a.createElement(U.a,null,"$".concat(a.prices[e])),r.a.createElement(U.a,null,n?"$".concat(n):"-"),r.a.createElement(U.a,null,"$",a.prices[a.opportunities.exitIndices[t]]-a.prices[e]||a.opportunities.unrealizedProfit+" (unrealized)"))})))))}var Z=function(e){var a=[],t=[],n=0,r=0,i=0;return e.forEach((function(o,c){o<e[c+1]&&o<e[c-1]||o<e[c+1]&&!e[c-1]?(i=o,a.push(c)):o>e[c-1]&&o>e[c+1]&&(n+=o-i,i=0,0,t.push(c)),e.length===c+1&&0!==i&&(r=o-i)})),{buyIndices:a,exitIndices:t,profit:n,unrealizedProfit:r}},_=Object(u.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}})),ee=function(e){var a=e.stockData,t=_();return a=Object(s.a)({},a,{opportunities:Z(a.prices)}),r.a.createElement(T.a,{container:!0,spacing:3},r.a.createElement(T.a,{item:!0,xs:12,md:8,lg:12},r.a.createElement(W.a,{className:t.paper},r.a.createElement(F,{stockData:a}))),r.a.createElement(T.a,{item:!0,xs:6,md:6},r.a.createElement(W.a,{className:t.paper},r.a.createElement(G,{title:"Profit",amount:"$".concat(a.opportunities.profit)}))),r.a.createElement(T.a,{item:!0,xs:6,md:6},r.a.createElement(W.a,{className:t.paper},r.a.createElement(G,{title:"Unrealized Profit",amount:"$".concat(a.opportunities.unrealizedProfit)||!1}))),r.a.createElement(T.a,{item:!0,xs:12},r.a.createElement(W.a,{className:t.paper},r.a.createElement(Y,{stockData:a}))))},ae=Object(u.a)((function(e){return{root:{display:"flex"},toolbarIcon:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(l.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}})),te=[{id:0,name:"Tesla",prices:[65,59,80,81,56,55,40]},{id:1,name:"Apple",prices:[10,20,30,41,56,55,40]},{id:2,name:"Microsoft",prices:[100,70,50,20,40,70,80]},{id:3,name:"Boosted.ai",prices:[20,50,30,70,50,30,5,15,10,25,50,70]},{id:4,name:"Nikola",prices:[100,90,80,70,60,50,45,30,5,4,3,0]}];function ne(){var e=ae(),a=r.a.useState(!0),t=Object(c.a)(a,2),n=t[0],i=t[1],o=r.a.useState(),l=Object(c.a)(o,2),s=l[0],u=l[1];return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(J,{open:n,handleDrawerOpen:function(){i(!0)}}),r.a.createElement(d.a,{variant:"permanent",classes:{paper:Object(p.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(h.a,{onClick:function(){i(!1)}},r.a.createElement(v.a,null))),r.a.createElement(f.a,null),r.a.createElement(g.a,null,function(e){var a=e.companies,t=e.handleOnClick;return r.a.createElement("div",null,a.map((function(e){return r.a.createElement(w.a,{button:!0,onClick:function(){return t(e)}},r.a.createElement(x.a,null,r.a.createElement(B.a,null)),r.a.createElement(y.a,{primary:e.name}))})))}({companies:te,handleOnClick:function(e){return u(e)}}))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(E.a,{maxWidth:"lg",className:e.container},s?r.a.createElement(ee,{stockData:s}):r.a.createElement(M.a,null,"Please select a company"))))}var re=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,a,t){e.exports=t.p+"static/media/stonks.471d172e.png"},95:function(e,a,t){e.exports=t(199)}},[[95,1,2]]]);
//# sourceMappingURL=main.a2764a35.chunk.js.map