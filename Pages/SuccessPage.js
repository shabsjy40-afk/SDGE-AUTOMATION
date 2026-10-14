import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { BaseLoginPage } from '../Pages/BaseLoginPage';
import { ApplicantDetails } from './ApplicantDetails';
import { UploadDocuments } from './UploadDocuments';
import { SummaryPage } from './SummaryPage';
const testData = require('../TestData/ApplicantDetail.json');


//const testData = require('../TestData/testdata.json');

export class SuccessPage extends SummaryPage {

    constructor(page) {

        super(page);

         this.thankYouText = page.getByRole('heading', { name: 'Thank you' });

         //this.thankYouText = page.getByText('Thank you', { exact: true });
    }


    async verifySuccessPageURL() {
        await this.verifyURLContains('checkout/onepage/success');
    }

    async verifySuccessPage() {
    await this.verifyText(this.thankYouText, 'Thank you');
}



    

}