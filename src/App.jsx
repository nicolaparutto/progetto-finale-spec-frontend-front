// react utility:
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductsProvider } from "./context/ProductsContext";

// pages:
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePAge";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";

// funzione per scroll to top ad ogni cambiamento delle pagine:
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // oppure "auto"
  }, [pathname]);

  return null;
}

// ____________________________________________________
function App() {
  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <ScrollToTop />
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