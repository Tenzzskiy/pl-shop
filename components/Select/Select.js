import React, {useRef, useState} from "react";
import styles from './Select.module.scss'
import cn from 'classnames'
import {useDispatch} from "react-redux";
import {updateSelect,updateTime} from './../../redux/cart/reducer'
import {useEffect} from "react";

export function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },

        [ref, handler]
    );
}
export const Selector = ( {item,checked,check,setChangedPrice,price,setTime,time,data,Priced,count=1} ) =>{
    const [selectorStatus,setSelectorStatus] = useState(false)
    const ref = useRef();
    const [example,setExample] = useState(time);
    useOnClickOutside(ref, () => setSelectorStatus(false));
     const roundHundred = (value) =>{
        return Math.round(value/100)*100
    }

    const dispatch = useDispatch();
    const [a] = useState(Number(price) )
    const [b] = useState(roundHundred(Number(a) + (Number(a) * 0.5)))
    const [c] = useState(roundHundred(b + (Number(a) * 0.4)) )
    const [d] = useState(roundHundred(c + (Number(a) * 0.35)))
    const [e] = useState(roundHundred(d + (Number(a) * 0.3)))


    const [c2] = useState(roundHundred(b + (Number(a) * 0.5)) )
    const [d2] = useState(roundHundred(c2 + (Number(a) * 0.45)))
    const [e2] = useState(roundHundred(d2 + (Number(a) * 0.4)))

    return(
        <>
        <div className={styles.wrapper} ref={ref}>
            <button type='button' className={cn(styles.selector,check ?  styles.disabled_button : null, {
                [styles.selectorActive]: selectorStatus === true,

            })} onClick={!check ? () => {
                setSelectorStatus(!selectorStatus)
            } : null}>{example}<img src="/select_arrow.svg" alt="" className={cn(styles.select_arrow,selectorStatus ? styles.disable_arrow : null)}/></button>

            {selectorStatus && (
                <div className={styles.selectorList}>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('1 сутки')
                        setSelectorStatus(false)
                        setChangedPrice(a)
                        setTime('1 сутки');
                        {checked ? dispatch(updateSelect({...data, changedPrice: a*count,time: "1 сутки"})) :
                            dispatch(updateSelect({...data, changedPrice: a*count,time: "1 сутки"}))}

                    }}>
                        1 сутки

                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('2 суток')
                        setSelectorStatus(false)
                        setChangedPrice(b)
                        setTime('2 суток');
                        {checked ?
                            dispatch(updateSelect({...data, changedPrice: roundHundred(Number(a) + (Number(a) * 0.5)) *count,time: "2 суток"})) :
                            dispatch(updateSelect({...data, changedPrice: roundHundred(Number(a) + (Number(a) * 0.5)) *count,time: "2 суток"}))
                        }

                    }}>
                        2 суток
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('3 суток')
                        setSelectorStatus(false)
                        {checked ?  setChangedPrice(c2) :  setChangedPrice(c)}
                        setTime('3 суток');

                        {checked  ?
                            dispatch(updateSelect({...data, changedPrice: roundHundred(Number(b) + (Number(a) * 0.5)) *count,time: "3 суток"})) :
                            dispatch(updateSelect({...data, changedPrice: roundHundred(Number(b) + (Number(a) * 0.4)) *count,time: "3 суток"}))
                        }

                    }}>
                        3 суток
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('4 суток')
                        setSelectorStatus(false)
                        {checked ?  setChangedPrice(d2) :  setChangedPrice(d)}
                        setTime('4 суток');
                        {checked ?
                            dispatch(updateSelect({...data, changedPrice: roundHundred(Number(c2) + (Number(a) * 0.45)) *count,time: "4 суток"})) :
                            dispatch(updateSelect({...data, changedPrice: roundHundred(Number(c) + (Number(a) * 0.35)) *count,time: "4 суток"}))
                        }


                    }}>
                        4 суток
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('5 суток')
                        setSelectorStatus(false)
                        {checked ?  setChangedPrice(e2) :  setChangedPrice(e)}

                        setTime('5 суток');
                        { checked ?
                            dispatch(updateSelect({...data, changedPrice: roundHundred(Number(d2) + (Number(a) * 0.4)) *count,time: "5 суток"})) :
                            dispatch(updateSelect({...data, changedPrice: roundHundred(Number(d) + (Number(a) * 0.3)) *count,time: "5 суток"}))
                        }


                    }}>
                        5 суток
                    </button>
                </div>
            )}


        </div>
        </>
    )
}
