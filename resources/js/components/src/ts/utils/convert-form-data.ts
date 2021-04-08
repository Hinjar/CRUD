import {BasicFormDto, FormikSelectItem} from "../types/formik-form.type";
import {CategoryDto} from "../types/category.type";
import {ProductFormDto, ProductItemDto} from "../types/product.type";

export function convertDataToSelect(data: CategoryDto[]) : FormikSelectItem[]{
    return data.map((item: CategoryDto) => {
        return{
            label: item.name,
            value: item.category_id
        }
    })
}

export function convertDataToProductForm(data: ProductItemDto): ProductFormDto{
    return {
        id: data.product_id,
        name: data.name,
        description: data.description,
        price: Number(data.price),
        quantity: Number(data.quantity),
        category: data.category_id,
        photo: data.photo
    }
}

export function convertCategoryDataToSubmit(data: BasicFormDto, id: number): CategoryDto{
    return {
        category_id: id,
        name: data.name,
    }
}

export function convertProductDataToSubmit(data: ProductFormDto, edit = false, id?: string) : FormData{
    let formData = new FormData()
    if(edit && id){
        formData.append("_method", "PUT")
        formData.append('product_id', id)
    }
    formData.append('photo', data?.photo || '')
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', String(data.price))
    formData.append('quantity', String(data.quantity))
    formData.append('category_id', String(data.category))


    return formData
}

