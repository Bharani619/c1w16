import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
          <GroceryItem data={data}/>
        </div>
        </>
    )
}
export default GroceryDetails