import type { Product } from "@/modules/product/types/Product"

export const httpClient = {
  get: async (url: string): Promise<Product[]> => {
    const resp = await fetch(url)

    if (!resp.ok) throw `HTTP error ${resp.status}`

    return resp.json()
  },
}
