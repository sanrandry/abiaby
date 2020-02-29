export interface Order {
    date: Date;
    shipedDate?: Date;
    shipTo?: string;
    status?: string;
    id?: string;
    accountId?: string;
}
