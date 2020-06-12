import Header from '../components/Header'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <div>
       <Head>
        <title>Github Dashboard</title>
        <link href="/static/css/style.css" rel="stylesheet" />
        <link rel="icon" type="image/png" href="static/images/icons/favicon.ico"></link>
        <link href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default App
