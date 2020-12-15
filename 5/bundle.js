/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/helpers/create-element.js":
/*!***************************************!*\
  !*** ./src/helpers/create-element.js ***!
  \***************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template.trim();

  const hasChildren = newElement.children.length > 1;

  return hasChildren ?
    newElement :
    newElement.firstChild;
};




/***/ }),

/***/ "./src/helpers/render.js":
/*!*******************************!*\
  !*** ./src/helpers/render.js ***!
  \*******************************/
/*! exports provided: renderTemplate, render, RenderPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
const RenderPosition = {
  BEFORE_BEGIN: `beforebegin`,
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`,
  AFTER_END: `afterend`
};

const renderTemplate = (container, content, position) => {
  container.insertAdjacentHTML(position, content);
};

const render = (container, element, position) => {
  switch (position) {
    case RenderPosition.AFTER_BEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFORE_END:
      container.append(element);
      break;
  }
};




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_tripInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/tripInfo */ "./src/view/tripInfo.js");
/* harmony import */ var _view_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/menu */ "./src/view/menu.js");
/* harmony import */ var _view_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/filter */ "./src/view/filter.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/list */ "./src/view/list.js");
/* harmony import */ var _view_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/point */ "./src/view/point.js");
/* harmony import */ var _view_edit_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/edit-point */ "./src/view/edit-point.js");
/* harmony import */ var _view_trip_cost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/trip-cost */ "./src/view/trip-cost.js");
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/render */ "./src/helpers/render.js");
/* harmony import */ var _mock_points__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/points */ "./src/mock/points.js");
/* harmony import */ var _view_empty_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/empty-list */ "./src/view/empty-list.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");













const renderPoint = (pointListElement, point) => {
  const pointComponent = new _view_point__WEBPACK_IMPORTED_MODULE_5__["default"](point);
  const pointEditComponent = new _view_edit_point__WEBPACK_IMPORTED_MODULE_6__["default"](point);

  const replaceCardToForm = () => {
    pointListElement.replaceChild(pointEditComponent.getElement(), pointComponent.getElement());
  };

  const replaceFormToCard = () => {
    pointListElement.replaceChild(pointComponent.getElement(), pointEditComponent.getElement());
  };

  const onEscapePressed = (event) => {
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["isEscape"])(event)) {
      event.preventDefault();
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscapePressed);
    }
  };

  pointComponent
    .getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      replaceCardToForm();
      document.addEventListener(`keydown`, onEscapePressed);
    });

  pointEditComponent
    .getElement()
    .querySelector(`.event--edit`)
    .addEventListener(`submit`, (event) => {
      event.preventDefault();
      replaceFormToCard();
    });

  Object(_helpers_render__WEBPACK_IMPORTED_MODULE_8__["render"])(pointListElement, pointComponent.getElement(), _helpers_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFORE_END);
};

const points = Object(_mock_points__WEBPACK_IMPORTED_MODULE_9__["createPoints"])(20);

const pageHeaderElement = document.querySelector(`.page-header`);
const pageMainElement = document.querySelector(`.page-main`);
const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);

if (points.length) {
  const tripInfo = new _view_tripInfo__WEBPACK_IMPORTED_MODULE_0__["default"](points);

  Object(_helpers_render__WEBPACK_IMPORTED_MODULE_8__["render"])(tripMainElement, tripInfo.getElement(), _helpers_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].AFTER_BEGIN);
  Object(_helpers_render__WEBPACK_IMPORTED_MODULE_8__["render"])(tripInfo.getElement(), new _view_trip_cost__WEBPACK_IMPORTED_MODULE_7__["default"](points).getElement(), _helpers_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFORE_END);
  Object(_helpers_render__WEBPACK_IMPORTED_MODULE_8__["render"])(tripEventsElement, new _view_sort__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _helpers_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFORE_END);
}
Object(_helpers_render__WEBPACK_IMPORTED_MODULE_8__["render"])(tripControlsElement, new _view_menu__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _helpers_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].AFTER_BEGIN);
Object(_helpers_render__WEBPACK_IMPORTED_MODULE_8__["render"])(tripControlsElement, new _view_filter__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _helpers_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFORE_END);

const list = new _view_list__WEBPACK_IMPORTED_MODULE_4__["default"]();
Object(_helpers_render__WEBPACK_IMPORTED_MODULE_8__["render"])(tripEventsElement, list.getElement(), _helpers_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].BEFORE_END);

