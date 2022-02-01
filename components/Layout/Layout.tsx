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
    return(
   <>
       <Header setNavigation={setNavigation}/>
       <Navigation setNavigation={setNavigation} navigation={navigation}/>
       {children}


       <Footer />
   </>
    )
}
export const Navigation = ( { setNavigation,navigation}) =>{
    const route = useRouter();
    return(
        <>
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
        </>
    )
}

export default Layout;