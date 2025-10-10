require("@testing-library/jest-dom");

const originalWarn = console.warn; 
console.warn = (...args) => { 
  if ( 
    typeof args[0] === "string" && 
    args[0].includes("using an outdated JSX transform") 
  ) { 
    return; 
  } 
  originalWarn(...args); 
};