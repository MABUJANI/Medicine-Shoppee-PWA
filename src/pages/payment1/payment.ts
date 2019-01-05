import { NavController,Platform,LoadingController,NavParams,AlertController}    from    'ionic-angular';
import {ProductsProvider}                from     '../../providers/product';
import {CustomerProvider}                from     '../../providers/customer';
import {SalesProvider}                from     '../../providers/Sales';
import {Component} from '@angular/core';
import {UserProvider}                from     '../../providers/user';
import {UtilityProvider}                from     '../../providers/utility';
import {Config}                from     '../../providers/config';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { FilePath } from '@ionic-native/file-path';
import { HomePage } from '../home/home';

declare let cordova: any;

@Component({
  templateUrl: 'payment.html', 
  selector: 'page-paymentspage',
})
export class PaymenPage {
    public payment:any         =   {};
    public prescriptionImage : string = "" ;
    lastImage: string = null;
    public saleorderrecordid:any ;
    public carttotal:any ;
    base64Image:string;
    public prds : any = [];
    public customerbpid:any         =   {};
    public customer:any         =   {};
    public cashColor : string ="#ffffff";
    public onlineColor : string ="#ffffff";

    constructor(private platform        :    Platform,
                private nav             :    NavController,
                private navParams : NavParams,
                private productsProvider      :    ProductsProvider,
                private customerProvider      :    CustomerProvider,
                private userprovider      :    UserProvider,
                private utilityprovider      :    UtilityProvider,
                private salesprovider      :    SalesProvider,
                private config      :    Config,
                private camera: Camera, 
                private loading : LoadingController,
                private transfer: FileTransfer, private file: File,
                private photoViewer: PhotoViewer,
                private alertctrl : AlertController,
                ) {
    
       platform.ready().then(() => {        
            if (this.platform.is('cordova')) {
                // window.analytics.trackView("Gate Exit Page");
            }
        });
        this.customerProvider.customerName = null ;
        this.payment.cashpaid = null;
        this.payment.paymenttype = null;
        this.payment.returnamount = 0.00;
        this.saleorderrecordid = navParams.get("saleorderrecordid");
        this.carttotal = navParams.get("carttotal");
        this.customerbpid = navParams.get("salesorderbpid");

        this.payment.billtotal=parseFloat(this.carttotal);
        
    }

    ionViewWillEnter() {
        
    }