if (points.length) {
  points.forEach((point) => {
    renderPoint(list.getElement(), point);
  });
} else {
  Object(_helpers_render__WEBPACK_IMPORTED_MODULE_8__["render"])(list.getElement(), new _view_empty_list__WEBPACK_IMPORTED_MODULE_10__["default"]().getElement(), _helpers_render__WEBPACK_IMPORTED_MODULE_8__["RenderPosition"].AFTER_BEGIN);
}



/***/ }),

/***/ "./src/mock/cities.js":
/*!****************************!*\
  !*** ./src/mock/cities.js ***!
  \****************************/
/*! exports provided: CITIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITIES", function() { return CITIES; });
const CITIES = [
  `London`,
  `New York City`,
  `Paris`,
  `Moscow`,
  `Tokyo`,
  `Dubai`,
  `Singapore`,
  `Barcelona`,
  `Los Angeles`,
  `Madrid`,
  `Rome`,
  `Chicago`,
  `Toronto`,
  `San Francisco`,
  `Abu Dhabi`,
  `St. Petersburg`,
  `Amsterdam`,
  `Berlin`,
  `Prague`,
  `Washington, D.C.`,
  `Istanbul`,
  `Las Vegas`,
  `Doha`,
  `Seoul`,
  `Sydney`
];




/***/ }),

/***/ "./src/mock/destinationDescription.js":
/*!********************************************!*\
  !*** ./src/mock/destinationDescription.js ***!
  \********************************************/
/*! exports provided: getDestinationDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDestinationDescription", function() { return getDestinationDescription; });
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");
/* harmony import */ var _mock_photos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/photos */ "./src/mock/photos.js");



const PARAGRAPHS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const PARAGRAPHS_MIN_COUNT = 1;
const PARAGRAPHS_MAX_COUNT = 5;

const getRandomDescription = () => {
  const paragraphs = [];

  for (let i = PARAGRAPHS_MIN_COUNT; i < PARAGRAPHS_MAX_COUNT; i++) {
    const randomParagraph = Object(_utils_random__WEBPACK_IMPORTED_MODULE_0__["getRandomItemFromArray"])(PARAGRAPHS);
    paragraphs.push(randomParagraph);
  }

  return paragraphs.join(` `);
};

const getDestinationDescription = () => ({
  description: getRandomDescription(),
  photos: Object(_mock_photos__WEBPACK_IMPORTED_MODULE_1__["getRandomPhotos"])()
});




/***/ }),

/***/ "./src/mock/option.js":
/*!****************************!*\
  !*** ./src/mock/option.js ***!
  \****************************/
/*! exports provided: getOffersByPointType, getRandomOffersByPointType, createOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffersByPointType", function() { return getOffersByPointType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomOffersByPointType", function() { return getRandomOffersByPointType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOption", function() { return createOption; });
/* harmony import */ var _pointType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointType */ "./src/mock/pointType.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");



const createOption = (id, name, price) => ({
  id,
  name,
  price
});

const getRandomOffersByPointType = (pointType) => {
  return Object(_utils_random__WEBPACK_IMPORTED_MODULE_1__["getRandomNumber"])(0, 1) ? getOffersByPointType(pointType) : [];
};

const getOffersByPointType = (pointType) => {
  switch (pointType) {
    case _pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"].TAXI:
    case _pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"].BUS:
    case _pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"].TRAIN:
    case _pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"].SHIP:
    case _pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"].TRANSPORT:
    case _pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"].FLIGHT:
    {
      return [
        createOption(`business-class`, `Add business class`, 50)
      ];
    }

    case _pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"].DRIVE:
    {
      return [
        createOption(`business-class`, `Add business class`, 50),
        createOption(`elite-class`, `Add elite class`, 500),
      ];
    }

    case _pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"].CHECK_IN:
    {
      return [
        createOption(`breakfast`, `Add breakfast`, 20),
        createOption(`champagne`, `Add champagne`, 20),
        createOption(`massage`, `Add massage`, 100),
      ];
    }

    case _pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"].RESTAURANT:
    {
      return [
        createOption(`live-music`, `Add live music`, 100),
        createOption(`wine`, `Add wine`, 10),
        createOption(`tips`, `Add tips`, 10),
      ];
    }
    case _pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"].SIGHTSEEING:
    {
      return [
        createOption(`individual guide`, `Add individual guide`, 100),
        createOption(`lunch`, `Add lunch`, 100),
      ];
    }

    default:
      return [];
  }
};




