import { Validator, EmailValidator, ZipCodeValidator } from "./validators";

let email: string = 'daviperazzoli@gmail.com';
let validator = new EmailValidator();
let result: boolean = validator.isValid(email);

console.log(result);