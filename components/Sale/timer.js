import {useEffect, useState} from "react";
import styles from './timer.module.scss'


export const Timer = () => {
    // let date = new Date();
    //
    // let endDate = new Date();
    // const IntervalId = setInterval(
    //     () =>{
    //         setHours(date.getHours())
    //         setSeconds(date.getSeconds())
    //         setMinutes(date.getMinutes())
    //         clearInterval(IntervalId)
    //     }
    // ,1000)
    // const [hours,setHours]= useState(new Date().getHours())
    // const [minutes,setMinutes]= useState(new Date().getMinutes());
    // const [seconds,setSeconds]= useState(new Date().getSeconds());
    useEffect(() =>{
        function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date());
            let seconds = Math.floor((t / 1000) % 60);
            let minutes = Math.floor((t / 1000 / 60) % 60);
            let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function initializeClock(id, endtime) {
            let clock = document.getElementById(id);
            let daysSpan = clock.querySelector('.days');
            let hoursSpan = clock.querySelector('.hours');
            let minutesSpan = clock.querySelector('.minutes');
            let secondsSpan = clock.querySelector('.seconds');

            function updateClock() {
                let t = getTimeRemaining(endtime);


                hoursSpan.innerHTML = ('0' + t.hours).slice(-2) + ':';
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)+ ':';
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }

            updateClock();
            let timeinterval = setInterval(updateClock, 1000);
        }

        let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
        initializeClock('countdown', deadline);
    })

    return (<>
        <div id="countdown" className={styles.flex}>

            <div className="countdown-number">
                <span className="hours countdown-time"></span>

            </div>
            <div className="countdown-number">
                <span className="minutes countdown-time"></span>

            </div>
            <div className="countdown-number">
                <span className="seconds countdown-time"></span>

            </div>
        </div>

        </>)
}
export default Timer;