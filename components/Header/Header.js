import styles from './Header.module.scss'
import React, { useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import cn from 'classnames'
import {useWindowSize} from './../../Hooks/useWindowSize.js'
import {useSelector} from "react-redux";

const Header = ({ setNavigation,setContacts,count}) =>{
    const items = useSelector(state => state.cart.itemsInCart);
    // const totalPrice = items.reduce((acc,data) =>acc+=Number(data.price) ,0)
    const route = useRouter()
    const [scroll, setScroll] = React.useState(0);
    const [lastScroll,setLastScroll] = useState(1)
    const size = useWindowSize();
    const quantity = items.length;
    const handleScroll = () => {
        setScroll(window.scrollY);
        setLastScroll(scroll)
    };
    React.useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return(
   <>
       <div className={cn(styles.header,

        )} >

            <div className={styles.top_header} >

                    <div className={styles.top_header_container}>
                        <div className={styles.top_header_container_content}>
                            {size.width <1250 ?
                                <div className={styles.leftModal} onClick={( ) => setNavigation(true)} >
                                    <picture>
                                        <img src="/header/leftModal.svg" alt=""/>

                                    </picture>
                                </div> : null
                            }
                           {
                                size.width > 1000 ? <div className={styles.logo}>
                                    <Link href="/"><a>  <img src="/header/Logotype.svg" alt=""/></a></Link>
                                </div> : <div className={styles.logo}>
                               <Link href="/"><a>   <img src="/header/Logotype_768.svg" alt=""/></a></Link>
                                </div>
                            }




                                 <Link href="/busket"><a> <div className={styles.busket}>
                                      {size.width > 1000 ?
                                          <div className={styles.icon}>
                                              <img src="/header/busket.svg" alt=""/>
                                              {quantity > 0 ?
                                                  <div> {quantity}</div> : null
                                              }

                                          </div>
                                          :

                                          <div className={styles.icon}>
                                              {quantity > 0 ?
                                                  <div> {quantity}</div> : null
                                              }
                                              <img src="/header/purpleBusket.svg" alt=""/>
                                          </div>
                                      }

                                      {size.width > 1000 ?
                                          <span> Корзина</span> : null
                                      }

                                  </div></a></Link>


                            <div className={styles.contacts}>
                                {size.width > 600 ?
                                    <div className={styles.number}> <a href="tel:+7 (495) 321 54 76"> +7 495 321-54-76</a></div>
                                :   <div className={styles.contacts}>
                                        <picture>

                                            <img src="/header/contacts.svg" alt="" onClick={() => {
                                                setContacts(true);
                                                console.log('done')
                                            }}/>
                                        </picture>
                                        
                                </div>
                                }

                                {size.width > 1250 ?
                                    <div className={styles.mail}>  <a href="mailto:info@arenda-plazm77.ru">info@arenda-plazm77.ru</a>   </div> : null


                                }

                            </div>
                        </div>
                </div>
            </div>
           {size.width > 1250 ? route.asPath !== '/busket' && count !==1 ?
                   <div className={cn(styles.bottom_header,  scroll>lastScroll ? styles.header_fixed : null)} >
                       <div className={styles.bottom_header_container}>
                           <div className={styles.content}>
                               <Link href='/' ><a className={cn(styles.a,
                                   route.asPath === '/' ? styles.a_active : null

                               )} >Плазмы</a></Link>
                               <Link href='/screens'><a className={cn(styles.a,
                                   route.asPath === '/screens' ? styles.a_active : null

                               )}
                               >Светодиодные экраны</a></Link>
                               <Link href='/videoWalls'><a className={cn(styles.a,
                                   route.asPath === '/videoWalls' ? styles.a_active : null

                               )}>Видеостены</a></Link>
                               <Link href='/touchPanel'><a className={cn(styles.a,
                                   route.asPath === '/touchPanel' ? styles.a_active : null

                               )} >Сенсорные тач-панели</a></Link>
                               <Link href='/projectors'><a className={cn(styles.a,
                                   route.asPath === '/projectors' ? styles.a_active : null

                               )}>Проекторы</a></Link>
                               <Link href='/laptops'><a className={cn(styles.a,
                                   route.asPath === '/laptops' ? styles.a_active : null

                               )}>Ноутбуки</a></Link>
                               <Link href='/sound'><a className={cn(styles.a,
                                   route.asPath === '/sound' ? styles.a_active : null

                               )}>Звук, Свет и окружение</a></Link>
                               <Link href='/desinfection'><a className={cn(styles.a,
                                   route.asPath === '/desinfection' ? styles.a_active : null

                               )}>Дезинфекция</a></Link>



                           </div>
                       </div>
                   </div>
                   : null
               : null

           }


       </div>
   </>
    )
}



export default Header;