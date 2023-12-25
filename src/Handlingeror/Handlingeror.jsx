import React from 'react'

export default function Handlingeror() {
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
    return (
      <div>
        {/* yg ini teknik list renderng ke 1 */}
        {/* <h1>Produk List</h1> 
        <h3>Komputer</h3>
        <h3>Laptop</h3>
        <h3>Keyboard</h3> */}
  
      <h1>Product list rendering</h1>
        {productlist.map((item, index) => (
          <h3 key={index}>{item}</h3>
          //di handling error ini, agar error di console browser hilang harus tambahkan properti key. Dan didalamnya harus unique makanya diisi dengan item. Tapi jika nama produknya sama {item} ini sudah tidak bisa digunakan alias tidak unique lagi. Karena itu buat key yang lain dengan mengisi index

          // {index} ini biasa dipakai di crud, bisa dipakai tapi tidak identik, jadi kita bisa lihat di contoh kedua. Dengan menambahakan properti 'id' membuat key nya unique dan identik karena walaupun salah satu dihapus contohnya komputer, maka yang lain tidak akan bisa memiliki id yang sama.
        ))}
  
        <h1>Product list rendering Complex</h1>
        {productlistComplex.map((product) => (
          <div key={product.id}>
            <h2>Nama Product: {product.name}</h2>
            <h2>Price: Rp{product.price}</h2>
          </div>
        ))}
      </div>
    )
}
