import { test, request, expect } from "@playwright/test"
const loginPayload = {
    userEmail: "intheja@gmail.com", userPassword: "123456"
}

let token;

test.beforeAll(async () => {

    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: loginPayload
    })
    expect(loginResponse.ok()).toBeTruthy();

    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token)

});

test('api check ', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token)

    await page.goto("https://rahulshettyacademy.com/client")
    


});

