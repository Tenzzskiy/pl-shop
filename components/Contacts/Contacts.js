import styles from './Contacts.module.scss'
import React, {useRef, useState} from "react";
import cn from "classnames";
import {useOnClickOutside} from "../Select/Select";


export const Contacts = () =>{
const [example,setExample] = useState('Позвонить');
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
                }}>{example}

                    <svg className={selectorStatus === true ? styles.selector_img_style : null} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0.499999L6 5.5L1 0.499999" stroke="#0E0E52"/>
                    </svg>

                </button>

                {selectorStatus && (
                    <div className={styles.selectorList}>
                        <button type="button" className={styles.selectorItem} onClick={() => {
                            setExample('Позвонить')
                            setSelectorStatus(false)
                        }}>
                            Позвонить
                        </button>
                        <button type="button" className={styles.selectorItem} onClick={() => {
                            setExample('Telegram')
                            setSelectorStatus(false)

                        }}>
                            Telegram
                        </button>
                        <button type="button" className={styles.selectorItem} onClick={() => {
                            setExample('WhatsApp')
                            setSelectorStatus(false)
                        }}>
                            WhatsApp
                        </button>
                    </div>
                )}


            </div>
        </>
    )
}
export default Contacts;