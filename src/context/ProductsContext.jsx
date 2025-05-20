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
			createPanel(true, "Prodotto aggiunto al carrello")
		} else {
			setProductsOnCart(prev => [...prev, { ...product, quantity: 1 }])
			createPanel(true, "Prodotto aggiunto al carrello")
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
			createPanel(true, "Rimosso un prodotto dal carrello")
		} else if (howMany === "allProducts") {
			setProductsOnCart(prev => {
				return prev.filter(p => p.id !== productId);
			})
			createPanel(true, "Rimosso tutti i prodotti dal carrello")
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
			createPanel(true, "Prodotto gia incluso nella wishlist")
		} else {
			setProductsOnWishlist(prev => [...prev, product])
			createPanel(true, "Prodotto aggiunto alla wishlist")
		}
	}
	// REMOVE:
	const removeFromWishlist = (productId) => {
		setProductsOnWishlist(prev => prev.filter(p => p.id !== productId))
		createPanel(true, "Prodotto rimosso dalla wishlist")
	}

	// [COMPARISON] handle:
	// ADD:
	const [productsToCompare, setProductsToCompare] = useState([]);
	const addToCompare = async (id) => {
		const isPresent = productsToCompare.some(p => p.id === id)
		if (isPresent) {
			createPanel(true, "Non puoi confrontare due prodotti uguali")
			return
		}
		if (productsToCompare.length === 2) {
			createPanel(true, "Limite massimo per il confronto: 2 Prodotti")
			return
		} else {
			const product = await fetchProduct(id)
			if (product) {
				setProductsToCompare(prev => {
					return [...prev, product]
				})
				createPanel(true, "Prodotto aggiunto al confronto")
			}
		}
	}
	// REMOVE:
	const removeFromCompare = (id) => {
		setProductsToCompare(prev => {
			return prev.filter(p => {
				return p.id !== id
			})
		})
	}
	// when to show comparison panel:
	const [showComparePanel, setShowComparePanel] = useState(false)
	useEffect(() => {
		if (productsToCompare.length > 0) {
			setShowComparePanel(true)
		}
	}, [productsToCompare])

	// [NOTIFICATION PANEL] handle:
	const [showPanel, setShowPanel] = useState({ show: false, content: "" });
	function createPanel(state, text) {
		setShowPanel({ show: state, content: text })
		setTimeout(() => {
			setShowPanel({ show: false, content: text })
		}, 3000)
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
		removeFromWishlist,
		productsOnWishlist,
		fetchProducts,
		products,
		fetchSearchedProducts,
		searchedProducts,
		addToCompare,
		removeFromCompare,
		productsToCompare,
		showComparePanel,
		createPanel,
		showPanel
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