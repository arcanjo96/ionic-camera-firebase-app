import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AddProdutoPage } from '../add-produto/add-produto';

/**
 * Generated class for the ListaProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-produtos',
  templateUrl: 'lista-produtos.html',
})
export class ListaProdutosPage {
  private PATH = '/produtos';
  produtos: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private menuCtrl: MenuController,
     private toastCtrl: ToastController, private modal: ModalController) {
    this.produtos = this.getAll();
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true);
  }

  getAll() {
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  addProduto() {
    this.navCtrl.push(AddProdutoPage);
  }

  removerProduto() {
  }

  editarProduto() {

  }

}
