import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PackagesComponent } from './packages/packages.component';
import{HttpClientModule} from '@angular/common/http'
import { PackagesService } from './packages/packages.service'
import { AppRoutingModule } from './app-routing.module';
import { PackageDetails } from './package-details/package-details.component';
//import { ActivatedRoute, Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PackagesComponent,
    PackageDetails
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [PackagesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
