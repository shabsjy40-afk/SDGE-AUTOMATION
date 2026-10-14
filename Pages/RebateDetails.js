import { expect } from '@playwright/test';
import { RebateSelection } from './RebateSelection';



export class RebateDetails extends RebateSelection {

    constructor(page) {

        super(page);

        this.rebateTitle = this.page.locator('h1, h2').filter({ hasText: 'Rebate Details' });
        this.selectedRebate = this.page.locator('.step-text .active-text');
        this.retailerName = page.locator('[aria-labelledby="field-retailer_name-label"] input');
        this.retailPrice = page.locator('[aria-labelledby="field-retail_price-label"] input');
        this.storeLocation = page.locator('#vs1__combobox input.vs__search');
        this.retailerState = page.locator('#vs2__combobox input.vs__search');
        this.purchaseDate = page.locator('[data-test-id="dp-input"]');
        this.purchasePrice = this.page.locator('[aria-labelledby="field-purchase_price-label"] input');
       // Make/Manufacturer dropdown
this.makeManufacturer = this.page.locator('.multiselect-wrapper').nth(0);
this.makeManufacturerOptions = this.page.locator('.multiselect-option');

// Model
this.modelDropdown = page.locator('.multiselect').nth(0);
this.modelSearch = page.locator('input.multiselect-search').nth(0);

this.nextbutton = page.getByRole('button', { name: 'Next' });

// Model option
       
       
       
        //this.storeLocationOption = page.locator('.vs__dropdown-menu li').filter({ hasText: 'Online' }).first();
    }

    async verifyRebatedetailtitile() {
        await expect(this.rebateTitle).toBeVisible();
    }

    async verifySelectedRebate() {
        await expect(this.selectedRebate).toHaveText('Portable Power Station CARE');
    }


    async enterRetailerName(name) {
        await this.retailerName.fill(name);
    }

    async enterretailprice(price) {
        await this.retailPrice.fill(price);
    }

    async selectStoreLocation(location) {
        await this.storeLocation.click();

        await this.page.getByRole('option', { name: location }).click();
    }

    async selectRetailerState(state) {
    await this.retailerState.click();
    await this.retailerState.fill(state);

    await this.page.getByRole('option', { name: state }).click();
}

async selectDate(date) {
    // date format: YYYY-MM-DD
         await this.purchaseDate.click();

    await this.page.locator(`[data-test-id="dp-${date}"]`).click();
}

async enterPurchasePrice(purchaseprice) {
    await this.purchasePrice.fill(purchaseprice);
}

async selectMakeManufacturer(option) {
    await this.makeManufacturer.click();

    await this.page.locator('.multiselect-option').filter({ hasText: option }).first().click();

}

async selectModel(model) {
    await this.modelDropdown.click();
    //await this.modelSearch.fill(model);

    await this.page.locator('.multiselect-option').filter({ hasText: model }).first().click();
}


    async clickNext() {

        await this.click(this.nextbutton);
    }

}

