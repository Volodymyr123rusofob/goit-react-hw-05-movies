"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[318],{561:function(e,n,t){t.d(n,{Jh:function(){return l},_r:function(){return v},hG:function(){return u},mv:function(){return c},z1:function(){return o}});var r=t(861),a=t(757),s=t.n(a),i=t(340).Z.create({baseURL:"".concat("https://api.themoviedb.org/3/"),params:{api_key:"".concat("084cac21fa8da555b8514354e192246a")}}),c=function(){return i.get("trending/movie/day")},u=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.get("movie/".concat(n,"?language=en-US")),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.get("search/movie?include_adult=false&language=en-US&page=1&query=".concat(n)),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.get("movie/".concat(n,"/credits?language=en-US")),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.get("movie/".concat(n,"/reviews?language=en-US&page=1")),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},318:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(861),a=t(439),s=t(757),i=t.n(s),c="movieDetails_li__Mnkg7",u="movieDetails_button__pnWLJ",o="movieDetails_div__uKqQu",l="movieDetails_img__jB64k",v="movieDetails_h1__t0Rxd",p="movieDetails_p__j-j+8",m="movieDetails_h2__ZLgm4",h="movieDetails_list__WPgzG",f="movieDetails_link__-Uslt",d=t(689),_=t(87),g=t(561),x=t(791),j=t(184),w=function(){var e=(0,x.useState)({}),n=(0,a.Z)(e,2),t=n[0],s=n[1],w=(0,x.useState)(null),k=(0,a.Z)(w,2),N=k[0],b=k[1],U=(0,x.useState)(!1),Z=(0,a.Z)(U,2),y=Z[0],D=Z[1],S=(0,d.UO)().movieId,G=(0,d.s0)();(0,x.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.hG)(S);case 3:n=e.sent,t=n.data,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0.message);case 11:return e.prev=11,D(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]);var C=t||{},L=C.title,R=C.release_date,q=C.vote_average,z=C.overview,B=C.genres,E=C.poster_path,J=C.original_title,M=(R||"").split("-")[0];return(0,j.jsxs)(j.Fragment,{children:[y&&(0,j.jsx)("p",{children:"...Loasding"}),N&&(0,j.jsxs)("p",{children:["Error: ",N]}),(0,j.jsx)("button",{className:u,onClick:function(){return G(-1)},type:"button",children:"GoBack"}),(0,j.jsxs)("div",{className:o,children:[(0,j.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w500".concat(E),alt:J}),(0,j.jsx)("h1",{className:v,children:"".concat(L,"(").concat(M,")")}),(0,j.jsxs)("p",{className:p,children:["User score: ",Math.floor(10*q),"%"]}),(0,j.jsx)("h2",{className:m,children:"Overview"}),(0,j.jsx)("p",{className:p,children:z}),(0,j.jsx)("h2",{className:m,children:"Genres"}),(0,j.jsx)("ul",{className:h,children:(null===B||void 0===B?void 0:B.length)&&B.map((function(e){var n=e.name,t=e.id;return(0,j.jsx)("li",{className:c,children:n},t)}))}),(0,j.jsx)("p",{className:p,children:"Additional information"}),(0,j.jsxs)("ul",{className:h,children:[(0,j.jsx)("li",{className:c,children:(0,j.jsx)(_.rU,{className:f,to:"cast",children:"Cast"})}),(0,j.jsx)("li",{className:c,children:(0,j.jsx)(_.rU,{className:f,to:"reviews",children:"Reviews"})})]}),(0,j.jsx)(d.j3,{})]})]})},k=function(){return(0,j.jsx)("main",{children:(0,j.jsx)(w,{})})}}}]);
//# sourceMappingURL=318.b0982638.chunk.js.map