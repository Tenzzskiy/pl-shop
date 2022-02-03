import styles from './../../styles/index.module.scss'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FeedBack from "../FeedBack/FeedBack";
import React, {FunctionComponent, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import cn from "classnames";




const Layout:FunctionComponent = ({children }) =>{

    const [navigation,setNavigation] = useState(false);
    const [contacts,setContacts] =useState(false)
    return(
   <>
       <Header setNavigation={setNavigation} setContacts={setContacts}/>
       <Navigation setNavigation={setNavigation} navigation={navigation} contacts={contacts} setContacts={setContacts}/>

       {children}


       <Footer />
   </>
    )
}
export const Navigation = ( { setNavigation,navigation,contacts,setContacts}) =>{
    const route = useRouter();
    return(
        <><div onClick={() => {
            setNavigation(false);

        }} className={cn(styles.modal_container, !navigation ? null : styles.modal_container_active)}>
             <div className={cn(styles.navigation_container,navigation ? styles.show : null)}>
                <div className={styles.navigation_content}>
                    <div className={styles.exit} onClick={() => setNavigation(false)}><img src="/Modal/exit.svg" alt=""/></div>
                    <Link href='/' ><a className={cn(styles.a,
                        route.asPath === '/' ? styles.a_active : null

                    )} >Главная</a></Link>
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
            <div onClick={() => {
                setContacts(false);
            }} className={cn(styles.modal_container, !contacts ? null : styles.modal_container_active)}>
            <div className={cn(styles.navigation_container,contacts ? styles.show : null)}>
                <div className={styles.navigation_content}>
                    <div className={styles.exit} onClick={() => setContacts(false)}><img src="/Modal/exit.svg" alt=""/></div>
                    <div className={styles.app}>
                        <img src="/Modal/1.svg" alt=""/>
                        <span>Позвонить</span>
                    </div>
                    <div className={styles.app}>
                        <img src="/Modal/WS.svg" alt=""/>
                        <span>Написать в WhatsApp</span>
                    </div>
                    <div className={styles.app}>
                        <img src="/Modal/TG.svg" alt=""/>
                        <span>Написать в Telegram</span>
                    </div>
                    <div className={styles.app}>
                        <img src="/Modal/TG.svg" alt=""/>
                        <span>Отправить E-mail</span>
                    </div>
                </div>
            </div>


            </div>

        </>
    )
}

export default Layout;