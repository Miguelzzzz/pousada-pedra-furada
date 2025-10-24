require("@testing-library/jest-dom");
import { TextEncoder, TextDecoder } from "util"; 
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

if (!global.TextEncoder) global.TextEncoder = TextEncoder; 
if (!global.TextDecoder) global.TextDecoder = TextDecoder;