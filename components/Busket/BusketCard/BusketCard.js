import React, {useEffect, useState} from "react";
import styles from './BusketCard.module.scss'
import {Selector} from "../../Select/Select";
import {setItemInCart, updateTotalPrice} from "../../../redux/cart/reducer";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from './../../../redux/cart/reducer'
import {updateSelect,updateCount,updateTime} from './../../../redux/cart/reducer'
import {useWindowSize} from "../../../Hooks/useWindowSize";
export const BusketCard = ( {detail1,detail2,mainDetail,mainDetail2,img,title,time,price,id,data,Priced  }) => {
    const size = useWindowSize();
    const [changedPrice,setChangedPrice] = useState(Number(data.Priced));
    const roundHundred = (value) =>{
        return Math.round(value/100)*100
    }
    const [a] = useState(data.Priced)
    const [b] = useState(roundHundred(Number(a) + (Number(a) * 0.5)))
    const [c] = useState(roundHundred(b + (Number(a) * 0.4)) )
    const [d] = useState(roundHundred(c + (Number(a) * 0.35)))
    const [e] = useState(roundHundred(d + (Number(a) * 0.3)))
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
    return(
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={styles.exit} src="/Modal/exit.svg" alt="" onClick={deleteItem}/>
                <div className={styles.img}>
                    <picture>

                        {size.width < 720 ? <div className={styles.img_360}>
                            <img className={styles.card_img} src={img} alt=""/>
                            <Selector setChangedPrice={setChangedPrice} duration={duration}  price={changedPrice} setTime={setTime} time={time} data={data} changedPrice={changedPrice} count={count} />
                        </div> :<img className={styles.card_img} src={img} alt=""/> }
                    </picture>
                </div>
                <div className={styles.text_content}>
                    <div className={styles.title} >{title} </div>
                    {size.width >720 ?
                    <div className={styles.details}>
                        <div className={styles.firstDescription} > <p>{mainDetail}</p> <span> {detail1}</span></div>
                        <div className={styles.secondDescription}> <p> {mainDetail2}</p> <span>{detail2}</span></div>
                    </div> : null
                    }
                    <div className={styles.text_content_footer}>
                        {size.width > 720 ? <Selector setChangedPrice={setChangedPrice} duration={duration}  price={changedPrice} setTime={setTime} time={time} data={data} changedPrice={changedPrice} count={count} /> : null}
                        <div className={styles.price}>
                        <div className={styles.number}>{data.changedPrice}₽</div>
                            <div className={styles.trigger}>
                                <div onClick={ ( ) => {

                                   if( count-1 > 0 ) {
                                       dispatch(updateSelect({...data, changedPrice: (data.time === '1 сутки' ? a :
                                               data.time === "2 суток" ? b :
                                                   data.time === '3 суток' ? c :
                                                       data.time === '4 суток' ? d :
                                                           data.time === '5 суток' ? e : null) * (count-1)}))

                                       setCount(count - 1)
                                   }
                                }}
                                className={styles.minus}>-</div>
                                <div>{count}</div>
                                <div className={styles.plus} onClick={ ( ) => {

                                    dispatch(updateSelect({...data, changedPrice: (data.time === "1 сутки" ? a :
                                            data.time === '2 суток' ? b :
                                                data.time === "3 суток" ? c :
                                                    data.time === '4 суток' ? d :
                                                        data.time === '5 суток' ? e : null )* (count +1)}))
                                    setCount(count + 1)
                                }

                                }>+</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}