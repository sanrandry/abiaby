export interface Product {
    name: string;
    description?: string;
    price: number;
    taxe?: number;
    discount?: number;
    SKU?: string;
    inventory: number;
    id?: string;
    companyId?: string;
    categoryId?: string;
}
