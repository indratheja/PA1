export class RahulShettyLoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.documentLink = page.locator("[href*='documents-request']");
    }

    async goto() {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    }

    async getDomainFromDocumentRequest() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.documentLink.click(),
        ]);

        const text = await newPage.locator('.im-para.red').textContent();
        return text.split('@')[1].split(' ')[0];
    }

    async fillUsername(usernameValue) {
        await this.username.fill(usernameValue);
    }
}

export class AutomationPracticePage {
    constructor(page) {
        this.page = page;
        this.columns = page.locator('table:first-of-type thead th');
        this.rows = page.locator('(//table)[2]/tbody/tr');
    }

    async goto() {
        await this.page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    }

    async getColumnCount() {
        return this.columns.count();
    }

    async getRowCount() {
        return this.rows.count();
    }

    async getFirstRowTextContaining(text) {
        const row = this.rows.filter({
            has: this.page.locator('td'),
            hasText: text,
        }).first();
        return row.textContent();
    }

    async logAllRowCells() {
        const rowCount = await this.getRowCount();
        for (let i = 0; i < rowCount; i++) {
            const row = this.rows.nth(i);
            const cells = row.locator('td');
            const cellCount = await cells.count();
            for (let j = 0; j < cellCount; j++) {
                console.log(await cells.nth(j).textContent());
            }
        }
    }
}

export class DatePickerPage {
    constructor(page) {
        this.page = page;
        this.dateInput = page.locator('#datepicker');
        this.currentMonth = page.locator("//*[@class='ui-datepicker-month']");
        this.currentYear = page.locator("//*[@class='ui-datepicker-year']");
        this.calendarCells = page.locator("//table[@class='ui-datepicker-calendar']//tbody//tr//td");
        this.textDateInput = page.locator('#txtDate');
        this.monthSelect = page.locator('.ui-datepicker-month');
        this.yearSelect = page.locator('.ui-datepicker-year');
        this.dropdownCalendarCells = page.locator("//table[@class='ui-datepicker-calendar']//tbody//tr//td");
    }

    async goto() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async selectDate(targetYear, targetMonth, targetDay) {
        await this.dateInput.click();

        while (true) {
            const currentMonth = await this.currentMonth.textContent();
            const currentYear = await this.currentYear.textContent();
            if (currentMonth === targetMonth && currentYear === targetYear) {
                break;
            }
            await this.page.locator('.ui-datepicker-next').click();
        }

        const allDates = await this.calendarCells.all();
        for (const dateCell of allDates) {
            if ((await dateCell.textContent()) === targetDay) {
                await dateCell.click();
                return;
            }
        }
    }

    async selectDateByDropdown(targetDay, targetMonthValue, targetYearValue) {
        await this.textDateInput.click();
        await this.monthSelect.selectOption(targetMonthValue);
        await this.yearSelect.selectOption(targetYearValue);

        for (const dateCell of await this.dropdownCalendarCells.all()) {
            if ((await dateCell.textContent()) === targetDay) {
                await dateCell.click();
                return;
            }
        }
    }
}

export class DummyTicketBookingPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#travname');
        this.lastName = page.locator('#travlastname');
        this.genderMale = page.getByRole('radio', { name: 'Male', exact: true });
        this.oneWay = page.getByRole('radio', { name: 'One Way', exact: true });
        this.fromCity = page.locator('#fromcity');
        this.toCity = page.locator('#tocity');
        this.datePickers = page.locator("//input[@class='thwcfe-checkout-date-picker input-text thwcfe-input-field hasDatepicker']");
        this.monthSelect = page.locator('.ui-datepicker-month');
        this.yearSelect = page.locator('.ui-datepicker-year');
        this.dateCells = page.locator('.ui-datepicker-calendar td');
        this.reasonContainer = page.locator('#select2-reasondummy-container');
        this.reasonOptions = page.locator('.select2-results__option');
        this.emailRadio = page.getByRole('radio', { name: 'Email' });
        this.emailText = page.getByRole('textbox', { name: 'Email address' });
        this.countryText = page.getByRole('textbox', { name: 'India' });
        this.countryOption = page.getByRole('option', { name: 'India', exact: true });
        this.address = page.getByRole('textbox', { name: 'Street address' });
        this.flatAddress = page.getByRole('textbox', { name: 'Flat, suite, unit, etc. (' });
        this.city = page.getByRole('textbox', { name: 'Town / City' });
        this.stateContainer = page.getByLabel('State / District / Province');
        this.stateOption = page.getByRole('option', { name: 'Telangana' });
        this.pinCode = page.getByRole('textbox', { name: 'PIN Code' });
        this.phone = page.getByRole('textbox', { name: 'Phone' });
        this.placeOrderButton = page.getByRole('button', { name: 'Place order' });
    }

    async goto() {
        await this.page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
    }

    async fillPersonalDetails(firstName, lastName) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
    }

    async selectDatePicker(index, monthValue, yearValue, day) {
        await this.datePickers.nth(index).click();
        await this.monthSelect.selectOption(monthValue);
        await this.yearSelect.selectOption(yearValue);

        for (const dateCell of await this.dateCells.all()) {
            if ((await dateCell.textContent()) === day) {
                await dateCell.click();
                return;
            }
        }

        throw new Error(`Day ${day} was not found in the calendar for ${monthValue}/${yearValue}`);
    }

    async completeBooking(bookingDetails) {
        await this.fillPersonalDetails(bookingDetails.firstName, bookingDetails.lastName);
        await this.selectDatePicker(0, bookingDetails.birthMonth, bookingDetails.birthYear, bookingDetails.birthDay);
        await this.fillTravelDetails(bookingDetails.fromCity, bookingDetails.toCity);
        await this.selectDatePicker(1, bookingDetails.travelMonth, bookingDetails.travelYear, bookingDetails.travelDay);
        await this.chooseReason();
        await this.fillContactDetails(
            bookingDetails.email,
            bookingDetails.country,
            bookingDetails.address,
            bookingDetails.flatAddress,
            bookingDetails.city,
            bookingDetails.state,
            bookingDetails.pinCode,
            bookingDetails.phone,
        );
        await this.placeOrder();
    }

    async fillTravelDetails(fromCity, toCity) {
        await this.genderMale.click();
        await this.oneWay.click();
        await this.fromCity.fill(fromCity);
        await this.toCity.fill(toCity);
    }

    async chooseReason() {
        await this.reasonContainer.click();
        await this.reasonOptions.first().click();
    }

    async fillContactDetails(email, country, address, flatAddress, city, state, pinCode, phone) {
        await this.emailRadio.check();
        await this.emailText.fill(email);
        await this.countryText.click();
        await this.countryOption.click();
        await this.address.fill(address);
        await this.flatAddress.fill(flatAddress);
        await this.city.fill(city);
        await this.stateContainer.getByText('Select an option…').click();
        await this.stateOption.click();
        await this.pinCode.fill(pinCode);
        await this.phone.fill(phone);
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }
}
