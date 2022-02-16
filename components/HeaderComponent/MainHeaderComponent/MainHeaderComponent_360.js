import React from "react";
import styles from './MainHeaderComponent_360.module.scss'
import {Center_circle} from "../../svg/center";
import {Left_circle} from "../../svg/left_circle";
import {Right_circle} from "../../svg/right_circle";



export const MainHeaderComponent_360 = ( { setSites}) =>{
    return(
        <section className={styles.container} itemScope itemType="http://schema.org/ImageObject">
            <Center_circle />
            <Left_circle />
            <Right_circle />
            <div className={styles.content_img} >
                <div className={styles.img}>
                    <div className={styles.relative}>
                        <img itemProp="contentUrl" src='/assets/images/tv360_1.jpg' alt=""/>
                        <h1 className={styles.title} itemProp="name">
                            Аренда <br/> плазмы
                        </h1>
                    </div>

                </div>

            </div>

        <div className={styles.content_text}>
                <h2 className={styles.description} itemProp="description">
                    Организуем техническое обеспечение выставок, форумов и конференций
                </h2>
            <div className={styles.button}>
                <button onClick={() => setSites(true)}>
                    Рассчитать стоимость
                </button>

            </div>
            <div className={styles.free}>
Это бесплатно
            </div>
        </div>
        </section>
    )
}