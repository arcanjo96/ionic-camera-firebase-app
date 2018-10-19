import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';

import { RegisterPageModule } from '../pages/register/register.module';
import { AddProdutoPageModule } from '../pages/add-produto/add-produto.module';
import { ListaProdutosPageModule } from '../pages/lista-produtos/lista-produtos.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import 'firebase/storage';

import { Camera } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';
import { ImagePicker } from '@ionic-native/image-picker'

import { CurrencyPipe } from '@angular/common';
import  { IonCurrencyMaskModule } from '@pluritech/ion-currencymask';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDZGn5SmVVNomrqyAwGe0y97aTRyXAonbE",
      authDomain: "app-faculdade.firebaseapp.com",
      databaseURL: "https://app-faculdade.firebaseio.com",
      projectId: "app-faculdade",
      storageBucket: "app-faculdade.appspot.com",
      messagingSenderId: "966853610003"
    }),
    AngularFireDatabaseModule,
    LoginPageModule,
    AngularFireAuthModule,
    RegisterPageModule,
    AddProdutoPageModule,
    ListaProdutosPageModule,
    CurrencyMaskModule,
    IonCurrencyMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    ImagePicker,
    Crop,
    CurrencyPipe
  ]
})
export class AppModule {}
