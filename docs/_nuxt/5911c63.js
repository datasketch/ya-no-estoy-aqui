(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{165:function(t,e,r){"use strict";r.r(e);r(28);var n=r(3),c=r(163),o=r.n(c),l=r(162),m=r.n(l),f=(r(75),r(29),r(30),r(12),r(58),r(56)),v=r(164),d=r.n(v);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y="1EDoBOrZIh2U58oMGdhz6nMDZSfTqjrQlSbGtKXNoexE";function w(){return _.apply(this,arguments)}function _(){return(_=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=new d.a,t.next=4,e.getJSON(y);case 4:return r=t.sent,n=r.data.map((function(t){return h({fullname:"".concat(t.Nombre," ").concat(t.Apellidos).trim(),slug:m()("".concat(t.Nombre," ").concat(t.Apellidos),{lower:!0})},t)})),t.abrupt("return",{victims:n,error:null});case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",{victims:null,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}var O={head:function(){return{title:"Ya no estoy aquí"}},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,r=e.victims,null!==(n=e.error)&&console.log(n),t.abrupt("return",{victims:r});case 7:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;o()().setup({progress:!0,offset:0,step:".step"}).onStepProgress((function(e){var progress=e.progress;t.$refs.wrapper.style.opacity=1-2*progress}))}},C=r(17),component=Object(C.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"step px-4"},[r("div",{ref:"wrapper",staticClass:"sticky top-0",staticStyle:{"z-index":"-1"}},[r("video",{staticClass:"w-full h-screen object-center object-contain",staticStyle:{"z-index":"-1"},attrs:{src:"media/cover.mp4",poster:"media/video-poster.png",autoplay:"",muted:"",playsinline:""},domProps:{muted:!0}})]),t._v(" "),t._m(0)]),t._v(" "),r("section",{staticClass:"px-4 pb-6"},[r("div",{staticClass:"max-w-lg mx-auto"},[t._m(1),t._v(" "),r("ul",{staticClass:"space-y-2 mt-12 font-charter text-english-violet text-lg"},t._l(t.victims,(function(e){return r("li",{key:e.slug},[r("nuxt-link",{staticClass:"hover:text-sizzling-red focus:text-sizzling-red",attrs:{to:"/"+e.slug,title:e.fullname}},[t._v("\n            "+t._s(e.fullname)+" - "+t._s(e.Edad)+" años\n          ")])],1)})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"margin-top":"-100vh"}},[r("div",{staticClass:"min-h-screen flex flex-col justify-center",staticStyle:{"margin-bottom":"50vh"}},[r("img",{staticClass:"w-2/3 md:w-1/4 mx-auto",attrs:{src:"media/title.png",alt:"Ya no estoy aquí"}})]),t._v(" "),r("div",{staticClass:"min-h-screen flex flex-col text-center justify-center pb-12"},[r("h1",{staticClass:"text-4xl lg:text-5xl font-playfair font-extrabold leading-tight text-english-violet"},[t._v("\n          Perfiles de "),r("br"),t._v("\n          mujeres asesinadas "),r("br"),t._v("\n          en pandemia\n        ")]),t._v(" "),r("img",{staticClass:"mx-auto w-40 lg:w-40 mt-4",attrs:{src:"media/cp-feminista.png",alt:"Logo Cuestión Pública Feminista"}}),t._v(" "),r("div",{staticClass:"w-1/2 border-t border-black mx-auto my-12 border-opacity-25"}),t._v(" "),r("div",{staticClass:"max-w-lg mx-auto"},[r("p",{staticClass:"font-charter text-english-violet text-base lg:text-lg"},[t._v("\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In\n            numquam sint officiis suscipit mollitia veniam alias consequatur\n            explicabo maxime molestias consectetur ad, deserunt magnam,\n            reprehenderit quasi necessitatibus! Doloribus, maiores nostrum.\n          ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col items-center"},[e("div",{staticClass:"h-16 border-sizzling-red border-r w-0"}),this._v(" "),e("div",{staticClass:"leading-none text-center font-playfair text-5xl"},[e("p",{staticClass:"text-sizzling-red text-opacity-50"},[this._v("20")]),this._v(" "),e("p",{staticClass:"text-sizzling-red font-lato text-sm font-black"},[this._v("\n            Perfiles\n          ")]),this._v(" "),e("p",{staticClass:"text-sizzling-red text-opacity-50 -mt-3"},[this._v("20")])])])}],!1,null,null,null);e.default=component.exports}}]);