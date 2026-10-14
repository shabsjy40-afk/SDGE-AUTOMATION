export class Apivalidator_QuantityLimit {

    static getRemainingQuantity(body) {

         const qualification = body.data[0].qualification.find(
            q => q.measure_category_code === "Generator"
        );

        if (!qualification) {
            throw new Error("Generator qualification not found in API response.");
        }
        
        return qualification.quantities.remaining;
    }
}