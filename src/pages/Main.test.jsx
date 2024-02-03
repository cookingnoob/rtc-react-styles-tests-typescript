import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from './Main'
/**
* @vitest-environment jsdom
*/

describe('Main component flow', () => {
  test('renders elements', () => {
    render(<Main />)
    const header = screen.getByRole('heading', { name: /Siéntete en tu casa allá donde te lleve tu trabajo/i })
    const videoText = screen.getByText(/echale un vistazo al video para viajes de trabajo/)
    const videoButton = screen.getByRole('button', { name: /Ver video/i })
    const userMailInput = screen.getByPlaceholderText(/escribe tu correo/i)
    const userMailButton = screen.getByRole('button', { name: /agregar correo electrónico/i })
    const questionText = screen.getByText(/¿haces viajes para tu empresa?/i)
    const moreInfoText = screen.getByText(/más información/i)
    const moreInfoButton = screen.getByRole('button', { name: /más información/i })
    const image = screen.getByAltText('Imagen de la propiedad')
    expect(header).toBeInTheDocument()
    expect(videoText).toBeInTheDocument()
    expect(videoButton).toBeInTheDocument()
    expect(userMailInput).toBeInTheDocument()
    expect(userMailButton).toBeInTheDocument()
    expect(questionText).toBeInTheDocument()
    expect(moreInfoText).toBeInTheDocument()
    expect(moreInfoButton).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
})