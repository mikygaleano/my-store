import { Routes, Route } from "react-router-dom"
import { ProductsPage } from "../pages/ProductsPage"
import { PageDetail } from "../pages/PageDetail"

export const RoutesConfig = ()=> {


    return (
        <Routes>
            <Route path="/" element={<ProductsPage/>} />
            <Route path="/category/:categoryName" element={<ProductsPage/>} />
            <Route path="/:search" element={<ProductsPage/>} />
            <Route path="product/detail/:productTitle" element={<PageDetail/>} />
            <Route path="*" element={<p>Page not found</p>} />
        </Routes>
    )
}