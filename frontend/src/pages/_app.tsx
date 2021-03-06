import Head from "next/head";
import "../styles/globals.scss";

function App({ pageProps, Component }) {
  return (
      <Component {...pageProps} />
  )
}

export default App;
