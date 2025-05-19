import { useContext, createContext, useState } from "react";
const ProductsContext = createContext();
import useProducts from "../hooks/useProducts";

const ProductsProvider = ({ children }) => {

	// custom hook destructurezation for products:
	const {
		fetchProductsCategory,
		categoryProducts,
		fetchProduct,
		product,
		fetchProducts,
		products,
		fetchSearchedProducts,
		searchedProducts
	} = useProducts();

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
	const removeFromCart = (productId, howMany) => {
		if (howMany === "oneProduct") {
			setProductsOnCart(prev => {
				return prev.map(p => {
					if (p.id === productId) {
						return { ...p, quantity: p.quantity - 1 }
					} else {
						return p
					}
				}
				)
			})
		} else if (howMany === "allProducts") {
			setProductsOnCart(prev => {
				return prev.filter(p => p.id !== productId);
			})
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

	const values = {
		fetchProductsCategory,
		categoryProducts,
		fetchProduct,
		product,
		addToCart,
		removeFromCart,
		productsOnCart,
		addToWishlist,
		productsOnWishlist,
		fetchProducts,
		products,
		fetchSearchedProducts,
		searchedProducts
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