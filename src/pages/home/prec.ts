import { Component } from '@angular/core';
import { NavController, AlertController,NavParams,LoadingController,ToastController } from 'ionic-angular';
import { Customers } from '../address/customers';
import {UtilityProvider}           from    '../../providers/utility';
import {UserProvider}           from    '../../providers/user';
import {CustomerProvider}           from    '../../providers/customer';
import {ProductsProvider}                from     '../../providers/product';
import {SalesProvider}                from     '../../providers/Sales';
import {Config}                from     '../../providers/config';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { FilePath } from '@ionic-native/file-path';
import {HomePage} from '../../pages/home/home';
import {ShippiningPage} from '../../pages/shippining/shippining'
import { PrescriptionPage } from '../prescription/prescription';
declare let cordova: any;
@Component({
  selector: 'page-prec',
  templateUrl: 'prec.html'
})
export class PrecPage {
    public address:any = null;
  public carttotalamountwithdiscount;
  public products:any         =   [];
  public carttotalamount;
  public saleorderrecordid:any ;
  lastImage: string = null;
  public discount: any ;
  private message : string = "";
  private promo : boolean = true;
  private msgcolor ;
  public customerforsalesorder:any = {};
  public carttotal:any ;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private utilityprovider : UtilityProvider,
    private userProvider    :   UserProvider,
    private salesprovider      :    SalesProvider,
    private productsProvider      :    ProductsProvider,
    private alert1 : AlertController,
    private config      :    Config,
    private navparams :NavParams,
    private toast : ToastController,
    // private alert1 : AlertController,
    // private navParams : NavParams,
    private customerprovider : CustomerProvider,
    private loading : LoadingController,
                private transfer: FileTransfer, private file: File,
                private photoViewer: PhotoViewer,
                private alertctrl : AlertController,) {
    // If we navigated to this page, we will have an item available as a nav param
   

    this.discount = null;
    this.carttotalamount=0.00;
this.carttotalamountwithdiscount = 0.00;
this.customerforsalesorder.bpid = null;
this.customerforsalesorder.bplocationid= null;
this.customerforsalesorder.warehouse= null;
this.address =null;

 
}
Selectcustomer(){
    this.navCtrl.push(Customers);
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
        // this.cartTotal();
  }
  createDraftOrder(){
    this.salesprovider.createDraftOrder(this.customerforsalesorder).subscribe(
      order => {
    //     console.log("succes in Order creation"+order);
    //     this.salesprovider.createOrderLinesInOrder(this.customerforsalesorder,order[0].id,this.discount).subscribe(
    //       orderline => {
    //         console.log("succes in Orderlines creation"+orderline);
            let alertBox = this.alert1.create({
              title: 'Order Created Successfully with Document No :'+order[0].documentNo,
              cssClass : 'alertDanger',
              buttons: [{
                text: 'OK',
                handler: data => {
                    console.log('Ok clicked');
                    this.utilityprovider.sendMessages(this.userProvider.userName,"Dear+Customer%2COrder+No.+"+order[0].documentNo+"+has+been+placed+successfully.+It+will+be+processed+in+48hrs+and+you+will+get+delivery+notification.%0D%0AIf+required+our+customer+support+team+will+get+in+touch+with+you.")
                    .subscribe(
                      userData        =>  {
                          let USER = userData;
                        
                      },
                      err             =>  {
                         
                      },
                      ()              =>  {
                      }
                  );
              this.uploadImage(order[0].id);
              this.navCtrl.setRoot(HomePage);
                    

                    // this.navCtrl.push(PaymenPage,{"saleorderrecordid":order[0].id,"carttotal":this.carttotalamount,"salesorderbpid":this.customerforsalesorder.bpid,"orderno":order[0].documentNo});
                }
            }],enableBackdropDismiss: false 
              });
            alertBox.present();
        // //   },
        // //   orderlineerror => {
        // //     console.log("error in Orderlines creation"+orderlineerror);
        // //   }
        // );
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

  public uploadImage(orderid) {
    // Destination URL
    //var url = "http://94.130.127.19:8080/drainvac/CRM_UploadFile?l=muni1&p=123";
    var url = this.userProvider.authenticateURL(this.config.apipoint+"UploadFile?");
    // File for Upload
    // var targetPath = this.pathForImage(this.lastImage);
  
    // File name only
    var filename = this.navparams.get("image");
    var targetPath = this.pathForImage(filename);
  
    console.log("targetpath"+filename+"gg--"+targetPath);
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
                        console.log("image options"+options.params);
        }, err => {
            loading.dismissAll()
            let toast = this.toast.create({
              message: 'Error while uploading file.',
              duration: 3000,
              position: 'bottom',
              cssClass:"toast"
            });
            toast.present();      
         });
  }
//   CompleteOrder(paymentid){
    
//     let loading = this.loading.create({
//       content: "Please Wait..",
//     });
//      loading.present();

//     this.salesprovider.Ordercomplete(this.saleorderrecordid).subscribe(
//       Ordersuccess => {
//         this.productsProvider.productList = [];    
//           console.log("====>Ordersuccess",Ordersuccess);
//           loading.dismiss();
//           if(Ordersuccess.status == "0") {
//             if(this.payment.paymenttype == "online"){
//               let createdAlert = this.alertctrl.create({
//                 title: "Order Placed Successfully, Your Payment Reference no is "+paymentid,
//                 buttons: [{
//                 text: 'OK',
//                 handler: data => {
//                     console.log('Ok clicked');
//                     this.nav.setRoot(HomePage);
//                   }
//             }],enableBackdropDismiss: false 
//             }); 
//             createdAlert.present();
//             }
//             else{
//               let createdAlert = this.alertctrl.create({
//                 title: "Order Placed Successfully",
//                 buttons: [{
//                 text: 'OK',
//                 handler: data => {
//                     console.log('Ok clicked');
//                        this.utilityprovider.sendMessages(this.userprovider.userName,"Dear+Customer%2COrder+No.+"+this.navParams.get("orderno")+"+has+been+placed+successfully.+It+will+be+processed+in+48hrs+and+you+will+get+delivery+notification.%0D%0AIf+required+our+customer+support+team+will+get+in+touch+with+you.")
//                        .subscribe(
//                             userData        =>  {
//                                 let USER = userData;
                              
//                             },
//                             err             =>  {
                               
//                             },
//                             ()              =>  {
//                             }
//                         );
//                     this.nav.setRoot(HomePage);

//                   }
//             }],enableBackdropDismiss: false 
//             }); 
//             createdAlert.present();
//             }

//                 }
//                 else{
//                   let createdAlert = this.alertctrl.create({
//                     title: Ordersuccess.message.text,
//                     buttons: [{
//                     text: 'OK',
//                     handler: data => {
//                         console.log('Ok clicked');
//                       }
//                 }],enableBackdropDismiss: false 
//                 })
//         createdAlert.present();
//                 }
//       },
//       Ordererr => {
//           //console.error(err);
//           loading.dismiss();
//           alert('Error: ' + JSON.stringify(Ordererr));
//       }
//       );
    
//   }
}