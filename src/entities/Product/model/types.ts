export interface Product {
    id: number,
    name: string,
    image: string[],
    price: number,
    rating: number,
    reviewsCount?: number | null,
    previewImage: string,
    discount?: number | null,
    discountedPrice?: number | null,
    description?: string,
}