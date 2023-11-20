import { Card } from "./card";
import { TransactionState } from "./transaction-state";
import { TransactionType } from "./transaction-type";

export class Transaction {
    id?: number;
    transactionType?: TransactionType;
    transactionState?: TransactionState;
    amount?: number;
    description?: String;
    date?: Date;
    balanceTransaction?: number;
    card?: Card;
    
    
}
