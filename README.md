# ExchangeRatePortal ver. Angular

This project is the frontend for the Exchange Rate Portal, a web application that provides functionalities for viewing ECB exchange rates, historical exchange rates, and currency conversion. The frontend is built with Angular and Bootstrap.

## Features

### Home View
- Displays the latest exchange rates fetched from the Bank of Lithuania.
- Provides links to view historical exchange rates for each currency.

### Exchange Rate History View
- Displays the historical exchange rates for a selected currency.
- Supports pagination for easy navigation through historical data.

### Currency Converter View
- Allows users to enter an amount and select currencies to convert between.
- Displays the converted amount using the latest exchange rates.

### Error Handling
In case the ```lb.lt`` server does not have historical rates available to display, a respective message is delivered to the user in the UI. Example: `"No exchange rates found for currency: XOF"`.

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
