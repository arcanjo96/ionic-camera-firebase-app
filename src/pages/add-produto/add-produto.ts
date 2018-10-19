import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { Produto } from '../../model/produto';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-add-produto',
  templateUrl: 'add-produto.html',


})
export class AddProdutoPage {
  prod = {} as Produto;
  lista: AngularFireList<any>;
  imagePicture: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase: AngularFireDatabase, private toastCtrl: ToastController,
     private menuCtrl: MenuController, private camera: Camera, private sanitizer: DomSanitizer) {
    this.lista = this.firebase.list('/produtos');
    this.prod = new Produto();
  }
  ionViewDidLoad() {
    this.menuCtrl.enable(false); 
  }

  salvar() {
    this.lista.push(this.prod).then( () => { 
      this.prod = new Produto();
    });
    let toast = this.toastCtrl.create({
      message: 'Produto cadastrado com sucesso!!',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

    this.navCtrl.pop();
    
  }

  selectImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

      this.camera.getPicture(options).then((imageData) => {
      let base64image = 'data:image/jpeg;base64,' + imageData;
      this.imagePicture = base64image;

     }, (err) => {
      // Handle error
     });
  }

  /*uploadImage() {
    let storageRef = this.fb.storage().ref();
    let message = this.imagePicture;
    storageRef.putString(message, 'base64').then((snapshot) => {
      console.log('Uploaded!');
    });
  }*/
}
