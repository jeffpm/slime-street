import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Slime Street</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src="/images/slime-street.svg" alt="slime-street-logo" height="250px" width="250px" />

      <nav className="text-center" >
        <ul className="flex justify-between px-4 text-xl no-underline">
          <li className="flex px-3 py-1">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="flex px-5 py-1">
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </li>
          <li className="flex px-5 py-1">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="flex px-5 py-1">
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-b w-screen"></div>

      <main className="flex flex-col items-center flex-1 text-center">
      <h1 className="text-4xl font-bold pt-6">
          What's poppin' on Slime Street?
        </h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://etsy.com/slimestreet/unicorn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Unicorns</h3>
            <div className="">
              <Image src="/images/unicorn.png" alt="unicorn" height="150px" width="150px" />
            </div>
            <p className="mt-4 text-xl">
              Put your horn in the air like you just don't care!
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Turtles</h3>
            <div className="">
              <Image src="/images/turtle.png" alt="turtle" height="150px" width="150px" />
            </div>
            <p className="mt-4 text-xl">
              I don't know what to say about them, but I like 'em.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Princesses</h3>
            <div className="">
              <Image src="/images/beeshes.png" alt="turtle" height="150px" width="150px" />
            </div>
            <p className="mt-4 text-xl">
              Whatever man, I don't really care at this point.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Who knows!</h3>
            <div className="">
              <Image src="/images/question.png" alt="turtle" height="150px" width="150px" />
            </div>
            <p className="mt-4 text-xl">
              I couldn't think of anything else, so whatever, man.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        2021 Slime Street LLC. Made by Jeef.
      </footer>
    </div>
  )
}
