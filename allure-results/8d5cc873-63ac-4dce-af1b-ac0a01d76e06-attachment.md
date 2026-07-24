# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: startEndDate.spec.js >> start and End date selection
- Location: tests\startEndDate.spec.js:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | 
  3  | test("start and End date selection", async ({ page }) => {
> 4  |     await page.goto("https://testautomationpractice.blogspot.com/");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  5  |     await page.locator('#start-date').click();
  6  |     const startDate = await page.locator('#start-date').fill("2026-01-10");
  7  |     await page.locator('#end-date').click();
  8  |     const endDate = await page.locator('#end-date').fill("2026-01-08");
  9  |     console.log(startDate);
  10 |     console.log(endDate);
  11 |     //await page.getByRole('button', {name: 'Submit'}).click();
  12 |     await page.locator('.submit-btn').click();
  13 |     const actual = await page.locator("#result").textContent();
  14 |     const negative = "End date must be after start date.";
  15 |     const isequal = "You selected a range of 0 days."
  16 | 
  17 |     if (startDate > endDate) {
  18 |         await expect(actual).toContain(negative)
  19 |     } else if (startDate === endDate) {
  20 |         await expect(actual).toContain(isequal);
  21 |     } else if (startDate < endDate) {
  22 |         console.log(actual);
  23 |     }
  24 | 
  25 | 
  26 | 
  27 | 
  28 | })
  29 | 
```