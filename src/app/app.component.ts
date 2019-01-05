import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';
  import { HomePage } from '../pages/home/home';
  import { PhonenumberPage } from '../pages/phonenumber/phonenumber';
  import { CategoryPage } from '../pages/category/category';
  import { WishlistPage } from '../pages/wishlist/wishlist';
  import { My_accountPage } from '../pages/my_account/my_account';
  import { Myorder_1Page } from '../pages/myorder_1/myorder_1';  
  import { HelpPage } from '../pages/help/help';
  import { CartPage } from '../pages/cart/cart';
  import {AddresslistPage} from '../pages/address/list';
  import {ProductsPage} from '../pages/product.1/product2'
  //import { ReviewPage } from '../pages/review/review';
  //import { PerscriptionsPage } from '../pages/perscriptions/perscriptions';
  import { MedicinesPage } from '../pages/medicines/medicines';
// import {ProductsProvider} from '../pages/providers/product';
import { HTTP } from '@ionic-native/http';
import {IndentProvider}           from    '../providers/indent';
import {Config}                 from    '../providers/config';
 import {UserProvider}           from    '../providers/user';
 import {ProductsProvider}           from    '../providers/product';
 import {CustomerProvider}           from    '../providers/customer';
import {UtilityProvider}           from    '../providers/utility';
import {SalesProvider}           from    '../providers/Sales';
import { Http } from '@angular/http';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { listPage } from '../pages/My Orders/list';
import {AppUpdate} from '@ionic-native/app-update';
import {NewPage} from '../pages/new/new';
import { Content } from 'ionic-angular';
import { Market } from '@ionic-native/market';
import {UpdationPage} from '../pages/phonenumber/updation';
import { AppVersion } from '@ionic-native/app-version';
import { PrescriptionPage } from '../pages/prescription/prescription';
import {CallNumber} from '@ionic-native/call-number';
@Component({
  templateUrl: 'app.html',
  providers :[UserProvider,CustomerProvider,UtilityProvider,Market,AppVersion,ProductsProvider,SalesProvider,Config,IndentProvider,HTTP,PhotoViewer,File,FileTransfer,FilePath
    ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Content) content: Content;
  scrollToTop() {
    this.content.scrollToTop();
  }
  rootPage: any ;
  public updated :boolean;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private user    :   UserProvider,private productsprovider :   ProductsProvider,
    public statusBar: StatusBar, private headerColor: HeaderColor,public splashScreen: SplashScreen,private http:HTTP,private appUpdate: AppUpdate,
    private menuCtrl:MenuController,private conf:Config,private appversion : AppVersion) 
    {
    
   this.initializeApp();
  //   const updateUrl = 'https://play.google.com/store/apps/details?id=com.saksham.medicineshoppee';
  //  this.appUpdate.checkAppUpdate(updateUrl).then(() => { console.log('Update available') });  
  }
  initializeApp() {
    this.platform.ready().then(() => {


      var updatedURL = this.conf.apiBasePoint+"ADPreference?l=MobileApp&p=123456&_where=attribute=%27MobileVersion%27&_startRow=0&_endRow=10";
                let Version ="0.0";
                if (this.platform.is('cordova')) {
                    this.appversion.getVersionNumber().then((version) => {
                      console.log("vers"+version);
                      this.http.get(updatedURL,{},{})
                      .then(data => {
                        console.log(data.status);
                        console.log(data.data); // data received by server
                        console.log(data.headers);
          
                        let result = JSON.parse(data.data);
                        var uRespJson     =   result.response;
                    
                              if (uRespJson.status === 0) {
                                  var utilityData         =   uRespJson.data;
                                  Version = utilityData[0].searchKey;
          
                                  if(version == Version){
                                    this.updated = true;
                                 }
                                 else{
                                   this.updated = false;   
                                   this.rootPage = UpdationPage;
                                 }
                                 
                              } else {
                              
                                  let errO               =   uRespJson.error || uRespJson.errors;
                                  
                                }
                      })
                      .catch(error => {
                    
                        console.log(error.status);
                        console.log(error.error); // error message as string
                        console.log(error.headers);
                        console.log("error"+error);
                      }); 
                
                    });   
           }

      if(this.user.userid == null || this.user.userid == '')
      this.rootPage = PhonenumberPage;
       else
      this.rootPage = HomePage ;

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.statusBar.overlaysWebView(true);
      // this.statusBar.backgroundColorByHexString('#488aff');
      // this.headerColor.tint('#488aff');
  //     if(this.userProvider.userid == null || this.userProvider.userid == '')
  // this.rootPage = PhonenumberPage;
  // else
  // this.rootPage = MyApp ;
  
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
     console.log(this.user.userData);
     console.log("*********************************");
    this.user.signOut();
    this.productsprovider.productList=[];
    this.nav.setRoot(PhonenumberPage);
};

  
}
