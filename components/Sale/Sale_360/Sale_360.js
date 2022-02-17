import React, {useState} from "react";
import styles from './Sale_360.module.scss'
import cn from "classnames";
import {Sale_img} from "../../svg/sale";



 export const Sale_360 = ({ })  =>{
     const [promo,setPromo] = useState(false);
    return(
        <>
            <div className={styles.sale}>
                <Sale_img />
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.offer}>
                            <div className={styles.title}>Скидка на всё ! </div>


                        </div>
                        <div className={styles.percents}>
                            10%

                        </div>
                        <div className={styles.timer}>
                            <div className={styles.promo}> Получи промокод по клику!</div>

                            <div className={styles.button}>
                                <div className={styles.pointer}>
                                <div className="col-md-3 col-sm-3 col-xs-6" onClick={() => {
                                    setPromo(true);
                                }}><a href="#"
                                      className={cn("btn btn-sm animated-button victoria-two",
                                          promo ? 'animated-button_disabled' : null
                                      )} >
                                    <span>Хочу промокод</span>
                                    <span className={promo ? styles.plazma2 : styles.plazma}>PLAZMA77</span>

                                </a>
                                </div>
                                </div>
                            </div>
                            <div className={styles.sale_title}> *При заказе от 30 000₽ </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sale_360;