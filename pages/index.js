import Image from 'next/image'
import Link from 'next/link'

import Layout from "~/components/Layout";

const names = ['Unicorns', 'Dinosaurs', 'Princesses', 'Sports', 'Rainbows', "More Things"];

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center flex-1 text-center py-2">
        <div className="text-2xl">Welcome to Slime Street!</div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xl py-4">
        {names.map(name => (
          
          <div className="rounded-md hover:bg-gray-100 hover:opacity-50">
              <Link href={`/product/${encodeURIComponent(name)}`}>
              <a>
              <Image className="rounded-xl" src="/images/beeshes.png" height="200" width="200"></Image>
              <br></br>
              
              {name}
              </a>
              </Link>
        </div>
        
        ))}
          
        </div>
      </main>
    </Layout>
    
  )
}
