import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Weather Dashboard</title>
        <link rel="shortcut icon" href="/earth.png" />
        <meta
          name="description" 
          content="Real-time weather forecasts and current conditions for global locations, delivering essential information with a sleek and responsive design."
        />

        <meta
          property="og:description"
          content="Real-time weather forecasts and current conditions for global locations, delivering essential information with a sleek and responsive design."
        />
        <meta
          property="og:image"
          content="/earth.png"
        />
        <meta
          property="og:url"
          content="/"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:url"
          content="/"
        />
        <meta name="twitter:title" content="Weather Dashboard" />
        <meta
          name="twitter:description"
          content="Real-time weather forecasts and current conditions for global locations, delivering essential information with a sleek and responsive design."
        />
        <meta
          name="twitter:image"
          content="/earth.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )  
}
