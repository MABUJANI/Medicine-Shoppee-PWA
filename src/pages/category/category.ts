import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { ProductsPage } from '../product.1/product2';

@Component({ 
  selector: 'page-category ',
  templateUrl: 'category.html'
})
export class CategoryPage {
 products: string = "otc";
  constructor(public navCtrl: NavController) {

  }
  
  productPage(){
    this.navCtrl.push(ProductsPage);
    }

}
