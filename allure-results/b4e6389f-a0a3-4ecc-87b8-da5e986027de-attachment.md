# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: blazedemo-booking.spec.js >> BlazeDemo flight booking matrix >> book flight from São Paolo to New York
- Location: tests\blazedemo-booking.spec.js:78:11

# Error details

```
TypeError: page.locator(...).textcontent is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Travel The World" [ref=e5] [cursor=pointer]:
      - /url: index.php
    - link "home" [ref=e6] [cursor=pointer]:
      - /url: home
  - generic [ref=e8]:
    - heading "Thank you for your purchase today!" [level=1] [ref=e9]
    - table [ref=e10]:
      - rowgroup [ref=e11]:
        - row [ref=e12]:
          - columnheader [ref=e13]
          - columnheader [ref=e14]
      - rowgroup [ref=e15]:
        - row "Id 1785393843176" [ref=e16]:
          - cell "Id" [ref=e17]
          - cell "1785393843176" [ref=e18]
        - row "Status PendingCapture" [ref=e19]:
          - cell "Status" [ref=e20]
          - cell "PendingCapture" [ref=e21]
        - row "Amount 555 USD" [ref=e22]:
          - cell "Amount" [ref=e23]
          - cell "555 USD" [ref=e24]
        - row "Card Number xxxxxxxxxxxx1111" [ref=e25]:
          - cell "Card Number" [ref=e26]
          - cell "xxxxxxxxxxxx1111" [ref=e27]
        - row "Expiration 11 /2018" [ref=e28]:
          - cell "Expiration" [ref=e29]
          - cell "11 /2018" [ref=e30]
        - row "Auth Code 888888" [ref=e31]:
          - cell "Auth Code" [ref=e32]
          - cell "888888" [ref=e33]
        - row "Date Thu, 30 Jul 2026 06:44:03 +0000" [ref=e34]:
          - cell "Date" [ref=e35]
          - cell "Thu, 30 Jul 2026 06:44:03 +0000" [ref=e36]
    - generic [ref=e37]: "{ \"id\": \"1785393843176\", \"status\": \"PendingCapture\", \"amount\": \"555\", \"currency\": \"USD\", \"authCode\": \"888888\", \"payment\": { \"cardNumber\": \"xxxxxxxxxxxx1111\", \"cardExpirationMonth\": \"11\", \"cardExpirationYear\": \"2018\" }, \"_links\": { \"self\": { \"href\": \"https=>\\/\\/sandbox.api.visa.com\\/cybersource\\/payments\\/v1\\/authorizations\\/1785393843176\", \"method\": \"GET\" }, \"capture\": [ { \"href\": \"https=>\\/\\/sandbox.api.visa.com\\/cybersource\\/payments\\/v1\\/authorizations\\/1785393843176\\/captures\", \"method\": \"POST\" } ], \"reversal\": [ { \"href\": \"https=>\\/\\/sandbox.api.visa.com\\/cybersource\\/payments\\/v1\\/authorizations\\/1785393843176\\/reversals\", \"method\": \"POST\" } ] } }"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const origins = [
  4  |   'Paris',
  5  |   'Philadelphia',
  6  |   'Boston',
  7  |   'Portland',
  8  |   'San Diego',
  9  |   'Mexico City',
  10 |   'São Paolo',
  11 | ];
  12 | 
  13 | const destinations = [
  14 |   'Buenos Aires',
  15 |   'Rome',
  16 |   'London',
  17 |   'Berlin',
  18 |   'New York',
  19 |   'Dublin',
  20 |   'Cairo',
  21 | ];
  22 | 
  23 | const bookingDetails = {
  24 |   name: 'Test Traveler',
  25 |   address: '123 Test Street',
  26 |   city: 'Test City',
  27 |   state: 'Test State',
  28 |   zipCode: '12345',
  29 |   cardType: 'Visa',
  30 |   creditCardNumber: '4111111111111111',
  31 |   creditCardMonth: '12',
  32 |   creditCardYear: '2028',
  33 |   nameOnCard: 'Test Traveler',
  34 | };
  35 | 
  36 | async function bookRoute(page, origin, destination) {
  37 |   await page.goto('https://blazedemo.com/');
  38 |   await page.selectOption('select[name="fromPort"]', { label: origin });
  39 |   await page.selectOption('select[name="toPort"]', { label: destination });
  40 | 
  41 |   await page.getByRole('button', { name: 'Find Flights' }).click();
  42 |   await page.waitForURL(/reserve.php/);
  43 | 
  44 |   const chooseFlightButton = page.getByRole('button', { name: 'Choose This Flight' }).first();
  45 |   await expect(chooseFlightButton).toBeVisible();
  46 |   await chooseFlightButton.click();
  47 | 
  48 |   await page.waitForURL(/purchase.php/);
  49 | 
  50 |   await page.fill('#inputName', bookingDetails.name);
  51 |   await page.fill('#address', bookingDetails.address);
  52 |   await page.fill('#city', bookingDetails.city);
  53 |   await page.fill('#state', bookingDetails.state);
  54 |   await page.fill('#zipCode', bookingDetails.zipCode);
  55 |   await page.selectOption('#cardType', { label: bookingDetails.cardType });
  56 |   await page.fill('#creditCardNumber', bookingDetails.creditCardNumber);
  57 |   await page.fill('#creditCardMonth', bookingDetails.creditCardMonth);
  58 |   await page.fill('#creditCardYear', bookingDetails.creditCardYear);
  59 |   await page.fill('#nameOnCard', bookingDetails.nameOnCard);
  60 | 
  61 |   await page.click('input[type="submit"]');
  62 | 
  63 |   const confirmationHeading = page.getByRole('heading', { name: /Thank you for your purchase today!/ });
  64 |   await expect(confirmationHeading).toBeVisible({ timeout: 10000 });
  65 | 
  66 |   const confirmationDetails = page.locator('table').locator('text=Amount');
  67 |   await expect(confirmationDetails).toBeVisible();
> 68 |   console.log(await page.locator('pre:visible').textcontent());
     |                                                 ^ TypeError: page.locator(...).textcontent is not a function
  69 |   
  70 |   await page.getByRole('link', { name: 'home', exact: true }).click();
  71 | }
  72 | 
  73 | test.describe.parallel('BlazeDemo flight booking matrix', () => {
  74 |   test.setTimeout(120000);
  75 | 
  76 |   for (const origin of origins) {
  77 |     for (const destination of destinations) {
  78 |       test(`book flight from ${origin} to ${destination}`, async ({ page }) => {
  79 |         await bookRoute(page, origin, destination);
  80 |       });
  81 |     }
  82 |   }
  83 | });
  84 | 
```