import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  
  constructor(public nav: NavController,
              public navParams: NavParams,
              private auth: AuthService,
              private alertCtrl: AlertController) {
    //let info = this.auth.getUserInfo();
    //this.username = info.name;
    //this.email = info.email;           
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
  }
}