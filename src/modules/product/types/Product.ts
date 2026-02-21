import type { Price } from "./Price"

export type Product = {
  id: number
  title: string
  price: Price
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
