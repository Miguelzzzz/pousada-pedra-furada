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

global.TextEncoder = class TextEncoder {
  encode(input) {
    return Buffer.from(input, "utf-8");
  }
};

global.TextDecoder = class TextDecoder {
  decode(input) {
    return Buffer.from(input).toString("utf-8");
  }
};