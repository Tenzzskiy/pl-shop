import React from "react";
import styles from './MainHeaderComponent_360.module.scss'



export const MainHeaderComponent_360 = ( { setSites}) =>{
    return(
        <section className={styles.container}>
            <div className={styles.content_img}>
                <div className={styles.img}>
                    <div className={styles.relative}>
                        <img src='/assets/images/tv360_1.jpg' alt=""/>
                        <h2 className={styles.title}>
                            Аренда <br/> плазмы
                        </h2>
                    </div>

                </div>

            </div>

        <div className={styles.content_text}>
                <h3 className={styles.description}>
                    Организуем техническое обеспечение выставок, форумов и конференций
                </h3>
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