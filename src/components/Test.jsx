import React, { useContext } from 'react';
import ThemeContextProvider from './ThemeContextProvider';
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';
import { LanguageProvider } from './LanguageProvider';


function Test() {
  const {theme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);

  return (
    <div>
      <p>{theme} is the Theme</p> {/* Paragraph element using context value */}
      <p>{language} is the Language</p> 
    </div>
  );
}

export default Test;