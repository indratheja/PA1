import {test,page} from "@playwright/test"

test('Date selection',async({page})=>{
 
    await page.goto("https://testautomationpractice.blogspot.com/");
    const date = "25";
    await page.locator("//*[@id='txtDate']").click();
    await page.locator('.ui-datepicker-month').click();
    await page.locator('.ui-datepicker-month').selectOption("8");
    await page.locator('.ui-datepicker-year').click();
    await page.locator('.ui-datepicker-year').selectOption("2026");
    //await page.pause();
    const selectdate = await page.locator("//table[@class='ui-datepicker-calendar']//tbody//tr//td").all();
    for(let data of selectdate)
    {
        if(await data.textContent()===date)
        {
            await data.click();
        }
    }

})

async function dateSelection(page,date,month,year)
{
    await page.locator("//*[@id='txtDate']").click();
    await page.locator('.ui-datepicker-month').click();
    await page.locator('.ui-datepicker-month').selectOption(month);
    await page.locator('.ui-datepicker-year').click();
    await page.locator('.ui-datepicker-year').selectOption(year);
    const selectdate = await page.locator("//table[@class='ui-datepicker-calendar']//tbody//tr//td").all();
    for(let data of selectdate)
    {
        if(await data.textContent()===date)
        {
            await data.click();
        }
    }
}

test('Date selection using function',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await dateSelection(page,"19","2","2029");

});