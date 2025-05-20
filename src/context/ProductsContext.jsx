import { useContext, createContext, useState, useEffect } from "react";
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
	// ADD:
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
	// REMOVE:
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
	const [productsOnWishlist, setProductsOnWishlist] = useState([]);
	// ADD:
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
	// REMOVE:
	const removeFromWishlist = (productId) => {
		setProductsOnWishlist(prev => prev.filter(p => p.id !== productId))
	}

	// [COMPARISON] handle:
	const [productsToCompare, setProductsToCompare] = useState([]);
	const addToCompare = async (id) => {
		const isPresent = productsToCompare.some(p => p.id === id)
		if (isPresent) {
			console.log("non puoi confrontare due prodotti uguali")
			return
		}
		if (productsToCompare.length === 2) {
			console.log("stai gia confrontando due prodotti")
			return
		} else {
			const product = await fetchProduct(id)
			if (product) {
				setProductsToCompare(prev => {
					return [...prev, product]
				})
			}
		}
	}
	// when to show comparison panel:
	const [showComparePanel, setShowComparePanel] = useState(false)
	useEffect(() => {
		if (productsToCompare.length >= 1) {
			setShowComparePanel(true)
		}
	}, [productsToCompare])

	const values = {
		fetchProductsCategory,
		categoryProducts,
		fetchProduct,
		product,
		addToCart,
		removeFromCart,
		productsOnCart,
		addToWishlist,
		removeFromWishlist,
		productsOnWishlist,
		fetchProducts,
		products,
		fetchSearchedProducts,
		searchedProducts,
		addToCompare,
		productsToCompare,
		showComparePanel
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