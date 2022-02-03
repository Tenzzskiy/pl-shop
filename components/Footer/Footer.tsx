import styles from './Footer.module.scss'
import React, {FunctionComponent} from 'react'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Footer_768} from "./Footer_768/Footer_768";
import {Footer_320} from "./Footer_320/Footer_320";
import cn from "classnames";
import Link from "next/link";

const Footer:FunctionComponent = ({ }):JSX.Element =>{
    const [Data] = React.useState(new Date);
    const size = useWindowSize();
    return(
       <>
           {size.width > 1250 ?
               <div className={styles.footer}>

                   <div className={styles.footer_container}>
                       <div className={styles.content}>
                           <div className={styles.flex1}>

                               <div className={styles.item1}>
                                   <Link href='/' ><a className={cn(styles.a,
                                   )} > <img src="/header/Logotype.svg" alt=""/></a></Link>

                                    </div>
                               <div className={styles.item2}>  <a href="mailto:info@arenda-plazm77.ru"> info@arenda-plazm77.ru</a></div>
                               <div className={styles.item3}> <a href="tel:+7 (495) 321 54 76"> +7 495 321-54-76</a> </div>
                               <div className={styles.item4}>109382, Москва, пр. Егорьевский, д.2а </div>
                           </div>
                           <div className={styles.flex2}>
                               <div>
                                   <Link href='/' ><a className={cn(styles.a,
                                   )} > Главная</a></Link>


                               </div>
                               <div>
                                   <Link href='/screens' ><a className={cn(styles.a,
                                   )} > Светодиодные экраны</a></Link>
                                    </div>
                               <div>
                                   <Link href='/videoWalls' ><a className={cn(styles.a,
                                   )} > Видеостены</a></Link>
                                  </div>
                               <div>
                                   <Link href='/touchPanel' ><a className={cn(styles.a,
                                   )} > Сенсорные тач-панели</a></Link>
                                    </div>
                           </div>
                           <div className={styles.flex3}>
                               <div>
                                   <Link href='/projectors' ><a className={cn(styles.a,
                                   )} > Проекторы</a></Link>
                                   </div>
                               <div >
                                   <Link href='/laptops' ><a className={cn(styles.a,
                                   )} > Ноутбуки</a></Link>
                                   </div>
                               <div >
                                   <Link href='/sound' ><a className={cn(styles.a,
                                   )} > Звук, Свет и окружение</a></Link>
                                   </div>
                               <div >
                                   <Link href='/news' ><a className={cn(styles.a,
                                   )} > Наши новости</a></Link>
                                    </div>

                           </div>
                           <div className={styles.flex4}>
                               <div className={styles.item13}>
                                   <img src="/VK.svg" alt=""/>
                                   <img src="/FB.svg" alt=""/>
                                   <img src="/IG.svg" alt=""/>
                               </div>
                               <div className={styles.item14}>{size.width} </div>
                               <div className={styles.item15}> Политика конфиденциальности</div>

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




       </>
    )
}

export default Footer;