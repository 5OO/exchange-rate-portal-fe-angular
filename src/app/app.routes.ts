import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrencyHistoryComponent } from './currency-history/currency-history.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history/:currency', component: CurrencyHistoryComponent },
  { path: 'converter', component: CurrencyConverterComponent },
  { path: '**', redirectTo: ''}
];
