import {Component} from '@angular/core';
import {NavController,ViewController,NavParams} from 'ionic-angular';
import {Platform,Alert,LoadingController , AlertController}               from    'ionic-angular';
import {Modal}                  from    'ionic-angular';
import {AddressPage} from '../address/address'; 
import {CustomerProvider}      from     '../../providers/customer' ;   

@Component({
  templateUrl: 'customers.html'
})
export class Customers {
  public customers:any;
  public customers1:any;
public customersList:any;
public load :any;
 public start ;
    public end;
    public stop;
    public event ;
   
    public searchValue;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private customerprovider:CustomerProvider,
    private navCtrl             :   NavController,
    private loading  : LoadingController,
     private alert :AlertController

  ) {
    this.customers = [];
    this.customers1 = [];
    this.searchValue = "";
  
  }
  
  ionViewDidEnter(){
      this.customers          =   [];
        this.customersList = [];
    
        this.start =0;
        this.end =20;
        this.stop = false;//this.event.enable(true);
        this.customerprovider.getBPlocationid(this.start,this.end).subscribe(
                data => {
                this.customers = data;
                this.customersList = this.customers;
                /*for(var i=0;i<20;i++){
                  if(data[i].name != "."){
                    console.log(data[i]);
                    this.customers[i] = data[i];

                  }
                }
                this.customersList = this.customers;*/
                console.log(data[0]);   
                },
            err => {
                console.log("%^%^%^%^%");
                //console.error(err 
            },
                () => console.log('getDraftOrders completed')
            ); 
    }
  dismis(){
    console.log("DISMISS");
    this.viewCtrl.dismiss();
  }
  initializeVendors(){
    this.customers = this.customersList;

  }

  refresh(){
       
        this.customers        =   [];
        this.start =0;
        this.end =20;
        this.stop = false;
        this.event.enable(true);
        this.ionViewDidEnter();
    }
    gotoaddressscreen(){
        this.navCtrl.push(AddressPage);
      }

  getCustomer(event){
    console.log("Search Value");
    console.log(event.target.value);
    this.initializeVendors();
    var val = event.target.value;
    this.searchValue = val;
    if(val == ''){
          console.log("Empty");
          this.customers = this.customersList;
          //event.enable(true);s
    }else{
        this.search();
    }
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
          this.customers = this.customersList;

        }
        else{
          let loading = this.loading.create({
              content: "Please Wait..",
              //spinner: 'hide',
              //dismissOnPageChange: true
            });
      loading.present();
      if(isNaN(s)) {
           this.customerprovider.getCustomerAddressForSearch(s).subscribe(
             data => {
                        console.log("IN SEARCH");
                        console.log(data);
                          
                          this.customers = data;
                      
                      loading.dismiss();
                      this.customerprovider.getCustomerAddressForSearch(Small).subscribe(
                           data => {
                                      console.log("IN SEARCH Small Data",data);
                                      this.customers1 = data;
                                      console.log(this.customers1.length);
                                      console.log(this.customers.length);
                                      var j = this.customers.length;
                                      for(var i=0;i<this.customers1.length;i++){
                                        this.customers[i+j] = this.customers1[i];
                                       }
                                    this.customerprovider.getCustomerAddressForSearch(Capital).subscribe(
                                               data => {
                                                          console.log("IN SEARCH Capital Data",data);
                                                          this.customers1 = data;
                                                          console.log(this.customers1.length);
                                                          console.log(this.customers.length);
                                                          var j = this.customers.length;
                                                          for(var i=0;i<this.customers1.length;i++){
                                                            this.customers[i+j] = this.customers1[i];
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
         }else{
            this.customerprovider.getCustomerAddressForSearch(s).subscribe(
                data => {
                           console.log("IN SEARCH");
                           console.log(data);                            
                             this.customers = data;
                         
                         loading.dismiss();
                },
                       err => {
                           console.log("%^%^%^%^%");
                           //console.error(err 
                       },
                       );
         }
        }
   
  }
	entrySelected(entry){
    console.log("Entry",entry);
    let prompt              =  this.alert.create({
            title               :   entry.name,
            cssClass            :   'accepted',
            enableBackdropDismiss               :     false,
            buttons: [{
                text            :   'OK',
                cssClass        :   'button1',
                handler         :   data        =>  {
                    this.dismis();
                  //}
                }
            },{
                text            :   'Cancel',
                cssClass        :   'button1',
                handler         :   data        =>  {
                    console.log(data);
                }
            }]
        });
        //this.nav.present(prompt);
        var set = this.customerprovider.setCustomerName(entry);

        this.dismis();                                                
   
  }
  loadMore(event){
    if(this.searchValue.length <= 0 ){
        this.event = event;
        console.log("Evemt === ",this.event);
         var self = this;
        //this.start = this.end + 1;      **** IT SHOULD NOT USE BECOZ RECORDS WILL BE FROM 0 TO 9 ******
        this.start = this.end;
        this.end = this.end + 10;
        this.customerprovider.getBPlocationid(this.start,this.end).subscribe(

            data           =>  {
              this.load = data;
                if(this.load.length == 0){
                    console.log("gateEntries are empty");
                    this.stop = true;
                }else{
                    console.log("Vendors LoadMore",data);
                    var j=this.customers.length;
                    
                    console.log("LOAD",this.load);
                    console.log("LENGTH",this.load.length);
                    for(var i=0;i<this.load.length;i++){
                     this.customers[j+i] = this.load[i];

                    }
                    console.log("FULL",this.customers);
                }
            },
            err                 =>  {
                err.stacKTrace[2] = "OrderProvider :: getPendingPurchaseOrders ::"; 
                err.stackTrace[3] = "PO List :: loadOrders ::";
                
                //console.log(err);
            },
            ()                  =>  {
              
                //console.log('get PO Orders completed');
            }
        );
        if(this.stop){
            console.log("IT is stopped");
            event.enable(false);
        }
        else{
            console.log("IT is not stopped");
        }
        setTimeout(() => {
            event.complete();
      console.log('Async operation has ended');
      
    }, 1000);
    } else{
    //event.enable(false);
     setTimeout(() => {
           event.complete();
     console.log('Async operation has ended');
     
   }, 100);
   }
    
  }
}
