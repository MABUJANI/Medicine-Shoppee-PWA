import {Platform}               from    'ionic-angular';

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { File ,InAppBrowser} from 'ionic-native';
import { Market } from '@ionic-native/market';
declare var cordova: any;
declare var cache : any;
@Component({
  templateUrl: 'updation.html'
})
export class UpdationPage {

   
      constructor(private platform: Platform, private navController: NavController,private market:Market) {
      	 platform.ready().then(() => {
              if (this.platform.is('cordova')) {
           //window.analytics.trackView("Updation Page");
               
           
         };
          });

         }
  launch() {
        this.platform.ready().then(() => {
         //window.localStorage.clear();
           //window.open('market://details?id=com.saksham.fortune', '_system');
           this.market.open('com.saksham.medicineshoppee');
        });
    }
   
}