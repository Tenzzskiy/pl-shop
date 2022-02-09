import styles from './left.module.scss'
import React from "react";





export const Left =({img,title,description }) =>{
    return(
        <>
            <div className={styles.container} itemScope itemType="http://schema.org/ImageObject" >
            <div className={styles.content}>
            <div className={styles.grid}>
            <div className={styles.img}>
                <img  itemProp="contentUrl" className={styles.background_img} src={img} alt={title}/>
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