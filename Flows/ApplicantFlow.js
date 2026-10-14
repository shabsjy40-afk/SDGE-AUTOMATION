import { BaseLoginPage } from '../Pages/BaseLoginPage';
import { BrowseProduct } from '../Pages/BrowseProduct';
import { SignIn } from '../Pages/SignIn';


export class ApplicantFlow {

    constructor(page) {
        this.page = page;    
        this.home = new BaseLoginPage(page);
        this.browse = new BrowseProduct(page);
        this.signIn = new SignIn(page);
    }

    async navigate() {

        await this.home.open();

    console.log("URL:", this.browse.page.url());
    console.log("Title:", await this.browse.page.title());
    console.log("Closed:", this.browse.page.isClosed());
        
        await this.browse.acceptCookies();

        await this.browse.clickBrowseProduct();
        await this.browse.acceptCookies();
        await this.browse.clickViewRebate();
        await this.browse.acceptCookies();
        await this.browse.clickVerifyEligibility();

        //signin

        await this.signIn.acceptCookies();
        await this.signIn.clickSigninlink();
        await this.signIn.acceptCookies();

        await this.signIn.signin();
    }
}