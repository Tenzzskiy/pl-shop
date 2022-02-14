import styles from './FeedBack.module.scss'
import React, { useState} from "react";
import {useWindowSize} from "../../Hooks/useWindowSize";
import {FormInput} from "../Input";
import Link from "next/link";
import {Selector_758} from "../Busket/Busket";
import {sendEmail} from "../../sources/utils/helpers";

const FeedBack = ( {setOfferModal}) => {
    const [checkbox,setCheckBox] =useState(true);
    const triggerCheckBox = () =>{
        setCheckBox(!checkbox);
    }
    const [value,setValue] = useState(null);
    const [input,setInput] = useState(false);
    const [example,setExample] = useState('Позвонить по Телефону');
    const [phone,setPhone] = useState({
        phone:" ",
        type: example,
    });
    const size = useWindowSize();
    return (
        <section>

            <div className={styles.feedback}>
                {size.width < 720 ?
                    <svg  className={styles.img} width="360" preserveAspectRatio="none" height="634" viewBox="0 0 360 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L360 24V634L0 610V0Z" fill="#CFCFDC"/>
                        <path d="M360 0L0 57.788V627L360 569.212V0Z" fill="#9B8BB6"/>
                        <path d="M0 27L360 82.2995V627L0 571.7V27Z" fill="url(#paint0_linear_963_18758)"/>
                        <defs>
                            <linearGradient id="paint0_linear_963_18758" x1="0" y1="327.18" x2="360" y2="327.18" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#07F1D3"/>
                                <stop offset="0.572917" stopColor="#3A65F1"/>
                                <stop offset="0.984375" stopColor="#B93DF6"/>
                            </linearGradient>
                        </defs>
                    </svg>

                     : null}
                {size.width > 1200 ?
                    <svg className={styles.img} width="2000" height="684" viewBox="0 0 1280 684" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1280 684L0 588.135V0L1280 82.1124V684Z" fill="#CFCFDC"/>
                        <path d="M0 660.225L1280 513.844V12.8021L0 154.122V660.225Z" fill="#9B8BB6"/>
                        <path d="M0 12.8018L1280 159.182V660.224L0 518.905V12.8018Z" fill="url(#paint0_linear_891_388)"/>
                        <defs>
                            <linearGradient id="paint0_linear_891_388" x1="0" y1="336.708" x2="1280" y2="336.708" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#07F1D3"/>
                                <stop offset="0.572917" stopColor="#3A65F1"/>
                                <stop offset="0.984375" stopColor="#B93DF6"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    : null}
                { size.width > 720 && size.width < 1200?
                    <svg className={styles.img} width="768" preserveAspectRatio="none" height="443" viewBox="0 0 768 443" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.5L768 42.2612V443L0 408.759V0.5Z" fill="#CFCFDC"/>
                        <path d="M768 10.2021L-6.10352e-05 47.9919V435.407L768 382.431V10.2021Z" fill="#9B8BB6"/>
                        <path d="M0 27.9189L768 64.0758V420.221L0 384.064V27.9189Z" fill="url(#paint0_linear_411_53821)"/>
                        <defs>
                            <linearGradient id="paint0_linear_411_53821" x1="0" y1="224.188" x2="768" y2="224.188" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#07F1D3"/>
                                <stop offset="0.572917" stopColor="#3A65F1"/>
                                <stop offset="0.984375" stopColor="#B93DF6"/>
                            </linearGradient>
                        </defs>
                    </svg>

                   :  null
                }


                <div className={styles.feedback_container}>

                <div className={styles.feedback_content}>
                    <div className={styles.feedback_flex}>
                    <div className={styles.title}>
                        Остались вопросы?
                    </div>
                        <div className={styles.description}>
                            Звоните, проконсультируем и всё расскажем
                        </div>
                        <div className={styles.number}>
                            <a href="tel:+7 (495) 321 54 76"> +7 495 321-54-76</a>
                        </div>
                        <div className={styles.request}>
                            Или оставьте заявку
                        </div>

                        <div className={styles.contacts}>
                            <FormInput mask="+7 (999) 999-99-99"   placeholder='+7 999 999-99-99' onChange={(evt) => {


                                {
                                    (evt?.includes('_')) && (evt?.includes(' ')) ?  setInput(false): null ;
                                }
                                {
                                    (!(evt?.includes('_')) && (evt?.includes(' '))) ?  setInput(true): null ;
                                }
                                setPhone({...phone, phone:evt})

                            }} value={value}/>
                        <button
                            onClick={ () =>

                            {
                                if ( checkbox === true &&  input ===true){
                                    sendEmail( " ",phone,"phone"," ")
                                    setOfferModal(true)

                                }
                            }
                        }
                        >Отправить заявку </button>
                        <Selector_758 phone={phone} setPhone={setPhone} example={example} setExample={setExample}/>


                        </div>
                        <div className={styles.privacy_flex}>
                        <div className={styles.checkbox} onClick={triggerCheckBox}><img className={checkbox ? null : styles.hide} src="/Seo/checkbox.svg" alt=""/></div>
                        <div className={styles.agree}> Соглашаюсь с <Link href="/privacy"><a rel='nofollow'>Правилами обработки персональных данных</a></Link></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </section>
    )
}

export default FeedBack;