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
    const header = screen.getByRole('heading', { name: /Siéntete en casa allá donde te lleve tu trabajo/i })
    const videoText = screen.getByText(/échale un vistazo al video para viajes de trabajo/i)
    const videoButton = screen.getByRole('button', { name: /Ver video/i })
    const inputText = screen.getByText(/para empezar agrega tu correo electónico de trabajo/i)
    const userMailInput = screen.getByRole('textbox')
    const userMailButton = screen.getByRole('button', { name: /agregar correo electrónico/i })
    const questionText = screen.getByText(/¿haces viajes para tu empresa?/i)
    const moreInfoText = screen.getByText(/más información/i)
    const moreInfoButton = screen.getByRole('button', { name: /más información/i })
    const image = screen.getByAltText('Imagen de la propiedad')
    expect(header).toBeInTheDocument()
    expect(videoText).toBeInTheDocument()
    expect(videoButton).toBeInTheDocument()
    expect(inputText).toBeInTheDocument()
    expect(userMailInput).toBeInTheDocument()
    expect(userMailButton).toBeInTheDocument()
    expect(questionText).toBeInTheDocument()
    expect(moreInfoText).toBeInTheDocument()
    expect(moreInfoButton).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
  test('correct data flow', async () => {
    render(<Main />)
    const userMailInput = screen.getByRole('textbox')
    const userMailButton = screen.getByRole('button', { name: /agregar correo electrónico/i })
    await userEvent.type(userMailInput, 'aaaa@gmail.com')
    await userEvent.click(userMailButton)
    const correctDataText = screen.getByText(/Te notificaremos a aaaa@gmail.com de las actualizaciones/i)
    await expect(userMailButton).toBeDisabled()
    await expect(correctDataText).toBeInTheDocument()
  });
  test('if the email textbox is empty there is a notification', async () => {
    render(<Main />)
    const userMailButton = screen.getByRole('button', { name: /agregar correo electrónico/i })
    await userEvent.click(userMailButton)

    const wrongInput = screen.getByText(/algo está mal en el campo del correo/i)
    await expect(userMailButton).toBeEnabled()
    await expect(wrongInput).toBeInTheDocument()
  })
  test('if the mail does not include a @ or .com there is an error message', async () => {
    render(<Main />)
    const userMailInput = screen.getByRole('textbox')
    const userMailButton = screen.getByRole('button', { name: /agregar correo electrónico/i })
    await waitFor(() => userEvent.type(userMailInput, 'jjj'))
    await userEvent.click(userMailButton)
    const wrongInput = screen.getByText(/algo está mal en el campo del correo/i)
    await expect(userMailButton).toBeEnabled()
    await expect(wrongInput).toBeInTheDocument()
  })
  test('wrong message dissapears when the user inputs the right data', async () => {
    render(<Main />)
    const userMailInput = screen.getByRole('textbox')
    const userMailButton = screen.getByRole('button', { name: /agregar correo electrónico/i })
    await userEvent.type(userMailInput, 'jjj')
    await userEvent.click(userMailButton)
    const wrongInput = screen.getByText(/algo está mal en el campo del correo/i)
    await expect(userMailButton).toBeEnabled()
    await expect(wrongInput).toBeInTheDocument()
    await userEvent.type(userMailInput, 'aaaa@gmail.com')
    await userEvent.click(userMailButton)
    await expect(userMailButton).toBeDisabled()
    await expect(wrongInput).not.toBeInTheDocument()
  })
  test('modal flow', async () => {
    render(<Main />)
    const videoButton = screen.getByRole('button', { name: /Ver video/i })
    expect(videoButton).toBeInTheDocument()

    await userEvent.click(videoButton)
    const videoModal = screen.getByAltText('thumbnail')
    expect(videoModal).toBeInTheDocument()
  })
})