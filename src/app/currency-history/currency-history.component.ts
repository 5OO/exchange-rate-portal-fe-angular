import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-currency-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-history.component.html',
  styleUrl: './currency-history.component.css'
})
export class CurrencyHistoryComponent implements OnInit {
  currency: string = '';
  currencyName: string = '';
  entityLocation: string = '';
  historicalRates: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.currency = this.route.snapshot.paramMap.get('currency')!;
    this.fetchHistoricalRates();
  }

  fetchHistoricalRates(): void {
    this.http.get<any>(`http://localhost:8080/api/exchange-rates/history/${this.currency}`)
      .subscribe(data => {
        this.historicalRates = data._embedded.exchangeRateDTOList;
        if (this.historicalRates.length > 0) {
          this.currencyName = this.historicalRates[0].currencyName;
          this.entityLocation = this.historicalRates[0].entityLocation;
        }
      });
  }
}
