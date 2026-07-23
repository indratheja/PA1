import { test, expect } from "@playwright/test";
import { AmazonSearchPage } from "../pageObjects/amazonListPage";

test("List search items in Amazon", async ({ page }) => {
    const amazonPage = new AmazonSearchPage(page, 'https://www.amazon.com');

    await amazonPage.goto();
    await amazonPage.search('apple');

    const results = await amazonPage.getSearchResults(10);
    console.log('Amazon Search Results for "apple":');
    console.log(results);

});

test.skip(`Indigo selection`, async ({ page }) => {

    await page.goto('https://www.makemytrip.com/');
    await page.locator('a:has-text("SEARCH")').click();
    await page.getByRole('checkbox', { name: 'IndiGo' }).first().check();
});

test("Amazon", async ({ page }) => {
    const amazonPage = new AmazonSearchPage(page, 'https://www.amazon.in');

    await amazonPage.goto();
    await amazonPage.search('iphone 17');

    console.log(await amazonPage.getProductCount());
    console.log(await amazonPage.getAllProductTitles());
});