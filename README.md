# ExchangeRatePortal ver. Angular

This project is the frontend for the Exchange Rate Portal, a web application that provides functionalities for viewing ECB exchange rates, historical exchange rates, and currency conversion. The frontend is built with Angular and Bootstrap.

## Features

### Home View
- Displays the latest exchange rates fetched from the Bank of Lithuania.
- Provides links to view historical exchange rates for each currency.
![Screenshot 2024-06-05 at 01 59 18](https://github.com/5OO/exchange-rate-portal-fe-angular/assets/27925052/587ae9db-a598-4774-ae27-f69551701e11)

### Exchange Rate History View
- Displays the historical exchange rates for a selected currency.
- Supports pagination for easy navigation through historical data.
![Screenshot 2024-06-05 at 02 00 10](https://github.com/5OO/exchange-rate-portal-fe-angular/assets/27925052/67084fd8-34b1-449b-b27a-591221faa40f)
![Screenshot 2024-06-05 at 02 00 30](https://github.com/5OO/exchange-rate-portal-fe-angular/assets/27925052/35ae4b57-119b-406c-bc29-c5b27fbdcdfe)

### Currency Converter View
- Allows users to enter an amount and select currencies to convert between.
- Displays the converted amount using the latest exchange rates.
![Screenshot 2024-06-05 at 02 00 42](https://github.com/5OO/exchange-rate-portal-fe-angular/assets/27925052/699c4e65-91d7-4c5a-b179-6ac76d380bf1)
![Screenshot 2024-06-05 at 02 01 13](https://github.com/5OO/exchange-rate-portal-fe-angular/assets/27925052/fc0c637c-9fd2-46ce-a52c-341c8d032dac)
![Screenshot 2024-06-05 at 02 01 30](https://github.com/5OO/exchange-rate-portal-fe-angular/assets/27925052/2b755b73-abe3-4953-a772-2ebf33fa4f7d)

### Error Handling
In case the ```lb.lt`` server does not have historical rates available to display, a respective message is delivered to the user in the UI. Example: `"No exchange rates found for currency: XOF"`.
![Screenshot 2024-06-05 at 02 04 01](https://github.com/5OO/exchange-rate-portal-fe-angular/assets/27925052/38c8732a-59cb-4bef-87fa-3fb4b3cc44f5)

## Technologies Used

- **Framework**: Angular 18
- **CSS Framework**: Bootstrap
- **IDE**: IntelliJ IDEA

## Getting Started

### Prerequisites

Ensure you have Node.js and Angular CLI installed:

## Install Node.js
https://nodejs.org/

## Install Angular CLI
npm install -g @angular/cli

## Clone the Repository
```bash
git clone https://github.com/5OO/exchange-rate-portal-fe-angular
cd exchange-rate-portal-fe-angular
```

## Development Server

Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.
Further Help

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Backend

The frontend communicates with the Java backend service to fetch exchange rates and historical data. The ECB rates are retrieved from the Bank of Lithuania server using a Quartz cron job scheduled to run every afternoon, as specified in the Quartz properties file.

Backend source: [Exchange Rate Portal Backend](https://github.com/5OO/exchange-rate-portal)

## Data Sources

Exchange rates are pulled from the Bank of Lithuania server: [Bank of Lithuania FX Rates](https://www.lb.lt/webservices/FxRates/FxRates.asmx?op=getCurrentFxRates)
Historical rates source: [getFxRatesForCurrency](https://www.lb.lt/webservices/FxRates/FxRates.asmx?op=getFxRatesForCurrency)

## Repository

Code is stored at GitHub: [exchange-rate-portal-fe-angular](https://github.com/5OO/exchange-rate-portal-fe-angular)
