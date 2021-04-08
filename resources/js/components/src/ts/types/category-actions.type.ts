import {CategoryDto} from "./category.type";

export interface CategoryActionSetDto{
    type: string,
    categories: CategoryDto[]
}
