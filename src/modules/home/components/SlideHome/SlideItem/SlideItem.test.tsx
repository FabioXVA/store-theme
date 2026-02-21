import { render, screen } from "@testing-library/react"

import { SlideItem } from "."

describe("SlideItem", () => {
  const mockSlideItem = {
    title: "Melhor Oferts de eletronicos",
    subtitle: "Mantenha-se elegante com as nossas novidades!",
    image: "slider1.png",
    link: "/product/1",
    buttonText: "Compre Agora",
  }

  it("should render title, subtitle and button when props are provided", () => {
    render(<SlideItem {...mockSlideItem} />)

    const title = screen.getByText("Melhor Oferts de eletronicos")
    const subtitle = screen.getByText("Mantenha-se elegante com as nossas novidades!")
    const buttonText = screen.getByText("Compre Agora")

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(buttonText).toBeInTheDocument()
  })
})
