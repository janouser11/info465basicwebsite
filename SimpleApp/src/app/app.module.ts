import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialog,
} from '@angular/material';
import {ProductService} from "./_services/product.service";
import {ConnectionBackend, Http, HttpModule} from "@angular/http";
import {ConfirmationDialogComponent} from "./_components/confirmation-dialog/confirmation-dialog.component";
import { AngularFireModule,  } from 'angularfire2';
import {firebaseConfig} from "../environments/firebase.config";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    // MatDialog,
    // MatDialogRef,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
    // MatDialog,
    // MatDialogRef
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
