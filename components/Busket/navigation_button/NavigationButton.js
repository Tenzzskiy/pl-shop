import styles from './NavigationButton.module.scss'
import BlobCoverReverse from "../../background/background";
import {useState} from "react";
import Link from "next/link";




export const NavigationButton = ( {title , link}) =>{
    const [active,setActive] = useState(false);
    return(
        <>
       <Link href={link}><a href="">
           <div className={styles.container} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
              <div className={styles.cover}>  {active ? <BlobCoverReverse  width={130} height={48}/> : null} </div>
               {title}
           </div>

       </a></Link>
        </>
    )
}