webpackJsonp([0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsProvider = (function () {
    function ProductsProvider(utilityProvider, config, userProvider) {
        this.utilityProvider = utilityProvider;
        this.config = config;
        this.userProvider = userProvider;
        this.stackTrace = [];
        this.productList = [];
        this.productList1 = [];
        this.presimage = null;
        this.isShow = true;
        this.productList = [];
        //this.productList1 = localStorage.getItem('productlist');      
        console.log("productlist", this.productList);
        this.presimage = "";
    }
    ;
    ProductsProvider.prototype.getProducts = function (start, end) {
        var endPoint = 'PricingProductPrice';
        var queryParams = "&_where=priceListVersion=%27FF2054857F134F30BF0D5EC71FB3998B%27&_selectedProperties=id,product,pricelist&_startRow=" + start + "&_endRow=" + end;
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    ProductsProvider.prototype.getProductwithimages = function (category, start, end) {
        var endPoint = 'Product';
        var queryParams = "&_where=productCategory.name=%27" + category + "%27&_selectedProperties=id,name,phPhoto,uOM,taxCategory,standardCost,phPackage&_startRow=" + start + "&_endRow=" + end;
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    ProductsProvider.prototype.getProductDetails = function (id) {
        var endPoint = 'PH_Product_Price_V';
        var queryParams = "&_where=id='" + id + "'";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    ProductsProvider.prototype.getProductImage = function (image) {
        var endPoint = 'ADImage';
        var queryParams = "&_where=id='" + image + "'";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    ProductsProvider.prototype.updateNewProductList = function (newProduct) {
        this.productList.push(newProduct);
        //this.productList=this.productList1
        //localStorage.setItem("productlist",this.productList1);
        if (this.productList.length > 0) {
            this.isShow = true;
        }
    };
    ProductsProvider.prototype.getProductsinstock = function (start, end) {
        var endPoint = 'MaterialMgmtStorageDetail';
        var queryParams = "&_where=quantityOnHand>0 and organization='" + this.userProvider.organization + "'&_selectedProperties=product,attributeSetValue,quantityOnHand&_startRow=" + start + "&_endRow=" + end;
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    ProductsProvider.prototype.getProductNameForSearch = function (category, search) {
        var utilityEndPoint = "Product";
        var condition = "active=true";
        var queryParams = "&_where=productCategory.name=%27" + category + "%27%20and%20name%20like%20%27%25" + search + "%25%27%20and%20" + condition + "&_selectedProperties=id,name,phPhoto,uOM,taxCategory,standardCost,phPackage";
        return this.utilityProvider.getOB3Object(utilityEndPoint, queryParams);
    };
    ProductsProvider.prototype.getProductwithMasterimages = function (start, end) {
        var endPoint = 'Product';
        var queryParams = "&_where=name=%27" + "%27&_selectedProperties=id,name,phPhoto,uOM,taxCategory,standardCost,phPackage&_startRow=" + start + "&_endRow=" + end;
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    ProductsProvider.prototype.getProductNameForMasterSearch = function (search) {
        var utilityEndPoint = "Product";
        var condition = "active=true";
        var queryParams = "&_where=name%20like%20%27%25" + search + "%25%27%20and%20" + condition + "&_selectedProperties=id,name,phPhoto,uOM,taxCategory,standardCost,phPackage";
        return this.utilityProvider.getOB3Object(utilityEndPoint, queryParams);
    };
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__user__["a" /* UserProvider */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

;
//# sourceMappingURL=product.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippiningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_customer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__address_customers__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_Sales__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__payment1_payment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__payment_payment__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_config__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ShippiningPage = (function () {
    function ShippiningPage(navCtrl, utilityprovider, userProvider, salesprovider, productsProvider, alert1, transfer, file, toast, loading, config, navParams, customerprovider) {
        this.navCtrl = navCtrl;
        this.utilityprovider = utilityprovider;
        this.userProvider = userProvider;
        this.salesprovider = salesprovider;
        this.productsProvider = productsProvider;
        this.alert1 = alert1;
        this.transfer = transfer;
        this.file = file;
        this.toast = toast;
        this.loading = loading;
        this.config = config;
        this.navParams = navParams;
        this.customerprovider = customerprovider;
        this.address = null;
        this.products = [];
        this.lastImage = null;
        this.message = "";
        this.promo = true;
        this.customerforsalesorder = {};
        this.deleteProduct = function (index) {
            this.products.splice(index, 1);
            this.cartTotal();
        };
        this.discount = null;
        this.carttotalamount = 0.00;
        this.carttotalamountwithdiscount = 0.00;
        this.customerforsalesorder.bpid = null;
        this.customerforsalesorder.bplocationid = null;
        this.customerforsalesorder.warehouse = null;
        this.address = null;
    }
    ShippiningPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.utilityprovider.getUserlocation().subscribe(function (d) {
            console.log("====>orde", d);
            _this.customerforsalesorder.warehouse = d[0].id;
        }, function (err) {
            var l = err.stackTrace.length;
            //console.error(err);
            alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
        });
        //this.utilityprovider.sendNotification(this.userprovider.fcmid);
    };
    ShippiningPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.customerprovider.customerName != null) {
            this.address = this.customerprovider.customerName.locationAddress$_identifier;
            this.customerforsalesorder.bplocationid = this.customerprovider.customerName.id;
        }
        else {
            this.utilityprovider.getBpLocation().subscribe(function (d) {
                console.log("====>orde", d);
                _this.address = d[0].locationAddress$_identifier;
                _this.customerforsalesorder.bplocationid = d[0].id;
            }, function (err) {
                var l = err.stackTrace.length;
                //console.error(err);
                alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
            }, function () { });
        }
        this.products = this.productsProvider.productList;
        console.log("productslenght" + this.products.length);
        this.cartTotal();
    };
    ShippiningPage.prototype.cartTotal = function () {
        var prds = this.products;
        var total = 0;
        for (var i = 0; i < prds.length; i++) {
            total = total + prds[i].qty * prds[i].price;
            console.log(total);
        }
        this.carttotalamount = (Math.round(total * 100) / 100).toFixed(2);
        this.carttotalamountwithdiscount = this.carttotalamount;
    };
    ShippiningPage.prototype.discountchange = function (discount) {
        this.carttotalamount = this.carttotalamountwithdiscount - ((this.carttotalamountwithdiscount * discount) / 100);
        this.carttotalamount = (Math.round(this.carttotalamount * 100) / 100).toFixed(2);
        console.log("carttotalamount1" + this.carttotalamount);
    };
    ;
    ShippiningPage.prototype.applypromocode = function () {
        var _this = this;
        if (this.discount == "FIRST25") {
            if (this.carttotalamountwithdiscount < 100) {
                this.message = "Min Order value is 100 for this Promocode";
                this.promo = false;
                this.msgcolor = "#ff3300";
            }
            else {
                this.salesprovider.CheckFirstorderornot().subscribe(function (d) {
                    console.log("====>orde", d);
                    if (d.length == 0) {
                        _this.message = "Hey, you got 25% discount on your Order";
                        _this.promo = false;
                        _this.msgcolor = "#028000";
                        _this.discountchange(25);
                    }
                    else {
                        _this.message = "You Already used this Promocode";
                        _this.promo = false;
                        _this.msgcolor = "#ff3300";
                    }
                }, function (err) {
                    var l = err.stackTrace.length;
                    //console.error(err);
                    alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
                }, function () { });
            }
        }
        else if (this.discount == null) {
            if (this.carttotalamountwithdiscount < 100) {
                this.message = "Please enter a valid PromoCode";
                this.promo = false;
                this.msgcolor = "#ff3300";
            }
        }
        else {
            if (this.carttotalamountwithdiscount < 100) {
                this.message = "Please enter a valid PromoCode";
                this.promo = false;
                this.msgcolor = "#ff3300";
            }
        }
    };
    ShippiningPage.prototype.Selectcustomer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__address_customers__["a" /* Customers */]);
    };
    ShippiningPage.prototype.paymentPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__payment_payment__["a" /* PaymentPage */]);
    };
    ShippiningPage.prototype.createDraftOrder = function () {
        var _this = this;
        if (this.address == null) {
            alert("Please Select Your Delivery Address.");
        }
        this.salesprovider.createDraftOrder(this.customerforsalesorder).subscribe(function (order) {
            console.log("succes in Order creation" + order);
            _this.salesprovider.createOrderLinesInOrder(_this.customerforsalesorder, order[0].id, _this.discount).subscribe(function (orderline) {
                console.log("succes in Orderlines creation" + orderline);
                var alertBox = _this.alert1.create({
                    title: 'Order Created Successfully with Document No :' + order[0].documentNo,
                    cssClass: 'alertDanger',
                    buttons: [{
                            text: 'OK',
                            handler: function (data) {
                                console.log('Ok clicked');
                                if (_this.productsProvider.presimage == null || _this.productsProvider.presimage == "")
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__payment1_payment__["a" /* PaymenPage */], { "saleorderrecordid": order[0].id, "carttotal": _this.carttotalamount, "salesorderbpid": _this.customerforsalesorder.bpid, "orderno": order[0].documentNo });
                                else
                                    _this.uploadImage(order[0].id, order[0].documentNo);
                                // this.navCtrl.push(PrecPage,{"image":this.prescriptionImage});
                            }
                        }], enableBackdropDismiss: false
                });
                alertBox.present();
            }, function (orderlineerror) {
                console.log("error in Orderlines creation" + orderlineerror);
            });
        }, function (ordererror) {
            console.log("error in order creation" + ordererror);
        });
    };
    ShippiningPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    ShippiningPage.prototype.uploadImage = function (orderid, docno) {
        var _this = this;
        // Destination URL
        //var url = "http://94.130.127.19:8080/drainvac/CRM_UploadFile?l=muni1&p=123";
        var url = this.userProvider.authenticateURL(this.config.apipoint + "UploadFile?");
        // File for Upload
        // var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.productsProvider.presimage;
        var targetPath = this.pathForImage(filename);
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'recordid': orderid,
                "tableid": "259",
                "clientid": this.userProvider.client,
                "orgid": this.userProvider.organization }
        };
        var fileTransfer = this.transfer.create();
        var loading = this.loading.create({
            content: 'Uploading...',
        });
        loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            loading.dismissAll();
            var toast = _this.toast.create({
                message: 'Image Uploaded Successfully',
                duration: 3000,
                position: 'bottom',
                cssClass: "toast"
            });
            toast.present();
            _this.productsProvider.presimage = null;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__payment1_payment__["a" /* PaymenPage */], { "saleorderrecordid": orderid, "carttotal": _this.carttotalamount, "salesorderbpid": _this.customerforsalesorder.bpid, "orderno": docno });
            console.log("image options" + options.params);
        }, function (err) {
            loading.dismissAll();
            var toast = _this.toast.create({
                message: 'Error while uploading file.',
                duration: 3000,
                position: 'bottom',
                cssClass: "toast"
            });
            toast.present();
        });
    };
    ShippiningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shippining ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/shippining/shippining.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n    </button>\n        <ion-title>Confirm order</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="address-section">\n        <ion-row text-center class="status">\n            <ion-col class="complate">\n                <ion-icon name="ios-checkmark-circle"></ion-icon><span>Sign in</span></ion-col>\n            <ion-col class="processing">\n                <ion-icon name="md-radio-button-off"></ion-icon><span>Shipping</span></ion-col>\n            <ion-col class="panding">\n                <ion-icon name="ion-record"></ion-icon><span>Payment</span></ion-col>\n        </ion-row>\n        <ion-card>\n            <ion-card-header>\n                <p>\n                    YOUR DELIVERY ADDRESS<span class="text-sky" (click)="Selectcustomer()">Change<ion-icon name="ios-arrow-forward" class="icon"></ion-icon></span></p>\n            </ion-card-header>\n            <ion-card-content>\n                <div class="addres-detail">\n                    <h3>\n                        <ion-icon name="ios-pin-outline" class="icon-position"></ion-icon>{{userProvider.profilename}}\n                    </h3>\n                    <p>{{address}}</p>\n                    <p>{{userProvider.userName}}</p>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n    <div class="your-items">\n        <ion-card >\n            <ion-card-header >\n                <p>YOUR ITEMS</p>\n            </ion-card-header>\n            <ion-card-content *ngFor="let item of products; let i = index">\n                <ion-row>\n                    <ion-col col-3>\n                        <div class="img-box">\n                                <img [src]="item.photo">\n                            </div>\n                    </ion-col>\n                    <ion-col col-9>\n                        <h4>{{item.productname}}\n                        </h4>\n                        <div class="rate">\n                            <div style="display: flex;" class="price-box">\n                                <div class="price text-sky" margin-right>\n                                    <img src="assets/imgs/rupee-thime.png" class="rupee-icon">{{item.price}}\n                                </div>\n                            </div>\n                            <p text-right>Quantity\n                                <span class="text-light">{{item.qty}}\n                                </span>\n                            </p>\n                        </div>\n                        <p class="delivery">Delivery by Fri Jun 9 : 40 <span class="text-sky" (click)="deleteProduct(i)" float-right>Remove</span></p>\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n    </div>\n    \n    <!-- <div class="spacebar-bottom"></div> -->\n    <div class="receipt">\n        <ion-card>\n            <ion-card-header>\n                <p>Item(s) price\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n                        {{carttotalamount}}\n                    </span>\n                </p>\n                <p>Delivery Payable\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n                 0\n                    </span>\n                </p>\n            </ion-card-header>\n            <ion-card-content>\n                <p>Amount Payable\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n                        {{carttotalamount}}\n                    </span>\n                </p>\n                <ion-row>\n                        <ion-col>\n                        <ion-item>\n                            <ion-label color="primary">Promocode</ion-label>\n                            <ion-input placeholder="Enter Code" [(ngModel)]="discount" type="text"></ion-input>\n                        </ion-item>\n                        </ion-col>\n                            <button ion-button square outline color="primary" (click)="applypromocode()" style="margin-bottom: -20px;">Apply</button>\n                          \n                    </ion-row>\n                    <ion-row [hidden]=\'promo\'>\n                      <p [style.color]="msgcolor" style="padding-left: 10px">\n                          {{message}}\n                      </p>\n                </ion-row> \n                <button ion-button full class="bg-thime btn-round green-shadow btn-text" (click)="createDraftOrder()">CONTINUE</button>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/shippining/shippining.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_Sales__["a" /* SalesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_product__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_12__providers_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_customer__["a" /* CustomerProvider */]])
    ], ShippiningPage);
    return ShippiningPage;
}());

//# sourceMappingURL=shippining.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_customer__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddressPage = (function () {
    function AddressPage(navCtrl, utilityprovider, alert, customerprovider, userprovider) {
        this.navCtrl = navCtrl;
        this.utilityprovider = utilityprovider;
        this.alert = alert;
        this.customerprovider = customerprovider;
        this.userprovider = userprovider;
        this.customer = {};
        this.state = [];
        this.customer.address1 = null;
        this.customer.address2 = null;
        this.customer.pincode = null;
        this.customer.state = null;
        this.customer.statename = null;
        this.customer.city = null;
    }
    AddressPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CustomerpagePage');
        this.utilityprovider.getRegions().subscribe(function (d) {
            console.log("====>orde", d);
            _this.state = d;
        }, function (err) {
            var l = err.stackTrace.length;
            //console.error(err);
            alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
        }, function () { });
        //this.utilityprovider.sendNotification(this.userprovider.fcmid);
    };
    AddressPage.prototype.refresh = function () {
        this.customer.address1 = null;
        this.customer.address2 = null;
        this.customer.pincode = null;
        this.customer.city = null;
    };
    AddressPage.prototype.addAddress = function () {
        var _this = this;
        if (this.customer.state == null || this.customer.state == '') {
            alert("Enter State");
        }
        else if (this.customer.city == null || this.customer.city == '') {
            alert("Enter City");
        }
        else {
            if (this.customer.address1 == null || this.customer.address1 == '')
                this.customer.address1 == "***";
            if (this.customer.address2 == null || this.customer.address2 == '')
                this.customer.address2 == "***";
            if (this.customer.pincode == null || this.customer.pincode == '')
                this.customer.pincode == "***";
            var alertBox = this.alert.create({
                title: 'Customer Address Confirmation',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Save',
                        handler: function (data) {
                            console.log('Saved clicked');
                            _this.customerprovider.createCustomerAddress(_this.customer, _this.userprovider.bpartner).subscribe(function (customeraddressres) {
                                console.log("succes in customeraddress creation" + customeraddressres);
                                var alertBox = _this.alert.create({
                                    title: ' Customer Address Created Successfully',
                                    cssClass: 'alertDanger',
                                    buttons: [{
                                            text: 'OK',
                                            handler: function (data) {
                                                console.log('Ok clicked');
                                                _this.navCtrl.pop();
                                            }
                                        }], enableBackdropDismiss: false
                                });
                                alertBox.setCssClass('alertDanger');
                                alertBox.present();
                            }, function (customeraddresserror) {
                                console.log("error in customeraddress creation" + customeraddresserror);
                            });
                        }
                    }
                ]
            });
            alertBox.present();
        }
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/address/address.html"*/'<ion-header>\n        <ion-navbar color="primary">\n          \n          <ion-title>Address</ion-title>\n        \n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content >\n          \n              \n        <ion-list margin>\n            <ion-item >\n                <ion-label floating > Address Line1 </ion-label>\n                <ion-input  [(ngModel)]="customer.address1" type="text" [disabled]="readonly" ></ion-input>\n             </ion-item>\n    \n             <ion-item >\n                <ion-label floating > Address Line2 </ion-label>\n                <ion-input  [(ngModel)]="customer.address2" type="text" [disabled]="readonly" ></ion-input>\n             </ion-item>\n    \n             <ion-item>\n                <ion-label floating > City </ion-label>\n                <ion-input  [(ngModel)]="customer.city" type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating > Pincode </ion-label>\n                <ion-input  [(ngModel)]="customer.pincode" type="tel" maxlength="6" [disabled]="readonly" ></ion-input>\n            </ion-item>\n            \n             <ion-item>\n                <ion-label > State </ion-label>\n                 <ion-select [(ngModel)]="customer.state" required>\n                       <ion-option item-right *ngFor="let item of state"  [value]="item" > {{item.name}} </ion-option>\n                </ion-select>\n             </ion-item><br>\n    \n             <div align="center">\n                <!-- <button ion-button  color=\'primary\' style="margin-top:30px;color:#488aff" [hidden]="hidden" (click)="addAddress()"> \n                    <h6 style="color:white;font-size:16px;margin-top:5px;margin-right:10px;text-transform: none">Save</h6>   -->\n\n                    <button ion-button full class="bg-thime btn-round btn-text" (click)="addAddress()()">Save</button>\n\n                <!-- </button>  -->\n            </div> \n             \n        </ion-list>\n      \n      </ion-content>'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/address/address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_customer__["a" /* CustomerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewPage = (function () {
    function ReviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-review ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/review/review.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n     <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Add Review</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card>\n        <ion-card-header style="padding-bottom: 0;">\n            <ion-row>\n                <ion-col col-3>\n                    <div class="img-box">\n                        <img src="assets/imgs/p8.png">\n                    </div>\n                </ion-col>\n                <ion-col col-9>\n                    <h4>Johnson & Johnson Flexi AntiSeptic Band-Aid Patches 30\'s</h4>\n                    <div class="rateing">\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-card-header>\n\n        <ion-card-content>\n            <div class="form">\n                <ion-list>\n                    <ion-item class="write-reveiw">\n                        <ion-textarea type="text" placeholder="Write your Review"></ion-textarea>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Heading four your review"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <button ion-button full class="bg-thime btn-round btn-text">SUBMIT NOW</button>\n        </ion-card-content>\n    </ion-card>\n    <h5>Previous orders</h5>\n    <ion-card>\n        <ion-card-header>\n            <ion-row>\n                <ion-col col-3>\n                    <div class="img-box">\n                        <img src="assets/imgs/1.png">\n                    </div>\n                </ion-col>\n                <ion-col col-9>\n                    <h4>Dolonex Dt 20mg Tablet 10\'s Rheumatoid arthritis and osteoarthritis</h4>\n                    <div class="rateing">\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-card-header>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <ion-row>\n                <ion-col col-3>\n                    <div class="img-box">\n                        <img src="assets/imgs/p4.png">\n                    </div>\n                </ion-col>\n                <ion-col col-9>\n                    <h4>Eno Fruit Salt lemon flavour Powder 100gm</h4>\n                    <div class="rateing">\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-card-header>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/review/review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistPage = (function () {
    function WishlistPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    WishlistPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wishlist ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/wishlist/wishlist.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n        <button ion-button menuToggle>\n     <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Wishlist\n            <span float-right>                  \n              <ion-icon name="ios-cart-outline" class="icon" (click)="cartPage()"></ion-icon>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<!-- <ion-content class="bg-light">\n    <ion-card>\n        <ion-card-content>\n            <ion-row>\n                <ion-col col-3>\n                    <div class="img-box">\n                        <img src="assets/imgs/p1.png">\n                    </div>\n                </ion-col>\n                <ion-col col-9>\n                    <h4>{{item.productname}}\n                        <ion-icon name="ios-trash-outline" class="icon text-light"></ion-icon>\n                    </h4>\n                    <div class="rateing">\n                     <p class=text-light>Ayrvedic Product</p> --> \n                        <!-- <div class="card-btn" padding-top>\n                            <div class="">\n                             <div float-left>\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n                                    <span class="text-light small-text">(125 Review)</span>\n                                </div> -->\n                                <!-- <div style="display: flex;" float-right>\n                                   <div class="price text-light mr-5">\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">100\n                                    </div> -->\n                                    <!-- <div class="price text-sky">\n                                        <img src="assets/imgs/rupee-thime.png" class="rupee-icon">{{item.price}}\n                                    </div>\n                                </div> -->\n                            <!-- </div>\n                        </div>\n                    </div> \n                </ion-col>\n            </ion-row> -->\n        <!-- </ion-card-content>\n    </ion-card> -->\n\n \n\n    \n<!-- </ion-content>  -->\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/wishlist/wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__short_short__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_filter__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addtocartpopup_addcart__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PrescriptionPage = (function () {
    // category : string;
    // category1:string;
    function PrescriptionPage(navCtrl, modalCtrl, navpar, productsProvider, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navpar = navpar;
        this.productsProvider = productsProvider;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
        this.medizoneitem = [];
        this.medizoneitem1 = [];
        this.medizoneitemList = [];
        this.start = 0;
        this.end = 10;
        //   this.category = navpar.get("category");
        this.menuCtrl.enable(true);
    }
    PrescriptionPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    PrescriptionPage.prototype.ionViewWillEnter = function () {
        // this.menuCtrl.enable (true, 'myMenu');
        this.medizoneitem = [];
        this.start = 0;
        this.end = 20;
        this.loadProducts();
    };
    PrescriptionPage.prototype.itemdetail = function (itemdetail) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__["a" /* ItemdetailPage */], { "details": itemdetail });
    };
    PrescriptionPage.prototype.addcartpopup = function (itemdetail) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__addtocartpopup_addcart__["a" /* AddCartPage */], { "details": itemdetail });
        modal.present();
    };
    PrescriptionPage.prototype.loadProducts = function () {
        var _this = this;
        var loading = this.loading.create({
            content: "Please Wait..",
        });
        this.productsProvider.getProductwithimages('Other%20Products', this.start, this.end).subscribe(function (productsResponse) {
            loading.dismiss();
            console.log(productsResponse);
            var j = 0;
            for (var i = 0; i < productsResponse.length; i++) {
                _this.medizoneitem[j] = productsResponse[i];
                console.log(_this.medizoneitem[j]);
                j++;
            }
            _this.medizoneitemList = _this.medizoneitem;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Success");
        });
    };
    PrescriptionPage.prototype.shortPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__short_short__["a" /* ShortPage */]);
        modal.present();
    };
    PrescriptionPage.prototype.filterPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    PrescriptionPage.prototype.searchPage = function () {
    };
    PrescriptionPage.prototype.cartPage = function () {
        //let modal = this.modalCtrl.create(CartPage);
        if (this.productsProvider.productList.length == 0 || this.productsProvider.productList == null)
            alert("Please Select atleast one product to go to Cart");
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        //modal.present();
    };
    PrescriptionPage.prototype.itemdetailPage = function () {
    };
    PrescriptionPage.prototype.intilaizeRecords = function () {
        var self = this;
        self.medizoneitem = self.medizoneitemList;
    };
    PrescriptionPage.prototype.getRecords = function (actvty) {
        console.log("Search Value");
        console.log(actvty.target.value);
        this.intilaizeRecords();
        var val = actvty.target.value;
        this.searchValue = val;
        if (val == '') {
            console.log("Empty");
            this.medizoneitem = this.medizoneitemList;
        }
        else if (val.length >= 4) {
            this.search();
        }
    };
    PrescriptionPage.prototype.loadMore = function (event) {
        var _this = this;
        this.event = event;
        console.log("Evemt === ", this.event);
        var self = this;
        this.start = this.end;
        this.end = this.end + 10;
        this.event = event;
        this.productsProvider.getProductwithimages('Other%20Products', this.start, this.end).subscribe(function (productsResponse) {
            if (productsResponse.length == 0) {
                _this.stop = true;
            }
            else {
                var j = _this.medizoneitem.length;
                console.log(productsResponse);
                for (var i = 0; i < productsResponse.length; i++) {
                    _this.medizoneitem[j] = productsResponse[i];
                    j++;
                }
            }
            _this.medizoneitemList = _this.medizoneitem;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Success");
        });
        if (this.stop) {
            console.log("IT is stopped");
            //event.enable(false);
        }
        else {
            console.log("IT is not stopped");
        }
        setTimeout(function () {
            event.complete();
            console.log('Async operation has ended');
        }, 500);
    };
    PrescriptionPage.prototype.search = function () {
        var _this = this;
        console.log("Value in search", this.searchValue);
        console.log("Charecter in search", this.searchValue.charAt(0));
        var val = this.searchValue;
        var charecter = this.searchValue.charAt(0);
        console.log("Charecter", charecter);
        var upper = charecter.toUpperCase();
        var lower = charecter.toLowerCase();
        console.log("LOWER", lower);
        console.log("Upper", upper);
        var s = this.searchValue;
        if (lower == charecter) {
            s = s.replace(s.charAt(0), upper);
        }
        console.log("SSSSSS", s);
        var Capital = this.searchValue.toUpperCase();
        var Small = this.searchValue.toLowerCase();
        console.log("Capital", Capital);
        console.log("Small", Small);
        if (val == '') {
            console.log("Empty");
            this.medizoneitem = this.medizoneitemList;
        }
        else {
            var loading_1 = this.loading.create({
                content: "Please Wait..",
            });
            loading_1.present();
            this.productsProvider.getProductNameForSearch('Other%20Products', s).subscribe(function (data) {
                console.log("IN SEARCH");
                console.log(data);
                _this.medizoneitem = data;
                loading_1.dismiss();
                _this.productsProvider.getProductNameForSearch('Other%20Products', Small).subscribe(function (data) {
                    console.log("IN SEARCH Small Data", data);
                    _this.medizoneitem1 = data;
                    console.log(_this.medizoneitem1.length);
                    console.log(_this.medizoneitem.length);
                    var j = _this.medizoneitem.length;
                    for (var i = 0; i < _this.medizoneitem1.length; i++) {
                        _this.medizoneitem[i + j] = _this.medizoneitem1[i];
                    }
                    _this.productsProvider.getProductNameForSearch('Other%20Products', Capital).subscribe(function (data) {
                        console.log("IN SEARCH Capital Data", data);
                        _this.medizoneitem1 = data;
                        console.log(_this.medizoneitem1.length);
                        console.log(_this.medizoneitem1.length);
                        var j = _this.medizoneitem.length;
                        for (var i = 0; i < _this.medizoneitem1.length; i++) {
                            _this.medizoneitem[i + j] = _this.medizoneitem1[i];
                        }
                    }, function (err) {
                        console.log("%^%^%^%^%");
                        //console.error(err 
                    }, function () { return console.log('getDraftOrders completed'); });
                }, function (err) {
                    console.log("%^%^%^%^%");
                    //console.error(err 
                }, function () { return console.log('getDraftOrders completed'); });
            }, function (err) {
                console.log("%^%^%^%^%");
                //console.error(err 
            }, function () { return console.log('getDraftOrders completed'); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], PrescriptionPage.prototype, "content", void 0);
    PrescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prescription',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/prescription/prescription.html"*/'<ion-header >\n    <ion-navbar color="primary">\n        <ion-title>Prescription Medicine\n            <div class="icon-box">\n                <!--            <img src="assets/imgs/search.png" (click)="searchPage()">-->\n                <img src="assets/imgs/ic_my_cart.png" (click)="cartPage()">\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-light">\n        <ion-searchbar placeholder="Searchby Productname" (ionInput)="getRecords($event)"></ion-searchbar>\n    <!-- <div class="d-flex">\n        <p>230 items found</p>\n        <div class="icon-box">\n            <ion-icon name="ios-swap-outline" class="icon" (click)="shortPage()"><span>Sort by</span></ion-icon>\n            <ion-icon name="md-funnel" class="icon" (click)="filterPage()"><span>Filter</span></ion-icon>\n        </div>\n    </div> -->\n    <ion-row>\n        <ion-col col-6 *ngFor="let medizoneitem1 of medizoneitem">\n            <ion-card style="width:100%;height: 100%;">\n                <ion-card-header (click)="itemdetail(medizoneitem1)">\n                    <!-- <ion-icon name="md-heart" class="icon"></ion-icon> -->\n                    <div class="img-box">\n                        <img [src]="medizoneitem1.phPhoto">\n                    </div>\n                    <h5 [innerHTML]="medizoneitem1.name"></h5>\n                    <!-- <div>\n                        <p>{{medizoneitem1.phPackage}}</p>\n                    </div> -->\n                    <!--                   <small class="text-light" [innerHTML]="medizoneitem.market"></small>-->\n                </ion-card-header>\n                <ion-card-content>\n                    <!-- <div class="text-light" style="font-size: 1rem;line-height: 1.7;">\n                        <div class="btn text-white">4.5&nbsp;\n                            <ion-icon name="md-star" class="icon"></ion-icon>\n                        </div>&nbsp; (124)\n                    </div> -->\n                    <ion-row>\n                        <ion-col>\n                            <div style="display: flex;" class="price-box">\n                                <!-- <div class="price text-light">\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">100\n                                </div>  -->\n                                <div class="price text-sky" align=\'left\'>\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">{{medizoneitem1.standardCost}}\n                                </div> \n                                <!-- <div class="price text-sky">\n                                        <h5 [innerHTML]="medizoneitem.pricelist"></h5>\n                                </div> -->\n                                \n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <!-- <ion-row>\n                            <button ion-button (click)="addcartpopup(medizoneitem1)" round outline>Add</button>\n                    </ion-row> -->\n                </ion-card-content>\n                \n            </ion-card>\n        </ion-col>\n    </ion-row>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content\n          loadingSpinner="bubbles"\n          loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      <ion-fab right bottom >\n        <button ion-fab [color]="buttonColor" (click)="scrollToTop()"><ion-icon ios="ios-arrow-dropup-circle" md="md-arrow-dropup-circle"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/prescription/prescription.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_product__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], PrescriptionPage);
    return PrescriptionPage;
}());

//# sourceMappingURL=prescription.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utility__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateaccountPage = (function () {
    function CreateaccountPage(navCtrl, utilityprovider, alert) {
        this.navCtrl = navCtrl;
        this.utilityprovider = utilityprovider;
        this.alert = alert;
        this.user = {};
        this.type = 'password';
        this.showPass = false;
        this.user.firstname = null;
        this.user.lastname = null;
        this.user.mobile = null;
        this.user.email = null;
        this.user.password = null;
    }
    CreateaccountPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    CreateaccountPage.prototype.register = function () {
        var _this = this;
        if (this.user.firstname == null || this.user.firstname == "")
            alert("Please Enter First Name");
        else if (this.user.lastname == null || this.user.lastname == "")
            alert("Please Enter Last Name");
        else if (this.user.mobile == null || this.user.mobile == "")
            alert("Please Enter Mobile No");
        else if (this.user.mobile.length != 10)
            alert("Please enter 10 digit Mobile Number");
        else if (this.user.email == null || this.user.email == "")
            alert("Please Enter Email");
        else if (this.user.password == null || this.user.password == "")
            alert("Please Enter Password");
        else {
            this.utilityprovider.Createuser(this.user).subscribe(function (usersuccess) {
                console.log("succes in usersuccess creation" + usersuccess);
                var alertBox = _this.alert.create({
                    title: usersuccess.message + ' User Created Successfully',
                    cssClass: 'alertDanger',
                    buttons: [{
                            text: 'OK',
                            handler: function (data) {
                                console.log('Ok clicked');
                                _this.navCtrl.pop();
                            }
                        }], enableBackdropDismiss: false
                });
                alertBox.setCssClass('alertDanger');
                alertBox.present();
            }, function (usererror) {
                console.log("error in customeraddress creation" + usererror);
            });
        }
    };
    CreateaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createaccount',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/createaccount/createaccount.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n     <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Create Account</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="form" padding-left padding-right>\n        <p text-center padding-bottom margin-bottom>Create your Account on MedicineShoppee</p>\n        <ion-list>\n            <ion-item>\n                <ion-label>Phone Number</ion-label>\n                <ion-input type="number" text-right value="+91 903 335 6708" [(ngModel)]="user.mobile"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>First Name</ion-label>\n                <ion-input type="text" text-right value="Jhon Deo" [(ngModel)]="user.firstname"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Last Name</ion-label>\n                <ion-input type="text" text-right value="Jhon Deo" [(ngModel)]="user.lastname"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Email Address</ion-label>\n                <ion-input type="text" text-right value="jhondeo8994@mail.com" [(ngModel)]="user.email"></ion-input>\n            </ion-item>\n            <div class="d-flex">\n                <ion-item>\n                    <ion-label>Password</ion-label>\n                    <ion-input type="{{type}}" text-right  [(ngModel)]="user.password"></ion-input>\n                \n                        <button *ngIf="!showPass" ion-button clear color="dark" type="button" style="font-size: 15px;margin-right:-5%;color:#000 !important;" item-right class="text-light eye-icon" (click)="showPassword()"> <ion-icon name="ios-eye-off-outline" ></ion-icon></button>\n                        <button *ngIf="showPass" ion-button clear color="dark" type="button" style="font-size: 15px;margin-right:-5%;color:#000 !important;" item-right class="text-light eye-icon"(click)="showPassword()"> <ion-icon name="ios-eye-outline"  ></ion-icon></button> \n                </ion-item>\n                <!-- <ion-icon *ngIf="!showPass" name="ios-eye-outline" class="text-light eye-icon" (click)="showPassword()"></ion-icon>\n                <ion-icon *ngIf="showPass" name="ios-eye-outline" class="text-light eye-icon" (click)="showPassword()"></ion-icon> -->\n            </div>\n        </ion-list>\n        <button ion-button full class="bg-thime btn-round btn-text" (click)="register()">Sign Up</button>\n        <p text-center>\n            <small>\n                By Registering ! agree to \n                <span class="text-sky">\n                    Terms & conditon\n                </span>\n            </small>\n        </p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/createaccount/createaccount.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CreateaccountPage);
    return CreateaccountPage;
}());

