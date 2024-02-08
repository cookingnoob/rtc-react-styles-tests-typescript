import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from './Home'

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
        
        expect(header).toBeInTheDocument()
        expect(datesAnnouncement).toBeInTheDocument()
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
    })
})