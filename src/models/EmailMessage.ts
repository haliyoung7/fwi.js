import { IEmailMessage } from "../interfaces/IEmailMessage";

export class EmailMessage implements IEmailMessage {
    public to: string;
    public cc: string;
    public bcc: string;
    public subject: string;
    public from: string;
    public body: string;
    public host: string;
    public username: string;
    public password: string;
}