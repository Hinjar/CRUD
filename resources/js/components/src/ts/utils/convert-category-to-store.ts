export function convertToStore(name: string, id: number): CategoryStoreDto{
    return {
        category_id: id,
        name: name
    }
}

export interface CategoryStoreDto{
    category_id: number,
    name: string
}
