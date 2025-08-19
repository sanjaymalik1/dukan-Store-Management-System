
import HeaderLandingPage from '@/components/headers/header-landingpage'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function LandingPage() {
  return (
    <main>
      <HeaderLandingPage/>
      <div 
        className='relative min-h-screen flex flex-col items-center text-center pt-30 text-white bg-black bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(245,165,36,0.3),rgba(255,255,255,0))]'
      >
        <div className='flex flex-col gap-10 items-center z-10 relative'>
          <h1 className='text-6xl font-bold text-white leading-tight'>
            Transform Retail Excellence with Dukan
          </h1>
          <p className='text-gray-300 max-w-2xl text-lg leading-relaxed'>
            Streamline your business's financial management with our intuitive, 
            scalable SaaS platform. Designed for enterprises, our solutions 
            simplify complex processes.
          </p>
          <Button className='rounded-full w-fit text-black  px-4 py-5 font-semibold'>
            Try For Free →
          </Button>
        </div>


        <div className='mt-20 '>
          <ul className='wrapper relative flex items-center gap-4 w-[80vw] h-[5rem] overflow-hidden *:text-gray-600 *:text-lg '>
            <li className='itemA item absolute left-[max(100%,calc(40px*6))] w-10'>Spotify</li>
            <li className='item2 item absolute left-[max(100%,calc(40px*6))] w-10'>shopify</li>
            <li className='item3 item absolute left-[max(100%,calc(40px*6))] w-10'>asana</li>
            <li className='item4 item absolute left-[max(100%,calc(40px*6))] w-10'>afterpay</li>
            <li className='item5 item absolute left-[max(100%,calc(40px*6))] w-10'>SONOS</li>
            <li className='item6 item absolute left-[max(100%,calc(40px*6))] w-10'>braze</li>
          </ul>
        </div>

       

      </div>
    </main>
  )
}