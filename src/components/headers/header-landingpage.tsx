import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function HeaderLandingPage() {
    return (
        <header className='relative z-999 flex items-center justify-center'>
            <div className='w-[80vw] h-10 border border-black fixed top-8 rounded-full flex justify-between items-center p-4 text-white'>

                <div>
                    dukan
                </div>

                <div>

                </div>

                <div className='flex gap-2 items-center'>
                    <Link href={"/login"}>login</Link>
                    <Link href={"/signup"}><Button className='rounded-full w-fit text-black px-3 py-2 font-semibold'>
                        Try For Free
                    </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}


