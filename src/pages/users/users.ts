import { Component } from '@angular/core';
import { IonicPage, NavController/*, NavParams*/ } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { UserDetailsPage } from '../user-details/user-details';

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

	users:any;

  constructor(public navCtrl: NavController, public http:Http) {
  	this.http.get('http://jsonplaceholder.typicode.com/users')
  		.map(res => res.json()).subscribe(data => {
  			this.users = data;
  		});
  }

  showDetails(/*id:number*/user:any) {
  	this.navCtrl.push(UserDetailsPage, {user})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
