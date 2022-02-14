import styles from './NavigationButton.module.scss'
import BlobCoverReverse from "../../background/background";
import {useState} from "react";
import Link from "next/link";
import cs from 'classnames'
import {useRouter} from "next/router";



export const NavigationButton = ( {title , link,count=true,width=130,height=48,color1='#C038F5',color2='#3496FE '}) =>{
    const [active,setActive] = useState(false);
    const route = useRouter();

    return(
        <>
       <Link href={link}><a href="" itemScope itemType="http://schema.org/SiteNavigationElement">
           <div itemProp="url" className={count ? styles.container : cs(styles.container2, route.asPath === link ? styles.a_active : null)} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
              <div className={styles.cover}>  {active && route.asPath !== link ? <BlobCoverReverse color1={color1} color2={color2}  width={width} height={height}/> : null} </div>
               {title}
           </div>

       </a></Link>
        </>
    )
}