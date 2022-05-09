// import libraries
import React from 'react'

// import components
import EachProduct from './EachProduct'

// import styles
import styles from '../styles/Productstray.module.css'

// import assets
import img1 from '../assets/images/books/img1.jpg'

export default function Productstray() {
  return (
    <div className={styles.wraps}>
        <EachProduct img="img1" title="The Book That Stood Out" description="The Book that stod out is the first of the second of the third" price="$2.99" />
        <EachProduct title="The Book That Stood Out" description="The Book that stod out is the first of the second of the third" price="$2.99" />
        <EachProduct title="The Book That Stood Out" description="The Book that stod out is the first of the second of the third" price="$2.99" />
        <EachProduct title="The Book That Stood Out" description="The Book that stod out is the first of the second of the third" price="$2.99" />
        <EachProduct img="img1" title="The Book That Stood Out" description="The Book that stod out is the first of the second of the third" price="$2.99" />
        <EachProduct img="img1" title="The Book That Stood Out" description="The Book that stod out is the first of the second of the third" price="$2.99" />
        <EachProduct title="The Book That Stood Out" description="The Book that stod out is the first of the second of the third" price="$2.99" />
        <EachProduct title="The Book That Stood Out" description="The Book that stod out is the first of the second of the third" price="$2.99" />
        <EachProduct title="The Book That Stood Out" description="The Book that stod out is the first of the second of the third" price="$2.99" />
        <EachProduct img="img1" title="The Book That Stood Out" description="The Book that stod out is the first of the second of the third" price="$2.99" />
        {/* <EachProduct /> */}
    </div>
  )
}
