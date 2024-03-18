import { useRef, useState } from "react"

const useSubmitForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const [text, setText] = useState<string>('')

  const isInputValid = (email:string) => {
    if(!email||email === ''){
      setText('No has escrito tu correo')
      return false
    }else if(!email.includes('@') || !email.includes('.com')){
      setText('no escribiste @direccion.com')
      emailRef.current!.value = ''
      return false
    }
    return true
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    const email = emailRef.current?.value || ''
    const validInput = isInputValid(email)
    if(!validInput){
      return
    }
    setText(`Enviamos la info a ${email}`)
    emailRef.current!.value = ''
  }
  return {text, handleSubmit, emailRef}
}
export default useSubmitForm