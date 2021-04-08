import {SET_PRODUCTS} from "../../../ts/consts/actions.const";
import {ProductItemDto} from "../../../ts/types/product.type";
import {ProductActionSetDto} from "../../../ts/types/product-action.type";

export function setProducts(value: ProductItemDto[]):ProductActionSetDto {
    return {
        type: SET_PRODUCTS,
        products: value
    };
}


