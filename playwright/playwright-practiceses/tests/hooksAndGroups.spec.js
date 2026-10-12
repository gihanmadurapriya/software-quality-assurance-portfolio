import { test, expect } from '@playwright/test';

test.describe('All my test', () => {


    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        //await page.close();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('Homepage', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();

    })

    test('Log out', async ({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();

    })

})
