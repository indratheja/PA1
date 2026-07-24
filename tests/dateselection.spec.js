import { test, expect } from "@playwright/test"
import { dateSelection } from "../utils/dateSelection"

test('Date selection using helper', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await dateSelection(page, "25", "8", "2026");

    await expect(page.locator('#txtDate')).toHaveValue(/2026/);
});

test('Date selection using helper for future date', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await dateSelection(page, "19", "2", "2029");

    await expect(page.locator('#txtDate')).toHaveValue(/2029/);
});

test('Date selection using helper for past date', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await dateSelection(page, "14", "0", "2023");

    await expect(page.locator('#txtDate')).toHaveValue(/2023/);
});