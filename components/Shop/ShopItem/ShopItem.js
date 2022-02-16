import React, {FunctionComponent, ReactNode, useState} from "react";
import styles from './ShopItem.module.scss'
import { Selector} from "../../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart, updateTotalPrice} from '../../../redux/cart/reducer.js'
import Link from "next/link";
import {LedSelector} from "../LedSelector/LedSelector";
import {MyImage} from "../../MyImage";
import cn from "classnames";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import BlobCoverReverse from "../../background/background";
import {useWindowSize} from "../../../Hooks/useWindowSize";


export const ShopItem = ( { total,detail,select1,select2,data,children,price,count,img,title,active,setActive,detail1,detail2,mainDetail,mainDetail2,id,...props}) =>{
    const [checked,setCheck] = useState(false)
    const size=useWindowSize();
    const [background,setBackground] = useState(false);
    const num = 1;
   const item = true;
    const dispatch = useDispatch();
    const [time, setTime] = useState('1 сутки');
    const Priced = Number(price);
    const [changedPrice,setChangedPrice] = useState(Number(price))
    const items = useSelector(state => state.cart.itemsInCart);
   const [Switch,setSwitch] = useState(1)
    const [store,setStore] = useLocalStorage('store',[])
    const handleClick =() =>{
        dispatch(setItemInCart({total,img,changedPrice,id,title,time,Priced,select1,select2,mainDetail,mainDetail2,detail1,detail2,Switch,checked,detail}));
        dispatch(updateTotalPrice(Number(changedPrice)))
        setActive(true);
        setStore(items)
    }

const check = () =>{
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            return true;

        }
    }
    return false;

}

    return(
        <>
            <div className={styles.container} itemScope itemType="http://schema.org/Product">
            <div className={styles.content}>
                <div className={styles.hit}>
                    {data.total === "1" ?  <MyImage itemProp="contentUrl" src={{default: "/hit.svg"}} alt="Хит" /> : Number(data.total) === 2 ?  <MyImage itemProp="contentUrl" src={{default: "/profitable.svg"}} alt="Выгодно" /> : null}

                </div>
                <div className={styles.img} >
                    <picture>
                        <MyImage itemProp="contentUrl" src={{default: img}} alt={title} />

                    </picture>
                </div>
                <div className={styles.flex}>
                    <h4 className={styles.title} itemProp="name">{title}</h4>
                    {count === 1 ?
                        <>
                            {detail1 !== undefined ?  <div className={styles.detail}>

                                <span > {mainDetail}</span>
                                <p itemProp="description">{detail1}</p>
                            </div> : null}
                            {detail2 !== undefined ?  <div className={styles.detail}>

                                <span>{mainDetail2}</span>
                                <p itemProp="description"> {detail2}</p>
                            </div>
                             : null}
                        </> : null
                    } {count === 0 ?
                    <div className={styles.detailSelector}>

                        <span> {detail}</span>
                        <LedSelector check={check()} changedPrice={changedPrice} time={time} num={num} setChangedPrice={setChangedPrice} item={item} select1={select1} select2={select2} detail={detail} data={data} setSwitch={setSwitch} setCheck={setCheck} checked={checked}/>
                    </div>

                     : null}

                    <div className={cn(styles.card_footer,Number(data.count) === 1 ? styles.justify : null )} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <meta itemProp="price" content={changedPrice}   />
                        <meta itemProp="priceCurrency" content="RUB" />
                        <link itemProp="availability" href="http://schema.org/InStock" />


                                {Number(data.count) === 1 ? null : <Selector item={item} checked={checked} changedPrice={changedPrice} setChangedPrice={setChangedPrice} data={data} price={data.price} setTime={setTime} time={time} check={check()} />}
                        <span> {changedPrice}₽ </span>
                        { check() ?

                            <Link href="/busket"><a rel='nofollow'>  <div className={styles.disabled_busket}>
                                <img src="/ShopItem/selected_busket.svg" alt=""/>
                            </div></a></Link> :

                            <div className={styles.bucket} onClick={handleClick} onMouseEnter={() => setBackground(true)}
                                 onMouseLeave={() =>setBackground(false) }>

                                {background && size.width>720 ? <BlobCoverReverse classNames={styles.svg} width={59} height={40} color1="#C038F5" color2='#3496FE'/> : null}
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.67692 0.276855C1.42251 0.276855 1.17851 0.375098 0.998616 0.549972C0.818717 0.724845 0.717651 0.962024 0.717651 1.20933C0.717651 1.45664 0.818717 1.69382 0.998616 1.86869C1.17851 2.04357 1.42251 2.14181 1.67692 2.14181H2.14889C2.35718 2.14216 2.5597 2.20841 2.72584 2.33054C2.89198 2.45267 3.01271 2.62405 3.06979 2.81879L6.1126 13.1693C6.28469 13.7534 6.64776 14.2672 7.14689 14.6329C7.64602 14.9986 8.25408 15.1965 8.87914 15.1965H17.645C18.2202 15.1966 18.7823 15.0291 19.2587 14.7156C19.7351 14.4021 20.1039 13.957 20.3175 13.4378L23.1454 6.56361C23.2617 6.28075 23.3049 5.97451 23.2713 5.67166C23.2377 5.36882 23.1283 5.07858 22.9526 4.82633C22.777 4.57408 22.5404 4.36749 22.2637 4.22462C21.9869 4.08175 21.6784 4.00695 21.365 4.00676H5.41425L4.91351 2.30592C4.74185 1.72177 4.37922 1.20781 3.88045 0.841743C3.38167 0.475672 2.77386 0.277386 2.14889 0.276855H1.67692ZM7.95824 12.6545L5.96295 5.87171H21.3631L18.5352 12.7459C18.4639 12.9188 18.341 13.0669 18.1824 13.1713C18.0237 13.2757 17.8365 13.3315 17.645 13.3315H8.87914C8.67084 13.3312 8.46832 13.2649 8.30218 13.1428C8.13604 13.0207 8.01531 12.8493 7.95824 12.6545Z" fill="white"/>
                                    <path d="M9.3512 21.7238C9.72912 21.7238 10.1033 21.6514 10.4525 21.5108C10.8016 21.3702 11.1189 21.1642 11.3861 20.9044C11.6534 20.6447 11.8653 20.3363 12.01 19.9969C12.1546 19.6575 12.229 19.2937 12.229 18.9263C12.229 18.559 12.1546 18.1952 12.01 17.8558C11.8653 17.5164 11.6534 17.208 11.3861 16.9483C11.1189 16.6885 10.8016 16.4824 10.4525 16.3418C10.1033 16.2013 9.72912 16.1289 9.3512 16.1289C8.58796 16.1289 7.85598 16.4236 7.31628 16.9483C6.77659 17.4729 6.47339 18.1844 6.47339 18.9263C6.47339 19.6683 6.77659 20.3798 7.31628 20.9044C7.85598 21.429 8.58796 21.7238 9.3512 21.7238ZM9.3512 19.8588C9.09679 19.8588 8.8528 19.7606 8.6729 19.5857C8.493 19.4108 8.39193 19.1736 8.39193 18.9263C8.39193 18.679 8.493 18.4418 8.6729 18.267C8.8528 18.0921 9.09679 17.9939 9.3512 17.9939C9.60562 17.9939 9.84961 18.0921 10.0295 18.267C10.2094 18.4418 10.3105 18.679 10.3105 18.9263C10.3105 19.1736 10.2094 19.4108 10.0295 19.5857C9.84961 19.7606 9.60562 19.8588 9.3512 19.8588Z" fill="white"/>
                                    <path d="M17.0251 21.7238C17.403 21.7238 17.7772 21.6514 18.1264 21.5108C18.4755 21.3702 18.7928 21.1642 19.06 20.9044C19.3272 20.6447 19.5392 20.3363 19.6838 19.9969C19.8285 19.6575 19.9029 19.2937 19.9029 18.9263C19.9029 18.559 19.8285 18.1952 19.6838 17.8558C19.5392 17.5164 19.3272 17.208 19.06 16.9483C18.7928 16.6885 18.4755 16.4824 18.1264 16.3418C17.7772 16.2013 17.403 16.1289 17.0251 16.1289C16.2618 16.1289 15.5299 16.4236 14.9902 16.9483C14.4505 17.4729 14.1473 18.1844 14.1473 18.9263C14.1473 19.6683 14.4505 20.3798 14.9902 20.9044C15.5299 21.429 16.2618 21.7238 17.0251 21.7238ZM17.0251 19.8588C16.7707 19.8588 16.5267 19.7606 16.3468 19.5857C16.1669 19.4108 16.0658 19.1736 16.0658 18.9263C16.0658 18.679 16.1669 18.4418 16.3468 18.267C16.5267 18.0921 16.7707 17.9939 17.0251 17.9939C17.2795 17.9939 17.5235 18.0921 17.7034 18.267C17.8833 18.4418 17.9844 18.679 17.9844 18.9263C17.9844 19.1736 17.8833 19.4108 17.7034 19.5857C17.5235 19.7606 17.2795 19.8588 17.0251 19.8588Z" fill="white"/>
                                </svg>

                            </div>





                        }


                    </div>
                </div>
            </div>
            </div>
        </>
    )
}