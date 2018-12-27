import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SearchPage } from '../search/search';
//import { ProductPage } from '../product/product';
import { MedicinesPage } from '../medicines/medicines';

@Component({ 
  selector: 'page-perscriptions ',
  templateUrl: 'perscriptions.html'
})
export class PerscriptionsPage {
 products: string = "h";
  constructor(public navCtrl: NavController, public modalCtrl: ModalController){
  }
   searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
  //productPage(){
  //  this.navCtrl.push(ProductPage);
  //  }
    
     medicinesPage(){
    this.navCtrl.push(MedicinesPage);
    }

}
