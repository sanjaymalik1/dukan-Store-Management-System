import prismaClient from "@/services/prisma";
import { ProductCategory } from "../../../../../generated/prisma";

export async function addProduct(_ : undefined,args : {
    title: string,
    description : string,
    imageUrl : string,
    category : ProductCategory,
    price : number,
    stock : number

}){
    try{
        const createdProduct = await prismaClient.product.create({
            data : args
        });
        return createdProduct;
    }catch(error){
         console.log(error);
        return null;
    }
}



export async function getAllProducts(){
    try{
        const products = await prismaClient.product.findMany();

        return products
    }catch{
        return null;
    }
}


export async function getProduct(_ : undefined,args : {
    id : string
}){
    console.log("start");
    
    const id = args.id;

    console.log("idd",id);
    
    try{
        const product = await prismaClient.product.findUnique({
            where : {
                id
            },
            include : {
                sales : {
                    orderBy : {
                        createdAt : "desc"
                    }
                }
            }
        })
        console.log(product);
        
        if(product) return product;
        else return null;
    }catch(error){
        console.log("error");
        
         console.log(error);
        return null;
    }
}



export async function createSale(_ : undefined,args : {
    productId : string,
    quantity : number
}){
    try{
        // const {id,quantity} = args
        const sale = await prismaClient.sale.create({
            data : {
                productId : args.productId,
                quantity : args.quantity
            }
        }) 

        if(sale){
            await prismaClient.product.update({
                where : {
                    id : args.productId
                },
                data : {
                    stock : {
                        decrement : args.quantity
                    }
                }
            })
        }

        return true;    
    }catch(error){
         console.log(error);
        return false

    }
}