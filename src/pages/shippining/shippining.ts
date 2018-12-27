import { Component } from '@angular/core';
import { NavController,AlertController,NavParams,ToastController,LoadingController } from 'ionic-angular';
import {UtilityProvider}           from    '../../providers/utility';
import {UserProvider}           from    '../../providers/user';
import {CustomerProvider}           from    '../../providers/customer';
import { Customers } from '../address/customers';
import {SalesProvider}                from     '../../providers/Sales';
import {ProductsProvider}                from     '../../providers/product';
import { PaymenPage } from '../payment1/payment';
import { File } from '@ionic-native/file';
import { PaymentPage } from '../payment/payment';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {Config}                from     '../../providers/config';

declare let cordova: any;

@Component({
  selector: 'page-shippining ',
  templateUrl: 'shippining.html'
})
export class ShippiningPage {
  public address:any = null;
  public carttotalamountwithdiscount;
  public products:any         =   [];
  public carttotalamount;
  lastImage: string = null;
  public discount: any ;
  private message : string = "";
  private promo : boolean = true;
  private msgcolor ;
  public customerforsalesorder:any = {};
  public carttotal:any ;

  constructor(public navCtrl: NavController,
    private utilityprovider : UtilityProvider,
    private userProvider    :   UserProvider,
    private salesprovider      :    SalesProvider,
    private productsProvider      :    ProductsProvider,
    private alert1 : AlertController,   private transfer: FileTransfer, private file: File,
    private toast : ToastController,private loading: LoadingController,
    private config      :    Config,

    private navParams : NavParams,
    private customerprovider : CustomerProvider,
    ) {
                this.discount = null;
                this.carttotalamount=0.00;
        this.carttotalamountwithdiscount = 0.00;
        this.customerforsalesorder.bpid = null;
          this.customerforsalesorder.bplocationid= null;
          this.customerforsalesorder.warehouse= null;
          this.address =null;
  }
  
  ionViewDidLoad() {
    this.utilityprovider.getUserlocation().subscribe(
      d => {
          console.log("====>orde",d);
          this.customerforsalesorder.warehouse          =   d[0].id;
      },
      err => {
          var l = err.stackTrace.length;
          //console.error(err);
          alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
      },
  );
  //this.utilityprovider.sendNotification(this.userprovider.fcmid);
  }

  ionViewWillEnter(){
    if(this.customerprovider.customerName != null){
      this.address = this.customerprovider.customerName.locationAddress$_identifier;
      this.customerforsalesorder.bplocationid= this.customerprovider.customerName.id;

    }
    else{
      this.utilityprovider.getBpLocation().subscribe(
        d => {
            console.log("====>orde",d);
            this.address = d[0].locationAddress$_identifier;
            this.customerforsalesorder.bplocationid= d[0].id;
        },
        err => {
            var l = err.stackTrace.length;
            //console.error(err);
            alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
        },
        () => {}
    );
    }
    this.products = this.productsProvider.productList;
        console.log("productslenght"+this.products.length);
        this.cartTotal();
  }

  cartTotal(){
    let prds = this.products;
    var total=0;
    for (var i = 0; i < prds.length ; i++) {
        total=total+prds[i].qty*prds[i].price;
        console.log(total);
    } 
    this.carttotalamount=(Math.round(total*100)/100).toFixed(2);   
    this.carttotalamountwithdiscount = this.carttotalamount ; 
  }

  discountchange(discount){
    this.carttotalamount = this.carttotalamountwithdiscount - ((this.carttotalamountwithdiscount * discount)/100);
    this.carttotalamount =  (Math.round(this.carttotalamount*100)/100).toFixed(2);
    console.log("carttotalamount1"+this.carttotalamount);
};

