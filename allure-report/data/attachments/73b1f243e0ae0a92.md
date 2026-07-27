# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazonList.spec.js >> Amazon
- Location: tests\amazonList.spec.js:23:5

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('[data-component-type="s-search-result"]') to be visible

```

# Test source

```ts
  1  | export class AmazonSearchPage {
  2  |     constructor(page, baseUrl = 'https://www.amazon.com') {
  3  |         this.page = page;
  4  |         this.baseUrl = baseUrl;
  5  |         this.searchBox = page.locator('#twotabsearchtextbox');
  6  |         this.searchSubmit = page.locator('#nav-search-submit-button');
  7  |         this.searchResults = '[data-component-type="s-search-result"]';
  8  |         this.productTitles = page.locator("//h2/span[@class='a-size-medium a-color-base']");
  9  |     }
  10 | 
  11 |     async goto(url) {
  12 |         await this.page.goto(url || this.baseUrl);
  13 |     }
  14 | 
  15 |     async search(query) {
  16 |         await this.searchBox.fill(query);
  17 |         await this.searchSubmit.click();
> 18 |         await this.page.waitForSelector(this.searchResults);
     |                         ^ Error: page.waitForSelector: Test timeout of 50000ms exceeded.
  19 |     }
  20 | 
  21 |     async getSearchResults(limit = 10) {
  22 |         return this.page.$$eval(this.searchResults, (items, maxItems) => {
  23 |             return items.slice(0, maxItems).map(item => {
  24 |                 const title = item.querySelector('h2 span')?.innerText || 'N/A';
  25 |                 const price = item.querySelector('.a-price .a-offscreen')?.innerText || 'N/A';
  26 |                 const link = item.querySelector('h2 a')?.href || 'N/A';
  27 |                 return { title, price, link };
  28 |             });
  29 |         }, limit);
  30 |     }
  31 | 
  32 |     async getProductCount() {
  33 |         return this.productTitles.count();
  34 |     }
  35 | 
  36 |     async getAllProductTitles() {
  37 |         return this.productTitles.allTextContents();
  38 |     }
  39 | }
  40 | 
```