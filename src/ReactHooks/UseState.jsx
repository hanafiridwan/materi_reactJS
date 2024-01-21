import React, {useState} from 'react'

const LearnUseState = () => {   //ini sama aja dengan useState di class component karena sama-sama functional component (rect stateles component)
    const [name, setName] = useState("Udin")  //ini adalah cara membuat state di react hooks. tulis nilai valuenya di kurung useState OK, KARENA INI NILAI AWAL. Di dalam peraturan progammer, ketika kita ingin mengubah sebuah state maka harus dengan tambahan set lalu setelah itu bebas contohnya : setName, setEmail, dsb.

    return (
    <div>
      <h1>Component useState</h1>
      <h2>{name}</h2>
      <button onClick={() => setName('Adit')}>Change Name</button>
    </div>
  )
}

export default LearnUseState;