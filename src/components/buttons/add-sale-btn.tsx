"use client"
import React, { useState } from 'react'
import { Product } from '../../../generated/prisma'
import { toast } from 'sonner';
import gqlClient from '@/services/gql';
import { CREATE_SALE } from '@/lib/mutation';

export default function AddSaleBtn({product} : {product : Product }) {
    const [quantity,setQuantity] = useState(1)

    async function handleSale(){
        if(product?.stock < quantity){
            toast("Quantity cant be greater than stock");
            return;
        };

        try{
            const data = await gqlClient.request(CREATE_SALE,{
                productId : product?.id,
                quantity
            }) as {
                creareSale : boolean
            }
            if(data.creareSale){
                toast("Sale created successfully")
            }else{
                toast("Sale unable to create")
            }
        }catch(error){
             console.log(error);
            toast("something went wrong. Try again!")
        }
    }
  return (
    <div>
        <input type='number' placeholder='enter quantity' value={quantity} onChange={e => setQuantity(Number.parseInt(e.target.value))} />
        <button onClick={handleSale}>Add to Sale</button>
    </div>
  )
}
