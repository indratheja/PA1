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

test("webtable", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const columns = page.locator("table:first-of-type thead th");
    console.log('columns :', await columns.count());
    expect(await columns.count()).toBe(4);
    const rows = page.locator("(//table)[2]/tbody/tr");
    console.log('rows :', await rows.count());
    expect(await rows.count()).toBe(9);
    const mr = rows.filter({
        has: page.locator('td'),
        hasText: 'Engineer'
    });
    console.log(await mr.first().textContent());

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td')
        for (let j = 0; j < await tds.count(); j++) {
            console.log(await tds.nth(j).textContent());
        }
    }


});

test("datetime picker", async ({ page }) => {
    const year = '2027';
    const month = 'July';
    const date = '28';

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#datepicker').click();


    while (true) {
        const currentMonth = await page.locator("//*[@class='ui-datepicker-month']").textContent();
        const currentYear = await page.locator("//*[@class='ui-datepicker-year']").textContent();
        if (currentMonth === month && currentYear === year) {
            break;
        }
        //future
        await page.locator('.ui-datepicker-next').click();
    }

    const alldates = await page.locator("//table[@class='ui-datepicker-calendar']//tbody//tr//td").all();
    console.log(alldates);

    for (let data of alldates) {
        const datetext = await data.textContent();
        if (datetext === date) {
            await data.click()
        }

    }

});

test('demo flight booking', async ({ page }) => {

    await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    const date = "22";
    await page.locator("#travname").fill("Indra Theja");
    await page.locator("#travlastname").fill("Pasupulati");
    // await page.locator("//input[@class='thwcfe-checkout-date-picker input-text thwcfe-input-field hasDatepicker']").nth(0).click();

    await page.locator(".thwcfe-checkout-date-picker").first().click();
    await expect(page.locator(".ui-datepicker-month")).toBeVisible();
    await expect(page.locator(".ui-datepicker-year")).toBeVisible();

    await page.locator(".ui-datepicker-month").selectOption("2");
    await page.locator(".ui-datepicker-year").selectOption("1990");

    const dateselect = await page.locator('.ui-datepicker-calendar td').all()
    for (let data of dateselect) {
        const dt = await data.textContent();

        if (dt === date) {
            await data.click();
        }
    }

    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('radio', { name: 'One Way', exact: true }).click();
    await page.locator('#fromcity').fill("Hyderabad");
    await page.locator('#tocity').fill("Delhi");


    await page.locator("//input[@class='thwcfe-checkout-date-picker input-text thwcfe-input-field hasDatepicker']").nth(1).click();
    await expect(page.locator(".ui-datepicker-month")).toBeVisible();
    await expect(page.locator(".ui-datepicker-year")).toBeVisible();

    await page.locator(".ui-datepicker-month").selectOption("7");
    await page.locator(".ui-datepicker-year").selectOption("2026");
    const dateselect1 = await page.locator('.ui-datepicker-calendar td').all();
    for (let data1 of dateselect1) {
        const dt1 = await data1.textContent();

        if (dt1 === date) {
            await data1.click();
        }
    }
    await page.pause();
    await page.locator("#select2-reasondummy-container").click();
    const list = await page.locator('.select2-results__option');
    //await dummytickettype.
    console.log(await list.allTextContents());
    await list.first().click();
    await page.getByRole('radio', { name: 'Email' }).check();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('indra@hmail.com');
    await page.getByRole('textbox', { name: 'India' }).click();
    await page.getByRole('option', { name: 'India', exact: true }).click();
    await page.getByRole('textbox', { name: 'Street address' }).click();
    await page.getByRole('textbox', { name: 'Street address' }).fill('miyap');
    await page.getByRole('textbox', { name: 'Flat, suite, unit, etc. (' }).click();
    await page.getByRole('textbox', { name: 'Flat, suite, unit, etc. (' }).fill('yalam');
    await page.getByRole('textbox', { name: 'Town / City' }).click();
    await page.getByRole('textbox', { name: 'Town / City' }).fill('hyderabad');
    await page.getByLabel('State / District / Province').getByText('Select an option…').click();
    await page.getByRole('option', { name: 'Telangana' }).click();
    await page.getByRole('textbox', { name: 'PIN Code' }).click();
    await page.getByRole('textbox', { name: 'PIN Code' }).fill('500049');
    await page.getByRole('textbox', { name: 'Phone' }).click();
    await page.getByRole('textbox', { name: 'Phone' }).fill('9916910404');
    await page.getByRole('button', { name: 'Place order' }).click();



})






