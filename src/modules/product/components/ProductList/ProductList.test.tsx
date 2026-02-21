import { render, screen } from "@testing-library/react"

import ProductList from "./ProductList"

describe("ProductList", () => {
  it("should show empy message", () => {
    render(<ProductList products={[]} />)
    expect(screen.getByText("Produto não encontrado")).toBeInTheDocument()
  })
})