/***/ }),

/***/ "./src/mock/photos.js":
/*!****************************!*\
  !*** ./src/mock/photos.js ***!
  \****************************/
/*! exports provided: getRandomPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomPhotos", function() { return getRandomPhotos; });
const PHOTOS_MAX_COUNT = 3;

const getRandomPhoto = () => `http://picsum.photos/248/152?r=${Math.random()}`;

const getRandomPhotos = () => {
  const photos = [];

  for (let i = 0; i < PHOTOS_MAX_COUNT; i++) {
    const randomPhoto = getRandomPhoto();
    photos.push(randomPhoto);
  }

  return photos;
};




/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/*! exports provided: createPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPoint", function() { return createPoint; });
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ "./src/utils/random.js");
/* harmony import */ var _mock_pointType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/pointType */ "./src/mock/pointType.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option */ "./src/mock/option.js");
/* harmony import */ var _cities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cities */ "./src/mock/cities.js");






const BASE_PRICE_MIN = 20;
const BASE_PRICE_MAX = 250;

const POINTS_INTERVAL_IN_MINUTES = 60;

const getMinTimeByPointTypeInMinutes = (pointType) => {
  switch (pointType) {
    case _mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"].TAXI:
    case _mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"].BUS:
    case _mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"].TRANSPORT:
    {
      return 10;
    }
    case _mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"].TRAIN:
    case _mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"].SHIP:
    case _mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"].FLIGHT:
    {
      return 40;
    }
    case _mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"].DRIVE:
    {
      return 10;
    }

    case _mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"].CHECK_IN:
    {
      return 20;
    }

    case _mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"].SIGHTSEEING:
    case _mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"].RESTAURANT:
    {
      return 30;
    }

    default:
      return 10;
  }
};

const getRandomDate = (minData = null, minDelta) => {
  let startDate = minData;

  if (!minData) {
    startDate = dayjs__WEBPACK_IMPORTED_MODULE_2___default()();
  }

  return dayjs__WEBPACK_IMPORTED_MODULE_2___default()(startDate).add(minDelta, `minute`);
};

const createPoint = (previousEndDate = null) => {
  const pointType = Object(_utils_random__WEBPACK_IMPORTED_MODULE_0__["getRandomItemFromArray"])(Object.values(_mock_pointType__WEBPACK_IMPORTED_MODULE_1__["PointType"]));
  const startDate = getRandomDate(previousEndDate, POINTS_INTERVAL_IN_MINUTES);
  const endDate = getRandomDate(startDate, getMinTimeByPointTypeInMinutes(pointType));

  const basePrice = Object(_utils_random__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(BASE_PRICE_MIN, BASE_PRICE_MAX);
  const offers = Object(_utils_random__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(0, 1) ? Object(_option__WEBPACK_IMPORTED_MODULE_3__["getOffersByPointType"])(pointType) : [];
  const totalPrice = offers.reduce((acc, offer) => acc + offer.price, basePrice);

  return {
    pointType,
    city: Object(_utils_random__WEBPACK_IMPORTED_MODULE_0__["getRandomItemFromArray"])(_cities__WEBPACK_IMPORTED_MODULE_4__["CITIES"]),
    basePrice,
    totalPrice,
    startDate,
    endDate,
    offers
  };
};




/***/ }),

/***/ "./src/mock/pointType.js":
/*!*******************************!*\
  !*** ./src/mock/pointType.js ***!
  \*******************************/
/*! exports provided: PointType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointType", function() { return PointType; });
const PointType = {
  TAXI: `Taxi`,
  BUS: `Bus`,
  TRAIN: `Train`,
  SHIP: `Ship`,
  TRANSPORT: `Transport`,
  DRIVE: `Drive`,
  FLIGHT: `Flight`,
  CHECK_IN: `Check-in`,
  SIGHTSEEING: `Sightseeing`,
  RESTAURANT: `Restaurant`
};




/***/ }),

/***/ "./src/mock/points.js":
/*!****************************!*\
  !*** ./src/mock/points.js ***!
  \****************************/
