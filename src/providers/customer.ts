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
export class CustomerProvider {
     employename : any;
     salesorderno : any;
     stackTrace = [];
     customerName :any = null;
     public isShow = true;

    constructor(
       
        private utilityProvider : UtilityProvider,
        private config          :   Config,
        private userProvider    :   UserProvider     
       
        ) {

         }; 

         setCustomerName(entry){
            this.customerName = entry;
            console.log("customer Name in cutomer Provider",this.customerName);
            return "yes";
        }

        getcustomerrecords(start,end):any {
            let endPoint            =     'BusinessPartner';
            let queryParams         =     "&_selectedProperties=id,name,searchKey,aiDob,description,creationDate&_startRow="+start+"&_endRow="+end+"&_sortBy=creationDate%20desc";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
    
        getRegions():any {
            let endPoint            =     'Region';
            let queryParams         =     "&_where=country=%27208%27&_orderBy=name";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getBPlocationid(start,end):any {
            let endPoint            =     'BusinessPartnerLocation';
            let queryParams         =     "&_where=businessPartner=%27"+this.userProvider.bpartner+"%27&_startRow="+start+"&_endRow="+end+"&_selectedProperties=id,businessPartner,locationAddress";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getBPlocationid1(bpid):any {
            let endPoint            =     'BusinessPartnerLocation';
            let queryParams         =     "&_where=businessPartner=%27"+bpid+"%27&_selectedProperties=id,businessPartner,locationAddress";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
        getBPlocationdetails(bplocationid):any {
            let endPoint            =     'Location';
            let queryParams         =     "&_where=id=%27"+bplocationid+"%27";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getnewCustomertName(name):any {
            let endPoint            =     'BusinessPartner';
            let queryParams         =     "&_where=name='"+name+"'&_selectedProperties=id,name,searchKey,description";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }
    
        getCustomertName(start,end):any {
            let endPoint            =     'BusinessPartner';
            let queryParams         =     "&_startRow="+start+"&_endRow="+end+"&_selectedProperties=id,name,searchKey,description,aiDob";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getCustomertdetails(customerid):any {
            let endPoint            =     'BusinessPartner';
            let queryParams         =     "&_where=id='"+customerid+"'";
            return                        this.utilityProvider.getOB3Object(endPoint,queryParams);
        }

        getCustomerAddressForSearch(search){
            var utilityEndPoint ="BusinessPartnerLocation";
            var condition = "active=true";
            var queryParams ="&_where=name%20like%20%27%25" + search + "%25%27%20or%20searchKey%20like%20%27%25"+search+"%25%27%20and%20" + condition+"&_selectedProperties=id,name,searchKey,description,aiDob";
            return                        this.utilityProvider.getOB3Object(utilityEndPoint,queryParams);

        }

        createbp(customer):any {
            var quotData:any        =    {
                data                :    {
     
                }
            };
     
             quotData.data.entityName                 =    "BusinessPartner";
             quotData.data.active                     =    true;
             quotData.data.businessPartnerCategory    =    "3ED3E1DF40E540DF9E50CCAA84B27513";
             quotData.data.name                       =    customer.name;
             quotData.data.searchKey                  =    customer.mobile;
             quotData.data.description                =    customer.email;
             quotData.data.aiDob                      =    customer.dob;

            console.log(quotData);
             return this.utilityProvider.postOB3Object("BusinessPartner",quotData);     
        }

        createCustomer(customer):any {
            var quotData:any        =    {
                data                :    {
     
                }
            };
     
             quotData.data.entityName                 =    "DataImportBusinessPartner";
             quotData.data.active                     =    true;
             quotData.data.businessPartnerCategory    =    "3ED3E1DF40E540DF9E50CCAA84B27513";
             quotData.data.name                       =    customer.name;
             quotData.data.searchKey                  =    customer.mobile;
             quotData.data.email                      =    customer.email;
             quotData.data.description                =    customer.email;
             quotData.data.phone                      =    customer.mobile;
             quotData.data.addressLine1               =    customer.address1;
             quotData.data.addressLine2               =    customer.address2;
             quotData.data.cityName                   =    customer.city;
             quotData.data.postalCode                 =    customer.pincode;
             quotData.data.country                    =    "208";
             quotData.data.region                     =    customer.state.id;
             quotData.data.birthday                   =    customer.dob;

            console.log(quotData);
             return this.utilityProvider.postOB3Object("DataImportBusinessPartner",quotData);     
        }
    
        createCustomerAddress(customer,bpid):any {
            var quotData:any        =    {
                data                :    {
     
                }
            };
             quotData.data.clientId               =    this.userProvider.client;
             quotData.data.address1               =    customer.address1;
             quotData.data.address2               =    customer.address2;
             quotData.data.city                   =    customer.city;
             quotData.data.postalcode             =    customer.pincode;
             quotData.data.country                =    "208";
             quotData.data.state                  =    customer.state.id;
             quotData.data.bpid                   =    bpid;
             quotData.data.phone                  =    "1234567890";

            console.log(quotData);
             return this.utilityProvider.postOB3ObjectforWebservice("ws/com.saksham.uploadfile.postAddLocation",quotData);
     
        }
    
        createCustomerAddressforbp(customerbpid,customeraddid):any {
            var quotData:any        =    {
                data                :    {
     
                }
            };
     
             quotData.data.entityName                 =    "BusinessPartnerLocation";
             quotData.data.active                     =    true;
             quotData.data.businessPartner            =    customerbpid;
             quotData.data.locationAddress            =    customeraddid;
    
            console.log(quotData);
             return this.utilityProvider.postOB3Object("BusinessPartnerLocation",quotData);
     
        } 

    };
