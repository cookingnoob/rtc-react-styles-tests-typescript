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
      emailRef.current!.value = ''
      return
    }
    emailRef.current!.value = ''
    setValidEmail(`Enviamos la info a ${email}`)
  }
  return {validEmail, handleSubmit, emailRef, error}
}
export default useSubmitForm