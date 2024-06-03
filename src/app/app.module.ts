import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    HomeComponent
  ],
  providers: [],
  bootstrap:[]
})
export class AppModule {
}
