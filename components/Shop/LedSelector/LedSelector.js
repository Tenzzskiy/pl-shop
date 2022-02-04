import styles from './LedSelector.module.scss'
import React, {useState} from "react";
import cn from "classnames";
import {updateSelect} from "../../../redux/cart/reducer";
import {useDispatch} from "react-redux";

export const LedSelector = ({select1,select2,data,setSwitch}) =>{
    const [example,setExample] = useState(select1);
    const [selectorStatus,setSelectorStatus] = useState(false)
    const dispatch = useDispatch();
    let count = 1;
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
                            setExample(select1)
                            setSelectorStatus(false)
                            setSwitch(1)


                        }}>
                            {select1}
                        </button>
                        <button type="button" className={styles.selectorItem} onClick={() => {
                            setExample(select2)
                            setSelectorStatus(false)
                            setSwitch(2)

                        }}>
                            {select2}
                        </button>
                    </div>
                )}


            </div>
        </>
    )
}
