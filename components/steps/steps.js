import styles from './steps.module.scss'
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";



const Steps = () =>{
    const route = useRouter();
    return(
        <>
            <div className={styles.back} itemScope itemType="http://schema.org/BreadcrumbList">

                Главная

                <img src="/white_arrow.svg" alt=""/>
                <span  itemProp="name" itemScope itemType="http://schema.org/ListItem" >
                  {
                      route.asPath === '/screens' ? 'Светодиодные экраны' :
                          route.asPath === '/videoWalls' ? 'Видеостены' :
                              route.asPath === '/touchPanel' ? 'Сенсорные тач -панели' :
                                  route.asPath === '/projectors' ? 'Проекторы' :
                                      route.asPath === '/laptops' ? 'Ноутбуки' :
                                          route.asPath === '/desinfection' ? 'Дезинфекция' :
                                              route.asPath === '/sound' ? 'Звук, Свет и окружение' : null

                  }
                </span>


            </div>
        </>
    )
}

export default Steps;