import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "../pages/TarefasPage.jsx";

test("deve atualizar o status da tarefa ao clicar no botão", () => {
  render(<TarefasPage />);

  expect(screen.getByText("Atribuída")).toBeInTheDocument();

  const botao = screen.getAllByText("Atualizar")[0];
  fireEvent.click(botao);

  expect(screen.getByText("Em andamento")).toBeInTheDocument();
});
