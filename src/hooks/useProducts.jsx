import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL

import { useState } from "react";

// Custom HOOK for products:
const useProducts = () => {
	// =====fetch===== all products:

	// =====fetch===== category products:
	const [categoryProducts, setCategoryProducts] = useState([]);
	// [GET] categorized products:
	const fetchProductsCategory = async (category) => {
		try {
			const response = await axios.get(`${apiUrl}/products?category=${category}`)
			setCategoryProducts(response.data)
		} catch (error) {
			console.error(`Errore durante il raggiungimento dei dati con categoria: ${category}.`, error.message)
		}
	}
	// =====fetch===== one product:
	const [product, setProduct] = useState({});
	// [GET] one product:
	const fetchProduct = async (id) => {
		try {
			const response = await axios.get(`${apiUrl}/products/${id}`)
			if (response.data.success === true) {
				setProduct(response.data.product)
			}
		} catch (error) {
			console.error(error.message)
		}
	}

	return { fetchProductsCategory, categoryProducts, fetchProduct, product }
}

export default useProducts