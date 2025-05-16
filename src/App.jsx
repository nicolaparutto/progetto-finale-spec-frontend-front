// react utility:
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductsProvider } from "./context/ProductsContext";

// pages:
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePAge";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";

// ____________________________________________________
function App() {
  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/product-details" Component={ProductDetailPage} />
              <Route path="/category/:categoryName" Component={CategoryProductsPage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </>
  )
}

export default App