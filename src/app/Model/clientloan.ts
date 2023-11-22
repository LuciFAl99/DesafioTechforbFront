import { Client } from "./client";
import { Loan } from "./loan";

export class ClientLoan {
    id?: number;
    loanId?: number;
    name?: String;
    amount?: number;
    finalAmount?: number;
    payments?: number;
    interest?: number;
    monthly?: number;
    originalPayments?: number;
    date?: Date;
    client?: Client;
    loan?: Loan;
}