  deleteProduct = function(index) {
    this.products.splice(index, 1);
    this.cartTotal();
};

applypromocode(){
  if(this.discount == "FIRST25")
  {
    if(this.carttotalamountwithdiscount < 100)
    {
          this.message = "Min Order value is 100 for this Promocode";
          this.promo = false;
          this.msgcolor = "#ff3300";
    }
   
    else{
  this.salesprovider.CheckFirstorderornot().subscribe(
    d => {
        console.log("====>orde",d);
        if(d.length == 0){
          this.message = "Hey, you got 25% discount on your Order";
          this.promo = false;
          this.msgcolor = "#028000";
          this.discountchange(25);
        }
       
        else{
          this.message = "You Already used this Promocode";
          this.promo = false;
          this.msgcolor = "#ff3300";
        }
    },
    err => {
        var l = err.stackTrace.length;
        //console.error(err);
        alert('Error: Creating Sales Order :: Getting Organizations :: ' + JSON.stringify(err));
    },
    () => {}
);
}
}
else if(this.discount == null)
{
if(this.carttotalamountwithdiscount < 100)
    {
          this.message = "Please enter a valid PromoCode";
          this.promo = false;
          this.msgcolor = "#ff3300";
    }
}
else{

if(this.carttotalamountwithdiscount < 100)
{
      this.message = "Please enter a valid PromoCode";
      this.promo = false;
      this.msgcolor = "#ff3300";
}

}
}

  Selectcustomer(){
    this.navCtrl.push(Customers);
  }

     paymentPage() {
    this.navCtrl.push(PaymentPage);
  }

  createDraftOrder(){
    if(this.address==null)
    {
      alert("Please Select Your Delivery Address.");
    }
    this.salesprovider.createDraftOrder(this.customerforsalesorder).subscribe(
      order => {
        console.log("succes in Order creation"+order);
        this.salesprovider.createOrderLinesInOrder(this.customerforsalesorder,order[0].id,this.discount).subscribe(
          orderline => {
            console.log("succes in Orderlines creation"+orderline);
            let alertBox = this.alert1.create({
              title: 'Order Created Successfully with Document No :'+order[0].documentNo,
              cssClass : 'alertDanger',
              buttons: [{
                text: 'OK',
                handler: data => {
                    console.log('Ok clicked');
                    if(this.productsProvider.presimage == null || this.productsProvider.presimage == "" )
                    this.navCtrl.push(PaymenPage,{"saleorderrecordid":order[0].id,"carttotal":this.carttotalamount,"salesorderbpid":this.customerforsalesorder.bpid,"orderno":order[0].documentNo});
                    else
                      this.uploadImage(order[0].id,order[0].documentNo);
                    // this.navCtrl.push(PrecPage,{"image":this.prescriptionImage});
                }
            }],enableBackdropDismiss: false 
              });
            alertBox.present();
          },
          orderlineerror => {
            console.log("error in Orderlines creation"+orderlineerror);
          }
        );
      },
      ordererror => {
        console.log("error in order creation"+ordererror);
      }
    );
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  public uploadImage(orderid,docno) {
    // Destination URL
    //var url = "http://94.130.127.19:8080/drainvac/CRM_UploadFile?l=muni1&p=123";
    var url = this.userProvider.authenticateURL(this.config.apipoint+"UploadFile?");
    // File for Upload
    // var targetPath = this.pathForImage(this.lastImage);
  
    // File name only

    var filename = this.productsProvider.presimage;
    var targetPath = this.pathForImage(filename);

    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'recordid': orderid,
        "tableid" : "259",
        "clientid" : this.userProvider.client,
        "orgid" : this.userProvider.organization}
    };
  
    const fileTransfer: FileTransferObject = this.transfer.create();

        let loading = this.loading.create({
            content: 'Uploading...',
        });
        loading.present();
        
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(data => {
            loading.dismissAll()
            let toast = this.toast.create({
              message: 'Image Uploaded Successfully',
              duration: 3000,
              position: 'bottom',
              cssClass:"toast"
            });
            toast.present();          
            this.productsProvider.presimage = null; 
            this.navCtrl.push(PaymenPage,{"saleorderrecordid":orderid,"carttotal":this.carttotalamount,"salesorderbpid":this.customerforsalesorder.bpid,"orderno":docno});
             console.log("image options"+options.params);
        }, err => {
            loading.dismissAll();
            let toast = this.toast.create({
              message: 'Error while uploading file.',
              duration: 3000,
              position: 'bottom',
              cssClass:"toast"
            });
            toast.present();
         });
  }

}
