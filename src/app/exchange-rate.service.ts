import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ExchangeRateDTO {
  currency: string;
  rate: number;
  date: string;
  currencyName: string;
  entityLocation: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiUrl = 'http://localhost:8080/api/exchange-rates';

  constructor(private http: HttpClient) { }

  getLatestRates(): Observable<ExchangeRateDTO[]> {
    return this.http.get<ExchangeRateDTO[]>(this.apiUrl);
  }

  getHistoricalRates(currency: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/history/${currency}`);
  }
}
