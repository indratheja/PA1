# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: blazedemo.spec.js >> Add to cart
- Location: tests\blazedemo.spec.js:15:5

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 50000ms exceeded.
Call log:
  - waiting for getByText('Thank you for your purchase!')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "Place order" [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Place order" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]: "Total: 3280"
          - generic [ref=e11]:
            - generic [ref=e12]: "Name:"
            - 'textbox "Total: 3280 Name:" [ref=e13]': indras
          - generic [ref=e14]:
            - generic [ref=e15]: "Country:"
            - textbox "Country:" [ref=e16]: india
          - generic [ref=e17]:
            - generic [ref=e18]: "City:"
            - textbox "City:" [ref=e19]: hyderabad
          - generic [ref=e20]:
            - generic [ref=e21]: "Credit card:"
            - textbox "Credit card:" [ref=e22]: 1234 5689 1334 1234
          - generic [ref=e23]:
            - generic [ref=e24]: "Month:"
            - textbox "Month:" [ref=e25]: Aug
          - generic [ref=e26]:
            - generic [ref=e27]: "Year:"
            - textbox "Year:" [ref=e28]: "2028"
        - generic [ref=e30]:
          - button "Close" [ref=e31]
          - button "Purchase" [active] [ref=e32]
  - text:             
  - navigation [ref=e33]:
    - generic [ref=e34]:
      - link "PRODUCT STORE" [ref=e35] [cursor=pointer]:
        - /url: index.html
        - img [ref=e36]
        - text: PRODUCT STORE
      - list [ref=e38]:
        - listitem [ref=e39]:
          - link "Home (current)" [ref=e40] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e41]: (current)
        - listitem [ref=e42]:
          - link "Contact" [ref=e43] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e44]:
          - link "About us" [ref=e45] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e46]:
          - link "Cart" [ref=e47] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e48]:
          - link "Log out" [ref=e49] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e50]:
          - link "Welcome intheja" [ref=e51] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e53]:
    - generic [ref=e54]:
      - heading "Products" [level=2] [ref=e55]
      - table [ref=e57]:
        - rowgroup [ref=e58]:
          - row "Pic Title Price x" [ref=e59]:
            - columnheader "Pic" [ref=e60]
            - columnheader "Title" [ref=e61]
            - columnheader "Price" [ref=e62]
            - columnheader "x" [ref=e63]
        - rowgroup [ref=e64]:
          - row "Nokia lumia 1520 820 Delete" [ref=e65]:
            - cell [ref=e66]:
              - img [ref=e67]
            - cell "Nokia lumia 1520" [ref=e68]
            - cell "820" [ref=e69]
            - cell "Delete" [ref=e70]:
              - link "Delete" [ref=e71] [cursor=pointer]:
                - /url: "#"
          - row "Nokia lumia 1520 820 Delete" [ref=e72]:
            - cell [ref=e73]:
              - img [ref=e74]
            - cell "Nokia lumia 1520" [ref=e75]
            - cell "820" [ref=e76]
            - cell "Delete" [ref=e77]:
              - link "Delete" [ref=e78] [cursor=pointer]:
                - /url: "#"
          - row "Nokia lumia 1520 820 Delete" [ref=e79]:
            - cell [ref=e80]:
              - img [ref=e81]
            - cell "Nokia lumia 1520" [ref=e82]
            - cell "820" [ref=e83]
            - cell "Delete" [ref=e84]:
              - link "Delete" [ref=e85] [cursor=pointer]:
                - /url: "#"
          - row "Nokia lumia 1520 820 Delete" [ref=e86]:
            - cell [ref=e87]:
              - img [ref=e88]
            - cell "Nokia lumia 1520" [ref=e89]
            - cell "820" [ref=e90]
            - cell "Delete" [ref=e91]:
              - link "Delete" [ref=e92] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e93]:
      - heading "Total" [level=2] [ref=e94]
      - heading "3280" [level=3] [ref=e97]
      - button "Place Order" [ref=e98]
  - generic [ref=e101]:
    - generic [ref=e104]:
      - heading "About Us" [level=4] [ref=e105]
      - paragraph [ref=e106]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e109]:
      - heading "Get in Touch" [level=4] [ref=e110]
      - paragraph [ref=e111]: "Address: 2390 El Camino Real"
      - paragraph [ref=e112]: "Phone: +440 123456"
      - paragraph [ref=e113]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e117]:
      - img [ref=e118]
      - text: PRODUCT STORE
  - contentinfo [ref=e119]:
    - paragraph [ref=e120]: Copyright © Product Store
