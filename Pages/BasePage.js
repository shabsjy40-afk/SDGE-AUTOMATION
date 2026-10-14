import { expect } from '@playwright/test';

export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        //await locator.waitFor({ state: 'visible' });

        await expect(locator).toBeVisible({ timeout: 30000 });
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async type(locator, value) {
        await locator.pressSequentially(value);
    }

    async verifyText(locator, text) {
        await expect(locator).toHaveText(text);
    }

    async verifyValue(locator, value) {
        await expect(locator).toHaveValue(value);
    }

    async verifyVisible(locator) {
        await expect(locator).toBeVisible();
    }


    async acceptCookies() {

        const cookie = this.page.locator('#onetrust-accept-btn-handler');

        if (await cookie.isVisible().catch(() => false)) {
            await cookie.click();
        }
    }

    async selectDropdown(dropdown, option) {

        await dropdown.click();

        await this.page.getByRole('option', { name: option }).click();

    }

    async verifyURL(expectedURL) {
        await expect(this.page).toHaveURL(expectedURL);
    }

    async verifyTitle(expectedTitle) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async verifyInputValue(locator, expectedValue) {
        const actualValue = await locator.inputValue();
        expect(actualValue).toBe(expectedValue);
    }


    async check(locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.check();
    }


    async acceptCookies() {
        const acceptBtn = this.page.locator('#onetrust-accept-btn-handler');

        if (await acceptBtn.isVisible().catch(() => false)) {
            await acceptBtn.click();
        }

        const closeBtn = this.page.locator('.onetrust-close-btn-handler');

        if (await closeBtn.isVisible().catch(() => false)) {
            await closeBtn.click();
        }
    }



}