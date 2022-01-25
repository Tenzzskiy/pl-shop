import styles from './Footer_320.module.scss'
import React from "react";
import Link from "next/link";
import cn from "classnames";


export const Footer_320 = () =>{
    const [Data] = React.useState(new Date);
    return(
        <>
            <div className={styles.footer}>

            <div className={styles.content}>
                <div className={styles.grid}>
                    <div className={styles.head_footer}>
                        <div className={styles.img}>
                            <picture>
                                <Link href='/' ><a className={cn(styles.a,
                                )} > <img src="/header/Logotype.svg" alt=""/></a></Link>
                            </picture>
                        </div>
                        <div className={styles.mail}>info@arenda-plazm77.ru </div>
                        <div className={styles.adress}>109382, Москва, пр. Егорьевский, д.2а </div>
                    </div>
                        <div className={styles.contacts}>
                            <picture>
                                <img src="/header/footer_contacts.svg" alt=""/>
                            </picture>
                        </div>


                </div>


            </div>

                <div className={styles.content2}>
                    <div className={styles.border}> </div>
                <div className={styles.grid}>
                <div>
                    <Link href='/' ><a className={cn(styles.a,
                    )} > Главная</a></Link>

                </div>
                    <span className={styles.border}> </span>
                <div> <Link href='/Screens' ><a className={cn(styles.a,
                )} > Светодиодные экраны</a></Link> </div>
                    <span className={styles.border}> </span>
                <div>   <Link href='/VideoWalls' ><a className={cn(styles.a,
                )} > Видеостены</a></Link></div>
                    <span className={styles.border}> </span>
                <div> <Link href='/TouchPanel' ><a className={cn(styles.a,
                )} > Сенсорные тач-панели</a></Link> </div>
                    <span className={styles.border}> </span>
                <div> <Link href='/Projectors' ><a className={cn(styles.a,
                )} > Проекторы</a></Link> </div>
                    <span className={styles.border}> </span>
                <div> <Link href='/Laptops' ><a className={cn(styles.a,
                )} > Ноутбуки</a></Link> </div>
                    <span className={styles.border}> </span>
                <div> <Link href='/Sound' ><a className={cn(styles.a,
                )} > Звук, Свет и окружение</a></Link> </div>
                    <span className={styles.border}> </span>
                <div> <Link href='/Desinfection' ><a className={cn(styles.a,
                )} > Дезинфекция</a></Link> </div>
                    <span className={styles.border}> </span>
                <div> <Link href='/News' ><a className={cn(styles.a,
                )} > Наши новости</a></Link></div>
                    <span className={styles.border}> </span>
                </div>
                </div>

                <div className={styles.content3}>
                <div className={styles.flex}>
                    <div className={styles.item1}>
                        <img src="/VK.svg" alt=""/>
                        <img src="/FB.svg" alt=""/>
                        <img src="/IG.svg" alt=""/>
                    </div>
                    <div className={styles.item14}> Yandex metrika badge-widget  </div>
                <div className={styles.item15}>Политика конфиденциальности </div>
                <div className={styles.item16}>© Arenda-plazm77, 2021 </div>
                </div>
                </div>
            </div>

        </>
    )
}