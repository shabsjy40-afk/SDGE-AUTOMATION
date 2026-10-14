import { test as base } from '@playwright/test';

import { BaseLoginPage } from '../Pages/BaseLoginPage';
import { BrowseProduct } from '../Pages/BrowseProduct';
import { SignIn } from '../Pages/SignIn';
import { ApplicantDetails } from '../Pages/ApplicantDetails';
import { ApplicantFlow } from '../Flows/ApplicantFlow';
import { PayeeDetails } from '../Pages/PayeeDetails';
import { RebateSelection } from '../Pages/RebateSelection';
import { RebateDetails } from '../Pages/RebateDetails';
import   {UploadDocuments} from '../Pages/UploadDocuments';
import { SummaryPage } from '../Pages/SummaryPage';
import { SuccessPage } from '../Pages/SuccessPage';



export const test = base.extend({

    baseloginPage: async ({ page }, use) => {

        await use(new BaseLoginPage(page));

    },

    browseProduct: async ({ page }, use) => {

        await use(new BrowseProduct(page));

    },

    signIn: async ({ page }, use) => {

        await use(new SignIn(page));

    },

    applicant: async ({ page }, use) => {

    const flow = new ApplicantFlow(page);

    // Execute complete navigation
    await flow.navigate();

    // Return Applicant Details page object
    await use(new ApplicantDetails(page));

},

 payeedetails: async ({ page }, use) => {

        await use(new PayeeDetails(page));

    },


 rebateselect: async ({ page }, use) => {

        await use(new RebateSelection(page));

    },


 rebatedetails: async ({ page }, use) => {

        await use(new RebateDetails(page));

    },


    uploaddocuments: async ({ page }, use) => {

        await use(new UploadDocuments(page));

    },



//SummaryPage

 summary: async ({ page }, use) => {

        await use(new SummaryPage(page));

    },

    //SuccessPage
    successPage: async ({ page }, use) => {

        await use(new SuccessPage(page));

    },

});






export { expect } from '@playwright/test';