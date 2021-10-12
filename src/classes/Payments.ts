import { HasFormatter } from "../interfaces/HasFormatter"

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        private amount: number
    ){}
    format(){
        return `${this.recipient} is owed R${this.amount} from ${this.details}`
    }
}