import { NavController,Platform,LoadingController}    from    'ionic-angular';
import {ProductsProvider}                from     '../../providers/product';
import {Component} from '@angular/core';
import { ProductDetailsPage } from '../productspage/productdetails';

@Component({
  templateUrl: 'productslist.html', 
  selector: 'page-productspage',
})
export class ProductslisttPage {
   
    records =[];
    recordList  =[];
    private start = 0;
    private end = 10;
    private stop ;
    private event;
    constructor(private platform        :    Platform,
                private nav             :    NavController,
                private productsProvider      :    ProductsProvider,
                private loading : LoadingController) {
    
       // this.loadOrders();
       platform.ready().then(() => {        
            if (this.platform.is('cordova')) {
                // window.analytics.trackView("Gate Exit Page");
            }
        });
    }

    ionViewWillEnter() {
        this.records          =   [];
      
        this.start =0;
        this.end =20;
        this.stop = false;//this.event.enable(true);
        this.loadProducts();

    }
    refresh(){
        this.records          =   [];
        
        this.start =0;
        this.end =20;
        this.stop = false; //this.event.enable(true);
        this.loadProducts();
    }
   

    productSelcted(product){
       this.nav.push(ProductDetailsPage,{"selectedProduct":product});
     }

    loadProducts() {
        let loading = this.loading.create({
                      content: "Please Wait..",
                      
                      dismissOnPageChange: true
                });
               loading.present();
        this.productsProvider.getProducts(this.start,this.end).subscribe(
            productsResponse     => {
               
                console.log(productsResponse);
                    var j = 0;
                     for(var i=0; i < productsResponse.length;i++){
                         this.records[j]= productsResponse[i];
                         console.log(this.records[j]);
                         j++;
                     }
                     this.recordList= this.records;

              loading.dismiss();
               
            },
            err =>{
                loading.dismiss();
                console.log(err);
            },
            ()    => {
                console.log("Success");
            }

            );

    //this.newModule('New');
    }
     intilaizeRecords(){
      var self = this;
      self.records = self.recordList;
    }

    getRecords(actvty) {
         var self = this;
            
            self.intilaizeRecords();
            var val = actvty.target.value ;
            if(val && val.trim() != ''){
                 console.log(val);
                self.records = self.records.filter((item) => {
                    return ( (item._identifier.toLowerCase().indexOf(val.toLowerCase()) > -1 ));
                });
            }
    }
    loadMore(event){
      this.event = event;
        console.log("Evemt === ",this.event);
         var self = this;
        this.start= this.end;
        this.end = this.end+10;
                this.event = event;

         this.productsProvider.getProducts(this.start,this.end).subscribe(
                    productsResponse     => {

                if(productsResponse.length == 0){
                    this.stop = true
                }
                else {
                    var j = this.records.length;
                                    console.log(productsResponse);

                     for(var i=0; i < productsResponse.length;i++){
                         this.records[j]= productsResponse[i];
                         j++;
                     }
                }
               this.recordList= this.records;
                                           
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

}
