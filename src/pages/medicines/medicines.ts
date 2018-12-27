import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { ProductsPage } from '../product.1/product2';

@Component({ 
  selector: 'page-medicines ',
  templateUrl: 'medicines.html'
})
export class MedicinesPage {
 products: string = "h";
  constructor(public navCtrl: NavController, public modalCtrl: ModalController){
  }
   searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
  productPage(){
    this.navCtrl.push(ProductsPage);
    }

}
