import '../styles/globals.css'
import Layout from "../components/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "../redux";

function MyApp({ Component, pageProps }) {

  return(
        <Provider store={store} > <Component {...pageProps} /> </Provider>
    )



}

export default MyApp
