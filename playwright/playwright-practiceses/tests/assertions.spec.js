import test, { expect } from '@playwright/test';

test('Assertions Demo', async ({page}) => {

    await page.goto('https://kitchen.applitools.com/');

    //assertions
    // check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);

    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click();
    }

    // check element is visible or not
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden();

    // check element is enabled or not
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
   // await expect(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen');

    //check attribute value
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a.*/);
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a.*/);


    //check page url and title

    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*Kitchen/);
    await page.pause();
    //visual validation with screenshot
    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });

})