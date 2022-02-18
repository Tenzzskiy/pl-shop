import styles from './Header.module.scss'
import React, { useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import cn from 'classnames'
import {useWindowSize} from './../../Hooks/useWindowSize.js'
import {useSelector} from "react-redux";
import {NavigationButton} from "../Busket/navigation_button/NavigationButton";
import {LeftModal} from "../svg/leftModal";
import {Logotype_768} from "../svg/Legotype_768";
import {PurpleBucket} from "../svg/purpleBucket";

const Header = ({ setNavigation,setContacts,count}) =>{
    const items = useSelector(state => state.cart.itemsInCart);
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
    const names = [

        {title:'Плазмы',link:'/',id:'1'},
        {title:'Светодиодные экраны',link:'/screens',id:'2'},
        {title:'Видеостены',link:'/videoWalls',id:'3'},
        {title:'Сенсорные тач-панели',link:'/touchPanel',id:'4'},
        {title:'Проекторы',link:'/projectors',id:'5'},
        {title:'Ноутбуки',link:'/laptops',id:'6'},
        {title:'Звук, Свет и окружение',link:'/sound',id:'7'},
        {title:'Дезинфекция',link:'/desinfection',id:'8'}

    ]
    const buttons = names.map( (elem) => <NavigationButton key={elem.id} color1='#460BD9' color2='#460BD9' width={152} height={62} title={elem.title} link={elem.link} count={false}/>)

    return(
   <header>
       <div className={cn(styles.header,

        )} >

            <div className={styles.top_header} itemScope itemType="http://schema.org/SiteNavigationElement">

                    <div className={styles.top_header_container}>
                        <div className={styles.top_header_container_content} >
                            {size.width <1250 ?
                                <div className={styles.leftModal} onClick={( ) => setNavigation(true)} >
                                   <LeftModal />
                                </div> : null
                            }
                           {
                                size.width > 1000 ? <div className={styles.logo}>
                                    <Link href="/"><a>
                                        <img src="/header/Logotype.svg" alt=""/>
                                    </a></Link>
                                </div> : <div className={styles.logo}>
                               <Link href="/"><a>
                                   <Logotype_768 />
                               </a></Link>
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
                                              <PurpleBucket />
                                          </div>
                                      }

                                      {size.width > 1000 ?
                                          <span> Корзина</span> : null
                                      }

                                  </div></a></Link>


                            <div className={styles.contacts}  itemProp="address" itemScope itemType="http://schema.org/Organization">
                                {size.width > 600 ?
                                    <div className={styles.number}> <a itemProp="telephone" href="tel:+74951627250"> +7 495 162-72-50</a></div>
                                :   <div className={styles.contacts}>


                                            <img src="/header/contacts.svg" alt="" onClick={() => {
                                                setContacts(true);
                                                console.log('done')
                                            }}/>

                                        
                                </div>
                                }

                                {size.width > 1250 ?
                                    <div className={styles.mail}>  <a itemProp="email" href="mailto:info@arenda-plazm77.ru">info@arenda-plazm77.ru</a>   </div> : null


                                }

                            </div>
                        </div>
                </div>
            </div>
           {size.width > 1250 ? route.asPath !== '/busket' && count !==1 ?
                   <div className={cn(styles.bottom_header,  scroll>lastScroll ? styles.header_fixed : null)} >
                       <div className={styles.bottom_header_container}>
                           <div className={styles.content}>

                               {buttons}


                           </div>
                       </div>
                   </div>
                   : null
               : null

           }


       </div>
   </header>
    )
}



export default Header;