import { test, expect } from '@playwright/test';
test('Demo Login Test', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');
    await page.pause();
    await page.locator('[placeholder="Enter your username"]').fill('Username-123');
    await page.locator('[placeholder="Enter your password"]').fill('password@123');

    await page.waitForSelector('#log-in', { timeout: 5000 });// 5 seconds
    await page.locator('#log-in').click();


})

test('Demo Login Test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

})


test.only('Demo Login Test 3', async ({ page }) => {

    await page.goto('https://admin-demo.nopcommerce.com/login');
    //await page.pause();
    await page.locator('[id="Email"]').fill('admin@yourstore.com');
    await page.locator('[id="Password"]').fill('admin');

    await page.locator('#RememberMe').click();
    await page.locator('[class="button-1 login-button"]').click();
    await page.locator('[class="button-1 login-button"]').click();
    await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/f/av0/rch/g2ytc/0x4AAAAAAADnPIDROrmt1Wwj/light/fbE/new/normal?lang=auto"]').contentFrame().locator('body').click();




})