//# sourceMappingURL=createaccount.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProvider = (function () {
    function UserProvider(http, config, nativehttp) {
        this.http = http;
        this.config = config;
        this.nativehttp = nativehttp;
        this.UserAccess = [];
        this.stackTrace = [];
        this.userName = localStorage.getItem('userName') || '';
        this.password = localStorage.getItem('password') || '';
        this.userid = localStorage.getItem('userid') || '';
        this.client = localStorage.getItem('client') || '';
        this.organization = localStorage.getItem('organization') || '';
        this.bpartner = localStorage.getItem('bpartner') || '';
        this.defaultrole = localStorage.getItem('defaultrole') || '';
        this.organizationname = localStorage.getItem('organizationname') || '';
        this.profilename = localStorage.getItem('profilename') || '';
        this.email = localStorage.getItem('email') || '';
        this.fcmid = localStorage.getItem('fcmid') || '';
        this.userData = null;
    }
    ;
    UserProvider.prototype.authenticateURL = function (urlString) {
        return urlString + 'l=' + this.userName + '&p=' + this.password;
        //return urlString + 'l=MobileApp'  + '&p=123456';
    };
    ;
    UserProvider.prototype.authenticateURLgettingData = function (urlString) {
        return urlString + 'l=MobileApp' + '&p=123456';
    };
    ;
    UserProvider.prototype.getCompleteURL = function (serviceName) {
        return this.config.apiBasePoint + serviceName;
    };
    ;
    UserProvider.prototype.IsSignedIn = function () {
        var self = this;
        this.userData = null;
        var loginObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var LoginURL = self.authenticateURL(self.config.apiBasePoint + 'Country?');
            LoginURL = LoginURL + '&_startRow=0&_endRow=1';
            /*var loginURL    =   self.authenticateURLgettingData(self.config.apiBasePoint + 'ADUser?');
            loginURL        =   loginURL + '&_where=username=%27' + this.userName + '%27';
            console.log(LoginURL);
            console.log(loginURL);*/
            var UserWS = null; //self.http.get(LoginURL);
            UserWS.subscribe(function (WSResposonse) {
                observer.next(WSResposonse.json().response.data[0]);
                observer.complete();
            }, function (err) {
                observer.error(err);
            }, function () {
                observer.complete();
            });
        });
        return loginObservable;
    };
    UserProvider.prototype.isSignedIn = function () {
        var _this = this;
        //this.logProvider.info({"logMessage":"User Provider :: isSignedIn ::"});
        //console.log('check for sign in');
        localStorage.setItem('userName', this.userName);
        localStorage.setItem('password', this.password);
        var self = this;
        this.userData = null;
        var loginObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var loginURL = self.authenticateURL(self.config.apiBasePoint + 'ADUser?');
            loginURL = loginURL + '&_where=username=%27' + _this.userName + '%27%20and%20password!=null%20and%20defaultRole!=null&_startRow=0&_endRow=1';
            //%20and%20defaultRole!=null';
            console.log(loginURL);
            var userWS = self.http.get(loginURL);
            if ((_this.userName.length != 0) && (_this.password.length != 0)) {
                _this.nativehttp.get(loginURL, {}, {})
                    .then(function (data) {
                    console.log(data.status);
                    console.log("res" + data.data); // data received by server
                    console.log(data.headers);
                    var result = JSON.parse(data.data);
                    console.log("response" + result.response.data[0].name + result.response.data.name);
                    self.userData = result.response.data[0];
                    _this.userid = result.response.data[0].id;
                    _this.client = result.response.data[0].client;
                    _this.organization = result.response.data[0].organization;
                    _this.bpartner = result.response.data[0].businessPartner;
                    _this.defaultrole = result.response.data[0].defaultRole$_identifier;
                    _this.profilename = result.response.data[0].firstName + " " + result.response.data[0].lastName;
                    _this.email = result.response.data[0].email;
                    _this.organizationname = result.response.data[0].organization$_identifier;
                    localStorage.setItem('userid', _this.userid);
                    localStorage.setItem('client', _this.client);
                    localStorage.setItem('organization', _this.organization);
                    localStorage.setItem('bpartner', _this.bpartner);
                    localStorage.setItem('defaultrole', _this.defaultrole);
                    localStorage.setItem('profilename', _this.profilename);
                    localStorage.setItem('email', _this.email);
                    localStorage.setItem('organizationname', _this.organizationname);
                    console.log("OnLogin  local ===", _this.userid);
                    observer.next(self.userData);
                    observer.complete();
                })
                    .catch(function (error) {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);
                    console.log(error);
                    observer.error(error.error);
                });
                //console.log('User Provider :: isSignedIn :: ' + loginURL);
                /*UserWS.subscribe(
                    WSResposonse => {*/
                /*  userWS.subscribe(
                              wsResponse  =>  {
                                  console.log("OnLogin  userData ===",wsResponse);
                                  console.log("OnLogin  pushToken ===",self.pushToken + this.userid);
                                  //console.log('check for sign in - complete');
                                  self.userData           =   wsResponse.json().response.data[0];
                                 
                                  this.userid           =   wsResponse.json().response.data[0].id;
                                  this.client           =   wsResponse.json().response.data[0].client;
                                  this.organization     =   wsResponse.json().response.data[0].organization;
                                  this.bpartner         =   wsResponse.json().response.data[0].businessPartner;
                                  this.defaultrole         =   wsResponse.json().response.data[0].defaultRole$_identifier;
                                  this.organizationname     =   wsResponse.json().response.data[0].organization$_identifier;
                                  localStorage.setItem('userid',this.userid) ;
                                  localStorage.setItem('client',this.client) ;
                                  localStorage.setItem('organization',this.organization);
                                  localStorage.setItem('bpartner',this.bpartner);
                                  localStorage.setItem('defaultrole',this.defaultrole);
                                  localStorage.setItem('organizationname',this.organizationname);
                                console.log("OnLogin  local ===",this.userid);
      
                                  observer.next(self.userData);
                                  observer.complete();
                                  
                                  //self.savePushToken(self.pushToken);
                              },
      
                              err         =>  {
                                  this.stackTrace = ["User Provider :: isSignedIn",loginURL];
                                  //console.log('ERR: User Provider :: isSignedIn :: ' , err);
                                  err.stackTrace = this.stackTrace;
                                  observer.error(err);
                              },
      
                              ()          =>  {
                                  observer.complete();
                              }
                  );  */
            }
            else {
                observer.error('User Credentials Not Available');
            }
        });
        return loginObservable;
    };
    ;
    UserProvider.prototype.savePushToken = function (deviceToken) {
        var _this = this;
        console.log("!!!!!!!!!!!!!!!!!!@@@@@@@@@#################1 in save push token");
        var self = this;
        var loginURL = self.authenticateURL(self.config.apiBasePoint + 'ADUser?');
        var data = {
            "data": {
                "id": self.userData.id,
                "description": deviceToken
            }
        };
        var userWS = null; //self.http.put(loginURL, JSON.stringify(data));
        //console.log('User Provider :: Save Push Token :: ' + loginURL);
        userWS.subscribe(function (wsResponse) {
            var uRespJson = wsResponse.json().response;
            console.log("Successfully saved Push Token: ", uRespJson);
            if (uRespJson.status === 0) {
                console.log("Successfully saved Push Token: ", uRespJson);
            }
            else {
                var errO = uRespJson.error || uRespJson.errors;
                //var errMsg                      =   'ERROR: OB3 Error :: User Provider :: Save Push Token :: \n' + JSON.stringify(errO);
                _this.stackTrace = ["User Provider :: Save Push Token", loginURL];
                console.log("ERRORTTTTT");
            }
        }, function (err) {
            _this.stackTrace = ["User Provider :: Save Push Token", loginURL];
            err.stackTrace = _this.stackTrace;
            // console.log('ERR: User Provider :: Save Push Token :: ' , err);
        }, function () {
        });
    };
    ;
    UserProvider.prototype.signOut = function () {
        console.log("*****************signout");
        this.userName = '';
        this.password = '';
        this.userid = '';
        this.client = '';
        this.organization = '';
        this.bpartner = '';
        this.defaultrole = '';
        this.organizationname = '';
        this.profilename = '';
        this.email = '';
        //console.log(this.userName);
        localStorage.setItem('userName', this.userName);
        localStorage.setItem('password', this.password);
        localStorage.setItem('userid', this.userid);
        localStorage.setItem('client', this.client);
        localStorage.setItem('profilename', this.profilename);
        localStorage.setItem('email', this.email);
        localStorage.setItem('organization', this.organization);
        localStorage.setItem('bpartner', this.bpartner);
        localStorage.setItem('defaultrole', this.defaultrole);
        localStorage.setItem('organizationname', this.organizationname);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 140:
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
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Sales__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shippining_shippining__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = (function () {
    function CartPage(navCtrl, viewCtrl, productsProvider, salesprovider) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.productsProvider = productsProvider;
        this.salesprovider = salesprovider;
        this.products = [];
        this.message = "";
        this.promo = true;
        this.addQty = function (index) {
            this.products[index].qty = this.products[index].qty + 1;
            console.log("addqty" + this.products[index].qty);
            this.cartTotal();
        };
        this.removeQty = function (index) {
            if (this.products[index].qty > 1)
                this.products[index].qty = this.products[index].qty - 1;
            console.log("removeqty" + this.products[index].qty);
            this.cartTotal();
        };
        this.deleteProduct = function (index) {
            this.products.splice(index, 1);
            this.cartTotal();
        };
    }
    CartPage.prototype.ionViewWillEnter = function () {
        this.products = this.productsProvider.productList;
        console.log("productslenght" + this.products.length);
        this.cartTotal();
    };
    CartPage.prototype.cartTotal = function () {
        var prds = this.products;
        var total = 0;
        for (var i = 0; i < prds.length; i++) {
            total = total + prds[i].qty * prds[i].price;
            console.log(total);
        }
        this.carttotalamount = (Math.round(total * 100) / 100).toFixed(2);
        this.carttotalamountwithdiscount = this.carttotalamount;
    };
    CartPage.prototype.shippage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__shippining_shippining__["a" /* ShippiningPage */]);
    };
    CartPage.prototype.discountchange = function (discount) {
        this.carttotalamount = this.carttotalamountwithdiscount - ((this.carttotalamountwithdiscount * discount) / 100);
        this.carttotalamount = (Math.round(this.carttotalamount * 100) / 100).toFixed(2);
        console.log("carttotalamount1" + this.carttotalamount);
    };
    ;
    CartPage.prototype.applypromocode = function () {
        var _this = this;
        if (this.discount == "FIRST25") {
            if (this.carttotalamountwithdiscount < 100) {
                this.message = "Min Order value is 100 for this Promocode";
                this.promo = false;
                this.msgcolor = "#ff3300";
            }
            else {
                this.salesprovider.CheckFirstorderornot().subscribe(function (d) {
                    console.log("====>orde", d);
                    if (d.length == 0) {
                        _this.message = "Hey, you got 25% discount on your Order";
                        _this.promo = false;
                        _this.msgcolor = "#028000";
                        _this.discountchange(25);
                    }
                    else {
                        _this.message = "You Already used this Promocode";
                        _this.promo = false;
                        _this.msgcolor = "#ff3300";
                    }
                }, function (err) {
                    var l = err.stackTrace.length;
                    //console.error(err);
                    alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
                }, function () { });
            }
        }
        else if (this.discount == null) {
            if (this.carttotalamountwithdiscount < 100) {
                this.message = "Please enter a valid PromoCode";
                this.promo = false;
                this.msgcolor = "#ff3300";
            }
        }
        else {
            if (this.carttotalamountwithdiscount < 100) {
                this.message = "Please enter a valid PromoCode";
                this.promo = false;
                this.msgcolor = "#ff3300";
            }
        }
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/cart/cart.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Cart\n            \n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="your-cart">\n        <ion-card *ngFor="let item of products; let i = index">\n            <ion-card-content>\n                <ion-row>\n                    <ion-col col-3>\n                        <div class="img-box">\n                            <img [src]="item.photo">\n                        </div>\n                    </ion-col>\n                    <ion-col col-9>\n                        <h4>{{item.productname}}\n                            <!-- <ion-icon name="ios-trash-outline" (click)="deleteProduct(i)" class="icon text-light">Remove</ion-icon> -->\n                            <p (click)="deleteProduct(i)">Remove</p>\n                        </h4>\n                        <!-- <div class="rate">\n                            <div style="display: flex;" class="price-box">\n                                <div class="price text-sky" margin-right>\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">{{item.price}}\n                                </div>\n                            </div> -->\n                            <!-- <div class="quantiy">\n                                <ion-item>\n                                    <ion-label>Quantiy</ion-label>\n                                    <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                                        <ion-option selected value="enable">1</ion-option>\n                                        <ion-option value="mute">2</ion-option>\n                                        <ion-option value="mute_week">3</ion-option>\n                                    </ion-select>\n                                </ion-item>\n                            </div> -->\n                            <!-- <ion-row>\n                            <div>\n                                    <div class="addqty" >\n                                            <button ion-button clear color=\'app\' (click)="removeQty(i)" >\n                                               <ion-icon style="font-size: 25px;" name="remove-circle"></ion-icon>\n                                            </button>\n                                        </div>\n                           \n                                        <div class="addqty">\n                                               <h6 style="padding: 4px 0px;width:20px;text-align:center;" >{{item.qty}}</h6>\n                                        </div>\n                           \n                                       <div class="addqty">\n                                           <button ion-button clear color=\'app\' (click)="addQty(i)">\n                                                <ion-icon style="font-size: 25px;"  name="add-circle"></ion-icon>\n                                           </button>\n                                       </div>             \n                             </div>\n                            </ion-row> -->\n                            <!-- <ion-row>\n                                    <div>\n                                        <ion-col col-2>\n                                            <div class="addqty" >\n                                                    <button ion-button clear  (click)="removeQty()" >\n                                                       <ion-icon style="font-size: 25px;margin-right:1px" name="remove-circle"></ion-icon>  {{qty}}\n                                                    </button>\n                                                </div>\n                                            </ion-col> -->\n                                            <!-- <ion-col col-2>\n                                                <div class="addqty">\n                                                       <h6 style="padding: 4px 0px;width:20px;text-align: center"></h6>\n                                                    </div>\n                                                    </ion-col>   -->\n                                   <!-- <ion-col col-2>\n                                               <div class="addqty">\n                                                   <button ion-button clear  (click)="addQty()">\n                                                        <ion-icon style="font-size: 25px;"  name="add-circle"></ion-icon>\n                                                   </button>\n                                               </div>  \n                                            </ion-col>\n                                     </div>\n                                    </ion-row>\n                        </div> -->\n                        <div class="select-section shadow-bottom">\n                                <ion-row>\n                                    <ion-col col-4>\n                                        <div class="size d-flex">\n                        \n                                            <ion-label> Price</ion-label>\n                                            <p class="d-flex">\n                                                <!-- <img src="assets/imgs/rupee-sky.png"> -->\n                                                <span class="text-sky" text-right>{{item.price}}</span>\n                                            </p>\n                                        </div>\n                                    </ion-col>\n                                    \n                                        <!-- <div class="quantiy">\n                                            <ion-item>\n                                                <ion-label>Quantiy</ion-label>\n                                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                                                    <ion-option selected value="enable">1</ion-option>\n                                                    <ion-option value="mute">2</ion-option>\n                                                    <ion-option value="mute_week">3</ion-option>\n                                                </ion-select>\n                                            </ion-item>\n                                            <ion-icon name="ios-arrow-down-outline"></ion-icon>\n                                        </div> -->\n                                       \n                                          <ion-col col-4>\n                                            \n                                               \n                                                        <button ion-button clear  (click)="removeQty(i)" >\n                                                           <ion-icon style="font-size: 25px;margin-right: 25px" name="remove-circle"></ion-icon>  {{item.qty}}\n                                                        </button>\n                                                    \n                                          </ion-col>\n                                               \n                                                \n                                                 <ion-col col-4>\n                                                       <button ion-button clear  (click)="addQty(i)">\n                                                            <ion-icon style="font-size: 25px;"  name="add-circle"></ion-icon>\n                                                       </button>\n                                                    </ion-col> \n                                           \n                            \n                                        </ion-row>\n                                    \n                               \n                            </div>\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-row class="checkout">\n            <ion-col col-6>\n                <h6 class="">\n                    Total   \n                   <!-- <span> <img src="assets/imgs/rupee-black.png"></span> -->\n                    {{carttotalamount}}\n                </h6>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button (click)="shippage()" full class="bg-thime btn-round btn-text   btn-shadow">Proceed to Checkout</button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_product__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Sales__["a" /* SalesProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { HttpClientModule } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http/';

var UtilityProvider = (function () {
    function UtilityProvider(http, 
        // private httpclient         :   HttpClient,
        config, userpro, nativehttp) {
        this.http = http;
        this.config = config;
        this.userpro = userpro;
        this.nativehttp = nativehttp;
        this.stackTrace = [];
        this.singleArray = [];
    }
    ;
    UtilityProvider.prototype.getMobileAccess = function () {
        var endPoint = 'mbcrm_mobileaccess';
        var queryParams = "&_where=user=%27" + this.userpro.userid + "%27&_selectedProperties=mbcrmMobilemaster&_startRow=0&_endRow=10";
        return this.getOB3Object(endPoint, queryParams);
    };
    UtilityProvider.prototype.getOrganization = function () {
        var endPoint = 'RWS_UserOrganization';
        var queryParams = "&_where=user=%27" + this.userpro.userid + '%27';
        return this.getOB3Object(endPoint, queryParams);
    };
    UtilityProvider.prototype.getOB3Object = function (utilityEndPoint, queryParams, sortConfig) {
        var _this = this;
        var self = this;
        var utilityObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var utilityURL = self.userpro.authenticateURL(self.config.apiBasePoint + utilityEndPoint + "?");
            utilityURL = utilityURL + queryParams;
            console.log("------------------------------------>");
            console.log(utilityURL);
            console.log("------------------------------------->");
            //console.log('Utility Provider :: Get Utility :: ' + utilityURL);
            _this.nativehttp.get(utilityURL, {}, {})
                .then(function (data) {
                console.log(data.status);
                console.log("res" + data.data); // data received by server
                console.log(data.headers);
                var result = JSON.parse(data.data);
                console.log("response" + result.response.data[0]);
                var uRespJson = result.response;
                if (uRespJson.status === 0) {
                    var utilityData = uRespJson.data;
                    if (sortConfig) {
                        if (sortConfig.type === 'string') {
                            utilityData.sort(function (a, b) {
                                return a[sortConfig.fieldName].localeCompare(b[sortConfig.fieldName]);
                            });
                        }
                        else if (sortConfig.type === 'number') {
                            utilityData.sort(function (a, b) {
                                return a[sortConfig.fieldName] - b[sortConfig.fieldName];
                            });
                        }
                        else if (sortConfig.type === 'date') {
                            utilityData.sort(function (a, b) {
                                var aa = new Date(a[sortConfig.fieldName]);
                                var bb = new Date(b[sortConfig.fieldName]);
                                return aa < bb;
                            });
                        }
                    }
                    observer.next(utilityData);
                }
                else {
                    var errO = uRespJson.error || uRespJson.errors;
                    var errMsg = 'ERROR: OB3 Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(errO);
                    self.stackTrace = ["Utility Provider :: Get Utility :: Utility Response ::", errO];
                    //console.log(errMsg);
                    observer.error(errMsg);
                }
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                console.log(error);
                observer.error(error.error);
            });
            /* let utilityWS       =   self.http.get(utilityURL);
                
                utilityWS.subscribe(
    
                    utilityResponse =>  {
                       
                        var uRespJson               =   utilityResponse.json().response;
                       
                        if (uRespJson.status === 0) {
                            var utilityData         =   uRespJson.data;
                           
                            if (sortConfig) {
                               
                                if (sortConfig.type === 'string') {
                                   
                                    utilityData.sort(function(a,b) {
                                        return a[sortConfig.fieldName].localeCompare(b[sortConfig.fieldName]);
                                    });
                                } else if (sortConfig.type === 'number') {
                                   
                                    utilityData.sort(function(a,b) {
                                        return a[sortConfig.fieldName] - b[sortConfig.fieldName];
                                    });
                                } else if (sortConfig.type === 'date') {
                                    utilityData.sort(function(a,b) {
                                        var aa  =   new Date(a[sortConfig.fieldName]);
                                        var bb  =   new Date(b[sortConfig.fieldName]);
                                        return aa < bb;
                                    });
                                }
                            }
    
                            observer.next(utilityData);
                        } else {
                            
                            let errO                =   uRespJson.error || uRespJson.errors;
                            var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(errO);
                            self.stackTrace         =   ["Utility Provider :: Get Utility :: Utility Response ::",errO];
                            //console.log(errMsg);
                            observer.error(errMsg);
                        }
                    },
    
                    utilityErr      =>  {
                       
                        var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(utilityErr);
                        self.stackTrace = ["Utility Provider :: Get Utility :: Utility Observable ::",JSON.stringify(utilityErr)];
                       // console.log(errMsg);
                        observer.error(errMsg);
                    },
    
                    ()              =>  {
                    }
    
                );  */
        });
        return utilityObservable;
        //console.log(JSON.stringify(approversArr));
    };
    UtilityProvider.prototype.getOB3ObjectWithRecords = function (utilityEndPoint, queryParams, start, end, sortConfig) {
        var self = this;
        var utilityObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var utilityURL = self.userpro.authenticateURL(self.config.apiBasePoint + utilityEndPoint + "?");
            utilityURL = utilityURL + queryParams;
            utilityURL = utilityURL + "&_startRow=" + start + "&_endRow=" + end;
            console.log("------------------------------------>");
            console.log(utilityURL);
            console.log("------------------------------------->");
            //console.log('Utility Provider :: Get Utility :: ' + utilityURL);
            var utilityWS = null; // self.http.get(utilityURL);
            utilityWS.subscribe(function (utilityResponse) {
                var uRespJson = utilityResponse.json().response;
                if (uRespJson.status === 0) {
                    var utilityData = uRespJson.data;
                    if (sortConfig) {
                        if (sortConfig.type === 'string') {
                            utilityData.sort(function (a, b) {
                                return a[sortConfig.fieldName].localeCompare(b[sortConfig.fieldName]);
                            });
                        }
                        else if (sortConfig.type === 'number') {
                            utilityData.sort(function (a, b) {
                                return a[sortConfig.fieldName] - b[sortConfig.fieldName];
                            });
                        }
                        else if (sortConfig.type === 'date') {
                            utilityData.sort(function (a, b) {
                                var aa = new Date(a[sortConfig.fieldName]);
                                var bb = new Date(b[sortConfig.fieldName]);
                                return aa < bb;
                            });
                        }
                    }
                    observer.next(utilityData);
                }
                else {
                    var errO = uRespJson.error || uRespJson.errors;
                    var errMsg = 'ERROR: OB3 Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(errO);
                    self.stackTrace = ["Utility Provider :: Get Utility :: Utility Response ::", errO];
                    //console.log(errMsg);
                    observer.error(errMsg);
                }
            }, function (utilityErr) {
                var errMsg = 'ERROR: HTTP Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(utilityErr);
                self.stackTrace = ["Utility Provider :: Get Utility :: Utility Observable ::", JSON.stringify(utilityErr)];
                // console.log(errMsg);
                observer.error(errMsg);
            }, function () {
            });
        });
        return utilityObservable;
        //console.log(JSON.stringify(approversArr));
    };
    UtilityProvider.prototype.getOB3ObjectFor = function (organizationID, customerID, grandtotal, orderid) {
        var _this = this;
        console.log("getOB3ObjectFor");
        var self = this;
        var utilityObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var utilityURL = _this.config.apipoint + "ws/com.saksham.rwsales.docheck?"; //l=manoj&p=123456&OrderID="+orderID+"&CustomerID="+customerID;
            var UtilURL = _this.userpro.authenticateURL(utilityURL);
            UtilURL = UtilURL + "&OrgnizationID=" + organizationID + "&CustomerID=" + customerID + "&GrandTotal=" + grandtotal + "&OrderID=" + orderid;
            utilityURL = UtilURL;
            console.log("/**************url is-------------------->" + utilityURL);
            var utilityWS = null; // self.http.get(utilityURL);
            utilityWS.subscribe(function (utilityResponse) {
                var uRespJson = utilityResponse.json();
                var utilityData = uRespJson;
                observer.next(utilityData);
            }, function (utilityErr) {
                var errMsg = 'ERROR: HTTP Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(utilityErr);
                self.stackTrace = ["Utility Provider :: Get Utility :: Utility Observable ::", JSON.stringify(utilityErr)];
                // console.log(errMsg);
                observer.error(errMsg);
            }, function () {
            });
        });
        return utilityObservable;
        //console.log(JSON.stringify(approversArr));
    };
    UtilityProvider.prototype.putOB3Object = function (utilityEndPoint, putPayload) {
        var _this = this;
        var utilityObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var utilityURL = _this.userpro.authenticateURL(_this.config.apiBasePoint + utilityEndPoint + "?");
            var utilityWS = null; /*this.http.put(utilityURL, JSON.stringify(putPayload));*/
            console.log("_______________AZIZ SIR");
            console.log(utilityURL);
            console.log(putPayload);
            utilityWS.subscribe(function (utilityResponse) {
                console.log("==================================> AZIZ sir");
                console.log(utilityURL);
                console.log(putPayload);
                console.log(utilityResponse);
                var uRespJson = utilityResponse.json().response;
                if (uRespJson.status === 0) {
                    var utilityData = uRespJson.data;
                    observer.next(utilityData);
                }
                else {
                    var errO = uRespJson.error || uRespJson.errors;
                    _this.stackTrace = ["Utility Provider ::  Put Utility :: Utility Response", JSON.stringify(errO)];
                    var errMsg = 'ERROR: OB3 Error :: Utility Provider :: Put Utility :: \n' + JSON.stringify(errO);
                    //console.log(errMsg);
                    observer.error(errMsg);
                }
            }, function (utilityErr) {
                console.log("AZIZ SIR ERRROR");
                _this.stackTrace = ["Utility Provider :: Put Utility ::", JSON.stringify(utilityErr)];
                var errMsg = 'ERROR: HTTP Error :: Utility Provider :: Put Utility :: \n' + JSON.stringify(utilityErr);
                //console.log(errMsg);
                observer.error(errMsg);
            }, function () {
            });
        });
        return utilityObservable;
    };
    UtilityProvider.prototype.postOB3Object = function (utilityEndPoint, postPayload) {
        var _this = this;
        console.log("+++++++++++-----===========>");
        console.log(postPayload);
        console.log(JSON.stringify(postPayload));
        console.log("++++++++++++-----------===========>");
        var utilityObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var utilityURL = _this.userpro.authenticateURL(_this.config.apiBasePoint + utilityEndPoint + "?");
            _this.nativehttp.setDataSerializer("json");
            _this.nativehttp.post(utilityURL, postPayload, { 'Content-Type': 'application/json' })
                .then(function (data) {
                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
                var result = JSON.parse(data.data);
                var uRespJson = result.response;
                if (uRespJson.status === 0) {
                    var utilityData = uRespJson.data;
                    observer.next(utilityData);
                }
                else {
                    var errO = uRespJson.error || uRespJson.errors;
                    _this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse", JSON.stringify(errO)];
                    var errMsg = 'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                    //console.log(errMsg);
                    observer.error(errMsg);
                }
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                console.log("error" + error);
                observer.error(error.error);
            });
            //console.log('Utility Provider :: Post Utility :: ' + utilityURL);
            /*  let utilityWS       =   this.http.post(utilityURL, JSON.stringify(postPayload));
               
              
                utilityWS.subscribe(
    
                    utilityResponse =>  {
                        var uRespJson               =   utilityResponse.json().response;
              
                        if (uRespJson.status === 0) {
                            var utilityData         =   uRespJson.data;
    
                            observer.next(utilityData);
                        } else {
                           
                            let errO               =   uRespJson.error || uRespJson.errors;
                            this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse",JSON.stringify(errO)];
                            
                            var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                            //console.log(errMsg);
                            observer.error(errMsg);
                        }
                    },
    
                    utilityErr      =>  {
                        this.stackTrace = ["Utility Provider :: Post  Utility :: UtilityObservable",JSON.stringify(utilityErr)];
                        var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(utilityErr);
                        //console.log(errMsg);
                        observer.error(errMsg);
                    },
    
                    ()              =>  {
                    }
    
                ); */
        });
        return utilityObservable;
    };
    UtilityProvider.prototype.postOB3ObjectforWebservice = function (utilityEndPoint, postPayload) {
        var _this = this;
        console.log("+++++++++++-----===========>");
        console.log(postPayload);
        console.log(JSON.stringify(postPayload));
        console.log("++++++++++++-----------===========>");
        var utilityObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var utilityURL = _this.userpro.authenticateURL(_this.config.apipoint + utilityEndPoint + "?");
            //console.log('Utility Provider :: Post Utility :: ' + utilityURL);
            _this.nativehttp.setDataSerializer("json");
            _this.nativehttp.post(utilityURL, postPayload, { 'Content-Type': 'application/json' })
                .then(function (data) {
                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
                var result = JSON.parse(data.data);
                var uRespJson = result.response;
                if (uRespJson.status === 0) {
                    var utilityData = uRespJson;
                    observer.next(utilityData);
                }
                else {
                    var errO = uRespJson.error || uRespJson.errors;
                    _this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse", JSON.stringify(errO)];
                    var errMsg = 'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                    //console.log(errMsg);
                    observer.error(errMsg);
                }
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                console.log("error" + error);
                observer.error(error.error);
            });
            /* let utilityWS       =   this.http.post(utilityURL, JSON.stringify(postPayload));
              
             
               utilityWS.subscribe(
   
                   utilityResponse =>  {
                       var uRespJson               =   utilityResponse.json().response;
             
                       if (uRespJson.status === 0) {
                           var utilityData         =   uRespJson;
   
                           observer.next(utilityData);
                       } else {
                          
                           let errO               =   uRespJson.error || uRespJson.errors;
                           this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse",JSON.stringify(errO)];
                           
                           var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                           //console.log(errMsg);
                           observer.error(errMsg);
                       }
                   },
   
                   utilityErr      =>  {
                       this.stackTrace = ["Utility Provider :: Post  Utility :: UtilityObservable",JSON.stringify(utilityErr)];
                       var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(utilityErr);
                       //console.log(errMsg);
                       observer.error(errMsg);
                   },
   
                   ()              =>  {
                   }
   
               );  */
        });
        return utilityObservable;
    };
    UtilityProvider.prototype.Webserviceforusercreation = function (utilityEndPoint, postPayload) {
        var _this = this;
        console.log("+++++++++++-----===========>");
        console.log(postPayload);
        console.log(JSON.stringify(postPayload));
        console.log("++++++++++++-----------===========>");
        var utilityObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var utilityURL = _this.userpro.authenticateURLgettingData(_this.config.apipoint + utilityEndPoint + "?");
            //console.log('Utility Provider :: Post Utility :: ' + utilityURL);
            _this.nativehttp.setDataSerializer("json");
            _this.nativehttp.post(utilityURL, postPayload, { 'Content-Type': 'application/json' })
                .then(function (data) {
                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
                var result = JSON.parse(data.data);
                var uRespJson = result.response;
                if (uRespJson.status === 0) {
                    var utilityData = uRespJson;
                    observer.next(utilityData);
                }
                else {
                    var errO = uRespJson.error || uRespJson.errors;
                    _this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse", JSON.stringify(errO)];
                    var errMsg = 'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                    //console.log(errMsg);
                    observer.error(errMsg);
                }
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                console.log("error" + error);
                observer.error(error.error);
            });
            /*  let utilityWS       =   this.http.post(utilityURL, JSON.stringify(postPayload));
            
              utilityWS.subscribe(
  
                  utilityResponse =>  {
                      console.log("useres"+utilityResponse.json());
                      var uRespJson               =   utilityResponse.json().response;
            
                      if (uRespJson.status === 0) {
                          var utilityData         =   uRespJson;
  
                          observer.next(utilityData);
                      } else {
                         
                          let errO               =   uRespJson.error || uRespJson.errors;
                          this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse",JSON.stringify(errO)];
                          
                          var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                          //console.log(errMsg);
                          observer.error(errMsg);
                      }
                  },
  
                  utilityErr      =>  {
                      this.stackTrace = ["Utility Provider :: Post  Utility :: UtilityObservable",JSON.stringify(utilityErr)];
                      var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(utilityErr);
                      //console.log(errMsg);
                      observer.error(errMsg);
                  },
  
                  ()              =>  {
                  }
  
              ); */
        });
        return utilityObservable;
    };
    UtilityProvider.prototype.getUserlocation = function () {
        var endPoint = 'Warehouse';
        var queryParams = "&_where=organization=%27" + this.userpro.organization + "%27";
        return this.getOB3Object(endPoint, queryParams);
    };
    UtilityProvider.prototype.getRegions = function () {
        var endPoint = 'Region';
        var queryParams = "&_where=country=%27208%27&_sortBy=name&_selectedProperties=id,name";
        return this.getOB3Object(endPoint, queryParams);
    };
    UtilityProvider.prototype.getBpLocation = function () {
        var endPoint = 'BusinessPartnerLocation';
        var queryParams = "&_where=businessPartner=%27" + this.userpro.bpartner + "%27&_selectedProperties=id,locationAddress";
        return this.getOB3Object(endPoint, queryParams);
    };
    UtilityProvider.prototype.getUserlocationdetails = function (locationid) {
        var endPoint = 'Location';
        var queryParams = "&_where=id=%27" + locationid + "%27";
        return this.getOB3Object(endPoint, queryParams);
    };
    UtilityProvider.prototype.getUserState = function () {
        var _this = this;
        var userstateObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.getUserlocation().subscribe(function (userlocation) {
                console.log("================userlocation", userlocation);
                _this.getUserlocationdetails(userlocation[0].locationAddress).subscribe(function (userlocationdetails) {
                    observer.next(userlocationdetails);
                }, function (userlocationdetailsErr) {
                    var errMsg = 'ERROR: :: Utility Provider :: getTaxListCorrespondingToState :: while getting Zone :: \n' + JSON.stringify(userlocationdetailsErr);
                    console.log(errMsg);
                    observer.error(errMsg);
                });
            }, function (userlocationError) {
                var errMsg = 'ERROR: :: Utility Provider :: getTaxListCorrespondingToState :: while getting Zone :: \n' + JSON.stringify(userlocationError);
                console.log(errMsg);
                observer.error(errMsg);
            });
        });
        return userstateObservable;
    };
    ;
    UtilityProvider.prototype.putfcmid = function () {
        var quotData = {
            data: {}
        };
        quotData.data.id = this.userpro.userid;
        quotData.data.description = this.userpro.fcmid;
        console.log(quotData);
        return this.postOB3Object("ADUser", quotData);
    };
    UtilityProvider.prototype.sendNotification = function (fcm, message, openpage, id, amount) {
        var body = {
            "notification": {
                "title": "Fortune",
                "body": message,
                "sound": "default",
                "click_action": "FCM_PLUGIN_ACTIVITY",
                "icon": "fcm_push_icon"
            },
            "data": {
                "open": openpage,
                "id": id,
                "amount": amount
            },
            "to": fcm,
            "priority": "high",
            "restricted_package_name": ""
        };
        // let options = new HttpHeaders().set('Content-Type','application/json');
        // this.httpclient.post("https://fcm.googleapis.com/fcm/send",body,{
        // headers : options.set('Authorization', 'key=AIzaSyBMxa8HOJDZVd962i7z9id924ilHbScbBI'),
        //})
        //  .subscribe();
    };
    UtilityProvider.prototype.Createuser = function (user) {
        var quotData = {
            data: {}
        };
        quotData.data.firstname = user.firstname;
        quotData.data.lastname = user.lastname;
        quotData.data.mobile = user.mobile;
        quotData.data.emailid = user.email;
        quotData.data.passwd = user.password;
        quotData.data.clientid = "7C9573D339E146C0BBF735BCB7533AB7";
        quotData.data.categorycode = "CUS";
        console.log(quotData);
        return this.Webserviceforusercreation("ws/com.saksham.uploadfile.AddUserPasswd", quotData);
    };
    UtilityProvider.prototype.sendOTP = function (mobilenumber, otp) {
        var _this = this;
        var self = this;
        var utilityObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var utilityURL = " http://182.18.160.225/index.php/api/customized-sms?username=Medicineshoppee&password=Medicine$123&from=MEDSHP&mobile_msg=" + mobilenumber + "^M-+" + otp + "+is+your+medicineshoppee+verification+code.&sms_type=2";
            console.log("------------------------------------>");
            console.log(utilityURL);
            console.log("------------------------------------->");
            //console.log('Utility Provider :: Get Utility :: ' + utilityURL);
            _this.nativehttp.get(utilityURL, {}, {})
                .then(function (data) {
                console.log(data.status);
                console.log("res" + data.data); // data received by server
                console.log(data.headers);
                var result = JSON.parse(data.data);
                console.log("response" + result);
                var uRespJson = result;
                if (uRespJson.NoOfSMS === 1) {
                    var utilityData = uRespJson;
                    observer.next(utilityData);
                }
                else {
                    var errO = uRespJson.error || uRespJson.errors;
                    var errMsg = 'ERROR: OB3 Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(errO);
                    self.stackTrace = ["Utility Provider :: Get Utility :: Utility Response ::", errO];
                    //console.log(errMsg);
                    observer.error(errMsg);
                }
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                console.log(error);
                observer.error(error.error);
            });
        });
        return utilityObservable;
        //console.log(JSON.stringify(approversArr));
    };
    UtilityProvider.prototype.sendMessages = function (mobilenumber, message) {
        var _this = this;
        var self = this;
        var utilityObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var utilityURL = " http://182.18.160.225/index.php/api/customized-sms?username=Medicineshoppee&password=Medicine$123&from=MEDSHP&mobile_msg=" + mobilenumber + "^" + message + "&sms_type=2";
            console.log("------------------------------------>");
            console.log(utilityURL);
            console.log("------------------------------------->");
            //console.log('Utility Provider :: Get Utility :: ' + utilityURL);
            _this.nativehttp.get(utilityURL, {}, {})
                .then(function (data) {
                console.log(data.status);
                console.log("res" + data.data); // data received by server
                console.log(data.headers);
                var result = JSON.parse(data.data);
                console.log("response" + result);
                var uRespJson = result;
                if (uRespJson.NoOfSMS === 1) {
                    var utilityData = uRespJson;
                    observer.next(utilityData);
                }
                else {
                    var errO = uRespJson.error || uRespJson.errors;
                    var errMsg = 'ERROR: OB3 Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(errO);
                    self.stackTrace = ["Utility Provider :: Get Utility :: Utility Response ::", errO];
                    //console.log(errMsg);
                    observer.error(errMsg);
                }
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                console.log(error);
                observer.error(error.error);
            });
        });
        return utilityObservable;
        //console.log(JSON.stringify(approversArr));
    };
    UtilityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */]])
    ], UtilityProvider);
    return UtilityProvider;
}());

