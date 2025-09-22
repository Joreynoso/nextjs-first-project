import Link from 'next/link'

export default function NavLink({ href, children }) {

    // render return
    return (
        <>
            <Link
                href={href}
                className="hover:text-orange-600 transition-colors duration-200 ease-in-out"
            >
                {children}
            </Link>
        </>
    )
}