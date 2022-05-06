// import libraries
import React from 'react'

// import icons 
import {AiOutlineUser} from 'react-icons/ai';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {RiHandHeartLine} from 'react-icons/ri';
import {BsShieldCheck} from 'react-icons/bs';
import {AiOutlineDollar} from 'react-icons/ai';
import {HiOutlineUsers} from 'react-icons/hi';

// import styles
import styles from '../styles/HeaderFirstrow.module.css'

export default function HeaderFirstrow() {
  return (
    <div className={styles.wraps}>
        <div className={styles.divwraps}>
            <HiOutlineUsers className={styles.icon} />
            <div className={styles.buyerprotection_text}>Help</div>
        </div>

        <div className={`${styles.otherwraps} ${styles.divwraps}`}>
            <AiOutlineDollar className={styles.icon} />
            <div className={styles.buyerprotection_text}>Make Money with Us</div>
        </div>

        <div className={`${styles.otherwraps} ${styles.divwraps}`}>
            <BsShieldCheck className={styles.icon} />
            <div className={styles.buyerprotection_text}>Buyer Protection</div>
        </div>

        <div className={`${styles.wishlist_wraps} ${styles.divwraps}`}>
            <div className={styles.wishlist_text}>Wish List</div>
            <RiHandHeartLine className={styles.icon} />
        </div>

        <div className={styles.divwraps}>
            <AiOutlineUser />
            <div className={styles.account_text}>Account</div>
            <MdOutlineKeyboardArrowDown className={styles.accountdrpdwn} />
        </div>
    </div>
  )
}
