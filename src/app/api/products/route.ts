import { Product } from '@/entities/Product'
import { NextResponse } from 'next/server'

const products: Product[] = [
  {
      id: 1,
      name: 'Смартфон Vivo 50 Lite 128 Гб',
      image: ['/vivo.webp'],
      previewImage: '/vivo.webp',
      price: 19999,
      rating: 5,
      discountedPrice: 17999,
      reviewsCount: 35,
    },
    {
      id: 2,
      name: 'Лего для мальчиков машина конструктор, инерционный',
      image: ['/toy-lego.webp'],
      previewImage: '/toy-lego.webp',
      price: 4650,
      rating: 4.7,
      discountedPrice: 917,
      reviewsCount: 50,
    },
    {
      id: 3,
      name: 'Кошелек картхолдер из натуральной кожи с зажимом',
      image: ['/wallet-pick.webp'],
      previewImage: '/wallet-pick.webp',
      price: 5829,
      rating: 4.9,
      discountedPrice: 1286,
      reviewsCount: 211,
    },
    {
      id: 4,
      name: 'Часы наручные кварцевые',
      image: ['/man-watch.webp'],
      previewImage: '/man-watch.webp',
      price: 9624,
      rating: 4.7,
      discountedPrice: 1655,
      reviewsCount: 15,
    },
]

export async function GET() {
  return NextResponse.json(products)
}

export async function POST(req: Request) {
  const newProduct = await req.json()
  products.push({ ...newProduct, id: Date.now() })
  return NextResponse.json(newProduct, { status: 201 })
}
