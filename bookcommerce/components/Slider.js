// import libraries
import React from 'react'

// import componnets

// import styles
import styles from '../styles/Slider.module.css'

export default function Slider() {
  return (
    <div className={styles.wraps}>
        <div className={styles.slidewraps}>
        <figure className={styles.figure}>
            <img src="https://ng.jumia.is/cms/0-1-cpr/2022/april-14/FreeDelivery_InIbadan_Slider.jpg" className={styles.img} />
            <img src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2022/w17/apr-18-adidas/adidas_712x384.jpg" className={styles.img} />
            <img src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2022/w17/apr-18-adidas/adidas-fs_712x384.jpg" className={styles.img} />
            <img src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2022/w16/fitness-week/designs/Desktop_Homepage_Slider.jpg" className={styles.img} />
            <img src="https://ng.jumia.is/cms/0-1-cpr/2022/april-14/FreeDelivery_InIbadan_Slider.jpg" className={styles.img} />
        </figure>
        </div>
    </div>
  )
}
