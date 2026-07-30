import { test, expect } from '@playwright/test';

const origins = [
  'Paris',
  'Philadelphia',
  'Boston',
  'Portland',
  'San Diego',
  'Mexico City',
  'São Paolo',
];

const destinations = [
  'Buenos Aires',
  'Rome',
  'London',
  'Berlin',
  'New York',
  'Dublin',
  'Cairo',
];

const bookingDetails = {
  name: 'Test Traveler',
  address: '123 Test Street',
  city: 'Test City',
  state: 'Test State',
  zipCode: '12345',
  cardType: 'Visa',
  creditCardNumber: '4111111111111111',
  creditCardMonth: '12',
  creditCardYear: '2028',
  nameOnCard: 'Test Traveler',
};

async function bookRoute(page, origin, destination) {
  await page.goto('https://blazedemo.com/');
  await page.selectOption('select[name="fromPort"]', { label: origin });
  await page.selectOption('select[name="toPort"]', { label: destination });

  await page.getByRole('button', { name: 'Find Flights' }).click();
  await page.waitForURL(/reserve.php/);

  const chooseFlightButton = page.getByRole('button', { name: 'Choose This Flight' }).first();
  await expect(chooseFlightButton).toBeVisible();
  await chooseFlightButton.click();

  await page.waitForURL(/purchase.php/);

  await page.fill('#inputName', bookingDetails.name);
  await page.fill('#address', bookingDetails.address);
  await page.fill('#city', bookingDetails.city);
  await page.fill('#state', bookingDetails.state);
  await page.fill('#zipCode', bookingDetails.zipCode);
  await page.selectOption('#cardType', { label: bookingDetails.cardType });
  await page.fill('#creditCardNumber', bookingDetails.creditCardNumber);
  await page.fill('#creditCardMonth', bookingDetails.creditCardMonth);
  await page.fill('#creditCardYear', bookingDetails.creditCardYear);
  await page.fill('#nameOnCard', bookingDetails.nameOnCard);

  await page.click('input[type="submit"]');

  const confirmationHeading = page.getByRole('heading', { name: /Thank you for your purchase today!/ });
  await expect(confirmationHeading).toBeVisible({ timeout: 10000 });

  const confirmationDetails = page.locator('table').locator('text=Amount');
  await expect(confirmationDetails).toBeVisible();
  //console.log(await page.locator('pre:visible').textContent());
  
  await page.getByRole('link', { name: 'home', exact: true }).click();
}

test.describe.parallel('BlazeDemo flight booking matrix', () => {
  test.setTimeout(120000);

  for (const origin of origins) {
    for (const destination of destinations) {
      test(`book flight from ${origin} to ${destination}`, async ({ page }) => {
        await bookRoute(page, origin, destination);
      });
    }
  }
});
