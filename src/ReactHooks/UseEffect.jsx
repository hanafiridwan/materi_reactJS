import React, { useEffect, useState } from 'react'
import { useUserContext } from '../context/UseContext'
// import { useUserContext } from '../App' //INI KARENA KITA TIDAK MENGIMPORT DARI FILE APP LAGI TAPI DI FILE CONTEXT

const UseEffect = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Udin')

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleChangename = () => {
        setName('Saipul')
    }

    useEffect(() => {
        console.log('Execute all render') //di useEffect terdapat 2 parameter yaitu: sebuah function dan array.
    }, [name]) //saat di lihat hasilnya tulisan string ini akan terus dirender bersama dengan increment, makanya fungsi dari array/[] dependensi ini adalah agar string ini hanya dieksekusi pada saat pertama kali di render dan tidak akan terender lagi. Tapi saat array-nya diisi contoh [name], maka string in akan dieksekusi pertama kali dan saat button setName nya ditekan.

    const user = useUserContext()

    console.log(user); //ini adalah materi tentang useContext.

  return (
    <div>
      <h1>Learn UseEffect</h1>
      <h2>{count}</h2>
      <h2>{name}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleChangename}>Change name</button>
    </div>
  )
}


export default UseEffect