const { test, expect } = require('@playwright/test');

test('Click on a property go to their specific page', async({page}) => {
    await page.goto('http://localhost:3000/properties');
    await page.click('text=Empty Lot in Quezon City');
    await expect(page).toHaveURL('http://localhost:3000/properties/empty-lot-in-quezon-city')
})

test('Click on a property shows its details in new page', async({page})=>{
    await page.goto('http://localhost:3000/properties');
    await page.click('text=Empty Lot in Quezon City');
    await expect(page.locator('.property-container')).toContainText('Empty Lot in Quezon City')
})