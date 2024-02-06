import React, { useMemo, useState } from 'react'
import { useUserContext } from '../context/UseContext'
import { expensiveCalculation } from '../utils/function'
// import { useUserContext } from '../App'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const calculation = useMemo(() => expensiveCalculation(count),[count]) //kita buat ini supaya dibagian increment ada sedikit delay sebelum di return. didalam kurung diisi count karena expensiveCalculation nya menerima variabel num atau number. Alasan kenapa bisa delay adalah karena kodingan kita menjalankan looping dari function expensiveCalculation. Tapi hasilnya addtodos juga ikut delay, cara agar hanya increment saja yang delay adalah menggunakan useMemo. hasilnya addtodos nya tidak delay lagi.

    const Increment = () => {
        setCount(prev => prev + 1)
    }

    const AddTodos = () => {
        setTodos(prev => [...prev, 'New to do'])
    }

    const user = useUserContext()

    console.log(user) //ini adalah materi tentang useContext.

  return (
    <div>
      <h1>Learn UseMemo</h1>
      <h2>{count}</h2>
      <button onClick={Increment}>Increment</button>
      <br /><br />
      <h1>Calculation: {calculation}</h1>
      <button onClick={AddTodos}>Add to do</button> {/*hasilnya saat button di klik new todo nya akan ke samping, agar bisa ke bawah maka kita buat mapping. */}
      {todos.map((todo, index) => (
        <h1 key={index}>{todo}</h1>
      ))}
    </div>
  )
}

export default UseMemo

// kita akan membuat 2 fitur yang pertama increment, kedua adalah setTodos(jadi kita bisa menambahkan sebuah list).