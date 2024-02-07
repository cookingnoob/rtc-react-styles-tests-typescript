import { ArrowRight } from '@mui/icons-material'
import { Box, IconButton, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const VideoModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <IconButton aria-label='Ver video' sx={{color: 'whitesmoke'}} onClick={handleOpen}> 
      <ArrowRight/> 
    </IconButton>
    <Modal    open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} padding={3}>
      <Box >
        <img src="../../public/modalImage.png" alt="thumbnail" width={'800px'}/>
      </Box>
      <Typography position={'absolute'} 
                  top={'100px'} 
                  width={'200px'} 
                  textAlign={'center'} 
                  color={'whitesmoke'} 
                  bgcolor={'rgba(214, 214, 214,.3)'} 
                  borderRadius={'10px'}>
          Video no disponible
      </Typography>
      </Box>
    </Modal>
     </>
  )
}

export default VideoModal