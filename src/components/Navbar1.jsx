import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaXmark,FaBars } from "react-icons/fa6";

function Navbar() {
    const[isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const navItems = [
        {link: "Overview", path: "home"},
        {link: "Feature", path: "fearture"},
        {link: "About", path: "about"},
        {link: "Pricing", path: "pricing"},
    ]
  return (
    <>
    <nav className="bg-white md:px-14 p-4 max-w-screen-2xl max-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-xl container mx-auto flex justify-between items-center font-medium">
            <div className="flex space-x-14 items-center">
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                    <span className="w-10 inline-block items-center">Nuwan</span>
                </a>
                <ul className="hidden md:flex space-x-12">
                    {
                        navItems.map(({link, path}) => <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
                    }
                </ul>
            </div>

            <div className="space-x-12 hidden md:flex items-center">
                <a href="/" className="hidden lg:flex items-center hover:text-secondary"><FaWhatsapp className="mr-2"/><span>Contact</span></a>
                <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">Sign Up</button>
            </div>

            {/* mobile nav */}
            <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                        {
                            isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary"/>) : (<FaBars className="w-6 h-6 text-primary"/>)
                        }
                    </button>
            </div>
        </div>
    </nav>

    <div className={`md:hidden space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
    {
                        navItems.map(({link, path}) => <a key={link} href={path} className="block text-xl hover:text-gray-300">{link}</a>)
                    }

    </div>
    
    </>
  )
}

export default Navbar