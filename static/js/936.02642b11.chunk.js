"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{510:function(e,t,r){r.d(t,{e:function(){return p}});r(791);var n=r(87),a=r(689),s="MovieList_movieList__uFrOZ",u="MovieList_movieCard__+xH2O",c="MovieList_containerHeader__ThhmK",i="MovieList_header__uHVw7",o="MovieList_img__Tmz2C",f=r(184),p=function(e){var t=e.movieList,r=(0,a.TH)();return(0,f.jsx)("ul",{className:s,children:Array.isArray(t)&&(null===t||void 0===t?void 0:t.map((function(e){var t=e.id,a=e.name,s=e.title,p=e.poster_path;return(0,f.jsx)(n.rU,{state:{from:r},to:"/movies/".concat(t),children:(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w500".concat(p),alt:s}),(0,f.jsx)("div",{className:c,children:(0,f.jsx)("h3",{className:i,children:a||s})})]})},t)})))})}},936:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),s=r(757),u=r.n(s),c=r(791),i=r(686),o=r.n(i),f=r(390),p=r(510),v=r(809),l="Home_containerHome__Sauq7",m="Home_headerHome__eHGXq",h=r(184),d=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],i=(0,c.useState)(!1),d=(0,a.Z)(i,2),_=d[0],x=d[1],w=(0,c.useState)(null),g=(0,a.Z)(w,2),k=g[0],j=g[1];return(0,c.useEffect)((function(){x(!0);var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Df)();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(e.t0.message);case 10:return e.prev=10,x(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.useEffect)((function(){null!==k&&o().Notify.failure("Something went wrong: ".concat(k))}),[k]),(0,h.jsx)("div",{className:l,children:(0,h.jsx)("ul",{children:(0,h.jsxs)("li",{children:[(0,h.jsx)("h2",{className:m,children:"Trends of the week"}),_&&(0,h.jsx)(v.Z,{}),(0,h.jsx)(p.e,{movieList:r})]},r.id)})})}},390:function(e,t,r){r.d(t,{Df:function(){return c},TP:function(){return o},V0:function(){return i},tx:function(){return p},zv:function(){return f}});var n=r(861),a=r(757),s=r.n(a),u=r(263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"af592fcf36199c3713f718a30eaa3789"}}),c=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("trending/all/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t,"/reviews"),{params:{page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.02642b11.chunk.js.map