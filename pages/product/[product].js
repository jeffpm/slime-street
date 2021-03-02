import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from "~/components/Layout";
import products from "~/resources/products.yml";


export default function Product() {
    const router = useRouter()
    const { product } = router.query
    return (
        <Layout>
        <main className="flex flex-col items-center flex-1 text-left py-2">
        
            <p>{products[product].name}</p>
            <Image src={`/images/${products[product].image}`} height="200" width="200"></Image>
            <p>{products[product].description}</p>
        </main>
        </Layout>
        
    )
}
