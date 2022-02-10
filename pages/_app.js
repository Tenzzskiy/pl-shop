import '../styles/globals.css'
import Layout from "../components/Layout/Layout";
import {Provider, useDispatch} from "react-redux";
import {store} from "../redux";
import {useEffect} from "react";
import {initialState, saveOnLocalStorage} from "../redux/cart/reducer";

function MyApp({ Component, pageProps }) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(saveOnLocalStorage(initialState));
  //   dispatch({ type: 'INITIALIZE_FAVOURITE_STORE' });
  //   // loadScript('/main.js');
  //
  //   window.addEventListener('beforeunload', function (e) {
  //     localStorage.setItem('store', JSON.stringify(store.getState()));
  //   });
  //
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return(
        <Provider store={store} > <Component {...pageProps} /> </Provider>
    )



}

export default MyApp
