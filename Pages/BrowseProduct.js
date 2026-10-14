import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { BaseLoginPage } from '../Pages/BaseLoginPage';



const testData = require('../TestData/testdata.json');

export class BrowseProduct extends BaseLoginPage {

    constructor(page) {

        super(page);

        //this.browseproductlink = page.getByRole('link', { name: 'Browse Products', exact: true });
        this.browseproducttitle = page.getByRole('heading', { name: 'Browse Products' });
        const productCard = page.getByRole('listitem').filter({ hasText: 'Portable Power Station' });
        this.viewrebatebutton = page.getByRole('button', { name: 'View Rebate' }).nth(1);
        this.verifyeligbility = page.getByRole('button', { name: 'Verify Eligibility' });


        this.browseproductlink =  page.locator('a[href*="browse-product"]');
    }


    async clickBrowseProduct() {

        //await page.getByRole('link', { name: 'Browse Products' }).highlight();
        await this.browseproductlink.highlight();
        await this.click(this.browseproductlink);
        console.log("Current URL:", await this.page.url());

    }


    async clickViewRebate() {
        await this.click(this.viewrebatebutton);
        //await productCard.getByRole('button', { name: 'View Rebate' }).click({ force: true });
    }

    async clickVerifyEligibility() {
        await this.click(this.verifyeligbility);
    }






}