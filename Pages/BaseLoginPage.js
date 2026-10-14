import { BasePage } from './BasePage';

const testData = require('../TestData/testdata.json');

export class BaseLoginPage extends BasePage {

    constructor(page) {

        super(page);
        this.acceptCookiesButton = page.getByRole('button', { name: 'Accept All' });


    }

    async open() {

        // await this.page.goto(testData.baseUrl);
        await this.page.goto('/');

    }

    //  async clickAcceptCookies() {

    // try {
    //   if (await this.acceptCookiesButton.isVisible()) {
    //      await this.click(this.acceptCookiesButton);
    //     }
    // }  
    // catch (error) {
    //     console.log("Cookie banner not displayed.");
    // }
    // }
}

