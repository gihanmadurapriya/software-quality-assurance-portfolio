import {test, expect, chromium} from '@playwright/test';

test('Slow Motion Video Recording Demo', async () => {

    const browsr = await chromium.launch({
        slowMo: 1000, // slow down by 1000ms
        headless: false, // run in headful mode
    });
    const context = await browsr.newContext({
        recordVideo: {
            dir: 'videos/', // directory to save videos
            size: { width: 800, height: 600 }, // video size
        }
    });
    const page = await context.newPage();
   await page.goto('https://admin-demo.nopcommerce.com/login');
    //await page.pause();
    await page.locator('[id="Email"]').fill('admin@yourstore.com');
    await page.locator('[id="Password"]').fill('admin');

    await page.locator('#RememberMe').click();
    await page.locator('[class="button-1 login-button"]').click();

    await context.close();
})