import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

export default function Layout({children, title = 'SlimeStreet',})
{
    return(
        
        <div className="Layout" style={layoutStyle}>
        <Head>
            <title>{title}</title>
        </Head>

        <Header />
        <NavBar />
        <div className="Content" style={contentStyle}>
            {children}
        </div>
        <Footer />
        </div>
)
}