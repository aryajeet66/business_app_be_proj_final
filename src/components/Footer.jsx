import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black'>
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-14'
      >
        {/* Logo & Social links Container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12'
        >
          <div className='mx-auto my-6 text-center text-white'>
          By Group 47
           </div>

           {/* Logo */}
           <div>
           <h2 className='font-bold text-white'>Project_App</h2>
           </div>
          
        </div>

       {/* Social Links Container & Icons */}
       <div className="flex justify-center space-x-4">

       <a href="https://www.facebook.com/">
              <img src="/img/icon-facebook.svg" alt="" className="h-8" />
            </a>
            
            {/* Twitter */}
            <a href="https://twitter.com/home">
              <img src="/img/icon-twitter.svg" alt="" className="h-8" />
            </a>
           
            {/* Instagram */}
            <a href="https://www.instagram.com/">
              <img src="/img/icon-instagram.svg" alt="" className="h-8" />
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/">
              <img src="/img/icon-youtube.svg" alt="" className="h-8" />
            </a>
           </div>

          {/* List Container */}
        <div className="flex justify-around space-x-32">
          <div className="flex-row space-y-3 space-x-3 text-white">
            <a href="#" className='hover:text-regal-blue'>Home</a>
            <a href="/" className='hover:text-regal-blue'>Login</a>
            <a href="/form" className="hover:text-regal-blue">Form</a>
            <a href="#" className='hover:text-regal-blue'>Contact</a>
          </div>
        </div>
 </div>
 </footer>
  )
}
