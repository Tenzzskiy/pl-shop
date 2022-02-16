import React from "react";
import styles from './MainHeaderComponent_360.module.scss'



export const MainHeaderComponent_360 = ( { setSites}) =>{
    return(
        <section className={styles.container} itemScope itemType="http://schema.org/ImageObject">
            {/*<img className={styles.center} src="/center_circle.svg" alt=""/>*/}
            {/*<img className={styles.left} src="/left_circle.svg" alt=""/>*/}
            {/*<img className={styles.right} src="/right_circle.svg" alt=""/>*/}
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