import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { ListaProdutosPage } from '../lista-produtos/lista-produtos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage { 

  user = {} as User;
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase: AngularFireAuth, private menuCtrl: MenuController,
     private toastCtrl: ToastController, private formBuilder: FormBuilder) {
       this.createForm();
   
  }
  register() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async loginForm(user: any) {
    
    if(this.form.valid) {
    this.firebase.auth.signInWithEmailAndPassword(user.email, user.password).then(loginSuccess => {
      this.navCtrl.setRoot(ListaProdutosPage);
    }).catch(() => {
      this.toastCtrl.create({
        message: 'Email ou senha errada!!',
        duration: 3000,
        position: 'bottom'
      }).present();
    });
  } 
}
}
