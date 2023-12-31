import React from 'react'
import './CSSreact.css'
import styles from './CSSreact.module.css'

export default function CSSreact() {
    const productlist = ["Komputer", "Laptop", "Keyboard", "Laptop"] 
    const productlistComplex = [
      {
        id : 1,
        name : 'Komputer',
        price : '500000'
      },
      {
        id : 2,
        name : 'Laptop',
        price : '500000'
      },
      {
        id : 3,
        name : 'Keyboard',
        price : '500000'
      }
    ]
    const styledText = {
        backgroundColor: "blue"
    }
    // diatas ini CSS react camel case atau cara ke 2
    return (
      <div>
  
      <h1 style={{color: "red", backgroundColor: "blue"}}>Product list rendering</h1> 
      {/* Ini CSS react inline */}
        {productlist.map((item, index) => (
          <h3 key={index} style={styledText}>{item}</h3>
        ))}

        <button className={styles.primary}>Submit</button>
  
        {/* <h1>Product list rendering Complex</h1>
        {productlistComplex.map((product) => (
          <div key={product.id}>
            <h2>Nama Product: {product.name}</h2>
            <h2>Price: Rp{product.price}</h2>
          </div>
        ))} */}
      </div>
    )
}
