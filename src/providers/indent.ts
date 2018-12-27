import {Injectable}             from    "@angular/core";
import {Http, Headers}          from    "@angular/http";
import {Component, Inject, forwardRef} from '@angular/core';
import {Observable}             from    "rxjs/Observable";
import {Observer}               from    "rxjs/Observer";
import                                  "rxjs/add/operator/map";
import                                  "rxjs/add/operator/share";
import {UtilityProvider}                 from    "./utility";
import {Config}                 from    './config';
import {UserProvider}           from    './user';

@Injectable()
export class IndentProvider {
     employename : any;
     salesorderno : any;
     stackTrace = [];
     product :any;
     public isShow = true;

    constructor(
       
        private http:Http,
        private utilityProvider : UtilityProvider,
        private config          :   Config,
        private userProvider    :   UserProvider     
       
        ) {

         }; 

         CreateIndent(indent):any {
            var quotData:any        =    {
                data                :    {
                }
            };
             quotData.data.entityName                 =    "ProcurementRequisition";
             quotData.data.active                     =    true;
             quotData.data.organization               =    indent.organization;
             quotData.data.userContact                =    this.userProvider.userid;
             quotData.data.priceList                  =    "17DC5772C5634065BEBCEC9B53633A7B"; 
             quotData.data.mstProject                 =    indent.projectname.id;
             quotData.data.description                =    indent.description;

            console.log(quotData);
             return this.utilityProvider.postOB3Object("ProcurementRequisition",quotData);     
        }

        CreateIndentLines(indentlines):any {
            var quotData:any        =    {
                data                :    {
                }
            };
             quotData.data.entityName                 =    "ProcurementRequisitionLine";
             quotData.data.active                     =    true;
             quotData.data.requisition                =    indentlines.indentid;
             quotData.data.product                    =    indentlines.product.id;
             quotData.data.organization               =    indentlines.indentorg;
             quotData.data.uOM                        =    indentlines.product.uOM;
             quotData.data.quantity                   =    parseInt(indentlines.qty);
             quotData.data.lineNo                     =    indentlines.lineno;
             quotData.data.needByDate                 =    indentlines.needdate;

            console.log(quotData);
             return this.utilityProvider.postOB3Object("ProcurementRequisitionLine",quotData);     
        }
        
        Confirmindent(orgid,indentid):any {
            var quotData:any        =    {
                data                :    {
                }
            };
             quotData.data.windowid                 =    "800092";
             quotData.data.tabid                    =    "800249";
             quotData.data.ordid                    =    orgid;
             quotData.data.m_requisition_id         =    indentid;
             
            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.SendforApprove",quotData);     
        }
        Approveindent(indentid):any {
            var quotData:any        =    {
                data                :    {
                }
            };
             quotData.data.rejectreason             =    null;
             quotData.data.docaction                =    "A";
             quotData.data.m_requisition_id         =    indentid;
             
            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.IndentApprove",quotData);     
        }
        Rejectindent(indentid,rejectreason):any {
            var quotData:any        =    {
                data                :    {
                }
            };
             quotData.data.rejectreason             =    rejectreason;
             quotData.data.docaction                =    "R";
             quotData.data.m_requisition_id         =    indentid;
             
            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.IndentApprove",quotData);     
        }

        ApprovePO(orderid):any {
            var quotData:any        =    {
                data                :    {
                }
            };
             quotData.data.rejectreason             =    null;
             quotData.data.docaction                =    "A";
             quotData.data.cOrderId                 =    orderid;
             
            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.OrderApprove",quotData);     
        }
        RejectPO(orderid,rejectreason):any {
            var quotData:any        =    {
                data                :    {
                }
            };
             quotData.data.rejectreason             =    rejectreason;
             quotData.data.docaction                =    "R";
             quotData.data.cOrderId                 =    orderid;
             
            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.OrderApprove",quotData);     
        }

        Posendforapprove(orgid,orderid):any {
            var quotData:any        =    {
                data                :    {
                }
            };
             quotData.data.cOrderId                 =    orderid;
             quotData.data.windowid                 =    "181";
             quotData.data.tabid                    =    "294";
             quotData.data.orgid                    =    orgid;
             quotData.data.cDoctypeId               =    "808F8818F724497D94282AC83493F394";
             
            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.OrderSendforApprove",quotData);     
        }

