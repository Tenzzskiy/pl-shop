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


                    <svg className={styles.background2} width="1280" preserveAspectRatio="none" height="649" viewBox="0 0 1280 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 460.3L640 534.561L1280 460.3V11.561L640 53.4381L0 11.561V460.3Z" fill="#CFCFDC"/>
                        <path d="M0 570.182L640 648.561L1280 570.182V96.561L640 140.76L0 96.561V570.182Z" fill="#9B8BB6"/>
                        <path d="M0 90.439L640 0L1280 90.439V534.937H0V90.439Z" fill="url(#paint0_linear_962_18636)"/>
                        <defs>
                            <linearGradient id="paint0_linear_962_18636" x1="0" y1="267.629" x2="1280" y2="267.629" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#07F1D3"/>
                                <stop offset="0.572917" stop-color="#3A65F1"/>
                                <stop offset="0.984375" stop-color="#B93DF6"/>
                            </linearGradient>
                        </defs>
                    </svg>


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