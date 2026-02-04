import {render, screen } from '@testing-library/react';
import ProductsPage  from "../Pages/ProductsPage";

describe('ProductsPage', ()=>{
    it('show loading state initially', ()=> {
        render(<ProductsPage/>)
        expect(screen.getByRole("status")).toBeInTheDocument()
    })
})