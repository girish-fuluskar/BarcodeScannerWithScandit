"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_split-screen_split-screen_module_ts"],{

/***/ 1422:
/*!*************************************************************!*\
  !*** ./src/app/split-screen/split-screen-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplitScreenPageRoutingModule": () => (/* binding */ SplitScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _split_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./split-screen.page */ 9009);




const routes = [
    {
        path: '',
        component: _split_screen_page__WEBPACK_IMPORTED_MODULE_0__.SplitScreenPage
    }
];
let SplitScreenPageRoutingModule = class SplitScreenPageRoutingModule {
};
SplitScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplitScreenPageRoutingModule);



/***/ }),

/***/ 764:
/*!*****************************************************!*\
  !*** ./src/app/split-screen/split-screen.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplitScreenPageModule": () => (/* binding */ SplitScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _split_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./split-screen-routing.module */ 1422);
/* harmony import */ var _split_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./split-screen.page */ 9009);







let SplitScreenPageModule = class SplitScreenPageModule {
};
SplitScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _split_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplitScreenPageRoutingModule
        ],
        declarations: [_split_screen_page__WEBPACK_IMPORTED_MODULE_1__.SplitScreenPage]
    })
], SplitScreenPageModule);



/***/ }),

/***/ 9009:
/*!***************************************************!*\
  !*** ./src/app/split-screen/split-screen.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplitScreenPage": () => (/* binding */ SplitScreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_girish_Documents_LTI_Sooner_datacapture_cordova_samples_BarcodeCaptureViewsSample_template_src_node_modules_ngtools_webpack_src_loaders_direct_resource_js_split_screen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./split-screen.page.html */ 8464);
/* harmony import */ var _split_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./split-screen.page.scss */ 8683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 8260);





let SplitScreenPage = class SplitScreenPage {
    constructor(changeDetection) {
        this.changeDetection = changeDetection;
        this.context = Scandit.DataCaptureContext.forLicenseKey(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.scanditLicenseKey);
        this.camera = Scandit.Camera.default;
        this.settings = new Scandit.BarcodeCaptureSettings();
        this.barcodeCapture = Scandit.BarcodeCapture.forContext(this.context, this.settings);
        this.captureView = Scandit.DataCaptureView.forContext(this.context);
        this.overlay = Scandit.BarcodeCaptureOverlay.withBarcodeCaptureForView(this.barcodeCapture, this.captureView);
        this.results = [];
        this.isCaptureViewConnected = false;
    }
    ngAfterViewInit() {
        this.overlay.viewfinder = new Scandit.LaserlineViewfinder(Scandit.LaserlineViewfinderStyle.Animated);
        this.settings.enableSymbologies([
            Scandit.Symbology.EAN13UPCA,
            Scandit.Symbology.EAN8,
            Scandit.Symbology.UPCE,
            Scandit.Symbology.QR,
            Scandit.Symbology.DataMatrix,
            Scandit.Symbology.Code39,
            Scandit.Symbology.Code128,
            Scandit.Symbology.InterleavedTwoOfFive,
        ]);
        this.settings.codeDuplicateFilter = 1000;
        this.settings.locationSelection = new Scandit.RadiusLocationSelection(new Scandit.NumberWithUnit(0, Scandit.MeasureUnit.Fraction));
        this.barcodeCapture.applySettings(this.settings);
        this.barcodeCapture.addListener({
            didScan: (barcodeCapture, session) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const barcode = session.newlyRecognizedBarcodes[0];
                const symbology = new Scandit.SymbologyDescription(barcode.symbology);
                this.results.push({ data: barcode.data, symbology: symbology.readableName });
                this.changeDetection.detectChanges();
                this.resetScanTimeout();
            })
        });
        this.context.setFrameSource(this.camera);
        this.camera.switchToDesiredState(Scandit.FrameSourceState.On);
    }
    ionViewDidEnter() {
        this.captureView.connectToElement(this.captureViewElement.nativeElement);
        this.isCaptureViewConnected = true;
        this.barcodeCapture.isEnabled = true;
        this.resetScanTimeout();
    }
    ionViewWillLeave() {
        this.captureView.detachFromElement();
        this.isCaptureViewConnected = false;
        this.camera.switchToDesiredState(Scandit.FrameSourceState.Off);
        this.barcodeCapture.isEnabled = false;
    }
    ngOnDestroy() {
        this.context.dispose();
    }
    clearResults() {
        this.results = [];
    }
    resetScanTimeout() {
        clearTimeout(this.scanTimer);
        this.barcodeCapture.isEnabled = true;
        this.scanTimer = setTimeout(() => {
            this.barcodeCapture.isEnabled = false;
            this.changeDetection.detectChanges();
        }, 10000);
    }
};
SplitScreenPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef }
];
SplitScreenPage.propDecorators = {
    captureViewElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['captureView',] }]
};
SplitScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-split-screen',
        template: _Users_girish_Documents_LTI_Sooner_datacapture_cordova_samples_BarcodeCaptureViewsSample_template_src_node_modules_ngtools_webpack_src_loaders_direct_resource_js_split_screen_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_split_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplitScreenPage);



/***/ }),

/***/ 8464:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/split-screen/split-screen.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Split Screen</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clearResults()\">Clear</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #captureView (click)=\"this.resetScanTimeout()\" [ngClass]=\"{'connected': this.isCaptureViewConnected, 'paused': !this.barcodeCapture.isEnabled}\">\n    <p *ngIf=\"!this.barcodeCapture.isEnabled\">Tap to continue</p>\n  </div>\n  <ion-list slot=\"fixed\">\n    <ion-item *ngFor=\"let result of results\">\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text>\n          <h2>{{ result.data }}</h2>\n        </ion-text>\n        <ion-text>\n          <p>{{ result.symbology }}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 8683:
/*!*****************************************************!*\
  !*** ./src/app/split-screen/split-screen.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-content > div {\n  width: 100%;\n  height: 50%;\n  background-color: black;\n}\nion-content > div.connected {\n  background-color: transparent;\n  z-index: -1;\n}\nion-content > div.paused {\n  background-color: rgba(0, 0, 0, 0.7);\n}\nion-content > div p {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n}\nion-list {\n  bottom: 0;\n  width: 100%;\n  height: 50%;\n  overflow: scroll;\n}\nion-item ion-text p {\n  color: #2ec1ce;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0LXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUU7RUFDRSxvQ0FBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURKO0FBS0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0FBRkYiLCJmaWxlIjoic3BsaXQtc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50ID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuICAmLmNvbm5lY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgei1pbmRleDogLTE7XG4gIH1cblxuICAmLnBhdXNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB9XG4gIFxuICBwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuaW9uLWxpc3Qge1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuaW9uLWl0ZW0gaW9uLXRleHQgcCB7XG4gIGNvbG9yOiAjMmVjMWNlO1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_split-screen_split-screen_module_ts.js.map