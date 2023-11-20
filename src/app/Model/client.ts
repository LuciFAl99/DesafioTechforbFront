import { Card } from "./card";
import { ClientLoan } from "./clientloan";
import { DniType } from "./dni-type";

export class Client {
    id?: number;
    name?: String;
    lastname?: String;
    dniType?: DniType;
    dni?: String;
    clientLoans?: ClientLoan[];
    cards?: Card[];
}
