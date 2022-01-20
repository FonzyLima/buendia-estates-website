const { test, expect } = require('@playwright/test');

test('Home Page can be accessed', async({page}) => {
    await page.goto('http://localhost:3000/');

    await expect(page).toHaveURL('http://localhost:3000/')
})

test('Properties Page can be accessed through navbar', async({page}) => {
    await page.goto('http://localhost:3000/');
    await page.click('text=Properties');
    await expect(page).toHaveURL('http://localhost:3000/properties');
})

test('Sell a Property Page can be accessed through navbar', async({page}) => {
    await page.goto('http://localhost:3000/');
    await page.click('text=Sell a Property');
    await expect(page).toHaveURL('http://localhost:3000/Sellproperties');

})

test('Booking Page can be accessed through navbar', async({page}) => {
    await page.goto('http://localhost:3000/');
    await page.click('text=Book a Viewing');
    await expect(page).toHaveURL('http://localhost:3000/Booking');

})