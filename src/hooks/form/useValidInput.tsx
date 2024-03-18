import { useState } from "react"

const useValidInput = () => {
    const [error, setError] = useState<string|null>(null)

    const isValidData = (email:string) => {     
        if(!email||email === ''){
          setError('No has escrito tu correo')
          return false
        } else if (!email.includes('@') || !email.includes('.com')) {
          setError('no escribiste @direccion.com')
          return false
        }
        setError(null)
        return true
      }
      return {isValidData, error}
}

  export default useValidInput
  