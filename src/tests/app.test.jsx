import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
describe("Página inicial", () => {
  it("deve renderizar o título principal", () => {
    const { container } = render(<Home />);
    console.log(container.innerHTML);
    expect(
      screen.getByText("Bem-vindo à Pousada Pedra Furada")
    ).toBeInTheDocument();
  });
}); 
