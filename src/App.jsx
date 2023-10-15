import { HashRouter, Route, Routes } from "react-router-dom"
import { useListApi } from "./hooks/useListApi"
import { ProductsPage } from "./pages/ProductsPage"
import { Header } from "./components/header/Header"
import { Detail } from "./components/detail/Detail"


function App() {

  const { data, loading, error } = useListApi();



  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage/>} />
        <Route path="/:categoryName" element={<ProductsPage/>} />
        <Route path="/:search" element={<ProductsPage/>} />
        <Route path="product/detail/:producTitle" element={<Detail data={data} loading={loading} />} />
        <Route path="product/detail/:productCategory" element={<Detail data={data} loading={loading} />} />
        <Route path="product/detail/:categoryName" element={<Detail data={data} loading={loading} />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App
