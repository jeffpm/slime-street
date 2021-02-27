import Link from 'next/link'

  const NavBar = () => (
    <div className="NavBar">
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>
            <li>
                <Link href="/faqs">
                    <a>FAQs</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
            background-color: red;
            color: white;
            width: 100%;
        `}</style>
    </div>
  );
  
  export default NavBar;