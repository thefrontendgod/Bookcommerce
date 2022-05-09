// import libraries
import React from 'react'
import Image from 'next/image'

// import styles
import styles from '../styles/EachProduct.module.css'

// import assets
import img1 from '../assets/images/books/img1.jpg'

export default function EachProduct(props) {
  return (  
    <div className={styles.wraps}>
        <div className={styles.imgwraps}>
            <Image
                src={img1}
                alt="Books"
                width="140px"
                height="180px"
            />
        </div>
        <div className={styles.textwrap}>
            <p className={styles.booktitle}>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <span className={styles.cart}>Add to cart</span>
        </div>
    </div>
  )
}