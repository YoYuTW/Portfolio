import React, { useState } from "react";
import { IntlProvider } from 'react-intl';
import Chinese from '../lang/zh.json';
import English from '../lang/en.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === "zh-TW") {
  lang = Chinese;
} else {
  lang = English;
}

function Wrapper(props) {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  const selectLanguage = (e) => {
    const newLocale = e.target.id;
    setLocale(newLocale);
    if (newLocale === 'zh-TW') {
      setMessages(Chinese);
    } else {
      setMessages(English);
    }
    document.querySelector('.language-select').classList.remove('language-select');
    e.target.classList.add('language-select');
  };

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  )
};

export default Wrapper;