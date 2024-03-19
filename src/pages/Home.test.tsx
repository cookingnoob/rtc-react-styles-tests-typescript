import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";
import MainSection from "../components/MainSection";

/**
 * @vitest-environment jsdom
 */

describe("Main page components and flow", () => {
  test("renders main components", () => {
    render(<Home />);
    const header = screen.getByRole("heading", { name: /IberiViaje/i });
    const datesAnnouncement = screen.getByText(
      /nuevas fechas disponibles! abril 2024/i
    );
    const footer = screen.getByText(/made by Alan Coste/i);

    expect(header).toBeInTheDocument();
    expect(datesAnnouncement).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
  test("renders destination cards", () => {
    render(<Home />);
    const destinationImgBarcelona = screen.getByAltText(
      "Barcelona Sagrada Familia"
    );
    const cardTitleBarcelona = screen.getByRole("heading", {
      name: /barcelona/i,
    });
    const cardParagraphBarcelona = screen.getByText(/explora barcelona/i);
    const cardButtons = screen.getAllByRole("button", { name: /Reserva/i });

    const destinationImgMadrid = screen.getByAltText("Madrid Templo Debod");
    const cardTitleMadrid = screen.getByRole("heading", { name: /Madrid/i });
    const cardParagraphMadrid = screen.getByText(/descubre Madrid/i);

    const destinationImgCordoba = screen.getByAltText(
      "Cordoba Alcazar de los Reyes Cristianos"
    );
    const cardTitleCordoba = screen.getByRole("heading", { name: /Córdoba/i });
    const cardParagraphCordoba = screen.getByText(/visita Córdoba/i);

    const destinationImgSevilla = screen.getByAltText("Sevilla Plaza España");
    const cardTitleSevilla = screen.getByRole("heading", { name: /Sevilla/i });
    const cardParagraphSevilla = screen.getByText(/sumérgete en sevilla/i);

    const destinationImgGranada = screen.getByAltText("Granada la Alhambra");
    const cardTitleGranada = screen.getByRole("heading", { name: /Granada/i });
    const cardParagraphGranada = screen.getByText(/explora Granada/i);

    expect(cardButtons.length).toBeGreaterThan(0);

    expect(destinationImgBarcelona).toBeInTheDocument();
    expect(cardTitleBarcelona).toBeInTheDocument();
    expect(cardParagraphBarcelona).toBeInTheDocument();

    expect(destinationImgMadrid).toBeInTheDocument();
    expect(cardTitleMadrid).toBeInTheDocument();
    expect(cardParagraphMadrid).toBeInTheDocument();
    expect(destinationImgCordoba).toBeInTheDocument();
    expect(cardTitleCordoba).toBeInTheDocument();
    expect(cardParagraphCordoba).toBeInTheDocument();
    expect(destinationImgSevilla).toBeInTheDocument();
    expect(cardTitleSevilla).toBeInTheDocument();
    expect(cardParagraphSevilla).toBeInTheDocument();
    expect(destinationImgGranada).toBeInTheDocument();
    expect(cardTitleGranada).toBeInTheDocument();
    expect(cardParagraphGranada).toBeInTheDocument();
  });
});

describe("Modal flow", () => {
  test("modal is rendering", async () => {
    render(<MainSection />);
    const barcelonaButton = screen.getByRole("button", {
      name: /reserva tu viaje a barcelona/i,
    });
    expect(barcelonaButton).toBeInTheDocument();
    //clic para sacar el modal
    await userEvent.click(barcelonaButton);
    const modalTitle = await screen.getByRole("heading", {
      name: /te enviaremos más info sobre el viaje a/i,
    });
    const modalInput = await screen.getByPlaceholderText("Escribe tu correo");
    const submitBtn = await screen.getByRole("button", { name: /submit/i });
    expect(modalInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(modalTitle).toBeInTheDocument();
 })
 test('no mail was written text renders', async () => {
    render(<MainSection />);
    const barcelonaButton = screen.getByRole("button", {
        name: /reserva tu viaje a barcelona/i,
    });
    expect(barcelonaButton).toBeInTheDocument();
    await userEvent.click(barcelonaButton);
    const submitBtn = await screen.getByRole("button", { name: /submit/i });
    await userEvent.click(submitBtn);
    const noInputText = await screen.getByText(/no has escrito tu correo/i);
    expect(noInputText).toBeInTheDocument();

 })
test('wrong email adress text renders', async () => {
    render(<MainSection />);
    const barcelonaButton = screen.getByRole("button", {
        name: /reserva tu viaje a barcelona/i,
    });
    expect(barcelonaButton).toBeInTheDocument();
    await userEvent.click(barcelonaButton);

    const modalInput = await screen.getByPlaceholderText("Escribe tu correo");
    expect(modalInput).toBeInTheDocument();
    const submitBtn = await screen.getByRole("button", { name: /submit/i });
    expect(submitBtn).toBeInTheDocument();


    await userEvent.type(modalInput, "aaaaa");
    await userEvent.click(submitBtn);
    const errorInput = await screen.getByText(/no escribiste @direccion.com/i);
    expect(errorInput).toBeInTheDocument();
    expect(modalInput).toHaveValue("");
})
test('sent info to correct email text renders', async () => {
    render(<MainSection />);
    const barcelonaButton = screen.getByRole("button", {
        name: /reserva tu viaje a barcelona/i,
    });
    expect(barcelonaButton).toBeInTheDocument();
    await userEvent.click(barcelonaButton);

    const modalInput = await screen.getByPlaceholderText("Escribe tu correo");
    expect(modalInput).toBeInTheDocument();
    const submitBtn = await screen.getByRole("button", { name: /submit/i });
    expect(submitBtn).toBeInTheDocument();

    await userEvent.type(modalInput, "jjjj@direccion.com");
    await userEvent.click(submitBtn);
    const sentInfoText = await screen.getByText(/enviamos la info a/i);
    expect(modalInput).toHaveValue("");
    expect(sentInfoText).toBeInTheDocument();
})

});
