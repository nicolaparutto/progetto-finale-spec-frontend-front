import { useContext, createContext, useState } from "react";
const ProductsContext = createContext();
import useProducts from "../hooks/useProducts";

const ProductsProvider = ({ children }) => {

	// custom hook destructurezation for products:
	const { fetchProductsCategory, categoryProducts } = useProducts();

	// [CART] handle:
	const [productsOnCart, setProductsOnCart] = useState([])
	const addToCart = (product) => {
		setProductsOnCart(prev => [...prev, product])
	}


	return (
		<ProductsContext.Provider value={{ fetchProductsCategory, categoryProducts, addToCart, productsOnCart }}>
			{children}
		</ProductsContext.Provider>
	)
}

// useContext function:
const useProductsContext = () => {
	return useContext(ProductsContext)
}
export { useProductsContext, ProductsProvider }