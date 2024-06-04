import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrencyHistoryComponent } from './currency-history/currency-history.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history/:currency', component: CurrencyHistoryComponent },
  { path: '**', redirectTo: '' }
];
