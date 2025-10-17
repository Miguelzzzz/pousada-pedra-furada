import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App.jsx";

jest.mock("../pages/TarefasPage.jsx", () => () => <div>Tarefas Mock</div>);
jest.mock("../pages/LoginPage.jsx", () => () => <div>Login Mock</div>);
jest.mock("../pages/RelatoriosPage.jsx", () => () => <div>Relatórios Mock</div>);

describe("Rotas principais", () => {
  it("deve renderizar a página de Tarefas mockada", () => {
    render(
      <MemoryRouter initialEntries={["/tarefas"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Tarefas Mock")).toBeInTheDocument();
  });
});
