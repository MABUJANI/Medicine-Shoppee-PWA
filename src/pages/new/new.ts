import {Component,ViewChild} from '@angular/core';
import {NavController,LoadingController,ModalController} from 'ionic-angular';
import {Platform}               from    'ionic-angular';
import {Nav   }             from    'ionic-angular';

import {HomePage}              from    '../home/home';
import {CustomerlisttPage}              from    '../customerpage/customerlist';
import { StatusBar, Splashscreen } from 'ionic-native';
import { listPage } from '../My Orders/list';

import {Config}                 from    '../../providers/config';
import {UserProvider}           from    '../../providers/user';
import { PhonenumberPage } from '../pages/phonenumber/phonenumber';
import { CategoryPage } from '../pages/category/category';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { My_accountPage } from '../pages/my_account/my_account';
import { Myorder_1Page } from '../pages/myorder_1/myorder_1';  
import { HelpPage } from '../pages/help/help';
import {AddresslistPage} from '../pages/address/list';
import { PreviousPage } from '../previous/previous';
import{PendingPage} from '../pending/pending';
import{PrescriptionPage} from '../prescription/prescription';
import{UploadprecPage} from '../uploadprec/uploadprec';
import{LogoutPage}from '../logout/logout';
//import{SignupPage}from '../signup/signup';
import{IndenttotorderOverviewPage}from '../indent/indenttotorderoverview';
import{CartPage}from '../cart/cart';
import { SalesPage } from '../salespage/salespage';
import { UploadPage } from '../upload/upload';
import {ProductsProvider}           from    '../../providers/product';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
   @ViewChild(Nav) nav: Nav;
  rootPage: any = UploadprecPage;
    pages: Array<{title: string, component: any, icon: string}>;
    
  constructor(private platform : Platform,
  			  private navc: NavController,
  			  private config:Config,
                private userProvider    :   UserProvider,
                private productsprovider :   ProductsProvider,
              private loading :LoadingController,
              private modal :ModalController) {
  
   this.initializeApp();

  }
  
initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }


   
        myorder_1Page() {
        this.nav.setRoot(Myorder_1Page);
      }
      
      
      my_accountPage() {
        this.nav.setRoot(My_accountPage);
      }
      
       categoryPage() {
        this.nav.setRoot(CategoryPage);
      }
      
       homePage() {
        this.nav.setRoot(HomePage);
      }
      addresspage() {
        this.nav.setRoot(AddresslistPage);
      }
      prescriptionPage(){
        this.nav.setRoot(PrescriptionPage);
      }
    
      wishlistPage() {
        this.nav.setRoot(WishlistPage);
      }
      
      cartPage() {
        this.nav.setRoot(CartPage);
      }
      
      helpPage() {
        this.nav.setRoot(HelpPage);
      }
      
      phonenumberPage() {
        this.nav.setRoot(PhonenumberPage);
      }
    
      myorderPage(){
        this.nav.setRoot(listPage);
      }
      
    
      signOut() {
        var self                =   this;
        // this.logData.logLevel = "info";
        // this.logData.logMessage = "HomePage :: signOut";
        //console.log('HomePage :: signOut');
        console.log("******************************");
         console.log(this.userProvider.userData);
         console.log("*********************************");
        this.userProvider.signOut();
        this.productsprovider.productList=[];
        this.nav.setRoot(PhonenumberPage);
    };
    
}
