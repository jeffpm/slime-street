import Head from "next/head"
import Image from "next/image"

import Footer from "./Footer";
import Header from "./Header";
// import NavBar from "./NavBar";

export default function Layout({children, title = 'SlimeStreet',})
{
    return(
        
        <div className="flex flex-col items-center min-h-screen py-2 px-2">
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        
        <div className="mb-auto">
          {children}
        </div>
        <Footer />
        </div>
)
}