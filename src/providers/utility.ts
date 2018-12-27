import {Injectable}             from    '@angular/core';
 import {Http}          from    '@angular/http';

import {Observable}             from    "rxjs/Observable";
import {Observer}               from    "rxjs/Observer";
import 'rxjs/add/operator/map';

import {Config}                 from    './config';
import {UserProvider}                 from    './user';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http/';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class UtilityProvider {

    stackTrace = [];
   singleArray=[];
    constructor(
         private http            :   Http,
       // private httpclient         :   HttpClient,
        private config          :   Config,
        private userpro         :   UserProvider,
        private nativehttp : HTTP,
        ) {

    };

    getMobileAccess():any {
        let endPoint            =     'mbcrm_mobileaccess';
        let queryParams         =     "&_where=user=%27"+this.userpro.userid+"%27&_selectedProperties=mbcrmMobilemaster&_startRow=0&_endRow=10";
        return                        this.getOB3Object(endPoint,queryParams);
    }
  

    getOrganization():any {

        let endPoint            =   'RWS_UserOrganization';
        let queryParams         =   "&_where=user=%27"+this.userpro.userid + '%27';

        return                      this.getOB3Object(endPoint, queryParams);
    }

    getOB3Object(utilityEndPoint, queryParams, sortConfig?):any {
       
        var self = this;
        let utilityObservable   =   new Observable(observer => {

            let utilityURL      =   self.userpro.authenticateURL(self.config.apiBasePoint + utilityEndPoint + "?");
            utilityURL          =   utilityURL + queryParams;
            console.log("------------------------------------>");
            console.log(utilityURL);
            console.log("------------------------------------->");
            //console.log('Utility Provider :: Get Utility :: ' + utilityURL);

           this.nativehttp.get(utilityURL, {}, {})
            .then(data => {
              console.log(data.status);
              console.log("res"+data.data); // data received by server
              console.log(data.headers);

              let result = JSON.parse(data.data);
              console.log("response"+result.response.data[0]);

              var uRespJson               =   result.response;
                   
              if (uRespJson.status === 0) {
                  var utilityData         =   uRespJson.data;
                 
                  if (sortConfig) {
                     
                      if (sortConfig.type === 'string') {
                         
                          utilityData.sort(function(a,b) {
                              return a[sortConfig.fieldName].localeCompare(b[sortConfig.fieldName]);
                          });
                      } else if (sortConfig.type === 'number') {
                         
                          utilityData.sort(function(a,b) {
                              return a[sortConfig.fieldName] - b[sortConfig.fieldName];
                          });
                      } else if (sortConfig.type === 'date') {
                          utilityData.sort(function(a,b) {
                              var aa  =   new Date(a[sortConfig.fieldName]);
                              var bb  =   new Date(b[sortConfig.fieldName]);
                              return aa < bb;
                          });
                      }
                  }

                  observer.next(utilityData);
              } else {
                  
                  let errO                =   uRespJson.error || uRespJson.errors;
                  var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(errO);
                  self.stackTrace         =   ["Utility Provider :: Get Utility :: Utility Response ::",errO];
                  //console.log(errMsg);
                  observer.error(errMsg);
              }             
            })
            .catch(error => {
          
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);
              console.log(error);
              observer.error(error.error);
            }); 

        /* let utilityWS       =   self.http.get(utilityURL);
            
            utilityWS.subscribe(

                utilityResponse =>  {
                   
                    var uRespJson               =   utilityResponse.json().response;
                   
                    if (uRespJson.status === 0) {
                        var utilityData         =   uRespJson.data;
                       
                        if (sortConfig) {
                           
                            if (sortConfig.type === 'string') {
                               
                                utilityData.sort(function(a,b) {
                                    return a[sortConfig.fieldName].localeCompare(b[sortConfig.fieldName]);
                                });
                            } else if (sortConfig.type === 'number') {
                               
                                utilityData.sort(function(a,b) {
                                    return a[sortConfig.fieldName] - b[sortConfig.fieldName];
                                });
                            } else if (sortConfig.type === 'date') {
                                utilityData.sort(function(a,b) {
                                    var aa  =   new Date(a[sortConfig.fieldName]);
                                    var bb  =   new Date(b[sortConfig.fieldName]);
                                    return aa < bb;
                                });
                            }
                        }

                        observer.next(utilityData);
                    } else {
                        
                        let errO                =   uRespJson.error || uRespJson.errors;
                        var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(errO);
                        self.stackTrace         =   ["Utility Provider :: Get Utility :: Utility Response ::",errO];
                        //console.log(errMsg);
                        observer.error(errMsg);
                    }
                },

                utilityErr      =>  {
                   
                    var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(utilityErr);
                    self.stackTrace = ["Utility Provider :: Get Utility :: Utility Observable ::",JSON.stringify(utilityErr)];
                   // console.log(errMsg);
                    observer.error(errMsg);
                },

                ()              =>  {
                }

            );  */
        });  

        return                      utilityObservable;
        //console.log(JSON.stringify(approversArr));

    }

 getOB3ObjectWithRecords(utilityEndPoint, queryParams, start,end,sortConfig?):any {
       
        var self = this;
        let utilityObservable   =   new Observable(observer => {

            let utilityURL      =   self.userpro.authenticateURL(self.config.apiBasePoint + utilityEndPoint + "?");
            utilityURL          =   utilityURL + queryParams;
            utilityURL          =   utilityURL + "&_startRow=" + start + "&_endRow=" + end;
            console.log("------------------------------------>");
            console.log(utilityURL);
            console.log("------------------------------------->");
            //console.log('Utility Provider :: Get Utility :: ' + utilityURL);
            let utilityWS       = null; // self.http.get(utilityURL);
            
            utilityWS.subscribe(

                utilityResponse =>  {
                   
                    var uRespJson               =   utilityResponse.json().response;
                   
                    if (uRespJson.status === 0) {
                        var utilityData         =   uRespJson.data;
                       
                        if (sortConfig) {
                           
                            if (sortConfig.type === 'string') {
                               
                                utilityData.sort(function(a,b) {
                                    return a[sortConfig.fieldName].localeCompare(b[sortConfig.fieldName]);
                                });
                            } else if (sortConfig.type === 'number') {
                               
                                utilityData.sort(function(a,b) {
                                    return a[sortConfig.fieldName] - b[sortConfig.fieldName];
                                });
                            } else if (sortConfig.type === 'date') {
                                utilityData.sort(function(a,b) {
                                    var aa  =   new Date(a[sortConfig.fieldName]);
                                    var bb  =   new Date(b[sortConfig.fieldName]);
                                    return aa < bb;
                                });
                            }
                        }

                        observer.next(utilityData);
                    } else {
                        
                        let errO                =   uRespJson.error || uRespJson.errors;
                        var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(errO);
                        self.stackTrace         =   ["Utility Provider :: Get Utility :: Utility Response ::",errO];
                        //console.log(errMsg);
                        observer.error(errMsg);
                    }
                },

                utilityErr      =>  {
                   
                    var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(utilityErr);
                    self.stackTrace = ["Utility Provider :: Get Utility :: Utility Observable ::",JSON.stringify(utilityErr)];
                   // console.log(errMsg);
                    observer.error(errMsg);
                },

                ()              =>  {
                }

            );
        });

        return                      utilityObservable;
        //console.log(JSON.stringify(approversArr));

    }


 getOB3ObjectFor(organizationID,customerID,grandtotal,orderid):any {
        console.log("getOB3ObjectFor");
        var self = this;
        let utilityObservable   =   new Observable(observer => {

            let utilityURL      =   this.config.apipoint+"ws/com.saksham.rwsales.docheck?";//l=manoj&p=123456&OrderID="+orderID+"&CustomerID="+customerID;
            let UtilURL = this.userpro.authenticateURL(utilityURL);

            UtilURL = UtilURL + "&OrgnizationID="+organizationID+"&CustomerID="+customerID+"&GrandTotal="+grandtotal+"&OrderID="+orderid;
            utilityURL = UtilURL;
           console.log("/**************url is-------------------->"+utilityURL);

            let utilityWS       =  null;// self.http.get(utilityURL);
            
            utilityWS.subscribe(

                utilityResponse =>  {
                   
                    var uRespJson               =   utilityResponse.json();

                 
                        var utilityData         =   uRespJson;
                       
                       

                        observer.next(utilityData);
                  
                },

                utilityErr      =>  {
                   
                    var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(utilityErr);
                    self.stackTrace = ["Utility Provider :: Get Utility :: Utility Observable ::",JSON.stringify(utilityErr)];
                   // console.log(errMsg);
                    observer.error(errMsg);
                },

                ()              =>  {
                }

            );
        });

        return                      utilityObservable;
        //console.log(JSON.stringify(approversArr));

    }

    putOB3Object(utilityEndPoint, putPayload):any {
          
        let utilityObservable   =   new Observable(observer => {
             
            let utilityURL      =   this.userpro.authenticateURL(this.config.apiBasePoint + utilityEndPoint + "?");

         
            let utilityWS       = null;  /*this.http.put(utilityURL, JSON.stringify(putPayload));*/
            console.log("_______________AZIZ SIR");
            console.log(utilityURL);
            console.log(putPayload);
            utilityWS.subscribe(

                utilityResponse =>  {
                  console.log("==================================> AZIZ sir");
                  console.log(utilityURL);
                  console.log(putPayload);
                  console.log(utilityResponse);
                    var uRespJson               =   utilityResponse.json().response;
                    if (uRespJson.status === 0) {
                     
                        var utilityData         =   uRespJson.data;
                        observer.next(utilityData);
                    } else {
                       
                        let errO               =   uRespJson.error || uRespJson.errors;
                       
                        this.stackTrace = ["Utility Provider ::  Put Utility :: Utility Response",JSON.stringify(errO)];
                        var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Put Utility :: \n' + JSON.stringify(errO);
                        //console.log(errMsg);
                        observer.error(errMsg);
                    }
                },

                utilityErr      =>  {
                   console.log("AZIZ SIR ERRROR");
                    this.stackTrace = ["Utility Provider :: Put Utility ::",JSON.stringify(utilityErr)];
                    var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Put Utility :: \n' + JSON.stringify(utilityErr);
                    //console.log(errMsg);
                    observer.error(errMsg);
                },

                ()              =>  {
                }

            );
        });

        return                      utilityObservable;

    }

    postOB3Object(utilityEndPoint, postPayload):any {
        console.log("+++++++++++-----===========>");
        console.log(postPayload);
        console.log(JSON.stringify(postPayload));
        console.log("++++++++++++-----------===========>");
        let utilityObservable   =   new Observable(observer => {

            let utilityURL      =   this.userpro.authenticateURL(this.config.apiBasePoint + utilityEndPoint + "?");

          this.nativehttp.setDataSerializer("json");
            this.nativehttp.post(utilityURL,postPayload,{'Content-Type': 'application/json' })
            .then(data => {
              console.log(data.status);
              console.log(data.data); // data received by server
              console.log(data.headers);

              let result = JSON.parse(data.data);
              var uRespJson     =   result.response;
          
                    if (uRespJson.status === 0) {
                        var utilityData         =   uRespJson.data;

                        observer.next(utilityData);
                    } else {
                       
                        let errO               =   uRespJson.error || uRespJson.errors;
                        this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse",JSON.stringify(errO)];
                        
                        var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                        //console.log(errMsg);
                        observer.error(errMsg);
                    }
            })
            .catch(error => {
          
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);
              console.log("error"+error);
              observer.error(error.error);
            }); 

            
            //console.log('Utility Provider :: Post Utility :: ' + utilityURL);
        /*  let utilityWS       =   this.http.post(utilityURL, JSON.stringify(postPayload));
           
          
            utilityWS.subscribe(

                utilityResponse =>  {
                    var uRespJson               =   utilityResponse.json().response;
          
                    if (uRespJson.status === 0) {
                        var utilityData         =   uRespJson.data;

                        observer.next(utilityData);
                    } else {
                       
                        let errO               =   uRespJson.error || uRespJson.errors;
                        this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse",JSON.stringify(errO)];
                        
                        var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                        //console.log(errMsg);
                        observer.error(errMsg);
                    }
                },

                utilityErr      =>  {
                    this.stackTrace = ["Utility Provider :: Post  Utility :: UtilityObservable",JSON.stringify(utilityErr)];
                    var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(utilityErr);
                    //console.log(errMsg);
                    observer.error(errMsg);
                },

                ()              =>  {
                }

            ); */
        }); 
    
        return                      utilityObservable;

    }

    postOB3ObjectforWebservice(utilityEndPoint, postPayload):any {
        console.log("+++++++++++-----===========>");
        console.log(postPayload);
        console.log(JSON.stringify(postPayload));
        console.log("++++++++++++-----------===========>");
        let utilityObservable   =   new Observable(observer => {

           let utilityURL      =   this.userpro.authenticateURL(this.config.apipoint + utilityEndPoint + "?");

            //console.log('Utility Provider :: Post Utility :: ' + utilityURL);

         this.nativehttp.setDataSerializer("json");
            this.nativehttp.post(utilityURL,postPayload,{'Content-Type': 'application/json' })
            .then(data => {
              console.log(data.status);
              console.log(data.data); // data received by server
              console.log(data.headers);

              let result = JSON.parse(data.data);
              var uRespJson     =   result.response;
          
                    if (uRespJson.status === 0) {
                        var utilityData         =   uRespJson;

                        observer.next(utilityData);
                    } else {
                       
                        let errO               =   uRespJson.error || uRespJson.errors;
                        this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse",JSON.stringify(errO)];
                        
                        var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                        //console.log(errMsg);
                        observer.error(errMsg);
                    }
            })
            .catch(error => {
          
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);
              console.log("error"+error);
              observer.error(error.error);
            });  
            

         /* let utilityWS       =   this.http.post(utilityURL, JSON.stringify(postPayload));
           
          
            utilityWS.subscribe(

                utilityResponse =>  {
                    var uRespJson               =   utilityResponse.json().response;
          
                    if (uRespJson.status === 0) {
                        var utilityData         =   uRespJson;

                        observer.next(utilityData);
                    } else {
                       
                        let errO               =   uRespJson.error || uRespJson.errors;
                        this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse",JSON.stringify(errO)];
                        
                        var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                        //console.log(errMsg);
                        observer.error(errMsg);
                    }
                },

                utilityErr      =>  {
                    this.stackTrace = ["Utility Provider :: Post  Utility :: UtilityObservable",JSON.stringify(utilityErr)];
                    var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(utilityErr);
                    //console.log(errMsg);
                    observer.error(errMsg);
                },

                ()              =>  {
                }

            );  */
        });
    
        return                      utilityObservable;

    }

    Webserviceforusercreation(utilityEndPoint, postPayload):any {
        console.log("+++++++++++-----===========>");
        console.log(postPayload);
        console.log(JSON.stringify(postPayload));
        console.log("++++++++++++-----------===========>");
        let utilityObservable   =   new Observable(observer => {

           let utilityURL      =   this.userpro.authenticateURLgettingData(this.config.apipoint + utilityEndPoint + "?");

            //console.log('Utility Provider :: Post Utility :: ' + utilityURL);

         this.nativehttp.setDataSerializer("json");
            this.nativehttp.post(utilityURL,postPayload,{'Content-Type': 'application/json' })
            .then(data => {
              console.log(data.status);
              console.log(data.data); // data received by server
              console.log(data.headers);

              let result = JSON.parse(data.data);
              var uRespJson     =   result.response;
          
                    if (uRespJson.status === 0) {
                        var utilityData         =   uRespJson;

                        observer.next(utilityData);
                    } else {
                       
                        let errO               =   uRespJson.error || uRespJson.errors;
                        this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse",JSON.stringify(errO)];
                        
                        var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                        //console.log(errMsg);
                        observer.error(errMsg);
                    }
            })
            .catch(error => {
          
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);
              console.log("error"+error);
              observer.error(error.error);
            }); 

          /*  let utilityWS       =   this.http.post(utilityURL, JSON.stringify(postPayload));
          
            utilityWS.subscribe(

                utilityResponse =>  {
                    console.log("useres"+utilityResponse.json());
                    var uRespJson               =   utilityResponse.json().response;
          
                    if (uRespJson.status === 0) {
                        var utilityData         =   uRespJson;

                        observer.next(utilityData);
                    } else {
                       
                        let errO               =   uRespJson.error || uRespJson.errors;
                        this.stackTrace = ["Utility Provider :: Post Utility :: UtilityResponse",JSON.stringify(errO)];
                        
                        var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(errO);
                        //console.log(errMsg);
                        observer.error(errMsg);
                    }
                },

                utilityErr      =>  {
                    this.stackTrace = ["Utility Provider :: Post  Utility :: UtilityObservable",JSON.stringify(utilityErr)];
                    var errMsg  =   'ERROR: HTTP Error :: Utility Provider :: Post Utility :: \n' + JSON.stringify(utilityErr);
                    //console.log(errMsg);
                    observer.error(errMsg);
                },

                ()              =>  {
                }

            ); */
        });
    
        return                      utilityObservable;

    }

    getUserlocation() : any {
        let endPoint            =   'Warehouse';
        let queryParams         =   "&_where=organization=%27" + this.userpro.organization+"%27";

        return                      this.getOB3Object(endPoint, queryParams);
    }

    getRegions() : any {
        let endPoint            =   'Region';
        let queryParams         =   "&_where=country=%27208%27&_sortBy=name&_selectedProperties=id,name";

        return                      this.getOB3Object(endPoint, queryParams);
    }

    getBpLocation() : any {
        let endPoint            =   'BusinessPartnerLocation';
        let queryParams         =   "&_where=businessPartner=%27"+this.userpro.bpartner+"%27&_selectedProperties=id,locationAddress";

        return                      this.getOB3Object(endPoint, queryParams);
    }

    getUserlocationdetails(locationid) : any {
        let endPoint            =   'Location';
        let queryParams         =   "&_where=id=%27" + locationid+"%27";

        return                      this.getOB3Object(endPoint, queryParams);
    }

    getUserState():any {

         let userstateObservable       =   new Observable(observer => {
            this.getUserlocation().subscribe(
                
                userlocation      =>  {
                    console.log("================userlocation",userlocation);
                        this.getUserlocationdetails(userlocation[0].locationAddress).subscribe(
                            userlocationdetails            =>  {
                               observer.next(userlocationdetails);
                               },
                               userlocationdetailsErr             =>  {
                                var errMsg  =   'ERROR: :: Utility Provider :: getTaxListCorrespondingToState :: while getting Zone :: \n' + JSON.stringify(userlocationdetailsErr);
                                console.log(errMsg);
                                observer.error(errMsg);
                            },
                        );
                    },
                userlocationError        =>  {
                var errMsg  =   'ERROR: :: Utility Provider :: getTaxListCorrespondingToState :: while getting Zone :: \n' + JSON.stringify(userlocationError);
                    console.log(errMsg);
                    observer.error(errMsg);
                },
            );

        });

        return    userstateObservable;
    };

    putfcmid():any {
        var quotData:any        =    {
            data                :    {
            }
        };
         quotData.data.id                 =    this.userpro.userid;
         quotData.data.description        =    this.userpro.fcmid; 

        console.log(quotData);
         return this.postOB3Object("ADUser",quotData);     
    }

    sendNotification(fcm,message,openpage,id,amount) 
        {  
        let body = {
            "notification":{
            "title":"Fortune",
            "body":message,
            "sound":"default",
            "click_action":"FCM_PLUGIN_ACTIVITY",
            "icon":"fcm_push_icon"
            },
            "data":{
            "open":openpage,
            "id":id,
            "amount":amount
            },
            "to":fcm,
            "priority":"high",
            "restricted_package_name":""
        }
        // let options = new HttpHeaders().set('Content-Type','application/json');
       // this.httpclient.post("https://fcm.googleapis.com/fcm/send",body,{
           // headers : options.set('Authorization', 'key=AIzaSyBMxa8HOJDZVd962i7z9id924ilHbScbBI'),
        //})
          //  .subscribe();
}

