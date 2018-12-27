import { Component } from '@angular/core';
import { NavController, ViewController,NavParams,AlertController,ToastController} from 'ionic-angular';
import {ProductsProvider}                from     '../../providers/product';
import {SalesProvider}        from     '../../providers/Sales';

@Component({
  selector: 'page-cart ',
  templateUrl: 'addcart.html'
})
export class AddCartPage {
  public qty:any = 1;
  public selectedProduct:any = {};
  medizoneitem : any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    private productsProvider     :    ProductsProvider,navpar : NavParams,private alert1 : AlertController, private toast : ToastController
    ,private salesprovider       :    SalesProvider,

    ) {
      this.medizoneitem = navpar.get("details");

  }
  
  dismiss() {
    this.viewCtrl.dismiss();
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
              title: 'This product is already added to Cart.',
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
          }
      else{
      this.selectedProduct    =   {};
      this.selectedProduct.productid = this.medizoneitem.id;
      this.selectedProduct.productname = this.medizoneitem.name;
      this.selectedProduct.qty = this.qty;
      this.selectedProduct.price = this.medizoneitem.standardCost;
      this.selectedProduct.uOM    =   this.medizoneitem.uOM;
              this.salesprovider.getFinancialMgmtTaxRate(this.medizoneitem.taxCategory).subscribe(
                  prodtaxrate            =>  {
                      this.selectedProduct.tax    =   prodtaxrate[0].id;
                  },
                  prodtaxrateErr             =>  {
                  },
            ); 
              console.log("addtocart"+this.selectedProduct.qty+this.selectedProduct.qtyonhand);
              this.productsProvider.updateNewProductList(this.selectedProduct);
              console.log("addtocartlist"+this.productsProvider.productList);
                let alertBox = this.alert1.create({
                  title: this.selectedProduct.productname+' added successfully',
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
            }
    }

}
