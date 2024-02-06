import { createContext, useContext, useState } from "react"

// Disini kita akan membuat useContext sederhana disini. Ikuti step-stepnya
const UserContext = createContext() // step 1

export const useUserContext = () => useContext(UserContext) //Step 4. ini adalah hooks buatan sendiri. kita bisa mengakses konteks ini dengan mengimport useUserContext.


const UserContextProvider = ({children}) => {
    const initialState = {
        name: 'Udin',
        email: 'udin@gmail.com',
        job: 'Front End web Developer'
      }
      const [user] = useState(initialState)
      return(
        <UserContext.Provider value={user}> {/*Step 2 dan 3. Provider adalah komponen yang menyuplai data atau konteksnya. Step 5 tertulis bahwa kita bisa memasukan use context di semua tempat, 
    contohnya kita bisa memasukan useContext ini di Usememo. (lihat di app)*/} 
        {children} 
        </UserContext.Provider>
        // ini adalah cara penggunaan global state yang paling sederhana. NOTE: Kata children sebenarnya bebas mau pakai apa saja, tapi biasanya para progammer menggunakan kata children sebagai penyusun komponen.
      );
}

export default UserContextProvider

// agar useContext ini bisa dipakai di semua file maka jangan panggil di file app, tapi di root element kita yaitu index.js kita
