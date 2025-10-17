import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
jest.mock("../../pages/LoginPage", () => () => <div>Login Mock</div>); 
jest.mock("../../pages/TarefasPage", () => () => <div>Tarefas Mock</div>); 
jest.mock("../../pages/RelatoriosPage", () => () => <div>Relatórios Mock</div>);

describe("Página inicial", () => {
  it("deve renderizar o título principal", () => {
    const { container } = render(<Home />);
    console.log(container.innerHTML);
    expect(
      screen.getByText("Bem-vindo à Pousada Pedra Furada")
    ).toBeInTheDocument();
  });
    // expect(screen.getByText("Tarefas Mock")).toBeInTheDocument(); 
}); 
