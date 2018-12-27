import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-Forgot',
  templateUrl: 'Forgot.html'
})
export class ForgotPage {

    // ImageArray :any=[];

  constructor(public navCtrl: NavController,public navparams :NavParams ){
    //   this.ImageArray =[{'image':'assets/imgs/1.png'}]

  }
  forgotmsg(){
      alert("Your Password has been changed successfully.")
  }
  
  
}
