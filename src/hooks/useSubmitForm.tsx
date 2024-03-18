import { useRef, useState } from "react"

const useSubmitForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const [text, setText] = useState<string>('')

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    const email = emailRef.current?.value || ''
    if(!email||email === ''){
      setText('No has escrito tu correo')
      return
    }
    if(!email.includes('@') || !email.includes('.com')){
      setText('no escribiste @direccion.com')
      emailRef.current!.value = ''
      return
    }
    setText(`Enviamos la info a ${email}`)
    emailRef.current!.value = ''
  }
  return {text, handleSubmit, emailRef}
}
export default useSubmitForm