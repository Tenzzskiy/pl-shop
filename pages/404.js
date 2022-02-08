import styles from './../styles/index.module.scss'
import Layout from "../components/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "../redux";
import {useRouter} from "next/router";
import Link from "next/link";
const Error_page = () =>{
    return(
            <>
            <Layout count ={1}>

             <div className={styles.error_container}>
                <div className={styles.error_link}>  <Link href="/" ><a><img src="/back_arrow.svg" alt=""/> На Главную</a></Link></div>
                 <div className={styles.error_img}><img src="/404.svg" alt="404"/>404</div>
                 <div className={styles.error_text}>Запрашиваемая страница не найдена </div>

             </div>


            </Layout>
            </>
    )
}
export default Error_page;