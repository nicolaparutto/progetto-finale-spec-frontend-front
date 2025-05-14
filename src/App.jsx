// react-router-dom import:
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages:
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePAge";
import ProductDetailPage from "./pages/ProductDetailPage";

// ____________________________________________________
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/product-details" Component={ProductDetailPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App