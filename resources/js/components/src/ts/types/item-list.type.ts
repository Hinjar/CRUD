import {ComponentType, CSSProperties, ReactNode} from "react";
import {ProductItemDto} from "./product.type";
import {CategoryDto} from "./category.type";
import {ListChildComponentProps} from "react-window";
import * as React from "react";

export interface ItemRowDto{
    index: number,
    style: CSSProperties
}

export interface ItemListPropsDto{
    tabValue: number,
    handleTabValueChange: (event: React.ChangeEvent<{}>, value: any) => void,
    products: ProductItemDto[],
    RowProduct: ComponentType<ListChildComponentProps>,
    categories: CategoryDto[],
    RowCategory: ComponentType<ListChildComponentProps>
}
