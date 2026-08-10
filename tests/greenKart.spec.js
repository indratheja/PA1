import {test,expect} from "@playwright/test"

test("greenkart table",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const columns = page.locator('table thead th');
    console.log(await columns.count());
    console.log(await columns.allTextContents());
    const rows = page.locator('table tbody tr');
    console.log(await rows.count());
    //console.log(await rows.allTextContents());
    let rowcol =-1;
    let colcol=-1;

    for (let i = 0; i < await rows.count(); i++) {
        const cells = rows.nth(i).locator('td');

        for (let j = 0; j < await columns.count(); j++) {
            const cellText = await cells.nth(j).textContent();
            //console.log(cellText);
               if (cellText === 'Rice') {
            rowcol = i;
            colcol = j;
            console.log([rowcol, colcol]);
        }
        }
    }
    

});