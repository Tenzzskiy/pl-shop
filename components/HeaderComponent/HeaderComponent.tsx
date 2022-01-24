import React, {FunctionComponent, ReactNode} from "react";
import styles from './HeaderComponent.module.scss'
import cs from 'classnames'
interface HeaderComponentProps {
    children?:ReactNode
    title:string,
    button_text:string,
    mainImg:string,
    purple?:boolean
}
const HeaderComponent:FunctionComponent = ( {title,button_text,mainImg ,purple}:HeaderComponentProps):JSX.Element =>{
console.log(purple)
    return(
        <>
            <div className={styles.header_component}>

            <div className={styles.container}>
                <img src={mainImg} alt=""/>
            <div className={styles.content}>
                <div className={styles.title}>{title} </div>
                <div className={cs(styles.button, purple===true ? styles.purple : null)}><button> {button_text}</button> </div>
                <div className={styles.free}> Это бесплатно</div>


            </div>
            </div>
            </div>

        </>
    )
}

export default HeaderComponent;