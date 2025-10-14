import { Product } from "@/entities/Product/model/types";

export interface CartItem extends Product {
    quantity: number,
}