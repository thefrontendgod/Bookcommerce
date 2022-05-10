// import libraries
import React, {useState} from 'react'
import Image from 'next/image'

// import components
import CartCounter from './CartCounter';

// import icons
import {AiOutlineSearch} from 'react-icons/ai';
import {HiOutlineShoppingCart} from 'react-icons/hi';

// import assets
import sitelogo from '../assets/images/sitelogo.png'

// import styles
import styles from '../styles/HeaderSecondrow.module.css'

export default function HeaderSecondrow() {

    return (
    <div className={styles.wraps}>
        <div className={styles.left}>
            <Image
                src={sitelogo}
                alt="Automart Logo"
                width="120px"
                height="70px"
            />
        </div>
        <div className={styles.center}>
            <div className={styles.searchwraps}>
                <div></div>
                <div className={styles.searchicon}>
                    <AiOutlineSearch />
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.cartwraps}>
                <HiOutlineShoppingCart className={styles.righticon} />
                <div className={styles.cartdetails}>
                    <div className={styles.cartcount}>
                        <CartCounter />
                    </div>
                    <div>Cart</div>
                </div>
            </div>
            <div className={styles.signupwrap}>
                {/* b */}
            </div>
        </div>
    </div>
  )
}