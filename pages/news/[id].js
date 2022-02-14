import styles from './../../styles/newsCard.module.scss'
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import data from '../../sources/data/cart_arenda-plasm77.ru.json'
import FeedBack from "../../components/FeedBack/FeedBack";
import Head from 'next/head'
const Index_page = ({props}) =>{
    let url =  `https://arenda-plazm77/news/news/${props.index}`
    return(

            <Layout count ={1}>
<Head>
    <meta charSet="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title itemProp="headline">
        {props.title}
    </title>
    <meta
        property="og:title"
        content={props.title}
    />
    <meta
        itemProp="description"
        name="description"
        content={props.title}
    />
    <meta
        property="og:description"
        content={props.title}
    />
    <meta property="og:type" content="website"/>

    <meta property="og:image:type" content="image/jpeg"/>
    <meta property="og:image" content="ссылка_на_превью_1080x1080px"/>
    <meta property="og:image:width" content="1080"/>
    <meta property="og:image:height" content="1080"/>
    <meta property="og:image" content="ссылка_на_превью_1080x565px"/>
    <meta property="og:image:width" content="1080"/>
    <meta property="og:image:height" content="565"/>
    <meta property="og:site_name" content="Аренда плазм"/>
    <meta property="og:locale" content="ru_RU"/>
    <meta
        property="og:url"
        content={url}
    />

</Head>
                <div className={styles.news_container} itemScope itemType="http://schema.org/ImageObject">
                    <div className={styles.error_link} >  <Link href="/news" ><a><img src="/back_arrow.svg" alt=""/> К Новостям</a></Link></div>
                    <div className={styles.news_title} itemProp="name" > {props.title}</div>
                    <div className={styles.news_flex}>
                    <div className={styles.news_img}><img itemProp="contentUrl" src={props.img} alt={props.title}/></div>
                        <div className={styles.flex}>
                    <div className={styles.date}>{props.date}  </div>
                    <div className={styles.news_text} itemProp="description">{props.text} </div>
                        </div>
                    </div>
                </div>
                <FeedBack />
            </Layout>

    )
}

export async function getStaticPaths() {
    const paths = data.news.map((elem) => ({ params: { id:elem.index } }))
    return {
        paths,
        fallback: false
    };
}
export async function getStaticProps(context) {
    const props = data.news.find((elem) => elem.index === context.params.id)

    return {
        props: {props},
    }
}

export default Index_page;