import React, {useRef, useState} from "react";
import styles from './ShopSelect.module.scss'
import cn from 'classnames'
import {useOnClickOutside} from "../Select/Select";


export const ShopSelector = ( {data,setCatalogue} ) =>{
    const [selectorStatus,setSelectorStatus] = useState(false)
    const ref = useRef();
    const [example,setExample] = useState("Сначала популярные");
    useOnClickOutside(ref, () => setSelectorStatus(false));




    return(
        <>
        <div className={styles.wrapper} ref={ref}>
            <button type='button' className={cn(styles.selector, {
                [styles.selectorActive]: selectorStatus === true,

            })} onClick={ () =>
                setSelectorStatus(!selectorStatus)
            }>{example}
                <svg className={cn(styles.select_arrow,selectorStatus ? styles.disable_arrow : null)} width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 1L5.5 5L1.5 1" stroke="white" stroke-width="1.5"/>
                </svg>


            </button>

            {selectorStatus && (
                <div className={styles.selectorList}>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('Сначала популярные')
                        setSelectorStatus(false)
                        setCatalogue(data)
                    }}>
                        Сначала популярные

                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('Цены по возрастанию')
                        setSelectorStatus(false)

                        setCatalogue((mainCatalogue) => [...mainCatalogue].sort((a,b) => Number(a.price) - Number(b.price)) )

                    }}>
                        Цены по возрастанию
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('Цены по убыванию')
                        setSelectorStatus(false)
                        setCatalogue((mainCatalogue) => [...mainCatalogue].sort((a,b) => Number(b.price) - Number(a.price)) )
                    }}>
                        Цены по убыванию
                    </button>
                </div>
            )}


        </div>
        </>
    )
}

