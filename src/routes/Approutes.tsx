import type { JSX } from "react"
import { Route, Routes } from "react-router-dom"

import Home from "../modules/home/index"
import ProductCategory from "../modules/product/Pages/PDC/ProductCategory"
import ProductPage from "../modules/product/Pages/ProductPage/index"

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/category/:category" element={<ProductCategory />}></Route>
    </Routes>
  )
}
