import { ClientLoan } from "./clientloan";

export class Loan {
    id?: number;
    name?: String;
    maxAmount?: number;
    payments?: number[];
    clientLoans?: ClientLoan[];
}
