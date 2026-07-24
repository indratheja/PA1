import { test, expect } from "@playwright/test"
import { RahulShettyLoginPage, AutomationPracticePage, DatePickerPage, DummyTicketBookingPage } from "../pageObjects/uiControlsPage";

test('childwindow handling scenarios', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new RahulShettyLoginPage(page);

    await loginPage.goto();
    const domain = await loginPage.getDomainFromDocumentRequest();
    await loginPage.fillUsername(domain);
    console.log(await page.locator("#username").inputValue());
});

test("webtable", async ({ page }) => {
    const automationPage = new AutomationPracticePage(page);

    await automationPage.goto();
    const columnsCount = await automationPage.getColumnCount();
    console.log('columns :', columnsCount);
    expect(columnsCount).toBe(4);

    const rowsCount = await automationPage.getRowCount();
    console.log('rows :', rowsCount);
    expect(rowsCount).toBe(9);

    console.log(await automationPage.getFirstRowTextContaining('Engineer'));
    await automationPage.logAllRowCells();
});

test("datetime picker", async ({ page }) => {
    const datePickerPage = new DatePickerPage(page);
    const year = '2027';
    const month = 'July';
    const date = '28';

    await datePickerPage.goto();
    await datePickerPage.selectDate(year, month, date);
});

test('demo flight booking', async ({ page }) => {
    const bookingPage = new DummyTicketBookingPage(page);
    const date = '22';

    await bookingPage.goto();
    await bookingPage.fillPersonalDetails('Indra Theja', 'Pasupulati');
    await bookingPage.selectDatePicker(0, '2', '1990', date);
    await bookingPage.fillTravelDetails('Hyderabad', 'Delhi');
    await bookingPage.selectDatePicker(1, '7', '2026', date);
    await bookingPage.chooseReason();
    await bookingPage.fillContactDetails('indra@hmail.com', 'India', 'miyap', 'yalam', 'hyderabad', 'Telangana', '500049', '9916910404');
    await bookingPage.placeOrder();
});
