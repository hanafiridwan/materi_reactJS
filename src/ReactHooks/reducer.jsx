export const reducer = (state, action) => { 
    switch (action.type) { 
        case 'CHANGE_NAME':
        return{
            ...state,
            name: 'Udin'
        }
        case 'INCREMENT':
        return{
            ...state, //case increment ini akan me return atau kita ambil semua value di objek, dan field count nya diubah dari yang tadinya 0 ditambah 1 jadi 1, dst. ini bertujuan agar saat button nya di klik maka name nya tidak akan hilang.
            count: state.count + 1
        }
        case 'DECREMENT':
        return{
            ...state, 
            count: state.count - 1
        }
        default: return state 
    }
}