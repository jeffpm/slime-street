import Image from "next/image"
import Link from "next/link"
const Header = () => (
    <div className="flex flex-col items-center py-2">
    <Image src="/images/slime-street.png" alt="slime-street-logo" height="175" width="152" />

      <nav className="flex" >
        <ul className="flex justify-center">
          <li className="flex px-3 py-1 rounded-md hover:bg-gray-700 hover:text-white">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="flex px-5 py-1 rounded-md hover:bg-gray-700 hover:text-white">
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </li>
          <li className="flex px-5 py-1 rounded-md hover:bg-gray-700 hover:text-white">
            <Link href="/faqs">
              <a>FAQs</a>
            </Link>
          </li>
          <li className="flex px-5 py-1 rounded-md hover:bg-gray-700 hover:text-white">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-b w-screen"></div>
      </div>
);
  
export default Header;