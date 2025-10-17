import React from "react"; 
import { Routes, Route, Navigate } from "react-router-dom"; 
import Layout from "./components/Layout.jsx"; 
import LoginPage from "./pages/LoginPage.jsx"; 
import TarefasPage from "./pages/TarefasPage.jsx"; 
import RelatoriosPage from "./pages/RelatoriosPage.jsx"; 
export default function App() { 
  return ( 
    <Layout> 
      <Routes> 
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/tarefas" element={<TarefasPage />} /> 
        <Route path="/relatorios" element={<RelatoriosPage />} /> 
        <Route path="*" element={<h2>Página não encontrada</h2>} /> 
      </Routes> 
    </Layout> 
  ); 
} 