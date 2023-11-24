import { Client } from "./client";
import { Transaction } from "./transaction";

export class Card {
    id?: number;
    number?: String;
    balance?: number;
    revenues?: number;
    expenditures?: number;
    creationDate?: Date;
    thruDate?: Date;
    client?: Client;
    transactions?: Transaction[];
}
