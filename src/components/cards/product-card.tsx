import React from 'react'
import { Product } from '../../../generated/prisma'
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import Link from 'next/link';

export default function ProductCard({product} : {product : Product}) {
  return (
    <Link href={`/product/${product.id}`}>
    <Card key={product.id} className="p-4 min-w-80">
                    {product.imageUrl && (
                        <div className="mb-3 overflow-hidden rounded-md bg-gray-50 flex items-center justify-center">
                            {/* <img 
                                src={product.imageUrl} 
                                alt={product.title}
                                className="w-full h-48 object-contain"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                }}
                            /> */}
                        </div>
                    )}
                    
                    <div className='flex flex-col gap-2'>
                        <h1 className="line-clamp-1">
                            {product.title}
                        </h1>
                        
                        <h2 text-size="2" className="text-gray-600 line-clamp-2">
                            {product.description}
                        </h2>

                        <div className='justify-between items-center' >
                            <Badge color="blue" >
                                {product.category}
                            </Badge>
                            <h2 text-size="3" text-weight="bold" className="text-green-600">
                                ₹{product.price.toFixed(2)}
                            </h2>
                        </div>
                        
                        <div className='justify-between items-center'>
                            <h3 text-size="2" className="text-gray-500">
                                Stock: {product.stock}
                            </h3>
                            <Badge 
                                color={product.stock > 0 ? "green" : "red"} 
                               
                            >
                                {product.stock > 0 ? "In Stock" : "Out of Stock"}
                            </Badge>
                        </div>
                        
                        <div className='mt-2 gap-2'>
                            <Button style={{ flex: 1 }}>
                                Edit
                            </Button>
                            <Button color="red" style={{ flex: 1 }}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </Card>
    </Link>
  )
}
