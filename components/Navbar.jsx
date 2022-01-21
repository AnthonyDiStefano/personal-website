import Link from 'next/link'

export default function Navbar(info) {
    return (
        <nav className="bg-gray-700 py-4">
            <ul className="max-w-6xl mx-auto px-4 flex space-x-7">
                <li>
                    <Link href="/">
                        <a className="py-4 px-2 text-[#e47d39] border-b-4 border-gray-500 font-semibold ">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className="py-4 px-2 text-gray-300 font-semibold hover:text-[#b85223] transition duration-300">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className="py-4 px-2 text-gray-300 font-semibold hover:text-[#b85223] transition duration-300">Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}