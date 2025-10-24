import React from "react"; 
import * as ReactDOMClient from "react-dom/client"; 
 
jest.mock("react-router-dom", () => ({ BrowserRouter: ({ children }) => <div>{children}</div>, })); 
 
jest.mock("../App", () => () => <div>Mocked App</div>, { virtual: true }); 
 
jest.mock("react-dom/client", () => ({ 
  createRoot: jest.fn(() => ({ 
    render: jest.fn(), 
  })), 
})); 
 
describe("main.jsx", () => { 
  it("deve montar o App dentro do elemento root", () => { 
    document.body.innerHTML = '<div id="root"></div>'; 
 
    jest.resetModules(); 
    
    const ReactDOMClient = require("react-dom/client"); 
    const mockCreateRoot = jest.spyOn(ReactDOMClient, "createRoot"); 
 
    require("../main.jsx");
 
    expect(mockCreateRoot).toHaveBeenCalled(); 
 
    expect(document.getElementById("root")).not.toBeNull(); 
  }); 
});