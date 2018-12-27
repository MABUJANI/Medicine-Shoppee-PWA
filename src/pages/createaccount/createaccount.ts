import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';


import {HttpClientModule} from '@angular/common/http';
import {UtilityProvider}           from    '../../providers/utility';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html'
})
export class CreateaccountPage {
  private user    :   any ={};
  public type = 'password';
  public showPass = false;


  constructor(public navCtrl: NavController,
    private utilityprovider : UtilityProvider,private alert : AlertController
    ) {

    this.user.firstname= null;
    this.user.lastname= null;
    this.user.mobile= null;
    this.user.email= null;
    this.user.password= null;

  }
  showPassword() {
    this.showPass = !this.showPass;
  
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }


  register(){
    if(this.user.firstname == null || this.user.firstname == "")
      alert("Please Enter First Name");
    else if(this.user.lastname == null || this.user.lastname == "")
      alert("Please Enter Last Name");
    else if(this.user.mobile == null || this.user.mobile == "")
      alert("Please Enter Mobile No");
    else if(this.user.mobile.length != 10)
      alert("Please enter 10 digit Mobile Number");
    else if(this.user.email == null || this.user.email == "")
      alert("Please Enter Email");
    else if(this.user.password == null || this.user.password == "")
      alert("Please Enter Password");
    else{
    this.utilityprovider.Createuser(this.user).subscribe(
      usersuccess => {
        console.log("succes in usersuccess creation"+usersuccess);
        let alertBox = this.alert.create({
          title: usersuccess.message+' User Created Successfully',
          cssClass : 'alertDanger' ,
          buttons: [{
            text: 'OK',
            handler: data => {
                console.log('Ok clicked');
                this.navCtrl.pop();
            }
        }],enableBackdropDismiss: false 
          });
        alertBox.setCssClass('alertDanger');
        alertBox.present();
      },
      usererror => {
        console.log("error in customeraddress creation"+usererror);
      }
    )
    }

  }

}
