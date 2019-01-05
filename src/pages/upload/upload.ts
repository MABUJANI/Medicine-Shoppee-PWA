import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {LoadingController} from 'ionic-angular';
import { OrderPage } from '../order/order';
import { File } from '@ionic-native/file';
import {ProductsProvider}                from     '../../providers/product';
import { PrecPage } from '../home/prec';
import { ProductsPage } from '../product.1/product2';
import { HomePage } from '../home/home';
import { PrescriptionPage } from '../prescription/prescription';

declare let cordova: any;

@Component({
  selector: 'page-upload ',
  templateUrl: 'upload.html'
})
export class UploadPage {
  public prescriptionImage : string = null;
  lastImage: string = null;
  base64Image:string;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController,private camera:Camera,private file: File,
    private productsProvider      :    ProductsProvider,private alert :AlertController,
    ) {

  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  } 

  fromGallery(){
    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  }
  
  fromCamera(){
    this.takePicture(this.camera.PictureSourceType.CAMERA);
  }
    takePicture(sourceType){
      console.log("***");
      var self = this;
      this.camera.getPicture({
          //destinationType: this.camera.DestinationType.DATA_URL,
          //destinationType: this.camera.DestinationType.FILE_URI,
          sourceType : sourceType,
          targetWidth:1200,
          targetHeight:1000,
          saveToPhotoAlbum: true,
          }).then((imagePath) => {      
            if(sourceType === this.camera.PictureSourceType.PHOTOLIBRARY){
              let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
              let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
              this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }else{
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);  
                  console.log("imagepath"+correctPath);
                  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
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
            this.prescriptionImage = this.lastImage;
            this.productsProvider.presimage = this.lastImage;
            console.log("targetpath"+targetPath);
            //this.uploadImage();
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
        
  
  order(){
    if(this.prescriptionImage == null || this.prescriptionImage == "")
    {
       alert("Please Select Prescription Image");
    }
    else{
     
      
        
        let alertBox = this.alert.create({
          // template: customTemplate,
          title:'Confirmation' ,
          subTitle:'Do you know medicines in prescription?',
          cssClass : 'alertcss' ,
          buttons: [
                  {
                      text: 'Yes', 
                      // cssClass : 'alertcss' ,
                      handler: data => {
                          console.log('Cancel clicked');
                          this.navCtrl.push(PrescriptionPage,{"image":this.prescriptionImage});
                      }
                  },
                  {
                      text: 'No',
                      // cssClass : 'alertcss' ,
                      handler: data => {
                          console.log('Saved clicked');
                          this.navCtrl.push(PrecPage,{"image":this.prescriptionImage});

                      }
                              
          }
          ]
          });
        alertBox.present();
        

    }
  }
}