        UpdateOrderLinesInOrder(indentlines){
    
            let endPoint            =   'ProcurementRequisitionLine';
    
            var orderData 			= 	{
                data				: 	[]
            };
    
            for(var i = 0; i < indentlines.length; i++) {
                //console.log(order);
                let dat:any         =   {};
    
                dat._entityName     =   "ProcurementRequisitionLine";
                dat.id              =   indentlines[i].id;
                dat.samBpartner     =   indentlines[i].vendorid;
                dat.samUnitprice    =   parseInt(indentlines[i].unitprice);
                dat.samLinenetamount   =   parseInt(indentlines[i].unitprice)*indentlines[i].quantity;

                orderData.data.push(dat);
            }
            //console.log(orderData);
          
            return                      this.utilityProvider.postOB3Object(endPoint, orderData);
    
        }

        UpdateRecievedquantityinGRN(goodslines,recievedqty,remarks){
    
            let endPoint            =   'MaterialMgmtShipmentInOutLine';
    
            var GoodslinesData 			= 	{
                data				: 	[]
            };
    
            for(var i = 0; i < goodslines.length; i++) {
                //console.log(order);
                let dat:any         =   {};
    
                dat._entityName         =   "MaterialMgmtShipmentInOutLine";
                dat.id                  =   goodslines[i].id;
                dat.description         =   remarks;
                dat.movementQuantity    =   parseInt(recievedqty[i]);

                GoodslinesData.data.push(dat);
            }
            //console.log(orderData);
          
            return                      this.utilityProvider.postOB3Object(endPoint, GoodslinesData);
    
        }

        ApproveandcreatePO(indentlines):any {
            var quotData:any        =    {
                data                :indentlines    
            };
           
            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.approval.ApproveAndCreatePO",quotData);     
        }

        GRcomplete(goodsid):any {
            var quotData:any        =    {
                data                :{}    
            };
            quotData.data.MinoutID                 =    goodsid;
            quotData.data.OrderID                  =    "";
            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.uploadfile.processGRNorOrder",quotData);     
        }

