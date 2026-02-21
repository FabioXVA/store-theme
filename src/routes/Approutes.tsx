import { Route, Routes } from "react-router-dom"

import Home from "../modules/home/index"
import Shelf from "../modules/product/components/Shelf"
import ProductCategory from "../modules/product/Pages/PDC/ProductCategory"
import ProductPage from "../modules/product/Pages/ProductPage/index"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/teste" element={<Shelf />}></Route>
      <Route path="/category/:category" element={<ProductCategory />}></Route>
    </Routes>
  )
}
