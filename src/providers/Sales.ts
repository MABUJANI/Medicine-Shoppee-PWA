import {Injectable}             from    "@angular/core";
import {Component, Inject, forwardRef} from '@angular/core';
import {Observable}             from    "rxjs/Observable";
import {Observer}               from    "rxjs/Observer";
import                                  "rxjs/add/operator/map";
import                                  "rxjs/add/operator/share";
import {UtilityProvider}                 from    "./utility";
import {Config}                 from    './config';
import {UserProvider}           from    './user';
import {ProductsProvider}           from    './product';

@Injectable()
export class SalesProvider {

    constructor(
       
        private utilityProvider : UtilityProvider,
        private config          :   Config,
        private userProvider    :   UserProvider,     
        private prodProvider    :   ProductsProvider     
        ) {
         }; 


         createDraftOrder(bp)    :   any {
            var quotData:any        =   {
                data                :   {
            }};
    
            quotData.data.entityName            =   "Order";
            quotData.data.active                =   true;
            quotData.data.salesTransaction      =   true;
            quotData.data.documentType          =   "CB6EEA256BBC41109911215C5A14D39B";
            quotData.data.transactionDocument   =   "CB6EEA256BBC41109911215C5A14D39B";   //transaction Document
            quotData.data.orderDate             =   new Date();
            quotData.data.scheduledDeliveryDate             =   new Date();
            quotData.data.accountingDate        =   new Date();
            quotData.data.currency              =   "304";
            quotData.data.businessPartner       =   this.userProvider.bpartner;
            quotData.data.partnerAddress        =   bp.bplocationid;
            quotData.data.invoiceAddress        =   bp.bplocationid;
            quotData.data.organization          =   this.userProvider.organization;
            quotData.data.warehouse             =   bp.warehouse;
            quotData.data.priceList             =   "ACAAE336CE52467D842FF50E89C84E69";
            quotData.data.paymentMethod         =   "505CCA3C05174D94BF5E70CE83A48230";
            quotData.data.invoiceTerms          =   "I";
            quotData.data.paymentTerms          =   "C03AED23DB8A4F74AF34255FCEA23FCF";

            console.log(quotData);
            return this.utilityProvider.postOB3Object("Order",quotData);
        }

        createOrderLinesInOrder(bp,orderid,discount){
    
            let endPoint            =   'OrderLine';
    
            var orderData 			= 	{
                data				: 	[]
            };
            var count=1;
    
            for(var i = 0; i < this.prodProvider.productList.length; i++) {
                //console.log(order);
                let dat:any         =   {};
    
                dat._entityName     =   "OrderLine";
                dat.active          =   true;
                dat.salesOrder      =   orderid;
                dat.orderDate       =   new Date();
                dat.lineNo          =   count * 10;
                count++;           
                dat.currency        =   "304";
                dat.businessPartner =   this.userProvider.bpartner;
                dat.partnerAddress  =   bp.bplocationid;
                if(discount == null || discount == '') {
                dat.discount        =   0;
                dat.unitPrice       =   this.prodProvider.productList[i].price;    
                dat.listPrice       =   this.prodProvider.productList[i].price;
                dat.grossUnitPrice  =   this.prodProvider.productList[i].price;
                dat.grossListPrice  =   this.prodProvider.productList[i].price;
                }
                else{
                dat.discount        =   parseInt(discount);
                dat.unitPrice       =   this.prodProvider.productList[i].price-((this.prodProvider.productList[i].price*discount)/100);    
                dat.listPrice       =   this.prodProvider.productList[i].price-((this.prodProvider.productList[i].price*discount)/100);
                dat.grossUnitPrice  =   this.prodProvider.productList[i].price-((this.prodProvider.productList[i].price*discount)/100);
                dat.grossListPrice  =   this.prodProvider.productList[i].price-((this.prodProvider.productList[i].price*discount)/100);
                }
                dat.organization    =   this.userProvider.organization;
                dat.warehouse       =   bp.warehouse;           
                dat.product         =   this.prodProvider.productList[i].productid;
                dat.orderedQuantity =   parseInt(this.prodProvider.productList[i].qty);
                dat.uOM             =   this.prodProvider.productList[i].uOM;
                dat.tax             =   this.prodProvider.productList[i].tax;

                orderData.data.push(dat);
            }
            //console.log(orderData);
          
            return                      this.utilityProvider.postOB3Object(endPoint, orderData);
    
        }


        getProductDetails(prodID):any {

            let endPoint            =   'Product';
            let queryParams         =   "&_selectedProperties=id,uOM,name,taxCategory&_where=id='" + prodID+"'";

            return                      this.utilityProvider.getOB3Object(endPoint, queryParams);
        }
    
        getFinancialMgmtTaxRate(taxcateg):any {

            let endPoint            =   'FinancialMgmtTaxRate';
            let queryParams         =   "&_where=taxCategory='"+taxcateg+"'&_selectedProperties=id,taxCategory"; // and taxCategory='"+taxcateg+"'"
            
            return                      this.utilityProvider.getOB3Object(endPoint, queryParams);
        }

        getBatchnoforProduct(prodid):any {

            let endPoint            =   'AI_ProductPrice';
            let queryParams         =   "&_where=product='"+prodid+"'&_selectedProperties=product,attributeSetValue,mRPPerUnitExTax";
            
            return                      this.utilityProvider.getOB3Object(endPoint, queryParams);
        }
        getmyOrders(start,end):any {

            let endPoint            =   'Order';
            let queryParams         =   "&_where=createdBy='"+this.userProvider.userid+"'&_selectedProperties=id,businessPartner,documentNo,orderDate,grandTotalAmount,creationDate&_startRow="+start+"&_endRow="+end; // and taxCategory='"+taxcateg+"'"
            
            return                      this.utilityProvider.getOB3Object(endPoint, queryParams);
        }

        getmyOrderlines(orderid):any {

            let endPoint            =   'OrderLine';
            let queryParams         =   "&_where=salesOrder='"+orderid+"'&_selectedProperties=id,product,orderedQuantity,unitPrice";
            
            return                      this.utilityProvider.getOB3Object(endPoint, queryParams);
        }

        getOrderlines(orderid):any {

            let endPoint            =   'OrderLine';
            let queryParams         =   "&_where=salesOrder='"+orderid+"'";
            
            return                      this.utilityProvider.getOB3Object(endPoint, queryParams);
        }

        getProductmrp(product):any {

            let endPoint            =   'PricingProductPrice';
            let queryParams         =   "&_where=product='"+product+"'";
            
            return                      this.utilityProvider.getOB3Object(endPoint, queryParams);
        }

        CheckFirstorderornot():any {
            let endPoint            =   'Order';
            let queryParams         =   "&_where=businessPartner='"+this.userProvider.bpartner+"'%20and%20documentStatus=%27CO%27&_selectedProperties=id";
            
            return                      this.utilityProvider.getOB3Object(endPoint, queryParams);
        }

        Ordercomplete(orderid):any {
            var quotData:any        =    {
                data                :{}    
            };
            quotData.data.MinoutID                 =    "";
            quotData.data.OrderID                  =   orderid;
            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.uploadfile.processGRNorOrder",quotData);     
        }

        downloadinvoice(orderid):any {
            var quotData:any        =    {
                data                :{}    
            };

            quotData.data.cOrderId                  =   orderid;
            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.uploadfile.PrintSalesInvoice",quotData);     
        }
    }