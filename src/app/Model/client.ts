import { Card } from "./card";
import { ClientLoan } from "./clientloan";
import { DniType } from "./dni-type";

export class Client {
    id?: number;
    firstName?: String;
    lastName?: String;
    dniType?: DniType;
    dni?: String;
    loans?: ClientLoan[];
    cards?: Card[];
}
