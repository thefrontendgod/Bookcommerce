// import libraries
import React from 'react'

// import components
import EachProduct from './EachProduct'

// import styles
import styles from '../styles/Productstray.module.css'

export default function Productstray() {
    const cart = [
        ["The Book That Stood Out", "The Book that stod out is the first of the second of the third", "$3.99"],
        ["Sandra The Banny", "The Book that stod out is the first of the second of the third", "$2.99"],
        ["Roots & Rookie Chooks", "The Book that stod out is the first of the second of the third", "$1.99"],
        ["Karnal Joe and Bingie", "The Book that stod out is the first of the second of the third", "$5.99"],
        ["Roots & Rookie Chooks", "The Book that stod out is the first of the second of the third", "$2.99"],
        ["Ranks & Jambienie Korker", "The Book that stod out is the first of the second of the third", "$2.99"],
        ["Banks in African Lookies", "The Book that stod out is the first of the second of the third", "$2.99"],
        ["Roots & Rookie Chooks", "The Book that stod out is the first of the second of the third", "$2.99"],
    ];
  return (
    <div className={styles.wraps}>
      {cart.map((items, index) => {
        return (
          <div>
            <EachProduct title={items[0]} description={items[1]} price={items[2]} />
          </div>
        );
      })}
    </div>
  )
}