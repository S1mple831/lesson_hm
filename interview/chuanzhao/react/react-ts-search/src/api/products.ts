import type{Product} from '@/types/products';

const _products: Product[] = [
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
  ];

export const getProducts = async () => {
 await new Promise(resolve =>  setTimeout(resolve, 1000));
 return _products;
}