import axiosInstance from "../config/axios";
import { create } from "zustand";



export const useProductStore =  create((set, get) => ({
    products: [],
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


    }
}));