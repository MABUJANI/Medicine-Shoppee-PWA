import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler} from 'ionic-angular';
import {IonicModule} from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Camera} from '@ionic-native/camera';
import {HttpClientModule, HttpClientJsonpModule, HttpClient} from '@angular/common/http';

import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Component, ViewChild } from '@angular/core';
import { HttpModule} from '@angular/http';
import { HTTP } from '@ionic-native/http';
// import {HttpClientModule, HttpClientJsonpModule, HttpClient} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PhonenumberPage } from '../pages/phonenumber/phonenumber';
import { PasswordPage } from '../pages/password/password';
import { VerificationPage } from '../pages/verification/verification';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { CategoryPage } from '../pages/category/category';
import { ItemdetailPage } from '../pages/itemdetail/itemdetail';
import { ShippiningPage } from '../pages/shippining/shippining';
import { PaymentPage } from '../pages/payment/payment';
import { PlacedPage } from '../pages/placed/placed';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { My_accountPage } from '../pages/my_account/my_account';
import { Myorder_1Page } from '../pages/myorder_1/myorder_1';
import { HelpPage } from '../pages/help/help';
import { CartPage } from '../pages/cart/cart';
import {ProductsPage} from '../pages/product.1/product2';
import { ReviewPage } from '../pages/review/review';
import { ShortPage } from '../pages/short/short';
import { SearchPage } from '../pages/search/search';
import { FilterPage } from '../pages/filter/filter';
import { PerscriptionsPage } from '../pages/perscriptions/perscriptions';
import { MedicinesPage } from '../pages/medicines/medicines';
import { ListPage } from '../pages/list/list';
import { LocationPage } from '../pages/location/location';
import { Myorder_2Page } from '../pages/myorder_2/myorder_2';
import { ShirtsPage } from '../pages/shirts/shirts';
import { UploadPage } from '../pages/upload/upload';
import { VegetablePage } from '../pages/vegetable/vegetable';
import {UpdationPage} from '../pages/phonenumber/updation';
import { Content } from 'ionic-angular';
import { App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ForgotPage} from '../pages/Forgot/Forgot';
import { ProductslisttPage } from '../pages/productspage/productslist';
import { ProductDetailsPage } from '../pages/productspage/productdetails';
import {OrderPage} from '../pages/order/order';
import {AddCartPage} from '../pages/addtocartpopup/addcart';
import {AddressPage} from '../pages/address/address';
import {AddresslistPage} from '../pages/address/list';
import { Customers } from '../pages/address/customers';
import { PaymenPage } from '../pages/payment1/payment';
import { listPage } from '../pages/My Orders/list';
import { HeaderColor } from '@ionic-native/header-color';
import { PrecPage} from '../pages/home/prec';
import {AppUpdate} from '@ionic-native/app-update';
import { ProductsPage1 } from '../pages/home/product3';
import { PrescriptionPage } from '../pages/prescription/prescription';
import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular-lite';
import {CallNumber} from '@ionic-native/call-number';
import { IonicImageViewerModule } from 'ionic-img-viewer';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhonenumberPage,
    PasswordPage,
    VerificationPage,
    CreateaccountPage,
    CategoryPage,
    ProductsPage,
    ItemdetailPage,
    ShippiningPage,
    PaymentPage,
	Myorder_2Page,
	ShirtsPage,
    PlacedPage,
	VegetablePage,
    WishlistPage,
    My_accountPage,
    Myorder_1Page,  
    HelpPage,
    CartPage,
    ReviewPage,
    ShortPage,
    SearchPage,
    FilterPage,
    PerscriptionsPage,
    MedicinesPage,
	ListPage,
	UploadPage,
    LocationPage,
    ProductDetailsPage,
    ProductslisttPage,
    OrderPage,
    AddCartPage,
    AddresslistPage,
    AddressPage,
    Customers,
    PaymenPage,
    listPage,
    ForgotPage,
    UpdationPage,
    UploadPage,
    PrecPage,
    ProductsPage1,
    PrescriptionPage,
    
    
    // ProductsProvider,
  ],
  imports: [
    BrowserModule,
    MbscModule,
    FormsModule,
    HttpModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   MyApp,
    HomePage,
    PhonenumberPage,
    PasswordPage,
    VerificationPage,
    CreateaccountPage,
    CategoryPage,
    ProductsPage,
    ItemdetailPage,
    ShippiningPage,
    PaymentPage,
	Myorder_2Page,
	ShirtsPage,
    PlacedPage,
	VegetablePage,
    WishlistPage,
    My_accountPage,
    Myorder_1Page,  
    HelpPage,
    CartPage,
    ReviewPage,
    ShortPage,
    SearchPage,
    FilterPage,
    PerscriptionsPage,
    MedicinesPage,
	ListPage,
	UploadPage,
    LocationPage,
    ProductDetailsPage,
    ProductslisttPage,
    OrderPage,
    AddCartPage,
    AddresslistPage,
    AddressPage,
    Customers,
    PaymenPage,
    listPage,
    ForgotPage,
    UpdationPage,
    UploadPage,
    PrecPage,
    ProductsPage1,
    PrescriptionPage,
    
    // ProductsProvider,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HeaderColor,
    Camera,
    CallNumber,
    TextToSpeech,
    AppUpdate,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
