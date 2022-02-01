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
                    <Link href='/' ><a className={cn(styles.a,
                    )} ><div>
                    Главная

                </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/screens' ><a className={cn(styles.a,
                    )} > <div>  Светодиодные экраны </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/videoWalls' ><a className={cn(styles.a,
                    )} ><div>    Видеостены</div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/touchPanel' ><a className={cn(styles.a,
                    )} > <div> Сенсорные тач-панели </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/projectors' ><a className={cn(styles.a,
                    )} > <div> Проекторы </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/laptops' ><a className={cn(styles.a,
                    )} ><div>  Ноутбуки </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/sound' ><a className={cn(styles.a,
                    )} ><div>  Звук, Свет и окружение</div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/desinfection' ><a className={cn(styles.a,
                    )} ><div>  Дезинфекция </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/news' ><a className={cn(styles.a,
                    )} ><div>  Наши новости</div></a></Link>
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