        getProducts():any {
            let endPoint            =     'Product';
            let queryParams         =     "&_selectedProperties=id,name,uOM";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getIndentProducts(indentid):any {
            let endPoint            =     'ProcurementRequisitionLine';
            let queryParams         =     "&_where=requisition='"+indentid+"'&_selectedProperties=id,product,uOM,quantity,needByDate,organization,requisition";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

         setProduct(entry){
            this.product = entry;
            console.log("customer Name in cutomer Provider",this.product);
            return "yes";
        }

        getIndentrecords(start,end):any {
            let endPoint            =     'ProcurementRequisition';
            let queryParams         =     "&_selectedProperties=id,documentStatus,organization,creationDate,userContact,documentNo,mstProject&_startRow="+start+"&_endRow="+end+"&_sortBy=creationDate%20desc";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
        getPurchaseorderrecords(start,end):any {
            let endPoint            =     'Order';
            let queryParams         =     "&_where=transactionDocument=%27808F8818F724497D94282AC83493F394%27%20and%20samNextapprover=null&_selectedProperties=id,businessPartner,creationDate,grandTotalAmount,documentNo,orderDate&_sortBy=creationDate%20desc&_startRow="+start+"&_endRow="+end;
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
        getUserfcmid(userid):any {
            let endPoint            =     'ADUser';
            let queryParams         =     "&_where=id='"+userid+"'&_selectedProperties=id,description";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getIndentrecordsforApproval(start,end):any {
            let endPoint            =     'ProcurementRequisition';
            let queryParams         =     "&_where=samNextapprover='"+this.userProvider.userid+"'%20and%20samStatus='Waiting'&_selectedProperties=id,documentStatus,userContact,creationDate,documentNo,mstProject&_startRow="+start+"&_endRow="+end+"&_sortBy=creationDate%20desc";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
        getpendingIndentrecords():any {
            let endPoint            =     'ProcurementRequisition';
            let queryParams         =     "&_where=samNextapprover='"+this.userProvider.userid+"'%20and%20samStatus='Waiting'&_selectedProperties=id";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
        getPurchaseorderLines(orderid):any {
            let endPoint            =     'OrderLine';
            let queryParams         =     "&_where=salesOrder='"+orderid+"'&_selectedProperties=id,product,uOM,orderedQuantity,scheduledDeliveryDate,businessPartner,unitPrice,organization";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getIndenttoorderrecords():any {
            let endPoint            =     'ProcurementRequisitionLine';
            let queryParams         =     "&_where=requisitionLineStatus=%27O%27&_selectedProperties=id,product,uOM,quantity,needByDate,organization,requisition,businessPartner,unitPrice,requisitionLineStatus,createdBy&_sortBy=needByDate%20desc";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getPurchaseordersforApproval(start,end):any {
            let endPoint            =     'Order';
            let queryParams         =     "&_where=samNextapprover='"+this.userProvider.userid+"'%20and%20samStatus='Waiting'&_selectedProperties=id,businessPartner,grandTotalAmount,creationDate,documentNo,orderDate&_startRow="+start+"&_endRow="+end+"&_sortBy=creationDate%20desc";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getnoofPurchaseordersforApproval():any {
            let endPoint            =     'Order';
            let queryParams         =     "&_where=samNextapprover='"+this.userProvider.userid+"'%20and%20samStatus='Waiting'&_selectedProperties=totalRows";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
        getConfirmedPurchaseorders(start,end):any {
            let endPoint            =     'Order';
            let queryParams         =     "&_where=samNextapprover='"+this.userProvider.userid+"'%20and%20samStatus='Approved'&_selectedProperties=id,businessPartner,grandTotalAmount,creationDate,documentNo,orderDate&_startRow="+start+"&_endRow="+end+"&_sortBy=creationDate%20desc";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getnoofConfirmedPurchaseorders():any {
            let endPoint            =     'Order';
            let queryParams         =     "&_where=samNextapprover='"+this.userProvider.userid+"'%20and%20samStatus='Approved'&_selectedProperties=totalRows";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getBusinesspartners():any {
            let endPoint            =     'BusinessPartner';
            let queryParams         =     "&_where=businessPartnerCategory.name=%27Vendor%27%20and%20name!=null&_selectedProperties=id,name";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
        getGoodsrecipts(start,end):any {
            let endPoint            =     'MaterialMgmtShipmentInOut';
            let queryParams         =     "&_where=documentStatus=%27DR%27&_selectedProperties=id,businessPartner,creationDate,movementDate,project&_startRow="+start+"&_endRow="+end+"&_sortBy=creationDate%20desc";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
        getGoodsreciptsLines(grid):any {
            let endPoint            =     'MaterialMgmtShipmentInOutLine';
            let queryParams         =     "&_where=shipmentReceipt='"+grid+"'&_selectedProperties=id,product,uOM,movementQuantity,operativeQuantity,businessPartner";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getPurchaseordersforApprovalList(start,end):any {
            let POObservable       =   new Observable(observer => {
                this.getPOApprovalworkflow().subscribe(
                
                    approvaldata      =>  {
                        console.log("================approvaldata",approvaldata);

                        var orderIDs = "('"
                        approvaldata.forEach(function(pr) {
                            orderIDs +=  pr.order + "','";
                            });
                            orderIDs     +=  "')";

                            this.getPOApprovals(orderIDs,start,end).subscribe(
                                poapprovaldetails            =>  {
                                   observer.next(poapprovaldetails);
                                   },
                                   poapprovaldetailsErr             =>  {
                                    var errMsg  =   'ERROR: :: Utility Provider :: getTaxListCorrespondingToState :: while getting Zone :: \n' + JSON.stringify(poapprovaldetailsErr);
                                    console.log(errMsg);
                                    observer.error(errMsg);
                                },
                            );
                        },
                        approvalerr       =>  {
                    var errMsg  =   'ERROR: :: Utility Provider :: getTaxListCorrespondingToState :: while getting Zone :: \n' + JSON.stringify(approvalerr);
                        console.log(errMsg);
                        observer.error(errMsg);
                    },
                );
    
            });
    
            return    POObservable;
        }

        getPOApprovalworkflow(){
            let endPoint            =     'SAM_Orderapproval';
            let queryParams         =     "&_where=user='"+this.userProvider.userid+"'%20and%20status='Waiting'&_selectedProperties=order";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getPOApprovals(orderids,start,end){
            let endPoint            =     'Order';
            let queryParams         =     "&_where=id%20in" +orderids+"&_selectedProperties=id,businessPartner,grandTotalAmount,creationDate,documentNo,orderDate&_startRow="+start+"&_endRow="+end;
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getProductNameForSearch(search){
            var utilityEndPoint ="Product";
            var condition = "active=true";
            var queryParams ="&_where=name%20like%20%27%25" + search + "%25%27%20and%20" + condition+"&_selectedProperties=id,name,uOM";
            return                        this.utilityProvider.getOB3Object(utilityEndPoint,queryParams);

        }

        getProductName(start,end):any {
            let endPoint            =     'Product';
            let queryParams         =     "&_selectedProperties=id,name,uOM"+"&_startRow="+start+"&_endRow="+end;
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
    };
