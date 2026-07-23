export class BlazeDemoPage {
    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('#login2');
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginSubmitButton = page.locator("//button[@class='btn btn-primary']").nth(2);
        this.productLinks = page.locator('a.hrefch');
        this.addToCartButton = page.locator('a.btn.btn-success.btn-lg');
        this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
        this.nameInput = page.locator('#name');
        this.countryInput = page.getByLabel('Country:');
        this.cityInput = page.getByLabel('City:');
        this.creditCardInput = page.getByRole('textbox', { name: /Credit card:/i });
        this.monthInput = page.getByLabel('Month:');
        this.yearInput = page.getByLabel('Year:');
        this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
        this.orderMessage = page.getByText('Thank you for your purchase!');
        this.orderDetails = page.locator('.lead.text-muted');
    }

    async goto() {
        await this.page.goto('https://demoblaze.com/');
    }

    async login(username, password) {
        await this.loginButton.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginSubmitButton.click();
    }

    async getProductCount() {
        return this.productLinks.count();
    }

    async getProductTitles() {
        return this.productLinks.allTextContents();
    }

    async openProductByIndex(index) {
        await this.productLinks.nth(index).click();
    }

    async addToCart() {
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.addToCartButton.click(),
        ]);
        await dialog.accept();
    }

    async goToCart() {
        await this.cartLink.click();
    }

    async openPlaceOrder() {
        await this.placeOrderButton.click();
    }

    async fillOrderForm({ name, country, city, creditCard, month, year }) {
        await this.nameInput.fill(name);
        await this.countryInput.fill(country);
        await this.cityInput.fill(city);
        await this.creditCardInput.fill(creditCard);
        await this.monthInput.fill(month);
        await this.yearInput.fill(year);
    }

    async purchase() {
        await this.purchaseButton.click();
    }

    async getOrderMessage() {
        return this.orderMessage.textContent();
    }

    async getOrderDetailsText() {
        return this.orderDetails.textContent();
    }

    parseOrderDetails(detailsText) {
        const idMatch = detailsText.match(/Id:\s*(\d+)/);
        const amountMatch = detailsText.match(/Amount:\s*([\d,\.]+)\s*USD/);
        const cardMatch = detailsText.match(/Card Number:\s*([\d\s]+)/);
        const nameMatch = detailsText.match(/Name:\s*([A-Za-z\s]+?)\s*Date:/);
        const dateMatch = detailsText.match(/Date:\s*(\d{1,2}\/\d{1,2}\/\d{4})/);

        return {
            id: idMatch?.[1] ?? null,
            amount: amountMatch?.[1] ?? null,
            cardNumber: cardMatch?.[1]?.trim() ?? null,
            name: nameMatch?.[1]?.trim() ?? null,
            date: dateMatch?.[1] ?? null,
        };
    }
}
