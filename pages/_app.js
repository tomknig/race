import '../styles/globals.css'
import { Web3ReactProvider } from '@web3-react/core';
import { SessionProvider } from 'next-auth/react'
import Web3 from 'web3';

function getLibrary(provider) {
  return new Web3(provider);
}

// we can return to this when we want to integrate metamask
// function MyApp({ Component, pageProps }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//     // <Web3ReactProvider getLibrary={getLibrary}>
//     //   <Component {...pageProps} />
//     // </Web3ReactProvider>
//   )
// }

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
