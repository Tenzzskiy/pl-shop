import styles from './Footer_320.module.scss'
import React from "react";
import Link from "next/link";
import cn from "classnames";
import {MyImage} from "../../MyImage";
import cs from "classnames";
import {useEffect,useRef,useState} from "react";

const useLazy = (
    targetRef: React.RefObject<Element>,
    callback: () => void,
): void => {
    useEffect(() => {
        if ('IntersectionObserver' in window) {
            const myObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            callback();
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { rootMargin: '0px 0px 100px 0px' },
            );

            if (targetRef.current) {
                myObserver.observe(targetRef.current);
            }
        }
    });
};
export {useLazy}


export const Footer_320 = () =>{
    const [isRatingShow, setRatingShowing] = useState(false);
    const ratingRef = useRef<HTMLIFrameElement>(null);

    useLazy(ratingRef, () => {
        setRatingShowing(true);
    });
    const [Data] = React.useState(new Date);
    return(
        <section>
            <div className={styles.footer} itemScope itemType="http://schema.org/Organization">

            <div className={styles.content}>
                <div className={styles.grid}>
                    <div className={styles.head_footer}>
                        <div className={styles.img}>
                            <picture>
                                <Link href='/' ><a className={cn(styles.a,
                                )} ><MyImage src={{default: "/header/Logotype.svg"}} alt={'1'} />
                                    </a></Link>
                            </picture>
                        </div>
                        <div className={styles.mail}><a href="mailto:info@arenda-plazm77.ru" itemProp="email">info@arenda-plazm77.ru</a> </div>
                        <div itemProp="addressLocality" className={styles.adress} >109382, Москва, пр. Егорьевский, д.2а </div>
                    </div>
                        <div className={styles.contacts}>
                            <picture>
                                <a  itemProp="telephone" href="tel:+7 (495) 321 54 76">
                                    <MyImage src={{default: "/header/footer_contacts.svg"}} alt={'1'} />
                                    </a>
                            </picture>
                        </div>


                </div>


            </div>

                <div ref={ratingRef} className={styles.content2} >
                    <div className={styles.border}> </div>
                <div className={styles.grid} itemScope itemType="http://schema.org/SiteNavigationElement">
                    <Link href='/' ><a itemProp="url" className={cn(styles.a,
                    )} ><div>
                    Главная

                </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/screens' ><a itemProp="url" className={cn(styles.a,
                    )} > <div>  Светодиодные экраны </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/videoWalls' ><a itemProp="url" className={cn(styles.a,
                    )} ><div>    Видеостены</div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/touchPanel' ><a itemProp="url" className={cn(styles.a,
                    )} > <div> Сенсорные тач-панели </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/projectors' ><a itemProp="url" className={cn(styles.a,
                    )} > <div> Проекторы </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/laptops' ><a itemProp="url" className={cn(styles.a,
                    )} ><div>  Ноутбуки </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/sound' ><a itemProp="url" className={cn(styles.a,
                    )} ><div>  Звук, Свет и окружение</div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/desinfection' ><a itemProp="url" className={cn(styles.a,
                    )} ><div>  Дезинфекция </div></a></Link>
                    <span className={styles.border}> </span>
                    <Link href='/news' ><a itemProp="url" className={cn(styles.a,
                    )} ><div>  Наши новости</div></a></Link>
                    <span className={styles.border}> </span>
                </div>
                </div>

                <div className={styles.content3}>
                <div className={styles.flex}>
                    {/*<div className={styles.item1}>*/}
                    {/*    <MyImage src={{default: "/VK.svg"}} alt={'VK'} />*/}
                    {/*    <MyImage src={{default: "/FB.svg"}} alt={'Facebook'} />*/}
                    {/*    <MyImage src={{default: "/IG.svg"}} alt={'Instagram'} />*/}

                    {/*</div>*/}
                    {isRatingShow && (
                        <div
                            className={cs(
                                styles.evaluation,

                            )}

                        >
                            {
                                <iframe
                                    title="yandexRating"
                                    src="https://yandex.ru/sprav/widget/rating-badge/237884847372"
                                    width="120"
                                    height="50"
                                    frameBorder="0"
                                />
                            }

                    </div> )}
                <div className={styles.item15}><Link href="/privacy"><a rel='nofollow'> Политика конфиденциальности</a></Link> </div>
                <div className={styles.item16}>© Arenda-plazm77, 2021-{Data.getFullYear()} </div>
                </div>
                </div>
            </div>

        </section>
    )
}

