import { expect } from '@playwright/test';
import { PayeeDetails } from './PayeeDetails';
const testData = require('../TestData/ApplicantDetail.json');


//const testData = require('../TestData/testdata.json');

export class RebateSelection extends PayeeDetails {

    constructor(page) {

        super(page);

        this.Rebateselectionheading = page.getByRole('heading', { name: 'Rebate Selection'});

            
        this.nextbutton = page.getByRole('button', { name: 'Next' });
      // this.rebateselectionitem=page.locator('#selected-rebates.product-card');

      this.rebateTitle = page.locator('#selected-rebates .card-title');


       
    }

     async verifyRebateselectionpageheading() {

        console.log("Current URL:", await this.page.url());


         await expect(this.Rebateselectionheading).toBeVisible();
    }


    async checkRebateselectionlist() {

          //await expect(this.rebateTitle).toHaveText('Portable Power Station CARE');

      
    }

    
    async clickNext() {

        await this.click(this.nextbutton);
    }


}