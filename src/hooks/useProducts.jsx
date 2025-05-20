import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL

import { useState } from "react";

// Custom HOOK for products:
const useProducts = () => {
	// =====fetch===== all products:
	const [products, setProducts] = useState([])
	// [GET] all products:
	const fetchProducts = async () => {
		try {
			const response = await axios.get(`${apiUrl}/products`);
			setProducts(response.data)
		} catch (error) {
			console.error("Errore durante il raggiungimento dei dati di tutti i prodotti: ", error.message)
		}
	}
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
				return response.data.product
			}
		} catch (error) {
			console.error(`Errore durante il raggiungimento dei dati del prodotto ${id}: `, error.message)
		}
	}
	// =====fetch===== searchedProduct:
	const [searchedProducts, setSearchedProducts] = useState([]);
	// [GET] searched products:
	const fetchSearchedProducts = async (query) => {
		try {
			const [titleRes, categoryRes] = await Promise.all([
				axios.get(`${apiUrl}/products/?search=${query}`),
				axios.get(`${apiUrl}/products/?category=${query}`)
			])
			setSearchedProducts([...titleRes.data, ...categoryRes.data])
		} catch (error) {
			console.error(`Errore durante il raggiungimento dei dati con ricerca ${query}: `, error.message)
		}
	}
	return { fetchProductsCategory, categoryProducts, fetchProduct, product, fetchProducts, products, fetchSearchedProducts, searchedProducts }
}

export default useProducts