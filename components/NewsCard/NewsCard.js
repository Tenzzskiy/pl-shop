import styles from './NewsCard.module.scss'
import cs from 'classnames'
import {useWindowSize} from "../../Hooks/useWindowSize";
import Link from "next/link";
import {useRouter} from "next/router";

const NewsCard = ( {img,title,date,text,data,index}) =>{
    const size = useWindowSize();
    return(
        <section>
        <div className={styles.container} itemScope itemType="http://schema.org/ImageObject">
        <div className={styles.content}>
        <div className={styles.flex}>
        <div className={styles.img} ><img itemProp="contentUrl"  src={img} alt={title}/> </div>
        <div className={styles.text}>
        <div className={styles.title} itemProp="name">
            {title}
        </div>
        <div className={styles.description}>
            {text.slice(0,size.width < 1250 ? 26:126) + "..."}</div>
            <div className={styles.button} > <Link href={`/news/${index}`}><a><button>Подробнее <div> <img src="/news_arrow.svg" alt=""/></div></button></a></Link> </div>
        </div>

        </div>
        </div>
        </div>

        </section>
    )
}

export default NewsCard;