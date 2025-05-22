import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ProductsProvider } from "./context/ProductsContext";

// pages:
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import SearchedProductsPage from "./pages/SearchedProductsPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ComparePage from "./pages/ComparePage";

// Scroll to top ad ogni cambio pagina:
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/product-details/:prodId" Component={ProductDetailsPage} />
            <Route path="/category/:categoryName" Component={CategoryProductsPage} />
            <Route path="/searched-results" Component={SearchedProductsPage} />
            <Route path="/cart" Component={CartPage} />
            <Route path="/wishlist" Component={WishlistPage} />
            <Route path="/compare" Component={ComparePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  )
}

export default App