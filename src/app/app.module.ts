import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {CommonModule} from "@angular/common";
import { CurrencyHistoryComponent } from './currency-history/currency-history.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CommonModule,
    CurrencyHistoryComponent,
    HomeComponent,
    RouterModule.forRoot(routes),
    CurrencyConverterComponent
  ],
  providers: [],
  bootstrap:[]
})
export class AppModule {
}
