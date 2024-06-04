import {Component} from '@angular/core';
import {CurrencyConversionDTO, ExchangeRateService} from '../exchange-rate.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {firstValueFrom} from 'rxjs';


@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent {

  currencies = [
    {code: 'EUR', name: 'Euro'},
    {code: 'GBP', name: 'Pound Sterling'},
    {code: 'USD', name: 'US Dollar'},
    {code: 'DKK', name: 'Danish Krone'},
    {code: 'NOK', name: 'Norwegian Krone'},
    {code: 'SEK', name: 'Swedish Krona'},
    {code: 'PLN', name: 'Zloty'},
    {code: 'HUF', name: 'Forint'},
    {code: 'CZK', name: 'Czech Koruna'},
    {code: 'CHF', name: 'Swiss Franc'},
    {code: 'CAD', name: 'Canadian Dollar'},
    {code: 'ISK', name: 'Iceland Krona'},
    {code: 'AED', name: 'UAE Dirham'},
    {code: 'AFN', name: 'Afghani'},
    {code: 'ALL', name: 'Lek'},
    {code: 'AMD', name: 'Armenian Dram'},
    {code: 'ARS', name: 'Argentine Peso'},
    {code: 'AUD', name: 'Australian Dollar'},
    {code: 'AZN', name: 'Azerbaijan Manat'},
    {code: 'BAM', name: 'Convertible Mark'},
    {code: 'BDT', name: 'Taka'},
    {code: 'BGN', name: 'Bulgarian Lev'},
    {code: 'BHD', name: 'Bahraini Dinar'},
    {code: 'BOB', name: 'Boliviano'},
    {code: 'BRL', name: 'Brazilian Real'},
    {code: 'BYN', name: 'Belarusian Ruble'},
    {code: 'CLP', name: 'Chilean Peso'},
    {code: 'CNY', name: 'Yuan Renminbi'},
    {code: 'COP', name: 'Colombian Peso'},
    {code: 'DJF', name: 'Djibouti Franc'},
    {code: 'DZD', name: 'Algerian Dinar'},
    {code: 'EGP', name: 'Egyptian Pound'},
    {code: 'ETB', name: 'Ethiopian Birr'},
    {code: 'GEL', name: 'Lari'},
    {code: 'GNF', name: 'Guinean Franc'},
    {code: 'HKD', name: 'Hong Kong Dollar'},
    {code: 'IDR', name: 'Rupiah'},
    {code: 'ILS', name: 'New Israeli Sheqel'},
    {code: 'INR', name: 'Indian Rupee'},
    {code: 'IQD', name: 'Iraqi Dinar'},
    {code: 'IRR', name: 'Iranian Rial'},
    {code: 'JOD', name: 'Jordanian Dinar'},
    {code: 'JPY', name: 'Yen'},
    {code: 'KES', name: 'Kenyan Shilling'},
    {code: 'KGS', name: 'Som'},
    {code: 'KRW', name: 'Won'},
    {code: 'KWD', name: 'Kuwaiti Dinar'},
    {code: 'KZT', name: 'Tenge'},
    {code: 'LBP', name: 'Lebanese Pound'},
    {code: 'LKR', name: 'Sri Lanka Rupee'},
    {code: 'LYD', name: 'Libyan Dinar'},
    {code: 'MAD', name: 'Moroccan Dirham'},
    {code: 'MDL', name: 'Moldovan Leu'},
    {code: 'MGA', name: 'Malagasy Ariary'},
    {code: 'MKD', name: 'Denar'},
    {code: 'MNT', name: 'Tugrik'},
    {code: 'MXN', name: 'Mexican Peso'},
    {code: 'MYR', name: 'Malaysian Ringgit'},
    {code: 'MZN', name: 'Mozambique Metical'},
    {code: 'NZD', name: 'New Zealand Dollar'},
    {code: 'PAB', name: 'Balboa'},
    {code: 'PEN', name: 'Sol'},
    {code: 'PHP', name: 'Philippine Peso'},
    {code: 'PKR', name: 'Pakistan Rupee'},
    {code: 'QAR', name: 'Qatari Rial'},
    {code: 'RON', name: 'Romanian Leu'},
    {code: 'RSD', name: 'Serbian Dinar'},
    {code: 'RUB', name: 'Russian Ruble'},
    {code: 'SAR', name: 'Saudi Riyal'},
    {code: 'SGD', name: 'Singapore Dollar'},
    {code: 'SYP', name: 'Syrian Pound'},
    {code: 'THB', name: 'Baht'},
    {code: 'TJS', name: 'Somoni'},
    {code: 'TMT', name: 'Turkmenistan New Manat'},
    {code: 'TND', name: 'Tunisian Dinar'},
    {code: 'TRY', name: 'Turkish Lira'},
    {code: 'TWD', name: 'New Taiwan Dollar'},
    {code: 'TZS', name: 'Tanzanian Shilling'},
    {code: 'UAH', name: 'Hryvnia'},
    {code: 'UYU', name: 'Peso Uruguayo'},
    {code: 'UZS', name: 'Uzbekistan Sum'},
    {code: 'VES', name: 'Bolívar Soberano'},
    {code: 'VND', name: 'Dong'},
    {code: 'XAF', name: 'CFA Franc BEAC'},
    {code: 'XOF', name: 'CFA Franc BCEAO'},
    {code: 'YER', name: 'Yemeni Rial'},
    {code: 'ZAR', name: 'Rand'}
  ];

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

  constructor(private exchangeRateService: ExchangeRateService) {
  }

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
