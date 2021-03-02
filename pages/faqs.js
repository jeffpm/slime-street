import Image from 'next/image'
import Link from 'next/link'

import Layout from "~/components/Layout";


export default function FAQs() {
  return (
    <Layout>
      <main className="flex flex-col items-center flex-1 text-left py-2">
        <ul className="list-disc">
            <li>
                <div className="text-xl">
                    How long do your slimes last?
                </div>
                <div className="">
                    Our slimes generally last 3 weeks after opening.
                </div>
            </li>
            <li>
                <div className="text-xl">
                    Why is Jeef a cool guy?
                </div>
                <div className="">
                    Maybe he was born with it, maybe it's Maybelline.
                </div>
            <li>
                <div className="text-xl">
                    Can you make custom slimes exactly to my needs?
                </div>
                <div className="">
                    Of course! Please contact us.
                </div>
            </li>
            </li>
        </ul>
            
      </main>
    </Layout>
    
  )
}
