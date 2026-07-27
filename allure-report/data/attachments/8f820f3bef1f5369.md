# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: startEndDate.spec.js >> start and End date selection
- Location: tests\startEndDate.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('submit-btn')

```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | 
  3  | test("start and End date selection",async({page})=>
  4  | {
  5  |     await page.goto("https://testautomationpractice.blogspot.com/");
  6  |     await page.locator('#start-date').click();
  7  |     const startDate = await page.locator('#start-date').fill("2026-01-10");
  8  |     await page.locator('#end-date').click();
  9  |     const endDate = await page.locator('#end-date').fill("2026-01-08");
  10 |     console.log(`start date : ${startDate} and enddate : ${endDate}`);
  11 |     //await page.getByRole('button', {name: 'Submit'}).click();
> 12 |     await page.locator('.submit-btn').click();
     |                                      ^ Error: locator.click: Target page, context or browser has been closed
  13 |     if(startDate > endDate)
  14 |     {
  15 |         console.log(await page.locator('#result').textContent());
  16 |     } else if(startDate === endDate){
  17 |         console.log(await page.locator('#result').textContent());
  18 |     }else if(startDate < endDate){
  19 |         console.log(await page.locator('#result').textContent());
  20 |     }
  21 | 
  22 | 
  23 | 
  24 | 
  25 | })
  26 | 
```