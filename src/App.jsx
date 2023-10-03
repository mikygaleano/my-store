import { HashRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    <HashRouter>

      <Routes>
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App
