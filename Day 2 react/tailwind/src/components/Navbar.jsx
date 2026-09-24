import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      
      <h2 className="text-2xl font-bold">
        MyWebsite
      </h2>

      <div className="flex gap-6">
        <a href="#" className="hover:text-blue-400">
          Home
        </a>

        <a href="#" className="hover:text-blue-400">
          About
        </a>

        <a href="#" className="hover:text-blue-400">
          Contact
        </a>
      </div>

    </nav>
    </div>
  )
}

export default Navbar
