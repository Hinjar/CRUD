import {ComponentType} from "react";
import {ListChildComponentProps} from "react-window";

export interface InfinityLoaderPropsDto{
    children: ComponentType<ListChildComponentProps>,
    itemsCount: number,
    itemSize: number
}
