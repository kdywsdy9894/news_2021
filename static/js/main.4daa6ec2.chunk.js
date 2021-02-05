(this.webpackJsonpnews_2021=this.webpackJsonpnews_2021||[]).push([[0],{25:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),a=c.n(n),i=c(17),r=c.n(i),o=(c(25),c(3)),l=c(4),u=c(6),h=c(5),d=c(8),j=c.n(d),b=c(18),y=c(19),g=c.n(y);var v=function(e){var t=e.title,c=e.author,n=e.description,a=e.publishedAt,i=e.source,r=e.url,o=e.urlToImage;return Object(s.jsxs)("div",{className:"article",children:[Object(s.jsx)("div",{className:"title",children:t}),Object(s.jsx)("div",{className:"author",children:c}),Object(s.jsx)("div",{className:"description",children:n}),Object(s.jsx)("div",{className:"publishedAt",children:a}),Object(s.jsx)("div",{className:"source",children:i}),Object(s.jsx)("a",{className:"url",href:r,children:"Original Article"}),Object(s.jsx)("img",{src:o})]})},O=(c(45),function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={articles:[],isLoading:!0},e.getNews=Object(b.a)(j.a.mark((function t(){var c,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://newsapi.org/v2/top-headlines?country=".concat(e.props.country,"&category=").concat(e.props.category,"&apiKey=0e8a1746fed04b03b5956928bfa557fc"));case 2:c=t.sent,s=c.data.articles,e.setState({articles:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){this.getNews()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,c=e.articles;return Object(s.jsx)("div",{className:"container",children:t?Object(s.jsxs)("div",{className:"loader",children:[Object(s.jsxs)("div",{className:"loader-circle",children:[Object(s.jsx)("div",{className:"circle1"}),Object(s.jsx)("div",{className:"circle2"}),Object(s.jsx)("div",{className:"circle3"})]}),Object(s.jsx)("div",{className:"loading-text",children:"Here's your news!"})]}):c.map((function(e){return console.log(e),Object(s.jsx)(v,{title:e.title,author:e.author,description:e.description,publishedAt:e.publishedAt,source:e.source.name,url:e.url,urlToImage:e.urlToImage})}))})}}]),c}(a.a.Component)),m=(c(46),function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={country:null,category:null,isLoading:!0},e}return Object(l.a)(c,[{key:"ctUS",value:function(){this.setState({country:"us"})}},{key:"ctGB",value:function(){this.setState({country:"gb"})}},{key:"ctKR",value:function(){this.setState({country:"kr"})}},{key:"ctCN",value:function(){this.setState({country:"cn"})}},{key:"ctJP",value:function(){this.setState({country:"jp"})}},{key:"cgBusiness",value:function(){this.setState({category:"business"})}},{key:"cgEntertainment",value:function(){this.setState({category:"entertainment"})}},{key:"cgGeneral",value:function(){this.setState({category:"general"})}},{key:"cgSports",value:function(){this.setState({category:"sports"})}},{key:"cgTechnology",value:function(){this.setState({category:"technology"})}},{key:"eventChanger",value:function(){null===this.state.country||null===this.state.category?alert("choose your country and category"):this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this.state.isLoading;return Object(s.jsx)("div",{className:"container",children:e?Object(s.jsxs)("div",{className:"selector",children:[Object(s.jsxs)("div",{className:"selectUrl",children:[Object(s.jsx)("div",{className:"selectUrl-text",children:"choose your country and category"}),Object(s.jsx)("div",{className:"country",children:Object(s.jsxs)("div",{className:"countries",children:[Object(s.jsx)("button",{className:"kr",onClick:this.ctKR.bind(this),children:"\ud55c\uad6d"}),Object(s.jsx)("button",{className:"us",onClick:this.ctUS.bind(this),children:"ENGLISH(US)"}),Object(s.jsx)("button",{className:"gb",onClick:this.ctUS.bind(this),children:"ENGLISH(GB)"}),Object(s.jsx)("button",{className:"jp",onClick:this.ctJP.bind(this),children:"\u65e5\u672c"}),Object(s.jsx)("button",{className:"cn",onClick:this.ctCN.bind(this),children:"\u4e2d\u570b"})]})}),Object(s.jsx)("div",{className:"category",children:Object(s.jsxs)("div",{className:"categories",children:[Object(s.jsx)("button",{className:"general",onClick:this.cgGeneral.bind(this),children:"general"}),Object(s.jsx)("button",{className:"business",onClick:this.cgBusiness.bind(this),children:"business"}),Object(s.jsx)("button",{className:"entertainment",onClick:this.cgEntertainment.bind(this),children:"entertainment"}),Object(s.jsx)("button",{className:"sports",onClick:this.cgSports.bind(this),children:"sports"}),Object(s.jsx)("button",{className:"technology",onClick:this.cgTechnology.bind(this),children:"technology"})]})})]}),Object(s.jsx)("button",{className:"eventchanger",onClick:this.eventChanger.bind(this),children:"Here's yours NEWS!"})]}):Object(s.jsx)(O,{country:this.state.country,category:this.state.category})})}}]),c}(a.a.Component)),x=(c(47),function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"modes",children:Object(s.jsx)(m,{})})})}}]),c}(a.a.Component));r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.4daa6ec2.chunk.js.map