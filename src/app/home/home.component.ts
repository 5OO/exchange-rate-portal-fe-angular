import { Component, OnInit } from '@angular/core';
import { ExchangeRateService, ExchangeRateDTO } from '../exchange-rate.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements OnInit {
  exchangeRates: ExchangeRateDTO[] = [];

  constructor(private exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
    this.exchangeRateService.getLatestRates().pipe(
      catchError(error => {
        console.error('Error fetching exchange rates', error);
        return of([]);
      })
    ).subscribe(data => this.exchangeRates = data
    );
  }
}
