import { expect, test } from "@playwright/test"
import { acceptAllDialogs } from "../utils/createDialog"

test('SS1', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Navigate to the test page
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle(/test automation/i);

    // Check Sunday checkbox
    const sundayCheckbox = page.getByRole('checkbox', { name: 'Sunday' });
    await sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();
    await page.screenshot({ path: 'Screenshots/indra.png' });

    // Check Monday checkbox
    const mondayCheckbox = page.getByRole('checkbox', { name: 'Monday' });
    await mondayCheckbox.check();
    await expect(mondayCheckbox).toBeChecked();
    await mondayCheckbox.screenshot({ path: 'Screenshots/checkbox.jpeg' });

    // Select Male radio button
    const maleRadio = page.getByRole('radio', { name: 'Male', exact: true });
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();

    // Verify Home text is visible
    const homeText = page.getByText('Home').first();
    await expect(homeText).toBeVisible();
    console.log(await homeText.textContent());

    // Fill phone number
    const phoneInput = page.getByPlaceholder('Enter Phone');
    await phoneInput.fill('9916910404');
    await expect(phoneInput).toHaveValue('9916910404');

    // Click and verify dynamic button state change
    const dynamicBtn = page.locator("//button[@onclick='toggleButton(this)']");
    await dynamicBtn.click();
    await expect(dynamicBtn).toHaveText("STOP");
    console.log(await dynamicBtn.textContent());

    // Setup dialog handling and click alert button
    acceptAllDialogs(page);
    const alertBtn = page.locator('#alertBtn');
    await expect(alertBtn).toBeEnabled();
    await alertBtn.click();

    // Click confirm button
    const confirmBtn = page.locator("#confirmBtn");
    await expect(confirmBtn).toBeEnabled();
    await confirmBtn.click();

    // Handle New Tab
    const newwindow = page.getByRole('button', { name: 'New Tab' });
    await expect(newwindow).toBeVisible();

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        newwindow.click(),
    ])
    
    // Verify new page opened
    await expect(newpage).not.toBe(null);
    
    // Click on TypeScript link
    const typescriptLink = newpage.locator("//a[normalize-space()='TypeScript For Playwright & Cypress']");
    await expect(typescriptLink).toBeVisible();
    await typescriptLink.click();

    // Click Popup Windows button
    const popupBtn = page.getByRole('button', { name: /Popup Windows/i });
    await expect(popupBtn).toBeVisible();
    await popupBtn.click();

    // Click Point Me button
    const pointBtn = page.getByRole('button', { name: 'Point Me' });
    await expect(pointBtn).toBeVisible();
    await pointBtn.click();

    // Click Laptops link
    const laptopsLink = page.getByRole('link', { name: 'Laptops' });
    await expect(laptopsLink).toBeVisible();
    await laptopsLink.click();
});