//# sourceMappingURL=utility.js.map

/***/ }),

/***/ 182:
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
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Component } from '@angular/core';
// import { NavController, ViewController } from 'ionic-angular';



var SearchPage = (function () {
    function SearchPage(navCtrl, viewCtrl, modalCtrl, navpar, productsProvider, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navpar = navpar;
        this.productsProvider = productsProvider;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
        this.medizoneitem = [];
        this.medizoneitem1 = [];
        this.medizoneitemList = [];
        this.start = 0;
        this.end = 10;
    }
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.getRecords = function (actvty) {
        console.log("Search Value");
        console.log(actvty.target.value);
        this.intilaizeRecords();
        var val = actvty.target.value;
        this.searchValue = val;
        if (val == '') {
            console.log("Empty");
            this.medizoneitem = this.medizoneitemList;
        }
        else if (val.length >= 4) {
            this.search();
        }
    };
    SearchPage.prototype.intilaizeRecords = function () {
        var self = this;
        self.medizoneitem = self.medizoneitemList;
    };
    SearchPage.prototype.loadMore = function (event) {
        var _this = this;
        this.event = event;
        console.log("Evemt === ", this.event);
        var self = this;
        this.start = this.end;
        this.end = this.end + 10;
        this.event = event;
        this.productsProvider.getProductwithimages(this.category, this.start, this.end).subscribe(function (productsResponse) {
            if (productsResponse.length == 0) {
                _this.stop = true;
            }
            else {
                var j = _this.medizoneitem.length;
                console.log(productsResponse);
                for (var i = 0; i < productsResponse.length; i++) {
                    _this.medizoneitem[j] = productsResponse[i];
                    j++;
                }
            }
            _this.medizoneitemList = _this.medizoneitem;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Success");
        });
        if (this.stop) {
            console.log("IT is stopped");
            //event.enable(false);
        }
        else {
            console.log("IT is not stopped");
        }
        setTimeout(function () {
            event.complete();
            console.log('Async operation has ended');
        }, 500);
    };
    SearchPage.prototype.search = function () {
        var _this = this;
        console.log("Value in search", this.searchValue);
        console.log("Charecter in search", this.searchValue.charAt(0));
        var val = this.searchValue;
        var charecter = this.searchValue.charAt(0);
        console.log("Charecter", charecter);
        var upper = charecter.toUpperCase();
        var lower = charecter.toLowerCase();
        console.log("LOWER", lower);
        console.log("Upper", upper);
        var s = this.searchValue;
        if (lower == charecter) {
            s = s.replace(s.charAt(0), upper);
        }
        console.log("SSSSSS", s);
        var Capital = this.searchValue.toUpperCase();
        var Small = this.searchValue.toLowerCase();
        console.log("Capital", Capital);
        console.log("Small", Small);
        if (val == '') {
            console.log("Empty");
            this.medizoneitem = this.medizoneitemList;
        }
        else {
            var loading_1 = this.loading.create({
                content: "Please Wait..",
            });
            loading_1.present();
            this.productsProvider.getProductNameForSearch(this.category, s).subscribe(function (data) {
                console.log("IN SEARCH");
                console.log(data);
                _this.medizoneitem = data;
                loading_1.dismiss();
                _this.productsProvider.getProductNameForSearch(_this.category, Small).subscribe(function (data) {
                    console.log("IN SEARCH Small Data", data);
                    _this.medizoneitem1 = data;
                    console.log(_this.medizoneitem1.length);
                    console.log(_this.medizoneitem.length);
                    var j = _this.medizoneitem.length;
                    for (var i = 0; i < _this.medizoneitem1.length; i++) {
                        _this.medizoneitem[i + j] = _this.medizoneitem1[i];
                    }
                    _this.productsProvider.getProductNameForSearch(_this.category, Capital).subscribe(function (data) {
                        console.log("IN SEARCH Capital Data", data);
                        _this.medizoneitem1 = data;
                        console.log(_this.medizoneitem1.length);
                        console.log(_this.medizoneitem1.length);
                        var j = _this.medizoneitem.length;
                        for (var i = 0; i < _this.medizoneitem1.length; i++) {
                            _this.medizoneitem[i + j] = _this.medizoneitem1[i];
                        }
                    }, function (err) {
                        console.log("%^%^%^%^%");
                        //console.error(err 
                    }, function () { return console.log('getDraftOrders completed'); });
                }, function (err) {
                    console.log("%^%^%^%^%");
                    //console.error(err 
                }, function () { return console.log('getDraftOrders completed'); });
            }, function (err) {
                console.log("%^%^%^%^%");
                //console.error(err 
            }, function () { return console.log('getDraftOrders completed'); });
        }
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/search/search.html"*/'<ion-content class="bg-light">\n    <div class="d-flex searchbar-section">\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="Search Medicines"></ion-searchbar>\n        <ion-list>\n            <ion-item *ngFor="let item of items">\n                {{ item }}\n            </ion-item>\n        </ion-list>\n        <ion-icon name="md-close" class="close-icon" (click)="dismiss()"></ion-icon>\n    </div>\n\n    <div class="recent-search">\n        <ion-card>\n            <ion-card-header>\n                Recent Search\n                <span text-right class="right">Clear History</span>\n            </ion-card-header>\n            <ion-card-content>\n                <p>\n                    <ion-icon name="ios-time-outline"></ion-icon>Ciprofloxacin \n                </p>\n                <p>\n                    <ion-icon name="ios-time-outline"></ion-icon>Naproxen \n                </p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n    <div class="trending-search">\n        <ion-card>\n            <ion-card-header>\n                Trending Search\n            </ion-card-header>\n            <ion-card-content>\n                <p>\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Crocin\n                </p>\n                <p>\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Dolo 650 MG\n                </p>\n                <p>\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Ativan\n                </p>\n                <p>\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Amoxicillin\n                </p>\n                <p>\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Alprazolam\n                </p>\n                <p>\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Atorvastatin\n                </p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n\n<!-- <strong class="text-sky">Me,s Wear</strong> -->'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_product__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Config = (function () {
    function Config(platform) {
        this.platform = platform;
        this.organization = 'MedicineShoppee';
        // this.ob3Server          =  'https://fortuneerp.easycloud.in/fortune/'
        //this.ob3Server          =  'http://159.69.177.214:8080/erp/'
        this.ob3Server = 'https://medicineshoppee.easycloud.in/erp/';
        // this.ob3Server          =   'https://sakshamerp.easycloud.in/openbravo/';
        //this.ob3Server           =   'https://erp.rockwell.co.in/RIL/';
        this.apiBasePoint = this.ob3Server + 'org.openbravo.service.json.jsonrest/';
        this.apipoint = this.ob3Server;
        this.oneSignalAppID = "28bc6aac-404b-4586-8789-474871f7d77d";
        this.googleProjectNumber = "732163760964";
    }
    ;
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */]])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerscriptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medicines_medicines__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ProductPage } from '../product/product';

var PerscriptionsPage = (function () {
    function PerscriptionsPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.products = "h";
    }
    PerscriptionsPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    //productPage(){
    //  this.navCtrl.push(ProductPage);
    //  }
    PerscriptionsPage.prototype.medicinesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__medicines_medicines__["a" /* MedicinesPage */]);
    };
    PerscriptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perscriptions ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/perscriptions/perscriptions.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Perscriptions Medicines\n            <div class="icon-box">\n                <img src="assets/imgs/search.png" (click)="searchPage()">\n                <!--              <ion-badge>2</ion-badge>-->\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="bg-light">\n    <div class="all-products">\n        <div class="tabs-contant">\n            <ion-segment [(ngModel)]="products">\n                <ion-segment-button value="a">\n                    A\n                </ion-segment-button>\n                <ion-segment-button value="b">\n                    B\n                </ion-segment-button>\n                <ion-segment-button value="c">\n                    C\n                </ion-segment-button>\n                <ion-segment-button value="d">\n                    D\n                </ion-segment-button>\n                <ion-segment-button value="e">\n                    E\n                </ion-segment-button>\n                <ion-segment-button value="f">\n                    F\n                </ion-segment-button>\n                <ion-segment-button value="g">\n                    G\n                </ion-segment-button>\n                <ion-segment-button value="h">\n                    H\n                </ion-segment-button>\n                <ion-segment-button value="i">\n                    I\n                </ion-segment-button>\n                <ion-segment-button value="j">\n                    J\n                </ion-segment-button>\n                <ion-segment-button value="k">\n                    K\n                </ion-segment-button>\n\n                <ion-segment-button value="l">\n                    L\n                </ion-segment-button>\n\n                <ion-segment-button value="m">\n                    M\n                </ion-segment-button>\n\n                <ion-segment-button value="n">\n                    N\n                </ion-segment-button>\n\n                <ion-segment-button value="o">\n                    O\n                </ion-segment-button>\n                <ion-segment-button value="p">\n                    p\n                </ion-segment-button>\n                <ion-segment-button value="q">\n                    Q\n                </ion-segment-button>\n\n                <ion-segment-button value="r">\n                    R\n                </ion-segment-button>\n\n                <ion-segment-button value="s">\n                    S\n                </ion-segment-button>\n\n                <ion-segment-button value="t">\n                    T\n                </ion-segment-button>\n\n                <ion-segment-button value="u">\n                    U\n                </ion-segment-button>\n\n                <ion-segment-button value="v">\n                    V\n                </ion-segment-button>\n\n                <ion-segment-button value="w">\n                    W\n                </ion-segment-button>\n                <ion-segment-button value="x">\n                    X\n                </ion-segment-button>\n                <ion-segment-button value="y">\n                    Y\n                </ion-segment-button>\n                <ion-segment-button value="z">\n                    Z\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n\n        <div [ngSwitch]="products" class="all-items">\n            <ion-list *ngSwitchCase="\'a\'">\n                <ion-item (click)="medicinesPage()">\n                    <p class="">Haematopoiests (54)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Haemorrhoid (35)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hair Loss (91)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Heart Failure (5)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hepatitis B Infection (13)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hight Cholesterol (629)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hight Cholesterol (629)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hyperthyroidism (12)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hormlonal Thearpy (494)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hyperpingmentation (69)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hypertension (1784)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hyperthyroidism (12)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hypnosios (5)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'b\'">\n                <ion-item (click)="medicinesPage()">\n                    <p class=""> Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'c\'">\n                <ion-item (click)="medicinesPage()">\n                    <p class="">First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'d\'">\n                <ion-item (click)="medicinesPage()">\n                    <p class="">First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'e\'">\n                <ion-item (click)="medicinesPage()">\n                    <p class="">First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'f\'">\n                <ion-item (click)="medicinesPage()">\n                    <p class="">First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n            <ion-list *ngSwitchCase="\'h\'">\n                <ion-item (click)="medicinesPage()">\n                    <p class="">Haematopoiests (54)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Haemorrhoid (35)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hair Loss (91)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Heart Failure (5)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hepatitis B Infection (13)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hight Cholesterol (629)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hight Cholesterol (629)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hyperthyroidism (12)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hormlonal Thearpy (494)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hyperpingmentation (69)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hypertension (1784)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hyperthyroidism (12)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="medicinesPage()">\n                    <p>Hypnosios (5)\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/perscriptions/perscriptions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], PerscriptionsPage);
    return PerscriptionsPage;
}());

//# sourceMappingURL=perscriptions.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicinesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_1_product2__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicinesPage = (function () {
    function MedicinesPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.products = "h";
    }
    MedicinesPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    MedicinesPage.prototype.productPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_1_product2__["a" /* ProductsPage */]);
    };
    MedicinesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicines ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/medicines/medicines.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Hight Cholesterol (629)\n            <div class="icon-box">\n                <img src="assets/imgs/search.png" (click)="searchPage()">\n                <!--              <ion-badge>2</ion-badge>-->\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="all-items">\n        <p class="heading">Adilip</p>\n        <p class="" (click)="productPage()">ADILIP 45MG TABLET10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n        <p class="" (click)="productPage()">ADILIP 135MG TABLET10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n\n        <p class="heading">Aff</p>\n        <p class="" (click)="productPage()">AFF TABLET10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n\n        <p class="heading">Arstatin</p>\n        <p class="" (click)="productPage()">ARSTATIN 10MG TABLET10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n        <p class="" (click)="productPage()">ARSTATIN 40MG TABLET10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n        <p class="" (click)="productPage()">ARSTATIN 20MG TABLET10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n        <p class="" (click)="productPage()">ARSTATIN FH TABLET10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n\n        <p class="heading">Arstatin ez</p>\n        <p class="" (click)="productPage()">ARSTATIN TABLET10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n\n\n        <p class="heading">Arvast</p>\n        <p class="" (click)="productPage()">ARVAST 20MG TABLET10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n        <p class="" (click)="productPage()">ARVAST 5MG TABLET10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n        <p class="" (click)="productPage()">ARVAST CF 5MG CAPSULE10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n        <p class="" (click)="productPage()">ARVAST A 75MG CAPSULE10\'S\n            <ion-icon name="ios-arrow-forward-outline" class="icon"></ion-icon>\n        </p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/medicines/medicines.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MedicinesPage);
    return MedicinesPage;
}());

//# sourceMappingURL=medicines.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Sales__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_photo_viewer__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PaymenPage = (function () {
    function PaymenPage(platform, nav, navParams, productsProvider, customerProvider, userprovider, utilityprovider, salesprovider, config, camera, loading, transfer, file, photoViewer, alertctrl) {
        var _this = this;
        this.platform = platform;
        this.nav = nav;
        this.navParams = navParams;
        this.productsProvider = productsProvider;
        this.customerProvider = customerProvider;
        this.userprovider = userprovider;
        this.utilityprovider = utilityprovider;
        this.salesprovider = salesprovider;
        this.config = config;
        this.camera = camera;
        this.loading = loading;
        this.transfer = transfer;
        this.file = file;
        this.photoViewer = photoViewer;
        this.alertctrl = alertctrl;
        this.payment = {};
        this.prescriptionImage = "";
        this.lastImage = null;
        this.prds = [];
        this.customerbpid = {};
        this.customer = {};
        this.cashColor = "#ffffff";
        this.onlineColor = "#ffffff";
        platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                // window.analytics.trackView("Gate Exit Page");
            }
        });
        this.customerProvider.customerName = null;
        this.payment.cashpaid = null;
        this.payment.paymenttype = null;
        this.payment.returnamount = 0.00;
        this.saleorderrecordid = navParams.get("saleorderrecordid");
        this.carttotal = navParams.get("carttotal");
        this.customerbpid = navParams.get("salesorderbpid");
        this.payment.billtotal = parseFloat(this.carttotal);
    }
    PaymenPage.prototype.ionViewWillEnter = function () {
    };
    PaymenPage.prototype.refresh = function () {
    };
    PaymenPage.prototype.takeGallery = function () {
        // let loading = this.loading.create({
        //     content: "Please wait while picture loading..",
        //   });
        //    loading.present();
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        // let loading = this.loading.create({
        //   content: "Please wait while picture loading..",
        // });
        //  loading.present();
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //  let loading = this.loading.create({
            //     content: "Please wait while picture loading..",
            //   });
            //    loading.present();
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            //  loading.dismiss();
        }, function (err) {
            // Handle error
        });
    };
    PaymenPage.prototype.billtotalchange = function () {
        if (this.payment.cashpaid == null || this.payment.cashpaid == '')
            this.payment.returnamount = 0;
        else
            this.payment.returnamount = this.payment.cashpaid - this.payment.billtotal;
        console.log("retamt" + this.payment.returnamount);
    };
    PaymenPage.prototype.cash = function () {
        this.payment.paymenttype = "cash";
        this.cashColor = "#D6EAF8";
        this.onlineColor = "#ffffff";
    };
    PaymenPage.prototype.card = function () {
        this.payment.paymenttype = "online";
        this.onlineColor = "#D6EAF8";
        this.cashColor = "#ffffff";
    };
    PaymenPage.prototype.place = function () {
        var _this = this;
        // if(this.prescriptionImage == null || this.prescriptionImage == "")
        // alert("Please Select Prescription Image");
        // else 
        if (this.payment.paymenttype == "" || this.payment.paymenttype == null)
            alert("Please Select Payment Mode");
        else {
            if (this.payment.paymenttype == "online") {
                var options = {
                    description: 'Credits towards Online Medicine Order',
                    image: 'https://i.imgur.com/3g7nmJC.png',
                    currency: 'INR',
                    key: 'rzp_live_dyuLYiy6ymB6cT',
                    amount: this.carttotal * 100,
                    name: 'Medicine Shoppee',
                    prefill: {
                        email: this.userprovider.email,
                        contact: this.userprovider.userName,
                        name: this.userprovider.profilename
                    },
                    theme: {
                        color: '#F37254'
                    },
                    modal: {
                        ondismiss: function () {
                            alert('dismissed');
                        }
                    }
                };
                var successCallback = function (payment_id) {
                    //alert('Order Placed Successfully , Your Payment reference no is' + payment_id);
                    console.log("paymentid--" + payment_id);
                    _this.CompleteOrder(payment_id);
                };
                var cancelCallback = function (error) {
                    alert(error.description + ' (Error ' + error.code + ')');
                };
                RazorpayCheckout.open(options, successCallback, cancelCallback);
            }
            else {
                this.CompleteOrder("");
            }
        }
    };
    PaymenPage.prototype.takePicture = function () {
        var _this = this;
        console.log("***");
        var self = this;
        this.camera.getPicture({
            //destinationType: this.camera.DestinationType.DATA_URL,
            //destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            targetWidth: 1200,
            targetHeight: 1000,
            saveToPhotoAlbum: true,
        }).then(function (imagePath) {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            console.log("imagepath" + correctPath);
            _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
        }, function (err) {
            console.log(err);
        });
    };
    PaymenPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    PaymenPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            var targetPath = _this.pathForImage(_this.lastImage);
            _this.prescriptionImage = targetPath;
            console.log("targetpath" + targetPath);
            _this.uploadImage();
        }, function (error) {
        });
    };
    PaymenPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    PaymenPage.prototype.uploadImage = function () {
        // Destination URL
        //var url = "http://94.130.127.19:8080/drainvac/CRM_UploadFile?l=muni1&p=123";
        var url = this.userprovider.authenticateURL(this.config.apipoint + "UploadFile?");
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'recordid': this.saleorderrecordid,
                "tableid": "259",
                "clientid": this.userprovider.client,
                "orgid": this.userprovider.organization }
        };
        var fileTransfer = this.transfer.create();
        var loading = this.loading.create({
            content: 'Uploading...',
        });
        loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            loading.dismissAll();
            alert('Image succesfully uploaded.');
            console.log("image options" + options.params);
        }, function (err) {
            loading.dismissAll();
            alert('Error while uploading file.');
        });
    };
    PaymenPage.prototype.viewFullScreen = function (image, title) {
        var _this = this;
        console.log("image is", image);
        this.platform.ready()
            .then(function () {
            if (_this.platform.is('cordova')) {
                if (__WEBPACK_IMPORTED_MODULE_11__ionic_native_photo_viewer__["a" /* PhotoViewer */])
                    _this.photoViewer.show(image, title);
            }
            else {
                console.log("Nothing");
            }
        });
    };
    PaymenPage.prototype.CompleteOrder = function (paymentid) {
        var _this = this;
        var loading = this.loading.create({
            content: "Please Wait..",
        });
        loading.present();
        this.salesprovider.Ordercomplete(this.saleorderrecordid).subscribe(function (Ordersuccess) {
            _this.productsProvider.productList = [];
            console.log("====>Ordersuccess", Ordersuccess);
            loading.dismiss();
            if (Ordersuccess.status == "0") {
                if (_this.payment.paymenttype == "online") {
                    var createdAlert = _this.alertctrl.create({
                        title: "Order Placed Successfully, Your Payment Reference no is " + paymentid,
                        buttons: [{
                                text: 'OK',
                                handler: function (data) {
                                    console.log('Ok clicked');
                                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__home_home__["a" /* HomePage */]);
                                }
                            }], enableBackdropDismiss: false
                    });
                    createdAlert.present();
                }
                else {
                    var createdAlert = _this.alertctrl.create({
                        title: "Order Placed Successfully",
                        buttons: [{
                                text: 'OK',
                                handler: function (data) {
                                    console.log('Ok clicked');
                                    _this.utilityprovider.sendMessages(_this.userprovider.userName, "Dear+Customer%2COrder+No.+" + _this.navParams.get("orderno") + "+has+been+placed+successfully.+It+will+be+processed+in+48hrs+and+you+will+get+delivery+notification.%0D%0AIf+required+our+customer+support+team+will+get+in+touch+with+you.")
                                        .subscribe(function (userData) {
                                        var USER = userData;
                                    }, function (err) {
                                    }, function () {
                                    });
                                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__home_home__["a" /* HomePage */]);
                                }
                            }], enableBackdropDismiss: false
                    });
                    createdAlert.present();
                }
            }
            else {
                var createdAlert = _this.alertctrl.create({
                    title: Ordersuccess.message.text,
                    buttons: [{
                            text: 'OK',
                            handler: function (data) {
                                console.log('Ok clicked');
                            }
                        }], enableBackdropDismiss: false
                });
                createdAlert.present();
            }
        }, function (Ordererr) {
            //console.error(err);
            loading.dismiss();
            alert('Error: ' + JSON.stringify(Ordererr));
        });
    };
    PaymenPage.prototype.crateinvoice = function () {
        var productsTable = '<div style="margin-top:100px"><table width="100%" border=1>';
        productsTable += '<tr>';
        productsTable += '<th>No</th>';
        productsTable += '<th>Item</th>';
        productsTable += '<th>Batch No</th>';
        productsTable += '<th>Qty</th>';
        productsTable += '<th>Unit Price</th>';
        productsTable += '<th>Total</th>';
        productsTable += '</tr>';
        console.log("len" + this.prds.length);
        for (var i = 0; i < this.prds.length; i++) {
            productsTable += '<tr>';
            productsTable += '<td>' + (i + 1) + '</td>';
            productsTable += '<td>' + this.prds[i].product$_identifier + '</td>';
            productsTable += '<td>' + this.prds[i].attributeSetValue$_identifier.split("_")[0] + '</td>';
            productsTable += '<td>' + this.prds[i].orderedQuantity + '</td>';
            productsTable += '<td>' + this.prds[i].unitPrice + '</td>';
            productsTable += '<td>' + this.prds[i].lineNetAmount + '</td>';
        }
        productsTable += '</tr>';
        productsTable += '<tr>';
        productsTable += '<td colspan="6">Total Order Amount:' + this.carttotal + '</td>';
        productsTable += '</tr>';
        productsTable += "</table></div>";
        var customerdetails = '<div><div style="float: left;margin-top:30px;">';
        customerdetails += '<p>Customer Name :' + this.customer.name + ',<br>Customer Mobile :' + this.customer.mobile + ',<br>CustomerAddress : ' + this.customer.address1 + ',<br>' + this.customer.address2 + ',<br>' + this.customer.city + ',<br>' + this.customer.state + ',<br>' + this.customer.pincode;
        customerdetails += '</p></div>';
        customerdetails += '<div style="float: right;margin-top:50px;">';
        customerdetails += '<p>Invoice No :' + this.customer.name + ',<br>Invoice Date :' + new Date().getDate() + "/" + new Date().getMonth() + 1 + "/" + new Date().getFullYear();
        customerdetails += '</p></div></div>';
        var retailerdetails = '<div style="float: left;margin-top:10px;">';
        retailerdetails += '<p>Retailer Name :' + this.customer.retanme + '</p><br><p> Retailer Address : ' + this.customer.retaddress + '<br>GSTIN : ' + this.customer.gstno;
        retailerdetails += '</p></div></div><hr>';
        document.addEventListener('deviceready', function () {
            cordova.plugins.pdf.htmlToPDF({
                data: '<html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <style> img {max-width: 100%;  height: auto; } </style></head><body><div><h1><center><u>Sales Invoice</u></center></h1></div><div><div><img src="https://lh3.googleusercontent.com/miD1wJdxkEZ_M95yABqQB6ol3weYXBFVPWyTZ3ARW2FvH7fFpUKa17B5B2oVARa7hGGS=w300" width="150" height="150"></div>' + retailerdetails + customerdetails + productsTable + '</body></html>',
                documentSize: "A4",
                landscape: "portrait",
                type: "share"
            }, function (sucess) { return console.log('sucess: ', sucess + productsTable); }, function (error) { return console.log('error:', error); });
        });
    };
    PaymenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/payment1/payment.html"*/'<ion-header>\n<ion-navbar  color="primary">\n\n    <ion-title >Payment page</ion-title>\n\n    <ion-buttons end>\n        <button ion-button clear id="refresh" (click)="refresh()">\n            <ion-icon style="font-size: 25px;" light name="refresh"></ion-icon>\n        </button>\n       \n    </ion-buttons>\n\n\n</ion-navbar>\n</ion-header>\n<ion-content >\n\n    <ion-grid [hidden]="true">\n        <ion-row>\n            <ion-col>      \n                <ion-label style="color: black;margin-left:5px;font-size:16px;margin-top:4px;">Prescription Image</ion-label>  \n            </ion-col>\n            <ion-col>     \n                <ion-icon [hidden]="lastImage !== null" color= "primary" style="float:right;margin-top: 0px;font-size:25px;" name="camera" (click)=\'takePicture()\'></ion-icon>\n                <img src="{{pathForImage(lastImage)}}" [hidden]="lastImage === null" height="50" width="50" style="float:right;" (click)=\'viewFullScreen(pathForImage(lastImage),"prescriptImage")\'/>\n            </ion-col>\n            <!-- <ion-col>     \n                <ion-icon [hidden]="lastImage !== null" color= "primary" style="float:left;margin-top: 0px;font-size:25px;" name="image" (click)=\'takeGallery()\'></ion-icon>\n                <img src="{{pathForImage(lastImage)}}" [hidden]="lastImage === null" height="50" width="50" style="float:right;" (click)=\'viewFullScreen(pathForImage(lastImage),"prescriptImage")\'/>\n            </ion-col> -->\n        </ion-row>\n    </ion-grid>\n\n      <ion-card >\n            <ion-list >\n\n                <ion-row>\n                   <ion-col width-50 >\n                       <ion-label item-left>Bill Total  :</ion-label>\n                   </ion-col>\n                 <ion-col width-50 >\n                     <ion-input text-right [(ngModel)]="carttotal"  readonly required></ion-input>\n                 </ion-col>\n              </ion-row>\n            \n            </ion-list>\n            </ion-card>\n\n            <ion-row style="margin-top:20px;">\n                    <ion-col width-50 center>\n                      <ion-card [style.background]="cashColor">\n                        <div (click)="cash()" align="center">\n                            \n                     <img src="assets/imgs/cash4.png" style="width : 100% ; height : 60%;" > \n                     <ion-label style="color: black">Cash On Delivery</ion-label>\n                           </div>\n                         </ion-card>\n                      </ion-col>\n                   <ion-col width-50 center>\n                     <ion-card [style.background]="onlineColor">\n                          <div (click)="card()" align="center">\n                     <img src="assets/imgs/card7.png" style="width : 100% ;height: 50%" >\n                     <ion-label style="color: black;margin-top: 25px">Online</ion-label>\n                          </div>\n                         </ion-card>\n                      </ion-col>\n             </ion-row>\n\n</ion-content>\n\n<ion-footer>\n    <button ion-button style="color:#488aff !important"  align="center" (click)="place()">\n            <h6 style="color:white;font-size:16px;margin-top:2px;text-transform: none;" align="center">Place Order and Pay\n                </h6>  \n    </button>\n</ion-footer>\n        \n    \n      \n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/payment1/payment.html"*/,
            selector: 'page-paymentspage',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_product__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_customer__["a" /* CustomerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Sales__["a" /* SalesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], PaymenPage);
    return PaymenPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__placed_placed__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPage = (function () {
    function PaymentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PaymentPage.prototype.placedPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__placed_placed__["a" /* PlacedPage */]);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/payment/payment.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n   <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Pay now</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content radio-group class="bg-light">\n    <ion-row text-center class="status">\n        <ion-col class="complate">\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>Sign in</span></ion-col>\n        <ion-col class="processing">\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>Shipping</span></ion-col>\n        <ion-col class="panding">\n            <ion-icon name="md-radio-button-off"></ion-icon><span>Payment</span></ion-col>\n    </ion-row>\n\n    <ion-card>\n        <p class="heading">PAYMENT METHOD</p>\n        <ion-card-content>\n            <ion-item>\n                <ion-label>Credit/Debit Card</ion-label>\n                <ion-radio checked="true" value="card"></ion-radio>\n            </ion-item>\n            <div class="form">\n                <ion-list>\n                    <ion-item>\n                        <ion-label>Card Type</ion-label>\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                            <ion-option selected value="visa">Visa Express</ion-option>\n                            <ion-option value="debit">Debit Card</ion-option>\n                            <ion-option value="master">Master Card</ion-option>\n                            <ion-option value="credit">Credit Card </ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Card Number</ion-label>\n                        <ion-input type="text" text-right value="1234-1234-1234-5678"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Name on Card</ion-label>\n                        <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n                    </ion-item>\n                    <ion-row>\n                        <ion-col col-8 class="">\n                            <div class="d-flex mr-5">\n                                <ion-item>\n                                    <ion-label>Expiry Date</ion-label>\n                                    <ion-input type="text" text-right value="11/20"></ion-input>\n                                </ion-item>\n                                <ion-icon name="md-calendar" class="text-light calendar-icon"></ion-icon>\n                            </div>\n                        </ion-col>\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-label>cvv</ion-label>\n                                <ion-input type="text" text-right value="244"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-item>\n                        <ion-label text-right>Save my card details</ion-label>\n                        <ion-toggle color="secondary" checked="true"></ion-toggle>\n                    </ion-item>\n                </ion-list>\n            </div>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-content>\n            <ion-item>\n                <ion-label>Cash on Delivery</ion-label>\n                <ion-radio value="cod"></ion-radio>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <ion-item for="bank">\n                <ion-label>Net Banking</ion-label>\n                <ion-radio value="net_banking" id="bank"></ion-radio>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n    <div class="spacebar"></div>\n    <div class="btn-padding btn-fisx-bottom">\n        <button ion-button full class="bg-thime btn-round green-shadow btn-text" (click)="placedPage()">PAY <img src="assets/imgs/rupee-white.png">4.20 $\n        </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/payment/payment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacedPage = (function () {
    function PlacedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PlacedPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PlacedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-placed ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/placed/placed.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n    <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Order Placed !</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="img-box">\n        <img src="assets/imgs/order-placed.png">\n    </div>\n    <h3 class="text-sky" text-center>Your order placed !!</h3>\n    <h4 class="" text-center>Your order has been placed successfully.<br>please visit <strong>My Order</strong> page to ckeck<br>the progress and more details</h4>\n    <div class="btn-padding btn-fisx-bottom ">\n        <button ion-button full class="bg-thime btn-round green-shadow btn-text" (click)="homePage()">CONTINUE SHOPPING</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/placed/placed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], PlacedPage);
    return PlacedPage;
}());

