import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";

function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
