import Link from 'next/link'

const navBarStyle = {
    backgroundColor: "red",
    color: "white",
    width: "100%",
  };
  
  const NavBar = () => (
    <div className="NavBar" style={navBarStyle}>
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
    </div>
  );
  
  export default NavBar;