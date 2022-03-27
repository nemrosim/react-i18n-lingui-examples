import React from 'react';
import './App.css';
import { Trans } from "@lingui/macro";
import { LocaleEnum, useI18nContext } from "./providers";
import { Paragraph,JSXMacros } from "./components";
import { JSXPlurals } from "./components/Plurals";

export const App: React.FC = () => {
   const { locale, setLocale } = useI18nContext();

   return (
     <div className="App">
        <header className="App-header">
           <select value={locale} onChange={(e) => {
              setLocale(e.target.value as LocaleEnum)
           }}>
              <option value={LocaleEnum.English}>English</option>
              <option value={LocaleEnum.French}>French</option>
           </select>
           <p>
              <Trans>Edit <code>src/App.tsx</code> and save to reload.</Trans>
           </p>
           <JSXPlurals/>
           <a
             className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
           >
              <Trans>Learn React</Trans>
           </a>
        </header>
     </div>
   );
};
