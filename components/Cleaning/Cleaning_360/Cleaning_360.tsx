import React, {FunctionComponent} from "react";
import styles from './Cleaning_360.module.scss'
import {useWindowSize} from "../../../Hooks/useWindowSize";
import cn from "classnames";
import Link from "next/link";



export const Cleaning_360:FunctionComponent = ( { }) =>{

    return(

        <section>
                <div className={styles.cleaning}>
                    <img className={styles.img1} src="/Desinfection/virus_360_1.svg" alt=""/>
                    <img className={styles.img2} src="/Desinfection/virus_360_2.svg" alt=""/>
                <div className={styles.container}>
                    {/*img*/}
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Обеспечим безопасность вашего мероприятия
                    </h2>
                    <div className={styles.subtitle}>
                        <h3>
                            Большой ассортимент сертифицированного
                            оброрудования и средств защиты


                        </h3>

                    </div>
                    <div className={styles.grid}>
                        <div className={styles.item}>
                        <img src="/Desinfection/desinfection_icon_1.svg" alt=""/>
                        <h3> Дезинфекция воздуха и поверхностей в помещении</h3>
                        </div>
                        <div className={styles.item}>
                            <img src="/Desinfection/desinfection_icon_2.svg" alt=""/>
                            <h3> Аренда санитайзеров, автоматов с масками и перчатками</h3>
                        </div>
                        <div className={styles.item}>
                            <img src="/Desinfection/desinfection_icon_3.svg" alt=""/>
                            <h3> Проведение санитарного контроля на входе</h3>
                        </div>
                        <div className={styles.item}>
                            <img src="/Desinfection/desinfection_icon_4.svg" alt=""/>
                            <h3> Выезд мед.работника для проведения экспресс  ПЦР-тестов</h3>
                        </div>

                    </div>
                    <div className={styles.button}>
                        <Link href='/desinfection' ><a className={cn(styles.a,
                        )} >   <button> Каталог дезинфекции</button> </a></Link>
                    </div>
                </div>
                </div>
                </div>
        </section>
    )
}