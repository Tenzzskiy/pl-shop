import React, {FunctionComponent, ReactNode} from "react";
import styles from './HeaderComponent.module.scss'
import cs from 'classnames'
interface HeaderComponentProps {
    children?:ReactNode
    title:string,
    button_text:string,
    mainImg:string,
    purple?:boolean,
    setSites?:any,
    touchpanel?:number,
    setTouchPanel?:any,
    TouchPanel?:boolean
}
const HeaderComponent:FunctionComponent = ( {TouchPanel,setTouchPanel,touchpanel=0,setSites,title,button_text,mainImg ,purple}:HeaderComponentProps):JSX.Element =>{

    return(
        <>
            <div className={styles.header_component}>

            <div className={styles.container}>
                <img src={mainImg} alt=""/>
            <div className={styles.content}>
                <div className={styles.title}>{title} </div>
                <div className={cs(styles.button, purple===true ? styles.purple : null)}><button onClick={() =>
                {
                    touchpanel === 1 ? setTouchPanel(true) : setSites(true)
                }

                }> {button_text}</button> </div>
                <div className={styles.free}> Это бесплатно</div>


            </div>
            </div>
            </div>

        </>
    )
}

export default HeaderComponent;