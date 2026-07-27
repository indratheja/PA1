import { expect, test } from "@playwright/test"
import { acceptAllDialogs } from "../utils/createDialog"

test.beforeEach(async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice");
})

test('TC1: Verify page title loads correctly', async ({ page }) => {
    await expect(page).toHaveTitle("Automation Testing Practice");
})

test('TC2: Verify Sunday checkbox can be checked', async ({ page }) => {
    const sundayCheckbox = page.getByRole('checkbox', { name: 'Sunday' });
    await sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();
    await page.screenshot({ path: 'Screenshots/indra.png' });
})

test('TC3: Verify Monday checkbox can be checked', async ({ page }) => {
    const mondayCheckbox = page.getByRole('checkbox', { name: 'Monday' });
    await mondayCheckbox.check();
    await expect(mondayCheckbox).toBeChecked();
    await mondayCheckbox.screenshot({ path: 'Screenshots/checkbox.jpeg' });
})

test('TC4: Verify Male radio button can be selected', async ({ page }) => {
    const maleRadio = page.getByRole('radio', { name: 'Male', exact: true });
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();
})

test('TC5: Verify Home text is visible on page', async ({ page }) => {
    const homeText = page.getByText('Home').first();
    await expect(homeText).toBeVisible();
    console.log(await homeText.textContent());
})

test('TC6: Verify phone number can be entered in input field', async ({ page }) => {
    const phoneInput = page.getByPlaceholder('Enter Phone');
    await phoneInput.fill('9916910404');
    await expect(phoneInput).toHaveValue('9916910404');
})

test('TC7: Verify dynamic button state changes when clicked', async ({ page }) => {
    const dynamicBtn = page.locator("//button[@onclick='toggleButton(this)']");
    await dynamicBtn.click();
    await expect(dynamicBtn).toHaveText("STOP");
    console.log(await dynamicBtn.textContent());
})

test('TC8: Verify alert button is enabled and can be clicked', async ({ page }) => {
    acceptAllDialogs(page);
    const alertBtn = page.locator('#alertBtn');
    await expect(alertBtn).toBeEnabled();
    await alertBtn.click();
})

test('TC9: Verify confirm button is enabled and can be clicked', async ({ page }) => {
    acceptAllDialogs(page);
    const confirmBtn = page.locator("#confirmBtn");
    await expect(confirmBtn).toBeEnabled();
    await confirmBtn.click();
})

test('TC10: Verify New Tab button opens a new page', async ({ browser, page }) => {
    const context = page.context();
    const newwindow = page.getByRole('button', { name: 'New Tab' });
    await expect(newwindow).toBeVisible();

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        newwindow.click(),
    ])
    
    await expect(newpage).not.toBe(null);
})

test('TC11: Verify TypeScript link is visible and clickable on new page', async ({ browser, page }) => {
    const context = page.context();
    const newwindow = page.getByRole('button', { name: 'New Tab' });

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        newwindow.click(),
    ])
    
    const typescriptLink = newpage.locator("//a[normalize-space()='TypeScript For Playwright & Cypress']");
    await expect(typescriptLink).toBeVisible();
    await typescriptLink.click();
})

test('TC12: Verify Popup Windows button is visible and clickable', async ({ page }) => {
    const popupBtn = page.getByRole('button', { name: /Popup Windows/i });
    await expect(popupBtn).toBeVisible();
    await popupBtn.click();
})

test('TC13: Verify Point Me button is visible and clickable', async ({ page }) => {
    const pointBtn = page.getByRole('button', { name: 'Point Me' });
    await expect(pointBtn).toBeVisible();
    await pointBtn.click();
})

test('TC14: Verify Laptops link is visible and clickable', async ({ page }) => {
    const laptopsLink = page.getByRole('link', { name: 'Laptops' });
    await expect(laptopsLink).toBeVisible();
    await laptopsLink.click();
});