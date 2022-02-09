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
    const [count,setCount] = useState(1)
    const dispatch = useDispatch();
    const [duration,setTime] =useState(time);


    const deleteItem = ( ) =>{
        dispatch(deleteItemFromCart(id))
    }
    useEffect(() => {
        dispatch(updateSelect(data));
        dispatch(updateCount(data));
        dispatch(updateTime({data}))

    }, [changedPrice])
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
                <img className={styles.exit} src="/Modal/exit.svg" alt="exit" onClick={deleteItem}/>
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
                                        console.log('done1')
                                    }
                                } else {
                                    if( count-1 > 0 ) {
                                        dispatch(updateSelect({...data, changedPrice: (data.time === '1 сутки' ? a :
                                                data.time === "2 суток" ? b :
                                                    data.time === '3 суток' ? c2 :
                                                        data.time === '4 суток' ? d2 :
                                                            data.time === '5 суток' ? e2 : null) * (count-1)}))
                                        setCount(count - 1)
                                        console.log('done2')
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
                                            console.log('done1')
                                        }
                                    } else {
                                        if( count+1 > 0 ) {
                                            dispatch(updateSelect({...data, changedPrice: (data.time === '1 сутки' ? a :
                                                    data.time === "2 суток" ? b :
                                                        data.time === '3 суток' ? c2 :
                                                            data.time === '4 суток' ? d2 :
                                                                data.time === '5 суток' ? e2 : null) * (count+1)}))
                                            setCount(count + 1)
                                            console.log('done2')
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