/*! exports provided: createPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPoints", function() { return createPoints; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./src/mock/point.js");


const createPoints = (count) => {
  const points = [];
  let previousDate = null;

  for (let i = 0; i < count; i++) {
    const point = Object(_point__WEBPACK_IMPORTED_MODULE_0__["createPoint"])(previousDate);
    points.push(point);
    previousDate = point.endDate;
  }

  return points;
};




/***/ }),

/***/ "./src/utils/date.js":
/*!***************************!*\
  !*** ./src/utils/date.js ***!
  \***************************/
/*! exports provided: formatDate, getDateTimeFromDate, getDurationString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateTimeFromDate", function() { return getDateTimeFromDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationString", function() { return getDurationString; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;

const formatDate = (date, format) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
};

const getDateTimeFromDate = (date) => {
  return `${formatDate(date, `YYYY-MM-DD`)}T${formatDate(date, `HH:mm`)}`;
};

const getDatesDiff = (startDate, endDate) => {
  const startDateDay = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate);
  const endDateDay = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate);

  let minutesDiff = endDateDay.diff(startDateDay, `minute`);

  const days = Math.floor(minutesDiff / MINUTES_IN_DAY);
  minutesDiff %= MINUTES_IN_DAY;
  const hours = Math.floor(minutesDiff / MINUTES_IN_HOUR);

  minutesDiff %= MINUTES_IN_HOUR;

  return {
    days,
    hours,
    minutes: minutesDiff
  };
};

const getDurationString = (startDate, endDate) => {
  const {days, hours, minutes} = getDatesDiff(startDate, endDate);

  let result = `${minutes}M`;

  if (hours || days) {
    result = `${hours}H ${result}`;
  }

  if (days) {
    result = `${days}D ${result}`;
  }

  return result;
};




/***/ }),

/***/ "./src/utils/random.js":
/*!*****************************!*\
  !*** ./src/utils/random.js ***!
  \*****************************/
/*! exports provided: getRandomNumber, getRandomItemFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItemFromArray", function() { return getRandomItemFromArray; });
const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomItemFromArray = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};




/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: isEscape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEscape", function() { return isEscape; });
const ESCAPE = `Escape`;
const isEscape = (event) => event.code === ESCAPE;




/***/ }),

/***/ "./src/view/availableOffers.js":
/*!*************************************!*\
  !*** ./src/view/availableOffers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AvailableOffers; });
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");


const createAvailableOffersTemplate = (availableOffers, offers) => {
  return `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${availableOffers.length &&
          availableOffers.map((availableOffer) => {
            return `
              <div class="event__offer-selector">
                <input
                  class="event__offer-checkbox visually-hidden"
                  id="event-offer-${availableOffer.id}"
                  name="event-offer-${availableOffer.id}"
                  type="checkbox"
                  ${offers.some((offer) => offer.id === availableOffer.id) ? `checked` : ``}
                >
                <label class="event__offer-label" for="event-offer-${availableOffer.id}">
                  <span class="event__offer-title">${availableOffer.name}</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">${availableOffer.price}</span>
                </label>
              </div>
            `;
          })}
      </div>
    </section>
  `;
};

class AvailableOffers {
  constructor(availableOffers, offers) {
    this._availableOffers = availableOffers;
    this._offers = offers;
    this._element = null;
  }

  getTemplate() {
    return createAvailableOffersTemplate(this._availableOffers, this._offers);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/citiesDatalist.js":
/*!************************************!*\
  !*** ./src/view/citiesDatalist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CitiesDatalist; });
/* harmony import */ var _mock_cities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/cities */ "./src/mock/cities.js");
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");



const createCitiesDatalist = () => {
  return `
    <datalist id="destination-list-1">
      ${_mock_cities__WEBPACK_IMPORTED_MODULE_0__["CITIES"].map((city) => `<option value="${city}"></option>`)}
    </datalist>
  `;
};

