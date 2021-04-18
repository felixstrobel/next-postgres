import Head from 'next/head'

export default function Home() {
  return (
    <div className="w-100 h-screen grid place-items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        Hello World
      </p>
    </div>
  )
}
