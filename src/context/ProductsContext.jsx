import { useContext, createContext, useState, useEffect } from "react";
const ProductsContext = createContext();
import useProducts from "../hooks/useProducts";

const ProductsProvider = ({ children }) => {
	// [useProducts] HOOK:
	const {
		fetchProducts, products,
		fetchProduct, product,
		fetchProductsCategory, categoryProducts,
		fetchSearchedProducts, searchedProducts
	} = useProducts();

	// [function] check products presence:
	function isProductPresence(array, idToCheck) {
		return array.some(p => p.id === idToCheck);
	}

	// =====[CART]===== handle:
	const [productsOnCart, setProductsOnCart] = useState([]);
	// ADD:
	const addToCart = (product) => {
		if (isProductPresence(productsOnCart, product.id)) {
			setProductsOnCart(prev => {
				return prev.map(p =>
					p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
				)
			})
			createPanel(true, "Prodotto aggiunto al carrello");
		} else {
			setProductsOnCart(prev => [...prev, { ...product, quantity: 1 }]);
			createPanel(true, "Prodotto aggiunto al carrello");
		}
	}
	// REMOVE:
	const removeFromCart = (productId, howMany) => {
		if (howMany === "oneProduct") {
			setProductsOnCart(prev => {
				return prev.map(p =>
					p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
				)
			})
			createPanel(true, "Rimosso un prodotto dal carrello");
		} else if (howMany === "allProducts") {
			setProductsOnCart(prev => {
				return prev.filter(p => p.id !== productId);
			})
			createPanel(true, "Rimosso tutti i prodotti dal carrello");
		}
	}

	// =====[WISHLIST]===== handle:
	const [productsOnWishlist, setProductsOnWishlist] = useState([]);
	// ADD:
	const addToWishlist = (product) => {
		if (isProductPresence(productsOnWishlist, product.id)) {
			createPanel(true, "Prodotto gia incluso nella wishlist");
			return;
		} else {
			setProductsOnWishlist(prev => [...prev, product]);
			createPanel(true, "Prodotto aggiunto alla wishlist");
		}
	}
	// REMOVE:
	const removeFromWishlist = (productId) => {
		setProductsOnWishlist(prev => prev.filter(p => p.id !== productId));
		createPanel(true, "Prodotto rimosso dalla wishlist");
	}

	// =====[COMPARISON]===== handle:
	const [productsToCompare, setProductsToCompare] = useState([]);
	// ADD:
	const addToCompare = async (id) => {
		if (isProductPresence(productsToCompare, id)) {
			createPanel(true, "Non puoi confrontare due prodotti uguali");
			return;
		}
		if (productsToCompare.length === 2) {
			createPanel(true, "Limite massimo per il confronto: 2 Prodotti");
			return;
		} else {
			const product = await fetchProduct(id);
			if (product) {
				setProductsToCompare(prev => [...prev, product]);
				createPanel(true, "Prodotto aggiunto al confronto");
			}
		}
	}
	// REMOVE:
	const removeFromCompare = (id) => {
		setProductsToCompare(prev => prev.filter(p => p.id !== id));
	}
	// When to show compare panel:
	const [showComparePanel, setShowComparePanel] = useState(false);
	useEffect(() => {
		if (productsToCompare.length > 0) {
			setShowComparePanel(true);
		}
	}, [productsToCompare])

	// =====[NOTIFICATION PANEL]===== handle:
	const [showPanel, setShowPanel] = useState({ show: false, content: "" });
	function createPanel(state, text) {
		setShowPanel({ show: state, content: text });
		setTimeout(() => {
			setShowPanel({ show: false, content: text });
		}, 2000);
	}

	const values = {
		// products
		fetchProducts, products,
		fetchProduct, product,
		fetchProductsCategory, categoryProducts,
		fetchSearchedProducts, searchedProducts,
		// cart
		addToCart, removeFromCart, productsOnCart,
		// wishlist
		addToWishlist, removeFromWishlist, productsOnWishlist,
		// compare
		addToCompare, removeFromCompare, productsToCompare,
		showComparePanel,
		// notifications
		createPanel, showPanel
	}

	return (
		<ProductsContext.Provider value={values}>
			{children}
		</ProductsContext.Provider>
	)
}

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext, ProductsProvider }