import styles from './Busket.module.scss'
import Layout from "../Layout/Layout";
import {BusketCard} from "./BusketCard/BusketCard";
import {useSelector} from "react-redux";
import data from "../Shop/cart_arenda-plasm77.ru.json";
import {ShopItem} from "../Shop/ShopItem/ShopItem";
import React, {useState} from "react";
import {useWindowSize} from "../../Hooks/useWindowSize";
import Link from "next/link";
import {Offer} from "../Offer/Offer";
import {Offer_768} from "../Offer/OfferCard/Offer_768";
import {Offer_360} from "../Offer/OfferCard/Offer_360";
import {Contacts} from "../Contacts/Contacts";
import {FormInput} from "../Input";
import {Link as Link32, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import cn from "classnames";
import {Selector} from "../Select/Select";

export const ResultBusket = ( { setOfferModal}) => {
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
    const triggerCheckBox = () =>{
        setCheckBox(!checkbox);
    }
    return(
        <>
        <div className={styles.container}>
<div className={styles.content}>
    <div className={styles.title} >
        Моя корзина
    </div>
    <div className={styles.flex}>
        <div className={styles.items}>
            {count > 0 ? goods :
            <>
                <div className={styles.first}> Здесь пока ничего нет =(</div>
                <div className={styles.second}> Но это легко исправить, заглянув в <Link href="/"><a>Каталог</a></Link></div>

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
                <Contacts />
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
            {count > 0 ?    <div >
                {size.width > 1200 ? <Offer title={'Вам также может пригодиться'} busket={1}/> : null }
                {size.width > 720 && size.width<1200 ? <Offer_768  title={'Вам также может пригодиться'} busket={1}/> : null }
                {size.width < 720  ? <Offer_360  title={'Вам также может пригодиться'} busket={1}
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
                            <div className={styles.number}><FormInput mask="+7 (999) 999-99-99" placeholder='+7 999 999-99-99' onChange={(evt) => setValue(evt)} /> </div>
                            {size.width < 720 ? <Selector_360 /> : <Contacts /> }
                        </div>
                        <div className={styles.rules}>
                            <div className={styles.checkbox} onClick={triggerCheckBox}><img className={checkbox ? null : styles.hide} src="/Seo/checkbox.svg" alt=""/></div>
                            <div className={styles.agree}> Соглашаюсь с <Link href=""><a>Правилами обработки персональных данных</a></Link></div>
                        </div>
                        <div className={styles.button}><button onClick={() => checkbox ? setOfferModal(true) : null}>Отправить заявку</button> </div>
                    </div>
                </div> : null
            }
        </>
    )
}

 export const Selector_360 =() => {
    const [example,setExample] = useState('Позвонить по Телефону');
    const [selectorStatus,setSelectorStatus] = useState(false)
    return(
        <>
            <div className={styles.wrapper}>
                <button type='button' className={cn(styles.selector, {
                    [styles.selectorActive]: selectorStatus === true
                })} onClick={() => {
                    setSelectorStatus(!selectorStatus)
                }}>{example} <div className={selectorStatus === true ? styles.selector_img_2 : null}> <img src="/purple_arrow.svg" className={selectorStatus === true ? styles.selector_img_style : styles.selector_img_style_2} alt=""/></div> </button>

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