//# sourceMappingURL=placed.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_prec__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__prescription_prescription__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UploadPage = (function () {
    function UploadPage(navCtrl, viewCtrl, camera, file, productsProvider, alert) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.file = file;
        this.productsProvider = productsProvider;
        this.alert = alert;
        this.prescriptionImage = null;
        this.lastImage = null;
    }
    UploadPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UploadPage.prototype.fromGallery = function () {
        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    };
    UploadPage.prototype.fromCamera = function () {
        this.takePicture(this.camera.PictureSourceType.CAMERA);
    };
    UploadPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        console.log("***");
        var self = this;
        this.camera.getPicture({
            //destinationType: this.camera.DestinationType.DATA_URL,
            //destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            targetWidth: 1200,
            targetHeight: 1000,
            saveToPhotoAlbum: true,
        }).then(function (imagePath) {
            if (sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                var correctPath_1 = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                var currentName_1 = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                _this.copyFileToLocalDir(correctPath_1, currentName_1, _this.createFileName());
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                console.log("imagepath" + correctPath);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            console.log(err);
        });
    };
    UploadPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    UploadPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            var targetPath = _this.pathForImage(_this.lastImage);
            _this.prescriptionImage = _this.lastImage;
            _this.productsProvider.presimage = _this.lastImage;
            console.log("targetpath" + targetPath);
            //this.uploadImage();
        }, function (error) {
        });
    };
    UploadPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    UploadPage.prototype.order = function () {
        var _this = this;
        if (this.prescriptionImage == null || this.prescriptionImage == "") {
            alert("Please Select Prescription Image");
        }
        else {
            var alertBox = this.alert.create({
                title: 'Do you know Medicines in Prescription???',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function (data) {
                            console.log('Cancel clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__prescription_prescription__["a" /* PrescriptionPage */], { "image": _this.prescriptionImage });
                        }
                    },
                    {
                        text: 'No',
                        handler: function (data) {
                            console.log('Saved clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_prec__["a" /* PrecPage */], { "image": _this.prescriptionImage });
                        }
                    }
                ]
            });
            alertBox.present();
        }
    };
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/upload/upload.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n    </button>\n        <ion-title>Upload Prescription</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-card>\n        <!-- <img src="assets/imgs/uplod-img.png" /> -->\n        <!-- <ion-icon name="md-close" class="close-icon" style="color:#488aff" (click)="dismiss()"></ion-icon> -->\n        <ion-card-content>\n            <ion-card-title text-center>\n                Share Prescription Photo\n            </ion-card-title>\n            <ion-row class="d-flex">\n                <ion-col col-6>\n                    <button ion-button full class="bg-thime btn-round btn-text btn-shadow" (click)="fromCamera()">Camera</button>\n                </ion-col>\n                <ion-col col-6>\n                    <button ion-button block outline class="btn-round btn-text btn-shadow" (click)="fromGallery()">Gallery</button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n        <ion-card style="background-color: #F7F7F7;" >\n    \n                <div  padding>\n                    <!-- <img src="../../assets/imgs/secure.png" style="width : 50% ; height : 50%"> -->\n                  <p align="center">Your attached prescription will be secure and private.Only our Pharmacist will review it.</p>\n                  <!-- <img [hidden]="lastImage!==null" src="{{pathForImage(lastImage)}}" width="50" height="200"/>\n                  <img [hidden]="lastImage===null" src="../../assets/imgs/secure.png" width="50" height="200"/> -->\n                  <img [hidden]="lastImage !== null" src="assets/imgs/secure.png" width="50" height="300" />\n                  <img src="{{pathForImage(lastImage)}}" [hidden]="lastImage === null" width="50" height="200"  (click)=\'viewFullScreen(pathForImage(lastImage),"prescriptImage")\'/>\n\n                </div>\n              </ion-card>\n              <ion-card>\n                <!-- <ion-card-header>\n                    Why upload a prescription?\n                  </ion-card-header> -->\n                \n                  \n                  <ion-card-content>\n                   <!-- <p> <ion-icon name="phone-portrait" style="padding-right:10px"></ion-icon>  Never lose the digital copy of your prescription.It will be with you whenver you go.</p>\n                   <p><ion-icon ios="ios-document" md="md-document" style="padding-right:10px"></ion-icon>Is your prescription hard to understand?Medicine Shoppee pharmacists will help you in placing your order.</p>\n                   <p><ion-icon ios="ios-lock" md="md-lock" style="padding-right:10px"></ion-icon>Details from your prescription are not shared with any third party.</p>\n                   <p><ion-icon ios="ios-albums" md="md-albums" style="padding-right:10px"></ion-icon>Government regulations require a prescription for ordering some medicines.</p> -->\n                   <ion-item>\n                    <ion-label>Why upload a prescription?</ion-label>\n                    <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                        <ion-option >Is your prescription hard to understand?Medicine Shoppee pharmacists will help you in placing your order.<br><br></ion-option>\n                        <ion-option >Never lose the digital copy of your prescription.It will be with you whenver you go.</ion-option>\n                        <ion-option >Details from your prescription are not shared with any third party.</ion-option>\n                        <ion-option >Government regulations require a prescription for ordering some medicines.</ion-option>\n                    </ion-select>\n                </ion-item>\n                  </ion-card-content>\n                  \n                </ion-card>\n                <!-- <ion-card>\n                  <ion-card-header>\n                    Valid Prescription Guide\n                  </ion-card-header>\n                  <ion-card-content >\n                      <img src="../../assets/imgs/prec.png" width="50" height="400" /><br>\n                      <p>. Include details of doctor and patient + clinic visit details.</p>\n                      <p>. Medicine will be dispensed as per prescription.</p>\n                  </ion-card-content>\n                </ion-card> -->\n             \n                  <div align="center"  padding>\n                      \n                      <!-- <button ion-button round block color="primary" style="margin-top:30px;margin-right:25px;margin-left: 20px" [hidden]="hidden" (click)="uploadImage()"> \n                          <h6 style="color:white;font-size:16px;margin-top:15px;margin-right:10px;text-transform: none;margin-bottom: 25px">CONTINUE <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></h6>  \n                      </button>  -->\n                      <button ion-button full  class="bg-thime btn-round btn-text" (click)="order()">Submit</button>\n\n                      <!-- <button ion-button outline (click)="order()" style="color:#488aff">Submit <span style="padding-left:10px">  <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></span></button>&nbsp; -->\n                  </div>\n    </ion-card>\n    \n    \n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/upload/upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__providers_product__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrecPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_customers__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_customer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_Sales__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_photo_viewer__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PrecPage = (function () {
    function PrecPage(navCtrl, navParams, utilityprovider, userProvider, salesprovider, productsProvider, alert1, config, navparams, toast, 
        // private alert1 : AlertController,
        // private navParams : NavParams,
        customerprovider, loading, transfer, file, photoViewer, alertctrl) {
        // If we navigated to this page, we will have an item available as a nav param
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utilityprovider = utilityprovider;
        this.userProvider = userProvider;
        this.salesprovider = salesprovider;
        this.productsProvider = productsProvider;
        this.alert1 = alert1;
        this.config = config;
        this.navparams = navparams;
        this.toast = toast;
        this.customerprovider = customerprovider;
        this.loading = loading;
        this.transfer = transfer;
        this.file = file;
        this.photoViewer = photoViewer;
        this.alertctrl = alertctrl;
        this.address = null;
        this.products = [];
        this.lastImage = null;
        this.message = "";
        this.promo = true;
        this.customerforsalesorder = {};
        this.discount = null;
        this.carttotalamount = 0.00;
        this.carttotalamountwithdiscount = 0.00;
        this.customerforsalesorder.bpid = null;
        this.customerforsalesorder.bplocationid = null;
        this.customerforsalesorder.warehouse = null;
        this.address = null;
    }
    PrecPage.prototype.Selectcustomer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_customers__["a" /* Customers */]);
    };
    PrecPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.utilityprovider.getUserlocation().subscribe(function (d) {
            console.log("====>orde", d);
            _this.customerforsalesorder.warehouse = d[0].id;
        }, function (err) {
            var l = err.stackTrace.length;
            //console.error(err);
            alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
        });
        //this.utilityprovider.sendNotification(this.userprovider.fcmid);
    };
    PrecPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.customerprovider.customerName != null) {
            this.address = this.customerprovider.customerName.locationAddress$_identifier;
            this.customerforsalesorder.bplocationid = this.customerprovider.customerName.id;
        }
        else {
            this.utilityprovider.getBpLocation().subscribe(function (d) {
                console.log("====>orde", d);
                _this.address = d[0].locationAddress$_identifier;
                _this.customerforsalesorder.bplocationid = d[0].id;
            }, function (err) {
                var l = err.stackTrace.length;
                //console.error(err);
                alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
            }, function () { });
        }
        this.products = this.productsProvider.productList;
        console.log("productslenght" + this.products.length);
        // this.cartTotal();
    };
    PrecPage.prototype.createDraftOrder = function () {
        var _this = this;
        this.salesprovider.createDraftOrder(this.customerforsalesorder).subscribe(function (order) {
            //     console.log("succes in Order creation"+order);
            //     this.salesprovider.createOrderLinesInOrder(this.customerforsalesorder,order[0].id,this.discount).subscribe(
            //       orderline => {
            //         console.log("succes in Orderlines creation"+orderline);
            var alertBox = _this.alert1.create({
                title: 'Order Created Successfully with Document No :' + order[0].documentNo,
                cssClass: 'alertDanger',
                buttons: [{
                        text: 'OK',
                        handler: function (data) {
                            console.log('Ok clicked');
                            _this.utilityprovider.sendMessages(_this.userProvider.userName, "Dear+Customer%2COrder+No.+" + order[0].documentNo + "+has+been+placed+successfully.+It+will+be+processed+in+48hrs+and+you+will+get+delivery+notification.%0D%0AIf+required+our+customer+support+team+will+get+in+touch+with+you.")
                                .subscribe(function (userData) {
                                var USER = userData;
                            }, function (err) {
                            }, function () {
                            });
                            _this.uploadImage(order[0].id);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]);
                            // this.navCtrl.push(PaymenPage,{"saleorderrecordid":order[0].id,"carttotal":this.carttotalamount,"salesorderbpid":this.customerforsalesorder.bpid,"orderno":order[0].documentNo});
                        }
                    }], enableBackdropDismiss: false
            });
            alertBox.present();
            // //   },
            // //   orderlineerror => {
            // //     console.log("error in Orderlines creation"+orderlineerror);
            // //   }
            // );
        }, function (ordererror) {
            console.log("error in order creation" + ordererror);
        });
    };
    PrecPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    PrecPage.prototype.uploadImage = function (orderid) {
        var _this = this;
        // Destination URL
        //var url = "http://94.130.127.19:8080/drainvac/CRM_UploadFile?l=muni1&p=123";
        var url = this.userProvider.authenticateURL(this.config.apipoint + "UploadFile?");
        // File for Upload
        // var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.navparams.get("image");
        var targetPath = this.pathForImage(filename);
        console.log("targetpath" + filename + "gg--" + targetPath);
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'recordid': orderid,
                "tableid": "259",
                "clientid": this.userProvider.client,
                "orgid": this.userProvider.organization }
        };
        var fileTransfer = this.transfer.create();
        var loading = this.loading.create({
            content: 'Uploading...',
        });
        loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            loading.dismissAll();
            var toast = _this.toast.create({
                message: 'Image Uploaded Successfully',
                duration: 3000,
                position: 'bottom',
                cssClass: "toast"
            });
            toast.present();
            console.log("image options" + options.params);
        }, function (err) {
            loading.dismissAll();
            var toast = _this.toast.create({
                message: 'Error while uploading file.',
                duration: 3000,
                position: 'bottom',
                cssClass: "toast"
            });
            toast.present();
        });
    };
    PrecPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prec',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/home/prec.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n    <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n    </button>\n        <ion-title>Confirm order</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" >\n    <div class="address-section">\n        <!-- <ion-row text-center class="status">\n            <ion-col class="complate">\n                <ion-icon name="ios-checkmark-circle"></ion-icon><span>Sign in</span></ion-col>\n            <ion-col class="processing">\n                <ion-icon name="md-radio-button-off"></ion-icon><span>Shipping</span></ion-col>\n            <ion-col class="panding">\n                <ion-icon name="ion-record"></ion-icon><span>Payment</span></ion-col>\n        </ion-row> -->\n        <ion-card>\n            <ion-card-header>\n                <p >\n                    YOUR DELIVERY ADDRESS<span class="text-sky" (click)="Selectcustomer()" style="margin-left:15%;">Change<ion-icon name="ios-arrow-forward" class="icon"></ion-icon></span></p>\n            </ion-card-header>\n            <ion-card-content>\n                <div class="addres-detail">\n                    <h3>\n                        <ion-icon name="ios-pin-outline" class="icon-position"></ion-icon>{{userProvider.profilename}}\n                    </h3>\n                    <p>{{address}}</p>\n                    <p>{{userProvider.userName}}</p>\n                </div>\n            </ion-card-content>\n        </ion-card>\n        <!-- <button >submit</button> -->\n        <div padding>\n        <button ion-button full class="bg-thime btn-round btn-text" (click)="createDraftOrder()" align="center" padding><span style="margin-left:5%;margin-right:5%">Submit</span></button>\n    </div>\n    </div>\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/home/prec.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_Sales__["a" /* SalesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_product__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_customer__["a" /* CustomerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PrecPage);
    return PrecPage;
}());

//# sourceMappingURL=prec.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__short_short__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_filter__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addtocartpopup_addcart__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CategoryPage } from '../category/category';



var ProductsPage1 = (function () {
    // category : string;
    // category1:string;
    function ProductsPage1(navCtrl, modalCtrl, navpar, productsProvider, loading, menuCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navpar = navpar;
        this.productsProvider = productsProvider;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
        this.viewCtrl = viewCtrl;
        this.medizoneitem = [];
        this.medizoneitem1 = [];
        this.medizoneitemList = [];
        this.start = 0;
        this.end = 10;
        //   this.category = navpar.get("category");
        this.menuCtrl.enable(true);
    }
    ProductsPage1.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    ProductsPage1.prototype.ionViewWillEnter = function () {
        // this.menuCtrl.enable (true, 'myMenu');
        this.medizoneitem = [];
        this.start = 0;
        this.end = 20;
        this.loadProducts();
    };
    ProductsPage1.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProductsPage1.prototype.itemdetail = function (itemdetail) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__["a" /* ItemdetailPage */], { "details": itemdetail });
    };
    ProductsPage1.prototype.addcartpopup = function (itemdetail) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__addtocartpopup_addcart__["a" /* AddCartPage */], { "details": itemdetail });
        modal.present();
    };
    ProductsPage1.prototype.loadProducts = function () {
        var _this = this;
        var loading = this.loading.create({
            content: "Please Wait..",
        });
        this.productsProvider.getProductwithMasterimages(this.start, this.end).subscribe(function (productsResponse) {
            loading.dismiss();
            console.log(productsResponse);
            var j = 0;
            for (var i = 0; i < productsResponse.length; i++) {
                _this.medizoneitem[j] = productsResponse[i];
                console.log(_this.medizoneitem[j]);
                j++;
            }
            _this.medizoneitemList = _this.medizoneitem;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Success");
        });
    };
    ProductsPage1.prototype.shortPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__short_short__["a" /* ShortPage */]);
        modal.present();
    };
    ProductsPage1.prototype.filterPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    ProductsPage1.prototype.searchPage = function () {
    };
    ProductsPage1.prototype.cartPage = function () {
        //let modal = this.modalCtrl.create(CartPage);
        if (this.productsProvider.productList.length == 0 || this.productsProvider.productList == null)
            alert("Please Select atleast one product to go to Cart");
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        //modal.present();
    };
    ProductsPage1.prototype.itemdetailPage = function () {
    };
    ProductsPage1.prototype.intilaizeRecords = function () {
        var self = this;
        self.medizoneitem = self.medizoneitemList;
    };
    ProductsPage1.prototype.getRecords = function (actvty) {
        console.log("Search Value");
        console.log(actvty.target.value);
        this.intilaizeRecords();
        var val = actvty.target.value;
        this.searchValue = val;
        if (val == '') {
            console.log("Empty");
            this.medizoneitem = this.medizoneitemList;
        }
        else if (val.length >= 4) {
            this.search();
        }
    };
    ProductsPage1.prototype.loadMore = function (event) {
        var _this = this;
        this.event = event;
        console.log("Evemt === ", this.event);
        var self = this;
        this.start = this.end;
        this.end = this.end + 10;
        this.event = event;
        this.productsProvider.getProductwithMasterimages(this.start, this.end).subscribe(function (productsResponse) {
            if (productsResponse.length == 0) {
                _this.stop = true;
            }
            else {
                var j = _this.medizoneitem.length;
                console.log(productsResponse);
                for (var i = 0; i < productsResponse.length; i++) {
                    _this.medizoneitem[j] = productsResponse[i];
                    j++;
                }
            }
            _this.medizoneitemList = _this.medizoneitem;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Success");
        });
        if (this.stop) {
            console.log("IT is stopped");
            //event.enable(false);
        }
        else {
            console.log("IT is not stopped");
        }
        setTimeout(function () {
            event.complete();
            console.log('Async operation has ended');
        }, 500);
    };
    ProductsPage1.prototype.search = function () {
        var _this = this;
        console.log("Value in search", this.searchValue);
        console.log("Charecter in search", this.searchValue.charAt(0));
        var val = this.searchValue;
        var charecter = this.searchValue.charAt(0);
        console.log("Charecter", charecter);
        var upper = charecter.toUpperCase();
        var lower = charecter.toLowerCase();
        console.log("LOWER", lower);
        console.log("Upper", upper);
        var s = this.searchValue;
        if (lower == charecter) {
            s = s.replace(s.charAt(0), upper);
        }
        console.log("SSSSSS", s);
        var Capital = this.searchValue.toUpperCase();
        var Small = this.searchValue.toLowerCase();
        console.log("Capital", Capital);
        console.log("Small", Small);
        if (val == '') {
            console.log("Empty");
            this.medizoneitem = this.medizoneitemList;
        }
        else {
            var loading_1 = this.loading.create({
                content: "Please Wait..",
            });
            loading_1.present();
            this.productsProvider.getProductNameForMasterSearch(s).subscribe(function (data) {
                console.log("IN SEARCH");
                console.log(data);
                _this.medizoneitem = data;
                loading_1.dismiss();
                _this.productsProvider.getProductNameForMasterSearch(Small).subscribe(function (data) {
                    console.log("IN SEARCH Small Data", data);
                    _this.medizoneitem1 = data;
                    console.log(_this.medizoneitem1.length);
                    console.log(_this.medizoneitem.length);
                    var j = _this.medizoneitem.length;
                    for (var i = 0; i < _this.medizoneitem1.length; i++) {
                        _this.medizoneitem[i + j] = _this.medizoneitem1[i];
                    }
                    _this.productsProvider.getProductNameForMasterSearch(Capital).subscribe(function (data) {
                        console.log("IN SEARCH Capital Data", data);
                        _this.medizoneitem1 = data;
                        console.log(_this.medizoneitem1.length);
                        console.log(_this.medizoneitem1.length);
                        var j = _this.medizoneitem.length;
                        for (var i = 0; i < _this.medizoneitem1.length; i++) {
                            _this.medizoneitem[i + j] = _this.medizoneitem1[i];
                        }
                    }, function (err) {
                        console.log("%^%^%^%^%");
                        //console.error(err 
                    }, function () { return console.log('getDraftOrders completed'); });
                }, function (err) {
                    console.log("%^%^%^%^%");
                    //console.error(err 
                }, function () { return console.log('getDraftOrders completed'); });
            }, function (err) {
                console.log("%^%^%^%^%");
                //console.error(err 
            }, function () { return console.log('getDraftOrders completed'); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ProductsPage1.prototype, "content", void 0);
    ProductsPage1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/home/product3.html"*/'<ion-header >\n    <ion-navbar color="primary">\n        <ion-title>Product Search\n            <div class="icon-box">\n                <!--            <img src="assets/imgs/search.png" (click)="searchPage()">-->\n                <img src="assets/imgs/ic_my_cart.png" (click)="cartPage()">\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-light">\n        <ion-searchbar placeholder="Searchby Productname" (ionInput)="getRecords($event)"></ion-searchbar>\n   \n    <ion-row>\n        <ion-col col-6 *ngFor="let medizoneitem1 of medizoneitem">\n            <ion-card style="width:100%;height: 100%;">\n                <ion-card-header (click)="itemdetail(medizoneitem1)">\n                    <div class="img-box">\n                        <img [src]="medizoneitem1.phPhoto">\n                    </div>\n                    <h5 [innerHTML]="medizoneitem1.name"></h5>\n                   \n                </ion-card-header>\n                <ion-card-content>\n                    \n                    <ion-row>\n                        <ion-col>\n                            <div style="display: flex;" class="price-box">\n                               \n                                <div class="price text-sky" align=\'left\'>\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">{{medizoneitem1.standardCost}}\n                                </div>\n                                \n                            </div>\n                        </ion-col>\n                    </ion-row>\n                   \n                </ion-card-content>\n                \n            </ion-card>\n        </ion-col>\n    </ion-row>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content\n          loadingSpinner="bubbles"\n          loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      <ion-fab right bottom >\n        <button ion-fab [color]="buttonColor" (click)="scrollToTop()"><ion-icon ios="ios-arrow-dropup-circle" md="md-arrow-dropup-circle"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/home/product3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_product__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ProductsPage1);
    return ProductsPage1;
}());

//# sourceMappingURL=product3.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonenumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createaccount_createaccount__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Forgot_Forgot__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utility__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhonenumberPage = (function () {
    function PhonenumberPage(navCtrl, userProvider, loading, menuCtrl, utilityProvider) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
        this.utilityProvider = utilityProvider;
        this.type = 'password';
        this.showPass = false;
        var self = this;
        this.submitted = false;
        this.wrongCredential = false;
        this.menuCtrl.enable(false, "authenticated");
    }
    PhonenumberPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    PhonenumberPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PhonenumberPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__Forgot_Forgot__["a" /* ForgotPage */]);
    };
    PhonenumberPage.prototype.passwordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PhonenumberPage.prototype.gohome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__createaccount_createaccount__["a" /* CreateaccountPage */]);
    };
    PhonenumberPage.prototype.SendMySMS = function () {
        var _this = this;
        var loading = this.loading.create({
            content: "Authenticating...",
        });
        loading.present();
        this.userProvider.isSignedIn().subscribe(function (userData) {
            var USER = userData;
            var self = _this;
            _this.submitted = false;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            loading.dismiss();
        }, function (err) {
            _this.wrongCredential = true;
            loading.dismiss();
        }, function () {
        });
        //   this.utilityProvider.sendOTP(this.userProvider.userName,'123456').subscribe(
        //     userData        =>  {
        //         let USER = userData;
        //         var self = this;
        //         this.submitted          =   false;
        //         this.navCtrl.push(HomePage);
        //         loading.dismiss();
        //     },
        //     err             =>  {
        //         this.wrongCredential = true;
        //         loading.dismiss();
        //     },
        //     ()              =>  {
        //     }
        // );
    };
    PhonenumberPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    PhonenumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phonenumber ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/phonenumber/phonenumber.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>MEDICINE SHOPPEE\n            <!-- <span float-right (click)="homePage()">Skip</span> -->\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<!-- <ion-content padding>\n    <div class="form" padding-left padding-right>\n        <p text-center>Please provide your Mobile number<br> to Login/Sign up on Medicine Shoppee</p>\n        <ion-list>\n            <ion-item>\n                <ion-label>Phone Number</ion-label>\n                <ion-input type="text" text-right value="+91 9052404240"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button full class="bg-thime btn-round btn-text" (click)="passwordPage()">Continue</button>\n    </div>\n</ion-content> -->\n\n\n\n    \n    <ion-content padding>\n        <div class="form" padding-left padding-right>\n            <p text-center padding-bottom margin-bottom>Login your Account on MedicineShoppee</p>\n            <ion-list>\n                <ion-item>\n                    <ion-label>Phone Number</ion-label>\n                    <ion-input type="number" [(ngModel)]="userProvider.userName" text-right ></ion-input>\n                </ion-item>\n                <!-- <ion-item>\n                    <ion-label>Full Name</ion-label>\n                    <ion-input type="text" text-right value="Jhon Deo"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Email Address</ion-label>\n                    <ion-input type="text" text-right value="jhondeo8994@mail.com"></ion-input>\n                </ion-item> -->\n                <div class="d-flex">\n                    <ion-item>\n                        <ion-label>Password</ion-label>\n                        <ion-input type="{{type}}" text-right [(ngModel)]="userProvider.password" > </ion-input>\n                        <button *ngIf="!showPass" ion-button clear  type="button" style="font-size: 15px;margin-right:-1%;" item-right class="text-light eye-icon" (click)="showPassword()"> <ion-icon name="ios-eye-off-outline" class="text-light eye-icon" style="color:black !important"></ion-icon></button>\n                        <button *ngIf="showPass" ion-button clear  type="button" style="font-size: 15px;margin-right:-1%;" item-right class="text-light eye-icon"(click)="showPassword()"> <ion-icon name="ios-eye-outline" class="text-light eye-icon" style="color:black !important"></ion-icon></button>\n                        <!-- <ion-icon name="ios-eye-outline" class="text-light eye-icon" style="margin-left:10px"></ion-icon> -->\n                    </ion-item>\n                    \n                </div>\n                <div>\n                    <p style="color:#02ADF2;margin-left:5px" (click)="forgot()">Forgot Password?</p>\n                </div>\n                <ion-row [hidden]=\'!wrongCredential\'>\n                    <p style="color:red;" class=\'errorElement\'>\n                       The username or password you entered is incorrect.(or)Check Your Internet Connection.\n                    </p>\n              </ion-row> \n            </ion-list>\n            <button ion-button full class="bg-thime btn-round btn-text" (click)="SendMySMS()">Login</button>\n\n            <p text-center>\n                <small >\n                    New to Medicine Shoppee? <br> <h6 class="text-sky" (click)="gohome()">Signup Here</h6>\n                    <!-- <span class="text-sky" (click)="gohome()">\n                       \n                    </span> -->\n                </small>\n            </p>\n\n            <!-- <p text-center>\n                <small>\n                    By Registering ! agree to \n                    <span class="text-sky">\n                        Terms & conditon\n                    </span>\n                </small>\n            </p> -->\n        </div>\n    </ion-content>\n    '/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/phonenumber/phonenumber.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_utility__["a" /* UtilityProvider */]])
    ], PhonenumberPage);
    return PhonenumberPage;
}());

