import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from "~/components/Layout";
import products from "~/resources/products.yml";


export default function Product({ product }) {
    return (
        <Layout>
        <main className="flex flex-col items-center flex-1 text-left py-2">
        
            <p>{product.name}</p>
            <Image src={`/images/${product.image}`} height="200" width="200"></Image>
            <p>{product.description}</p>
        </main>
        </Layout>
    )
}

export async function getStaticPaths() {  
    // Get the paths we want to pre-render based on posts
    const paths = Object.keys(products).map((key, index) => ({
        params: { product: key },
      }))
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export async function getStaticProps({ params }) {
    const datProduct = products[params.product]
    return { props: {product: datProduct} } 
  }
