import React from "react";
import styles from './MainHeaderComponent_360.module.scss'



export const MainHeaderComponent_360 = ( { }) =>{
    return(
        <div className={styles.container}>
            <div className={styles.content_img}>
                <div className={styles.img}>
                    <div className={styles.relative}>
                        <img src="/header/backgroundHeaderComponent.png" alt=""/>
                        <div className={styles.title}>
                            Аренда <br/> плазмы
                        </div>
                    </div>

                </div>

            </div>

        <div className={styles.content_text}>
                <div className={styles.description}>
                    Организуем техническое обеспечение выставок, форумов и конференций
                </div>
            <div className={styles.button}>
                <button>
                    Рассчитать стоимость
                </button>

            </div>
            <div className={styles.free}>
Это бесплатно
            </div>
        </div>
        </div>
    )
}