class CitiesDatalist {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createCitiesDatalist();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/destination-details.js":
/*!*****************************************!*\
  !*** ./src/view/destination-details.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DestinationDetails; });
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");


const createDestinationDetailsTemplate = ({description, photos}) => {
  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${photos.length &&
            photos.map((photo) => {
              return `
                <img
                  class="event__photo"
                  src="${photo}"
                  alt="Event photo">
              `;
            })}
         </div>
      </div>
    </section>
  `;
};

class DestinationDetails {
  constructor(description) {
    this._description = description;
    this._element = null;
  }

  getTemplate() {
    return createDestinationDetailsTemplate(this._description);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/edit-point.js":
/*!********************************!*\
  !*** ./src/view/edit-point.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditPoint; });
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date */ "./src/utils/date.js");
/* harmony import */ var _mock_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/option */ "./src/mock/option.js");
/* harmony import */ var _mock_destinationDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/destinationDescription */ "./src/mock/destinationDescription.js");
/* harmony import */ var _availableOffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./availableOffers */ "./src/view/availableOffers.js");
/* harmony import */ var _destination_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./destination-details */ "./src/view/destination-details.js");
/* harmony import */ var _eventTypeItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventTypeItems */ "./src/view/eventTypeItems.js");
/* harmony import */ var _citiesDatalist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./citiesDatalist */ "./src/view/citiesDatalist.js");
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");









const createEditPointTemplate = (point) => {
  const {
    pointType,
    city,
    offers,
    basePrice,
    startDate,
    endDate
  } = point;

  const destinationDescription = city ? Object(_mock_destinationDescription__WEBPACK_IMPORTED_MODULE_2__["getDestinationDescription"])() : null;

  const availableOffers = Object(_mock_option__WEBPACK_IMPORTED_MODULE_1__["getRandomOffersByPointType"])(pointType);

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${pointType.toLowerCase()}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${new _eventTypeItems__WEBPACK_IMPORTED_MODULE_5__["default"](pointType).getTemplate()}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${pointType}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
            ${new _citiesDatalist__WEBPACK_IMPORTED_MODULE_6__["default"]().getTemplate()}
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(startDate, `YY/MM/DD HH:mm`)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(endDate, `YY/MM/DD HH:mm`)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        ${availableOffers.length || destinationDescription ? `
          <section class="event__details">
            ${availableOffers.length ? new _availableOffers__WEBPACK_IMPORTED_MODULE_3__["default"](availableOffers, offers).getTemplate() : ``}
            ${destinationDescription ? new _destination_details__WEBPACK_IMPORTED_MODULE_4__["default"](destinationDescription).getTemplate() : ``}
          </section>
        ` : ``}
      </form>
    </li>
  `;
};

class EditPoint {
  constructor(point) {
    this._point = point;
    this._element = null;
  }

  getTemplate() {
    return createEditPointTemplate(this._point);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/empty-list.js":
/*!********************************!*\
  !*** ./src/view/empty-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmptyList; });
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");


const createEmptyListTemplate = () => {
  return `
    <p class="trip-events__msg">
      Click New Event to create your first point
    </p>
  `;
};

class EmptyList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createEmptyListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/eventTypeItems.js":
/*!************************************!*\
  !*** ./src/view/eventTypeItems.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventTypeItems; });
/* harmony import */ var _mock_pointType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/pointType */ "./src/mock/pointType.js");
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");



const createEventTypeItems = (currentPointType) => {
  return Object.values(_mock_pointType__WEBPACK_IMPORTED_MODULE_0__["PointType"]).map((pointType) => {
    const value = pointType.toLowerCase();
    const id = `event-type-${value}`;
    const labelClass = `event__type-label event__type-label--${value}`;
    const isChecked = pointType === currentPointType;

    return `
      <div class="event__type-item">
        <input
          id="${id}"
          class="event__type-input visually-hidden"
          type="radio"
          name="event-type"
          value="${value}"
          ${isChecked ? `checked` : ``}
        />

        <label
          class="${labelClass}"
          for="${id}"
        >
          ${pointType}
        </label>
      </div>
    `;
  }).join(``);
};

class EventTypeItems {
  constructor(currentPointType) {
    this._currentPointType = currentPointType;
    this._element = null;
  }

  getTemplate() {
    return createEventTypeItems(this._currentPointType);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");


const createFilterTemplate = () => {
  return `
    <h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
      </div>

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
};

class Filter {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/list.js":
/*!**************************!*\
  !*** ./src/view/list.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");


const createListTemplate = () => {
  return `<ul class="trip-events__list"></ul>`;
};

class List {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");


const createMenuTemplate = () => {
  return `
    <h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>
  `;
};

class Menu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMenuTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/offer.js":
/*!***************************!*\
  !*** ./src/view/offer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Offer; });
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");


const createOfferTemplate = (offer) => {
  const {name, price} = offer;

  return `
    <li class="event__offer">
      <span class="event__offer-title">${name}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </li>
  `;
};

class Offer {
  constructor(offer) {
    this._offer = offer;
    this._element = null;
  }

  getTemplate() {
    return createOfferTemplate(this._offer);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/offers.js":
/*!****************************!*\
  !*** ./src/view/offers.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Offers; });
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");
/* harmony import */ var _offer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer */ "./src/view/offer.js");



