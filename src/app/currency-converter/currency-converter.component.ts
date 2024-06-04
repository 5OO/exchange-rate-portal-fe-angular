import { Component } from '@angular/core';
import { CurrencyConversionDTO, ExchangeRateService } from '../exchange-rate.service';
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent {
  conversionRequest: CurrencyConversionDTO = {
    fromCurrency: '',
    toCurrency: '',
    amount: 0,
    convertedAmount: 0,
    fromCurrencyRate: 0,
    toCurrencyRate: 0
  };
  conversionResult: CurrencyConversionDTO | null = null;
  errorMessage: string | null = null;

  constructor(private exchangeRateService: ExchangeRateService) { }

  async convertCurrency(): Promise<void> {
    try {
      this.conversionResult = await firstValueFrom(this.exchangeRateService.convertCurrency(this.conversionRequest));
      this.errorMessage = null;
    } catch (error) {
      this.conversionResult = null;
      this.errorMessage = this.getErrorMessage(error);
    }
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  }
}
