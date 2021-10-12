import {Invoices} from "./classes/Invoices.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";


// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoices('yoshi','web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)


// const invOne = new Invoices('mario','Seox', 250)
// console.log(invOne.format())

// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'shawn',
//     age: 30,
//     speak(a){
//         console.log('sup, ' + this.name)
//     },
//     spend(a){
//         return a;
//     }
// }

// Actual code
const form = document.querySelector('form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#to-from') as HTMLInputElement;
const detail = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoices(tofrom.value, detail.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, detail.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
})

