import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";


const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

export default function Layout({children, title = 'SlimeStreet',})
{
    return(
        
        <div className="Layout">
        <Head>
            <title>{title}</title>
        </Head>

        <Header />
        <NavBar />
        <div className="Content">
          {children}
        </div>
        <Footer />
        <style jsx>{`
          .Layout {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
          }

          .Content {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
        `}</style>
        </div>
)
}