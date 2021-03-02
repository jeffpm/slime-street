import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from "~/components/Layout";

export default function Product() {
    const router = useRouter()
    const { product } = router.query
    return (
        <Layout>
        <main className="flex flex-col items-center flex-1 text-left py-2">
        
            <p>Product: {product}</p>
                
        </main>
        </Layout>
        
    )
}
