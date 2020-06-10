import Header from '../components/Header'

function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default App
