"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{135:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var t=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(87),u=r(689),l=r(686),v=r.n(l),f=r(390),d=r(809),p={containerMovieDetails:"MovieDetails_containerMovieDetails__7Q5RO",backBtn:"MovieDetails_backBtn__rLQ3F",img:"MovieDetails_img__uOAom",useScore:"MovieDetails_useScore__+FPD3",overview:"MovieDetails_overview__U5Vnb",moreInfo:"MovieDetails_moreInfo__iU6Rb",moreInfoLink:"MovieDetails_moreInfoLink__v7Q4i"},m=r(184),h=(0,c.lazy)((function(){return r.e(459).then(r.bind(r,459))})),x=(0,c.lazy)((function(){return r.e(866).then(r.bind(r,866))}));var _=function(){var e,n,r,s,l,_,w,j=(0,c.useState)(null),g=(0,a.Z)(j,2),k=g[0],b=g[1],Z=(0,c.useState)(!1),y=(0,a.Z)(Z,2),D=y[0],N=y[1],M=(0,c.useState)(null),I=(0,a.Z)(M,2),S=I[0],U=I[1],L=(0,u.UO)().movieId,O=(0,u.TH)();return(0,c.useEffect)((function(){if(L){N(!0);var e=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.TP)(n);case 3:r=e.sent,b(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),U(e.t0.message);case 10:return e.prev=10,N(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(n){return e.apply(this,arguments)}}();e(L)}}),[L]),(0,c.useEffect)((function(){null!==S&&v().Notify.failure("Something went wrong: ".concat(S))}),[S]),(0,m.jsxs)("div",{className:p.containerMovieDetails,children:[(0,m.jsx)(o.rU,{className:p.backBtn,to:null!==(e=null===O||void 0===O||null===(n=O.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:"\u2190 Go back"}),D&&(0,m.jsx)(d.Z,{}),(0,m.jsxs)("div",{children:[null!==k&&(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:null!==k&&void 0!==k&&k.poster_path?"https://image.tmdb.org/t/p/w500".concat(null===k||void 0===k?void 0:k.poster_path):"https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png",alt:k.title,className:p.img})}),(0,m.jsxs)("div",{className:p.info,children:[(0,m.jsxs)("h1",{children:[k.title," (",null===k||void 0===k?void 0:k.release_date.slice(0,4),")"]}),(0,m.jsxs)("p",{className:p.useScore,children:["User Score: ",null===k||void 0===k?void 0:k.vote_average]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{className:p.overview,children:k.overview}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("ul",{className:p.genre,children:null===k||void 0===k||null===(r=k.genres)||void 0===r?void 0:r.map((function(e){var n=e.id,r=e.name;return(0,m.jsx)("li",{className:p.genreItem,children:r},n)}))})]})]}),(0,m.jsxs)("div",{className:p.moreInfo,children:[(0,m.jsx)("h2",{children:"More info"}),(0,m.jsx)(o.rU,{state:{from:null!==(s=null===O||void 0===O||null===(l=O.state)||void 0===l?void 0:l.from)&&void 0!==s?s:"/"},className:p.moreInfoLink,to:"reviews",children:"Reviews"}),(0,m.jsx)(o.rU,{state:{from:null!==(_=null===O||void 0===O||null===(w=O.state)||void 0===w?void 0:w.from)&&void 0!==_?_:"/"},className:p.moreInfoLink,to:"cast",children:"Cast"}),(0,m.jsx)(c.Suspense,{fallback:(0,m.jsx)(d.Z,{}),children:(0,m.jsxs)(u.Z5,{children:[(0,m.jsx)(u.AW,{path:"cast",element:(0,m.jsx)(h,{})}),(0,m.jsx)(u.AW,{path:"reviews",element:(0,m.jsx)(x,{})})]})})]})]})]})}},390:function(e,n,r){r.d(n,{Df:function(){return c},TP:function(){return u},V0:function(){return o},kn:function(){return f},tx:function(){return v},zv:function(){return l}});var t=r(861),a=r(757),s=r.n(a),i=r(263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"af592fcf36199c3713f718a30eaa3789"}}),c=function(){var e=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/all/week");case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie",{params:{query:n}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/credits"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/reviews"),{params:{page:1}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/popular");case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.cd0ba864.chunk.js.map