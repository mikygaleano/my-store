import { HashRouter, Route, Routes } from "react-router-dom"
import { ProductsPage } from "./pages/ProductsPage"
import { NavBar } from "./components/NavBar"
import { useListCategories } from "./hooks/useListCategories";


function App() {

  const { categories, loading } = useListCategories();

  return (
    <HashRouter>
      <NavBar categories={categories} loading={loading}/>
      <Routes>
        <Route path="/" element={<ProductsPage/>} />
        <Route path="/:categoryName" element={<ProductsPage/>} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App
