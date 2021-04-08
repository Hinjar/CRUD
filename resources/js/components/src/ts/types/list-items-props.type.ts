import {CSSProperties} from "react";
import {ProductItemDto} from "./product.type";
import {CategoryDto} from "./category.type";

export interface CategoryItemPropsDto{
    style?: CSSProperties,
    item: CategoryDto,
    deletingCategory: (id: number) => void,
}

export interface ProductItemPropsDto{
    style?:CSSProperties,
    item: ProductItemDto,
    deletingProduct: (id: number) => void,
    getCategory: (id: number) => CategoryDto
}

