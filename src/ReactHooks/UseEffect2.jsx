import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
  const [data, setData] = useState([]) //karena kita mendapatkan respon sebuah array yang didalamnya ada objek, maka di dalam useState ini dikasih array atau kurung siku.

    useEffect(() => {
      //dan kita membutuhkan logic jika mau fetching data, maka dibuatlah:
      let auth = true //auth ini variabelnya(bebas namainnya)
      fetch('https://jsonplaceholder.typicode.com/users') //berfungsi mengambil data dari API.
      .then((response) => response.json()) //kita akan membuat promise.
      .then((data) => {
        if (auth) {
          setData(data)
        }
      }) //kita akan mengambil data. karena kita mau setData maka console.log(data) diganti menjadi seperti yang diatas. dan
      .catch((error) => console.log(error))// nge catch data kalau error.
      return () => auth = false // ini return statement will unmount. kita buat auth nya menjadi false.
    }, [])// tanpa array dependensi, maka browser akan fetching data terus menerus tanpa henti. Makanya kita butuh array.

    console.log(data)


  return (
    <div>
      <h1>Learn fetching data with useEffect2</h1>
    </div>
  )
}

export default UseEffect2