// import {Platform,Alert} from    'ionic-angular';
// //import { IonicApp, IonicModule } from 'ionic-angular';
// // import {NewPage} from '../new/new';
// import {UserProvider}           from    '../../providers/user';
// //import { AndroidPermissions } from '@ionic-native/android-permissions';
// // import {ForgotPage} from '../Forgot/Forgot';
// import {Config} from   '../../providers/config';
// //import { NewPage } from '../new/new';
// import {UtilityProvider}from    '../../providers/utility';
// // import { InAppBrowser } from '@ionic-native/in-app-browser';
// //import {HttpClientModule} from '@angular/common/http';
// import { AppVersion } from 'ionic-native';
// // import { ForgotPage } from './Forgot';
// declare var SMS:any;
// declare var cordova: any;
// declare var navigator: any;
// declare var Connection: any;
// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class PhonePage {
//   splash = true;
//   // secondPage = UploadprecPage;
//   //public people: Array<Object>;
// 	submitted                   :   boolean;
//     ob3URL                      :   string;
//     wrongCredential             :   boolean;
//     logData                     =   {};
//     userNameEmpty               :boolean;
//     appVersion : string         =   '';
// //     passwordType: string = 'password';
// //  passwordIcon: string = 'eye-off';
// public type = 'password';
//   public showPass = false;
//   constructor(public navCtrl: NavController, 
//   	  public navParams: NavParams,
//   	   private platform        :   Platform,
//         private config          :   Config,
//        private utility          :   UtilityProvider,
//        private userProvider    :   UserProvider,
//        // private iab : InAppBrowser,
//         private loading :LoadingController
//     ) {
//       let self =   this;
//       this.submitted          =   false;
//       this.wrongCredential    =   false;
//       this.ob3URL             =   config.ob3Server;
//           //platform.ready().then(() => {
//      platform.ready().then(() => {           
//           if (!this.platform.is('cordova')) {
//               self.appVersion =   "0.0";
//           } else {
//              //window.analytics.trackView("Login Page");
//                AppVersion.getVersionNumber().then((s) => {
//               this.appVersion = s;
// })
// }
//       })
//   }
//   // gohome(){
//   //   this.navCtrl.push(SignupPage);
//   // }
//   // forgot(){
//   //   this.navCtrl.push(ForgotPage);
//   // }
//   main(){
//     this.navCtrl.push(HomePage);
//   }
//   // takepic(){ 
//   //   const options: CameraOptions = {
//   //     quality: 100,
//   //     destinationType: this.camera.DestinationType.FILE_URI,
//   //     encodingType: this.camera.EncodingType.JPEG,
//   //     mediaType: this.camera.MediaType.PICTURE
//   //   }
//   //   this.camera.getPicture(options).then((imageData) => {
//   //    // imageData is either a base64 encoded string or a file URI
//   //    // If it's base64 (DATA_URL):
//   //    let base64Image = 'data:image/jpeg;base64,' + imageData;
//   //   }, (err) => {
//   //    // Handle error
//   //   });
//   // }
//   // sendSMS(){
//   //   var options:{
//   //     replaceLineBreaks :false;
//   //     android:{
//   //       intent:'INTENT'
//   //     }
//   //   }
//   //   this.sms.send('9052404240', 'Hello world!',options).then(()=>{
//   //     alert('sms sent');
//   //   }).catch((err)=>{
//   //     alert(JSON.stringify(err))
//   //   });
//   // }
// //   ionViewWillEnter()
// // {
// // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
// //   success => console.log('Permission granted'),
// // err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS)
// // );
// // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
// // }
// SendMySMS()
// {
//   // this.navCtrl.push(UploadprecPage);
//   let loading = this.loading.create({
//     content: "Please wait...",
//   });
//    loading.present();
// this.userProvider.isSignedIn().subscribe(
//     userData        =>  {
//         let USER = userData;
//         var self = this;
//         this.submitted          =   false;
//        this.utility.putfcmid().subscribe(
//             fcm        =>  {    
//                 loading.dismiss();
//                 // this.navCtrl.setRoot(NewPage);
//             },
//             err             =>  {
//                 loading.dismiss();
//             },
//             ()              =>  {
//             }
//         ); 
//     },
//     err             =>  {
//         this.wrongCredential = true;
//         loading.dismiss();
//     },
//     ()              =>  {
//     }
// );
// }
//   onUserNameChange() {
//   this.wrongCredential    =   false;
//   }
//   onPasswordChange() {
//   this.wrongCredential    =   false;
//   }
//   ionViewDidLoad() {
//     setTimeout(() => this.splash = false, 4000);
//   }
//   // ionViewDidLoad() {
//   //   console.log('ionViewDidLoad LoginPage');
//   // }
// //   hideShowPassword() {
// //     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
// //     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
// // }
// showPassword() {
//   this.showPass = !this.showPass;
//   if(this.showPass){
//     this.type = 'text';
//   } else {
//     this.type = 'password';
//   }
// }
// }
//# sourceMappingURL=phonenumber.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPage = (function () {
    // ImageArray :any=[];
    function ForgotPage(navCtrl, navparams) {
        //   this.ImageArray =[{'image':'assets/imgs/1.png'}]
        this.navCtrl = navCtrl;
        this.navparams = navparams;
    }
    ForgotPage.prototype.forgotmsg = function () {
        alert("Your Password has been changed successfully.");
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-Forgot',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/Forgot/Forgot.html"*/'<ion-header>\n    <ion-navbar>\n      \n      <ion-title align="center">Forgot Password Page</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n      <ion-list>\n            <ion-item>\n                    <ion-label floating>Enter Mobile Number</ion-label>\n                    <ion-input  type="number" id=\'userNameField\'></ion-input>\n            </ion-item>\n            <ion-item>\n                    <ion-label floating>Enter New Password</ion-label>\n                    <ion-input  type="text" id=\'userNameField\'></ion-input>\n            </ion-item>\n            <ion-item>\n                    <ion-label floating>Confirm Password</ion-label>\n                    <ion-input  type="text" id=\'userNameField\'></ion-input>\n            </ion-item><br><br>\n            <button ion-button full class="bg-thime btn-round btn-text" (click)="forgotmsg()">Submit</button>&nbsp;\n      </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/Forgot/Forgot.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=Forgot.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_1_product2__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryPage = (function () {
    function CategoryPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.products = "otc";
    }
    CategoryPage.prototype.productPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_1_product2__["a" /* ProductsPage */]);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/category/category.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>My Prescriptions\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<!-- <ion-content class="bg-light">\n    <div class="all-products">\n        <div class="tabs-contant">\n            <ion-segment [(ngModel)]="products">\n                <ion-segment-button value="otc">\n                    <img src="assets/imgs/c1.png" alt=""><br> Ayurveda\n                </ion-segment-button>\n                <ion-segment-button value="diebetes">\n                    <img src="assets/imgs/c2.png" alt=""><br> Diebetes\n                </ion-segment-button>\n                <ion-segment-button value="personal">\n                    <img src="assets/imgs/c3.png" alt=""><br> Personal Care\n                </ion-segment-button>\n                <ion-segment-button value="baby_mother">\n                    <img src="assets/imgs/c4.png" alt=""> <br> Fitness & Supplements\n                </ion-segment-button>\n                <ion-segment-button value="health">\n                    <img src="assets/imgs/c5.png" alt=""><br> Health Conditions\n                </ion-segment-button>\n                <ion-segment-button value="wellness">\n                    <img src="assets/imgs/c6.png" alt=""> <br>Homeopathy\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n        <div [ngSwitch]="products" class="all-items">\n            <ion-list *ngSwitchCase="\'otc\'">\n                <ion-item (click)="productPage()">\n                    <p class="">First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n\n\n            <ion-list *ngSwitchCase="\'diebetes\'">\n                <ion-item (click)="productPage()">\n                    <p class=""> Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'personal\'">\n                <ion-item (click)="productPage()">\n                    <p class="">First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'baby_mother\'">\n                <ion-item (click)="productPage()">\n                    <p class="">First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'health\'">\n                <ion-item (click)="productPage()">\n                    <p class="">First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'wellness\'">\n                <ion-item (click)="productPage()">\n                    <p class="">First Aid\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Health Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Mens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Womens Care\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Sexual Wellness\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n                <ion-item (click)="productPage()">\n                    <p>Other\n                        <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n                    </p>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content> -->\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/category/category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_accountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_customer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_customers__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var My_accountPage = (function () {
    function My_accountPage(navCtrl, modalCtrl, utilityprovider, alert, customerprovider, userprovider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.utilityprovider = utilityprovider;
        this.alert = alert;
        this.customerprovider = customerprovider;
        this.userprovider = userprovider;
        this.customer = {};
        this.state = [];
        this.address = [];
        this.account = "profile";
        this.customer.address1 = null;
        this.customer.address2 = null;
        this.customer.pincode = null;
        this.customer.state = null;
        this.customer.statename = null;
        this.customer.city = null;
    }
    My_accountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CustomerpagePage');
        this.utilityprovider.getRegions().subscribe(function (d) {
            console.log("====>orde", d);
            _this.state = d;
        }, function (err) {
            var l = err.stackTrace.length;
            //console.error(err);
            alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
        }, function () { });
        this.utilityprovider.getBpLocation().subscribe(function (d) {
            console.log("====>orde", d);
            _this.address = d[0];
        }, function (err) {
            var l = err.stackTrace.length;
            //console.error(err);
            alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
        }, function () { });
        //this.utilityprovider.sendNotification(this.userprovider.fcmid);
    };
    My_accountPage.prototype.refresh = function () {
        this.customer.address1 = null;
        this.customer.address2 = null;
        this.customer.pincode = null;
        this.customer.city = null;
    };
    My_accountPage.prototype.addAddress = function () {
        var _this = this;
        if (this.customer.state == null || this.customer.state == '') {
            alert("Enter State");
        }
        else if (this.customer.city == null || this.customer.city == '') {
            alert("Enter City");
        }
        else {
            if (this.customer.address1 == null || this.customer.address1 == '')
                this.customer.address1 == "***";
            if (this.customer.address2 == null || this.customer.address2 == '')
                this.customer.address2 == "***";
            if (this.customer.pincode == null || this.customer.pincode == '')
                this.customer.pincode == "***";
            var alertBox = this.alert.create({
                title: 'Customer Address Confirmation',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Save',
                        handler: function (data) {
                            console.log('Saved clicked');
                            _this.customerprovider.createCustomerAddress(_this.customer, _this.userprovider.bpartner).subscribe(function (customeraddressres) {
                                console.log("succes in customeraddress creation" + customeraddressres);
                                var alertBox = _this.alert.create({
                                    title: ' Customer Address Created Successfully',
                                    cssClass: 'alertDanger',
                                    buttons: [{
                                            text: 'OK',
                                            handler: function (data) {
                                                console.log('Ok clicked');
                                            }
                                        }], enableBackdropDismiss: false
                                });
                                alertBox.setCssClass('alertDanger');
                                alertBox.present();
                            }, function (customeraddresserror) {
                                console.log("error in customeraddress creation" + customeraddresserror);
                            });
                        }
                    }
                ]
            });
            alertBox.present();
        }
    };
    My_accountPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    My_accountPage.prototype.proaddr = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__address_customers__["a" /* Customers */]);
    };
    My_accountPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    My_accountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my_account ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/my_account/my_account.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n        <button ion-button menuToggle>\n     <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>My Acount\n            <div class="icon-box">\n                <!-- <img src="assets/imgs/search.png" (click)="searchPage()"> -->\n                <!-- <img src="assets/imgs/ic_my_cart.png" (click)="cartPage()"> -->\n            </div>\n        </ion-title>\n    </ion-navbar>\n    <ion-list padding-left>\n        <ion-item padding-left padding-right>\n            <ion-avatar item-start>\n                <img src="assets/imgs/user.png">\n            </ion-avatar>\n            <h2 class="">{{userprovider.profilename}}\n                <!-- <small class=""> Edit profile</small> -->\n            </h2>\n            <p class="text-white">{{userprovider.userName}}\n            </p>\n        </ion-item>\n    </ion-list>\n    <ion-toolbar no-border-top class="tab-bar">\n        <ion-segment [(ngModel)]="account">\n            <ion-segment-button value="profile">\n                Profile\n            </ion-segment-button>\n            <ion-segment-button value="address">\n                My Address\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div [ngSwitch]="account">\n        <div *ngSwitchCase="\'profile\'" class="profile-section">\n            <ion-list>\n                <ion-item>\n                    <ion-label floating>Name</ion-label>\n                    <ion-input type="text" value="{{userprovider.profilename}}" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Email</ion-label>\n                    <ion-input type="email" value="{{userprovider.email}}" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Phone Number</ion-label>\n                    <ion-input type="text" value="{{userprovider.userName}}"></ion-input>\n                </ion-item>\n\n                <!-- <ion-item>\n                    <ion-label floating>Gender</ion-label>\n                    <ion-input type="text" value="Mail"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>BIRTHDATE</ion-label>\n                    <ion-input type="text" value="23 Dec, 1990"></ion-input>\n                </ion-item> -->\n            </ion-list>\n        </div>\n\n        <!-- <div *ngSwitchCase="\'card\'" class="card-section bg-light">\n            <ion-card>\n                <ion-card-content>\n                    <div class="card-row">XXXX XXXX XXXX 5887<img src="assets/imgs/visa.png"></div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-card-content>\n                    <div class="card-row">XXXX XXXX XXXX 5887<img src="assets/imgs/master-card.png"></div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <div class="form" padding-left padding-right>\n                    <p padding-bottom margin-bottom>\n                        <ion-icon name="ios-add-circle-outline"></ion-icon>ADD NEW CARD <span>Save</span></p>\n                    <ion-list>\n                        <ion-item>\n                            <ion-label>Card Type</ion-label>\n                            <ion-input type="text" text-right value="Visa Express"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Card Number</ion-label>\n                            <ion-input type="text" text-right value="1234-1234-1234-1234"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Name on Card</ion-label>\n                            <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n                        </ion-item>\n                        <div class="date-cvc-row">\n                            <div class="date">\n                                <ion-item>\n                                    <ion-label>Expiry Date</ion-label>\n                                    <ion-input type="text" text-right value="10/23"></ion-input>\n                                </ion-item>\n                            </div>\n                            <div class="cvc">\n                                <ion-item>\n                                    <ion-label>CVV</ion-label>\n                                    <ion-input type="text" text-right value="234"></ion-input>\n                                </ion-item> -->\n                            <!-- </div>\n                        </div>\n                        <ion-item class="border-none">\n                            <ion-label text-right> Save my card details</ion-label>\n                            <ion-toggle color="secondary" checked="true"></ion-toggle>\n                        </ion-item>\n                    </ion-list>\n                </div>\n            </ion-card>\n        </div> -->\n\n        <div *ngSwitchCase="\'address\'" class="address-section bg-light">\n            <ion-card>\n                <ion-card-content>\n                    <div class="addres-detail">\n                        <h3>\n                            <ion-icon name="ios-pin-outline" class="icon-position"></ion-icon>{{userprovider.userName}} <span (click)="proaddr()">Change<ion-icon name="ios-arrow-forward"></ion-icon></span></h3>\n                            <p>{{address.locationAddress$_identifier}}</p>\n                            <p>{{userprovider.userName}}</p>\n                           \n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <!-- <ion-card>\n                <div class="form" padding-left padding-right>\n                    <p padding-bottom margin-bottom>\n                        <ion-icon name="ios-add-circle-outline"></ion-icon>ADD NEW ADDRESS <span (click)="addAddress()">Save</span></p>\n                        <ion-list margin>\n                            <ion-item >\n                                <ion-label floating style="color: #488aff"> Address Line1 </ion-label>\n                                <ion-input  [(ngModel)]="customer.address1" type="text" [disabled]="readonly" ></ion-input>\n                             </ion-item>\n                    \n                             <ion-item >\n                                <ion-label floating style="color: #488aff"> Address Line2 </ion-label>\n                                <ion-input  [(ngModel)]="customer.address2" type="text" [disabled]="readonly" ></ion-input>\n                             </ion-item>\n                    \n                             <ion-item>\n                                <ion-label floating style="color:#488aff"> City </ion-label>\n                                <ion-input  [(ngModel)]="customer.city" type="text"></ion-input>\n                            </ion-item>\n                \n                            <ion-item>\n                                <ion-label floating style="color: #488aff"> Pincode </ion-label>\n                                <ion-input  [(ngModel)]="customer.pincode" type="tel" maxlength="6" [disabled]="readonly" ></ion-input>\n                            </ion-item>\n                            \n                             <ion-item>\n                                <ion-label style="color: #488aff"> State </ion-label>\n                                 <ion-select [(ngModel)]="customer.state" required>\n                                       <ion-option item-right *ngFor="let item of state"  [value]="item" > {{item.name}} </ion-option>\n                                </ion-select>\n                             </ion-item>\n                    \n                             <div align="center">\n                                <button ion-button  color=\'primary\' style="margin-top:30px;color:#488aff" [hidden]="hidden" (click)="addAddress()"> \n                                    <h6 style="color:white;font-size:16px;margin-top:5px;margin-right:10px;text-transform: none">Save</h6>  \n                                </button> \n                            </div> \n                             \n                        </ion-list>\n                </div>\n            </ion-card> -->\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/my_account/my_account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_customer__["a" /* CustomerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user__["a" /* UserProvider */]])
    ], My_accountPage);
    return My_accountPage;
}());

//# sourceMappingURL=my_account.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Myorder_1Page = (function () {
    function Myorder_1Page(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Myorder_1Page.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    Myorder_1Page.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    Myorder_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myorder_1 ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/myorder_1/myorder_1.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n    </button>\n        <ion-title>My Order\n            <div class="icon-box">\n                <img src="assets/imgs/search.png" (click)="searchPage()">\n                <img src="assets/imgs/ic_my_cart.png" (click)="cartPage()">\n                <!--              <ion-badge>2</ion-badge>-->\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card class="border-bottom-none border" style="position: relative;">\n        <ion-card-header>\n            <p class="left-side">\n                <span class="text-light">Ordered ID</span> 2513254112\n                <br>\n                <span class="text-light">Placed on</span> 17-march-17\n            </p>\n            <p class="right-side text-sky">\n                Cancel Order\n            </p>\n        </ion-card-header>\n        <ion-card-content>\n            <h4>Johnson & Johnson Flexi AntiSeptic Band-Aid Patches 30\'s</h4>\n            <ion-row>\n                <ion-col col-5>\n                    <div class="img-box">\n                        <img src="assets/imgs/p8.png">\n                    </div>\n                </ion-col>\n                <ion-col col-7>\n                    <small><span class="text-light">Quantity:</span> 2</small>\n                    <p>\n                        <img src="assets/imgs/rupee-black.png"> 180\n                        <small class="text-light">via COD</small>\n                    </p>\n                    <small><span class="text-light">Tracking Status on</span> 15-March\'17</small>\n                    <button ion-button full class="bg-thime btn-round  btn-text">Reached Hub,US  <ion-icon name="ios-arrow-down-outline"></ion-icon></button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n    <div class="order-info border-top-none border">\n        <div class="order-container">\n            <div class="status active">\n                <p padding-left padding-right>Order<br>Placed</p>\n                <ion-icon name="md-radio-button-on"></ion-icon>\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n            </div>\n            <div class="status active">\n                <p>\n                    Dispatched<br>from Bangalore\n                </p>\n                <ion-icon name="md-radio-button-on"></ion-icon>\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n            </div>\n            <div class="status active">\n                <p>\n                    Reached Hub <br>New Delhi\n                </p>\n                <ion-icon name="md-radio-button-on"></ion-icon>\n                <p>12:05pm<br>12 May 17</p>\n            </div>\n            <div class="status">\n                <p>\n                    Out for<br>Delivery\n                </p>\n                <ion-icon name="md-radio-button-on"></ion-icon>\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n            </div>\n            <div class="status">\n                <p>\n                    Item<br>Delivery\n                </p>\n                <ion-icon name="md-radio-button-on"></ion-icon>\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n            </div>\n        </div>\n    </div>\n    <ion-card class="return_product">\n        <ion-card-header>\n            <p class="left-side">\n                <span class="text-light">Ordered ID</span> 2513254112\n                <br>\n                <span class="text-light">Placed on</span> 17-march-17\n            </p>\n            <p class="right-side text-sky">\n                Return Product\n            </p>\n        </ion-card-header>\n        <ion-card-content>\n            <h4>Dolonex Dt 20mg Tablet 10\'s Rheumatoid arthritis and osteoarthritis</h4>\n            <ion-row>\n                <ion-col col-5>\n                    <div class="img-box">\n                        <img src="assets/imgs/1.png">\n                    </div>\n                </ion-col>\n                <ion-col col-7>\n                    <small><span class="text-light">Quantity:</span> 1</small>\n                    <p>\n                        <img src="assets/imgs/rupee-black.png"> 87.23\n                        <small class="text-light">via Credit Card</small>\n                    </p>\n                    <small><span class="text-light">Delivered on </span> 7.Feb\'18</small>\n                    <button ion-button full class="bg-thime btn-round  btn-text  text-sky">Rate Now<ion-icon name="ios-arrow-forward"></ion-icon></button>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/myorder_1/myorder_1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], Myorder_1Page);
    return Myorder_1Page;
}());

//# sourceMappingURL=myorder_1.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelpPage = (function () {
    function HelpPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HelpPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    HelpPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/help/help.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n        <button ion-button menuToggle>\n     <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Help Center\n            <span float-right>               \n              <ion-icon name="ios-cart-outline" class="icon" (click)="cartPage()"></ion-icon>\n            </span>\n        </ion-title>\n    </ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)" (click)="searchPage()"></ion-searchbar>\n    <ion-list>\n        <ion-item *ngFor="let item of items">\n            {{ item }}\n        </ion-item>\n    </ion-list>\n</ion-header>\n<ion-content>\n    <ion-card>\n        <ion-card-content>\n            Our MedicineShoppee team is available 24/7 to give \n        </ion-card-content>\n    </ion-card>\n</ion-content>\n\n<!-- <ion-content class="bg-light">\n    <h6 padding-left>Top FAQ</h6>\n    <ion-card>\n        <ion-card-header>\n            Order tracking and Delivery\n            <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            Refund\n            <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            Cancellation of orders\n            <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            Seller Support\n            <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            Payments\n            <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon>\n        </ion-card-header>\n        <ion-card-content class="text-light">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        </ion-card-content>\n    </ion-card>\n</ion-content> -->\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/help/help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddresslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_customer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__address_address__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddresslistPage = (function () {
    function AddresslistPage(navCtrl, utilityprovider, alert, customerprovider, userprovider) {
        this.navCtrl = navCtrl;
        this.utilityprovider = utilityprovider;
        this.alert = alert;
        this.customerprovider = customerprovider;
        this.userprovider = userprovider;
        this.customer = {};
        this.address = [];
        this.customer.address1 = null;
    }
    AddresslistPage.prototype.someAction = function () {
        this.buttonColor = "#488aff";
    };
    AddresslistPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.utilityprovider.getBpLocation().subscribe(function (d) {
            console.log("====>orde", d);
            _this.address = d;
        }, function (err) {
            var l = err.stackTrace.length;
            //console.error(err);
            alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
        }, function () { });
        //this.utilityprovider.sendNotification(this.userprovider.fcmid);
    };
    AddresslistPage.prototype.gotoaddressscreen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__address_address__["a" /* AddressPage */]);
    };
    AddresslistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/address/list.html"*/'<ion-header>\n        <ion-navbar color="primary">\n            <button ion-button menuToggle clear>\n                <ion-icon style="font-size: 25px;" name="menu"></ion-icon>\n              </button>\n          <ion-title>Address List</ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content>\n          \n             <p style="margin-left:15px">Your List of addresses will be here.</p> \n        <ion-list margin>\n            \n            <ion-card *ngFor="let item of address;">\n                <ion-item text-wrap>\n                    <h3 style="padding:5dp;"> {{item.locationAddress$_identifier}}</h3>\n                </ion-item>\n            </ion-card>\n             \n        </ion-list>\n      \n        <ion-fab right bottom >\n            <button ion-fab [color]="buttonColor" (click)="gotoaddressscreen()"><ion-icon name="add"></ion-icon></button>\n        </ion-fab>\n\n      </ion-content>'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/address/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_customer__["a" /* CustomerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */]])
    ], AddresslistPage);
    return AddresslistPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Sales__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var listPage = (function () {
    function listPage(platform, nav, config, userProvider, salesprovider, loading) {
        this.platform = platform;
        this.nav = nav;
        this.config = config;
        this.userProvider = userProvider;
        this.salesprovider = salesprovider;
        this.loading = loading;
        this.orderList = [];
        this.orderlines = [];
        this.shownGroup = null;
        this.nav = nav;
        this.start = 0;
        this.end = 10;
        this.stop = false;
        // this.loadOrders();
        platform.ready().then(function () {
            //window.analytics.trackView("Listing Page");
        });
    }
    listPage.prototype.loadOrders = function () {
        this.start = 0;
        this.end = 10;
        this.stop = false;
        this.orders = [];
        var self = this;
        console.log("start", this.start);
        this.salesprovider.getmyOrders(self.start, self.end).subscribe(function (data) {
            self.orders = data;
            //console.log(this.orders);   
            for (var i in self.orders) {
                for (var j in self.orders) {
                    if (self.orders[i].documentNo > self.orders[j].documentNo) {
                        self.temp = self.orders[i];
                        self.orders[i] = self.orders[j];
                        self.orders[j] = self.temp;
                    }
                }
            }
        }, function (err) {
            var l = err.stackTrace.length;
            err.stackTrace[l] = "OrderProvider :: GetDraftOrders ::";
            err.stackTrace[l + 1] = "ListPage :: LoadOrders ::";
            //console.error(err 
        }, function () { return console.log('getDraftOrders completed'); });
    };
    listPage.prototype.ionViewDidEnter = function () {
        this.orders = [];
        var self = this;
        console.log("sstart", this.start);
        this.salesprovider.getmyOrders(this.start, this.end).subscribe(function (data) {
            self.orders = data;
            //console.log(this.orders);   
            for (var i in self.orders) {
                for (var j in self.orders) {
                    if (self.orders[i].documentNo < self.orders[j].documentNo) {
                        if (i < j) {
                            self.temp = self.orders[i];
                            self.orders[i] = self.orders[j];
                            self.orders[j] = self.temp;
                        }
                    }
                }
            }
        }, function (err) {
            var l = err.stackTrace.length;
            err.stackTrace[l] = "OrderProvider :: GetDraftOrders ::";
            err.stackTrace[l + 1] = "ListPage :: LoadOrders ::";
            //console.error(err 
        }, function () { return console.log('getDraftOrders completed'); });
    };
    listPage.prototype.orderSelected = function (order) {
        // window.analytics.trackEvent("OrderLogin", "Order is selected", "Label", 25);        
    };
    listPage.prototype.onPageLoaded = function () {
        //this.newModule('New');
    };
    listPage.prototype.loadMore = function (event) {
        this.event = event;
        console.log("*********))))((((((********** Load More");
        console.log(event);
        var self = this;
        this.start = this.end + 1;
        this.end = this.end + 10;
        console.log("sssstat", this.start);
        this.salesprovider.getmyOrders(this.start, this.end).subscribe(function (data) {
            if (data.length == 0) {
                console.log("Event Complete");
                self.stop = true;
                //event.complete();
            }
            console.log("llklklkllk");
            console.log("Length self.orders= ", self.orders.length);
            var l = self.orders.length;
            console.log(self.orders);
            console.log("Length data= ", data.length);
            console.log("llklklkllk");
            console.log(data);
            for (var jj = 0; jj < data.length; jj++) {
                self.orders[l + jj] = data[jj];
            }
            console.log("llklklkllk==============");
            console.log(self.orders);
            //console.log(this.orders);   
            for (var i in self.orders) {
                for (var j in self.orders) {
                    if (self.orders[i].documentNo < self.orders[j].documentNo) {
                        if (i < j) {
                            self.temp = self.orders[i];
                            self.orders[i] = self.orders[j];
                            self.orders[j] = self.temp;
                        }
                    }
                }
            }
        }, function (err) {
            var l = err.stackTrace.length;
            err.stackTrace[l] = "OrderProvider :: GetDraftOrders ::";
            err.stackTrace[l + 1] = "ListPage :: LoadOrders ::";
            //console.error(err 
        }, function () { return console.log('getDraftOrders completed'); });
        if (self.stop) {
            console.log("IT is stopped");
            event.enable(false);
        }
        else {
            console.log("IT is not stopped");
        }
        setTimeout(function () {
            event.complete();
            console.log('Async operation has ended');
        }, 500);
    };
    // http://stackoverflow.com/a/3177838
    listPage.prototype.timeSince = function (dateString) {
        var date = new Date(dateString);
        var newDate = new Date();
        var seconds = Math.floor((newDate - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    };
    listPage.prototype.toggleGroup = function (group) {
        var _this = this;
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
        this.salesprovider.getmyOrderlines(this.orders[group].id).subscribe(function (data) {
            _this.orderlines = data;
        }, function (err) {
        }, function () { return console.log('getDraftOrders completed'); });
    };
    ;
    listPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    listPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/My Orders/list.html"*/'<ion-header>\n<ion-navbar  color="primary">\n <button ion-button menuToggle clear>\n      <ion-icon style="font-size: 25px;" name="menu"></ion-icon>\n    </button>\n    <ion-title >My Orders</ion-title>\n\n    <ion-buttons end>\n        <button ion-button clear id="refresh" (click)="loadOrders()">\n            <ion-icon style="font-size: 25px;" light name="refresh"></ion-icon>\n        </button>\n    </ion-buttons>\n\n\n</ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list >\n            \n        <button dark ion-item detail-none *ngFor="let order of orders; let i=index"  (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n                <h6 class="customer">Name: {{order.businessPartner$_identifier}}</h6>\n                <h6 class="documentNo" style="padding: 8px 0px;">Order No: #{{order.documentNo}}</h6>\n                \n                 <div style="float:right;margin-top:-50px;" >\n                    <h6 >Amount: {{order.grandTotalAmount}}</h6>\n                    <h6  style="padding: 8px 0px;">Date: {{order.orderDate}}</h6>\n                </div>\n\n                <div class=\'row row-center\' style=\'color: #aaa; font-size:small;padding: 2px 0px;\'>\n                    {{timeSince(order.creationDate)}} ago\n                </div>\n\n                <ion-icon color="primary" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n\n                <ion-list *ngIf="isGroupShown(i)">\n                        <button color="primary" ion-item detail-none *ngFor="let orderline of orderlines; let i=index">\n                                <h6>{{i+1}}) {{orderline.product$_identifier}}</h6>\n                                 <div item-right >\n                                    <h6 >Qty:{{orderline.orderedQuantity}}</h6>\n                                </div>\n                        </button>\n                \n                </ion-list>\n                <i class="icon ion-chevron-right"></i>\n        </button>\n                 \n    </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n\n<!-- - Rs {{orderline.unitPrice}} -->'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/My Orders/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_Sales__["a" /* SalesProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */]])
    ], listPage);
    return listPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_market__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdationPage = (function () {
    function UpdationPage(platform, navController, market) {
        var _this = this;
        this.platform = platform;
        this.navController = navController;
        this.market = market;
        platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                //window.analytics.trackView("Updation Page");
            }
            ;
        });
    }
    UpdationPage.prototype.launch = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //window.localStorage.clear();
            //window.open('market://details?id=com.saksham.fortune', '_system');
            _this.market.open('com.saksham.medicineshoppee');
        });
    };
    UpdationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/phonenumber/updation.html"*/'<ion-header >\n    <ion-navbar color="primary">\n\n        <ion-title>Updation</ion-title>\n   \n    </ion-navbar>\n</ion-header>\n\n<ion-content  padding >\n    <ion-card padding>\n        <p>*A new Version of Medicine Shoppee is available in PlayStore.</p>\n        <p>*Kindly give your valuable rating and feedback in order to improve our App.</p>\n    </ion-card>\n     <button ion-button full class="bg-thime btn-round btn-text" (click)="launch()">Update App</button>\n     <!-- <button ion-button full class="bg-thime btn-round btn-text" (click)="SendMySMS()">Login</button> -->\n\n</ion-content>'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/phonenumber/updation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_market__["a" /* Market */]])
    ], UpdationPage);
    return UpdationPage;
}());

