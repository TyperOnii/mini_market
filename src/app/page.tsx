import { ProductList } from "@/entities/Product";
import { BuyerProductCard } from "@/features/add-to-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'redMarket',
  description: 'Домашняя страница с товарами',
  keywords: ['товары', 'товар', 'купить']
}

export default function Home() {

  const list = [
    {
      id: 1,
      name: 'Смартфон Vivo 50 Lite 128 Гб',
      image: ['/vivo.webp'],
      previewImage: '/vivo.webp',
      price: 19999,
      rating: 5,
      discountedPrice: 17999,
    },
    {
      id: 2,
      name: 'Смартфон Vivo 50 Lite 128 Гб',
      image: ['/vivo.webp'],
      previewImage: '/vivo.webp',
      price: 19999,
      rating: 4.2,
      discountedPrice: 17999,
    },
    {
      id: 3,
      name: 'Смартфон Vivo 50 Lite 128 Гб',
      image: ['/vivo.webp'],
      previewImage: '/vivo.webp',
      price: 19999,
      rating: 5,
      discountedPrice: 17999,
    },
    {
      id: 4,
      name: 'Смартфон Vivo 50 Lite 128 Гб',
      image: ['/vivo.webp'],
      previewImage: '/vivo.webp',
      price: 19999,
      rating: 4.2,
      discountedPrice: 17999,
    },
  ]

  return (
      <div className="container">
        <ProductList list={list} path={'/'} renderCard={(product) => <BuyerProductCard item={product} path={'/'}/>}/>
      </div>
  );
}
