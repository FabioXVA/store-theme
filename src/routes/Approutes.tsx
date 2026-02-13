import { Routes, Route } from "react-router-dom"
import  ProductPage  from "../modules/product/Pages/ProductPage/ProductPage"
import Home from "../modules/home"
import ProductCategory from "../modules/product/Pages/PDC/ProductCategory"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/category/:category" element={<ProductCategory />}></Route>
        </Routes>
    )
}