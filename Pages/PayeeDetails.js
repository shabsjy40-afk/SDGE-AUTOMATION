import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { BaseLoginPage } from '../Pages/BaseLoginPage';
import { ApplicantDetails } from './ApplicantDetails';
const testData = require('../TestData/ApplicantDetail.json');


//const testData = require('../TestData/testdata.json');

export class PayeeDetails extends ApplicantDetails {

    constructor(page) {

        super(page);

        this.payeedetailheading = page.getByRole('heading', { name: 'Payee Details' });

         //this.lName = page.getByLabel('Last Name');
        // this.lName = page.locator('input[id="__BVID__247"]');
              this.lName = page.getByText('Last Name');
        

        // this.lName = page.getByText(testData.applicantDetails.lastName, { exact: true });
        // this.emal = page.getByText(testData.applicantDetails.email, { exact: true });
     
        this.nextbutton = page.getByRole('button', { name: 'Next' });

    }


    async verifyPayeeDetailpageheading() {

        console.log("Current URL:", await this.page.url());

         await expect(this.payeedetailheading).toBeVisible();
    }

    async PayeeDetailsValidation() {

          await expect(this.lName).toBeVisible();
         
    }


    async clickNext() {

        await this.click(this.nextbutton);
    }


}