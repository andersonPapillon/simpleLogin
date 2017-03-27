import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading  } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-dispath',
  templateUrl: 'dispath.html'
})

export class DispathPage {

  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: Facebook) {this.onPageWillEnter();}

  onPageWillEnter(){
    this.fb.getLoginStatus().then((response) => {
        if(response.status == 'connected') {
          //setTimeout(() => {
          //this.loading.dismiss();
          this.navCtrl.setRoot(HomePage);
        //});
        }
        else {
          alert('Not Logged in');
        }
    })    
  }
        
}
