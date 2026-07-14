import { test, expect } from "@playwright/test";

test("List search items in Amazon", async ({ page }) => {
    await page.goto('https://www.amazon.com');

    // Search for "apple"
    await page.fill('#twotabsearchtextbox', 'apple');
    await page.click('#nav-search-submit-button');

    // Wait for results to load
    await page.waitForSelector('[data-component-type="s-search-result"]');

    // Extract product details
    const results = await page.$$eval('[data-component-type="s-search-result"]', items => {
        return items.slice(0, 10).map(item => {
            const title = item.querySelector('h2 span')?.innerText || 'N/A';
            const price = item.querySelector('.a-price .a-offscreen')?.innerText || 'N/A';
            const link = item.querySelector('h2 a')?.href || 'N/A';
            return { title, price, link };
        });
    });

    console.log('Amazon Search Results for "apple":');
    console.log(results);

});

test(`Indigo selection`, async ({ page }) => {

    await page.goto('https://www.makemytrip.com/');
    await page.locator('a:has-text("SEARCH")').click();
    await page.getByRole('checkbox', { name: 'IndiGo' }).first().check();
});

test.only("Amazon", async ({ page }) => {
    await page.goto("https://www.amazon.in");
    const search = page.locator("//input[@id='twotabsearchtextbox']");
    await search.click();
    await search.fill("iphone 17");
    await page.locator("//*[@class='nav-search-submit nav-sprite']").click();
    const products = page.locator("//h2/span[@class='a-size-medium a-color-base']");
    console.log(await products.count());
    console.log(await products.allTextContents());
    
});