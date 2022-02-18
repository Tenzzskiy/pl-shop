import styles from './SEO.module.scss'
import React, {FunctionComponent, ReactNode, useState} from "react";
import {useWindowSize} from "../../Hooks/useWindowSize";
import cs from 'classnames'
import {MyImage} from "../MyImage";

interface SeoProps{
    children?:ReactNode,
    image1?:string,
    image2:string
    text1?:string,
    text2?:string,
    text3?:string,
    text4?:string,
    otherText?:string,
    title?:string
}
const Seo:FunctionComponent = ({title,children, image1,image2,text1,text2,text3,text4,otherText}:SeoProps) =>{
    const size=useWindowSize();
    const [active,setActive]= useState(true);
    const text = `${text1}`
    const step = 210;
    const items = text.slice(0,active ? step : text.length);
    const fullText=`${text2}${text3}${text4}`;
    return(
        <div className={styles.seo} >
        <div className={styles.container}>


                <h2 className={styles.title}>
                    {title}
                </h2>
            <div className={styles.content}>
            <div className={styles.grid}>


                {size.width > 720 ?
                   <>
                       <div className={styles.container_1} itemScope itemType="http://schema.org/ImageObject">
                           <div className={styles.img}>
                               <img src="/Seo/background_768.svg" className={styles.background_image} alt=""/>
                               <MyImage width='382' height='216'  src={{default: image1}} alt={title} className={styles.image} />

                           </div>
                           <p className={styles.text} itemProp="name">{'          ' + text1}

                           </p>   <p className={styles.text_2} itemProp="description">{text2}

                           </p>
                       </div>
                       <div className={styles.container_2} itemScope itemType="http://schema.org/ImageObject">
                           <div className={styles.img}>
                               <img src="/Seo/background_768.svg" className={styles.background_image2} alt=""/>
                               <MyImage width='382' height='216'   src={{default: image2}} alt={title} className={styles.image_2} />
                           </div>
                           <p className={styles.text} itemProp="name">{text3}
                           </p>
                           <p className={styles.text_2} itemProp="description">{text4}

                           </p>
                       </div>
                   </> : null
                }
                {size.width < 720 ?

                <>
                <div className={styles.container_360}>
                <div className={styles.img_360}>
                    <img src="/Seo/background_768.svg" className={styles.background_image_360} alt=""/>
                    <MyImage width='382' height='260'  src={{default: image1}} alt={title} className={styles.image_360} />
                </div>
                    <p className={cs(styles.text_360,active ? styles.show : styles.hide)}>
                        {!active ?
                            <>
                            <p> {text1}</p>
                            <p>{text2}</p>
                            <p> {text3}</p>
                            <p> {text4}</p>
                            </>
                            : `${items}`}{active ?  '...' :  null}
                    </p>
                    <div className={styles.button} onClick={() => setActive(!active)}> {active ?  'Подробнее':'Скрыть' }
                        <img src={active ? "/Seo/arrow.svg" : "/Seo/arrow_top.svg"} alt=""/>
                    </div>
                </div>
                </>
                : null}

            </div>
            </div>
        </div>
        </div>
    )
}

export default Seo;
