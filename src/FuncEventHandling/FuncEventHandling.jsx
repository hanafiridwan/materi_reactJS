import React from 'react'

export default function FuncEventHandling() {
    //case 1
    const handleClick = () => {
        alert('Hello Udin')
    }

    //case 2. di materi kita mau memanggil sebuah parameter jadi lihat codingan di bawah.
    const handlesayHello = (name) => {
        alert(`Hello ${name}`) //ingat pakai kutip kebalik (``)
    }
  return (
    <div>
      <h2>Functional Component</h2>
      <button onClick={handleClick}>Clic me</button>
      <button onClick={() => handlesayHello('Wawan')}>Say Hello</button> 
      {/* //"sapei" ini adalah isi parameternya */}
    </div>
  )
}
