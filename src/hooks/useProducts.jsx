import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
import { useState } from "react";

// Custom HOOK for products:
const useProducts = () => {

	// function to receive products with additional useful properties:
	async function takeProducts(array) {
		try {
			const promises = array.map(p => fetchProduct(p.id));
			const results = await Promise.allSettled(promises);
			const products = results.map(p => {
				if (p.status === "fulfilled") {
					const { id, createdAt, updatedAt, title, category, image, brand, price } = p.value;
					return { id, createdAt, updatedAt, title, category, image, brand, price };
				} else {
					console.error("Impossibile recuperare i dati del prodotto on id: ", p.id);
					return null;
				}
			}).filter(p => p !== null);

			return products;
		} catch (error) {
			console.error(error);
		}
	}

	// [STATE] products:
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState({});
	const [categoryProducts, setCategoryProducts] = useState([]);
	const [searchedProducts, setSearchedProducts] = useState([]);
	// =====[GET]===== all products:
	const fetchProducts = async () => {
		try {
			const response = await axios.get(`${apiUrl}/products`);
			const products = await takeProducts(response.data);
			setProducts(products);
		} catch (error) {
			console.error("[all products] Errore durante il fetch: ", error.message);
		}
	}
	// =====[GET] ===== one product:
	async function fetchProduct(id) {
		try {
			const response = await axios.get(`${apiUrl}/products/${id}`);
			if (response.data.success === true) {
				setProduct(response.data.product);
				return response.data.product;
			}
		} catch (error) {
			console.error(`[one product (id: ${id})] Errore durante il fetch: `, error.message);
		}
	}
	// =====[GET]===== products by category:
	const fetchProductsCategory = async (category) => {
		try {
			const response = await axios.get(`${apiUrl}/products?category=${category}`);
			const products = await takeProducts(response.data);
			setCategoryProducts(products);
		} catch (error) {
			console.error(`[products by category (category: ${category})] Errore durante il fetch: `, error.message);
		}
	}
	// =====[GET]===== searchedProduct:
	const fetchSearchedProducts = async (query) => {
		try {
			const [titleRes, categoryRes] = await Promise.all([
				axios.get(`${apiUrl}/products/?search=${query}`),
				axios.get(`${apiUrl}/products/?category=${query}`)
			]);
			const products = await takeProducts([...titleRes.data, ...categoryRes.data]);
			setSearchedProducts(products);
		} catch (error) {
			console.error(`[searched products (query: ${query})]Errore durante il fetch: `, error.message);
		}
	}

	// HOOK return:
	return {
		fetchProducts, products, // all products
		fetchProduct, product, // one product
		fetchProductsCategory, categoryProducts, // products by category
		fetchSearchedProducts, searchedProducts // searched products
	}
}

export default useProducts;