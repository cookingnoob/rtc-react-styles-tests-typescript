import { Button, Modal } from '@mui/material'
import React, { useState } from 'react'
import SubmitForm from './SubmitForm'

interface ReserveButtonProps{
  title: string
}

const ReserveButton: React.FC<ReserveButtonProps> = ({title}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
    <Button variant='contained' onClick={() => setOpen(true)}>Reserva tu viaje a {title}</Button>
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <SubmitForm title={title} />
  </Modal>
    </>
  )
}

export default ReserveButton