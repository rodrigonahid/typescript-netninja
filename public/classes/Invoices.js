export class Invoices {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes R${this.amount} for ${this.details}`;
    }
}
