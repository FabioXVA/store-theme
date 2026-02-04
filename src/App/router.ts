import { ProductPage} from "../modules/product/Pages/ProductsPage/ProductsPage";
import { BrowserRouter, Routes, Route} from "react-router-dom";


export function AppRouters() {
    return{
        <BrowserRouter>
            <Routes>{
                <Route path="/" element=<ProductPage>}
            </Routes>
        </BrowserRouter>
    }
}