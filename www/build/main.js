webpackJsonp([4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(245);
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
    // email = 'a@gmail.com';
    // password = 'aaaaaaaa';
    function LoginPage(navCtrl, auth, navParams) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        // this.signin();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/pages/login/login.html"*/'<ion-content class="content_bg" padding>\n \n  <!-- <p style="color:#fff;font-size: 30px;" align="center"><img style="zoom:10%;"\n     src="../../assets/icon/logom1.png"><br>SpotSwopper</p> -->\n\n     <br>\n\n\n     <ion-grid style="margin-top: 10px;">\n      <ion-row style="justify-content: center;">\n              <div>\n                      <img alt="logo" height="50" class="timg" src="../../assets/icon/logom1.png" >                        \n                  </div>\n          <div style="margin-top: 10px; font-size: 30px; color:white; padding-left: 5px;">SPOTSWOPPER</div>\n      </ion-row>\n      <ion-row class="knowrow">Know where you stand</ion-row>\n  </ion-grid>\n  <br>\n  <br>\n  \n<ion-list>  \n\n  <ion-item no-lines class="itemclass">\n    <ion-input class="custom-input" placeholder="Username / Email" [(ngModel)]="email"  style="font-size: 18px;" type="email" required></ion-input>  \n    <ion-icon color="white" name="ios-contact-outline" item-left></ion-icon>\n      \n  </ion-item>\n\n    <ion-item no-lines class="itemclass">\n        <ion-input class="custom-input" placeholder="Password" style="font-size: 18px;" type="password" required name="email" [(ngModel)]="password"> </ion-input>\n        <ion-icon color="white" name="ios-lock-outline" item-left></ion-icon>\n    </ion-item>\n\n\n\n  <br>\n\n  <div align="center" style="color: white; font-size: 20px">Forgot Password</div>\n  <br>\n  <br>\n  <div>\n    <button ion-button block style="border-radius: 20px;" color="redlike" (click)="signin()">SIGN IN</button>\n</div>\n<br>\n\n<div align="center" style="color: white; font-size: 20px; opacity: 0.9; margin-top: 50dp">-----------------------OR------------------------</div>\n<br>\n<div  align="center" class="knowrow">Login with your social networks</div>\n\n<!--   \n  <ion-item no-lines style="background: transparent;color: white">\n        <ion-label>Remember me on this device</ion-label>\n        <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>\n    </ion-item> -->\n</ion-list>\n\n\n\n\n<div>\n\n    <ion-grid>\n      \n      <ion-row style="justify-content: center; padding-left: 20px;" >\n\n        <div class="testclass">\n                <img style="zoom:10%;" src="../../assets/icon/facebook.svg">\n        </div>\n\n        <div class="testclass">\n              <img style="zoom:10%;" src="../../assets/icon/twitter.svg">\n        </div>\n\n        <div class="testclass">\n                  <img style="zoom:10%;" src="../../assets/icon/google.svg">\n        </div>\n        </ion-row>\n    </ion-grid>\n    \n</div>\n\n<div align="center" style="text-align:center;" (click)="createaccount()">\n    <ion-label style="color:white; font-size: 17px;" >Dont have an account? Sign Up</ion-label>\n</div>\n\n  \n</ion-content>'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
    function PaymentPage(navCtrl, loadingCtrl, toastCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navParams = navParams;
        this.firedata = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database();
        this.stripe = Stripe('pk_test_FIrkWSsjvlx9TKX0hm3tAyiO');
        this.baseUrl = "http://caurix.net/stripeApi/stripe-php-6.30.4/spotgolbber.php";
        this.price = this.navParams.get('price') * 100;
        this.transactionfee = this.price * 0.1;
        this.totalamount = this.price + this.transactionfee;
        this.spotuid = this.navParams.get('spotuid');
        console.log(this.price);
        console.log(this.transactionfee);
        console.log(this.totalamount);
        console.log(this.spotuid);
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
            _this.load = _this.loadingCtrl.create({
                content: 'Processing your payment please wait...',
            });
            _this.stripe.createSource(_this.card).then(function (result) {
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                }
                else {
                    _this.load.present();
                    _this.stripe.createToken(_this.card).
                        then(function (res) {
                        _this.makePost(res.token.id);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            });
        });
    };
    PaymentPage.prototype.makePost = function (cardtoken) {
        var _this = this;
        var url = this.baseUrl;
        var postData = new FormData();
        postData.append('stripeToken', cardtoken);
        postData.append('spotUid', this.spotuid);
        postData.append('amount', this.totalamount);
        this.http.post(url, postData).subscribe(function (data) {
            var result = data;
            var buyersuid = _this.firedata.ref('/allpins').child(_this.spotuid).push().key;
            _this.firedata.ref('/allpins').child(_this.spotuid).
                child('buyers').child(buyersuid).set(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).then(function (res) {
                _this.firedata.ref('/allpayments').child(result.id).set(data).then(function (res) {
                    console.log(res);
                    _this.load.dismiss();
                    _this.presentToast('Payment Succesful');
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
            _this.load.dismiss();
            _this.presentToast('Couldnt process payment');
        });
    };
    PaymentPage.prototype.presentToast = function (message) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present().then(function (res) {
            _this.navCtrl.pop();
        });
    };
    PaymentPage.prototype.goHome = function () {
        this.navCtrl.pop();
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title (click)="goHome()">payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form action="/" method="post" id="payment-form">\n  \n    <div class="form-row">\n      <div id="card-element">\n        <!-- a Stripe Element will be inserted here. -->\n      </div>\n\n      <!-- Used to display Element errors -->\n      <div id="card-errors" role="alert"></div>\n    </div>\n\n  <button ion-button block large>Securely pay ${{totalamount/100}}</button>\n    \n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
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
	"../pages/listspot/listspot.module": [
		791,
		3
	],
	"../pages/payment/payment.module": [
		790,
		6
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_payment__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(107);
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
        // this.initMySpots();
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.firedata = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database();
        this.showselect = false;
        this.showTwo = false;
        this.showThree = false;
        this.showFour = false;
        this.showOne = false;
        this.privateSpotList = [];
        this.leaseSpotList = [];
        this.saleSpotList = [];
        this.purchasedSpotList = [];
        this.items = [];
        this.itemExpandHeight = 100;
        window.ionicPageRef = { zone: this.ngZone, component: this };
        // console.log(firebase.auth().currentUser.uid);
        // this.firedata.ref('/allpins').on('value', countryList => {
        //   let countries = [];
        //   countryList.forEach( country => {
        //     countries.push(country.val());
        //     return false;
        //   });
        //   this.spotList = countries;
        //   this.loadedSpotList = countries;
        //   this.spotList.forEach(spot =>{
        //     // Load my private spots
        //     if(
        //       (spot.pintype == "Private Spot" && spot.pinowner == firebase.auth().currentUser.uid) ||
        //       (spot.pintype == "Private Spot" && spot.buyer == firebase.auth().currentUser.uid)
        //     ){
        //         this.privateSpotList.push(spot);
        //         // console.log(this.privateSpotList);
        //     }
        //     // Load lease spots
        //     if(
        //       (spot.pintype == "Spot for Lease" && spot.pinowner == firebase.auth().currentUser.uid) ||
        //       (spot.pintype == "Spot for Lease" && spot.buyer == firebase.auth().currentUser.uid)
        //     ){
        //         this.leaseSpotList.push(spot);
        //         // console.log(this.leaseSpotList);
        //     }
        //     // Load spots for sale
        //     if(
        //       (spot.pintype == "Spot for Sale" && spot.pinowner == firebase.auth().currentUser.uid) ||
        //       (spot.pintype == "Spot for Sale" && spot.buyer == firebase.auth().currentUser.uid)
        //     ){
        //         this.saleSpotList.push(spot);
        //         // console.log(this.saleSpotList);
        //     }
        //     // Load spots purchased
        //     if(
        //       (spot.pintype == "Spot Purchased" && spot.pinowner == firebase.auth().currentUser.uid) ||
        //       (spot.pintype == "Spot Purchased" && spot.buyer == firebase.auth().currentUser.uid)
        //     ){
        //         this.purchasedSpotList.push(spot);
        //         // console.log(this.purchasedSpotList);
        //     }
        //   });
        // });
    }
    //   initMySpots(){
    //     this.items = [
    //       {title: "Private Spots", img: "../../assets/icon/lock.svg", expanded: false},
    //       {title: "Spots for Lease", img: "../../assets/icon/give-money.svg", expanded: false},
    //       {title: "Spots for Sale", img: "../../assets/icon/tag.svg", expanded: false},
    //       {title: "Spots Purchased", img: "../../assets/icon/cart.svg", expanded: false}];
    //   }
    //   expandItem(item){
    //     this.items.map((listItem) => {
    //         if(item == listItem){
    //             listItem.expanded = !listItem.expanded;
    //         } else {
    //             listItem.expanded = false;
    //         }
    //         return listItem;
    //     });
    // }
    HomePage.prototype.goToSpot = function (item) {
        this.map.setZoom(15);
        console.log(item.latLng);
        this.map.panTo(item.latLng);
    };
    HomePage.prototype.fabclicked = function () {
        var latLng = new google.maps.LatLng(33.678, -116.243);
        this.map.setZoom(15);
        this.map.panTo(latLng);
    };
    //   onInput(searchbar){
    //       // Reset items back to all of the items
    //         this.initializeItems();
    //         // set q to the value of the searchbar
    //         var q = searchbar.srcElement.value;
    //         // if the value is an empty string don't filter the items
    //         if (!q) {
    //           return;
    //         }
    //         this.spotList = this.spotList.sort(function(a, b) {
    //           if (a.dist < b.dist)
    //             return -1;
    //           if (a.dist > b.dist)
    //             return 1;
    //           return 0;
    //         });
    //         this.spotList = this.spotList.filter((v) => {
    //           if(v.pintype && q) {
    //             if (v.pintype.toLowerCase().indexOf(q.toLowerCase()) > -1) {
    //               return true;
    //             }
    //             return false;
    //           }
    //         });
    //         console.log(q, this.spotList.length);      
    //   }
    //   initializeItems(): void {
    //     this.spotList = this.loadedSpotList;
    //   }
    HomePage.prototype.openOptions = function (index) {
        var _this = this;
        this.ngZone.run(function () {
            switch (index) {
                case 1:
                    if (_this.showOne == false) {
                        _this.showOne = true;
                        _this.showTwo = false;
                        _this.showFour = false;
                        _this.showThree = false;
                        _this.pageBody.scrollToBottom(300);
                    }
                    else {
                        _this.pageBody.scrollToTop().then(function () {
                            _this.showOne = false;
                        });
                    }
                    break;
                case 3:
                    if (_this.showThree == false) {
                        _this.showOne = false;
                        _this.showTwo = false;
                        _this.showFour = false;
                        _this.showThree = true;
                        _this.pageBody.scrollToBottom(300);
                    }
                    else {
                        _this.pageBody.scrollToTop().then(function () {
                            _this.showThree = false;
                        });
                    }
                    break;
                case 4:
                    if (_this.showFour == false) {
                        _this.showOne = false;
                        _this.showTwo = false;
                        _this.showThree = false;
                        _this.showFour = true;
                        _this.pageBody.scrollToBottom(300);
                    }
                    else {
                        _this.pageBody.scrollToTop().then(function () {
                            _this.showFour = false;
                        });
                    }
                    break;
            }
        });
    };
    HomePage.prototype.fetchAllSpots = function (map) {
        // present the loader for all spots
        var load = this.loadingCtrl.create({
            content: 'Loading full map...',
        });
        load.present();
        this.firedata.ref('/allpins').orderByChild('mjbmmn').once('value', function (snapshot) {
            var result = snapshot.val();
            var temparr = [];
            for (var key in result) {
                temparr.push(result[key]);
            }
            load.dismiss();
            setTimeout(function () { map.setZoom(15); }, 1200);
            temparr.forEach(function (firebaseSpot) {
                // Customize and pin all markers
                var customicon;
                switch (firebaseSpot.pintype) {
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
                    case "Saved Spot":
                        customicon = '';
                        break;
                }
                var myfiredata = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database();
                myfiredata.ref('/allpins').child(firebaseSpot.pinuid).child('buyers').orderByChild('mjbmmn').once('value', function (buyersshot) {
                    var buyersresult = buyersshot.val();
                    var buyerstemparr = [];
                    for (var buyerskey in buyersresult) {
                        buyerstemparr.push(buyersresult[buyerskey]);
                    }
                    if (buyerstemparr.length >= firebaseSpot.maxbuyers && firebaseSpot.price != "") {
                        customicon = '../../assets/icon/white.png';
                    }
                    var marker = new google.maps.Marker({
                        position: firebaseSpot.latLng,
                        icon: customicon,
                        animation: google.maps.Animation.DROP,
                        map: map
                    });
                    var othersContentString = '<div id="content">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h2 style="color:#488aff;" id="firstHeading" class="firstHeading">' + firebaseSpot.pintype + '</h2>' +
                        '<div id="bodyContent">' +
                        '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +
                        '<p ><h4>Price - $' + firebaseSpot.price + " + service fee(10%)" + '</h4>' +
                        '<p ><h4>Details - ' + firebaseSpot.description + '</h4>' +
                        '<p ><h4>Location - Locked | ' + firebaseSpot.dist + ' km away </h4>' +
                        '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #488aff;" >Purchase Spot</button>' +
                        '<br><br><br><br>' +
                        '</div>' +
                        '</div>';
                    var othersUnAuthString = '<div id="content">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h2 style="color:#488aff;" id="firstHeading" class="firstHeading">' + firebaseSpot.pintype + '</h2>' +
                        '</div>';
                    var savedSpotString = '<div id="content">' +
                        '<br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.removeSpot()  })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #488aff;" >Remove Spot</button>' +
                        '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.ListSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #488aff;" >List Spot</button>' +
                        '<br>' +
                        '</div>';
                    var isFullContentString = '<div id="content">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h2 style="color:#488aff;" id="firstHeading" class="firstHeading">' + firebaseSpot.pintype + '</h2>' +
                        '<div id="bodyContent">' +
                        '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +
                        '<p ><h4>Details - Locked | Maximum number of buyers reached </h4>' +
                        '<br><br>' +
                        '</div>' +
                        '</div>';
                    var ownerContentString = '<div id="content">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h2 style="color:#488aff;" id="firstHeading" class="firstHeading">You Pinned This Spot As A ' + firebaseSpot.pintype + '</h2>' +
                        '<div id="bodyContent">' +
                        // '<p ><h4 style="color: #ae6c2f;">This spot belongs to you</h4>' +          
                        '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +
                        '<p ><h4>Price - $' + firebaseSpot.price + '</h4>' +
                        '<p ><h4>Details - ' + firebaseSpot.description + '</h4>' +
                        '<p ><h4>Buyers - ' + buyerstemparr.length + "/" + firebaseSpot.maxbuyers + '</h4>' +
                        '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #488aff;" >Remove Spot</button>' +
                        '<br><br><br><br>' +
                        '</div>' +
                        '</div>';
                    var hasBoughtContentString = '<div id="content">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h2 style="color:#488aff;" id="firstHeading" class="firstHeading">You have purchased this spot</h2>' +
                        '<div id="bodyContent">' +
                        // '<p ><h4 style="color: #ae6c2f;">This spot belongs to you</h4>' +          
                        '<p ><h4>Rating - 4.82/5.0 (139)</h4>' +
                        '<p ><h4>Details - ' + firebaseSpot.description + '</h4>' +
                        '<p ><h4>Location - ' + Math.round(firebaseSpot.latLng.lat * 100) / 100 + '(lat) | ' + Math.round(firebaseSpot.latLng.lat * 100) / 100 + '(lng) ' + firebaseSpot.dist + 'km away</h4>' +
                        '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.purchaseSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #488aff;" >Remove Spot</button>' +
                        '<br><br><br><br>' +
                        '</div>' +
                        '</div>';
                    var othersinfowindow = new google.maps.InfoWindow({
                        content: othersContentString
                    });
                    var directionsService = new google.maps.DirectionsService();
                    var directionsDisplay = new google.maps.DirectionsRenderer();
                    marker.addListener('click', function (event) {
                        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/temparr').set({ uid: firebaseSpot.pinuid });
                        // console.log('clicked');
                        // Check for all buyers and present their string
                        buyerstemparr.forEach(function (firebaseBuyer) {
                            var _this = this;
                            // If map zoom is not 13 or 15
                            if (map.getZoom() != 13 && map.getZoom() != 15) {
                                map.setZoom(15);
                                map.panTo(marker.getPosition());
                            }
                            else if (map.getZoom() == 15) {
                                // console.log('eddasdasd');
                                if (__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser == null) {
                                    othersinfowindow.setContent(othersUnAuthString);
                                    othersinfowindow.open(map, marker);
                                }
                                else {
                                    // Present owner string
                                    if (firebaseSpot.pinowner == __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid) {
                                        if (firebaseSpot.pintype != "Saved Spot") {
                                            othersinfowindow.setContent(ownerContentString);
                                            othersinfowindow.open(map, marker);
                                        }
                                        else {
                                            othersinfowindow.setContent(savedSpotString);
                                            othersinfowindow.open(map, marker);
                                        }
                                    }
                                    else if (firebaseSpot.pinowner != __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid &&
                                        firebaseBuyer != __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid) {
                                        if (buyerstemparr.length < firebaseSpot.maxbuyers) {
                                            othersinfowindow.setContent(othersContentString);
                                            othersinfowindow.open(map, marker);
                                            var firedata = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database();
                                            firedata.ref('/tempstore').set({
                                                clickedLat: event.latLng.lat(),
                                                clickedLng: event.latLng.lng(),
                                                clickeduid: firebaseSpot.pinuid,
                                                clickedprice: firebaseSpot.price
                                            }).then(function (res) {
                                                _this.presentToast("You have purchased this spot. Please wait for a minimum of 3 hours to confirm purchase");
                                                othersinfowindow.close();
                                            }).catch(function (err) {
                                                console.log(err);
                                            });
                                        }
                                        else {
                                            othersinfowindow.setContent(isFullContentString);
                                            othersinfowindow.open(map, marker);
                                        }
                                    }
                                    else if (firebaseBuyer == __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid) {
                                        othersinfowindow.setContent(hasBoughtContentString);
                                        othersinfowindow.open(map, marker);
                                        var end = new google.maps.LatLng(33.678, -116.243);
                                        var request = { origin: marker.getPosition(), destination: end, travelMode: google.maps.TravelMode.DRIVING };
                                        directionsService.route(request, function (response, status) {
                                            if (status == google.maps.DirectionsStatus.OK) {
                                                directionsDisplay.setDirections(response);
                                                directionsDisplay.setMap(map);
                                            }
                                            else {
                                            }
                                        });
                                        othersinfowindow.addListener('closeclick', function (e) {
                                            console.log('it has been closed');
                                            directionsDisplay.setMap(null);
                                        });
                                    }
                                }
                            }
                            else {
                                map.setZoom(15);
                                map.panTo(marker.getPosition());
                            }
                        });
                    });
                });
            });
        });
    };
    HomePage.prototype.purchaseSpot = function () {
        var _this = this;
        this.firedata.ref('/tempstore').once('value').then(function (res) {
            console.log(res.val());
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__payment_payment__["a" /* PaymentPage */], {
                price: res.val().clickedprice,
                spotuid: res.val().clickeduid,
                buyer: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid
            });
        });
    };
    HomePage.prototype.addMarkerOnClick = function (map, position) {
        var _this = this;
        this.getdist();
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
        var pinnedmarker = new google.maps.Marker({
            position: position,
            icon: customicon,
            // draggable: true,  
            animation: google.maps.Animation.DROP,
            map: map
        });
        var loc1 = new google.maps.LatLng(33.678, -116.243);
        var loc2 = pinnedmarker.getPosition();
        var dist = loc2.distanceFrom(loc1);
        dist = dist / 1000;
        this.storage.set('dist', dist);
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<div id="bodyContent">' +
            '<p ><h4> ' + dist + ' km away from your current location </h4>' +
            '<input type="number" id="price" class="taone" maxlength="5" placeholder="Price in $"></input>' +
            '<br><input type="number" id="noOfBuyers" class="taone" placeholder="Max number of buyers"></input>' +
            '<br><textarea style="height: 100px;" id="desc" class="taone" placeholder="Describe Spot Here"></textarea>' +
            '<br><br><input type="checkbox"> By checking this box you agree that all information provided by you is true and if we discover that you have listed falsely we have the right to authorize a full refund to the buyer</input>' +
            '<br><br><p align="center"><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.listspot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #ae6c2f; margin-right:20px;" >LIST</button></p>' +
            '<br>><br>' +
            '</div>' +
            '</div>';
        this.addmarkerInfoWindow = new google.maps.InfoWindow({
            content: contentString
        });
        map.setZoom(15);
        map.panTo(pinnedmarker.getPosition());
        this.addmarkerInfoWindow.open(map, pinnedmarker);
        pinnedmarker.addListener('click', function (event) {
            if (map.getZoom() != 13 && map.getZoom() != 15) {
                map.setZoom(15);
                map.panTo(pinnedmarker.getPosition());
            }
            else if (map.getZoom() == 15) {
                // this.addmarkerInfoWindow.setContent(ownerContentString);
                // this.addmarkerInfoWindow.open(map, pinnedmarker);
                _this.presentToast("We are taking time to verify this spot, Please wait for a few hours and try again");
            }
            else {
                map.setZoom(15);
                map.panTo(pinnedmarker.getPosition());
            }
        });
        this.addmarkerInfoWindow.addListener('closeclick', function (e) {
            console.log('it has been closed');
            pinnedmarker.setMap(null);
        });
        return pinnedmarker;
    };
    //   listspot(){
    //     this.dollarprice = document.getElementById("price");
    //     this.spotdesc = document.getElementById("desc");
    //     this.maxBuyers = document.getElementById("noOfBuyers");
    //     console.log(this.maxBuyers);
    //     this.storage.get('position').then((res) =>{
    //       console.log(this.pinspotas);
    //       console.log(this.dollarprice.value);    
    //       this.storage.get('dist').then((distance) =>{
    //         if(this.dollarprice.value < 1){
    //           this.presentToast("Cannot pin spot without a price");
    //         }
    //         else if(this.spotdesc.value == "" || this.spotdesc.value.length < 15){
    //           this.presentToast("Please fill in a valid description for this spot");
    //         }
    //         else{
    //           this.pinuid = this.firedata.ref('/allpins').push().key;
    //           this.firedata.ref('/allpins').child(this.pinuid).set({
    //             pinowner: firebase.auth().currentUser.uid,
    //             price: this.dollarprice.value,
    //             pinuid: this.pinuid,
    //             dist: distance,
    //             buyers: 'a',
    //             maxbuyers: this.maxBuyers.value,
    //             description: this.spotdesc.value,
    //             latLng: res,
    //             pintype: this.pinspotas
    //           }).then((res) =>{
    //             this.pinspotas = "a";
    //             this.addmarkerInfoWindow.close();
    //             this.presentToast('Spot pinned as ' + this.pinspotas + ' at $' + this.dollarprice.value );
    //             console.log(res);
    //           }).catch((err) =>{
    //             console.log(err);
    //           });
    //         }
    //       });
    //     });
    //   }
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
    HomePage.prototype.ionViewWillEnter = function () {
        // console.log('entered');   
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(33.678, -116.243);
        var mapOptions = {
            center: latLng,
            zoom: 4,
            disableDefaultUI: true,
            mapTypeId: 'hybrid'
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addDefaultMarker(this.map, latLng);
        this.fetchAllSpots(this.map);
        this.map.addListener('click', function (e) {
            _this.storage.set('position', e.latLng);
            if (_this.addmarkerInfoWindow == undefined) {
                // console.log('no need to call close');
                // this.selectRef.open();
                _this.storage.get('position').then(function (res) {
                    console.log(res);
                    _this.addMarker(_this.map, res);
                });
            }
            else {
                // console.log('need to call close');
                // this.selectRef.open();
                _this.storage.get('position').then(function (res) {
                    _this.addMarker(_this.map, res);
                    console.log(res);
                });
            }
        });
    };
    HomePage.prototype.onChange = function () {
        var _this = this;
        this.storage.get('position').then(function (res) {
            _this.addMarkerOnClick(_this.map, res);
            console.log(res);
        });
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
            map.panTo(defmarker.getPosition());
        });
        return defmarker;
    };
    HomePage.prototype.addMarker = function (map, position) {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            draggable: true,
            animation: google.maps.Animation.BOUNCE,
            title: 'Hello World!'
        });
        var newpinstring = '<div id="content">' +
            '<br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.justSaveSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #488aff;" >Save Spot</button>' +
            '<br><br><button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.ListSpot() })" style="background:#000;background-color: white; padding: 10px;color: black;border: 2px solid #488aff;" >List Spot</button>' +
            '<br>' +
            '</div>';
        marker.addListener('click', function () {
            this.saveSpotInfoWindow = new google.maps.InfoWindow({
                content: newpinstring
            });
            map.setZoom(15);
            map.panTo(marker.getPosition());
            this.saveSpotInfoWindow.open(map, marker);
        });
        return marker;
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
    HomePage.prototype.justSaveSpot = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
        else {
            this.storage.get('position').then(function (res) {
                _this.pinuid = _this.firedata.ref('/allpins').push().key;
                _this.firedata.ref('/allpins').child(_this.pinuid).set({
                    pinowner: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid,
                    price: "",
                    pinuid: _this.pinuid,
                    dist: "",
                    buyers: 'a',
                    maxbuyers: "",
                    description: "",
                    latLng: res,
                    pintype: "Saved Spot"
                }).then(function (res) {
                    // this.addmarkerInfoWindow.close();
                    _this.presentToast('Spot saved');
                    _this.saveSpotInfoWindow.close();
                }).catch(function (err) {
                    console.log(err);
                });
            });
        }
    };
    HomePage.prototype.listSpot = function () {
    };
    HomePage.prototype.removeSpot = function () {
        var _this = this;
        this.firedata.ref('/temparr').on('value', function (spot) {
            _this.firedata.ref('/allpins').child(spot.val().uid).remove(function () {
                _this.presentToast("Spot Removed Successfully");
                _this.loadMap();
            }).catch(function (err) {
                console.log(err);
            });
        });
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Select */])
    ], HomePage.prototype, "selectRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "pageBody", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar ion-fixed transparent align-title="center" color="dark">\n        <button ion-button left menuToggle>\n              <ion-icon class="icon ion-home custom-icon" name="menu"></ion-icon>\n        </button>\n\n        <ion-title>  \n            <ion-grid style="margin-top: 10px;">\n                <ion-row style="justify-content: center;">\n                        <div>\n                            <img alt="logo" height="30" class="timg" src="../../assets/icon/logom1.png" >                        \n                        </div>\n                    <div style="margin-top: 5px; padding-left: 5px;">SPOTSWOPPER</div>\n                </ion-row>\n            </ion-grid>\n        </ion-title>\n              \n        <ion-buttons end>\n            <button ion-button icon-only (click)="openSecondModal()">\n                <ion-icon  class="icon ion-home custom-icon" name="notifications"></ion-icon>\n            </button>\n        </ion-buttons>\n              \n        <ion-buttons end>\n            <button ion-button icon-only (click)="openModal()">\n                <ion-icon name="options"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content #content class="contentdiv">\n  <div  #map id="map">\n  </div>\n\n   <button ion-fab class="fabbi" (click)="fabclicked()">\n       <img src="../../assets/icon/focus.svg" style="zoom: 7%;">\n   </button>\n\n    <div class="bottombuttonscontainer">\n\n        <ion-grid class="bottomgrid">\n        \n            <ion-row  style="justify-content: center;" >\n                <ion-col class="testclass" (click)="openOptions(1)">\n                    <img style="zoom:5%;" src="../../assets/icon/map-spot.svg"><br>My Spots\n                </ion-col>\n\n                <ion-col class="testclass">\n                        <img style="zoom:5%;" src="../../assets/icon/map.svg"><br>Map Layers\n                </ion-col>\n\n                <ion-col class="testclass" (click)="openOptions(3)">\n                    <img style="zoom:5%;" src="../../assets/icon/world-wide-internet-signal.svg"><br>Off Grid\n                </ion-col>\n\n                <ion-col class="testclass" (click)="openOptions(4)">\n                    <img style="zoom:5%;" src="../../assets/icon/search.svg"><br>Search Spot\n                </ion-col>\n            </ion-row>\n\n\n            <ion-row class="layersbelow" >\n\n                <br>\n                <div *ngIf="showOne"  >\n                    <ion-list style="width: 98vw;">\n                        <button no-lines style="background: transparent;color: white" detail-none (click)="expandItem(item)" ion-item *ngFor="let item of items">\n                            <ion-thumbnail item-start>\n                                <img src="{{item.img}}" style="zoom:70%;">\n                            </ion-thumbnail>\n                            <h2>{{item.title}}</h2>\n                            <expandable [expandHeight]="itemExpandHeight" [expanded]="item.expanded">\n                              Hello people\n                            </expandable>\n                                <button ion-button clear item-end  color="primary" >\n                                    View\n                                </button>\n                        </button>\n                    </ion-list>\n                </div>\n\n                <div *ngIf="showThree" >\n                    <br>\n                        <ion-grid style="width: 97vw;"><br>\n                            <ion-row style="text-align:center;">\n                                <ion-col >\n                                    <button ion-button block color="redlike"                                 (click)="openSaveModal()">\n                                            Save New Map\n                                    </button>\n                                </ion-col>\n                                <ion-col >\n                                    <button ion-button block color="greytwo">\n                                        <img src="../../assets/icon/heartbeat.png">                                                       Go Offline</button>\n                                </ion-col>     \n                            </ion-row>\n                        </ion-grid>                    \n                </div >\n\n                <div *ngIf="showFour">\n                    <br><br>\n                        <ion-searchbar animated=true\n                        placeholder="Search all Spots"\n                        [(ngModel)]="myInput"\n                        [showCancelButton]="shouldShowCancel"\n                        (ionInput)="onInput($event)"\n                        (ionCancel)="onCancel($event)">\n                    </ion-searchbar>\n                    <ion-list>\n                            <ion-item *ngFor="let spot of spotList" (click)="goToSpot(spot, i)">\n                                    <h2> {{ spot.pintype }} </h2>\n                                    <h3> Distance away: <strong>{{ spot.dist }} km away</strong> </h3>\n                            </ion-item>\n                    </ion-list>\n                </div >\n\n\n            </ion-row>\n        </ion-grid>\n        \n    </div>\n\n    <ion-select style=\n        "position: absolute;\n        height:0px;\n        width: 0px;\n        bottom:0vh;\n        z-index: 5;" \n        (ngModelChange)="onChange()" [(ngModel)]="pinspotas" #mySelect>\n        <ion-option>Private Spot</ion-option>\n        <ion-option>Spot for Lease</ion-option>\n        <ion-option>Spot for Sale</ion-option>\n        <ion-option>Spot Purchased</ion-option>\n        <!-- <ion-option>Not for Sale</ion-option> -->\n        \n    </ion-select>\n    \n</ion-content>\n'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(409);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_expandable_expandable__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_forgotpassword_forgotpassword__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { AccordionListComponent } from '../components/accordion-list/accordion-list';




