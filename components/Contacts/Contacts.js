import styles from './Contacts.module.scss'
import React, {useState} from "react";
import cn from "classnames";

export const Contacts = () =>{
const [example,setExample] = useState('Позвонить');
    const [selectorStatus,setSelectorStatus] = useState(false)

    return(
        <>

            <div className={styles.wrapper}>
                <button type='button' className={cn(styles.selector, {
                    [styles.selectorActive]: selectorStatus === true
                })} onClick={() => {
                    setSelectorStatus(!selectorStatus)
                }}>{example} <img src="/select_arrow.svg" className={selectorStatus === true ? styles.selector_img_style : null} alt=""/> </button>

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