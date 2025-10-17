test("o arquivo de estilos globais deve ser importável", () => { 
  const css = require("../pages/styles/globals.css"); 
  expect(css).toBeDefined(); 
}); 