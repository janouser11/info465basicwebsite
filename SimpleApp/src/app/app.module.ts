import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdCardModule, MdDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {ProductService} from "./_services/product.service";
import {ConnectionBackend, Http, HttpModule} from "@angular/http";
import {ConfirmationDialogComponent} from "./_components/confirmation-dialog/confirmation-dialog.component";
import { AngularFireModule,  } from 'angularfire2';
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    HttpModule,
    MdDialogModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [ ProductService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
