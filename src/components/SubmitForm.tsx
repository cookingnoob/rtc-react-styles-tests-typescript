import { Box, Button, Input, Typography } from "@mui/material"
import { modalStyle } from '../styles/ReserveButtonStyles'
import { forwardRef } from 'react'
import useSubmitForm from "../hooks/form/useSubmitForm"
import { SubmitFormProps } from "../interfaces/Interfaces"
import NotificationText from "./NotificationText"

const SubmitForm = forwardRef<HTMLDivElement,SubmitFormProps> (({title}, ref) => {
    const {validEmail, error, emailRef, handleSubmit} = useSubmitForm()
  return (
    <Box sx={modalStyle} ref={ref}>
    <Typography variant='h6'>Te enviaremos más info sobre el viaje a {title}</Typography>
      <NotificationText validEmail={validEmail} error={error} />
      <Input 
        style={{background: 'whitesmoke', width:'200px'}} 
        type='email' 
        placeholder='Escribe tu correo'
        inputRef={emailRef}
        />
      <Button style={{width:'100px'}} 
              variant='contained'
              onClick={handleSubmit}>
              Submit
      </Button>
    </Box>
  )
})

export default SubmitForm