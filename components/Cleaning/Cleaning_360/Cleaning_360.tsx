import React, {FunctionComponent} from "react";
import styles from './Cleaning_360.module.scss'
import cn from "classnames";
import Link from "next/link";



export const Cleaning_360:FunctionComponent = ( { }) =>{

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
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.1866 16.5338L19.46 7.02242C22.5961 6.13351 26.1413 7.2002 28.1412 10.0003C29.5502 11.9559 29.8229 14.3559 29.1866 16.5338ZM92.046 47.779C89.3643 47.779 86.9554 49.1124 85.5464 51.1124H81.8194C81.8194 44.1345 79.5468 37.7787 75.4562 32.4897L81.5467 26.534C84.092 26.9785 86.6827 26.2673 88.6371 24.4451C91.6824 21.3783 91.6824 16.4449 88.6371 13.3337C85.501 10.3558 80.4559 10.3558 77.2743 13.3337C75.4107 15.2448 74.6835 17.7782 75.138 20.2672L69.0475 26.2229C64.866 23.1562 59.9572 21.1117 54.5485 20.3561V14.1337C55.938 13.1899 56.9827 11.8366 57.5301 10.2713C58.0776 8.7059 58.0991 7.01044 57.5916 5.43227C57.0841 3.8541 56.0741 2.47584 54.709 1.4986C53.3439 0.521359 51.6952 -0.0037079 50.0034 1.9711e-05C48.3116 -0.0037079 46.6628 0.521359 45.2977 1.4986C43.9326 2.47584 42.9227 3.8541 42.4151 5.43227C41.9076 7.01044 41.9292 8.7059 42.4766 10.2713C43.024 11.8366 44.0687 13.1899 45.4582 14.1337V20.3561C42.0948 20.845 38.9587 21.8228 36.0043 23.2006L78.5469 64.8017C79.3196 63.2461 80.0013 61.6905 80.5013 60.0015H85.5464C86.5116 61.3603 87.8955 62.3818 89.4963 62.9172C91.0971 63.4525 92.8309 63.4735 94.4448 62.9773C96.0587 62.481 97.4681 61.4933 98.4675 60.1585C99.4669 58.8236 100.004 57.2113 100 55.557C100 51.2458 96.4548 47.779 92.046 47.779ZM95.9548 93.1579L90.1825 98.8025L86.8191 95.558C85.001 95.3802 83.2284 94.6691 81.8194 93.3357C80.4559 91.9579 79.7286 90.2245 79.5468 88.4467L67.7294 76.8464C66.2295 77.7798 64.6387 78.802 62.957 79.5131C64.5933 80.802 65.7296 82.7577 65.9114 84.9799C66.2295 89.2467 62.9116 93.0246 58.5482 93.3357C54.1849 93.6468 50.367 90.4467 50.0034 86.1355C50.0034 84.7133 50.2306 83.3799 50.8215 82.2243H50.0034C45.7764 82.2243 41.7766 81.4243 38.0951 80.002L33.2318 88.7578C34.3681 90.9356 34.4135 93.6024 33.1409 95.9135C32.6455 96.8124 31.9739 97.607 31.1644 98.2521C30.3549 98.8971 29.4235 99.3799 28.4232 99.6729C27.4229 99.966 26.3734 100.063 25.3346 99.9599C24.2958 99.8563 23.2881 99.5536 22.3689 99.0692C21.4497 98.5847 20.6371 97.928 19.9774 97.1364C19.3178 96.3449 18.8241 95.4341 18.5244 94.4559C18.2247 93.4778 18.125 92.4515 18.231 91.4357C18.3369 90.4199 18.6464 89.4344 19.1418 88.5356C20.4599 86.18 22.7325 84.8021 25.2323 84.4466L30.232 75.5575C27.0504 72.9796 24.3233 69.8684 22.278 66.3572L15.4148 68.1795C14.5967 70.4907 12.6423 72.3574 10.0515 73.0685C9.0428 73.337 7.98988 73.4086 6.95287 73.2792C5.91586 73.1497 4.91508 72.8218 4.00766 72.3142C3.10023 71.8065 2.30395 71.1291 1.66426 70.3205C1.02458 69.512 0.554022 68.5881 0.279459 67.6017C0.00489528 66.6153 -0.0682967 65.5857 0.0640611 64.5716C0.196419 63.5576 0.531734 62.5789 1.05086 61.6916C1.56999 60.8043 2.26277 60.0256 3.08963 59.4001C3.9165 58.7746 4.86127 58.3144 5.86999 58.0459C8.50618 57.3792 11.1424 58.0459 13.0513 59.6015L19.0055 58.0459C18.4765 55.7706 18.2022 53.4458 18.1873 51.1124C16.5511 50.8013 14.9603 50.0902 13.6422 48.8901C10.5969 45.7789 10.5969 40.8899 13.6422 37.7787C15.9148 35.5565 19.3236 35.0231 22.1416 36.0898C22.5961 35.2898 23.1415 34.5342 23.6415 33.7342L0.506716 11.1114L6.3245 5.46682L95.9548 93.1579Z" fill="url(#paint0_linear_917_2590)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_917_2590" x1="0" y1="50.0301" x2="100" y2="50.0301" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#07F1D3"/>
                                        <stop offset="0.572917" stop-color="#3A65F1"/>
                                        <stop offset="0.984375" stop-color="#B93DF6"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            <h3> Дезинфекция воздуха и поверхностей в помещении</h3>
                        </div>
                        <div className={styles.item}>
                            <svg width="82" height="100" viewBox="0 0 82 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M66.5 0V10L46.5 9.995V20H61.5V30C72.55 30 81.5 38.95 81.5 50V90C81.5 92.6522 80.4464 95.1957 78.5711 97.0711C76.6957 98.9464 74.1522 100 71.5 100H11.5C8.84784 100 6.3043 98.9464 4.42893 97.0711C2.55357 95.1957 1.5 92.6522 1.5 90V50C1.5 38.95 10.45 30 21.5 30V20H36.5V9.995L19 10C15.85 10 12.15 12.45 8 18L0 12C5.85 4.2 12.15 0 19 0H66.5ZM46.5 50H36.5V60H26.5V70H36.495L36.5 80H46.5L46.495 70H56.5V60H46.5V50Z" fill="url(#paint0_linear_917_180)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_917_180" x1="0" y1="50.0301" x2="81.5" y2="50.0301" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#07F1D3"/>
                                        <stop offset="0.572917" stop-color="#3A65F1"/>
                                        <stop offset="0.984375" stop-color="#B93DF6"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            <h3> Аренда санитайзеров, автоматов с масками и перчатками</h3>
                        </div>
                        <div className={styles.item}>
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M87.8332 0.434754C87.4902 0.674446 87.1065 1.09172 86.9801 1.36213C86.1711 3.09469 86.3967 4.47275 87.7621 6.13915C91.717 10.9648 93.9127 16.971 94.1649 23.6528C94.4294 30.6658 92.2801 37.5166 88.2065 42.6452C86.7502 44.4787 86.5651 44.858 86.5495 46.0428C86.5164 48.5501 88.5858 50.1503 90.5643 49.1474C92.1338 48.3519 95.5031 43.334 97.1939 39.2743C99.1407 34.5995 100 30.125 100 24.6618C100 17.6172 98.4397 11.6626 95.094 5.93937C93.8966 3.89067 91.7214 0.989252 90.9409 0.399327C90.217 -0.147772 88.641 -0.12961 87.8332 0.434754ZM9.02163 6.81115C5.45684 7.80579 2.76857 11.2648 2.28023 15.4856C2.17418 16.4013 1.58683 22.8008 0.975029 29.7068C-0.0296466 41.0445 -0.115538 42.412 0.0910709 43.7961C0.411158 45.9419 1.16462 47.5568 2.79655 49.5943C3.56938 50.5595 4.41969 51.8777 4.68577 52.5237C5.70649 55.0005 5.7149 54.5749 4.2254 75.8081C3.47371 86.5241 2.85916 95.8719 2.85994 96.5809C2.86131 98.0197 3.23227 98.8751 4.1579 99.5744C4.69027 99.9767 5.28662 99.9971 16.4764 99.9984L28.2355 100L28.9003 99.4926C30.0241 98.6347 30.1791 97.9544 30.6222 91.928C31.1413 84.8669 31.724 75.4572 32.1076 67.9364C32.2743 64.6684 32.4997 61.3387 32.6085 60.5371C33.2923 55.4982 35.6462 50.8454 39.1521 47.6023C40.7969 46.081 43.9642 44.1531 45.5535 43.7062C46.0985 43.5531 46.5151 43.2964 46.5706 43.0791C46.753 42.3681 53.7282 6.93267 53.7282 6.71765C53.7282 6.37302 10.266 6.46383 9.02163 6.81115ZM59.7934 6.60845C59.7934 6.66809 58.2086 14.7194 56.2717 24.5001C54.3347 34.2811 52.7499 42.4051 52.7499 42.5535C52.7499 42.9782 64.5161 42.9358 65.2326 42.5087C66.0226 42.0376 66.5781 41.2481 66.8248 40.2452C67.5178 37.4278 72.7065 10.5177 72.7065 9.74037C72.7065 8.58227 72.072 7.43089 71.1374 6.89276C70.539 6.54813 69.8104 6.5006 65.125 6.50037C62.1925 6.50015 59.7934 6.54881 59.7934 6.60845ZM78.9744 10.8162C77.965 11.4092 77.4017 12.4734 77.4031 13.7835C77.4043 14.7501 77.6156 15.2017 78.9341 17.0544C82.2297 21.686 82.1217 28.1247 78.6711 32.7225C78.1668 33.3945 77.6749 34.1831 77.578 34.4748C76.6448 37.2879 79.2266 39.9561 81.6216 38.6536C82.3424 38.2617 84.0698 35.9639 84.9803 34.1856C87.6625 28.9485 87.9093 21.8167 85.5916 16.5161C84.3987 13.7884 82.405 11.0458 81.2536 10.5494C80.4359 10.1967 79.9274 10.2561 78.9744 10.8162ZM39.9012 21.6043C40.7383 22.005 41.5498 23.1322 41.7112 24.1176C41.8893 25.2053 41.3416 26.7628 40.5553 27.4056C39.9406 27.9083 39.8656 27.9137 32.5081 27.9769C27.4006 28.0209 24.918 27.9632 24.5582 27.7924C23.773 27.4197 22.9994 26.3834 22.8179 25.4605C22.5199 23.9463 23.2594 22.2171 24.4615 21.6171C25.3469 21.1756 38.9819 21.1642 39.9012 21.6043ZM47.9565 49.9714C46.8804 50.3073 45.6368 50.7997 45.1931 51.0654L44.3862 51.5486L44.0516 53.7446C43.235 59.1039 43.0016 60.1369 42.4205 60.9647C41.6248 62.0982 40.7662 62.7096 39.5223 63.0287C38.9322 63.1798 38.4012 63.3933 38.3423 63.5027C38.2028 63.761 37.8328 70.1988 37.9494 70.3327C38.1502 70.5625 42.6922 69.0131 43.811 68.3331C45.8729 67.0795 47.7923 64.541 48.5624 62.0486C48.824 61.2017 50.5978 50.3759 50.5978 49.6257C50.5978 49.2151 50.2207 49.2644 47.9565 49.9714Z" fill="url(#paint0_linear_917_226)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_917_226" x1="0" y1="50.0301" x2="100" y2="50.0301" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#07F1D3"/>
                                        <stop offset="0.572917" stop-color="#3A65F1"/>
                                        <stop offset="0.984375" stop-color="#B93DF6"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            <h3> Проведение санитарного контроля на входе</h3>
                        </div>
                        <div className={styles.item}>
                            <svg width="72" height="100" viewBox="0 0 72 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5375 0.131164C11.734 0.902258 8.64568 3.57413 7.41072 7.16183C6.64568 9.3837 6.79802 11.138 8.35173 18.0017L9.6781 23.861H35.9476H62.2172L63.5441 18.0017C65.0922 11.1655 65.2453 9.39776 64.481 7.1839C63.3879 4.01671 61.2297 1.8546 57.8461 0.536633L56.5531 0.032922L36.4359 0.00284385C25.3715 -0.0137577 15.9672 0.0440548 15.5375 0.131164ZM37.3199 4.23468C38.3775 4.77433 38.8773 5.79698 38.8773 7.4214V8.67296L40.3074 8.76476C41.9357 8.86925 42.8045 9.27823 43.383 10.2122C43.8812 11.0167 43.8843 12.5359 43.3894 13.2866C42.7244 14.2954 42.0634 14.581 40.391 14.5823L38.8773 14.5837V15.9732C38.8773 17.0398 38.7783 17.539 38.4508 18.1216C38.0013 18.9212 36.7976 19.6618 35.9476 19.6618C35.0976 19.6618 33.8939 18.9212 33.4445 18.1216C33.117 17.539 33.0179 17.0398 33.0179 15.9732V14.5837L31.5043 14.5823C29.8318 14.581 29.1709 14.2954 28.5058 13.2866C28.0109 12.5359 28.014 11.0167 28.5123 10.2122C29.0908 9.27823 29.9595 8.86925 31.5879 8.76476L33.0179 8.67296L33.0261 7.38019C33.0361 5.79659 33.4447 4.94484 34.5009 4.30538C35.4361 3.73937 36.306 3.71749 37.3199 4.23468ZM8.82498 31.7241C4.23181 36.3778 1.39041 42.519 0.308766 50.1308C-0.0515853 52.6665 -0.1176 67.5276 0.22322 69.3817C1.34959 75.5091 6.57009 80.6741 12.8597 81.8843L14.2838 82.1583L15.8383 81.3767C16.6933 80.9468 17.3929 80.5435 17.3929 80.4806C17.3929 80.4179 16.6926 79.6179 15.8367 78.703C12.239 74.8577 9.91443 70.3946 8.75623 65.1087C8.34412 63.2278 8.32009 62.6692 8.3156 54.9157C8.31091 46.7669 8.31384 46.7065 8.75623 45.8089C9.31248 44.6796 10.3392 43.6089 11.3701 43.0831C11.8051 42.8612 13.0965 42.5185 14.2398 42.3216C21.2574 41.113 26.7396 38.5468 31.1625 34.4003C33.4322 32.2726 35.1238 31.6829 37.3338 32.2489C38.7054 32.6005 38.822 32.6732 40.583 34.2755C45.3109 38.5778 50.7254 41.1339 57.615 42.3159C58.7806 42.5159 60.0902 42.8612 60.5252 43.0831C61.556 43.6089 62.5828 44.6796 63.139 45.8089C63.5814 46.7065 63.5843 46.7669 63.5797 54.9157C63.5752 62.6692 63.5511 63.2278 63.139 65.1087C61.9777 70.4083 59.6574 74.8565 56.0338 78.7296C55.164 79.6591 54.4857 80.4497 54.5263 80.4866C54.5668 80.5237 55.309 80.9085 56.1754 81.3421L57.7509 82.1302L59.105 81.871C65.2787 80.6895 70.3091 75.7608 71.5988 69.6306C72.0129 67.662 72.008 53.4312 71.592 50.2587C70.6099 42.7659 67.6808 36.3956 63.0703 31.7241L61.189 29.8181H35.9476H10.7062L8.82498 31.7241ZM34.6396 39.1677C31.8582 41.7626 27.157 44.5685 23.0105 46.1085C20.8541 46.9095 16.9791 47.8991 15.2207 48.098L14.0406 48.2315L14.1291 55.5774C14.199 61.3755 14.283 63.1964 14.5277 64.2179C16.4738 72.3411 22.1763 78.427 29.9535 80.6808C40.9972 83.8811 52.848 77.7187 56.59 66.8298C57.6267 63.813 57.672 63.379 57.7662 55.5774L57.8547 48.2315L56.6873 48.0995C53.4304 47.731 48.4441 46.1353 44.7574 44.2815C42.6679 43.231 38.8689 40.6515 37.2832 39.2067C36.5676 38.5546 35.9523 38.0251 35.916 38.0298C35.8797 38.0347 35.3054 38.5466 34.6396 39.1677ZM26.5687 53.4024C28.0718 54.1575 28.6242 56.1921 27.6957 57.5526C26.0283 59.9952 22.3783 58.8114 22.4232 55.8427C22.4545 53.778 24.6933 52.4601 26.5687 53.4024ZM48.059 53.4997C49.0543 54.1771 49.457 54.8448 49.472 55.8427C49.517 58.8114 45.867 59.9952 44.1996 57.5526C43.6017 56.6767 43.6033 55.3058 44.2035 54.4075C45.0779 53.0983 46.8547 52.6802 48.059 53.4997ZM32.1543 68.6548C34.5379 70.2335 37.355 70.2353 39.7343 68.6591C41.0504 67.7874 42.3254 67.678 43.3404 68.3499C44.5824 69.1718 45.025 70.547 44.4728 71.8685C43.6558 73.8239 39.4629 75.7165 35.9476 75.7165C32.4435 75.7165 28.2677 73.829 27.4275 71.8653C26.8767 70.5782 27.3 69.2042 28.5049 68.3675C29.491 67.6827 30.848 67.7896 32.1543 68.6548ZM17.8763 86.9058C15.0806 88.3249 12.0963 89.9694 11.2443 90.5602C9.47849 91.7847 6.17537 94.8583 5.75818 95.6649C5.33045 96.4919 5.40466 97.8132 5.92224 98.588C6.85837 99.9892 6.27263 99.9347 20.3715 99.9349L33.0179 99.9352V93.6255V87.3157L31.2113 86.9755C28.8433 86.5294 26.5152 85.8194 24.6838 84.9849C23.8697 84.6138 23.1486 84.3138 23.0814 84.3179C23.0142 84.3222 20.672 85.4866 17.8763 86.9058ZM47.608 84.8163C46.1689 85.5651 42.8965 86.5993 40.7816 86.9737L38.8773 87.3106V93.6229V99.9352L51.5238 99.9349C65.6226 99.9347 65.0369 99.9892 65.973 98.588C66.4906 97.8132 66.5648 96.4919 66.1371 95.6649C65.6925 94.8052 62.3652 91.7446 60.4525 90.4362C58.6933 89.2329 49.3103 84.3022 48.8117 84.3194C48.6652 84.3243 48.1234 84.5479 47.608 84.8163Z" fill="url(#paint0_linear_917_12289)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_917_12289" x1="0" y1="49.9977" x2="71.9067" y2="49.9977" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#07F1D3"/>
                                        <stop offset="0.572917" stop-color="#3A65F1"/>
                                        <stop offset="0.984375" stop-color="#B93DF6"/>
                                    </linearGradient>
                                </defs>
                            </svg>

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