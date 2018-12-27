import { Component } from '@angular/core';
import { NavController, ModalController,AlertController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import {UserProvider}           from    '../../providers/user';
import {CustomerProvider}           from    '../../providers/customer';
import {UtilityProvider}           from    '../../providers/utility';
import { Customers } from '../address/customers';

@Component({
  selector: 'page-my_account ',
  templateUrl: 'my_account.html'
})
export class My_accountPage {
  private customer       :   any ={};
  public state:any = [];
  public address:any = [];
 account: string = "profile";
 constructor(public navCtrl: NavController, public modalCtrl: ModalController,
  private utilityprovider : UtilityProvider,
    private alert : AlertController,
    private customerprovider : CustomerProvider,
    private userprovider : UserProvider)  {

      this.customer.address1 = null;
      this.customer.address2 = null;
      this.customer.pincode = null;
      this.customer.state = null;
      this.customer.statename = null;
      this.customer.city = null;
  }
  
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerpagePage');
    this.utilityprovider.getRegions().subscribe(
      d => {
          console.log("====>orde",d);
          this.state = d;
      },
      err => {
          var l = err.stackTrace.length;
          //console.error(err);
          alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
      },
      () => {}
  );
  this.utilityprovider.getBpLocation().subscribe(
    d => {
        console.log("====>orde",d);
        this.address = d[0];
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

  refresh(){
    this.customer.address1 = null;
    this.customer.address2 = null;
    this.customer.pincode = null;
    this.customer.city = null;
  }

  addAddress(){
  if(this.customer.state == null || this.customer.state == ''){
    alert("Enter State");
  }else if(this.customer.city == null || this.customer.city == ''){
    alert("Enter City");
  }else{
    if(this.customer.address1 == null || this.customer.address1 == '')
        this.customer.address1 == "***"
    if(this.customer.address2 == null || this.customer.address2 == '')
      this.customer.address2 == "***"
    if(this.customer.pincode == null || this.customer.pincode == '')
      this.customer.pincode == "***"
    let alertBox = this.alert.create({
      title: 'Customer Address Confirmation',
      buttons: [
              {
                  text: 'Cancel',
                  handler: data => {
                      console.log('Cancel clicked');
                  }
              },
              {
                  text: 'Save',
                  handler: data => {
                      console.log('Saved clicked');
                      
                          this.customerprovider.createCustomerAddress(this.customer,this.userprovider.bpartner).subscribe(
                            customeraddressres => {
                              console.log("succes in customeraddress creation"+customeraddressres);
                              let alertBox = this.alert.create({
                                title: ' Customer Address Created Successfully',
                                cssClass : 'alertDanger' ,
                                buttons: [{
                                  text: 'OK',
                                  handler: data => {
                                      console.log('Ok clicked');
                                  }
                              }],enableBackdropDismiss: false 
                                });
                              alertBox.setCssClass('alertDanger');
                              alertBox.present();
                            },
                            customeraddresserror => {
                              console.log("error in customeraddress creation"+customeraddresserror);
                            }
                          )
                    }
      }
      ]
      });
    alertBox.present();
    }
  }

  searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  proaddr()
  {
    this.navCtrl.push(Customers);
  }
  
    cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }


}
