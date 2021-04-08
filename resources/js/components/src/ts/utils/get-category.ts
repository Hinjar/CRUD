import {ProductItemDto} from "../types/product.type";
import store from "../../redux/store/store";
import {CategoryDto} from "../types/category.type";

export function getCategory(id: number): ProductItemDto {
    return store.getState().categories.filter((e: CategoryDto) => e.category_id === id)[0]
}

export function getProductCount(category_id: number): number{
    return store.getState().products.filter((e: ProductItemDto) => e.category_id === category_id).length
}
