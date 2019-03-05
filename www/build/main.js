webpackJsonp([2],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_payment__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, toastCtrl, ngZone, actionSheetCtrl, storage) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.firedata = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/allpins');
        this.showselect = false;
        window.ionicPageRef = {
            zone: this.ngZone,
            component: this
        };
    }
    HomePage.prototype.fetchAllSpots = function (map) {
        this.getdist();
        var load = this.loadingCtrl.create({
            content: 'Loading full map...',
        });
        load.present();
        this.firedata.orderByChild('mjbmmn').once('value', function (snapshot) {
            var result = snapshot.val();
            var temparr = [];
            for (var key in result) {
                temparr.push(result[key]);
            }
            load.dismiss();
            // Has gotten from firebase ready to load
            temparr.forEach(function (feature) {
                // Customize and pin all markers
                var customicon;
                switch (feature.pintype) {
                    case "Private Spot":
                        customicon = '../../assets/icon/black.png';
                        break;
                    case "Spot for Lease":
                        customicon = '../../assets/icon/yellow.png';
                        break;
                    case "Spot for Sale":
                        customicon = '../../assets/icon/green.png';
                        break;
                    case "Spot Purchased":
                        customicon = '../../assets/icon/blue.png';
                        break;
                }
                var marker = new google.maps.Marker({
                    position: feature.latLng,
                    icon: customicon,
                    // draggable: true,  
                    animation: google.maps.Animation.DROP,
                    map: map
                });
                var loc1 = new google.maps.LatLng(33.678, -116.243);
                var loc2 = marker.getPosition();
                var dist = loc2.distanceFrom(loc1);
                dist = dist / 1000;
                var othersContentString = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">' + feature.pintype + '</h1>' +
                    '<div id="bodyContent">' +
                    '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +
                    '<p ><h4>Price - $' + feature.price + '</h4>' +
                    '<p ><h4>Details - Locked | ' + dist + ' km away </h4>' +
                    'Details of this location are locked ' +
                    'purchase spot! to get the details ' +
                    '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f;" >Purchase Spot</button>' +
                    '<br><br><br><br>' +
                    '</div>' +
                    '</div>';
                var ownerContentString = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">You Pinned This Spot As A ' + feature.pintype + '</h1>' +
                    '<div id="bodyContent">' +
                    // '<p ><h4 style="color: #ae6c2f;">This spot belongs to you</h4>' +          
                    '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +
                    '<p ><h4>Price - $' + feature.price + '</h4>' +
                    '<p ><h4>Details - ' + feature.description + '</h4>' +
                    '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f;" >Remove Spot</button>' +
                    '<br><br><br><br>' +
                    '</div>' +
                    '</div>';
                var othersinfowindow = new google.maps.InfoWindow({
                    content: othersContentString
                });
                marker.addListener('click', function () {
                    if (map.getZoom() != 13 && map.getZoom() != 15) {
                        map.setZoom(15);
                        map.panTo(marker.getPosition());
                    }
                    else if (map.getZoom() == 15) {
                        if (feature.pinowner == __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid) {
                            othersinfowindow.setContent(ownerContentString);
                            othersinfowindow.open(map, marker);
                        }
                        else {
                            othersinfowindow.setContent(othersContentString);
                            othersinfowindow.open(map, marker);
                        }
                    }
                    else {
                        map.setZoom(15);
                        map.panTo(marker.getPosition());
                    }
                });
            });
        });
    };
    HomePage.prototype.addMarkerOnClick = function (map, position) {
        var _this = this;
        var customicon;
        // console.log(this.pinspotas);
        switch (this.pinspotas) {
            case "Private Spot":
                customicon = '../../assets/icon/black.png';
                break;
            case "Spot for Lease":
                customicon = '../../assets/icon/yellow.png';
                break;
            case "Spot for Sale":
                customicon = '../../assets/icon/green.png';
                break;
            case "Spot Purchased":
                customicon = '../../assets/icon/blue.png';
                break;
        }
        this.pinnedmarker = new google.maps.Marker({
            position: position,
            icon: customicon,
            // draggable: true,  
            animation: google.maps.Animation.DROP,
            map: map
        });
        var loc1 = new google.maps.LatLng(33.678, -116.243);
        var loc2 = this.pinnedmarker.getPosition();
        var dist = loc2.distanceFrom(loc1);
        dist = dist / 1000;
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 style="color:#ae6c2f;" id="firstHeading" class="firstHeading">' + this.pinspotas + '</h1>' +
            '<div id="bodyContent">' +
            '<p ><h4>This spot is ' + dist + ' km away from your current location </h4>' +
            '<br><textarea id="price" class="taone" maxlength="5" placeholder="Price in $">0</textarea>' +
            '<br><textarea id="desc" class="tatwo" placeholder="Describe Spot Here">Here you can describe this spot more for other users of the app</textarea>' +
            '<br><br><p align="center"><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.listspot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f; margin-right:20px;" >List as ' + this.pinspotas + '</button></p>' +
            '<br>><br>' +
            '</div>' +
            '</div>';
        this.addmarkerInfoWindow = new google.maps.InfoWindow({
            content: contentString
        });
        map.setZoom(15);
        map.panTo(this.pinnedmarker.getPosition());
        this.addmarkerInfoWindow.open(map, this.pinnedmarker);
        this.pinnedmarker.addListener('click', function () {
            if (map.getZoom() != 13 && map.getZoom() != 15) {
                map.setZoom(15);
                map.panTo(this.pinnedmarker.getPosition());
            }
            else if (map.getZoom() == 15) {
            }
            else {
                map.setZoom(15);
                map.panTo(this.pinnedmarker.getPosition());
            }
        });
        this.addmarkerInfoWindow.addListener('closeclick', function (e) {
            console.log('it has been closed');
            _this.pinnedmarker.setMap(null);
        });
        return this.pinnedmarker;
    };
    HomePage.prototype.listspot = function () {
        var _this = this;
        this.dollarprice = document.getElementById("price");
        this.spotdesc = document.getElementById("desc");
        this.storage.get('position').then(function (res) {
            console.log(_this.pinspotas);
            console.log(_this.dollarprice.value);
            _this.pinuid = _this.firedata.push().key;
            _this.firedata.child(_this.pinuid).set({
                pinowner: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid,
                price: _this.dollarprice.value,
                description: _this.spotdesc.value,
                latLng: res,
                pintype: _this.pinspotas
            }).then(function (res) {
                _this.addmarkerInfoWindow.close();
                _this.presentToast('Spot pinned as ' + _this.pinspotas + ' at $' + _this.dollarprice.value);
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    HomePage.prototype.getdist = function () {
        google.maps.LatLng.prototype.distanceFrom = function (latlng) {
            var lat = [this.lat(), latlng.lat()];
            var lng = [this.lng(), latlng.lng()];
            var R = 6378137;
            var dLat = (lat[1] - lat[0]) * Math.PI / 180;
            var dLng = (lng[1] - lng[0]) * Math.PI / 180;
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat[0] * Math.PI / 180) * Math.cos(lat[1] * Math.PI / 180) *
                    Math.sin(dLng / 2) * Math.sin(dLng / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return Math.round(d);
        };
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        // this.fetchAllSpots();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(33.678, -116.243);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            disableDefaultUI: true,
            mapTypeId: 'hybrid'
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addDefaultMarker(this.map, latLng);
        this.fetchAllSpots(this.map);
        this.map.addListener('click', function (e) {
            _this.storage.set('position', e.latLng);
            if (_this.addmarkerInfoWindow == undefined) {
                console.log('no need to call close');
                _this.selectRef.open();
            }
            else {
                // this.addmarkerInfoWindow.close();
            }
        });
    };
    HomePage.prototype.onChange = function () {
        var _this = this;
        this.storage.get('position').then(function (res) {
            _this.addMarkerOnClick(_this.map, res);
        });
    };
    HomePage.prototype.purchaseSpot = function () {
        console.log('Purchase Spot');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__payment_payment__["a" /* PaymentPage */]);
    };
    HomePage.prototype.addDefaultMarker = function (map, position) {
        var defmarker = new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title: 'Hello World!'
        });
        defmarker.addListener('click', function () {
            map.setZoom(15);
            map.setCenter(defmarker.getPosition());
        });
        return defmarker;
    };
    HomePage.prototype.openModal = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Are you sure you want to logout',
            buttons: [
                {
                    text: 'Logout',
                    role: 'destructive',
                    handler: function () {
                        // this.logoutFacebook();
                        // this.logoutEmail();
                        // this.logoutTwitter();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySelect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Select */])
    ], HomePage.prototype, "selectRef", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/pages/home/home.html"*/'\n<ion-header >\n\n  <ion-navbar align-title="center" color="dark">\n      <button ion-button left menuToggle>\n        <ion-icon class="icon ion-home custom-icon" name="menu"></ion-icon>\n      </button>\n      <ion-title color="strange">SPOTSWOPPER</ion-title>\n\n      <!-- Button for testing the login page -->\n      <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon class="icon ion-home custom-icon" name="notifications"></ion-icon>\n          </button>\n      </ion-buttons>\n\n      <ion-buttons end>\n        <button ion-button icon-only (click)="openModal()">\n          <ion-icon name="options"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="contentdiv">\n  <div  #map id="map"></div>\n\n  <ion-select (ngModelChange)="onChange()" [(ngModel)]="pinspotas" #mySelect>\n    <ion-option>Private Spot</ion-option>\n    <ion-option>Spot for Lease</ion-option>\n    <ion-option>Spot for Sale</ion-option>\n    <ion-option>Spot Purchased</ion-option>\n</ion-select>\n\n<div class="bottombuttonscontainer">\n\n    <ion-grid style="background-color: #222; ">\n      \n      <ion-row  style="justify-content: center;" >\n\n          <div class="testclass">\n              <img style="zoom:5%;" src="../../assets/icon/map-spot.svg"><br>My Spots\n          </div>\n\n          <div class="testclass">\n                  <img style="zoom:5%;" src="../../assets/icon/map.svg"><br>Map Layers\n          </div>\n\n          <div class="testclass" (click)="openOptions(3)">\n              <img style="zoom:5%;" src="../../assets/icon/world-wide-internet-signal.svg"><br>Off Grid\n          </div>\n\n          <div class="testclass" (click)="openOptions(4)">\n              <img style="zoom:5%;" src="../../assets/icon/search.svg"><br>Search Spots\n          </div>\n\n        </ion-row>\n\n\n\n        <!-- <ion-row>\n            <div class="wherebottomlie">\n                  <div *ngIf="showThree" class="offgridcontainer">\n                          <ion-grid>\n                              <ion-row style="text-align:center;">\n                      \n                                    <ion-col >\n                                      <button ion-button block color="redlike"                                 (click)="openSaveModal()">\n                                               Save New Map\n                                       </button>\n                                     </ion-col>\n              \n                                    <ion-col >\n                                         <button ion-button block color="greytwo">\n                                      <ion-icon name="pulse" color="light"></ion-icon>\n                  \n                                                     Go Offline</button>\n                                    </ion-col>\n                                    \n                          </ion-row>\n                       </ion-grid>\n                                      \n                      </div >\n            </div>\n\n        </ion-row> -->\n    </ion-grid>\n    \n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, auth, navParams) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.email = 'a@gmail.com';
        this.password = 'aaaaaaaa';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.signin();
    };
    LoginPage.prototype.signin = function () {
        var _this = this;
        this.auth.signInWithEmail(this.email, this.password).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }).catch(function (err) {
            console.log(err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/pages/login/login.html"*/'<ion-content padding style="background: #2f2f2f">\n  \n  <p align="center"><img style="zoom:45%;" src="../../assets/icon/spotgobel.png"></p>\n\n  <br>\n  <br>\n  \n<ion-list>  \n\n  <ion-item  class="itemclass">\n    <ion-label floating>E-mail</ion-label>\n    <ion-input [(ngModel)]="email"></ion-input>\n  </ion-item>\n\n\n  <ion-item  class="itemclass">\n      <ion-label floating>Password</ion-label>\n      <ion-input name="email" [(ngModel)]="password"></ion-input>\n  </ion-item>\n</ion-list>\n\n<div padding>\n    <button ion-button block outline color="strange" (click)="signin()">LOGIN</button>\n  <!-- <button block ion-button class="facebookbutton"><ion-icon class="icon ion-home custom-icon" name="logo-facebook" style="margin-right:20px"></ion-icon>Login with facebook</button>   -->\n</div>\n\n<div class="bottombuttonscontainer">\n\n    <ion-grid>\n      \n      <ion-row style="justify-content: center;" >\n\n          <div class="testclass">\n              <img style="zoom:10%;" src="../../assets/icon/twitter.svg">\n          </div>\n\n          <div class="testclass">\n                  <img style="zoom:10%;" src="../../assets/icon/google.svg">\n          </div>\n\n          <div class="testclass" (click)="openOptions(3)">\n              <img style="zoom:10%;" src="../../assets/icon/facebook.svg">\n          </div>\n\n        </ion-row>\n    </ion-grid>\n    \n</div>\n\n<div padding style="text-align:center;" (click)="createaccount()">\n    <ion-label style="color:white; font-size: 17px;" >Dont have an account? Sign Up</ion-label>\n</div>\n</ion-content>'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.stripe = Stripe('pk_test_FIrkWSsjvlx9TKX0hm3tAyiO');
        this.baseUrl = "http://caurix.net/stripeApi/stripe-php-6.30.4/spotgolbber.php";
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
        this.setupStripe();
    };
    PaymentPage.prototype.setupStripe = function () {
        var _this = this;
        var elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.card = elements.create('card', { style: style });
        this.card.mount('#card-element');
        this.card.addEventListener('change', function (event) {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            _this.stripe.createSource(_this.card).then(function (result) {
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                }
                else {
                    _this.stripe.createToken(_this.card).
                        then(function (res) {
                        // console.log(res.token);
                        // console.log(res.token.id);            
                        _this.makePost(res.token);
                    }).catch(function (err) {
                        console.log(err);
                    });
                    // const ress = JSON.stringify(result);
                    // console.log(JSON.parse(ress));
                    // this.makePost(ress);
                    // console.log(ress);
                    // console.log(result);
                    // alert(result);
                }
            });
        });
    };
    PaymentPage.prototype.makePost = function (cardtoken) {
        this.http
            .put('http://caurix.net/stripeApi/stripe-php-6.30.4/spotgolbber.php', {
            params: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]().set('stripeToken', cardtoken),
        }).retry(3)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form action="/" method="post" id="payment-form">\n  \n    <div class="form-row">\n      <div id="card-element">\n        <!-- a Stripe Element will be inserted here. -->\n      </div>\n\n      <!-- Used to display Element errors -->\n      <div id="card-errors" role="alert"></div>\n    </div>\n\n  <button ion-button block large>Add Card</button>\n    \n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object])
    ], PaymentPage);
    return PaymentPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		788,
		1
	],
	"../pages/payment/payment.module": [
		789,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import AuthProvider = firebase.auth.AuthProvider;
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthProvider.prototype.signInWithEmail = function (newEmail, newPassword) {
        return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(407);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_payment_payment__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var firebaseconfig = {
    apiKey: "AIzaSyDxNm3T6n3CPB5u28aVRIIzggSV9HChpsw",
    authDomain: "spotgolbber.firebaseapp.com",
    databaseURL: "https://spotgolbber.firebaseio.com",
    projectId: "spotgolbber",
    storageBucket: "spotgolbber.appspot.com",
    messagingSenderId: "72131126436"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(firebaseconfig),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                // UploaderProvider,
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuth"],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__["a" /* AuthProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_payment_payment__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_payment_payment__["a" /* PaymentPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'My Account', icon: 'ios-home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], pageName: 'GotopremiumPage', index: 0 },
            { title: 'Join Now!', icon: 'ios-alert', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], pageName: 'GotopremiumPage', index: 1 },
            { title: 'Map Settings', icon: 'ios-settings', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], pageName: 'GotopremiumPage', index: 2 },
            { title: 'Get Help', icon: 'ios-people', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], pageName: 'GotopremiumPage', index: 3 },
            { title: 'Share', icon: 'ios-share', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], pageName: 'GotopremiumPage', index: 4 },
            { title: 'Inbox', icon: 'ios-chatbubbles', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], pageName: 'GotopremiumPage', index: 5 },
            { title: 'Go Premium', icon: 'ios-flash', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], pageName: 'GotopremiumPage', index: 6 },
            { title: 'Logout', icon: 'ios-log-out', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], pageName: 'GotopremiumPage', index: 7 },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/app/app.html"*/'<ion-menu persistent="true" [content]="content" type="overlay">\n    <ion-header no-border>\n      <ion-toolbar>\n            <!-- <ion-title> -->\n                <div class="container" (click)="openprofile()">\n                    <img class="userimage" src="../../assets/icon/user.svg">\n                    <div class="user-name">Edung Divinefavour</div>\n                    <div class="user-mail">lawrenedickson49@gmail.com</div>\n                </div>\n            <!-- </ion-title> -->\n\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n\n        <ion-list>\n          <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n              <ion-icon item-start [name]="p.icon"></ion-icon>\n              <!-- <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n\n              {{ p.title }}\n            </button>\n        </ion-list>\n      </ion-content>\n</ion-menu>\n      \n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[402]);
//# sourceMappingURL=main.js.map