import styles from './Busket.module.scss'
import Layout from "../Layout/Layout";
import {BusketCard} from "./BusketCard/BusketCard";
import {useSelector} from "react-redux";
import data from "../../sources/data/cart_arenda-plasm77.ru.json";
import {ShopItem} from "../Shop/ShopItem/ShopItem";
import React, {useRef, useState} from "react";
import {useWindowSize} from "../../Hooks/useWindowSize";
import Link from "next/link";
import {Offer} from "../Offer/Offer";
import {Offer_768} from "../Offer/OfferCard/Offer_768";
import {Offer_360} from "../Offer/OfferCard/Offer_360";
import {Contacts} from "../Contacts/Contacts";
import {FormInput} from "../Input";
import {Link as Link32, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import cn from "classnames";
import {Selector, useOnClickOutside} from "../Select/Select";
import {NavigationButton} from "./navigation_button/NavigationButton";

export const ResultBusket = ( {data, setOfferModal}) => {
    const [value,setValue] = useState();
    const [checkbox,setCheckBox] = useState(true);
    const size = useWindowSize();
    const items = useSelector(state => state.cart.itemsInCart);
    let result = 0;
    const [input,setNumber ] = useState(false)
    items.map(elem => result += elem.changedPrice)
    const count = items.length;
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const goods =  items.map(elem  =>
        <BusketCard
            detail1={elem.detail1}
            detail2={elem.detail2}
            mainDetail={elem.mainDetail}
            mainDetail2={elem.mainDetail2}
            detail={elem.detail}
            key={elem.id}
        id={elem.id}
        time={elem.time}
        price={elem.changedPrice}
        img={elem.img}
        title={elem.title}
            data={elem}
        />  )
    const names = [

        {title:'Плазмы',link:'/'},
        {title:'Светодиодные экраны',link:'/screens'},
        {title:'Видеостены',link:'/videoWalls'},
        {title:'Сенсорные тач-панели',link:'/touchPanel'},
        {title:'Проекторы',link:'/projectors'},
        {title:'Ноутбуки',link:'/laptops'},
        {title:'Звук, Свет и окружение',link:'/sound'},
        {title:'Дезинфекция',link:'/desinfection'}

    ]
    const buttons = names.map( (elem) => <NavigationButton title={elem.title} link={elem.link}/>)
    const triggerCheckBox = () =>{
        setCheckBox(!checkbox);
    }
    return(
        <section>
            <div className={styles.background}>
        <div className={styles.container}>
            <div className={styles.back}>

            <Link href="/"><a> <img src="/back_arrow.svg" alt=""/> Назад к покупкам   </a></Link>

            </div>
<div className={styles.content}>
    <div className={styles.title} >
        Моя корзина
    </div>
    <div className={styles.flex}>
        <div className={styles.items}>
            {count > 0 ? goods :
            <>
                <div className={styles.first}> Здесь пока ничего нет =(</div>
                <div className={styles.second}> Но это легко исправить, заглянув в соответствующий раздел {size.width < 1200 ? <Link href="/"><a
                >Каталога:</a></Link> : 'Каталога:' }</div>
                {size.width > 1200 ? <nav className={styles.nav_flex}>
                    {buttons}
                </nav> : null}
            </>}
        </div>
        {count > 0 && size.width > 1250?
            <div className={styles.menu}>
            <div className={styles.menu_container}>
            <div className={styles.menu_title}>Итого:</div>
            <div className={styles.total}>
            <div>{count} товаров</div>
            <div className={styles.toch}>................................</div>
            <div className={styles.totalPrice}>{result}₽</div>
            </div>
            <div className={styles.add}>*финальная стоимость
            с учётом доставки рассчитывается менеджером</div>
            <div className={styles.contacts}>
            <div className={styles.number}><FormInput mask="+7 (999) 999-99-99" placeholder='+7 999 999-99-99' onChange={(evt) => {
                {
                    (evt?.includes('_')) && (evt?.includes(' ')) ?  setNumber(false): null ;
                }
                {
                    (!(evt?.includes('_')) && (evt?.includes(' '))) ?  setNumber(true): null ;
                }


            }} /> </div>
                <Selector_758 />
            </div>
            <div className={styles.rules}>
            <div className={styles.checkbox} onClick={triggerCheckBox}><img className={checkbox ? null : styles.hide} src="/Seo/checkbox.svg" alt=""/></div>
            <div> Соглашаюсь с <Link href=""><a>Правилами обработки персональных данных</a></Link></div>
            </div>
            <div className={styles.button} onClick={ () =>

            {
                if ( checkbox === true  && input ===true){
                    setOfferModal(true)
                } else if (checkbox ===true  && input ===true){
                    setOfferModal(true)
                }
            }
            }><button>Отправить заявку</button> </div>
            </div>
            </div> : null
        }

    </div>

</div>

        </div>
            {size.width < 1200 && count >0?
            <>
            <div className={styles.anchor} >
            <div className={styles.anchor_text}>
               <Link32 to='anchor' spy={true} smooth={true} duration={500}>К оформлению </Link32>
             </div>
            <div><img src="/select_arrow.svg" alt=""/> </div>
            </div>
            </> :null
            }
            </div>
            {count > 0 ?    <div >
                {size.width > 1200 ? <Offer title={'Вам также может пригодиться'} busket={1} data={data.mainAdditionals}/> : null }
                {size.width > 720 && size.width<1200 ? <Offer_768 data={data.mainAdditionals}  title={'Вам также может пригодиться'} busket={1}/> : null }
                {size.width < 720  ? <Offer_360  title={'Вам также может пригодиться'} busket={1} data={data.mainAdditionals}
                /> : null }
            </div> : null}
            {count > 0 &&  size.width < 1250 ?
                <div className={styles.menu}  id='anchor'>
                    <div className={styles.menu_container}>
                        <div className={styles.menu_title}>Итого:</div>
                        <div className={styles.total}>
                            <div>{count} товаров</div>
                            <div className={styles.toch}>{size.width > 720 ? '................................' : '...'}</div>
                            <div className={styles.totalPrice}>{result}₽</div>
                        </div>
                        <div className={styles.add}>*финальная стоимость
                            с учётом доставки рассчитывается менеджером</div>
                        <div className={styles.contacts}>
                            <div className={styles.number}><FormInput mask="+7 (999) 999-99-99" placeholder='+7 999 999-99-99'  onChange={(evt) => {
                                {
                                    (evt?.includes('_')) && (evt?.includes(' ')) ?  setNumber(false): null ;
                                }
                                {
                                    (!(evt?.includes('_')) && (evt?.includes(' '))) ?  setNumber(true): null ;
                                }


                            }}  /> </div>
                            {size.width < 720 ? <Selector_360 /> : <Selector_758 /> }
                        </div>
                        <div className={styles.rules}>
                            <div className={styles.checkbox} onClick={triggerCheckBox}><img className={checkbox ? null : styles.hide} src="/Seo/checkbox.svg" alt=""/></div>
                            <div className={styles.agree}> Соглашаюсь с <Link href=""><a>Правилами обработки персональных данных</a></Link></div>
                        </div>
                        <div className={styles.button}><button onClick={ () =>

                        {
                            if ( checkbox === true &&  input ===true){
                                setOfferModal(true)
                            } else if (checkbox ===true && input ===true){
                                setOfferModal(true)
                            }
                        }
                        }>Отправить заявку</button> </div>
                    </div>
                </div> : null
            }

        </section>
    )
}


 export const Selector_360 =() => {
    const [example,setExample] = useState('Позвонить по Телефону');
    const [selectorStatus,setSelectorStatus] = useState(false)
     const ref = useRef();
     useOnClickOutside(ref, () => setSelectorStatus(false));
    return(
        <>
            <div className={styles.wrapper} ref={ref}>
                <button type='button' className={cn(styles.selector, {
                    [styles.selectorActive]: selectorStatus === true
                })} onClick={() => {
                    setSelectorStatus(!selectorStatus)
                }}>{example} <div className={selectorStatus === true ? styles.selector_img_2 : null}>
                    <svg className={selectorStatus === true ? styles.selector_img_style : styles.selector_img_style_2} width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-2.28179e-05 6.45698C-0.000532082 6.30638 0.032486 6.15759 0.0966025 6.02152C0.160719 5.88545 0.254307 5.76558 0.370487 5.6707L6.37875 0.801829C6.55793 0.653563 6.78268 0.57251 7.01462 0.57251C7.24657 0.57251 7.47132 0.653563 7.6505 0.801829L13.6588 5.84207C13.8633 6.01318 13.9919 6.25905 14.0163 6.5256C14.0407 6.79216 13.9589 7.05756 13.7889 7.26342C13.619 7.46928 13.3747 7.59874 13.1099 7.62331C12.8451 7.64789 12.5815 7.56557 12.377 7.39447L7.00962 2.88849L1.64223 7.24326C1.49525 7.36653 1.31626 7.44483 1.12645 7.4689C0.936642 7.49297 0.743953 7.46181 0.571187 7.37909C0.398422 7.29637 0.252812 7.16557 0.151582 7.00215C0.0503522 6.83874 -0.00225823 6.64955 -2.28179e-05 6.45698Z"
                              fill="#460BD9" />
                    </svg>



                    </div> </button>

                {selectorStatus && (
                    <div className={styles.selectorList}>
                        <button type="button" className={styles.selectorItem} onClick={() => {
                            setExample('Позвонить по телефону')
                            setSelectorStatus(false)
                        }}>
                            Позвонить по телефону
                        </button>
                        <button type="button" className={styles.selectorItem} onClick={() => {
                            setExample('Написать в Telegram')
                            setSelectorStatus(false)

                        }}>
                            Написать в Telegram
                        </button>
                        <button type="button" className={styles.selectorItem} onClick={() => {
                            setExample('Написать в WhatsApp')
                            setSelectorStatus(false)
                        }}>
                            Написать в WhatsApp
                        </button>
                    </div>
                )}


            </div>
        </>
    )
}
 export const Selector_758 = ( { }) =>{
    const [example,setExample] = useState('Позвонить по Телефону');
    const [selectorStatus,setSelectorStatus] = useState(false)
    const ref = useRef();
    useOnClickOutside(ref, () => setSelectorStatus(false));
    return(
        <>
        <div className={styles.wrapper} ref={ref}>
        <button type='button' className={cn(styles.selector2, {
            [styles.selectorActive]: selectorStatus === true
        })} onClick={() => {
            setSelectorStatus(!selectorStatus)
        }}>{example} <div className={selectorStatus === true ? styles.selector_img_2 : null}>
            <svg className={selectorStatus === true ? styles.selector_img_style : styles.selector_img_style_2} width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-2.28179e-05 6.45698C-0.000532082 6.30638 0.032486 6.15759 0.0966025 6.02152C0.160719 5.88545 0.254307 5.76558 0.370487 5.6707L6.37875 0.801829C6.55793 0.653563 6.78268 0.57251 7.01462 0.57251C7.24657 0.57251 7.47132 0.653563 7.6505 0.801829L13.6588 5.84207C13.8633 6.01318 13.9919 6.25905 14.0163 6.5256C14.0407 6.79216 13.9589 7.05756 13.7889 7.26342C13.619 7.46928 13.3747 7.59874 13.1099 7.62331C12.8451 7.64789 12.5815 7.56557 12.377 7.39447L7.00962 2.88849L1.64223 7.24326C1.49525 7.36653 1.31626 7.44483 1.12645 7.4689C0.936642 7.49297 0.743953 7.46181 0.571187 7.37909C0.398422 7.29637 0.252812 7.16557 0.151582 7.00215C0.0503522 6.83874 -0.00225823 6.64955 -2.28179e-05 6.45698Z"
                      fill="#460BD9" />
            </svg>



        </div> </button>

        {selectorStatus && (
            <div className={styles.selectorList}>
                <button type="button" className={styles.selectorItem2} onClick={() => {
                    setExample('Позвонить по телефону')
                    setSelectorStatus(false)
                }}>
                    Позвонить по телефону
                </button>
                <button type="button" className={styles.selectorItem2} onClick={() => {
                    setExample('Написать в Telegram')
                    setSelectorStatus(false)

                }}>
                    Написать в Telegram
                </button>
                <button type="button" className={styles.selectorItem2} onClick={() => {
                    setExample('Написать в WhatsApp')
                    setSelectorStatus(false)
                }}>
                    Написать в WhatsApp
                </button>
            </div>
        )}


    </div>

</>


    )
}