var firebaseconfig = {
    apiKey: "AIzaSyDxNm3T6n3CPB5u28aVRIIzggSV9HChpsw",
    authDomain: "spotgolbber.firebaseapp.com",
    databaseURL: "https://spotgolbber.firebaseio.com",
    projectId: "spotgolbber",
    storageBucket: "spotgolbber.appspot.com",
    messagingSenderId: "72131126436"
};
__WEBPACK_IMPORTED_MODULE_17_firebase__["initializeApp"](firebaseconfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_expandable_expandable__["a" /* ExpandableComponent */],
                // AccordionListComponent,
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listspot/listspot.module#ListspotPageModule', name: 'ListspotPage', segment: 'listspot', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["AngularFireModule"].initializeApp(firebaseconfig),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                // UploaderProvider,
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["AngularFireAuth"],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__["a" /* AuthProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_forgotpassword_forgotpassword__ = __webpack_require__(798);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/app/app.html"*/'<ion-menu persistent="true" [content]="content" type="overlay">\n    <ion-header no-border>\n      <ion-toolbar>\n            <!-- <ion-title> -->\n                <div class="container" (click)="openprofile()">\n                    <img class="userimage" src="../../assets/icon/man.svg">\n                    <b class="user-name">Edung Divinefavour</b>\n                    <b class="user-mail">lawrenedickson49@gmail.com</b>\n                    <br>\n                    <br>\n                   \n                </div>\n            <!-- </ion-title> -->\n\n      </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n\n        <ion-list>\n          <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n              <ion-icon item-start [name]="p.icon"></ion-icon>\n              <!-- <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n              {{ p.title }}\n            </button>\n        </ion-list>\n\n            <ion-grid style="margin-top: 10px;">\n                    <ion-row style="justify-content: center;">\n                            <div>\n                                    <img alt="logo" height="30" class="timg" src="../../assets/icon/logom1.png" >                        \n                                </div>\n                        <div style="margin-top: 6px; color:tomato; padding-left: 5px;">SPOTSWOPPER</div>\n                    </ion-row>\n                </ion-grid>\n      </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'expandable',template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/components/expandable/expandable.html"*/'<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n    <ng-content></ng-content>\n</div>'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/components/expandable/expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/pages/register/register.html"*/'<ion-content class="content_bg" padding>\n \n  <!-- <p style="color:#fff;font-size: 30px;" align="center"><img style="zoom:10%;"\n     src="../../assets/icon/logom1.png"><br>SpotSwopper</p> -->\n\n     <br>\n\n\n     <ion-grid style="margin-top: 10px;">\n      <ion-row style="justify-content: center;">\n              <div>\n                      <img alt="logo" height="50" class="timg" src="../../assets/icon/logom1.png" >                        \n                  </div>\n          <div style="margin-top: 10px; font-size: 30px; color:white; padding-left: 5px;">SPOTSWOPPER</div>\n      </ion-row>\n      <ion-row class="knowrow">Know where you stand</ion-row>\n  </ion-grid>\n  <br>\n  <br>\n  \n<ion-list>  \n\n  <ion-item no-lines class="itemclass">\n    <ion-input class="custom-input" placeholder="Email Address" [(ngModel)]="email"  style="font-size: 18px;" type="email" required></ion-input>  \n    <ion-icon color="white" name="ios-contact-outline" item-left></ion-icon>  \n  </ion-item>\n\n    <ion-item no-lines class="itemclass">\n        <ion-input class="custom-input" placeholder="Password" style="font-size: 18px;" type="password" required [(ngModel)]="password"> </ion-input>\n        <ion-icon color="white" name="ios-lock-outline" item-left></ion-icon>\n    </ion-item>\n\n    <ion-item no-lines class="itemclass">\n      <ion-input class="custom-input" placeholder="Password" style="font-size: 18px;" type="password" required [(ngModel)]="confirmpassword"> </ion-input>\n      <ion-icon color="white" name="ios-lock-outline" item-left></ion-icon>\n    </ion-item>\n\n  <br>\n  <div style="margin-top: 20px">\n    <button ion-button block style="border-radius: 20px;" color="redlike" (click)="signin()">SIGN UP</button>\n</div>\n<br>\n\n<div align="center" style="color: white; font-size: 16px; opacity: 0.9; margin-top: 50dp">By signing up you agree to our <u style="color: #fe3300">Terms of use</u></div>\n<br>\n\n<div align="center" style="color: white; font-size: 20px; opacity: 0.9; margin-top: 50dp">-----------------------OR------------------------</div>\n<br>\n<div  align="center" class="knowrow">Join now with your social networks</div>\n\n<!--   \n  <ion-item no-lines style="background: transparent;color: white">\n        <ion-label>Remember me on this device</ion-label>\n        <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>\n    </ion-item> -->\n</ion-list>\n\n\n\n\n<div>\n\n    <ion-grid>\n      \n      <ion-row style="justify-content: center; padding-left: 20px;" >\n\n        <div class="testclass">\n                <img style="zoom:10%;" src="../../assets/icon/facebook.svg">\n        </div>\n\n        <div class="testclass">\n              <img style="zoom:10%;" src="../../assets/icon/twitter.svg">\n        </div>\n\n        <div class="testclass">\n                  <img style="zoom:10%;" src="../../assets/icon/google.svg">\n        </div>\n        </ion-row>\n    </ion-grid>\n    \n</div>\n\n<div align="center" style="text-align:center;" (click)="createaccount()">\n    <ion-label style="color:white; font-size: 17px;" >Dont have an account? Sign Up</ion-label>\n</div>\n\n  \n</ion-content>'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
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
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"/home/lawrene/SpotGolbber/src/pages/forgotpassword/forgotpassword.html"*/'<ion-content class="content_bg" padding>\n \n  <!-- <p style="color:#fff;font-size: 30px;" align="center"><img style="zoom:10%;"\n     src="../../assets/icon/logom1.png"><br>SpotSwopper</p> -->\n\n     <br>\n\n\n     <ion-grid style="margin-top: 10px;">\n      <ion-row style="justify-content: center;">\n              <div>\n                      <img alt="logo" height="50" class="timg" src="../../assets/icon/logom1.png" >                        \n                  </div>\n          <div style="margin-top: 10px; font-size: 30px; color:white; padding-left: 5px;">SPOTSWOPPER</div>\n      </ion-row>\n      <ion-row class="knowrow">Know where you stand</ion-row>\n      <ion-row class="know1row">Password Recovery</ion-row>\n      \n  </ion-grid>\n  <br>\n  <br>\n  \n\n<ion-list>  \n\n  <ion-item no-lines class="itemclass">\n    <ion-input class="custom-input" placeholder="Email Address" [(ngModel)]="email"  style="font-size: 18px;" type="email" required></ion-input>  \n    <ion-icon color="white" name="ios-contact-outline" item-left></ion-icon>\n      \n  </ion-item>\n\n\n  <br>\n  <br>\n  <div>\n    <button ion-button block style="border-radius: 20px;" color="redlike" (click)="signin()">SUBMIT</button>\n</div>\n<br>\n\n<div align="center" \nstyle="color: white; font-size: 18px; opacity: 0.9;\n margin-top: 50dp">I remember it now!</div>\n<br>\n\n</ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/home/lawrene/SpotGolbber/src/pages/forgotpassword/forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
    var _a, _b;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ })

},[404]);
//# sourceMappingURL=main.js.map