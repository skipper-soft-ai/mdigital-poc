const { expect, test } = require('@playwright/test');
const handleOverlays = require('./searchHelper.js');


test('Change language test', async ({ page }) => {
  await page.goto('https://govisit.gov.il/he/home');
  await page.locator('#user_understood').click();
  await page.locator('#menu').click();
  await page.locator('.lang').click();
  await page.locator('#lang_en').click();
  await page.locator('#menu').click();
  await page.locator('.lang').click();
  await page.locator('#lang_he').first().click();
});


test('basic test goVisit', async ({page}) => {
  await page.goto('https://govisit.gov.il/he/home');
  await page.locator('#user_understood').click();
  await page.locator('input').fill('ראש המ');
  await page.locator('#mat-option-2').click();
  await handleOverlays(page);
  await page.locator('#continue_20008_255').click();
  await page.locator('#phone').fill(process.env.PHONE_NUMBER);
  await page.locator('#login_button').click();
  await expect(page.locator('#pincodeInput')).toBeVisible();
});

