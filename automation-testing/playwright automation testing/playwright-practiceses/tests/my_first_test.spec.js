const {test, expect} = require('@playwright/test')
//for my knowledge 
//const {hello, helloworld} = require('./demo/hello')

// import {hello, helloworld} from './demo/hello'

//import {hello, helloworld} from './demo/hello.js'

//console.log (hello());
//console.log (helloworld());

test('my first test', async ({page}) => {
   await page.goto('https://google.com')
   await expect(page).toHaveTitle('Google')

})
