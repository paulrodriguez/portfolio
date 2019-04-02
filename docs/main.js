(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");






var routes = [
    { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__["CvComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <nav class=\"nav-wrapper\">\n    <ul class=\"nav justify-content-center\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"/\">Home</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/cv\">CV</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/portfolio\">Portfolio</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"\">Blog</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"\">Reading List</a>\n  </li>\n  </ul>\n  </nav>\n  <div id=\"content\">\n  <router-outlet></router-outlet>\n  <!--<div class=\"push\"></div>-->\n  </div>\n</div>\n<footer class=\"footer-wrapper\">\n  <div>\n    <p>Built with Angular 2</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  height: 100%;\n  margin: 0; }\n\n.nav-wrapper {\n  background-color: #191919; }\n\n.nav-wrapper .nav-link {\n    color: #ffffff;\n    transition: color .2s linear, background-color .2s linear, border-color .2s linear; }\n\n.nav-wrapper .nav-link:hover {\n      color: #FD3137; }\n\n.footer-wrapper {\n  background-color: #191919;\n  color: #ffffff;\n  height: 40px; }\n\n#content {\n  max-width: 800px;\n  margin: 0 auto; }\n\n.wrapper {\n  min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWwvcHJvZ3JhbW1pbmcvcG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFNBQVMsRUFBQTs7QUFHWDtFQUNFLHlCQUF5QixFQUFBOztBQUQzQjtJQUdJLGNBQWM7SUFDZCxrRkFBa0YsRUFBQTs7QUFKdEY7TUFPTSxjQUFjLEVBQUE7O0FBSXBCO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWE7RUFDYixZQUFZLEVBQUE7O0FBSWQ7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYSxFQUFBOztBQUtmO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5hdi13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbiAgLm5hdi1saW5rIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgbGluZWFyLCBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIGJvcmRlci1jb2xvciAuMnMgbGluZWFyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI0ZEMzEzNztcbiAgICB9XG4gIH1cbn1cbi5mb290ZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gIGNvbG9yOiNmZmZmZmY7XG4gIGhlaWdodDogNDBweDtcblxufVxuXG4jY29udGVudCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjowIGF1dG87XG5cblxufVxuXG4ud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _cv_cv_component__WEBPACK_IMPORTED_MODULE_6__["CvComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cv/cv.component.html":
/*!**************************************!*\
  !*** ./src/app/cv/cv.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">{{title}}</h1>\n<div *ngFor=\"let cv of cv_data;index as i\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h4><i>{{cv.title}}</i> @ <strong>{{ cv.companyName }}</strong> in {{cv.location}}</h4>\n    </div>\n    <div class=\"col-12\">\n      <h5>{{cv.startDate}} - {{cv.endDate}}</h5>\n    </div>\n    <div class=\"col-12\">\n      <a class=\".text-primary\" data-toggle=\"collapse\"\n        href=\"#collapse_{{i}}\" role=\"button\" aria-expanded=\"false\"\n        attr.aria-controls=\"collapse_{{ i }}\">\n          More\n      </a>\n      <div class=\"collapse\" id=\"collapse_{{i}}\">\n        <div class=\"card card-body\">\n          <ul>\n            <li *ngFor=\"let bp of cv.bulletPoints\">\n              {{ bp }}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cv/cv.component.scss":
/*!**************************************!*\
  !*** ./src/app/cv/cv.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2L2N2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_cv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/cv */ "./src/app/data/cv.ts");



var CvComponent = /** @class */ (function () {
    function CvComponent() {
        this.cv_data = _data_cv__WEBPACK_IMPORTED_MODULE_2__["CvData"];
        this.title = "Resume";
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cv',
            template: __webpack_require__(/*! ./cv.component.html */ "./src/app/cv/cv.component.html"),
            styles: [__webpack_require__(/*! ./cv.component.scss */ "./src/app/cv/cv.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CvComponent);
    return CvComponent;
}());



/***/ }),

/***/ "./src/app/data/cv.ts":
/*!****************************!*\
  !*** ./src/app/data/cv.ts ***!
  \****************************/
/*! exports provided: CvData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvData", function() { return CvData; });
var CvData = [
    {
        title: "Web Developer",
        startDate: "July 2017",
        endDate: "Present",
        location: "Gardena, CA",
        companyName: "Next Level Apparel",
        bulletPoints: [
            "Skills: Magento, PHP, HTML/HTML5, CSS/CSS3, JavaScript, JQuery, MySQL, Git, VBA",
            "Improved website security by patching MySQL vulnerabilities, validating user input and\nrevamping access permissions to reduce attack vectors by 90%.",
            "Refactored code, applying object oriented design techniques leading to reduced\ncomplexity, better reusability and increased flexibility.",
            "Optimized loading time for slow pages through caching and optimized MySQL queries,\nreducing load times by at least 50%.",
            "Developed API module for payment processor to protect credit card information and\nimprove website's PCI compliance.",
            "Created VBA scripts for Excel files to auto-generate data for new products, images and\nprices, reducing manual workload by 90%."
        ]
    },
    {
        title: "Programmer Analyst",
        startDate: "May 2015",
        endDate: "July 2017",
        location: "Vernon, CA",
        companyName: "Tadashi Shoji",
        bulletPoints: [
            "Skills: Magento, PHP, HTML/HTML5, CSS/CSS3, JavaScript, JQuery, MySQL, Git",
            "Enhanced website with RMA feature to speed up internal processing of returns and\ngather data to find ways to improve products for better sales.",
            "Automated creation of shipment tracking information in the website that reduced manual\nworkload by 90%.",
            "Implemented appointment scheduling feature for in-store fittings that increased traffic and\nsales for retail stores."
        ]
    }
];


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Welcome!</h1>\n<p>My Name is Paul.</p>\n<p>With over four years of professional experience as a Web Developer, I have the skills\nnecessary to product high quality websites and help companies improve their websites\nthrough better user experience, security, maintenance and reliability.</p>\n<p>Although most of my experience has been with the LAMP stack, I am always open\n  to learn new technologies to advance my skills.</p>\n<!--\n<p>I have a passion for coding.</p>\n<p>Building things with my own two hands has always brought me great satisfaction.</p>\n<p>The reason I choose coding as the medium to build things is due to its ease of accessiblity\n  and virtual resources.\n<p>No physical resources are wasted and making multiple mistakes is more cost-friendly.</p>\n<h2>My Experience</h2>\n<p>\nI have been a Web Developer for over four years, mainly working on the LAMP stack along\nwith the Magento framework.\n</p>\n-->\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">My Work</h1>\n<div class=\"card-group\">\n  <div class=\"row\">\n  <div class=\"card col-4\" *ngFor=\"let item of content\">\n    <!--img src=\"...\" class=\"card-img-top\" alt=\"...\">-->\n    <div class=\"card-body\">\n      <h5 class=\"card-title\"><a href=\"{{item.link}}\">{{item.title}}</a></h5>\n      <p class=\"card-text\">{{item.description}}</p>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.content = [
            {
                title: "Next Level Apparel",
                description: "B2B E-Commerce Apparel website built with Magento 1, currently porting to Magento 2",
                link: "https://www.nextlevelapparel.com"
            },
            {
                title: "Tadashi Shoji",
                description: "B2C E-Commerce Fashion website built with Magento 1",
                link: "https://www.tadashishoji.com"
            },
            {
                title: "FeedMi",
                description: "Restaurant locator for the city of Milan in Italy.\n      Restaurants can be searched by cuisines, price, transportation, and much more.\n      Restaurant owners can manage their restaurant to change menu items, pricing, etc.",
                link: "http://feedmi.it"
            },
            {
                title: "Metro Apartments NYC",
                description: "Real estate listing website that allows searching for apartments in the NYC area.\n      Backend functionality allows for agents to manage their listings.",
                link: "http://www.metroaptnyc.com"
            }
        ];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/programming/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map