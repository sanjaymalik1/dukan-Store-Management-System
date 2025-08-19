import UserContextProvider from '@/components/contexts/user-context';
import Header from '@/components/header'
import { getUserFromCookies } from '@/lib/helper'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Layout({ children }: {
    children: React.ReactNode
}
) {

    const user = await getUserFromCookies();
    console.log(user);

    if (!user) {
        redirect("/login")
    }

    return (
        <main>
            <UserContextProvider user={user}>
                <Header />
                {children}
            </UserContextProvider>
        </main>
    )
}
