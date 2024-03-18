import { Typography } from '@mui/material'
import { NotificationTextProps } from '../interfaces/Interfaces'

const NotificationText: React.FC<NotificationTextProps> = ({validEmail, error}) => {
  return (
    <>
    {validEmail !== null ? <Typography>{validEmail}</Typography> : <></>}
    {error !== null ? <Typography>{error}</Typography> : <></>}
    </>
  )
}

export default NotificationText