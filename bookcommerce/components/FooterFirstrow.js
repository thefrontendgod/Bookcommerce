// import libraries
import React from 'react'

// import icons
import {AiOutlineDollar} from 'react-icons/ai';
import {FaTabletAlt} from 'react-icons/fa';
import {AiFillCreditCard} from 'react-icons/ai';
import {BsShieldCheck} from 'react-icons/bs';
import {HiOutlineUsers} from 'react-icons/hi';
import {SiMicrosoftonenote} from 'react-icons/si';

// import styles
import styles from '../styles/FooterFirstrow.module.css'

export default function FooterFirstrow() {
    return (
        <div className={styles.wraps}>
            <div className={styles.contentwraps}>
                <AiOutlineDollar className={styles.icon} />
                <div className={styles.title}>Great Value</div>
                <div>We offer competitive prices on over 100 million items.</div>
            </div>
            <div className={styles.contentwraps}>
                <FaTabletAlt className={styles.icon} />
                <div className={styles.title}>Easy Delivery</div>
                <div>Our books are made in very compatible PDF that sits well on every accredited PDF reader</div>
            </div>
            <div className={styles.contentwraps}>
                <AiFillCreditCard className={styles.icon} />
                <div className={styles.title}>Safe payment</div>
                <div>Pay with the world’s most popular and secure payment methods.</div>
            </div>
            <div className={styles.contentwraps}>
                <BsShieldCheck className={styles.icon} />
                <div className={styles.title}>Shop with confidence</div>
                <div>Our Buyer Protection policy covers your entire purchase journey.</div>
            </div>
            <div className={styles.contentwraps}>
                <HiOutlineUsers className={styles.icon} />
                <div className={styles.title}>Help Center</div>
                <div>Round-the-clock assistance for a smooth shopping experience.</div>
            </div>
            <div className={styles.contentwraps}>
                <SiMicrosoftonenote className={styles.icon} />
                <div className={styles.title}>Our Other Offerings</div>
                <div>Explore our many other offerings by following us on social media and reading from our blog.</div>
            </div>
        </div>
    )
}
