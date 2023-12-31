import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo1.png'
import { Inter } from 'next/font/google'
import twitter from '../../public/Twitter.png'
import instagram from '../../public/Instagram.png'



const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
  return (
     <footer className=''>
     
      
          <div className="text-center bg-blue  max-w-[1440px] h-[525px] sm:w-[480px] md:max-w-[769px] sm:h-[269px] sm:pr-14 " >
             <div class=" items-center flex flex-col space-y-[-220px] ">

<div class="w-[782px] h-[391px] rounded-bl-full rounded-br-full bg-[#1857F6] items-center  sm:w-[391px] sm:h-[195.5px]">
  <div class="w-[527px] h-[263px] rounded-bl-full rounded-br-full bg-[#407FFF] ml-32 sm:w-[263.5px] sm:h-[131.75px] sm:ml-16">

  </div>
</div>

          <div className='flex flex-col items-center sm:mt-0  '>
          <h2 className='text-white text-[48px]  mt-[50px] sm:text-[28px] sm:mt-[80px]  '>Let's get you started today</h2>
          <p className="text-[14px]  w-[616px] text-white sm:w-[331px] sm:text-left text-[400] ">We're passionate about innovation, brilliant ideas and the execution that brings it all together in one beautiful experience. If you are too, call or send us an email to get started.</p>
          <div className={inter.className}>
          <div className="flex gap-3 text-center justify-center text-sm  mt-20 sm:mt-5 sm:gap-8 sm:ml-[-30px]">

          <button className="  text-[14px] w-[140px] h-[41px] bg-transparent text-white hover:bg-blue-700 text-white-700  hover:text-white py-1 px-2 border border-white-500 hover:border-white rounded-[8px]"><Link href='/get-quote'>
            Contact Us</Link></button>
          <button className="  bg-white  text-[14px] hover:bg-blue-500 text-blue-700 w-[134px] hover:text-white py-1 px-2 border-white-500 hover:border- rounded-[8px]"><Link href='/get-quote'>
            Get Quote</Link></button>
          </div>
          </div>
          
          </div>
          </div>
          </div>
          <div className="mt-20 flex justify-between px-10  bg-purple text-black items-center sm:flex-col sm:items-start sm:ml-[-30px] sm:pt-2">
            <Link href="/">
           <Image 
            src={logo}
            alt="UVISE logo"
            width="180"
            quality={100}
            placeholder='blur'
            priority= {true}
            />
            </Link>

            <div>
              <div className='flex gap-8 text-[14px] pb-3 sm:gap-16 '>
                <ul>
                  <li>
                    Privacy Policy
                  </li>
                   <li>
                    Terms of service
                  </li>
                </ul>
                 <ul>
                  <li>
                    Home
                  </li>
                   <li>
                    <a href='/service'>Service</a>
                  </li>
                </ul>
                 <ul>
                  <li>
                    <a href='/about'>About US</a>
                  </li>
                   <li>
                    <a href='/blog'>Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='w-full h-px  border-0 bg-[#66666666] bg-opacity-50'></hr>
          <div className='bg-purple text-black flex justify-end items-center pt-5 pb-10 sm:flex-col sm:pt-[-200px] sm:items-start'>
                 
             <div className='flex space-x-3 pr-10 sm:ml-[150px] sm:mb-5 sm:mt-5 '>

        <a href='https://msng.link/o?adekunledh=ig'>
         <Image 
            src={twitter}
            alt='cyber'
            width="24"
            height="24"
            priority
            
            />
            </a>
            <a href='https://msng.link/o?adekunledh=ig'>
         <Image 
            src={instagram}
            alt='cyber'
            width="24"
            height="24"
            priority
            
            />
            </a>
            </div>
            <div className=''>
            <p className='text-[14px] font-[600]  pt-3 pb-3 pr-[500px] text-[#2A2A2A] sm:pr-0 sm:ml-2'>&copy; 2023 Uvise. All rights reserved</p>
</div>       
          </div>
        
          </footer>
  )
}

export default Footer
