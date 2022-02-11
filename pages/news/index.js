import styles from '../../styles/index.module.scss'
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import FeedBack from "../../components/FeedBack/FeedBack";
import data from "../../sources/data/cart_arenda-plasm77.ru.json";
import NewsCard from "../../components/NewsCard/NewsCard";
import cs from "classnames";
import {useState} from "react";
import {useWindowSize} from "../../Hooks/useWindowSize";
import Head from 'next/head'
export  const getStaticProps = async () =>{
    return {
        props: {
            cards: data
        }
    };
}

const Index = ({cards}) =>{
    const size = useWindowSize();
    const [step,setStep ] = useState(true)
    const News = (step ? cards.news.slice(0,size.width < 720 ? 4:6) :  cards.news).map( elem => {
        return (
            <NewsCard itemProp="url" title={elem.title} key={elem.index} text={elem.text} img={elem.img} index={elem.index}/>
        )
    })
    const itemsLength = cards.news.length;
    const Else = () => {
        if (step <= itemsLength){
            setStep(false)

        }
    }
    return(
        <>

                <Layout count ={1}>
<Head>
    <meta charSet="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title itemProp="headline">Новости</title>
    <meta property="og:title" content="Новости"/>
    <meta itemProp="description" name="description" content="Новости"/>
    <meta property="og:description" content="Новости"/>
    <meta property="og:type" content="website"/>

    <meta property="og:image:type" content="image/jpeg"/>
    <meta property="og:image" content="/assets/images/preview1080.jpg"/>
    <meta property="og:image:width" content="1080"/>
    <meta property="og:image:height" content="1080"/>
    <meta property="og:image" content="/assets/images/preview565.jpg"/>
    <meta property="og:image:width" content="1080"/>
    <meta property="og:image:height" content="565"/>
    <meta property="og:site_name" content="Аренда плазм"/>
    <meta property="og:locale" content="ru_RU"/>
    <meta property="og:url" content="https://arenda-plazm77/news"/>

</Head>
                    <div className={styles.background}>
                    <div className={styles.news_container} itemScope itemType="http://schema.org/SiteNavigationElement">
                        <div className={styles.error_link}>  <Link href="/" ><a><img src="/back_arrow.svg" alt=""/> На Главную</a></Link></div>
                        <div className={styles.news_title}>Наши новости</div>
                        <div className={styles.news_flex}>
                            {News}
                        </div>
                    </div>
                    {step ? <div className={cs(styles.else )}><button onClick={ () => Else()}>Показать ещё </button> </div> : null}
                    <FeedBack />
                    </div>
                </Layout>

        </>
    )
}
export default Index;