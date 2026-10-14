import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { BaseLoginPage } from '../Pages/BaseLoginPage';
import { ApplicantDetails } from './ApplicantDetails';
import { UploadDocuments } from './UploadDocuments';
const testData = require('../TestData/ApplicantDetail.json');


//const testData = require('../TestData/testdata.json');

export class SummaryPage extends UploadDocuments {

    constructor(page) {

        super(page);

        this.Summaryheading = page.getByRole('heading', { name: 'Summary' });
      
       this.submitapplication = page.getByRole('button', { name: 'Submit Application' });

    }


    async verifySummarypageheading() {

        console.log("Current URL:", await this.page.url());

         await expect(this.Summaryheading).toBeVisible();
    }


    async clickSubmitApplication() {

        await this.click(this.submitapplication);
    }


}