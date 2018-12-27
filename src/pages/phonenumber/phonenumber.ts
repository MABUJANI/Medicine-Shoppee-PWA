import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, MenuController} from 'ionic-angular';

import { HomePage } from '../home/home';
import { PasswordPage } from '../password/password';
import {UserProvider}           from    '../../providers/user';
import { CreateaccountPage } from '../createaccount/createaccount';
import {ForgotPage} from '../Forgot/Forgot';
import {UtilityProvider} from '../../providers/utility';
@Component({
  selector: 'page-phonenumber ',
  templateUrl: 'phonenumber.html'
})
export class PhonenumberPage {
  
  wrongCredential             :   boolean;
  submitted                   :   boolean;
  
  public type = 'password';
  public showPass = false;

  constructor(public navCtrl: NavController,
    private userProvider    :   UserProvider,
    private loading :LoadingController,
    public menuCtrl:MenuController,public utilityProvider :UtilityProvider,
    ) {
      let self =   this;

      this.submitted          =   false;
      this.wrongCredential    =   false;
      this.menuCtrl.enable(false,"authenticated");
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
    homePage(){
    this.navCtrl.push(HomePage);
    }
    forgot(){
      this.navCtrl.push(ForgotPage);
    }
    passwordPage(){
    this.navCtrl.push(HomePage);
    }
    gohome(){
      this.navCtrl.push(CreateaccountPage);
  
    }
    SendMySMS()
    {
      let loading = this.loading.create({
        content: "Authenticating...",
      });
       loading.present();
    
    this.userProvider.isSignedIn().subscribe(
        userData        =>  {
            let USER = userData;
            
            var self = this;
            this.submitted          =   false;
            this.navCtrl.push(HomePage);
            loading.dismiss();
        },
        err             =>  {
            this.wrongCredential = true;
            loading.dismiss();
        },
        ()              =>  {
        }
    );
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
    
}
showPassword() {
  this.showPass = !this.showPass;

  if(this.showPass){
    this.type = 'text';
  } else {
    this.type = 'password';
  }
}
}

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



