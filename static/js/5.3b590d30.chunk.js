(this.webpackJsonpeverlywell=this.webpackJsonpeverlywell||[]).push([[5],{101:function(e,t,a){"use strict";a.r(t);var r,n=a(36),c=a.n(n),s=a(37),i=a(39),u=a(0),p=a(62),o=a.n(p),l=a(40),h=a(63),j=a.n(h),b=a(41),d=a.n(b),f=a(13),m=a(64),O=a(3),v=(r={},Object(l.a)(r,j.a.WidthSmallerOrEqualTo600,{}),Object(l.a)(r,j.a.WidthLargerThan600,{minWidth:600}),r);var _=function(e){var t=Object(m.useContainerQuery)(v),a=Object(i.a)(t,2),r=a[0],n=a[1];return Object(O.jsx)("div",{ref:n,className:d()(j.a.RecipeListItem,r),children:Object(O.jsxs)(f.b,{className:j.a.RecipeLink,to:"/recipe/".concat(e.recipe.idMeal),children:[Object(O.jsxs)("div",{className:j.a.RecipeData,children:[Object(O.jsx)("div",{className:j.a.RecipeName,children:e.recipe.strMeal}),Object(O.jsxs)("div",{className:j.a.RecipeInstructions,children:[e.recipe.strInstructions.substr(0,270),"..."]})]}),Object(O.jsx)("div",{alt:e.recipe.strMeal,style:{backgroundImage:"url(".concat(e.recipe.strMealThumb,")")},className:j.a.RecipeThumbnail})]})})},x=a(38),R=a(95),w=a.n(R),S=a(58),g=a(59),y=null;var L=function(){var e=Object(u.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],n=Object(u.useState)(""),p=Object(i.a)(n,2),o=p[0],h=p[1],j=Object(u.useState)([]),b=Object(i.a)(j,2),f=b[0],m=b[1],v=Object(u.useRef)(null);return Object(u.useEffect)((function(){function e(){return(e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)(o);case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}clearTimeout(y),o&&(y=setTimeout((function(){return function(){return e.apply(this,arguments)}()}),600))}),[o]),Object(O.jsxs)("div",{className:w.a.GlobalRecipeSearch,children:[Object(O.jsx)(S.a,{icon:g.c,className:w.a.OpenSearchButton,onClick:function(){r(!0),h(""),m([]),v.current.focus(),alert(v.current.offsetTop),window.scrollTo(0,v.current.offsetTop)}}),Object(O.jsxs)("div",{className:d()(w.a.SearchModal,Object(l.a)({},w.a.ModalOpen,a)),children:[Object(O.jsxs)("div",{className:w.a.SearchHeader,children:[Object(O.jsx)(S.a,{icon:g.a,onClick:function(){return r(!1)}}),Object(O.jsx)("input",{type:"text",value:o,ref:v,placeholder:"I'm craving...",onChange:function(e){return h(e.target.value)}})]}),Object(O.jsx)("div",{className:w.a.SearchResults,children:f&&f.map((function(e,t){return Object(O.jsx)(_,{recipe:e},t)}))})]})]})};var N=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(u.useEffect)((function(){function e(){return(e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,Object(x.a)(3);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{className:o.a.MainPage,children:[Object(O.jsx)("header",{className:o.a.Header,children:Object(O.jsx)("div",{className:o.a.HeaderLogo})}),Object(O.jsx)("div",{className:o.a.Title,children:"Recipes of the day"}),a&&a.map((function(e,t){return Object(O.jsx)(_,{recipe:e},t)})),Object(O.jsx)(L,{})]})};t.default=N},38:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return j})),a.d(t,"c",(function(){return d}));var r=a(60),n=a(36),c=a.n(n),s=a(37),i=a(48),u=a.n(i);function p(e){return o.apply(this,arguments)}function o(){return(o=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+t);case 2:return a=e.sent,e.abrupt("return",a.data.meals[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=String(Math.random()).replace("0.",""),e.next=3,u.a.get("https://www.themealdb.com/api/json/v1/1/random.php?t="+t);case 3:return a=e.sent,e.abrupt("return",a.data.meals[0]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(r.a)(Array(t)).map((function(e){return l()})),e.prev=1,e.next=4,Promise.all(a);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+t);case 2:return a=e.sent,e.abrupt("return",a.data.meals);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},62:function(e,t,a){e.exports={Header:"MainPage_Header__UKz--",HeaderLogo:"MainPage_HeaderLogo__GjR22",Title:"MainPage_Title__1Gp3t"}},63:function(e,t,a){e.exports={RecipeLink:"RecipeListItem_RecipeLink__3Eut7",RecipeName:"RecipeListItem_RecipeName__1Fs0I",RecipeThumbnail:"RecipeListItem_RecipeThumbnail__1kLXZ",RecipeInstructions:"RecipeListItem_RecipeInstructions__R_1Ue",WidthLargerThan600:"RecipeListItem_WidthLargerThan600__2LEyv",RecipeData:"RecipeListItem_RecipeData__37lTf"}},95:function(e,t,a){e.exports={OpenSearchButton:"GlobalRecipeSearch_OpenSearchButton__18T5C",SearchModal:"GlobalRecipeSearch_SearchModal__1fqj9",ModalOpen:"GlobalRecipeSearch_ModalOpen__GqUGd",SearchHeader:"GlobalRecipeSearch_SearchHeader__2L3je",SearchResults:"GlobalRecipeSearch_SearchResults__r3gRv"}}}]);
//# sourceMappingURL=5.3b590d30.chunk.js.map