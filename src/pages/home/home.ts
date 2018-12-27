import { Component } from '@angular/core';
import { NavController, ModalController,LoadingController,MenuController  } from 'ionic-angular';

import { CategoryPage } from '../category/category';
import { PerscriptionsPage } from '../perscriptions/perscriptions';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { UploadPage } from '../upload/upload';
import {ProductsPage} from '../product.1/product2';
import { ProductslisttPage } from '../productspage/productslist';
import {ProductsProvider}                from     '../../providers/product';
import {PaymenPage} from '../payment1/payment'
import { ProductsPage1 } from '../../pages/home/product3';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products: string = "nonprescriptions";
  medizoneitem : any= [];
  medizoneitem1 : any= [];
  medizoneitemList : any= [];
  private start = 0;
    private end = 10;
    private stop ;
    private carttotal;
    private event;
    public searchValue;
  constructor(public navCtrl: NavController,public menuCtrl:MenuController, public modalCtrl: ModalController,private productsProvider     :    ProductsProvider,private loading : LoadingController) {
    this.menuCtrl.enable(true,"authenticated");
  }
  
   slides = [
    {
      title: "20% Off",
      // description: "We ensure the lowest and best price for each medicine",     
      image: "assets/imgs/slide1.png",
    },
    {
      title: "20% Off",
    // description: "We ensure the lowest and best price for each medicine",     
      image: "assets/imgs/slide3.png",
    },
    {
      title: "20% Off",
      // description: "We ensure the lowest and best price for each medicine",     
      image: "assets/imgs/slide2.png",
    }
  ];
  
     homeicons = [
    {
      name: "Ayurveda",
      imag: "assets/imgs/ayurveda3.png",
      cat: "Ayurveda",
    },
    {
      name: "Diabetes",
      imag: "assets/imgs/c2.png",
      cat: "Diabetes",
    },
    {
      name: "Personal Care",
      imag: "assets/imgs/beauty2.png",
      cat: "Personal%20care",
    },
    {
      name: "Fitness",
      imag: "assets/imgs/c6.png",
      cat : "Fitness"
    },
    {
      name: "Health Conditions",
      imag: "assets/imgs/c5.png",
      cat : "Health%20Conditions"
    },
    {
      name: "Healthcare Devices",
      imag: "assets/imgs/device2.png",
      cat : "Healthcare%20Devices"
    },
    {
      name: "Homeopathy",
      imag: "assets/imgs/home7.png",
      cat: "Homeopathy",
    },
    {
      name: "Featured",
      imag: "assets/imgs/fe2.png",
      cat: "Featured",
    },
    // {
    //   name: "Other Products",
    //   imag: "assets/imgs/other2.png",
    //   cat: "Other%20Products",
    // }
  ];
    
   categoryPage(category){
    this.navCtrl.push(ProductsPage,{"category":category});
    }
    // diabaticsPage(){
    //   this.navCtrl.push(ProductsPage,{"category":"Ayurveda"});
    //   }
    perscriptionsPage(){
    this.navCtrl.push(PerscriptionsPage);
    }
    
    searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }

  mastersearch(){
    this.navCtrl.push(ProductsPage1);
  }
  
  cartPage() {
    //let modal = this.modalCtrl.create(CartPage);
    if(this.productsProvider.productList.length == 0 || this.productsProvider.productList == null)
        alert("Please Select atleast one product to go to Cart");
    else
        this.navCtrl.push(CartPage);
    //modal.present();
  }  
  
   uploadPage() {
    this.navCtrl.push(UploadPage);
  }
  ionViewWillEnter() {
    // this.menuCtrl.enable (true, 'myMenu');
    this.medizoneitem          =   [];
    this.start =0;
    this.end =20;   
    this.carttotal=this.productsProvider.productList.length;       
 
  
}
  

}