//# sourceMappingURL=updation.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificationPage = (function () {
    function VerificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VerificationPage.prototype.createaccountPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__["a" /* CreateaccountPage */]);
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/verification/verification.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n    <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Verification Code</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="form" padding-left padding-right>\n        <p text-center>Please enter Verification code <br>sent on +91 903 335 6708</p>\n        <ion-list>\n            <ion-item>\n                <ion-label>Verification code</ion-label>\n                <ion-input type="text" text-right value="______"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button full class="bg-thime btn-round btn-text" (click)="createaccountPage()">Verify</button>\n        <p text-center>\n            <span float-left class="text-sky">Resend</span>\n            <span float-right>1:32 min left</span>\n        </p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Sales__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Camera } from '@ionic-native/camera';
var ProductDetailsPage = (function () {
    function ProductDetailsPage(platform, nav, navParams, productsProvider, salesprovider, loading) {
        var _this = this;
        this.platform = platform;
        this.nav = nav;
        this.navParams = navParams;
        this.productsProvider = productsProvider;
        this.salesprovider = salesprovider;
        this.loading = loading;
        this.productselected = {};
        this.productdetails = {};
        this.productimage = {};
        this.batchitems = [];
        this.productselected = navParams.get("selectedProduct");
        platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                // window.analytics.trackView("Gate Exit Page");
            }
        });
    }
    ProductDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.productsProvider.getProductDetails(this.productselected.id).subscribe(function (productsResponse) {
            _this.productdetails = productsResponse[0];
            console.log(productsResponse);
            _this.productsProvider.getProductImage(_this.productdetails.image).subscribe(function (productimageResponse) {
                _this.productimage = "data:image/jpeg;base64," + productimageResponse[0].bindaryData;
                console.log(_this.productimage);
            }, function (err) {
                console.log(err);
            }, function () {
                console.log("Success");
            });
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Success");
        });
        this.salesprovider.getBatchnoforProduct(this.productselected.id).subscribe(function (batchno) {
            _this.batchitems = batchno;
            /* this.batch = "";
             for(var i=0;i< batchno.length;i++){
                 this.batch +=  batchno[i].attributeSetValue$_identifier + ",";
                 console.log(batchno[i].attributeSetValue$_identifier);
             }
             console.log(this.batch);
             this.batch = Array.from(new Set(this.batch.split(','))).toString(); */
        }, function (batchnoerr) {
        });
    };
    ProductDetailsPage.prototype.refresh = function () {
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/productspage/productdetails.html"*/'<ion-header>\n<ion-navbar  color="primary">\n\n    <ion-title >Product Details</ion-title>\n\n    <ion-buttons end>\n        <button ion-button clear id="refresh" (click)="refresh()">\n            <ion-icon style="font-size: 25px;" light name="refresh"></ion-icon>\n        </button>\n       \n    </ion-buttons>\n\n\n</ion-navbar>\n</ion-header>\n<ion-content >\n\n        <ion-card dark  ion-item detail-none color="primary" style="margin-top:30px">\n            \n                 <div  align="center">\n                    <h6 style="color:white;">{{productselected._identifier}}</h6>\n                 </div>\n        \n        </ion-card>   \n\n        <div align="center">\n           <img  height="150" width="150" [src]="productimage" >\n        </div>\n\n        <table width=\'100%\' border=1 style="text-align: center;margin-top: 10px;"> \n            <tr style="background-color:gray">\n                <th style="padding: 5px 0px;">Batch no </th>\n                <th style="padding: 5px 0px;">Expirydate </th>\n                <th style="padding: 5px 0px;">MRP </th>\n            </tr>\n                <tr *ngFor="let data of batchitems">\n                <td>{{data.attributeSetValue$_identifier.split("_")[0]}} </td>\n                <td>{{data.attributeSetValue$_identifier.split("_")[1]}} </td>\n                <td>Rs {{data.mRPPerUnitExTax}} </td>\n                </tr>\n        </table>\n\n       <!-- <div class="row header">\n            <div class="col">Batch no</div>\n            <div class="col">Expirydate</div>\n            <div class="col">MRP</div>\n          </div>\n          <ion-item *ngFor="let data of batchitems">\n          <div class="row">\n            <div class="col">{{data.attributeSetValue$_identifier.split("_")[0]}}</div>\n            <div class="col">{{data.attributeSetValue$_identifier.split("_")[1]}}</div>\n            <div class="col">Rs {{data.mRPPerUnitExTax}}</div>\n          </div>\n        </ion-item> -->\n\n        <ion-card style="margin-top:20px">\n            <div class="left-content">\n                <h6 style="color:black;">UOM:</h6>  \n            </div>   \n            <div class="right-content">\n                <h6 style="color:black;">{{productdetails.uOM$_identifier}}</h6>   \n            </div>      \n      </ion-card>\n\n      <ion-card style="margin-top:10px">\n            <div class="left-content">\n                <h6 style="color:black;">Product Code  :</h6>  \n            </div>   \n            <div class="right-content">\n                <h6 style="color:black;">{{productdetails.searchKey}}</h6>   \n            </div>      \n      </ion-card>\n\n      <ion-card style="margin-top:10px">\n            <div class="left-content">\n                <h6 style="color:black;">Product Category  :</h6>  \n            </div>   \n            <div class="right-content">\n                <h6 style="color:black;">{{productdetails.productCategory$_identifier}}</h6>   \n            </div>      \n      </ion-card>\n\n\n</ion-content>\n        \n    \n      \n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/productspage/productdetails.html"*/,
            selector: 'page-productdetailspage',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_product__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_Sales__["a" /* SalesProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=productdetails.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(270);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_phonenumber_phonenumber__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_password_password__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_verification_verification__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_createaccount_createaccount__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_category_category__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_itemdetail_itemdetail__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_shippining_shippining__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_payment_payment__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_placed_placed__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_wishlist_wishlist__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_myorder_1_myorder_1__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_help_help__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_product_1_product2__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_review_review__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_short_short__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_filter_filter__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_perscriptions_perscriptions__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_medicines_medicines__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_list_list__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_location_location__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_myorder_2_myorder_2__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_shirts_shirts__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_upload_upload__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_vegetable_vegetable__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_phonenumber_updation__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_Forgot_Forgot__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_productspage_productslist__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_productspage_productdetails__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_order_order__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_addtocartpopup_addcart__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_address_address__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_address_list__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_address_customers__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_payment1_payment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_My_Orders_list__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_header_color__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_home_prec__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_app_update__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_home_product3__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_prescription_prescription__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {HttpClientModule, HttpClientJsonpModule, HttpClient} from '@angular/common/http';















































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_product_1_product2__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_itemdetail_itemdetail__["a" /* ItemdetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_shippining_shippining__["a" /* ShippiningPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */],
                __WEBPACK_IMPORTED_MODULE_31__pages_shirts_shirts__["a" /* ShirtsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_placed_placed__["a" /* PlacedPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_vegetable_vegetable__["a" /* VegetablePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__["a" /* My_accountPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_short_short__["a" /* ShortPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_perscriptions_perscriptions__["a" /* PerscriptionsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_medicines_medicines__["a" /* MedicinesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_productspage_productdetails__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_productspage_productslist__["a" /* ProductslisttPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_addtocartpopup_addcart__["a" /* AddCartPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_address_list__["a" /* AddresslistPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_address_customers__["a" /* Customers */],
                __WEBPACK_IMPORTED_MODULE_45__pages_payment1_payment__["a" /* PaymenPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_My_Orders_list__["a" /* listPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_Forgot_Forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_phonenumber_updation__["a" /* UpdationPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_home_prec__["a" /* PrecPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_home_product3__["a" /* ProductsPage1 */],
                __WEBPACK_IMPORTED_MODULE_51__pages_prescription_prescription__["a" /* PrescriptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_product_1_product2__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_itemdetail_itemdetail__["a" /* ItemdetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_shippining_shippining__["a" /* ShippiningPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */],
                __WEBPACK_IMPORTED_MODULE_31__pages_shirts_shirts__["a" /* ShirtsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_placed_placed__["a" /* PlacedPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_vegetable_vegetable__["a" /* VegetablePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__["a" /* My_accountPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_short_short__["a" /* ShortPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_perscriptions_perscriptions__["a" /* PerscriptionsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_medicines_medicines__["a" /* MedicinesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_productspage_productdetails__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_productspage_productslist__["a" /* ProductslisttPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_addtocartpopup_addcart__["a" /* AddCartPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_address_list__["a" /* AddresslistPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_address_customers__["a" /* Customers */],
                __WEBPACK_IMPORTED_MODULE_45__pages_payment1_payment__["a" /* PaymenPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_My_Orders_list__["a" /* listPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_Forgot_Forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_phonenumber_updation__["a" /* UpdationPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_home_prec__["a" /* PrecPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_home_product3__["a" /* ProductsPage1 */],
                __WEBPACK_IMPORTED_MODULE_51__pages_prescription_prescription__["a" /* PrescriptionPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_header_color__["a" /* HeaderColor */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_app_update__["a" /* AppUpdate */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SalesProvider = (function () {
    function SalesProvider(utilityProvider, config, userProvider, prodProvider) {
        this.utilityProvider = utilityProvider;
        this.config = config;
        this.userProvider = userProvider;
        this.prodProvider = prodProvider;
    }
    ;
    SalesProvider.prototype.createDraftOrder = function (bp) {
        var quotData = {
            data: {}
        };
        quotData.data.entityName = "Order";
        quotData.data.active = true;
        quotData.data.salesTransaction = true;
        quotData.data.documentType = "CB6EEA256BBC41109911215C5A14D39B";
        quotData.data.transactionDocument = "CB6EEA256BBC41109911215C5A14D39B"; //transaction Document
        quotData.data.orderDate = new Date();
        quotData.data.scheduledDeliveryDate = new Date();
        quotData.data.accountingDate = new Date();
        quotData.data.currency = "304";
        quotData.data.businessPartner = this.userProvider.bpartner;
        quotData.data.partnerAddress = bp.bplocationid;
        quotData.data.invoiceAddress = bp.bplocationid;
        quotData.data.organization = this.userProvider.organization;
        quotData.data.warehouse = bp.warehouse;
        quotData.data.priceList = "ACAAE336CE52467D842FF50E89C84E69";
        quotData.data.paymentMethod = "505CCA3C05174D94BF5E70CE83A48230";
        quotData.data.invoiceTerms = "I";
        quotData.data.paymentTerms = "C03AED23DB8A4F74AF34255FCEA23FCF";
        console.log(quotData);
        return this.utilityProvider.postOB3Object("Order", quotData);
    };
    SalesProvider.prototype.createOrderLinesInOrder = function (bp, orderid, discount) {
        var endPoint = 'OrderLine';
        var orderData = {
            data: []
        };
        var count = 1;
        for (var i = 0; i < this.prodProvider.productList.length; i++) {
            //console.log(order);
            var dat = {};
            dat._entityName = "OrderLine";
            dat.active = true;
            dat.salesOrder = orderid;
            dat.orderDate = new Date();
            dat.lineNo = count * 10;
            count++;
            dat.currency = "304";
            dat.businessPartner = this.userProvider.bpartner;
            dat.partnerAddress = bp.bplocationid;
            if (discount == null || discount == '') {
                dat.discount = 0;
                dat.unitPrice = this.prodProvider.productList[i].price;
                dat.listPrice = this.prodProvider.productList[i].price;
                dat.grossUnitPrice = this.prodProvider.productList[i].price;
                dat.grossListPrice = this.prodProvider.productList[i].price;
            }
            else {
                dat.discount = parseInt(discount);
                dat.unitPrice = this.prodProvider.productList[i].price - ((this.prodProvider.productList[i].price * discount) / 100);
                dat.listPrice = this.prodProvider.productList[i].price - ((this.prodProvider.productList[i].price * discount) / 100);
                dat.grossUnitPrice = this.prodProvider.productList[i].price - ((this.prodProvider.productList[i].price * discount) / 100);
                dat.grossListPrice = this.prodProvider.productList[i].price - ((this.prodProvider.productList[i].price * discount) / 100);
            }
            dat.organization = this.userProvider.organization;
            dat.warehouse = bp.warehouse;
            dat.product = this.prodProvider.productList[i].productid;
            dat.orderedQuantity = parseInt(this.prodProvider.productList[i].qty);
            dat.uOM = this.prodProvider.productList[i].uOM;
            dat.tax = this.prodProvider.productList[i].tax;
            orderData.data.push(dat);
        }
        //console.log(orderData);
        return this.utilityProvider.postOB3Object(endPoint, orderData);
    };
    SalesProvider.prototype.getProductDetails = function (prodID) {
        var endPoint = 'Product';
        var queryParams = "&_selectedProperties=id,uOM,name,taxCategory&_where=id='" + prodID + "'";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    SalesProvider.prototype.getFinancialMgmtTaxRate = function (taxcateg) {
        var endPoint = 'FinancialMgmtTaxRate';
        var queryParams = "&_where=taxCategory='" + taxcateg + "'&_selectedProperties=id,taxCategory"; // and taxCategory='"+taxcateg+"'"
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    SalesProvider.prototype.getBatchnoforProduct = function (prodid) {
        var endPoint = 'AI_ProductPrice';
        var queryParams = "&_where=product='" + prodid + "'&_selectedProperties=product,attributeSetValue,mRPPerUnitExTax";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    SalesProvider.prototype.getmyOrders = function (start, end) {
        var endPoint = 'Order';
        var queryParams = "&_where=createdBy='" + this.userProvider.userid + "'&_selectedProperties=id,businessPartner,documentNo,orderDate,grandTotalAmount,creationDate&_startRow=" + start + "&_endRow=" + end; // and taxCategory='"+taxcateg+"'"
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    SalesProvider.prototype.getmyOrderlines = function (orderid) {
        var endPoint = 'OrderLine';
        var queryParams = "&_where=salesOrder='" + orderid + "'&_selectedProperties=id,product,orderedQuantity,unitPrice";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    SalesProvider.prototype.getOrderlines = function (orderid) {
        var endPoint = 'OrderLine';
        var queryParams = "&_where=salesOrder='" + orderid + "'";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    SalesProvider.prototype.getProductmrp = function (product) {
        var endPoint = 'PricingProductPrice';
        var queryParams = "&_where=product='" + product + "'";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    SalesProvider.prototype.CheckFirstorderornot = function () {
        var endPoint = 'Order';
        var queryParams = "&_where=businessPartner='" + this.userProvider.bpartner + "'%20and%20documentStatus=%27CO%27&_selectedProperties=id";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    SalesProvider.prototype.Ordercomplete = function (orderid) {
        var quotData = {
            data: {}
        };
        quotData.data.MinoutID = "";
        quotData.data.OrderID = orderid;
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.uploadfile.processGRNorOrder", quotData);
    };
    SalesProvider.prototype.downloadinvoice = function (orderid) {
        var quotData = {
            data: {}
        };
        quotData.data.cOrderId = orderid;
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.uploadfile.PrintSalesInvoice", quotData);
    };
    SalesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__product__["a" /* ProductsProvider */]])
    ], SalesProvider);
    return SalesProvider;
}());

//# sourceMappingURL=Sales.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_header_color__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_phonenumber_phonenumber__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_category_category__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wishlist_wishlist__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_account_my_account__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_myorder_1_myorder_1__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_address_list__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_indent__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_customer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_Sales__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_photo_viewer__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_My_Orders_list__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_app_update__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_market__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_phonenumber_updation__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_app_version__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_prescription_prescription__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// import {ProductsProvider} from '../pages/providers/product';



















var MyApp = (function () {
    function MyApp(platform, user, productsprovider, statusBar, headerColor, splashScreen, http, appUpdate, menuCtrl, conf, appversion) {
        this.platform = platform;
        this.user = user;
        this.productsprovider = productsprovider;
        this.statusBar = statusBar;
        this.headerColor = headerColor;
        this.splashScreen = splashScreen;
        this.http = http;
        this.appUpdate = appUpdate;
        this.menuCtrl = menuCtrl;
        this.conf = conf;
        this.appversion = appversion;
        this.initializeApp();
        //   const updateUrl = 'https://play.google.com/store/apps/details?id=com.saksham.medicineshoppee';
        //  this.appUpdate.checkAppUpdate(updateUrl).then(() => { console.log('Update available') });  
    }
    MyApp.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var updatedURL = _this.conf.apiBasePoint + "ADPreference?l=MobileApp&p=123456&_where=attribute=%27MobileVersion%27&_startRow=0&_endRow=10";
            var Version = "0.0";
            if (_this.platform.is('cordova')) {
                _this.appversion.getVersionNumber().then(function (version) {
                    console.log("vers" + version);
                    _this.http.get(updatedURL, {}, {})
                        .then(function (data) {
                        console.log(data.status);
                        console.log(data.data); // data received by server
                        console.log(data.headers);
                        var result = JSON.parse(data.data);
                        var uRespJson = result.response;
                        if (uRespJson.status === 0) {
                            var utilityData = uRespJson.data;
                            Version = utilityData[0].searchKey;
                            if (version == Version) {
                                _this.updated = true;
                            }
                            else {
                                _this.updated = false;
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_29__pages_phonenumber_updation__["a" /* UpdationPage */];
                            }
                        }
                        else {
                            var errO = uRespJson.error || uRespJson.errors;
                        }
                    })
                        .catch(function (error) {
                        console.log(error.status);
                        console.log(error.error); // error message as string
                        console.log(error.headers);
                        console.log("error" + error);
                    });
                });
            }
            if (_this.user.userid == null || _this.user.userid == '')
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */];
            else
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // this.statusBar.overlaysWebView(true);
            // this.statusBar.backgroundColorByHexString('#488aff');
            // this.headerColor.tint('#488aff');
            //     if(this.userProvider.userid == null || this.userProvider.userid == '')
            // this.rootPage = PhonenumberPage;
            // else
            // this.rootPage = MyApp ;
        });
    };
    MyApp.prototype.myorder_1Page = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */]);
    };
    MyApp.prototype.my_accountPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_my_account_my_account__["a" /* My_accountPage */]);
    };
    MyApp.prototype.categoryPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_category_category__["a" /* CategoryPage */]);
    };
    MyApp.prototype.homePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.addresspage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_address_list__["a" /* AddresslistPage */]);
    };
    MyApp.prototype.prescriptionPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_31__pages_prescription_prescription__["a" /* PrescriptionPage */]);
    };
    MyApp.prototype.wishlistPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyApp.prototype.cartPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.helpPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */]);
    };
    MyApp.prototype.phonenumberPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */]);
    };
    MyApp.prototype.myorderPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_26__pages_My_Orders_list__["a" /* listPage */]);
    };
    MyApp.prototype.signOut = function () {
        var self = this;
        // this.logData.logLevel = "info";
        // this.logData.logMessage = "HomePage :: signOut";
        //console.log('HomePage :: signOut');
        console.log("******************************");
        console.log(this.user.userData);
        console.log("*********************************");
        this.user.signOut();
        this.productsprovider.productList = [];
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */]);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/app/app.html"*/'<ion-menu [content]="content" id="authenticated" >\n    <ion-header>\n        <ion-toolbar>\n            <ion-list>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/user.png">\n                  </ion-avatar>  \n                    \n                    <h2>{{user.profilename}}\n                        <!-- <ion-icon name="ios-arrow-forward"></ion-icon> -->\n                    </h2>\n                    <h6>{{user.email}}</h6>\n                </ion-item>\n                <!-- <div class="menu-title" style="padding: 10px 0px;">\n                    <button ion-item menuClose>\n                    <img src="assets/imgs/ic_my_addresses.png" style="margin-right: 1rem;">\n                        <span><small>Your Location</small>\n                            {{address}}</span>\n                </button>\n                </div> -->\n            </ion-list>\n        </ion-toolbar>\n        <div class="menu-tabs" padding text-center>\n            <ion-row>\n                <ion-col col-4 menuClose (click)="myorderPage()">\n                    <img src="assets/imgs/ic_my_orders-2.png">\n                    <p>My Order</p>\n                </ion-col>\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n                    <img src="assets/imgs/ic_my_cards-2.png">\n                    <p>My Card</p>\n                </ion-col>\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n                    <img src="assets/imgs/ic_my_addresses-2.png">\n                    <p>My Addresses</p>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-header>\n\n    <ion-content>\n        <div class="menu-title">\n            <ion-list>\n                <button ion-item menuClose (click)="homePage()">\n                    <img src="assets/imgs/house-outline9.png">\n                        Home\n                </button>\n                <button ion-item menuClose (click)="categoryPage()">\n                    <img src="assets/imgs/prescription.png">\n                     My Prescriptions                \n                </button>\n                <!-- <button ion-item menuClose (click)="prescriptionPage()">\n                    <img src="assets/imgs/prescription.png">\n                     Prescription Medicines                \n                </button> -->\n                <button ion-item menuClose (click)="addresspage()">\n                        <img src="assets/imgs/address2.png">\n                         Manage Addresses                 \n                    </button>\n                <button ion-item menuClose (click)="wishlistPage()">\n                    <img src="assets/imgs/like3.png">\n                        My Wishlist\n                </button>\n                <button ion-item menuClose (click)="helpPage()">\n                    <img src="assets/imgs/customer-service.png">\n                        Help Center\n                </button>\n                <button ion-item menuClose (click)="signOut()">\n                    <img src="assets/imgs/logout2.png">\n                        Logout\n                </button>\n<!--\n<button ion-item menuClose (click)="reviewPage()">\n                    <img src="assets/imgs/add.png">\n                       Add review\n                </button>\n-->\n            </ion-list>\n        </div>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage " #content swipeBackEnabled="false "></ion-nav>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_17__providers_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_19__providers_customer__["a" /* CustomerProvider */], __WEBPACK_IMPORTED_MODULE_20__providers_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_28__ionic_native_market__["a" /* Market */], __WEBPACK_IMPORTED_MODULE_30__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_18__providers_product__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_21__providers_Sales__["a" /* SalesProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_15__providers_indent__["a" /* IndentProvider */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__["a" /* FilePath */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_17__providers_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_18__providers_product__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_header_color__["a" /* HeaderColor */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_27__ionic_native_app_update__["a" /* AppUpdate */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_16__providers_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_30__ionic_native_app_version__["a" /* AppVersion */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IndentProvider = (function () {
    function IndentProvider(http, utilityProvider, config, userProvider) {
        this.http = http;
        this.utilityProvider = utilityProvider;
        this.config = config;
        this.userProvider = userProvider;
        this.stackTrace = [];
        this.isShow = true;
    }
    ;
    IndentProvider.prototype.CreateIndent = function (indent) {
        var quotData = {
            data: {}
        };
        quotData.data.entityName = "ProcurementRequisition";
        quotData.data.active = true;
        quotData.data.organization = indent.organization;
        quotData.data.userContact = this.userProvider.userid;
        quotData.data.priceList = "17DC5772C5634065BEBCEC9B53633A7B";
        quotData.data.mstProject = indent.projectname.id;
        quotData.data.description = indent.description;
        console.log(quotData);
        return this.utilityProvider.postOB3Object("ProcurementRequisition", quotData);
    };
    IndentProvider.prototype.CreateIndentLines = function (indentlines) {
        var quotData = {
            data: {}
        };
        quotData.data.entityName = "ProcurementRequisitionLine";
        quotData.data.active = true;
        quotData.data.requisition = indentlines.indentid;
        quotData.data.product = indentlines.product.id;
        quotData.data.organization = indentlines.indentorg;
        quotData.data.uOM = indentlines.product.uOM;
        quotData.data.quantity = parseInt(indentlines.qty);
        quotData.data.lineNo = indentlines.lineno;
        quotData.data.needByDate = indentlines.needdate;
        console.log(quotData);
        return this.utilityProvider.postOB3Object("ProcurementRequisitionLine", quotData);
    };
    IndentProvider.prototype.Confirmindent = function (orgid, indentid) {
        var quotData = {
            data: {}
        };
        quotData.data.windowid = "800092";
        quotData.data.tabid = "800249";
        quotData.data.ordid = orgid;
        quotData.data.m_requisition_id = indentid;
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.SendforApprove", quotData);
    };
    IndentProvider.prototype.Approveindent = function (indentid) {
        var quotData = {
            data: {}
        };
        quotData.data.rejectreason = null;
        quotData.data.docaction = "A";
        quotData.data.m_requisition_id = indentid;
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.IndentApprove", quotData);
    };
    IndentProvider.prototype.Rejectindent = function (indentid, rejectreason) {
        var quotData = {
            data: {}
        };
        quotData.data.rejectreason = rejectreason;
        quotData.data.docaction = "R";
        quotData.data.m_requisition_id = indentid;
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.IndentApprove", quotData);
    };
    IndentProvider.prototype.ApprovePO = function (orderid) {
        var quotData = {
            data: {}
        };
        quotData.data.rejectreason = null;
        quotData.data.docaction = "A";
        quotData.data.cOrderId = orderid;
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.OrderApprove", quotData);
    };
    IndentProvider.prototype.RejectPO = function (orderid, rejectreason) {
        var quotData = {
            data: {}
        };
        quotData.data.rejectreason = rejectreason;
        quotData.data.docaction = "R";
        quotData.data.cOrderId = orderid;
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.OrderApprove", quotData);
    };
    IndentProvider.prototype.Posendforapprove = function (orgid, orderid) {
        var quotData = {
            data: {}
        };
        quotData.data.cOrderId = orderid;
        quotData.data.windowid = "181";
        quotData.data.tabid = "294";
        quotData.data.orgid = orgid;
        quotData.data.cDoctypeId = "808F8818F724497D94282AC83493F394";
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.OrderSendforApprove", quotData);
    };
    IndentProvider.prototype.UpdateOrderLinesInOrder = function (indentlines) {
        var endPoint = 'ProcurementRequisitionLine';
        var orderData = {
            data: []
        };
        for (var i = 0; i < indentlines.length; i++) {
            //console.log(order);
            var dat = {};
            dat._entityName = "ProcurementRequisitionLine";
            dat.id = indentlines[i].id;
            dat.samBpartner = indentlines[i].vendorid;
            dat.samUnitprice = parseInt(indentlines[i].unitprice);
            dat.samLinenetamount = parseInt(indentlines[i].unitprice) * indentlines[i].quantity;
            orderData.data.push(dat);
        }
        //console.log(orderData);
        return this.utilityProvider.postOB3Object(endPoint, orderData);
    };
    IndentProvider.prototype.UpdateRecievedquantityinGRN = function (goodslines, recievedqty, remarks) {
        var endPoint = 'MaterialMgmtShipmentInOutLine';
        var GoodslinesData = {
            data: []
        };
        for (var i = 0; i < goodslines.length; i++) {
            //console.log(order);
            var dat = {};
            dat._entityName = "MaterialMgmtShipmentInOutLine";
            dat.id = goodslines[i].id;
            dat.description = remarks;
            dat.movementQuantity = parseInt(recievedqty[i]);
            GoodslinesData.data.push(dat);
        }
        //console.log(orderData);
        return this.utilityProvider.postOB3Object(endPoint, GoodslinesData);
    };
    IndentProvider.prototype.ApproveandcreatePO = function (indentlines) {
        var quotData = {
            data: indentlines
        };
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.ApproveAndCreatePO", quotData);
    };
    IndentProvider.prototype.GRcomplete = function (goodsid) {
        var quotData = {
            data: {}
        };
        quotData.data.MinoutID = goodsid;
        quotData.data.OrderID = "";
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.uploadfile.processGRNorOrder", quotData);
    };
    IndentProvider.prototype.getProducts = function () {
        var endPoint = 'Product';
        var queryParams = "&_selectedProperties=id,name,uOM";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getIndentProducts = function (indentid) {
        var endPoint = 'ProcurementRequisitionLine';
        var queryParams = "&_where=requisition='" + indentid + "'&_selectedProperties=id,product,uOM,quantity,needByDate,organization,requisition";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.setProduct = function (entry) {
        this.product = entry;
        console.log("customer Name in cutomer Provider", this.product);
        return "yes";
    };
    IndentProvider.prototype.getIndentrecords = function (start, end) {
        var endPoint = 'ProcurementRequisition';
        var queryParams = "&_selectedProperties=id,documentStatus,organization,creationDate,userContact,documentNo,mstProject&_startRow=" + start + "&_endRow=" + end + "&_sortBy=creationDate%20desc";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getPurchaseorderrecords = function (start, end) {
        var endPoint = 'Order';
        var queryParams = "&_where=transactionDocument=%27808F8818F724497D94282AC83493F394%27%20and%20samNextapprover=null&_selectedProperties=id,businessPartner,creationDate,grandTotalAmount,documentNo,orderDate&_sortBy=creationDate%20desc&_startRow=" + start + "&_endRow=" + end;
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getUserfcmid = function (userid) {
        var endPoint = 'ADUser';
        var queryParams = "&_where=id='" + userid + "'&_selectedProperties=id,description";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getIndentrecordsforApproval = function (start, end) {
        var endPoint = 'ProcurementRequisition';
        var queryParams = "&_where=samNextapprover='" + this.userProvider.userid + "'%20and%20samStatus='Waiting'&_selectedProperties=id,documentStatus,userContact,creationDate,documentNo,mstProject&_startRow=" + start + "&_endRow=" + end + "&_sortBy=creationDate%20desc";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getpendingIndentrecords = function () {
        var endPoint = 'ProcurementRequisition';
        var queryParams = "&_where=samNextapprover='" + this.userProvider.userid + "'%20and%20samStatus='Waiting'&_selectedProperties=id";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getPurchaseorderLines = function (orderid) {
        var endPoint = 'OrderLine';
        var queryParams = "&_where=salesOrder='" + orderid + "'&_selectedProperties=id,product,uOM,orderedQuantity,scheduledDeliveryDate,businessPartner,unitPrice,organization";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getIndenttoorderrecords = function () {
        var endPoint = 'ProcurementRequisitionLine';
        var queryParams = "&_where=requisitionLineStatus=%27O%27&_selectedProperties=id,product,uOM,quantity,needByDate,organization,requisition,businessPartner,unitPrice,requisitionLineStatus,createdBy&_sortBy=needByDate%20desc";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getPurchaseordersforApproval = function (start, end) {
        var endPoint = 'Order';
        var queryParams = "&_where=samNextapprover='" + this.userProvider.userid + "'%20and%20samStatus='Waiting'&_selectedProperties=id,businessPartner,grandTotalAmount,creationDate,documentNo,orderDate&_startRow=" + start + "&_endRow=" + end + "&_sortBy=creationDate%20desc";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getnoofPurchaseordersforApproval = function () {
        var endPoint = 'Order';
        var queryParams = "&_where=samNextapprover='" + this.userProvider.userid + "'%20and%20samStatus='Waiting'&_selectedProperties=totalRows";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getConfirmedPurchaseorders = function (start, end) {
        var endPoint = 'Order';
        var queryParams = "&_where=samNextapprover='" + this.userProvider.userid + "'%20and%20samStatus='Approved'&_selectedProperties=id,businessPartner,grandTotalAmount,creationDate,documentNo,orderDate&_startRow=" + start + "&_endRow=" + end + "&_sortBy=creationDate%20desc";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getnoofConfirmedPurchaseorders = function () {
        var endPoint = 'Order';
        var queryParams = "&_where=samNextapprover='" + this.userProvider.userid + "'%20and%20samStatus='Approved'&_selectedProperties=totalRows";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getBusinesspartners = function () {
        var endPoint = 'BusinessPartner';
        var queryParams = "&_where=businessPartnerCategory.name=%27Vendor%27%20and%20name!=null&_selectedProperties=id,name";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getGoodsrecipts = function (start, end) {
        var endPoint = 'MaterialMgmtShipmentInOut';
        var queryParams = "&_where=documentStatus=%27DR%27&_selectedProperties=id,businessPartner,creationDate,movementDate,project&_startRow=" + start + "&_endRow=" + end + "&_sortBy=creationDate%20desc";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getGoodsreciptsLines = function (grid) {
        var endPoint = 'MaterialMgmtShipmentInOutLine';
        var queryParams = "&_where=shipmentReceipt='" + grid + "'&_selectedProperties=id,product,uOM,movementQuantity,operativeQuantity,businessPartner";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getPurchaseordersforApprovalList = function (start, end) {
        var _this = this;
        var POObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.getPOApprovalworkflow().subscribe(function (approvaldata) {
                console.log("================approvaldata", approvaldata);
                var orderIDs = "('";
                approvaldata.forEach(function (pr) {
                    orderIDs += pr.order + "','";
                });
                orderIDs += "')";
                _this.getPOApprovals(orderIDs, start, end).subscribe(function (poapprovaldetails) {
                    observer.next(poapprovaldetails);
                }, function (poapprovaldetailsErr) {
                    var errMsg = 'ERROR: :: Utility Provider :: getTaxListCorrespondingToState :: while getting Zone :: \n' + JSON.stringify(poapprovaldetailsErr);
                    console.log(errMsg);
                    observer.error(errMsg);
                });
            }, function (approvalerr) {
                var errMsg = 'ERROR: :: Utility Provider :: getTaxListCorrespondingToState :: while getting Zone :: \n' + JSON.stringify(approvalerr);
                console.log(errMsg);
                observer.error(errMsg);
            });
        });
        return POObservable;
    };
    IndentProvider.prototype.getPOApprovalworkflow = function () {
        var endPoint = 'SAM_Orderapproval';
        var queryParams = "&_where=user='" + this.userProvider.userid + "'%20and%20status='Waiting'&_selectedProperties=order";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getPOApprovals = function (orderids, start, end) {
        var endPoint = 'Order';
        var queryParams = "&_where=id%20in" + orderids + "&_selectedProperties=id,businessPartner,grandTotalAmount,creationDate,documentNo,orderDate&_startRow=" + start + "&_endRow=" + end;
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider.prototype.getProductNameForSearch = function (search) {
        var utilityEndPoint = "Product";
        var condition = "active=true";
        var queryParams = "&_where=name%20like%20%27%25" + search + "%25%27%20and%20" + condition + "&_selectedProperties=id,name,uOM";
        return this.utilityProvider.getOB3Object(utilityEndPoint, queryParams);
    };
    IndentProvider.prototype.getProductName = function (start, end) {
        var endPoint = 'Product';
        var queryParams = "&_selectedProperties=id,name,uOM" + "&_startRow=" + start + "&_endRow=" + end;
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    IndentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_6__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_7__user__["a" /* UserProvider */]])
    ], IndentProvider);
    return IndentProvider;
}());

;
//# sourceMappingURL=indent.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordPage = (function () {
    function PasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PasswordPage.prototype.verificationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verification_verification__["a" /* VerificationPage */]);
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/password/password.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Password\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="form" padding-left padding-right>\n        <p text-center>Enter your 6 digit password<br> your created while sign up</p>\n        <ion-list>\n            <ion-item>\n                <ion-label>Password</ion-label>\n                <ion-input type="text" text-right value="______"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button full class="bg-thime btn-round btn-text" (click)="verificationPage()">Continue</button>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/password/password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { RequestPage } from '../request/request';
var LocationPage = (function () {
    function LocationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/location/location.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n     <img src="assets/imgs/ic_menu.png">\n    </button>\n        <ion-title>Select Locaton</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img src="assets/imgs/map.jpg" class="map">\n    <div class="search-bar">\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="Search Locaton"></ion-searchbar>\n        <ion-icon name="md-locate" class="location_icon"></ion-icon>\n    </div>\n    <div class="btn-fix-bottom">\n        <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="homePage()">Continue</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/location/location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_review__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Myorder_2Page = (function () {
    function Myorder_2Page(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Myorder_2Page.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    Myorder_2Page.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    Myorder_2Page.prototype.reviewPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__review_review__["a" /* ReviewPage */]);
    };
    Myorder_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myorder_2 ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/myorder_2/myorder_2.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>My Order\n            <div class="icon-box">\n                <img src="assets/imgs/search.png" (click)="searchPage()">\n                <img src="assets/imgs/ic_my_cart.png" (click)="cartPage()">\n                <!--              <ion-badge>2</ion-badge>-->\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card>\n        <ion-card-content>\n            <ion-row>\n                <ion-col col-3>\n                    <div class="img-box">\n                        <img src="assets/imgs/suit_PNG8132.png">\n                    </div>\n                </ion-col>\n                <ion-col col-9>\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n                    <div class="rate">\n                        <p class=text-light>Ordered on 12-March-017</p>\n                        <div style="display: flex;">\n                            <div class="price text-light mr-5">\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                            </div>\n                            <div class="price text-sky">\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card-btn" float-right padding-top>\n                        <small class="text-sky ">Cancel order</small>\n                        <small class="text-white bg-thime green-shadow">Track Order</small>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-content>\n            <ion-row>\n                <ion-col col-3>\n                    <div class="img-box">\n                        <img src="assets/imgs/bag.jpg">\n                    </div>\n                </ion-col>\n                <ion-col col-9>\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n                    <div class="rate">\n                        <p class=text-light>Delivered on 12-March-017</p>\n                        <div style="display: flex;">\n                            <div class="price text-light mr-5">\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                            </div>\n                            <div class="price text-sky">\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card-btn" float-right padding-top>\n                        <small class="text-sky ">Return item</small>\n                        <small class="text-white bg-thime sky-shadow" (click)="reviewPage()">Rate now</small>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-content>\n            <ion-row>\n                <ion-col col-3>\n                    <div class="img-box">\n                        <img src="assets/imgs/wach.jpg">\n                    </div>\n                </ion-col>\n                <ion-col col-9>\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n                    <div class="rate">\n                        <p class=text-light>Delivered on 12-March-017</p>\n                        <div style="display: flex;">\n                            <div class="price text-light mr-5">\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                            </div>\n                            <div class="price text-sky">\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card-btn" float-right padding-top>\n                        <small class="text-sky ">Share product</small>\n                        <small class="text-white bg-gray gray-shadow">Rated 4\n                         <ion-icon name="md-star"></ion-icon>\n                        </small>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/myorder_2/myorder_2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], Myorder_2Page);
    return Myorder_2Page;
}());

//# sourceMappingURL=myorder_2.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShirtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__short_short__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShirtsPage = (function () {
    function ShirtsPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ShirtsPage.prototype.shortPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__short_short__["a" /* ShortPage */]);
        modal.present();
    };
    ShirtsPage.prototype.filterPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    ShirtsPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ShirtsPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    ShirtsPage.prototype.itemdetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__["a" /* ItemdetailPage */]);
    };
    ShirtsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shirts ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/shirts/shirts.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n        <ion-title>Men\'s Shirts\n            <div class="icon-box">\n                <img src="assets/imgs/search.png" (click)="shortPage()" margin-right>\n                <img src="assets/imgs/search.png" (click)="filterPage()">\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-light">\n    <div class="d-flex">\n        <p>410 items found</p>\n        <div class="icon-box">          \n            <ion-icon name="ios-swap-outline" class="icon" (click)="shortPage()"><span>Sort by</span></ion-icon>\n            <ion-icon name="md-funnel" class="icon" (click)="filterPage()"><span>Filter</span></ion-icon>\n        </div>\n    </div>\n    <ion-row>\n        <ion-col col-6>\n            <ion-card (click)="itemdetailPage()">\n                <ion-card-header>\n                    <h5>Fresh Onion - Medium Red 1kg</h5>\n                    <small class="text-light">Grocer market</small>\n                    <div class="img-box">\n                        <img src="assets/imgs/veg-1.jpg">\n                    </div>\n                </ion-card-header>\n                <ion-card-content>\n                    <p>\n                        1.50 $ <span>per kg</span>\n                        <ion-icon name="md-arrow-dropdown"></ion-icon>\n                    </p>\n                    <div class="btn text-white">Add</div>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n        <ion-col col-6>\n            <ion-card (click)="itemdetailPage()">\n                <ion-card-header>\n                    <h5>Fresh Onion - Medium Red 1kg</h5>\n                    <small class="text-light">Grocer market</small>\n                    <div class="img-box">\n                        <img src="assets/imgs/veg-1.jpg">\n                    </div>\n                </ion-card-header>\n                <ion-card-content>\n                    <p>\n                        1.50 $ <span>per kg</span>\n                        <ion-icon name="md-arrow-dropdown"></ion-icon>\n                    </p>\n                    <div class="btn text-white">Add</div>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-6>\n            <ion-card (click)="itemdetailPage()">\n                <ion-card-header>\n                    <h5>Fresh Onion - Medium Red 1kg</h5>\n                    <small class="text-light">Grocer market</small>\n                    <div class="img-box">\n                        <img src="assets/imgs/veg-1.jpg">\n                    </div>\n                </ion-card-header>\n                <ion-card-content>\n                    <p>\n                        1.50 $ <span>per kg</span>\n                        <ion-icon name="md-arrow-dropdown"></ion-icon>\n                    </p>\n                    <div class="btn text-white">Add</div>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n        <ion-col col-6>\n            <ion-card (click)="itemdetailPage()">\n                <ion-card-header>\n                    <h5>Fresh Onion - Medium Red 1kg</h5>\n                    <small class="text-light">Grocer market</small>\n                    <div class="img-box">\n                        <img src="assets/imgs/veg-1.jpg">\n                    </div>\n                </ion-card-header>\n                <ion-card-content>\n                    <p>\n                        1.50 $ <span>per kg</span>\n                        <ion-icon name="md-arrow-dropdown"></ion-icon>\n                    </p>\n                    <div class="btn text-white">Add</div>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-6>\n            <ion-card (click)="itemdetailPage()">\n                <ion-card-header>\n                    <h5>Fresh Onion - Medium Red 1kg</h5>\n                    <small class="text-light">Grocer market</small>\n                    <div class="img-box">\n                        <img src="assets/imgs/veg-1.jpg">\n                    </div>\n                </ion-card-header>\n                <ion-card-content>\n                    <p>\n                        1.50 $ <span>per kg</span>\n                        <ion-icon name="md-arrow-dropdown"></ion-icon>\n                    </p>\n                    <div class="btn text-white">Add</div>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n        <ion-col col-6>\n            <ion-card (click)="itemdetailPage()">\n                <ion-card-header>\n                    <h5>Fresh Onion - Medium Red 1kg</h5>\n                    <small class="text-light">Grocer market</small>\n                    <div class="img-box">\n                        <img src="assets/imgs/veg-1.jpg">\n                    </div>\n                </ion-card-header>\n                <ion-card-content>\n                    <p>\n                        1.50 $ <span>per kg</span>\n                        <ion-icon name="md-arrow-dropdown"></ion-icon>\n                    </p>\n                    <div class="btn text-white">Add</div>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/shirts/shirts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ShirtsPage);
    return ShirtsPage;
}());

//# sourceMappingURL=shirts.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VegetablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__short_short__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VegetablePage = (function () {
    function VegetablePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.vegetableitems = [
            {
                names: "Fresh Onion - Medium Red 1kg",
                market: "Grocer market",
                image: "assets/imgs/veg-1.jpg",
                prices: "1.50",
            },
            {
                names: "Fresh Onion - Medium Red 1kg",
                market: "Grocer market",
                image: "assets/imgs/veg-2.jpg",
                prices: "1.50",
            },
            {
                names: "Fresh Onion - Medium Red 1kg",
                market: "Grocer market",
                image: "assets/imgs/veg-3.jpg",
                prices: "1.50",
            },
            {
                names: "Fresh Onion - Medium Red 1kg",
                market: "Grocer market",
                image: "assets/imgs/veg-4.jpg",
                prices: "1.50",
            },
            {
                names: "Fresh Onion - Medium Red 1kg",
                market: "Grocer market",
                image: "assets/imgs/veg-5.jpg",
                prices: "1.50",
            },
            {
                names: "Fresh Onion - Medium Red 1kg",
                market: "Grocer market",
                image: "assets/imgs/veg-6.jpg",
                prices: "1.50",
            }
        ];
    }
    VegetablePage.prototype.shortPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__short_short__["a" /* ShortPage */]);
        modal.present();
    };
    VegetablePage.prototype.filterPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    VegetablePage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    VegetablePage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    VegetablePage.prototype.itemdetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__["a" /* ItemdetailPage */]);
    };
    VegetablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vegetable ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/vegetable/vegetable.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n        <ion-title>Health Care\n            <div class="icon-box">\n<!--            <img src="assets/imgs/search.png" (click)="searchPage()">-->\n                <img src="assets/imgs/ic_my_cart.png" (click)="cartPage()">\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-light">\n    <div class="d-flex">\n        <p>410 items found</p>\n        <div class="icon-box">\n            <ion-icon name="ios-swap-outline" class="icon" (click)="shortPage()"><span>Sort by</span></ion-icon>\n            <ion-icon name="md-funnel" class="icon" (click)="filterPage()"><span>Filter</span></ion-icon>\n        </div>\n    </div>\n    <ion-row>\n        <ion-col col-6 *ngFor="let vegetableitem of vegetableitems">\n            <ion-card (click)="itemdetailPage()">\n                <ion-card-header>\n                    <h5 [innerHTML]="vegetableitem.names"></h5>\n                    <small class="text-light" [innerHTML]="vegetableitem.market"></small>\n                    <div class="img-box">\n                        <img [src]="vegetableitem.image">\n                    </div>\n                </ion-card-header>\n                <ion-card-content>\n                    <p><span [innerHTML]="vegetableitem.prices"></span> $<small>per kg</small>\n                        <ion-icon name="md-arrow-dropdown"></ion-icon>\n                    </p>\n                    <div class="btn text-white">Add</div>\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/vegetable/vegetable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], VegetablePage);
    return VegetablePage;
}());

