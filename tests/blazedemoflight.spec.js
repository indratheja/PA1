import { test, expect } from "@playwright/test";


test('Flight combinations between cities ', async ({ page }) => {
    
    await page.goto("https://blazedemo.com/");
    const fromList = await page.locator("select[name='fromPort'] option").allTextContents();
    const toList = await page.locator("select[name='toPort'] option").allTextContents();
    console.log(fromList);
    console.log(toList);

    for(let i of fromList)
    {
        for(let j of toList)
        {
            console.log(`from: ${[i]}  to: ${[j]}`)
        }
    }
});


test('Flight list', async ({ page }) => {
    
    await page.goto("https://blazedemo.com/");
    const findflights = page.getByRole('button', { name: 'Find Flights' });
    await findflights.click();
    await page.waitForURL(/reserve.php/);

    const columns = page.locator("//table/thead/tr/th");
    const headers = await columns.count();
    console.log("columns::", headers);

    const rows = page.locator("//table/tbody/tr");
    console.log("rows::", await rows.count());

    /*     for(let i=0;i<await rows.count();i++)
        {   
             const row = rows.nth(i);
             const tds = row.locator('td');
    
             for(let j=0; j < await tds.count();j++)
          {
             console.log(await tds.nth(j).textContent());
                  
          }
        } */
    const table = [];
    for (let i = 0; i < await rows.count(); i++) {
        const tds = rows.nth(i).locator('td');
        const rowData = await tds.allTextContents();
        table.push(rowData);
    }
    console.log(table);

    let rownum = -1;
    let columnnum = -1;

    outerLoop:
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            if (table[i][j] === "United Airlines") {
                rownum = i;
                columnnum = j;
                console.log(`Found at Row: ${rownum}, Column: ${columnnum}`);
                break outerLoop;
            }
        }
    }

    if (rownum !== -1) {
        await rows.nth(rownum).locator("input[type='submit']").click();
        await expect(page).toHaveURL(/purchase.php/);
    } else {
        console.log("United Airlines not found in table");
    }


});