export interface ProductDto{
    name: string;
    description: string;
    price: number | string;
    quantity: number | string;
}

export interface ProductItemDto extends ProductDto{
    product_id: number;
    category_id: number | string;
    photo: string
}

export interface ProductFormDto extends ProductDto{
    id: number;
    category: string | number;
    photo: File | string
}
