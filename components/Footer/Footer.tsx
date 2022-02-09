import styles from './Footer.module.scss'
import React, {FunctionComponent} from 'react'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Footer_768} from "./Footer_768/Footer_768";
import {Footer_320} from "./Footer_320/Footer_320";
import cn from "classnames";
import Link from "next/link";
import {MyImage} from "../MyImage";

const Footer:FunctionComponent = ({ }):JSX.Element =>{
    const [Data] = React.useState(new Date);
    const size = useWindowSize();
    return(
       <footer>
           {size.width > 1250 ?
               <div className={styles.footer}>

                   <div className={styles.footer_container}>
                       <div className={styles.content}>
                           <div className={styles.flex1}>

                               <div className={styles.item1}>
                                   <Link href='/' ><a className={cn(styles.a,
                                   )} ><MyImage src={{default: "/header/Logotype.svg"}} alt={'1'} /></a></Link>

                                    </div>
                               <div className={styles.item2}>  <a href="mailto:info@arenda-plazm77.ru" itemProp="email"> info@arenda-plazm77.ru</a></div>
                               <div className={styles.item3}> <a href="tel:+7 (495) 162 72 50 " itemProp="telephone"> +7 495 162-72-50</a> </div>
                               <div className={styles.item4} itemScope itemType="https://schema.org/PostalAddress">

                               <span itemProp="postalCode"> 109382, </span>
                               <span itemProp="addressLocality">Москва,  </span>
                               <span itemProp="streetAddress"> пр. Егорьевский, д.2а</span>

                               </div>
                           </div>
                           <div className={styles.flex2} itemScope itemType="http://schema.org/SiteNavigationElement">
                               <div>
                                   <Link href='/' ><a itemProp="url" className={cn(styles.a,
                                   )} > Главная</a></Link>


                               </div>
                               <div>
                                   <Link href='/screens' ><a itemProp="url"  className={cn(styles.a,
                                   )} > Светодиодные экраны</a></Link>
                                    </div>
                               <div>
                                   <Link href='/videoWalls' ><a itemProp="url"  className={cn(styles.a,
                                   )} > Видеостены</a></Link>
                                  </div>
                               <div>
                                   <Link href='/touchPanel' ><a itemProp="url"  className={cn(styles.a,
                                   )} > Сенсорные тач-панели</a></Link>
                                    </div>
                           </div>
                           <div className={styles.flex3}>
                               <div>
                                   <Link href='/projectors' ><a itemProp="url"  className={cn(styles.a,
                                   )} > Проекторы</a></Link>
                                   </div>
                               <div >
                                   <Link href='/laptops' ><a itemProp="url"  className={cn(styles.a,
                                   )} > Ноутбуки</a></Link>
                                   </div>
                               <div >
                                   <Link href='/sound' ><a itemProp="url"  className={cn(styles.a,
                                   )} > Звук, Свет и окружение</a></Link>
                                   </div>
                               <div >
                                   <Link href='/news' ><a itemProp="url"  className={cn(styles.a,
                                   )} > Наши новости</a></Link>
                                    </div>

                           </div>
                           <div className={styles.flex4}>
                               <div className={styles.item13}>
                                   <MyImage src={{default: "/VK.svg"}} alt={'VK'} />
                                   <MyImage src={{default: "/FB.svg"}} alt={'Facebook'} />
                                   <MyImage src={{default: "/IG.svg"}} alt={'Instagram'} />
                               </div>
                               <div className={styles.item14}>{size.width} </div>
                               <div className={styles.item15}><Link  href="/privacy"><a rel='nofollow'> Политика конфиденциальности</a></Link></div>

                           </div>
                       </div>
                       <div className={styles.item16}> © Arenda-plazm77, 2021-{Data.getFullYear()}</div>

                   </div>

               </div>
                : null
           }
           {size.width>700   && size.width<1250 ?
               <Footer_768 /> : null
           }
           {size.width<700 ?
              <Footer_320 /> : null
           }




       </footer>
    )
}

export default Footer;