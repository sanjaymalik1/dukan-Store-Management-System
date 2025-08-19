'use client'
import React, { useContext } from 'react'
import { ThemeToggleBtn } from './buttons/theme-toggle-btn'
import { UserContext } from './contexts/user-context'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {

  const { user } = useContext(UserContext)
  return (
    <header>
      <div className='p-6 '>

        <div className='flex flex-row justify-end gap-4'>

          <div >
            <ThemeToggleBtn />
          </div>

          <Avatar>
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>{user?.name[0]}</AvatarFallback>
          </Avatar>
        </div>


      </div>
    </header>
  )
}
