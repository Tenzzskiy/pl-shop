import styles from './Relises.module.scss'
import React from "react";
import {MyImage} from "../MyImage";


const Releases = ({setId, imgModal, setImgModal, children, text1, text2, text3, text4, text5, ...props}) => {
    return (
        <section>
            <div className={styles.releases} itemScope itemType="http://schema.org/ImageObject">
                <div className={styles.container}>
                    <div className={styles.content}>

                        <h2 className={styles.title}>
                            Реализованные проекты

                        </h2>
                        <div className={styles.grid}>
                            <div className={styles.box1} onClick={() => {
                                setImgModal(true);
                                setId(0);
                            }}

                            ><MyImage itemProp="contentUrl" src={{default: props.img1}} alt={text1}/>
                                <div className={styles.box1_description}><span itemProp="name">{text1} </span></div>
                            </div>
                            <div className={styles.box2} onClick={() => {
                                setImgModal(true);
                                setId(1);
                            }}><MyImage itemProp="contentUrl" src={{default: props.img2}} alt={text2}/>
                                <div className={styles.box2_description}><span itemProp="name">{text2} </span></div>
                            </div>
                            <div className={styles.box3} onClick={() => {
                                setId(2);
                                setImgModal(true);

                            }}><MyImage itemProp="contentUrl" src={{default: props.img3}} alt={text3}/>
                                <div className={styles.box3_description}><span itemProp="name">{text3} </span></div>
                            </div>
                            <div className={styles.box4} onClick={() => {
                                setId(3);
                                setImgModal(true);

                            }}><MyImage itemProp="contentUrl" src={{default: props.img4}} alt={text4}/>
                                <div className={styles.box4_description}><span itemProp="name">{text4} </span></div>
                            </div>
                            <div className={styles.box5} onClick={() => {
                                setImgModal(true);
                                setId(4);
                            }}><MyImage itemProp="contentUrl" src={{default: props.img5}} alt={text5}/>
                                <div className={styles.box5_description}><span itemProp="name">{text5} </span></div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Releases;