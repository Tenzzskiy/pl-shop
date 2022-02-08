import React, {useState} from "react";
import styles from './ImgModal.module.scss'
import cs from 'classnames'
import {useSelector} from "react-redux";
import {useWindowSize} from "../../Hooks/useWindowSize";
import {useKeenSlider} from "keen-slider/react";
import {useEffect} from "react";
import {Arrow} from "../Offer/Offer";
import {MyImage} from "../MyImage";
export const ImgModal = ( {id,active,setActive,text1,text2,text3,text4,text5,...props}) =>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: {id},
        slides: {
            perView: "auto",

        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);

        }
    });
    console.log(instanceRef)
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = active ? 'hidden' : 'auto';
        instanceRef.current.update();
    }, [active])

    return(
        <>
            <div className={active ? cs(styles.modal,styles.active) : styles.modal } onClick={() => {
                setActive(false)

            }
            }>

                <div className={active ? cs(styles.content,styles.content_active) : styles.content} onClick={e => e.stopPropagation()}>
                    <div className={styles.exit} onClick={() => setActive(false)}>
                        <img src="/Modal/exit.svg" alt=""/></div>
                    <div className="navigation-wrapper">
                        <div ref={sliderRef} className="keen-slider">
                            <div className={cs("keen-slider__slide number-slide1", styles.slide)}>
                                <div className={styles.box1}><MyImage src={{default: props.img1}} alt={'1'} /> <div className={styles.box1_description}><span>{ text1} </span> </div></div></div>
                            <div className={cs("keen-slider__slide number-slide1", styles.slide)}>
                                <div className={styles.box2}><MyImage src={{default: props.img2}} alt={'1'} /> <div className={styles.box2_description}><span>{ text1} </span> </div></div>
                            </div>
                            <div className={cs("keen-slider__slide number-slide1", styles.slide)}>
                                <div className={styles.box3}><MyImage src={{default: props.img3}} alt={'1'} /> <div className={styles.box3_description}><span>{ text1} </span> </div></div>
                            </div>
                            <div className={cs("keen-slider__slide number-slide1", styles.slide)}>
                                <div className={styles.box4}><MyImage src={{default: props.img4}} alt={'1'} /> <div className={styles.box4_description}><span>{ text1} </span> </div></div>
                            </div>
                            <div className={cs("keen-slider__slide number-slide1", styles.slide)}>
                                <div className={styles.box5}><MyImage src={{default: props.img5}} alt={'1'} /> <div className={styles.box5_description}><span>{ text1} </span> </div></div>
                            </div>

                        </div>
                        {loaded && instanceRef.current && (
                            <>
                                <div className={styles.prev_arrow}>
                                <Arrow
                                    left
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />
                                </div>
                                <div className={styles.next_arrow}>
                                <Arrow
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                />
                            </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}
export default ImgModal;