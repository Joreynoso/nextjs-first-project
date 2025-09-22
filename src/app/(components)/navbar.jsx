'use client'
import { useState, useEffect } from 'react'
import NavLink from './navLink'

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    function toggleMenu() {
        setOpenMenu(prevMenu => !prevMenu)
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 640) {
                setOpenMenu(false)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const burgerMenu = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
    )

    const closeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )

    return (
        <nav className="relative w-full bg-neutral-200 shadow-sm py-5 flex items-center justify-between px-4 sm:px-10">
            {/* logo */}
            <span className="font-semibold">Practice <span className="font-bold">app</span></span>

            {/* nav desktop */}
            <ul className="hidden sm:flex justify-center items-center gap-3">
                <li><NavLink href="/">home</NavLink></li>
                <li><NavLink href="/ingresar">ingresar</NavLink></li>
                <li><NavLink href="/articulos">articulos</NavLink></li>
            </ul>

            {/* toggle navbar mobile */}
            <button onClick={toggleMenu} className="cursor-pointer block sm:hidden">
                {openMenu ? closeIcon : burgerMenu}
            </button>

            {/* navbar mobile */}
            {openMenu && (
                <div className="absolute top-full left-0 w-full bg-neutral-200 border border-neutral-300/60 rounded-lg p-3 min-h-20 shadow-sm">
                    <ul className="flex flex-col justify-center items-center gap-3">
                        <li><NavLink href="/">home</NavLink></li>
                        <li><NavLink href="/ingresar">ingresar</NavLink></li>
                        <li><NavLink href="/articulos">articulos</NavLink></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
