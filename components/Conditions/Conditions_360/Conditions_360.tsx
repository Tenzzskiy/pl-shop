import React, {FunctionComponent} from "react";
import styles from './Conditions_360.module.scss'
import {Conditions_3601} from './../../svg/Conditions_360.js'

export const Conditions_360:FunctionComponent = ( { }) =>{
    return(
        <section>
            <div className={styles.conditions}>

                <Conditions_3601 />

                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            В стоимость аренды входит:
                        </h2>
                        <div className={styles.steps}>
                            <div className={styles.common_flex_1}>
                            <div className={styles.flex}>
                                <div className={styles.number}>1 </div>
                                <h3 className={styles.text}>Монтаж оборудования </h3>
                            </div >
                            <div className={styles.flex}>
                                <div className={styles.number}> 3</div>
                                <h3 className={styles.text}>  Первичная настройка </h3>
                            </div>
                            </div>
                            <div className={styles.common_flex2}>
                                <div className={styles.flex}>
                                    <div className={styles.number}>2 </div>
                                    <h3 className={styles.text}>Комплект коммутации </h3>
                                </div >
                                <div className={styles.flex}>
                                    <div className={styles.number}> 4</div>
                                    <h3 className={styles.text}>Демонтаж оборудования </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}