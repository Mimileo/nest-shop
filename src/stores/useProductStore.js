import axiosInstance from "../config/axios";
import { create } from "zustand";



export const useProductStore =  create((set, get) => ({
    products: [],
    categories: [],
	loading: false,


    setProducts: (products) => set({ products }),

    getProducts: () => get().products,

    // To Do 
    createProduct: async (product) => {
        try {
            const response = await axiosInstance.post('products', product);
            return response.data;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },

    fetchProduct: async (id) => {
        try {
            const response = await axiosInstance.get(`products/${id}`);

            console.log(response.data);
            if (!response.data) {
                return null;
            }
            return response.data;
        } catch (error) {
            console.error('Error fetching product:', error);
            return null;
        }
    },

    fetchProducts: async () => {
        set({loading: true});
       
        try {
            const response = await axiosInstance.get('/products');
            console.log(response.data);
            set({products: response.data, loading: false});
        } catch (error) {
            console.error('Error fetching products:', error);
            set({ error: "Failed to fetch products", loading: false });
          
        }
    },

    fetchProductCategories: async () => {
        try {
            const response = await axiosInstance.get('/products');
            console.log(response.data);

            const productCategories = response.data.map(
                (product) => product.category
            ); 

            const productCategorySet = new Set(productCategories);

            // spread the unique categories into an array
            const uniqueCategories = [...productCategorySet];
            
            set({ categories: uniqueCategories });
        } catch (error) {
            console.error('Error fetching product categories:', error);
            throw error;
        }
    },
}));