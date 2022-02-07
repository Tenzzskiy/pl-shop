import styles from './LedSelector.module.scss'
import React, {useState} from "react";
import cn from "classnames";
import {updateSelect} from "../../../redux/cart/reducer";
import {useDispatch} from "react-redux";

export const LedSelector = ({check,changedPrice,setChangedPrice,time,count,Switch=1,checked,setCheck,select1,select2,data,setSwitch,num=0}) =>{
    const [example,setExample] = useState(Switch === 1 ? select1 : select2);
    const [selectorStatus,setSelectorStatus] = useState(false)
    const dispatch = useDispatch();
    const roundHundred = (value) =>{
        return Math.round(value/100)*100
    }


    const [a] = useState(Number(data.Priced === undefined ? data.price : data.Priced) )
    const [b] = useState(roundHundred(Number(a) + (Number(a) * 0.5)))
    const [c2] = useState(roundHundred(b + (Number(a) * 0.5)) )
    const [d2] = useState(roundHundred(c2 + (Number(a) * 0.45)))
    const [e2] = useState(roundHundred(d2 + (Number(a) * 0.4)))
    const [c] = useState(roundHundred(b + (Number(a) * 0.4)) )
    const [d] = useState(roundHundred(c + (Number(a) * 0.35)))
    const [e] = useState(roundHundred(d + (Number(a) * 0.3)))
    return(
        <>

            <div className={styles.wrapper}>
                <button type='button' className={cn(styles.selector,check ?  styles.disabled_selector : null,  {

                    [styles.selectorActive]: selectorStatus === true
                })} onClick={!check ? () => {
                    setSelectorStatus(!selectorStatus)
                } : null}>{example} <img src="/select_arrow.svg" className={selectorStatus === true ? styles.selector_img_style : null} alt=""/> </button>

                {selectorStatus && (
                    <div className={styles.selectorList}>
                        <button type="button" className={styles.selectorItem} onClick={() => {
                            setExample(select1)
                            setSelectorStatus(false)
                            setSwitch(1)
                            dispatch(updateSelect({...data, Switch: 1}))
                            setCheck(false)
                            dispatch(updateSelect({...data, checked: checked}))
                            if (num ===1  ){


                                        time === '1 сутки' ? setChangedPrice(a) :
                                            time === "2 суток" ? setChangedPrice(b) :
                                                time === '3 суток' ? setChangedPrice(c) :
                                                    time === '4 суток' ? setChangedPrice(d):
                                                        time === '5 суток' ? setChangedPrice(e) : null




                            }
                            dispatch(updateSelect({...data, changedPrice: (data.time === '1 сутки' ? a :
                                    data.time === "2 суток" ? b :
                                        data.time === '3 суток' ? c :
                                            data.time === '4 суток' ? d :
                                                data.time === '5 суток' ? e : null) * count }))
                        }}

                        >
                            {select1}
                        </button>
                        <button type="button" className={styles.selectorItem} onClick={() => {
                            setExample(select2)
                            setSelectorStatus(false)
                            setSwitch(2)
                            dispatch(updateSelect({...data, switch: 1}))
                            setCheck(true)
                            if (num ===1  ){


                                        time === '1 сутки' ? setChangedPrice(a) :
                                            time === "2 суток" ? setChangedPrice(b) :
                                                time === '3 суток' ? setChangedPrice(c2) :
                                                    time === '4 суток' ? setChangedPrice(d2):
                                                        time === '5 суток' ? setChangedPrice(e2) : null



                            }
                            dispatch(updateSelect({...data, checked: checked}))

                            dispatch(updateSelect({...data, changedPrice: (data.time === '1 сутки' ? a :
                                    data.time === "2 суток" ? b :
                                        data.time === '3 суток' ? c2 :
                                            data.time === '4 суток' ? d2 :
                                                data.time === '5 суток' ? e2 : null) * count }))
                        }}
                        >
                            {select2}
                        </button>
                    </div>
                )}


            </div>
        </>
    )
}
