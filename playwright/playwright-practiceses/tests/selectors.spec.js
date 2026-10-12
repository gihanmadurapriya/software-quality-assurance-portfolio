import {test, expect} from'@playwright/test';

test ('selectors', async ({page}) => {

    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    // using any object property
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('standard_user');
// using css se
//#login-button

await page.locator('#login-button').click();

//using x path, conrol +F for getting the x path
await page.locator('xpath=//input[@id="password"]').fill('secret_sauce');
await page.locator('//input[@name="password"]').fill('secret_sauce1');

//using text selector
await page.locator('text=LOGIN').click();
await page.locator('input:has-text("LOGIN")').click();

});