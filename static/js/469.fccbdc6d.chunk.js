"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[469],{269:function(n,e,r){r.d(e,{T:function(){return s}});var t="movies_li__wCmed",a="movies_link__TpWKo",c=r(689),u=r(87),i=r(184),s=function(n){var e=n.listMovi,r=n.url,s=(0,c.TH)();return(0,i.jsx)(i.Fragment,{children:e.map((function(n){var e=n.title,c=n.id;return(0,i.jsx)("li",{className:t,children:(0,i.jsx)(u.OL,{className:a,to:r?"".concat(r,"/").concat(c):"".concat(c),state:{from:s},children:e})},c)}))})}},561:function(n,e,r){r.d(e,{Jh:function(){return f},_r:function(){return l},hG:function(){return s},mv:function(){return i},z1:function(){return o}});var t=r(861),a=r(757),c=r.n(a),u=r(340).Z.create({baseURL:"".concat("https://api.themoviedb.org/3/"),params:{api_key:"".concat("084cac21fa8da555b8514354e192246a")}}),i=function(){return u.get("trending/movie/day")},s=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u.get("movie/".concat(e,"?language=en-US")),n.abrupt("return",r);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u.get("search/movie?include_adult=false&language=en-US&page=1&query=".concat(e)),n.abrupt("return",r);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u.get("movie/".concat(e,"/credits?language=en-US")),n.abrupt("return",r);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u.get("movie/".concat(e,"/reviews?language=en-US&page=1")),n.abrupt("return",r);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},469:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t=r(861),a=r(439),c=r(757),u=r.n(c),i="home_div__qSp6y",s="home_pLoad__PsqdN",o="home_error__E+m42",f="home_h1__PGm1o",l="home_list__H1Xm-",p=r(791),v=r(561),m=r(269),h=r(184),d=function(){var n=(0,p.useState)([]),e=(0,a.Z)(n,2),r=e[0],c=e[1],d=(0,p.useState)(null),_=(0,a.Z)(d,2),g=_[0],x=_[1],w=(0,p.useState)(!1),k=(0,a.Z)(w,2),j=k[0],b=k[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,t.Z)(u().mark((function n(){var e,r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.mv)();case 3:e=n.sent,r=e.data,t=r.results,c(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),x(n.t0.message);case 12:return n.prev=12,b(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)("div",{className:i,children:[j&&(0,h.jsx)("p",{className:s,children:"...Loading"}),g&&(0,h.jsxs)("p",{className:o,children:["Error: ",g]}),(0,h.jsx)("h1",{className:f,children:"Trending today"}),(0,h.jsx)("ul",{className:l,children:(null===r||void 0===r?void 0:r.length)&&(0,h.jsx)(m.T,{listMovi:r,url:"movies"})})]})},_=function(){return(0,h.jsx)("main",{children:(0,h.jsx)(d,{})})}}}]);
//# sourceMappingURL=469.fccbdc6d.chunk.js.map