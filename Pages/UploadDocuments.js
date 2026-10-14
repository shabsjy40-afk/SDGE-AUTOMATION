import { expect } from '@playwright/test';
import { RebateDetails } from './RebateDetails';

import path from 'path';



export class UploadDocuments extends RebateDetails {

    constructor(page) {

        super(page);

        this.uploaddoctitle = this.page.locator('h1').filter({ hasText: 'Upload Documents' });
        // this.Selectdocument = this. page.locator('div.multiselect-wrapper').first();          
      
        this.Selectdocument = page.locator('div.multiselect-wrapper').first();
        this.receiptinvoice = this.page.locator('span.title-margin', { hasText: 'Receipt / Invoice' }).first();
        //this.receiptinvoice = page.locator('.multiselect-dropdown:not(.is-hidden)').getByRole('option', { name: 'Receipt / Invoice' });
         
        //this.forwhichproductdropdown = this.page.getByRole('combobox').nth(1);
       // this.forwhichproductoption = page.locator('.multiselect-dropdown').filter({hasText: 'Portable Power Station CARE'});
        //this.forwhichproductoption = this.page.locator('.multiselect-dropdown',{ hasText: 'Portable Power Station CARE' });
        this.forwhichproductoption =page.locator('li.multiselect-option', {hasText: 'Portable Power Station CARE'}).first();
        this.uploadFileInput = page.locator('input[type="file"]');
        this.nextbutton = page.getByRole('button', { name: 'Next' });

    }

    async verifyuploaddocumenttitile() {
        await expect(this.uploaddoctitle).toBeVisible();
    }


    async receiptinvoiceselection() {


        await this.Selectdocument.click();
        await this.receiptinvoice.click();

    }
    //forwhichproduct
    async forwhichproductoptionclick() {

        //await this.forwhichproductdropdown.click();

        await this.forwhichproductoption.click();

    }

    async fileupload(){

        await this.uploadFileInput.setInputFiles('C:\\Users\\Shabana\\Pictures\\Screenshots\\sample1.png');
    }

   // await frame.locator('input[type="file"]').setInputFiles('C:\Users\Shabana\Pictures\Screenshots\\sample1.png');




    async clickNext() {

        await this.click(this.nextbutton);
    }



}