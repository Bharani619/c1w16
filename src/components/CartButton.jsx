
// keep the add to cart component here

import styles from '../Grocery.module.css';

let btn_flex = {
   display:"flex",
   justifyContent:"space-around"
}


const CartButton = () => {
    //manage state of the count 
  return (
  <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div style={btn_flex}>
      <button>-</button>
      <p className="count-item"></p>
      {/* <p className="count-item">{count}</p> */}
      <button>+</button>
  </div>
  <>
  <button className={styles.btn_cart}>ADDTOCART</button>
  </>
  </>
  )
};
export default CartButton
