import {create} from 'zustand';
import type {Product} from '@/types/products';

interface ProductStore {
  products: Product[];
  setProducts:(products: Product[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    products:[],
    setProducts:(products) => set({products}),
}))