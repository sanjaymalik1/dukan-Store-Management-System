import React, { useEffect, useState } from 'react'
import { Product } from '../../generated/prisma';
import gqlClient from '@/services/gql';
import { GET_ALL_PRODUCTS } from '@/lib/query';
import ProductCard from './cards/product-card';

export default function ProductsContainer() {
     const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data: { getAllProducts: Product[] } = await gqlClient.request(GET_ALL_PRODUCTS);
                if (data.getAllProducts) {
                    setProducts(data.getAllProducts);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <h2>Loading products...</h2>
            </div>
        );
    }

  return (
    <div className='flex flex-wrap gap-10'>
        {
            products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))
        }
    </div>
  )
}
