import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonModule} from "@angular/common";
import { ExchangeRateService } from '../exchange-rate.service';

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
  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 250;

  constructor(private route: ActivatedRoute, private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    this.currency = this.route.snapshot.paramMap.get('currency')!;
    this.fetchHistoricalRates();
  }

  fetchHistoricalRates(): void {
    this.exchangeRateService.getHistoricalRates(this.currency, this.currentPage, this.pageSize)
      .subscribe(data => {
        this.historicalRates = data._embedded.exchangeRateDTOList;
        if (this.historicalRates.length > 0) {
          this.currencyName = this.historicalRates[0].currencyName;
          this.entityLocation = this.historicalRates[0].entityLocation;
        }
        this.totalPages = data.page.totalPages;
      });
  }
  goToPage(page: number): void {
    this.currentPage = page;
    this.fetchHistoricalRates();
  }
}
