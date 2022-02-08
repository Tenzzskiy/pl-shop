import styles from '../../styles/index.module.scss'
import Layout from "../../components/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {useRouter} from "next/router";
import Link from "next/link";
import FeedBack from "../../components/FeedBack/FeedBack";
import data from "../../components/Shop/cart_arenda-plasm77.ru.json";
import NewsCard from "../../components/NewsCard/NewsCard";
import cs from "classnames";
import {useState} from "react";
import {useWindowSize} from "../../Hooks/useWindowSize";
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
    const News = (step ? cards.News.slice(0,size.width < 720 ? 4:6) :  cards.News).map( elem => {
        return (
            <NewsCard title={elem.title} key={elem.index} text={elem.text} img={elem.img} index={elem.index}/>
        )
    })
    const itemsLength = cards.News.length;
    const Else = () => {
        if (step <= itemsLength){
            setStep(false)

        }
    }
    return(
        <>
            <Provider store={store} >
                <Layout count ={1}>

                    <div className={styles.news_container}>
                        <div className={styles.error_link}>  <Link href="/" ><a><img src="/back_arrow.svg" alt=""/> На Главную</a></Link></div>
                        <div className={styles.news_title}>Наши новости</div>
                        <div className={styles.news_flex}>
                            {News}
                        </div>
                    </div>
                    {step ? <div className={cs(styles.else )}><button onClick={ () => Else()}>Показать ещё </button> </div> : null}
                    <FeedBack />
                </Layout>
            </Provider>
        </>
    )
}
export default Index;