Createuser(user):any {
    var quotData:any        =    {
        data                :{}    
    };
    quotData.data.firstname                 =    user.firstname;
    quotData.data.lastname                  =   user.lastname;
    quotData.data.mobile                  =   user.mobile;
    quotData.data.emailid                  =   user.email;
    quotData.data.passwd                  =   user.password;
    quotData.data.clientid                  =   "7C9573D339E146C0BBF735BCB7533AB7";
    quotData.data.categorycode              =   "CUS";

    console.log(quotData);
     return this.Webserviceforusercreation("ws/com.saksham.uploadfile.AddUserPasswd",quotData);     
}
sendOTP(mobilenumber,otp):any {
       
    var self = this;
    let utilityObservable   =   new Observable(observer => {

        let utilityURL      =  " http://182.18.160.225/index.php/api/customized-sms?username=Medicineshoppee&password=Medicine$123&from=MEDSHP&mobile_msg="+mobilenumber+"^M-+"+otp+"+is+your+medicineshoppee+verification+code.&sms_type=2"
        
        console.log("------------------------------------>");
        console.log(utilityURL);
        console.log("------------------------------------->");
        //console.log('Utility Provider :: Get Utility :: ' + utilityURL);

       this.nativehttp.get(utilityURL, {}, {})
        .then(data => {
          console.log(data.status);
          console.log("res"+data.data); // data received by server
          console.log(data.headers);

          let result = JSON.parse(data.data);
          console.log("response"+result);

          var uRespJson               =   result;
               
          if (uRespJson.NoOfSMS=== 1) {
              var utilityData         =   uRespJson;
             
              

              observer.next(utilityData);
          } else {
              
              let errO                =   uRespJson.error || uRespJson.errors;
              var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(errO);
              self.stackTrace         =   ["Utility Provider :: Get Utility :: Utility Response ::",errO];
              //console.log(errMsg);
              observer.error(errMsg);
          }             
        })
        .catch(error => {
      
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          console.log(error);
          observer.error(error.error);
        }); 

   
    });  

    return                      utilityObservable;
    //console.log(JSON.stringify(approversArr));

}
sendMessages(mobilenumber,message):any {
       
    var self = this;
    let utilityObservable   =   new Observable(observer => {

        let utilityURL      =  " http://182.18.160.225/index.php/api/customized-sms?username=Medicineshoppee&password=Medicine$123&from=MEDSHP&mobile_msg="+mobilenumber+"^"+message+"&sms_type=2";
        
        console.log("------------------------------------>");
        console.log(utilityURL);
        console.log("------------------------------------->");
        //console.log('Utility Provider :: Get Utility :: ' + utilityURL);

       this.nativehttp.get(utilityURL, {}, {})
        .then(data => {
          console.log(data.status);
          console.log("res"+data.data); // data received by server
          console.log(data.headers);

          let result = JSON.parse(data.data);
          console.log("response"+result);

          var uRespJson               =   result;
               
          if (uRespJson.NoOfSMS=== 1) {
              var utilityData         =   uRespJson;
             
              

              observer.next(utilityData);
          } else {
              
              let errO                =   uRespJson.error || uRespJson.errors;
              var errMsg  =   'ERROR: OB3 Error :: Utility Provider :: Get Utility :: \n' + JSON.stringify(errO);
              self.stackTrace         =   ["Utility Provider :: Get Utility :: Utility Response ::",errO];
              //console.log(errMsg);
              observer.error(errMsg);
          }             
        })
        .catch(error => {
      
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          console.log(error);
          observer.error(error.error);
        }); 

   
    });  

    return                      utilityObservable;
    //console.log(JSON.stringify(approversArr));

}

}

