import '../styles/globals.scss'

import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "../redux";
import React, {useEffect} from "react";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    window.addEventListener('beforeunload', function (e) {
      localStorage.setItem('store', JSON.stringify(store.getState().cart.itemsInCart));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return(

      <Provider store={store} > <Component {...pageProps} /><Head >
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/bg.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

      </Head> <Script src='/ymetrica.js'/> </Provider>
    )



}

export default MyApp
