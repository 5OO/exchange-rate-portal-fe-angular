import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {CommonModule} from "@angular/common";
import { CurrencyHistoryComponent } from './currency-history/currency-history.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CommonModule,
    CurrencyHistoryComponent,
    HomeComponent,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap:[]
})
export class AppModule {
}
