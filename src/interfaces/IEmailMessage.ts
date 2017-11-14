export interface IEmailMessage {
    to: string;
    cc: string;
    bcc: string;
    subject: string;
    from: string;
    body: string;
    host: string;
    username: string;
    password: string;
}