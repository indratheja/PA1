import { test, expect } from "@playwright/test"
import { BlazeDemoPage } from "../pageObjects/blazeDemoPage";

test("Login and get the products count", async ({ page }) => {
    const demoPage = new BlazeDemoPage(page);

    await demoPage.goto();
    await demoPage.login('intheja', '123456');

    const itemCount = await demoPage.getProductCount();
    console.log(itemCount);
    console.log(await demoPage.getProductTitles());
});

test("Add to cart", async ({ page }) => {
    const demoPage = new BlazeDemoPage(page);

    await demoPage.goto();
    await demoPage.login('intheja', '123456');
    await demoPage.openProductByIndex(1);
    await demoPage.addToCart();
    await demoPage.goToCart();
    await demoPage.openPlaceOrder();
    await demoPage.fillOrderForm({
        name: 'indras',
        country: 'india',
        city: 'hyderabad',
        creditCard: '1234 5689 1334 1234',
        month: 'Aug',
        year: '2028',
    });
    await demoPage.purchase();

    console.log(await demoPage.getOrderMessage());
    const orderDetails = await demoPage.getOrderDetailsText();
    console.log(orderDetails);

    const parsedOrder = demoPage.parseOrderDetails(orderDetails);
    console.log(`Id : ${parsedOrder.id}`);
    console.log(`Amount : ${parsedOrder.amount}`);
    console.log(`CC : ${parsedOrder.cardNumber}`);
    console.log(`Name : ${parsedOrder.name}`);
    console.log(`Date : ${parsedOrder.date}`);
});
