import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ketchup Co. - Studio of Sarnaa Archie</title>
        <link rel="icon" href="/ketchupco-favicon.ico" />
      </Head>

      <main>
        <Header title="Ketchup Co." />
        <img src="">
        <p className="description">
          Ketchup Co. is the creative studio of Sarnaa Archie.<br>
          I tell stories.<br>
        </p>
      </main>

      <Footer />
    </div>
  )
}
