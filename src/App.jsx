/* eslint-disable react/react-in-jsx-scope */
import { HashRouter } from "react-router-dom"
import  Header  from "./components/header/Header"
import { RoutesConfig } from "./routes/RoutesConfig"


function App() {

  return (
    <HashRouter>
      <Header />
      <RoutesConfig />
    </HashRouter>
  )
}

export default App
