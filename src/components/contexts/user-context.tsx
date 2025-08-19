'use client'
import React from 'react'
import { createContext } from 'react'
import { UserWithoutPassword } from '@/lib/types'

export const UserContext = createContext<{
    user? : UserWithoutPassword
}>({})

export default function UserContextProvider({children, user} : {
    children : React.ReactNode,
    user : UserWithoutPassword
}) {
  return (
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
  )
}
