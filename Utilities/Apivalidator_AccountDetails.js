import { expect } from '@playwright/test';
const testData = require('../TestData/ApplicantDetail.json');

export class Apivalidator_AccountDetails {

    static async validateAccount(body) {

        expect(body.data[0].verification.verified).toBe(true);

        const stateMap = {
            CALIFORNIA: "CA",
            TEXAS: "TX",
            FLORIDA: "FL",
            "NEW YORK": "NY",
        };

        const expectedState =stateMap[testData.applicantDetails.state.trim().toUpperCase()];

        expect(body.inputs.first_name).toBe(testData.applicantDetails.firstName);
        expect(body.inputs.last_name).toBe(testData.applicantDetails.lastName);
        expect(body.inputs.lastname).toBe(testData.applicantDetails.lastName);
        expect(body.inputs.address.trim().toUpperCase()).toBe(testData.applicantDetails.address.trim().toUpperCase());
        expect(body.inputs.city.trim().toUpperCase()).toBe(testData.applicantDetails.city.trim().toUpperCase());
        expect(body.inputs.state.trim().toUpperCase()).toBe(expectedState);
        expect(body.inputs.zip).toBe(testData.applicantDetails.zipCode);
    }
} 