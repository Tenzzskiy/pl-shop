import styles from './SitesModal.module.scss'
import cs from 'classnames'
import React, {useState} from "react";
import {FormInput} from "../Input";
import Link from "next/link";
import {Selector} from "../Select/Select";
import Contacts from "../Contacts/Contacts";

export const SitesModal = ({touchpanel=0, setTouchPanel,TouchPanel,setOfferModal,setSites,sites,title='Заказать разработку ПО'}) =>{
    const [number,setNumber] =useState();
    const [checkbox,setCheckBox] =useState(false);
    const triggerCheckBox = () =>{
        setCheckBox(!checkbox);
    }
    return(
        <>
            <div className={sites || TouchPanel ? cs(styles.modal,styles.active) : styles.modal } onClick={() => {

                {touchpanel === 1 ? setTouchPanel(false) : setSites(false)}
            }
            }>
                <div className={sites || TouchPanel ? cs(styles.content,styles.content_active) : styles.content} onClick={e => e.stopPropagation()}>
                    <div className={styles.exit} onClick={() => {

                        {
                            touchpanel === 1 ? setTouchPanel(false) : setSites(false);
                        }
                    }}><img src="/Modal/exit.svg" alt=""/> </div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}> Мы оперативно свяжемся с вами для уточнения деталей!</div>
                    <div className={styles.number}>
                    Телефон<span>*</span>
                    </div>
                    <div className={styles.input}>
                        <FormInput mask="+7 (999) 999-99-99" onChange={(evt) => setNumber(evt)} />
                    </div>
                    <div className={styles.select}>
                        <div className={styles.number}>Предпочитаемый способ связи </div>
                        <Contacts/>
                    </div>
                        <div className={styles.rules}>
                            <div className={styles.checkbox} onClick={triggerCheckBox}><img className={checkbox ? null : styles.hide} src="/Seo/checkbox.svg" alt=""/></div>
                            <div className={styles.agree}> Соглашаюсь с <Link href=""><a>Правилами обработки персональных данных</a></Link></div>
                        </div>

                        <div className={styles.button}>
                        <button onClick={checkbox ? () => {
                            {
                                touchpanel === 1 ? setTouchPanel(false) : setSites(false);
                            }
                            setOfferModal(true)
                        } : null}>Отправить заявку</button>
                        </div>


                </div>
            </div>
        </>
    )
}
export default SitesModal;