//# sourceMappingURL=vegetable.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerProvider = (function () {
    function CustomerProvider(utilityProvider, config, userProvider) {
        this.utilityProvider = utilityProvider;
        this.config = config;
        this.userProvider = userProvider;
        this.stackTrace = [];
        this.customerName = null;
        this.isShow = true;
    }
    ;
    CustomerProvider.prototype.setCustomerName = function (entry) {
        this.customerName = entry;
        console.log("customer Name in cutomer Provider", this.customerName);
        return "yes";
    };
    CustomerProvider.prototype.getcustomerrecords = function (start, end) {
        var endPoint = 'BusinessPartner';
        var queryParams = "&_selectedProperties=id,name,searchKey,aiDob,description,creationDate&_startRow=" + start + "&_endRow=" + end + "&_sortBy=creationDate%20desc";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    CustomerProvider.prototype.getRegions = function () {
        var endPoint = 'Region';
        var queryParams = "&_where=country=%27208%27&_orderBy=name";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    CustomerProvider.prototype.getBPlocationid = function (start, end) {
        var endPoint = 'BusinessPartnerLocation';
        var queryParams = "&_where=businessPartner=%27" + this.userProvider.bpartner + "%27&_startRow=" + start + "&_endRow=" + end + "&_selectedProperties=id,businessPartner,locationAddress";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    CustomerProvider.prototype.getBPlocationid1 = function (bpid) {
        var endPoint = 'BusinessPartnerLocation';
        var queryParams = "&_where=businessPartner=%27" + bpid + "%27&_selectedProperties=id,businessPartner,locationAddress";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    CustomerProvider.prototype.getBPlocationdetails = function (bplocationid) {
        var endPoint = 'Location';
        var queryParams = "&_where=id=%27" + bplocationid + "%27";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    CustomerProvider.prototype.getnewCustomertName = function (name) {
        var endPoint = 'BusinessPartner';
        var queryParams = "&_where=name='" + name + "'&_selectedProperties=id,name,searchKey,description";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    CustomerProvider.prototype.getCustomertName = function (start, end) {
        var endPoint = 'BusinessPartner';
        var queryParams = "&_startRow=" + start + "&_endRow=" + end + "&_selectedProperties=id,name,searchKey,description,aiDob";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    CustomerProvider.prototype.getCustomertdetails = function (customerid) {
        var endPoint = 'BusinessPartner';
        var queryParams = "&_where=id='" + customerid + "'";
        return this.utilityProvider.getOB3Object(endPoint, queryParams);
    };
    CustomerProvider.prototype.getCustomerAddressForSearch = function (search) {
        var utilityEndPoint = "BusinessPartnerLocation";
        var condition = "active=true";
        var queryParams = "&_where=name%20like%20%27%25" + search + "%25%27%20or%20searchKey%20like%20%27%25" + search + "%25%27%20and%20" + condition + "&_selectedProperties=id,name,searchKey,description,aiDob";
        return this.utilityProvider.getOB3Object(utilityEndPoint, queryParams);
    };
    CustomerProvider.prototype.createbp = function (customer) {
        var quotData = {
            data: {}
        };
        quotData.data.entityName = "BusinessPartner";
        quotData.data.active = true;
        quotData.data.businessPartnerCategory = "3ED3E1DF40E540DF9E50CCAA84B27513";
        quotData.data.name = customer.name;
        quotData.data.searchKey = customer.mobile;
        quotData.data.description = customer.email;
        quotData.data.aiDob = customer.dob;
        console.log(quotData);
        return this.utilityProvider.postOB3Object("BusinessPartner", quotData);
    };
    CustomerProvider.prototype.createCustomer = function (customer) {
        var quotData = {
            data: {}
        };
        quotData.data.entityName = "DataImportBusinessPartner";
        quotData.data.active = true;
        quotData.data.businessPartnerCategory = "3ED3E1DF40E540DF9E50CCAA84B27513";
        quotData.data.name = customer.name;
        quotData.data.searchKey = customer.mobile;
        quotData.data.email = customer.email;
        quotData.data.description = customer.email;
        quotData.data.phone = customer.mobile;
        quotData.data.addressLine1 = customer.address1;
        quotData.data.addressLine2 = customer.address2;
        quotData.data.cityName = customer.city;
        quotData.data.postalCode = customer.pincode;
        quotData.data.country = "208";
        quotData.data.region = customer.state.id;
        quotData.data.birthday = customer.dob;
        console.log(quotData);
        return this.utilityProvider.postOB3Object("DataImportBusinessPartner", quotData);
    };
    CustomerProvider.prototype.createCustomerAddress = function (customer, bpid) {
        var quotData = {
            data: {}
        };
        quotData.data.clientId = this.userProvider.client;
        quotData.data.address1 = customer.address1;
        quotData.data.address2 = customer.address2;
        quotData.data.city = customer.city;
        quotData.data.postalcode = customer.pincode;
        quotData.data.country = "208";
        quotData.data.state = customer.state.id;
        quotData.data.bpid = bpid;
        quotData.data.phone = "1234567890";
        console.log(quotData);
        return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.uploadfile.postAddLocation", quotData);
    };
    CustomerProvider.prototype.createCustomerAddressforbp = function (customerbpid, customeraddid) {
        var quotData = {
            data: {}
        };
        quotData.data.entityName = "BusinessPartnerLocation";
        quotData.data.active = true;
        quotData.data.businessPartner = customerbpid;
        quotData.data.locationAddress = customeraddid;
        console.log(quotData);
        return this.utilityProvider.postOB3Object("BusinessPartnerLocation", quotData);
    };
    CustomerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__user__["a" /* UserProvider */]])
    ], CustomerProvider);
    return CustomerProvider;
}());

;
//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductslisttPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productspage_productdetails__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductslisttPage = (function () {
    function ProductslisttPage(platform, nav, productsProvider, loading) {
        var _this = this;
        this.platform = platform;
        this.nav = nav;
        this.productsProvider = productsProvider;
        this.loading = loading;
        this.records = [];
        this.recordList = [];
        this.start = 0;
        this.end = 10;
        // this.loadOrders();
        platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                // window.analytics.trackView("Gate Exit Page");
            }
        });
    }
    ProductslisttPage.prototype.ionViewWillEnter = function () {
        this.records = [];
        this.start = 0;
        this.end = 20;
        this.stop = false; //this.event.enable(true);
        this.loadProducts();
    };
    ProductslisttPage.prototype.refresh = function () {
        this.records = [];
        this.start = 0;
        this.end = 20;
        this.stop = false; //this.event.enable(true);
        this.loadProducts();
    };
    ProductslisttPage.prototype.productSelcted = function (product) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__productspage_productdetails__["a" /* ProductDetailsPage */], { "selectedProduct": product });
    };
    ProductslisttPage.prototype.loadProducts = function () {
        var _this = this;
        var loading = this.loading.create({
            content: "Please Wait..",
            dismissOnPageChange: true
        });
        loading.present();
        this.productsProvider.getProducts(this.start, this.end).subscribe(function (productsResponse) {
            console.log(productsResponse);
            var j = 0;
            for (var i = 0; i < productsResponse.length; i++) {
                _this.records[j] = productsResponse[i];
                console.log(_this.records[j]);
                j++;
            }
            _this.recordList = _this.records;
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
            console.log(err);
        }, function () {
            console.log("Success");
        });
        //this.newModule('New');
    };
    ProductslisttPage.prototype.intilaizeRecords = function () {
        var self = this;
        self.records = self.recordList;
    };
    ProductslisttPage.prototype.getRecords = function (actvty) {
        var self = this;
        self.intilaizeRecords();
        var val = actvty.target.value;
        if (val && val.trim() != '') {
            console.log(val);
            self.records = self.records.filter(function (item) {
                return ((item._identifier.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    ProductslisttPage.prototype.loadMore = function (event) {
        var _this = this;
        this.event = event;
        console.log("Evemt === ", this.event);
        var self = this;
        this.start = this.end;
        this.end = this.end + 10;
        this.event = event;
        this.productsProvider.getProducts(this.start, this.end).subscribe(function (productsResponse) {
            if (productsResponse.length == 0) {
                _this.stop = true;
            }
            else {
                var j = _this.records.length;
                console.log(productsResponse);
                for (var i = 0; i < productsResponse.length; i++) {
                    _this.records[j] = productsResponse[i];
                    j++;
                }
            }
            _this.recordList = _this.records;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Success");
        });
        if (this.stop) {
            console.log("IT is stopped");
            //event.enable(false);
        }
        else {
            console.log("IT is not stopped");
        }
        setTimeout(function () {
            event.complete();
            console.log('Async operation has ended');
        }, 500);
    };
    ProductslisttPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/productspage/productslist.html"*/'<ion-header>\n<ion-navbar  color="primary">\n<button ion-button menuToggle clear>\n      <ion-icon style="font-size: 25px;" name="menu"></ion-icon>\n    </button>\n    <ion-title >Products List</ion-title>\n\n    <ion-buttons end>\n        <button ion-button clear id="refresh" (click)="refresh()">\n            <ion-icon style="font-size: 25px;" light name="refresh"></ion-icon>\n        </button>\n    </ion-buttons>\n\n\n</ion-navbar>\n</ion-header>\n<ion-content >\n        <ion-searchbar placeholder="Search name" (ionInput)="getRecords($event)"></ion-searchbar>\n\n    <ion-list >\n        <button dark  ion-item detail-none color="primary" >\n                <h6 class="customer" style="color:white">Product Name</h6>\n\n                 <div item-right class="div">\n                    <h6 style="color:white">Tax</h6>\n                </div>\n        </button>\n            \n        <button dark  ion-item detail-none  *ngFor="let item of records" (click)="productSelcted(item)">\n        <div item-right style="width: 50%;" align="left">\n                <h6 >{{item._identifier}}</h6>\n                 </div>\n                 <span item-right style="width: 50%;" align="right">\n                    <h6 >{{item.taxCategory$_identifier}}</h6>\n                </span>\n                                \n        </button>\n           \n      \n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/productspage/productslist.html"*/,
            selector: 'page-productspage',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_product__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */]])
    ], ProductslisttPage);
    return ProductslisttPage;
}());

//# sourceMappingURL=productslist.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderPage = (function () {
    function OrderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/order/order.html"*/''/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/order/order.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perscriptions_perscriptions__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_upload__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_1_product2__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_product3__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, menuCtrl, modalCtrl, productsProvider, loading) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.productsProvider = productsProvider;
        this.loading = loading;
        this.products = "nonprescriptions";
        this.medizoneitem = [];
        this.medizoneitem1 = [];
        this.medizoneitemList = [];
        this.start = 0;
        this.end = 10;
        this.slides = [
            {
                title: "20% Off",
                // description: "We ensure the lowest and best price for each medicine",     
                image: "assets/imgs/slide1.png",
            },
            {
                title: "20% Off",
                // description: "We ensure the lowest and best price for each medicine",     
                image: "assets/imgs/slide3.png",
            },
            {
                title: "20% Off",
                // description: "We ensure the lowest and best price for each medicine",     
                image: "assets/imgs/slide2.png",
            }
        ];
        this.homeicons = [
            {
                name: "Ayurveda",
                imag: "assets/imgs/ayurveda3.png",
                cat: "Ayurveda",
            },
            {
                name: "Diabetes",
                imag: "assets/imgs/c2.png",
                cat: "Diabetes",
            },
            {
                name: "Personal Care",
                imag: "assets/imgs/beauty2.png",
                cat: "Personalcare",
            },
            {
                name: "Fitness",
                imag: "assets/imgs/c6.png",
                cat: "Fitness"
            },
            {
                name: "Health Conditions",
                imag: "assets/imgs/c5.png",
                cat: "HealthConditions"
            },
            {
                name: "Healthcare Devices",
                imag: "assets/imgs/device2.png",
                cat: "HealthcareDevices"
            },
            {
                name: "Homeopathy",
                imag: "assets/imgs/home7.png",
                cat: "Homeopathy",
            },
            {
                name: "Featured",
                imag: "assets/imgs/fe2.png",
                cat: "Featured",
            },
        ];
        this.menuCtrl.enable(true, "authenticated");
    }
    HomePage.prototype.categoryPage = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__product_1_product2__["a" /* ProductsPage */], { "category": category });
    };
    // diabaticsPage(){
    //   this.navCtrl.push(ProductsPage,{"category":"Ayurveda"});
    //   }
    HomePage.prototype.perscriptionsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perscriptions_perscriptions__["a" /* PerscriptionsPage */]);
    };
    HomePage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    HomePage.prototype.mastersearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_home_product3__["a" /* ProductsPage1 */]);
    };
    HomePage.prototype.cartPage = function () {
        //let modal = this.modalCtrl.create(CartPage);
        if (this.productsProvider.productList.length == 0 || this.productsProvider.productList == null)
            alert("Please Select atleast one product to go to Cart");
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        //modal.present();
    };
    HomePage.prototype.uploadPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__upload_upload__["a" /* UploadPage */]);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        // this.menuCtrl.enable (true, 'myMenu');
        this.medizoneitem = [];
        this.start = 0;
        this.end = 20;
        this.carttotal = this.productsProvider.productList.length;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/home/home.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n        <button ion-button menuToggle style="display: block !important;">\n           <img src="assets/imgs/ic_menu.png">\n        </button>\n        <ion-title>MEDICINE SHOPPEE\n            <div class="icon-box">\n                <img src="assets/imgs/ic_my_cart.png" (click)="cartPage()">\n                <ion-badge id="cart-badge">{{carttotal}}</ion-badge>\n                <!--              <ion-badge>2</ion-badge>-->\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-slides autoplay="2000" loop pager>\n        <ion-slide *ngFor="let slide of slides">\n            <img [src]="slide.image" class="slide-image" />\n            <div class="banner-text">\n                <p [innerHTML]="slide.description"></p>\n            </div>\n        </ion-slide>\n    </ion-slides>\n    <div class="product">\n        <!--    <h4 text-center>Shop by category</h4>-->\n        <ion-toolbar no-border-top class="tab-bar">\n            <ion-searchbar  placeholder="Search Medicines"  (ionInput)="getItems($event)" (click)="mastersearch()"></ion-searchbar>\n            <ion-list>\n                <ion-item *ngFor="let item of items">\n                </ion-item>\n            </ion-list>\n            <ion-segment [(ngModel)]="products">\n                <ion-segment-button value="nonprescriptions">\n                    Non-Prescriptions\n                </ion-segment-button>\n                <ion-segment-button value="prescriptions">\n                    Prescriptions\n                </ion-segment-button>\n            </ion-segment>\n        </ion-toolbar>\n\n        <div [ngSwitch]="products">\n            <div *ngSwitchCase="\'nonprescriptions\'" style="padding-top: 10px;">\n                <ion-row>\n                    <ion-col col-6  *ngFor="let homeicon of homeicons ">\n                        <div class="item-box " (click)="categoryPage(homeicon.cat)">\n                            <img [src]="homeicon.imag ">\n                            <p [innerHTML]="homeicon.name "></p>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div *ngSwitchCase="\'prescriptions\'" class="bg-white" style="padding-top: 10px;">\n                <ion-row class="d-flex">\n                    <ion-col col-4><img src="assets/imgs/vector1.png"></ion-col>\n                    <ion-col col-8>\n                        <h6 class="text-sky">Buying medicine made easy with Medicine Shoppee</h6>\n                    </ion-col>\n                    <ion-col col-8>\n                        <ol>\n                            <li>Uploade your prescriptions</li>\n                            <li>We will collect prescriptions</li>\n                            <li>Get medicine Delivered at your doorstep</li>\n                        </ol>\n                    </ion-col>\n                    <ion-col col-4><img src="assets/imgs/vector2.png"></ion-col>\n                </ion-row>\n                <div padding style="padding-top: 0;">\n                    <button ion-button full class="bg-thime btn-round btn-text" (click)="uploadPage()">Upload Prescription</button>\n                    <!-- <p text-center no-margin>Or</p>\n                    <button ion-button block outline class="btn-round btn-text">Browese Medicine Categories</button> -->\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__providers_product__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShortPage = (function () {
    function ShortPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ShortPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ShortPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-short',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/short/short.html"*/'<ion-content (click)="dismiss()">\n    <div class="group">\n        <ion-list radio-group>\n            <ion-list-header class="d-flex">\n                SHORT BY\n                <ion-icon name="ios-arrow-down"></ion-icon>\n            </ion-list-header>\n            <ion-item>\n                <ion-label>Name : A to Z</ion-label>\n                <ion-radio checked="true" value="popularity"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Name : A to Z</ion-label>\n                <ion-radio value="price_h_l"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Price - Low to High</ion-label>\n                <ion-radio value="price_l_h"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Price - High to Low</ion-label>\n                <ion-radio value="newest"></ion-radio>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/short/short.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ShortPage);
    return ShortPage;
}());

