import React, { useEffect, useState, useRef } from 'react'

const UseRef2 = () => {
    const[timer, setTimer] = useState(0)

    const intervalRev = useRef() //dengan ini kita bisa membuat semua bagian di useEffect bisa digunakan.

    useEffect(() => {
        intervalRev.current = setInterval(() => {
            setTimer(prev => prev+1)
        }, 1000) //dibaca mengatur interval waktu agar setiap 1 detik setTimer yang sebelumnya 0 di tambah 1. lalu buat clearing agar saat browser di refresh akan kembali ke angka 0, dengan menambahkan const dan sebuah variabel.

        return () => {
            clearInterval(intervalRev.current)
        }

    }, []) //kenapa setTimer nya dimasukan kedalam useEffect, karena agar saat browser di refresh timernya langsung jalan.

  return (
    <div>
      <h1>Make Timer with UseRef2</h1>
      <h2>{timer}</h2>
      <button onClick={() => clearInterval(intervalRev.current)}>Stop</button>
      {/* kenapa interval dari clearInterval ini tidak terdefinisi? Padahal ada di dalam useEffect?
      dalam bahasa Js ada yang namanya scope, jadi karena intervel ini dijalankan didalam useEffect jadi tidak bisa dijalankan diluar useEffect itu. agar bisa terpanggil kita harus buat interval useEffect ini menjadi referensi dengan membuat usRef lagi. */}
    </div>
  )
}

export default UseRef2