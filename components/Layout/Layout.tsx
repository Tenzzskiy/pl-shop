import styles from './../../styles/index.module.scss'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, {FunctionComponent, ReactNode, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import cn from "classnames";
import {Exit} from './../svg/exit.js'

interface LayoutProps {
    count:number,
    children?:ReactNode
}

const Layout:FunctionComponent = ({children ,count=0}:LayoutProps) =>{

    const [navigation,setNavigation] = useState(false);
    const [contacts,setContacts] =useState(false)
    return(
   <>
       <Header setNavigation={setNavigation} setContacts={setContacts} count={count}/>
      <main>
          <Navigation setNavigation={setNavigation} navigation={navigation} contacts={contacts} setContacts={setContacts}/>

          {children}
      </main>


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
                    <div className={styles.exit} onClick={() => setNavigation(false)}>

                        <Exit />

                    </div>
                    <Link prefetch={false} href='/' ><a className={cn(styles.a,
                        route.asPath === '/' ? styles.a_active : null

                    )} >Главная</a></Link>
                    <Link prefetch={false} href='/screens'><a className={cn(styles.a,
                        route.asPath === '/screens' ? styles.a_active : null

                    )}
                    >Светодиодные экраны</a></Link>
                    <Link prefetch={false} href='/videoWalls'><a className={cn(styles.a,
                        route.asPath === '/videoWalls' ? styles.a_active : null

                    )}>Видеостены</a></Link>
                    <Link prefetch={false} href='/touchPanel'><a className={cn(styles.a,
                        route.asPath === '/touchPanel' ? styles.a_active : null

                    )} >Сенсорные тач-панели</a></Link>
                    <Link prefetch={false} href='/projectors'><a className={cn(styles.a,
                        route.asPath === '/projectors' ? styles.a_active : null

                    )}>Проекторы</a></Link>
                    <Link prefetch={false} href='/laptops'><a className={cn(styles.a,
                        route.asPath === '/laptops' ? styles.a_active : null

                    )}>Ноутбуки</a></Link>
                    <Link prefetch={false} href='/sound'><a className={cn(styles.a,
                        route.asPath === '/sound' ? styles.a_active : null

                    )}>Звук, Свет и окружение</a></Link>
                    <Link prefetch={false} href='/desinfection'><a className={cn(styles.a,
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
                    <div className={styles.exit} onClick={() => setContacts(false)}>
                        <Exit />

                    </div>
                    <div className={styles.app}>
                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.30132 0.559061L4.67418 0.139858C5.42624 -0.0903771 6.23512 -0.0349534 6.94989 0.295787C7.66466 0.626527 8.23648 1.20999 8.55865 1.9373L9.61977 4.33309C9.89677 4.95867 9.9739 5.65659 9.84035 6.32894C9.7068 7.00129 9.36927 7.61433 8.8751 8.08203L7.11756 9.7457C7.06619 9.79431 7.03364 9.85997 7.0258 9.93082C6.97404 10.405 7.29049 11.3282 8.01986 12.6121C8.55042 13.5448 9.03157 14.2005 9.43978 14.5671C9.72447 14.8239 9.88093 14.8789 9.94798 14.8597L12.3125 14.1252C12.9583 13.9247 13.6496 13.9344 14.2897 14.1528C14.9298 14.3713 15.4865 14.7876 15.8817 15.3434L17.3887 17.4645C17.847 18.1096 18.0591 18.9015 17.9858 19.6933C17.9124 20.4851 17.5586 21.223 16.9899 21.77L15.9476 22.7733C15.3944 23.3051 14.715 23.6824 13.9755 23.8685C13.236 24.0545 12.4617 24.043 11.7279 23.835C8.48807 22.9166 5.58354 20.141 2.98134 15.5656C0.375616 10.9842 -0.538446 7.0382 0.303856 3.72638C0.493463 2.98152 0.868864 2.29882 1.39388 1.74406C1.91889 1.18929 2.57581 0.781183 3.30132 0.559061ZM3.8107 2.27529C3.37552 2.4084 2.98143 2.65303 2.6664 2.98563C2.35136 3.31822 2.12599 3.72757 2.01199 4.17424C1.3038 6.95938 2.11434 10.4575 4.50949 14.6699C6.90111 18.8762 9.47624 21.3365 12.2031 22.1104C12.6433 22.2349 13.1076 22.2415 13.5511 22.1298C13.9945 22.018 14.4019 21.7916 14.7336 21.4727L15.777 20.4694C16.0356 20.2208 16.1965 19.8853 16.2298 19.5252C16.2632 19.1652 16.1666 18.8052 15.9582 18.512L14.4524 16.392C14.2727 16.1391 14.0195 15.9496 13.7284 15.8503C13.4372 15.7509 13.1227 15.7465 12.829 15.8379L10.4585 16.5748C9.08215 16.9904 7.83281 15.8666 6.49172 13.5078C5.58824 11.9194 5.16709 10.6892 5.27179 9.73257C5.32708 9.23573 5.55413 8.77712 5.91411 8.43554L7.67165 6.77187C7.89637 6.5593 8.04988 6.28063 8.11064 5.97497C8.17141 5.66931 8.13637 5.352 8.01045 5.06759L6.94934 2.6718C6.8029 2.34146 6.54315 2.07645 6.21849 1.92615C5.89384 1.77585 5.52643 1.75053 5.18474 1.85489L3.8107 2.27529Z" fill="#0E0E52"/>
                        </svg>
                    <a  href="tel:+7 (495) 162 72 50">Позвонить</a>
                    </div>
                    <div className={styles.app}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5 3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5V19.5C0 19.8978 0.158035 20.2794 0.43934 20.5607C0.720644 20.842 1.10218 21 1.5 21H22.5C22.8978 21 23.2794 20.842 23.5607 20.5607C23.842 20.2794 24 19.8978 24 19.5V4.5C24 4.10218 23.842 3.72064 23.5607 3.43934C23.2794 3.15804 22.8978 3 22.5 3ZM21.345 19.5H2.745L7.995 14.07L6.915 13.0275L1.5 18.63V5.64L10.8225 14.9175C11.1035 15.1969 11.4837 15.3537 11.88 15.3537C12.2763 15.3537 12.6565 15.1969 12.9375 14.9175L22.5 5.4075V18.5325L16.98 13.0125L15.9225 14.07L21.345 19.5ZM2.4825 4.5H21.285L11.88 13.8525L2.4825 4.5Z" fill="#0E0E52"/>
                        </svg>
                     <a  href="mailto:info@arenda-plazm77.ru">Отправить E-mail</a>
                    </div>
                </div>
            </div>


            </div>

        </>
    )
}

export default Layout;