//# sourceMappingURL=short.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = (function () {
    function FilterPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/filter/filter.html"*/'<ion-content>\n    <div class="group">\n        <div class="size-filter">\n            <div class="slid-container">\n                <span>Allergy &<br>Infection</span>\n                <span>Dental &<br>Oral</span>\n                <span class="active">Health <br>Supplement</span>\n                <span>Digeston &<br>Laxatives</span>\n                <span class="">Health <br>Supplement</span>\n            </div>\n        </div>\n        <div class="type-filter">\n            <div class="slid-container">\n                <span>Medicine Type</span>\n                <span class="active">Manufacturer</span>\n                <span>Price</span>\n                <span>Medicine Type</span>\n                <span>Manufacturer</span>\n            </div>\n        </div>\n        <ion-row text-center class="action">\n            <ion-col col-5>\n                <p>Reset</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>\n                    <ion-icon name="ios-close-outline" (click)="dismiss()"></ion-icon>\n                </p>\n            </ion-col>\n            <ion-col col-5>\n                <p class="active">Apply</p>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/filter/filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shippining_shippining__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_review__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_Sales__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ItemdetailPage = (function () {
    function ItemdetailPage(navCtrl, modalCtrl, salesprovider, navpar, productsProvider, loading, alert1) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.salesprovider = salesprovider;
        this.navpar = navpar;
        this.productsProvider = productsProvider;
        this.loading = loading;
        this.alert1 = alert1;
        this.medizoneitem1 = [];
        this.medizoneitemList = [];
        this.start = 0;
        this.end = 10;
        this.qty = 1;
        this.selectedProduct = {};
        {
            this.category = navpar.get("category");
            this.medizoneitem = navpar.get("details");
        }
    }
    ItemdetailPage.prototype.ionViewWillEnter = function () {
        // this.menuCtrl.enable (true, 'myMenu');
        this.carttotal = this.productsProvider.productList.length;
    };
    ItemdetailPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ItemdetailPage.prototype.shippiningPage = function () {
        this.addtocart();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__shippining_shippining__["a" /* ShippiningPage */]);
    };
    ItemdetailPage.prototype.cartPage = function () {
        //let modal = this.modalCtrl.create(CartPage);
        if (this.productsProvider.productList.length == 0 || this.productsProvider.productList == null)
            alert("Please Select atleast one product to go to Cart.");
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        //modal.present();
    };
    ItemdetailPage.prototype.reviewPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__review_review__["a" /* ReviewPage */]);
    };
    ItemdetailPage.prototype.wish = function () {
        alert("You clicked");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__["a" /* WishlistPage */]);
    };
    ItemdetailPage.prototype.addQty = function () {
        this.qty = this.qty + 1;
        console.log("addqty" + this.qty);
    };
    ;
    ItemdetailPage.prototype.removeQty = function () {
        if (this.qty > 1)
            this.qty = this.qty - 1;
        console.log("removeqty" + this.qty);
    };
    ;
    ItemdetailPage.prototype.addtocart = function () {
        var _this = this;
        var found = false;
        for (var i = 0; i < this.productsProvider.productList.length; i++) {
            if (this.productsProvider.productList[i].productname == this.medizoneitem.name) {
                found = true;
                break;
            }
        }
        if (found) {
            var alertBox = this.alert1.create({
                title: 'This Product is already added to Cart.',
                cssClass: 'alertDanger',
                buttons: [{
                        text: 'OK',
                        handler: function (data) {
                            console.log('Ok clicked');
                        }
                    }], enableBackdropDismiss: false
            });
            alertBox.setCssClass('alertDanger');
            alertBox.present();
        }
        else {
            this.selectedProduct = {};
            this.selectedProduct.productid = this.medizoneitem.id;
            this.selectedProduct.productname = this.medizoneitem.name;
            this.selectedProduct.qty = this.qty;
            this.selectedProduct.price = this.medizoneitem.standardCost;
            this.selectedProduct.uOM = this.medizoneitem.uOM;
            this.selectedProduct.photo = this.medizoneitem.phPhoto;
            this.salesprovider.getFinancialMgmtTaxRate(this.medizoneitem.taxCategory).subscribe(function (prodtaxrate) {
                _this.selectedProduct.tax = prodtaxrate[0].id;
            }, function (prodtaxrateErr) {
            });
            console.log("addtocart" + this.selectedProduct.qty);
            this.productsProvider.updateNewProductList(this.selectedProduct);
            console.log("addtocartlist" + this.productsProvider.productList);
            var alertBox = this.alert1.create({
                title: this.selectedProduct.productname + ' added successfully',
                cssClass: 'alertDanger',
                buttons: [{
                        text: 'OK',
                        handler: function (data) {
                            console.log('Ok clicked');
                        }
                    }], enableBackdropDismiss: false
            });
            alertBox.setCssClass('alertDanger');
            alertBox.present();
            this.carttotal = this.productsProvider.productList.length;
        }
    };
    ItemdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-itemdetail ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/itemdetail/itemdetail.html"*/'<ion-header class="bg-thime">\n    <ion-navbar>\n        <ion-title>Product Details\n            <div class="icon-box">\n                <!-- <img src="assets/imgs/search.png" (click)="searchPage()"> -->\n<img src="assets/imgs/ic_my_cart.png" style="font-size: 25px;position:relative;" (click)="cartPage()">\n                <ion-badge id="cart-badge">{{carttotal}}</ion-badge>\n                        </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<!--<select size & color>-->\n<ion-content class="bg-light">\n    <div class="img-section shadow-bottom" text-center>\n        <img [src]="medizoneitem.phPhoto">\n        <div class="tab-btn-box">\n            <div class="tab-btn">\n                <img [src]="medizoneitem.phPhoto">\n            </div>\n            <div class="tab-btn">\n                <img [src]="medizoneitem.phPhoto">\n            </div>\n        </div>\n        <div class="d-flex" style="align-items: start;">\n            <span>{{medizoneitem.name}}</span>\n            <!-- <span class="icon"> <ion-icon name="share-alt"></ion-icon><ion-icon name="md-heart"></ion-icon></span> -->\n        </div>\n        <div class="d-flex" style="align-items: start;">\n            <span><h5>{{medizoneitem.phPackage}}</h5></span>\n            <!-- <span class="icon"> <ion-icon name="share-alt"></ion-icon><ion-icon name="md-heart"></ion-icon></span> -->\n        </div>\n        <!-- <div class="card-btn d-flex">\n            <h6 class="">Johnson & Johnson</h6>\n            <div class="badge-box">\n                <ion-badge class="bg-green">4.2\n                    <ion-icon name="star" color="bright"></ion-icon>\n                </ion-badge>\n                <span class="text-sky">Read all 125 Reviews</span>\n            </div>\n        </div> -->\n    </div>\n\n    <div class="select-section shadow-bottom">\n        <ion-row>\n            <ion-col col-6>\n                <div class="size d-flex">\n\n                    <ion-label> Price</ion-label>\n                    <p class="d-flex">\n                        <img src="assets/imgs/rupee-sky.png">\n                        <span class="text-sky" text-right>{{medizoneitem.standardCost}}</span>\n                    </p>\n                </div>\n            </ion-col>\n            <ion-col col-6>\n                <!-- <div class="quantiy">\n                    <ion-item>\n                        <ion-label>Quantiy</ion-label>\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                            <ion-option selected value="enable">1</ion-option>\n                            <ion-option value="mute">2</ion-option>\n                            <ion-option value="mute_week">3</ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n                </div> -->\n                <ion-row >\n                <div>\n                    <ion-col col-2>\n                        <div class="add">\n                                <button ion-button clear color=\'primary\' (click)="removeQty()" >\n                                   <ion-icon style="font-size: 25px;margin-right: 20px;" primary name="remove-circle"></ion-icon>  {{qty}}\n                                </button>\n                            </div>\n                        </ion-col>\n                        \n               <ion-col col-2>\n                           <div class="add">\n                               <button ion-button clear color=\'primary\' (click)="addQty()">\n                                    <ion-icon style="font-size: 25px;" primary name="add-circle"></ion-icon>\n                               </button>\n                           </div>  \n                        </ion-col>\n                 </div>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </div>\n    <!--<select size & color end>-->\n\n    <!--    <Product Info>-->\n    <div class="info bg-white shadow-bottom" padding>\n        <!-- <h6 class="heading">Product Info</h6>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took\n            <span text-right class="text-sky">Read more</span>\n        </p> -->\n       \n        <!-- <div class="receipt btn-fisx-bottom"> -->\n            <ion-row>\n                <ion-col><button ion-button full class="bg-thime btn-round green-shadow btn-text" style="background: #fff;" (click)="addtocart()">ADD TO CART</button> </ion-col>\n                <ion-col><button ion-button full class="bg-thime btn-round green-shadow btn-text" (click)="shippiningPage()"> BUY NOW</button></ion-col>\n            </ion-row>\n        <!-- </div> -->\n    </div>\n    <!--  <Product Info end>-->\n\n    <!--    <check Delivery>-->\n    <!-- <div class="pincod bg-white shadow-bottom" padding>\n        <h6 class="heading">Check Delivery</h6>\n        <ion-row>\n            <ion-col col-8>\n                <ion-list>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Enter your pin"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n            <ion-col col-4>\n                <button ion-button full class="bg-thime btn-round btn-text">Submit</button>\n            </ion-col>\n        </ion-row>\n        <p>\n            <span>Cash on Delivery</span>\n            <span text-center>Free Sheeping</span>\n            <span text-right>Delivery in 3-6 Days</span>\n        </p>\n    </div> -->\n    <!--    <check Delivery end>-->\n\n    <!--    <reating & review>-->\n    <!-- <div class="reating-review bg-white" padding>\n        <div class="reating">\n            <div class="rated">\n                <ion-badge class="badges bg-green text-white">\n                    4.2\n                    <ion-icon name="md-star"></ion-icon>\n                </ion-badge>\n                <p class="text-light">\n                    <span text-center>\n                        Rated by<br>125 poeple\n                    </span>\n                </p>\n            </div>\n\n            <div class="reating-box">\n                <div class="rating">\n                    <div class="text-1">5\n                        <ion-icon name="md-star"></ion-icon>\n                    </div>\n                    <div class="progres-bar rate-5"><span style="width: 90%"></span></div>\n                    <div class="text-2">88\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n                    </div>\n                </div>\n                <div class="rating">\n                    <div class="text-1">4\n                        <ion-icon name="md-star"></ion-icon>\n                    </div>\n                    <div class="progres-bar rate-4"><span style="width: 70%"></span></div>\n                    <div class="text-2">88\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n                    </div>\n                </div>\n                <div class="rating">\n                    <div class="text-1">3\n                        <ion-icon name="md-star"></ion-icon>\n                    </div>\n                    <div class="progres-bar rate-3"><span style="width: 50%"></span></div>\n                    <div class="text-2">88\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n                    </div>\n                </div>\n                <div class="rating">\n                    <div class="text-1">2\n                        <ion-icon name="md-star"></ion-icon>\n                    </div>\n                    <div class="progres-bar rate-2"><span style="width: 35%"></span></div>\n                    <div class="text-2">88\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n                    </div>\n                </div>\n                <div class="rating">\n                    <div class="text-1">1\n                        <ion-icon name="md-star"></ion-icon>\n                    </div>\n                    <div class="progres-bar rate-1"><span style="width: 20%"></span></div>\n                    <div class="text-2">88\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="btn review text-sky" (click)="reviewPage()">Write your review now</div> -->\n\n        <!-- <div class="lick">\n            <p padding-top>\n                <span class="left-side">\n                    <ion-badge class="badges bg-green text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>  \n                    <span class="bold">Great product</span>\n                </span>\n                <span class="right-side">\n                   <span class="text-light">16 May, 2017</span>\n                </span>\n            </p>\n\n            <h5>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry\n            </h5>\n            <p class="border-bottom  name-like" padding-bottom>\n                <span class="left-side">\n                   Davis Williamson.\n                </span>\n                <span class="right-side icon-box">                    \n                    <ion-icon name="md-thumbs-up" text-right class="icon-lick"></ion-icon><small>2</small>\n                    <ion-icon name="md-thumbs-down" text-right class="icon-lick"></ion-icon><small>2</small>             \n                </span>\n            </p>\n\n\n            <p padding-top>\n                <span class="left-side">\n                    <ion-badge class="badges bg-yellow text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>  \n                    <span class="bold">Not satisfid with quality</span>\n                </span>\n                <span class="right-side">\n                   <span class="text-light">10 apr, 2017</span>\n                </span>\n            </p>\n            <h5>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry\n            </h5>\n            <p class="border-bottom name-like" padding-bottom>\n                <span class="left-side">\n                  Rahul Oberoy.\n                </span>\n                <span class="right-side icon-box">                    \n                    <ion-icon name="md-thumbs-up" text-right class="icon-lick"></ion-icon><small>2</small>\n                    <ion-icon name="md-thumbs-down" text-right class="icon-lick"></ion-icon><small>2</small>             \n                </span>\n            </p>\n            <h4 class="text-sky" text-right>\n                Read all reviews\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </h4>\n        </div>\n    </div>\n       <reating & review end>-->\n\n    <!--    <similar Products>-->\n    <!-- <div class="products" padding-top>\n        <h6 class="heading">Similar Products\n            <span text-right class="text-sky">View more\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </span>\n        </h6> -->\n        <!-- <div class="products-scroll">\n            <div class="products-container" style="width:479px;">\n                <div class="products-item">\n                    <ion-card>\n                        <ion-card-header>\n                            <div class="img-box">\n                                <img src="assets/imgs/p1.png">\n                            </div>\n                            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <h5>Baidyanath Ayurved Neemguard Capsules 60pcs</h5>\n                            <div class="rateing">\n                                <div class="card-bottom">\n                                    <p class="" float-left>\n                                        <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                                        <span class="text-light bold"> (125)</span>\n                                    </p>\n                                    <div class="d-flex" float-right>\n                                        <div class="price text-light mr-5">\n                                            <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                                        </div>\n                                        <div class="price text-sky">\n                                            <img src="assets/imgs/rupee-thime.png" class="rupee-icon">300\n                                        </div>\n                                    </div>\n                                </div> -->\n                            <!-- </div>\n                        </ion-card-content> -->\n                    <!-- </ion-card> \n                </div>  -->\n\n                <!-- <div class="products-item">\n                    <ion-card>\n                        <ion-card-header>\n                            <div class="img-box">\n                                <img src="assets/imgs/p2.png">\n                            </div>\n                            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n                        </ion-card-header> -->\n                        <!-- <ion-card-content>\n                            <h5>Eno Fruit Salt Lemone Flavour Powder 100gm</h5>\n                            <div class="rateing">\n                                <div class="card-bottom">\n                                    <p class="" float-left>\n                                        <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                                        <span class="text-light bold"> (125)</span>\n                                    </p>\n                                    <div class="d-flex" float-right>\n                                        <div class="price text-light mr-5">\n                                            <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                                        </div>\n                                        <div class="price text-sky">\n                                            <img src="assets/imgs/rupee-thime.png" class="rupee-icon">300\n                                        </div>\n                                    </div>\n                                </div>\n                            </div> -->\n                        <!-- </ion-card-content>\n                    </ion-card>\n                </div> -->\n\n                <!-- <div class="products-item">\n                    <ion-card>\n                        <ion-card-header>\n                            <div class="img-box">\n                                <img src="assets/imgs/p3.png">\n                            </div>\n                            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <h5>Baidyanath Ayurved isabgol 100gm</h5>\n                            <div class="rateing">\n                                <div class="card-bottom">\n                                    <p class="">\n                                        <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n                                        <span class="text-light bold"> (125)</span>\n                                    </p>\n\n                                    <div class="d-flex">\n                                        <div class="price text-light mr-5">\n                                            <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n                                        </div>\n                                        <div class="price text-sky">\n                                            <img src="assets/imgs/rupee-thime.png" class="rupee-icon">300\n                                        </div>\n                                    </div>\n                                </div> -->\n                            <!-- </div>\n                        </ion-card-content>\n                    </ion-card>\n                </div>\n            </div>\n        </div>\n    </div>  -->\n    <!--    <similar Products end>-->\n    <!-- <div style="height: 65px;"></div>\n    <div class="receipt btn-fisx-bottom">\n        <ion-row>\n            <ion-col><button ion-button full class="btn-round green-shadow btn-text text-sky" style="background: #fff;">ADD TO CART</button> </ion-col>\n            <ion-col><button ion-button full class="bg-thime btn-round green-shadow btn-text" (click)="shippiningPage()"> BUY NOW</button></ion-col>\n        </ion-row>\n    </div> -->\n\n    <!--    <reating & review end>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/itemdetail/itemdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__providers_Sales__["a" /* SalesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_product__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ItemdetailPage);
    return ItemdetailPage;
}());

//# sourceMappingURL=itemdetail.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__short_short__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_filter__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addtocartpopup_addcart__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductsPage = (function () {
    function ProductsPage(navCtrl, modalCtrl, navpar, productsProvider, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navpar = navpar;
        this.productsProvider = productsProvider;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
        this.medizoneitem = [];
        this.medizoneitem1 = [];
        this.medizoneitemList = [];
        this.start = 0;
        this.end = 10;
        this.category = navpar.get("category");
        this.menuCtrl.enable(true);
    }
    ProductsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    ProductsPage.prototype.ionViewWillEnter = function () {
        // this.menuCtrl.enable (true, 'myMenu');
        this.medizoneitem = [];
        this.start = 0;
        this.end = 20;
        this.loadProducts();
        this.carttotal = this.productsProvider.productList.length;
    };
    ProductsPage.prototype.itemdetail = function (itemdetail) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__["a" /* ItemdetailPage */], { "details": itemdetail });
    };
    ProductsPage.prototype.addcartpopup = function (itemdetail) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__addtocartpopup_addcart__["a" /* AddCartPage */], { "details": itemdetail });
        modal.present();
    };
    ProductsPage.prototype.loadProducts = function () {
        var _this = this;
        var loading = this.loading.create({
            content: "Please Wait..",
        });
        this.productsProvider.getProductwithimages(this.category, this.start, this.end).subscribe(function (productsResponse) {
            loading.dismiss();
            console.log(productsResponse);
            var j = 0;
            for (var i = 0; i < productsResponse.length; i++) {
                _this.medizoneitem[j] = productsResponse[i];
                console.log(_this.medizoneitem[j]);
                j++;
            }
            _this.medizoneitemList = _this.medizoneitem;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Success");
        });
    };
    ProductsPage.prototype.shortPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__short_short__["a" /* ShortPage */]);
        modal.present();
    };
    ProductsPage.prototype.filterPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    ProductsPage.prototype.searchPage = function () {
    };
    ProductsPage.prototype.cartPage = function () {
        //let modal = this.modalCtrl.create(CartPage);
        if (this.productsProvider.productList.length == 0 || this.productsProvider.productList == null)
            alert("Please Select atleast one product to go to Cart");
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        //modal.present();
    };
    ProductsPage.prototype.itemdetailPage = function () {
    };
    ProductsPage.prototype.intilaizeRecords = function () {
        var self = this;
        self.medizoneitem = self.medizoneitemList;
    };
    ProductsPage.prototype.getRecords = function (actvty) {
        console.log("Search Value");
        console.log(actvty.target.value);
        this.intilaizeRecords();
        var val = actvty.target.value;
        this.searchValue = val;
        if (val == '') {
            console.log("Empty");
            this.medizoneitem = this.medizoneitemList;
        }
        else if (val.length >= 4) {
            this.search();
        }
    };
    ProductsPage.prototype.loadMore = function (event) {
        var _this = this;
        this.event = event;
        console.log("Evemt === ", this.event);
        var self = this;
        this.start = this.end;
        this.end = this.end + 10;
        this.event = event;
        this.productsProvider.getProductwithimages(this.category, this.start, this.end).subscribe(function (productsResponse) {
            if (productsResponse.length == 0) {
                _this.stop = true;
            }
            else {
                var j = _this.medizoneitem.length;
                console.log(productsResponse);
                for (var i = 0; i < productsResponse.length; i++) {
                    _this.medizoneitem[j] = productsResponse[i];
                    j++;
                }
            }
            _this.medizoneitemList = _this.medizoneitem;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Success");
        });
        if (this.stop) {
            console.log("IT is stopped");
            //event.enable(false);
        }
        else {
            console.log("IT is not stopped");
        }
        setTimeout(function () {
            event.complete();
            console.log('Async operation has ended');
        }, 500);
    };
    ProductsPage.prototype.search = function () {
        var _this = this;
        console.log("Value in search", this.searchValue);
        console.log("Charecter in search", this.searchValue.charAt(0));
        var val = this.searchValue;
        var charecter = this.searchValue.charAt(0);
        console.log("Charecter", charecter);
        var upper = charecter.toUpperCase();
        var lower = charecter.toLowerCase();
        console.log("LOWER", lower);
        console.log("Upper", upper);
        var s = this.searchValue;
        if (lower == charecter) {
            s = s.replace(s.charAt(0), upper);
        }
        console.log("SSSSSS", s);
        var Capital = this.searchValue.toUpperCase();
        var Small = this.searchValue.toLowerCase();
        console.log("Capital", Capital);
        console.log("Small", Small);
        if (val == '') {
            console.log("Empty");
            this.medizoneitem = this.medizoneitemList;
        }
        else {
            var loading_1 = this.loading.create({
                content: "Please Wait..",
            });
            loading_1.present();
            this.productsProvider.getProductNameForSearch(this.category, s).subscribe(function (data) {
                console.log("IN SEARCH");
                console.log(data);
                _this.medizoneitem = data;
                loading_1.dismiss();
                _this.productsProvider.getProductNameForSearch(_this.category, Small).subscribe(function (data) {
                    console.log("IN SEARCH Small Data", data);
                    _this.medizoneitem1 = data;
                    console.log(_this.medizoneitem1.length);
                    console.log(_this.medizoneitem.length);
                    var j = _this.medizoneitem.length;
                    for (var i = 0; i < _this.medizoneitem1.length; i++) {
                        _this.medizoneitem[i + j] = _this.medizoneitem1[i];
                    }
                    _this.productsProvider.getProductNameForSearch(_this.category, Capital).subscribe(function (data) {
                        console.log("IN SEARCH Capital Data", data);
                        _this.medizoneitem1 = data;
                        console.log(_this.medizoneitem1.length);
                        console.log(_this.medizoneitem1.length);
                        var j = _this.medizoneitem.length;
                        for (var i = 0; i < _this.medizoneitem1.length; i++) {
                            _this.medizoneitem[i + j] = _this.medizoneitem1[i];
                        }
                    }, function (err) {
                        console.log("%^%^%^%^%");
                        //console.error(err 
                    }, function () { return console.log('getDraftOrders completed'); });
                }, function (err) {
                    console.log("%^%^%^%^%");
                    //console.error(err 
                }, function () { return console.log('getDraftOrders completed'); });
            }, function (err) {
                console.log("%^%^%^%^%");
                //console.error(err 
            }, function () { return console.log('getDraftOrders completed'); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ProductsPage.prototype, "content", void 0);
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/product.1/product2.html"*/'<ion-header >\n    <ion-navbar color="primary">\n        <ion-title>{{category.split(" ", 3)}}\n            <div class="icon-box">\n                <!--            <img src="assets/imgs/search.png" (click)="searchPage()">-->\n                <img src="assets/imgs/ic_my_cart.png" style="font-size: 25px;position:relative;" (click)="cartPage()">\n                <ion-badge id="cart-badge">{{carttotal}}</ion-badge>\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-light">\n        <ion-searchbar placeholder="Searchby Productname" (ionInput)="getRecords($event)"></ion-searchbar>\n    <!-- <div class="d-flex">\n        <p>230 items found</p>\n        <div class="icon-box">\n            <ion-icon name="ios-swap-outline" class="icon" (click)="shortPage()"><span>Sort by</span></ion-icon>\n            <ion-icon name="md-funnel" class="icon" (click)="filterPage()"><span>Filter</span></ion-icon>\n        </div>\n    </div> -->\n    <ion-row>\n        <ion-col col-6 *ngFor="let medizoneitem1 of medizoneitem">\n            <ion-card style="width:100%;height: 100%;">\n                <ion-card-header (click)="itemdetail(medizoneitem1)">\n                    <!-- <ion-icon name="md-heart" class="icon"></ion-icon> -->\n                    <div class="img-box">\n                        <img [src]="medizoneitem1.phPhoto">\n                    </div>\n                    <h5 [innerHTML]="medizoneitem1.name"></h5>\n                    <!-- <div>\n                        <p>{{medizoneitem1.phPackage}}</p>\n                    </div> -->\n                    <!--                   <small class="text-light" [innerHTML]="medizoneitem.market"></small>-->\n                </ion-card-header>\n                <ion-card-content>\n                    <!-- <div class="text-light" style="font-size: 1rem;line-height: 1.7;">\n                        <div class="btn text-white">4.5&nbsp;\n                            <ion-icon name="md-star" class="icon"></ion-icon>\n                        </div>&nbsp; (124)\n                    </div> -->\n                    <ion-row>\n                        <ion-col>\n                            <div style="display: flex;" class="price-box">\n                                <!-- <div class="price text-light">\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">100\n                                </div>  -->\n                                <div class="price text-sky" align=\'left\'>\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">{{medizoneitem1.standardCost}}\n                                </div> \n                                <!-- <div class="price text-sky">\n                                        <h5 [innerHTML]="medizoneitem.pricelist"></h5>\n                                </div> -->\n                                \n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <!-- <ion-row>\n                            <button ion-button (click)="addcartpopup(medizoneitem1)" round outline>Add</button>\n                    </ion-row> -->\n                </ion-card-content>\n                \n            </ion-card>\n        </ion-col>\n    </ion-row>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content\n          loadingSpinner="bubbles"\n          loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      <ion-fab right bottom >\n        <button ion-fab [color]="buttonColor" (click)="scrollToTop()"><ion-icon ios="ios-arrow-dropup-circle" md="md-arrow-dropup-circle"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/product.1/product2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_product__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=product2.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Customers = (function () {
    function Customers(platform, params, viewCtrl, customerprovider, navCtrl, loading, alert) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.customerprovider = customerprovider;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.alert = alert;
        this.customers = [];
        this.customers1 = [];
        this.searchValue = "";
    }
    Customers.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.customers = [];
        this.customersList = [];
        this.start = 0;
        this.end = 20;
        this.stop = false; //this.event.enable(true);
        this.customerprovider.getBPlocationid(this.start, this.end).subscribe(function (data) {
            _this.customers = data;
            _this.customersList = _this.customers;
            /*for(var i=0;i<20;i++){
              if(data[i].name != "."){
                console.log(data[i]);
                this.customers[i] = data[i];

              }
            }
            this.customersList = this.customers;*/
            console.log(data[0]);
        }, function (err) {
            console.log("%^%^%^%^%");
            //console.error(err 
        }, function () { return console.log('getDraftOrders completed'); });
    };
    Customers.prototype.dismis = function () {
        console.log("DISMISS");
        this.viewCtrl.dismiss();
    };
    Customers.prototype.initializeVendors = function () {
        this.customers = this.customersList;
    };
    Customers.prototype.refresh = function () {
        this.customers = [];
        this.start = 0;
        this.end = 20;
        this.stop = false;
        this.event.enable(true);
        this.ionViewDidEnter();
    };
    Customers.prototype.gotoaddressscreen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */]);
    };
    Customers.prototype.getCustomer = function (event) {
        console.log("Search Value");
        console.log(event.target.value);
        this.initializeVendors();
        var val = event.target.value;
        this.searchValue = val;
        if (val == '') {
            console.log("Empty");
            this.customers = this.customersList;
            //event.enable(true);s
        }
        else {
            this.search();
        }
    };
    Customers.prototype.search = function () {
        var _this = this;
        console.log("Value in search", this.searchValue);
        console.log("Charecter in search", this.searchValue.charAt(0));
        var val = this.searchValue;
        var charecter = this.searchValue.charAt(0);
        console.log("Charecter", charecter);
        var upper = charecter.toUpperCase();
        var lower = charecter.toLowerCase();
        console.log("LOWER", lower);
        console.log("Upper", upper);
        var s = this.searchValue;
        if (lower == charecter) {
            s = s.replace(s.charAt(0), upper);
        }
        console.log("SSSSSS", s);
        var Capital = this.searchValue.toUpperCase();
        var Small = this.searchValue.toLowerCase();
        console.log("Capital", Capital);
        console.log("Small", Small);
        if (val == '') {
            console.log("Empty");
            this.customers = this.customersList;
        }
        else {
            var loading_1 = this.loading.create({
                content: "Please Wait..",
            });
            loading_1.present();
            if (isNaN(s)) {
                this.customerprovider.getCustomerAddressForSearch(s).subscribe(function (data) {
                    console.log("IN SEARCH");
                    console.log(data);
                    _this.customers = data;
                    loading_1.dismiss();
                    _this.customerprovider.getCustomerAddressForSearch(Small).subscribe(function (data) {
                        console.log("IN SEARCH Small Data", data);
                        _this.customers1 = data;
                        console.log(_this.customers1.length);
                        console.log(_this.customers.length);
                        var j = _this.customers.length;
                        for (var i = 0; i < _this.customers1.length; i++) {
                            _this.customers[i + j] = _this.customers1[i];
                        }
                        _this.customerprovider.getCustomerAddressForSearch(Capital).subscribe(function (data) {
                            console.log("IN SEARCH Capital Data", data);
                            _this.customers1 = data;
                            console.log(_this.customers1.length);
                            console.log(_this.customers.length);
                            var j = _this.customers.length;
                            for (var i = 0; i < _this.customers1.length; i++) {
                                _this.customers[i + j] = _this.customers1[i];
                            }
                        }, function (err) {
                            console.log("%^%^%^%^%");
                            //console.error(err 
                        }, function () { return console.log('getDraftOrders completed'); });
                    }, function (err) {
                        console.log("%^%^%^%^%");
                        //console.error(err 
                    }, function () { return console.log('getDraftOrders completed'); });
                }, function (err) {
                    console.log("%^%^%^%^%");
                    //console.error(err 
                }, function () { return console.log('getDraftOrders completed'); });
            }
            else {
                this.customerprovider.getCustomerAddressForSearch(s).subscribe(function (data) {
                    console.log("IN SEARCH");
                    console.log(data);
                    _this.customers = data;
                    loading_1.dismiss();
                }, function (err) {
                    console.log("%^%^%^%^%");
                    //console.error(err 
                });
            }
        }
    };
    Customers.prototype.entrySelected = function (entry) {
        var _this = this;
        console.log("Entry", entry);
        var prompt = this.alert.create({
            title: entry.name,
            cssClass: 'accepted',
            enableBackdropDismiss: false,
            buttons: [{
                    text: 'OK',
                    cssClass: 'button1',
                    handler: function (data) {
                        _this.dismis();
                        //}
                    }
                }, {
                    text: 'Cancel',
                    cssClass: 'button1',
                    handler: function (data) {
                        console.log(data);
                    }
                }]
        });
        //this.nav.present(prompt);
        var set = this.customerprovider.setCustomerName(entry);
        this.dismis();
    };
    Customers.prototype.loadMore = function (event) {
        var _this = this;
        if (this.searchValue.length <= 0) {
            this.event = event;
            console.log("Evemt === ", this.event);
            var self = this;
            //this.start = this.end + 1;      **** IT SHOULD NOT USE BECOZ RECORDS WILL BE FROM 0 TO 9 ******
            this.start = this.end;
            this.end = this.end + 10;
            this.customerprovider.getBPlocationid(this.start, this.end).subscribe(function (data) {
                _this.load = data;
                if (_this.load.length == 0) {
                    console.log("gateEntries are empty");
                    _this.stop = true;
                }
                else {
                    console.log("Vendors LoadMore", data);
                    var j = _this.customers.length;
                    console.log("LOAD", _this.load);
                    console.log("LENGTH", _this.load.length);
                    for (var i = 0; i < _this.load.length; i++) {
                        _this.customers[j + i] = _this.load[i];
                    }
                    console.log("FULL", _this.customers);
                }
            }, function (err) {
                err.stacKTrace[2] = "OrderProvider :: getPendingPurchaseOrders ::";
                err.stackTrace[3] = "PO List :: loadOrders ::";
                //console.log(err);
            }, function () {
                //console.log('get PO Orders completed');
            });
            if (this.stop) {
                console.log("IT is stopped");
                event.enable(false);
            }
            else {
                console.log("IT is not stopped");
            }
            setTimeout(function () {
                event.complete();
                console.log('Async operation has ended');
            }, 1000);
        }
        else {
            //event.enable(false);
            setTimeout(function () {
                event.complete();
                console.log('Async operation has ended');
            }, 100);
        }
    };
    Customers = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/address/customers.html"*/'<ion-header>\n  <ion-navbar hideBackButton  no-padding color="primary">\n      <ion-title>Address List</ion-title>\n  <ion-buttons start>\n        <button ion-button clear (click)=\'dismis()\'>\n            <ion-icon style="font-size: 25px;margin-top: -25px;" name="close"></ion-icon>\n        </button>\n       \n    </ion-buttons>\n    <ion-title>\n       <!-- <ion-searchbar (ionInput)="getCustomer($event)"></ion-searchbar>\n     <ion-row> \n      <ion-col><ion-searchbar style="width: 200px;" (ionInput)="getCustomer($event)"></ion-searchbar> </ion-col>\n      <ion-col><button color="light" style="width:80px;height: 30px;font-size: 20px; margin-top: 10px" (click)="search()">Search</button></ion-col>\n      </ion-row> -->\n    </ion-title>\n       \n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <h6 style="margin-left:5px">Select an Address from below List(or)Add new Address</h6>\n    <ion-list >    \n        <button dark ion-item text-wrap detail-none *ngFor="let customer of customers" (click)="entrySelected(customer)">\n                {{customer.locationAddress$_identifier}}\n        </button>    \n    </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content  style="font-size: 20px"\n      loadingSpinner="bubbles"\n      loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-fab right bottom >\n    <button ion-fab [color]="buttonColor" (click)="gotoaddressscreen()"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/address/customers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_customer__["a" /* CustomerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Customers);
    return Customers;
}());

//# sourceMappingURL=customers.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Sales__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCartPage = (function () {
    function AddCartPage(navCtrl, viewCtrl, productsProvider, navpar, alert1, toast, salesprovider) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.productsProvider = productsProvider;
        this.alert1 = alert1;
        this.toast = toast;
        this.salesprovider = salesprovider;
        this.qty = 1;
        this.selectedProduct = {};
        this.medizoneitem = navpar.get("details");
    }
    AddCartPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddCartPage.prototype.addQty = function () {
        this.qty = this.qty + 1;
        console.log("addqty" + this.qty);
    };
    ;
    AddCartPage.prototype.removeQty = function () {
        if (this.qty > 1)
            this.qty = this.qty - 1;
        console.log("removeqty" + this.qty);
    };
    ;
    AddCartPage.prototype.addtocart = function () {
        var _this = this;
        var found = false;
        for (var i = 0; i < this.productsProvider.productList.length; i++) {
            if (this.productsProvider.productList[i].productname == this.medizoneitem.name) {
                found = true;
                break;
            }
        }
        if (found) {
            var alertBox = this.alert1.create({
                title: 'This product is already added to Cart.',
                cssClass: 'alertDanger',
                buttons: [{
                        text: 'OK',
                        handler: function (data) {
                            console.log('Ok clicked');
                        }
                    }], enableBackdropDismiss: false
            });
            alertBox.setCssClass('alertDanger');
            alertBox.present();
        }
        else {
            this.selectedProduct = {};
            this.selectedProduct.productid = this.medizoneitem.id;
            this.selectedProduct.productname = this.medizoneitem.name;
            this.selectedProduct.qty = this.qty;
            this.selectedProduct.price = this.medizoneitem.standardCost;
            this.selectedProduct.uOM = this.medizoneitem.uOM;
            this.salesprovider.getFinancialMgmtTaxRate(this.medizoneitem.taxCategory).subscribe(function (prodtaxrate) {
                _this.selectedProduct.tax = prodtaxrate[0].id;
            }, function (prodtaxrateErr) {
            });
            console.log("addtocart" + this.selectedProduct.qty + this.selectedProduct.qtyonhand);
            this.productsProvider.updateNewProductList(this.selectedProduct);
            console.log("addtocartlist" + this.productsProvider.productList);
            var alertBox = this.alert1.create({
                title: this.selectedProduct.productname + ' added successfully',
                cssClass: 'alertDanger',
                buttons: [{
                        text: 'OK',
                        handler: function (data) {
                            console.log('Ok clicked');
                        }
                    }], enableBackdropDismiss: false
            });
            alertBox.setCssClass('alertDanger');
            alertBox.present();
        }
    };
    AddCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart ',template:/*ion-inline-start:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/addtocartpopup/addcart.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Cart\n            <span float-right> \n                  <ion-icon name="md-close" class="close-icon" (click)="dismiss()"></ion-icon>          \n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="your-cart">\n        <ion-card>\n            <ion-card-content>\n                <ion-row>\n                    <ion-col col-3>\n                        <div class="img-box">\n                            <img [src]="medizoneitem.phPhoto">\n                        </div>\n                    </ion-col>\n                    <ion-col col-9>\n                        <h4>{{medizoneitem.name}}\n                            <!-- <ion-icon name="ios-trash-outline" class="icon text-light"></ion-icon> -->\n                            <p>Remove</p>\n                        </h4>\n                        <div class="rate">\n                            <div style="display: flex;" class="price-box">\n                                <div class="price text-sky" margin-right>\n                                    <img src="assets/imgs/rupee-thime.png" class="rupee-icon">{{medizoneitem.standardCost}}\n                                </div>\n                            </div>\n                            <!-- <div class="quantiy">\n                                <ion-item>\n                                    <ion-label>Quantiy</ion-label>\n                                    <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                                        <ion-option selected value="enable">1</ion-option>\n                                        <ion-option value="mute">2</ion-option>\n                                        <ion-option value="mute_week">3</ion-option>\n                                    </ion-select>\n                                </ion-item>\n                            </div> -->\n                            <div>\n                                <div class="quantiy" >\n                                        <button ion-button clear color=\'primary\' (click)="removeQty()" >\n                                           <ion-icon style="font-size: 25px;" primary name="remove-circle"></ion-icon>\n                                        </button>\n                                    </div>\n                       \n                                    <div class="quantiy">\n                                           <h6 style="padding: 6px 0px;width:20px;text-align:center;" >{{qty}}</h6>\n                                    </div>\n                       \n                                   <div class="quantiy">\n                                       <button ion-button clear color=\'primary\' (click)="addQty()">\n                                            <ion-icon style="font-size: 25px;"  name="add-circle"></ion-icon>\n                                       </button>\n                                   </div>             \n                         </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="checkout">\n                    <ion-col col-4>\n\n                    </ion-col>\n                    <ion-col col-4>\n                        <button ion-button full (click)="addtocart()" class="bg-thime btn-round btn-text   btn-shadow">Confirm</button>\n                    </ion-col>\n                    <ion-col col-4>\n                        <button ion-button full (click)="dismiss()" class="bg-thime btn-round btn-text   btn-shadow">Cancel</button>\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n\n        <!-- <ion-row class="checkout">\n            <ion-col col-6>\n                <h6 class="">\n                    Total <span>  \n                    <img src="assets/imgs/rupee-black.png">\n                    1260.00</span>\n                </h6>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button full class="bg-thime btn-round btn-text   btn-shadow">Proceed to Checkout</button>\n            </ion-col>\n        </ion-row> -->\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jani/Downloads/codecanyon-21640759-online-medicine-pharmaceutical-ecommerce-app-template-ionic-3-medizone/mediazonesrc29_9/src/pages/addtocartpopup/addcart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_product__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_Sales__["a" /* SalesProvider */]])
    ], AddCartPage);
    return AddCartPage;
}());

//# sourceMappingURL=addcart.js.map

/***/ })

},[247]);
//# sourceMappingURL=main.js.map