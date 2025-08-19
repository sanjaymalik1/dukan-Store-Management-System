"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import gqlClient from '@/services/gql'
import { ADD_PRODUCT } from '@/lib/mutation'
import { toast } from 'sonner'
import { Product } from '../../../generated/prisma'

export default function AddProductBtn() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("others")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    async function handleAddProduct() {
        try {
            const data: {addProduct: Product} = await gqlClient.request(ADD_PRODUCT, {title: title, description: description, category: category, price: parseFloat(price), stock: parseInt(stock), imageUrl: imageUrl})

            if(data.addProduct) {
                toast("Product added successfully!");

                setTitle("");
                setDescription("");
                setPrice("");
                setCategory("others");
                setStock("");
                setImageUrl("");
            }
        } catch (error) {
            console.error("Error adding product:", error);
            toast("Failed to add product. Please try again.");
        }

    }
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Product</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Product</DialogTitle>
                        <DialogDescription>
                            Enter details to add a new product here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Title</Label>
                            <Input value={title} onChange={(e) => setTitle(e.target.value)} id="name-1" name="name"  />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Description</Label>
                            <Input value={description} onChange={(e) => setDescription(e.target.value)} id="username-1" name="username"  />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Price</Label>
                            <Input value={price} onChange={(e) => setPrice(e.target.value)} id="username-1" name="username"  />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Stock</Label>
                            <Input value={stock} onChange={(e) => setStock(e.target.value)} id="username-1" name="username"  />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Image Url</Label>
                            <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} id="username-1" name="username"  />
                        </div>

                        <div className="grid gap-3">
                            <Label >Category</Label>
                            <div className='w-["100%]'>
                                <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="electronics">Electronics</SelectItem>
                                        <SelectItem value="clothing">Clothing</SelectItem>
                                        <SelectItem value="furniture">Furniture</SelectItem>
                                        <SelectItem value="others">Others</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            </div>
                            
                        </div>

                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button onClick={handleAddProduct}>Save changes</Button>
                        </DialogClose>
                        
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
