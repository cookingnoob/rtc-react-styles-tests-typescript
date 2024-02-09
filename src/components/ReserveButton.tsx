import { Box, Button, Input, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { modalStyle } from '../styles/ReserveButtonStyles'


interface ReserveButtonProps{
  title: string
}

const ReserveButton: React.FC<ReserveButtonProps> = ({title}) => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [text, setText] = useState('')
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setText('')
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    if(input === ''){
      setText('No has escrito tu correo')
      return
    }
    if(!input.includes('@') || !input.includes('.com')){
      setText('no escribiste @direccion.com')
      setInput('')
      return
    }
    setText(`Enviamos la info a ${input}`)
    setInput('')
  }

  return (
    <>
    <Button variant='contained' onClick={handleOpen}>Reserva tu viaje a {title}</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography variant='h6'>Te enviaremos más info sobre el viaje a {title}</Typography>
        {text !== '' ? <Typography>{text}</Typography> : <></>}
        
          <Input 
            style={{background: 'whitesmoke', width:'200px'}} 
            type='email' 
            placeholder='Escribe tu correo'
            value={input}
            onChange={handleInput}
            />
          <Button style={{width:'100px'}} 
                  variant='contained'
                  onClick={handleSubmit}>Submit</Button>
      </Box>
  </Modal>
    </>
  )
}

export default ReserveButton