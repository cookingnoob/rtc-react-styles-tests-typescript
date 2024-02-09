import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from './Home'
import MainSection from '../components/MainSection'

/**
* @vitest-environment jsdom
*/

describe('Main page components and flow', ()=>{
    test('renders components', () => {
        render(<Home/>)
        const header = screen.getByRole('heading', {name: /IberiViaje/i})
        const datesAnnouncement = screen.getByText(/nuevas fechas disponibles! abril 2024/i)

        const destinationImgBarcelona = screen.getByAltText('Barcelona Sagrada Familia')
        const cardTitleBarcelona = screen.getByRole('heading', {name: /barcelona/i})
        const cardParagraphBarcelona = screen.getByText(/explora barcelona/i)
        const cardButtons = screen.getAllByRole('button', {name: /Reserva/i})
    
        const destinationImgMadrid = screen.getByAltText('Madrid Templo Debod')
        const cardTitleMadrid = screen.getByRole('heading', {name: /Madrid/i})
        const cardParagraphMadrid = screen.getByText(/descubre Madrid/i)

        const destinationImgCordoba = screen.getByAltText('Cordoba Alcazar de los Reyes Cristianos')
        const cardTitleCordoba = screen.getByRole('heading', {name: /Córdoba/i})
        const cardParagraphCordoba = screen.getByText(/visita Córdoba/i)

        const destinationImgSevilla = screen.getByAltText('Sevilla Plaza España')
        const cardTitleSevilla = screen.getByRole('heading', {name: /Sevilla/i})
        const cardParagraphSevilla = screen.getByText(/sumérgete en sevilla/i)

        const destinationImgGranada = screen.getByAltText('Granada la Alhambra')
        const cardTitleGranada = screen.getByRole('heading', {name: /Granada/i})
        const cardParagraphGranada = screen.getByText(/explora Granada/i)
        
        const footer = screen.getByText(/made by Alan Coste/i)

        expect(header).toBeInTheDocument()
        expect(datesAnnouncement).toBeInTheDocument()

        expect(cardButtons.length).toBeGreaterThan(0)

        expect(destinationImgBarcelona).toBeInTheDocument()
        expect(cardTitleBarcelona).toBeInTheDocument()
        expect(cardParagraphBarcelona).toBeInTheDocument()
  
        expect(destinationImgMadrid).toBeInTheDocument()
        expect(cardTitleMadrid).toBeInTheDocument()
        expect(cardParagraphMadrid).toBeInTheDocument()

        expect(destinationImgCordoba).toBeInTheDocument()
        expect(cardTitleCordoba).toBeInTheDocument()
        expect(cardParagraphCordoba).toBeInTheDocument()


        expect(destinationImgSevilla).toBeInTheDocument()
        expect(cardTitleSevilla).toBeInTheDocument()
        expect(cardParagraphSevilla).toBeInTheDocument()

        expect(destinationImgGranada).toBeInTheDocument()
        expect(cardTitleGranada).toBeInTheDocument()
        expect(cardParagraphGranada).toBeInTheDocument()
        expect(footer).toBeInTheDocument()
    })
    test('modal flow', async () => {
        render(<MainSection/>)
        const barcelonaButton = screen.getByRole('button', {name: /reserva tu viaje a barcelona/i})
        expect(barcelonaButton).toBeInTheDocument()
        //clic para sacar el modal
        await userEvent.click(barcelonaButton)
        const modalTitle = await screen.getByRole('heading', {name: /te enviaremos más info sobre el viaje a/i})
         const modalInput = await screen.getByPlaceholderText('Escribe tu correo')
         const submitBtn = await screen.getByRole('button', {name: /submit/i})
         expect(modalInput).toBeInTheDocument()
         expect(submitBtn).toBeInTheDocument()
         expect(modalTitle).toBeInTheDocument()
     //input se hace clic en el submit sin haber escrito nada
        await userEvent.click(submitBtn)
        const noInputText = await screen.getByText(/no has escrito tu correo/i)
        expect(noInputText).toBeInTheDocument()
   
        await userEvent.type(modalInput, 'aaaaa')
        await userEvent.click(submitBtn)
        const errorInput = await screen.getByText(/no escribiste @direccion.com/i)
        expect(noInputText).not.toBeInTheDocument()
        expect(errorInput).toBeInTheDocument()
        expect(modalInput).toHaveValue('')
        
        await userEvent.type(modalInput, 'jjjj@direccion.com')
        await userEvent.click(submitBtn)
        const sentInfoText = await screen.getByText(/enviamos la info a/i)
        expect(errorInput).not.toBeInTheDocument()
        expect(modalInput).toHaveValue('')
        expect(sentInfoText).toBeInTheDocument()
    })
})