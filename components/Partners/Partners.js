import React from "react";
import styles from './Partners.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Partners_360} from "./Partners_360/Partners_360";
import {MyImage} from "../MyImage";


export const Partners = ( { }) =>{
    const size = useWindowSize();
    return(
        <section>
            {size.width > 720 ?
                <div className={styles.partners} itemScope itemType="http://schema.org/ImageObject" >
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <h2 className={styles.title}  itemProp='Наши клиенты'>
                                Наши клиенты
                            </h2>
                            <div className={styles.grid}>
                                <div className={styles.faded}>

                                    <MyImage width='300' height='150' itemProp="/assets/image/clients_1.jpg"  src={{default:"/assets/images/clients_1.jpg"}} alt="maximice" />
                                </div>
                                <div>


                                    <MyImage width='300' height='150'  itemProp="/assets/images/clients_2.jpg"   src={{default:"/assets/images/clients_2.jpg"}} alt="mega" />
                                </div>
                                <div className={styles.faded}>
                                    <MyImage width='300' height='150'  itemProp="/assets/images/clients_3.jpg"   src={{default:"/assets/images/clients_3.jpg"}} alt="volkswagen" />

                                </div>
                                <div >
                                    <MyImage width='300' height='150'  itemProp="/assets/images/clients_4.jpg"   src={{default:"/assets/images/clients_4.jpg"}} alt="porsche"/>
                                </div>
                                <div className={styles.faded}>

                                    <MyImage width='300' height='150'  itemProp="/assets/images/clients_5.jpg"   src={{default:"/assets/images/clients_5.jpg"}} alt="lacoste"/>
                                </div>
                                <div>
                                    <MyImage width='300' height='150'  itemProp="/assets/images/clients_6.jpg"  src={{default:"/assets/images/clients_6.jpg"}} alt="adidas"/>

                                </div>

                            </div>

                        </div>
                    </div>
                </div> : null

            }
            {size.width < 720 ?
                <Partners_360 /> : null
            }
        </section>
    )
}