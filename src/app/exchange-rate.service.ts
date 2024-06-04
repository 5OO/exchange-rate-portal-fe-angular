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

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiUrl = 'http://localhost:8080/api/exchange-rates';

  constructor(private http: HttpClient) { }

  getLatestRates(): Observable<ExchangeRateDTO[]> {
    return this.http.get<ExchangeRateDTO[]>(this.apiUrl);
  }

  getHistoricalRates(currency: string, page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/history/${currency}?page=${page}&size=${size}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.error.message || 'Server error')
  }
}
