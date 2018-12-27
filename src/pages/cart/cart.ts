import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {ProductsProvider}                from     '../../providers/product';
import {SalesProvider}                from     '../../providers/Sales';
import {ShippiningPage } from '../shippining/shippining';

@Component({
  selector: 'page-cart ',
  templateUrl: 'cart.html'
})

export class CartPage {
  public products:any         =   [];
  public carttotalamount;
  public carttotalamountwithdiscount;
  public discount: any ;
  private message : string = "";
  private promo : boolean = true;
  private msgcolor ;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    private productsProvider      :    ProductsProvider,
    private salesprovider      :    SalesProvider,
    ) {

  }
  ionViewWillEnter() {
    this.products = this.productsProvider.productList;
    console.log("productslenght"+this.products.length);
    this.cartTotal();
}

  cartTotal(){
    let prds = this.products;
    var total=0;
    for (var i = 0; i < prds.length ; i++) {
        total=total+prds[i].qty*prds[i].price;
        console.log(total);
    } 
    this.carttotalamount=(Math.round(total*100)/100).toFixed(2);   
    this.carttotalamountwithdiscount = this.carttotalamount ; 
  }

  addQty = function(index) {
    this.products[index].qty = this.products[index].qty +1;
    console.log("addqty"+this.products[index].qty);
    this.cartTotal();
  
};

shippage(){
  this.navCtrl.push(ShippiningPage);
}

removeQty = function(index) {
    if(this.products[index].qty>1)
    this.products[index].qty = this.products[index].qty -1;
    console.log("removeqty"+this.products[index].qty);
    this.cartTotal();
};


  deleteProduct = function(index) {
    this.products.splice(index, 1);
    this.cartTotal();
};

discountchange(discount){
    this.carttotalamount = this.carttotalamountwithdiscount - ((this.carttotalamountwithdiscount * discount)/100);
    this.carttotalamount =  (Math.round(this.carttotalamount*100)/100).toFixed(2);
    console.log("carttotalamount1"+this.carttotalamount);
};

applypromocode(){
  if(this.discount == "FIRST25")
  {
    if(this.carttotalamountwithdiscount < 100)
    {
          this.message = "Min Order value is 100 for this Promocode";
          this.promo = false;
          this.msgcolor = "#ff3300";
    }
   
    else{
  this.salesprovider.CheckFirstorderornot().subscribe(
    d => {
        console.log("====>orde",d);
        if(d.length == 0){
          this.message = "Hey, you got 25% discount on your Order";
          this.promo = false;
          this.msgcolor = "#028000";
          this.discountchange(25);
        }
       
        else{
          this.message = "You Already used this Promocode";
          this.promo = false;
          this.msgcolor = "#ff3300";
        }
    },
    err => {
        var l = err.stackTrace.length;
        //console.error(err);
        alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
    },
    () => {}
);
}
}
else if(this.discount == null)
{
if(this.carttotalamountwithdiscount < 100)
    {
          this.message = "Please enter a valid PromoCode";
          this.promo = false;
          this.msgcolor = "#ff3300";
    }
}
else{

if(this.carttotalamountwithdiscount < 100)
{
      this.message = "Please enter a valid PromoCode";
      this.promo = false;
      this.msgcolor = "#ff3300";
}

}
}

}
