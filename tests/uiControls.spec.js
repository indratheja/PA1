import { test, expect } from "@playwright/test"

test('childwindow handling scenarios', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const username = page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentlink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all(
        [context.waitForEvent('page'),
        documentlink.click()])
    const text = await newPage.locator(".im-para.red").textContent();
    console.log(text);
    const arraytext = text.split("@");
    const domain = arraytext[1].split(" ")[0];
    console.log(domain);
    await username.fill(domain);
    console.log(await page.locator("#username").inputValue());





});