    refresh(){   
    }
    takeGallery(){
      // let loading = this.loading.create({
      //     content: "Please wait while picture loading..",
      //   });
      //    loading.present();
    
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      }
      // let loading = this.loading.create({
      //   content: "Please wait while picture loading..",
      // });
      //  loading.present();
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
      //  let loading = this.loading.create({
      //     content: "Please wait while picture loading..",
      //   });
      //    loading.present();
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
      //  loading.dismiss();
       
      }, (err) => {
       // Handle error
      });
    
    
      
      
     
     
    }
    
    billtotalchange(){
      if(this.payment.cashpaid == null || this.payment.cashpaid == '')
        this.payment.returnamount = 0 ;
      else
        this.payment.returnamount = this.payment.cashpaid - this.payment.billtotal ;
        console.log("retamt"+this.payment.returnamount);
    }
    
    cash(){
          this.payment.paymenttype = "cash" ;
          this.cashColor = "#D6EAF8";
          this.onlineColor = "#ffffff";
    }

    card(){
      this.payment.paymenttype = "online" ;
      this.onlineColor = "#D6EAF8";
      this.cashColor = "#ffffff";
    }

    place(){
      // if(this.prescriptionImage == null || this.prescriptionImage == "")
      // alert("Please Select Prescription Image");
      // else 
      if(this.payment.paymenttype == "" || this.payment.paymenttype == null)
        alert("Please Select Payment Mode");
      else{
      if(this.payment.paymenttype == "online") {
          var options = {
              description: 'Credits towards Online Medicine Order',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: 'rzp_live_dyuLYiy6ymB6cT',
              amount: this.carttotal*100,
              name: 'Medicine Shoppee',
              prefill: {
                email: this.userprovider.email,
                contact: this.userprovider.userName,
                name: this.userprovider.profilename
              },
              theme: {
                color: '#F37254'
              },
              modal: {
                ondismiss: function() {
                  alert('dismissed');
                }
              }
            };
        
            var successCallback = (payment_id) => { 
              //alert('Order Placed Successfully , Your Payment reference no is' + payment_id);
              console.log("paymentid--"+payment_id);
              this.CompleteOrder(payment_id);
            };
        
            var cancelCallback = function(error) {
              alert(error.description + ' (Error ' + error.code + ')');
            };
        
            RazorpayCheckout.open(options, successCallback, cancelCallback);
            
          }
          else{
            this.CompleteOrder("");
          }
        }
      
        }

        takePicture(){
          console.log("***");
          var self = this;
          this.camera.getPicture({
              //destinationType: this.camera.DestinationType.DATA_URL,
              //destinationType: this.camera.DestinationType.FILE_URI,
              sourceType : this.camera.PictureSourceType.CAMERA ,
              targetWidth:1200,
              targetHeight:1000,
              saveToPhotoAlbum: true,
              }).then((imagePath) => {      
                  var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                  var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);  
                      console.log("imagepath"+correctPath);
                      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                  }, (err) => {
                  console.log(err);
              });
          }
      
          private createFileName() {
              var d = new Date(),
              n = d.getTime(),
              newFileName =  n + ".jpg";
              return newFileName;
            }
             
            // Copy the image to a local folder
            private copyFileToLocalDir(namePath, currentName, newFileName) {
              this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
                this.lastImage = newFileName;
                var targetPath = this.pathForImage(this.lastImage);
                this.prescriptionImage = targetPath;
                console.log("targetpath"+targetPath);
                this.uploadImage();
              }, error => {
                  
              });
            }
  
            public pathForImage(img) {
              if (img === null) {
                return '';
              } else {
                return cordova.file.dataDirectory + img;
              }
            }
            
            public uploadImage() {
              // Destination URL
              //var url = "http://94.130.127.19:8080/drainvac/CRM_UploadFile?l=muni1&p=123";
              var url = this.userprovider.authenticateURL(this.config.apipoint+"UploadFile?");
              // File for Upload
              var targetPath = this.pathForImage(this.lastImage);
            
              // File name only
              var filename = this.lastImage;
            
              var options = {
                fileKey: "file",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params : {'recordid': this.saleorderrecordid,
                  "tableid" : "259",
                  "clientid" : this.userprovider.client,
                  "orgid" : this.userprovider.organization}
              };
            
              const fileTransfer: FileTransferObject = this.transfer.create();
   
                  let loading = this.loading.create({
                      content: 'Uploading...',
                  });
                  loading.present();
                  
                  // Use the FileTransfer to upload the image
                  fileTransfer.upload(targetPath, url, options).then(data => {
                      loading.dismissAll()
                      alert('Image succesfully uploaded.');
                      console.log("image options"+options.params);
                  }, err => {
                      loading.dismissAll()
                      alert('Error while uploading file.');
                   });
            }

            viewFullScreen(image,title): void {
              console.log("image is",image);
              this.platform.ready()
                  .then(()=>{
                      if(this.platform.is('cordova')){
                        
                         if(PhotoViewer) // make sure it's loaded (works only on Android and iOS)
                          this.photoViewer.show(image, title);
                      }
                      else{
                          console.log("Nothing");
                      }
                  });
              }

              CompleteOrder(paymentid){
    
                let loading = this.loading.create({
                  content: "Please Wait..",
                });
                 loading.present();
            
                this.salesprovider.Ordercomplete(this.saleorderrecordid).subscribe(
                  Ordersuccess => {
                    this.productsProvider.productList = [];    
                      console.log("====>Ordersuccess",Ordersuccess);
                      loading.dismiss();
                      if(Ordersuccess.status == "0") {
                        if(this.payment.paymenttype == "online"){
                          let createdAlert = this.alertctrl.create({
                            title: 'Payment Confirmation',
                            subTitle:"Order Placed Successfully, Your Payment Reference no is "+paymentid,
                            buttons: [{
                            text: 'OK',
                            handler: data => {
                                console.log('Ok clicked');
                                this.nav.setRoot(HomePage);
                              }
                        }],enableBackdropDismiss: false 
                        }); 
                        createdAlert.present();
                        }
                        else{
                          let createdAlert = this.alertctrl.create({
                            title: 'Order Confirmation',
                            subTitle:"Order Placed Successfully",
                            buttons: [{
                            text: 'OK',
                            handler: data => {
                                console.log('Ok clicked');
                                   this.utilityprovider.sendMessages(this.userprovider.userName,"Dear+Customer%2COrder+No.+"+this.navParams.get("orderno")+"+has+been+placed+successfully.+It+will+be+processed+within+48hrs+and+you+will+get+delivery+notification.%0D%0AIf+required+our+customer+support+team+will+get+in+touch+with+you.")
                                   .subscribe(
                                        userData        =>  {
                                            let USER = userData;
                                          
                                        },
                                        err             =>  {
                                           
                                        },
                                        ()              =>  {
                                        }
                                    );
                                this.nav.setRoot(HomePage);

                              }
                        }],enableBackdropDismiss: false 
                        }); 
                        createdAlert.present();
                        }

                            }
                            else{
                              let createdAlert = this.alertctrl.create({
                                title: Ordersuccess.message.text,
                                buttons: [{
                                text: 'OK',
                                handler: data => {
                                    console.log('Ok clicked');
                                  }
                            }],enableBackdropDismiss: false 
                            })
                    createdAlert.present();
                            }
                  },
                  Ordererr => {
                      //console.error(err);
                      loading.dismiss();
                      alert('Error: ' + JSON.stringify(Ordererr));
                  }
                  );
                
              }

        

       crateinvoice(){
  
        var productsTable = '<div style="margin-top:100px"><table width="100%" border=1>';
        productsTable       +=  '<tr>';
        productsTable       +=  '<th>No</th>';
        productsTable       +=  '<th>Item</th>';
        productsTable       +=  '<th>Batch No</th>';
        productsTable       +=  '<th>Qty</th>';
        productsTable       +=  '<th>Unit Price</th>';
        productsTable       +=  '<th>Total</th>';
        productsTable       +=  '</tr>';
        
      console.log("len"+this.prds.length);
      for (var i = 0; i < this.prds.length ; i++) {
        productsTable   +=  '<tr>';
        productsTable   +=  '<td>' + (i+1) + '</td>';
        productsTable   +=  '<td>' + this.prds[i].product$_identifier + '</td>';
        productsTable   +=  '<td>' + this.prds[i].attributeSetValue$_identifier.split("_")[0] + '</td>';
        productsTable   +=  '<td>' + this.prds[i].orderedQuantity + '</td>';
        productsTable   +=  '<td>' + this.prds[i].unitPrice + '</td>';
        productsTable   +=  '<td>' + this.prds[i].lineNetAmount + '</td>';
    }
    
       productsTable   +=  '</tr>';
        productsTable   +=  '<tr>';
        productsTable   +=  '<td colspan="6">Total Order Amount:'+this.carttotal+'</td>';
        productsTable   +=  '</tr>';
        
      productsTable += "</table></div>";

      var customerdetails = '<div><div style="float: left;margin-top:30px;">';
       customerdetails += '<p>Customer Name :'+this.customer.name+',<br>Customer Mobile :'+this.customer.mobile+',<br>CustomerAddress : '+this.customer.address1+',<br>'+this.customer.address2+',<br>'+this.customer.city+',<br>'+this.customer.state+',<br>'+this.customer.pincode;
       customerdetails += '</p></div>';
       customerdetails += '<div style="float: right;margin-top:50px;">';
       customerdetails += '<p>Invoice No :'+this.customer.name+',<br>Invoice Date :'+new Date().getDate()+"/"+new Date().getMonth()+1+"/"+new Date().getFullYear();
       customerdetails += '</p></div></div>';

       var retailerdetails = '<div style="float: left;margin-top:10px;">';
       retailerdetails += '<p>Retailer Name :'+this.customer.retanme+'</p><br><p> Retailer Address : '+this.customer.retaddress+'<br>GSTIN : '+this.customer.gstno;
       retailerdetails += '</p></div></div><hr>';

       document.addEventListener('deviceready', function() {
        cordova.plugins.pdf.htmlToPDF({
          data: '<html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <style> img {max-width: 100%;  height: auto; } </style></head><body><div><h1><center><u>Sales Invoice</u></center></h1></div><div><div><img src="https://lh3.googleusercontent.com/miD1wJdxkEZ_M95yABqQB6ol3weYXBFVPWyTZ3ARW2FvH7fFpUKa17B5B2oVARa7hGGS=w300" width="150" height="150"></div>'+retailerdetails+customerdetails+productsTable+'</body></html>'
          ,documentSize: "A4",
          landscape: "portrait",
          type: "share"
      },
      (sucess) => console.log('sucess: ', sucess + productsTable),
      (error) => console.log('error:', error));
    });
    }      
}
