import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DataService } from './data.service';
import { AddpcComponent } from './addpc/addpc.component';
import { ViewpcComponent } from './viewpc/viewpc.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddpcComponent,
    ViewpcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
