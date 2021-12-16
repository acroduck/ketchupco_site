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
        <img src="/18B54831-41BE-4038-BB3D-8C1BFE0B99AD.png">
        <p className="description">
          Ketchup Co. is the creative studio of Sarnaa Archie.<br>
          I tell stories.<br>
        </p>
      </main>

      <Footer />
    </div>
  )
}
