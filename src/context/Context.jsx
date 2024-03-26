import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  
    const [input, setInput] = useState('');
    
  
    const onSent = async (prompt) => {
    await runChat(prompt);
  };



  const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
