import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
import { useState } from "react";

// Custom HOOK for products:
const useProducts = () => {
	// [STATE] products:
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState({});
	const [categoryProducts, setCategoryProducts] = useState([]);
	const [searchedProducts, setSearchedProducts] = useState([]);

	// =====[GET]===== all products:
	const fetchProducts = async () => {
		try {
			const response = await axios.get(`${apiUrl}/products`);
			setProducts(response.data);
		} catch (error) {
			console.error("[all products] Errore durante il fetch: ", error.message);
		}
	}
	// =====[GET] ===== one product:
	const fetchProduct = async (id) => {
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
			setCategoryProducts(response.data);
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
			])
			setSearchedProducts([...titleRes.data, ...categoryRes.data]);
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