export class AmazonSearchPage {
    constructor(page, baseUrl = 'https://www.amazon.com') {
        this.page = page;
        this.baseUrl = baseUrl;
        this.searchBox = page.locator('#twotabsearchtextbox');
        this.searchSubmit = page.locator('#nav-search-submit-button');
        this.searchResults = '[data-component-type="s-search-result"]';
        this.productTitles = page.locator("//h2/span[@class='a-size-medium a-color-base']");
    }

    async goto(url) {
        await this.page.goto(url || this.baseUrl);
    }

    async search(query) {
        await this.searchBox.fill(query);
        await this.searchSubmit.click();
        await this.page.waitForSelector(this.searchResults);
    }

    async getSearchResults(limit = 10) {
        return this.page.$$eval(this.searchResults, (items, maxItems) => {
            return items.slice(0, maxItems).map(item => {
                const title = item.querySelector('h2 span')?.innerText || 'N/A';
                const price = item.querySelector('.a-price .a-offscreen')?.innerText || 'N/A';
                const link = item.querySelector('h2 a')?.href || 'N/A';
                return { title, price, link };
            });
        }, limit);
    }

    async getProductCount() {
        return this.productTitles.count();
    }

    async getAllProductTitles() {
        return this.productTitles.allTextContents();
    }
}
