export async function dateSelection(page, date, month, year) {
   const monthSelect = page.locator('.ui-datepicker-month');
   const yearSelect = page.locator('.ui-datepicker-year');
   const dateCells = page.locator("//table[@class='ui-datepicker-calendar']//tbody//tr//td");

   await page.locator('#txtDate').click();
   await monthSelect.selectOption(String(month));
   await yearSelect.selectOption(String(year));

   for (const cell of await dateCells.all()) {
       const cellText = (await cell.textContent())?.trim();
       if (cellText === String(date)) {
           await cell.click();
           return;
       }
   }

   throw new Error(`Date ${date} was not found in the calendar for ${month}/${year}`);
}


