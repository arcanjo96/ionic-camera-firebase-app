import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AddProdutoPage } from '../pages/add-produto/add-produto';
import { ListaProdutosPage } from '../pages/lista-produtos/lista-produtos';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  @ViewChild('nav')
  navCtrl: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  logout() {
    this.afAuth.auth.signOut().then( () => {
      console.log("Logout OK");
      this.navCtrl.setRoot(LoginPage);
    }).catch(() => {
      //console.log(e);
      this.navCtrl.setRoot(LoginPage);
    });
  }

  addService() {
    //this.navCtrl.push(ServicesPage);
    this.navCtrl.push(AddProdutoPage);
  }

  services() {
    //this.navCtrl.setRoot(ListServicesPage);
    this.navCtrl.setRoot(ListaProdutosPage);
  }
}

