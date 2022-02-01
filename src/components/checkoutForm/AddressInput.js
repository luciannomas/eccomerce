import React from 'react'
import {  useForm, Controller } from "react-hook-form"; // controller = "crea un componente especifico"

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
//import { TextField } from '@material-ui/core'
const AddressInput = ({ name , label, required }) => {

    //const { control }  = useFormContext()
    const { control, register } = useForm()


    return (
       <Grid item xs = {12} sm = {6}>
          <Controller 
            control = { control } 
            name = { name } 
            
            render={({ field: { onChange, onBlur, value }}) => (
                <TextField
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                    value={value}
                    label={label}
                    required={required}
                />
            )}
           />
       </Grid>
    )
}

export default AddressInput