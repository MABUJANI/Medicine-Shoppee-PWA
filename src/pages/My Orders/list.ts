import { NavController,Platform,LoadingController}    from    'ionic-angular';
import { Component } from '@angular/core';
import {SalesProvider} from '../../providers/Sales';
import {UserProvider} from '../../providers/user';
import {Config} from '../../providers/config';

@Component({
  templateUrl: 'list.html', 
})
export class listPage {
    public foundRepos;
    public username;
    orderList=[];
    public orders;
    public orderlines = [];
    public temp;
    public start ;
    public end;
    public stop;
    public event ; 
    shownGroup = null;
    constructor(private platform        :   Platform,private nav: NavController,private config:Config,
        private userProvider:UserProvider,
        private salesprovider:SalesProvider,
        private loading : LoadingController) 
    {
        this.nav=nav;
        this.start = 0;
        this.end = 10;
        this.stop = false;
       // this.loadOrders();
       platform.ready().then(() => {
          //window.analytics.trackView("Listing Page");
        });
    }

    loadOrders() {
        this.start = 0;
        this.end = 10;
        this.stop = false;
       
        this.orders = [];
        var self = this;
        console.log("start",this.start);
        this.salesprovider.getmyOrders(self.start,self.end).subscribe(
            data => {
                self.orders= data;
               
                //console.log(this.orders);   
                for(var i in self.orders){
                    
                    for(var j in self.orders){
                         if(self.orders[i].documentNo > self.orders[j].documentNo){
                             
                           
                             self.temp = self.orders[i];
                             self.orders[i]=self.orders[j];
                             self.orders[j]= self.temp;
                             
                         }
                    }
                }
            },
            err => {
                
                var l = err.stackTrace.length;
                err.stackTrace[l] = "OrderProvider :: GetDraftOrders ::";
                err.stackTrace[l+1] = "ListPage :: LoadOrders ::";
                //console.error(err 
            },
            () => console.log('getDraftOrders completed')
        );
        
    }
    ionViewDidEnter(){
      
        this.orders = [];
        var self = this;
        console.log("sstart",this.start);
        
        this.salesprovider.getmyOrders(this.start,this.end).subscribe(
            data => {
              
                self.orders= data;
              
                //console.log(this.orders);   
                for(var i in self.orders){
                   
                    for(var j in self.orders){
                        
                         if(self.orders[i].documentNo < self.orders[j].documentNo){
                             if(i < j){
                                
                           
                             self.temp = self.orders[i];
                             self.orders[i]=self.orders[j];
                             self.orders[j]= self.temp;
                             
                             }
                             
                         }
                    }
                }
            },
            err => {
                
                var l = err.stackTrace.length;
                err.stackTrace[l] = "OrderProvider :: GetDraftOrders ::";
                err.stackTrace[l+1] = "ListPage :: LoadOrders ::";
                //console.error(err 
            },
            () => console.log('getDraftOrders completed')
        );

    }
    
    orderSelected(order){ 
       // window.analytics.trackEvent("OrderLogin", "Order is selected", "Label", 25);        
    }

    onPageLoaded() {
    //this.newModule('New');
    }

    loadMore(event){
        this.event = event;
        console.log("*********))))((((((********** Load More");
        console.log(event);
        var self = this;
        this.start = this.end + 1;
        this.end = this.end + 10;
        console.log("sssstat",this.start);
        this.salesprovider.getmyOrders(this.start,this.end).subscribe(
            data => {
                if(data.length == 0){
                    console.log("Event Complete");
                    self.stop = true;
                    //event.complete();
                }
                  console.log("llklklkllk");
                  console.log("Length self.orders= ",self.orders.length);
                  var l = self.orders.length;
                  console.log(self.orders);
                  console.log("Length data= ",data.length);
                  console.log("llklklkllk");
                  console.log(data);
                for(var jj = 0;jj<data.length; jj++){
                    self.orders[l + jj] = data[jj];
                }
                  console.log("llklklkllk==============");
                  console.log(self.orders);
                //console.log(this.orders);   
                for(var i in self.orders){
                   
                    for(var j in self.orders){
                        
                         if(self.orders[i].documentNo < self.orders[j].documentNo){
                             if(i < j){
                                
                           
                             self.temp = self.orders[i];
                             self.orders[i]=self.orders[j];
                             self.orders[j]= self.temp;
                             
                             }
                             
                         }
                    }
                }
            },
            err => {
                
                var l = err.stackTrace.length;
                err.stackTrace[l] = "OrderProvider :: GetDraftOrders ::";
                err.stackTrace[l+1] = "ListPage :: LoadOrders ::";
                //console.error(err 
            },
            () => console.log('getDraftOrders completed')
        );
        if(self.stop){
            console.log("IT is stopped");
            event.enable(false);
        }
        else{
            console.log("IT is not stopped");
        }
        setTimeout(() => {
            event.complete();
      console.log('Async operation has ended');
      
    }, 500);
    }

    // http://stackoverflow.com/a/3177838
    timeSince(dateString) : any {
        let date: any = new Date(dateString);
        let newDate: any = new Date();
        let seconds: any = Math.floor((newDate - date) / 1000);

        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }

        return Math.floor(seconds) + " seconds";
        
    }

    toggleGroup(group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        } else {
            this.shownGroup = group;
        }
        this.salesprovider.getmyOrderlines(this.orders[group].id).subscribe(
            data => {
            this.orderlines= data;                       
            },
            err => {        
            },
            () => console.log('getDraftOrders completed')
        );
    };
    isGroupShown(group) {
        return this.shownGroup === group;
    };

}
