import { IProductContract } from "../contracts/IProductContract";
import { Product } from "./Product";

export class ProductList {
    products: Product[];
    constructor(productContract: IProductContract[]) {
        this.products = productContract.map((product) => new Product(product))
    }
}