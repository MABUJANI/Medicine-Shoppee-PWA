import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { CallNumber } from '@ionic-native/call-number';
@Component({
  selector: 'page-help ',
  templateUrl: 'help.html'
})
export class HelpPage {

  constructor(public navCtrl: NavController, public call:CallNumber,public modalCtrl: ModalController) {

  }

     cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }
  phonecall(){
    this.call.callNumber("9353456789", true)
.then(res => console.log('Launched dialer!', res))
.catch(err => console.log('Error launching dialer', err));
  }
  
     searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }


}
