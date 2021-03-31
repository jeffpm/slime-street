import Image from 'next/image'
import Link from 'next/link'

import Layout from "~/components/Layout";

import products from "~/resources/products.yml";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center flex-1 text-center py-2">
        <div className="text-2xl">Welcome to Slime Street!</div>
        <br></br>
        <div className="text-xl">Thank you for checking us out! Our site is coming soon. For now, visit us on:</div>
        <div className="text-2xl">
          <ul>
            <li><a href="https://www.etsy.com/shop/SlimeStreetOfficial">Etsy</a></li>
            <li><a href="https://www.instagram.com/slimestreetofficial">Instagram</a></li>
            <li><a href="https://www.facebook.com/slimestreetofficial">Facebook</a></li>
          </ul>
       </div>


        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xl py-4">
        {Object.keys(products).map((key, index) => ( 
          
          <div className="rounded-md hover:bg-gray-100 hover:opacity-50">
              <Link href={`/product/${encodeURIComponent(key)}`}>
              <a>
              <Image className="rounded-xl" src={`/images/${products[key].images[0]}`} height="200" width="200"></Image>
              <br></br>
              {products[key].name}
              </a>
              </Link>
        </div>
        ))}
        </div> */}
      </main>
    </Layout>
    
  )
}
