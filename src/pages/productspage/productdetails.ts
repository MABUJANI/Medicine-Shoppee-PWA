import { NavController,Platform,LoadingController,NavParams}    from    'ionic-angular';
import {ProductsProvider}                from     '../../providers/product';
import {SalesProvider}                from     '../../providers/Sales';
import {Component} from '@angular/core';
// import { Camera } from '@ionic-native/camera';
@Component({
  templateUrl: 'productdetails.html', 
  selector: 'page-productdetailspage',
})
export class ProductDetailsPage {
    public productselected:any         =   {};
    public productdetails:any         =   {};
    public productimage:any          =   {};
    public batch : string ;
    public batchitems:any          =   [];


    constructor(private platform        :    Platform,
                private nav             :    NavController,
                private navParams : NavParams,
                private productsProvider      :    ProductsProvider,
                private salesprovider      :    SalesProvider,
                private loading : LoadingController,) {
    
      this.productselected = navParams.get("selectedProduct");

       platform.ready().then(() => {        
            if (this.platform.is('cordova')) {
                // window.analytics.trackView("Gate Exit Page");
            }
        });
    }

    ionViewWillEnter() {
        this.productsProvider.getProductDetails(this.productselected.id).subscribe(
            productsResponse     => {
                this.productdetails = productsResponse[0];
                console.log(productsResponse);

                this.productsProvider.getProductImage(this.productdetails.image).subscribe(
                    productimageResponse     => {
                        this.productimage = "data:image/jpeg;base64,"+ productimageResponse[0].bindaryData;
                        console.log(this.productimage);
        
                    },
                    err =>{
                        console.log(err);
                    },
                    ()    => {
                        console.log("Success");
                    }
        
                  );  
            },
            err =>{
                console.log(err);
            },
            ()    => {
                console.log("Success");
            }

            );  

            this.salesprovider.getBatchnoforProduct(this.productselected.id).subscribe(
                batchno => {
                    this.batchitems = batchno ;
                   /* this.batch = "";
                    for(var i=0;i< batchno.length;i++){
                        this.batch +=  batchno[i].attributeSetValue$_identifier + ",";
                        console.log(batchno[i].attributeSetValue$_identifier);
                    }
                    console.log(this.batch);    
                    this.batch = Array.from(new Set(this.batch.split(','))).toString(); */
                },
                batchnoerr => {        
                },
            );   

    }

    refresh(){   
    }
    
    
}
