import { useRef, useState } from "react"
import useValidInput from "./useValidInput"

const useSubmitForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const [validEmail, setValidEmail] = useState<null | string>(null)
  const {isValidData, error} = useValidInput()

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    const email = emailRef.current?.value || ''
    const validInput = isValidData(email)
    if(!validInput){
      return
    }
    setValidEmail(`Enviamos la info a ${email}`)
    emailRef.current!.value = ''
  }
  return {validEmail, handleSubmit, emailRef, error}
}
export default useSubmitForm