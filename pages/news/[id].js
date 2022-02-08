import styles from './../../styles/newsCard.module.scss'
import Layout from "../../components/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {useRouter} from "next/router";
import Link from "next/link";
import data from './../../components/Shop/cart_arenda-plasm77.ru.json'
import cs from "classnames";
import FeedBack from "../../components/FeedBack/FeedBack";
const Index_page = ({props}) =>{
    console.log(props)
    return(
        <Provider store={store} >
            <Layout count ={1}>

                <div className={styles.news_container}>
                    <div className={styles.error_link}>  <Link href="/news" ><a><img src="/back_arrow.svg" alt=""/> К Новостям</a></Link></div>
                    <div className={styles.news_title}> {props.title}</div>
                    <div className={styles.news_flex}>
                    <div className={styles.news_img}><img src={props.img} alt={props.title}/></div>
                        <div className={styles.flex}>
                    <div className={styles.date}>{props.date} </div>
                    <div className={styles.news_text}>{props.text} </div>
                        </div>
                    </div>
                </div>
                <FeedBack />
            </Layout>
        </Provider>
    )
}

export async function getStaticPaths() {
    const paths = data.News.map((elem) => ({ params: { id:elem.index } }))
    return {
        paths,
        fallback: false
    };
}
export async function getStaticProps(context) {
    const props = data.News.find((elem) => elem.index === context.params.id)

    return {
        props: {props},
    }
}

export default Index_page;