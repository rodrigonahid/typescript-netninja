import { HasFormatter } from "../interfaces/HasFormatter"

export class Invoices implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        private amount: number
    ){}
    format(){
        return `${this.client} owes R${this.amount} for ${this.details}`
    }
}