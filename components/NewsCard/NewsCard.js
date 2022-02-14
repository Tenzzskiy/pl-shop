import styles from './NewsCard.module.scss'
import cs from 'classnames'
import {useWindowSize} from "../../Hooks/useWindowSize";
import Link from "next/link";
import {useRouter} from "next/router";
import BlobCoverReverse from "../background/background";
import {useState} from "react";

const NewsCard = ( {img,title,date,text,data,index}) =>{
    const size = useWindowSize();
    const [background,setBackground] = useState(false);
    return(
        <section>
            <Link href={`/news/${index}`}><a className={styles.a}>
        <div className={styles.container} itemScope itemType="http://schema.org/ImageObject"
             onMouseEnter={() => setBackground(true)}
             onMouseLeave={() =>setBackground(false) }>
            {background ? <BlobCoverReverse classNames={styles.svg} color1="#C038F5" color2='#3496FE'/> : null}

        <div className={styles.content}>
        <div className={styles.flex}>
        <div className={styles.img} ><img itemProp="contentUrl"  src={img} alt={title}/> </div>
        <div className={styles.text}>
        <div className={styles.title} itemProp="name">
            {title}
        </div>
        <div className={styles.description}>
            {text.slice(0,size.width < 1250 ? 18:100) + "..."}</div>
            <div className={styles.button} > <button>Подробнее <div> <img src="/news_arrow.svg" alt=""/></div></button> </div>
        </div>

        </div>
        </div>
        </div>
            </a></Link>
        </section>
    )
}

export default NewsCard;