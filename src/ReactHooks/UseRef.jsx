import React, {useEffect, useRef} from 'react'

const UseRef= () => {
    const inputRef = useRef()

    // kita akan membuat input dibawah ini menjadi fokus saat browser di refresh, jadi kita membutuhkan komponen life cycle yang sama dengan didmount yaitu: useEffect
    useEffect(() => {
        inputRef.current.focus()    //kenapa pilihannya cuma 1 yaitu current karena useRef hanya me return 1 objek saja yaitu current. Focus ini adalah method dari js
    }, []) //hasilnya 

  return (
    <div>
      <h1>Learn UseReff</h1>
    <input type="text" ref={inputRef} /> {/*hasilnya saat input di klik maka akan fokus atau bordernya menyala. useRef ini berguna untuk memanipulasi input ini agar memiliki perilaku sesuai dengan yang diinginkan.*/}
    </div>
    // Setiap elemen diatas ini dari div dan h1 ada elemen ref={} yang berguna untuk merefernsikan kepada sesuatu.
  )
}

export default UseRef