import { ProductList } from "@/entities/Product";
import { BuyerProductCard } from "@/widgets/buyer-product-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'redMarket',
  description: 'Домашняя страница с товарами',
  keywords: ['товары', 'товар', 'купить']
}

export default async function HomePage() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' })
  const products = await res.json()

  return (
      <div className="container">
        <ProductList 
          list={products} 
          path={'/'} 
          renderCard={product => <BuyerProductCard product={product} path={'/'}/>}
        />
      </div>
  );
}
