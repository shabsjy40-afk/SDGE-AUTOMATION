import { test,expect} from '../Fixtures/BaseTest';

import { BaseLoginPage } from '../Pages/BaseLoginPage';

import { BrowseProduct } from '../Pages/BrowseProduct';

import { SignIn } from '../Pages/SignIn';

import { ApplicantDetails } from '../Pages/ApplicantDetails';


import { Apivalidator_AccountDetails } from '../Utilities/Apivalidator_AccountDetails';
import {Apivalidator_QuantityLimit} from '../Utilities/Apivalidator_QuantityLimit';


test('HTTP Authentication',async({baseloginPage,browseProduct,signIn,applicant,payeedetails,page,rebateselect,rebatedetails,uploaddocuments,summary,successPage})=>{

// Applicant Details
await applicant.validateApplicantDetails();
await applicant.acceptTerms();
await applicant.selectcheckbox();

// API-->Account validation(customer is eligible or not)Start waiting for the API BEFORE clicking Next
const responsePromise = page.waitForResponse(resp =>
    resp.url().includes('account-validation') &&
    resp.status() === 200
);                                         //befor clicking next started listening for API response.

// Click Next (this triggers the API)
await applicant.clickNext();    //API Triggered

// Wait for the API response
const response = await responsePromise;

// Read the response body once
const body = await response.json();

console.log("API Response:");
console.log(JSON.stringify(body, null, 2));

// Validate Account Details
await Apivalidator_AccountDetails.validateAccount(body);  //validate applicant details using API Response


//payeedetails
await payeedetails.verifyPayeeDetailpageheading(); 

const remaining = Apivalidator_QuantityLimit.getRemainingQuantity(body);

await payeedetails.clickNext();
//completing payee detail page

if (remaining === 0) {
    await expect(page.getByText(/Limit Reached/i)).toBeVisible();

    console.log("Quantity limit reached. Stopping the test.");
    return;   // Stops execution
}


//Rebate Selection
await rebateselect.verifyRebateselectionpageheading();
await rebateselect.checkRebateselectionlist(); 
await rebateselect.clickNext();






//Rebate Details->title and selected rebate
await rebatedetails.verifyRebatedetailtitile();
await rebatedetails.verifySelectedRebate();

//Enter Rebate Details
await rebatedetails.enterRetailerName('Best Buy');
await rebatedetails.enterretailprice('500');
await rebatedetails.selectStoreLocation('Online');
await rebatedetails.selectRetailerState('California');
await rebatedetails.selectDate('2026-07-10');
await rebatedetails.enterPurchasePrice('300');
await rebatedetails.selectMakeManufacturer('EcoFlow');
await rebatedetails.selectModel('River 2 Max');
await rebatedetails.clickNext();


//Uploaddocumenttitle
await uploaddocuments.verifyuploaddocumenttitile();
await uploaddocuments.receiptinvoiceselection();
await uploaddocuments.forwhichproductoptionclick();
await uploaddocuments.fileupload();
await uploaddocuments.clickNext();


//summary
await summary.verifySummarypageheading();
//await summary.clickSubmitApplication();

//successpage
//await successPage.verifySuccessPageURL();
//await successPage.verifySuccessPage();



//Upload Documents



});