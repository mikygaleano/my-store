import { HashRouter, Route, Routes } from "react-router-dom"
import { ProductsPage } from "./pages/ProductsPage"
import { Header } from "./components/header/Header"


function App() {




  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage/>} />
        <Route path="/:categoryName" element={<ProductsPage/>} />
        <Route path="/:title" element={<ProductsPage/>} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App
