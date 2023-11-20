import { Client } from "./client";
import { Loan } from "./loan";

export class ClientLoan {
    id?: number;
    amount?: number;
    finalAmount?: number;
    payments?: number;
    originalPayments?: number;
    date?: Date;
    client?: Client;
    loan?: Loan;
}
