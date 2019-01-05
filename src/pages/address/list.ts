import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {UtilityProvider}           from    '../../providers/utility';
import {UserProvider}           from    '../../providers/user';
import {CustomerProvider}           from    '../../providers/customer';
import {AddressPage} from '../address/address';
import { mobiscroll, MbscListviewOptions } from '@mobiscroll/angular';

// let formatDate = mobiscroll.util.datetime.formatDate,
//     now = formatDate('DD d hh:ii:ss A', new Date());
@Component({
  selector: 'page-address',
  templateUrl: 'list.html'
})
export class AddresslistPage {

  public buttonColor: string;

  private customer       :   any ={};
  public address:any = [];
  constructor(public navCtrl: NavController,
    private utilityprovider : UtilityProvider,
    private alert : AlertController,
    private customerprovider : CustomerProvider,
    private userprovider : UserProvider,) {

      this.customer.address1 = null;
      
      
  }
  someAction() {
    this.buttonColor = "#488aff";
}

  ionViewWillEnter() {
    this.utilityprovider.getBpLocation().subscribe(
      d => {
          console.log("====>orde",d);
          this.address = d;
      },
      err => {
          var l = err.stackTrace.length;
          //console.error(err);
          alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
      },
      () => {}
  );
  //this.utilityprovider.sendNotification(this.userprovider.fcmid);
  }

  gotoaddressscreen(){
    this.navCtrl.push(AddressPage);
  }
  

  
}
