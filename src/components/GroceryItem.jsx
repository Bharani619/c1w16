// reusable card component

import CartButton from "./CartButton";

import styles from '../Grocery.module.css';


let Image_src = {
  width:"50%",
}

const GroceryItem = (datas) => {
  
  return (
        <>
        <div className={styles.Container}>
        {datas.data.map((el)=> {
              return (
                
                  <div className={styles.prod_container}>
                  <img style={Image_src} src={el.imgURL} alt="" />
                  <p>{el.title}</p>
                  <div className={styles.p_tag}>
                      <p>{el.sellingPrice}</p>
                      <p className={styles.striked}>{el.mrp}</p>
                  </div>
                  <div>
                      <CartButton/>
                  </div>
                 </div>
              )
           })}
        </div>
        </>
  );
};
export default GroceryItem;
