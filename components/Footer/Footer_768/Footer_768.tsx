import styles from './Footer_768.module.scss'
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import cn from "classnames";
import {MyImage} from "../../MyImage";
import cs from "classnames";
import {useLazy} from "../Footer_320/Footer_320";


export const Footer_768 = () =>{
    const [isRatingShow, setRatingShowing] = useState(false);

    const ratingRef = useRef<HTMLIFrameElement>(null);

    useLazy(ratingRef, () => {
        setRatingShowing(true);
    });
    const [Data] = React.useState(new Date);
    return(
        <section className={styles.footer}>

            <div className={styles.footer_container} itemScope itemType="http://schema.org/Organization">
                <div className={styles.content}>


                    <div className={styles.flex1}>
                        <div className={styles.first}>
                            <div className={styles.item1}> <Link href='/' ><a className={cn(styles.a,
                            )} ><MyImage src={{default: "/header/Logotype.svg"}} alt={'1'} /></a></Link> </div>
                            <div className={styles.item2}><a href="mailto:info@arenda-plazm77.ru" itemProp="email">info@arenda-plazm77.ru</a></div>
                        </div>
                        <div className={styles.second}>
                            <div className={styles.item3}>
                                <a href="tel:+7 (495) 321 54 76" itemProp="telephone"> +7 495 321-54-76</a>

                                 </div>
                            <div className={styles.item4}>
                                <div className={styles.telegram}>
                                <picture>
                                    <img src="/telegram.svg" alt=""/>
                                </picture>
                                Telegram</div>
                            <div className={styles.whatsapp}>
                                <picture>
                                    <img src="whatsapp.svg" alt=""/>
                                </picture>
                                WhatsApp</div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={styles.border}> </div>

                <div className={styles.content2}>
                    <div className={styles.flex2} itemScope itemType="http://schema.org/SiteNavigationElement">
                        <div>
                            <Link href='/' ><a className={cn(styles.a,
                            )} > Главная</a></Link>


                        </div>
                        <div>
                            <Link href='/screens' ><a itemProp="url" className={cn(styles.a,
                            )} > Светодиодные экраны</a></Link>
                        </div>
                        <div>
                            <Link href='/videoWalls' ><a itemProp="url" className={cn(styles.a,
                            )} > Видеостены</a></Link>
                        </div>
                        <div>
                            <Link href='/touchPanel' ><a itemProp="url" className={cn(styles.a,
                            )} > Сенсорные тач-панели</a></Link>
                        </div>
                    </div>
                    <div className={styles.flex3}>
                        <div>
                            <Link href='/projectors' ><a itemProp="url" className={cn(styles.a,
                            )} > Проекторы</a></Link>
                        </div>
                        <div >
                            <Link href='/laptops' ><a itemProp="url" className={cn(styles.a,
                            )} > Ноутбуки</a></Link>
                        </div>
                        <div >
                            <Link href='/sound' ><a itemProp="url" className={cn(styles.a,
                            )} > Звук, Свет и окружение</a></Link>
                        </div>
                        <div >
                            <Link href='/news' ><a itemProp="url" className={cn(styles.a,
                            )} > Наши новости</a></Link>
                        </div>

                    </div>
                <div ref={ratingRef} className={styles.box3}>
                        {/*<div className={styles.item13}>*/}
                        {/*    <MyImage src={{default: "/VK.svg"}} alt='VK' />*/}
                        {/*    <MyImage src={{default: "/FB.svg"}} alt='Facebook' />*/}
                        {/*    <MyImage src={{default: "/IG.svg"}} alt='Instagram' />*/}
                        {/*</div>*/}
                    {isRatingShow && (
                        <div
                            className={styles.item14}
                        >
                                <iframe
                                    title="yandexRating"
                                    src="https://yandex.ru/sprav/widget/rating-badge/237884847372"
                                    width="150"
                                    height="50"
                                    frameBorder="0"
                                />

                        </div> )}
                        <div className={styles.item15}><Link href="/privacy"><a  rel='nofollow'> Политика конфиденциальности</a></Link></div>
                    <div className={styles.item16}> © Arenda-plazm77, 2021-{Data.getFullYear()}</div>
                </div>
                </div>
            </div>

        </section>
    )
}