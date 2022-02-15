import styles from './SitesModal.module.scss'
import cs from 'classnames'
import React, {useEffect, useRef, useState} from "react";
import {FormInput} from "../Input";
import Link from "next/link";
import {Selector, useOnClickOutside} from "../Select/Select";
import Contacts from "../Contacts/Contacts";
import {Selector_360} from "../Busket/Busket";
import {sendEmail} from "../../sources/utils/helpers";
import {useSelector} from "react-redux";
import cn from "classnames";

export const SitesModal = ({touchpanel=0, setTouchPanel,TouchPanel,setOfferModal,setSites,sites,title='Заказать разработку ПО'}) =>{
    const button = useRef();
    useOnClickOutside(button, () => setError(false));
    const setInput = (id) =>{
        if (id ===1 ) {
            setNumber(false);
            setError(true);
        } else {
            setNumber(true);
            setError(false);
        }
    }
    const [error,setError] = useState(false)
    const [input,setNumber] =useState(false);
    const [checkbox,setCheckBox] =useState(true);
    const [disabled,setDisabled] = useState(true)
    const triggerCheckBox = () =>{
        setCheckBox(!checkbox);
    }
    const [example,setExample] = useState('Позвонить по Телефону');
    const [phone,setPhone] = useState({
        phone:" ",
        type: example,
    });
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
                    <div className={(cn(styles.error_disabled,error ? styles.error :  ( checkbox === true &&  input ===true ? styles.error_disabled : null)     ) )}>
                        Введите корректный номер телефона
                    </div>
                    <div ref={button} className={(cn(styles.input, error ? checkbox === true &&  input ===true ? null  :styles.number_disabled : null ))}>
                        <FormInput mask="+7 (999) 999-99-99" placeholder='+7 999 999-99-99' onChange={(evt) => {
                            {
                                (evt?.includes('_')) && (evt?.includes(' ')) ?  setInput(1): null ;
                            }
                            {
                                (!(evt?.includes('_')) && (evt?.includes(' '))) ?  setInput(): null ;
                            }
                            setPhone({...phone,phone:evt})

                        }} />
                    </div>
                    <div className={styles.select}>
                        <div className={styles.number}>Предпочитаемый способ связи </div>
                        <Selector_360 phone={phone} setPhone={setPhone} example={example} setExample={setExample}/>
                    </div>
                        <div className={styles.rules}>
                            <div className={styles.checkbox} onClick={triggerCheckBox}><img className={checkbox ? null : styles.hide} src="/Seo/checkbox.svg" alt=""/></div>
                            <div className={styles.agree}> Соглашаюсь с <Link href="/privacy"><a rel='nofollow'>Правилами обработки персональных данных</a></Link></div>
                        </div>

                        <div className={cn(styles.button,checkbox === true &&  input ===true ? null : styles.disabled)} >
                        <button onClick={ () =>

                        {
                                if ( checkbox === true && touchpanel === 1 && input ===true){
                                    setTouchPanel(false);
                                    setOfferModal(true)
                                    sendEmail( " ",phone,"phone"," ")
                                } else if (checkbox ===true && touchpanel === 0 && input ===true){
                                    setSites(false)
                                    setOfferModal(true)
                                    sendEmail( " ",phone,"phone"," ")
                                }
                        }
                        }



                        >Отправить заявку</button>
                        </div>


                </div>
            </div>
        </>
    )
}
export default SitesModal;