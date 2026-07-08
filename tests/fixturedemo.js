import {test as base,expect,page } from "@playwright/test";


const fixturetest = base.extend(
    {
        testdata : async({page},use)=>{
         await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
         await page.getByPlaceholder('email@example.com').fill("intheja@gmail.com")
         await page.getByPlaceholder('enter your passsword').fill("123456");
         await page.getByRole("button", {name:'login'}).click();

         await use(page);

         }

    });
    
    module.exports = {fixturetest,expect}
    