```

# Test source

```ts
  1  | export class BlazeDemoPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.loginButton = page.locator('#login2');
  5  |         this.usernameInput = page.locator('#loginusername');
  6  |         this.passwordInput = page.locator('#loginpassword');
  7  |         this.loginSubmitButton = page.locator("//button[@class='btn btn-primary']").nth(2);
  8  |         this.productLinks = page.locator('a.hrefch');
  9  |         this.addToCartButton = page.locator('a.btn.btn-success.btn-lg');
  10 |         this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
  11 |         this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
  12 |         this.nameInput = page.locator('#name');
  13 |         this.countryInput = page.getByLabel('Country:');
  14 |         this.cityInput = page.getByLabel('City:');
  15 |         this.creditCardInput = page.getByRole('textbox', { name: /Credit card:/i });
  16 |         this.monthInput = page.getByLabel('Month:');
  17 |         this.yearInput = page.getByLabel('Year:');
  18 |         this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
  19 |         this.orderMessage = page.getByText('Thank you for your purchase!');
  20 |         this.orderDetails = page.locator('.lead.text-muted');
  21 |     }
  22 | 
  23 |     async goto() {
  24 |         await this.page.goto('https://demoblaze.com/');
  25 |     }
  26 | 
  27 |     async login(username, password) {
  28 |         await this.loginButton.click();
  29 |         await this.usernameInput.fill(username);
  30 |         await this.passwordInput.fill(password);
  31 |         await this.loginSubmitButton.click();
  32 |     }
  33 | 
  34 |     async getProductCount() {
  35 |         return this.productLinks.count();
  36 |     }
  37 | 
  38 |     async getProductTitles() {
  39 |         return this.productLinks.allTextContents();
  40 |     }
  41 | 
  42 |     async openProductByIndex(index) {
  43 |         await this.productLinks.nth(index).click();
  44 |     }
  45 | 
  46 |     async addToCart() {
  47 |         const [dialog] = await Promise.all([
  48 |             this.page.waitForEvent('dialog'),
  49 |             this.addToCartButton.click(),
  50 |         ]);
  51 |         await dialog.accept();
  52 |     }
  53 | 
  54 |     async goToCart() {
  55 |         await this.cartLink.click();
  56 |     }
  57 | 
  58 |     async openPlaceOrder() {
  59 |         await this.placeOrderButton.click();
  60 |     }
  61 | 
  62 |     async fillOrderForm({ name, country, city, creditCard, month, year }) {
  63 |         await this.nameInput.fill(name);
  64 |         await this.countryInput.fill(country);
  65 |         await this.cityInput.fill(city);
  66 |         await this.creditCardInput.fill(creditCard);
  67 |         await this.monthInput.fill(month);
  68 |         await this.yearInput.fill(year);
  69 |     }
  70 | 
  71 |     async purchase() {
  72 |         await this.purchaseButton.click();
  73 |     }
  74 | 
  75 |     async getOrderMessage() {
> 76 |         return this.orderMessage.textContent();
     |                                  ^ Error: locator.textContent: Test timeout of 50000ms exceeded.
  77 |     }
  78 | 
  79 |     async getOrderDetailsText() {
  80 |         return this.orderDetails.textContent();
  81 |     }
  82 | 
  83 |     parseOrderDetails(detailsText) {
  84 |         const idMatch = detailsText.match(/Id:\s*(\d+)/);
  85 |         const amountMatch = detailsText.match(/Amount:\s*([\d,\.]+)\s*USD/);
  86 |         const cardMatch = detailsText.match(/Card Number:\s*([\d\s]+)/);
  87 |         const nameMatch = detailsText.match(/Name:\s*([A-Za-z\s]+?)\s*Date:/);
  88 |         const dateMatch = detailsText.match(/Date:\s*(\d{1,2}\/\d{1,2}\/\d{4})/);
  89 | 
  90 |         return {
  91 |             id: idMatch?.[1] ?? null,
  92 |             amount: amountMatch?.[1] ?? null,
  93 |             cardNumber: cardMatch?.[1]?.trim() ?? null,
  94 |             name: nameMatch?.[1]?.trim() ?? null,
  95 |             date: dateMatch?.[1] ?? null,
  96 |         };
  97 |     }
  98 | }
  99 | 
```