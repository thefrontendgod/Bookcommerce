// import libraries
import Head from 'next/head'

// import components
import Footer from '../components/Footer'
import Header from '../components/Header'
import Productstray from '../components/Productstray'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Book Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Slider />
        <Productstray />
      </main>

      <footer>
        <Footer />
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