const createOffersTemplate = (offers) => {
  return `
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
        ${offers.map((offer) => new _offer__WEBPACK_IMPORTED_MODULE_1__["default"](offer).getTemplate()).join(``)}
    </ul>
  `;
};

class Offers {
  constructor(offers) {
    this._offers = offers;
    this._element = null;
  }

  getTemplate() {
    return createOffersTemplate(this._offers);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/point.js":
/*!***************************!*\
  !*** ./src/view/point.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date */ "./src/utils/date.js");
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");
/* harmony import */ var _offers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offers */ "./src/view/offers.js");




const createPointTemplate = (point) => {
  const {
    pointType,
    city,
    offers,
    totalPrice,
    startDate,
    endDate
  } = point;

  const shortMonthName = Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(startDate, `MMM`);
  const startDay = Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(startDate, `D`);
  const eventDuration = Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["getDurationString"])(startDate, endDate) || `30M`;

  return `
    <li class="trip-events__item">
      <div class="event">
        <time
            class="event__date"
            datetime="${Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["getDateTimeFromDate"])(startDate)}"
        >
            ${shortMonthName.toUpperCase()} ${startDay}
        </time>

        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType.toLowerCase()}.png" alt="Event type icon">
        </div>

        <h3 class="event__title">${pointType} ${city}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["getDateTimeFromDate"])(startDate)}">${Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(startDate, `HH:mm`)}</time>
            &mdash;
            <time class="event__end-time" datetime="${Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["getDateTimeFromDate"])(endDate)}">${Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(endDate, `HH:mm`)}</time>
          </p>
          <p class="event__duration">${eventDuration}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${totalPrice}</span>
        </p>
        ${new _offers__WEBPACK_IMPORTED_MODULE_2__["default"](offers).getTemplate()}
        <button class="event__favorite-btn event__favorite-btn--active" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
};

class Point {
  constructor(point) {
    this._point = point;
    this._element = null;
  }

  getTemplate() {
    return createPointTemplate(this._point);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");


const createSortTemplate = () => {
  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div class="trip-sort__item  trip-sort__item--day">
        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
        <label class="trip-sort__btn" for="sort-day">Day</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
        <label class="trip-sort__btn" for="sort-time">Time</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
        <label class="trip-sort__btn" for="sort-price">Price</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
      </div>
    </form>
  `;
};

class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-cost.js":
/*!*******************************!*\
  !*** ./src/view/trip-cost.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripCost; });
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");


const createTripCostTemplate = (points) => {
  const totalCost = points.reduce((accumulator, point) => accumulator + point.totalPrice, 0);

  return `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
    </p>
  `;
};

class TripCost {
  constructor(points = []) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return createTripCostTemplate(this._points);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/tripInfo.js":
/*!******************************!*\
  !*** ./src/view/tripInfo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripInfo; });
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date */ "./src/utils/date.js");
/* harmony import */ var _helpers_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/create-element */ "./src/helpers/create-element.js");



const joinPointsCities = (points) => {
  return points.reduce((acc, point, index) => {
    return `${acc}${!index ? ` - ` : ``}${point.city}`;
  }, ``);
};

const createTripInfoTemplate = (points) => {
  if (!points.length) {
    return ``;
  }

  const cities = [];

  points.forEach((point) => {
    if (cities.indexOf(point.city) === -1) {
      cities.push(point.city);
    }
  });

  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];

  const title = cities.length > 3 ?
    `${firstPoint.city} - ... - ${lastPoint.city}` :
    joinPointsCities(points);

  const startDate = Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(firstPoint.startDate, `DD MMM`);
  const endDate = Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(lastPoint.endDate, `DD MMM`);

  const dates = (startDate !== endDate) ?
    `${startDate} - ${endDate}` :
    `${startDate}`;

  return `
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${title}</h1>
        <p class="trip-info__dates">${dates}</p>
      </div>
    </section>
  `;
};

class TripInfo {
  constructor(points = []) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return createTripInfoTemplate(this._points);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_helpers_create_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map