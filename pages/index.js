import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center flex-1 text-center">
        Welcome to Slime Street!
      </main>
    </Layout>
    
  )
}
