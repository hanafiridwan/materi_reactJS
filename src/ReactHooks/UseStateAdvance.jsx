import React, { useState } from 'react'

 const UseStateAdvance = () => {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // onChange={(event) => setName(event.target.value) } = ini dibagian input name
    // onChange={(event) => setEmail(event.target.value) } = ini dibagian input email
    //ini adalah cara yang pertama

    const insialState = {
        name: '',
        email: ''
    }

    const [data, setData] = useState(insialState)
        // kita akan menampung lebih dari satu value hanya dengan satu state agar lebi clean codingannya. bisa diisi disini dengan menambahkan calibreses di dalam tanda kurung useState dan isi valuenya atau buat sebuah const baru agar lebih clean, contoh: seperti diatas
    

    const handleSubmit = (event) => {
        event.preventDefault(); //agar saat di running browsernya tidak ke refresh
        // console.log(name, email);
        console.log(data)
    }

const handleChange = (event) => {
    setData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value
    })) // dibaca didalam handle change kita akan setdata dari prevState (state yang sebelumnya yang ada name sama email) yang akan langsung me return. ...prev/separate prev artinya kita ambil semua state sebelumnya, 
    // alasan target dari valuenya harus ada kurung siku [event.target.name] ini karena kurung siku ini menandakan ini dinamis artinya saat user mengetik di name maka yang ke set akan name juga sesuai dengan (ini yg diambil -> name:'') nya, dan saat emailnya di ketik maka akan berubah emailnya karena sudah dinamis. sebanyak apapun value nya akan bisa berhasil karena keynya sudah dinamis
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name </label>
                <input type="text" name="name" id="name" placeholder='Name' onChange={handleChange}  />
                {/* di materi form handling untuk mendapatkan value yang diinput oleh user dari client atau dari website kita harus menargetkan valuenya. kata event nya bisa diganti jadi e saja */}
            </div>
            <div>
                <label htmlFor="">Email </label>
                <input type="email" name="email" id="email" placeholder='Email' onChange={handleChange}  />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UseStateAdvance;