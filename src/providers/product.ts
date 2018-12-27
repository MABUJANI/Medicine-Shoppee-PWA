import {Injectable}             from    "@angular/core";
import {Component, Inject, forwardRef} from '@angular/core';
import {Observable}             from    "rxjs/Observable";
import {Observer}               from    "rxjs/Observer";
import                                  "rxjs/add/operator/map";
import                                  "rxjs/add/operator/share";
import {UtilityProvider}                 from    "./utility";
import {Config}                 from    './config';
import {UserProvider}           from    './user';
@Injectable()
export class ProductsProvider {
     employename : any;
     salesorderno : any;
     stackTrace = [];
     public productList:any = [];
     public productList1:any = [];
     presimage: any = null;
     public isShow = true;

    constructor(
       
        private utilityProvider : UtilityProvider,
        private config          :   Config,
        private userProvider    :   UserProvider     
       
        ) {
          this.productList           =   [];
          //this.productList1 = localStorage.getItem('productlist');      
          console.log("productlist",this.productList)
          this.presimage = "";
         }; 

      getProducts(start,end):any {
            let endPoint            =     'PricingProductPrice';
            let queryParams         =     "&_where=priceListVersion=%27FF2054857F134F30BF0D5EC71FB3998B%27&_selectedProperties=id,product,pricelist&_startRow="+start+"&_endRow="+end;
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getProductwithimages(category,start,end):any {
            let endPoint            =     'Product';
            let queryParams         =     "&_where=productCategory.name=%27"+category+"%27&_selectedProperties=id,name,phPhoto,uOM,taxCategory,standardCost,phPackage&_startRow="+start+"&_endRow="+end;
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getProductDetails(id):any {
            let endPoint            =     'PH_Product_Price_V';
            let queryParams         =     "&_where=id='"+id+"'";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);    
        }

        getProductImage(image):any {
            let endPoint            =     'ADImage';
            let queryParams         =     "&_where=id='"+image+"'";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);    
        }
    
        updateNewProductList(newProduct) {
            this.productList.push(newProduct);
            //this.productList=this.productList1
            //localStorage.setItem("productlist",this.productList1);
            if(this.productList.length > 0){
                this.isShow = true; 
            }
        }
        getProductsinstock(start,end):any {
            let endPoint            =     'MaterialMgmtStorageDetail';
            let queryParams         =     "&_where=quantityOnHand>0 and organization='"+this.userProvider.organization+"'&_selectedProperties=product,attributeSetValue,quantityOnHand&_startRow="+start+"&_endRow="+end;
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getProductNameForSearch(category,search){
            var utilityEndPoint ="Product";
            var condition = "active=true";
            
            var queryParams ="&_where=productCategory.name=%27"+category+"%27%20and%20name%20like%20%27%25" + search + "%25%27%20and%20" + condition+"&_selectedProperties=id,name,phPhoto,uOM,taxCategory,standardCost,phPackage";
           return this.utilityProvider.getOB3Object(utilityEndPoint,queryParams);
        }
        getProductwithMasterimages(start,end):any {
            let endPoint            =     'Product';
            let queryParams         =     "&_where=name=%27"+"%27&_selectedProperties=id,name,phPhoto,uOM,taxCategory,standardCost,phPackage&_startRow="+start+"&_endRow="+end;
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
        getProductNameForMasterSearch(search){
            var utilityEndPoint ="Product";
            var condition = "active=true";
            
            var queryParams ="&_where=name%20like%20%27%25" + search + "%25%27%20and%20" + condition+"&_selectedProperties=id,name,phPhoto,uOM,taxCategory,standardCost,phPackage";
           return this.utilityProvider.getOB3Object(utilityEndPoint,queryParams);
        }
    };
