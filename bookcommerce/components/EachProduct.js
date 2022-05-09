// import libraries
import React, { state, useReducer } from 'react'
import Image from 'next/image'

// import styles
import styles from '../styles/EachProduct.module.css'

// import assets
import img1 from '../assets/images/books/img1.jpg'

export default function EachProduct(props) {

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {counter: state.counter + 1, cartAdded: state.cartAdded}
                break;
            case "toggleCartButton":
                return {counter: state.counter, cartAdded: !state.cartAdded}
                break;
            default:
                return state;
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, {counter: 0, cartAdded:true});

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
            {state.cartAdded && 
                <span
                    className={styles.cart}
                    onClick={()=>{
                        dispatch({type:"INCREMENT"});
                        dispatch({type:"toggleCartButton"});
                    }}
                    >
                        Add to cart
                </span>
            }
            {state.cartAdded == false && 
                <span
                    className={`${styles.cart} ${styles.falsecart}`}
                    onClick={()=>{
                        dispatch({type:"INCREMENT"});
                        dispatch({type:"toggleCartButton"});
                    }}
                    >
                        Remove from cart
                </span>
            }

        </div>
    </div>
  )
}