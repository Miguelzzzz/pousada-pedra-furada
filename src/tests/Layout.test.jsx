import { render, screen } from "@testing-library/react"; 
import Layout from "../components/Layout.jsx"; 
 
jest.mock("../components/Headers.jsx", () => () => <header>Mock Header</header>); 
 
describe("Layout.jsx — Estrutura principal da aplicação", () => { 
  it("deve renderizar o Header, o conteúdo filho e o Footer", () => { 
    render( 
      <Layout> 
        <p>Conteúdo interno</p> 
      </Layout> 
    ); 
    expect(screen.getByText("Mock Header")).toBeInTheDocument(); 
    expect(screen.getByText("Conteúdo interno")).toBeInTheDocument(); 
    expect(screen.getByText(/Pousada Pedra Furada/i)).toBeInTheDocument(); 
  }); 
}); 