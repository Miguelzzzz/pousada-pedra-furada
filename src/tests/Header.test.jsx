import { render, screen } from "@testing-library/react"; 
import { MemoryRouter } from "React-router-dom"; 
import Header from "../components/Headers.jsx"; 
 
test("deve renderizar os links de navegação", () => { 
  render( 
    <MemoryRouter> 
      <Header /> 
    </MemoryRouter> 
  ); 
 
  expect(screen.getByText("Login")).toBeInTheDocument(); 
  expect(screen.getByText("Tarefas")).toBeInTheDocument(); 
  expect(screen.getByText("Relatórios")).toBeInTheDocument(); 
});