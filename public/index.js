import { Invoices } from "./classes/Invoices.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
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
const form = document.querySelector('form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#to-from');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoices(tofrom.value, detail.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, detail.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
