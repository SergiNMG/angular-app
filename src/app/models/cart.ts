import { Product } from "./product";

export interface Cart {
    id: number;
    productList: Product[];
}