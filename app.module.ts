import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations:[AppComponent],
  imports:[BrowserModule,
  AppRoutingModule,
  HttpClientModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule{

}