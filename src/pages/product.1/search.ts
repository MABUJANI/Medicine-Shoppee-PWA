// import { Component } from '@angular/core';
// import { NavController, ViewController } from 'ionic-angular';
import { Component,ViewChild } from '@angular/core';
import { NavController, ModalController,LoadingController, NavParams, MenuController,ViewController } from 'ionic-angular';
import {ProductsProvider}                from     '../../providers/product';
import { ShortPage } from '../short/short';
import { CartPage } from '../cart/cart';
import { FilterPage } from '../filter/filter';
import { CategoryPage } from '../category/category';
import {ItemdetailPage} from '../itemdetail/itemdetail';
import {AddCartPage} from '../addtocartpopup/addcart';
import { Content } from 'ionic-angular';
import {UploadPage} from '../../pages/upload/upload';

@Component({
  selector: 'page-search ',
  templateUrl: 'search.html'
})
export class SearchPage {

  medizoneitem : any= [];
  medizoneitem1 : any= [];
  medizoneitemList : any= [];
  private start = 0;
    private end = 10;
    private stop ;
    private carttotal;
    private event;
    public searchValue;
    category : string;
    category1:string;


  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController, private navpar : NavParams,
    private productsProvider     :    ProductsProvider, private loading : LoadingController,public menuCtrl:MenuController,) {

  }
   dismiss() {
    this.viewCtrl.dismiss();
  }
  getRecords(actvty) {
    console.log("Search Value");
    console.log(actvty.target.value);
    this.intilaizeRecords();
    var val = actvty.target.value;
    this.searchValue = val;
    if(val == ''){
          console.log("Empty");
          this.medizoneitem = this.medizoneitemList;
                     
     }else if(val.length >= 4){
        this.search();
     }
}
intilaizeRecords(){
  var self = this;
  self.medizoneitem = self.medizoneitemList;
}
loadMore(event){
  this.event = event;
    console.log("Evemt === ",this.event);
     var self = this;
    this.start= this.end;
    this.end = this.end+10;
            this.event = event;

            this.productsProvider.getProductwithimages(this.category,this.start,this.end).subscribe(
              productsResponse     => {

            if(productsResponse.length == 0){
                this.stop = true
            }
            else {
                var j = this.medizoneitem.length;
                                console.log(productsResponse);

                 for(var i=0; i < productsResponse.length;i++){
                     this.medizoneitem[j]= productsResponse[i];
                     j++;
                 }
            }
           this.medizoneitemList= this.medizoneitem;           
        },
        err =>{
            console.log(err);

        },
        ()    => {
            console.log("Success");
        }

        );


    if(this.stop){
        console.log("IT is stopped");
        //event.enable(false);
    }
    else{
        console.log("IT is not stopped");
    }
    setTimeout(() => {
        event.complete();
  console.log('Async operation has ended');
  
}, 500);
    
}
  search(){
    console.log("Value in search",this.searchValue);
    console.log("Charecter in search",this.searchValue.charAt(0));
    var val = this.searchValue;
    var charecter = this.searchValue.charAt(0);
    console.log("Charecter",charecter);
    var upper = charecter.toUpperCase();
    var lower = charecter.toLowerCase();
    console.log("LOWER",lower);
    console.log("Upper",upper);
    var s = this.searchValue;
    
    if(lower == charecter){
      s= s.replace(s.charAt(0),upper);
    
    }
    console.log("SSSSSS",s);
    var Capital = this.searchValue.toUpperCase();
    var Small = this.searchValue.toLowerCase();
    console.log("Capital",Capital);
    console.log("Small",Small);
     if(val == ''){
          console.log("Empty");
          this.medizoneitem = this.medizoneitemList;
        }
        else{
          let loading = this.loading.create({
              content: "Please Wait..",
              //spinner: 'hide',
              //dismissOnPageChange: true
            });
      loading.present();
           this.productsProvider.getProductNameForSearch(this.category,s).subscribe(
             data => {
                        console.log("IN SEARCH");
                        console.log(data);
                          
                          this.medizoneitem = data;
                      
                      loading.dismiss();
                      this.productsProvider.getProductNameForSearch(this.category,Small).subscribe(
                           data => {
                                      console.log("IN SEARCH Small Data",data);
                                      this.medizoneitem1 = data;
                                      console.log(this.medizoneitem1.length);
                                      console.log(this.medizoneitem.length);
                                      var j = this.medizoneitem.length;
                                      for(var i=0;i<this.medizoneitem1.length;i++){
                                        this.medizoneitem[i+j] = this.medizoneitem1[i];
                                       }
                                    this.productsProvider.getProductNameForSearch(this.category,Capital).subscribe(
                                               data => {
                                                          console.log("IN SEARCH Capital Data",data);
                                                          this.medizoneitem1 = data;
                                                          console.log(this.medizoneitem1.length);
                                                          console.log(this.medizoneitem1.length);
                                                          var j = this.medizoneitem.length;
                                                          for(var i=0;i<this.medizoneitem1.length;i++){
                                                            this.medizoneitem[i+j] = this.medizoneitem1[i];
                                                           }
                                                       
                                                          },
                                                          
                                                      err => {
                                                          console.log("%^%^%^%^%");
                                                          //console.error(err 
                                                      },
                                                          () => console.log('getDraftOrders completed')
                                                      );
                                      },
                                      
                                  err => {
                                      console.log("%^%^%^%^%");
                                      //console.error(err 
                                  },
                                      () => console.log('getDraftOrders completed')
                                  );
                      
                        },
                    err => {
                        console.log("%^%^%^%^%");
                        //console.error(err 
                    },
                        () => console.log('getDraftOrders completed')
                    );
         } 
  }
}
