import React, { useState} from "react";
import styles from './Select.module.scss'
import cn from 'classnames'


export const Selector = ( {changedPrice,setChangedPrice,price,setTime} ) =>{
    const [selectorStatus,setSelectorStatus] = useState(false)
    const [example,setExample] = useState('1 сутки');
    function roundHundred(value){
        return Math.round(value/100)*100
    }
    const [a] = useState(price)
    const [b] = useState(roundHundred(Number(a) + (Number(a) * 0.5)))
    const [c] = useState(roundHundred(b + (Number(a) * 0.4)) )
    const [d] = useState(roundHundred(c + (Number(a) * 0.35)))
    const [e] = useState(roundHundred(d + (Number(a) * 0.3)))
    return(
        <>
        <div className={styles.wrapper}>
            <button type='button' className={cn(styles.selector, {
                [styles.selectorActive]: selectorStatus === true
            })} onClick={() => {
                setSelectorStatus(!selectorStatus)
            }}>{example} </button>

            {selectorStatus && (
                <div className={styles.selectorList}>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('1 сутки')
                        setSelectorStatus(false)
                        setChangedPrice(a)
                        setTime('1 сутки');
                    }}>
                        1 сутки
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('2 суток')
                        setSelectorStatus(false)
                        setChangedPrice(b)
                        setTime('2 суток');
                    }}>
                        2 суток
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('3 суток')
                        setSelectorStatus(false)
                        setChangedPrice(c)
                        setTime('3 суток');
                    }}>
                        3 суток
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('4 суток')
                        setSelectorStatus(false)
                        setChangedPrice(d )
                        setTime('4 суток');
                    }}>
                        4 суток
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('5 суток')
                        setSelectorStatus(false)
                        setChangedPrice(e )
                        setTime('5 суток');
                    }}>
                        5 суток
                    </button>
                </div>
            )}


        </div>
        </>
    )
}