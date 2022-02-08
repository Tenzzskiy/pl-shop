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
    const text = `${text1}${text2}${text3}${text4} `
    const step = 210;
    const items = text.slice(0,active ? step : text.length)
    return(
        <div className={styles.seo}>
        <div className={styles.container}>


                <h2 className={styles.title}>
                    {title}
                </h2>
            <div className={styles.content}>
            <div className={styles.grid}>
                {/*    <div className={styles.box1}><img src={image1} alt=""/>*/}
                {/*        {size.width < 1100 && size.width > 600 ?*/}
                {/*            <img src="/Seo/background_768.svg" className={styles.background_image} alt=""/> :null*/}
                {/*        }*/}

                {/*        {size.width > 1100 ?*/}
                {/*            <>*/}
                {/*                <img src="/Seo/background_image.svg" className={styles.background_image} alt=""/>*/}
                {/*            </>*/}
                {/*            :*/}
                {/*            null*/}

                {/*        }*/}

                {/*    </div>*/}
                {/*    <div className={styles.box2}>{text1}</div>*/}
                {/*    <div className={styles.box3}>{text2} </div>*/}
                {/*<div className={styles.box4}><img src={image2} alt=""/>*/}

                {/*    {size.width < 1100 && size.width > 600 ?*/}
                {/*        <img src="/Seo/background_768.svg" className={styles.background_image} alt=""/> :null*/}
                {/*    }*/}

                {/*    {size.width > 1100 ?*/}
                {/*        <>*/}
                {/*            <img src="/Seo/background_image.svg" className={styles.background_image} alt=""/>*/}
                {/*        </>*/}
                {/*        :*/}
                {/*        null*/}

                {/*    }*/}

                {/*</div>*/}
                {/*{size.width > 1100 ?*/}
                {/*    <>*/}
                {/*        <div className={styles.box5}>{text3}{otherText}</div>*/}
                {/*        <div className={styles.box6}>{text4}</div>*/}
                {/*    </>*/}
                {/*    :*/}
                {/*    null*/}

                {/*}*/}

                {/*{size.width < 1100 && size.width > 600 ?*/}
                {/*    <>*/}
                {/*        <div className={styles.box5}>{text3}</div>*/}
                {/*        <div className={styles.box6}>{otherText}{text4}</div>*/}
                {/*    </>*/}
                {/*   :*/}
                {/*    null*/}

                {/*}*/}

                {size.width > 720 ?
                   <>
                       <div className={styles.container_1}>
                           <div className={styles.img}>
                               <img src="/Seo/background_768.svg" className={styles.background_image} alt=""/>
                               <MyImage src={{default: image1}} alt={title} className={styles.image} />

                           </div>
                           <div className={styles.text}>{text1}

                           </div>   <div className={styles.text_2}>{text2}

                           </div>
                       </div>
                       <div className={styles.container_2}>
                           <div className={styles.img}>
                               <img src="/Seo/background_768.svg" className={styles.background_image2} alt=""/>
                               <MyImage src={{default: image2}} alt={title} className={styles.image_2} />
                           </div>
                           <div className={styles.text}>{text3}
                           </div>
                           <div className={styles.text_2}>{text4}

                           </div>
                       </div>
                   </> : null
                }
                {size.width < 720 ?

                <>
                <div className={styles.container_360}>
                <div className={styles.img_360}>
                    <img src="/Seo/background_768.svg" className={styles.background_image_360} alt=""/>
                    <MyImage src={{default: image1}} alt={title} className={styles.image_360} />
                </div>
                    <div className={cs(styles.text_360,active ? styles.show : styles.hide)}>
                        {items}{active ?  '...' :  null}
                    </div>
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