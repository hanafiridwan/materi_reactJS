import React from 'react'

export default function Renderinglist() {
  const productlist = ["Komputer", "Laptop", "Keyboard"] //ini teknik list rendering ke 2. dijadikan array dahulu baru di render
  const productlistComplex = [
    {
      name : 'Komputer',
      price : '500000'
    },
    {
      name : 'Laptop',
      price : '500000'
    },
    {
      name : 'Keyboard',
      price : '500000'
    }
  ]
  return (
    <div>
      {/* yg ini teknik list renderng ke 1 */}
      <h1>Produk List</h1> 
      <h3>Komputer</h3>
      <h3>Laptop</h3>
      <h3>Keyboard</h3>

    <h1>Product list rendering</h1>
      {productlist.map((item) => (
        <h3>{item}</h3> //karena array diatas berbentuk string maka tinggal panggil item saja
      ))}

      <h1>Product list rendering Complex</h1>
      {productlistComplex.map((product) => (
        //karena array diatas berbentuk objek makanya dipanggil nama dalam kurung plus name and price nya
        <div>
          <h2>Nama Product: {product.name}</h2>
          <h2>Price: Rp{product.price}</h2>
        </div>
      ))}
    </div>
  )
}
