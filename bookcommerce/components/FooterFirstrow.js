// import libraries
import React from 'react'

// import icons
import {AiFillFacebook} from 'react-icons/ai';
import {FaTwitter} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';

// import styles
import styles from '../styles/FooterFirstrow.module.css'

export default function Footer() {
  return (
    <div className={styles.firstrow}>
        <div className={`${styles.leftside}`}>
            <div className={styles.stayconnected_title}>Stay Connected</div>
            <div className={styles.iconset}>
                <AiFillFacebook className={styles.eachicon} />
                <FaTwitter className={styles.eachicon} />
                <BsInstagram className={styles.eachicon} />
                <BsMessenger className={styles.eachicon} />
                <IoLogoWhatsapp className={styles.eachicon} />
            </div>
        </div>
        <div className={`${styles.rightside}`}>
            <div className={`${styles.rightdiv}`}>
                <div className={`${styles.titlelist}`}>Shopping with us</div>
                <ul className={styles.rightul}>
                    <li>Making Payments</li>
                    <li>Delivery Options</li>
                    <li>Buyer Protection</li>
                </ul>
            </div>
            <div className={`${styles.rightdiv}`}>
                <div className={`${styles.titlelist}`}>Customer Service</div>
                <ul className={styles.rightul}>
                    <li>Customer Services</li>
                    <li>Transaction Services Agreement</li>
                    <li>Take Our Feedback Survey</li>
                </ul>
            </div>
            <div className={`${styles.rightdiv}`}>
                <div className={`${styles.titlelist}`}>Collaborate with us</div>
                <ul className={styles.rightul}>
                    <li>Partnerships</li>
                    <li>Affiliate Program</li>
                </ul>
            </div>
        </div>
    </div>
  )
}