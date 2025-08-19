"use client"
import React, { useEffect, useState } from 'react'
import { Product, Sale } from '../../../../../generated/prisma'
import AddSaleBtn from '@/components/buttons/add-sale-btn'
import { useParams } from 'next/navigation'
import gqlClient from '@/services/gql';
import { GET_PRODUCT } from '@/lib/query';
import ProductSalesChart from '@/components/product-sales-chart'

type ProductWithSales  = Product & {
    sales : Sale[]
}

export default function Page() {
    const params = useParams();
    const {id} = params;
    const [product, setProduct] = useState<ProductWithSales | null>(null)

    useEffect(() => {

        async function getProduct() {
            const data = await gqlClient.request(GET_PRODUCT, {
                getProductId: id
            }) as { getProduct: ProductWithSales }

            if (data.getProduct) {
                setProduct(data.getProduct)
            }
        }

        getProduct();
    },[id])

    const chartData = product?.sales?.map((sale) => {
        
        const date = new Date(Number(sale.createdAt));
        // const format = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear;
        const quantity = sale.quantity;
        const obj = {
            date: date.toLocaleDateString(),
            quantity
        }
        // console.log(date);
        return obj;
        
    })

    if(!product) return(
        <div>Product not found</div>
    )
    return (
        <div className='flex flex-col gap-20'>

            <div className='flex flex-col gap-10'>
                <h1>{product?.title}</h1>
                <AddSaleBtn product={product} />
            </div>


            <div className='h-100 w-100'>
                <ProductSalesChart data={chartData}/>
            </div>

        </div>
    )
}
