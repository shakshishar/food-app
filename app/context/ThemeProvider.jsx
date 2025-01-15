import {useState, useEffect} from 'react';
import { myContext } from './ThemeContext';


const ThemeProvider=({children})=>{
    const values={}

    return (
        <myContext.Provider value={values}>
          {children}
        </myContext.Provider>
    )

}


export default ThemeProvider;