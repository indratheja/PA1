import { test, expect } from "@playwright/test"

test("Login and get the products count", async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("//input[@id='loginusername']").fill("intheja");
    await page.locator("//input[@id='loginpassword']").fill("123456");
    await page.locator("//button[@class='btn btn-primary']").nth(2).click();
    let products = page.locator('a.hrefch');
    let itemscount = await products.count();
    console.log(itemscount);
    console.log(await products.allTextContents());
});

test.only("Add to cart ", async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("//input[@id='loginusername']").fill("intheja");
    await page.locator("//input[@id='loginpassword']").fill("123456");
    await page.locator("//button[@class='btn btn-primary']").nth(2).click();
    await page.locator('a.hrefch').nth(1).click();
    await page.pause(10000);
    page.on('dialog', async dialog => {
        console.log(dialog.type());
        console.log(dialog.message());
        dialog.accept();
    });
    await page.locator("a.btn.btn-success.btn-lg").click();
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.locator("#name").fill("indras");
    await page.getByLabel('Country:').fill("india");
    await page.getByLabel('City:').fill("hyderabad");
    await page.getByRole('textbox', { name: /Credit card:/i }).fill("1234 5689 1334 1234")
    await page.getByLabel('Month:').fill("Aug");
    await page.getByLabel('Year:').fill("2028");
    await page.getByRole('button', { name: 'Purchase' }).click();
    let ordermessage = page.getByText('Thank you for your purchase!').textContent();
    console.log(await ordermessage);

    //console.log(await page.locator(".lead.text-muted").textContent());
    let orderDetails = await page.locator(".lead.text-muted").textContent();
    console.log(await orderDetails)

    const id = orderDetails.match(/Id:\s*(\d+)/)[1];
    const amount = orderDetails.match(/Amount:\s*(\d+)\s*(USD)/)[1];
    const cardNumber = orderDetails.match(/Card Number:\s*([\d\s]+)/)[1];
    const name = orderDetails.match(/Name:\s*([A-Za-z]+)/)[1].trim();
    const date = orderDetails.match(/Date:\s*(\d{1,2}\/\d{1,2}\/\d{4})/)[1];

    /* console.log(id);
    console.log(name);
    console.log(cardNumber);
    console.log(date);
    console.log(amount); */
    console.log(`Id : ${id}`);
    console.log(`Amount : ${amount}`);
    console.log(`CC : ${cardNumber}`);
    console.log(`Name : ${name}`);
    console.log(`Date : ${date}`);


});
