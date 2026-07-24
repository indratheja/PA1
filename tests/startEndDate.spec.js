import { test,expect } from "@playwright/test";
const { readFileSync } = require("fs");
const { join } = require("path");

const dateRangeCases = JSON.parse(
    readFileSync(join(__dirname, "../data/dateRangeCases.json"), "utf-8")
);

async function fillDateRange(page, startDate, endDate) {
    const startInput = page.locator("#start-date");
    const endInput = page.locator("#end-date");

    await startInput.fill(startDate);
    await expect(startInput).toHaveValue(startDate);

    await endInput.fill(endDate);
    await expect(endInput).toHaveValue(endDate);

    await page.locator(".submit-btn").click();
    return page.locator("#result").textContent();
}

dateRangeCases.forEach(({ name, start, end, expectedText }) => {
    test(`start and end date selection - ${name}`, async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/");
        const resultText = await fillDateRange(page, start, end);
        await expect(resultText).toContain(expectedText);
    });
});
