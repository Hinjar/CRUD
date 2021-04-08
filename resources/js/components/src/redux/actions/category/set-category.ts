import {SET_CATEGORIES} from "../../../ts/consts/actions.const";
import {CategoryDto} from "../../../ts/types/category.type";
import {CategoryActionSetDto} from "../../../ts/types/category-actions.type";

export function setCategories(value: CategoryDto[]):CategoryActionSetDto {
    return {
        type: SET_CATEGORIES,
        categories: value
    };
}


