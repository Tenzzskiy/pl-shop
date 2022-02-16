import styles from './left.module.scss'
import React from "react";
import {MyImage} from "../../MyImage";





export const Left =({img,title,description }) =>{
    return(
        <>
            <div className={styles.container} itemScope itemType="http://schema.org/ImageObject" >
            <div className={styles.content}>
            <div className={styles.grid}>
            <div className={styles.img}>
                <MyImage className={styles.background_img} src={{default :img}} alt={title}/>
            </div>
                <div  className={styles.flex}>
                <h3 className={styles.title} itemProp="name">
                    {title}
                </h3>
                    <h4 className={styles.description} itemProp="description">
                        {description}
                    </h4>

                </div>
            </div>
            </div>
            </div>
        </>
    )
}