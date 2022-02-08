import React, {FunctionComponent} from "react";
import styles from './Conditions.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Conditions_360} from "./Conditions_360/Conditions_360";


export const Conditions:FunctionComponent = ( { }) =>{
    const size = useWindowSize();
    return(
        <section>{size.width < 720 ? <Conditions_360 /> : null}
            {size.width > 720 ?
                <div className={styles.conditions}>

                    <img className={styles.background2} src="/Preferences/background.svg" alt=""/>

                    <div className={styles.container}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>
                                В стоимость аренды входит:
                            </h2>
                            <div className={styles.steps}>
                                <div className={styles.number}>1 </div>
                                <div className={styles.number}> 2</div>
                                <div className={styles.number}>3 </div>
                                <div className={styles.number}>4 </div>
                                <h3 className={styles.text}>Монтаж оборудования </h3>
                                <h3 className={styles.text}>Комплект коммутации </h3>
                                <h3 className={styles.text}>Первичная настройка </h3>
                                <h3 className={styles.text}>Демонтаж оборудования </h3>
                            </div>
                        </div>
                    </div>
                </div> : null}


        </section>
    )
}