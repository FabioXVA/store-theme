import { render, screen } from "@testing-library/react"
import * as Router from "react-router-dom"

import { useProduct } from "../../hooks/useProduct/useProduct"
import ProductPage from "./ProductPage"

jest.mock("../../hooks/useProduct/useProduct")
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}))
const mockUseProduct = useProduct as jest.Mock

const mockProduct = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  rating: { rate: 3.9, count: 120 },
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
}

describe("ProductPage", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("deve pegar o parametro id da url", () => {
    ;(Router.useParams as jest.Mock).mockReturnValue({ id: "1" })
    ;(useProduct as jest.Mock).mockReturnValue({
      product: null,
      load: false,
      error: null,
    })

    // act
    render(<ProductPage />)

    // assert
    expect(useProduct).toHaveBeenCalledWith(1)
  })

  it("deve mostrar o loading", () => {
    mockUseProduct.mockReturnValue({
      product: null,
      load: true,
      error: null,
    })

    render(<ProductPage />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it("deve mostrar o erro", () => {
    mockUseProduct.mockReturnValue({
      product: null,
      load: false,
      error: "Erro ao buscar produto",
    })
    render(<ProductPage />)
    expect(screen.getByText(/Erro ao buscar produto/i)).toBeInTheDocument()
  })

  it("deve renderizar um produto", async () => {
    mockUseProduct.mockReturnValue({
      product: mockProduct,
      load: false,
      error: false,
    })
    render(<ProductPage />)
    const product = await screen.findByTestId("product-item")
    expect(product).toBeInTheDocument()
  })

  it("deve mostrar que os Produtos não foram emcontrados", () => {
    mockUseProduct.mockReturnValue({
      product: null,
      load: false,
      error: false,
    })
    render(<ProductPage />)
    expect(screen.getByText(/No Product found/i)).toBeInTheDocument()
  })
})
