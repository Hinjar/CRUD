import {ProductItemDto} from "./product.type";

export interface ProductActionSetDto{
    type: string,
    products: ProductItemDto[]
}
