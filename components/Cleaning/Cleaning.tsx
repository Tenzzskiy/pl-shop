import React, {FunctionComponent} from "react";
import styles from './Cleaning.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Cleaning_360} from "./Cleaning_360/Cleaning_360";
import Link from "next/link";
import cn from "classnames";


export const Cleaning:FunctionComponent = ( { }) =>{
        const size = useWindowSize();
    return(

        <>
            {
                size.width > 720 ?
                    <div className={styles.cleaning}>

                        <div className={styles.container}>
                            {size.width < 1200 ?
                                <img className={styles.background} src="/Desinfection/virus_768.svg" alt=""/>: null
                            }
                            {size.width > 1200 ?
                                <img className={styles.background} src="/Desinfection/virus.svg" alt=""/>: null
                            }
                            <div className={styles.content}>
                                <div className={styles.title}>
                                    Обеспечим безопасность вашего мероприятия
                                </div>
                                <div className={styles.subtitle}>
                                    <div>
                                        Большой ассортимент сертифицированного
                                        оброрудования и средств защиты


                                    </div>

                                </div>
                                <div className={styles.grid}>
                                    <div className={styles.item}>
                                        <img src="/Desinfection/desinfection_icon_1.svg" alt=""/>
                                        <div> Дезинфекция воздуха и поверхностей в помещении</div>
                                    </div>
                                    <div className={styles.item}>
                                        <img src="/Desinfection/desinfection_icon_2.svg" alt=""/>
                                        <div> Аренда санитайзеров, автоматов с масками и перчатками</div>
                                    </div>
                                    <div className={styles.item}>
                                        <img src="/Desinfection/desinfection_icon_3.svg" alt=""/>
                                        <div> Проведение санитарного контроля на входе</div>
                                    </div>
                                    <div className={styles.item}>
                                        <img src="/Desinfection/desinfection_icon_4.svg" alt=""/>
                                        <div> Выезд мед.работника для проведения экспресс  ПЦР-тестов</div>
                                    </div>

                                </div>
                                <div className={styles.button}>
                                    <Link href='/Desinfection' ><a className={cn(styles.a,
                                    )} >   <button> Каталог дезинфекции</button> </a></Link>
                                </div>
                            </div>
                        </div>
                    </div> : null

            }
            {size.width < 720 ? <Cleaning_360 /> : null}

        </>
    )
}