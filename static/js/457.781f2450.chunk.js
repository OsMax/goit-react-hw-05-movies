"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[457],{535:function(e,n,t){t.d(n,{Z:function(){return i}});var a="https://api.themoviedb.org/3",c="&api_key=6ab9b39d97ad84b66bbf0073e6af1a4c",r=t(243);var i={getTrending:function(){return r.Z.get("".concat(a,"/trending/movie/day?language=en-US").concat(c))},searchMovies:function(e){return r.Z.get("".concat(a,"/search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1").concat(c))},getMoviesDetail:function(e){return r.Z.get("".concat(a,"/movie/").concat(e,"?language=en-US").concat(c))},getMoviesCast:function(e){return r.Z.get("".concat(a,"/movie/").concat(e,"/credits?language=en-US").concat(c))},getMoviesRevievs:function(e){return r.Z.get("".concat(a,"/movie/").concat(e,"/reviews?language=en-US&page=1").concat(c))}}},457:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(439),c=t(689),r=t(535),i=t(791),o=t(421),s="Reviews_reviewsLists__AOV9d",u=t(184),g=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],g=n[1],l=(0,i.useState)(!1),v=(0,a.Z)(l,2),d=v[0],h=v[1],f=(0,c.UO)().movieId;return(0,i.useEffect)((function(){h(!0),r.Z.getMoviesRevievs(f).then((function(e){g(e.data.results),h(!1)}))}),[f]),(0,u.jsxs)(u.Fragment,{children:[d&&(0,u.jsx)(o.Z,{}),t.length>0&&(0,u.jsx)("ul",{className:s,children:t.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h3",{children:[(0,u.jsx)("span",{children:"#"}),e.author,":"]}),(0,u.jsx)("p",{children:e.content})]},e.id)}))}),0===t.length&&(0,u.jsx)("h3",{children:"There are no reviews!!!"})]})}}}]);
//# sourceMappingURL=457.781f2450.chunk.js.map