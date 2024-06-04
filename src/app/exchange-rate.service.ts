import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface ExchangeRateDTO {
  currency: string;
  rate: number;
  date: string;
  currencyName: string;
  entityLocation: string;
}

export interface CurrencyConversionDTO {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  convertedAmount: number;
  fromCurrencyRate: number;
  toCurrencyRate: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getLatestRates(): Observable<ExchangeRateDTO[]> {
    return this.http.get<ExchangeRateDTO[]>(`${this.apiUrl}/exchange-rates`);
  }

  getHistoricalRates(currency: string, page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/exchange-rates/history/${currency}?page=${page}&size=${size}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  convertCurrency(conversionRequest: CurrencyConversionDTO): Observable<CurrencyConversionDTO> {
    return this.http.post<CurrencyConversionDTO>(`${this.apiUrl}/convert`, conversionRequest)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => new Error(error.error.message || 'Server error'));  }
}
