import { Product } from "./models/Product";

export interface IProductCart {
    product: Product,
    quantity: number;
}