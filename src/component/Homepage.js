import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import './Homepage.css';
import { Context } from './Wrapper';

function Homepage() {
  const context = useContext(Context);
  return (
    <div className="homepage">   
      <div>
        <h1 className={context.locale === 'zh-TW' ? 'chinese' : null}>
          <FormattedMessage id="app.myName" defaultMessage="Chen YouYu" />
        </h1>
        <h3 className={context.locale === 'zh-TW' ? 'chinese' : null}>
          <FormattedMessage id="app.myCity" defaultMessage="Taipei, Taiwan" />
        </h3>
      </div>
      <div className="language">
        <button className="language-select" onClick={context.selectLanguage} id="zh-TW">中</button>
        /
        <button id="en" onClick={context.selectLanguage}>En</button>
      </div>
    </div>
  )
};

export default Homepage;