import { Button, Input, Typography, css } from '@mui/material'
import React, { useState } from 'react'

const inputStyles = css`
background: white;
border-radius: 0px;
width: 300px
`
const submitButtonStyles = css`
background: rgba(58, 102, 61, .6);
color: whitesmoke;

&:hover{
  background: rgba(123, 227, 130, 1);

}
`
const MailForm = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [wrongInput, setWrongInput] = useState(false)

  const handleInput = (event) => {
    setUserInput(`${event.target.value}`)
  }

  const handleSubmit = () => {
    if(userInput === '' || !userInput.includes('@') && !userInput.includes('.com')) {
      setWrongInput(true)
      return
    } 
    setWrongInput(false)
    setIsDisabled(true)
  }

  return (
    <>
    {isDisabled ? 
    <>
    <Typography variant='h5'>Te notificaremos a {userInput} de las actualizaciones</Typography>
    </> : 
    
    <>
       <Typography>para empezar agrega tu correo electónico de trabajo</Typography>
       <Input size='medium' color='primary' sx={inputStyles} onChange={handleInput}/>
    </>}
       <Button sx={submitButtonStyles} onClick={() => handleSubmit()} disabled={isDisabled}>Agregar correo electrónico</Button> 
       {wrongInput && <Typography>Algo está mal en el campo del correo</Typography>}
    </>
  )
}

export default MailForm