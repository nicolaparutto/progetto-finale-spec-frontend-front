import { useContext, createContext, useState } from "react";
const ProductsContext = createContext();
import useProducts from "../hooks/useProducts";

const ProductsProvider = ({ children }) => {

	// custom hook destructurezation for products:
	const { fetchProductsCategory, categoryProducts } = useProducts();

	// [CART] handle:
	const [productsOnCart, setProductsOnCart] = useState([])
	const addToCart = (product) => {
		const productPresent = productsOnCart.some(p => {
			return p.id === product.id
		})
		if (productPresent) {
			setProductsOnCart(prev => {
				return prev.map(p =>
					p.id === product.id
						? { ...p, quantity: p.quantity + 1 }
						: p
				);
			})
		} else {
			setProductsOnCart(prev => [...prev, { ...product, quantity: 1 }])
		}
	}

	// [WISHLIST] handle:
	const [productsOnWishlist, setProductsOnWishlist] = useState([])
	const addToWishlist = (product) => {
		const productPresent = productsOnWishlist.find(p => {
			return p.id === product.id
		})
		if (productPresent) {
			console.log("prodotto gia incluso")
		} else {
			setProductsOnWishlist(prev => [...prev, product])
		}
	}
	console.log(productsOnCart);
	console.log(productsOnWishlist);
	const values = {
		fetchProductsCategory,
		categoryProducts,
		addToCart,
		productsOnCart,
		addToWishlist,
		productsOnWishlist
	}

	return (
		<ProductsContext.Provider value={values}>
			{children}
		</ProductsContext.Provider>
	)
}

// useContext function:
const useProductsContext = () => {
	return useContext(ProductsContext)
}
export { useProductsContext, ProductsProvider }