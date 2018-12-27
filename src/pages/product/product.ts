// import { Component } from '@angular/core';
// import { NavController, ModalController, NavParams } from 'ionic-angular';
// import {ProductsProvider}  from '../../providers/product';
// import { HttpModule,Http} from '@angular/http';
// import { ShortPage } from '../short/short';
// import { CartPage } from '../cart/cart';
// import { FilterPage } from '../filter/filter';
// @Component({
//   selector: 'page-product ',
//   templateUrl: 'product.html',
//   providers :[Http]
// })
// export class SamplePage {

//   medizoneitem : any= [];
//   private start = 0;
//     private end = 10;
//   constructor(public navCtrl: NavController, public modalCtrl: ModalController,
//     private productsProvider     :    ProductsProvider,public navparams:NavParams,
//     ) {

//   }
  
//   ionViewWillEnter() {
//     this.medizoneitem          =   [];
  
//     this.start =0;
//     this.end =20;
//     this.loadProducts();
// }
  
// loadProducts() {
//   this.productsProvider.getProductwithimages("Ayurveda",this.start,this.end).subscribe(
//       productsResponse     => {
         
//           console.log(productsResponse);
//               var j = 0;
//                for(var i=0; i < productsResponse.length;i++){
//                    this.medizoneitem[j]= productsResponse[i];
//                    console.log(this.medizoneitem[j]);
//                    j++;
//                }
//       },
//       err =>{
//           console.log(err);
//       },
//       ()    => {
//           console.log("Success");
//       }
//       );
//     }


//   shortPage() {
//     let modal = this.modalCtrl.create(ShortPage);
//     modal.present();
    
//   }
          
//     filterPage() {
//       let modal = this.modalCtrl.create(FilterPage);
//       modal.present();
//   }
  
//   searchPage() {
   
//   }
  
//   cartPage() {
    
//   }
 
//   itemdetailPage() {
//   }
// }
