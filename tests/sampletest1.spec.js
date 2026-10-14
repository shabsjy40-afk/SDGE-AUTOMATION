import { test } from '../Fixtures/BaseTest';

import { ApiValidator } from '../Utilities/Apivalidator_AccountDetails';



test.skip('ApplicantDetails Test',async({applicant,page})=>{


//applicantdetails
await applicant.validateApplicantDetails();
await applicant.acceptTerms();
await applicant.selectcheckbox();
await applicant.clickNext();
await ApiValidator.validateAccount(page);


});


test('PayeeDetails Test',async({payeedetail})=>{


//applicantdetails
await payeedetail.verifyPayeeDetailpageheading();
await payeedetail.PayeeDetailsValidation();
await payeedetail.clickNext();


});
