import { fixturetest, expect } from "./fixturedemo.js"
import test from "@playwright/test"


test.describe('User login', () => {
  test.beforeEach(async ({ page }) => {
    
  });


fixturetest(`custom fixture`, async ({ testdata }) => {
    console.log(await testdata.title());
});

test(`calendar`, async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateInput = page.locator('#datepicker');
    await expect(dateInput).toBeVisible();
    //dateInput.fill("08/21/2026");

    await dateInput.click();

    const year = "2027";
    const month = "May";
    const date = '12';

    while (true) {
        const currentyear = await page.locator('.ui-datepicker-year').textContent();
        const currentmonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentmonth === month && currentyear === year) {
            break;
        }

        await page.locator('.ui-datepicker-next').click()

    }

    const dates = await page.locator('.ui-datepicker-calendar td').allTextContents();
    console.log(dates);
    const alldates = await page.locator('.ui-datepicker-calendar td').all();


    for (let data of alldates) {
        const datetext = await data.textContent();
        if (datetext === date) {
            await data.click();
            break;
        }

    }

});

test(`UI Controls`, async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByLabel("Country:").selectOption("India");
    await page.screenshot({ path: 'scren1.png' });
    const screen = await page.getByRole("checkbox", { name: 'Sunday' }).check();
    const isChecked = await page.getByRole("checkbox", { name: "Monday" }).isChecked();
    expect(isChecked).toBeFalsy();

});
test('Print all the table components ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractise/');
    const table = page.locator('#product').last();
    const columns = await table.locator('thead tr th');
    console.log(await columns.count());
    const rows = table.locator(' tbody tr');
    console.log(await rows.count());
    
    for(let i =0; i < await rows.count(); i++)
    {
        const row =  rows.nth(i);
        const tds = row.locator('td');
      for(let j=0; j < await tds.count();j++)
      {
         console.log(await tds.nth(j).textContent());
         
      }
    }



});
});
