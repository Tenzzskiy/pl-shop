import styles from "../HeaderComponent/MainHeaderComponent/MainHeaderComponent_360.module.scss";

export const Right_circle = () =>{
    return(
        <>
            <svg className={styles.right} width="971" height="971" viewBox="0 0 971 971" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1287_19553)">
                    <circle cx="485.5" cy="485.5" r="205.5" fill="url(#paint0_linear_1287_19553)"/>
                </g>
                <defs>
                    <filter id="filter0_f_1287_19553" x="0" y="0" width="971" height="971" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="140" result="effect1_foregroundBlur_1287_19553"/>
                    </filter>
                    <linearGradient id="paint0_linear_1287_19553" x1="280" y1="485.5" x2="691" y2="485.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF512F"/>
                        <stop offset="1" stopColor="#DD2476"/>
                    </linearGradient>
                </defs>
            </svg>



        </>
    )
}