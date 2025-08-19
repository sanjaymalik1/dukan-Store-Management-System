"use client"
import React from 'react'
import AddUserBtn from './buttons/add-user-btn'
import { ViewUsersBtn } from './buttons/view-users-btn'
import AddProductBtn from './buttons/add-product.-btn'
import ProductsContainer from './products-container'

export default function AdminDashboard() {



    return (
        <div className='flex justify-between gap-4'>
            <div>
                <ProductsContainer/>
            </div>

            

            <div className='flex flex-col gap-4'>

                <AddUserBtn />
                {/* <div className='flex flex-col gap-8'>
                    {
                        users.map(user => (
                            <div className='flex gap-4' key={user.id}>
                                <h1>{user.name}</h1>
                                <h2>{user.role}</h2>
                            </div>
                        ))
                    }
                </div> */}

                <ViewUsersBtn />

                <AddProductBtn />

            </div>
        </div>
    )
}
