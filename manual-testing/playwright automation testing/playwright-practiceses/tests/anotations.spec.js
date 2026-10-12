import { test, expect } from '@playwright/test';

test.skip('Test One', async ({ page }) => {

})

test('Not yet ready', async ({ page }) => {
    test.fail();
})

test.fixme('Test to be fixed', async ({ page }) => {

})
test('Slow Test', async ({ page }) => {
    test.slow();

})

test('Focus this test', async ({ page }) => {

})

//Tags

test('Test login page @smoke', async ({ page }) => {

})

//for skipping test

//npx playwright test ./tests/anotations.spec.js --project=chromium --headed --grep-invert "@smoke"
