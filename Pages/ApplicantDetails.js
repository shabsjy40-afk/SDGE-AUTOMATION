import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { BaseLoginPage } from '../Pages/BaseLoginPage';
import { SignIn } from './SignIn';

const testdata = require('../TestData/ApplicantDetail.json');

export class ApplicantDetails extends SignIn {

    constructor(page) {

        super(page);

        this.applicanttitle = page.getByRole('heading', { name: 'Applicant Details' });

        //field value validations
        this.FirstName = page.getByLabel('Primary Account Holder First Name').locator('input');
        this.Lastname = page.getByLabel('Primary Account Holder Last Name').locator('input');
        this.Email = page.getByLabel('Email Address').locator('input');
        this.Address = page.locator('.multiselect-single-label-text').first();
        this.City = page.getByLabel('City').locator('input');
        this.State = page.getByLabel('State').locator('input').first();
        this.zipcode = page.getByLabel('Zip Code').locator('input');
        this.aboutus = page.locator('div.multiselect-wrapper');

       this.websiteOption = page.locator('li.multiselect-option').filter({ hasText: 'Website' });

        //terms and conditions
        this.termsandconditions = page.getByRole('button', { name: 'Terms and Conditions' });

       // this.termscheckbox=page.getByRole('checkbox', { name: /terms/i })
        this.termscheckbox = page.locator('#__BVID__101');
        this.nextbutton = page.getByRole('button', { name: 'Next' });


    }

    //  async navigateToApplicantPage() {

    //    await this.home.openApplication();

    //    await this.signIn.login();

    //     // now Applicant Details page is open
    // }


    async verifypageheading() {

        console.log("Current URL:", await this.page.url());

        //verify Applicants Details heading
        await expect(this.applicanttitle).toBeVisible();

    }

    async validateApplicantDetails() {

        await this.verifyValue(this.FirstName, testdata.applicantDetails.firstName);
        await this.verifyValue(this.Lastname, testdata.applicantDetails.lastName);
        await this.verifyValue(this.Email, testdata.applicantDetails.email);
        await this.verifyText(this.Address, testdata.applicantDetails.address);
        await this.verifyValue(this.City, testdata.applicantDetails.city);
        await this.verifyValue(this.State, testdata.applicantDetails.state);
        await this.verifyValue(this.zipcode, testdata.applicantDetails.zipCode);

        //hear about us->  website selected from list
        //await this.page.getByRole('combobox').nth(1).click();
        //select website from that list
        //await this.click(this.websiteOption);

        
        //await this.page.locator('li.multiselect-option').count();
        //await this.page.locator('li.multiselect-option').filter({ hasText: 'Website' }).click();



        //this.termsandconditions
    }

    async acceptTerms() {

        await this.termsandconditions.click();
        await this.termsandconditions.evaluate(el => {
            el.scrollTop = el.scrollHeight;
        });
    }

    async selectcheckbox() {

        //terms and conditions selected-checkbox
      await this.check(this.termscheckbox);
       // await this.click(this.termscheckbox);
        //await this.page.locator('#__BVID__101').click({ force: true });
    }

    async clickNext() {

        //NEXT BUTTON CLICK
        await this.click(this.nextbutton);
    }



    async acceptCookies() {

        const cookie = this.page.locator('#onetrust-accept-btn-handler');

        if (await cookie.isVisible().catch(() => false)) {
            await cookie.click();
        }
    }


}




