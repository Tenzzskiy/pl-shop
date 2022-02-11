import '../styles/globals.css'

import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "../redux";
import {useEffect} from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  console.log(store.getState())
  useEffect(() => {
    window.addEventListener('beforeunload', function (e) {
      localStorage.setItem('store', JSON.stringify(store.getState().cart.itemsInCart));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return(
        <Provider store={store} > <Component {...pageProps} /> <Script src='/ymetrica.js'/> </Provider>
    )



}

export default MyApp
