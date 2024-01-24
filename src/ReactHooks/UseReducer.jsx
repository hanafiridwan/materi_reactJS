import React, { useReducer } from 'react'

const UseReducer = () => {

    const reducer = (state, action) => { //di reducer ini menerima 2 parameter yaitu state dan action.
        // disinilah logic yang akan dijalankan yang sudah ditandai oleh dispatch. dan logic ini bisa ditaruh di luar function (kalau di state harus membuat logic di dalam body diantara const dan return) bisa juga di taro di file lain tinggal buat file baru, ctrl+x logicnya, sebelum dipaste ketik export dulu, dan di file reducer ini kita import.
        //dibawah ini switch case yang sama seperti if/else.
        switch (action.type) { //case disini berdasarkan type di return bawah
            case 'CHANGE_NAME': //nama type nya
            return{
                //return dengan objek
                name: 'Udin'
            }
        
            default: return state //artinya kalau kita mau lakuin sesuatu kita mau lakuin apa. karena kita tidak mau lakukan apa-apa maka tuliskan saja return state
        }
    }

  const [state, dispatch] = useReducer(reducer, {name:'Saipul'}) //di dalama kurung siku di useReducer berisi state dan dispatch, berbeda dengan useState yang berisi state dan setstate. dispatch adalah penanda. 
  //dan di dalam use reducernya berisi function reducer dan inisial state yang dimasukan kedalam bjek agar bisa muat banyak.
  return (
    <div>
        <h1>UseReducer</h1>
        <h2>{state.name}</h2>
        <button onClick={() => dispatch({type: 'CHANGE_NAME'})}>Change name</button>
        {/* ITULAH DISPATC yang berfungsi sebagai penanda. melakukan setStatenya itu di function reducer  */}
    </div>
    
  )
}


export default UseReducer;