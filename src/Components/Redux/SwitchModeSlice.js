import {createSlice} from '@reduxjs/toolkit'
const initialState = {darkMode : false} ; 
const switModeSlice = createSlice({
      name : 'switchMode' , 
      initialState , 
      reducers : {
            handleSwitch : (state) => {
                  state.darkMode = !state.darkMode ; 
                  if(state.darkMode) {
                        document.body.style.backgroundColor = '#222'  ; 
                  } else {
                        document.body.style.backgroundColor = 'white'
                  }
            }
      }
}) ; 
export default switModeSlice.reducer ; 
export const {handleSwitch} = switModeSlice.actions ; 