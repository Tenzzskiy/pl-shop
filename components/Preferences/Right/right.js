import styles from './right.module.scss'
import React from "react";
import {Left} from "../LeftPreference_tablet/left";
import {MyImage} from "../../MyImage";


export const Preferences_768 = ( {setSites,button=false,count = 0,secondLeftImg,secondRightImg,leftImg,rightImg,leftTitle,rightTitle,leftText,rightText,rightSecondText,leftSecondText,leftSecondTitle,rightSecondTitle,...props } ) => {

    return(
        <>
            <div className={styles.preferences}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.mainTitle}>
                            {props.title}
                        </h2>

                        {count === 1 ? <Left img={leftImg} title={leftTitle} description={leftText}/> : null}
                        {count === 2 ? <Left img={leftImg} title={leftTitle} description={leftText}/> : null}
                        {count === 2 ? <Right  img={rightImg}  title={rightTitle}  description={rightText}/>: null}
                        {count === 4 ? <Left img={leftImg} title={leftTitle} description={leftText}/>: null}
                        {count === 4 ? <Right  img={rightImg}  title={rightTitle}  description={rightText}/>: null}
                        {count === 4 ? <Left img={secondLeftImg} title={leftSecondTitle}   description={leftSecondText}/>: null}
                        {count === 4 ? <Right  img={secondRightImg}  title={rightSecondTitle}    description={rightSecondText}/>: null}
                        {count === 5 ? <Left img={leftImg} title={leftTitle} description={leftText}/>: null}
                        {count === 6 ? <Right  img={rightImg}  title={rightTitle}  description={rightText}/>: null}
                        {button ?
                            <div className={styles.button}>
                                <button onClick={() => setSites(true)}> Заказать разработку</button>
                            </div>

                            : null}

                    </div>


                </div>


            </div>

        </>
    )
}

export const Right =({img,title,description }) =>{
    return(
        <>
            <div className={styles.container} itemScope itemType="http://schema.org/ImageObject">
            <div className={styles.content}>
            <div className={styles.grid}>

                <div  className={styles.flex}>
                <h3 className={styles.title} itemProp="name">
                    {title}
                </h3>
                    <h4 className={styles.description} itemProp="description">
                        {description}
                    </h4>

                </div>
                <div className={styles.img}>
                    <MyImage itemProp='contentUrl' className={styles.background_img} src={img} alt={title} />

                </div>
            </div>
            </div>
            </div>
        </>
    )
}