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
    MdDialogModule
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
