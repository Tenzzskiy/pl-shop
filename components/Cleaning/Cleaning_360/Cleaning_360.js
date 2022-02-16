import React from "react";
import styles from './Cleaning_360.module.scss'
import cn from "classnames";
import Link from "next/link";
import {MyImage} from "../../MyImage";



export const Cleaning_360 = ( { }) =>{

    return(

        <section>
                <div className={styles.cleaning}>

                    <svg opacity='50%' className={styles.img1} width="153" height="215" viewBox="0 0 153 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M114.698 162.604C117.256 166.286 120.923 169.055 125.165 170.505C129.407 171.956 134.002 172.013 138.279 170.668C142.555 169.323 146.291 166.647 148.939 163.029C151.587 159.412 153.01 155.043 153 150.559C153.01 146.076 151.587 141.707 148.939 138.089C146.291 134.472 142.555 131.795 138.279 130.45C134.002 129.106 129.407 129.163 125.165 130.613C120.923 132.064 117.256 134.832 114.698 138.515H104.821C104.821 119.604 98.7991 102.38 87.9589 88.0472L104.099 71.9072C110.844 73.1117 117.709 71.1845 122.888 66.2462C130.958 57.9353 130.958 44.5656 122.888 36.1343C114.578 28.0643 101.208 28.0643 92.7768 36.1343C87.8385 41.3135 85.9113 48.179 87.1158 54.9241L70.976 71.0641C59.8949 62.7532 46.8867 57.2126 32.5536 55.165V38.3024C36.2357 35.7447 39.0042 32.0772 40.4548 27.8351C41.9056 23.593 41.9626 18.9983 40.6177 14.7215C39.2728 10.4446 36.5963 6.70953 32.9789 4.0612C29.3614 1.41288 24.9922 -0.0100484 20.5089 5.34168e-05C16.0257 -0.0100484 11.6565 1.41288 8.03904 4.0612C4.42155 6.70953 1.74507 10.4446 0.400169 14.7215C-0.944733 18.9983 -0.887672 23.593 0.563034 27.8351C2.01375 32.0772 4.78217 35.7447 8.46431 38.3024V55.165C-2.37586 56.7308 -12.4934 60.2238 -21.6473 65.5235L-35.0168 46.3723C-32.7284 40.1091 -33.3306 32.8822 -37.4258 27.1007C-39.0134 24.8285 -41.0336 22.8917 -43.3707 21.4013C-45.7079 19.9108 -48.316 18.896 -51.0459 18.4149C-53.7758 17.9338 -56.5737 17.9959 -59.2795 18.5976C-61.9854 19.1993 -64.5459 20.3288 -66.8147 21.9215C-76.3299 28.5461 -78.7389 41.6749 -71.9939 51.1902C-67.8987 57.0922 -61.3946 60.2238 -54.77 60.2238L-40.5574 80.459C-45.7366 85.6382 -49.8317 91.4197 -53.3247 97.8034C-57.1216 96.3199 -61.2658 95.9627 -65.2605 96.7745C-69.2553 97.5862 -72.9314 99.5326 -75.8482 102.38C-83.9181 110.812 -83.9181 124.061 -75.8482 132.492C-72.3552 135.744 -68.1396 137.672 -63.8035 138.515C-63.8035 145.019 -62.9604 151.282 -61.6355 157.304L-77.414 161.52C-82.4727 157.304 -89.4586 155.498 -96.4445 157.304C-101.843 158.774 -106.437 162.328 -109.215 167.184C-111.993 172.041 -112.729 177.802 -111.259 183.201C-109.79 188.599 -106.236 193.193 -101.38 195.971C-96.5232 198.75 -90.762 199.485 -85.3634 198.016C-78.498 196.089 -73.3188 191.03 -71.1507 184.766L-52.9633 179.828C-47.5433 189.343 -40.3165 197.775 -31.8852 204.761L-45.1343 228.85C-51.7589 229.814 -57.7812 233.548 -61.2741 239.931C-62.587 242.367 -63.4072 245.038 -63.6879 247.791C-63.9686 250.544 -63.7044 253.325 -62.9103 255.976C-62.1162 258.626 -60.8078 261.095 -59.0598 263.24C-57.3117 265.385 -55.1583 267.165 -52.7225 268.477C-50.2866 269.79 -47.616 270.611 -44.8632 270.891C-42.1103 271.172 -39.3292 270.908 -36.6784 270.114C-34.0277 269.32 -31.5594 268.011 -29.4143 266.263C-27.2692 264.515 -25.4895 262.362 -24.1767 259.926C-20.8042 253.662 -20.9246 246.436 -23.9358 240.534L-11.048 216.805C-1.29185 220.66 9.30743 222.828 20.5089 222.828H22.677C21.1112 225.96 20.5089 229.573 20.5089 233.427C21.4725 245.111 31.59 253.783 43.1529 252.94C54.7157 252.097 63.5083 241.859 62.6652 230.296C62.1834 224.273 59.1722 218.974 54.8362 215.481C60.4971 212.951 65.9172 209.699 70.976 205.965L99.1604 234.15C97.956 240.895 99.8831 247.76 104.821 252.94C113.253 261.01 126.502 261.01 134.933 252.94C143.364 244.87 143.003 231.259 134.933 222.828C129.754 217.89 122.888 215.962 116.143 217.167L87.9589 188.982C93.8608 181.153 98.4377 172.24 101.328 162.604H114.698ZM2.44199 138.515C-7.55505 138.515 -15.625 130.445 -15.625 120.448C-15.625 110.45 -7.55505 102.38 2.44199 102.38C12.439 102.38 20.5089 110.45 20.5089 120.448C20.5089 130.445 12.439 138.515 2.44199 138.515ZM44.5982 174.649C37.9737 174.649 32.5536 169.229 32.5536 162.604C32.5536 155.98 37.9737 150.559 44.5982 150.559C51.2228 150.559 56.6429 155.98 56.6429 162.604C56.6429 169.229 51.2228 174.649 44.5982 174.649Z" fill="#E3E1FB"/>
                    </svg>
                    <svg opacity='50%' className={styles.img2} width="304" height="422" viewBox="0 0 304 422" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.5488 253.206C55.5724 258.94 49.8705 263.251 43.2753 265.51C36.6801 267.769 29.5367 267.858 22.8875 265.764C16.2383 263.67 10.4313 259.502 6.31393 253.869C2.19659 248.236 -0.015625 241.432 6.10352e-05 234.45C-0.015625 227.469 2.19659 220.665 6.31393 215.032C10.4313 209.399 16.2383 205.231 22.8875 203.137C29.5367 201.043 36.6801 201.131 43.2753 203.39C49.8705 205.65 55.5724 209.961 59.5488 215.694H74.9041C74.9041 186.247 84.2671 159.426 101.12 137.107L76.0276 111.974C65.5411 113.849 54.8672 110.848 46.8151 103.158C34.2686 90.2166 34.2686 69.3974 46.8151 56.2682C59.736 43.7016 80.5219 43.7016 93.6301 56.2682C101.308 64.3333 104.304 75.0242 102.431 85.5276L127.524 110.661C144.752 97.719 164.976 89.0912 187.26 85.9027V59.6443C181.535 55.6615 177.231 49.9505 174.976 43.3447C172.72 36.7389 172.632 29.584 174.723 22.9242C176.814 16.2643 180.975 10.448 186.599 6.32409C192.223 2.20014 199.016 -0.0156473 205.986 8.31804e-05C212.956 -0.0156473 219.749 2.20014 225.373 6.32409C230.997 10.448 235.159 16.2643 237.25 22.9242C239.34 29.584 239.252 36.7389 236.996 43.3447C234.741 49.9505 230.437 55.6615 224.712 59.6443V85.9027C241.565 88.341 257.295 93.7802 271.527 102.033L292.313 72.2108C288.755 62.4577 289.691 51.204 296.058 42.2011C298.526 38.6628 301.667 35.6468 305.301 33.3259C308.935 31.005 312.989 29.4248 317.234 28.6756C321.478 27.9265 325.828 28.0232 330.035 28.9602C334.241 29.8971 338.222 31.656 341.75 34.1361C356.543 44.4519 360.288 64.8959 349.802 79.7132C343.435 88.9036 333.323 93.7802 323.024 93.7802L300.927 125.29C308.979 133.355 315.346 142.358 320.776 152.299C326.68 149.989 333.123 149.433 339.333 150.697C345.544 151.961 351.259 154.992 355.794 159.426C368.341 172.556 368.341 193.187 355.794 206.316C350.364 211.381 343.809 214.381 337.068 215.694C337.068 225.823 335.757 235.576 333.697 244.954L358.228 251.518C366.093 244.954 376.954 242.14 387.816 244.954C396.209 247.242 403.351 252.776 407.67 260.339C411.99 267.901 413.133 276.873 410.849 285.279C408.564 293.686 403.039 300.839 395.488 305.166C387.938 309.492 378.981 310.637 370.588 308.349C359.914 305.348 351.862 297.471 348.491 287.718L320.215 280.028C311.788 294.845 300.552 307.974 287.444 318.853L308.043 356.365C318.342 357.865 327.705 363.679 333.136 373.62C335.177 377.413 336.452 381.572 336.888 385.859C337.325 390.145 336.914 394.476 335.679 398.604C334.445 402.732 332.411 406.575 329.693 409.916C326.975 413.256 323.627 416.028 319.84 418.072C316.053 420.116 311.901 421.393 307.621 421.831C303.341 422.268 299.017 421.856 294.896 420.62C290.775 419.383 286.938 417.346 283.603 414.624C280.268 411.902 277.501 408.548 275.46 404.755C270.216 395.002 270.404 383.748 275.085 374.558L255.048 337.609C239.88 343.611 223.401 346.987 205.986 346.987H202.615C205.05 351.863 205.986 357.49 205.986 363.492C204.488 381.685 188.758 395.19 170.781 393.877C152.804 392.564 139.134 376.621 140.445 358.615C141.194 349.237 145.876 340.985 152.617 335.545C143.816 331.607 135.389 326.543 127.524 320.728L83.7053 364.617C85.5779 375.121 82.5817 385.812 74.9041 393.877C61.7959 406.443 41.1973 406.443 28.0891 393.877C14.9809 381.31 15.5426 360.116 28.0891 346.987C36.1412 339.297 46.8151 336.296 57.3016 338.171L101.12 294.282C91.9447 282.091 84.8289 268.211 80.3346 253.206H59.5488ZM234.075 215.694C249.618 215.694 262.164 203.128 262.164 187.56C262.164 171.993 249.618 159.426 234.075 159.426C218.533 159.426 205.986 171.993 205.986 187.56C205.986 203.128 218.533 215.694 234.075 215.694ZM168.534 271.962C178.833 271.962 187.26 263.522 187.26 253.206C187.26 242.891 178.833 234.45 168.534 234.45C158.235 234.45 149.808 242.891 149.808 253.206C149.808 263.522 158.235 271.962 168.534 271.962Z" fill="#E3E1FB"/>
                    </svg>


                <div className={styles.container}>

                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Обеспечим безопасность вашего мероприятия
                    </h2>
                    <div className={styles.subtitle}>
                        <h3>
                            Большой ассортимент сертифицированного
                            оброрудования и средств защиты


                        </h3>

                    </div>
                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <MyImage width='52' height='52' src={{default :'/Desinfection/desinfection_icon_1.svg'}}/>

                            <h3> Дезинфекция воздуха и поверхностей в помещении</h3>
                        </div>
                        <div className={styles.item}>
                            <MyImage width='52' height='52' src={{default :'/Desinfection/desinfection_icon_2.svg'}}/>

                            <h3> Аренда санитайзеров, автоматов с масками и перчатками</h3>
                        </div>
                        <div className={styles.item}>
                            <MyImage width='52' height='52' src={{default :'/Desinfection/desinfection_icon_3.svg'}}/>

                            <h3> Проведение санитарного контроля на входе</h3>
                        </div>
                        <div className={styles.item}>
                            <MyImage width='52' height='52' src={{default :'/Desinfection/desinfection_icon_4.svg'}}/>

                            <h3> Выезд мед.работника для проведения экспресс  ПЦР-тестов</h3>
                        </div>

                    </div>
                    <div className={styles.button}>
                        <Link href='/desinfection' ><a className={cn(styles.a,
                        )} >   <button> Каталог дезинфекции</button> </a></Link>
                    </div>
                </div>
                </div>
                </div>
        </section>
    )
}