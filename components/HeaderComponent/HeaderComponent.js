import React, {FunctionComponent, ReactNode} from "react";
import styles from './HeaderComponent.module.scss'
import cs from 'classnames'
import Steps from './../steps/steps.js'

const HeaderComponent = ( {TouchPanel,setTouchPanel,touchpanel=0,setSites,title,button_text,mainImg ,purple}) =>{

    return(
        <section>
            <div className={styles.header_component} itemScope itemType="http://schema.org/ImageObject">
            <Steps />
            <div className={styles.container}>
                <img itemProp="contentUrl" src={mainImg} alt={title}/>
            <div className={styles.content}>
                <h1 className={styles.title} itemProp="name">{title} </h1>
                <div className={cs(styles.button, purple===true ? styles.purple : null)}><button onClick={() =>
                {
                    touchpanel === 1 ? setTouchPanel(true) : setSites(true)
                }

                }> {button_text}</button> </div>
                <div className={styles.free}> Это бесплатно</div>


            </div>
            </div>
            </div>

        </section>
    )
}

export default HeaderComponent;