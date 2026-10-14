import { ApplicantDetails } from '../Pages/ApplicantDetails';
import { BaseLoginPage } from '../Pages/BaseLoginPage';
import { BrowseProduct } from '../Pages/BrowseProduct';
import { SignIn } from '../Pages/SignIn';



export class PayeeDetailFlow {

    constructor(page) {
        this.home = new BaseLoginPage(page);
        this.browse = new BrowseProduct(page);
        this.signIn = new SignIn(page);
        this.applicant=new ApplicantDetails(page);
    }

    async navigate() {

        await this.home.open();

        await this.browse.clickBrowseProduct();

        await this.browse.clickViewRebate();

        await this.browse.clickVerifyEligibility();

        //signin
        await this.signIn.clickSigninlink();

        await this.signIn.signin();


        //Applicant Details
        await applicant.validateApplicantDetails();
        await applicant.acceptTerms();
        await applicant.selectcheckbox();
        await applicant.clickNext();
        await ApiValidator.validateAccount(page);

    }
}