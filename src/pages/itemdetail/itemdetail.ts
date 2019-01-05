import { Component } from '@angular/core';
import { NavController, ModalController,NavParams,LoadingController,AlertController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { ShippiningPage } from '../shippining/shippining';
import { ReviewPage } from '../review/review';
import {ProductsProvider}                from     '../../providers/product';
import { ShortPage } from '../short/short';
import {SalesProvider}        from     '../../providers/Sales';

import { FilterPage } from '../filter/filter';
import { CategoryPage } from '../category/category';
import { WishlistPage } from '../wishlist/wishlist';
@Component({
  selector: 'page-itemdetail ',
  templateUrl: 'itemdetail.html'
})
export class ItemdetailPage {

  medizoneitem : any;
  medizoneitem1 : any= [];
  medizoneitemList : any= [];
  private start = 0;
    private end = 10;
    private stop ;
    private carttotal;
    private event;
    text: string;
  rate: number;
  locale: string;
    public searchValue;
    category : string;
    category1:string;
    public qty:any = 1;
    public selectedProduct:any = {};
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private salesprovider  : SalesProvider,
    private navpar : NavParams,private productsProvider     :    ProductsProvider,private loading : LoadingController,
    private alert1: AlertController,private tts: TextToSpeech) {
   {
    this.category = navpar.get("category");
    this.medizoneitem = navpar.get("details");
    this.text = 'itemdetail.html';
    this.rate = 1;
    this.locale = 'en-US';
  }
  
  }

  ionViewWillEnter() {
    // this.menuCtrl.enable (true, 'myMenu');
    this.carttotal=this.productsProvider.productList.length;       
   
}
  searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
   shippiningPage() {
    this.addtocart();
    this.navCtrl.push(ShippiningPage);
  }
  
    cartPage() {
    //let modal = this.modalCtrl.create(CartPage);
    if(this.productsProvider.productList.length == 0 || this.productsProvider.productList == null)
        alert("Please Select atleast one product to go to Cart.");
    else
        this.navCtrl.push(CartPage);
    //modal.present();
  }
  // txtspeech(){
  //   this.tts.speak({
  //     text: this.text,
  //     rate: this.rate / 10,
  //     locale: this.locale
  //   })
  //     .then(() => console.log('Success'))
  //     .catch((reason: any) => console.log(reason));
  
  // }

    reviewPage() {
    this.navCtrl.push(ReviewPage);
  }

wish(){
    alert("You clicked");
    this.navCtrl.push(WishlistPage);
}


  
addQty() {
    this.qty = this.qty +1;
    console.log("addqty"+this.qty);
};

removeQty() {
    if(this.qty>1)
    this.qty = this.qty -1;
    console.log("removeqty"+this.qty);
};

addtocart() {
  var found = false;
  for(var i = 0; i < this.productsProvider.productList.length; i++) {
      if (this.productsProvider.productList[i].productname == this.medizoneitem.name) {
          found = true;
          break;
      }
  }
   if(found){
      let alertBox = this.alert1.create({
          title: 'Alert',
          subTitle:'This Product is already added to Cart.',
          cssClass : 'alertcss' ,
          buttons: [{
            text: 'OK',
            // cssClass : 'alertcss' ,
            handler: data => {
                console.log('Ok clicked');
            }
        }],enableBackdropDismiss: false 
          });
        alertBox.setCssClass('alertcss');
        alertBox.present();
      }
  else{
  this.selectedProduct    =   {};
  this.selectedProduct.productid = this.medizoneitem.id;
  this.selectedProduct.productname = this.medizoneitem.name;
  this.selectedProduct.qty = this.qty;
  this.selectedProduct.price = this.medizoneitem.standardCost;
  this.selectedProduct.uOM    =   this.medizoneitem.uOM;
  this.selectedProduct.photo    =   this.medizoneitem.phPhoto;
          this.salesprovider.getFinancialMgmtTaxRate(this.medizoneitem.taxCategory).subscribe(
              prodtaxrate            =>  {
                  this.selectedProduct.tax    =   prodtaxrate[0].id;
              },
              prodtaxrateErr             =>  {
              },
        ); 
          console.log("addtocart"+this.selectedProduct.qty);
          this.productsProvider.updateNewProductList(this.selectedProduct);
          console.log("addtocartlist"+this.productsProvider.productList);
            let alertBox = this.alert1.create({
              title: 'Cart Alert',
              subTitle:this.selectedProduct.productname+' added successfully',
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
            this.carttotal=this.productsProvider.productList.length;       
        }
}

}
  






 
  
 