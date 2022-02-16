import React, {useState} from "react";
import styles from './Sale.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import Sale_768 from "./Sale_768/Sale_768";
import Sale_360 from "./Sale_360/Sale_360";
import cn from "classnames";



const Sale = (  { })  =>{
    const [promo,setPromo] = useState(false);
const size =useWindowSize();
    return(
        <>
            {size.width > 1200 ?
                <div className={styles.sale}>
                    <img className={styles.sale_svg} src="/sale.svg" alt=""/>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.offer}>
                                <h2 className={styles.title}>Скидка на всё! </h2>
                                <div className={styles.promo}> Получи промокод по клику!</div>
                                <div className={styles.sale_title}>
                                    <div className={styles.button}>
                                        <div  className="col-md-3 col-sm-3 col-xs-6" onClick={() =>{setPromo(true)} }><a
                                                                                       className={cn("btn btn-sm animated-button victoria-two",
                                                                                       promo ? 'animated-button_disabled' : null
                                                                                       )}>
                                            <span>Хочу промокод</span>
                                            <span className={promo ? styles.plazma2 :  styles.plazma}>PLAZMA77</span>

                                        </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.time}>
                                    *При заказе от 30 000₽
                                </div>
                            </div>
                            <div className={styles.percents}>
                                10%

                            </div>
                        </div>
                    </div>

                </div> : null
            }
            {size.width < 1200 && size.width>720 ? <Sale_768 /> : null}
            {size.width < 720 ? <Sale_360 /> : null}
        </>
    )
}

export default Sale;