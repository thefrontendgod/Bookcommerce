// import libraries
import React from 'react'

// import styles
import styles from '../styles/FooterThirdrow.module.css'

export default function FooterThirdrow() {
  return (
    <div className={styles.wraps}>
        <div className={styles.eachdiv}>
            <div className={styles.title}>Get to Know Us</div>
            <ul className={styles.ul}>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Everything Investors</li>
                <li>Device we support</li>
                <li>Chat with Support</li>
            </ul>
        </div>
        <div className={styles.eachdiv}>
            <div className={styles.title}>Make Money With Us</div>
            <ul className={styles.ul}>
                <li>Sell Our Products</li>
                <li>Become an Affiliate</li>
                <li>Recommend a Product</li>
                <li>Let's Sell your book</li>
                <li>More ways to make money</li>
                <li>Chat Support for more ways to make money</li>
            </ul>
        </div>
        <div className={styles.eachdiv}>
            <div className={styles.title}>Investors Information Center</div>
            <ul className={styles.ul}>
                <li>About Us</li>
                <li>Our Space and the Industry</li>
                <li>Financials </li>
                <li>Analytics & Data</li>
                <li>Events & Strategy</li>
                <li>Blog for our Investors</li>
                <li>Forum for investors</li>
                <li>Contact our Investment Support</li>
            </ul>
        </div>
        <div className={styles.eachdiv}>
            <div className={styles.title}>Technical Support</div>
            <ul className={styles.ul}>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Purchase Support</li>
                <li>Returns & Replacement</li>
                <li>Purchase Conflicts</li>
                <li>Chat with a representative</li>
            </ul>
        </div>
    </div>
  )
}
