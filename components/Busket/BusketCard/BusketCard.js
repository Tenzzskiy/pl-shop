import React, {useEffect, useRef, useState} from "react";
import styles from './BusketCard.module.scss'
import {Selector, useOnClickOutside} from "../../Select/Select";
import {setItemInCart, updateTotalPrice} from "../../../redux/cart/reducer";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from './../../../redux/cart/reducer'
import {updateSelect,updateCount,updateTime} from './../../../redux/cart/reducer'
import {useWindowSize} from "../../../Hooks/useWindowSize";
import {LedSelector} from "../../Shop/LedSelector/LedSelector";
export const BusketCard = ( {detail1,detail2,mainDetail,mainDetail2,img,title,time,price,id,data,Priced  }) => {

    const [Switch,setSwitch] = useState(data.Switch)
    const size = useWindowSize();
    const [changedPrice,setChangedPrice] = useState(Number(data.Priced));
    const roundHundred = (value) =>{
        return Math.round(value/100)*100
    }
    const [checked,setCheck] = useState(data.checked)
    const [a] = useState(data.Priced)
    const [b] = useState(roundHundred(Number(a) + (Number(a) * 0.5)))
    const [c] = useState(roundHundred(b + (Number(a) * 0.4)) )
    const [d] = useState(roundHundred(c + (Number(a) * 0.35)))
    const [e] = useState(roundHundred(d + (Number(a) * 0.3)))
    const [c2] = useState(roundHundred(b + (Number(a) * 0.5)) )
    const [d2] = useState(roundHundred(c2 + (Number(a) * 0.45)))
    const [e2] = useState(roundHundred(d2 + (Number(a) * 0.4)))
    const [count,setCount] = useState(data.count ? data.count : 1)
    const dispatch = useDispatch();
    const [duration,setTime] =useState(time);


    const deleteItem = ( ) =>{
        dispatch(deleteItemFromCart(id))
    }
    useEffect(() => {
        dispatch(updateSelect(data));
        // dispatch(updateCount({...data, count}));
        dispatch(updateTime({data}))

    }, [changedPrice])

    useEffect(() => {
        dispatch(updateCount({...data, count}));
    }, [count])
    const details = () =>{
        if (Number(data.id) >=25 && Number(data.id) <=34 ){
            return(
                <div className={styles.ledSelector}>
                    <LedSelector count={count} data={data} select1={data.select1} select2={data.select2} checked={checked} Switch={Switch} setSwitch={setSwitch} setCheck={setCheck}/>
                </div>

            )

        } else {
            return(
                <div className={styles.details}>
                    <div className={styles.firstDescription} > <p>{mainDetail}</p> <span>
                            {detail1}</span>

                    </div>

                    <div className={styles.secondDescription}> <p> {mainDetail2}</p> <span>{detail2}</span></div>
                </div>
            )
        }
    }

    return(
        <>
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.hit}>
                    {data.total === "1" ?  <img src="/hit.svg" alt=""/> : Number(data.total) === 2 ?  <img src="/profitable.svg" alt=""/> : null}

                </div>
                <svg className={styles.exit} onClick={deleteItem} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-0.5" x2="27.6923" y2="-0.5" transform="matrix(0.707107 0.707106 -0.707107 0.707106 9.78979 10.2101)" stroke="#575786"/>
                    <line y1="-0.5" x2="28.2843" y2="-0.5" transform="matrix(-0.707107 0.707107 -0.707108 -0.707106 29.4075 9.40747)" stroke="#575786"/>
                </svg>


                <div className={styles.img}>
                    <picture>

                        {size.width < 720 ? <div className={styles.img_360}>
                            <img className={styles.card_img} src={img} alt={title}/>
                            <Selector checked={data.checked} setChangedPrice={setChangedPrice} duration={duration}  price={changedPrice} setTime={setTime} time={time} data={data} changedPrice={changedPrice} count={count} />
                        </div> :<img className={styles.card_img} src={img} alt={title}/> }
                    </picture>
                </div>
                <div className={styles.text_content}>
                    <div className={styles.title} >{title} </div>
                    {size.width > 720 ? details() : null}
                    {/*<div className={styles.details}>*/}
                    {/*    <div className={styles.firstDescription} > <p>{mainDetail}</p> <span>*/}
                    {/*        {detail1}</span>*/}

                    {/*    </div>*/}

                    {/*    <div className={styles.secondDescription}> <p> {mainDetail2}</p> <span>{detail2}</span></div>*/}
                    {/*</div>*/}



                    <div className={styles.text_content_footer}>
                        {size.width > 720 ? <Selector checked={data.checked} setChangedPrice={setChangedPrice} duration={duration}  price={changedPrice} setTime={setTime} time={time} data={data} changedPrice={changedPrice} count={count} /> : null}
                        <div className={styles.price}>
                        <div className={styles.number}>{data.changedPrice}₽</div>
                            <div className={styles.trigger}>
                                <div onClick={ ( ) => {

                                if (checked === false){
                                    if( count-1 > 0 ) {
                                        dispatch(updateSelect({...data, changedPrice: (data.time === '1 сутки' ? a :
                                                data.time === "2 суток" ? b :
                                                    data.time === '3 суток' ? c :
                                                        data.time === '4 суток' ? d :
                                                            data.time === '5 суток' ? e : null) * (count-1)}))
                                        setCount(count - 1)

                                    }
                                } else {
                                    if( count-1 > 0 ) {
                                        dispatch(updateSelect({...data, changedPrice: (data.time === '1 сутки' ? a :
                                                data.time === "2 суток" ? b :
                                                    data.time === '3 суток' ? c2 :
                                                        data.time === '4 суток' ? d2 :
                                                            data.time === '5 суток' ? e2 : null) * (count-1)}))
                                        setCount(count - 1)

                                    }
                                }
                                }}
                                className={styles.minus}>-</div>
                                <div>{count}</div>
                                <div className={styles.plus} onClick={ ( ) => {

                                    if (checked === false){
                                        if( count+1 > 0 ) {
                                            dispatch(updateSelect({...data, changedPrice: (data.time === '1 сутки' ? a :
                                                    data.time === "2 суток" ? b :
                                                        data.time === '3 суток' ? c :
                                                            data.time === '4 суток' ? d :
                                                                data.time === '5 суток' ? e : null) * (count+1)}))
                                            setCount(count + 1)

                                        }
                                    } else {
                                        if( count+1 > 0 ) {
                                            dispatch(updateSelect({...data, changedPrice: (data.time === '1 сутки' ? a :
                                                    data.time === "2 суток" ? b :
                                                        data.time === '3 суток' ? c2 :
                                                            data.time === '4 суток' ? d2 :
                                                                data.time === '5 суток' ? e2 : null) * (count+1)}))
                                            setCount(count + 1)

                                        }
                                    }




                                }

                                }>+</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
        </>
    )
}