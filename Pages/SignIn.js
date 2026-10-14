import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { BaseLoginPage } from '../Pages/BaseLoginPage';

const data = require('../TestData/signindata.json');


export class SignIn extends BasePage {

    constructor(page) {

        super(page);

        this.signinlink = page.locator('//button[@id="sign-in"]//span[contains(text(),"Sign In")]');
        const pageTitle = page.locator('h1.page-title');
        this.emailField = page.getByPlaceholder('Enter your email');
        this.passwordfield = page.getByPlaceholder('Enter your password');
        this.signinbutton = page.getByRole('button', { name: 'Sign In' });

    }

    async clickSigninlink() {
        await this.click(this.signinlink);
    }


    async signin() {

        await this.fill(this.emailField, data.email);
        await this.fill(this.passwordfield, data.password);
        await this.click(this.signinbutton);

    }








}

